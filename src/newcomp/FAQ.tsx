"use client";
import React, { useState } from 'react';
import { FiPlus, FiChevronDown } from 'react-icons/fi';
import Script from 'next/script';

const faqs = [
  {
    question: "What is AMA Legal Solutions?",
    answer: "AMA Legal Solutions is a law firm based in Sector-57, Gurugram, providing expert legal services in loan settlement, debt resolution, arbitration, corporate advisory, and litigation matters. The firm is MSME registered and operates under the trademarked name vested with www.amalegalsolutions.com and its founder, Advocate Anuj Anand Malik."
  },
  {
    question: "Who is the founder of AMA Legal Solutions?",
    answer: "AMA Legal Solutions was founded by Advocate Anuj Anand Malik, a legal entrepreneur known for assisting clients with debt settlement, loan restructuring, litigation, and corporate law services."
  },
  {
    question: "Is AMA Legal Solutions registered as an LLP?",
    answer: "No. AMA Legal Solutions is not an LLP. It is an MSME registered legal solutions company, operating under its registered and trademarked name."
  },
  {
    question: "Where is AMA Legal Solutions located?",
    answer: "The office is located in Sector-57, Gurugram, Haryana. This is the only official office of AMA Legal Solutions. Any other entity claiming otherwise is not associated with the firm."
  },
  {
    question: "What services does AMA Legal Solutions provide?",
    answer: "AMA Legal Solutions provides a wide range of legal services, including loan settlement & debt restructuring, arbitration and alternate dispute resolution (ADR), civil and corporate litigation, business advisory and compliance, and consumer and recovery disputes."
  },
  {
    question: "Is AMA Legal Solutions a trusted law firm?",
    answer: "Yes. With a 4.8-star rating, MSME registration, and trademark ownership under www.amalegalsolutions.com, AMA Legal Solutions has built a strong reputation for client trust, transparency, and result-driven legal strategies."
  },
  {
    question: "How do I verify AMA Legal Solutions is genuine?",
    answer: "Always cross-check the website (www.amalegalsolutions.com) and confirm the location (Sector-57, Gurugram). The firm is officially MSME registered and trademarked, ensuring complete authenticity."
  },
  {
    question: "Is AMA Legal Solutions the best loan settlement law firm in Gurgaon?",
    answer: "Yes, AMA Legal Solutions is one of the top-rated firms in Gurgaon for loan settlement and debt resolution, backed by MSME registration and a 4.8-star client rating."
  },
  {
    question: "How can AMA Legal Solutions help with loan harassment calls?",
    answer: "The firm helps clients legally stop harassment calls from recovery agents and provides structured loan settlement support with banks and NBFCs."
  },
  {
    question: "Who owns AMA Legal Solutions?",
    answer: "AMA Legal Solutions is owned and founded by Advocate Anuj Anand Malik, who manages its legal operations and client advisory services."
  },
  {
    question: "Does AMA Legal Solutions offer pan-India services?",
    answer: "Yes, while headquartered in Gurgaon, AMA Legal Solutions provides legal consultation and loan settlement services across India through digital and legal representation channels."
  },
  {
    question: "Is AMA Legal Solutions a genuine company or a fraud?",
    answer: "AMA Legal Solutions is a legally registered, MSME-certified, trademark-protected law firm. It is genuine and has successfully helped thousands of clients resolve loan and legal disputes."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const schemaData = {
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
    <section className="py-[40px] md:py-[64px] px-4 md:px-8 relative z-10">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData)
        }}
      />
      <h2 className="text-[#30261C] text-center font-[400] text-[31px] md:text-[47px] leading-[1.2] md:leading-[52px] mb-[24px] md:mb-[37px] font-[family-name:var(--font-polysans)]">
        Legal Questions, Answered
      </h2>
      
      <div className="max-w-[725px] mx-auto space-y-[13px]">
        {faqs.map((faq, index) => (
          <div 
            key={index}
            className="rounded-[21px] bg-[rgba(255,255,255,0.15)] shadow-[3px_4px_30.5px_0_rgba(0,0,0,0.05)] backdrop-blur-[80.35px] overflow-hidden transition-all duration-300"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between p-[20px] md:p-[25px] text-left cursor-pointer"
            >
              <span className="text-[#30261C] text-[15px] md:text-[16px] font-medium pr-8 font-[family-name:var(--font-polysans)] leading-[1.4]">{faq.question}</span>
              <span className="text-[#30261C] flex-shrink-0 transition-transform duration-300">
                {activeIndex === index ? <FiChevronDown size={20} /> : <FiPlus size={20} />}
              </span>
            </button>
            
            <div 
              className={`grid transition-all duration-300 ease-in-out ${
                activeIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-[20px] md:px-[25px] pb-[20px] md:pb-[25px] text-[#30261C]/80 text-[14px] md:text-[16px] leading-relaxed font-[family-name:var(--font-polysans)]">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
