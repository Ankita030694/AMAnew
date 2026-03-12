"use client";

import React from "react";
import Script from "next/script";

const faqData = [
  {
    question: "How do I register an NBFC in Punjab?",
    answer:
      "To register an NBFC in Punjab, you must incorporate a company with the ROC (Chandigarh), ensure a minimum Net Owned Fund (NOF) of ₹2 Crore (or ₹10 Crore as per new norms), and submit an application to the RBI Regional Office in Chandigarh via the COSMOS portal.",
  },
  {
    question: "What are the key industries for finance in Punjab?",
    answer:
      "Agriculture and agro-processing, textiles (Ludhiana/Amritsar), light engineering, and bicycle manufacturing are key sectors. Financial institutions often have specialized products for these industries, such as working capital for MSMEs and crop loans for farmers.",
  },
  {
    question: "Is there a specific act for depositor protection in Punjab?",
    answer:
      "Yes, the Punjab Protection of Interests of Depositors (in Financial Establishments) Act, is in force. It provides a legal framework to protect depositors from fraudulent schemes and allows for the attachment of assets of defaulting financial establishments.",
  },
  {
    question: "Can I start a Nidhi Company in Punjab?",
    answer:
      "Yes, you can start a Nidhi Company in Punjab to cultivate the habit of thrift among members. You must incorporate as a public limited company and strictly adhere to the Nidhi Rules, 2014. Nidhi companies are popular in rural and semi-urban areas.",
  },
  {
    question: "Where is the RBI office for Punjab located?",
    answer:
      "The Reserve Bank of India has its Regional Office in Chandigarh. This office has jurisdiction over the states of Punjab, Haryana, Himachal Pradesh, and the Union Territory of Chandigarh.",
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
            Common queries about banking and finance regulations in Punjab.
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
