"use client";

import React from "react";
import Script from "next/script";

const faqs = [
  {
    question: "Is loan settlement legal in Pune?",
    answer: "Yes, loan settlement is a completely legal process in Pune, following RBI guidelines and the Indian Contract Act. It is a recognized method for resolving debt stress. Both nationalized and private banks in Pune participate in settlement negotiations, often facilitated through Lok Adalats organized by the Pune District Legal Services Authority."
  },
  {
    question: "How can IT professionals in Hinjewadi and Kharadi settle their loans?",
    answer: "IT professionals in Pune's tech hubs often face high credit card and personal loan debt. We specialize in helping tech employees negotiate settlements with banks like HDFC, ICICI, and SBI. We focus on demonstrating 'Proof of Hardship' to secure significant waivers on interest and penalties, allowing you to close debts for a fraction of the outstanding amount."
  },
  {
    question: "Are there Lok Adalats for loan settlement in Pune?",
    answer: "Yes, Lok Adalats are regularly held at the **Shivajinagar District Court** and other locations in Pune. These are excellent venues for fast-tracking loan settlements. An award passed in a Lok Adalat has the same legal standing as a civil court decree and is final, ensuring the bank cannot reopen the case later."
  },
  {
    question: "Can AMA Legal Solutions stop recovery agent harassment in Pune?",
    answer: "Absolutely. We use the Maharashtra Money-Lending (Regulation) Act and RBI's Fair Practice Code to protect you. Once we represent you, we send formal legal notices to the bank's zonal offices in Pune. This usually stops recovery agents from visiting your home in areas like Baner, Wakad, or Hadapsar."
  },
  {
    question: "Will settling a loan affect my CIBIL score in the long run?",
    answer: "While a settlement initially marks your CIBIL as 'Settled' (dropping the score), it is better than 'Written Off' or 'Suit Filed' status. It stops the cycle of late payment reporting. We provide a post-settlement guide to help you rebuild your credit score to 750+ within 18-24 months through disciplined financial behavior."
  },
  {
    question: "What is the role of the Banking Ombudsman in Pune?",
    answer: "The RBI Banking Ombudsman (Western Office) handles grievances against banks. If a bank in Pune is behaving unfairly or violating settlement norms, we can file a formal complaint with the Ombudsman to seek redressal and fair negotiation terms."
  },
  {
    question: "I have a loan from a Pune-based cooperative bank. Can you settle it?",
    answer: "Yes, Pune has a strong network of cooperative banks (e.g., Cosmos Bank, Saraswat Bank, Janata Sahakari Bank). We have extensive experience in negotiating with these institutions, understanding their specific recovery workflows, which often differ from nationalized banks."
  },
  {
    question: "Can business owners in Pimpri-Chinchwad (PCMC) apply for loan settlement?",
    answer: "Yes, MSME owners in the PCMC industrial belt often face debt stress due to payment delays. We help them negotiate settlements for both business and personal loans, ensuring their factory assets and personal property are protected under the law."
  },
  {
    question: "What happens if a bank files a civil suit in Shivajinagar Court?",
    answer: "If a suit is filed, we represent you in court. Usually, we attempt to move the matter to a Lok Adalat or mediate a settlement outside the court, which is often in the best interest of both the bank and the borrower to avoid long-term litigation."
  },
  {
    question: "What is the difference between Loan Settlement and Moratorium?",
    answer: "A moratorium is a temporary pause in payments, after which you must pay the full amount plus accumulated interest. Settlement is a permanent closure of the loan by paying a significantly reduced amount. Settlement is a permanent solution while moratorium is only a postponement."
  },
  {
    question: "Is there help for fake loan app harassment in Pune?",
    answer: "Yes, Pune's Cyber Crime Cell is very active. If you are being harassed by illegal loan apps through morphed photos or contact listing, we help you file a formal complaint and take legal action to stop the digital harassment while advising on the debt's legal validity."
  },
  {
    question: "Can I settle a home loan in Pune?",
    answer: "Home loan settlements (secured loans) are more complex because the property is collateral. However, if the bank is initiating SARFAESI proceedings, we can intervene to negotiate a settlement or find a structured exit that protects your equity in the property."
  },
  {
    question: "How much waiver can I expect on my personal loan in Pune?",
    answer: "Waivers typically range from 40% to 75% of the total outstanding amount, depending on the bank, the age of the NPA, and the strength of your 'Financial Hardship' documentation."
  },
  {
    question: "What is the One-Time Settlement (OTS) scheme in public sector banks?",
    answer: "Public sector banks like Bank of Maharashtra often release 'OTS Schemes' with fixed waiver percentages. We monitor these schemes and ensure your application is submitted during these 'Golden Windows' to maximize your savings."
  },
  {
    question: "Do I have to pay taxes on the amount waived during settlement?",
    answer: "As per current Indian tax laws, the waived amount on a personal loan is generally not considered taxable income for individual borrowers, but for business loans, it might have tax implications under Section 28(iv). We provide guidance on this based on your specific case."
  },
  {
    question: "Can a bank in Pune refuse to settle?",
    answer: "Legally, a bank is not 'obligated' to settle; it is a negotiation. However, if the account is an NPA and they realize that recovery through legal means will be difficult or more expensive, they almost always agree to a reasonable settlement."
  }
];

const faqSchema = {
  "@context": "https://schema.org",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

export default function FaqSection() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section id="faqs" className="scroll-mt-32">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions (Pune Edition)</h2>
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
    </>
  );
}
