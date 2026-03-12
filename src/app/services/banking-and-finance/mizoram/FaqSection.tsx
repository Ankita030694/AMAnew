import React from "react";

const FaqSection = () => {
  const faqItems = [
    {
      question: "What is the LSC (Land Settlement Certificate) requirement for loans?",
      answer: "In Mizoram, the Land Settlement Certificate (LSC) is the equivalent of a property title deed. Banks strictly require a valid LSC to mortgage land. Periodic Pattas or temporary passes are generally not accepted for housing or term loans. We assist in upgrading temporary passes to LSC with the Revenue Department.",
    },
    {
      question: "How does the Mizoram Money Lenders Act regulate lending?",
      answer: "The Mizoram Money Lenders Act requires all private lenders to obtain a license from the Deputy Commissioner. It caps interest rates to prevent exploitation. Lending without a license is illegal, and courts in Mizoram will not entertain recovery suits for such loans.",
    },
    {
      question: "Can I get a loan under the SEDP scheme?",
      answer: "Yes, the Socio-Economic Development Policy (SEDP) is the state's flagship scheme. It provides financial assistance (often as grants or subsidized loans) for various trades. We help applicants prepare the 'Family Book' and project details required to be selected as beneficiaries.",
    },
    {
      question: "Which DRT handles banking cases for Mizoram?",
      answer: "Banking disputes and recovery cases for Mizoram fall under the jurisdiction of the Debt Recovery Tribunal (DRT) in Guwahati. We provide legal representation for filing and defending cases in Guwahati, saving you the trouble of frequent travel.",
    },
    {
      question: "Is the SARFAESI Act applicable in Mizoram?",
      answer: "Yes, the SARFAESI Act applies. However, due to Article 371G, Mizo customary law has protections. While banks can attach property, selling it to non-tribals is restricted. Auctions are typically limited to indigenous Mizo buyers.",
    },
    {
      question: "How to finance a Bamboo Processing Unit?",
      answer: "Mizoram has immense bamboo potential. Banks finance units under the National Bamboo Mission. Key requirements include a detailed project report and supply contracts with bamboo growers. We assist in legal due diligence for these supply chains.",
    },
    {
      question: "Can I register an NBFC in Aizawl?",
      answer: "Yes, NBFC registration is possible with the RBI (Guwahati Regional Office). The minimum Net Owned Fund (NOF) is ₹2 Crores. Given Aizawl's growing economy, there is a market for vehicle finance and gold loan companies.",
    },
    {
      question: "What is the role of the Village Council in banking?",
      answer: "The Village Council (VC) is a statutory body in Mizoram. Banks often require a 'Residential Certificate' or NOC from the VC President for KYC and loan processing. The VC also plays a role in resolving minor debt disputes under customary law.",
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
            Frequently Asked Questions on Banking in Mizoram
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


