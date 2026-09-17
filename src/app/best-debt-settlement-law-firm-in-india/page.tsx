import { Metadata } from 'next';
import BestDebtSettlementLawFirmInIndiaClient from './BestDebtSettlementLawFirmInIndiaClient';

export const metadata: Metadata = {
  title: 'Best Debt Settlement Law Firm in India | Advocate-Led RBI OTS Advisory',
  description: 'Looking for the best debt settlement law firm in India? AMA Legal Solutions delivers advocate-led One-Time Settlement (OTS), RBI anti-harassment protection, and court-certified debt closure.',
  keywords: [
    'best debt settlement law firm in india',
    'debt settlement law firm in india',
    'top loan settlement lawyers india',
    'advocate led debt settlement',
    'rbi compromise settlement law firm',
    'debt resolution lawyers delhi ncr india',
    'legal notice for loan settlement',
    'section 138 ni act defense lawyers',
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/best-debt-settlement-law-firm-in-india',
  },
  openGraph: {
    title: 'Best Debt Settlement Law Firm in India | AMA Legal Solutions',
    description: 'Premier advocate-led debt settlement legal counsel in India. Shield against recovery agent harassment, defend Section 138 proceedings, and negotiate formal RBI compromise settlements.',
    url: 'https://www.amalegalsolutions.com/best-debt-settlement-law-firm-in-india',
    type: 'article',
    siteName: 'AMA Legal Solutions',
    locale: 'en_IN',
    images: [
      {
        url: '/images/og/best-debt-settlement-law-firm-in-india.png',
        width: 1200,
        height: 675,
        alt: 'Best Debt Settlement Law Firm in India - AMA Legal Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Debt Settlement Law Firm in India | Advocate Advisory',
    description: 'Expert advocate representation for unmanageable debt, banking dispute defense, RBI compromise settlements, and authentic bank No Dues Certificates.',
    images: ['/images/og/best-debt-settlement-law-firm-in-india.png'],
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

export default function BestDebtSettlementLawFirmInIndiaPage() {
  return <BestDebtSettlementLawFirmInIndiaClient />;
}
