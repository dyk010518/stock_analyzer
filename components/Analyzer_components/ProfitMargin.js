import stockStatsStyles from '../../styles/StockStats.module.css'
import { getAverage } from '../StockAnalyzer'


const ProfitMargin = (props) => {
    const profitMargins = getProfitMargins(props.reports.IS)   
    
    return (
        <thead>
            <tr className={stockStatsStyles.row}>
                <th className={stockStatsStyles.col}>
                    <p1>Profit Margin (%)</p1>
                </th>
                <th className={stockStatsStyles.col}>
                    <p2>{profitMargins[0]}%</p2>
                    <p2>{profitMargins[1]}%</p2>
                    <p2>{profitMargins[2]}%</p2>
                </th>
                <th className={stockStatsStyles.col}>
                    <div><input type="number" id="ProfitMargin_input_1" name="quantity" /></div>
                    <div><input type="number" id="ProfitMargin_input_2" name="quantity" /></div>
                    <div><input type="number" id="ProfitMargin_input_4" name="quantity" /></div>
                </th>
            </tr>
        </thead>
    )
}

const getProfitMargins = (IS) => {
    const number_of_quarters = IS.quarterlyReports.length
    const year_one = number_of_quarters >= 4 ? getAverage([getQuarterProfitMargin(IS, 0), getQuarterProfitMargin(IS, 1), getQuarterProfitMargin(IS, 2), getQuarterProfitMargin(IS, 3)]) : undefined
    const year_two = number_of_quarters >= 8 ? getAverage([getQuarterProfitMargin(IS, 4), getQuarterProfitMargin(IS, 5), getQuarterProfitMargin(IS, 6), getQuarterProfitMargin(IS, 7)]) : undefined
    const year_three = number_of_quarters >= 12 ? getAverage([getQuarterProfitMargin(IS, 8), getQuarterProfitMargin(IS, 9), getQuarterProfitMargin(IS, 10), getQuarterProfitMargin(IS, 11)]) : undefined
    const year_four = number_of_quarters >= 16 ? getAverage([getQuarterProfitMargin(IS, 12), getQuarterProfitMargin(IS, 13), getQuarterProfitMargin(IS, 14), getQuarterProfitMargin(IS, 15)]) : undefined

    const pm_one = year_one && year_two ? (year_one*100).toFixed(2) : "N/A"
    const pm_two = year_one && year_two ? (getAverage([year_one, year_two])*100).toFixed(2) : "N/A"
    const pm_four = year_one && year_two && year_three && year_four ? (getAverage([year_one, year_two, year_three, year_four])*100).toFixed(2) : "N/A"

    return [pm_one, pm_two, pm_four]
}

const getQuarterProfitMargin = (IS, quarter) => {
    return IS.quarterlyReports[quarter].totalRevenue != "None" && IS.quarterlyReports[quarter].netIncome != "None" ? Number(IS.quarterlyReports[quarter].netIncome/IS.quarterlyReports[quarter].totalRevenue) : undefined
}

export default ProfitMargin