const StockTitle = ({ reports }) => {
    const symbol = reports.SI["Symbol"]
    const name = reports.SI["Name"]
    const exchange = reports.SI["Exchange"]
    const currency = reports.SI["Currency"]
    const current_price = Number(reports.PI["c"]).toFixed(2)
    const difference = Number(reports.PI["d"]).toFixed(2)
    const difference_percent = Number(reports.PI["dp"]).toFixed(2)

    return (
        <div className="w-full max-w-3xl bg-white/5 border border-white/20 shadow-[0_4px_20px_rgba(255,255,255,0.15)] rounded-2xl px-10 py-6 mb-10 text-white flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
                <h className="text-xl sm:text-2xl font-semibold">{name} <span className="text-primary-300">({symbol})</span></h>
                <p className="text-sm text-gray-300">{exchange} · Currency in {currency}</p>
            </div>
            <div className="text-right">
                <p className="text-2xl font-bold">{current_price}</p>
                {difference >= 0 ? (
                    <p className="text-green-400">+{difference} (+{difference_percent}%)</p>
                ) : (
                    <p className="text-red-400">{difference} ({difference_percent}%)</p>
                )}
            </div>
        </div>
    )
}

export default StockTitle
