import React from "react";

const FaqSection = () => {
  const faqs = [
    {
      question: "Where is the Trademark Registry located in Delhi?",
      answer: "The Trade Marks Registry in Delhi is located at Boudhik Sampada Bhawan, Plot No. 32, Sector 14, Dwarka, New Delhi - 110075. It has jurisdiction over Delhi, Haryana, Punjab, Himachal Pradesh, Jammu & Kashmir, Chandigarh, and Uttarakhand."
    },
    {
      question: "What is the Delhi High Court Intellectual Property Division (IPD)?",
      answer: "The IPD is a dedicated division of the Delhi High Court created in 2022 to handle all IPR matters, including suits, revocation petitions, and appeals from the Trademark and Patent Registries. It ensures faster disposal of IP cases by specialized judges."
    },
    {
      question: "How can I protect my startup idea in Delhi NCR?",
      answer: "For startups in Delhi, Gurgaon, and Noida, we recommend a three-pronged strategy: 1) File a provisional patent if you have a tech invention. 2) Register your brand name as a Trademark. 3) Use robust Non-Disclosure Agreements (NDAs) with employees and investors to protect trade secrets."
    },
    {
      question: "Can I file a copyright for my book or software in Delhi?",
      answer: "Yes, the Copyright Office is located in Dwarka, Delhi. Whether you are an author in Daryaganj or a software developer in Okhla, we can file your copyright application physically or electronically to secure your creative work."
    },
    {
      question: "What should I do if someone in Chandni Chowk is selling fakes of my brand?",
      answer: "You can take immediate legal action. We can help you file a 'John Doe' suit in the Delhi High Court to get an ex-parte injunction and conduct a raid with a Local Commissioner to seize the counterfeit goods."
    },
    {
      question: "Are there any government schemes for IP in Delhi?",
      answer: "Yes, the DPIIT (Department for Promotion of Industry and Internal Trade), headquartered in Delhi, offers the SIPP (Start-ups Intellectual Property Protection) scheme, which provides an 80% rebate on patent fees and 50% on trademark fees for recognized startups."
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
