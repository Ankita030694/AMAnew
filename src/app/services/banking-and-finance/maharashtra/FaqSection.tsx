"use client";

import React from "react";
import Script from "next/script";

const faqData = [
  {
    question: "What are the key regulations for starting a financial service company in Maharashtra?",
    answer:
      "Starting a financial service company in Maharashtra requires compliance with both central and state regulations. Primarily, you must register under the Companies Act, 2013. Depending on your specific activities, you may need registration with the Reserve Bank of India (RBI) as an NBFC, or with SEBI for investment advisory services. Additionally, for money lending activities, a license under the Maharashtra Money-Lending (Regulation) Act, 2014 is mandatory. Compliance with local municipal norms and professional tax registration in Maharashtra is also required.",
  },
  {
    question: "How do I register an NBFC in Mumbai?",
    answer:
      "To register an NBFC in Mumbai, you first need to incorporate a company with a minimum Net Owned Fund (NOF) of ₹2 Crore (or as specified for different categories). Once incorporated, you must apply online through the RBI's COSMOS portal. After the online submission, the physical copy of the application along with the necessary documents must be submitted to the Regional Office of the RBI in Mumbai. The process involves rigorous scrutiny of the company's financials and the background of its directors.",
  },
  {
    question: "Is it possible to start a microfinance business in Maharashtra without RBI registration?",
    answer:
      "Yes, it is possible to start a microfinance business without direct RBI registration by registering as a Section 8 Company (Non-profit organization) under the Companies Act, 2013. These companies can engage in micro-credit activities provided they adhere to specific lending caps and do not accept public deposits. However, if your operations grow beyond a certain threshold of assets or income, RBI registration as an NBFC-MFI becomes mandatory.",
  },
  {
    question: "What is the role of the Maharashtra Money-Lending (Regulation) Act, 2014?",
    answer:
      "The Maharashtra Money-Lending (Regulation) Act, 2014, is a state-specific legislation designed to regulate money lending transactions and prevent the exploitation of borrowers by private money lenders. It mandates that anyone carrying on the business of money lending in the state must obtain a valid license. The Act sets ceilings on interest rates and prescribes penalties for harassment of debtors, ensuring a fair lending environment.",
  },
  {
    question: "What are the government schemes available for MSME financing in Maharashtra?",
    answer:
      "Maharashtra offers several schemes to support MSMEs, including the Chief Minister's Employment Generation Programme (CMEGP) which provides subsidy-linked loans. Central schemes like the Pradhan Mantri Mudra Yojana (PMMY) and the Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE) are also widely implemented by banks in the state. Additionally, SIDBI offers specific schemes like SMILE (SIDBI Make in India Soft Loan Fund for MSMEs) to provide soft loans for new and existing enterprises.",
  },
  {
    question: "How can a fintech company ensure compliance in Maharashtra?",
    answer:
      "Fintech companies operating in Maharashtra must navigate a complex regulatory landscape. This includes adhering to RBI's guidelines on digital lending, data localization, and KYC norms. They must also comply with the Information Technology Act, 2000, for data security. If they are involved in payment aggregation, specific RBI authorizations are needed. Regular audits and strict adherence to consumer protection laws are essential for long-term sustainability.",
  },
  {
    question: "What documents are required to apply for a business loan in Maharashtra?",
    answer:
      "Commonly required documents for business loans in Maharashtra include: KYC documents of the promoters (PAN, Aadhar), Certificate of Incorporation/Partnership Deed, MSME Registration (Udyam Aadhar), GST Registration certificate, Income Tax Returns (ITR) for the last 2-3 years, Audited Financial Statements (Balance Sheet, P&L), and bank statements for the last 6-12 months. Project reports may be needed for term loans.",
  },
  {
    question: "Why is Mumbai considered the financial hub for banking services?",
    answer:
      "Mumbai is the financial capital of India, hosting the headquarters of the Reserve Bank of India (RBI), the Securities and Exchange Board of India (SEBI), and major public and private sector banks. The presence of the Bombay Stock Exchange (BSE) and the National Stock Exchange (NSE) further solidifies its status. This ecosystem provides unparalleled access to capital, financial talent, and regulatory bodies, making it the ideal location for banking and finance operations.",
  },
  {
    question: "Can a foreign company set up financial services in Maharashtra?",
    answer:
      "Yes, foreign companies can set up financial services in Maharashtra, subject to Foreign Direct Investment (FDI) guidelines. In the financial services sector, 100% FDI is generally allowed under the automatic route for regulated entities. However, they must comply with the specific capitalization norms and reporting requirements of the RBI. They can operate as a wholly-owned subsidiary or a branch office, depending on the specific activity.",
  },
  {
    question: "What is the procedure for obtaining a Money Lenders License in Maharashtra?",
    answer:
      "To obtain a Money Lenders License in Maharashtra, one must apply to the Assistant Registrar of Co-operative Societies in the respective district. The application requires details of the applicant, the place of business, and proof of funds. A character verification by the police is usually conducted. Upon satisfaction of the authorities and payment of the requisite fees, the license is granted, typically valid for one year and renewable thereafter.",
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
            Get answers to common questions about banking, finance regulations, and business registration in Maharashtra.
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
