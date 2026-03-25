import React from 'react';

const faqs = [
  {
    question: "What is the Kotak Mahindra Bank Loan Settlement Process?",
    answer: "The Kotak Mahindra Bank loan settlement process is a formal negotiation to close a loan account for a reduced amount. This option is typically available to borrowers who have defaulted on their payments for more than 90 days and have a genuine financial reason for their inability to pay, such as job loss or medical emergency. The process involves submitting a settlement proposal, negotiating with the bank's recovery team, and paying the agreed One Time Settlement (OTS) amount. Once paid, the bank issues a No Dues Certificate, closing the loan permanently."
  },
  {
    question: "Can I settle my Kotak Credit Card dues?",
    answer: "Yes, Kotak Mahindra Bank credit card dues can be settled. Since credit card debt is unsecured, banks are often more willing to negotiate a settlement rather than risk a total loss. If you are stuck in a debt trap with high interest and penalties, we can help you negotiate a settlement that waives off a significant portion of the interest and principal, allowing you to become debt-free with a single payment."
  },
  {
    question: "Does Kotak Bank offer One Time Settlement (OTS)?",
    answer: "Yes, Kotak Mahindra Bank provides One Time Settlement (OTS) schemes for Non-Performing Assets (NPAs). An OTS allows you to pay a lump sum amount, which is lower than your total outstanding debt, to close the account. This is a win-win solution where the bank recovers a portion of its funds, and you get relief from the debt burden and legal harassment."
  },
  {
    question: "How much can I save through Kotak loan settlement?",
    answer: "The savings in a loan settlement depend on various factors like the type of loan, the duration of default, and your financial condition. Generally, borrowers can save anywhere from 30% to 50% of the total outstanding amount. In cases of old defaults with high accumulated interest, the waiver can be even higher. Our expert negotiators at AMA Legal Solutions strive to maximize your savings."
  },
  {
    question: "Will settling my Kotak loan affect my CIBIL score?",
    answer: "Yes, settling a loan will have a negative impact on your CIBIL score. The account status will be updated as 'Settled' instead of 'Closed'. This indicates that the loan was not repaid in full. A 'Settled' status can drop your score by 50-100 points. However, it is a better alternative to a 'Written Off' status or continuing default, which causes more long-term damage. You can rebuild your score over time with good financial habits."
  },
  {
    question: "What documents do I need for Kotak loan settlement?",
    answer: "To initiate a settlement with Kotak Mahindra Bank, you will need to provide documents that prove your financial hardship. These typically include a settlement proposal letter, bank statements showing low balance, termination letter (if unemployed), medical records (if applicable), and income tax returns. You will also need your KYC documents and loan account statement. We assist you in compiling and presenting these documents effectively."
  },
  {
    question: "Can Kotak Bank file a legal case against me?",
    answer: "Yes, Kotak Bank has the right to take legal action to recover dues. This can include filing a case under Section 138 of the Negotiable Instruments Act for cheque bounce, initiating arbitration proceedings, or taking action under the SARFAESI Act for secured loans. However, initiating a settlement dialogue often pauses these legal actions as the bank prefers an amicable resolution over litigation."
  },
  {
    question: "How long does it take to settle a loan with Kotak?",
    answer: "The settlement process with Kotak Mahindra Bank usually takes between 3 to 6 months. The timeline depends on the complexity of the case, the amount involved, and the responsiveness of the bank's credit committee. Having professional legal representation can significantly speed up the process by ensuring all proposals and documents are submitted correctly and negotiations are handled efficiently."
  },
  {
    question: "Can I get a new loan after settling with Kotak?",
    answer: "Obtaining a new loan immediately after a settlement is challenging due to the 'Settled' status on your credit report. Most lenders view this as a negative indicator. However, this is not permanent. By maintaining a clean financial record, paying other bills on time, and using secured credit cards, you can improve your credit score. Typically, after 2-3 years of disciplined behavior, you can become eligible for loans again."
  },
  {
    question: "Why should I hire AMA Legal Solutions for Kotak settlement?",
    answer: "Hiring AMA Legal Solutions ensures you have expert legal protection and negotiation skills on your side. We handle all communication with Kotak Bank, stopping harassment from recovery agents. We analyze your case to propose the best settlement terms and ensure that the final agreement is legally sound. Our goal is to get you the lowest possible settlement amount while protecting your rights and dignity."
  },
  {
    question: "Can I pay the settlement amount in installments?",
    answer: "While a single lump-sum payment is preferred for OTS, it is possible to negotiate a payment plan in installments. Depending on your financial capacity, we can request Kotak Bank to allow payment over 3 to 6 months. It is crucial to stick to this schedule, as defaulting on settlement installments can void the agreement and revive the original debt amount."
  },
  {
    question: "What happens if I don't respond to Kotak's legal notices?",
    answer: "Ignoring legal notices is dangerous. It can lead to the court passing ex-parte orders against you, which means a judgment is made in your absence. In cheque bounce cases, it can lead to the issuance of warrants. It is vital to respond to every notice legally. We can help you draft appropriate responses and represent you in court to prevent adverse orders."
  },
  {
    question: "Can I settle a secured loan like a Home Loan with Kotak?",
    answer: "Settling a secured loan is more complex because the bank has collateral it can sell. However, if the asset's value has dropped or there are legal disputes, Kotak Bank may consider a settlement. In such high-stakes situations, expert legal advice is essential to navigate the negotiation and prevent the loss of your property."
  },
  {
    question: "Will the recovery calls stop if I start settlement?",
    answer: "Yes, once you engage AMA Legal Solutions, we send a formal letter of representation to Kotak Bank. This legally mandates them to direct all future communication to us. This puts an immediate stop to the harassing calls and visits from recovery agents, giving you the peace of mind to focus on resolving your finances."
  },
  {
    question: "Is the settlement letter from Kotak legally binding?",
    answer: "Yes, the settlement letter issued by Kotak Mahindra Bank is a legally binding document. It outlines the agreed settlement amount, payment terms, and the waiver of the remaining balance. It is crucial to review this letter carefully before making any payment. We ensure that the letter contains all necessary clauses to protect you from future claims."
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="space-y-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600">Common queries about Kotak Mahindra Bank Loan Settlement</p>
        </div>
        <div className="grid gap-6 max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                <span className="text-[#ed1c24] mr-3 text-2xl">•</span>
                {faq.question}
              </h3>
              <p className="text-gray-600 leading-relaxed pl-6 border-l-2 border-gray-100 ml-2">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
