import React from "react";

const FaqSection = () => {
  const faqItems = [
    {
      question: "How does Article 371A impact bank loans in Nagaland?",
      answer: "Article 371A of the Constitution grants special protection to Naga customary law and ownership of land. This means non-Nagas cannot acquire land in Nagaland. Consequently, banks face challenges in accepting land as collateral for mortgages since they cannot easily auction it to recovering dues. We assist in structuring loans using alternative securities or through government-guaranteed schemes.",
    },
    {
      question: "Is the SARFAESI Act applicable in Nagaland?",
      answer: "Yes, the SARFAESI Act is applicable, but its enforcement is subject to local nuances. The Nagaland government has notified specific authorities (DC) to assist in taking possession. However, the sale of attached property is restricted to indigenous inhabitants of the state, limiting the pool of buyers.",
    },
    {
      question: "What is the Nagaland Money Lenders Act?",
      answer: "The Nagaland Money Lenders Act, 2005 regulates private money lending. It mandates registration with the district authority and caps interest rates to prevent exploitation. Lending without a license is a punishable offense, and such debts are often unenforceable in court.",
    },
    {
      question: "Which DRT handles cases for Nagaland?",
      answer: "Banking and debt recovery cases for Nagaland fall under the jurisdiction of the Debt Recovery Tribunal (DRT) in Guwahati. Original Applications (OA) for recovery of debts above ₹20 Lakhs must be filed there.",
    },
    {
      question: "Are there specific loan schemes for Naga entrepreneurs?",
      answer: "Yes, schemes like the Chief Minister's Micro Finance Initiative (CMMFI) and PMEGP are popular. NEDFi also offers specific schemes for the North East. The Nagaland Industrial Development Corporation (NIDC) facilitates industrial loans.",
    },
    {
      question: "Can I start a Nidhi Company in Dimapur?",
      answer: "Yes, Dimapur is the commercial hub and suitable for Nidhi Companies. You must register as a Public Limited Company with the RoC (Guwahati jurisdiction) and comply with Nidhi Rules, 2014. A minimum NOF of ₹10 Lakhs (now increased) is required.",
    },
    {
      question: "How can I get a loan for a tourism project in Kohima?",
      answer: "Tourism is a priority sector (Hornbill Festival). Banks offer loans for homestays and hotels. Detailed Project Reports (DPR) showing viability and compliance with local municipal rules are essential. We assist in preparing these bankable documents.",
    },
    {
      question: "What is the role of the GB (Gaon Burah) in banking?",
      answer: "In rural Nagaland, the Gaon Burah (Village Headman) plays a crucial role. Banks often require a 'Gaon Burah Certificate' for KYC and residency proof. In some customary dispute resolutions regarding debt, the DB (Dobashi) court's verdict is also significant.",
    }
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
            Frequently Asked Questions on Banking in Nagaland
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


