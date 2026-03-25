"use client";

import React from "react";
import Script from "next/script";

const faqs = [
  {
    question: "Is loan settlement legal in Gurugram?",
    answer: "Yes, loan settlement is a fully legal process in Gurugram, governed by RBI guidelines and the Indian Contract Act. It allows borrowers to close their loan accounts by paying a mutually agreed reduced amount. In Gurugram, this can be facilitated through the District Legal Services Authority (DLSA) at the District Court near Rajiv Chowk or via direct bank negotiations."
  },
  {
    question: "Which Debt Recovery Tribunal (DRT) covers Gurugram?",
    answer: "Gurugram falls under the jurisdiction of the **Debt Recovery Tribunal (DRT) in Chandigarh**. For loans above ₹20 Lakhs, banks will file recovery suits there. However, you don't need to travel to Chandigarh constantly. We have a dedicated legal team to represent you at the tribunal, ensuring your side is heard and pushing for a settlement."
  },
  {
    question: "Can Gurugram Police help if recovery agents are harassing me?",
    answer: "Yes. The Gurugram Police have a dedicated **Cyber Crime Cell** in Sector 43. You can file a complaint there or at your local police station (e.g., DLF Phase 1, Sector 29) if agents are using abusive language, calling at odd hours, or sending morphed photos. The police have been active in cracking down on illegal recovery practices."
  },
  {
    question: "Where are Lok Adalats held in Gurugram?",
    answer: "Lok Adalats in Gurugram are organized by the District Legal Services Authority (DLSA) at the **District Court Complex near Rajiv Chowk**. These are held quarterly. Settling a loan here provides a final, non-appealable court order, which acts as a permanent shield against future harassment for the same debt."
  },
  {
    question: "I have a personal loan and work in Cyber City. Can it be settled?",
    answer: "Yes, we specialize in settling high-value personal loans for corporate professionals working in Cyber City, Udyog Vihar, and Golf Course Road. If you have faced a job loss or salary cut, we can present a strong 'Hardship Case' to the bank to negotiate a waiver on interest and penalties."
  },
  {
    question: "What is the Punjab Relief of Indebtedness Act?",
    answer: "The Punjab Relief of Indebtedness Act, 1934 (applicable to Haryana), provides certain protections to debtors. It regulates the interest rates and provides relief mechanisms. We use provisions of this act to defend you against exorbitant interest claims by private money lenders in Gurugram."
  },
  {
    question: "Will settlement affect my job in Gurugram?",
    answer: "Loan settlement is a confidential matter between you and the bank. It generally does not impact your employment unless your employer specifically checks your credit report (common in banking/finance jobs). However, a 'Settled' status is far better than a 'Written Off' status or facing a legal suit, which could become a public record."
  },
  {
    question: "How long does the settlement process take?",
    answer: "In Gurugram, the process typically takes 3 to 6 months. Since many banks have their corporate offices in Gurugram itself, we can often expedite negotiations by dealing directly with the decision-makers rather than low-level recovery agents."
  },
  {
    question: "Do I need to visit the District Court?",
    answer: "Only if we finalize the settlement through a Lok Adalat, you might need to visit the District Court near Rajiv Chowk once to sign the agreement before the judge. For all other negotiation stages, our team handles everything, and you do not need to be physically present."
  },
  {
    question: "What documents are required?",
    answer: "You will need your KYC documents (PAN, Aadhar), loan account statements, and 'Proof of Hardship'. This could be a termination letter, medical records, or bank statements showing a significant drop in income."
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
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions (Gurugram Edition)</h2>
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
