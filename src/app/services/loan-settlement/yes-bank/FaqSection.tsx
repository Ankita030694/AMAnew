import React from "react";

const faqs = [
  {
    question: "What is the Yes Bank Loan Settlement Process?",
    answer: "The Yes Bank loan settlement process, often involving a One-Time Settlement (OTS), allows borrowers who are unable to repay their full debt due to genuine financial hardship to close their loan account by paying a reduced lump-sum amount. This is a legal process where the bank agrees to waive a portion of the interest and principal to recover the remaining dues."
  },
  {
    question: "Does Yes Bank offer an OTS scheme for personal loans?",
    answer: "Yes, Yes Bank offers One-Time Settlement (OTS) schemes for personal loans, especially for accounts that have become Non-Performing Assets (NPAs). The settlement amount depends on the borrower's repayment capacity, the duration of the default, and the bank's internal policies at the time of negotiation."
  },
  {
    question: "How much discount can I get in a Yes Bank credit card settlement?",
    answer: "In a Yes Bank credit card settlement, borrowers can typically negotiate a waiver of 30% to 60% of the total outstanding amount. The final percentage depends on the severity of the financial hardship, the age of the debt, and the negotiation skills employed. Penalties and accumulated interest are often the first components to be waived."
  },
  {
    question: "Will settling my Yes Bank loan affect my CIBIL score?",
    answer: "Yes, settling a loan will impact your CIBIL score. The account status will be reported as 'Settled' instead of 'Closed', which indicates that the loan was not paid in full. This can lower your score by 50-100 points. However, it is a better alternative to a 'Written Off' status, and you can rebuild your score over time with disciplined financial behavior."
  },
  {
    question: "What documents are required for Yes Bank loan settlement?",
    answer: "To initiate a settlement with Yes Bank, you typically need to submit a settlement proposal letter along with documents proving your financial hardship. These may include recent bank statements, salary slips (showing pay cuts or job loss), medical records (if applicable), and income tax returns. Identity and address proofs are also required."
  },
  {
    question: "Can I settle my Yes Bank loan online?",
    answer: "While the initial request or proposal can sometimes be sent via email or through the bank's portal, the negotiation and finalization of the settlement usually require direct interaction with the bank's recovery department or authorized officers. It is highly recommended to have a legal expert handle these communications to ensure the terms are fair and documented correctly."
  },
  {
    question: "How long does the Yes Bank settlement process take?",
    answer: "The entire process, from submitting the proposal to receiving the settlement letter, typically takes between 30 to 90 days. This timeline can vary based on the complexity of the case and the speed of the bank's internal approvals."
  },
  {
    question: "What is a 'No Dues Certificate' from Yes Bank?",
    answer: "A 'No Dues Certificate' (NDC) or 'No Objection Certificate' (NOC) is a formal document issued by Yes Bank after you have paid the agreed settlement amount in full. It certifies that the loan account is closed and the bank has no further claims against you. This is a crucial document to prove you are debt-free."
  },
  {
    question: "Can Yes Bank restart legal action after settlement?",
    answer: "Once a settlement is legally finalized, the payment is made, and the No Dues Certificate is issued, Yes Bank cannot restart legal action for the same debt. However, if you fail to pay the settlement amount within the agreed timeframe, the settlement becomes void, and the bank can resume legal proceedings for the full outstanding amount."
  },
  {
    question: "Do I need a lawyer for Yes Bank loan settlement?",
    answer: "While not mandatory, hiring a lawyer is strongly advised. A lawyer can protect you from harassment by recovery agents, ensure that the settlement terms are legally sound, and negotiate a better deal than you might achieve on your own. They also ensure that all documentation, including the settlement letter and NDC, is in order."
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
    <section id="faqs" className="scroll-mt-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
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
  );
}
