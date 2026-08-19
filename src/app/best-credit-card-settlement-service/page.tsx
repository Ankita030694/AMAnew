import { Metadata } from 'next';
import BestCreditCardSettlementServiceClient from './BestCreditCardSettlementServiceClient';

export const metadata: Metadata = {
  title: 'Best Credit Card Debt Settlement Service in India | AMA Legal Solutions',
  description: 'Rated India’s best credit card debt settlement service. Advocate-led legal representation, RBI-compliant One Time Settlement (OTS) negotiations, 40%–75% debt waivers, and instant anti-harassment protection.',
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/best-credit-card-settlement-service',
  },
  openGraph: {
    title: 'Best Credit Card Debt Settlement Service in India | AMA Legal Solutions',
    description: 'Eliminate overwhelming credit card debt with India’s top-rated legal debt settlement service. Stop recovery harassment, eliminate compounding finance charges, and secure official No Dues Certificates.',
    url: 'https://www.amalegalsolutions.com/best-credit-card-settlement-service',
    type: 'article',
    siteName: 'AMA Legal Solutions',
    locale: 'en_IN',
    images: [
      {
        url: '/images/og/best-credit-card-settlement-service.png',
        width: 1200,
        height: 675,
        alt: 'Best Credit Card Debt Settlement Service in India by AMA Legal Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Credit Card Debt Settlement Service in India | AMA Legal Solutions',
    description: 'Expert advocate-led credit card debt settlement in India. Eliminate 40%–75% of credit card dues under RBI compromise settlement frameworks and obtain certified No Dues Certificates.',
    images: ['/images/og/best-credit-card-settlement-service.png'],
  },
};

export default function BestCreditCardSettlementServicePage() {
  return <BestCreditCardSettlementServiceClient />;
}
