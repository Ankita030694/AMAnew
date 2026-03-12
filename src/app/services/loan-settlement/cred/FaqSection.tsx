"use client";

import React from "react";
import Script from "next/script";

const faqs = [
  {
    question: "Can I settle my Cred Cash loan?",
    answer: "Yes, Cred Cash loans can be settled if you are unable to repay them due to genuine financial hardship. Since Cred partners with NBFCs like IDFC First Bank and others to provide these loans, the settlement is technically negotiated with the lending partner. However, AMA Legal Solutions handles the entire process, dealing with both Cred and the lending partner to secure a settlement."
  },
  {
    question: "What is the process for Cred loan settlement?",
    answer: "The process involves assessing your financial situation, issuing a legal notice to stop harassment, and then negotiating with the lender for a One-Time Settlement (OTS). We aim to reduce your outstanding amount significantly. Once an amount is agreed upon, you pay it in a lump sum or installments, and the loan is closed."
  },
  {
    question: "Will settling a Cred loan affect my credit score?",
    answer: "Yes, settling any loan, including Cred Cash, will negatively impact your credit score (CIBIL). The account will be marked as 'Settled', which indicates that the full amount was not paid. This can lower your score by 50-100 points. However, it is a better alternative to a 'Written Off' status or continuing default, which does more long-term damage."
  },
  {
    question: "Does Cred charge a penalty for foreclosure?",
    answer: "Cred generally does not charge a foreclosure fee if you repay the full amount early. However, in a settlement scenario (where you are paying less than the due amount), penalties and interest are usually the first components we negotiate to get waived off."
  },
  {
    question: "How can I stop harassment from Cred recovery agents?",
    answer: "Harassment by recovery agents is illegal under RBI guidelines. If you are being harassed, you can appoint AMA Legal Solutions as your legal representative. We will issue a formal Letter of Representation to the lender, directing them to communicate only with us. This effectively stops the harassment calls to you and your contacts."
  },
  {
    question: "What documents are required for settlement?",
    answer: "You will need to provide KYC documents (PAN, Aadhaar), your latest loan statement from the Cred app or the lending partner, and proof of financial hardship (such as a termination letter, medical bills, or bank statements showing income loss)."
  },
  {
    question: "How much can I save through settlement?",
    answer: "The savings depend on the delinquency period and your financial condition. Typically, we can negotiate a waiver of 30% to 50% of the total outstanding amount. In some cases, it can be higher. Our goal is to get you the best possible deal."
  },
  {
    question: "Can I get a loan again after settling with Cred?",
    answer: "It will be difficult to get an unsecured loan immediately after settlement due to the negative impact on your credit score. However, you can rebuild your score over time (12-24 months) by using secured credit cards and paying bills on time, eventually becoming eligible for loans again."
  },
  {
    question: "Is the settlement legal?",
    answer: "Yes, loan settlement is a legal financial process. The agreement is formalized through a Settlement Letter issued by the lender. Once you pay the settlement amount, you receive a No Dues Certificate (NDC), which serves as legal proof that the loan is closed."
  },
  {
    question: "How long does the process take?",
    answer: "The settlement process usually takes 1 to 3 months. This includes the time for legal representation, negotiations, and final approval from the lender's credit committee."
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
          <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
              <span className="text-black mr-3">Q.</span>
              {faq.question}
            </h3>
            <p className="text-gray-700 leading-relaxed pl-8">{faq.answer}</p>
          </div>
        ))}
      </div>
    </>
  );
}
