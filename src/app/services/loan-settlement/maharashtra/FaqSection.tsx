"use client";

import React from "react";
import Script from "next/script";

const faqs = [
  {
    question: "Is loan settlement legal in Maharashtra?",
    answer: "Yes, loan settlement is a completely legal and regulated financial process in Maharashtra. It operates under the guidelines of the Reserve Bank of India (RBI) and is a recognized method for resolving Non-Performing Assets (NPAs). Additionally, mechanisms like the Lok Adalat, organized by the Maharashtra State Legal Services Authority, provide a statutory platform for settling such disputes amicably and legally."
  },
  {
    question: "Can I settle my loan through Lok Adalat in Mumbai or Pune?",
    answer: "Absolutely. Lok Adalats are frequently organized in major cities like Mumbai, Pune, Nagpur, and Nashik by the District Legal Services Authorities (DLSA). They are an excellent venue for settling personal loans, credit card dues, and other debts. The settlement award passed by a Lok Adalat is deemed to be a decree of a civil court and is final and binding on all parties, ensuring a secure legal closure."
  },
  {
    question: "How does the settlement process work for credit card debt in Maharashtra?",
    answer: "Credit card debt settlement involves negotiating with the bank to pay a reduced lump sum amount. In Maharashtra, if a bank refuses a fair settlement, we can also escalate the matter to the **Banking Ombudsman** (located in Mumbai) for grievance redressal. We analyze your financial hardship to negotiate a waiver on the exorbitant interest, often reducing the liability significantly."
  },
  {
    question: "Will settling a loan affect my CIBIL score?",
    answer: "Yes, settling a loan does impact your CIBIL score. The account status will be reported as 'Settled' rather than 'Closed', which can lower your score by 50-100 points. However, this is a temporary setback and is far better than a 'Written Off' status or continuing default. With disciplined financial behavior, you can rebuild your credit score within 12-24 months post-settlement."
  },
  {
    question: "What documents do I need for loan settlement in Maharashtra?",
    answer: "To initiate a settlement, you need to prove genuine financial hardship. Essential documents include your loan account statements, salary slips or income proof showing a drop in earnings, bank statements, and any medical or termination letters if applicable. If you are opting for Lok Adalat settlement, you may also need to fill out a specific application form available with the Maharashtra Legal Services Authority."
  },
  {
    question: "Can banks in Maharashtra seize my property for a personal loan default?",
    answer: "For unsecured personal loans, banks cannot seize property. For secured loans, they must follow the SARFAESI Act. In Maharashtra, to take physical possession, the bank must get an order from the **Chief Metropolitan Magistrate (CMM)** in Mumbai or the **District Magistrate (DM)** in other districts. They cannot forcefully evict you without this specific court order."
  },
  {
    question: "How long does the loan settlement process take?",
    answer: "The timeline varies based on the bank's internal policies and the complexity of the case. Generally, a negotiated settlement can take anywhere from 3 to 6 months. If the matter is referred to a Lok Adalat, it can sometimes be resolved faster on the scheduled date of the hearing, provided both parties agree to the terms beforehand."
  },
  {
    question: "Do I need a lawyer for loan settlement?",
    answer: "While not mandatory, hiring a lawyer is highly recommended. Banks have legal teams to protect their interests; you need someone to protect yours. A lawyer can handle communications, stop harassment, ensure the settlement terms are fair, and verify that the final Settlement Letter and No Dues Certificate are legally sound to prevent future claims."
  },
  {
    question: "What is the Maharashtra Money-Lending (Regulation) Act?",
    answer: "The Maharashtra Money-Lending (Regulation) Act, 2014, protects borrowers from illegal private lenders. If a lender is harassing you or charging interest above the notified rates, we can file a formal complaint with the **District Registrar of Money Lenders**. This can lead to the cancellation of their license and even criminal prosecution."
  },
  {
    question: "How can AMA Legal Solutions help me in Maharashtra?",
    answer: "AMA Legal Solutions provides end-to-end legal representation. We have a deep understanding of the local legal framework, including the specific procedures at DRT Mumbai/Pune and the Cooperative Courts. We handle all negotiations, protect you from harassment under state laws, and ensure you get a legally binding settlement."
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
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions (Maharashtra)</h2>
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
