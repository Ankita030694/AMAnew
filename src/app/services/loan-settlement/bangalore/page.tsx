import { Metadata } from 'next';
import BangaloreLoanSettlementClient from './BangaloreLoanSettlementClient';

export const metadata: Metadata = {
  title: 'Loan Settlement Agency in Bangalore: Debt Settlement Lawyers in Bengaluru',
  description:
    'Facing personal loan default or credit card debt in Bengaluru? Consult verified debt settlement lawyers in Bangalore for fintech NBFC and bank negotiations.',
  keywords: [
    'loan settlement agency in bangalore',
    'loan settlement agency bangalore',
    'debt settlement companies in bangalore',
    'debt settlement lawyer bangalore bengaluru',
    'best debt recovery company bangalore',
    'fintech loan settlement bangalore',
    'credit card settlement advocate bangalore',
    'loan counsel - loan settlement, debt settlement lawyer bangalore bengaluru',
    'bangalore lawyer',
    'corporate insolvency resolution law firm in bangalore',
    'personal loan settlement bengaluru',
    'karnataka money lenders act lawyer',
    'karnataka prohibition of charging exorbitant interest act',
    'lok adalat loan settlement bangalore',
    'bengaluru city civil court debt lawyer',
    'navi loan settlement bangalore',
    'kreditbee loan settlement bengaluru',
    'moneyview loan settlement advocate',
    'fibe loan settlement bangalore',
    'stop recovery agent harassment bangalore',
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/services/loan-settlement/bangalore',
  },
  openGraph: {
    title: 'Loan Settlement Agency in Bangalore: Debt Settlement Lawyers in Bengaluru',
    description:
      'Facing personal loan default or credit card debt in Bengaluru? Consult verified debt settlement lawyers in Bangalore for fintech NBFC and bank negotiations.',
    url: 'https://www.amalegalsolutions.com/services/loan-settlement/bangalore',
    type: 'article',
    siteName: 'AMA Legal Solutions',
    locale: 'en_IN',
    images: [
      {
        url: '/images/og/services/loan-settlement/bangalore.png',
        width: 1200,
        height: 675,
        alt: 'Loan Settlement Agency in Bangalore - Debt Settlement Lawyers in Bengaluru',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Loan Settlement Agency in Bangalore: Debt Settlement Lawyers in Bengaluru',
    description:
      'Facing personal loan default or credit card debt in Bengaluru? Consult verified debt settlement lawyers in Bangalore for fintech NBFC and bank negotiations.',
    images: ['/images/og/services/loan-settlement/bangalore.png'],
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

export default function BangaloreLoanSettlementPage() {
  return <BangaloreLoanSettlementClient />;
}
