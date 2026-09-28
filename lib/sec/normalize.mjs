const DAY = 86400000;
const FORMS = new Set(['10-K', '10-K/A', '10-Q', '10-Q/A']);
const REVENUE_TAGS = [
  'RevenueFromContractWithCustomerExcludingAssessedTax',
  'RevenueFromContractWithCustomerIncludingAssessedTax',
  'Revenues',
  'SalesRevenueNet',
];

const days = (start, end) => (Date.parse(end) - Date.parse(start)) / DAY + 1;
const isQuarter = (start, end) => days(start, end) >= 70 && days(start, end) <= 110;
const nextDay = (date) => new Date(Date.parse(date) + DAY).toISOString().slice(0, 10);
const filingOrder = (a, b) => (a.filed || '').localeCompare(b.filed || '') ||
  (a.accn || '').localeCompare(b.accn || '');

function records(facts, taxonomy, tag, unit) {
  return (facts?.[taxonomy]?.[tag]?.units?.[unit] || []).filter(record =>
    FORMS.has(record.form) && Number.isFinite(record.val) &&
    Number.isFinite(Date.parse(record.end)) && Number.isFinite(Date.parse(record.filed))
  );
}

// fy/fp describe the filing, not necessarily the comparative period in a fact.
// Use actual start/end dates, preserving fiscal calendars and 53-week years.
export function quarterlyValues(input) {
  const durations = input.filter(record =>
    record.start && days(record.start, record.end) > 0 && days(record.start, record.end) <= 385
  );
  const latest = new Map();
  for (const record of durations) {
    const key = `${record.start}/${record.end}`;
    if (!latest.has(key) || filingOrder(record, latest.get(key)) > 0) latest.set(key, record);
  }

  const quarters = new Map();
  const add = (record) => {
    const previous = quarters.get(record.end);
    // Prefer a directly reported quarter to a subtraction for the same period.
    if (!previous || (previous.derived && !record.derived) ||
        (previous.derived === record.derived && filingOrder(record, previous) > 0)) {
      quarters.set(record.end, record);
    }
  };

  for (const record of latest.values()) {
    if (isQuarter(record.start, record.end)) {
      add({ ...record, derived: false });
      continue;
    }

    // Subtract cumulative values only within the same concept, unit and fiscal
    // year. Prefer comparatives in the same filing; never use a future revision.
    const prior = durations.filter(candidate =>
      candidate.start === record.start && candidate.end < record.end &&
      isQuarter(nextDay(candidate.end), record.end) && candidate.filed <= record.filed
    ).sort((a, b) =>
      Number(b.accn === record.accn) - Number(a.accn === record.accn) || filingOrder(b, a)
    )[0];
    if (prior) {
      add({ ...record, start: nextDay(prior.end), val: record.val - prior.val, derived: true });
    }
  }
  return quarters;
}

function durationSeries(facts, tags) {
  const series = new Map();
  for (const tag of tags) {
    for (const [end, record] of quarterlyValues(records(facts, 'us-gaap', tag, 'USD'))) {
      // Fallback concepts fill gaps; they are never subtracted from each other.
      if (!series.has(end)) series.set(end, record);
    }
  }
  return series;
}

function sharesForQuarter(facts, end) {
  for (const [taxonomy, tag] of [
    ['us-gaap', 'CommonStockSharesOutstanding'],
    ['dei', 'EntityCommonStockSharesOutstanding'],
  ]) {
    const candidates = records(facts, taxonomy, tag, 'shares').filter(record =>
      !record.start && record.val > 0 && record.end <= end && days(record.end, end) <= 100
    ).sort((a, b) => b.end.localeCompare(a.end) || filingOrder(b, a));
    if (candidates.length) return candidates[0].val;
  }
  return null;
}

export function normalizeCompanyFacts(companyFacts, company) {
  const facts = companyFacts?.facts;
  const revenue = durationSeries(facts, REVENUE_TAGS);
  const income = durationSeries(facts, ['NetIncomeLoss']);
  const operating = durationSeries(facts, ['NetCashProvidedByUsedInOperatingActivities']);
  const capex = durationSeries(facts, [
    'PaymentsToAcquirePropertyPlantAndEquipment',
    // Includes software and other productive intangibles (used by Amazon).
    'PaymentsToAcquireProductiveAssets',
  ]);
  if (!revenue.size) return null;

  // One shared timeline keeps cash flow and income aligned when a tag is absent.
  const periods = new Map([...income, ...revenue]);
  const timeline = [...periods.keys()].sort().reverse().slice(0, 40);
  const value = (series, end) => {
    const record = series.get(end);
    return record?.start === periods.get(end).start ? record.val : null;
  };
  const base = (end) => ({
    fiscalDateEnding: end,
    periodStart: periods.get(end).start,
    reportedCurrency: 'USD',
  });

  return {
    IS: {
      symbol: company.symbol,
      quarterlyReports: timeline.map(end => ({
        ...base(end), totalRevenue: value(revenue, end), netIncome: value(income, end),
      })),
    },
    CF: {
      quarterlyReports: timeline.map(end => ({
        ...base(end), operatingCashflow: value(operating, end), capitalExpenditures: value(capex, end),
      })),
    },
    BS: {
      quarterlyReports: timeline.map(end => ({
        ...base(end), commonStockSharesOutstanding: sharesForQuarter(facts, end),
      })),
    },
    SI: {
      Symbol: company.symbol,
      Name: companyFacts.entityName || company.name,
      Exchange: company.exchange || 'US',
      Currency: 'USD',
    },
    currencyConversion: 1,
    source: 'SEC EDGAR',
    cik: String(company.cik).padStart(10, '0'),
  };
}
