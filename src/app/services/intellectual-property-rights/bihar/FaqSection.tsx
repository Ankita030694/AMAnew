
import React from "react";
import Script from "next/script";

const FaqSection = () => {
  const faqs = [
    {
      question: "How do I register a Trademark in Bihar?",
      answer:
        "Trademark registration in Bihar is a centralized online process governed by the Controller General of Patents, Designs, and Trademarks (CGPDTM). Applicants from Bihar fall under the jurisdiction of the Trademark Registry in Kolkata. You can file Form TM-A online via the IP India portal.",
    },
    {
      question: "Where is the Patent Office for Bihar applicants?",
      answer:
        "There is no separate Patent Office in Bihar. Patent applications from the state are handled by the Patent Office in Kolkata. However, the entire filing and examination process can be completed online, eliminating the need for physical visits.",
    },
    {
      question: "What are the famous GI tags of Bihar?",
      answer:
        "Bihar boasts several prestigious GI tags that reflect its rich cultural and agricultural heritage. These include Madhubani Paintings, Bhagalpuri Silk, Shahi Litchi of Muzaffarpur, Katarni Rice, Magahi Paan, and Zardalu Mango.",
    },
    {
      question: "Does the Bihar Startup Policy offer IPR benefits?",
      answer:
        "Yes, the Bihar Startup Policy provides significant support for IPR protection. Recognized startups can avail of reimbursement for patent and trademark filing fees. The policy aims to encourage innovation and protect the intellectual assets of entrepreneurs in the state.",
    },
    {
      question: "How can I protect my Madhubani Art from being copied?",
      answer:
        "Madhubani Art is protected under Geographical Indications (GI). This prevents unauthorized use of the name 'Madhubani' for paintings not originating from the designated region. Additionally, individual artists can seek Copyright protection for their original artistic works.",
    },
    {
      question: "What legal remedies are available for IP infringement in Bihar?",
      answer:
        "In case of IP infringement, you can file a civil suit for injunction and damages in the District Courts or the Patna High Court. Criminal remedies, including filing an FIR, are also available for trademark counterfeiting and copyright piracy.",
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
