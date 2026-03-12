"use client";

import React from "react";
import Script from "next/script";

const faqData = [
  {
    question: "How do I register an NBFC in Telangana?",
    answer:
      "To register an NBFC in Telangana, you must first incorporate a company under the Companies Act, 2013, with the Registrar of Companies (ROC) Hyderabad. The company must have a minimum Net Owned Fund (NOF) of ₹2 Crore (or ₹10 Crore for certain categories). After incorporation, you need to file an online application with the Reserve Bank of India (RBI) via the COSMOS portal and submit the physical dossier to the RBI Regional Office in Hyderabad.",
  },
  {
    question: "What is the role of T-Hub in the Fintech ecosystem?",
    answer:
      "T-Hub is Hyderabad's premier innovation intermediary and business incubator. For Fintech startups, T-Hub provides access to mentorship, funding opportunities, and strategic partnerships with banks and financial institutions. It also facilitates access to the RBI's regulatory sandbox, allowing startups to test innovative financial products in a controlled environment.",
  },
  {
    question: "Do I need a license for money lending in Telangana?",
    answer:
      "Yes, under the Telangana Money Lending Act, obtaining a license is mandatory for anyone carrying on the business of money lending. The license is issued by the Revenue Department (Tahsildar's office). Operating without a valid license is illegal and punishable under the Act. The license is typically valid for one year and must be renewed annually.",
  },
  {
    question: "Can I start a Microfinance business in Hyderabad without RBI registration?",
    answer:
      "Yes, you can operate a microfinance business without direct RBI registration by registering as a Section 8 Company (Non-profit) with the MCA. These entities are exempted from full RBI registration if they do not accept public deposits and their asset size is below ₹100 Crore. However, they must strictly adhere to RBI's guidelines on interest rates and fair practices.",
  },
  {
    question: "What are the incentives for Fintech companies in Telangana?",
    answer:
      "The Telangana government offers various incentives under its Innovation Policy. These include seed funding, recruitment assistance (₹10,000 per employee), reimbursement of patent filing costs, and access to the T-Fund for co-investment. The state also provides a unified single-window clearance system (TG-iPASS) to streamline approvals.",
  },
  {
    question: "What documents are required for a business loan in Hyderabad?",
    answer:
      "Common documents include: Company Incorporation Certificate, GST Registration, MSME (Udyam) Registration, Audited Financial Statements (Balance Sheet, P&L) for the last 3 years, ITRs of the company and directors, and Bank Statements for the last 6-12 months. Lenders may also require a detailed project report and collateral documents for secured loans.",
  },
  {
    question: "Where is the RBI Regional Office located in Hyderabad?",
    answer:
      "The Reserve Bank of India's Regional Office in Hyderabad is located at Saifabad. It serves as the primary regulatory authority for banking and non-banking financial entities in the state of Telangana, handling NBFC registrations, consumer grievances, and supervisory functions.",
  },
  {
    question: "Is it mandatory to register with the Financial Intelligence Unit (FIU-IND)?",
    answer:
      "Yes, all financial institutions, including NBFCs and Fintech companies dealing in financial transactions, are 'Reporting Entities' under the Prevention of Money Laundering Act (PMLA). They must register with FIU-IND and file Suspicious Transaction Reports (STRs) and Cash Transaction Reports (CTRs) as required.",
  },
  {
    question: "What is the Telangana Micro Finance Institutions (Regulation of Money Lending) Act?",
    answer:
      "This Act was enacted to regulate the activities of Micro Finance Institutions (MFIs) in the state, specifically to prevent coercive recovery practices and usurious interest rates. It mandates the registration of MFIs, prohibits them from seeking security for loans, and requires transparency in interest rates and loan terms.",
  },
  {
    question: "How can AMA Legal Solutions assist with Fintech compliance?",
    answer:
      "AMA Legal Solutions provides end-to-end legal support for Fintech startups in Hyderabad. We assist with entity structuring, obtaining necessary licenses (NBFC, Payment Aggregator), drafting compliant user agreements and privacy policies, ensuring adherence to Digital Lending Guidelines, and managing ongoing regulatory filings with RBI and ROC.",
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
            Get answers to common questions about banking regulations, NBFC registration, and fintech compliance in Telangana.
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
