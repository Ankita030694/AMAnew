import React from "react";

const FaqSection = () => {
  const faqs = [
    {
      question: "Where is the Trademark Registry for Rajasthan located?",
      answer: "For businesses in Rajasthan, the appropriate Trademark Registry is in Ahmedabad. The address is: Boudhik Sampada Bhawan, Near Chanakyapuri Overbridge, Beside AMC City Civic Centre, Ghatlodia, Ahmedabad - 380061."
    },
    {
      question: "Does the Rajasthan High Court have a dedicated IP Division?",
      answer: "While not a dedicated division like Delhi, the Rajasthan High Court (Jodhpur and Jaipur Bench) actively hears IP matters. Commercial Courts have also been constituted at the District Judge level in Rajasthan to handle commercial disputes, including IPR cases valued above ₹3 Lakhs."
    },
    {
      question: "Is there any government subsidy for patent filing in Rajasthan?",
      answer: "Yes, under the Rajasthan State Policy on Intellectual Property Rights, the government provides financial assistance of up to 75% of the patent filing costs, capped at ₹1 Lakh per application for eligible startups and MSMEs."
    },
    {
      question: "How can I protect my Blue Pottery designs in Jaipur?",
      answer: "Blue Pottery of Jaipur is a registered Geographical Indication (GI). If you are an authorized user, you can use the GI tag. Additionally, unique patterns can be registered under the Designs Act, 2000, to prevent copying."
    },
    {
      question: "Can I trademark my heritage hotel's name in Udaipur?",
      answer: "Absolutely. Heritage hotels are a key part of Rajasthan's tourism. Registering your hotel's name and logo as a Trademark (Class 43) is essential to protect your brand reputation from unauthorized use by other properties."
    },
    {
      question: "What should I do if someone is selling fake Bikaneri Bhujia under my brand?",
      answer: "Bikaneri Bhujia is a GI-protected product. If you are a registered authorized user or have a trademark, you can take legal action. We can help you file a suit for infringement and passing off in the appropriate Commercial Court in Rajasthan."
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
