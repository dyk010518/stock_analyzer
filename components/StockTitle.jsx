const StockTitle = ({ reports }) => {
    const symbol = reports.SI["Symbol"]
    const name = reports.SI["Name"]
    const exchange = reports.SI["Exchange"]
    const currency = reports.SI["Currency"]
    const current_price = Number(reports.PI["c"]).toFixed(2)
    const difference = Number(reports.PI["d"]).toFixed(2)
    const difference_percent = Number(reports.PI["dp"]).toFixed(2)

    return (
        <div className="w-full mb-4 md:mb-0 max-w-3xl bg-white border border-gray-300 shadow-[0_4px_20px_rgba(255,255,255,0.4)] rounded-2xl px-10 py-8 text-gray-800 flex flex-row justify-between items-center backdrop-blur-md">
            <div className="pr-4">
                <h className="text-xl md:text-2xl font-semibold">
                    {name} <span className="text-primary-500">({symbol})</span>
                </h>
                <p className="text-sm text-gray-600">
                    {exchange} · Currency in {currency}
                </p>
            </div>
            <div className="text-right">
                <p className="text-2xl font-bold">{current_price}</p>
                {difference >= 0 ? (
                    <p className="text-green-600">+{difference} (+{difference_percent}%)</p>
                ) : (
                    <p className="text-red-500">{difference} ({difference_percent}%)</p>
                )}
            </div>
        </div>
    )
}

export default StockTitle
