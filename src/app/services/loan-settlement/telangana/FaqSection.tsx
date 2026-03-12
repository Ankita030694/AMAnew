"use client";

import React from "react";
import Script from "next/script";

const faqs = [
  {
    question: "Is loan settlement legal in Telangana?",
    answer: "Yes, loan settlement is a fully legal process in Telangana. It is recognized under the **Legal Services Authorities Act, 1987** and facilitated by the **Telangana State Legal Services Authority (TSLSA)**. Banks often prefer this route to clear Non-Performing Assets (NPAs) without lengthy litigation in Hyderabad courts."
  },
  {
    question: "I live in Hyderabad. Which DRT handles my case?",
    answer: "Hyderabad has two Debt Recovery Tribunals (DRTs). **DRT-1** and **DRT-2**, both located in the **Triveni Complex, Abids**. The jurisdiction depends on the specific bank and the area. We help you identify the correct tribunal to file stay orders against SARFAESI notices."
  },
  {
    question: "Can I settle a loan if I am an IT employee in HITEC City?",
    answer: "Absolutely. We handle many cases for IT professionals in Gachibowli and Madhapur who face financial stress due to layoffs or credit card debt. We negotiate directly with bank HQs to restructure or settle your debt, ensuring your employer is not contacted."
  },
  {
    question: "How does the Telangana Money Lenders Act protect me?",
    answer: "The **Telangana Money Lenders Act** mandates that all lenders must be licensed. It caps interest rates (typically 9-12% for unsecured loans) and prohibits harassment. If an unlicensed lender or app is harassing you, the debt may be legally unenforceable, and we can help you file a police complaint."
  },
  {
    question: "What should I do if loan apps are harassing me?",
    answer: "The **Cyberabad Police** and **Rachakonda Police** are very strict against illegal loan apps. You should immediately dial **1930** (Cyber Crime Helpline) or file a complaint with the Cyber Crime Station (CCS). We assist in filing these complaints and stopping the harassment legally."
  },
  {
    question: "Will settlement affect my CIBIL score?",
    answer: "Yes, a settlement will reflect as 'Settled' in your CIBIL report, temporarily lowering your score. However, this is better than a 'Written Off' status or a legal suit. We provide a post-settlement credit rebuilding plan to help you improve your score within 12-24 months."
  },
  {
    question: "Can I settle a Gold Loan or Housing Loan?",
    answer: "Gold loans and Housing loans are 'Secured Loans'. Banks rarely settle these as they can auction the asset. However, if the asset value has dropped or you are in genuine distress, we can negotiate for a longer repayment tenure or a one-time settlement in rare cases to stop the auction."
  },
  {
    question: "Do I need to attend the Lok Adalat in person?",
    answer: "For the final settlement, your presence (or your lawyer's) is required at the Lok Adalat, usually held at the **City Civil Court, Hyderabad** or district courts in Warangal/Karimnagar. We handle all the paperwork and representation so you don't have to worry."
  },
  {
    question: "How long does the process take in Telangana?",
    answer: "The negotiation process typically takes 3-5 months. Once an agreement is reached, the formal closure via Lok Adalat happens in the next scheduled sitting (TSLSA conducts them every 2-3 months)."
  },
  {
    question: "Why choose AMA Legal Solutions for Telangana cases?",
    answer: "We have a dedicated team in Hyderabad familiar with the local banking circles in the Financial District and the legal procedures at Abids DRT. We offer a 'No-Harassment' guarantee and handle everything legally."
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
    <section id="faqs" className="scroll-mt-32">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions (Telangana Edition)</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <h3 className="font-bold text-lg text-gray-900 mb-3">{faq.question}</h3>
            <p className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: faq.answer }}></p>
          </div>
        ))}
      </div>
    </section>
  );
}
