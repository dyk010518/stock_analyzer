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
                <p>{exchange} | Currency in {currency}</p>
            </div>
            <div className={stockTitleStyle.right_container}>
                <h2>{current_price}</h2>
                {difference >= 0 && <p className={stockTitleStyle.positive}>{difference} ({difference_percent}%)</p>}
                {difference < 0 && <p className={stockTitleStyle.negative}>{difference} ({difference_percent}%)</p>}
            </div>
        </div>
    )
}


export default StockTitle