"use client";

import React from "react";
import Script from "next/script";

const faqs = [
  {
    question: "What is the difference between debt consolidation and loan settlement?",
    answer: "Debt consolidation involves taking a new loan to pay off multiple existing debts, effectively combining them into a single monthly payment, often with a lower interest rate. Loan settlement, on the other hand, is a negotiation process where you pay a lump sum that is less than the total amount owed to close the debt account. While consolidation manages debt, settlement reduces the total debt burden. Both are valid strategies to get out of debt depending on your financial situation."
  },
  {
    question: "Is debt consolidation a good idea for credit card debt?",
    answer: "Yes, debt consolidation can be highly effective for high-interest credit card debt. By consolidating multiple credit card balances into a single personal loan or a balance transfer card with a lower interest rate, you can save money on interest and simplify your monthly payments. However, it requires discipline to avoid running up new credit card debt while paying off the consolidation loan."
  },
  {
    question: "How does debt settlement affect my credit score?",
    answer: "Debt settlement will negatively impact your credit score because the debt is not paid in full as originally agreed. The account will typically be marked as 'Settled' or 'Paid Settled' on your credit report. This is less damaging than a bankruptcy but more damaging than a full repayment. However, once the debt is settled, your debt-to-income ratio improves, and you can start rebuilding your credit score immediately."
  },
  {
    question: "Can I consolidate my debt with bad credit?",
    answer: "It is more difficult to qualify for a low-interest debt consolidation loan with bad credit, but it is not impossible. Some lenders specialize in bad credit loans, though the interest rates may be higher. Alternatively, you might consider a debt management plan through a credit counseling agency, which doesn't require a new loan but helps you repay your debts at reduced interest rates negotiated by the agency."
  },
  {
    question: "What is an IVA and is it available in India?",
    answer: "An Individual Voluntary Arrangement (IVA) is a formal agreement available in the UK to pay off debts over a period of time. It is a form of insolvency but avoids bankruptcy. In India, we do not have an exact equivalent called 'IVA', but we have similar mechanisms like the Insolvency and Bankruptcy Code (IBC) for individuals (though largely notified for guarantors) and negotiated settlements or One Time Settlements (OTS) with banks, which serve a similar purpose of resolving unmanageable debt."
  },
  {
    question: "Does debt consolidation lead to bankruptcy?",
    answer: "Debt consolidation is often a step taken to *avoid* bankruptcy. By making payments more manageable, it helps borrowers stay afloat. However, if the underlying spending habits aren't addressed, or if the consolidation loan has unfavorable terms, a borrower might find themselves in deeper debt, which could eventually lead to bankruptcy. Proper financial counseling is recommended alongside consolidation."
  },
  {
    question: "What is the role of a debt collector in the settlement process?",
    answer: "A debt collector is an agent or agency hired by the lender to recover the outstanding money. They often initiate contact when payments are missed. In the settlement process, you or your legal representative negotiate with these collectors or the original lender. It is crucial to know your rights; debt collectors cannot harass you. Professional legal representation can stop harassment and ensure fair negotiations."
  },
  {
    question: "How can I lower my debt-to-income ratio?",
    answer: "Your debt-to-income (DTI) ratio is calculated by dividing your total monthly debt payments by your gross monthly income. To lower it, you can either increase your income or reduce your debt. Debt settlement significantly reduces your total debt load, thereby improving your DTI ratio over time. Paying off loans, avoiding new debt, and debt consolidation are other effective ways to lower your DTI."
  },
  {
    question: "Is national debt relief the same as government aid?",
    answer: "No, 'national debt relief' often refers to private companies offering debt settlement or consolidation services, not a government aid program. While there are government-backed schemes for specific sectors (like agriculture or MSMEs in India), personal debt relief is usually handled through private negotiations, legal settlements, or bankruptcy proceedings. Always verify the legitimacy of any 'national debt relief' organization."
  },
  {
    question: "What is credit counseling?",
    answer: "Credit counseling is a service where certified counselors review your finances, help you create a budget, and offer strategies to manage your debt. They can help you set up a Debt Management Plan (DMP), where you make one monthly payment to the counseling agency, and they distribute it to your creditors. It is a helpful first step for anyone feeling overwhelmed by debt."
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
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions About Debt Consolidation & Settlement</h2>
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
