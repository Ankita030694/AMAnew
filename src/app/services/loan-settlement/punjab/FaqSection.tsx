"use client";

import React from "react";
import Script from "next/script";

const faqs = [
  {
    question: "Is loan settlement legal in Punjab?",
    answer: "Yes, loan settlement is a fully legal process in Punjab. It is recognized by the RBI and facilitated through Lok Adalats organized by the Punjab State Legal Services Authority. It is a legitimate way to close loan accounts when you are unable to pay the full amount due to financial hardship."
  },
  {
    question: "Can private financiers (Arhtiyas) in Punjab file a case against me?",
    answer: "Under the Punjab Registration of Money Lenders Act, 1938, no suit for the recovery of a loan can be filed by a money lender unless they hold a valid license. If you are being harassed by unlicensed private financiers or Arhtiyas, we can help you challenge their claims legally and stop the harassment."
  },
  {
    question: "I have a business loan for my factory in Ludhiana. Can it be settled?",
    answer: "Absolutely. We specialize in settling MSME and industrial loans for businesses in Ludhiana's cycle, textile, and auto-parts sectors. Whether it's a working capital limit or an unsecured business loan, we can negotiate a One Time Settlement (OTS) with the bank to help you save your business from insolvency."
  },
  {
    question: "What if the bank has filed a cheque bounce case in Jalandhar Court?",
    answer: "A Section 138 (cheque bounce) case is a criminal offense, but it is compoundable. This means we can negotiate a settlement with the bank even after the case is filed in the Jalandhar District Court. Once the settlement amount is paid, the bank withdraws the case, and you are acquitted."
  },
  {
    question: "Can recovery agents seize my tractor or machinery?",
    answer: "For unsecured loans, they cannot seize any assets. For secured loans (like machinery or vehicle loans), they must follow the due process under the SARFAESI Act. They cannot forcefully snatch your assets. The Punjab Police have strict instructions to act against recovery agents who use force or intimidation."
  },
  {
    question: "How does the Punjab Relief of Indebtedness Act help me?",
    answer: "The Punjab Relief of Indebtedness Act, 1934, provides specific relief measures for debtors, including the setting up of Debt Conciliation Boards. While modern banking laws often take precedence, this Act still provides a strong legal basis for fair treatment and protection against usurious interest rates charged by informal lenders."
  },
  {
    question: "Will my CIBIL score be ruined forever?",
    answer: "Settlement does lower your CIBIL score temporarily as the account is marked 'Settled'. However, this is a necessary step to get out of the debt trap. Once you are debt-free, you can rebuild your score over 12-24 months. We provide guidance on credit repair post-settlement."
  },
  {
    question: "Do I need to visit the bank's Chandigarh office for settlement?",
    answer: "Not necessarily. Our legal team handles the negotiations with the bank's regional or circle offices, which are often located in Chandigarh or Ludhiana. You do not need to be personally present for every meeting; we represent you."
  },
  {
    question: "Can I settle an agricultural loan (KCC)?",
    answer: "Agricultural loans (Kisan Credit Card) usually have their own specific OTS schemes announced by the government or banks. While we primarily focus on personal and business loans, we can guide you on how to apply for these specific agricultural settlement schemes if you are eligible."
  },
  {
    question: "How do I stop police harassment for debt recovery?",
    answer: "Debt recovery is a civil matter. Police cannot force you to pay a debt or arrest you for default. If recovery agents are using police influence to harass you, we can file a complaint with the Senior Superintendent of Police (SSP) of your district and seek protection from the High Court if necessary."
  }
];

const faqSchema = {
  "@context": "https://schema.org",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

export default function FaqSection() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section id="faqs" className="scroll-mt-32">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions (Punjab)</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                <span className="text-[#D2A02A] mr-3">Q.</span>
                {faq.question}
              </h3>
              <p className="text-gray-700 leading-relaxed pl-8">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
