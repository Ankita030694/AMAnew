import React from "react";

const FaqSection = () => {
  const faqItems = [
    {
      question: "How can I register a Chit Fund Company in Tamil Nadu?",
      answer: "Chit Funds are a popular financial instrument in Tamil Nadu. To register, you must incorporate a Private Limited Company and then obtain a 'Prior Sanction' from the Chit Registrar of the district. You must deposit 100% of the chit value as security in a scheduled bank. Compliance with the Chit Funds Act, 1982 is mandatory.",
    },
    {
      question: "What is the Tamil Nadu Money Lenders Act?",
      answer: "The Tamil Nadu Money Lenders Act, 1957 regulates private lending. Lenders must obtain a license from the Tahsildar of the Taluk. The act strictly caps interest rates to prevent usury. The state also enforces the Tamil Nadu Prohibition of Charging Exorbitant Interest Act, 2003, which makes 'Kandhu Vatti' (usurious lending) a criminal offense.",
    },
    {
      question: "Can I start a Nidhi Company in Chennai?",
      answer: "Yes, Chennai is the birthplace of the Nidhi banking model. You can register a Nidhi Company as a Public Limited Company with RoC Chennai. You must ensure you have 200 members and Net Owned Funds of ₹10 Lakhs within one year. Nidhi companies in TN are very active in gold loan financing.",
    },
    {
      question: "Where are the Debt Recovery Tribunals (DRT) in Tamil Nadu?",
      answer: "Tamil Nadu has three Debt Recovery Tribunals (DRTs): DRT-1 and DRT-2 in Chennai, DRT Madurai, and DRT Coimbatore. They handle recovery cases for debts exceeding ₹20 Lakhs. Appeals go to the DRAT in Chennai.",
    },
    {
      question: "What industrial finance schemes does TIIC offer?",
      answer: "The Tamil Nadu Industrial Investment Corporation Ltd (TIIC) offers term loans for MSMEs and service sector projects. Popular schemes include the New Entrepreneur Enterprise Development Scheme (NEEDS) and Unemployed Youth Employment Generation Programme (UYEGP), offering subsidies up to 25%. We assist in the legal documentation for these loans.",
    },
    {
      question: "Is NBFC registration required for microfinance in TN?",
      answer: "Yes, for commercial microfinance, you must register as an NBFC-MFI with the RBI. However, many NGOs operate as Section 8 Companies for micro-credit. Tamil Nadu has a very strong Self Help Group (SHG) movement, and linking with the Mahalir Thittam (TN Corporation for Development of Women) is a common model.",
    },
    {
      question: "How to handle Cheque Bounce cases in Chennai?",
      answer: "Chennai courts have a high pendency of Section 138 cases. Cases are filed before the Metropolitan Magistrate. We provide specialized legal services for bulk cheque bounce litigation for NBFCs and banks, ensuring faster service of summons and settlement mediation.",
    },
    {
      question: "What is the TN Prohibition of Exorbitant Interest Act?",
      answer: "This specific state act was enacted to curb the menace of 'Kandhu Vatti', 'Meter Vatti', and 'Hourly Vatti'. It empowers the police to arrest lenders charging interest above the state-prescribed limits and provides for restitution of property seized by such lenders.",
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
            Frequently Asked Questions on Banking Services in Tamil Nadu
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


