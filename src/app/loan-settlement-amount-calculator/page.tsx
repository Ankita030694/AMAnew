import { Metadata } from 'next';
import Script from 'next/script';
import LoanSettlementCalculatorClient from './client';

export const metadata: Metadata = {
  title: 'Loan Settlement Calculator India | NPA & OTS Estimator 2026',
  description: "Calculate your One-Time Settlement (OTS) amount in India. Realistic estimates based on NPA duration, bank type, and Section 194R tax rules for 2026.",
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/loan-settlement-amount-calculator',
  },
  openGraph: {
    title: 'Loan Settlement Calculator India | NPA & OTS Estimator 2026',
    description: 'Calculate your One-Time Settlement (OTS) amount in India. Realistic estimates based on NPA duration, bank type, and Section 194R tax rules for 2026.',
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

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Calculate and Negotiate a Loan Settlement in India",
  "description": "Step-by-step guide on estimating One-Time Settlement (OTS) figures, gathering financial hardship evidence, and securing a formal settlement letter from Indian banks.",
  "author": {
    "@type": "Person",
    "name": "Adv. Anuj Anand Malik",
    "jobTitle": "Founder & Managing Partner",
    "url": "https://www.amalegalsolutions.com/author/anuj-anand-malik",
    "image": "https://www.amalegalsolutions.com/anujbhiya.png",
    "sameAs": [
      "https://www.linkedin.com/in/iamanujmalik/",
      "https://www.instagram.com/amalegalsolutions/?hl=en"
    ]
  },
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Calculate Your Total Outstanding & Default Duration",
      "text": "Review your latest loan statement to separate the principal from unpaid interest and penal charges, and determine if your account is SMA-1, SMA-2, or classified as an NPA (>90 days past due)."
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Estimate Realistic Settlement Haircut",
      "text": "Use the loan settlement calculator to identify target settlement ranges (typically 30% to 50% for unsecured loans and 20% to 40% for aged write-offs or ARC accounts)."
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Compile a Comprehensive Hardship Dossier",
      "text": "Gather supporting proof of genuine inability to pay in full, including salary reductions, medical reports, business balance sheets, or termination letters."
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Submit Formal OTS Proposal & Secure Settlement Letter",
      "text": "Submit a written compromise proposal to the bank's competent authority and obtain a written 'Full and Final Settlement Letter' before releasing any payment."
    }
  ]
};

export default function LoanSettlementCalculatorPage() {
  return (
    <>
      <Script
        id="calculator-howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <LoanSettlementCalculatorClient />
    </>
  );
}
