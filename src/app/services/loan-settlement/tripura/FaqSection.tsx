"use client";

import React from "react";
import Script from "next/script";

const faqs = [
  {
    question: "Is loan settlement legal in Tripura?",
    answer: "Yes, loan settlement is a fully legal process in Tripura. It is often facilitated through Lok Adalats organized by the Tripura State Legal Services Authority (TSLSA), which settles thousands of bank loan cases annually."
  },
  {
    question: "I am a rubber planter with heavy debt. Can you help?",
    answer: "Absolutely. We understand that falling rubber prices and high production costs have led to significant debt for many planters. We can help you negotiate a One Time Settlement (OTS) with banks, citing market volatility as a genuine reason for default."
  },
  {
    question: "What is the Tripura Money Lenders Act, 2009?",
    answer: "This Act regulates money lending in the state. It requires all money lenders to be licensed and imposes strict caps on interest rates, especially in tribal areas, to prevent exploitation. It also mandates that lenders issue proper receipts for all payments."
  },
  {
    question: "Can the bank auction my land in Tripura Tribal Areas?",
    answer: "Land transfer in Tribal Areas Autonomous District Council (TTAADC) areas is strictly regulated. Banks face significant legal hurdles in auctioning tribal land to non-tribals. We use these legal protections to stop auctions and force banks to negotiate."
  },
  {
    question: "I took a loan from a microfinance company that turned out to be fraudulent. What should I do?",
    answer: "Many people in Tripura have been victims of fraudulent chit funds and microfinance schemes. If you are facing harassment for repayment to a dubious entity, we can help you take legal action and report them to the authorities."
  },
  {
    question: "How does Lok Adalat help in loan settlement?",
    answer: "Lok Adalats in Tripura are very active and effective. They provide a platform for you and the bank to sit across the table and agree on a settlement amount. The decision is final (like a court decree) and saves you from long legal battles."
  },
  {
    question: "My bamboo handicraft business is struggling. Can I settle my Mudra loan?",
    answer: "Yes, Mudra loans and other MSME loans taken for bamboo or cane businesses can be settled. We can demonstrate supply chain issues and market access challenges to negotiate a reduced payoff amount."
  },
  {
    question: "Will recovery agents harass me in Agartala?",
    answer: "Harassment by recovery agents is illegal. If agents are visiting your home or workplace and threatening you, we can file a complaint with the police and the RBI. We handle all communication with the bank so you don't have to deal with them."
  },
  {
    question: "What documents are required for settlement?",
    answer: "You will need your loan account statement, identity proof (Aadhar/PAN), and documents proving your financial hardship (e.g., low rubber yield report, business loss statement). If you are from a tribal area, your ST certificate is also important."
  },
  {
    question: "Does settlement ruin my CIBIL score?",
    answer: "Settlement does lower your CIBIL score temporarily as it is reported as 'Settled' rather than 'Closed'. However, it stops the interest meter and legal action, allowing you to become debt-free and eventually rebuild your score."
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
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions (Tripura)</h2>
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
