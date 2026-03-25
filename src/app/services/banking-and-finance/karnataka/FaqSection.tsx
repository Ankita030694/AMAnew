import React from "react";

const FaqSection = () => {
  const faqItems = [
    {
      question: "How can I register a Fintech Company in Bengaluru?",
      answer: "Registering a Fintech company involves incorporating a private limited company and then ensuring compliance with RBI regulations based on your business model. If you lend from your own books, you need an NBFC license. If you are a Loan Service Provider (LSP) partnering with banks/NBFCs, you must comply with RBI's Digital Lending Guidelines, 2022.",
    },
    {
      question: "What is the 'Karnataka Money Lenders Act' and does it apply to me?",
      answer: "The Karnataka Money Lenders Act, 1961 regulates money lending in the state. Unless you are an RBI-registered NBFC or a Bank, you must obtain a license from the Assistant Registrar of Cooperative Societies to lend money. Lending without a license is a cognizable offense.",
    },
    {
      question: "What is the minimum capital requirement for NBFC registration?",
      answer: "The minimum Net Owned Fund (NOF) requirement for a standard NBFC registration is ₹2 Crores. This capital must be equity capital and free from losses. It must be deposited in a bank account before applying to the RBI.",
    },
    {
      question: "Do you handle DRT cases in Bengaluru?",
      answer: "Yes, we have a dedicated team for Debt Recovery Tribunal (DRT) Bengaluru (Debts Recovery Tribunal-1 and Tribunal-2). We represent banks and financial institutions in Original Applications (OA) and SARFAESI appeals (SA).",
    },
    {
      question: "Is it mandatory to register a Nidhi Company with RBI?",
      answer: "No, Nidhi Companies are exempted from RBI registration but must file form NDH-4 with the Ministry of Corporate Affairs (MCA) to get Nidhi status. They are regulated by Nidhi Rules, 2014.",
    },
    {
      question: "What is the Karnataka Prohibition of Charging Exorbitant Interest Act?",
      answer: "This Act (often called 'Meter Baddi' Act) prohibits charging interest rates above those fixed by the state government. Violation can lead to imprisonment and heavy fines. Licensed money lenders must strictly adhere to these caps.",
    },
    {
      question: "Can a software company in Bengaluru offer loans?",
      answer: "No, a software company cannot offer loans directly unless it registers as an NBFC. However, it can act as a technology platform (LSP) connecting borrowers with registered lenders (REs), provided it complies with data localization and disclosure norms.",
    },
    {
      question: "How do I recover bad debts from a company in Karnataka?",
      answer: "For corporate debtors, we can file an insolvency petition under IBC before the NCLT Bengaluru Bench. For other debts, we can use the Commercial Courts Act, Civil Suits, or Section 138 NI Act proceedings.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section id="faqs" className="scroll-mt-32 py-12 bg-white rounded-2xl shadow-sm border border-gray-100 mt-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions on Banking Services in Karnataka
          </h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="border-b border-gray-200 pb-6 last:border-0 last:pb-0"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.question}
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqSection;

