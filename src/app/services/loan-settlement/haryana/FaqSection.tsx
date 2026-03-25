"use client";

import React from "react";
import Script from "next/script";

const faqs = [
  {
    question: "Is loan settlement legal in Haryana?",
    answer: "Yes, loan settlement is a completely legal financial process in Haryana. It is governed by RBI guidelines and facilitated by the Haryana State Legal Services Authority (HALSA) through Lok Adalats. The settlement awards passed by Lok Adalats in districts like Gurugram and Faridabad have the same legal status as a civil court decree and are final and binding."
  },
  {
    question: "Can recovery agents harass me in Gurugram?",
    answer: "Absolutely not. The Gurugram Police have taken strict action against recovery agents and call centers involved in harassment. Under RBI guidelines and local police directives, agents cannot call at odd hours, use abusive language, or threaten you. If they do, you can file a complaint with the Cyber Cell or the local police station, and we can assist you in this legal process."
  },
  {
    question: "What if I have a cheque bounce case in Faridabad Court?",
    answer: "If a Section 138 (cheque bounce) case has been filed against you in the Faridabad District Court, it is a criminal offense but compoundable. This means we can still negotiate a settlement with the bank. Once the settlement amount is paid, we will move an application in the court to compound the offense and close the case, acquitting you of the charges."
  },
  {
    question: "How does the Punjab & Haryana High Court view pension recovery?",
    answer: "The Hon'ble Punjab & Haryana High Court has taken a strong stance against arbitrary recoveries, especially from pensioners and widows. While this specifically applies to excess payments by the government, the principle of 'dignity' and 'due process' extends to all borrowers. Banks cannot simply deduct amounts without your consent or due legal process."
  },
  {
    question: "I have a business loan in Manesar. Can it be settled?",
    answer: "Yes, we specialize in settling MSME and business loans for industrial units in Manesar and Panipat. Whether it's a working capital overdraft or an unsecured business loan, we can negotiate with the lender for a One Time Settlement (OTS) based on your current cash flow and business realities."
  },
  {
    question: "Will settlement affect my CIBIL score?",
    answer: "Yes, settling a loan will result in your account being marked as 'Settled' in your credit report, which can lower your CIBIL score by 50-100 points. However, this is a better outcome than a 'Default' or 'Written Off' status. After settlement, you can rebuild your score over 12-24 months by using secured credit cards and paying other bills on time."
  },
  {
    question: "What documents are required for loan settlement in Haryana?",
    answer: "You will need to provide proof of your financial hardship. This includes recent bank statements, salary slips showing reduced income, termination letters (if unemployed), or medical records. For Lok Adalat settlements, you may also need to submit a specific application form to the Legal Services Authority along with your KYC documents."
  },
  {
    question: "Can banks in Haryana seize my property for personal loan default?",
    answer: "For unsecured personal loans, banks cannot seize your property. However, for secured loans like home loans, they can initiate proceedings under the SARFAESI Act. In Haryana, to take physical possession of the property, the bank must obtain an order from the District Magistrate (DM). They cannot forcefully evict you without this due process."
  },
  {
    question: "How long does the settlement process take?",
    answer: "The timeline depends on the bank and the negotiation process. A direct settlement negotiation typically takes 3 to 6 months. If the matter is referred to a National Lok Adalat in Haryana, it can be resolved on the specific date of the Adalat, provided the terms are agreed upon in advance."
  },
  {
    question: "Do I need a lawyer for loan settlement in Panipat or Ambala?",
    answer: "While you can represent yourself, having a lawyer is highly advantageous. Banks are represented by experienced legal teams. A lawyer can protect your rights, prevent harassment by recovery agents, ensuring compliance with RBI and state-specific laws, and verify that the settlement agreement is legally watertight."
  }
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
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
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions (Haryana)</h2>
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
