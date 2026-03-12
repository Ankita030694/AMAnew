"use client";

import React from "react";
import Script from "next/script";

const faqs = [
  {
    question: "Is loan settlement legal in Bihar?",
    answer: "Yes, loan settlement is a fully legal process in Bihar. It is often facilitated through Lok Adalats organized by the Bihar State Legal Services Authority (BSLSA) and is a recognized method for resolving Non-Performing Assets (NPAs) by banks."
  },
  {
    question: "Can recovery agents forcibly seize my vehicle in Patna?",
    answer: "No. In a landmark judgment (May 2023), the Patna High Court (Justice Rajiv Ranjan Prasad) ruled that forceful seizure of vehicles by recovery agents is illegal and a violation of fundamental rights. If this happens, we can help you file an FIR and seek compensation."
  },
  {
    question: "I am harassed by Microfinance companies in my village. What can I do?",
    answer: "Microfinance companies (MFIs) must follow RBI guidelines. They cannot harass you, visit at odd hours, or use abusive language. We can help you file a complaint with the RBI Ombudsman and represent you to stop the harassment immediately."
  },
  {
    question: "Does the Bihar Money Lenders Act protect me from private lenders?",
    answer: "Yes. The Bihar Money Lenders Act, 1974, mandates that all money lenders must be registered. It also prohibits charging compound interest. If an unregistered lender is harassing you, their loan may not be legally recoverable in court."
  },
  {
    question: "Can I settle my Kisan Credit Card (KCC) loan?",
    answer: "Yes, KCC loans can be settled, especially if there has been a crop failure or natural calamity. Banks often have specific One Time Settlement (OTS) schemes for agricultural loans. We can negotiate with the bank on your behalf."
  },
  {
    question: "What is the role of Lok Adalat in loan settlement in Bihar?",
    answer: "Lok Adalats are very effective in Bihar for settling bank disputes amicably. The award passed by a Lok Adalat is final and binding. It saves time and money, and we can represent you in these proceedings to ensure a fair settlement amount."
  },
  {
    question: "I have a small business loan in Muzaffarpur. Can it be settled?",
    answer: "Absolutely. We specialize in settling MSME and business loans. Whether you are a trader in Muzaffarpur or a manufacturer in Gaya, we can analyze your financial situation and negotiate a settlement with the bank to close your loan."
  },
  {
    question: "What happens if a cheque bounce case is filed in Bihar?",
    answer: "A Section 138 case is a criminal offense. However, it can be settled out of court or in a Lok Adalat. Once the settlement amount is paid, the case is withdrawn. It is crucial to have legal representation to handle the court proceedings effectively."
  },
  {
    question: "Will my land be auctioned if I don't pay my loan?",
    answer: "Banks can initiate proceedings under the SARFAESI Act for secured loans. However, for agricultural land, there are specific protections. We can legally challenge any unlawful auction notice and help you save your property through settlement."
  },
  {
    question: "How can AMA Legal Solutions help me in Bihar?",
    answer: "We have a deep understanding of Bihar's legal and economic landscape. From challenging illegal actions by recovery agents to negotiating with regional bank offices in Patna, we provide end-to-end legal support to help you become debt-free."
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
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions (Bihar)</h2>
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
