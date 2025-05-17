export async function getIndexReturns() {
  const res = await fetch('/api/indexReturns');
  if (!res.ok) throw new Error('Failed to fetch');
  const resJSON = await res.json()
  return resJSON;
}