"use client";

import React from "react";

const faqs = [
  {
    question: "What is the HDFC Bank loan settlement process?",
    answer: "The HDFC Bank loan settlement process, often called a One Time Settlement (OTS), is a provision for borrowers who are genuinely unable to repay their outstanding dues due to financial hardship. In this process, you negotiate with the bank to pay a reduced lump sum amount to close the loan account. This is typically an option when a loan has turned into a Non-Performing Asset (NPA) or is on the verge of default. The bank agrees to waive a portion of the interest and penalties, and sometimes even a part of the principal, to recover the remaining amount quickly."
  },
  {
    question: "How can I initiate a settlement with HDFC Bank?",
    answer: "To initiate a settlement, you must first communicate your financial inability to pay to the bank. It is highly recommended to do this through a legal representative to ensure your rights are protected. You will need to submit a formal settlement proposal letter along with documents proving your financial hardship (like job loss proof, medical records, etc.). HDFC Bank will review your case and may offer a settlement amount. Negotiation follows until a mutually agreed figure is reached."
  },
  {
    question: "Will settling my HDFC loan affect my CIBIL score?",
    answer: "Yes, settling a loan will negatively impact your CIBIL score. When you settle a loan, HDFC Bank will report the account status as 'Settled' to credit bureaus. This indicates that the loan was not paid in full. Your score may drop by 50-100 points or more. However, a 'Settled' status is generally considered better than a 'Written Off' status, which implies a total loss for the bank. You can rebuild your score over time with disciplined financial behavior."
  },
  {
    question: "Can I settle my HDFC credit card bill?",
    answer: "Yes, HDFC credit card bills can be settled. In fact, credit card debts are among the most common types of unsecured debts settled. Due to the high interest rates on credit cards, the outstanding amount can grow rapidly. If you are stuck in a debt trap, we can help you negotiate a settlement for your HDFC credit card dues, often achieving a significant reduction in the total payable amount."
  },
  {
    question: "What is the minimum settlement amount HDFC Bank accepts?",
    answer: "There is no fixed minimum percentage as every case is unique. The settlement amount depends on factors like the type of loan (secured vs. unsecured), the age of the default, your current income, and the bank's internal policies at the time. Generally, settlements can range from 30% to 50% of the outstanding amount, but in some cases of severe hardship or old defaults, it can be even lower. Our goal is to negotiate the lowest possible amount for you."
  },
  {
    question: "Do I need a lawyer for HDFC loan settlement?",
    answer: "While you can technically approach the bank yourself, hiring a lawyer is strongly advised. Banks have legal teams and recovery agents who are trained to extract the maximum amount from you. A lawyer acts as your shield, handling all communication, stopping harassment, and ensuring that the settlement terms are fair and legally binding. We also ensure you get a proper 'No Dues Certificate' after payment."
  },
  {
    question: "How long does the HDFC settlement process take?",
    answer: "The timeline varies, but typically it takes between 3 to 6 months to finalize a settlement. This includes the time for document verification, multiple rounds of negotiation, and obtaining internal approvals from HDFC Bank's credit committee. We work efficiently to expedite this process while ensuring no steps are skipped."
  },
  {
    question: "Can HDFC Bank take legal action against me if I don't pay?",
    answer: "Yes, banks have the right to initiate legal proceedings for recovery of dues. This can include filing cases under the SARFAESI Act (for secured loans), filing a civil suit, or initiating arbitration. For bounced cheques, they can file a criminal case under Section 138 of the Negotiable Instruments Act. Initiating a settlement process often puts a pause on these legal actions as it shows your intent to resolve the matter."
  },
  {
    question: "What documents do I need for HDFC loan settlement?",
    answer: "You will primarily need documents that prove your identity, your loan details, and your financial hardship. This includes your KYC documents (Aadhar, PAN), loan account statements, and evidence of income loss (termination letter, salary slips showing reduced pay, medical bills, bank statements). We help you compile these to build a strong case."
  },
  {
    question: "What is a 'No Dues Certificate' and why is it important?",
    answer: "A 'No Dues Certificate' (NDC) or 'No Objection Certificate' (NOC) is a formal document issued by HDFC Bank after you have paid the agreed settlement amount. It serves as proof that the loan account is closed and you have no further liability towards the bank. You must insist on receiving this document to prevent any future claims or legal issues regarding the same loan."
  }
];

const FaqSection = () => {
  return (
    <section id="faqs" className="scroll-mt-32">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
              <span className="text-[#D2A02A] mr-3">Q.</span>
              {faq.question}
            </h3>
            <p className="text-gray-700 leading-relaxed pl-8">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
