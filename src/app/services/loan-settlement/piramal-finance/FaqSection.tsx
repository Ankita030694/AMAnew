"use client";

import React, { useState } from "react";
import { FaPlus, FaMinus, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { faqs } from "./faqs";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#FFF5F0] py-16 px-4 md:px-8 rounded-3xl border border-[#FFDCC7]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-[#D84315] font-bold tracking-wider uppercase text-sm bg-[#FFDCC7] px-4 py-1 rounded-full">
            Expert Guidance
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mt-4 mb-4">
            Common Questions
          </h2>
          <p className="text-lg text-gray-600">
            Answers to your queries about settling loans with Piramal Finance.
          </p>
        </div>

        <div className="grid gap-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl border transition-all duration-300 ${
                openIndex === index
                  ? "border-[#D84315] shadow-md"
                  : "border-gray-200 hover:border-[#FFAB91]"
              }`}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
              >
                <span
                  className={`text-lg font-semibold transition-colors duration-300 ${
                    openIndex === index ? "text-[#D84315]" : "text-gray-800"
                  }`}
                >
                  {faq.question}
                </span>
                <div className={`ml-4 flex-shrink-0 text-[#D84315] transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}>
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
