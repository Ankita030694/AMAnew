import { Metadata } from 'next';
import BestPersonalLoanSettlementServiceClient from './BestPersonalLoanSettlementServiceClient';

export const metadata: Metadata = {
  title: 'Best Personal Loan Debt Settlement Service in India | AMA Legal Solutions',
  description: 'Looking for the best personal loan debt settlement service in India? AMA Legal Solutions provides advocate-led OTS negotiations, halts recovery harassment, and secures 40%–75% waivers under RBI guidelines.',
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/best-personal-loan-settlement-service',
  },
  openGraph: {
    title: 'Best Personal Loan Debt Settlement Service in India | AMA Legal Solutions',
    description: 'Protect your legal rights and eliminate unmanageable personal loan debt. Senior advocate representation, RBI compliance enforcement, and genuine No Dues Certificates.',
    url: 'https://www.amalegalsolutions.com/best-personal-loan-settlement-service',
    type: 'article',
    siteName: 'AMA Legal Solutions',
    locale: 'en_IN',
    images: [
      {
        url: '/images/og/best-personal-loan-settlement-service.png',
        width: 1200,
        height: 675,
        alt: 'Best Personal Loan Debt Settlement Service in India - AMA Legal Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Personal Loan Debt Settlement Service in India | Legal Debt Relief',
    description: 'Expert legal advisory and advocate-led personal loan debt settlement with Indian banks and NBFCs. Halt recovery agent harassment and resolve NPAs legally.',
    images: ['/images/og/best-personal-loan-settlement-service.png'],
  },
};

export default function BestPersonalLoanSettlementServicePage() {
  return <BestPersonalLoanSettlementServiceClient />;
}
