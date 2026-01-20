import React from "react";

const FaqSection = () => {
  const faqs = [
    {
      question: "Which Trademark Registry handles applications from Manipur?",
      answer: "Manipur falls under the jurisdiction of the Trade Marks Registry in Kolkata (Salt Lake City). All applications for trademarks, patents, and designs from Imphal and other districts must be filed with the Kolkata office. We handle this entire process digitally, so you don't need to visit Kolkata."
    },
    {
      question: "Can I file an IP infringement suit in Manipur High Court?",
      answer: "Yes. The High Court of Manipur in Imphal has jurisdiction over intellectual property disputes within the state. For commercial disputes, such as trademark infringement, you can file a suit in the local District Courts or the High Court depending on the valuation of the suit."
    },
    {
      question: "What are the GI tags from Manipur that I can use?",
      answer: "Manipur has several registered Geographical Indications (GI) including 'Shaphee Lanphee' (textile), 'Moirang Phee' (textile), 'Wangkhei Phee' (textile), 'Kachai Lemon', 'Chak-Hao' (Black Rice), and 'Sirarakhong Hathei' (Chilli). If you are a genuine producer of these goods, we can help you register as an 'Authorized User' to legally use the GI tag."
    },
    {
      question: "Are there IPR subsidies for startups in Manipur?",
      answer: "Yes, under the 'Manipur Startup Policy', recognized startups are eligible for reimbursement of patent and trademark filing fees. The policy aims to encourage innovation among local entrepreneurs by reducing the cost of IP protection."
    },
    {
      question: "How do I protect my handloom designs from being copied?",
      answer: "Unique handloom patterns can be protected under the 'Designs Act, 2000'. If the design is new and original, registering it prevents others from mass-producing identical fabrics. For traditional community designs, GI registration is the best route, while individual contemporary innovations can be registered as Industrial Designs."
    },
    {
      question: "Is copyright registration mandatory for Manipuri films and music?",
      answer: "Copyright exists automatically upon creation, but registration is highly recommended. A registered copyright certificate is prima facie evidence of ownership, which is crucial if you need to take legal action against piracy of your film, song, or music video."
    },
    {
      question: "I import goods via Moreh. Do I need IPR registration?",
      answer: "Yes. If you are importing branded goods, you must ensure you are not infringing on Indian trademarks. Conversely, if you own a brand, you should record your rights with Indian Customs to prevent counterfeit versions of your product from entering India through the border."
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




