import { Metadata } from 'next';
import DebtSettlementIndiaClient from './DebtSettlementIndiaClient';

export const metadata: Metadata = {
  title: 'Debt Settlement India | Strategic Legal Resolution & RBI Compromise Advisory',
  description:
    'Comprehensive legal advisory for debt settlement in India. Retain senior banking advocates to halt recovery agent harassment, negotiate RBI-compliant compromise settlements, and secure authentic bank No Dues Certificates.',
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/debt-settlement-india',
  },
  keywords: [
    'debt settlement india',
    'debt settlement legal services india',
    'loan settlement advocate india',
    'rbi compromise settlement framework',
    'one time settlement ots india',
    'stop recovery harassment legally',
    'banking dispute lawyer india',
    'unsecured debt resolution',
  ],
  openGraph: {
    title: 'Debt Settlement India | Strategic Legal Resolution & RBI Compromise Advisory',
    description:
      'Struggling with unmanageable debt in India? Senior advocate representation to stop unlawful harassment, invoke RBI compromise settlement frameworks, and achieve formal debt resolution with authentic No Dues Certificates.',
    url: 'https://www.amalegalsolutions.com/debt-settlement-india',
    type: 'article',
    siteName: 'AMA Legal Solutions',
    locale: 'en_IN',
    images: [
      {
        url: '/images/og/debt-settlement-india.png',
        width: 1200,
        height: 675,
        alt: 'Debt Settlement India - AMA Legal Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Debt Settlement India | Legal Debt Relief & Advocate Representation',
    description:
      'Advocate-led commercial debt settlement in India. Halt unlawful collection harassment, challenge inflated penal charges, and negotiate board-approved bank settlements.',
    images: ['/images/og/debt-settlement-india.png'],
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

export default function DebtSettlementIndiaPage() {
  return <DebtSettlementIndiaClient />;
}
