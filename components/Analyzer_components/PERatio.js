import stockStatsStyles from '../../styles/StockStats.module.css'
import { getAverage } from '../StockAnalyzer'

const PERatio = ({reports}) => {
    const PERatio = getPERatio(reports.IS, reports.BS, reports.DA)

    return (
        <thead>
            <tr className={stockStatsStyles.row}>
                <th className={stockStatsStyles.col}>
                    <p1>P/E Ratio</p1>
                </th>
                <th className={stockStatsStyles.col}>
                    <p2>{PERatio}</p2>
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

const getPERatio = (IS, BS, DA) => {
    const number_of_quarters = IS.quarterlyReports.length
    if(number_of_quarters == 0) return "NA"

    const earning = getAnnualEarning(IS)
    const shares = BS.quarterlyReports[0].commonStockSharesOutstanding != "None" ? Number(BS.quarterlyReports[0].commonStockSharesOutstanding) : undefined
    const sharePrice = Number(DA["Time Series (Daily)"][Object.keys(DA["Time Series (Daily)"])[0]]["5. adjusted close"])

    return earning != 0 && shares ? (sharePrice*shares/earning).toFixed(2) : "NA"
}


const getAnnualEarning = (IS) => {
    const start_quarter = Math.min(4, IS.quarterlyReports.length)
    let earnings = 0
    for(var quarter = 0; quarter < start_quarter; quarter ++){
        if(IS.quarterlyReports[quarter].netIncome != "None") earnings = earnings + Number(IS.quarterlyReports[quarter].netIncome)
    }
    return earnings
}

export default PERatio