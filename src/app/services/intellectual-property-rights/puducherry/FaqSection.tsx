"use client";

import React from "react";
import Script from "next/script";

const faqs = [
  {
    question: "What are the key Intellectual Property Rights available in Puducherry?",
    answer: "In Puducherry, businesses and creators can protect their assets through various Intellectual Property Rights (IPR) including Trademarks (for brand names and logos), Patents (for inventions), Copyrights (for literary and artistic works), Designs (for aesthetic shapes and patterns), and Geographical Indications (GI) tags (for unique local products like Villianur Terracotta)."
  },
  {
    question: "How do I register a Trademark in Puducherry?",
    answer: "Trademark registration in Puducherry is governed by the Trade Marks Act, 1999. The process involves conducting a trademark search, filing an application (Form TM-A) online via the IP India portal or through a legal consultant, responding to examination reports, and publication in the Trademark Journal. While there isn't a separate trademark registry office physically in Puducherry (it falls under the Chennai jurisdiction), the entire process can be managed digitally with the help of IPR experts."
  },
  {
    question: "What is the significance of GI Tags in Puducherry?",
    answer: "Geographical Indication (GI) tags are crucial for Puducherry's traditional crafts. They certify that a product possesses certain qualities or a reputation due to its geographical origin. Notable GI tags from Puducherry include 'Villianur Terracotta Works' and 'Thirukannur Papier Mache Craft'. These tags protect local artisans from unauthorized imitation and boost the commercial value of their authentic products."
  },
  {
    question: "Can I file a Patent application from Puducherry?",
    answer: "Yes, you can file a patent application from Puducherry. Since patent filing in India is a centralized process, applicants from Puducherry typically file their applications with the Patent Office in Chennai, which serves the southern region. However, the most efficient method is e-filing through the official IP India website, often facilitated by patent attorneys to ensure technical accuracy."
  },
  {
    question: "How long does it take to get a Trademark registered in Puducherry?",
    answer: "The timeline for trademark registration can vary. If there are no objections or oppositions, the process typically takes about 6 to 8 months. However, if the registry raises objections or a third party opposes the application, it can take 18 months or longer. Professional legal assistance can help streamline the response to objections and expedite the process."
  },
  {
    question: "What is the role of the Pondicherry University IPR Centre?",
    answer: "The IPR Centre at Pondicherry University plays a vital role in fostering an IP culture in the region. It conducts awareness workshops, assists researchers and students in patent searches, and facilitates the filing of patents and other IPRs. It serves as a local hub for academic and innovation-based IP support."
  },
  {
    question: "Do I need a lawyer for IPR registration in Puducherry?",
    answer: "While it is possible to file for IPR yourself, hiring an experienced IPR lawyer or consultant is highly recommended. The legal nuances of drafting patent claims, responding to trademark examination reports (office actions), and handling opposition hearings require specialized knowledge. A legal expert ensures your application is error-free, reducing the risk of rejection."
  },
  {
    question: "What constitutes Copyright infringement in Puducherry?",
    answer: "Copyright infringement occurs when someone uses, reproduces, or distributes your original work (literary, artistic, musical, etc.) without your permission. In Puducherry, as in the rest of India, this is a violation of the Copyright Act, 1957. Remedies include civil suits for injunctions and damages, as well as criminal charges in severe cases."
  },
  {
    question: "Are there specific schemes for Startups regarding IPR in Puducherry?",
    answer: "Yes, startups in Puducherry can benefit from the central government's 'Scheme for Facilitating Start-Ups Intellectual Property Protection (SIPP)'. This scheme provides for reduced official fees (up to 80% rebate on patents and 50% on trademarks) and access to a panel of facilitators whose professional fees are borne by the government, making IPR protection affordable for new ventures."
  },
  {
    question: "How can AMA Legal Solutions assist with IPR in Puducherry?",
    answer: "AMA Legal Solutions offers comprehensive IPR services in Puducherry. We assist with trademark searches and filing, patent drafting and prosecution, copyright registration, and design protection. Our team also handles IP litigation, opposition proceedings, and provides strategic advice on maximizing the value of your intellectual property assets."
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

export default function FaqSection() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section id="faqs" className="scroll-mt-32">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions (Puducherry IPR)</h2>
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
