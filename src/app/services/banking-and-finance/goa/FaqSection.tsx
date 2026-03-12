import React from "react";

const FaqSection = () => {
  const faqItems = [
    {
      question: "How can I register a Finance Company in Goa?",
      answer: "To register a finance company in Goa, you can opt for an NBFC, Microfinance Institution, or Nidhi Company model. The process involves incorporation under the Companies Act, 2013, followed by obtaining a Certificate of Registration (CoR) from the Reserve Bank of India (RBI) for NBFCs. For Nidhi companies, RBI registration is not required, but compliance with Nidhi Rules, 2014 is mandatory.",
    },
    {
      question: "How does the Portuguese Civil Code affect banking in Goa?",
      answer: "Goa follows the Portuguese Civil Code, 1867, for certain property and succession matters. This impacts mortgage creation as both spouses typically have equal rights to property (Communion of Assets). Banks require specific consent and documentation from both spouses for creating a valid mortgage, which is different from the rest of India.",
    },
    {
      question: "What is the minimum capital requirement for NBFC registration in Goa?",
      answer: "For a standard NBFC registration in Goa (and pan-India), the minimum Net Owned Fund (NOF) requirement is ₹2 Crores. You must open a Fixed Deposit of this amount in the company's name during the application process.",
    },
    {
      question: "Do I need a license to lend money in Goa?",
      answer: "Yes, money lending is regulated. If you are not an RBI-registered NBFC or a Bank, you must obtain a Money Lender License under the Goa Money Lenders Act to legally carry out lending activities. Unlicensed lending is illegal and debts are often unenforceable in court.",
    },
    {
      question: "What legal services do you provide for Banking in Panaji?",
      answer: "AMA Legal Solutions offers comprehensive services in Panaji, Margao, and Vasco, including NBFC registration, legal due diligence for tourism projects, drafting of loan agreements, SARFAESI Act proceedings, Section 138 NI Act (Cheque Bounce) cases, and representation before Debt Recovery Tribunals (DRT).",
    },
    {
      question: "Is it mandatory to register a Nidhi Company with RBI?",
      answer: "No, Nidhi Companies are exempted from the core registration requirements of the RBI. However, they must be incorporated as a Public Limited Company under the Companies Act, 2013, and must strictly adhere to the Nidhi Rules, 2014. They can only deal with their registered members.",
    },
    {
      question: "Can I get finance for a Casino business in Goa?",
      answer: "Financing for casinos falls under 'Commercial Real Estate - Residential Housing' or 'Commercial Real Estate' exposure for banks and is considered a high-risk sector (sensitive sector) by RBI. While not illegal, it requires rigorous due diligence, strict AML/KYC compliance, and specialized loan structuring, often involving private equity or NBFCs rather than traditional PSBs.",
    },
    {
      question: "What is the role of DRT in banking disputes in Goa?",
      answer: "The Debt Recovery Tribunal (DRT) handles cases involving recovery of debts due to banks and financial institutions for amounts above ₹20 Lakhs. Goa falls under the jurisdiction of DRT Mumbai (Pune Bench often handles Goa matters, or DRT Mumbai depending on specific allocation). We provide legal representation for such matters.",
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
            Frequently Asked Questions on Banking Services in Goa
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

