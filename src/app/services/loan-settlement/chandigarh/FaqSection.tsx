'use client';

import React, { useState } from 'react';

const ChandigarhFaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Which DRT has jurisdiction over Chandigarh residents?",
      answer: "Chandigarh residents and businesses fall under the jurisdiction of the Debt Recovery Tribunal (DRT) in Chandigarh itself. Both DRT-1 and DRT-2 Chandigarh handle matters related to the Recovery of Debts and Bankruptcy Act and the SARFAESI Act for cases involving Chandigarh, Punjab, and Haryana."
    },
    {
      question: "Is loan settlement legal in Chandigarh?",
      answer: "Yes, loan settlement is a 100% legal process in Chandigarh, governed by RBI guidelines. Banks and NBFCs in Chandigarh frequently use One-Time Settlement (OTS) schemes to resolve non-performing assets (NPAs) through mutual negotiation or Lok Adalats."
    },
    {
      question: "Can I settle my loan during a Lok Adalat in Chandigarh?",
      answer: "Absolutely. The Chandigarh State Legal Services Authority (CSLSA) regularly organizes National Lok Adalats at the District Courts, Sector 43. These are excellent forums for settling bank recovery cases with significant waivers on interest and penalties."
    },
    {
      question: "What should I do if a bank in Chandigarh sends a SARFAESI notice?",
      answer: "If you receive a Section 13(2) or 13(4) notice under the SARFAESI Act, you should immediately consult a loan settlement lawyer. We can help you file a representation before the bank or approach the DRT Chandigarh to stay the auction proceedings while we negotiate a fair settlement."
    },
    {
      question: "How long does the loan settlement process take in Chandigarh?",
      answer: "Typically, the process takes 3 to 6 months. This includes auditing your case, sending legal notices to stop harassment, negotiating with the bank's zonal or regional offices in Chandigarh, and obtaining the final No Dues Certificate."
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

  return (
    <section id="faqs" className="scroll-mt-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
            <button
              className="w-full text-left px-6 py-4 flex justify-between items-center bg-white hover:bg-gray-50 transition-colors"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="font-bold text-gray-900 text-lg">{faq.question}</span>
              <span className={`text-2xl text-[#D2A02A] transform transition-transform ${openIndex === index ? 'rotate-180' : ''}`}>
                ⌄
              </span>
            </button>
            {openIndex === index && (
              <div className="px-6 py-4 bg-gray-50 text-gray-700 leading-relaxed border-t border-gray-100 italic">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChandigarhFaqSection;
