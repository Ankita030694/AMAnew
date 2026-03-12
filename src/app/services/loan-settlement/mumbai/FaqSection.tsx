"use client";

import React from "react";
import Script from "next/script";

const faqs = [
  {
    question: "Is loan settlement legal in Mumbai?",
    answer: "Yes, loan settlement is a fully legal process in Mumbai, governed by RBI guidelines and the Indian Contract Act. It allows borrowers to close their loan accounts by paying a mutually agreed reduced amount. In Mumbai, this can be facilitated through the District Legal Services Authority (DLSA) at the City Civil Court or via direct bank negotiations."
  },
  {
    question: "Which Debt Recovery Tribunal (DRT) covers Mumbai?",
    answer: "Mumbai has three Debt Recovery Tribunals (DRT-1, DRT-2, and DRT-3) located in Colaba and Vashi. The jurisdiction depends on the bank and the loan amount. For loans above ₹20 Lakhs, banks will file recovery suits here. We have a dedicated legal team to represent you at all Mumbai DRTs."
  },
  {
    question: "Can Mumbai Police help if recovery agents are harassing me?",
    answer: "Yes. The Mumbai Police have strict guidelines against harassment. You can file a complaint at your local police station or the Cyber Crime Cell at BKC if agents are using abusive language, calling at odd hours, or sending morphed photos. The Mumbai Police Commissioner has issued specific circulars against illegal recovery tactics."
  },
  {
    question: "Where are Lok Adalats held in Mumbai?",
    answer: "Lok Adalats in Mumbai are organized by the District Legal Services Authority (DLSA) at the **City Civil & Sessions Court** (Fort and Dindoshi). These are held quarterly. Settling a loan here provides a final, non-appealable court order, which acts as a permanent shield against future harassment for the same debt."
  },
  {
    question: "I have a loan from a cooperative bank in Mumbai. Can it be settled?",
    answer: "Yes, we specialize in settling loans from cooperative banks like Saraswat Bank, Cosmos Bank, and others. While they fall under the Multi-State Cooperative Societies Act, they are also bound by RBI's fair practice codes. We can negotiate settlements for both personal and business loans with these banks."
  },
  {
    question: "What is the Maharashtra Money Lenders Act?",
    answer: "The Maharashtra Money Lenders (Regulation) Act, 2014, applies to Mumbai. It mandates that no person can carry on the business of money-lending without a valid license. If a private financier in Mumbai is harassing you without a valid license, their recovery suit is not maintainable in court, and we can take legal action against them."
  },
  {
    question: "Will settlement affect my job in Mumbai?",
    answer: "Loan settlement is a confidential matter between you and the bank. It generally does not impact your employment unless your employer specifically checks your credit report (common in banking/finance jobs). However, a 'Settled' status is far better than a 'Written Off' status or facing a legal suit, which could become a public record."
  },
  {
    question: "How long does the settlement process take?",
    answer: "In Mumbai, the process typically takes 3 to 6 months. Since most major banks have their headquarters or zonal offices in Mumbai (BKC, Nariman Point), we can often expedite negotiations by dealing directly with the senior decision-makers."
  },
  {
    question: "Do I need to visit the Court?",
    answer: "Only if we finalize the settlement through a Lok Adalat, you might need to visit the City Civil Court once to sign the agreement before the judge. For all other negotiation stages, our team handles everything, and you do not need to be physically present."
  },
  {
    question: "What documents are required?",
    answer: "You will need your KYC documents (PAN, Aadhar), loan account statements, and 'Proof of Hardship'. This could be a termination letter, medical records, or bank statements showing a significant drop in business turnover."
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
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions (Mumbai Edition)</h2>
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
