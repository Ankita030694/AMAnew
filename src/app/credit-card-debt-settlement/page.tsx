import { Metadata } from 'next';
import CreditCardDebtSettlementClient from './CreditCardDebtSettlementClient';

export const metadata: Metadata = {
  title: 'Credit Card Debt Settlement in India | Legal Protection & OTS Advisory',
  description: 'Legal credit card debt settlement advisory by AMA Legal Solutions. Halt recovery harassment, negotiate 40%–75% debt waivers under RBI compromise guidelines, and obtain official No Dues Certificates.',
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/credit-card-debt-settlement',
  },
  openGraph: {
    title: 'Credit Card Debt Settlement in India | AMA Legal Solutions',
    description: 'Protect your statutory rights and eliminate unmanageable credit card debt. Advocate-led negotiations, RBI compliance enforcement, and legal representation across India.',
    url: 'https://www.amalegalsolutions.com/credit-card-debt-settlement',
    type: 'article',
    siteName: 'AMA Legal Solutions',
    locale: 'en_IN',
    images: [
      {
        url: '/images/og/credit-card-debt-settlement.png',
        width: 1200,
        height: 675,
        alt: 'Credit Card Debt Settlement Advisory by AMA Legal Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Credit Card Debt Settlement in India | Legal Protection & OTS Advisory',
    description: 'Expert legal advisory for settling credit card debt with Indian banks and card issuers. Stop recovery harassment and resolve non-performing assets legally.',
    images: ['/images/og/credit-card-debt-settlement.png'],
  },
};

export default function CreditCardDebtSettlementPage() {
  return <CreditCardDebtSettlementClient />;
}
