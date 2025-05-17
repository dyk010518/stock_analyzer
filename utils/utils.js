import yahooFinance from 'yahoo-finance2';

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

// Quarterly revenue function
export const getQuarterlyRevenue = (IS, quarter, cc) => {
  const revenue = IS.quarterlyReports[quarter].totalRevenue;
  return revenue !== "None" ? Number(revenue)*cc : undefined;
}

export const getAnalyzedResults = (reports, numYears) => {
    const numberOfQuarters = reports.IS.quarterlyReports.length;
  
    const lastRevenue = numberOfQuarters >= 4
      ? getAverage([
          getQuarterlyRevenue(reports.IS, 0, reports.currencyConversion),
          getQuarterlyRevenue(reports.IS, 1, reports.currencyConversion),
          getQuarterlyRevenue(reports.IS, 2, reports.currencyConversion),
          getQuarterlyRevenue(reports.IS, 3, reports.currencyConversion),
        ]) * 4
      : undefined;
  
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

    if (reportCurrency !== "USD") {
      try {
        const res = await fetch(
          `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${reportCurrency}&to_currency=USD&apikey=${process.env.ALPHA_API_KEY}`
        );
    
        const response = await res.json();
        const rate = response?.['Realtime Currency Exchange Rate']?.['5. Exchange Rate'];
    
        currencyConversion = Number(rate);
        if (isNaN(currencyConversion)) {
          console.warn("Exchange rate is NaN, defaulting to 1");
          currencyConversion = 1
        }
      } catch (error) {
        console.error("Failed to fetch exchange rate:", error);
      }
    }
    reports.currencyConversion = currencyConversion
    return reports
}

export const getShares = (BS, maxLookBackQuarters = 4) => {
  for (let i = 0; i <maxLookBackQuarters; i++) {
      const report = BS.quarterlyReports[i];
      if (report && report.commonStockSharesOutstanding !== "None") {
          return Number(report.commonStockSharesOutstanding);
      }
  }
  return undefined;
};


export const getDailyReturnSmart = async (symbol, errorBound) => {
  try {
    const quote = await yahooFinance.quote(symbol);
    const history = await yahooFinance.historical(symbol, {
      period1: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
      interval: '1d'
    });

    if (!history.length) {
      console.log(`No historical data for ${symbol}`);
      return;
    }

    const lastClose = history[history.length - 1].close;
    let prevClose;

    if (Math.abs(lastClose - quote.regularMarketPrice) < errorBound) {
      // last candle is today (updated post-market), so use previous candle as yesterday
      console.log("Too close")
      prevClose = history.length > 1 ? history[history.length - 2].close : null;
    } else {
      // last candle is yesterday, quote is today's live price
      prevClose = lastClose;
    }

    console.log(prevClose)

    if (prevClose == null) {
      console.log(`Not enough data to calculate return for ${symbol}`);
      return;
    }

    const dailyReturn = ((quote.regularMarketPrice - prevClose) / prevClose) * 100;

    return dailyReturn;
  } catch (err) {
    console.error(`Error fetching ${symbol}:`, err);
  }
};