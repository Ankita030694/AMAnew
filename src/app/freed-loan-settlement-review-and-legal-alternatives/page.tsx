import { Metadata } from 'next';
import FreedLoanSettlementClient from './FreedLoanSettlementClient';

export const metadata: Metadata = {
  title: 'Freed Loan Settlement Review: Is It Safe? Legal Comparison & Alternatives',
  description:
    'Considering Freed for loan settlement? Read an objective legal review of debt relief platforms vs licensed advocates, fee transparency, court representation, and risks.',
  keywords: [
    'freed loan settlement review',
    'freed loan settlement',
    'freed loan',
    'what is freed app',
    'freed loan app',
    'freed review',
    'is freed app safe',
    'freed loan settlement is real or fake',
    'how freed works',
    'how freed app works',
    'freed settlement',
    'freed settlement company',
    'freed debt relief',
    'freed alternatives for debt settlement',
    'debt settlement company vs law firm in india',
    'is debt relief app safe in india',
    'freed app court representation rules',
    'advocates act section 29 30 loan settlement',
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/freed-loan-settlement-review-and-legal-alternatives',
  },
  openGraph: {
    title: 'Freed Loan Settlement Review: Is It Safe? Legal Comparison & Alternatives',
    description:
      'Considering Freed for loan settlement? Read an objective legal review of debt relief platforms vs licensed advocates, fee transparency, court representation, and risks.',
    url: 'https://www.amalegalsolutions.com/freed-loan-settlement-review-and-legal-alternatives',
    type: 'article',
    siteName: 'AMA Legal Solutions',
    locale: 'en_IN',
    images: [
      {
        url: '/images/og/freed-loan-settlement-review-and-legal-alternatives.png',
        width: 1200,
        height: 675,
        alt: 'Freed Loan Settlement Review: Is It Safe? Legal Comparison & Alternatives',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Freed Loan Settlement Review | Is It Safe? Legal Comparison & Alternatives',
    description:
      'Considering Freed for loan settlement? Read an objective legal review of debt relief platforms vs licensed advocates, fee transparency, court representation, and risks.',
    images: ['/images/og/freed-loan-settlement-review-and-legal-alternatives.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  authors: [{ name: 'Anuj Anand Malik', url: 'https://www.amalegalsolutions.com/author/anuj-anand-malik' }],
};

export default function FreedLoanSettlementPage() {
  return <FreedLoanSettlementClient />;
}
