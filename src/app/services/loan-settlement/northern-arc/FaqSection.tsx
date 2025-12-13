"use client";

import React, { useState } from "react";
import { FaPlus, FaMinus, FaQuestion } from "react-icons/fa";
import { faqs } from "./faqs";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-br from-slate-50 to-teal-50 py-20 px-4 md:px-8 rounded-3xl relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-teal-600 font-bold tracking-wider uppercase text-sm">Got Questions?</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-3 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Everything you need to know about settling your loan with Northern Arc Capital.
          </p>
        </div>

        <div className="grid gap-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl transition-all duration-300 overflow-hidden ${
                openIndex === index
                  ? "shadow-lg ring-2 ring-teal-500 ring-opacity-50"
                  : "shadow-sm hover:shadow-md border border-slate-100"
              }`}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none group"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
                    openIndex === index ? "bg-teal-100 text-teal-600" : "bg-slate-100 text-slate-400 group-hover:bg-teal-50 group-hover:text-teal-500"
                  }`}>
                    <FaQuestion className="text-sm" />
                  </div>
                  <span
                    className={`text-lg font-bold transition-colors duration-300 ${
                      openIndex === index ? "text-teal-700" : "text-slate-700 group-hover:text-teal-700"
                    }`}
                  >
                    {faq.question}
                  </span>
                </div>
                <div className={`transform transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}>
                  {openIndex === index ? (
                    <FaMinus className="text-teal-500" />
                  ) : (
                    <FaPlus className="text-slate-400 group-hover:text-teal-500" />
                  )}
                </div>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-6 pt-0 pl-20 text-slate-600 leading-relaxed">
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
