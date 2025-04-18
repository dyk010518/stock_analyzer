const FuturisticTable = ({
    leftColTitle = "Hi",
    group1Title = "Group 1",
    group2Title = "Group 2",
    group1Headers = [1, 2, 3],
    group2Headers = [1, 2, 3],
    data = [
        { left: "Row 1", group1: [1, 2, 55], group2: [4, 5, 6] },
        { left: "Row 2", group1: [7, 8, 9], group2: [10, 11, 12] },
        { left: "Row 3", group1: [13, 14, 15], group2: [16, 17, 18] }
    ]
}) => {
    return (
        <div className="w-full max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-[0_4px_30px_rgba(255,255,255,0.1)] border border-white/20 bg-white/5 backdrop-blur-md">
            <table className="w-full table-auto text-center">
                <thead className="text-white">
                    <tr className="bg-white/10">
                        <th className="py-4 px-6 text-base font-semibold border-b border-white/20 text-primary-300" rowSpan={2}>
                            {leftColTitle}
                        </th>
                        <th className="py-4 px-6 text-base font-semibold border-b border-white/20 text-primary-300" colSpan={3}>
                            {group1Title}
                        </th>
                        <th className="py-4 px-6 text-base font-semibold border-b border-white/20 text-primary-300" colSpan={3}>
                            {group2Title}
                        </th>
                    </tr>
                    <tr className="bg-white/5">
                        {group1Headers.map((header, idx) => (
                            <th
                                key={`g1-${idx}`}
                                className="py-3 px-4 text-sm font-medium border-b border-white/15 text-white"
                            >
                                {header}
                            </th>
                        ))}
                        {group2Headers.map((header, idx) => (
                            <th
                                key={`g2-${idx}`}
                                className="py-3 px-4 text-sm font-medium border-b border-white/15 text-white"
                            >
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIdx) => (
                        <tr
                            key={rowIdx}
                            className="hover:bg-primary-500/10 transition duration-200"
                        >
                            <td className="py-4 px-6 text-white border-b border-white/10 font-medium text-primary-300">
                                {row.left}
                            </td>
                            {(row.group1 ?? []).map((val, idx) => (
                                <td
                                    key={`r${rowIdx}-g1-${idx}`}
                                    className="py-4 px-4 text-white border-b border-white/10 text-sm"
                                >
                                    {val}
                                </td>
                            ))}
                            {(row.group2 ?? []).map((val, idx) => (
                                <td
                                    key={`r${rowIdx}-g2-${idx}`}
                                    className="py-4 px-4 text-white border-b border-white/10 text-sm"
                                >
                                    {val}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default FuturisticTable
