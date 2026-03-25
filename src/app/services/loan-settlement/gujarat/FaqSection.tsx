"use client";

import React from "react";
import Script from "next/script";

const faqs = [
  {
    question: "Is loan settlement legal in Gujarat?",
    answer: "Yes, loan settlement is a completely legal process. It is often facilitated through Lok Adalats organized by the Gujarat State Legal Services Authority (GSLSA) and is a recognized method for resolving Non-Performing Assets (NPAs) with banks."
  },
  {
    question: "I work in the Diamond industry in Surat and lost my job. Can I settle my personal loan?",
    answer: "Absolutely. We understand the current crisis in the diamond industry. If you have lost your job or faced a salary cut, we can negotiate with the bank for a One Time Settlement (OTS) based on your current financial inability, helping you get out of debt without harassment."
  },
  {
    question: "My textile unit in Ahmedabad is facing a cash crunch. Can I restructure my MSME loan?",
    answer: "Yes, MSME loans can often be restructured or settled. We can help you propose a viable repayment plan to the bank or negotiate a settlement that allows you to keep your business running while clearing your dues."
  },
  {
    question: "How does the Gujarat Money Lenders Act, 2011 protect me?",
    answer: "This Act strictly regulates private money lending. It requires lenders to be registered and prohibits them from charging exorbitant interest rates. If you are being harassed by an unlicensed private lender, this Act provides strong legal remedies."
  },
  {
    question: "What is the role of Lok Adalat in Gujarat for loan cases?",
    answer: "GSLSA conducts regular Lok Adalats across Gujarat, including Mega Lok Adalats. These are highly effective for settling bank disputes amicably. The award passed is final and binding, often resulting in significant waivers on interest and penalties."
  },
  {
    question: "Can recovery agents harass me at my shop or factory?",
    answer: "No. The Gujarat High Court and RBI guidelines strictly prohibit harassment. Recovery agents cannot visit your workplace to humiliate you or disrupt your business. If this happens, we can take legal action against the bank."
  },
  {
    question: "I have a cheque bounce case (Section 138) filed against me. Can it be settled?",
    answer: "Yes, cheque bounce cases are compoundable offenses. This means the complainant (bank/lender) can agree to drop the case if a settlement is reached. We can help you negotiate this settlement and get the legal case withdrawn."
  },
  {
    question: "What documents do I need for loan settlement?",
    answer: "You will need your loan account statement, identity proof (Aadhar/PAN), proof of income loss (termination letter/business accounts), and any notices received from the bank."
  },
  {
    question: "Will settlement affect my CIBIL score?",
    answer: "Yes, a settlement will be marked in your credit report. However, it is better than a 'default' or 'suit filed' status. It stops the legal action and allows you to slowly rebuild your credit over time."
  },
  {
    question: "How can AMA Legal Solutions help me in Gujarat?",
    answer: "We understand the business culture of Gujarat. From protecting MSME owners to helping diamond workers, we provide expert legal representation to help you settle your debts with dignity and get back to business."
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
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions (Gujarat)</h2>
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
