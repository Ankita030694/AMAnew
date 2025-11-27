"use client";

import React from "react";
import Script from "next/script";

const faqs = [
  {
    question: "What is the Fibe (EarlySalary) Loan Settlement Process?",
    answer: "The Fibe (formerly EarlySalary) loan settlement process is a debt relief option for borrowers who are unable to repay their loans due to genuine financial hardship. It involves negotiating with Fibe to pay a one-time lump sum amount that is significantly lower than the total outstanding dues. This allows you to close the loan account permanently and stop further interest accumulation and legal actions."
  },
  {
    question: "How much discount can I get on my Fibe loan settlement?",
    answer: "The settlement amount depends on several factors, including the duration of your default, your current financial situation, and the total outstanding amount. Typically, borrowers can save anywhere from 30% to 50% of the total dues. In some cases of severe hardship or older defaults, the waiver can be even higher. AMA Legal Solutions negotiates hard to get you the maximum possible discount."
  },
  {
    question: "Does Fibe charge for pre-closure of loans?",
    answer: "No, Fibe (EarlySalary) generally does not charge any pre-closure or prepayment fees for personal loans. You can pay off your entire loan amount before the tenure ends without any penalty. However, loan settlement is different from pre-closure; settlement is for those who cannot pay the full amount, whereas pre-closure is for those paying the full principal plus interest to date."
  },
  {
    question: "Will settling my Fibe loan affect my CIBIL score?",
    answer: "Yes, settling a loan will negatively impact your CIBIL score. The loan status will be reported as 'Settled' instead of 'Closed', which indicates that the full amount was not paid. This can drop your score by 50-100 points. However, this is a better outcome than a 'Written Off' status or continuing default. You can rebuild your score over time by practicing good financial discipline."
  },
  {
    question: "Can Fibe take legal action if I default?",
    answer: "Yes, Fibe has the legal right to recover their dues. If you default, they may send legal notices, including notices for arbitration or under Section 138 (for cheque bounce/NACH failure). Ignoring these can lead to serious legal complications. It is advisable to engage a legal firm like AMA Legal Solutions to handle these notices and negotiate a settlement professionally."
  },
  {
    question: "How can AMA Legal Solutions help with Fibe harassment?",
    answer: "Harassment by recovery agents is illegal. Once you hire AMA Legal Solutions, we issue a formal Letter of Representation to Fibe, directing them to communicate only with us, your legal counsel. This stops the harassment calls to you and your contacts. We ensure that the recovery process follows RBI guidelines and that your rights are protected."
  },
  {
    question: "What documents do I need for Fibe loan settlement?",
    answer: "To initiate a settlement, you need to prove your financial inability to pay. Required documents typically include your KYC details (PAN, Aadhaar), the latest loan statement from Fibe, and proof of hardship such as a termination letter, medical bills, or bank statements showing a drop in income."
  },
  {
    question: "Can I get another loan after settling with Fibe?",
    answer: "Getting a new unsecured loan immediately after settlement is difficult due to the 'Settled' status on your credit report. Lenders view it as a higher risk. However, it is not a permanent blacklist. By using secured credit cards and paying bills on time, you can improve your credit score and become eligible for loans again in 2-3 years."
  },
  {
    question: "How long does the settlement process take?",
    answer: "The settlement process with Fibe usually takes between 1 to 3 months. This timeline includes the initial assessment, legal representation, multiple rounds of negotiation, and final approval from Fibe's credit team. We work efficiently to resolve the matter as quickly as possible to give you peace of mind."
  },
  {
    question: "Is the settlement agreement legally binding?",
    answer: "Yes, once a settlement amount is agreed upon, Fibe will issue a formal Settlement Letter. This document outlines the terms of the payment and confirms that upon payment, the loan will be closed. We verify this letter to ensure it is legally sound before you make the payment. Once paid, you receive a No Dues Certificate (NDC), which is the final legal proof of closure."
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
