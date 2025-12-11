"use client";

import React from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { faqs } from "./faqs";

const FaqSection = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-12 rounded-2xl shadow-sm border border-gray-100">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-gray-500 mb-10">
          Common queries about Hero FinCorp loan settlement
        </p>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border rounded-xl transition-all duration-300 ${
                openIndex === index
                  ? "border-[#00529B] bg-blue-50 shadow-md"
                  : "border-gray-200 hover:border-blue-200"
              }`}
            >
              <button
                className="w-full flex justify-between items-center p-5 text-left focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                <span
                  className={`font-semibold text-lg ${
                    openIndex === index ? "text-[#00529B]" : "text-gray-700"
                  }`}
                >
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <FaChevronUp className="text-[#00529B]" />
                ) : (
                  <FaChevronDown className="text-gray-400" />
                )}
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-5 pt-0 text-gray-600 leading-relaxed border-t border-blue-100/50">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
