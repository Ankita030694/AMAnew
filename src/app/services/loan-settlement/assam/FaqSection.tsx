"use client";

import React from "react";
import Script from "next/script";

const faqs = [
  {
    question: "Is loan settlement legal in Assam?",
    answer: "Yes, loan settlement is a fully legal process. It is often facilitated through Lok Adalats organized by the Assam State Legal Services Authority (ASLSA) and is a recognized method for resolving Non-Performing Assets (NPAs) with banks."
  },
  {
    question: "What is the AMFIRS scheme for microfinance loans?",
    answer: "The Assam Microfinance Incentive and Relief Scheme (AMFIRS) is a state government initiative to help borrowers. It provides relief in three categories: incentives for regular payers, clearing overdues for those with 1-89 days delay, and settling NPAs for stressed borrowers. We can help you understand your eligibility."
  },
  {
    question: "I am a tea garden worker in Dibrugarh. Can I settle my loan?",
    answer: "Yes. We understand the financial struggles of tea garden workers, especially with issues like delayed wages or the ATCL crisis. We can negotiate with banks to settle personal loans or microfinance debts based on your current financial hardship."
  },
  {
    question: "My crops were destroyed by floods. Can I get loan relief?",
    answer: "Yes. Frequent floods in the Brahmaputra valley are a valid 'Force Majeure' condition. We can help you negotiate with the bank for a moratorium, restructuring, or a One Time Settlement (OTS) for your agricultural or business loan due to this natural calamity."
  },
  {
    question: "Are private money lenders regulated in Assam?",
    answer: "Yes. The Assam Money Lenders Act, 1934, and the Assam Micro Finance Institutions (Regulation of Money Lending) Act, 2020, strictly regulate lending. Lenders must be registered and cannot charge exorbitant interest. Unregistered lending is illegal."
  },
  {
    question: "Can microfinance agents harass me for repayment?",
    answer: "No. The Assam Micro Finance Institutions Act, 2020, and RBI guidelines strictly prohibit harassment. Agents cannot visit you at odd hours, use abusive language, or coerce you. If they do, we can take legal action."
  },
  {
    question: "What is the role of Lok Adalat in Assam?",
    answer: "Lok Adalats in Assam are effective forums for settling bank disputes amicably. They allow you to negotiate directly with the bank for a reduced settlement amount. The award passed is final and binding, saving you from long court cases."
  },
  {
    question: "What documents do I need for settlement?",
    answer: "You will need your loan account statement, identity proof (Aadhar/PAN), proof of income loss (e.g., flood damage report, medical records), and details of any microfinance loans if applying under AMFIRS."
  },
  {
    question: "Will settlement affect my CIBIL score?",
    answer: "Yes, a settlement is reported to credit bureaus and will temporarily lower your score. However, it stops legal action and allows you to become debt-free, which is the first step to rebuilding your financial health."
  },
  {
    question: "How can AMA Legal Solutions help me in Assam?",
    answer: "We have expertise in Assam's specific laws like the AMFIRS scheme and Money Lenders Act. We protect tea garden workers, farmers, and small business owners from harassment and negotiate fair settlements with banks."
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
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions (Assam)</h2>
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
