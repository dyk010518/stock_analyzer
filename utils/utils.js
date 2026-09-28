export const resetInputElements = () => {
    const element_ids = [
        "revenue_input_bear", "revenue_input_base", "revenue_input_bull", 
        "profitMargin_input_bear", "profitMargin_input_base", "profitMargin_input_bull",
        "FCFMargin_input_bear", "FCFMargin_input_base", "FCFMargin_input_bull",
        "PE_input_bear", "PE_input_base", "PE_input_bull",
        "PFCF_input_bear", "PFCF_input_base", "PFCF_input_bull",
        "discountRate_input_bear", "discountRate_input_base", "discountRate_input_bull"
    ]

    for (let i = 0; i < element_ids.length; i++) {
      const el = document.getElementById(element_ids[i]);
      if (el) {
          el.value = "";
      }
  }
}

export const toFinancialNumber = value => {
  if (value === null || value === undefined || value === "None" || value === "") return undefined;
  const number = Number(value);
  return Number.isFinite(number) ? number : undefined;
};

export const hasContiguousQuarters = (data, count) => {
  const reports = data?.quarterlyReports || [];
  if (reports.length < count) return false;
  for (let i = 0; i < count - 1; i++) {
    const newer = reports[i];
    const older = reports[i + 1];
    const gap = (Date.parse(newer.fiscalDateEnding) - Date.parse(older.fiscalDateEnding)) / 86400000;
    // Include 16/17-week retail quarters while still rejecting missing quarters.
    if (!Number.isFinite(gap) || gap < 70 || gap > 119) return false;
    if (newer.periodStart && Date.parse(newer.periodStart) - Date.parse(older.fiscalDateEnding) !== 86400000) return false;
  }
  return true;
};

export const getQuarterlyRevenue = (IS, quarter, conversion) => {
  const revenue = toFinancialNumber(IS.quarterlyReports[quarter]?.totalRevenue);
  return revenue !== undefined ? revenue * conversion : undefined;
};

export const getAnalyzedResults = (reports, numYears) => {
    const revenues = Array.from({ length: 4 }, (_, q) => getQuarterlyRevenue(reports.IS, q, reports.currencyConversion));
    const lastRevenue = hasContiguousQuarters(reports.IS, 4) && revenues.every(Number.isFinite)
      ? revenues.reduce((sum, revenue) => sum + revenue, 0) : undefined;

    const shares = getShares(reports.BS);
  
    const getInputValue = (id, isPercent = false) => {
      let val = 0
      if (document.getElementById(id)?.value != "") {
        val = Number(document.getElementById(id)?.value);
      }
      return isPercent ? val / 100 : val;
    };

    const growthRates = ["bear", "base", "bull"].map(key =>
      getInputValue(`revenue_input_${key}`, true)
    );
    const profitMargins = ["bear", "base", "bull"].map(key =>
      getInputValue(`profitMargin_input_${key}`, true)
    );
    const fcfMargins = ["bear", "base", "bull"].map(key =>
      getInputValue(`FCFMargin_input_${key}`, true)
    );
    const peRatios = ["bear", "base", "bull"].map(key =>
      getInputValue(`PE_input_${key}`)
    );
    const pfcfRatios = ["bear", "base", "bull"].map(key =>
      getInputValue(`PFCF_input_${key}`)
    );
    const discountRates = ["bear", "base", "bull"].map(key =>
      getInputValue(`discountRate_input_${key}`, true)
    );
  
    const earningsVals = growthRates.map((growth, i) =>
      getDiscountedVal(lastRevenue, shares, growth, profitMargins[i], peRatios[i], discountRates[i], numYears)
    );
    const fcfVals = growthRates.map((growth, i) =>
      getDiscountedVal(lastRevenue, shares, growth, fcfMargins[i], pfcfRatios[i], discountRates[i], numYears)
    );

    return {
      earningsVals,
      fcfVals,
    };
}

export const getAverage = (input_array) => {
    let sum = 0
    let irrelevant = 0
    for(var i = 0; i < input_array.length; i++){
        if(typeof input_array[i] == "number") sum += input_array[i]
        if(typeof input_array[i] != "number") irrelevant ++
    }
    return input_array.length != irrelevant ? sum/(input_array.length-irrelevant) : undefined
}

const getDiscountedVal = (revenue, shares, growth, margin, multiple, discount, numYears) => {
    if (![revenue, shares, growth, margin, multiple, discount, numYears].every(Number.isFinite) || shares <= 0) return "-";
    let rev = revenue
    let cumulative_val = 0

    for (var time = 1; time <= numYears; time++) {
        rev *= (1 + growth)
        let per_share = rev * margin / shares
        cumulative_val += per_share / Math.pow(1 + discount, time)
    }
    
    let terminal_value = (rev * margin / shares) * multiple
    cumulative_val += terminal_value / Math.pow(1 + discount, numYears)

    return cumulative_val.toFixed(2)
}

export const getShares = (BS) => {
  // Do not silently use a stale share count from an earlier quarter.
  const shares = toFinancialNumber(BS?.quarterlyReports?.[0]?.commonStockSharesOutstanding);
  if (shares > 0) return shares;
  const currentShares = toFinancialNumber(BS?.currentSharesOutstanding);
  return currentShares > 0 ? currentShares : undefined;
};
