import { Metadata } from 'next';
import PersonalLoanSettlementServicesClient from './PersonalLoanSettlementServicesClient';

export const metadata: Metadata = {
  title: 'Personal Loan Settlement Services in India | Legal Debt Relief & OTS Advisory',
  description: 'Authorized legal personal loan settlement services by AMA Legal Solutions. Halt recovery harassment, negotiate up to 50-70% principal waivers under RBI guidelines, and secure valid No Dues Certificates.',
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/personal-loan-settlement-services',
  },
  openGraph: {
    title: 'Personal Loan Settlement Services in India | AMA Legal Solutions',
    description: 'Protect your statutory rights and eliminate unmanageable personal loan debt. Professional advocate-led negotiations, RBI compliance enforcement, and legal representation across India.',
    url: 'https://www.amalegalsolutions.com/personal-loan-settlement-services',
    type: 'article',
    siteName: 'AMA Legal Solutions',
    locale: 'en_IN',
    images: [
      {
        url: '/images/og/personal-loan-settlement-services.png',
        width: 1200,
        height: 675,
        alt: 'Personal Loan Settlement Services by AMA Legal Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Personal Loan Settlement Services in India | Legal Debt Relief',
    description: 'Comprehensive legal advisory for settling personal loans with Indian banks and NBFCs. Stop harassment and resolve non-performing assets legally.',
    images: ['/images/og/personal-loan-settlement-services.png'],
  },
};

export default function PersonalLoanSettlementServicesPage() {
  return <PersonalLoanSettlementServicesClient />;
}
