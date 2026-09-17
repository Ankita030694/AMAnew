import { Metadata } from 'next';
import DebtSettlementBestWaiverClient from './DebtSettlementBestWaiverClient';

export const metadata: Metadata = {
  title: 'Best Debt Settlement Waiver in India | Advocate-Led OTS & RBI Concession Advisory',
  description:
    'Secure the best debt settlement waiver in India. Retain senior banking advocates to audit loan ledgers, eliminate unlawful penal compounding, and negotiate maximum RBI-compliant One-Time Settlement (OTS) waivers with authentic No Dues Certificates.',
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/debt-settlement-best-waiver',
  },
  keywords: [
    'best debt settlement waiver',
    'debt settlement waiver india',
    'loan settlement waiver percentage',
    'rbi compromise settlement waiver',
    'one time settlement ots waiver',
    'bank loan waiver legal process',
    'advocate debt settlement india',
    'penal interest waiver banking',
  ],
  openGraph: {
    title: 'Best Debt Settlement Waiver in India | Advocate-Led OTS & RBI Concession Advisory',
    description:
      'Struggling with unmanageable debt in India? Senior advocate representation to audit loan ledgers, eliminate unlawful penal compounding, negotiate maximum RBI-approved debt settlement waivers, and obtain authentic bank No Dues Certificates.',
    url: 'https://www.amalegalsolutions.com/debt-settlement-best-waiver',
    type: 'article',
    siteName: 'AMA Legal Solutions',
    locale: 'en_IN',
    images: [
      {
        url: '/images/og/debt-settlement-best-waiver.png',
        width: 1200,
        height: 675,
        alt: 'Best Debt Settlement Waiver - AMA Legal Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Debt Settlement Waiver in India | Advocate-Led OTS Relief',
    description:
      'Advocate-led legal representation to achieve the best debt settlement waiver under RBI compromise directives. Halt harassment, challenge usurious penalties, and secure verified No Dues Certificates.',
    images: ['/images/og/debt-settlement-best-waiver.png'],
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

export default function DebtSettlementBestWaiverPage() {
  return <DebtSettlementBestWaiverClient />;
}
