"use client";

import React from "react";
import Script from "next/script";

const faqs = [
  {
    question: "Is loan settlement legal in Delhi?",
    answer: "Yes, loan settlement is a fully legal process in Delhi, governed by RBI guidelines. It is a legitimate way to close Non-Performing Assets (NPAs). The Delhi State Legal Services Authority (DSLSA) also actively promotes settlement of banking disputes through Lok Adalats held across all 11 districts of Delhi."
  },
  {
    question: "How can I settle my loan through Lok Adalat in Delhi?",
    answer: "You can settle your loan in Lok Adalats organized by the DSLSA at district courts like Patiala House, Karkardooma, Rohini, Dwarka, Saket, and Tis Hazari. We can help you file an application for 'Pre-Litigation' settlement. Once the bank agrees to a reduced amount, the Lok Adalat passes an award which is final and binding, ensuring the bank cannot harass you further."
  },
  {
    question: "What should I do if recovery agents are harassing me in Delhi?",
    answer: "The Delhi Police has strict guidelines against recovery harassment. Agents cannot call you before 7 AM or after 7 PM, nor can they use abusive language. If you face harassment, you can file a complaint with the Anti-Extortion Cell of the Delhi Police or your local police station. We assist our clients in filing these complaints to stop illegal recovery tactics immediately."
  },
  {
    question: "Which Debt Recovery Tribunal (DRT) handles cases in Delhi?",
    answer: "Delhi has three Debt Recovery Tribunals (DRT-1, DRT-2, and DRT-3), all located at the Jeevan Tara Building on Parliament Street. The jurisdiction depends on your location (e.g., South Delhi, West Delhi) and the loan amount. DRT-3 specifically handles high-value cases above ₹100 Crores. Our lawyers practice in all three tribunals and can represent you effectively."
  },
  {
    question: "Does settling a credit card debt affect my CIBIL score?",
    answer: "Yes, a settlement will reflect as 'Settled' on your credit report, temporarily lowering your score. However, this is better than a 'Written Off' status which indicates a total default. After settlement, we guide you on credit repair strategies to improve your score over 12-24 months."
  },
  {
    question: "Can the bank seize my property in Delhi for a personal loan?",
    answer: "No, for unsecured personal loans, banks cannot seize your property. They must follow due legal process by filing a civil suit or approaching the DRT. Any attempt to forcefully take possession of your assets without a court order is illegal. For secured loans, they must follow the SARFAESI Act, which also requires a CMM order for physical possession."
  },
  {
    question: "What documents are required for loan settlement?",
    answer: "You need to provide documents proving your financial inability to pay the full amount. This includes recent bank statements, salary slips showing pay cuts, termination letters (if unemployed), or medical records. For business owners in Delhi, proof of business loss (like GST returns) is helpful."
  },
  {
    question: "How long does the settlement process take in Delhi?",
    answer: "The process typically takes 3 to 6 months depending on the bank's approval hierarchy. However, if we route the settlement through a scheduled National Lok Adalat in Delhi, the closure can happen faster on the specific date of the Adalat."
  },
  {
    question: "Why should I hire AMA Legal Solutions for settlement in Delhi?",
    answer: "We are a Delhi-based firm with a physical presence near the High Court and DRTs. We understand the local legal machinery, have established channels with bank settlement officers in the NCR region, and provide strong legal protection against harassment using Delhi Police guidelines."
  },
  {
    question: "Can I travel abroad if I settle my loan?",
    answer: "Yes, settling a loan does not restrict your travel rights. Unless there is a specific court order or a Look Out Circular (LOC) issued against you (which is rare for small personal loans), your passport and travel rights remain unaffected."
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
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions (Delhi NCR)</h2>
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
