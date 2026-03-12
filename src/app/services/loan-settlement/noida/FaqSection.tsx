"use client";

import React from "react";
import Script from "next/script";

const faqs = [
  {
    question: "Is loan settlement legal in Noida?",
    answer: "Yes, loan settlement is a fully legal process in Noida, governed by RBI guidelines and the Indian Contract Act. It allows borrowers to close their loan accounts by paying a mutually agreed reduced amount. In Noida, this can be facilitated through the District Legal Services Authority (DLSA) at the Gautam Buddha Nagar District Court (Surajpur) or via direct bank negotiations."
  },
  {
    question: "Which Debt Recovery Tribunal (DRT) covers Noida?",
    answer: "Noida falls under the jurisdiction of the **Debt Recovery Tribunal (DRT) in Lucknow**. For loans above ₹20 Lakhs, banks will file recovery suits there. However, you don't need to travel to Lucknow constantly. We have a dedicated legal team to represent you at the tribunal, ensuring your side is heard and pushing for a settlement."
  },
  {
    question: "Can Noida Police help if recovery agents are harassing me?",
    answer: "Yes. The Noida Police have a dedicated **Cyber Crime Cell** in Sector 6. You can file a complaint there or at your local police station (e.g., Sector 20, Phase 2) if agents are using abusive language, calling at odd hours, or sending morphed photos. The police have been active in cracking down on illegal recovery practices."
  },
  {
    question: "Where are Lok Adalats held in Noida?",
    answer: "Lok Adalats in Noida are organized by the District Legal Services Authority (DLSA) at the **District Court Complex in Surajpur (Greater Noida)**. These are held quarterly. Settling a loan here provides a final, non-appealable court order, which acts as a permanent shield against future harassment for the same debt."
  },
  {
    question: "I have a business loan for my company in Sector 63. Can it be settled?",
    answer: "Yes, we specialize in settling MSME and business loans for Noida's industrial hubs like Sector 63, Phase 2, and Greater Noida. If your business has suffered due to market fluctuations or client payment delays, we can present a strong 'Hardship Case' to the bank to negotiate a waiver on interest and penalties."
  },
  {
    question: "What is the UP Regulation of Money-Lending Act?",
    answer: "The Uttar Pradesh Regulation of Money-Lending Act, 1976, applies to Noida. It mandates that no person can carry on the business of money-lending without a valid license. If a private financier in Noida is harassing you without a valid license, their recovery suit is not maintainable in court, and we can take legal action against them."
  },
  {
    question: "Will settlement affect my job in Noida?",
    answer: "Loan settlement is a confidential matter between you and the bank. It generally does not impact your employment unless your employer specifically checks your credit report (common in banking/finance jobs). However, a 'Settled' status is far better than a 'Written Off' status or facing a legal suit, which could become a public record."
  },
  {
    question: "How long does the settlement process take?",
    answer: "In Noida, the process typically takes 3 to 6 months. Since many banks have their corporate offices in Noida or nearby Delhi, we can often expedite negotiations by dealing directly with the decision-makers rather than low-level recovery agents."
  },
  {
    question: "Do I need to visit the District Court?",
    answer: "Only if we finalize the settlement through a Lok Adalat, you might need to visit the District Court in Surajpur once to sign the agreement before the judge. For all other negotiation stages, our team handles everything, and you do not need to be physically present."
  },
  {
    question: "What documents are required?",
    answer: "You will need your KYC documents (PAN, Aadhar), loan account statements, and 'Proof of Hardship'. This could be a termination letter, medical records, or bank statements showing a significant drop in business turnover (crucial for companies in Sector 62/63)."
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
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions (Noida Edition)</h2>
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
