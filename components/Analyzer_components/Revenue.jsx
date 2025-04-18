import stockStatsStyles from '../../styles/StockStats.module.css'
import { getRevenueNumbers } from '../../lib/finance'

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

export default Revenue
