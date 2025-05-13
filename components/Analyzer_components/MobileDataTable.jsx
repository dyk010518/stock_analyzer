const MobileDataTable = ({ pastOnlyRows, fiscalDate }) => {

    return (
      <>
        <div className="rounded-2xl overflow-hidden border border-white/20 bg-white/5 backdrop-blur-md shadow-[0_4px_30px_rgba(255,255,255,0.1)]">
          <table className="w-full table-auto text-center">
            <thead className="text-white bg-white/10">
              <tr>
                <th className="w-1/3 py-4 px-2 text-center text-sm sm:text-base font-semibold text-primary-300 border-b border-white/20">
                  Past Numbers
                </th>
                {["1 year", "3 year", "5 year"].map((label, idx) => (
                  <th key={`past-${idx}`} className="py-2 px-2 text-xs sm:text-sm font-medium border-b border-white/15 text-white">
                    {label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {pastOnlyRows.map((row, idx) => (
                <tr key={`past-row-${idx}`} className="text-white text-xs sm:text-sm border-b border-white/10">
                  <td className="py-2 px-2 text-center font-medium">{row.title}</td>
                  {row.pastData.map((val, i) => (
                    <td key={i} className="py-2 px-2">
                      {val}{(row.isPercentage && val != "-") && <span>%</span>}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-right mr-2 mt-2 mb-8">
          <span className="italic text-gray-400">
            Latest fiscal quarter: <span className="not-italic font-bold text-primary-300">{fiscalDate}</span>
          </span>
        </div>
      </>
  
    )
  };
  
  export default MobileDataTable;
  