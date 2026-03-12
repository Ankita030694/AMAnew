"use client";

import React from "react";
import Script from "next/script";

const faqData = [
  {
    question: "How do I register an NBFC in Odisha?",
    answer:
      "To register an NBFC in Odisha, you must incorporate a company with the ROC (Cuttack), ensure a minimum Net Owned Fund (NOF) of ₹2 Crore (or ₹10 Crore as per new norms), and submit an application to the RBI Regional Office in Bhubaneswar via the COSMOS portal.",
  },
  {
    question: "What are the key sectors for finance in Odisha?",
    answer:
      "Mining and metallurgy (iron ore, steel, aluminum), port-led infrastructure (Paradip, Dhamra), MSMEs, and agriculture are key sectors. There is also a significant focus on microfinance through Mission Shakti SHGs.",
  },
  {
    question: "Is there a specific act for depositor protection in Odisha?",
    answer:
      "Yes, the Odisha Protection of Interests of Depositors (in Financial Establishments) Act, 2011, is in force. It empowers the state to attach properties of fraudulent financial establishments to repay depositors.",
  },
  {
    question: "Can I start a Nidhi Company in Odisha?",
    answer:
      "Yes, Nidhi Companies can be started in Odisha to promote savings among members. They must be registered as public limited companies and comply with the Nidhi Rules, 2014. They are popular in semi-urban areas.",
  },
  {
    question: "Where is the RBI office for Odisha located?",
    answer:
      "The Reserve Bank of India has its Regional Office in Bhubaneswar. This office has jurisdiction over the state of Odisha and regulates banks and NBFCs operating in the region.",
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
            Common queries about banking and finance regulations in Odisha.
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
