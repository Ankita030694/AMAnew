import { Metadata } from 'next';
import LoanSettlementCalculatorClient from './client';

export const metadata: Metadata = {
  title: 'Loan Settlement Amount Calculator India | AMA Legal Solutions',
  description: 'Calculate your potential loan settlement amount with our advanced India-specific calculator. Understand OTS ranges for personal loans, credit cards, and business debts.',
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/loan-settlement-amount-calculator',
  },
  openGraph: {
    title: 'Loan Settlement Amount Calculator India | AMA Legal Solutions',
    description: 'Calculate your potential loan settlement amount with our advanced India-specific calculator. Understand OTS ranges.',
    url: 'https://www.amalegalsolutions.com/loan-settlement-amount-calculator',
    siteName: 'AMA Legal Solutions',
    images: [
      {
        url: 'https://www.amalegalsolutions.com/services/3.png',
        width: 1200,
        height: 630,
        alt: 'Loan Settlement Calculator India',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function LoanSettlementCalculatorPage() {
  return <LoanSettlementCalculatorClient />;
}
