"use client";

import React from "react";
import Script from "next/script";

const faqs = [
  {
    question: "Is Navi loan settlement legal?",
    answer: "Yes, settling a Navi loan is a completely legal process. It involves a mutual agreement between you (the borrower) and Navi Finserv (the lender) to close the loan account for a reduced amount due to your inability to pay the full sum."
  },
  {
    question: "Can Navi take legal action against me?",
    answer: "Yes, as a regulated NBFC, Navi Finserv can initiate legal proceedings. They often use Arbitration clauses in their agreement to get a quick award against defaulters. They may also file cases under Section 138 (Cheque Bounce) or Section 25 of the Payment and Settlement Systems Act if your auto-debit fails."
  },
  {
    question: "How do I stop Navi recovery agents from calling my contacts?",
    answer: "Calling your contacts is a violation of RBI's digital lending guidelines and data privacy laws. Once you hire AMA Legal Solutions, we send a legal notice to Navi demanding they stop this harassment immediately and direct all communication to us, your legal representatives."
  },
  {
    question: "Will settling a Navi loan affect my CIBIL score?",
    answer: "Yes, a settlement is reported to credit bureaus as 'Settled' or 'Post-Write-off Settled'. This will lower your credit score. However, it is better than a 'Default' or 'Written Off' status, which stays on your report longer and carries a higher risk of legal action."
  },
  {
    question: "What is the arbitration clause in Navi's agreement?",
    answer: "Navi's loan agreement typically includes a clause that allows them to appoint a sole arbitrator to resolve disputes. This often leads to ex-parte awards (decisions made without your presence) if you don't attend the hearings. We represent you in these arbitration proceedings to ensure a fair outcome."
  },
  {
    question: "Can I get a 50% discount on my Navi loan?",
    answer: "It is possible. The settlement amount depends on your financial hardship (job loss, medical emergency) and the duration of your default. We have successfully negotiated waivers of up to 50-60% for many clients, especially by removing the exorbitant penal interest."
  },
  {
    question: "Do I need to visit Navi's office for settlement?",
    answer: "No, the entire process is handled remotely by our legal team. We communicate with Navi's central legal and credit teams via email and official notices. You only need to make the final payment to Navi's official bank account."
  },
  {
    question: "What documents are required for Navi settlement?",
    answer: "You will need your KYC documents (PAN, Aadhaar), the loan agreement (if available), latest loan statement, and proof of financial hardship (termination letter, bank statements, medical records)."
  },
  {
    question: "How long does the Navi settlement process take?",
    answer: "The process usually takes between 30 to 60 days. It involves sending a legal notice, responding to their demand notices, and multiple rounds of negotiation to reach an agreed settlement figure."
  },
  {
    question: "What is a No Dues Certificate (NDC)?",
    answer: "An NDC is a formal document issued by Navi Finserv after you pay the settlement amount. It certifies that the loan is fully closed and you owe them nothing more. We ensure you get this document to prevent future claims."
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
