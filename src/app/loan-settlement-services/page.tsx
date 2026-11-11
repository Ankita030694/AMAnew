import LoanSettlementServices, { generateMetadata as listingMetadata } from './listing';
import { firstPageSearchParams } from '@/lib/pagedListing';

export function generateMetadata() {
  return listingMetadata({ searchParams: firstPageSearchParams() });
}

export default function Page() {
  return <LoanSettlementServices searchParams={firstPageSearchParams()} />;
}
