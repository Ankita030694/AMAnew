import { Metadata } from 'next';
import BankruptcyLawyerInIndiaClient from './BankruptcyLawyerInIndiaClient';

export const metadata: Metadata = {
  title: 'Bankruptcy Lawyer in India: Personal Insolvency & IBC Debt Relief Advocates',
  description: 'Overwhelmed by unpayable personal loans or business debt? Consult senior bankruptcy lawyers in India for insolvency filings under IBC, DRT defense, and debt relief.',
  keywords: [
    'bankruptcy lawyer',
    'bankruptcy lawyer in india',
    'personal bankruptcy lawyers in india',
    'insolvency lawyer india',
    'how to declare bankruptcy in india for personal loan',
    'debt recovery tribunal lawyers',
    'ibc personal insolvency advocate',
    'corporate insolvency resolution law firm',
    'bankruptcy attorney',
    'insolvency & bankruptcy advocates in mumbai',
    'insolvency lawyer kolkata',
    'corporate insolvency resolution law firm in bangalore',
    'bankruptcy lawyers near me',
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/bankruptcy-lawyer-in-india',
  },
  openGraph: {
    title: 'Bankruptcy Lawyer in India: Personal Insolvency & IBC Debt Relief Advocates',
    description: 'Overwhelmed by unpayable personal loans or business debt? Consult senior bankruptcy lawyers in India for insolvency filings under IBC, DRT defense, and debt relief.',
    url: 'https://www.amalegalsolutions.com/bankruptcy-lawyer-in-india',
    type: 'article',
    siteName: 'AMA Legal Solutions',
    locale: 'en_IN',
    images: [
      {
        url: '/images/og/bankruptcy-lawyer-in-india.png',
        width: 1200,
        height: 675,
        alt: 'Bankruptcy Lawyer in India - Personal Insolvency & IBC Debt Relief Advocates',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bankruptcy Lawyer in India | Personal Insolvency & IBC Debt Relief Advocates',
    description: 'Overwhelmed by unpayable personal loans or business debt? Consult senior bankruptcy lawyers in India for insolvency filings under IBC, DRT defense, and debt relief.',
    images: ['/images/og/bankruptcy-lawyer-in-india.png'],
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

export default function BankruptcyLawyerInIndiaPage() {
  return <BankruptcyLawyerInIndiaClient />;
}
