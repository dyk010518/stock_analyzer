import TopRow from "./TopRow";
import NormalRow from "./NormalRow";
import {
  getRevenueNumbers,
  getProfitMargins,
  getFCFMargins,
  getPERatio,
  getFCFRatio
} from "../../lib/finance";

const StockAnalyzerTable = ({ reports, numYears, setNumYears }) => {
  const data = buildMetricsData(reports);

  const pastOnlyRows = data.map(row => ({
    title: row.title,
    pastData: row.pastData,
    isPercentage: row.isPercentage
  }));

  const inputOnlyRows = data.map(row => ({
    title: row.title,
    inputIds: row.inputIds,
    isPercentage: row.isPercentage
  }));

  return (
    <div className="max-w-6xl mx-8 space-y-8">
      {/* Desktop view: One combined table */}
      <div className="hidden md:block rounded-2xl overflow-hidden border border-white/20 bg-white/5 backdrop-blur-md shadow-[0_4px_30px_rgba(255,255,255,0.1)]">
        <table className="w-full table-auto text-center">
          <TopRow numYears={numYears} setNumYears={setNumYears} />
          <tbody>
            {data.map((row, idx) => (
              <NormalRow key={`mobile-${idx}`} row={row} rowIdx={idx} />
            ))}
          </tbody>
        </table>
      </div>

      {/* Desktop view: Split into two tables */}
      <div className="block md:block rounded-2xl overflow-hidden border border-white/20 bg-white/5 backdrop-blur-md shadow-[0_4px_30px_rgba(255,255,255,0.1)]">
        <table className="w-full table-auto text-center">
          <thead className="text-white bg-white/10">
            <tr>
              <th className="w-1/3 py-2 px-4 text-center text-xl font-semibold text-primary-300 border-b border-white/20">
                Past Numbers
              </th>
              {["1 year", "3 year", "5 year"].map((label, idx) => (
                <th key={`past-${idx}`} className="py-2 px-4 text-base font-medium border-b border-white/15 text-white">
                  {label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {pastOnlyRows.map((row, idx) => (
              <tr key={`past-row-${idx}`} className="text-white border-b border-white/10">
                <td className="py-2 px-4 text-center font-medium">{row.title}</td>
                {row.pastData.map((val, i) => (
                  <td key={i} className="py-2 px-4">
                    {val} {(row.isPercentage && val != "-") && <span>%</span>}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="block md:block rounded-2xl overflow-hidden border border-white/20 bg-white/5 backdrop-blur-md shadow-[0_4px_30px_rgba(255,255,255,0.1)]">
        <table className="w-full table-auto text-center">
          <thead className="text-white bg-white/10">
            <tr>
              <th className="w-1/3 py-2 px-4 text-center text-xl font-semibold text-primary-300 border-b border-white/20">
                {numYears}-Year Assumptions
              </th>
              {["Bear", "Base", "Bull"].map((label, idx) => (
                <th key={`input-${idx}`} className="py-2 px-4 text-base font-medium border-b border-white/15 text-white">
                  {label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {inputOnlyRows.map((row, idx) => (
              <tr key={`input-row-${idx}`} className="text-white border-b border-white/15">
                <td className="py-2 px-4 text-center font-medium">{row.title}</td>
                {row.inputIds.map((id, i) => (
                  <td key={i} className="py-2 px-4">
                    <div className="relative flex justify-center">
                      <div className="relative w-3/4 max-w-sm">
                        <input
                          type="number"
                          id={id}
                          name="quantity"
                          className="w-full h-8 px-2 py-2 pr-6 bg-transparent border border-white/20 rounded-md text-base text-white text-center focus:outline-none focus:ring-2 focus:ring-primary-300"
                        />
                        {row.isPercentage && (
                          <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-xs pointer-events-none">
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
    </div>

  )

  // return (
  //   <div className="max-w-6xl mx-8 rounded-2xl overflow-hidden shadow-[0_4px_30px_rgba(255,255,255,0.1)] border border-white/20 bg-white/5 backdrop-blur-md">
  //     <table className="w-full table-auto text-center">
  //       <TopRow numYears={numYears} setNumYears={setNumYears}/>
  //       <tbody>
  //         {data.map((row, idx) => (
  //           <NormalRow key={idx} row={row} rowIdx={idx} />
  //         ))}
  //       </tbody>
  //     </table>
  //   </div>
  // );
};

const buildMetricsData = (reports) => {
  const revenueGrowth = getRevenueNumbers(reports.IS, reports.currencyConversion);
  const profitMargins = getProfitMargins(reports.IS);
  const FCFMargins = getFCFMargins(reports.IS, reports.CF, reports.currencyConversion);
  const PERatio = getPERatio(reports.IS, reports.BS, reports.PI, reports.currencyConversion);
  const FCFRatio = getFCFRatio(reports.CF, reports.BS, reports.PI, reports.currencyConversion);

  return [
    {
      title: "Annual Revenue Growth (%)",
      pastData: revenueGrowth,
      inputIds: ["revenue_input_bear", "revenue_input_base", "revenue_input_bull"],
      isPercentage: true
    },
    {
      title: "Profit Margin (%)",
      pastData: profitMargins,
      inputIds: ["profitMargin_input_bear", "profitMargin_input_base", "profitMargin_input_bull"],
      isPercentage: true
    },
    {
      title: "Free Cash Flow Margin (%)",
      pastData: FCFMargins,
      inputIds: ["FCFMargin_input_bear", "FCFMargin_input_base", "FCFMargin_input_bull"],
      isPercentage: true
    },
    {
      title: "P/E Ratio",
      pastData: [PERatio, "-", "-"],
      inputIds: ["PE_input_bear", "PE_input_base", "PE_input_bull"],
      isPercentage: false
    },
    {
      title: "P/FCF Ratio",
      pastData: [FCFRatio, "-", "-"],
      inputIds: ["PFCF_input_bear", "PFCF_input_base", "PFCF_input_bull"],
      isPercentage: false
    },
    {
      title: "Discount Rate (%)",
      pastData: ["-", "-", "-"],
      inputIds: ["discountRate_input_bear", "discountRate_input_base", "discountRate_input_bull"],
      isPercentage: true
    }
  ];
};

export default StockAnalyzerTable;
