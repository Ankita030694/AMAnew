"use client";

import React from "react";
import Script from "next/script";

const faqs = [
  {
    question: "Is loan settlement legal in Odisha?",
    answer: "Yes, loan settlement is a completely legal process. It is often facilitated through Lok Adalats organized by the Odisha State Legal Services Authority (OSLSA) and is a recognized method for resolving Non-Performing Assets (NPAs) with banks."
  },
  {
    question: "Can the bank deduct money from my pension account?",
    answer: "No. The Orissa High Court, in the landmark case of *Bharat Chandra Mallick v. SBI*, ruled that banks cannot unilaterally deduct money from a pension account without proper notice and legal authority. Your pension is protected for your livelihood."
  },
  {
    question: "I lost my crops due to Cyclone Dana. Can I get loan relief?",
    answer: "Yes. Natural calamities like cyclones (Fani, Dana) are valid grounds for seeking loan restructuring or settlement under 'Force Majeure' conditions. We can help you negotiate with the bank for a moratorium or a One Time Settlement (OTS) considering your loss."
  },
  {
    question: "How does the Odisha Money Lenders Act help me?",
    answer: "The Odisha Money Lenders Act, 1939, strictly regulates private lending. It caps interest rates at 9% for secured loans and 12% for unsecured loans. If a private lender is charging you more or harassing you without a license, their debt may be unenforceable."
  },
  {
    question: "I am a member of a Mission Shakti SHG. Can we settle our group loan?",
    answer: "Yes. If your Self-Help Group (SHG) is facing repayment issues due to business failure or internal disputes, we can negotiate a collective settlement with the bank. This prevents harassment of individual members and protects the group's credit standing."
  },
  {
    question: "I worked in a mine in Keonjhar but lost my job. What about my loans?",
    answer: "We understand the instability in the mining sector. If you have lost your job due to mine closure or health issues (like silicosis), we can use these as valid grounds to negotiate a settlement for your personal or vehicle loans."
  },
  {
    question: "What is the role of Lok Adalat in Odisha?",
    answer: "Lok Adalats in Odisha are very effective for settling bank disputes amicably. They offer a platform to negotiate directly with bank officials and a mediator. The settlement award is final and binding, saving you from long court battles."
  },
  {
    question: "Can recovery agents harass me in Odisha?",
    answer: "No. The RBI guidelines and Supreme Court rulings strictly prohibit harassment. Recovery agents cannot threaten you or visit at odd hours. If they do, we can take legal action against the bank."
  },
  {
    question: "What documents do I need for settlement?",
    answer: "You will need your loan account statement, identity proof (Aadhar/PAN), proof of income loss (e.g., crop damage report, medical records, termination letter), and any notices received from the bank."
  },
  {
    question: "Will settlement affect my CIBIL score?",
    answer: "Yes, a settlement will be marked in your credit report. However, it is a better option than a 'default' or 'suit filed' status. It stops legal action and allows you to rebuild your financial health over time."
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
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions (Odisha)</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                <span className="text-[#D2A02A] mr-3">Q.</span>
                {faq.question}
              </h3>
              <p className="text-gray-700 leading-relaxed pl-8">
                <span dangerouslySetInnerHTML={{ __html: faq.answer }} />
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
