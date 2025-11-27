import React from "react";

const FaqSection = () => {
  const faqs = [
    {
      question: "Which Trademark Registry has jurisdiction over Chandigarh?",
      answer: "For trademark applications filed from Chandigarh, the appropriate office is the Trade Marks Registry in New Delhi (Dwarka). Although the business is located in Chandigarh, all administrative filings, examination responses, and show-cause hearings are handled at the New Delhi registry. Our team manages this seamless coordination between Chandigarh and Delhi."
    },
    {
      question: "Where can I file an IPR infringement suit in Chandigarh?",
      answer: "Intellectual Property infringement suits can be filed at the District Courts in Sector 43, Chandigarh, for civil remedies like injunctions and damages. For matters involving higher pecuniary jurisdiction or appeals, the case lies with the Hon'ble Punjab and Haryana High Court in Sector 1. Criminal complaints for counterfeiting can be lodged with the Economic Offenses Wing (EOW) of the Chandigarh Police."
    },
    {
      question: "Are there any IPR subsidies for startups in Chandigarh?",
      answer: "Yes, startups registered in Chandigarh and recognized by the Department for Promotion of Industry and Internal Trade (DPIIT) are eligible for the Startup India IPR facilitation scheme. This includes an 80% rebate on patent filing fees and a 50% rebate on trademark filing fees. We assist eligible Chandigarh startups in claiming these benefits."
    },
    {
      question: "How long does it take to register a Patent in Chandigarh?",
      answer: "The patent registration process typically takes 3 to 5 years from the date of filing. However, by opting for 'Expedited Examination'—available for startups, female applicants, or if India is chosen as the International Searching Authority—the grant can be achieved in as little as 12 to 18 months."
    },
    {
      question: "Do I need to visit the Delhi Registry personally for my Chandigarh trademark?",
      answer: "No, you do not need to visit personally. As your authorized trademark attorneys, we handle all appearances, hearings, and submissions at the New Delhi Registry on your behalf. We provide digital updates and manage the entire legal lifecycle while you focus on your business in Chandigarh."
    },
    {
      question: "Can software developed in IT Park Chandigarh be patented?",
      answer: "Software per se is not patentable under Section 3(k) of the Indian Patents Act. However, if the software produces a technical effect or is used in conjunction with novel hardware, it can be patented as a 'Computer Related Invention' (CRI). Alternatively, the specific code can be protected under Copyright law as a literary work."
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




