const NormalRow = ({ row, rowIdx }) => {
    return (
        <tr key={rowIdx} className="transition duration-200">
            <td className="py-4 px-6 text-white border-b border-white/10 font-medium text-lg text-primary-300">
                {row.title}
            </td>
            {(row.pastData ?? []).map((val, idx) => (
                <td
                    key={`r${rowIdx}-g1-${idx}`}
                    className="py-4 px-6 text-white border-b border-white/10 text-lg"
                >
                    {val} {(row.isPercentage && val != "-") && <span>%</span>}
                </td>
            ))}
            {(row.inputIds ?? []).map((val, idx) => (
                <td
                    key={`r${rowIdx}-g2-${idx}`}
                    className="py-4 px-6 text-white border-b border-white/10 text-lg"
                >
                    {/* <div className="relative flex items-center justify-center">
                        <input
                            type="number"
                            id={val}
                            name="quantity"
                            className="w-2/3 max-w-xs h-8 px-4 py-2 bg-transparent border border-white/20 rounded-md text-lg text-white text-center focus:outline-none focus:ring-2 focus:ring-primary-300" // added pr-8 for padding to the right
                        />
                        {row.isPercentage && (
                            <span className="ml-2 text-white text-sm">%</span>
                        )}
                    </div> */}
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
