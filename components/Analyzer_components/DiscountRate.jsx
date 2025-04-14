import stockStatsStyles from '../../styles/StockStats.module.css'

const DiscountRate = () => {
    return (
        <thead>
            <tr className={stockStatsStyles.row}>
                <th className={stockStatsStyles.col1}>
                    <p1>Discount Rate (%)</p1>
                </th>
                <th className={stockStatsStyles.col1}>
                    <p2>-</p2>
                    <p2>-</p2>
                    <p2>-</p2>
                </th>
                <th className={stockStatsStyles.col1}>
                    <div><input type="number" id="DiscountRate_input_low" name="quantity" />  %</div>
                    <div><input type="number" id="DiscountRate_input_mid" name="quantity" />  %</div>
                    <div><input type="number" id="DiscountRate_input_high" name="quantity" />  %</div>
                </th>
            </tr>
        </thead>
    )
}

export default DiscountRate