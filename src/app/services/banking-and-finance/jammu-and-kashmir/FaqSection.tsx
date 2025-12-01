import React from "react";

const FaqSection = () => {
  const faqItems = [
    {
      question: "Is the SARFAESI Act applicable in Jammu & Kashmir now?",
      answer: "Yes, following the abrogation of Article 370 and the Supreme Court's key judgments, the SARFAESI Act, 2002 is fully applicable in the Union Territory of J&K. Banks can now enforce security interest and auction properties to recover dues, though practical nuances regarding land transfer to non-domiciles still exist in certain cases.",
    },
    {
      question: "Which Debt Recovery Tribunal (DRT) handles J&K cases?",
      answer: "Debt recovery cases for Jammu & Kashmir are handled by the Debt Recovery Tribunal (DRT) in Chandigarh. Original Applications (OA) for recovery of debts exceeding ₹20 Lakhs must be filed there. We provide legal representation in Chandigarh for J&K-based clients.",
    },
    {
      question: "What subsidies are available under the J&K Industrial Policy 2021-30?",
      answer: "The New Industrial Policy offers attractive incentives including Capital Investment Incentive (up to 30%), Interest Subvention (5% on working capital), and GST reimbursement. The policy focuses on manufacturing, tourism, and horticulture sectors. Proper legal documentation is key to claiming these benefits.",
    },
    {
      question: "How can I get a loan for an Apple Orchard in Kashmir?",
      answer: "Banks offer specialized High-Density Apple Plantation schemes. Subsidies are available from the Horticulture Department. We assist in the legal verification of land records (Jamabandi, Girdawari) required for mortgaging orchard land to secure term loans.",
    },
    {
      question: "Can I register an NBFC in Jammu?",
      answer: "Yes, NBFC registration is possible with the RBI Regional Office in Jammu. You need a company incorporated under the Companies Act 2013 and a minimum Net Owned Fund (NOF) of ₹2 Crores. The 'Fit and Proper' criteria for directors are strictly enforced.",
    },
    {
      question: "What is the role of J&K Bank in the local economy?",
      answer: "J&K Bank acts as the convenor of the UT Level Bankers' Committee (UTLBC) and is the primary lender in the region. It plays a quasi-sovereign role in financial implementation. Navigating its specific loan policies and settlement schemes often requires specialized legal knowledge.",
    },
    {
      question: "Are there debt relief schemes for artisans and weavers?",
      answer: "Yes, the government frequently announces One Time Settlement (OTS) schemes and interest subventions for the carpet, shawl, and handicraft sectors (Karkhandar Scheme). We help artisans negotiate settlements with banks under these specific guidelines.",
    },
    {
      question: "How to handle cheque bounce cases in J&K?",
      answer: "Cheque bounce cases under Section 138 of the Negotiable Instruments Act are filed in the local Judicial Magistrate courts (e.g., in Srinagar or Jammu). We handle the issuance of legal notices and subsequent litigation for speedy recovery.",
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
            Frequently Asked Questions on Banking in J&K
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


