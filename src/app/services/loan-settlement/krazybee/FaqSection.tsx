"use client";

import React, { useState } from "react";
import { FaChevronDown, FaChevronUp, FaQuestionCircle } from "react-icons/fa";
import { faqs } from "./faqs";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 px-4 md:px-8 rounded-2xl shadow-xl border border-gray-100">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-orange-100 rounded-full mb-4">
            <FaQuestionCircle className="text-3xl text-[#F57C00]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Common queries about settling loans with KrazyBee / KreditBee
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border rounded-xl transition-all duration-300 ${
                openIndex === index
                  ? "border-[#F57C00] bg-orange-50 shadow-md"
                  : "border-gray-200 hover:border-orange-200"
              }`}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
              >
                <span
                  className={`text-lg font-semibold ${
                    openIndex === index ? "text-[#F57C00]" : "text-gray-800"
                  }`}
                >
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <FaChevronUp className="text-[#F57C00] flex-shrink-0 ml-4" />
                ) : (
                  <FaChevronDown className="text-gray-400 flex-shrink-0 ml-4" />
                )}
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-orange-100">
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
