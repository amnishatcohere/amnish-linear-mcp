export function getISODateDaysAgo(days: number): string {
  const msAgo = days * 24 * 60 * 60 * 1000;
  const date = new Date(Date.now() - msAgo);
  return date.toISOString();
}
