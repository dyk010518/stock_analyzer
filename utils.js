export const resetInputs = () => {
    const element_ids = [
        "revenue_input_low", "revenue_input_mid", "revenue_input_high", 
        "ProfitMargin_input_low", "ProfitMargin_input_mid", "ProfitMargin_input_high",
        "FCFMargin_input_low", "FCFMargin_input_mid", "FCFMargin_input_high",
        "PE_input_low", "PE_input_mid", "PE_input_high",
        "PFCF_input_low", "PFCF_input_mid", "PFCF_input_high",
        "AnnualReturn_input_low", "AnnualReturn_input_mid", "AnnualReturn_input_high"
    ]

    for(var i = 0; i < element_ids.length; i++){
        document.getElementById(element_ids[i]).value = document.getElementById(element_ids[i]).defaultValue
    }
}

export const getAnalyzedResults = (IS, BS) => {
    const number_of_quarters = IS.quarterlyReports.length
    const last_revenue = number_of_quarters >= 4 ? getAverage([getQuarterlyRevenue(IS, 0), getQuarterlyRevenue(IS, 1), getQuarterlyRevenue(IS, 2), getQuarterlyRevenue(IS, 3)])*4 : undefined
    const shares = BS.quarterlyReports[0].commonStockSharesOutstanding != "None" ? Number(BS.quarterlyReports[0].commonStockSharesOutstanding) : undefined
    const [growth_low, growth_mid, growth_high] = [Number(document.getElementById("revenue_input_low").value)/100, Number(document.getElementById("revenue_input_mid").value)/100, Number(document.getElementById("revenue_input_high").value)/100] 
    const [p_margin_low, p_margin_mid, p_margin_high] = [Number(document.getElementById("ProfitMargin_input_low").value)/100, Number(document.getElementById("ProfitMargin_input_mid").value)/100, Number(document.getElementById("ProfitMargin_input_high").value)/100] 
    const [fcf_margin_low, fcf_margin_mid, fcf_margin_high] = [Number(document.getElementById("FCFMargin_input_low").value)/100, Number(document.getElementById("FCFMargin_input_mid").value)/100, Number(document.getElementById("FCFMargin_input_high").value)/100] 
    const [pe_low, pe_mid, pe_high] = [Number(document.getElementById("PE_input_low").value), Number(document.getElementById("PE_input_mid").value), Number(document.getElementById("PE_input_high").value)] 
    const [pfcf_low, pfcf_mid, pfcf_high] = [Number(document.getElementById("PFCF_input_low").value), Number(document.getElementById("PFCF_input_mid").value), Number(document.getElementById("PFCF_input_high").value)] 
    const [discount_low, discount_mid, discount_high] = [Number(document.getElementById("AnnualReturn_input_low").value)/100, Number(document.getElementById("AnnualReturn_input_mid").value)/100, Number(document.getElementById("AnnualReturn_input_high").value)/100] 
    
    return {
        'earningsVals': [getDiscountedVal(last_revenue, shares, growth_low, p_margin_low, pe_low, discount_low), getDiscountedVal(last_revenue, shares, growth_mid, p_margin_mid, pe_mid, discount_mid), getDiscountedVal(last_revenue, shares, growth_high, p_margin_high, pe_high, discount_high)],
        'fcfVals': [getDiscountedVal(last_revenue, shares, growth_low, fcf_margin_low, pfcf_low, discount_low), getDiscountedVal(last_revenue, shares, growth_mid, fcf_margin_mid, pfcf_mid, discount_mid), getDiscountedVal(last_revenue, shares, growth_high, fcf_margin_high, pfcf_high, discount_high)],
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

const getDiscountedVal = (revenue, shares, growth, margin, multiple, discount) => {
    let rev = revenue
    let cumulative_val = 0
    for(var time = 1; time <= 11; time++){
        rev *= (1+growth)
        let per_share = rev*margin/shares
        if (time == 11) per_share *= multiple
        cumulative_val += per_share/(1+discount)**time
    }
    return cumulative_val.toFixed(2)
}

const getQuarterlyRevenue = (IS, quarter) => {
    return IS.quarterlyReports[quarter].totalRevenue != "None" ? Number(IS.quarterlyReports[quarter].totalRevenue) : undefined
}