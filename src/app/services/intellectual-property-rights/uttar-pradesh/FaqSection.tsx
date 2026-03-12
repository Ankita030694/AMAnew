import React from "react";

const FaqSection = () => {
  const faqs = [
    {
      question: "Where is the Trademark Registry for Uttar Pradesh located?",
      answer: "Uttar Pradesh falls under the jurisdiction of the Trademark Registry in New Delhi. The office is located at Boudhik Sampada Bhawan, Plot No. 32, Sector 14, Dwarka, New Delhi - 110078."
    },
    {
      question: "Does the Uttar Pradesh government provide any IPR subsidy?",
      answer: "Yes, under the UP Industrial Investment & Employment Promotion Policy 2022, eligible manufacturing and R&D units can get a reimbursement of 50% of the expenditure incurred on registration of Patents, Trademarks, and GIs, up to a maximum of ₹1 Crore."
    },
    {
      question: "How can I protect my software product developed in Noida?",
      answer: "For software companies in Noida and Greater Noida, we recommend a dual strategy: Copyright registration for the source code and Patent filing if the software has a technical effect. We also assist with trademarking your software brand."
    },
    {
      question: "What is the legal remedy for trademark infringement in UP?",
      answer: "You can file a commercial suit for infringement in the District Commercial Courts (e.g., in Gautam Buddha Nagar, Lucknow, or Kanpur). The Allahabad High Court also has jurisdiction over IPR matters. Criminal complaints can be lodged with the UP Police for counterfeiting."
    },
    {
      question: "Can I get a GI tag for my handicraft product?",
      answer: "Uttar Pradesh is famous for GIs like Banarasi Silk, Lucknow Chikankari, and Moradabad Metal Craft. If you are a producer in these regions, we can help you register as an 'Authorized User' to legally use the GI tag and protect your authentic products."
    },
    {
      question: "How do I protect my leather brand in Kanpur?",
      answer: "Kanpur is a major leather hub. You should register your brand name and logo as a Trademark. Additionally, if you have unique shoe or bag designs, they can be protected under the Designs Act, 2000."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
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
