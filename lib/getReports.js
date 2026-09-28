import { createStockDataService } from './sec/client.mjs';
import { unstable_cache } from 'next/cache';

const inFlight = new Map();
const service = createStockDataService({
  cacheFundamentals(key, ttl, loader) {
    if (!inFlight.has(key)) {
      const load = unstable_cache(loader, ['sec-edgar-v3', key], { revalidate: ttl / 1000 });
      inFlight.set(key, load().finally(() => inFlight.delete(key)));
    }
    return inFlight.get(key);
  },
});

export const getReportsForSymbol = service.getReportsForSymbol;
