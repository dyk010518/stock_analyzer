const TopRow = ({ numYears, setNumYears }) => {
    return (
        <thead className="text-white">
            <tr className="bg-white/10">
                <th className="border-b border-white/20 w-1/4" rowSpan={2} />
                <th className="py-2 text-xl font-semibold border-b border-white/20 text-primary-300 w-1/3" colSpan={3}>
                    {"Past Numbers"}
                </th>
                <th className="py-2 text-xl font-semibold border-b border-white/20 text-primary-300" colSpan={3}>
                    <div className="relative flex justify-center items-center">
                        <span>{`${numYears}-Year Assumptions`}</span>
                        <select
                            className="absolute right-16 text-lg bg-gray-800 text-white border border-white/20 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-primary-300 hover:bg-gray-700 transition-all duration-150"
                            value={numYears}
                            onChange={(e) => setNumYears(Number(e.target.value))}
                        >
                            <option className="bg-gray-800 text-white" value={3}>3</option>
                            <option className="bg-gray-800 text-white" value={5}>5</option>
                            <option className="bg-gray-800 text-white" value={7}>7</option>
                        </select>
                    </div>
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
