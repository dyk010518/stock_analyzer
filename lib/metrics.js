import {
    getRevenueNumbers,
    getProfitMargins,
    getFCFMargins,
    getPERatio,
    getFCFRatio
} from "./finance";

export const buildMetricsData = (reports) => {
  const revenueGrowth = getRevenueNumbers(reports.IS, reports.currencyConversion);
  const profitMargins = getProfitMargins(reports.IS);
  const FCFMargins = getFCFMargins(reports.IS, reports.CF, reports.currencyConversion);
  const PERatio = getPERatio(reports.IS, reports.BS, reports.PI, reports.currencyConversion);
  console.log("PE", PERatio)
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

export default buildMetricsData;
