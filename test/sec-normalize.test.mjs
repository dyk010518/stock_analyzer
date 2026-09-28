import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { normalizeCompanyFacts, quarterlyValues } from '../lib/sec/normalize.mjs';
import { getFCFRatio, getPERatio, getRevenueNumbers, getProfitMargins, getFCFMargins } from '../lib/finance.js';
import { getAnalyzedResults } from '../utils/utils.js';

const apple = JSON.parse(readFileSync(new URL('./fixtures/aapl-companyfacts.json', import.meta.url)));
const company = { symbol: 'AAPL', cik: 320193, name: 'Apple', exchange: 'Nasdaq' };
const fact = (start, end, val, overrides = {}) => ({ start, end, val, filed: '2025-02-01', accn: 'annual', form: '10-K', fy: 2024, fp: 'FY', ...overrides });

// Annual 160 less nine-month 90 is Q4 70; the cumulative values must not
// become four separate quarters of 10, 30, 90 and 160.
test('derives discrete quarters from cumulative cash flow, including Q4', () => {
  const quarters = quarterlyValues([
    fact('2024-01-01', '2024-03-31', 10),
    fact('2024-01-01', '2024-06-30', 30),
    fact('2024-01-01', '2024-09-30', 90),
    fact('2024-01-01', '2024-12-31', 160),
  ]);
  assert.deepEqual([...quarters.values()].map(r => r.val), [10, 20, 60, 70]);
  assert.equal(quarters.get('2024-12-31').start, '2024-10-01');
});

test('does not invent Q4 without a nine-month fact or subtract unrelated fiscal years', () => {
  assert.equal(quarterlyValues([
    fact('2024-01-01', '2024-06-30', 30),
    fact('2024-01-01', '2024-12-31', 160),
    fact('2023-01-01', '2024-09-30', 90),
  ]).size, 0);
});

test('selects amended direct quarters and uses same-filing comparatives for subtraction', () => {
  const quarters = quarterlyValues([
    fact('2024-01-01', '2024-03-31', 10, { accn: 'original', filed: '2024-04-30' }),
    fact('2024-01-01', '2024-03-31', 12, { accn: 'amendment', filed: '2024-05-01', form: '10-Q/A' }),
    fact('2024-01-01', '2024-06-30', 30, { accn: 'original', filed: '2024-07-30' }),
    fact('2024-01-01', '2024-06-30', 35, { accn: 'future', filed: '2026-01-01' }),
    fact('2024-01-01', '2024-09-30', 50, { accn: 'original', filed: '2024-10-30' }),
  ]);
  assert.equal(quarters.get('2024-03-31').val, 12);
  assert.equal(quarters.get('2024-09-30').val, 20);
});

test('prefers directly reported quarters over derived quarters', () => {
  const quarters = quarterlyValues([
    fact('2024-01-01', '2024-03-31', 10),
    fact('2024-01-01', '2024-06-30', 30),
    fact('2024-04-01', '2024-06-30', 21),
  ]);
  assert.equal(quarters.get('2024-06-30').val, 21);
});

test('handles a 53-week fiscal year without discarding the longer quarter', () => {
  const quarters = quarterlyValues([
    fact('2023-12-31', '2024-09-28', 90),
    fact('2023-12-31', '2025-01-04', 130),
  ]);
  assert.equal(quarters.get('2025-01-04').val, 40);
  assert.equal(quarters.get('2025-01-04').start, '2024-09-29');
});

test('real Apple facts produce aligned quarters and fiscal Q4, with no calendar-year assumptions', () => {
  const reports = normalizeCompanyFacts(apple, company);
  const q4 = reports.IS.quarterlyReports.find(r => r.fiscalDateEnding === '2025-09-27');
  const cash = reports.CF.quarterlyReports.find(r => r.fiscalDateEnding === '2025-09-27');
  assert.equal(q4.totalRevenue, 102466000000);
  assert.equal(q4.netIncome, 27466000000);
  assert.equal(q4.periodStart, '2025-06-29');
  assert.equal(cash.operatingCashflow, 29728000000);
  assert.equal(cash.capitalExpenditures, 3242000000);
  assert.deepEqual(reports.IS.quarterlyReports.map(r => r.fiscalDateEnding), reports.CF.quarterlyReports.map(r => r.fiscalDateEnding));
  assert.equal(reports.BS.quarterlyReports[0].commonStockSharesOutstanding, 14608963000);
  assert.equal(getFCFRatio(reports.CF, reports.BS, { c: 200 }, 1), '21.38');
  assert.equal(getPERatio(reports.IS, reports.BS, { c: 200 }, 1), '22.66');
});

test('missing cash flow remains missing without shifting income periods or substituting zero', () => {
  const input = structuredClone(apple);
  delete input.facts['us-gaap'].PaymentsToAcquirePropertyPlantAndEquipment;
  const reports = normalizeCompanyFacts(input, company);
  assert.equal(reports.CF.quarterlyReports[0].capitalExpenditures, null);
  assert.equal(getFCFRatio(reports.CF, reports.BS, { c: 200 }, 1), '-');
  assert.deepEqual(getFCFMargins(reports.IS, reports.CF, 1), ['-', '-', '-']);
});

test('uses productive-asset capex when the company reports that standard tag', () => {
  const input = structuredClone(apple);
  input.facts['us-gaap'].PaymentsToAcquireProductiveAssets = input.facts['us-gaap'].PaymentsToAcquirePropertyPlantAndEquipment;
  delete input.facts['us-gaap'].PaymentsToAcquirePropertyPlantAndEquipment;
  const reports = normalizeCompanyFacts(input, company);
  assert.equal(reports.CF.quarterlyReports[0].capitalExpenditures, 2455000000);
});

test('unsupported currencies, custom-only tags, and annual-only filings are not misrepresented', () => {
  for (const input of [
    { facts: { 'ifrs-full': apple.facts['us-gaap'] } },
    { facts: { 'us-gaap': { Revenues: { units: { EUR: [fact('2024-01-01', '2024-03-31', 20)] } } } } },
    { facts: { 'us-gaap': { Revenues: { units: { USD: [fact('2024-01-01', '2024-12-31', 20)] } } } } },
  ]) assert.equal(normalizeCompanyFacts(input, company), null);
});

test('fallback tags fill history without mixing concepts to derive a quarter', () => {
  const input = { facts: { 'us-gaap': {
    RevenueFromContractWithCustomerExcludingAssessedTax: { units: { USD: [fact('2024-01-01', '2024-06-30', 200)] } },
    Revenues: { units: { USD: [fact('2024-01-01', '2024-03-31', 90)] } },
  } } };
  const reports = normalizeCompanyFacts(input, company);
  assert.equal(reports.IS.quarterlyReports.length, 1);
  assert.equal(reports.IS.quarterlyReports[0].totalRevenue, 90);
});

function history() {
  const quarterlyReports = Array.from({ length: 24 }, (_, i) => {
    const year = 2025 - Math.floor(i / 4);
    const quarter = 3 - i % 4;
    return {
      fiscalDateEnding: new Date(Date.UTC(year, (quarter + 1) * 3, 0)).toISOString().slice(0, 10),
      periodStart: new Date(Date.UTC(year, quarter * 3, 1)).toISOString().slice(0, 10),
      totalRevenue: 100 * (1.1 ** (5 - Math.floor(i / 4))), netIncome: 0,
      operatingCashflow: 5, capitalExpenditures: 5,
    };
  });
  return { quarterlyReports };
}

test('five-year growth needs six consecutive years; zero margins are valid', () => {
  const reports = history();
  assert.deepEqual(getRevenueNumbers(reports, 1), ['10.00', '10.00', '10.00']);
  assert.deepEqual(getProfitMargins(reports), ['0.00', '0.00', '0.00']);
  assert.deepEqual(getFCFMargins(reports, reports, 1), ['0.00', '0.00', '0.00']);
  reports.quarterlyReports.pop();
  assert.equal(getRevenueNumbers(reports, 1)[2], '-');
});

test('gaps and incomplete trailing years cannot become annualized ratios or growth', () => {
  const reports = history();
  reports.quarterlyReports.splice(1, 1);
  assert.deepEqual(getRevenueNumbers(reports, 1), ['-', '-', '-']);
  assert.equal(getPERatio(reports, { quarterlyReports: [{ commonStockSharesOutstanding: 5 }] }, { c: 20 }, 1), '-');
  const appleReports = normalizeCompanyFacts(apple, company);
  assert.equal(getPERatio(appleReports.IS, appleReports.BS, null, 1), '-');
  assert.equal(getPERatio(appleReports.IS, { quarterlyReports: [{ commonStockSharesOutstanding: null }] }, { c: 20 }, 1), '-');
});

test('valuation outputs a dash, not NaN, when SEC data is incomplete', () => {
  const previous = globalThis.document;
  globalThis.document = { getElementById: () => ({ value: '10' }) };
  try {
    const reports = normalizeCompanyFacts(apple, company);
    reports.IS.quarterlyReports[0].totalRevenue = null;
    assert.deepEqual(getAnalyzedResults(reports, 5), { earningsVals: ['-', '-', '-'], fcfVals: ['-', '-', '-'] });
  } finally { globalThis.document = previous; }
});
