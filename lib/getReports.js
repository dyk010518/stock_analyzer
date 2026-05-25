// lib/getReports.js
import { addCurrencyConversion } from '../utils/utils';

// Helper function to pause execution
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

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

  const results = [];

  // unfortunate, but with the rate limit, this needs to be done...

  for (let i = 0; i < urls.length; i++) {
    const res = await fetch(urls[i]);
    const data = await res.json();
    results.push(data);

    // Only pause if there are more URLs left to fetch
    if (i < urls.length - 1) {
      await delay(1100); // 1.1 seconds
    }
  }

  // Destructure the array in the same order as your original code
  const [IS, BS, CF, SI, PI] = results;
  console.log(results);

  return addCurrencyConversion({ symbol, IS, BS, CF, SI, PI });
}