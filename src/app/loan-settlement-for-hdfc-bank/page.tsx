import { Metadata } from 'next';
import LoanSettlementForHdfcBankClient from './LoanSettlementForHdfcBankClient';

export const metadata: Metadata = {
  title: 'HDFC Bank Loan Settlement: Credit Card & Personal Loan OTS Process',
  description:
    'Struggling with HDFC credit card debt or jumbo personal loans? Learn the official HDFC loan settlement process, waiver percentages, and legal rights with advocates.',
  keywords: [
    'loan settlement for hdfc bank',
    'hdfc credit card settlement',
    'hdfc credit card settlement process',
    'hdfc credit card settlement percentage',
    'hdfc loan settlement',
    'hdfc settlement letter',
    'hdfc personal loan settlement percentage',
    'hdfc bank credit card settlement',
    'hdfc personal loan settlement process',
    'hdfc bank retail assets loan settlement',
    'hdfc bank credit card settlement percentage',
    'hdfc credit card settlement letter',
    'hdfc settlement',
    'hdfc bank settlement letter',
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/loan-settlement-for-hdfc-bank',
  },
  openGraph: {
    title: 'HDFC Bank Loan Settlement: Credit Card & Personal Loan OTS Process',
    description:
      'Struggling with HDFC credit card debt or jumbo personal loans? Learn the official HDFC loan settlement process, waiver percentages, and legal rights with advocates.',
    url: 'https://www.amalegalsolutions.com/loan-settlement-for-hdfc-bank',
    type: 'article',
    siteName: 'AMA Legal Solutions',
    locale: 'en_IN',
    images: [
      {
        url: '/images/og/loan-settlement-for-hdfc-bank.png',
        width: 1200,
        height: 675,
        alt: 'HDFC Bank Loan Settlement - Credit Card & Personal Loan OTS Process',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HDFC Bank Loan Settlement | Credit Card & Personal Loan OTS Process',
    description:
      'Struggling with HDFC credit card debt or jumbo personal loans? Learn the official HDFC loan settlement process, waiver percentages, and legal rights with advocates.',
    images: ['/images/og/loan-settlement-for-hdfc-bank.png'],
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

export default function LoanSettlementForHdfcBankPage() {
  return <LoanSettlementForHdfcBankClient />;
}
