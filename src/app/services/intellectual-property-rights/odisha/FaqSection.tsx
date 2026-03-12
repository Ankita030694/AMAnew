"use client";

import React from "react";

const FaqSection = () => {
  const faqData = [
    {
      question: "What is the role of the Patent Information Centre (PIC) in Odisha?",
      answer: "The Patent Information Centre (PIC) in Odisha operates under the Science & Technology Department, Government of Odisha. It acts as a nodal agency to facilitate patent searches, provide technical guidance to inventors, and assist in filing applications for patents, trademarks, and GI tags. It also conducts awareness programs across the state."
    },
    {
      question: "How can I register a Geographical Indication (GI) for an Odisha handicraft?",
      answer: "To register a GI for products like Pattachitra or Silver Filigree, an association of artisans or producers must file an application with the GI Registry. The application must include historical proof of origin and details of the unique characteristics derived from the region. PIC Odisha often provides financial and technical assistance for this process."
    },
    {
      question: "Where is the appropriate Patent Office for applicants from Odisha?",
      answer: "For patent applications, Odisha falls under the territorial jurisdiction of the Patent Office, Kolkata. However, applications can also be filed online through the IP India portal, which is the preferred and faster method."
    },
    {
      question: "Is trademark registration mandatory for businesses in Bhubaneswar?",
      answer: "Trademark registration is not mandatory but is highly advisable. It grants you exclusive legal rights to your brand name and logo, allowing you to take legal action against infringers. In a growing commercial hub like Bhubaneswar, a registered trademark builds brand value and customer trust."
    },
    {
      question: "What is the validity period of a GI tag for Odisha products?",
      answer: "A Geographical Indication (GI) registration is valid for 10 years. It can be renewed indefinitely for subsequent periods of 10 years by paying the prescribed renewal fees. This ensures long-term protection for heritage products like the Odisha Rasagola."
    },
    {
      question: "Can I copyright my Odissi dance choreography or music?",
      answer: "Yes, original dramatic, musical, and artistic works can be copyrighted. For Odissi dance, the specific choreography (if recorded in writing or video) can be protected. Similarly, original musical compositions can be copyrighted to prevent unauthorized reproduction or performance."
    },
    {
      question: "Does the Odisha government provide financial support for IPR registration?",
      answer: "Yes, the Government of Odisha, through its Startup Odisha initiative and MSME policies, offers reimbursement for IPR registration costs. Startups can avail of subsidies for filing patents, trademarks, and designs to encourage innovation in the state."
    },
    {
      question: "How do I conduct a trademark search before filing in Odisha?",
      answer: "You can conduct a preliminary public search on the IP India website. However, for a comprehensive analysis that includes phonetic similarities and potential conflicts, it is recommended to hire a professional trademark attorney. Our team at AMA Legal Solutions provides detailed search reports."
    },
    {
      question: "What legal remedies are available for IPR infringement in Odisha?",
      answer: "In case of infringement, you can file a civil suit in the District Court or the High Court of Orissa for an injunction (to stop the infringement) and damages (compensation). For criminal offenses like counterfeiting, a police complaint can be filed, leading to raids and seizure of fake goods."
    },
    {
      question: "Can I file an international patent application from Odisha?",
      answer: "Yes, you can file an international patent application under the Patent Cooperation Treaty (PCT) through the Indian Patent Office (Kolkata branch or online). This allows you to seek patent protection in multiple countries simultaneously."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "mainEntity": faqData.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <section id="faqs" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Frequently Asked Questions about IPR in Odisha
        </h2>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {faq.question}
              </h3>
              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
