import React from "react";

const FaqSection = () => {
  const faqItems = [
    {
      question: "How does the Assam Microfinance Act, 2020 impact lending?",
      answer: "The Assam Micro Finance Institutions (Regulation of Money Lending) Act, 2020 was introduced to regulate microfinance activities and protect borrowers from coercive recovery. It caps the number of lenders per borrower (max 3) and total indebtedness. MFIs must register with the state authorities and adhere to strict fair practices codes. Violations can lead to license cancellation and penalties.",
    },
    {
      question: "How can I register an NBFC in Guwahati?",
      answer: "To register an NBFC in Guwahati, you must incorporate a company under the Companies Act, 2013 with a minimum Net Owned Fund (NOF) of ₹2 Crores (special provisions may apply for NE region). You then apply to the RBI via the COSMOS portal. The physical application is processed by the Department of Non-Banking Supervision (DNBS) at the RBI Regional Office in Guwahati.",
    },
    {
      question: "What is the Assam Money Lenders Act?",
      answer: "The Assam Money Lenders Act regulates private money lending to prevent usury. Any person or firm carrying on the business of money lending must obtain a license from the local Registrar/Magistrate. Lending without a license is illegal, and courts can refuse to pass decrees for recovery of such loans.",
    },
    {
      question: "Where is the Debt Recovery Tribunal (DRT) for Assam?",
      answer: "The Debt Recovery Tribunal (DRT) is located in Guwahati (Pan Bazar). It has jurisdiction not just over Assam but also over other North Eastern states (Arunachal Pradesh, Manipur, Meghalaya, Mizoram, Nagaland, and Tripura). It handles recovery cases for banks and financial institutions for debts exceeding ₹20 Lakhs.",
    },
    {
      question: "Are there special loan schemes for the Tea Industry in Assam?",
      answer: "Yes, besides standard bank loans, the Tea Board of India offers various subsidies. Banks provide working capital (hypothecation of crops) and term loans for replantation/machinery. However, financing tea gardens requires specialized legal due diligence regarding land ceiling laws and lease hold rights under the Assam Land and Revenue Regulation.",
    },
    {
      question: "What is the role of NEDFi in Assam's finance sector?",
      answer: "The North Eastern Development Finance Corporation Ltd. (NEDFi), headquartered in Guwahati, provides financial assistance to micro, small, medium, and large enterprises. They offer equity participation and soft loans at concessional rates for industrial and infrastructure projects in the region.",
    },
    {
      question: "Can I start a Nidhi Company in Assam?",
      answer: "Yes, Nidhi Companies are becoming popular in semi-urban areas of Assam. You need to register a Public Limited Company with the Registrar of Companies (RoC) Guwahati. Compliance with Nidhi Rules, 2014, including filing Form NDH-4 for status declaration, is mandatory to operate legally.",
    },
    {
      question: "What subsidies are available under the Assam Industrial Policy?",
      answer: "The Assam Industrial and Investment Policy, 2019 offers comprehensive incentives like GST reimbursement (up to 200% of fixed capital investment), power subsidy, and interest subsidy on term loans (2% for 5 years). We assist in the legal documentation required to claim these benefits.",
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
            Frequently Asked Questions on Banking Services in Assam
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

