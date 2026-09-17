import { Metadata } from 'next';
import DebtSettlementProgramClient from './DebtSettlementProgramClient';

export const metadata: Metadata = {
  title: 'Debt Settlement Program India | Advocate-Led Legal Resolution & RBI OTS',
  description:
    'Comprehensive advocate-led debt settlement program in India. Halt recovery harassment, audit contested bank ledgers, and negotiate binding RBI-compliant compromise settlements with authentic No Dues Certificates.',
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/debt-settlement-program',
  },
  keywords: [
    'debt settlement program',
    'debt settlement program india',
    'legal debt settlement program',
    'advocate led debt settlement program',
    'rbi debt settlement program',
    'unsecured debt settlement program',
    'commercial debt resolution program',
    'stop recovery harassment legal program',
    'bank one time settlement program',
    'drt and lok adalat debt settlement',
  ],
  openGraph: {
    title: 'Debt Settlement Program India | Advocate-Led Legal Resolution & RBI OTS',
    description:
      'Trapped in unsecured debt distress or facing aggressive collection agents? Retain senior banking advocates for a structured debt settlement program, forensic ledger audits, and board-approved compromise settlements.',
    url: 'https://www.amalegalsolutions.com/debt-settlement-program',
    type: 'article',
    siteName: 'AMA Legal Solutions',
    locale: 'en_IN',
    images: [
      {
        url: '/images/og/debt-settlement-program.png',
        width: 1200,
        height: 675,
        alt: 'Debt Settlement Program - AMA Legal Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Debt Settlement Program India | Advocate-Led Resolution & Defense',
    description:
      'Advocate-led commercial debt settlement program in India. Halt unlawful collection harassment, challenge inflated penal charges, and negotiate board-approved bank settlements.',
    images: ['/images/og/debt-settlement-program.png'],
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
  authors: [
    {
      name: 'Anuj Anand Malik',
      url: 'https://www.amalegalsolutions.com/author/anuj-anand-malik',
    },
  ],
};

export default function DebtSettlementProgramPage() {
  return <DebtSettlementProgramClient />;
}
