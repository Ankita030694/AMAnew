"use client";

import React from "react";
import Script from "next/script";

const faqs = [
  {
    question: "Do I have to travel to Kerala for DRT cases?",
    answer: "No, you do not. While the jurisdictional Debt Recovery Tribunal (DRT) is in Ernakulam, AMA Legal Solutions handles all representation there on your behalf. We appear in court so you can stay in Lakshadweep and save on travel costs."
  },
  {
    question: "Can I settle my fishing boat loan?",
    answer: "Yes, we specialize in settling loans for fishing equipment and boats. If your catch has been affected by weather or market prices, we use these grounds to negotiate a One Time Settlement (OTS) with banks like Canara (Syndicate) Bank."
  },
  {
    question: "Is the Kerala High Court relevant for my loan case?",
    answer: "Yes. The Kerala High Court has jurisdiction over Lakshadweep. In severe cases where the bank threatens SARFAESI action, we can file writ petitions in the Kerala High Court to stay the proceedings and protect your rights."
  },
  {
    question: "I have a KCC loan for my coconut plantation. Can it be waived?",
    answer: "Agricultural loans like KCC can be settled or restructured. While a complete waiver depends on government schemes, we can negotiate with the bank to waive off penal interest and restructure the principal based on your harvest cycles."
  },
  {
    question: "Is loan settlement legal in Lakshadweep?",
    answer: "Yes, loan settlement is fully legal and governed by RBI guidelines. It is a valid financial solution for residents of the Union Territory to resolve debt issues."
  },
  {
    question: "Do you serve all islands including Minicoy and Agatti?",
    answer: "Yes, our services cover all inhabited islands including Kavaratti, Agatti, Minicoy, Andrott, and Amini. We coordinate everything digitally, so your specific island location does not hinder the legal process."
  },
  {
    question: "Can I settle a Mudra loan taken for a shop?",
    answer: "Yes, Mudra loans are unsecured business loans and are eligible for settlement. If your business has suffered due to logistical issues or lack of tourism, we can negotiate a settlement for a reduced amount."
  },
  {
    question: "Will the settlement show in my CIBIL report?",
    answer: "Yes, the account status will change to 'Settled'. This impacts your score temporarily but is better than a 'Written Off' status. It allows you to become debt-free and eventually rebuild your credit."
  },
  {
    question: "How do I communicate with you from the islands?",
    answer: "We use WhatsApp and phone calls for all communications. You can send photos of your documents. We understand the connectivity challenges and are patient and flexible with our island clients."
  },
  {
    question: "Why choose AMA Legal Solutions?",
    answer: "We offer the unique advantage of having a strong legal team in Ernakulam (where the courts are) while understanding the specific problems of Lakshadweep residents. We bridge the gap between the islands and the mainland legal system."
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
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions (Lakshadweep)</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                <span className="text-[#0077be] mr-3">Q.</span>
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
