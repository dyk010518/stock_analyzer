import stockStatsStyles from '../../styles/StockStats.module.css'

const AnnualReturn = () => {
    return (
        <thead>
            <tr className={stockStatsStyles.row}>
                <th className={stockStatsStyles.col1}>
                    <p1>Annual Return (%)</p1>
                </th>
                <th className={stockStatsStyles.col1}>
                    <p2>-</p2>
                    <p2>-</p2>
                    <p2>-</p2>
                </th>
                <th className={stockStatsStyles.col1}>
                    <div><input type="number" id="AnnualReturn_input_low" name="quantity" />  %</div>
                    <div><input type="number" id="AnnualReturn_input_mid" name="quantity" />  %</div>
                    <div><input type="number" id="AnnualReturn_input_high" name="quantity" />  %</div>
                </th>
            </tr>
        </thead>
    )
}

export default AnnualReturn