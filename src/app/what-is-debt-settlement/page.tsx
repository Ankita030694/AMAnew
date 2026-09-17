import { Metadata } from 'next';
import WhatIsDebtSettlementClient from './WhatIsDebtSettlementClient';

export const metadata: Metadata = {
  title: 'What is Debt Settlement? Meaning, Legal Process & RBI OTS Framework',
  description: 'Understand what debt settlement is in India. Learn the statutory OTS process under RBI compromise guidelines, legal protections against harassment, and advocate-led negotiation.',
  keywords: [
    'what is debt settlement',
    'debt settlement meaning',
    'debt settlement process india',
    'one time settlement rbi guidelines',
    'how does debt settlement work',
    'loan settlement legal advice',
    'settle personal loan without harassment',
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/what-is-debt-settlement',
  },
  openGraph: {
    title: 'What is Debt Settlement? Legal Meaning, Process & RBI Guidelines',
    description: 'Comprehensive legal guide to debt settlement in India. Discover how advocate-led OTS negotiations extinguish unmanageable debt, stop recovery harassment, and secure authentic bank No Dues Certificates.',
    url: 'https://www.amalegalsolutions.com/what-is-debt-settlement',
    type: 'article',
    siteName: 'AMA Legal Solutions',
    locale: 'en_IN',
    images: [
      {
        url: '/images/og/what-is-debt-settlement.png',
        width: 1200,
        height: 675,
        alt: 'What is Debt Settlement in India - AMA Legal Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What is Debt Settlement? Meaning, Process & Legal Rights',
    description: 'Statutory debt settlement guide for Indian borrowers. Advocate representation, Section 138 defense, RBI compliance, and transparent legal advisory.',
    images: ['/images/og/what-is-debt-settlement.png'],
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

export default function WhatIsDebtSettlementPage() {
  return <WhatIsDebtSettlementClient />;
}
