"use client";

import React from "react";
import Script from "next/script";

const faqs = [
  {
    question: "What is the HSBC Loan Settlement Process?",
    answer: "The HSBC loan settlement process, also known as a One-Time Settlement (OTS), is a legal provision for borrowers who are genuinely unable to repay their loans due to financial hardship. In this process, HSBC Bank agrees to accept a lump-sum payment that is lower than the total outstanding dues (principal + interest + penalties) to close the loan account permanently. This is typically available for personal loans and credit card debts that have been classified as Non-Performing Assets (NPAs)."
  },
  {
    question: "Can I settle my HSBC Credit Card debt?",
    answer: "Yes, HSBC credit card debt is one of the most common types of unsecured debt that can be settled. If you have defaulted on your payments and the interest has ballooned beyond your repayment capacity, you can negotiate a settlement. AMA Legal Solutions can help you negotiate with the bank to waive off the exorbitant interest and penalties, allowing you to pay a reduced principal amount to close the card."
  },
  {
    question: "How much discount can I get in an HSBC settlement?",
    answer: "The settlement amount or 'discount' depends on various factors such as the age of the default, your current financial status, and the bank's internal policies. Generally, borrowers can save anywhere from 30% to 50% of the total outstanding amount. In cases of old defaults or severe medical/financial crises, the waiver can sometimes be higher. However, it requires skilled negotiation to get the best deal."
  },
  {
    question: "Will settling my HSBC loan affect my CIBIL score?",
    answer: "Yes, opting for a settlement will impact your credit score. The loan account will be reported as 'Settled' instead of 'Closed' in your CIBIL report, which can drop your score by 50-100 points. However, this is a better alternative than a 'Written Off' status or continuing default, which causes long-term damage. You can rebuild your score over 12-24 months by using secured credit cards and paying bills on time."
  },
  {
    question: "Does HSBC Bank file legal cases against defaulters?",
    answer: "Yes, like all major banks, HSBC takes legal action to recover dues. They may file cases under Section 138 of the Negotiable Instruments Act (for cheque bounce), file a civil suit, or initiate arbitration proceedings. Ignoring these notices can lead to serious legal consequences. It is advisable to hire a lawyer to represent you, respond to these notices, and negotiate an out-of-court settlement."
  },
  {
    question: "How can AMA Legal Solutions help me with HSBC settlement?",
    answer: "AMA Legal Solutions is a team of expert banking lawyers who protect you from harassment and negotiate on your behalf. We handle all communication with HSBC, ensuring you don't have to deal with recovery agents. We verify the legality of the bank's claims, counter their legal notices, and use our knowledge of banking regulations to secure the lowest possible settlement amount for you. We also ensure you receive a valid No Dues Certificate upon payment."
  },
  {
    question: "What documents are needed for HSBC loan settlement?",
    answer: "To prove genuine financial hardship, you will need to submit documents such as a termination letter (if unemployed), medical reports (if facing health issues), bank statements showing loss of income, or business closure documents. Additionally, you will need your KYC documents (PAN, Aadhaar) and the latest loan account statement from HSBC."
  },
  {
    question: "Can I get a loan from HSBC again after settlement?",
    answer: "Immediately after settlement, it will be difficult to get a new unsecured loan or credit card from HSBC or other banks due to the 'Settled' status on your credit report. However, this is not a permanent ban. By practicing financial discipline and rebuilding your credit score, you can become eligible for loans again in the future, usually after 2-3 years."
  },
  {
    question: "Is the settlement process confidential?",
    answer: "Yes, the settlement process is confidential between you, the bank, and your legal representatives. AMA Legal Solutions maintains strict client confidentiality. Your employer, neighbors, or relatives will not be informed about your settlement unless you have provided them as guarantors or references who are contacted by the bank prior to our intervention."
  },
  {
    question: "What is the timeline for HSBC loan settlement?",
    answer: "The timeline varies depending on the complexity of the case and the bank's responsiveness. On average, the process takes between 3 to 6 months. This includes the time for legal representation, multiple rounds of negotiation, approval from the bank's credit committee, and the final payment. We strive to expedite the process to give you relief as soon as possible."
  }
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
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
              <span className="text-[#D2A02A] mr-3">Q.</span>
              {faq.question}
            </h3>
            <p className="text-gray-700 leading-relaxed pl-8">{faq.answer}</p>
          </div>
        ))}
      </div>
    </>
  );
}
