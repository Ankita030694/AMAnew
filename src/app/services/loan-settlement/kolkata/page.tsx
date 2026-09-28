import { Metadata } from 'next';
import KolkataLoanSettlementClient from './KolkataLoanSettlementClient';

export const metadata: Metadata = {
  title: 'Loan Settlement Agency in Kolkata: Debt Relief Advocates & OTS Services',
  description:
    'Struggling with credit card debt or personal loans in Kolkata? Consult verified loan settlement advocates in Kolkata for bank negotiations, Lok Adalat, and debt relief.',
  keywords: [
    'loan settlement agency in kolkata',
    'best loan settlement agency in kolkata',
    'loan settlement lawyers in kolkata',
    'debt settlement advocate in kolkata',
    'personal loan settlement kolkata',
    'credit card settlement kolkata west bengal',
    'bankshall court loan settlement lawyer',
    'lawyer in kolkata',
    'kolkata lawyer',
    'nclt lawyer in kolkata',
    'drt lawyer in kolkata',
    'arbitration lawyer in kolkata',
    'drat lawyer kolkata',
    'section 34 arbitration lawyer kolkata',
    'lok adalat loan settlement kolkata',
    'alipore court debt recovery advocate',
    'west bengal money lenders act lawyer',
    'stop recovery agent harassment kolkata',
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/services/loan-settlement/kolkata',
  },
  openGraph: {
    title: 'Loan Settlement Agency in Kolkata: Debt Relief Advocates & OTS Services',
    description:
      'Struggling with credit card debt or personal loans in Kolkata? Consult verified loan settlement advocates in Kolkata for bank negotiations, Lok Adalat, and debt relief.',
    url: 'https://www.amalegalsolutions.com/services/loan-settlement/kolkata',
    type: 'article',
    siteName: 'AMA Legal Solutions',
    locale: 'en_IN',
    images: [
      {
        url: '/images/og/services/loan-settlement/kolkata.png',
        width: 1200,
        height: 675,
        alt: 'Loan Settlement Agency in Kolkata - Debt Relief Advocates & OTS Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Loan Settlement Agency in Kolkata | Debt Relief Advocates & OTS Services',
    description:
      'Struggling with credit card debt or personal loans in Kolkata? Consult verified loan settlement advocates in Kolkata for bank negotiations, Lok Adalat, and debt relief.',
    images: ['/images/og/services/loan-settlement/kolkata.png'],
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

export default function KolkataLoanSettlementPage() {
  return <KolkataLoanSettlementClient />;
}
