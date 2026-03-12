"use client";

import React from "react";
import Script from "next/script";

const faqData = [
  {
    question: "What is the process for registering an NBFC in Delhi?",
    answer:
      "Registering an NBFC in Delhi involves a two-step process. First, you must incorporate a company (Private or Public Limited) with the Registrar of Companies (ROC) Delhi, ensuring a minimum Net Owned Fund (NOF) of ₹2 Crore (or ₹10 Crore as per recent guidelines for certain categories). Second, you must apply for a Certificate of Registration (CoR) from the Reserve Bank of India (RBI) via their COSMOS portal and submit the physical dossier to the RBI Regional Office in New Delhi.",
  },
  {
    question: "How can I start a Microfinance Company in Delhi without RBI approval?",
    answer:
      "You can start a microfinance business in Delhi without direct RBI registration by registering a Section 8 Company (Non-profit) with the Ministry of Corporate Affairs (MCA). This structure allows you to provide micro-credit to low-income groups. As long as you adhere to the RBI's qualifying asset criteria and do not accept public deposits, you can operate under the specific exemptions granted to Section 8 MFIs.",
  },
  {
    question: "What are the regulations for Money Lenders in Delhi?",
    answer:
      "Money lending in Delhi is regulated to prevent usurious practices. While there isn't a single 'Delhi Money Lenders Act' identical to Maharashtra's, money lenders must comply with the Punjab Registration of Money Lenders Act, 1938 (as applicable to Delhi) and other local administrative orders. It is mandatory to obtain a license from the competent authority to legally carry out the business of money lending.",
  },
  {
    question: "Why is Delhi considered a strategic location for Fintech startups?",
    answer:
      "Delhi, being the National Capital, offers proximity to key policy-making bodies like the Ministry of Finance, RBI, and NITI Aayog. This allows for faster regulatory clarity. Additionally, the NCR region (including Gurgaon and Noida) hosts a massive tech talent pool and a vibrant ecosystem of incubators and investors, making it an ideal launchpad for Fintech ventures.",
  },
  {
    question: "What documents are required for a business loan in Delhi?",
    answer:
      "To secure a business loan in Delhi, you typically need: Company Incorporation documents (MOA/AOA), GST Registration, MSME (Udyam) Registration, Audited Financial Statements for the last 3 years, ITRs of the company and directors, and Bank Statements for the last 6-12 months. Lenders may also ask for a detailed project report for term loans.",
  },
  {
    question: "Do I need SEBI registration for an investment advisory firm in Delhi?",
    answer:
      "Yes, if you intend to offer investment advice for a fee, registration with the Securities and Exchange Board of India (SEBI) as a Registered Investment Advisor (RIA) is mandatory. Operating without this registration is a violation of SEBI (Investment Advisers) Regulations, 2013. You can apply through the SEBI Intermediary Portal.",
  },
  {
    question: "What is the role of the RBI Regional Office in New Delhi?",
    answer:
      "The RBI Regional Office in New Delhi (located on Sansad Marg) is the primary regulatory interface for financial entities in the NCR region. It handles the processing of NBFC applications, conducts on-site and off-site supervision, manages consumer grievances against banks/NBFCs via the Banking Ombudsman, and ensures compliance with monetary policies.",
  },
  {
    question: "Can a foreign entity invest in a Delhi-based financial service company?",
    answer:
      "Yes, Foreign Direct Investment (FDI) is allowed in the financial services sector, often up to 100% under the automatic route for regulated entities. However, the foreign investor must comply with the capitalization norms set by the RBI and reporting requirements (FC-GPR) with the RBI's New Delhi office.",
  },
  {
    question: "What are the compliance requirements for Nidhi Companies in Delhi?",
    answer:
      "Nidhi Companies in Delhi must register with the ROC Delhi. They are regulated by the Ministry of Corporate Affairs under Nidhi Rules, 2014. Key compliances include maintaining a minimum of 200 members within one year, ensuring a Net Owned Fund to Deposit ratio of 1:20, and filing statutory returns like NDH-1, NDH-2, and NDH-3.",
  },
  {
    question: "How does the 'Fair Practices Code' apply to Delhi NBFCs?",
    answer:
      "Every NBFC operating in Delhi must adopt a 'Fair Practices Code' approved by its Board. This code must be displayed in the office and on the website (if any). It outlines the guidelines for loan processing, interest rate transparency, grievance redressal, and prohibits the use of coercive recovery methods.",
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
            Get answers to common questions about banking, finance regulations, and business registration in the National Capital.
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
