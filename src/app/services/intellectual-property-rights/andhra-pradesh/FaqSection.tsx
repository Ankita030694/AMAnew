"use client";

import React from "react";
import Script from "next/script";

const faqs = [
  {
    question: "What are the major Intellectual Property Rights services available in Andhra Pradesh?",
    answer: "Andhra Pradesh offers a comprehensive range of IPR services including Trademark Registration for brand protection, Patent Filing for technological inventions, Copyright Registration for creative works, Design Registration for aesthetic industrial designs, and Geographical Indication (GI) filing for unique local products like Tirupati Laddu and Kondapalli Toys."
  },
  {
    question: "How can I register a Trademark in Andhra Pradesh?",
    answer: "Trademark registration in Andhra Pradesh is handled centrally by the Trade Marks Registry. Applicants can file their applications online through the IP India portal. The process involves a trademark search, filing Form TM-A, examination by the registry, publication in the journal, and registration. While the physical registry for the region is in Chennai, AMA Legal Solutions provides end-to-end digital assistance for businesses in Visakhapatnam, Vijayawada, and across the state."
  },
  {
    question: "Where is the Patent Office for Andhra Pradesh applicants?",
    answer: "For applicants based in Andhra Pradesh, the appropriate jurisdiction for patent filing is the Patent Office in Chennai. However, with the modernization of the Indian IP system, the most efficient way to file is through the online e-filing system, which we can facilitate to ensure faster processing and immediate acknowledgement."
  },
  {
    question: "What are some famous GI Tags from Andhra Pradesh?",
    answer: "Andhra Pradesh is rich in GI-tagged products that reflect its cultural heritage. Notable examples include the world-famous Tirupati Laddu, Araku Valley Arabica Coffee, Guntur Sannam Chilli, Kondapalli Bommallu (Toys), Srikalahasthi Kalamkari, and Banaganapalle Mangoes. These tags protect the authenticity and economic interests of local producers."
  },
  {
    question: "Is there any government support for IPR in Andhra Pradesh?",
    answer: "Yes, the Andhra Pradesh Innovation Society (APIS) and the National Research Development Corporation (NRDC) have established an Intellectual Property Facilitation Centre (IPFC) in Visakhapatnam. This center assists startups, MSMEs, and researchers with IP awareness, patent searches, and filing support."
  },
  {
    question: "How long does it take to get a Patent granted in Andhra Pradesh?",
    answer: "The patent grant process in India typically takes 3 to 5 years from the date of filing. However, startups and small entities can avail of the 'Expedited Examination' route, which can significantly reduce the timeline to approximately 1-1.5 years. Professional drafting and timely responses to examination reports are key to faster grants."
  },
  {
    question: "What is the validity of a Trademark and can it be renewed?",
    answer: "A registered trademark is valid for 10 years from the date of application. It can be renewed indefinitely for successive periods of 10 years by paying the prescribed renewal fees. We assist clients in tracking renewal deadlines to ensure their brand protection never lapses."
  },
  {
    question: "Can I copyright my software code in Andhra Pradesh?",
    answer: "Yes, software code is protected under the Copyright Act as a 'literary work'. Registering your source code with the Copyright Office provides strong legal evidence of ownership, which is crucial for software companies in IT hubs like Visakhapatnam and Vijayawada to prevent piracy and unauthorized use."
  },
  {
    question: "Do I need a lawyer to file for IPR in Andhra Pradesh?",
    answer: "While not mandatory, IPR laws are complex. A simple error in the application or a weak patent claim can lead to rejection or limited protection. An experienced IPR attorney can conduct proper due diligence, draft robust specifications, and effectively handle objections and hearings, ensuring your intellectual assets are securely protected."
  },
  {
    question: "What is the penalty for Trademark infringement in Andhra Pradesh?",
    answer: "Trademark infringement is a serious offense. Under the Trade Marks Act, 1999, it can lead to both civil and criminal remedies. Civil remedies include injunctions (stopping the use), damages (monetary compensation), and account of profits. Criminal penalties can include imprisonment for a term of not less than six months and a fine of not less than ₹50,000."
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
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions (Andhra Pradesh IPR)</h2>
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
