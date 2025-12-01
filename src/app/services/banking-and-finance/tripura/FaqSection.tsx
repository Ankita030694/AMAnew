import React from "react";

const FaqSection = () => {
  const faqItems = [
    {
      question: "What subsidies are available under TIIPIS 2022?",
      answer: "The Tripura Industrial Investment Promotion Incentive Scheme (TIIPIS), 2022 offers generous incentives, including a capital investment subsidy (up to 30%), interest subvention (4% for 5 years), and reimbursement of SGST. It is specifically designed to boost sectors like rubber, bamboo, and food processing.",
    },
    {
      question: "How can I get a loan for a Rubber Plantation in Tripura?",
      answer: "Banks in Tripura offer term loans for rubber plantation development in tie-up with the Rubber Board. You need to produce a 'Planting Permit' and land documents. The loan is disbursed in stages (first year cost, maintenance cost). We assist in the legal verification of land titles to facilitate these loans.",
    },
    {
      question: "Is the SARFAESI Act effective in Tripura?",
      answer: "Yes, the SARFAESI Act, 2002 is fully applicable. Banks can enforce security interest against defaulting borrowers. However, for tribal land (under TTAADC areas), restrictions on transfer to non-tribals apply, complicating the auction process. We help banks navigate these Sixth Schedule restrictions.",
    },
    {
      question: "Which DRT has jurisdiction over Tripura?",
      answer: "Debt recovery cases for Tripura are adjudicated by the Debt Recovery Tribunal (DRT) in Guwahati. We provide legal representation for filing Original Applications (OA) and defending Securitization Applications (SA) in Guwahati.",
    },
    {
      question: "What are the regulations for Border Trade Finance?",
      answer: "Tripura shares a long border with Bangladesh. Financing import-export trade requires compliance with FEMA and RBI guidelines on Letters of Credit (LC). We assist traders in Agartala and Srimantapur in handling cross-border payment disputes and LC documentation.",
    },
    {
      question: "Can I register an NBFC in Agartala?",
      answer: "Yes, you can register an NBFC with the RBI Regional Office (Guwahati jurisdiction). The minimum Net Owned Fund (NOF) is ₹2 Crores. Agartala is a growing financial hub, and there is scope for asset finance and microfinance companies.",
    },
    {
      question: "What is the Swabalamban Scheme?",
      answer: "Swabalamban is a state government scheme to promote self-employment. It provides bank loans with a subsidy component. We help unemployed youth prepare the necessary project reports and legal affidavits to apply for this scheme.",
    },
    {
      question: "How do I settle a loan with Tripura Gramin Bank?",
      answer: "Tripura Gramin Bank often releases One Time Settlement (OTS) schemes for NPAs. We represent borrowers in negotiating a fair settlement amount based on the bank's board-approved policies, helping you close the loan and release your collateral.",
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
            Frequently Asked Questions on Banking in Tripura
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


