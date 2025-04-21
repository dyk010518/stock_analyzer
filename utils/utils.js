export const resetInputs = () => {
    const element_ids = [
        "revenue_input_bear", "revenue_input_base", "revenue_input_bull", 
        "profitMargin_input_bear", "profitMargin_input_base", "profitMargin_input_bull",
        "FCFMargin_input_bear", "FCFMargin_input_base", "FCFMargin_input_bull",
        "PE_input_bear", "PE_input_base", "PE_input_bull",
        "PFCF_input_bear", "PFCF_input_base", "PFCF_input_bull",
        "discountRate_input_bear", "discountRate_input_base", "discountRate_input_bull"
    ]

    for(var i = 0; i < element_ids.length; i++){
        document.getElementById(element_ids[i]).value = document.getElementById(element_ids[i]).defaultValue
    }
}

export const getAnalyzedResults = (reports, numYears) => {
    const numberOfQuarters = reports.IS.quarterlyReports.length;
  
    const lastRevenue = numberOfQuarters >= 4
      ? getAverage([
          getQuarterlyRevenue(IS, 0),
          getQuarterlyRevenue(IS, 1),
          getQuarterlyRevenue(IS, 2),
          getQuarterlyRevenue(IS, 3),
        ]) * 4
      : undefined;
  
    const shares = reports.BS.quarterlyReports[0].commonStockSharesOutstanding !== "None"
      ? Number(reports.BS.quarterlyReports[0].commonStockSharesOutstanding)
      : undefined;
  
    const getInputValue = (id, isPercent = false) => {
      const val = Number(document.getElementById(id)?.value);
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

export const addCurrencyConversion = async (reports) => {
    // if the symbol doesn't exist, return reports
    if (!reports.IS.symbol) {
        return reports
    }

    let currencyConversion = 1
    const reportCurrency = reports.IS.quarterlyReports[0].reportedCurrency
    if (!reportCurrency) return reports;

    if (reportCurrency !== "USD") {
        const res = await fetch(
            `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${reportCurrency}&to_currency=USD&apikey=${process.env.ALPHA_API_KEY}`
        )
        const response = await res.json()
        currencyConversion = Number(response['Realtime Currency Exchange Rate']['5. Exchange Rate'])
    }
    reports.currencyConversion = currencyConversion
    return reports
}