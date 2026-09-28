import { Metadata } from 'next';
import LoanSettlementAgencyFeesAndChargesInIndiaClient from './LoanSettlementAgencyFeesAndChargesInIndiaClient';

export const metadata: Metadata = {
  title: 'Loan Settlement Agency Fees in India: Charges, Retainers & Success Fee Rules',
  description:
    'Wondering how much loan settlement agencies charge in India? Discover legitimate legal fee models, retainer vs success fees, scam red flags, and cost savings.',
  keywords: [
    'loan settlement charges',
    'loan settlement fees',
    'expert panel fees structure for loan settlement',
    'how much do loan settlement agencies charge in india',
    'loan settlement agency commission percentage',
    'debt settlement lawyer fees india',
    'advance fee loan settlement scam alert',
    'contingency fee debt relief india',
    'loan settlement percentage',
    'loan settlement kitne percent hota hai',
    'what is a reasonable settlement offer',
    'loan settlement fees in india',
    'how much do loan settlement agencies charge',
    'debt settlement lawyer retainer cost',
    'advance fee loan settlement scam',
    'transparent legal advisory loan settlement',
    'bar council advocate fee standards loan settlement',
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/loan-settlement-agency-fees-and-charges-in-india',
  },
  openGraph: {
    title: 'Loan Settlement Agency Fees in India: Charges, Retainers & Success Fee Rules',
    description:
      'Wondering how much loan settlement agencies charge in India? Discover legitimate legal fee models, retainer vs success fees, scam red flags, and cost savings.',
    url: 'https://www.amalegalsolutions.com/loan-settlement-agency-fees-and-charges-in-india',
    type: 'article',
    siteName: 'AMA Legal Solutions',
    locale: 'en_IN',
    images: [
      {
        url: '/images/og/loan-settlement-agency-fees-and-charges-in-india.png',
        width: 1200,
        height: 675,
        alt: 'Loan Settlement Agency Fees and Charges in India - Charges, Retainers and Success Fee Rules',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Loan Settlement Agency Fees in India: Charges, Retainers & Success Fee Rules',
    description:
      'Wondering how much loan settlement agencies charge in India? Discover legitimate legal fee models, retainer vs success fees, scam red flags, and cost savings.',
    images: ['/images/og/loan-settlement-agency-fees-and-charges-in-india.png'],
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

export default function LoanSettlementAgencyFeesPage() {
  return <LoanSettlementAgencyFeesAndChargesInIndiaClient />;
}
