

import React from "react";
import Script from "next/script";

const FaqSection = () => {
  const faqs = [
    {
      question: "How can I register a Trademark in Telangana?",
      answer:
        "Trademark registration in Telangana is a centralized online process governed by the Controller General of Patents, Designs, and Trademarks (CGPDTM). Applicants can file Form TM-A online through the IP India portal. For legal assistance and guidance, startups can approach the IP Facilitation Centre at T-Hub or consult with specialized IP attorneys in Hyderabad.",
    },
    {
      question: "Where is the Patent Office for Telangana applicants?",
      answer:
        "Patent applications from Telangana fall under the jurisdiction of the Patent Office in Chennai. However, the entire process, from filing to examination, can be managed online. The Telangana State Innovation Cell (TSIC) and T-Works also provide facilitation support for inventors and startups in the state.",
    },
    {
      question: "What are the famous GI tags of Telangana?",
      answer:
        "Telangana is home to several renowned Geographical Indications (GI) including Hyderabad Haleem, Pochampally Ikat, Silver Filigree of Karimnagar, Cheriyal Paintings, Nirmal Toys and Furniture, Gadwal Sarees, and the recently added Tandur Red Gram. These tags protect the unique cultural and agricultural heritage of the region.",
    },
    {
      question: "Does the Telangana government offer IPR subsidies?",
      answer:
        "Yes, the Government of Telangana, through its innovation policy and bodies like TSIC, encourages IPR protection. Startups registered with T-Hub or recognized by the state may avail of reimbursement schemes for patent and trademark filing costs, subject to specific eligibility criteria.",
    },
    {
      question: "How can T-Hub help with my startup's IP?",
      answer:
        "T-Hub provides a comprehensive ecosystem for startups, including access to legal partners who specialize in IPR. They offer mentorship on IP strategy, conduct workshops on patent filing, and facilitate connections with IP attorneys to help startups build a strong intellectual property portfolio.",
    },
    {
      question: "What is the role of the IP Facilitation Centre at ni-msme?",
      answer:
        "The IP Facilitation Centre at the National Institute for Micro, Small and Medium Enterprises (ni-msme) in Hyderabad assists MSMEs and entrepreneurs with IPR awareness, patent searches, and filing support. They play a crucial role in democratizing access to IP protection for smaller businesses.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section id="faqs" className="scroll-mt-32">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        Frequently Asked Questions
      </h2>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-200 pb-6 last:border-0"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
              <span className="text-[#D2A02A] mr-3">Q.</span>
              {faq.question}
            </h3>
            <p className="text-gray-700 leading-relaxed pl-8">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
