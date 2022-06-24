import stockStatsStyles from '../../styles/StockStats.module.css'
import { getAverage } from '../StockAnalyzer'


const FCFMargin = (props) => {
    const FCFMargins = getFCFMargins(props.reports.IS, props.reports.CF)   

    return (
        <thead>
            <tr className={stockStatsStyles.row}>
                <th className={stockStatsStyles.col}>
                    <p1>Free Cash Flow Margin (%)</p1>
                </th>
                <th className={stockStatsStyles.col}>
                    <p2>{FCFMargins[0]}%</p2>
                    <p2>{FCFMargins[1]}%</p2>
                    <p2>{FCFMargins[2]}%</p2>
                </th>
                <th className={stockStatsStyles.col}>
                    <div><input type="number" id="FCFMargin_input_1" name="quantity" /></div>
                    <div><input type="number" id="FCFMargin_input_2" name="quantity" /></div>
                    <div><input type="number" id="FCFMargin_input_4" name="quantity" /></div>
                </th>
            </tr>
        </thead>
    )
}

const getFCFMargins = (IS, CF) => {
    const number_of_quarters = Math.min(IS.quarterlyReports.length, CF.quarterlyReports.length)
    const year_one = number_of_quarters >= 4 ? getAverage([getQuarterlyFCFMargin(IS, CF, 0), getQuarterlyFCFMargin(IS, CF, 1), getQuarterlyFCFMargin(IS, CF, 2), getQuarterlyFCFMargin(IS, CF, 3)]) : undefined
    const year_two = number_of_quarters >= 8 ? getAverage([getQuarterlyFCFMargin(IS, CF, 4), getQuarterlyFCFMargin(IS, CF, 5), getQuarterlyFCFMargin(IS, CF, 6), getQuarterlyFCFMargin(IS, CF, 7)]) : undefined
    const year_three = number_of_quarters >= 12 ? getAverage([getQuarterlyFCFMargin(IS, CF, 8), getQuarterlyFCFMargin(IS, CF, 9), getQuarterlyFCFMargin(IS, CF, 10), getQuarterlyFCFMargin(IS, CF, 11)]) : undefined
    const year_four = number_of_quarters >= 16 ? getAverage([getQuarterlyFCFMargin(IS, CF, 12), getQuarterlyFCFMargin(IS, CF, 13), getQuarterlyFCFMargin(IS, CF, 14), getQuarterlyFCFMargin(IS, CF, 15)]) : undefined

    const fm_one = year_one && year_two ? (year_one*100).toFixed(2) : "N/A"
    const fm_two = year_one && year_two ? (getAverage([year_one, year_two])*100).toFixed(2) : "N/A"
    const fm_four = year_one && year_two && year_three && year_four ? (getAverage([year_one, year_two, year_three, year_four])*100).toFixed(2) : "N/A"

    return [fm_one, fm_two, fm_four]
}

const getQuarterlyFCFMargin = (IS, CF, quarter) => {
    const quarterFCF = getQuarterFCF(CF, quarter)
    return IS.quarterlyReports[quarter].totalRevenue != "None" && quarterFCF ? Number(quarterFCF/IS.quarterlyReports[quarter].totalRevenue) : undefined
}

const getQuarterFCF = (CF, quarter) => {
    const OpCF = CF.quarterlyReports[quarter].operatingCashflow != "None" ? Number(CF.quarterlyReports[quarter].operatingCashflow) : undefined
    const CapEx = CF.quarterlyReports[quarter].capitalExpenditures != "None" ? Number(CF.quarterlyReports[quarter].capitalExpenditures) : 0
    return OpCF ? OpCF-CapEx : undefined
}

export default FCFMargin

const asd = {
    1: 123,
    2: 234
}

{1}