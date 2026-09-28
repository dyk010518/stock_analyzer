import { normalizeCompanyFacts } from './normalize.mjs';

const TICKERS_URL = 'https://www.sec.gov/files/company_tickers_exchange.json';
const HOUR = 3600000;

class DataError extends Error {
  constructor(code) {
    super(code);
    this.code = code;
  }
}

// Bounded caches also coalesce simultaneous requests for the same symbol.
function createCache(now, maxEntries = 100) {
  const entries = new Map();
  return async (key, ttl, loader) => {
    const cached = entries.get(key);
    if (cached && cached.expires > now()) return cached.promise;
    entries.delete(key);
    const entry = { expires: Infinity };
    entry.promise = Promise.resolve().then(loader).then(value => {
      entry.expires = now() + ttl;
      return value;
    }).catch(error => {
      if (entries.get(key) === entry) entries.delete(key);
      throw error;
    });
    entries.set(key, entry);
    if (entries.size > maxEntries) entries.delete(entries.keys().next().value);
    return entry.promise;
  };
}

// Limits apply per server process. Multi-instance deployments need a shared
// limiter to enforce the SEC's aggregate 10 requests/second policy.
function createRequester(fetchImpl, interval, now, wait) {
  let queue = Promise.resolve();
  let nextRequest = 0;
  let blockedUntil = 0;
  return async (url, headers) => {
    if (now() < blockedUntil) throw new DataError('rate_limited');
    const slot = queue.then(async () => {
      if (now() < blockedUntil) throw new DataError('rate_limited');
      await wait(Math.max(0, nextRequest - now()));
      nextRequest = now() + interval;
    });
    queue = slot.catch(() => {});
    await slot;
    if (now() < blockedUntil) throw new DataError('rate_limited');
    let response;
    try {
      response = await fetchImpl(url, { headers, signal: AbortSignal.timeout(15000) });
    } catch {
      throw new DataError('unavailable');
    }
    if (response.status === 429) {
      const retryAfter = Number(response.headers?.get('retry-after'));
      blockedUntil = now() + Math.max(60, retryAfter || 0) * 1000;
      throw new DataError('rate_limited');
    }
    if (response.status === 404) throw new DataError('not_found');
    if (!response.ok) throw new DataError('unavailable');
    try {
      return await response.json();
    } catch {
      throw new DataError('unavailable');
    }
  };
}

export function createStockDataService({
  fetchImpl = (...args) => fetch(...args),
  now = Date.now,
  wait = ms => new Promise(resolve => setTimeout(resolve, ms)),
  getUserAgent = () => process.env.SEC_USER_AGENT,
  getFinnhubToken = () => process.env.FINNHUB_TOKEN,
  cacheFundamentals,
} = {}) {
  const cached = cacheFundamentals || createCache(now);
  const quotes = createCache(now);
  const secRequest = createRequester(fetchImpl, 250, now, wait);
  const quoteRequest = createRequester(fetchImpl, 1100, now, wait);

  const sec = (url) => {
    const userAgent = getUserAgent()?.trim();
    if (!userAgent) throw new DataError('configuration');
    return secRequest(url, { 'User-Agent': userAgent, Accept: 'application/json' });
  };

  async function getCompany(symbol) {
    const companies = await cached('tickers', 24 * HOUR, async () => {
      const payload = await sec(TICKERS_URL);
      if (!Array.isArray(payload.fields) || !Array.isArray(payload.data)) throw new DataError('unavailable');
      const indexes = ['cik', 'name', 'ticker', 'exchange'].map(field => payload.fields.indexOf(field));
      if (indexes.some(index => index < 0)) throw new DataError('unavailable');
      return payload.data.map(row => {
        const [cik, name, ticker, exchange] = indexes.map(index => row[index]);
        return [ticker, { cik, name, symbol: ticker, exchange }];
      });
    });
    const company = new Map(companies).get(symbol);
    if (!company) throw new DataError('not_found');
    return company;
  }

  async function getQuote(symbol) {
    const token = getFinnhubToken();
    if (!token) return { PI: null, quoteStatus: 'unconfigured' };
    try {
      const PI = await quotes(symbol, 60000, async () => {
        const quoteSymbol = symbol.replaceAll('-', '.');
        const quote = await quoteRequest(`https://finnhub.io/api/v1/quote?symbol=${encodeURIComponent(quoteSymbol)}`, {
          'X-Finnhub-Token': token,
        });
        if (!Number.isFinite(quote.c) || quote.c <= 0) throw new DataError('unavailable');
        return quote;
      });
      return { PI, quoteStatus: 'ok' };
    } catch (error) {
      return { PI: null, quoteStatus: error.code || 'unavailable' };
    }
  }

  return {
    async getReportsForSymbol(input) {
      const symbol = String(input || '').trim().toUpperCase().replaceAll('.', '-');
      if (!/^[A-Z][A-Z0-9-]{0,14}$/.test(symbol)) return { symbol, error: 'not_found' };
      try {
        const company = await getCompany(symbol);
        const fundamentals = cached(`company:${symbol}`, 6 * HOUR, async () => {
          const cik = String(company.cik).padStart(10, '0');
          let facts;
          try {
            facts = await sec(`https://data.sec.gov/api/xbrl/companyfacts/CIK${cik}.json`);
          } catch (error) {
            if (error.code === 'not_found') throw new DataError('unsupported');
            throw error;
          }
          if (!facts?.facts) throw new DataError('unavailable');
          const reports = normalizeCompanyFacts(facts, company);
          if (!reports) throw new DataError('unsupported');
          return reports;
        });
        const [reports, quote] = await Promise.all([fundamentals, getQuote(symbol)]);
        return { symbol, ...reports, ...quote };
      } catch (error) {
        return { symbol, error: error.code || 'unavailable' };
      }
    },
  };
}
