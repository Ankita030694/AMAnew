import React from "react";

const FaqSection = () => {
  const faqItems = [
    {
      question: "How can I register a Finance Company in Bihar?",
      answer: "To start a finance business in Bihar, you generally have three options: 1) Register as an NBFC (Non-Banking Financial Company) which requires RBI approval and ₹2 Crore capital. 2) Start a Nidhi Company (Mutual Benefit Company) which requires incorporation under the Companies Act, 2013 but no RBI license. 3) Register as a Microfinance Section 8 Company for non-profit lending. Each has different compliance requirements.",
    },
    {
      question: "What is the Bihar Money Lenders Act?",
      answer: "The Bihar Money Lenders Act, 1974 regulates private money lending in the state. It mandates that anyone carrying on the business of money lending must obtain a license from the concerned Circle Officer or authority. Lending without this license is illegal, and such debts are often non-recoverable in court.",
    },
    {
      question: "Where is the Debt Recovery Tribunal (DRT) for Bihar located?",
      answer: "The Debt Recovery Tribunal (DRT) having jurisdiction over Bihar is located in Patna. It handles cases for recovery of debts due to banks and financial institutions where the amount exceeds ₹20 Lakhs. We provide legal representation for both banks and borrowers at DRT Patna.",
    },
    {
      question: "Can I start a Nidhi Company in Patna?",
      answer: "Yes, Patna is a hub for Nidhi Companies. You need to register a Public Limited Company with the Registrar of Companies (RoC) Patna. Post-incorporation, you must ensure you have at least 200 members and Net Owned Funds of ₹10 Lakhs within one year to comply with Nidhi Rules, 2014.",
    },
    {
      question: "What is the role of Jeevika in Bihar's Microfinance sector?",
      answer: "Jeevika (Bihar Rural Livelihoods Promotion Society) has revolutionized microfinance in Bihar through Self Help Groups (SHGs). While Jeevika is a government initiative, private Microfinance Institutions (MFIs) and NBFCs can also partner with SHGs or form Joint Liability Groups (JLGs) for lending, provided they follow RBI's fair practices code.",
    },
    {
      question: "What are the documents required for a Money Lenders License in Bihar?",
      answer: "Typically, you need to submit an application in the prescribed format to the local Circle Officer or Sub-Divisional Magistrate, along with character certificates, proof of address, and details of the capital you intend to deploy. Regular maintenance of account registers is mandatory for renewal.",
    },
    {
      question: "How to deal with Cheque Bounce cases in Bihar?",
      answer: "Cheque bounce cases are filed under Section 138 of the Negotiable Instruments Act. In Bihar, these are filed before the Chief Judicial Magistrate (CJM) or Judicial Magistrate of First Class (JMFC) in the district where the cheque was presented. We handle such litigation across all districts including Muzaffarpur, Gaya, and Bhagalpur.",
    },
    {
      question: "Is RBI registration mandatory for all finance businesses?",
      answer: "Not all. Nidhi Companies and Money Lenders (individuals/firms) do not need RBI registration. However, if you are a company and your 'financial assets' constitute more than 50% of total assets and 'financial income' is more than 50% of total income, you MUST register as an NBFC with the RBI.",
    }
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
            Frequently Asked Questions on Banking Services in Bihar
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

