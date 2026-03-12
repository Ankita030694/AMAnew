"use client";

import React from "react";

const faqSchema = {
  "@context": "https://schema.org",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I register an NBFC in West Bengal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To register an NBFC in West Bengal, you must incorporate a company with the ROC Kolkata, ensure a minimum Net Owned Fund (NOF) of ₹2 Crore (or ₹10 Crore as per new norms), and submit an application to the RBI via the COSMOS portal. The physical application is then submitted to the RBI Regional Office in Kolkata.",
      },
    },
    {
      "@type": "Question",
      name: "What is the West Bengal Money Lenders Act, 1940?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The West Bengal Money Lenders Act, 1940 regulates money lending in the state. It requires all money lenders to obtain a license, maintain proper accounts, and adhere to interest rate caps. Operating without a license is a punishable offense.",
      },
    },
    {
      "@type": "Question",
      name: "Can I start a Microfinance business in Kolkata without ₹5 Crore capital?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, you can start a Microfinance business as a Section 8 Company. This structure does not require the high minimum capital of ₹5 Crore mandated for NBFC-MFIs, provided you do not accept public deposits and keep assets below ₹100 Crore.",
      },
    },
    {
      "@type": "Question",
      name: "What are the compliance requirements for Nidhi Companies in West Bengal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nidhi Companies in West Bengal must comply with the Nidhi Rules, 2014. This includes having at least 200 members within one year, maintaining a Net Owned Fund to Deposits ratio of 1:20, and filing annual returns (NDH-1, NDH-3) with the ROC Kolkata.",
      },
    },
    {
      "@type": "Question",
      name: "Is a license required for digital lending apps in West Bengal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Digital lending apps must partner with a regulated entity (Bank or NBFC) to lend. If the app itself is lending, it needs an NBFC license. Additionally, all digital lending must comply with the RBI's Digital Lending Guidelines, 2022.",
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
            Common queries about banking and finance regulations in West Bengal.
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
