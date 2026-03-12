"use client";

import React from "react";
import Script from "next/script";

const faqs = [
  {
    question: "Is loan settlement legal in Goa?",
    answer: "Yes, loan settlement is a fully legal process. It is often facilitated through Lok Adalats organized by the Goa State Legal Services Authority (GSLSA) and is a recognized method for resolving Non-Performing Assets (NPAs) with banks."
  },
  {
    question: "I have a mining truck loan but no business due to the ban. Can I settle it?",
    answer: "Yes, we specialize in settling loans for mining-affected borrowers. Since the mining ban is a genuine reason for financial distress, we can negotiate with the bank for a significant waiver on interest and penalties, allowing you to close the loan with a reduced One Time Settlement (OTS) amount."
  },
  {
    question: "My hotel business is suffering due to low tourism. Can I restructure my loan?",
    answer: "Absolutely. Banks understand the seasonal nature of Goa's tourism industry. We can help you negotiate a restructuring plan that aligns with your cash flow, or if the debt is too high, we can aim for a settlement to clear the dues once and for all."
  },
  {
    question: "Under Portuguese Civil Code, is my spouse liable for my loan?",
    answer: "This is a critical issue in Goa. Under the 'Communion of Assets' regime, assets and liabilities are often shared jointly. This means your spouse could be held liable for your debts. We can analyze your marriage registration regime and provide specific legal defense to protect your spouse's assets where possible."
  },
  {
    question: "How does the Goa Money Lenders Act, 2013 protect me?",
    answer: "This Act strictly regulates private money lending. It requires lenders to be licensed and prohibits them from charging exorbitant interest rates. If you are being harassed by an unlicensed private lender, this Act provides strong legal remedies to nullify illegal debts."
  },
  {
    question: "What is the role of Lok Adalat in Goa for loan cases?",
    answer: "GSLSA conducts regular Lok Adalats in Panaji, Margao, and other talukas. These are highly effective for settling bank disputes amicably. The award passed is final and binding, often resulting in significant waivers on interest and penalties."
  },
  {
    question: "Can recovery agents harass me at my hotel or shop?",
    answer: "No. The Bombay High Court (Goa Bench) and RBI guidelines strictly prohibit harassment. Recovery agents cannot visit your workplace to humiliate you or disturb your guests/customers. If this happens, we can take legal action against the bank."
  },
  {
    question: "What documents do I need for loan settlement?",
    answer: "You will need your loan account statement, identity proof (Aadhar/PAN), marriage certificate (to check regime), proof of income loss (business accounts/mining ban impact), and any notices received from the bank."
  },
  {
    question: "Will settlement affect my CIBIL score?",
    answer: "Yes, a settlement will be marked in your credit report. However, it is better than a 'default' or 'suit filed' status. It stops the legal action and allows you to slowly rebuild your credit over time."
  },
  {
    question: "How can AMA Legal Solutions help me in Goa?",
    answer: "We understand the unique legal landscape of Goa, including the Portuguese Civil Code. From protecting mining and tourism businesses to defending families under communion of assets, we provide expert legal representation to help you settle your debts with dignity."
  }
];

const faqSchema = {
  "@context": "https://schema.org",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

export default function FaqSection() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section id="faqs" className="scroll-mt-32">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions (Goa)</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
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
      </section>
    </>
  );
}
