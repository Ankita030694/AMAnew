"use client";

import React from "react";
import Script from "next/script";

const faqs = [
  {
    question: "Is loan settlement legal in West Bengal?",
    answer: "Yes, loan settlement is a completely legal financial process in West Bengal. It is governed by RBI guidelines and facilitated by the West Bengal State Legal Services Authority (WBSLSA) through Lok Adalats. The settlement awards passed by Lok Adalats in West Bengal have the same legal status as a civil court decree and are final and binding."
  },
  {
    question: "How can I settle my loan through Lok Adalat in Kolkata?",
    answer: "To settle a loan through Lok Adalat in Kolkata, you can approach the District Legal Services Authority (DLSA) or the Calcutta High Court Legal Services Committee. Banks also refer NPA accounts to Lok Adalats. You or your lawyer can file an application for pre-litigation counseling. Once the matter is taken up, a conciliator helps both parties reach a mutually agreed settlement amount."
  },
  {
    question: "What is the role of the West Bengal Money-Lenders Act in debt relief?",
    answer: "The Bengal Money-Lenders Act, 1940, is a crucial law that protects borrowers from illegal private money lenders in the state. It mandates that all money lenders must be licensed and caps the maximum interest rates they can charge. If you are being harassed by an unlicensed private lender in West Bengal, this Act provides legal grounds to file a complaint and seek relief."
  },
  {
    question: "Can I settle a credit card debt in West Bengal?",
    answer: "Yes, credit card debts are among the most common types of unsecured debts settled in West Bengal. Since credit cards have very high interest rates, banks are often willing to negotiate a settlement to recover a portion of the principal rather than writing it off completely. We help clients in Kolkata, Howrah, and Siliguri negotiate substantial reductions in their credit card dues."
  },
  {
    question: "Will settlement affect my CIBIL score?",
    answer: "Yes, settling a loan will result in your account being marked as 'Settled' in your credit report, which can lower your CIBIL score by 50-100 points. However, this is a better outcome than a 'Default' or 'Written Off' status. After settlement, you can rebuild your score over 12-24 months by using secured credit cards and paying other bills on time."
  },
  {
    question: "What documents are required for loan settlement in West Bengal?",
    answer: "You will need to provide proof of your financial hardship. This includes recent bank statements, salary slips showing reduced income, termination letters (if unemployed), or medical records. For Lok Adalat settlements, you may also need to submit a specific application form to the Legal Services Authority along with your KYC documents."
  },
  {
    question: "Can banks in West Bengal seize my property for personal loan default?",
    answer: "For unsecured personal loans, banks cannot seize your property. However, for secured loans like home loans, they can initiate proceedings under the SARFAESI Act. In West Bengal, to take physical possession of the property, the bank must obtain an order from the District Magistrate (DM) or Chief Metropolitan Magistrate (CMM). They cannot forcefully evict you without this due process."
  },
  {
    question: "How long does the settlement process take?",
    answer: "The timeline depends on the bank and the negotiation process. A direct settlement negotiation typically takes 3 to 6 months. If the matter is referred to a National Lok Adalat in West Bengal, it can be resolved on the specific date of the Adalat, provided the terms are agreed upon in advance."
  },
  {
    question: "Do I need a lawyer for loan settlement in Kolkata?",
    answer: "While you can represent yourself, having a lawyer is highly advantageous. Banks are represented by experienced legal teams. A lawyer can protect your rights, prevent harassment by recovery agents, ensuring compliance with RBI and state-specific laws, and verify that the settlement agreement is legally watertight."
  },
  {
    question: "How does AMA Legal Solutions help borrowers in West Bengal?",
    answer: "AMA Legal Solutions offers expert legal representation for borrowers across West Bengal. We handle negotiations with banks, represent you in Lok Adalats and Debt Recovery Tribunals (DRT) in Kolkata, and protect you from harassment using the Bengal Money-Lenders Act and RBI guidelines. Our goal is to help you become debt-free with dignity."
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
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions (West Bengal)</h2>
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
