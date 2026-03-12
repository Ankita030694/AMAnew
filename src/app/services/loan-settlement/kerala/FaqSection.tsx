"use client";

import React from "react";
import Script from "next/script";

const faqs = [
  {
    question: "Is loan settlement legal in Kerala?",
    answer: "Yes, loan settlement is a fully legal process in Kerala. It is often facilitated through Lok Adalats organized by the Kerala State Legal Services Authority (KELSA) and is a recognized method for resolving Non-Performing Assets (NPAs) with banks."
  },
  {
    question: "How does the Kerala Money Lenders Act protect me from 'Blade Mafia'?",
    answer: "The Kerala Money Lenders Act, 1958, strictly regulates money lending. It mandates licensing and caps interest rates. The government's 'Operation Kubera' crackdown has further strengthened these protections. If a private lender (Blade Mafia) is harassing you for exorbitant interest, we can help you file a complaint and seek legal protection."
  },
  {
    question: "I am a Gulf returnee with a personal loan. Can it be settled?",
    answer: "Yes, we specialize in helping NRIs and Gulf returnees. We understand that job loss or visa issues can lead to financial distress. We can negotiate with your bank to restructure your loan or settle it for a reduced amount based on your current income in Kerala."
  },
  {
    question: "Can the bank auction my pledged gold without notice?",
    answer: "No. While banks can auction pledged gold for non-payment, they must follow a strict legal process, including giving you proper notice. If they have auctioned your gold without due process, we can challenge it in the appropriate forum and seek compensation."
  },
  {
    question: "What is the role of Lok Adalat in Kerala for loan cases?",
    answer: "Lok Adalats in Kerala are very effective for settling bank disputes amicably. The award passed by a Lok Adalat is final and binding. It saves time and court fees. We can represent you in Lok Adalats in Kochi, Trivandrum, Calicut, and other districts."
  },
  {
    question: "I have a rubber plantation loan in Kottayam. Can I get a waiver?",
    answer: "Agricultural loans, including those for rubber plantations, often have specific settlement schemes, especially during times of price crashes or natural calamities. We can negotiate with the bank to waive penal interest and restructure the principal amount."
  },
  {
    question: "Can recovery agents use force to seize my vehicle?",
    answer: "No. The Kerala High Court has strictly ruled against the use of 'musclemen' or private recovery agencies. Banks must follow the due process of law. If agents are harassing you, we can take immediate legal action to protect your rights."
  },
  {
    question: "I am facing a cheque bounce case (Section 138) in Ernakulam. What should I do?",
    answer: "A Section 138 case is serious but can be settled out of court. We can help you negotiate a compromise with the lender. Once the settlement amount is paid, the case can be withdrawn, and you will be acquitted."
  },
  {
    question: "What if my property is under SARFAESI proceedings?",
    answer: "If you have received a SARFAESI notice, you must act fast. We can approach the Debt Recovery Tribunal (DRT) in Ernakulam to seek a stay on the proceedings if the bank has violated any procedural norms, giving you time to arrange a settlement."
  },
  {
    question: "How can AMA Legal Solutions help me in Kerala?",
    answer: "We have a deep understanding of Kerala's unique financial landscape, from NRI issues to agricultural distress. We provide expert legal representation to stop harassment, negotiate with banks, and help you achieve a debt-free life."
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
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions (Kerala)</h2>
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
