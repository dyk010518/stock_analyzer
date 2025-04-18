import stockStatsStyles from '../../styles/StockStats.module.css'
import { getProfitMargins } from '../../lib/finance'

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
                    <div><input type="number" id="ProfitMargin_input_low" name="quantity" />  %</div>
                    <div><input type="number" id="ProfitMargin_input_mid" name="quantity" />  %</div>
                    <div><input type="number" id="ProfitMargin_input_high" name="quantity" />  %</div>
                </th>
            </tr>
        </thead>
    )
}

export default ProfitMargin