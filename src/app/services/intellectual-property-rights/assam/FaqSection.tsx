"use client";

import React from "react";

const FaqSection = () => {
  const faqData = [
    {
      question: "What is the role of the Patent Information Centre (PIC) in Assam?",
      answer: "The Patent Information Centre (PIC) in Assam, operating under the Assam Science Technology & Environment Council (ASTEC), is the nodal agency for IPR activities in the state. It facilitates patent searches, assists in filing applications for patents, trademarks, GI, and designs, and conducts IPR awareness workshops across Assam."
    },
    {
      question: "How can I register a Geographical Indication (GI) for a traditional Assamese product?",
      answer: "To register a GI for products like Muga Silk or Joha Rice, an association of persons or producers must file an application with the GI Registry. The application should include a statement of case, historical proof of origin, and details of the unique qualities derived from the geographical region. PIC Assam often assists local communities in this process."
    },
    {
      question: "Is it mandatory to have a trademark for my business in Guwahati?",
      answer: "While not legally mandatory, registering a trademark is highly recommended for businesses in Guwahati and across Assam. It grants you exclusive rights to your brand name and logo, prevents others from using similar marks, and builds trust with customers in the competitive North East market."
    },
    {
      question: "What documents are required for filing a patent application in Assam?",
      answer: "Key documents include Form 1 (Application for Grant of Patent), Form 2 (Provisional or Complete Specification), drawings (if any), and proof of right to file. If you are filing through an agent, a Power of Attorney is also required. The application can be filed online or at the Patent Office branch in Kolkata, which serves the Assam region."
    },
    {
      question: "Can I copyright my Assamese literary or musical work?",
      answer: "Yes, original literary, dramatic, musical, and artistic works can be copyrighted. For Assamese songs (like Bihu folk music adaptations) or literature, copyright ensures that the creator has exclusive rights to reproduce, distribute, and perform the work. Registration serves as prima facie evidence of ownership in court."
    },
    {
      question: "How long does it take to get a trademark registered in Assam?",
      answer: "The trademark registration process typically takes 12 to 18 months if there are no objections or oppositions. However, once the application is filed, you can start using the 'TM' symbol. The 'R' symbol can be used only after the registration certificate is issued."
    },
    {
      question: "What is the validity of a GI tag for Assam products?",
      answer: "A Geographical Indication (GI) registration is valid for 10 years. It can be renewed indefinitely for subsequent periods of 10 years by paying the renewal fees. This ensures long-term protection for heritage products like Assam Orthodox Tea and Muga Silk."
    },
    {
      question: "Where is the High Court for IPR disputes in Assam?",
      answer: "IPR disputes in Assam typically fall under the jurisdiction of the Gauhati High Court. This includes cases related to trademark infringement, patent violations, and passing off actions. Commercial courts have also been notified to handle commercial disputes, including IPR matters, for faster resolution."
    },
    {
      question: "Does the Assam government provide any subsidies for IPR registration?",
      answer: "Yes, under various state and central schemes (like the MSME IPR scheme), the government provides reimbursement for IPR registration costs. Startups and MSMEs in Assam can avail of reduced filing fees and reimbursements for patents and trademarks to encourage innovation."
    },
    {
      question: "Can I file an IPR application online from Assam?",
      answer: "Absolutely. The Intellectual Property India (IP India) website allows for comprehensive online e-filing of trademarks, patents, designs, and copyrights. This makes the process accessible to applicants from Tinsukia to Dhubri without needing to visit the physical offices in Kolkata or Delhi."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "mainEntity": faqData.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <section id="faqs" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Frequently Asked Questions about IPR in Assam
        </h2>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {faq.question}
              </h3>
              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
