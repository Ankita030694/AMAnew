import React from "react";

const FaqSection = () => {
  const faqItems = [
    {
      question: "Is the SARFAESI Act applicable to borrowers in Ladakh?",
      answer: "Yes, after the formation of the Union Territory, the SARFAESI Act, 2002 is fully applicable. However, the enforcement of security interest (sale of immovable property) faces practical legal challenges due to restrictions on land ownership by non-residents. We assist banks in finding eligible local buyers to execute auctions legally.",
    },
    {
      question: "Which Debt Recovery Tribunal (DRT) has jurisdiction over Ladakh?",
      answer: "Debt Recovery cases for the Union Territory of Ladakh fall under the jurisdiction of the Debt Recovery Tribunal (DRT) in Chandigarh. All Original Applications (OA) for recovery of debts above ₹20 Lakhs must be filed there.",
    },
    {
      question: "Can I register an NBFC with a registered office in Leh?",
      answer: "Yes, you can register an NBFC in Ladakh. The application is processed by the RBI's Regional Office in Jammu. The minimum Net Owned Fund (NOF) requirement is ₹2 Crores. Given the region's strategic importance, the RBI may exercise enhanced due diligence regarding the source of funds.",
    },
    {
      question: "What financial subsidies are available for tourism in Ladakh?",
      answer: "The Ladakh Administration offers incentives under the PMEGP and local tourism policies for setting up homestays, guest houses, and camping sites. Subsidies are available for eco-friendly construction and solar heating systems. Proper project reports are essential to claim these benefits.",
    },
    {
      question: "How does the land tenure system affect bank loans in Ladakh?",
      answer: "Ladakh follows a unique land tenure system. Banks often hesitate to accept land as collateral due to the difficulty in selling it in case of default. We help structure loans using alternative securities or by ensuring the mortgage deed is compatible with local land revenue laws.",
    },
    {
      question: "Are there special schemes for renewable energy finance?",
      answer: "Yes, Ladakh is a solar hub. SECI and IREDA have specific financing windows for large-scale solar projects. For smaller rooftop setups, subsidies are available under the PM Surya Ghar Muft Bijli Yojana, which local banks facilitate.",
    },
    {
      question: "Do I need a special license for money lending in Ladakh?",
      answer: "Yes, money lending is regulated. While the erstwhile J&K laws were applicable, the transition to UT status implies stricter adherence to RBI guidelines for organized lending. Informal lending without a license can lead to the dismissal of recovery suits in court.",
    },
    {
      question: "How can AMA Legal Solutions assist with project finance in Ladakh?",
      answer: "We provide end-to-end legal support for infrastructure and hospitality projects. This includes Title Search Reports (TSR) for land, vetting of loan agreements, and ensuring compliance with the Ladakh Pollution Control Committee for industrial clearance.",
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
            Frequently Asked Questions on Banking in Ladakh
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

