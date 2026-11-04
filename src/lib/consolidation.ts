import consolidationRedirects from '@/data/consolidationRedirects.json';

const destinations = new Map(
  consolidationRedirects.map((r) => [r.source.toLowerCase(), r.destination])
);

// Returns the final URL for a path that was consolidated via a permanent redirect,
// so templated internal links skip the redirect hop.
export function resolveConsolidatedPath(path: string): string {
  return destinations.get(path.toLowerCase()) ?? path;
}
