"use client";

import React from "react";
import Script from "next/script";

const faqs = [
  {
    question: "What are the key Intellectual Property Rights services available in Arunachal Pradesh?",
    answer: "In Arunachal Pradesh, businesses and creators can access a full suite of IPR services including Trademark Registration for brand protection, Patent Filing for inventions, Copyright Registration for artistic and literary works, and Geographical Indication (GI) registration for unique local products like Wakro Orange and Yak Churpi."
  },
  {
    question: "How can I register a Trademark in Arunachal Pradesh?",
    answer: "Trademark registration is a centralized process in India. Applicants from Arunachal Pradesh can file their applications online through the IP India portal. The process involves a trademark search, filing Form TM-A, examination, publication, and registration. AMA Legal Solutions provides expert digital assistance to handle this entire process for you, ensuring your brand is protected nationwide."
  },
  {
    question: "Where is the Patent Office for Arunachal Pradesh?",
    answer: "For applicants residing in Arunachal Pradesh, the appropriate jurisdiction is the Patent Office in Kolkata. However, physical visits are rarely necessary as the entire patent filing and prosecution process can be handled online through the e-filing system, which we highly recommend for speed and efficiency."
  },
  {
    question: "What are the famous GI Tags from Arunachal Pradesh?",
    answer: "Arunachal Pradesh has several registered GI tags that highlight its rich biodiversity and traditional craftsmanship. Notable examples include Arunachal Wakro Orange, Idu Mishmi Textiles, Khamti Rice, Yak Churpi, and Tangsa Textile. These tags protect the unique identity and economic value of these local products."
  },
  {
    question: "Is there any support for startups regarding IPR in Arunachal Pradesh?",
    answer: "Yes, the government is actively promoting IPR awareness. Institutions like NIT Arunachal Pradesh have dedicated IPR cells. Additionally, the Startup India scheme offers benefits like reduced filing fees (up to 80% rebate on patents and 50% on trademarks) and access to facilitators for startups and MSMEs in the state."
  },
  {
    question: "How long does it take to get a Trademark registered?",
    answer: "If there are no objections or oppositions, a trademark can be registered in approximately 6 to 8 months. However, if the registry raises objections or a third party opposes the mark, the process can take 18 months or longer. Our legal team works to minimize these delays by conducting thorough preliminary searches and drafting robust applications."
  },
  {
    question: "Can I copyright my music or artwork in Arunachal Pradesh?",
    answer: "Absolutely. Copyright protection is automatic upon creation, but registration provides legal proof of ownership. This is essential for artists, musicians, and filmmakers in Arunachal Pradesh to protect their creative works from piracy and unauthorized commercial use."
  },
  {
    question: "What is the validity of a Patent in India?",
    answer: "A patent granted in India is valid for 20 years from the date of filing the application. To keep the patent in force, renewal fees must be paid annually from the 3rd year onwards. Once the 20-year term expires, the invention falls into the public domain."
  },
  {
    question: "Do I need to visit Kolkata or Chennai for IPR registration?",
    answer: "No, you do not need to travel. With the digitization of the Indian IP offices, all filings, hearings, and document submissions can be done online. AMA Legal Solutions acts as your authorized agent, managing all legal proceedings remotely while you focus on your business in Arunachal Pradesh."
  },
  {
    question: "What should I do if someone is using my registered Trademark?",
    answer: "If you have a registered trademark, you can take legal action against the infringer for trademark infringement. Remedies include obtaining an injunction to stop the unauthorized use, claiming damages for financial loss, and seizing infringing goods. It is advisable to consult with an IPR attorney immediately to send a cease and desist notice as a first step."
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
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions (Arunachal Pradesh IPR)</h2>
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
