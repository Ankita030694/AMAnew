"use client";

import React from "react";
import Script from "next/script";

const faqData = [
  {
    question: "How do I register an NBFC in Andhra Pradesh?",
    answer:
      "To register an NBFC in Andhra Pradesh, you must incorporate a company with the ROC (Hyderabad/Vijayawada), ensure a minimum Net Owned Fund (NOF) of ₹2 Crore (or ₹10 Crore as per new norms), and submit an application to the RBI Regional Office via the COSMOS portal.",
  },
  {
    question: "What are the regulations for Fintech companies in Vizag Fintech Valley?",
    answer:
      "Fintech companies in Vizag must comply with RBI's Digital Lending Guidelines, data privacy norms under the DPDP Act, and specific incentives or regulations set by the Andhra Pradesh Electronics & IT Agency (APEITA).",
  },
  {
    question: "Is there a specific act for depositor protection in Andhra Pradesh?",
    answer:
      "Yes, the Andhra Pradesh Protection of Depositors of Financial Establishments Act, 1999, protects depositors from fraudulent financial schemes. All financial establishments accepting deposits must comply with this Act.",
  },
  {
    question: "Can I start a Microfinance Institution (MFI) in Andhra Pradesh?",
    answer:
      "Yes, you can start an MFI as an NBFC-MFI or a Section 8 company. However, given the history of microfinance regulations in the state, strict adherence to fair practices code, interest rate caps, and recovery norms is essential.",
  },
  {
    question: "Where is the RBI office for Andhra Pradesh located?",
    answer:
      "Currently, the RBI Regional Office in Hyderabad serves both Telangana and Andhra Pradesh. However, a sub-office is operational in Visakhapatnam for certain functions.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  mainEntity: faqData.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FaqSection() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section id="faqs" className="bg-white py-16 px-4 md:px-8 scroll-mt-32">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Common queries about banking and finance regulations in Andhra Pradesh.
          </p>
          <div className="space-y-6">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="border-b border-gray-200 pb-6 last:border-0"
              >
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
        </div>
      </section>
    </>
  );
}
