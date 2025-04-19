const NormalRow = ({ row, rowIdx }) => {
    return (
        <tr key={rowIdx} className="transition duration-200">
            <td className="py-2 px-6 text-white border-b border-white/10 font-bold text-md text-primary-300">
                {row.title}
            </td>
            {(row.pastData ?? []).map((val, idx) => (
                <td
                    key={`r${rowIdx}-g1-${idx}`}
                    className="py-2 px-6 text-white border-b border-white/10 text-md"
                >
                    {val} {(row.isPercentage && val != "-") && <span>%</span>}
                </td>
            ))}
            {(row.inputIds ?? []).map((val, idx) => (
                <td
                    key={`r${rowIdx}-g2-${idx}`}
                    className="py-2 px-6 text-white border-b border-white/10 text-md"
                >
                    <div className="relative flex justify-center">
                        <div className="relative w-3/4 max-w-sm">
                            <input
                                type="number"
                                id={val}
                                name="quantity"
                                className="w-full h-8 px-4 py-2 pr-6 bg-transparent border border-white/20 rounded-md text-lg text-white text-center focus:outline-none focus:ring-2 focus:ring-primary-300"
                            />
                            {row.isPercentage && (
                                <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-sm pointer-events-none">
                                    %
                                </span>
                            )}
                        </div>
                    </div>
                </td>
            ))}
        </tr>
    );
};

export default NormalRow;
