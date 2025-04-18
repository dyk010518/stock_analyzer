import TopRow from "./TopRow";
import NormalRow from "./NormalRow";
import {
  getRevenueNumbers,
  getProfitMargins,
  getFCFMargins,
  getPERatio,
  getFCFRatio
} from "../../lib/finance";

const buildMetricsData = (reports) => {
  const revenueGrowth = getRevenueNumbers(reports.IS);
  const profitMargins = getProfitMargins(reports.IS);
  const FCFMargins = getFCFMargins(reports.IS, reports.CF);
  const PERatio = getPERatio(reports.IS, reports.BS, reports.PI);
  const FCFRatio = getFCFRatio(reports.CF, reports.BS, reports.PI);

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

const StockAnalyzerTable = ({ reports }) => {
  const data = buildMetricsData(reports);

  return (
    <div className="max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-[0_4px_30px_rgba(255,255,255,0.1)] border border-white/20 bg-white/5 backdrop-blur-md">
      <table className="w-full table-auto text-center">
        <TopRow />
        <tbody>
          {data.map((row, idx) => (
            <NormalRow key={idx} row={row} rowIdx={idx} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StockAnalyzerTable;
