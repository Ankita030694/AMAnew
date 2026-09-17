import { Metadata } from 'next';
import DebtSettlementLetterClient from './DebtSettlementLetterClient';

export const metadata: Metadata = {
  title: 'Debt Settlement Letter: Statutory Format, Bank Negotiation & RBI OTS Guide',
  description: 'Understand the legal drafting, bank negotiation, and RBI statutory framework for a debt settlement letter in India. Learn how advocate-drafted OTS hardship letters secure compromise sanctions and prevent recovery litigation.',
  keywords: [
    'debt settlement letter',
    'debt settlement proposal letter format india',
    'one time settlement letter format rbi',
    'bank loan settlement hardship letter',
    'ots sanction letter verification',
    'how to write debt settlement letter to bank',
    'advocate certified settlement letter',
    'debt compromise agreement drafting',
    'no dues certificate bank letter',
    'settle personal loan settlement letter',
    'transparent fixed legal debt advisory',
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/debt-settlement-letter',
  },
  openGraph: {
    title: 'Debt Settlement Letter: Statutory Drafting, Bank Negotiation & RBI OTS Guide',
    description: 'Comprehensive legal guide to debt settlement letters in India. Master advocate-certified OTS proposal drafting, bank compromise committee negotiation, fake sanction letter detection, and authentic No Dues Certificates.',
    url: 'https://www.amalegalsolutions.com/debt-settlement-letter',
    type: 'article',
    siteName: 'AMA Legal Solutions',
    locale: 'en_IN',
    images: [
      {
        url: '/images/og/debt-settlement-letter.png',
        width: 1200,
        height: 675,
        alt: 'Debt Settlement Letter – Statutory Drafting & RBI OTS Guide Infographic',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Debt Settlement Letter: Legal Drafting & Bank OTS Negotiation Guide',
    description: 'Statutory debt settlement letter guide for Indian borrowers. Advocate representation, Section 63 Indian Contract Act, RBI compliance, and transparent legal advisory.',
    images: ['/images/og/debt-settlement-letter.png'],
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

export default function DebtSettlementLetterPage() {
  return <DebtSettlementLetterClient />;
}
