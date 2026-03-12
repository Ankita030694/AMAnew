import React from "react";

const FaqSection = () => {
  const faqItems = [
    {
      question: "How can I register a Finance Company in Chhattisgarh?",
      answer: "To register a finance company in Chhattisgarh, you can opt for an NBFC, Microfinance Institution, or Nidhi Company model. The process involves incorporation under the Companies Act, 2013, followed by obtaining a Certificate of Registration (CoR) from the Reserve Bank of India (RBI) for NBFCs. For Nidhi companies, RBI registration is not required, but compliance with Nidhi Rules, 2014 is mandatory.",
    },
    {
      question: "What is the minimum capital requirement for NBFC registration?",
      answer: "For a standard NBFC registration in Chhattisgarh (and pan-India), the minimum Net Owned Fund (NOF) requirement is ₹2 Crores. This capital must be equity capital and free from losses. It must be deposited in a bank account before applying to the RBI.",
    },
    {
      question: "Do I need a license to lend money in Chhattisgarh?",
      answer: "Yes, money lending is regulated. If you are not an RBI-registered NBFC or a Bank, you must obtain a Money Lender License under the Chhattisgarh Money Lenders Act (borrowed from MP Act) to legally carry out lending activities. Lending without a license is illegal.",
    },
    {
      question: "Which DRT has jurisdiction over Chhattisgarh?",
      answer: "Banking disputes in Chhattisgarh fall under the jurisdiction of the Debt Recovery Tribunal (DRT) in Jabalpur. We provide legal representation for banks and financial institutions at DRT Jabalpur for recovery matters.",
    },
    {
      question: "Is it mandatory to register a Nidhi Company with RBI?",
      answer: "No, Nidhi Companies are exempted from the core registration requirements of the RBI. However, they must be incorporated as a Public Limited Company under the Companies Act, 2013, and must strictly adhere to the Nidhi Rules, 2014. They can only deal with their registered members.",
    },
    {
      question: "Can I use agricultural land as collateral for commercial loans?",
      answer: "While possible, enforcing security interest on agricultural land is complex due to state land laws protecting farmers. SARFAESI Act generally does not apply to agricultural land. We advise on structuring loans with non-agricultural collateral or using specific legal provisions for agri-finance.",
    },
    {
      question: "What legal services do you provide for Industrial Finance in Bhilai/Raipur?",
      answer: "We specialize in Project Finance documentation, Consortium Lending agreements, Due Diligence for mining and industrial projects, and creating valid mortgages/charges on industrial assets (plant and machinery) compliant with ROC and CERSAI norms.",
    },
    {
      question: "How do I recover bad debts from a company in Raipur?",
      answer: "For corporate debtors, we can file an insolvency petition under IBC before the NCLT Cuttack Bench (which has jurisdiction over Chhattisgarh). For other debts, we can use Civil Suits or Section 138 NI Act proceedings in local courts.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
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
            Frequently Asked Questions on Banking Services in Chhattisgarh
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

