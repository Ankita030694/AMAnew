import { Metadata } from 'next';
import PersonalLoanDebtSettlementClient from './PersonalLoanDebtSettlementClient';

export const metadata: Metadata = {
  title: 'Personal Loan Debt Settlement in India | Legal Relief & OTS Advisory',
  description: 'Legal personal loan debt settlement advisory by AMA Legal Solutions. Halt recovery harassment, negotiate 40%–75% debt waivers under RBI guidelines, and obtain official No Dues Certificates.',
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/personal-loan-debt-settlement',
  },
  openGraph: {
    title: 'Personal Loan Debt Settlement in India | AMA Legal Solutions',
    description: 'Protect your statutory rights and eliminate unmanageable personal loan debt. Advocate-led negotiations, RBI compliance enforcement, and legal representation across India.',
    url: 'https://www.amalegalsolutions.com/personal-loan-debt-settlement',
    type: 'article',
    siteName: 'AMA Legal Solutions',
    locale: 'en_IN',
    images: [
      {
        url: '/images/og/personal-loan-debt-settlement.png',
        width: 1200,
        height: 675,
        alt: 'Personal Loan Debt Settlement Advisory by AMA Legal Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Personal Loan Debt Settlement in India | Legal Relief & OTS Advisory',
    description: 'Expert legal advisory for settling personal loan debt with Indian banks and NBFCs. Stop harassment and resolve non-performing assets legally.',
    images: ['/images/og/personal-loan-debt-settlement.png'],
  },
};

export default function PersonalLoanDebtSettlementPage() {
  return <PersonalLoanDebtSettlementClient />;
}
