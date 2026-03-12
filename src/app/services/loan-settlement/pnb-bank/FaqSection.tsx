"use client";

import React from "react";
import Script from "next/script";

const faqs = [
  {
    question: "Does Punjab National Bank (PNB) have an OTS scheme?",
    answer: "Yes, PNB regularly launches One Time Settlement (OTS) schemes. Currently, the 'Special OTS Scheme 2024-25' is active for NPA accounts with outstanding dues up to ₹5 Crore. This scheme covers personal loans, MSME loans, and agricultural debts."
  },
  {
    question: "Can I settle my PNB Agriculture Loan?",
    answer: "Absolutely. PNB has specific provisions for settling agricultural loans (KCC, Tractor Loans) under its OTS policy. Settlements are often approved based on the value of the security and the borrower's repayment capacity, especially during National Lok Adalats."
  },
  {
    question: "What is the role of Lok Adalat in PNB settlement?",
    answer: "As a PSU bank, PNB actively participates in National Lok Adalats. This is a government-backed forum where disputes are settled amicably. If your loan is referred to a Lok Adalat, we can represent you to ensure you get a fair settlement decree that is legally binding."
  },
  {
    question: "How does PNB treat willful defaulters?",
    answer: "PNB is very strict with willful defaulters (those who have money but refuse to pay). They are not eligible for standard OTS schemes. PNB may initiate criminal proceedings or publish their names. However, if you are wrongly classified as a willful defaulter, we can legally challenge this status."
  },
  {
    question: "Can I settle a PNB Housing Loan?",
    answer: "Settling a secured loan like a Housing Loan is difficult because PNB can sell the property under the SARFAESI Act to recover dues. However, if the property value has fallen or there are legal disputes, a settlement might be possible. We analyze your case to find the best legal route."
  },
  {
    question: "What is the minimum settlement amount PNB accepts?",
    answer: "There is no fixed percentage. For unsecured loans, settlements can range from 30% to 60% of the outstanding amount. For secured loans, it is usually higher. The amount depends on the NPA category (Sub-standard, Doubtful, or Loss) and the realizable value of any security."
  },
  {
    question: "Do I need to visit the PNB branch for settlement?",
    answer: "Initial negotiations can be handled by us remotely. However, for the final approval, PNB may require you to sign the compromise deed at the branch. We guide you through every step to ensure you don't sign anything detrimental to your interests."
  },
  {
    question: "Will PNB remove my name from CIBIL after settlement?",
    answer: "No bank removes the name immediately. The account status will be updated to 'Settled' or 'Post-Write-off Settled'. While this impacts your score, it stops the accumulation of overdues. You can rebuild your score over time."
  },
  {
    question: "How long does the PNB settlement process take?",
    answer: "PSU banks like PNB have a hierarchical approval process (Branch -> Circle Office -> Zonal Office). The process typically takes 45 to 90 days, depending on the loan amount and the authority level required for approval."
  },
  {
    question: "What is the 'Rin Mukti' scheme?",
    answer: "Rin Mukti is one of PNB's popular OTS schemes aimed at small borrowers. It offers attractive waivers on interest and legal charges to encourage borrowers to close their old NPA accounts."
  }
];

const faqSchema = {
  "@context": "https://schema.org",
  "mainEntity": faqs.map((faq) => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer,
    },
  })),
};

export default function FaqSection() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h3 className="text-lg font-bold text-[#A20416] mb-3 flex items-start">
              <span className="text-[#FFC72C] mr-3 text-xl">Q.</span>
              {faq.question}
            </h3>
            <p className="text-gray-700 leading-relaxed pl-8">{faq.answer}</p>
          </div>
        ))}
      </div>
    </>
  );
}
