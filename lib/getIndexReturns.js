import { getDailyReturnSmart } from '../utils/utils';

export async function getIndexReturns() {
  const tickers = ['^GSPC', 'QQQ', '^DJI',]; // S&P 500, QQQ, Dow Jones
  const errorBound = 5e-3
  const returns = await Promise.all(
    tickers.map(symbol => getDailyReturnSmart(symbol, errorBound))
  );
  console.log(returns);
}