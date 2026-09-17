import { Metadata } from 'next';
import BestDebtSettlementServiceInIndiaClient from './BestDebtSettlementServiceInIndiaClient';

export const metadata: Metadata = {
  title: 'Best Debt Settlement Service in India: Advocate-Led RBI Compromise & Legal Resolution',
  description: 'Discover the best debt settlement service in India. Advocate-led One-Time Settlement (OTS) under RBI frameworks, Section 138 defense, anti-harassment protection, and authentic bank No Dues Certificates.',
  keywords: [
    'best debt settlement service in india',
    'best debt settlement company in india',
    'top loan settlement lawyers in india',
    'advocate led debt settlement',
    'rbi one time settlement legal advice',
    'settle personal loan legally india',
    'credit card settlement legal service',
    'stop recovery harassment advocate',
    'section 138 cheque bounce defense',
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/best-debt-settlement-service-in-india',
  },
  openGraph: {
    title: 'Best Debt Settlement Service in India: Advocate-Led RBI Compromise & Legal Resolution',
    description: 'Expert legal guide to selecting the best debt settlement service in India. Learn why advocate-led representation under RBI compromise frameworks outperforms unregulated agencies and corporate retainers.',
    url: 'https://www.amalegalsolutions.com/best-debt-settlement-service-in-india',
    type: 'article',
    siteName: 'AMA Legal Solutions',
    locale: 'en_IN',
    images: [
      {
        url: '/images/og/best-debt-settlement-service-in-india.png',
        width: 1200,
        height: 675,
        alt: 'Best Debt Settlement Service in India - AMA Legal Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Debt Settlement Service in India: Advocate-Led RBI Compromise & Legal Resolution',
    description: 'Statutory guide on choosing the best debt settlement service in India. Advocate representation, Section 138 defense, RBI anti-harassment enforcement, and transparent fixed advisory.',
    images: ['/images/og/best-debt-settlement-service-in-india.png'],
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

export default function BestDebtSettlementServiceInIndiaPage() {
  return <BestDebtSettlementServiceInIndiaClient />;
}
