"use client";

import React from "react";
import Script from "next/script";

const faqs = [
  {
    question: "Is loan settlement legal in Chhattisgarh?",
    answer: "Yes, loan settlement is a fully legal process. It is often facilitated through Lok Adalats organized by the Chhattisgarh State Legal Services Authority (CGSLSA) and is a recognized method for resolving Non-Performing Assets (NPAs) with banks."
  },
  {
    question: "Can the bank auction my tribal land if I default?",
    answer: "No. Section 165(6) of the Chhattisgarh Land Revenue Code (CGLRC) strictly prohibits the transfer of land belonging to aboriginal tribes to non-tribals without the Collector's permission. This makes it extremely difficult for banks to auction tribal land. We use this provision to protect your property."
  },
  {
    question: "I am a farmer in the 'Rice Bowl' region. Can I settle my KCC loan?",
    answer: "Yes. We understand the distress faced by farmers in districts like Durg, Raipur, and Bilaspur due to crop failure or low market prices. We can negotiate a One Time Settlement (OTS) for your Kisan Credit Card (KCC) loan, often getting significant waivers on interest."
  },
  {
    question: "How does the Chhattisgarh Money Lenders Act help me?",
    answer: "The Chhattisgarh Money Lenders Act, 1934, mandates that all money lenders must be registered. It also caps interest rates. If a private lender is unregistered or charging exorbitant interest, their debt recovery actions can be challenged legally."
  },
  {
    question: "I worked in a power plant in Korba and lost my job. What about my loans?",
    answer: "Industrial workers in Korba and Raigarh often face job instability. If you have defaulted on personal or vehicle loans due to job loss or health issues (like pollution-related illnesses), we can use these grounds to negotiate a settlement with the bank."
  },
  {
    question: "What is the role of Lok Adalat in Chhattisgarh?",
    answer: "Lok Adalats in Chhattisgarh are highly effective for settling bank disputes. They provide a platform for amicable settlement where you can negotiate directly with the bank. The award passed by the Lok Adalat is final and binding, saving you from further litigation."
  },
  {
    question: "Can recovery agents harass me at my home?",
    answer: "No. The Supreme Court and RBI guidelines strictly prohibit harassment. Recovery agents cannot use musclemen, threaten you, or visit at odd hours. If this happens, we can take legal action against the bank and the agents."
  },
  {
    question: "What documents do I need for loan settlement?",
    answer: "You will need your loan account statement, identity proof (Aadhar/PAN), caste certificate (if applicable for tribal land protection), proof of income loss (e.g., crop damage report, medical records), and any notices received from the bank."
  },
  {
    question: "Will settlement affect my CIBIL score?",
    answer: "Yes, a settlement will be marked in your credit report. However, it is better than a 'default' or 'suit filed' status. It stops the legal action and allows you to slowly rebuild your credit over time."
  },
  {
    question: "How can AMA Legal Solutions help me in Chhattisgarh?",
    answer: "We have deep expertise in Chhattisgarh's specific laws like the CGLRC and Money Lenders Act. We protect tribal land rights, defend farmers and industrial workers, and negotiate fair settlements with banks to get you out of debt."
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
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions (Chhattisgarh)</h2>
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
