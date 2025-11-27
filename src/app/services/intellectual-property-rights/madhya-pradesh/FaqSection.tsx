import React from "react";

const FaqSection = () => {
  const faqs = [
    {
      question: "Where is the Trademark Registry located for Madhya Pradesh businesses?",
      answer: "For businesses in Madhya Pradesh, the appropriate Trade Marks Registry is located in Mumbai (Antop Hill). Even though you are based in Indore, Bhopal, or Gwalior, all administrative filings, examination responses, and hearings fall under the jurisdiction of the Mumbai office. We handle this cross-state coordination seamlessly for our MP clients."
    },
    {
      question: "Can I file an IP infringement suit in Indore or Bhopal?",
      answer: "Yes. For civil remedies like injunctions and damages, you can file a suit at the Commercial Courts in your respective district (e.g., Indore or Bhopal). For appeals and higher value matters, the jurisdiction lies with the High Court of Madhya Pradesh (Principal Seat at Jabalpur, or Benches at Indore and Gwalior)."
    },
    {
      question: "Does the MP Government offer subsidies for patent filing?",
      answer: "Yes, under the MP Startup Policy 2022, recognized startups can avail assistance for patent and trademark registration. The government provides reimbursement for filing fees to encourage innovation. Additionally, MSMEs can benefit from the Ministry of MSME's IPR reimbursement scheme."
    },
    {
      question: "What is the 'Detroit of India' context for IPR in MP?",
      answer: "Pithampur, near Indore, is known as the Detroit of India due to its high concentration of automobile industries. In this sector, 'Industrial Design' registration (for vehicle parts aesthetics) and 'Patents' (for mechanical innovations) are critical to prevent copying by competitors in the same industrial belt."
    },
    {
      question: "How do I protect my textile designs in Chanderi or Maheshwar?",
      answer: "Traditional designs like Chanderi and Maheshwari sarees are protected under Geographical Indications (GI). However, for individual brands creating unique contemporary patterns on these fabrics, 'Copyright' for artistic work or 'Industrial Design' registration is recommended to prevent unauthorized mass production."
    },
    {
      question: "Is a trademark registered in MP valid across India?",
      answer: "Yes, a trademark registration is federal in nature. Once registered (even if filed under the Mumbai jurisdiction for an MP applicant), it is valid and enforceable throughout India, allowing you to expand your business nationally without re-registering."
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




