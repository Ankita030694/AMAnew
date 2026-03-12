import React from "react";

const FaqSection = () => {
  const faqItems = [
    {
      question: "How can I register a Finance Company in Sikkim?",
      answer: "To register a finance company in Sikkim, you can opt for an NBFC, Microfinance Institution, or Nidhi Company model. The process involves incorporation under the Companies Act, 2013. However, Sikkim has special status under Article 371F, and certain central laws apply differently. NBFC registration still requires RBI approval, but local trade licenses are crucial.",
    },
    {
      question: "Does the SARFAESI Act apply to Sikkim?",
      answer: "Yes, the Supreme Court has clarified that the SARFAESI Act applies to Sikkim. However, the enforcement of security interest on land held by Sikkimese subjects is restricted. Banks cannot sell tribal/Sikkimese land to non-Sikkimese entities. This makes recovery complex and requires specialized legal handling.",
    },
    {
      question: "What is the minimum capital requirement for NBFC registration?",
      answer: "For a standard NBFC registration, the minimum Net Owned Fund (NOF) requirement is ₹2 Crores. This capital needs to be deposited in a bank account to show proof of funds to the RBI.",
    },
    {
      question: "Do I need a license to lend money in Sikkim?",
      answer: "Yes, private money lending is regulated. You must obtain a Money Lender License from the District Collectorate to legally carry out lending activities. Lending without a license is illegal.",
    },
    {
      question: "Which DRT has jurisdiction over Sikkim?",
      answer: "Banking disputes in Sikkim fall under the jurisdiction of the Debt Recovery Tribunal (DRT) in Guwahati (which covers most NE states) or sometimes Kolkata depending on the bank's specific zone, but primarily Guwahati for NE jurisdiction. We provide legal representation at the appropriate forum.",
    },
    {
      question: "Is it mandatory to register a Nidhi Company with RBI?",
      answer: "No, Nidhi Companies are exempted from RBI registration but must file form NDH-4 with the Ministry of Corporate Affairs (MCA) to get Nidhi status. They are regulated by Nidhi Rules, 2014.",
    },
    {
      question: "Can non-Sikkimese buy land in Sikkim for business?",
      answer: "No, generally non-Sikkimese cannot buy land in Sikkim due to Old Laws protected under Article 371F. For industrial projects, land is usually allotted on long-term lease by the government. Lenders finance these projects based on leasehold rights rather than freehold ownership.",
    },
    {
      question: "What are the tax benefits for finance companies in Sikkim?",
      answer: "Companies registered and operating in Sikkim enjoy significant Income Tax exemptions under Section 10(26AAA) of the IT Act (for individuals) and specific industrial policies for companies. However, this is a complex area requiring expert tax and legal opinion.",
    },
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
            Frequently Asked Questions on Banking Services in Sikkim
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

