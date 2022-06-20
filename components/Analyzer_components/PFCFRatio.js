import stockStatsStyles from '../../styles/StockStats.module.css'

const PFCFRatio = ({reports}) => {
    const FCFRatio = getFCFRatio(reports.CF, reports.BS, reports.DA)

    return (
        <thead>
            <tr className={stockStatsStyles.row}>
                <th className={stockStatsStyles.col}>
                    <p1>P/FCF Ratio</p1>
                </th>
                <th className={stockStatsStyles.col}>
                    <p2>{FCFRatio}</p2>
                    <p2>-</p2>
                    <p2>-</p2>
                </th>
                <th className={stockStatsStyles.col}>
                    <div><input type="number" id="quantity" name="quantity" min="1" max="5" /></div>
                    <div><input type="number" id="quantity" name="quantity" min="1" max="5" /></div>
                    <div><input type="number" id="quantity" name="quantity" min="1" max="5" /></div>
                </th>
            </tr>
        </thead>
    )
}

const getFCFRatio = (CF, BS, DA) => {
    const number_of_quarters = CF.quarterlyReports.length
    if(number_of_quarters == 0) return "NA"

    const cash_flow = getAnnualCF(CF)
    const shares = BS.quarterlyReports[0].commonStockSharesOutstanding != "None" ? Number(BS.quarterlyReports[0].commonStockSharesOutstanding) : undefined
    const sharePrice = Number(DA["Time Series (Daily)"][Object.keys(DA["Time Series (Daily)"])[0]]["5. adjusted close"])

    return cash_flow != 0 && shares ? (sharePrice*shares/cash_flow).toFixed(2) : "NA"
}


const getAnnualCF = (CF) => {
    const start_quarter = Math.min(4, CF.quarterlyReports.length)
    let cash_flow = 0
    for(var quarter = 0; quarter < start_quarter; quarter ++){
        const OpCF = CF.quarterlyReports[quarter].operatingCashflow != "None" ? Number(CF.quarterlyReports[quarter].operatingCashflow) : undefined
        const CapEx = CF.quarterlyReports[quarter].capitalExpenditures != "None" ? Number(CF.quarterlyReports[quarter].capitalExpenditures) : 0
        if(OpCF) cash_flow = cash_flow + (OpCF-CapEx)
    }
    return cash_flow
}

export default PFCFRatio