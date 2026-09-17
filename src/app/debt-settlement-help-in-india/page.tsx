import { Metadata } from 'next';
import DebtSettlementHelpInIndiaClient from './DebtSettlementHelpInIndiaClient';

export const metadata: Metadata = {
  title: 'Debt Settlement Help in India: Advocate-Led RBI OTS Advisory & Legal Defense',
  description: 'Looking for expert debt settlement help in India? AMA Legal Solutions provides advocate-led One-Time Settlement (OTS), RBI anti-harassment defense, and authentic bank No Dues Certificates.',
  keywords: [
    'debt settlement help',
    'debt settlement help in india',
    'loan settlement help',
    'legal help for debt settlement',
    'advocate led debt settlement help',
    'rbi compromise settlement help',
    'one time settlement help india',
    'settle personal loan without harassment',
    'section 138 legal help debt settlement',
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/debt-settlement-help-in-india',
  },
  openGraph: {
    title: 'Debt Settlement Help in India: Advocate-Led RBI OTS Advisory',
    description: 'Premier advocate-led debt settlement legal counsel in India. Shield against recovery agent harassment, defend Section 138 proceedings, and negotiate formal RBI compromise settlements.',
    url: 'https://www.amalegalsolutions.com/debt-settlement-help-in-india',
    type: 'article',
    siteName: 'AMA Legal Solutions',
    locale: 'en_IN',
    images: [
      {
        url: '/images/og/debt-settlement-help-in-india.png',
        width: 1200,
        height: 675,
        alt: 'Debt Settlement Help in India - AMA Legal Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Debt Settlement Help in India | Advocate Legal Advisory',
    description: 'Expert advocate representation for unmanageable debt, banking dispute defense, RBI compromise settlements, and authentic bank No Dues Certificates.',
    images: ['/images/og/debt-settlement-help-in-india.png'],
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

export default function DebtSettlementHelpInIndiaPage() {
  return <DebtSettlementHelpInIndiaClient />;
}
