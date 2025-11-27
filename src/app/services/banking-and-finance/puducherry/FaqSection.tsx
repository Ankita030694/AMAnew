import React from "react";

const FaqSection = () => {
  const faqItems = [
    {
      question: "How is the Puducherry Money Lenders Act, 1970 enforced?",
      answer: "The Puducherry Money Lenders Act, 1970, regulates money lending in the UT. It requires all money lenders to obtain a license from the Tehsildar/Deputy Tehsildar. It mandates maintaining proper books of accounts and issuing receipts. Charging interest beyond the stipulated rates is a punishable offense.",
    },
    {
      question: "Which DRT has jurisdiction over Puducherry?",
      answer: "Debt Recovery cases for Puducherry typically fall under the jurisdiction of the Debt Recovery Tribunal (DRT) in Chennai (DRT-1, DRT-2, or DRT-3 depending on the specific bank and case allocation). Appeals go to the Debt Recovery Appellate Tribunal (DRAT) in Chennai.",
    },
    {
      question: "Can I register a Chit Fund in Puducherry?",
      answer: "Yes, but it is strictly regulated under the Chit Funds Act, 1982 and the Puducherry Chit Funds Rules. You must obtain prior sanction from the Registrar of Chits, Puducherry, before starting any chit scheme. We assist in drafting the Chit Agreement and filing necessary forms.",
    },
    {
      question: "What subsidies does PIPDIC offer for financial planning?",
      answer: "The Pondicherry Industrial Promotion Development and Investment Corporation (PIPDIC) offers various incentives like Capital Investment Subsidy (up to 25% for Micro/Small units) and Interest Subsidy. Proper project reports and financial documentation are crucial to avail these benefits.",
    },
    {
      question: "How do I register a Nidhi Company in Puducherry?",
      answer: "A Nidhi Company is registered as a Public Limited Company under the Companies Act, 2013 with the RoC (Chennai has jurisdiction over Puducherry). It must follow Nidhi Rules, 2014. The minimum capital requirement is ₹10 Lakhs (formerly ₹5 Lakhs), and it can only lend to members.",
    },
    {
      question: "What are the regulations for Gold Loans in Puducherry?",
      answer: "Gold loan companies (NBFCs) must follow RBI Master Directions. Local pawn brokers fall under the Puducherry Pawn Brokers Act, 1966, which requires licensing and restricts auction procedures for unredeemed pledges.",
    },
    {
      question: "Is the SARFAESI Act applicable in Puducherry?",
      answer: "Yes, the SARFAESI Act, 2002 applies to the Union Territory of Puducherry. Banks can enforce security interest without court intervention. We assist in Section 13(2) notices and coordinating with the District Magistrate for physical possession under Section 14.",
    },
    {
      question: "How can I complain against a fraudulent finance company in Puducherry?",
      answer: "Complaints can be filed under the Puducherry Protection of Interests of Depositors in Financial Establishments Act, 2004. This Act empowers the Competent Authority to attach assets of defaulting financial establishments to repay depositors.",
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
            Frequently Asked Questions on Banking in Puducherry
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

