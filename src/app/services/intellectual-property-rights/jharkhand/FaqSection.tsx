import React from "react";

const FaqSection = () => {
  const faqs = [
    {
      question: "Which Trademark Registry has jurisdiction over Jharkhand?",
      answer: "The Trade Marks Registry in Kolkata (Salt Lake City) has jurisdiction over Jharkhand. All trademark applications from Ranchi, Jamshedpur, Dhanbad, and other cities in Jharkhand must be filed with the Kolkata office. Hearings for objections are also conducted by the Kolkata Registrar."
    },
    {
      question: "Can I file an IP lawsuit in Ranchi High Court?",
      answer: "Yes. The High Court of Jharkhand in Ranchi has jurisdiction over intellectual property disputes arising within the state. For commercial disputes (like trademark infringement) above a specified value, you can approach the Commercial Courts in Ranchi or Dhanbad for faster relief."
    },
    {
      question: "Are there any IPR benefits for Jharkhand startups?",
      answer: "Yes, under the Jharkhand Startup Policy, registered startups are eligible for reimbursement of patent and trademark filing fees. The government aims to foster innovation by subsidizing the cost of protecting intellectual property for new ventures."
    },
    {
      question: "How do I protect my industrial designs in Jamshedpur?",
      answer: "Jamshedpur being an industrial hub, protecting the aesthetic design of machinery or products is crucial. You should file for 'Industrial Design' registration. While the filing is centralized at the Patent Office in Kolkata, we handle the entire process of drawings, filing, and prosecution on your behalf."
    },
    {
      question: "What is the validity of a trademark registered in Jharkhand?",
      answer: "A trademark registered in India (via the Kolkata registry for Jharkhand) is valid for 10 years and can be renewed indefinitely. The protection is nationwide, meaning your brand is protected not just in Jharkhand but across all of India."
    },
    {
      question: "Can I protect tribal art forms of Jharkhand like Sohrai and Khovar?",
      answer: "Yes, traditional art forms like Sohrai and Khovar painting have received Geographical Indication (GI) tags. This protects the community's rights. Individual artists creating original contemporary works based on these styles can also seek Copyright protection for their specific artistic creations."
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
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
              <span className="text-[#D2A02A] mr-3">Q.</span>
              {faq.question}
            </h3>
            <p className="text-gray-700 leading-relaxed pl-8">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;

