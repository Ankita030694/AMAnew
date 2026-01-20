"use client";

import React from "react";
import Script from "next/script";

const faqs = [
  {
    question: "Is loan settlement legal in Jammu & Kashmir?",
    answer: "Yes, loan settlement is a fully legal process. It is governed by RBI guidelines and facilitated through the Jammu & Kashmir Legal Services Authority (Lok Adalats) and the Debt Recovery Tribunals (DRT). It is a legitimate way to resolve NPA accounts."
  },
  {
    question: "How does the J&K Debtors Relief Act help me?",
    answer: "The Jammu and Kashmir Debtors Relief Act, 1976 provides protection to borrowers, especially those from weaker sections, against excessive interest rates and unfair recovery practices by private money lenders. It allows for the scaling down of debts in certain cases."
  },
  {
    question: "I have a houseboat business loan in Srinagar. Can it be settled?",
    answer: "Yes. We specialize in settling loans for the tourism and hospitality sector. Given the seasonal nature and disruptions in the valley, we can negotiate with J&K Bank or other lenders for a One Time Settlement (OTS) that waives off penal interest and considers your actual cash flow."
  },
  {
    question: "What should I do if J&K Bank sends a SARFAESI notice?",
    answer: "A SARFAESI notice (Section 13(2)) is serious. You must reply within 60 days raising valid legal objections. If you ignore it, the bank can take possession of your property. We help you draft a strong legal reply to stop the bank from proceeding further."
  },
  {
    question: "There is no DRT in Srinagar. How do I fight my case?",
    answer: "This is a major challenge as the jurisdiction lies with DRT Chandigarh. However, AMA Legal Solutions handles filings and representation in Chandigarh for you. In urgent cases involving residential property, we can also approach the J&K High Court under its writ jurisdiction."
  },
  {
    question: "Can police in J&K help against recovery harassment?",
    answer: "Yes. The J&K Police are vigilant against illegal recovery tactics. Using musclemen or abusive language is a criminal offense. We can help you file a formal complaint with the nearest police station or the Cyber Police if digital harassment is involved."
  },
  {
    question: "Does a settlement affect my CIBIL score?",
    answer: "Yes, the account will be reported as 'Settled' to credit bureaus, which may temporarily lower your score. However, this is better than a 'Written Off' or 'Suit Filed' status. You can rebuild your score over time, but closing the debt burden is the priority."
  },
  {
    question: "Do you handle cases in rural districts like Anantnag or Baramulla?",
    answer: "Yes, our services cover the entire Union Territory of Jammu & Kashmir. Whether you are in Srinagar, Jammu, Anantnag, Baramulla, or Udhampur, we can represent you in negotiations and legal proceedings."
  },
  {
    question: "What is the benefit of Lok Adalat in J&K?",
    answer: "Lok Adalats in J&K are very effective for settling banking disputes amicably. The decision (award) is final and binding, court fees are refunded, and it stops all further legal proceedings immediately. It is the fastest way to become debt-free."
  },
  {
    question: "Why should I choose AMA Legal Solutions?",
    answer: "We understand the unique socio-economic landscape of J&K. We combine deep knowledge of central banking laws with local legal remedies to get you the best possible settlement deal while protecting your dignity."
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
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions (J&K)</h2>
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
