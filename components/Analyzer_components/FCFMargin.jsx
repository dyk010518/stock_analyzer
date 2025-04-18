import stockStatsStyles from '../../styles/StockStats.module.css'
import { getFCFMargins } from '../../lib/finance'

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
                    <div><input type="number" id="FCFMargin_input_low" name="quantity" />  %</div>
                    <div><input type="number" id="FCFMargin_input_mid" name="quantity" />  %</div>
                    <div><input type="number" id="FCFMargin_input_high" name="quantity" />  %</div>
                </th>
            </tr>
        </thead>
    )
}

export default FCFMargin