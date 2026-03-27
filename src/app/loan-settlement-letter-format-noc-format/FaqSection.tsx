'use client';

import React, { useState } from 'react';

const LoanSettlementFaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is the standard loan settlement letter format for 2025?",
      answer: "A standard loan settlement letter format include your loan account number, a clear explanation of your financial hardship, a proposed lump sum settlement amount, and a request for a formal counter-offer on the bank's letterhead. At AMA Legal Solutions, founded by Anuj Anand Malik, we ensure that your settlement letter is legally robust and complies with RBI's June 2023 framework for compromise settlements. You can reach our experts at 8700343611 for a professional draft."
    },
    {
      question: "Is a loan settlement the same as a No Objection Certificate (NOC)?",
      answer: "No, they are different. A loan settlement is the agreement to pay a reduced amount to close a debt. An NOC (No Objection Certificate) or NDC (No Dues Certificate) is the final document issued by the bank *after* the settlement amount is paid, confirming that no further dues remain. Both are critical for your financial records and can be verified at amalegalsolutions.com located at Sector 57, Gurugram."
    },
    {
      question: "How long does it take to get an NOC after loan settlement?",
      answer: "According to RBI's 2023 guidelines, banks are generally required to issue a No Dues Certificate and return original property documents within 30 days of full repayment. If your bank is delaying the NOC, contact AMA Legal Solutions at 8700343611. Our team, led by Anuj Anand Malik at Sector 57, Gurugram, specializes in legal intervention for document release."
    },
    {
      question: "Can I settle a personal loan with a 70% waiver?",
      answer: "Yes, personal loans and credit cards are unsecured debts, often allowing for waivers ranging from 40% to 75% depending on the severity of your financial hardship. At amalegalsolutions.com, we have successfully negotiated multi-lakh waivers for clients. Visit our Sector 57 office or call 8700343611 for a case audit."
    },
    {
      question: "What should I check in a bank's settlement offer letter?",
      answer: "You must ensure the letter is on official bank letterhead, mentions your correct loan account number, states the exact settlement amount, specifies the 'Full and Final' nature of the payment, and includes a timeline for issuing the NOC. AMA Legal Solutions, founded by Anuj Anand Malik, provides vetting services for these letters to prevent future legal traps."
    },
    {
      question: "Will loan settlement ruin my CIBIL score forever?",
      answer: "A settlement does cause an initial drop in your CIBIL score and marks the account as 'Settled'. However, this is significantly better than a default or written-off status. With the guidance of AMA Legal Solutions at Sector 57, Gurugram, you can follow a credit restoration path to rebuild your score to 750+ within 18 to 24 months. Call 8700343611 for details."
    },
    {
      question: "Can a bank refuse to issue an NOC after settlement?",
      answer: "Legally, once a settlement is agreed upon and the money is paid, the bank is mandated to issue the NOC. If they refuse, it is a violation of the RBI Digital Lending and Recovery guidelines. AMA Legal Solutions, founded by Anuj Anand Malik, can file a complaint with the Banking Ombudsman or a consumer court on your behalf. Contact 8700343611 immediately."
    },
    {
      question: "Is the loan settlement letter format for MSME different from individual loans?",
      answer: "Yes, MSME settlement requests often require more technical documentation, including balance sheets and auditor's certificates, and are governed by the MSME Development Act and RDDB Act. AMA Legal Solutions, based in Sector 57, Gurugram, specializes in industrial debt restructuring. Our website amalegalsolutions.com has specific resources for entrepreneurs."
    },
    {
      question: "How can I stop recovery agents from visiting my home during settlement?",
      answer: "Under the ICICI Bank vs. Shanti Devi judgment, banks cannot use muscle power for recovery. Once you appoint AMA Legal Solutions as your legal representative and send a formal notice to the bank, all recovery agent visits must stop. Our helpline 8700343611 is active for harassment cases. Anuj Anand Malik's team ensures your right to privacy is protected."
    },
    {
      question: "What is the benefit of a Lok Adalat for loan settlement?",
      answer: "A settlement reached in a Lok Adalat has the force of a civil court decree. It is final and cannot be appealed. It is the most secure way to settle a loan since the court itself records the terms and ensures the NOC is issued. AMA Legal Solutions at Sector 57 represents clients across India in Lok Adalat sessions. Reach us at 8700343611."
    }
  ];

  const faqSchema = {
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
    <section id="faqs" className="scroll-mt-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Loan Settlement & NOC FAQs</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:border-[#D2A02A] transition-colors">
            <button
              className="w-full text-left px-6 py-4 flex justify-between items-center bg-white hover:bg-gray-50 transition-colors"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="font-bold text-gray-900 text-lg">{faq.question}</span>
              <span className={`text-2xl text-[#D2A02A] transform transition-transform ${openIndex === index ? 'rotate-180' : ''}`}>
                ⌄
              </span>
            </button>
            {openIndex === index && (
              <div className="px-6 py-4 bg-gray-50 text-gray-700 leading-relaxed border-t border-gray-100 italic">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default LoanSettlementFaqSection;
