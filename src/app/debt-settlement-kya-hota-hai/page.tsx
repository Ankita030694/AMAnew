import { Metadata } from 'next';
import DebtSettlementKyaHotaHaiClient from './DebtSettlementKyaHotaHaiClient';

export const metadata: Metadata = {
  title: 'Debt Settlement Kya Hota Hai? Legal Process, RBI OTS Rules & Advocate Advisory',
  description: 'Debt settlement kya hota hai? Janein RBI compromise guidelines, Section 63 Indian Contract Act, advocate negotiation, recovery harassment protection, aur authentic No Dues Certificate ka legal process.',
  keywords: [
    'debt settlement kya hota hai',
    'debt settlement meaning in hindi',
    'loan settlement kya hota hai',
    'what is debt settlement in india',
    'rbi debt settlement guidelines',
    'one time settlement ots rules',
    'bank debt settlement legal process',
    'stop recovery harassment legally',
    'section 138 ni act settlement',
    'advocate for debt settlement india',
    'transparent fixed legal debt advisory',
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/debt-settlement-kya-hota-hai',
  },
  openGraph: {
    title: 'Debt Settlement Kya Hota Hai? Legal Meaning, Process & RBI Framework',
    description: 'Comprehensive legal guide explaining what debt settlement is in India under RBI compromise directives. Learn how advocate-led OTS negotiations extinguish debt liabilities, halt recovery harassment, and secure authentic No Dues Certificates.',
    url: 'https://www.amalegalsolutions.com/debt-settlement-kya-hota-hai',
    type: 'article',
    siteName: 'AMA Legal Solutions',
    locale: 'en_IN',
    images: [
      {
        url: '/images/og/debt-settlement-kya-hota-hai.png',
        width: 1200,
        height: 675,
        alt: 'Debt Settlement Kya Hota Hai – Legal Process & RBI OTS Framework Infographic',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Debt Settlement Kya Hota Hai? Meaning, Legal Process & Rights',
    description: 'Statutory debt settlement guide for Indian borrowers. Advocate representation, Section 138 defense, RBI compliance, and transparent fixed legal advisory.',
    images: ['/images/og/debt-settlement-kya-hota-hai.png'],
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

export default function DebtSettlementKyaHotaHaiPage() {
  return <DebtSettlementKyaHotaHaiClient />;
}
