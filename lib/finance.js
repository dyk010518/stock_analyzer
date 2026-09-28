import { getAverage, getQuarterlyRevenue, getShares, hasContiguousQuarters, toFinancialNumber } from '../utils/utils.js';

const N_A = '-';

function aggregate(data, start, end, getValue, average = false) {
  if (!hasContiguousQuarters(data, end)) return undefined;
  const values = Array.from({ length: end - start }, (_, i) => getValue(start + i));
  if (!values.every(Number.isFinite)) return undefined;
  return average ? getAverage(values) : values.reduce((sum, value) => sum + value, 0);
}

function profitMargin(IS, quarter) {
  const revenue = toFinancialNumber(IS.quarterlyReports[quarter]?.totalRevenue);
  const income = toFinancialNumber(IS.quarterlyReports[quarter]?.netIncome);
  return revenue && income !== undefined ? income / revenue : undefined;
}

function quarterFCF(CF, quarter, conversion) {
  const report = CF.quarterlyReports[quarter];
  const operating = toFinancialNumber(report?.operatingCashflow);
  const capex = toFinancialNumber(report?.capitalExpenditures);
  return operating !== undefined && capex !== undefined ? (operating - capex) * conversion : undefined;
}

function fcfMargin(IS, CF, quarter, conversion) {
  if (IS.quarterlyReports[quarter]?.fiscalDateEnding !== CF.quarterlyReports[quarter]?.fiscalDateEnding) return undefined;
  const fcf = quarterFCF(CF, quarter, conversion);
  const revenue = getQuarterlyRevenue(IS, quarter, conversion);
  return revenue && fcf !== undefined ? fcf / revenue : undefined;
}

export const getRevenueNumbers = (IS, conversion) => {
  const annualRevenue = start => aggregate(IS, start, start + 4, q => getQuarterlyRevenue(IS, q, conversion));
  const latest = annualRevenue(0);
  return [1, 3, 5].map(years => {
    const previous = annualRevenue(years * 4);
    return latest > 0 && previous > 0 ? (((latest / previous) ** (1 / years) - 1) * 100).toFixed(2) : N_A;
  });
};

function margins(data, getValue) {
  return [4, 12, 20].map(count => {
    const value = aggregate(data, 0, count, getValue, true);
    return value !== undefined ? (value * 100).toFixed(2) : N_A;
  });
}

export const getProfitMargins = IS => margins(IS, q => profitMargin(IS, q));
export const getFCFMargins = (IS, CF, conversion) => margins(IS, q => fcfMargin(IS, CF, q, conversion));

function valuationRatio(annualValue, BS, PI) {
  const shares = getShares(BS);
  const price = toFinancialNumber(PI?.c);
  return Number.isFinite(annualValue) && annualValue !== 0 && shares > 0 && price > 0
    ? (price * shares / annualValue).toFixed(2) : N_A;
}

export const getFCFRatio = (CF, BS, PI, conversion) => valuationRatio(
  aggregate(CF, 0, 4, q => quarterFCF(CF, q, conversion)), BS, PI
);

export const getPERatio = (IS, BS, PI, conversion) => valuationRatio(
  aggregate(IS, 0, 4, q => {
    const income = toFinancialNumber(IS.quarterlyReports[q]?.netIncome);
    return income !== undefined ? income * conversion : undefined;
  }), BS, PI
);
