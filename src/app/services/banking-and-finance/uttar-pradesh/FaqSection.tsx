"use client";

import React from "react";
import Script from "next/script";

const faqData = [
  {
    question: "How do I register an NBFC in Uttar Pradesh?",
    answer:
      "To register an NBFC in Uttar Pradesh, you must incorporate a company with the ROC (Kanpur), ensure a minimum Net Owned Fund (NOF) of ₹2 Crore (or ₹10 Crore as per new norms), and submit an application to the RBI Regional Office (Kanpur or Lucknow) via the COSMOS portal.",
  },
  {
    question: "What is the ODOP scheme financing in UP?",
    answer:
      "The One District One Product (ODOP) scheme provides financial assistance to artisans and MSMEs for promoting unique local products. Banks offer specialized loans with margin money subsidies to support units under this scheme.",
  },
  {
    question: "Is there a specific act for depositor protection in UP?",
    answer:
      "Yes, the Uttar Pradesh Protection of Interest of Depositors in Financial Establishments Act, 2016, is in force. It empowers the government to attach assets of financial establishments that default on returning deposits.",
  },
  {
    question: "Can I start a Nidhi Company in Uttar Pradesh?",
    answer:
      "Yes, you can start a Nidhi Company in Uttar Pradesh to cultivate the habit of thrift among members. You must incorporate as a public limited company and strictly adhere to the Nidhi Rules, 2014. Nidhi companies are widely present in tier-2 and tier-3 cities.",
  },
  {
    question: "Where are the RBI offices for Uttar Pradesh located?",
    answer:
      "The Reserve Bank of India has Regional Offices in Kanpur and Lucknow. These offices have jurisdiction over the state of Uttar Pradesh and handle regulatory matters for banks and NBFCs.",
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
            Common queries about banking and finance regulations in Uttar Pradesh.
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
