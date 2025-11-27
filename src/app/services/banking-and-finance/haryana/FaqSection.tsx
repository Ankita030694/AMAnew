import React from "react";

const FaqSection = () => {
  const faqItems = [
    {
      question: "How can I register a Finance Company in Haryana?",
      answer: "To register a finance company in Haryana, you primarily have three options: 1) Register as an NBFC with the RBI (requires ₹2 Crore NOF). 2) Start a Nidhi Company (Mutual Benefit) by incorporating under the Companies Act, 2013 (requires ₹10 Lakhs capital but no RBI license). 3) Register as a Microfinance Section 8 Company. You must also comply with the Haryana Registration and Regulation of Societies Act, 2012 if applicable.",
    },
    {
      question: "What is the Haryana Money Lenders Act?",
      answer: "Private money lending in Haryana is regulated under the Punjab Registration of Money Lenders Act, 1938 (as applicable to Haryana). Lenders must obtain a license from the Collector of the district. Lending without a license bars you from filing recovery suits in court. The Haryana government is also strict about usurious interest rates.",
    },
    {
      question: "Where is the Debt Recovery Tribunal (DRT) for Haryana located?",
      answer: "Haryana falls under the jurisdiction of the Debt Recovery Tribunal (DRT) located in Chandigarh. There are two DRTs in Chandigarh (DRT-I and DRT-II) that handle recovery cases for banks and financial institutions for debt amounts exceeding ₹20 Lakhs from Haryana, Punjab, and Chandigarh. We provide legal representation at DRT Chandigarh.",
    },
    {
      question: "What are the financial incentives under the Haryana Enterprise Policy?",
      answer: "Under the Haryana Enterprise and Employment Policy 2020, the state offers interest subsidies (usually 5% for MSMEs), credit rating reimbursement, and stamp duty exemptions. There are special incentives for setting up Fintech hubs in Gurugram and financial services units in GIFT City equivalent zones.",
    },
    {
      question: "Can I start a Microfinance business in rural Haryana?",
      answer: "Yes, Haryana has a robust Self Help Group (SHG) network under the Haryana State Rural Livelihoods Mission (HSRLM). You can start an NBFC-MFI or a Section 8 MFI. The focus is high in districts like Mewat (Nuh), Palwal, and Jind where credit penetration is lower compared to Gurugram.",
    },
    {
      question: "How to handle Cheque Bounce cases in Gurugram/Faridabad?",
      answer: "Gurugram and Faridabad see a high volume of Section 138 NI Act cases due to commercial density. These are filed in the court of the Judicial Magistrate First Class (JMFC) having jurisdiction over the branch where the payee's bank is located. We have a dedicated team for handling bulk cheque bounce litigation for NBFCs in these corporate hubs.",
    },
    {
      question: "Is Nidhi Company registration allowed in Haryana?",
      answer: "Yes, Nidhi Companies are popular in semi-urban areas of Haryana like Rohtak, Hisar, and Karnal. You need to register a Public Limited Company with the RoC (Delhi/Haryana jurisdiction). Post-incorporation, filing form NDH-4 is mandatory to get 'Nidhi Status' and avoid penalties.",
    },
    {
      question: "What is the role of HSCARDB in Haryana?",
      answer: "The Haryana State Cooperative Agriculture and Rural Development Bank Ltd (HSCARDB) provides long-term credit for agriculture and allied activities. They finance tractors, land development, and rural housing. Legal due diligence for land mortgaged to HSCARDB is a critical service we offer.",
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
            Frequently Asked Questions on Banking Services in Haryana
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

