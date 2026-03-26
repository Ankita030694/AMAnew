'use client';

import React, { useState } from 'react';

const DamanDiuFaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Which Court or DRT handles loan matters for Daman and Diu?",
      answer: "The Union Territory of Dadra and Nagar Haveli and Daman and Diu (DNHDD) falls under the judicial jurisdiction of the Bombay High Court. For debt recovery matters involving amounts over ₹20 Lakhs, cases are typically handled by the Debt Recovery Tribunal (DRT-II) in Ahmedabad, Gujarat, which also covers these Union Territories."
    },
    {
      question: "Is loan settlement legal for residents of Silvassa and Daman?",
      answer: "Yes, loan settlement is a 100% legal process in DNHDD. It is conducted under the One-Time Settlement (OTS) guidelines issued by the Reserve Bank of India (RBI). Both private and nationalized banks in the UT frequently use these schemes to clean up their Non-Performing Assets (NPAs)."
    },
    {
      question: "Can I be arrested for not paying a personal loan in Daman?",
      answer: "No, defaulting on a personal loan or credit card is a civil matter in India, not a criminal one. You cannot be arrested just for an inability to pay. However, if you have issued cheques that have bounced, the bank may file a case under Section 138 of the Negotiable Instruments Act. We specialize in defending these matters while negotiating a settlement."
    },
    {
      question: "What is a SARFAESI notice and how should I respond in the UT?",
      answer: "A SARFAESI notice is issued by a bank to recover secured loans (like home or business loans) by taking possession of the collateral without court intervention. If you receive a Sec 13(2) notice in Daman or Silvassa, you have 60 days to respond. Our legal team can help you file a formal objection and, if needed, a stay in DRT Ahmedabad."
    },
    {
      question: "Can credit card debt be settled in Silvassa?",
      answer: "Yes, credit card debt is highly negotiable because it is unsecured. Banks are often willing to settle for 30% to 50% of the total outstanding amount if they are convinced of your genuine financial hardship. We have a high success rate in settling card debts for industrial workers and business owners in DNHDD."
    },
    {
      question: "What is the importance of a Lok Adalat for loan settlement?",
      answer: "Lok Adalats are 'People's Courts' that offer a peaceful forum for settlement. The District Legal Services Authority (DLSA) in Daman and Silvassa regularly conducts these. A compromise reached in a Lok Adalat has the force of a court decree and provides permanent closure to the debt dispute."
    },
    {
      question: "Does AMA Legal Solutions represent MSMEs in the Silvassa Industrial Area?",
      answer: "Yes, we specialize in MSME loan restructuring and settlement for businesses in the Dadra and Nagar Haveli industrial hubs. We help entrepreneurs navigate the stress of business loans when market conditions or global shifts impact their turnover."
    },
    {
      question: "How does loan settlement impact my CIBIL score in the long run?",
      answer: "Initially, a settlement causes a drop in your credit score of about 50-100 points, and the account status is marked as 'Settled'. However, this is better than a 'Written Off' or 'Default' status. We provide guidance on rebuilding your credit score over 12-24 months through secured credit lines and disciplined financial behavior."
    },
    {
      question: "Is it possible to settle a home loan in Diu?",
      answer: "Settling a home loan is more challenging than unsecured loans because the bank has collateral. However, if the asset value is low or there are legal disputes, or if you can arrange a lump sum, banks may agree to a settlement to avoid long-drawn litigation. Legal representation is crucial here."
    },
    {
      question: "Why should I choose a lawyer over a debt relief agency in DNHDD?",
      answer: "AMA Legal Solutions consists of qualified lawyers who can represent you in court (Bombay High Court or DRT Ahmedabad) and send legal notices to stop harassment. Debt relief agencies are often just middle-men without the legal authority to protect you from court proceedings or police matters."
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
          <div key={index} className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:border-[#D2A02A] transition-colors">
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

export default DamanDiuFaqSection;
