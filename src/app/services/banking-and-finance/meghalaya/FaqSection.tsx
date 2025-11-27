import React from "react";

const FaqSection = () => {
  const faqItems = [
    {
      question: "How does the Meghalaya Transfer of Land Act affect bank loans?",
      answer: "The Meghalaya Transfer of Land (Regulation) Act, 1971 prohibits the transfer of land from a tribal to a non-tribal. This makes it difficult for banks to accept land as collateral since they cannot easily auction it to recovering dues. We help banks and borrowers structure loans using government guarantees or by identifying eligible tribal buyers for auction scenarios.",
    },
    {
      question: "What is the FOCUS scheme for farmers in Meghalaya?",
      answer: "FOCUS (Farmers' Collectivization for Upscaling of Production and Marketing Systems) is a flagship scheme providing interest-free loans to Producer Groups. It is not a direct bank loan but a government-supported credit line. We assist Producer Groups in forming the necessary legal entities to access these funds.",
    },
    {
      question: "Can non-tribals get industrial loans in Meghalaya?",
      answer: "Yes, non-tribals can get business loans, but if the project involves buying land in tribal areas, it requires strict permissions from the Competent Authority. For projects in industrial estates (like Byrnihat), the process is simpler as the land is often on lease from MIDC.",
    },
    {
      question: "Which DRT handles cases for Meghalaya?",
      answer: "Debt recovery cases for Meghalaya are handled by the Debt Recovery Tribunal (DRT) in Guwahati. Original Applications (OA) for debts above ₹20 Lakhs must be filed there.",
    },
    {
      question: "How can I register a Homestay for bank finance?",
      answer: "To get a loan for a homestay (under PMEGP or Tourism schemes), you must register with the Meghalaya Tourism Department. The bank will also require a 'No Objection Certificate' (NOC) from the local Rangbah Shnong (Headman). We assist in obtaining these local clearances.",
    },
    {
      question: "Is the SARFAESI Act effective in Meghalaya?",
      answer: "The SARFAESI Act applies, but its enforcement is sensitive. Section 14 applications (for possession) are routed through the District Magistrate, who must consider the land transfer restrictions. We specialize in navigating this intersection of Central and State laws.",
    },
    {
      question: "What support is available under PRIME Meghalaya?",
      answer: "PRIME (Promotion and Incubation of Market-driven Enterprises) offers funding, mentorship, and credit linkages. It's not a bank but facilitates bankability. We help startups prepare the legal documentation required to pitch for PRIME funding.",
    },
    {
      question: "How do I register a Cooperative Society for banking?",
      answer: "Meghalaya has a strong cooperative movement. You must register under the Meghalaya Cooperative Societies Act. This allows you to access credit from the Meghalaya Co-operative Apex Bank (MCAB). We handle the bylaws drafting and registration process.",
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
            Frequently Asked Questions on Banking in Meghalaya
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

