import { Metadata } from 'next';
import EssentialsOfAValidDebtSettlementLetterClient from './EssentialsOfAValidDebtSettlementLetterClient';

export const metadata: Metadata = {
  title: 'Essentials of a Valid Debt Settlement Letter: How to Check Fake vs Real',
  description: 'Learn how to check if the debt settlement letter is fake or real. Discover the 7 mandatory legal essentials of a valid bank OTS sanction letter in India, statutory RBI guidelines, and advocate verification.',
  keywords: [
    'how to check if the debt settlement letter is fake or real',
    'essentials of a valid debt settlement letter',
    'fake debt settlement letter verification',
    'bank ots sanction letter check',
    'how to verify loan settlement letter india',
    'genuine debt settlement letter format',
    'recovery agent fake settlement letter',
    'rbi guidelines on settlement letters',
    'advocate verified debt settlement letter',
    'no dues certificate verification bank',
    'transparent fixed legal debt advisory',
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/essentials-of-a-valid-debt-settlement-letter',
  },
  openGraph: {
    title: 'Essentials of a Valid Debt Settlement Letter: How to Check Fake vs Real',
    description: 'Exhaustive legal guide on how to check if a debt settlement letter is fake or real. Protect yourself against fraudulent recovery scams with advocate-certified verification and RBI compliance.',
    url: 'https://www.amalegalsolutions.com/essentials-of-a-valid-debt-settlement-letter',
    type: 'article',
    siteName: 'AMA Legal Solutions',
    locale: 'en_IN',
    images: [
      {
        url: '/images/og/essentials-of-a-valid-debt-settlement-letter.png',
        width: 1200,
        height: 675,
        alt: 'Essentials of a Valid Debt Settlement Letter – How to Check Fake vs Real Verification',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Check if Debt Settlement Letter is Fake or Real? Legal Guide',
    description: 'Critical legal verification guide for Indian borrowers. Verify bank letterhead, CBS reference numbers, authorized signatory, and avoid recovery agent scams.',
    images: ['/images/og/essentials-of-a-valid-debt-settlement-letter.png'],
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

export default function EssentialsOfAValidDebtSettlementLetterPage() {
  return <EssentialsOfAValidDebtSettlementLetterClient />;
}
