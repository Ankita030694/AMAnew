"use client";

import React from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FaqSection = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  const faqs = [
    {
      question: "Does RBL Bank accept loan settlement?",
      answer:
        "Yes, RBL Bank accepts loan settlement (One Time Settlement or OTS) for borrowers who are genuinely unable to repay their loans due to financial hardships like job loss, medical emergencies, or business failure. However, this is at the bank's discretion and usually offered when the loan becomes a Non-Performing Asset (NPA).",
    },
    {
      question: "How can I settle my RBL Bank credit card debt?",
      answer:
        "To settle your RBL Bank credit card debt, you need to stop making minimum payments and allow the account to go into default (usually 90 days). Once you receive settlement offers or legal notices, you can negotiate with the bank for a reduced lump sum payment. It is highly recommended to hire a legal expert to handle negotiations and ensure you get a proper settlement letter.",
    },
    {
      question: "Will settling my RBL loan affect my CIBIL score?",
      answer:
        "Yes, settling a loan will negatively impact your CIBIL score. The account status will be reported as 'Settled' instead of 'Closed', which indicates that the full amount was not paid. This can drop your score by 50-100 points. However, you can rebuild your score over time (12-24 months) by using secured credit cards and paying bills on time.",
    },
    {
      question: "Can RBL Bank file a legal case against me for non-payment?",
      answer:
        "Yes, RBL Bank can initiate legal action. Common actions include sending legal notices, filing a Section 138 case (for cheque bounce), or initiating arbitration proceedings. If you have a secured loan, they may take action under the SARFAESI Act. Legal representation is crucial to handle these notices effectively.",
    },
    {
      question: "What is the minimum settlement amount RBL Bank accepts?",
      answer:
        "The settlement amount depends on various factors like the total outstanding, the age of the default, and your financial situation. Typically, settlements can range from 30% to 50% of the total outstanding amount. Skilled negotiation can help achieve a lower settlement figure.",
    },
    {
      question: "How do I get a settlement letter from RBL Bank?",
      answer:
        "Once a settlement amount is agreed upon verbally, you must insist on an official Settlement Letter from RBL Bank on their letterhead. This letter should clearly state the settlement amount, payment due date, and that no further dues will remain after this payment. Do not make any payment without this letter.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-12 rounded-2xl shadow-sm border border-gray-100">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-gray-500 mb-10">
          Common queries about RBL Bank loan settlement
        </p>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border rounded-xl transition-all duration-300 ${
                openIndex === index
                  ? "border-[#003a70] bg-blue-50 shadow-md"
                  : "border-gray-200 hover:border-blue-200"
              }`}
            >
              <button
                className="w-full flex justify-between items-center p-5 text-left focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                <span
                  className={`font-semibold text-lg ${
                    openIndex === index ? "text-[#003a70]" : "text-gray-700"
                  }`}
                >
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <FaChevronUp className="text-[#003a70]" />
                ) : (
                  <FaChevronDown className="text-gray-400" />
                )}
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-5 pt-0 text-gray-600 leading-relaxed border-t border-blue-100/50">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
