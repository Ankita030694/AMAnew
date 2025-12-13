"use client";

import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { faqs } from "./faqs";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#FFEBEE] py-16 px-4 md:px-8 rounded-3xl border border-[#FFCDD2]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-[#D32F2F] font-bold tracking-wider uppercase text-sm bg-white px-4 py-1 rounded-full border border-[#D32F2F]">
            Stashfin / Akara Capital FAQs
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-700">
            Get clarity on settling your Stashfin credit line and personal loans.
          </p>
        </div>

        <div className="grid gap-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl border transition-all duration-300 ${
                openIndex === index
                  ? "border-[#D32F2F] shadow-md"
                  : "border-gray-200 hover:border-red-300"
              }`}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
              >
                <span
                  className={`text-lg font-semibold transition-colors duration-300 ${
                    openIndex === index ? "text-[#D32F2F]" : "text-gray-800"
                  }`}
                >
                  {faq.question}
                </span>
                <div className={`ml-4 flex-shrink-0 text-[#D32F2F] transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}>
                  <FaChevronDown />
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100 mt-2">
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
