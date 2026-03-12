import React from "react";

const FaqSection = () => {
  const faqItems = [
    {
      question: "How do I register a Chitty (Chit Fund) in Kerala?",
      answer: "Chitties in Kerala are regulated under the Kerala Chitties Act, 1975 and the Central Chit Funds Act, 1982. To start a Chitty business, you must register a company, deposit 100% of the chitty amount as security in a treasury or approved bank, and obtain a 'Sanction Order' from the Registrar of Chits (usually the Sub-Registrar) before soliciting any subscription. KSFE is the state-run giant, but private chits are allowed with strict compliance.",
    },
    {
      question: "What is the Kerala Money Lenders Act?",
      answer: "The Kerala Money Lenders Act, 1958 requires anyone advancing loans at interest to obtain a license. The license is issued by the Inspecting Assistant Commissioner of the Commercial Taxes Department. The Act strictly caps interest rates (typically 2% above the maximum rate charged by commercial banks) and mandates maintaining registers like the Day Book and Ledger. Violations attract imprisonment.",
    },
    {
      question: "Can I start a Nidhi Company in Kerala?",
      answer: "Yes, Nidhi Companies are popular in Kerala for gold loans. You must incorporate a Public Limited Company under the Companies Act, 2013. However, Kerala has seen strict enforcement of the 'Nidhi Rules, 2014' (amended). You must file NDH-4 to get Nidhi status. The Central Government has rejected many applications from Kerala recently due to non-compliance, so expert legal guidance is crucial.",
    },
    {
      question: "What are the loan schemes offered by KSIDC?",
      answer: "The Kerala State Industrial Development Corporation (KSIDC) offers various schemes like the 'Startup Kerala' loan, Term Loans for MSMEs, and equipment finance. They provide loans up to ₹100 Crores for large projects. We assist in preparing the Project Report and legal scrutiny of land documents required for KSIDC sanctions.",
    },
    {
      question: "Is RBI registration needed for Kudumbashree units?",
      answer: "Kudumbashree is the state's poverty eradication mission. Neighborhood Groups (NHGs) under Kudumbashree lend internally. They do not need RBI registration. However, if a private Microfinance Institution (MFI) wants to lend to these groups or operate independently, it must register as an NBFC-MFI with the RBI if its qualifying assets exceed ₹5 Crores.",
    },
    {
      question: "Where is the Debt Recovery Tribunal (DRT) in Kerala?",
      answer: "Kerala has two Debt Recovery Tribunals (DRT-1 and DRT-2) located in Ernakulam (Kochi). They handle recovery cases for banks and financial institutions for debts exceeding ₹20 Lakhs. Appeals lie with the DRAT in Chennai. We represent clients in both DRTs for SARFAESI and OA matters.",
    },
    {
      question: "What is the Kerala Financial Corporation (KFC)?",
      answer: "KFC is a state-level financial institution providing fast-track loans to MSMEs, startups, and the service sector. Their 'KFC-CM Entrepreneurship Development Programme' offers loans up to ₹50 Lakhs at subsidized interest rates. Legal due diligence of collateral is a key step in their disbursement process.",
    },
    {
      question: "How to handle Gold Loan auction notices?",
      answer: "If you default on a gold loan, NBFCs must give proper notice before auctioning the jewelry. If the auction process violates the RBI's 'Fair Practices Code' or undervalues the gold, we can file for an injunction in the civil court or approach the Banking Ombudsman/DRT depending on the jurisdiction.",
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
            Frequently Asked Questions on Banking Services in Kerala
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


