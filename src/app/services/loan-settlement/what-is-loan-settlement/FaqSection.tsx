import React from "react";

const FaqSection = () => {
  const faqData = [
    {
      question: "What is the minimum amount required for loan settlement?",
      answer:
        "There is no fixed minimum amount set by law. The settlement amount depends on the bank's internal policies, the type of loan, and the duration of default. Typically, banks may agree to settle for 50% to 70% of the principal outstanding, but in cases of severe hardship or old NPAs, it can sometimes go lower. It is purely a matter of negotiation.",
    },
    {
      question: "Does loan settlement affect my CIBIL score?",
      answer:
        "Yes, loan settlement has a negative impact on your credit score. When you settle a loan, the account status is reported as 'Settled' instead of 'Closed'. This indicates that the loan was not paid in full. It can drop your score by 75-100 points or more. However, it is often a better alternative than a 'Written Off' status or legal action.",
    },
    {
      question: "Can I get a loan after settlement?",
      answer:
        "Getting a new unsecured loan immediately after settlement is difficult because lenders view you as a high-risk borrower. However, you can rebuild your credit score over time (12-24 months) by using secured credit cards or gold loans responsibly. Once your score improves, you will be eligible for regular loans again.",
    },
    {
      question: "Is loan settlement legal in India?",
      answer:
        "Yes, loan settlement is a completely legal process. It is a mutual agreement between the lender and the borrower to close the loan account for a reduced amount. It is governed by the Indian Contract Act and banking regulations. RBI also has guidelines for One Time Settlement (OTS) schemes for NPAs.",
    },
    {
      question: "Can I settle a secured loan like a home loan?",
      answer:
        "Settling a secured loan is much harder than an unsecured one. Since the bank has collateral (your house or car), they prefer to seize and auction the asset to recover their dues. Settlement in secured loans usually happens only if the asset value has depreciated significantly or if the legal process of possession is too complicated for the bank.",
    },
    {
      question: "What is the difference between loan settlement and loan restructuring?",
      answer:
        "Loan settlement involves paying a lump sum (less than the total due) to close the account permanently. Loan restructuring involves changing the terms of the loan (e.g., increasing tenure, lowering EMI) to make it easier for you to pay the *full* amount. Restructuring does not damage your credit score as severely as settlement.",
    },
    {
      question: "Do I need a lawyer for loan settlement?",
      answer:
        "While not mandatory, hiring a lawyer is highly advisable. Banks have professional recovery teams. A lawyer can protect you from harassment, negotiate a better settlement amount, ensure the agreement is legally sound, and verify that the 'No Dues Certificate' is genuine.",
    },
    {
      question: "How long does the settlement process take?",
      answer:
        "The process can take anywhere from a few weeks to a few months. It depends on how quickly you can arrange the settlement funds and how long the bank takes to approve the proposal. If done through a Lok Adalat, it can be faster.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    mainEntity: faqData.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section id="faqs" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Common questions about the loan settlement process
          </p>
        </div>

        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
            >
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                  <h3 className="text-lg font-semibold text-gray-900 pr-8">
                    {faq.question}
                  </h3>
                  <span className="transition-transform group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shapeRendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                  {faq.answer}
                </div>
              </details>
            </div>
          ))}
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </div>
    </section>
  );
};

export default FaqSection;
