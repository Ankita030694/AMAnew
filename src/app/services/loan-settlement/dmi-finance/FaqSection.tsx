"use client";

import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { faqs } from "./faqs";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 px-4 md:px-8 rounded-2xl shadow-sm border border-gray-100">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-red-600 font-bold tracking-wider uppercase text-sm">Expert Answers</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Clarify your doubts about settling loans with DMI Finance.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border-b border-gray-200 last:border-0 transition-all duration-300 ${
                openIndex === index ? "bg-red-50/50 rounded-lg" : ""
              }`}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-start p-6 text-left focus:outline-none group"
              >
                <span
                  className={`text-lg font-semibold pr-8 transition-colors duration-300 ${
                    openIndex === index ? "text-red-700" : "text-gray-800 group-hover:text-red-600"
                  }`}
                >
                  {faq.question}
                </span>
                <div className={`mt-1 flex-shrink-0 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}>
                  {openIndex === index ? (
                    <FaMinus className="text-red-600" />
                  ) : (
                    <FaPlus className="text-gray-400 group-hover:text-red-600" />
                  )}
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-6 pt-0 text-gray-600 leading-relaxed">
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
