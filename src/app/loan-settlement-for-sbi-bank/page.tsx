import { Metadata } from 'next';
import LoanSettlementForSbiBankClient from './LoanSettlementForSbiBankClient';

export const metadata: Metadata = {
  title: 'SBI Loan Settlement: One-Time Settlement (OTS Scheme) & Credit Card Process',
  description:
    'Facing default on SBI personal loans, SME loans, or SBI Cards? Discover the official SBI OTS compromise scheme rules, waiver percentage, and legal advocate guidance.',
  keywords: [
    'sbi loan settlement',
    'sbi credit card settlement percentage',
    'sbi credit card settlement process',
    'sbi loan settlement scheme 2026',
    'sbi credit card settlement',
    'sbi card settlement',
    'sbi loan settlement process',
    'sbi card settlement process',
    'sbi card settlement percentage',
    'sbi leagal notice on home loan',
    'sbi credit card settlement kaise kare',
    'can i get loan after settlement sbi',
    'sbi personal loan settlement',
    'sbi rin samadhan scheme ots',
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/loan-settlement-for-sbi-bank',
  },
  openGraph: {
    title: 'SBI Loan Settlement: One-Time Settlement (OTS Scheme) & Credit Card Process',
    description:
      'Facing default on SBI personal loans, SME loans, or SBI Cards? Discover the official SBI OTS compromise scheme rules, waiver percentage, and legal advocate guidance.',
    url: 'https://www.amalegalsolutions.com/loan-settlement-for-sbi-bank',
    type: 'article',
    siteName: 'AMA Legal Solutions',
    locale: 'en_IN',
    images: [
      {
        url: '/images/og/loan-settlement-for-sbi-bank.png',
        width: 1200,
        height: 675,
        alt: 'SBI Loan Settlement - One-Time Settlement (OTS Scheme) & Credit Card Process',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SBI Loan Settlement | One-Time Settlement (OTS Scheme) & Credit Card Process',
    description:
      'Facing default on SBI personal loans, SME loans, or SBI Cards? Discover the official SBI OTS compromise scheme rules, waiver percentage, and legal advocate guidance.',
    images: ['/images/og/loan-settlement-for-sbi-bank.png'],
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

export default function LoanSettlementForSbiBankPage() {
  return <LoanSettlementForSbiBankClient />;
}
