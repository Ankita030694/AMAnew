"use client";

import React from "react";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I register an NBFC in Chandigarh?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To register an NBFC in Chandigarh, you must incorporate a company with the ROC (Chandigarh has a common ROC for Punjab, Haryana, and Himachal), ensure a minimum Net Owned Fund (NOF) of ₹2 Crore (or ₹10 Crore as per new norms), and submit an application to the RBI Regional Office in Sector 17 via the COSMOS portal.",
      },
    },
    {
      "@type": "Question",
      name: "Is a specific license required for Wealth Management services in Chandigarh?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, if you are offering Investment Advisory services, you must register as an Investment Advisor (RIA) with SEBI. If you are distributing mutual funds, you need an AMFI registration. Portfolio Management Services (PMS) require a separate SEBI registration.",
      },
    },
    {
      "@type": "Question",
      name: "What are the compliance requirements for Fintech startups in Chandigarh?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fintech startups must comply with RBI's Digital Lending Guidelines if they are into lending. Payment aggregators need RBI authorization. Additionally, data privacy compliance under the DPDP Act and regular filings with the ROC are mandatory.",
      },
    },
    {
      "@type": "Question",
      name: "Can I operate a Nidhi Company in Chandigarh?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, you can operate a Nidhi Company in Chandigarh. You must incorporate as a public limited company, have at least 200 members within a year, and strictly adhere to the Nidhi Rules, 2014. Nidhi companies cannot advertise or accept deposits from non-members.",
      },
    },
    {
      "@type": "Question",
      name: "Where is the RBI office located in Chandigarh?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Reserve Bank of India's Regional Office is located in Sector 17, Chandigarh. This office has jurisdiction over the states of Punjab, Haryana, Himachal Pradesh, and the Union Territory of Chandigarh.",
      },
    },
  ],
};

export default function FaqSection() {
  return (
    <section className="bg-slate-50 py-16" id="faqs">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Common queries about banking and finance regulations in Chandigarh.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {faqSchema.mainEntity.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                  <h3 className="text-lg font-semibold text-gray-900 pr-8">
                    {faq.name}
                  </h3>
                  <span className="transform group-open:rotate-180 transition-transform duration-200 text-[#D2A02A]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                  {faq.acceptedAnswer.text}
                </div>
              </details>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
