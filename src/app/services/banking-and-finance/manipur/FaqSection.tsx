import React from "react";

const FaqSection = () => {
  const faqItems = [
    {
      question: "How can I register a Finance Company in Manipur?",
      answer: "To register a finance company in Manipur, you can opt for an NBFC, Microfinance Institution, or Nidhi Company model. The process involves incorporation under the Companies Act, 2013, followed by obtaining a Certificate of Registration (CoR) from the Reserve Bank of India (RBI) for NBFCs. For Nidhi companies, RBI registration is not required, but compliance with Nidhi Rules, 2014 is mandatory.",
    },
    {
      question: "What is the minimum capital requirement for NBFC registration in Manipur?",
      answer: "For a standard NBFC registration in Manipur (and pan-India), the minimum Net Owned Fund (NOF) requirement is typically ₹2 Crores. However, for certain categories like Nidhi Companies or Microfinance companies under specific sections, the capital requirements may differ. It is advisable to consult legal experts for current regulatory norms.",
    },
    {
      question: "Do I need a license to lend money in Manipur?",
      answer: "Yes, money lending is regulated. If you are not an RBI-registered NBFC or a Bank, you must obtain a Money Lender License under the relevant Manipur Money Lenders Act to legally carry out lending activities. Lending without a valid license is illegal and can lead to prosecution.",
    },
    {
      question: "What legal services do you provide for Banking in Imphal?",
      answer: "AMA Legal Solutions offers comprehensive services in Imphal and across Manipur, including NBFC registration, legal due diligence, drafting of loan agreements, SARFAESI Act proceedings, Section 138 NI Act (Cheque Bounce) cases, and representation before Debt Recovery Tribunals (DRT) and other courts.",
    },
    {
      question: "Is it mandatory to register a Nidhi Company with RBI?",
      answer: "No, Nidhi Companies are exempted from the core registration requirements of the RBI. However, they must be incorporated as a Public Limited Company under the Companies Act, 2013, and must strictly adhere to the Nidhi Rules, 2014. They can only deal with their registered members.",
    },
    {
      question: "How can I start a Microfinance business in Manipur?",
      answer: "You can start a Microfinance business by registering as a Section 8 Company (non-profit) or an NBFC-MFI. Section 8 companies enjoy certain exemptions regarding minimum capital, whereas NBFC-MFIs require RBI registration and a minimum net owned fund of ₹5 Crores (₹2 Crores for NE states is a common concession, but exact current norms must be verified).",
    },
    {
      question: "What is the role of DRT in banking disputes in Manipur?",
      answer: "The Debt Recovery Tribunal (DRT) handles cases involving recovery of debts due to banks and financial institutions for amounts above ₹20 Lakhs. For Manipur, the jurisdiction typically falls under the DRT Guwahati bench, which covers the North Eastern states. We provide legal representation for such matters.",
    },
    {
      question: "Can a private limited company carry out financial business?",
      answer: "A private limited company cannot undertake 'financial business' as its principal business without obtaining an NBFC license from the RBI. If financial assets constitute more than 50% of total assets and financial income is more than 50% of total income, RBI registration is mandatory.",
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
            Frequently Asked Questions on Banking Services in Manipur
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
