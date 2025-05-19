import { getDailyReturnSmart } from '../../utils/utils';

export default async function handler(req, res) {
  const tickers = ['^GSPC', 'QQQ', '^DJI',]; // S&P 500, QQQ, Dow Jones
  const errorBound = 5e-3
  const returns = await Promise.all(
    tickers.map(symbol => getDailyReturnSmart(symbol, errorBound))
  );
  res.status(200).json({
    sp500: returns[0],
    nasdaq: returns[1],
    dow: returns[2],
  });
}