"use client";

import React from "react";
import Script from "next/script";

const faqs = [
  {
    question: "Is loan settlement legal in Arunachal Pradesh?",
    answer: "Yes, loan settlement is a fully legal process. It is often facilitated through Lok Adalats organized by the Arunachal Pradesh State Legal Services Authority (APSLSA) and is a recognized method for resolving Non-Performing Assets (NPAs) with banks."
  },
  {
    question: "Can the bank seize my tribal land under SARFAESI?",
    answer: "This is a complex issue. While the SARFAESI Act generally allows banks to attach properties, agricultural land is exempt. For non-agricultural tribal land with a Land Possession Certificate (LPC), banks can initiate proceedings, but the sale is typically restricted to other tribals to preserve indigenous rights. We can help you challenge any illegal attachment."
  },
  {
    question: "I am a government employee in Itanagar. Can my salary account be frozen?",
    answer: "Banks cannot arbitrarily freeze your salary account without a court order. If your account has been frozen due to loan default, we can help you unfreeze it and negotiate a settlement plan that leaves you with enough disposable income."
  },
  {
    question: "How does the Arunachal Pradesh Money Lending (Regulation) Act, 2018 protect me?",
    answer: "This Act strictly regulates private money lending. It requires lenders to be licensed and caps interest rates (typically 15-18%). If a private lender is charging you exorbitant interest or harassing you, this Act provides you with strong legal remedies."
  },
  {
    question: "What is the role of Lok Adalat in Arunachal Pradesh for loan cases?",
    answer: "APSLSA conducts regular Lok Adalats in Itanagar, Pasighat, and other districts. These are highly effective for settling bank disputes amicably. The award passed is final and binding, often resulting in significant waivers on interest and penalties."
  },
  {
    question: "Can recovery agents harass me at my office?",
    answer: "No. The Gauhati High Court (Itanagar Bench) and RBI guidelines strictly prohibit harassment. Recovery agents cannot visit your office to humiliate you or use abusive language. If this happens, we can take legal action against the bank."
  },
  {
    question: "I have a loan under the 'Apon Ghar' scheme. Can it be settled?",
    answer: "Yes, even specific housing loans like 'Apon Ghar' can be settled if you are facing genuine financial hardship. We can negotiate with the bank for a restructuring or a One Time Settlement (OTS) depending on your circumstances."
  },
  {
    question: "What documents do I need for loan settlement?",
    answer: "You will need your loan account statement, identity proof (Aadhar/PAN), employment details (for govt employees), and any notices received from the bank. If you have a Land Possession Certificate (LPC) for mortgaged land, keep that ready too."
  },
  {
    question: "Will settlement affect my CIBIL score?",
    answer: "Yes, a settlement will be marked in your credit report. However, it is better than a 'default' or 'suit filed' status. It stops the legal action and allows you to slowly rebuild your credit over time."
  },
  {
    question: "How can AMA Legal Solutions help me in Arunachal Pradesh?",
    answer: "We understand the unique legal and cultural context of Arunachal Pradesh. From protecting tribal land rights to defending government employees from harassment, we provide expert legal representation to help you settle your debts with dignity."
  }
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
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
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions (Arunachal Pradesh)</h2>
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
