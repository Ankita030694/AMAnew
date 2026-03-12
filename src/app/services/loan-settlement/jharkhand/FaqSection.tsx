"use client";

import React from "react";
import Script from "next/script";

const faqs = [
  {
    question: "Is loan settlement legal in Jharkhand?",
    answer: "Yes, loan settlement is a fully legal process. It is often facilitated through Lok Adalats organized by the Jharkhand Legal Services Authority (JHALSA) and is a recognized method for resolving Non-Performing Assets (NPAs) with banks."
  },
  {
    question: "Can the bank auction my tribal land if I default?",
    answer: "No. If you belong to a Scheduled Tribe (ST), Scheduled Caste (SC), or Backward Class (BC), your land is protected under the Chota Nagpur Tenancy (CNT) Act or Santhal Parganas Tenancy (SPT) Act. Banks face significant legal restrictions in attaching or auctioning such land. We use these laws to defend your property rights during settlement negotiations."
  },
  {
    question: "I am a coal mine worker with debt. Can I get a settlement?",
    answer: "Yes. We understand the financial instability faced by workers in the mining sector (Dhanbad, Bokaro). Whether you have a personal loan or a vehicle loan for a truck/dumper, we can negotiate with the bank for a One Time Settlement (OTS) based on your current financial hardship."
  },
  {
    question: "How does the Jharkhand Private Money Lending Act, 2016 help me?",
    answer: "This Act strictly prohibits private money lending on interest without a license. It bans traditional usury practices like 'shaukari' or 'mahajani'. If you are being harassed by a private lender for exorbitant interest, the debt may be deemed illegal and unenforceable under this Act."
  },
  {
    question: "I took a microfinance group loan in my village. Can I settle it?",
    answer: "Yes. Microfinance institutions (MFIs) often use coercive recovery tactics in rural areas. We can help you and your group members negotiate a settlement plan that is affordable, stopping the harassment and social shaming."
  },
  {
    question: "What is the role of JHALSA Lok Adalat in loan cases?",
    answer: "JHALSA conducts regular Lok Adalats across all districts (Ranchi, Jamshedpur, Hazaribagh, etc.). These are highly effective for settling bank disputes up to ₹20 Lakhs (and higher in specific cases). The settlement award is final and binding, often providing significant relief on interest."
  },
  {
    question: "Can recovery agents harass me at my home?",
    answer: "No. The Supreme Court and RBI guidelines strictly prohibit harassment. Recovery agents cannot use musclemen, threaten you, or visit at odd hours. If this happens, we can take legal action against the bank and the agents."
  },
  {
    question: "What documents do I need for loan settlement?",
    answer: "You will need your loan account statement, identity proof (Aadhar/PAN), caste certificate (if applicable for CNT/SPT protection), proof of income loss (e.g., mine closure notice, medical emergency), and any notices received from the bank."
  },
  {
    question: "Will settlement affect my CIBIL score?",
    answer: "Yes, a settlement will be marked in your credit report. However, it is better than a 'default' or 'suit filed' status. It stops the legal action and allows you to slowly rebuild your credit over time."
  },
  {
    question: "How can AMA Legal Solutions help me in Jharkhand?",
    answer: "We have deep expertise in Jharkhand's specific laws like the CNT/SPT Acts and the Money Lending Act. We protect tribal land rights, defend industrial workers, and negotiate fair settlements with banks to get you out of debt."
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
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions (Jharkhand)</h2>
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
