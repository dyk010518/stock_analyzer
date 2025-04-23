const MobileInputTable = ({ inputOnlyRows, numYears, setNumYears, inputValues, handleInputChange }) => {

  return (
    <div className="rounded-2xl overflow-hidden border border-white/20 bg-white/5 backdrop-blur-md shadow-[0_4px_30px_rgba(255,255,255,0.1)]">
        <table className="w-full table-auto text-center">
          <thead className="text-white bg-white/10">
            <tr>
              <th className="w-1/3 py-4 text-center text-sm sm:text-base font-semibold text-primary-300 border-b border-white/20">
                <div className="relative flex flex-col justify-center items-center space-y-2">
                    <span className="px-4">{`${numYears}-Year Assumptions`}</span>
                    <select
                        className="text-xs bg-gray-800 text-white border border-white/20 rounded-md px-1 focus:outline-none focus:ring-1 focus:ring-primary-300 hover:bg-gray-700 transition-all duration-150"
                        value={numYears}
                        onChange={(e) => setNumYears(Number(e.target.value))}
                    >
                        <option className="bg-gray-800 text-white" value={3}>3</option>
                        <option className="bg-gray-800 text-white" value={5}>5</option>
                        <option className="bg-gray-800 text-white" value={7}>7</option>
                    </select>
                </div>
              </th>
              {["Bear", "Base", "Bull"].map((label, idx) => (
                <th key={`input-${idx}`} className="py-2 px-4 text-xs sm:text-sm font-medium border-b border-white/15 text-white">
                  {label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {inputOnlyRows.map((row, idx) => (
              <tr key={`input-row-${idx}`} className="text-white text-xs sm:text-sm border-b border-white/15">
                <td className="py-2 px-2 text-center font-medium">{row.title}</td>
                {row.inputIds.map((id, i) => (
                  <td key={i} className="py-2 px-0 sm:px-1">
                    <div className="relative flex justify-center">
                      <div className="relative w-3/4 max-w-sm">
                        <input
                          type="number"
                          id={id}
                          name={id}
                          value={inputValues[id] || ""}
                          onChange={(e) => handleInputChange(id, e.target.value)}
                          className="w-full h-8 px-2 py-2 sm:pr-4 bg-transparent border border-white/20 rounded-md text-sm text-white text-center focus:outline-none focus:ring-2 focus:ring-primary-300"
                        />
                        {console.log(id)}
                        {row.isPercentage && (
                          <span className="hidden sm:block absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-base pointer-events-none">
                            %
                          </span>
                        )}
                      </div>
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>


  )
};

export default MobileInputTable;
