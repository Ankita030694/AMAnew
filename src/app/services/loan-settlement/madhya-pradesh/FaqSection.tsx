"use client";

import React from "react";
import Script from "next/script";

const faqs = [
  {
    question: "Is loan settlement legal in Madhya Pradesh?",
    answer: "Yes, loan settlement is a fully legal process in Madhya Pradesh. It is often facilitated through Lok Adalats organized by the MP State Legal Services Authority (MPSLSA) and is a recognized method for resolving Non-Performing Assets (NPAs) by banks."
  },
  {
    question: "Can recovery agents forcibly seize my vehicle in Indore?",
    answer: "No. The Madhya Pradesh High Court has taken a strict stance against forceful seizure of vehicles. Banks must follow the due process of law. If agents are harassing you or using force, we can help you file a police complaint and seek legal protection."
  },
  {
    question: "I have a business loan in Pithampur Industrial Area. Can it be settled?",
    answer: "Yes, we specialize in settling MSME and industrial loans. Whether you are in Pithampur, Dewas, or Govindpura (Bhopal), we can analyze your business cash flow and negotiate a One Time Settlement (OTS) with the bank to close your loan account."
  },
  {
    question: "Does the MP Money Lenders Act protect me from private Sahukars?",
    answer: "Yes. The Madhya Pradesh Money Lenders Act, 1934 (amended in 2020), mandates that all money lenders must be registered. Crucially, loans advanced by unregistered lenders are not legally recoverable in court. We can use this to protect you from illegal harassment."
  },
  {
    question: "Can I settle my Kisan Credit Card (KCC) loan?",
    answer: "Yes, KCC loans for soybean and wheat farmers in the Malwa and Nimar regions can be settled. Banks often have specific schemes for agricultural distress. We can negotiate with the bank to waive interest and settle the principal amount."
  },
  {
    question: "What is the role of Lok Adalat in loan settlement in MP?",
    answer: "Lok Adalats in MP are very effective for settling bank disputes amicably. The award passed by a Lok Adalat is final and binding. It saves time and court fees. We can represent you in Lok Adalats in Indore, Bhopal, Jabalpur, and Gwalior."
  },
  {
    question: "I am facing a cheque bounce case in Gwalior. What should I do?",
    answer: "A Section 138 case is serious but settleable. We can help you negotiate an out-of-court settlement or resolve it through the Lok Adalat. Once the settlement amount is paid, the criminal case is withdrawn."
  },
  {
    question: "Will my property be auctioned under SARFAESI Act?",
    answer: "Banks can initiate SARFAESI proceedings for secured loans. However, you have rights. We can challenge the auction notice in the Debt Recovery Tribunal (DRT) in Jabalpur if the proper procedure was not followed, giving you time to arrange a settlement."
  },
  {
    question: "How does the 2020 Amendment to the MP Money Lenders Act help me?",
    answer: "The 2020 amendment is a game-changer. It strictly prohibits unregistered lenders from recovering loans through courts. It also empowers the government to cap interest rates. If a private lender is harassing you, this law is your biggest shield."
  },
  {
    question: "How can AMA Legal Solutions help me in Madhya Pradesh?",
    answer: "We have a deep understanding of MP's legal landscape, including the specific provisions for MSMEs and farmers. From Indore to Jabalpur, we provide end-to-end legal support to stop harassment, negotiate with banks, and help you become debt-free."
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
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions (Madhya Pradesh)</h2>
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
