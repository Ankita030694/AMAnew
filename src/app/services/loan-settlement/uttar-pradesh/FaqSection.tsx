"use client";

import React from "react";
import Script from "next/script";

const faqs = [
  {
    question: "Is loan settlement legal in Uttar Pradesh?",
    answer: "Yes, loan settlement is completely legal in Uttar Pradesh. It is governed by the guidelines of the Reserve Bank of India (RBI) and facilitated through legal channels like the **Uttar Pradesh State Legal Services Authority (UPSLSA)** and Lok Adalats held in district courts across UP."
  },
  {
    question: "Can I settle my loan if I live in Noida or Ghaziabad?",
    answer: "Absolutely. For residents of Noida, Ghaziabad, and Meerut, the jurisdiction typically falls under **DRT Lucknow**. We handle settlements for clients in the NCR region by negotiating directly with the bank's zonal offices in Delhi/NCR and finalizing the deal through the local Lok Adalat."
  },
  {
    question: "What is the role of DRT Lucknow and DRT Allahabad?",
    answer: "Uttar Pradesh has two main Debt Recovery Tribunals. **DRT Lucknow** generally handles cases from Western and Central UP (including NCR districts), while **DRT Allahabad** covers Eastern UP (Varanasi, Gorakhpur, etc.). Knowing the correct jurisdiction is crucial for legal proceedings like stay orders against property auctions."
  },
  {
    question: "How can I stop recovery agents from harassing me in UP?",
    answer: "Harassment is illegal. You can file a complaint with your local police station or dial **112** for immediate help. If the local police do not act, we help you escalate the matter to the **Senior Superintendent of Police (SSP)** of your district or file a complaint with the RBI Ombudsman."
  },
  {
    question: "Does settlement affect my CIBIL score?",
    answer: "Yes, settling a loan will mark your account as 'Settled' in your credit report, which drops your score. However, this is better than a 'Written Off' status. We guide you on how to rebuild your score over 12-24 months after the settlement."
  },
  {
    question: "Can I settle a Kisan Credit Card (KCC) loan?",
    answer: "KCC loans are agricultural loans and have different settlement schemes, often linked to government waivers. However, if you have a 'Term Loan' or personal loan alongside KCC that has turned NPA, we can assist in negotiating a One Time Settlement (OTS) for those specific components."
  },
  {
    question: "Do I need to visit the court in Lucknow or Allahabad?",
    answer: "Not necessarily. Most of the negotiation happens with the bank's officers. For the final formalization at a Lok Adalat, you might need to visit the district court nearest to you (e.g., Kanpur Nagar, Agra, Varanasi) where the matter is listed, but we handle the legal representation."
  },
  {
    question: "What is the minimum amount banks accept for settlement in UP?",
    answer: "It varies by bank and your financial condition. Typically, banks may accept 30-50% of the outstanding principal + interest if you can prove genuine hardship (like business loss in Kanpur's leather industry or job loss in Noida). We aim for the lowest possible closure amount."
  },
  {
    question: "How long does the process take?",
    answer: "The negotiation phase usually takes 2-4 months. Once an agreement is reached, the formal closure via Lok Adalat can happen in the next scheduled sitting (usually held quarterly in UP)."
  },
  {
    question: "Why should I hire AMA Legal Solutions for my case in UP?",
    answer: "We have a deep understanding of the UP legal system, from the High Court in Allahabad to the district courts in Western UP. We know how to deal with local recovery tactics and ensure you get a safe, legal settlement without falling prey to local 'dalaals' (brokers)."
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
    <section id="faqs" className="scroll-mt-32">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions (UP Edition)</h2>
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
