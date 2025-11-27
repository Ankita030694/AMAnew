

import React from "react";
import Script from "next/script";

const FaqSection = () => {
  const faqs = [
    {
      question: "How can I register a Trademark in Kerala?",
      answer:
        "Trademark registration in Kerala is done online through the IP India portal. While there is no specific Trademark Registry office in Kerala, the process is centralized. You need to conduct a trademark search, file Form TM-A, and respond to any objections. The Intellectual Property Rights Information Centre – Kerala (IPRICK) in Thiruvananthapuram provides guidance and support for this process.",
    },
    {
      question: "Where is the Patent Office located in Kerala?",
      answer:
        "There is no full-fledged Indian Patent Office located within Kerala. Patent applications from Kerala are typically processed by the Patent Office in Chennai, which serves the southern region. However, you can file applications online from anywhere in Kerala. The KSCSTE-IPRICK acts as a facilitation center to assist inventors in the state.",
    },
    {
      question: "What are the GI tags registered from Kerala?",
      answer:
        "Kerala has numerous Geographical Indication (GI) tags including Navara Rice, Palakkadan Matta Rice, Malabar Pepper, Monsooned Malabar Coffee, Aranmula Kannadi, Alleppey Coir, and Tirur Betel Leaf. These tags protect the unique identity and quality of products originating from specific regions in the state.",
    },
    {
      question: "Are there any government subsidies for IPR registration in Kerala?",
      answer:
        "Yes, the Government of Kerala, through the Department of Industries and Commerce, offers financial assistance to MSMEs and startups for IPR registration. The Sustainable Industry Incentive Scheme 2023 provides reimbursement of up to 50% of the costs incurred for obtaining patents, trademarks, and GI tags.",
    },
    {
      question: "How do I copyright my artistic work in Kerala?",
      answer:
        "Copyright registration is centralized in India. Creators in Kerala can file for copyright protection online via the Copyright Office website. You need to submit Form IV, copies of your work, and the requisite fee. Copyright protects literary, dramatic, musical, and artistic works for the lifetime of the author plus 60 years.",
    },
    {
      question: "What is the role of IPRICK in Kerala?",
      answer:
        "The Intellectual Property Rights Information Centre – Kerala (IPRICK) is the nodal agency under the Kerala State Council for Science, Technology and Environment (KSCSTE). It facilitates IPR protection for inventors, researchers, and startups in Kerala by providing technical, legal, and financial support for filing patents, trademarks, and other IPRs.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
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
