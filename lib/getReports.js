// lib/getReports.js
import { addCurrencyConversion } from '../utils/utils';

export async function getReportsForSymbol(symbol) {
  const ALPHA_KEY = process.env.ALPHA_API_KEY;
  const FINNHUB_KEY = process.env.FINNHUB_TOKEN;

  const urls = [
    `https://www.alphavantage.co/query?function=INCOME_STATEMENT&symbol=${symbol}&apikey=${ALPHA_KEY}`,
    `https://www.alphavantage.co/query?function=BALANCE_SHEET&symbol=${symbol}&apikey=${ALPHA_KEY}`,
    `https://www.alphavantage.co/query?function=CASH_FLOW&symbol=${symbol}&apikey=${ALPHA_KEY}`,
    `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}&apikey=${ALPHA_KEY}`,
    `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${FINNHUB_KEY}`,
  ];

  const [IS, BS, CF, SI, PI] = await Promise.all(
    urls.map((url) => fetch(url).then((res) => res.json()))
  );

  return addCurrencyConversion({ symbol, IS, BS, CF, SI, PI });
}
