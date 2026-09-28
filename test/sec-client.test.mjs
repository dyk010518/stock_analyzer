import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createStockDataService } from '../lib/sec/client.mjs';

const apple = JSON.parse(readFileSync(new URL('./fixtures/aapl-companyfacts.json', import.meta.url)));
const tickers = { fields: ['cik', 'name', 'ticker', 'exchange'], data: [[320193, 'Apple', 'AAPL', 'Nasdaq']] };
function setup(overrides = {}) {
  let time = Date.parse('2026-09-28');
  const calls = [];
  const fetchImpl = async (url, options) => {
    calls.push({ url, options, time });
    return new Response(JSON.stringify(url.includes('company_tickers') ? tickers : url.includes('companyfacts') ? apple : { c: 200, d: 2, dp: 1 }), { status: 200 });
  };
  const service = createStockDataService({ fetchImpl, now: () => time, wait: async ms => { time += ms; }, getUserAgent: () => 'StockAnalyzer tests@example.com', getFinnhubToken: () => 'test-token', ...overrides });
  return { service, calls, advance: ms => { time += ms; } };
}

test('uses only SEC and Finnhub, coalesces concurrent loads and caches quotes separately', async () => {
  const { service, calls, advance } = setup();
  const [a, b] = await Promise.all([service.getReportsForSymbol(' aapl '), service.getReportsForSymbol('AAPL')]);
  assert.equal(a.IS.symbol, 'AAPL');
  assert.deepEqual(a, b);
  assert.equal(calls.length, 3);
  assert.ok(calls.find(c => c.url.includes('companyfacts')).options.headers['User-Agent']);
  assert.ok(calls.find(c => c.url.includes('companyfacts')).time - calls[0].time >= 250);
  assert.ok(calls.every(c => !c.url.includes('test-token')));
  await service.getReportsForSymbol('AAPL');
  assert.equal(calls.length, 3);
  advance(61000);
  await service.getReportsForSymbol('AAPL');
  assert.equal(calls.length, 4);
  assert.ok(calls[3].url.includes('finnhub'));
  advance(6 * 3600000);
  await service.getReportsForSymbol('AAPL');
  assert.equal(calls.filter(c => c.url.includes('companyfacts')).length, 2);
  assert.equal(calls.filter(c => c.url.includes('company_tickers')).length, 1);
});

test('missing SEC identity is a configuration error and sends no request', async () => {
  const { service, calls } = setup({ getUserAgent: () => '' });
  assert.equal((await service.getReportsForSymbol('AAPL')).error, 'configuration');
  assert.equal(calls.length, 0);
});

test('missing Finnhub key still returns financial statements', async () => {
  const { service, calls } = setup({ getFinnhubToken: () => '' });
  const result = await service.getReportsForSymbol('AAPL');
  assert.equal(result.IS.symbol, 'AAPL');
  assert.equal(result.PI, null);
  assert.equal(result.quoteStatus, 'unconfigured');
  assert.equal(calls.length, 2);
});

test('unknown symbols and invalid inputs do not trigger financial or quote downloads', async () => {
  const { service, calls } = setup();
  assert.equal((await service.getReportsForSymbol('../bad')).error, 'not_found');
  assert.equal(calls.length, 0);
  assert.equal((await service.getReportsForSymbol('UNKNOWN')).error, 'not_found');
  assert.equal(calls.length, 1);
});

test('SEC 403/429 errors remain provider errors and failed requests can recover', async () => {
  for (const [status, error] of [[403, 'unavailable'], [429, 'rate_limited']]) {
    let count = 0;
    const { service, advance } = setup({ fetchImpl: async () => {
      count++;
      return count === 1 ? new Response('', { status }) : new Response(JSON.stringify(tickers));
    } });
    assert.equal((await service.getReportsForSymbol('AAPL')).error, error);
    if (status === 429) {
      assert.equal((await service.getReportsForSymbol('AAPL')).error, error);
      assert.equal(count, 1);
    }
    advance(61000);
    assert.equal((await service.getReportsForSymbol('UNKNOWN')).error, 'not_found');
    assert.equal(count, 2);
  }
});

test('missing Company Facts means unsupported coverage, not an unknown ticker', async () => {
  const { service } = setup({ getFinnhubToken: () => '', fetchImpl: async url => url.includes('company_tickers')
    ? new Response(JSON.stringify(tickers)) : new Response('', { status: 404 }) });
  assert.equal((await service.getReportsForSymbol('AAPL')).error, 'unsupported');
});

test('accepts class ticker aliases and translates SEC dashes to Finnhub dots', async () => {
  const quoteSymbols = [];
  const { service } = setup({ fetchImpl: async url => {
    if (url.includes('finnhub')) quoteSymbols.push(new URL(url).searchParams.get('symbol'));
    return new Response(JSON.stringify(url.includes('company_tickers')
      ? { ...tickers, data: [[123, 'Example class B', 'EX-B', 'NYSE']] }
      : url.includes('companyfacts') ? apple : { c: 20 }));
  } });
  assert.equal((await service.getReportsForSymbol('ex.b')).IS.symbol, 'EX-B');
  assert.deepEqual(quoteSymbols, ['EX.B']);
});

test('quote failures never discard successful financial statements', async () => {
  for (const response of [() => new Response('', { status: 429 }), () => new Response(JSON.stringify({ c: 0 }))]) {
    const { service } = setup({ fetchImpl: async url => url.includes('finnhub') ? response()
      : new Response(JSON.stringify(url.includes('company_tickers') ? tickers : apple)) });
    const result = await service.getReportsForSymbol('AAPL');
    assert.equal(result.IS.symbol, 'AAPL');
    assert.equal(result.PI, null);
    assert.notEqual(result.quoteStatus, 'ok');
  }
});

test('malformed JSON and network timeouts produce a recoverable provider error', async () => {
  for (const fetchImpl of [async () => new Response('<html>'), async () => { throw new Error('timeout'); }]) {
    const { service } = setup({ fetchImpl });
    assert.equal((await service.getReportsForSymbol('AAPL')).error, 'unavailable');
  }
});
