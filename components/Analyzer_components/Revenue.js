import stockStatsStyles from '../../styles/StockStats.module.css'
import { getAverage } from '../../utils'

const Revenue = (props) => {
    const revenueGrowth = getRevenueNumbers(props.reports.IS)

    return (
        <thead>
            <tr className={stockStatsStyles.row}>
                <th className={stockStatsStyles.col}>
                    <p1>Annual Revenue Growth (%)</p1>
                </th>
                <th className={stockStatsStyles.col}>
                    <p2>{revenueGrowth[0]}%</p2>
                    <p2>{revenueGrowth[1]}%</p2>
                    <p2>{revenueGrowth[2]}%</p2>
                </th>
                <th className={stockStatsStyles.col}>
                    <div><input type="number" id="revenue_input_low" name="quantity" />  %</div>
                    <div><input type="number" id="revenue_input_mid" name="quantity" />  %</div>
                    <div><input type="number" id="revenue_input_high" name="quantity" />  %</div>
                </th>
            </tr>
        </thead>
    )
}

const getRevenueNumbers = (IS) => {
    const number_of_quarters = IS.quarterlyReports.length
    const year_one = number_of_quarters >= 4 ? getAverage([getQuarterlyRevenue(IS, 0), getQuarterlyRevenue(IS, 1), getQuarterlyRevenue(IS, 2), getQuarterlyRevenue(IS, 3)])*4 : undefined
    const year_two = number_of_quarters >= 8 ? getAverage([getQuarterlyRevenue(IS, 4), getQuarterlyRevenue(IS, 5), getQuarterlyRevenue(IS, 6), getQuarterlyRevenue(IS, 7)])*4 : undefined
    const year_three = number_of_quarters >= 12 ? getAverage([getQuarterlyRevenue(IS, 8), getQuarterlyRevenue(IS, 9), getQuarterlyRevenue(IS, 10), getQuarterlyRevenue(IS, 11)])*4 : undefined
    const year_five = number_of_quarters >= 20 ? getAverage([getQuarterlyRevenue(IS, 16), getQuarterlyRevenue(IS, 17), getQuarterlyRevenue(IS, 18), getQuarterlyRevenue(IS, 19)])*4 : undefined

    const growth_one = year_one && year_two ? ((year_one/year_two - 1)*100).toFixed(2) : "N/A"
    const growth_two = year_one && year_three ? (((year_one/year_three)**(1/2) - 1)*100).toFixed(2) : "N/A"
    const growth_four = year_one && year_five ? (((year_one/year_five)**(1/4) - 1)*100).toFixed(2) : "N/A"
    return [growth_one, growth_two, growth_four]
}

const getQuarterlyRevenue = (IS, quarter) => {
    return IS.quarterlyReports[quarter].totalRevenue != "None" ? Number(IS.quarterlyReports[quarter].totalRevenue) : undefined
}

export default Revenue
