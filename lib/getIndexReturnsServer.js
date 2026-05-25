import YahooFinance from 'yahoo-finance2';

export async function getDailyReturnSmart(symbol, errorBound) {
  try {
    const yahooFinance = new YahooFinance();
    const quote = await yahooFinance.quote(symbol);
    const chart = await yahooFinance.chart(symbol, {
      period1: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
      interval: '1d', 
    });
    const history = chart?.quotes || [];

    if (!history.length) {
      console.warn(`No historical data for ${symbol}`);
      return null;
    }

    const lastClose = history[history.length - 1].close;
    const prevClose =
      Math.abs(lastClose - quote.regularMarketPrice) < errorBound && history.length > 1
        ? history[history.length - 2].close
        : lastClose;

    if (prevClose == null) {
      console.warn(`Not enough data to calculate return for ${symbol}`);
      return null;
    }

    return ((quote.regularMarketPrice - prevClose) / prevClose) * 100;
  } catch (err) {
    const message = err?.message || String(err);
    if (message.includes('Too Many Requests')) {
      console.warn(`Yahoo Finance rate limit for ${symbol}: ${message}`);
    } else {
      console.error(`Error fetching ${symbol}:`, err);
    }
    return null;
  }
}
