import React from "react";

const FaqSection = () => {
  const faqItems = [
    {
      question: "How can I register an NBFC in Jharkhand?",
      answer: "To register an NBFC in Jharkhand, you must incorporate a company under the Companies Act, 2013, with a minimum Net Owned Fund (NOF) of ₹2 Crores (subject to RBI regulations). You then need to apply for a Certificate of Registration (CoR) from the Reserve Bank of India (RBI) via the COSMOS portal. The physical application is processed by the RBI Regional Office in Ranchi.",
    },
    {
      question: "Does the CNT Act affect bank loans in Jharkhand?",
      answer: "Yes, the Chotanagpur Tenancy (CNT) Act and Santhal Pargana Tenancy (SPT) Act restrict the transfer of tribal land to non-tribals. This makes it difficult for banks to accept tribal land as mortgage (collateral) for loans, as they cannot auction it easily in case of default. We help structure alternative security mechanisms like government guarantees or movable asset hypothecation.",
    },
    {
      question: "What is the process for obtaining a Money Lenders License in Jharkhand?",
      answer: "Under the Jharkhand Money Lenders Act, you must apply to the Licensing Authority (usually the Circle Officer or SDO) of your district. The process involves submitting an application form, proof of capital, character certificate, and paying the requisite fee. Lending without this license is illegal and non-recoverable in courts.",
    },
    {
      question: "Where is the Debt Recovery Tribunal (DRT) for Jharkhand located?",
      answer: "The Debt Recovery Tribunal (DRT) for Jharkhand is located in Ranchi. It handles recovery cases for banks and financial institutions for debt amounts exceeding ₹20 Lakhs. We provide legal representation for Original Applications (OA) and Securitization Applications (SA) at DRT Ranchi.",
    },
    {
      question: "Can I start a Microfinance company in Jharkhand?",
      answer: "Yes, you can start a Microfinance business either as an NBFC-MFI (requiring ₹5 Crore NOF and RBI license) or as a Section 8 Company (Non-profit) which is exempted from RBI registration for specific lending caps. The JSLPS (Jharkhand State Livelihood Promotion Society) has created a robust ecosystem for SHG-based lending.",
    },
    {
      question: "Is Nidhi Company registration allowed in Jharkhand?",
      answer: "Yes, Nidhi Companies can be registered in Jharkhand to cultivate savings among members. You need to register a Public Limited Company with RoC Ranchi. Post-incorporation compliance involves filing NDH-4 to get Nidhi status. It is a popular model in districts like Dhanbad, Bokaro, and Hazaribagh.",
    },
    {
      question: "What are the subsidies available for industrial finance in Jharkhand?",
      answer: "Under the Jharkhand Industrial and Investment Promotion Policy 2021, the government offers interest subsidies (usually 5-7%), capital investment subsidies, and stamp duty exemptions for new units in sectors like textiles, food processing, and auto components. We assist in legal documentation for these claims.",
    },
    {
      question: "How to handle Cheque Bounce cases in Ranchi?",
      answer: "Cheque bounce cases under Section 138 of the NI Act are filed in the court of the Judicial Magistrate where the payee's bank is located. We handle filing of complaints, legal notices, and defense in cheque bounce matters across Ranchi, Jamshedpur, and Dhanbad courts.",
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
            Frequently Asked Questions on Banking Services in Jharkhand
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


