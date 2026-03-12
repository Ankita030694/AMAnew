import React from "react";

const FaqSection = () => {
  const faqs = [
    {
      question: "Where is the Trademark Registry for Punjab located?",
      answer: "Punjab falls under the jurisdiction of the Trademark Registry in New Delhi. The office is located at Boudhik Sampada Bhawan, Plot No. 32, Sector 14, Dwarka, New Delhi - 110078."
    },
    {
      question: "Does the Punjab government offer any subsidy for patent filing?",
      answer: "Yes, under the Punjab Industrial and Business Development Policy 2022, MSMEs can avail a reimbursement of 75% of the expenditure incurred for patent registration, up to a maximum of ₹10 Lakh for domestic and ₹20 Lakh for international patents."
    },
    {
      question: "How can I protect my sports goods brand in Jalandhar?",
      answer: "Jalandhar is a global hub for sports goods. You should register your brand name and logo as a Trademark to protect your reputation in export markets. Additionally, unique designs of sports equipment can be registered under the Designs Act, 2000."
    },
    {
      question: "What is the legal remedy for trademark infringement in Punjab?",
      answer: "You can file a commercial suit for infringement in the designated Commercial Courts (e.g., in Ludhiana or Mohali). The Punjab & Haryana High Court in Chandigarh also has jurisdiction over IPR matters. Criminal complaints can be lodged with the Economic Offences Wing of the Punjab Police."
    },
    {
      question: "Can I patent my agricultural machinery innovation?",
      answer: "Yes, Punjab is a leader in agricultural mechanization. If you have invented a new tool or improved an existing machine (like a harvester or seeder), you can file for a patent. It must be novel, have an inventive step, and industrial application."
    },
    {
      question: "How do I protect my hosiery designs in Ludhiana?",
      answer: "Ludhiana's hosiery industry is highly competitive. To stop others from copying your unique sweater or garment patterns, you should register them under the Designs Act. Copyright protection is also available for artistic textile prints."
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
