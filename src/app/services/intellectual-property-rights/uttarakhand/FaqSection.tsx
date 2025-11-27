
import React from "react";
import Script from "next/script";

const FaqSection = () => {
  const faqs = [
    {
      question: "How can I register a Trademark in Uttarakhand?",
      answer:
        "Trademark registration in Uttarakhand is a centralized online process. Applicants can file Form TM-A through the IP India portal. The appropriate jurisdiction for applicants in Uttarakhand is the Trademark Registry in New Delhi. Local assistance is available through IP facilitation centers in Dehradun and incubation hubs at IIT Roorkee.",
    },
    {
      question: "Where is the Patent Office for Uttarakhand?",
      answer:
        "There is no separate Patent Office in Uttarakhand. Patent applications from the state fall under the jurisdiction of the Patent Office in New Delhi. However, the entire filing and examination process can be conducted online, making physical proximity less critical.",
    },
    {
      question: "What are the famous GI tags of Uttarakhand?",
      answer:
        "Uttarakhand has several unique GI tags reflecting its rich biodiversity and culture. These include Uttarakhand Tejpatta (Bay Leaf), Aipan Art, Munsyari Rajma, Ringal Craft, Tamta Product (Copperware), Thulma (Blanket), and Bhotiya Dann (Carpet).",
    },
    {
      question: "Does the Uttarakhand government offer IPR subsidies?",
      answer:
        "Yes, under the MSME Policy 2015 and subsequent amendments, the Government of Uttarakhand provides financial assistance for IPR registration. This includes reimbursement of costs incurred for obtaining patents (up to 75%) and trademarks, subject to specific caps and eligibility criteria.",
    },
    {
      question: "How does Startup Uttarakhand support IPR?",
      answer:
        "Startup Uttarakhand, the state's nodal agency for startups, offers various incentives including reimbursement of patent filing fees. They also conduct awareness workshops and connect startups with IP attorneys and mentors to help build a strong IP portfolio.",
    },
    {
      question: "Can I copyright my artistic work in Uttarakhand?",
      answer:
        "Yes, copyright protection is available for literary, dramatic, musical, and artistic works. The process is centralized under the Copyright Office, India. Creators in Uttarakhand can file applications online. Copyright is particularly relevant for the state's vibrant folk music and traditional art forms.",
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
