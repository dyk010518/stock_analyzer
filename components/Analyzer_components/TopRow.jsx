const TopRow = () => {
    const cellClass = "w-1/3 p-0 border-b-2 border-white";
    const labelClass = "text-[14pt] inline-block w-1/3";

    return (
        <thead>
            <tr className="bg-[#fff143] text-white h-8">
                <th className="w-1/3"></th>
                <th className={cellClass}>Past Numbers</th>
                <th className={cellClass}>My 10-Year Assumptions</th>
            </tr>
            <tr className="bg-[#fff143] text-white h-8">
                <th className="w-1/3"></th>
                <th className="w-1/3">
                    {["1 year", "3 year", "5 year"].map((label) => (
                        <p key={label} className={labelClass}>
                            {label}
                        </p>
                    ))}
                </th>
                <th className="w-1/3">
                    {["Low", "Mid", "High"].map((label) => (
                        <p key={label} className={labelClass}>
                            {label}
                        </p>
                    ))}
                </th>
            </tr>
        </thead>
    );
};

export default TopRow;
