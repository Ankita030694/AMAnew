"use client";

import React from "react";
import Script from "next/script";

const faqData = [
  {
    question: "How do I register an NBFC in Madhya Pradesh?",
    answer:
      "To register an NBFC in Madhya Pradesh, you must incorporate a company with the ROC (Gwalior), ensure a minimum Net Owned Fund (NOF) of ₹2 Crore (or ₹10 Crore as per new norms), and submit an application to the RBI Regional Office in Bhopal via the COSMOS portal.",
  },
  {
    question: "What are the key industrial areas for MSME finance in MP?",
    answer:
      "Pithampur (often called the Detroit of India) near Indore, Mandideep near Bhopal, and the Govindpura Industrial Area are key hubs. Financial institutions often have specific lending products tailored for the auto-component, pharmaceutical, and engineering MSMEs in these regions.",
  },
  {
    question: "Is there a specific act for depositor protection in Madhya Pradesh?",
    answer:
      "Yes, the Madhya Pradesh Nikshepakon Ke Hiton Ka Sanrakshan Adhiniyam, 2000 (MP Protection of Depositors Act), is in force to protect depositors from fraudulent financial schemes. It empowers the competent authority to attach properties of defaulting financial establishments.",
  },
  {
    question: "Can I start a Nidhi Company in Madhya Pradesh?",
    answer:
      "Yes, you can start a Nidhi Company in Madhya Pradesh to cultivate the habit of thrift among members. You must incorporate as a public limited company and strictly adhere to the Nidhi Rules, 2014. You cannot deal with non-members.",
  },
  {
    question: "Where is the RBI office for Madhya Pradesh located?",
    answer:
      "The Reserve Bank of India has its Regional Office in Bhopal, the capital city. This office has jurisdiction over the entire state of Madhya Pradesh and handles regulatory matters for banks and NBFCs.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
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
            Common queries about banking and finance regulations in Madhya Pradesh.
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
