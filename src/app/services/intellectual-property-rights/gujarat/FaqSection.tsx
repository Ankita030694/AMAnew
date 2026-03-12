import React from "react";

const FaqSection = () => {
  const faqs = [
    {
      question: "Where is the Trademark Registry located in Ahmedabad?",
      answer: "The Trade Marks Registry is located at Boudhik Sampada Bhawan, Near Chanakyapuri Overbridge, Beside AMC City Civic Centre, Ghatlodia, Ahmedabad - 380061. This office has jurisdiction over Gujarat, Rajasthan, and Daman & Diu."
    },
    {
      question: "Does the Gujarat government offer any subsidy for patent filing?",
      answer: "Yes, under the Gujarat Industrial Policy 2020, MSMEs can avail assistance of up to 75% of the expenditure incurred for obtaining a patent, subject to a maximum of ₹25 Lakhs. This covers attorney fees and government fees."
    },
    {
      question: "How can I protect my pharmaceutical formulation in Gujarat?",
      answer: "Gujarat is India's pharma hub. You should file for a patent for your novel drug formulation. If it's a process innovation, a process patent can be filed. We assist pharma companies in Ahmedabad and Vadodara with patent drafting and filing."
    },
    {
      question: "Can I trademark my diamond jewellery brand in Surat?",
      answer: "Absolutely. Surat is the diamond capital of the world. Registering your brand name and logo as a trademark is crucial for building trust in the export market. You can also register unique jewellery designs under the Designs Act."
    },
    {
      question: "What legal action can I take against counterfeiters in Gujarat?",
      answer: "You can file a suit for infringement in the designated Commercial Courts in districts like Ahmedabad, Surat, or Vadodara. The Gujarat High Court also hears appeals. Additionally, you can lodge a complaint with the CID Crime (Economic Offences Wing) for criminal action."
    },
    {
      question: "Is there support for acquiring foreign technologies?",
      answer: "Yes, the Gujarat government provides assistance to MSMEs for acquiring foreign patented technologies, offering up to 65% of the cost, capped at ₹50 Lakhs."
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
