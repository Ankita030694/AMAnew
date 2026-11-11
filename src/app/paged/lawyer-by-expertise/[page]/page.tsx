import LawyerByExpertise, { generateMetadata as listingMetadata } from '@/app/lawyer-by-expertise/listing';
import { pagedSearchParams } from '@/lib/pagedListing';

// Pages are rendered on their first request and then served from cache.
export async function generateStaticParams() {
  return [];
}

type Props = { params: Promise<{ page: string }> };

export function generateMetadata({ params }: Props) {
  return listingMetadata({ searchParams: pagedSearchParams(params) });
}

export default function Page({ params }: Props) {
  return <LawyerByExpertise searchParams={pagedSearchParams(params)} />;
}
