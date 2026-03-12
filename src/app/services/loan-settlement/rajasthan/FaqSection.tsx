"use client";

import React from "react";
import Script from "next/script";

const faqs = [
  {
    question: "Is loan settlement legal in Rajasthan?",
    answer: "Yes, loan settlement is a fully legal process in Rajasthan. It is facilitated through Lok Adalats organized by the Rajasthan State Legal Services Authority (RSLSA) and is a recognized banking practice for resolving Non-Performing Assets (NPAs)."
  },
  {
    question: "Can private money lenders (Sahukars) in Rajasthan seize my property?",
    answer: "Under the Rajasthan Money Lenders Act, 1963, no money lender can carry on business without a valid license. If an unlicensed Sahukar files a suit for recovery, the court is mandated to dismiss it. They cannot forcefully seize your property without a court order. We can help you legally challenge such illegal claims."
  },
  {
    question: "I own a hotel in Udaipur/Jaipur and have defaulted due to low tourism. Can you help?",
    answer: "Yes, we specialize in settling loans for the hospitality sector. We understand the seasonal nature of tourism in Rajasthan and the impact of recent downturns. We can negotiate with banks for a One Time Settlement (OTS) based on your current cash flow, helping you save your hotel or resort from auction."
  },
  {
    question: "What if a cheque bounce case is filed against me in Jaipur Court?",
    answer: "A Section 138 (cheque bounce) case filed in Jaipur or Jodhpur courts is a criminal offense but is compoundable. We can represent you in court and negotiate a settlement with the bank. Once the settlement amount is paid, the case is withdrawn, and you are acquitted."
  },
  {
    question: "Can recovery agents harass my family in Rajasthan?",
    answer: "Absolutely not. The Reserve Bank of India and the Rajasthan High Court have strict guidelines against harassment. Recovery agents cannot visit your home at odd hours, use abusive language, or threaten your family. If this happens, we can file a complaint with the local police and seek protection."
  },
  {
    question: "How does the Rajasthan Relief of Agricultural Indebtedness Act help?",
    answer: "The Rajasthan Relief of Agricultural Indebtedness Act, 1957, provides a legal framework for debt relief for agriculturists. It allows for the determination of fair debt amounts and can be a crucial defense for farmers and those dependent on agriculture facing overwhelming debt."
  },
  {
    question: "Do I need to attend hearings at the High Court in Jodhpur?",
    answer: "If your matter reaches the High Court (either the Principal Seat in Jodhpur or the Bench in Jaipur), our experienced lawyers will represent you. You generally do not need to be personally present for every hearing unless specifically directed by the court."
  },
  {
    question: "Can I settle a business loan for my textile unit in Bhilwara?",
    answer: "Yes, we have extensive experience in settling MSME loans for textile units in Bhilwara and marble industries in Kishangarh. We prepare a strong case based on market conditions to negotiate a favorable settlement with the bank."
  },
  {
    question: "Will settling a loan affect my ability to get a loan in the future?",
    answer: "Settlement does impact your CIBIL score temporarily. However, it is a better option than a 'Written Off' status or facing legal action. Once you are debt-free, you can work on rebuilding your credit score over time."
  },
  {
    question: "How do I verify if a money lender is licensed in Rajasthan?",
    answer: "You can ask the lender to show their valid license issued under the Rajasthan Money Lenders Act. If they refuse or do not have one, any loan agreement may be legally unenforceable in court. We can assist you in verifying their status and taking appropriate legal action."
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
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions (Rajasthan)</h2>
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
