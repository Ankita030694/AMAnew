"use client";

import React from "react";
import Script from "next/script";

const faqs = [
  {
    question: "Can I settle my Paytm Postpaid bill?",
    answer: "Yes, Paytm Postpaid bills can be settled if you are unable to pay the full amount due to financial hardship. Since Paytm Postpaid is a credit facility provided by lending partners like Aditya Birla Finance or Hero FinCorp, the settlement is negotiated with these partners. AMA Legal Solutions represents you to secure a settlement and close the account."
  },
  {
    question: "What happens if I don't pay Paytm Postpaid?",
    answer: "Non-payment of Paytm Postpaid dues leads to late fees, a significant drop in your CIBIL score, and constant calls from recovery agents. Since it is a formal loan, the lending partner can also initiate legal action against you. It is better to opt for a legal settlement than to ignore the debt."
  },
  {
    question: "How does Paytm Personal Loan settlement work?",
    answer: "For Paytm Personal Loans, the process involves proving your inability to pay to the lending partner (e.g., Hero FinCorp, Tata Capital). We issue a legal notice to stop harassment, propose a One-Time Settlement (OTS) amount, and negotiate to waive off interest and penalties. Once paid, the loan is closed."
  },
  {
    question: "Will settling affect my credit score?",
    answer: "Yes, settlement is reported as 'Settled' to credit bureaus, which negatively impacts your score. However, this is a temporary setback compared to a 'Written Off' status. You can rebuild your score over time, and becoming debt-free gives you a fresh financial start."
  },
  {
    question: "Can I get a discount on the principal amount?",
    answer: "In many cases, yes. If the financial hardship is severe (e.g., job loss, medical emergency), we can negotiate a waiver not just on interest and penalties but also on a portion of the principal amount. The final settlement amount depends on the lender's policy and our negotiation."
  },
  {
    question: "How do I stop recovery agents from calling me?",
    answer: "Harassment is illegal. Once you hire AMA Legal Solutions, we send a formal Letter of Representation to Paytm and its lending partners. This legally mandates them to direct all communication to us, your lawyers, thereby stopping the direct harassment calls to you and your family."
  },
  {
    question: "What documents are needed for Paytm settlement?",
    answer: "You need to provide your KYC documents (PAN, Aadhaar), the latest loan/postpaid statement showing the outstanding amount, and proof of financial hardship (such as bank statements, termination letter, or medical records)."
  },
  {
    question: "Is the settlement process online?",
    answer: "The negotiation and legal representation are handled by us remotely. You do not need to visit any office or court. We coordinate with the lender's central team. However, the final payment must be made by you directly to the lender's official account."
  },
  {
    question: "How long does it take to settle a Paytm loan?",
    answer: "The process typically takes 30 to 90 days. It depends on the lender's response time and the rounds of negotiation required to get the best possible deal for you."
  },
  {
    question: "Do I get a No Dues Certificate (NDC)?",
    answer: "Yes, obtaining the No Dues Certificate (NDC) is the most critical part of the process. Once the settlement amount is paid, the lender issues the NDC, which serves as legal proof that the loan is fully closed and no further money is owed."
  }
];

const faqSchema = {
  "@context": "https://schema.org",
  "mainEntity": faqs.map((faq) => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer,
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
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h3 className="text-lg font-bold text-[#0F4A8A] mb-3 flex items-start">
              <span className="text-[#00BAF2] mr-3 text-xl">Q.</span>
              {faq.question}
            </h3>
            <p className="text-gray-700 leading-relaxed pl-8">{faq.answer}</p>
          </div>
        ))}
      </div>
    </>
  );
}
