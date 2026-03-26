"use client";

import React from "react";
import Script from "next/script";

const faqs = [
  {
    question: "Is loan settlement legal in Andaman and Nicobar Islands?",
    answer:
      "Yes, loan settlement is entirely legal in the Andaman and Nicobar Islands. It is a recognized financial process where the bank agrees to accept a lower amount to close a Non-Performing Asset (NPA). We facilitate this through the **National Lok Adalats** organized by the **District Legal Services Authority (DLSA)** in Port Blair or through direct negotiation with the bank's regional decision-makers.",
  },
  {
    question: "Which DRT has jurisdiction over the Andaman and Nicobar Islands?",
    answer:
      "The Andaman and Nicobar Islands fall under the jurisdiction of the **Debt Recovery Tribunal (DRT-2) Kolkata**. For banking debt matters exceeding ₹20 Lakhs, legal filings and stay petitions against SARFAESI actions must be moved before the DRT in Kolkata.",
  },
  {
    question: "Can I settle my loan through Lok Adalat in Port Blair?",
    answer:
      "Yes, the District Legal Services Authority (DLSA) regularly organizes National Lok Adalats in **Port Blair, Mayabunder, and Diglipur**. These are excellent forums for settling bank recovery cases at pre-litigation and post-litigation stages with significant waivers on interest and penalties.",
  },
  {
    question: "Can the bank seize my property in Port Blair?",
    answer:
      "Under the SARFAESI Act, banks can initiate recovery proceedings for secured loans without court intervention by issuing Section 13(2) and 13(4) notices. However, you have the right to challenge these actions. We can approach the **Calcutta High Court (Circuit Bench at Port Blair)** or the **DRT Kolkata** to seek a stay on auction proceedings.",
  },
  {
    question: "How does a settlement affect my credit score in the islands?",
    answer:
      "A settlement will be reflected as 'Settled' in your CIBIL report, which temporarily lowers your credit score. However, this is far better than having a 'Suit Filed' or 'Willful Defaulter' status. It allows you to start fresh and rebuild your financial credibility over time.",
  },
  {
    question: "Where can I find legal help for loan harassment in the Andaman Islands?",
    answer:
      "At AMA Legal Solutions, we provide specialized legal support across the islands, including **Port Blair, Havelock, and Neil Island**. We issue 'Cease and Desist' notices to stop illegal recovery harassment and ensure all negotiations are conducted within the RBI's fair practice guidelines.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer.replace(/\*\*/g, "") 
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
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions (Andaman & Nicobar)</h2>
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
