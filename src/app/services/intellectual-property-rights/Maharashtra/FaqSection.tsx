import React from "react";

const FaqSection = () => {
  const faqs = [
    {
      question: "Where is the Trademark Registry located in Mumbai?",
      answer: "The Trade Marks Registry in Mumbai is located at Boudhik Sampada Bhawan, S.M. Road, Antop Hill, Mumbai - 400 037. This office has jurisdiction over trademark applications filed from the states of Maharashtra, Madhya Pradesh, Chhattisgarh, and Goa."
    },
    {
      question: "How can I register a copyright for my film script or song in Mumbai?",
      answer: "Copyright registration is centralized in India, but as a creator in Mumbai (the hub of Bollywood), you can file your application online through the Copyright Office website. For films and sound recordings, it is also advisable to register titles and works with industry bodies like IMPPA or IPRS for additional trade protection, although legal copyright registration provides the strongest statutory right."
    },
    {
      question: "Does the Maharashtra government offer any subsidies for patent filing?",
      answer: "Yes, the Maharashtra State Innovation Society (MSInS) has an IPR Support Scheme for startups. Eligible startups registered in Maharashtra can avail of financial assistance and reimbursement for costs incurred during the patent, trademark, and quality certification filing process."
    },
    {
      question: "Can I file a trademark infringement suit in the Bombay High Court?",
      answer: "Yes, the Bombay High Court has original jurisdiction to try intellectual property suits. If the cause of action arises in Mumbai or if the plaintiff resides/carries on business in Mumbai (subject to certain conditions), you can file a suit for infringement or passing off directly in the Bombay High Court."
    },
    {
      question: "How long does it take to get a trademark registered in Maharashtra?",
      answer: "The timeline is consistent across India, typically taking 12-18 months if there are no objections. However, due to the high volume of applications at the Mumbai Registry, hearing dates for objections can sometimes take longer to be scheduled. Our local legal team actively follows up with the registry to expedite the process."
    },
    {
      question: "What is the difference between a trademark and a copyright for a Mumbai business?",
      answer: "A trademark protects your brand identity (like your company name, logo, or slogan) which distinguishes your goods/services in the market. Copyright protects your original creative works (like software code, marketing content, designs, or artistic works). For most businesses in Mumbai, protecting both is essential for comprehensive brand security."
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
