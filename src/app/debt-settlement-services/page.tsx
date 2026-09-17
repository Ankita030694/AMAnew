import { Metadata } from 'next';
import DebtSettlementServicesClient from './DebtSettlementServicesClient';

export const metadata: Metadata = {
  title: 'Debt Settlement Services India | Legal Resolution & RBI Compromise Advisory',
  description:
    'Professional advocate-led debt settlement services in India. Halt recovery harassment, conduct forensic ledger audits, and negotiate RBI-compliant compromise settlements with authentic No Dues Certificates.',
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/debt-settlement-services',
  },
  keywords: [
    'debt settlement services',
    'debt settlement legal services',
    'loan settlement services india',
    'rbi compromise settlement advisory',
    'advocate debt resolution',
    'unsecured debt settlement services',
    'stop recovery harassment legally',
    'banking litigation lawyer india',
    'commercial debt restructuring',
    'one time settlement ots services',
  ],
  openGraph: {
    title: 'Debt Settlement Services India | Legal Resolution & RBI Compromise Advisory',
    description:
      'Overwhelmed by debt distress, aggressive recovery calls, or impending legal notices? Retain senior banking advocates for structured debt settlement services, RBI compromise negotiations, and verified No Dues Certificates.',
    url: 'https://www.amalegalsolutions.com/debt-settlement-services',
    type: 'article',
    siteName: 'AMA Legal Solutions',
    locale: 'en_IN',
    images: [
      {
        url: '/images/og/debt-settlement-services.png',
        width: 1200,
        height: 675,
        alt: 'Debt Settlement Services - AMA Legal Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Debt Settlement Services India | Advocate-Led Debt Relief & Defense',
    description:
      'Advocate-led commercial debt settlement services in India. Stop recovery agent harassment, eliminate inflated penal charges, and negotiate board-approved bank settlements.',
    images: ['/images/og/debt-settlement-services.png'],
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
  authors: [
    {
      name: 'Anuj Anand Malik',
      url: 'https://www.amalegalsolutions.com/author/anuj-anand-malik',
    },
  ],
};

export default function DebtSettlementServicesPage() {
  return <DebtSettlementServicesClient />;
}
