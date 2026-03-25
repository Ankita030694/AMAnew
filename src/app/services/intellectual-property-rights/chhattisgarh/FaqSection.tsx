"use client";

import React from "react";
import Script from "next/script";

const faqs = [
  {
    question: "What are the primary Intellectual Property Rights services available in Chhattisgarh?",
    answer: "Chhattisgarh offers a wide range of IPR services including Trademark Registration for brand protection, Patent Filing for inventions, Copyright Registration for creative works, and Geographical Indication (GI) registration for unique local products like Bastar Dhokra and Jeeraphool Rice."
  },
  {
    question: "How can I register a Trademark in Chhattisgarh?",
    answer: "Trademark registration in Chhattisgarh is a centralized online process governed by the Trade Marks Registry. Applicants can file Form TM-A through the IP India portal. The process involves a trademark search, application filing, examination, and publication. AMA Legal Solutions provides end-to-end assistance, from conducting the initial search to handling objections and securing the registration certificate."
  },
  {
    question: "Where is the Patent Office for Chhattisgarh applicants?",
    answer: "For applicants based in Chhattisgarh, the appropriate jurisdiction for patent filing is the Patent Office in Mumbai. However, the entire process—from filing to hearings—can be conducted online. Our digital-first approach ensures that you can secure your patent rights without needing to visit the office physically."
  },
  {
    question: "What are the famous GI Tags from Chhattisgarh?",
    answer: "Chhattisgarh is renowned for its rich tribal heritage and agricultural diversity, reflected in its GI tags. Notable examples include Bastar Dhokra (metal craft), Bastar Wooden Craft, Bastar Iron Craft, Champa Silk Sarees, and Jeeraphool Rice (an aromatic rice variety)."
  },
  {
    question: "Does the Chhattisgarh government provide any support for IPR?",
    answer: "Yes, the Chhattisgarh government actively supports IPR through the Chhattisgarh Council of Science & Technology (CCOST) and the Directorate of Industries. These bodies provide guidance and financial assistance to startups and MSMEs for patent and trademark filings."
  },
  {
    question: "How long does it take to get a Trademark registered in Chhattisgarh?",
    answer: "The trademark registration process typically takes 6 to 8 months if there are no objections or oppositions. However, if the registry raises queries or a third party opposes the mark, it can take longer. We strive to expedite the process by ensuring error-free filings and prompt responses to legal notices."
  },
  {
    question: "Can I copyright my literary or artistic work in Chhattisgarh?",
    answer: "Yes, copyright protection is available for literary, dramatic, musical, and artistic works. Registration with the Copyright Office provides a legal presumption of ownership, which is crucial for enforcement. This is particularly relevant for Chhattisgarh's vibrant community of writers, musicians, and artisans."
  },
  {
    question: "What is the validity of a Patent in India?",
    answer: "A patent is valid for 20 years from the date of filing the application. To maintain the patent, renewal fees must be paid annually. After the 20-year term, the invention enters the public domain and can be freely used by anyone."
  },
  {
    question: "Do I need a lawyer for IPR registration in Chhattisgarh?",
    answer: "While it is possible to file on your own, IPR laws are complex. A qualified attorney can help you navigate the intricacies of classification, drafting, and prosecution. Professional assistance significantly increases the chances of a successful grant and ensures your rights are broadly protected."
  },
  {
    question: "What remedies are available for Trademark infringement?",
    answer: "If someone infringes your registered trademark, you can file a civil suit for an injunction (to stop the use), damages (monetary compensation), and account of profits. Criminal remedies, including imprisonment and fines, are also available under the Trade Marks Act, 1999."
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
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions (Chhattisgarh IPR)</h2>
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
