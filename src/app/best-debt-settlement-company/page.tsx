import { Metadata } from 'next';
import BestDebtSettlementCompanyClient from './BestDebtSettlementCompanyClient';

export const metadata: Metadata = {
  title: 'Best Debt Settlement Company in India | AMA Legal Solutions',
  description: 'Looking for the best debt settlement company in India? AMA Legal Solutions provides advocate-led OTS negotiations, halts recovery harassment, and secures 40%–75% waivers under RBI guidelines.',
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/best-debt-settlement-company',
  },
  openGraph: {
    title: 'Best Debt Settlement Company in India | AMA Legal Solutions',
    description: 'Protect your legal rights and eliminate unmanageable debt. Senior advocate representation, RBI compliance enforcement, and genuine No Dues Certificates.',
    url: 'https://www.amalegalsolutions.com/best-debt-settlement-company',
    type: 'article',
    siteName: 'AMA Legal Solutions',
    locale: 'en_IN',
    images: [
      {
        url: '/images/og/best-debt-settlement-company.png',
        width: 1200,
        height: 675,
        alt: 'Best Debt Settlement Company in India - AMA Legal Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Debt Settlement Company in India | Legal Debt Relief Advisory',
    description: 'Expert legal advisory and advocate-led debt settlement with Indian banks and NBFCs. Halt recovery agent harassment and resolve NPAs legally.',
    images: ['/images/og/best-debt-settlement-company.png'],
  },
};

export default function BestDebtSettlementCompanyPage() {
  return <BestDebtSettlementCompanyClient />;
}
