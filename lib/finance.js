import { getAverage } from '../utils/utils';

// Define constants
const QUARTER_MULTIPLIER = 4; // 4 quarters in a year
const N_A = "N/A";
const AggregateMethod = Object.freeze({
    SUM: 'sum',
    AVERAGE: 'average',
});
  

// Helper function for quarterly calculations
const getQuarterData = (data, startQuarter, endQuarter, getDataFn, aggregateMethod) => {
    if (endQuarter > data.length) return undefined;
    const quarters = [];
    for (let i = startQuarter; i < endQuarter; i++) {
        const value = getDataFn(i);
        if (value !== undefined) {
            quarters.push(value);
        }
    }

    // In case fewer than 4 quarter are pulled, annualize the data
    if (aggregateMethod == AggregateMethod.SUM) {
        return quarters.length > 0 ? getAverage(quarters) * QUARTER_MULTIPLIER : undefined;
    } else if (aggregateMethod == AggregateMethod.AVERAGE) {
        return quarters.length > 0 ? getAverage(quarters) : undefined;
    }
};

// Quarterly revenue function
const getQuarterlyRevenue = (IS, quarter) => {
    const revenue = IS.quarterlyReports[quarter].totalRevenue;
    return revenue !== "None" ? Number(revenue) : undefined;
};

// Quarterly profit margin function
const getQuarterProfitMargin = (IS, quarter) => {
    const { totalRevenue, netIncome } = IS.quarterlyReports[quarter];
    return totalRevenue !== "None" && netIncome !== "None"
        ? Number(netIncome) / Number(totalRevenue)
        : undefined;
};

// Quarterly FCF margin function
const getQuarterlyFCFMargin = (IS, CF, quarter) => {
    const quarterFCF = getQuarterFCF(CF, quarter);
    return IS.quarterlyReports[quarter].totalRevenue !== "None" && quarterFCF
        ? Number(quarterFCF / IS.quarterlyReports[quarter].totalRevenue)
        : undefined;
};

// Get FCF for a quarter
const getQuarterFCF = (CF, quarter) => {
    const { operatingCashflow, capitalExpenditures } = CF.quarterlyReports[quarter];
    const OpCF = operatingCashflow !== "None" ? Number(operatingCashflow) : undefined;
    const CapEx = capitalExpenditures !== "None" ? Number(capitalExpenditures) : 0;
    return OpCF ? OpCF - CapEx : undefined;
};

// Get annual CF
const getAnnualCF = (CF) => {
    const startQuarter = Math.min(4, CF.quarterlyReports.length);
    let cashFlow = 0;
    for (let quarter = 0; quarter < startQuarter; quarter++) {
        const OpCF = CF.quarterlyReports[quarter].operatingCashflow !== "None" 
            ? Number(CF.quarterlyReports[quarter].operatingCashflow) : undefined;
        const CapEx = CF.quarterlyReports[quarter].capitalExpenditures !== "None"
            ? Number(CF.quarterlyReports[quarter].capitalExpenditures) : 0;
        if (OpCF) cashFlow += (OpCF - CapEx);
    }
    return cashFlow;
};

// Main functions
export const getRevenueNumbers = (IS) => {
    // Yearly revenue based on quarter data
    const yearOne = getQuarterData(IS, 0, 4, (q) => getQuarterlyRevenue(IS, q), AggregateMethod.SUM);
    const yearTwo = getQuarterData(IS, 4, 8, (q) => getQuarterlyRevenue(IS, q), AggregateMethod.SUM);
    const yearFour = getQuarterData(IS, 12, 16, (q) => getQuarterlyRevenue(IS, q), AggregateMethod.SUM);
    const yearSix = getQuarterData(IS, 20, 24, (q) => getQuarterlyRevenue(IS, q), AggregateMethod.SUM);

    // Growth calculations
    const growthOne = yearOne && yearTwo ? ((yearOne / yearTwo - 1) * 100).toFixed(2) : N_A;
    const growthThree = yearOne && yearFour ? (((yearOne / yearFour) ** (1 / 3) - 1) * 100).toFixed(2) : N_A;
    const growthFive = yearOne && yearSix ? (((yearOne / yearSix) ** (1 / 5) - 1) * 100).toFixed(2) : N_A;

    return [growthOne, growthThree, growthFive];
};

export const getProfitMargins = (IS) => {
    // Yearly profit margins based on quarter data
    const yearOne = getQuarterData(IS, 0, 4, (q) => getQuarterProfitMargin(IS, q), AggregateMethod.AVERAGE);
    const yearTwo = getQuarterData(IS, 4, 8, (q) => getQuarterProfitMargin(IS, q), AggregateMethod.AVERAGE);
    const yearThree = getQuarterData(IS, 8, 12, (q) => getQuarterProfitMargin(IS, q), AggregateMethod.AVERAGE);
    const yearFour = getQuarterData(IS, 12, 16, (q) => getQuarterProfitMargin(IS, q), AggregateMethod.AVERAGE);
    const yearFive = getQuarterData(IS, 16, 20, (q) => getQuarterProfitMargin(IS, q), AggregateMethod.AVERAGE);

    // Profit margin calculations
    const pmOne = yearOne ? (yearOne * 100).toFixed(2) : N_A;
    const pmThree = yearOne && yearTwo && yearThree ? (getAverage([yearOne, yearTwo, yearThree]) * 100).toFixed(2) : N_A;
    const pmFive = yearOne && yearTwo && yearThree && yearFour && yearFive
        ? (getAverage([yearOne, yearTwo, yearThree, yearFour, yearFive]) * 100).toFixed(2)
        : N_A;

    return [pmOne, pmThree, pmFive];
};

export const getFCFRatio = (CF, BS, PI) => {
    const { quarterlyReports } = CF;
    const number_of_quarters = quarterlyReports.length;

    if (number_of_quarters === 0) return N_A;

    const cashFlow = getAnnualCF(CF);
    const shares = BS.quarterlyReports[0].commonStockSharesOutstanding !== "None"
        ? Number(BS.quarterlyReports[0].commonStockSharesOutstanding) : undefined;
    const sharePrice = Number(PI["c"]);

    return cashFlow !== 0 && shares ? (sharePrice * shares / cashFlow).toFixed(2) : N_A;
};

export const getPERatio = (IS, BS, PI) => {
    const { quarterlyReports } = IS;
    const number_of_quarters = quarterlyReports.length;

    if (number_of_quarters === 0) return N_A;

    const earning = getAnnualEarning(IS);
    const shares = BS.quarterlyReports[0].commonStockSharesOutstanding !== "None"
        ? Number(BS.quarterlyReports[0].commonStockSharesOutstanding) : undefined;
    const sharePrice = Number(PI["c"]);

    return earning !== 0 && shares ? (sharePrice * shares / earning).toFixed(2) : N_A;
};

const getAnnualEarning = (IS) => {
    const startQuarter = Math.min(4, IS.quarterlyReports.length);
    let earnings = 0;
    for (let quarter = 0; quarter < startQuarter; quarter++) {
        if (IS.quarterlyReports[quarter].netIncome !== "None") {
            earnings += Number(IS.quarterlyReports[quarter].netIncome);
        }
    }
    return earnings;
};

export const getFCFMargins = (IS, CF) => {
    // Yearly FCF margins based on quarter data
    const yearOne = getQuarterData(IS, 0, 4, (q) => getQuarterlyFCFMargin(IS, CF, q), AggregateMethod.AVERAGE);
    const yearTwo = getQuarterData(IS, 4, 8, (q) => getQuarterlyFCFMargin(IS, CF, q), AggregateMethod.AVERAGE);
    const yearThree = getQuarterData(IS, 8, 12, (q) => getQuarterlyFCFMargin(IS, CF, q), AggregateMethod.AVERAGE);
    const yearFour = getQuarterData(IS, 12, 16, (q) => getQuarterlyFCFMargin(IS, CF, q), AggregateMethod.AVERAGE);
    const yearFive = getQuarterData(IS, 16, 20, (q) => getQuarterlyFCFMargin(IS, CF, q), AggregateMethod.AVERAGE);

    // FCF margin calculations
    const fmOne = yearOne && yearTwo ? (yearOne * 100).toFixed(2) : N_A;
    const fmThree = yearOne && yearTwo && yearThree ? (getAverage([yearOne, yearTwo, yearThree]) * 100).toFixed(2) : N_A;
    const fmFive = yearOne && yearTwo && yearThree && yearFour && yearFive
        ? (getAverage([yearOne, yearTwo, yearThree, yearFour, yearFive]) * 100).toFixed(2)
        : N_A;

    return [fmOne, fmThree, fmFive];
};
