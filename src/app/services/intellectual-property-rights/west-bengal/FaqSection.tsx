
import React from "react";
import Script from "next/script";

const FaqSection = () => {
  const faqs = [
    {
      question: "How do I register a Trademark in West Bengal?",
      answer:
        "Trademark registration in West Bengal is handled by the Trademark Registry in Kolkata. The process involves conducting a trademark search, filing Form TM-A online via the IP India portal, and responding to any examination reports. The Kolkata registry has jurisdiction over the eastern region of India.",
    },
    {
      question: "Where is the Patent Office located in West Bengal?",
      answer:
        "The Patent Office for the eastern region is located in Kolkata (Salt Lake City). It handles patent applications from West Bengal and neighboring states. While physical filing is possible, the online e-filing system is recommended for faster processing.",
    },
    {
      question: "What are the famous GI tags of West Bengal?",
      answer:
        "West Bengal is home to the first GI tag in India—Darjeeling Tea. Other prominent GI tags include Nakshi Kantha, Santiniketan Leather Goods, Baluchari Saree, Dhaniakhali Saree, Joynagarer Moa, and Bardhaman Sitabhog. These tags protect the unique heritage and quality of Bengal's products.",
    },
    {
      question: "Are there any IPR subsidies for startups in West Bengal?",
      answer:
        "Yes, the West Bengal Startup Policy offers incentives for IPR protection. Registered startups can avail of reimbursement for patent and trademark filing costs. The West Bengal State Council of Science & Technology also facilitates IPR awareness and support.",
    },
    {
      question: "How can I protect my literary work in Kolkata?",
      answer:
        "Kolkata, being a cultural capital, has a high volume of literary and artistic works. Copyright protection is automatic upon creation, but registration with the Copyright Office (centralized in Delhi) provides legal evidence of ownership. This is crucial for authors, filmmakers, and software developers in the state.",
    },
    {
      question: "What is the role of the Patent Information Centre (PIC) in West Bengal?",
      answer:
        "The Patent Information Centre (PIC), under the West Bengal State Council of Science & Technology, assists inventors and researchers with patent searches, filing support, and IPR awareness. It acts as a bridge between innovators and the patent office.",
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
