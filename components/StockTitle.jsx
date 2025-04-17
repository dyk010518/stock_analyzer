const StockTitle = ({reports}) => {
    const symbol = reports.SI["Symbol"]
    const name = reports.SI["Name"]
    const exchange = reports.SI["Exchange"]
    const currency = reports.SI["Currency"]
    const current_price = Number(reports.PI["c"]).toFixed(2)
    const difference = Number(reports.PI["d"]).toFixed(2)
    const difference_percent = Number(reports.PI["dp"]).toFixed(2)

    return (
        <div className="flex justify-between items-center w-[40vw] mb-8 bg-gray-400 border-2 border-[#222] px-16 py-8 rounded-lg">
            <div>
                <h2>{name} ({symbol})</h2>
                <p>{exchange} | Currency in {currency}</p>
            </div>
            <div>
                <h2>{current_price}</h2>
                {difference >= 0 && <p className="text-green-700">+{difference} ({difference_percent}%)</p>}
                {difference < 0 && <p className="text-red-700">{difference} ({difference_percent}%)</p>}
            </div>
        </div>
    )
}


export default StockTitle