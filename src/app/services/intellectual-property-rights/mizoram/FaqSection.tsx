"use client";

import React from "react";
import Script from "next/script";

const faqs = [
  {
    question: "What are the main Intellectual Property Rights services available in Mizoram?",
    answer: "Mizoram offers a full spectrum of IPR services including Trademark Registration for brand protection, Patent Filing for inventions, Copyright Registration for creative works, and Geographical Indication (GI) registration for its unique handloom and agricultural products like Mizo Chilli and Pawndum."
  },
  {
    question: "How can I register a Trademark in Mizoram?",
    answer: "Trademark registration in Mizoram is a centralized online process managed by the Trade Marks Registry. Applicants can file Form TM-A via the IP India portal. The process involves a trademark search, application filing, examination, and publication. AMA Legal Solutions provides expert guidance to handle this entire process digitally, ensuring your brand is secured without the need for physical visits."
  },
  {
    question: "Where is the Patent Office for Mizoram applicants?",
    answer: "For applicants residing in Mizoram, the appropriate jurisdiction for patent filing is the Patent Office in Kolkata. However, the entire patent filing and prosecution process can be handled online through the e-filing system, which is faster and more convenient. We act as your authorized agents to manage these proceedings remotely."
  },
  {
    question: "What are the famous GI Tags from Mizoram?",
    answer: "Mizoram is famous for its GI-tagged products that reflect its rich cultural heritage. Key examples include Mizo Chilli (Bird's Eye Chilli), Mizo Ginger, and exquisite handloom textiles like Pawndum, Ngotekherh, Hmaram, Tawlhlohpuan, and Mizo Puanchei."
  },
  {
    question: "Is there any government support for IPR in Mizoram?",
    answer: "Yes, the Mizoram Science, Technology & Innovation Council (MISTIC) and its Patent Information Centre (PIC) actively promote IPR awareness and provide assistance. Additionally, the central government's Startup India scheme offers fee rebates for trademark and patent filings to recognized startups in the state."
  },
  {
    question: "How long does it take to get a Trademark registered in Mizoram?",
    answer: "If there are no objections or oppositions, a trademark can be registered in approximately 6 to 8 months. However, if the registry raises objections or a third party opposes the mark, the process can take 18 months or longer. Our legal team works to minimize delays by ensuring accurate filings and prompt responses."
  },
  {
    question: "Can I copyright my music or literary work in Mizoram?",
    answer: "Yes, copyright protection is available for literary, dramatic, musical, and artistic works. Given Mizoram's rich tradition of music and literature, registering your copyright is essential to prevent unauthorized use and piracy. We assist creators in securing these rights effectively."
  },
  {
    question: "What is the validity of a Patent in India?",
    answer: "A patent granted in India is valid for 20 years from the date of filing the application. To keep the patent in force, renewal fees must be paid annually from the 3rd year onwards. After the 20-year term, the invention falls into the public domain."
  },
  {
    question: "Do I need to travel to Kolkata for IPR registration?",
    answer: "No, you do not need to travel. With the digitization of the Indian IP offices, all filings, hearings, and document submissions can be done online. AMA Legal Solutions acts as your legal representative, managing all aspects of the registration process while you focus on your business in Mizoram."
  },
  {
    question: "What should I do if someone is selling fake Mizo handicrafts?",
    answer: "If you are an authorized user of a GI tag or have a registered trademark, you can take legal action against the infringer. Remedies include obtaining an injunction to stop the sale, claiming damages, and seizing the infringing goods. We can help you enforce your rights and protect the reputation of authentic Mizo products."
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

export default function FaqSection() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section id="faqs" className="scroll-mt-32">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions (Mizoram IPR)</h2>
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
    </>
  );
}
