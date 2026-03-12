"use client";

import React from "react";

const FaqSection = () => {
  const faqData = [
    {
      question: "Can I settle my SBI personal loan if I am unable to pay?",
      answer:
        "Yes, SBI allows for the settlement of personal loans if the borrower can demonstrate genuine financial hardship, such as job loss, medical emergencies, or business failure. This is typically done through a One Time Settlement (OTS) or schemes like 'Rinn Samadhan' where a reduced lump sum payment is accepted to close the account.",
    },
    {
      question: "What is the SBI Rinn Samadhan Scheme 2024-25?",
      answer:
        "The SBI Rinn Samadhan Scheme is a special One Time Settlement (OTS) initiative designed to help borrowers settle their non-performing assets (NPAs). It covers various loan categories, including agricultural loans, personal loans, and SME loans, offering significant waivers on interest and penalties for eligible borrowers who want to close their debts.",
    },
    {
      question: "Will SBI file a legal case against me for non-payment?",
      answer:
        "If you default on your loan payments for more than 90 days, your account becomes an NPA. SBI can initiate legal action under the SARFAESI Act (for secured loans), file a civil suit, or issue a Section 138 notice for cheque bounce. However, initiating a settlement process through legal experts like AMA Legal Solutions can often halt these legal proceedings.",
    },
    {
      question: "How much discount can I get in an SBI loan settlement?",
      answer:
        "The discount or waiver amount depends on various factors like the age of the NPA, your repayment history, and your current financial status. Typically, borrowers can save anywhere from 30% to 60% on the total outstanding amount. Schemes like Rinn Samadhan may offer specific predefined waivers.",
    },
    {
      question: "Does loan settlement affect my CIBIL score?",
      answer:
        "Yes, settling a loan will result in your account being marked as 'Settled' in your credit report. This can drop your CIBIL score by 50-100 points. However, it is better than a 'Written-off' status or continuing default. You can rebuild your score over time by using secured credit cards and maintaining financial discipline.",
    },
    {
      question: "Can I apply for a new loan after settling my SBI loan?",
      answer:
        "Immediately after settlement, getting a new unsecured loan might be difficult due to the 'Settled' status. However, once you obtain the No Dues Certificate (NDC) and start rebuilding your credit score, you can become eligible for loans again in the future. SBI itself may consider you for fresh loans after a cooling-off period if your financial situation improves.",
    },
    {
      question: "What documents are required for SBI loan settlement?",
      answer:
        "You will need to submit KYC documents (PAN, Aadhaar), recent loan statements, and proof of financial hardship (such as a termination letter, medical records, or business loss statements). A formal settlement proposal letter is also required.",
    },
    {
      question: "How long does the SBI settlement process take?",
      answer:
        "The process typically takes 2 to 4 weeks. It involves submitting the proposal, negotiation meetings with bank officials, and receiving the final Settlement Letter. Once the payment is made, the No Dues Certificate is usually issued within 15-20 working days.",
    },
    {
      question: "Can I settle my SBI credit card dues also?",
      answer:
        "Yes, SBI Credit Card dues can also be settled under similar OTS guidelines. If you have multiple credit cards or a combination of personal loans and credit cards, a consolidated settlement strategy can be worked out.",
    },
    {
      question: "Why should I hire AMA Legal Solutions for SBI settlement?",
      answer:
        "AMA Legal Solutions comprises expert banking lawyers who understand SBI's internal policies and the Rinn Samadhan scheme. We handle all communication with the bank, stop harassment from recovery agents, and negotiate the best possible waiver for you, ensuring a legally secure closure of your loan.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    mainEntity: faqData.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Frequently Asked Questions
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-bold text-[#004c8f] mb-3">
                {item.question}
              </h3>
              <p className="text-gray-600 leading-relaxed">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FaqSection;
