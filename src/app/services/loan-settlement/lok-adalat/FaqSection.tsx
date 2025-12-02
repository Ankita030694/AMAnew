import React from "react";

const FaqSection = () => {
  const faqData = [
    {
      question: "What is the limit for loan settlement in Lok Adalat?",
      answer:
        "According to RBI guidelines and the Legal Services Authorities Act, Lok Adalats can generally handle cases with a monetary value up to ₹20 Lakhs. However, for Debt Recovery Tribunals (DRT) organizing Lok Adalats, cases involving ₹10 Lakhs and above can also be entertained. There is no strict upper limit for settlement if both parties (bank and borrower) mutually agree to the terms, but the ₹20 Lakh threshold is standard for regular Lok Adalats.",
    },
    {
      question: "Can I settle my credit card debt in Lok Adalat?",
      answer:
        "Yes, credit card dues are unsecured debts and are highly eligible for settlement in Lok Adalat. Banks often prefer this route for credit card defaults to avoid long litigation for relatively smaller amounts. You can negotiate a significant reduction in the total outstanding amount, including waivers on interest and late fees.",
    },
    {
      question: "Is the Lok Adalat decision binding?",
      answer:
        "Yes, an award passed by the Lok Adalat is deemed to be a decree of a Civil Court and is final and binding on all parties to the dispute. No appeal lies against such an award before any court of law. This ensures that once a settlement is reached, the bank cannot reopen the case or demand more money later.",
    },
    {
      question: "Do I need a lawyer for Lok Adalat settlement?",
      answer:
        "While Lok Adalat is a people's court designed to be accessible, having a lawyer is highly recommended. A lawyer can help you understand the legal implications of the settlement terms, ensure that the bank is not pressuring you into an unfair deal, and verify that the final award is correctly drafted to protect you from future liability.",
    },
    {
      question: "What happens to my CIBIL score after Lok Adalat settlement?",
      answer:
        "When a loan is settled through Lok Adalat for an amount less than the total outstanding, it is typically reported to credit bureaus as 'Settled'. While this is better than 'Written Off' or 'Suit Filed', it does impact your credit score. However, obtaining a 'No Dues Certificate' or the Lok Adalat award allows you to eventually rebuild your score by taking secured credit products.",
    },
    {
      question: "Can I approach Lok Adalat if the bank has already filed a case?",
      answer:
        "Absolutely. Lok Adalats are specifically designed to reduce the burden on courts. If a case is already pending in a Civil Court or DRT, you can request the court to refer the matter to Lok Adalat for an amicable settlement. If settled, you are also entitled to a refund of the court fees paid.",
    },
    {
      question: "How long does the Lok Adalat process take?",
      answer:
        "The Lok Adalat process is extremely fast compared to regular court trials. Once the matter is referred and both parties appear, the settlement can often be concluded in a single day. National Lok Adalats are held quarterly, providing regular opportunities for quick resolution.",
    },
    {
      question: "What documents are required for Lok Adalat settlement?",
      answer:
        "You should carry your KYC documents (PAN, Aadhar), loan account statements, notices received from the bank, proof of financial hardship (salary slips, medical reports, termination letters), and any previous correspondence regarding settlement offers.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
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
            Common queries about settling loans through Lok Adalat
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
