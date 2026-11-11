import BlogListing, { metadata } from './listing';
import { firstPageSearchParams } from '@/lib/pagedListing';

export { metadata };

// Blogs are published from the CRM without an on-demand revalidation call, so refresh every 5 minutes.
export const revalidate = 300;

export default function Page() {
  return <BlogListing searchParams={firstPageSearchParams()} />;
}
