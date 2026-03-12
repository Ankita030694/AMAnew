"use client";

import React from "react";
import Script from "next/script";

const faqs = [
  {
    question: "Is loan settlement legal in Himachal Pradesh?",
    answer: "Yes, loan settlement is a fully legal process. It is often facilitated through Lok Adalats organized by the Himachal Pradesh State Legal Services Authority (HPSLSA) and is a recognized method for resolving Non-Performing Assets (NPAs) with banks."
  },
  {
    question: "I am an apple grower in Shimla. Can I settle my KCC loan?",
    answer: "Yes. We understand that climate change and market fluctuations have impacted apple production. If you are unable to repay your Kisan Credit Card (KCC) loan, we can help you negotiate a One Time Settlement (OTS) with the bank, potentially waiving interest and penalties."
  },
  {
    question: "My hotel business in Manali was affected by landslides. Can I get relief?",
    answer: "Yes. Natural calamities like landslides and floods are considered 'Force Majeure' events. We can help you apply for loan restructuring or a moratorium under the state's relief measures or negotiate a settlement based on your reduced income."
  },
  {
    question: "What is the Himachal Pradesh Registration of Money Lenders Act?",
    answer: "The Himachal Pradesh Registration of Money Lenders Act, 1976, mandates that all money lenders must be registered and licensed. It protects borrowers from exorbitant interest rates and illegal recovery practices by unregistered lenders."
  },
  {
    question: "Can banks auction my agricultural land for loan default?",
    answer: "The state government has specific policies, including the Agricultural Loan Interest Subvention Scheme, to prevent the auction of agricultural land for distressed farmers. We can legally challenge any such auction notice and seek a settlement instead."
  },
  {
    question: "What is the role of Lok Adalat in Himachal Pradesh?",
    answer: "Lok Adalats in Himachal Pradesh are effective forums for settling bank disputes amicably. They allow you to negotiate directly with the bank for a reduced settlement amount. The award passed is final and binding, saving you from long court cases."
  },
  {
    question: "Can recovery agents harass me in Himachal?",
    answer: "No. RBI guidelines and Supreme Court judgments strictly prohibit harassment. Recovery agents cannot use abusive language, threaten you, or visit at odd hours. If they do, we can take legal action against them."
  },
  {
    question: "What documents do I need for settlement?",
    answer: "You will need your loan account statement, identity proof (Aadhar/PAN), proof of income loss (e.g., crop damage report, business loss statement due to landslides), and details of any relief compensation received."
  },
  {
    question: "Will settlement affect my CIBIL score?",
    answer: "Yes, a settlement is reported to credit bureaus and will temporarily lower your score. However, it stops legal action and allows you to become debt-free, which is the first step to rebuilding your financial health."
  },
  {
    question: "How can AMA Legal Solutions help me in Himachal?",
    answer: "We have expertise in Himachal's specific laws and the challenges faced by apple growers and tourism businesses. We protect you from harassment and negotiate fair settlements with banks, leveraging state relief schemes where applicable."
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
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions (Himachal Pradesh)</h2>
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
