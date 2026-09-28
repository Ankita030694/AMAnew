import { Metadata } from 'next';
import Section25LegalDefenseClient from './Section25LegalDefenseClient';

export const metadata: Metadata = {
  title: 'Section 25 Payment & Settlement Systems Act: Notice, Bailable Warrant & Legal Defense',
  description:
    'Received a court summons or notice under Section 25 PSSA for NACH auto-debit bounce? Learn bail rules, compounding procedure, and how advocates resolve the case.',
  keywords: [
    'section 25 payment and settlement act bailable or not',
    'section 25 payment and settlement act',
    'section 25 of payment and settlement act',
    'section 25 of the payment and settlement systems act 2007',
    'section 25 of payment and settlement systems act 2007',
    'payment and settlement systems act 2007 section 25',
    'section 25 payment and settlement act punishment',
    'section 25 payment and settlement act bailable or not in hindi',
    'section 25 of payment and settlement act bailable or not',
    'section 25 notice',
    'pasa act section 25',
    'payment and settlement act section 25',
    'nach bounce court notice legal defense',
    'electronic mandate bounce summons lawyer',
    'compounding section 25 pssa case',
    'section 205 crpc exemption loan default',
    'section 25 pssa vs section 138 ni act',
    'nach mandate bounce criminal summons',
    'bailable warrant recall advocate delhi ncr',
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/section-25-payment-and-settlement-act-legal-defense',
  },
  openGraph: {
    title: 'Section 25 Payment & Settlement Systems Act: Notice, Bailable Warrant & Legal Defense',
    description:
      'Received a court summons or notice under Section 25 PSSA for NACH auto-debit bounce? Learn bail rules, compounding procedure, and how advocates resolve the case.',
    url: 'https://www.amalegalsolutions.com/section-25-payment-and-settlement-act-legal-defense',
    type: 'article',
    siteName: 'AMA Legal Solutions',
    locale: 'en_IN',
    images: [
      {
        url: '/images/og/section-25-payment-and-settlement-act-legal-defense.png',
        width: 1200,
        height: 675,
        alt: 'Section 25 Payment & Settlement Systems Act Notice, Bailable Warrant & Legal Defense',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Section 25 Payment & Settlement Systems Act | Notice, Bail & Defense',
    description:
      'Received a court summons or notice under Section 25 PSSA for NACH auto-debit bounce? Learn bail rules, compounding procedure, and how advocates resolve the case.',
    images: ['/images/og/section-25-payment-and-settlement-act-legal-defense.png'],
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

export default function Section25LegalDefensePage() {
  return <Section25LegalDefenseClient />;
}
