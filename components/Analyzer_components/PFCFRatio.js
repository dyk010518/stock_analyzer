import stockStatsStyles from '../../styles/StockStats.module.css'

const PFCFRatio = () => {
    return (
        <thead>
            <tr className={stockStatsStyles.row}>
                <th className={stockStatsStyles.col}>
                    <p1>P/FCF Ratio</p1>
                </th>
                <th className={stockStatsStyles.col}>
                    <p2>1 year</p2>
                    <p2>5 year</p2>
                    <p2>10 year</p2>
                </th>
                <th className={stockStatsStyles.col}>
                    <div><input type="number" id="quantity" name="quantity" min="1" max="5" /></div>
                    <div><input type="number" id="quantity" name="quantity" min="1" max="5" /></div>
                    <div><input type="number" id="quantity" name="quantity" min="1" max="5" /></div>
                </th>
            </tr>
        </thead>
    )
}

export default PFCFRatio