"use client";

import React from "react";
import Script from "next/script";

const faqs = [
  {
    question: "Is loan settlement legal in Sikkim?",
    answer: "Yes, loan settlement is a legal process. In Sikkim, it is often facilitated through Lok Adalats organized by the Sikkim State Legal Services Authority (SLSA), which provides a binding and final resolution to banking disputes."
  },
  {
    question: "Can the bank auction my land in Sikkim for loan default?",
    answer: "Under Article 371F of the Constitution and old laws of Sikkim, land ownership is restricted to Sikkimese subjects. This makes it legally difficult for banks to auction land to non-Sikkimese entities. We use these protections to negotiate better settlement terms for you."
  },
  {
    question: "I am an organic farmer facing losses. Can I get loan relief?",
    answer: "Yes. We understand the challenges of transition costs and market access in organic farming. We can help you negotiate with banks for a One Time Settlement (OTS) or restructuring, citing your financial hardships."
  },
  {
    question: "What is the Sikkim Rural Indebtedness Act, 1966?",
    answer: "This Act regulates money lending practices in Sikkim, specifically targeting traditional systems like 'Dadani' and 'Biyaz'. It aims to protect rural debtors from exploitative interest rates and unfair recovery practices."
  },
  {
    question: "My hotel business in Gangtok is struggling. How can you help?",
    answer: "Tourism businesses often face seasonal lows and debt burdens. We can assist you in restructuring your business loans, obtaining moratoriums during lean periods, or settling debts to avoid bankruptcy."
  },
  {
    question: "What is the role of Lok Adalat in Sikkim?",
    answer: "Lok Adalats in Sikkim are effective forums for settling money recovery suits and Section 138 (cheque bounce) cases. Settlements reached here are final, binding, and free of court fees, offering a quick way to resolve debt issues."
  },
  {
    question: "Can recovery agents harass me in Sikkim?",
    answer: "No. Harassment by recovery agents is illegal under RBI guidelines and Supreme Court judgments. If you are being threatened or abused, we can take immediate legal action to stop it."
  },
  {
    question: "What documents do I need for settlement?",
    answer: "You will need your loan account statement, Sikkim Subject Certificate (or COI) for land-related protections, identity proof, and documents showing your financial distress (e.g., business loss statement, crop failure report)."
  },
  {
    question: "Will settlement affect my CIBIL score?",
    answer: "Yes, a settlement is reported to credit bureaus and will temporarily lower your score. However, it allows you to close the loan and stop legal action, which is crucial for long-term financial recovery."
  },
  {
    question: "How can AMA Legal Solutions help me in Sikkim?",
    answer: "We have deep knowledge of Sikkim's special laws like Article 371F and the Rural Indebtedness Act. We protect your rights, stop harassment, and negotiate fair settlements with banks on your behalf."
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
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions (Sikkim)</h2>
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
