import React from "react";

const FaqSection = () => {
  const faqItems = [
    {
      question: "Can I register an NBFC in Arunachal Pradesh?",
      answer: "Yes, you can register an NBFC in Arunachal Pradesh. The process involves incorporating a company under the Companies Act, ensuring a minimum Net Owned Fund (NOF) of ₹2 Crores (special concessions may apply for NE states, check latest RBI circulars), and applying for a Certificate of Registration (CoR) from the RBI Regional Office in Guwahati via the COSMOS portal.",
    },
    {
      question: "How does the Land Possession Certificate (LPC) affect bank loans?",
      answer: "In Arunachal Pradesh, the Land Possession Certificate (LPC) is the primary document for land ownership for indigenous people, as formal Patta issuance is limited. While some banks accept LPC for loans (especially under government schemes like DDUSY), many private banks still hesitate due to enforceability issues. We help structure loan agreements that use alternative collateral or government guarantees.",
    },
    {
      question: "What is the Deen Dayal Upadhyaya Swavalamban Yojana (DDUSY)?",
      answer: "DDUSY is a flagship startup loan scheme by the Govt of Arunachal Pradesh. It offers a 30% front-ended capital investment subsidy for loans between ₹10 Lakhs to ₹1 Crore for setting up greenfield enterprises in manufacturing, agriculture, and tourism. We assist in the DPR preparation and legal documentation for this scheme.",
    },
    {
      question: "Do I need a license for money lending in Arunachal Pradesh?",
      answer: "Yes, money lending is regulated to prevent usury. While there isn't a single state-wide 'Money Lenders Act' as robust as other states, District Magistrates issue licenses/permits for financial activities to check illegal lending. Operating without local administration clearance can lead to prosecution under general penal laws for cheating or extortion.",
    },
    {
      question: "Where is the Debt Recovery Tribunal (DRT) for Arunachal Pradesh?",
      answer: "Arunachal Pradesh falls under the jurisdiction of the Debt Recovery Tribunal (DRT) located in Guwahati, Assam. All recovery suits for bank loans above ₹20 Lakhs are filed there. We provide legal representation for borrowers and banks at DRT Guwahati.",
    },
    {
      question: "Can non-Arunachalis start a finance business in the state?",
      answer: "Yes, but with restrictions. Non-indigenous people cannot own land (except in limited leasehold cases) and need an Inner Line Permit (ILP) for entry. For setting up a finance company, you would typically need a local indigenous partner or director to navigate land lease and local trade license issues effectively.",
    },
    {
      question: "What is the NEDFi scheme for entrepreneurs?",
      answer: "NEDFi (North Eastern Development Finance Corporation Ltd.) provides loans at concessional rates for industrial and service sector projects in the NE region. They have specific schemes like the North East Entrepreneurs Development Scheme (NEEDS) which offers term loans up to ₹1 Crore. We assist in the legal due diligence for NEDFi projects.",
    },
    {
      question: "How to register a Nidhi Company in Itanagar?",
      answer: "To register a Nidhi Company in Itanagar, you must incorporate a Public Limited Company with the RoC (Guwahati jurisdiction). You need 3 directors and 7 shareholders. Post-incorporation, you must file form NDH-4 to get Nidhi status. Note that Nidhi companies cannot open branches outside the district without Regional Director approval.",
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
            Frequently Asked Questions on Banking Services in Arunachal Pradesh
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

