import stockTitleStyle from "../styles/StockTitle.module.css"

const StockTitle = ({info}) => {
    const symbol = info.SI["Symbol"]
    const name = info.SI["Name"]
    const exchange = info.SI["Exchange"]
    const currency = info.SI["Currency"]
    const current_price = Number(info.PI["c"]).toFixed(2)
    const difference = Number(info.PI["d"]).toFixed(2)
    const difference_percent = Number(info.PI["dp"]).toFixed(2)

    return (
        <>
            <h2>{name} ({symbol})</h2>
            <div>{exchange} | Currency in {currency}</div>
            <h3>{current_price}</h3>
            {difference >= 0 && <div className={stockTitleStyle.positive}>{difference} ({difference_percent}%)</div>}
            {difference < 0 && <div className={stockTitleStyle.negative}>{difference} ({difference_percent}%)</div>}
        </>
    )
}


export default StockTitle