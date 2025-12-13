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
    <section className="bg-[#E3F2FD] py-16 px-4 md:px-8 rounded-3xl border border-[#BBDEFB]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-[#0277BD] font-bold tracking-wider uppercase text-sm bg-white px-4 py-1 rounded-full border border-[#0277BD]">
            L&T Finance FAQs
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">
            Common Questions
          </h2>
          <p className="text-lg text-gray-700">
            Expert answers on settling Two-Wheeler, Tractor, and Personal Loans with L&T Finance.
          </p>
        </div>

        <div className="grid gap-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl border transition-all duration-300 ${
                openIndex === index
                  ? "border-[#0277BD] shadow-md"
                  : "border-gray-200 hover:border-blue-300"
              }`}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
              >
                <span
                  className={`text-lg font-semibold transition-colors duration-300 ${
                    openIndex === index ? "text-[#0277BD]" : "text-gray-800"
                  }`}
                >
                  {faq.question}
                </span>
                <div className={`ml-4 flex-shrink-0 text-[#0277BD] transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}>
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
