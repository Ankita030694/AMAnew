import React from "react";

const FaqSection = () => {
  const faqs = [
    {
      question: "Where is the Trademark Registry located in Chennai?",
      answer: "The Trade Marks Registry in Chennai is located at Boudhik Sampada Bhawan, G.S.T. Road, Guindy, Chennai - 600032. It has jurisdiction over Tamil Nadu, Andhra Pradesh, Telangana, Karnataka, Kerala, and the Union Territories of Puducherry and Lakshadweep."
    },
    {
      question: "What is the Madras High Court Intellectual Property Division (IPD)?",
      answer: "The Madras High Court IPD is a specialized division established in 2022 to handle intellectual property disputes. It ensures faster adjudication of cases related to trademarks, patents, copyrights, and designs, following the abolition of the IPAB."
    },
    {
      question: "Are there any subsidies for patent filing in Tamil Nadu?",
      answer: "Yes, the Tamil Nadu government, through the MSME Department, offers a subsidy of up to 75% or ₹3 Lakhs (whichever is lower) on the cost of patent registration for eligible MSMEs and startups."
    },
    {
      question: "How can I protect my textile designs in Tirupur?",
      answer: "For textile manufacturers in Tirupur and Coimbatore, we recommend registering under the Designs Act, 2000, to protect the unique patterns and aesthetics of your fabric. Additionally, registering your brand name as a Trademark prevents others from selling counterfeits."
    },
    {
      question: "Can software companies in Chennai patent their products?",
      answer: "Yes, software can be patented if it has a technical effect and is not just a computer program per se. We help SaaS companies in Chennai navigate Section 3(k) of the Patents Act to secure protection for their innovative algorithms."
    },
    {
      question: "What is a Geographical Indication (GI) Tag?",
      answer: "A GI Tag identifies a product as originating from a specific location, possessing qualities or a reputation due to that origin. Tamil Nadu has famous GI tags like Kancheepuram Silk and Thanjavur Paintings. We assist producer groups in registering and protecting these tags."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section id="faqs" className="scroll-mt-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-sm transition-shadow">
            <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
            <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
