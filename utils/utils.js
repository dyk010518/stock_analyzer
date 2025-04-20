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

export const getAnalyzedResults = (IS, BS, numYears) => {
    const number_of_quarters = IS.quarterlyReports.length
    const last_revenue = number_of_quarters >= 4 ? getAverage([getQuarterlyRevenue(IS, 0), getQuarterlyRevenue(IS, 1), getQuarterlyRevenue(IS, 2), getQuarterlyRevenue(IS, 3)])*4 : undefined
    const shares = BS.quarterlyReports[0].commonStockSharesOutstanding != "None" ? Number(BS.quarterlyReports[0].commonStockSharesOutstanding) : undefined
    const [growth_bear, growth_base, growth_bull] = [Number(document.getElementById("revenue_input_bear").value)/100, Number(document.getElementById("revenue_input_base").value)/100, Number(document.getElementById("revenue_input_bull").value)/100] 
    const [p_margin_bear, p_margin_base, p_margin_bull] = [Number(document.getElementById("profitMargin_input_bear").value)/100, Number(document.getElementById("profitMargin_input_base").value)/100, Number(document.getElementById("profitMargin_input_bull").value)/100] 
    const [fcf_margin_bear, fcf_margin_base, fcf_margin_bull] = [Number(document.getElementById("FCFMargin_input_bear").value)/100, Number(document.getElementById("FCFMargin_input_base").value)/100, Number(document.getElementById("FCFMargin_input_bull").value)/100] 
    const [pe_bear, pe_base, pe_bull] = [Number(document.getElementById("PE_input_bear").value), Number(document.getElementById("PE_input_base").value), Number(document.getElementById("PE_input_bull").value)] 
    const [pfcf_bear, pfcf_base, pfcf_bull] = [Number(document.getElementById("PFCF_input_bear").value), Number(document.getElementById("PFCF_input_base").value), Number(document.getElementById("PFCF_input_bull").value)] 
    const [discount_bear, discount_base, discount_bull] = [Number(document.getElementById("discountRate_input_bear").value)/100, Number(document.getElementById("discountRate_input_base").value)/100, Number(document.getElementById("discountRate_input_bull").value)/100] 
    
    return {
        'earningsVals': [getDiscountedVal(last_revenue, shares, growth_bear, p_margin_bear, pe_bear, discount_bear, numYears),
                         getDiscountedVal(last_revenue, shares, growth_base, p_margin_base, pe_base, discount_base, numYears),
                         getDiscountedVal(last_revenue, shares, growth_bull, p_margin_bull, pe_bull, discount_bull, numYears)],
        'fcfVals': [getDiscountedVal(last_revenue, shares, growth_bear, fcf_margin_bear, pfcf_bear, discount_bear, numYears), 
                    getDiscountedVal(last_revenue, shares, growth_base, fcf_margin_base, pfcf_base, discount_base, numYears),
                    getDiscountedVal(last_revenue, shares, growth_bull, fcf_margin_bull, pfcf_bull, discount_bull, numYears)],
    }
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

const getQuarterlyRevenue = (IS, quarter) => {
    return IS.quarterlyReports[quarter].totalRevenue != "None" ? Number(IS.quarterlyReports[quarter].totalRevenue) : undefined
}