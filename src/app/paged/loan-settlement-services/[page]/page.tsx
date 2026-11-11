import LoanSettlementServices, { generateMetadata as listingMetadata } from '@/app/loan-settlement-services/listing';
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
  return <LoanSettlementServices searchParams={pagedSearchParams(params)} />;
}
