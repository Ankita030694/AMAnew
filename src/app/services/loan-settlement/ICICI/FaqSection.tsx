'use client';

import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const faqs = [
  {
    question: "Does ICICI Bank accept loan settlement proposals?",
    answer: "Yes, ICICI Bank does consider loan settlement proposals (One Time Settlement or OTS) from borrowers who are facing genuine financial hardship. This is typically an option when a loan has become a Non-Performing Asset (NPA) or is on the verge of default due to reasons like job loss, medical emergencies, or business failure. However, settlement is at the bank's discretion and is not a guaranteed right."
  },
  {
    question: "How much discount can I get in an ICICI loan settlement?",
    answer: "The settlement amount varies significantly based on your specific case, the age of the default, and your negotiation. typically, settlements can range anywhere from 30% to 60% waiver on the total outstanding dues. The bank usually tries to recover at least the principal amount, but in severe hardship cases, they may waive off a portion of the principal along with the interest and penalties."
  },
  {
    question: "Will settling my ICICI loan affect my CIBIL score?",
    answer: "Yes, absolutely. When you settle a loan, ICICI Bank will report the account status as 'Settled' to credit bureaus like CIBIL. This indicates that the loan was not paid in full. A 'Settled' status can lower your credit score by 75-100 points or more and remains on your credit report for about 7 years, making it difficult to get new unsecured loans in the near future."
  },
  {
    question: "What is the process to get a settlement letter from ICICI Bank?",
    answer: "The process involves submitting a formal request proving your financial hardship, followed by rounds of negotiation with the bank's recovery department. Once an amount is agreed upon, ICICI Bank will issue a formal 'Settlement Letter' stating the amount to be paid, the deadline, and the terms of closure. You should never make a payment without this official letter."
  },
  {
    question: "Can I settle my ICICI credit card dues also?",
    answer: "Yes, the settlement process applies to both personal loans and credit card outstanding dues. In fact, credit card debts often have higher interest rates, making them a priority for settlement if you are in a debt trap. The negotiation process is similar to that of personal loans."
  },
  {
    question: "Why should I hire a lawyer for ICICI loan settlement?",
    answer: "Hiring a lawyer protects you from harassment by recovery agents, as all communication is directed through your legal counsel. Furthermore, lawyers understand the legal nuances of banking codes and RBI guidelines, enabling them to negotiate better terms, ensure the settlement letter is legally sound, and prevent future legal complications."
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="scroll-mt-32">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="border border-gray-200 rounded-xl overflow-hidden bg-white hover:shadow-md transition-shadow"
          >
            <button
              className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
              onClick={() => toggleFaq(index)}
            >
              <span className="text-lg font-semibold text-gray-800 pr-8">{faq.question}</span>
              {openIndex === index ? (
                <FaChevronUp className="text-[#D2A02A] flex-shrink-0" />
              ) : (
                <FaChevronDown className="text-gray-400 flex-shrink-0" />
              )}
            </button>
            {openIndex === index && (
              <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
