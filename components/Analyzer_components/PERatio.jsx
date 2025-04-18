import stockStatsStyles from '../../styles/StockStats.module.css'
import { getPERatio } from '../../lib/finance'

const PERatio = (props) => {
    const PERatio = getPERatio(props.reports.IS, props.reports.BS, props.reports.PI)

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
                    <div><input type="number" id="PE_input_low" name="quantity" /></div>
                    <div><input type="number" id="PE_input_mid" name="quantity" /></div>
                    <div><input type="number" id="PE_input_high" name="quantity" /></div>
                </th>
            </tr>
        </thead>
    )
}

export default PERatio