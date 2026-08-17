import { Metadata } from 'next';
import SettleLoansClient from './SettleLoansClient';

export const metadata: Metadata = {
  title: 'How to Settle Loans in India | Commercial Debt Relief',
  description: 'A comprehensive guide on how to settle loans legally in India. Understand RBI fair practice codes, statutory remedies, and effective debt settlement processes.',
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/services/settle-loans',
  },
  openGraph: {
    title: 'How to Settle Loans in India | Commercial Debt Relief',
    description: 'A comprehensive guide on how to settle loans legally in India. Understand RBI fair practice codes, statutory remedies, and effective debt settlement processes.',
    url: 'https://www.amalegalsolutions.com/services/settle-loans',
    type: 'article',
    images: [
      {
        url: '/infographic/settle-loans.jpg',
        width: 1200,
        height: 675,
        alt: 'Settle Loans Infographic',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Settle Loans in India | Commercial Debt Relief',
    description: 'A comprehensive guide on how to settle loans legally in India. Understand RBI fair practice codes, statutory remedies, and effective debt settlement processes.',
    images: ['/infographic/settle-loans.jpg'],
  },
};

export default function SettleLoansPage() {
  return <SettleLoansClient />;
}
