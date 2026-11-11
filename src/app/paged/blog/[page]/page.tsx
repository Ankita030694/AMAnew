import BlogListing, { metadata } from '@/app/blog/listing';
import { pagedSearchParams } from '@/lib/pagedListing';

export { metadata };

export const revalidate = 300;

// Pages are rendered on their first request and then served from cache.
export async function generateStaticParams() {
  return [];
}

type Props = { params: Promise<{ page: string }> };

export default function Page({ params }: Props) {
  return <BlogListing searchParams={pagedSearchParams(params)} />;
}
