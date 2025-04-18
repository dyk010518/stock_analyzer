const TopRow = () => {
    return (
        <thead className="text-white">
            <tr className="bg-white/10">
                <th className="border-b border-white/20 w-1/4" rowSpan={2} />
                <th className="py-2 text-xl font-semibold border-b border-white/20 text-primary-300 w-1/3" colSpan={3}>
                    {"Past Numbers"}
                </th>
                <th className="py-2 text-xl font-semibold border-b border-white/20 text-primary-300" colSpan={3}>
                    {"10-Year Assumptions"}
                </th>
            </tr>
            <tr className="bg-white/10">
                {["1 year", "3 year", "5 year"].map((header, idx) => (
                    <th
                        key={`g1-${idx}`}
                        className="py-2 px-4 text-md font-medium border-b border-white/15 text-white"
                    >
                        {header}
                    </th>
                ))}
                {["Bear", "Base", "Bull"].map((header, idx) => (
                    <th
                        key={`g2-${idx}`}
                        className="py-2 px-4 text-md font-medium border-b border-white/15 text-white"
                    >
                        {header}
                    </th>
                ))}
            </tr>
        </thead>
    );
};

export default TopRow;
