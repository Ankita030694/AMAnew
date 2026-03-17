import { Metadata } from 'next';
import HowToSettleLoanClient from './client';

export const metadata: Metadata = {
  title: 'How to Settle Loan with Bank in India (2025 Guide) | AMA Legal Solutions',
  description: 'Master the legal process of loan settlement in India with our comprehensive 2025 guide. Learn about RBI guidelines, OTS schemes, and borrower rights to settle your debts legally.',
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/how-to-settle-loan-with-bank',
  },
  openGraph: {
    title: 'How to Settle Loan with Bank in India (2025 Guide) | AMA Legal Solutions',
    description: 'Master the legal process of loan settlement in India with our comprehensive 2025 guide. Learn about RBI guidelines, OTS schemes, and borrower rights.',
    url: 'https://www.amalegalsolutions.com/how-to-settle-loan-with-bank',
    siteName: 'AMA Legal Solutions',
    images: [
      {
        url: 'https://www.amalegalsolutions.com/newAssets/legal-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Loan Settlement Guide India',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
};

export default function HowToSettleLoanPage() {
  return <HowToSettleLoanClient />;
}
