"use client";

import React from "react";
import Script from "next/script";

const faqs = [
  {
    question: "Is there a Debt Recovery Tribunal (DRT) in Ladakh?",
    answer: "No, currently there is no DRT bench in Ladakh. All cases are referred to the DRT in Chandigarh. This distance is a significant challenge, but AMA Legal Solutions handles all representation in Chandigarh for you, so you do not need to travel."
  },
  {
    question: "Can I settle my guest house loan in Leh?",
    answer: "Yes. We understand that guest houses in Leh often face cash flow issues during the winter off-season. We effectively negotiate with banks like SBI and J&K Bank to settle loans based on the actual operational months, often securing waivers on penal interest accumulated during winter."
  },
  {
    question: "How does the J&K and Ladakh High Court help borrowers?",
    answer: "The High Court plays a crucial role. Since access to DRT Chandigarh is difficult for residents of Ladakh, we often approach the High Court under its writ jurisdiction to seek stays on coercive actions like auctions or possession notices, ensuring you get a fair chance to settle."
  },
  {
    question: "My taxi loan is in default because of the off-season. What can I do?",
    answer: "This is a common issue. We can help you negotiate a restructuring plan or a settlement where the repayment schedule is aligned with the tourist season. We prevent the bank from seizing your vehicle, which is your primary livelihood."
  },
  {
    question: "Is loan settlement legal in Ladakh?",
    answer: "Absolutely. Loan settlement is a legal process recognized by the RBI and applicable in the Union Territory of Ladakh. It is a legitimate way to close NPA accounts and become debt-free."
  },
  {
    question: "Do you serve Kargil and Drass areas?",
    answer: "Yes, our services cover the entire UT of Ladakh, including Kargil, Drass, Nubra, and Zanskar. We use digital communication tools to manage your case remotely, so your location is not a barrier."
  },
  {
    question: "Can the bank seize my property in winter?",
    answer: "While the law allows possession, we argue on humanitarian grounds before the District Magistrate that eviction during the harsh Ladakh winter is a violation of the right to life. This often delays possession, giving us time to finalize a settlement."
  },
  {
    question: "What documents do I need for settlement?",
    answer: "You will need your Loan Sanction Letter, Statement of Accounts, ID proofs (Hill Council ID/Aadhar), and proof of income loss (e.g., lower hotel occupancy records, transport logs). These help us prove genuine financial hardship."
  },
  {
    question: "Will settlement affect my CIBIL score?",
    answer: "Yes, the account will be marked as 'Settled', which temporarily lowers your score. However, this is better than a default status. Once the debt is cleared, you can start rebuilding your financial health."
  },
  {
    question: "Why choose AMA Legal Solutions?",
    answer: "We combine legal expertise with a deep understanding of Ladakh's unique geography and economy. We fight for your rights in courts and negotiation tables to ensure you are treated fairly by mainland banking institutions."
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
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions (Ladakh)</h2>
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
