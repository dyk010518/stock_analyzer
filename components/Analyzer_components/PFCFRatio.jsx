import stockStatsStyles from '../../styles/StockStats.module.css'
import { getFCFRatio } from '../../lib/finance'

const PFCFRatio = (props) => {
    const FCFRatio = getFCFRatio(props.reports.CF, props.reports.BS, props.reports.PI)

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
                    <div><input type="number" id="PFCF_input_low" name="quantity" /></div>
                    <div><input type="number" id="PFCF_input_mid" name="quantity" /></div>
                    <div><input type="number" id="PFCF_input_high" name="quantity" /></div>
                </th>
            </tr>
        </thead>
    )
}

export default PFCFRatio