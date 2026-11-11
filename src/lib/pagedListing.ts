// Paginated listings keep their public URLs (/<listing>?page=N). next.config rewrites
// those requests to /paged/<listing>/N, so every page can be served from cache instead
// of being rendered on each request. These helpers hand the listing the same
// searchParams it would have read from the query string.

export type ListingSearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export const firstPageSearchParams = (): ListingSearchParams => Promise.resolve({});

export const pagedSearchParams = (params: Promise<{ page: string }>): ListingSearchParams =>
  params.then(({ page }) => ({ page }));
