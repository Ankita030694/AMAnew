import { Metadata } from 'next';
import WhenToChooseDebtSettlementClient from './WhenToChooseDebtSettlementClient';

export const metadata: Metadata = {
  title: 'When to Choose Debt Settlement? Signs, Legal Timing & RBI OTS Guide',
  description: 'Learn when to choose debt settlement in India. Understand critical financial triggers, debt-to-income thresholds, RBI compromise frameworks, and advocate-led OTS negotiation.',
  keywords: [
    'when to choose debt settlement',
    'when to opt for debt settlement',
    'when should i settle my debt',
    'signs you need debt settlement',
    'debt settlement vs consolidation',
    'loan settlement timing india',
    'rbi one time settlement guidelines',
    'when to settle personal loan',
    'credit card settlement criteria',
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/when-to-choose-debt-settlement',
  },
  openGraph: {
    title: 'When to Choose Debt Settlement? Signs, Legal Timing & RBI OTS Guide',
    description: 'Statutory guide on when to choose debt settlement in India. Identify debt distress thresholds, evaluate consolidation vs OTS, halt recovery harassment, and secure bank No Dues Certificates.',
    url: 'https://www.amalegalsolutions.com/when-to-choose-debt-settlement',
    type: 'article',
    siteName: 'AMA Legal Solutions',
    locale: 'en_IN',
    images: [
      {
        url: '/images/og/when-to-choose-debt-settlement.png',
        width: 1200,
        height: 675,
        alt: 'When to Choose Debt Settlement in India - AMA Legal Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'When to Choose Debt Settlement? Signs, Legal Timing & RBI OTS Guide',
    description: 'Expert legal guide on when to choose debt settlement. Learn key insolvency indicators, Section 138 defense, RBI compromise policies, and transparent legal advisory.',
    images: ['/images/og/when-to-choose-debt-settlement.png'],
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

export default function WhenToChooseDebtSettlementPage() {
  return <WhenToChooseDebtSettlementClient />;
}
