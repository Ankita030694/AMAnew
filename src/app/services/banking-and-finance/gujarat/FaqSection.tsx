import React from "react";

const FaqSection = () => {
  const faqItems = [
    {
      question: "How can I register an NBFC in Gujarat?",
      answer: "To register an NBFC in Gujarat, you need to incorporate a company under the Companies Act, 2013, with a minimum Net Owned Fund (NOF) of ₹2 Crores (or as prescribed by RBI). The application for the Certificate of Registration (CoR) is filed online via the RBI's COSMOS portal, and the physical dossier is submitted to the Department of Non-Banking Supervision (DNBS) at the RBI Regional Office in Ahmedabad.",
    },
    {
      question: "What is the Gujarat Money Lenders Act?",
      answer: "Private money lending in Gujarat is regulated by the Gujarat Money Lenders Act, 2011. It mandates that any individual or firm engaged in the business of lending money must obtain a license from the Registrar of Money Lenders (usually the Mamlatdar or TDO). Lending without a license is a cognizable offense and bars the lender from recovering dues through civil courts.",
    },
    {
      question: "How to set up a finance unit in GIFT City (IFSC)?",
      answer: "Setting up in GIFT City (Gandhinagar) requires approval from the International Financial Services Centres Authority (IFSCA). You can set up an IFSC Banking Unit (IBU), Finance Company, or Fintech entity. The process involves incorporation as a separate unit, obtaining IFSCA approval, and complying with specific IFSC regulations which differ from domestic RBI norms.",
    },
    {
      question: "Where is the Debt Recovery Tribunal (DRT) for Gujarat located?",
      answer: "Gujarat has two Debt Recovery Tribunals (DRT-I and DRT-II) located in Ahmedabad. They handle recovery cases for banks and financial institutions where the debt amount exceeds ₹20 Lakhs. Appeals against DRT orders lie with the Debt Recovery Appellate Tribunal (DRAT) in Mumbai.",
    },
    {
      question: "Can I register a Nidhi Company in Surat or Rajkot?",
      answer: "Yes, Nidhi Companies are a popular model for mutual benefit financing in Gujarat's trading hubs like Surat and Rajkot. You must register a Public Limited Company with the RoC Ahmedabad. Post-incorporation, filing form NDH-4 is mandatory to get Nidhi status. Strict compliance with Nidhi Rules, 2014 regarding membership (200 members) and NOF (₹10 Lakhs) within one year is required.",
    },
    {
      question: "What financial subsidies are available for industries in Gujarat?",
      answer: "Under the Gujarat Industrial Policy 2020, the state offers capital subsidies, interest subsidies (up to 7% for MSMEs), and assistance for technology acquisition. There are special schemes for the textile, diamond, and chemical sectors. We assist in the legal documentation required to claim these benefits from the Industries Commissionerate.",
    },
    {
      question: "Is Microfinance registration required for NGOs in Gujarat?",
      answer: "NGOs operating as Section 8 Companies can engage in microfinance activities without a full NBFC license if they adhere to specific lending caps and do not accept public deposits. However, for larger commercial operations, registering as an NBFC-MFI with the RBI is mandatory. The Gujarat Livelihood Promotion Company (GLPC) also partners with banks for SHG lending.",
    },
    {
      question: "How to deal with Cheque Bounce cases in Gujarat?",
      answer: "Gujarat courts are very strict regarding Section 138 NI Act cases. Complaints must be filed before the Judicial Magistrate where the payee bank branch is located. Given the high volume of commercial transactions in the state, we recommend swift legal action and exploring mediation for faster settlements.",
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
            Frequently Asked Questions on Banking Services in Gujarat
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

