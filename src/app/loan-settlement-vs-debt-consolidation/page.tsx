import { Metadata } from 'next';
import LoanSettlementVsDebtConsolidationClient from './LoanSettlementVsDebtConsolidationClient';

export const metadata: Metadata = {
  title: 'Loan Settlement vs Debt Consolidation | AMA Legal Guide',
  description:
    'Compare loan settlement and debt consolidation under RBI rules. Discover which strategy clears debt faster, saves more interest, and protects your rights.',
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/loan-settlement-vs-debt-consolidation',
  },
  keywords: [
    'which is better loan settlement or debt consolidation',
    'loan settlement vs debt consolidation',
    'debt consolidation vs loan settlement in india',
    'rbi compromise settlement',
    'debt consolidation loan eligibility',
    'one time settlement vs debt consolidation',
    'ama legal solutions debt relief',
  ],
  authors: [{ name: 'Anuj Anand Malik', url: 'https://www.amalegalsolutions.com/author/anuj-anand-malik' }],
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
  openGraph: {
    title: 'Loan Settlement vs Debt Consolidation | AMA Legal Guide',
    description:
      'Compare loan settlement and debt consolidation under RBI rules. Discover which strategy clears debt faster, saves more interest, and protects your rights.',
    url: 'https://www.amalegalsolutions.com/loan-settlement-vs-debt-consolidation',
    type: 'article',
    siteName: 'AMA Legal Solutions',
    locale: 'en_IN',
    images: [
      {
        url: '/images/og/loan-settlement-vs-debt-consolidation.png',
        width: 1200,
        height: 675,
        alt: 'Which is Better Loan Settlement or Debt Consolidation - AMA Legal Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Loan Settlement vs Debt Consolidation | AMA Legal Guide',
    description:
      'Compare loan settlement and debt consolidation under RBI rules. Discover which strategy clears debt faster, saves more interest, and protects your rights.',
    images: ['/images/og/loan-settlement-vs-debt-consolidation.png'],
  },
};

export default function LoanSettlementVsDebtConsolidationPage() {
  return <LoanSettlementVsDebtConsolidationClient />;
}
