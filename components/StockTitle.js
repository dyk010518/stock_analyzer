import stockTitleStyle from "../styles/StockTitle.module.css"

const StockTitle = ({reports}) => {
    const symbol = reports.SI["Symbol"]
    const name = reports.SI["Name"]
    const exchange = reports.SI["Exchange"]
    const currency = reports.SI["Currency"]
    const current_price = Number(reports.PI["c"]).toFixed(2)
    const difference = Number(reports.PI["d"]).toFixed(2)
    const difference_percent = Number(reports.PI["dp"]).toFixed(2)

    return (
        <div className={stockTitleStyle.main_container}>
            <div className={stockTitleStyle.left_container}>
                <h2>{name} ({symbol})</h2>
                <div>{exchange} | Currency in {currency}</div>
            </div>
            <div className={stockTitleStyle.right_container}>
                <h2>{current_price}</h2>
                {difference >= 0 && <div className={stockTitleStyle.positive}>{difference} ({difference_percent}%)</div>}
                {difference < 0 && <div className={stockTitleStyle.negative}>{difference} ({difference_percent}%)</div>}
            </div>
        </div>
    )
}


export default StockTitle