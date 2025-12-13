"use client";

import React, { useState } from "react";
import { faqs } from "./faqs";
import { FaChevronDown, FaChevronUp, FaQuestionCircle } from "react-icons/fa";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
      <div className="bg-[#E31E24] p-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-2 flex items-center justify-center gap-3">
          <FaQuestionCircle className="text-white/90" />
          Frequently Asked Questions
        </h2>
        <p className="text-white/90">
          Expert Answers on Poonawalla Fincorp & Digital Loan Settlements
        </p>
      </div>
      
      <div className="p-6 md:p-10">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border border-gray-200 rounded-xl transition-all duration-300 ${
                openIndex === index ? "bg-red-50 border-red-200 shadow-md" : "hover:bg-gray-50"
              }`}
            >
              <button
                className="w-full flex justify-between items-center p-5 text-left focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                <span className={`font-bold text-lg ${openIndex === index ? "text-[#E31E24]" : "text-gray-800"}`}>
                  {faq.question}
                </span>
                <span className={`ml-4 p-2 rounded-full transition-colors ${openIndex === index ? "bg-[#E31E24] text-white" : "bg-gray-100 text-gray-500"}`}>
                  {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-5 pt-0 text-gray-600 leading-relaxed border-t border-red-100/50">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
