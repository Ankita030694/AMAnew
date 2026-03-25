import React from 'react';

const faqs = [
  {
    question: "What is the IDFC FIRST Bank Loan Settlement Process?",
    answer: "The IDFC FIRST Bank loan settlement process involves negotiating with the bank to pay a reduced lump sum amount to close a loan account that has turned into a Non-Performing Asset (NPA). This usually happens when a borrower is unable to pay EMIs for more than 90 days due to genuine financial hardship. The process starts with a proposal to the bank, followed by negotiations on the settlement amount. Once an amount is agreed upon, the bank issues a settlement letter. After the payment is made, the loan is closed, and the status is updated to 'Settled' in the credit report."
  },
  {
    question: "Can I settle my IDFC FIRST Bank Credit Card debt?",
    answer: "Yes, IDFC FIRST Bank credit card debt can be settled. Credit card debts are unsecured, and banks are often willing to settle them if the borrower can prove genuine inability to pay. The settlement amount depends on the total outstanding, the duration of default, and your negotiation. It is possible to save a significant portion of the outstanding amount, sometimes up to 50% or more, depending on the case specifics."
  },
  {
    question: "Does IDFC FIRST Bank offer a One Time Settlement (OTS) scheme?",
    answer: "Yes, IDFC FIRST Bank offers One Time Settlement (OTS) schemes for borrowers who have defaulted on their loans. This is typically offered to NPA accounts. Under OTS, the bank may waive off a substantial part of the interest and penalties, and in some cases, a part of the principal amount, if the borrower agrees to pay the remaining amount in a single payment or a few short installments."
  },
  {
    question: "How does loan settlement with IDFC affect my CIBIL score?",
    answer: "Settling a loan with IDFC FIRST Bank will have a negative impact on your CIBIL score. The account status will be reported as 'Settled' instead of 'Closed'. This indicates that the loan was not paid in full. A 'Settled' status can lower your credit score by 50-100 points and remains on your report for several years. However, it is better than a 'Written Off' status, and you can rebuild your score over time with disciplined financial behavior."
  },
  {
    question: "What documents are required for IDFC loan settlement?",
    answer: "To settle a loan with IDFC FIRST Bank, you typically need to submit a settlement proposal letter along with documents proving your financial hardship. These may include termination letters (if job loss is the reason), medical records, bank statements showing lack of funds, or income tax returns. You will also need your KYC documents and loan account details. AMA Legal Solutions helps you draft a strong proposal and compile the necessary evidence."
  },
  {
    question: "Can IDFC Bank take legal action against me for non-payment?",
    answer: "Yes, IDFC Bank has the legal right to initiate proceedings for recovery of dues. This can include filing cases under Section 138 of the Negotiable Instruments Act (for cheque bounce), initiating arbitration proceedings, or taking action under the SARFAESI Act for secured loans. However, initiating a settlement process often puts a pause on these legal actions as the bank prefers to recover money amicably."
  },
  {
    question: "How long does the IDFC settlement process take?",
    answer: "The timeline for IDFC loan settlement varies but generally takes between 2 to 6 months. It depends on the complexity of the case, the amount pending, and the speed of negotiations. Having legal representation can expedite the process as lawyers can effectively communicate with the bank's legal and credit teams to reach a faster resolution."
  },
  {
    question: "Can I get a loan from IDFC again after settlement?",
    answer: "Getting a new loan from IDFC FIRST Bank or any other lender immediately after settlement is difficult because of the 'Settled' status on your credit report. Lenders view you as a high-risk borrower. However, this is not a permanent ban. If you maintain good financial habits and improve your credit score over the next 2-3 years, you can become eligible for loans again."
  },
  {
    question: "What is the role of AMA Legal Solutions in IDFC settlement?",
    answer: "AMA Legal Solutions acts as your legal representative and negotiator. We handle all communications with IDFC FIRST Bank, ensuring you are not harassed by recovery agents. We analyze your financial situation, draft the settlement proposal, and negotiate hard to get the lowest possible settlement amount. We also ensure that the settlement terms are legally binding and that you receive a proper No Dues Certificate upon payment."
  },
  {
    question: "Is it possible to pay the settlement amount in installments?",
    answer: "While banks prefer a single lump-sum payment for OTS, it is often possible to negotiate payment in installments. Depending on your financial capacity, we can request IDFC Bank to allow you to pay the settlement amount over 3 to 6 months. However, defaulting on these installments can lead to the cancellation of the settlement agreement."
  },
  {
    question: "What happens if I ignore IDFC Bank's legal notices?",
    answer: "Ignoring legal notices from IDFC Bank is risky. It can lead to ex-parte orders against you, issuance of bailable or non-bailable warrants (in cheque bounce cases), and attachment of assets. It is crucial to respond to every legal notice professionally. Engaging a lawyer to reply to these notices shows that you are aware of your rights and are willing to resolve the matter legally."
  },
  {
    question: "Can I settle a secured loan (Home/Car Loan) with IDFC?",
    answer: "Settling a secured loan is more challenging than an unsecured one because the bank has collateral (your home or car) that it can seize to recover dues. However, settlement is still possible if the asset value has depreciated or if there are legal complications. In such cases, the bank might agree to a settlement to avoid long legal battles. Expert legal advice is mandatory for such complex negotiations."
  },
  {
    question: "Will the harassment stop if I hire AMA Legal Solutions?",
    answer: "Yes, one of the immediate benefits of hiring AMA Legal Solutions is relief from harassment. We send a formal letter of representation to IDFC Bank, stating that all future communication regarding the loan must be directed to us. This legally compels recovery agents to back off. If they continue to harass you, we can take strict legal action against them."
  },
  {
    question: "What is the minimum amount IDFC will accept for settlement?",
    answer: "There is no fixed minimum percentage. It varies case by case. For unsecured loans, settlements can sometimes be achieved at 30-50% of the principal outstanding. For credit cards, it can be even lower. However, this depends heavily on your negotiation skills and the proof of hardship you provide. Our goal is always to minimize your payout."
  },
  {
    question: "Do I need to visit the bank branch for settlement?",
    answer: "In most cases, you do not need to visit the branch personally if you have hired AMA Legal Solutions. We handle the meetings and negotiations on your behalf. You might only need to sign the final settlement agreement. This saves you from the stress and awkwardness of facing bank officials directly."
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
          <p className="text-lg text-gray-600">Common queries about IDFC FIRST Bank Loan Settlement</p>
        </div>
        <div className="grid gap-6 max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                <span className="text-[#9d1d27] mr-3 text-2xl">•</span>
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
