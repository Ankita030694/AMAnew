"use client";

import React from "react";
import Script from "next/script";

const faqs = [
  {
    question: "Is loan settlement legal in Andhra Pradesh?",
    answer:
      "Yes, loan settlement is completely legal. It is a recognized financial process where the bank agrees to accept a lower amount to close a Non-Performing Asset (NPA). In Andhra Pradesh, we facilitate this through the **Lok Adalats** organized by the **AP State Legal Services Authority** or through direct negotiation with the bank's recovery department in Vijayawada or Visakhapatnam.",
  },
  {
    question: "Can the bank seize my property in AP without a court order?",
    answer:
      "Under the SARFAESI Act, banks can initiate auction proceedings for secured loans (like home or mortgage loans) without court intervention. However, they must follow a strict legal process, including issuing Section 13(2) and 13(4) notices. If you have received such a notice, we can approach the **Debt Recovery Tribunal (DRT) in Visakhapatnam** to get a stay order and stop the auction.",
  },
  {
    question: "How do I stop harassment from 'Call Money' lenders?",
    answer:
      "The 'Call Money' racket is illegal. If you are being harassed by private lenders charging exorbitant interest, you can file a complaint under the **Andhra Pradesh Money Lenders Act**. We assist you in filing a formal police complaint with the local station or the **AP CID**, and we can also file a civil suit to declare the excessive interest void.",
  },
  {
    question: "Does settlement affect my CIBIL score?",
    answer:
      "Yes, settling a loan will mark the account as 'Settled' in your CIBIL report, which drops your score. However, this is better than a 'Written Off' or 'Suit Filed' status. Once the debt is cleared, we guide you on how to rebuild your credit score over the next 12-24 months using secured credit instruments.",
  },
  {
    question: "Can I settle an agricultural loan in Andhra Pradesh?",
    answer:
      "Crop loans are often subject to government waiver schemes (Runa Mafi). We generally advise against settling these privately if a government scheme is upcoming. However, term loans for agricultural equipment (tractors, harvesters) or allied activities (poultry, aquaculture) are treated as commercial loans and must be settled if you are in default.",
  },
  {
    question: "Where are the Debt Recovery Tribunals (DRT) in AP?",
    answer:
      "Andhra Pradesh currently has one **Debt Recovery Tribunal (DRT)** located in **Visakhapatnam**. It has jurisdiction over all banking debt matters above ₹20 Lakhs for the entire state. All legal filings and stay petitions must be moved there.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer.replace(/\*\*/g, "") // Remove markdown for schema text
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
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions (Andhra Pradesh)</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                <span className="text-[#D2A02A] mr-3">Q.</span>
                {faq.question}
              </h3>
              <div className="text-gray-700 leading-relaxed pl-8">
                <div dangerouslySetInnerHTML={{ 
                  __html: faq.answer.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") 
                }} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
