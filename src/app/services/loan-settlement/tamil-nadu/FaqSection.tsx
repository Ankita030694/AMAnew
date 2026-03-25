"use client";

import React from "react";
import Script from "next/script";

const faqs = [
  {
    question: "Is loan settlement legal in Tamil Nadu?",
    answer: "Yes, loan settlement is a legal and recognized process in Tamil Nadu. It is often facilitated through Lok Adalats organized by the Tamil Nadu State Legal Services Authority (TNSLSA) and is a valid method for resolving Non-Performing Assets (NPAs) with banks."
  },
  {
    question: "How does the 'Kandhu Vatti' Act protect me?",
    answer: "The Tamil Nadu Prohibition of Charging Exorbitant Interest Act, 2003 (commonly known as the Kandhu Vatti Act) strictly prohibits charging exorbitant interest rates like 'meter vatti' or 'daily vatti'. If a lender harasses you for such interest, you can file a complaint, and they can face imprisonment of up to 3 years."
  },
  {
    question: "I have a textile unit in Tirupur with a stressed loan. Can you help?",
    answer: "Absolutely. We understand the cyclical nature of the textile business in Tirupur and Coimbatore. We can help you negotiate a One Time Settlement (OTS) with your bank, restructuring your debt to match your current cash flow and saving your machinery from auction."
  },
  {
    question: "Can recovery agents seize my vehicle in Chennai?",
    answer: "No, they cannot use force. The Madras High Court has firmly ruled against the use of 'muscle power' by recovery agents. Banks must follow the due process of law. If agents are harassing you or trying to seize your vehicle forcibly, we can take immediate legal action to stop them."
  },
  {
    question: "What is the role of Lok Adalat in Chennai for loan cases?",
    answer: "Lok Adalats in Chennai and other districts are very effective for settling bank disputes. They provide a platform for amicable settlement without court fees. The award passed by a Lok Adalat is final and binding, ensuring the bank cannot reopen the case later."
  },
  {
    question: "I am facing a cheque bounce case (Section 138) in Coimbatore. What are my options?",
    answer: "A Section 138 case is a criminal offense but can be compounded (settled). We can represent you in the Coimbatore courts to negotiate a settlement with the lender. Once the agreed amount is paid, the case is withdrawn, and you are acquitted."
  },
  {
    question: "Can I settle a personal loan if I have lost my job in the IT sector?",
    answer: "Yes, job loss is a valid ground for financial distress. We can present your situation to the bank to negotiate a settlement on your personal loan or credit card dues, often getting a waiver on the accumulated interest and penalties."
  },
  {
    question: "Do you handle cases in Madurai and Trichy?",
    answer: "Yes, we serve clients across Tamil Nadu, including Madurai, Trichy, Salem, and Erode. Our team can handle negotiations and legal proceedings in these regions effectively."
  },
  {
    question: "What if my property is under SARFAESI auction?",
    answer: "If you have received a SARFAESI notice, you must act fast. We can approach the Debt Recovery Tribunal (DRT) in Chennai, Madurai, or Coimbatore to seek a stay on the auction if the bank has not followed the correct procedure, giving you time to arrange a settlement."
  },
  {
    question: "How can AMA Legal Solutions help me?",
    answer: "We combine legal expertise with financial negotiation skills. Whether it's using the Kandhu Vatti Act to stop private harassment or negotiating a fair OTS with a bank for your MSME, we protect your rights and help you become debt-free."
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
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions (Tamil Nadu)</h2>
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
