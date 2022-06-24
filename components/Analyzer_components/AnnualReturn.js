import stockStatsStyles from '../../styles/StockStats.module.css'

const AnnualReturn = () => {
    return (
        <thead>
            <tr className={stockStatsStyles.row}>
                <th className={stockStatsStyles.col}>
                    <p1>Annual Return (%)</p1>
                </th>
                <th className={stockStatsStyles.col}>
                    <p2>-</p2>
                    <p2>-</p2>
                    <p2>-</p2>
                </th>
                <th className={stockStatsStyles.col}>
                    <div><input type="number" id="AnnualReturn_input_1" name="quantity" /></div>
                    <div><input type="number" id="AnnualReturn_input_2" name="quantity" /></div>
                    <div><input type="number" id="AnnualReturn_input_4" name="quantity" /></div>
                </th>
            </tr>
        </thead>
    )
}

export default AnnualReturn