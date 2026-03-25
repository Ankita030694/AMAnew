"use client";

import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import { useState, useEffect } from "react";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import GenericStatesGrid from "@/components/GenericStatesGrid";

// FAQ data
const faqs = [
  {
    question: "How to settle a loan with a bank in India legally?",
    answer: "The legal process to settle a loan with a bank in India involves approaching the lender with a formal request for a One-Time Settlement (OTS). This is usually done when the borrower or debtor is facing extreme financial hardship. Legally, the bank enters into a compromise agreement where they waive off a portion of the interest and penalties in exchange for a lump sum payment. It is vital to get a formal settlement letter from the bank's authorized officer before making any payments."
  },
  {
    question: "What are the latest RBI guidelines for 2024-2025 on loan settlement?",
    answer: "For 2024-2025, the RBI has emphasized 'Compromise Settlements' and 'Technical Write-offs' to clean up bank balance sheets. Key guidelines include the shift from 'penal interest' to 'penal charges' (effective April 2024), ensuring penalties are not capitalized. The RBI also mandates that banks must have board-approved policies for OTS and must provide a 'cooling-off' period of 12 months for borrowers who settle, before they can take new loans."
  },
  {
    question: "Can I settle my loan if the recovery agents are harassing me?",
    answer: "Yes, you can initiate settlement even during recovery. According to RBI rules, recovery agents cannot engage in harassment, call at odd hours (only between 8 AM and 7 PM), or visit without notice. If harassment occurs, you should report it to the bank's Nodal Officer and the RBI Ombudsman. Hiring a legal expert can stop this harassment as all communications are then routed through your lawyer."
  },
  {
    question: "Will settling a loan affect my CIBIL score permanently?",
    answer: "Settling a loan does not affect your CIBIL score permanently, but it causes a significant immediate drop (75 to 150 points). The account status will be marked as 'Settled' in your credit report, which makes getting new loans difficult for the next 2 to 5 years. However, with a disciplined credit rebuilding plan (like using secured credit cards), your score can recover over time."
  },
  {
    question: "What is the difference between Loan Closing and Loan Settlement?",
    answer: "Loan Closing occurs when you pay the entire principal, interest, and all charges as per the original agreement; this results in a 'Closed' status on your credit report. Loan Settlement is a compromise where you pay less than the total outstanding amount. While settlement ends the debt, it leaves a 'Settled' remark on your report, identifying you as a borrower who did not pay the full amount."
  },
  {
    question: "How much discount can I expect in a bank loan settlement?",
    answer: "The discount percentage depends on the age of the NPA and the loan type. For unsecured personal loans or credit cards overdue for more than 180 days, you can often negotiate a waiver of 30% to 70% on the total dues. For secured loans, the waiver is much lower (usually 10% to 25%) because the bank has collateral. The older the debt, the higher the potential discount."
  },
  {
    question: "Is it mandatory to have a lawyer for a loan settlement?",
    answer: "While not mandatory by law, having a legal expert is highly recommended. Lawyers understand the bank's internal recovery grids, the SARFAESI Act, and RBI guidelines. They can negotiate from a position of power, ensure the settlement letter is legally watertight, and protect you from fraudulent 'settlement letters' often issued by rogue recovery agencies."
  },
  {
    question: "What happens if I cannot pay the settled amount in one go?",
    answer: "If you cannot pay the lump sum, you can negotiate for a 'Short Term Payment Plan' (STPP). Banks may allow you to pay the settled amount in 2 to 4 monthly installments. However, once you miss an installment of a settled agreement, the settlement usually becomes null and void, and the bank restores the original outstanding amount."
  },
  {
    question: "What is a 'Settlement Letter' and why is it important?",
    answer: "A Settlement Letter is the only legal proof that the bank has agreed to accept a lower amount as full and final payment. It must have the bank's letterhead, the correct loan account number, the agreed amount, the payment deadline, and the signature of a senior officer. Never pay a single rupee toward a settlement without having this letter in your possession (physical or via official bank email)."
  },
  {
    question: "Can I settle a business loan under MSME schemes?",
    answer: "Yes, the RBI has specific OTS schemes for MSME borrowers. For loans up to a certain limit (often up to 25 crore), there are non-discretionary, non-discriminatory OTS policies. These are designed to help small business owners who have suffered business losses to close their debts and restart their ventures without the weight of past liabilities."
  }
];

// Rich Results Schemas
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.amalegalsolutions.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "How to Settle Loan with Bank",
      "item": "https://www.amalegalsolutions.com/how-to-settle-loan-with-bank"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How to Settle Loan with Bank in India (2025 Guide): Legal Process & RBI Rules",
  "description": "Master the legal process of loan settlement in India with our comprehensive 2025 guide. Learn about RBI guidelines, OTS schemes, and borrower rights to settle your debts.",
  "image": "https://www.amalegalsolutions.com/newAssets/legal-hero.jpg",
  "author": {
    "@type": "Organization",
    "name": "AMA Legal Solutions"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(f => ({
    "@type": "Question",
    "name": f.question,
    "acceptedAnswer": { "@type": "Answer", "text": f.answer }
  }))
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Loan Settlement Services",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "12450"
  }
};

// Main Page Component
export default function HowToSettleLoanClient() {
  
  const tocSections = [
    { id: "intro", title: "Introduction" },
    { id: "legal-process", title: "Legal Process" },
    { id: "rbi-rules", title: "RBI Guidelines" },
    { id: "rights", title: "Borrower Rights" },
    { id: "hardship", title: "Hardship Proof" },
    { id: "negotiation", title: "Negotiation Tips" },
    { id: "letter-validation", title: "Letter Validation" },
    { id: "cibil-recovery", title: "CIBIL Recovery" },
    { id: "reviews", title: "Client Reviews" },
    { id: "locations", title: "Coverage Areas" },
    { id: "faqs", title: "FAQs" }
  ];

  const breadcrumbItems = [
    { label: "How to Settle Loan with Bank", href: "/how-to-settle-loan-with-bank" },
  ];

  const banks = [
    { name: "SBI", href: "/services/loan-settlement/sbi-bank" },
    { name: "HDFC", href: "/services/loan-settlement/hdfc-bank" },
    { name: "ICICI", href: "/services/loan-settlement/icici-bank" },
    { name: "Kotak Mahindra", href: "/services/loan-settlement/kotak-mahindra" },
    { name: "IDFC", href: "/services/loan-settlement/idfc-bank" },
    { name: "Yes Bank", href: "/services/loan-settlement/yes-bank" },
    { name: "Bajaj Finserv", href: "/services/loan-settlement/bajaj-finserv" },
    { name: "Axis Bank", href: "/services/loan-settlement/axis-bank" },
    { name: "Bank of Baroda", href: "/services/loan-settlement/bank-of-baroda" },
    { name: "Hero Fincorp", href: "/services/loan-settlement/hero-fincorp" },
    { name: "Aditya Birla", href: "/services/loan-settlement/aditya-birla" },
    { name: "Poonawalla Fincorp", href: "/services/loan-settlement/poonawalla-fincorp" },
    { name: "Tata Capital", href: "/services/loan-settlement/tata-capital" },
    { name: "Federal Bank", href: "/services/loan-settlement/federal-bank" },
    { name: "PayU Finance", href: "/services/loan-settlement/payu-finance" },
    { name: "KrazyBee", href: "/services/loan-settlement/krazybee" },
    { name: "AU Small Finance Bank", href: "/services/loan-settlement/au-small-finance" },
    { name: "Northern Arc", href: "/services/loan-settlement/northern-arc" },
    { name: "DMI Finance", href: "/services/loan-settlement/dmi-finance" },
    { name: "Piramal Finance", href: "/services/loan-settlement/piramal-finance" },
    { name: "DBS Bank", href: "/services/loan-settlement/dbs-bank" },
    { name: "South Indian Bank", href: "/services/loan-settlement/south-indian-bank" },
    { name: "Si Creva (Kissht/Ring)", href: "/services/loan-settlement/si-creva" },
    { name: "Stashfin", href: "/services/loan-settlement/stashfin" },
    { name: "L&T Finance", href: "/services/loan-settlement/l-and-t-finance" },
    { name: "American Express", href: "/services/loan-settlement/american-express" },
    { name: "Standard Chartered", href: "/services/loan-settlement/standard-chartered" },
    { name: "True Credits (TrueBalance)", href: "/services/loan-settlement/true-credits" },
    { name: "Moneyview", href: "/services/loan-settlement/moneyview" },
    { name: "Vivriti Capital", href: "/services/loan-settlement/vivriti-capital" },
    { name: "Kisetsu Saison Finance", href: "/services/loan-settlement/kisetsu-saison-finance" },
    { name: "IndusInd Bank", href: "/services/loan-settlement/indusind-bank" },
    { name: "SMFG India Credit", href: "/services/loan-settlement/smfg-india-credit" },
    { name: "Fibe (EarlySalary)", href: "/services/loan-settlement/fibe" }
  ];

  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
        
        {/* Hero Section */}
        <div className="relative bg-[#1a202c] text-white overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
          <div className="absolute inset-0 bg-[url('/newAssets/hero-bg.jpg')] bg-cover bg-center opacity-30 z-0"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#D2A02A]/20 blur-[120px] rounded-full z-15"></div>
          <div className="relative z-20 container mx-auto px-4 py-16 md:py-36 text-center">
            <h1 className="text-3xl md:text-7xl font-bold mb-6 md:mb-8 leading-tight mt-10">
              Mastering the <span className="text-[#D2A02A]">Loan Settlement</span> Process in India
            </h1>
            <p className="text-base md:text-2xl mb-8 md:mb-12 max-w-4xl mx-auto text-gray-200 font-light">
              Are you trapped in a debt cycle? Learn how to legally settle your loans with banks using our comprehensive 2025 guide. Shield yourself from harassment and reclaim your financial life today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button 
                onClick={() => document.getElementById('intro')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-105 shadow-xl text-lg"
              >
                Start Your Journey to Freedom
              </button>
              <Link href="tel:+918700343611" className="bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold py-4 px-12 rounded-full hover:bg-white/20 transition-all text-lg">
                Call Expert Counsel
              </Link>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-[1600px] py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start mt-4">
            {/* Left Column: TOC (Desktop) */}
            <div className="hidden lg:block sticky top-24">
              <TableOfContents sections={tocSections} orientation="vertical" />
            </div>

            {/* Middle Column: Main Content */}
            <div className="min-w-0">
               {/* TOC (Mobile) */}
               <div className="lg:hidden mb-6 sticky top-20 z-10">
                  <TableOfContents sections={tocSections} />
               </div>

               <div className="max-w-4xl mx-auto bg-white p-4 md:p-10 rounded-[40px] shadow-sm space-y-10 md:space-y-16">
                  
                  <section id="intro" className="scroll-mt-32">
                     <h2 className="text-xl md:text-4xl font-black text-gray-950 mb-8 leading-tight">Navigating the Modern Landscape of Debt Settlement</h2>
                     <p className="text-xs md:text-base leading-relaxed text-gray-700 mb-6">
                        In the post-pandemic financial climate of India, <strong>how to settle a loan with a bank</strong> has become one of the most searched queries by honest borrowers facing genuine crises. The burden of compounding interest, especially on unsecured products like personal loans and credit card dues, can quickly escalate a manageable debt into a life-altering liability. 
                     </p>
                     <p className="text-xs md:text-base leading-relaxed text-gray-700 mb-6">
                        At AMA Legal Solutions, we believe that debt is a financial problem that deserves a legal and professional solution, not a moral failure that should lead to psychological distress. This guide is designed to empower you with the knowledge of RBI guidelines, the nuances of the SARFAESI ACT, and the strategic art of negotiation. Our goal is to move you from the 'Debt Trap' to 'Debt Freedom' by following a path that is both legally sound and financially viable.
                     </p>
                     <div className="bg-[#D2A02A]/5 p-8 rounded-3xl border border-[#D2A02A]/20">
                        <h4 className="font-bold text-gray-950 mb-4 text-xl">The Core Philosophy of Settlement</h4>
                        <p className="text-gray-600 text-lg italic leading-relaxed">
                           "A loan settlement is not about running away from your responsibilities; it is about reaching a compromise that reflects your current financial reality while allowing the bank to recover a fair portion of their dues without a long, expensive legal battle."
                        </p>
                     </div>
                  </section>

                  <section id="legal-process" className="scroll-mt-32">
                     <h2 className="text-xl md:text-4xl font-black text-gray-900 mb-10">The Step-by-Step Legal Process (2025 Edition)</h2>
                     <div className="space-y-16">
                        {[
                          { title: "Identification of NPA Status", desc: "Legally, a settlement process gains momentum after your loan account is classified as a Non-Performing Asset (NPA). This happens after 90 days of non-payment. During this phase, you must monitor your account's classification to understand which recovery grid the bank's officers are using." },
                          { title: "Computation of Settlement Potential", desc: "Gather your latest Statements of Account. You must calculate the 'Target Settlement Amount' based on your principal outstanding. Ignore the astronomical late fees and penal interest for a moment, as these are the first to be waived in an OTS scheme." },
                          { title: "The Formal Representation Letter", desc: "This is a critical legal document. It shouldn't just be an email. It should be a formal 'Proclamation of Hardship' sent via registered post to the Branch Manager and the Nodal Officer. It must detail the reasons for default, such as job loss, medical catastrophe, or business failure." },
                          { title: "Multi-Round Negotiation", desc: "The bank will initially reject your offer or propose a very high figure. This is a standard tactic. You must enter a structured negotiation phase. This is where having a legal representative is vital; lawyers can use prior cases and staff accountability rules to push for a lower figure." },
                          { title: "Obtainment of the Approval Letter", desc: "Never make a payment based on verbal promises. Once the amount is agreed, the bank must issue an 'OTS Approval' or 'Settlement Letter' on official letterhead. It must clearly state the waiver amount and the payment schedule." }
                        ].map((item, i) => (
                          <div key={i} className="group relative pl-12 md:pl-20">
                             <span className="absolute left-0 top-0 text-6xl md:text-8xl font-black text-gray-100 group-hover:text-[#D2A02A]/10 transition-colors uppercase select-none">{i+1}</span>
                             <div className="relative z-10">
                                 <h4 className="text-lg md:text-2xl font-black mb-4 text-gray-900">{item.title}</h4>
                                 <p className="text-gray-600 text-sm md:text-lg leading-relaxed">{item.desc}</p>
                             </div>
                          </div>
                        ))}
                     </div>
                  </section>

                  <section id="rbi-rules" className="scroll-mt-32 pt-10 border-t border-gray-100">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                       <div className="w-full md:w-1/2">
                          <h2 className="text-xl md:text-4xl font-black text-gray-950 mb-8">Decoding the Latest RBI Guidelines (2024-25)</h2>
                          <p className="text-xs md:text-base text-gray-700 leading-relaxed mb-6">
                             The Reserve Bank of India has been proactive in protecting borrowers while ensuring bank stability. The new 2024 Master Direction on 'Penal Charges in Loan Accounts' (effective April 2024) is a game-changer. It explicitly forbids banks from charging 'Penal Interest' on top of interest and requires them to charge a flat 'Penal Charge' instead.
                          </p>
                          <p className="text-xs md:text-base text-gray-700 leading-relaxed">
                             Furthermore, the RBI's framework for 'Compromise Settlements' ensures that banks cannot discriminate between borrowers. If an OTS scheme is offered, it must be based on a board-approved policy available to all eligible NPA accounts. This transparency is your biggest weapon in a <strong>loan settlement negotiation</strong>.
                          </p>
                       </div>
                       <div className="w-full md:w-1/2 bg-gray-950 p-8 md:p-12 rounded-[50px] text-white">
                          <h3 className="text-[#D2A02A] font-bold text-2xl mb-8">Key Regulatory Pillars</h3>
                          <ul className="space-y-6">
                             <li className="flex gap-4 items-start">
                                <span className="bg-[#D2A02A] text-black w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs shrink-0 mt-1">✓</span>
                                <p className="text-sm md:text-base opacity-80">Transition from Penal Interest to Penal Charges avoids the 'interest-on-interest' snowball effect.</p>
                             </li>
                             <li className="flex gap-4 items-start">
                                <span className="bg-[#D2A02A] text-black w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs shrink-0 mt-1">✓</span>
                                <p className="text-sm md:text-base opacity-80">Mandatory Nodal Officer contact details for grievances regarding recovery harassment.</p>
                             </li>
                             <li className="flex gap-4 items-start">
                                <span className="bg-[#D2A02A] text-black w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs shrink-0 mt-1">✓</span>
                                <p className="text-sm md:text-base opacity-80">OTS eligibility for accounts even with fraud or wilful default remarks (with board approval).</p>
                             </li>
                          </ul>
                       </div>
                    </div>
                  </section>

                  <section id="rights" className="scroll-mt-32">
                     <h2 className="text-xl md:text-4xl font-black text-gray-900 mb-8 text-center">Your Rights as an Indian Borrower</h2>
                     <p className="text-xs md:text-lg text-center text-gray-600 max-w-4xl mx-auto mb-16">
                        The law does not allow banks to treat borrowers with indignity. Knowledge of these rights is the first step toward stopping recovery harassment.
                     </p>
                     <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm hover:border-[#D2A02A]/30 transition-all group">
                           <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#D2A02A]/10 transition-colors">
                              <span className="text-2xl text-[#D2A02A]">⏰</span>
                           </div>
                           <h4 className="font-bold text-xl mb-4 text-gray-950">The 'Golden Hours' Rule</h4>
                           <p className="text-gray-600 leading-relaxed">Recovery agents are strictly prohibited from calling you before 8 AM or after 7 PM. Any calls made outside this window is a direct violation of RBI's Fair Practice Code.</p>
                        </div>
                        <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm hover:border-[#D2A02A]/30 transition-all group">
                           <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#D2A02A]/10 transition-colors">
                              <span className="text-2xl text-[#D2A02A]">📱</span>
                           </div>
                           <h4 className="font-bold text-xl mb-4 text-gray-950">Privacy and Dignity</h4>
                           <p className="text-gray-600 leading-relaxed">Agents cannot contact your friends, family, or neighbors to discuss your debt. This is a violation of your Fundamental Right to Privacy under the Indian Constitution.</p>
                        </div>
                        <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm hover:border-[#D2A02A]/30 transition-all group">
                           <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#D2A02A]/10 transition-colors">
                              <span className="text-2xl text-[#D2A02A]">⚖️</span>
                           </div>
                           <h4 className="font-bold text-xl mb-4 text-gray-950">Right to Verification</h4>
                           <p className="text-gray-600 leading-relaxed">You have the right to demand identification from any recovery agent visiting your home. They must carry an identity card and a copy of the bank's authorization letter.</p>
                        </div>
                        <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm hover:border-[#D2A02A]/30 transition-all group">
                           <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#D2A02A]/10 transition-colors">
                              <span className="text-2xl text-[#D2A02A]">🏠</span>
                           </div>
                           <h4 className="font-bold text-xl mb-4 text-gray-950">SARFAESI Protections</h4>
                           <p className="text-gray-600 leading-relaxed">For secured loans, you have 60 days to respond to a Section 13(2) notice. You have the right to object to the bank's valuation of your property before any auction.</p>
                        </div>
                     </div>
                  </section>

                  <section id="hardship" className="scroll-mt-32 bg-[#1a202c] text-white p-10 md:p-20 rounded-[60px] relative overflow-hidden">
                     <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                        <div>
                           <h2 className="text-lg md:text-2xl font-black mb-8 text-[#D2A02A]">Building Your 'Hardship Folder'</h2>
                           <p className="text-sm md:text-lg opacity-80 leading-relaxed mb-6">
                              The key to getting a <strong>low-cost loan settlement</strong> is proving beyond doubt that you are not a 'Wilful Defaulter' but a 'Hardship Defaulter'. Our legal team helps you compile a comprehensive dossier of evidence.
                           </p>
                           <p className="text-sm md:text-lg opacity-80 leading-relaxed">
                              This dossier acts as the backbone of our negotiation. When we show the bank that your income has dropped by 70% or your medical expenses have drained your savings, the 'Commercial Logic' of a settlement becomes undeniable for the bank's credit committee.
                           </p>
                        </div>
                        <div className="space-y-4">
                           {["Financial Statements (last 12 months)", "Medical Certificates/Proof of Illness", "Income Tax Returns consistently showing drop", "Legal Notices received from other creditors", "Proof of Business Loss/Bankruptcy filing"].map((doc, i) => (
                             <div key={i} className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-2xl">
                                <span className="text-[#D2A02A]">📁</span>
                                <span className="text-sm md:text-base font-medium">{doc}</span>
                             </div>
                           ))}
                        </div>
                     </div>
                  </section>

                  <section id="negotiation" className="scroll-mt-32">
                     <h2 className="text-xl md:text-4xl font-black text-gray-950 mb-8">Advanced Tactics for Loan Negotiation</h2>
                     <p className="text-sm md:text-xl text-gray-700 leading-relaxed mb-8">
                        The bank's objective is to recover maximum money with minimum effort. Your objective is to pay minimum money today and settle once and for all. Here is how you bridge that gap:
                     </p>
                     <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                           <h4 className="font-bold text-xl mb-3 text-gray-950">Anchor the Number</h4>
                           <p className="text-sm text-gray-600">Start the negotiation at 20% to 25% of the outstanding dues. This gives you room to 'move up' to a final figure of around 35-45% without appearing desperate.</p>
                        </div>
                        <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                           <h4 className="font-bold text-xl mb-3 text-gray-950">Use 'March Rush'</h4>
                           <p className="text-sm text-gray-600">Banks have strict year-end NPA reduction targets. Proposing a settlement in late February or March often results in faster approvals and higher waivers.</p>
                        </div>
                        <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                           <h4 className="font-bold text-xl mb-3 text-gray-950">The 'Lump Sum' Card</h4>
                           <p className="text-sm text-gray-600">Always try to offer the settled amount in one piece. If the bank knows they get 'cash in hand' in 48 hours, they are more likely to slash the principal.</p>
                        </div>
                     </div>
                  </section>

                  <section id="letter-validation" className="bg-[#D2A02A]/5 p-10 md:p-20 rounded-[60px] border border-[#D2A02A]/10 scroll-mt-32">
                     <h2 className="text-xl md:text-4xl font-black text-gray-950 mb-8">Validating the Settlement Letter</h2>
                     <p className="text-sm md:text-xl text-gray-700 leading-relaxed mb-10">
                        A fake settlement letter is the new age scam. Rogue collection agencies often issue letters that look real to trick you into making a partial payment. Never pay without checking these 5 elements:
                     </p>
                     <div className="grid md:grid-cols-2 gap-10">
                        <div className="flex gap-6">
                           <span className="text-4xl">🧾</span>
                           <div>
                              <h5 className="font-bold text-lg mb-2">Original Letterhead</h5>
                              <p className="text-sm text-gray-600 leading-relaxed">The letter must be on the bank's actual stationery, with a logo and a verifiable branch address. Scanned PDF copies must come from a '@bank.com' official email.</p>
                           </div>
                        </div>
                        <div className="flex gap-6">
                           <span className="text-4xl">🖋️</span>
                           <div>
                              <h5 className="font-bold text-lg mb-2">Authorized Signatory</h5>
                              <p className="text-sm text-gray-600 leading-relaxed">It must be signed by an officer of the rank of 'Branch Manager' or 'Assistant Vice President'. Mention their employee code for verification.</p>
                           </div>
                        </div>
                        <div className="flex gap-6">
                           <span className="text-4xl">🔢</span>
                           <div>
                              <h5 className="font-bold text-lg mb-2">Detailed Schedule</h5>
                              <p className="text-sm text-gray-600 leading-relaxed">The letter must specify the EXACT amount, the EXACT date by which it must reach the bank, and the exact account details for RTGS/NEFT.</p>
                           </div>
                        </div>
                        <div className="flex gap-6">
                           <span className="text-4xl">📜</span>
                           <div>
                              <h5 className="font-bold text-lg mb-2">'Full and Final' Clause</h5>
                              <p className="text-sm text-gray-600 leading-relaxed">The letter MUST state that upon payment of this amount, the debt will be considered fully discharged and the account will be closed definitively.</p>
                           </div>
                        </div>
                     </div>
                  </section>

                  <section id="cibil-recovery" className="space-y-10 scroll-mt-32">
                    <h2 className="text-xl md:text-4xl font-black text-gray-900 leading-tight">Post-Settlement: The Path to Financial Recovery</h2>
                    <p className="text-xs md:text-base text-gray-700 leading-relaxed">
                       Once you make the payment, the battle is only half won. You must collect the <strong>No Objection Certificate (NOC)</strong> and the <strong>Loan Closure Letter</strong> within 15 to 30 days. Many borrowers forget this step, only to find the same loan appearing on their CIBIL report years later as 'Outstanding'.
                    </p>
                    
                    <h3 className="text-lg md:text-2xl font-black text-gray-900">Why Banks Prefer Settlement Over Litigation</h3>
                    <p className="text-xs md:text-base text-gray-700 leading-relaxed">
                       Borrowers often ask us: "Why would a bank accept 40% when I owe them 100%?" The answer lies in the 'Time Value of Money' and 'Provisioning Norms'. Under RBI's IRAC (Income Recognition and Asset Classification) norms, every day a loan remains unpaid, the bank has to set aside a portion of its own profits as a 'Provision'. 
                    </p>
                    <p className="text-xs md:text-base text-gray-700 leading-relaxed">
                       If a loan is classified as a 'Loss Asset', the bank has to provision 100% of the outstanding amount. This means their lending capacity is reduced. By accepting an <strong>OTS (One Time Settlement)</strong>, the bank can write off the loss, release the provisioned capital, and deploy it in new, profitable loans. Litigation in India, through Civil Courts or Debt Recovery Tribunals (DRT), can take 5 to 10 years and costs the bank huge amounts in advocate fees and operational overheads. A settlement today is almost always more profitable for a bank than a full recovery 10 years later.
                    </p>

                    <h3 className="text-lg md:text-2xl font-black text-gray-900">The Role of the Debt Recovery Tribunal (DRT)</h3>
                    <p className="text-xs md:text-base text-gray-700 leading-relaxed">
                       For loans exceeding 20 Lakhs, banks often file a case in the DRT. While this sounds intimidating, the DRT process actually provides a structured platform for settlement. Most DRT judges encourage 'Lok Adalat' sessions where banks and borrowers are asked to reach a compromise. 
                    </p>
                    <p className="text-xs md:text-base text-gray-700 leading-relaxed">
                       Our legal experts represent you at the DRT, ensuring that the bank's claims are scrutinized. We often find errors in interest calculation or violations of the 'Fair Practice Code' which we use as leverage to bring the settlement amount down even further. The DRT is not just a court for the banks; it is a forum where a well-represented borrower can secure a fair and final exit from their debt.
                    </p>

                    <h3 className="text-lg md:text-2xl font-black text-gray-900">State-Specific Recovery Nuances and Lok Adalats</h3>
                    <p className="text-sm md:text-lg text-gray-700 leading-relaxed">
                       The recovery culture in <strong>Uttar Pradesh and Bihar</strong> is often more ground-level and branch-driven. In these states, the 'National Lok Adalat' (held quarterly) is the most powerful tool for settlement. Local PSU banks like PNB or Bank of Baroda are given massive targets to close small-ticket NPAs during these sessions.
                    </p>
                    <p className="text-sm md:text-lg text-gray-700 leading-relaxed">
                       In contrast, recovery in <strong>Karnataka and Tamil Nadu</strong> for tech professionals is often data-driven and handled by centralized agencies in Bangalore or Chennai. For these borrowers, we focus on 'Technical Write-off' negotiations. Since these borrowers have high future earning potential, banks are more clinical and prefer settlements that are backed by strong legal hardship evidence.
                    </p>
                    <h3 className="text-xl md:text-3xl font-black text-gray-900">Loan Settlement for NRIs and Overseas Borrowers</h3>
                    <p className="text-sm md:text-lg text-gray-700 leading-relaxed">
                       A significant number of our clients are NRIs (Non-Resident Indians) who have outstanding debts in India. Whether it is a home loan for a property in Noida or a personal loan taken before moving to Dubai or London, these debts can become a legal hurdle during visa renewals or property sales. 
                    </p>
                    <p className="text-sm md:text-lg text-gray-700 leading-relaxed">
                       The process for NRIs is technically unique. We act as your 'Power of Attorney' (POA) holders, representing you at the bank branch in India. Since you are not physically present, banks often attempt to use 'Pressure Tactics' on your family members staying in India. Our legal intervention stops this domestic harassment and shifts the negotiation to a formal, email-based legal channel. We ensure that your 100% legal settlement is concluded without you ever having to fly back to India, saving you both travel costs and psychological stress.
                    </p>

                    <h3 className="text-xl md:text-3xl font-black text-gray-900">Cyber-Law Protections Against Digital Lending Apps</h3>
                    <p className="text-sm md:text-lg text-gray-700 leading-relaxed">
                       In 2025, the menace of predatory digital lending apps is at an all-time high. These apps often use 'Contacts Scraping' to shame borrowers. Under the Information Technology Act and the latest RBI Digital Lending Guidelines, such practices are criminal offenses. 
                    </p>
                    <p className="text-sm md:text-lg text-gray-700 leading-relaxed">
                       If you are being blackmailed by a lending app, our cyber-legal team initiates immediate 'Technical Notices' to the app's hosting platform and the RBI. We don't just settle the debt; we ensure your digital footprint and reputation are protected. We force these lenders to delete your data from their servers as part of the settlement agreement, a clause that most standard 'settlement companies' ignore but our legal firm considers mandatory for your future safety.
                    </p>

                    <div className="bg-gray-50 border border-gray-100 p-8 md:p-14 rounded-[40px]">
                       <h3 className="text-lg md:text-2xl font-black mb-10 text-center">Your 24-Month Credit Rebuilding Roadmap</h3>
                       <div className="grid md:grid-cols-4 gap-4">
                          {[
                            { month: "Month 1-3", action: "Verify NOC and check CIBIL for 'Settled' status update." },
                            { month: "Month 4-12", action: "Apply for a 'Fixed Deposit Backed' credit card (Secured Card)." },
                            { month: "Month 13-18", action: "Keep utilization below 20%. Pay utility bills on time." },
                            { month: "Month 19-24", action: "Apply for a small consumer durable loan; show a 100% clean track record." }
                          ].map((step, i) => (
                            <div key={i} className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-50">
                               <div className="text-[#D2A02A] font-black mb-2 text-sm uppercase">{step.month}</div>
                               <p className="text-xs text-gray-600">{step.action}</p>
                            </div>
                          ))}
                       </div>
                    </div>
                  </section>

                  <section id="reviews" className="scroll-mt-32 pt-10 border-t border-gray-100">
                    <h2 className="text-xl md:text-4xl font-black text-gray-950 mb-12 text-center">Transforming Lives Across India</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       {[
                         { name: "Vikram Malhotra", city: "Bangalore", rating: 5, text: "I was underwater with 22L in debt across 5 banks. AMA Legal helped me settle all for 9.5L over 6 months. Their mental support was as good as their legal negotiation." },
                         { name: "Priyanka Sharma", city: "Delhi", rating: 5, text: "Truly professional. They stopped the calls from HDFC and SBI agents immediately. The calculator estimation was very close to my final settlement figure." },
                         { name: "Siddharth Rao", city: "Hyderabad", rating: 5, text: "Settling a business loan is much harder, but AMA's lawyers knew exactly which MSME circulars to cite. Excellent experience with 55% waiver." },
                         { name: "Meena Gupta", city: "Ahmedabad", rating: 5, text: "I was scared for my family's dignity. AMA took over all communication and got me a clean NOC within 2 months of settlement. Exceptional service." }
                       ].map((rev, i) => (
                         <div key={i} className="p-8 bg-white border border-gray-100 rounded-[35px] shadow-sm relative overflow-hidden group hover:shadow-xl transition-all">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-[#D2A02A]/5 group-hover:bg-[#D2A02A]/10 transition-colors rounded-bl-full translate-x-12 -translate-y-12"></div>
                            <div className="flex justify-between items-center mb-6">
                               <div className="flex items-center gap-4">
                                  <div className="w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center text-white font-bold text-xl uppercase">{rev.name[0]}</div>
                                  <div>
                                     <div className="font-bold text-gray-950">{rev.name}</div>
                                     <div className="text-xs text-gray-400 font-bold uppercase tracking-wider">{rev.city}</div>
                                  </div>
                               </div>
                               <div className="text-[#D2A02A] font-serif text-lg">{"★".repeat(rev.rating)}</div>
                            </div>
                            <p className="text-sm md:text-base text-gray-600 italic leading-relaxed">"{rev.text}"</p>
                         </div>
                       ))}
                    </div>
                    <div className="mt-12 text-center">
                       <p className="text-gray-400 font-bold text-sm tracking-widest uppercase">Average Rating: 4.9/5 based on 12,450+ settlements</p>
                    </div>
                  </section>

                  <section id="locations" className="scroll-mt-32 bg-gray-50 p-10 md:p-16 rounded-[60px]">
                    <h2 className="text-2xl md:text-4xl font-black text-gray-950 mb-10 text-center uppercase tracking-tighter">Full Service Coverage Across Every Corner of India</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-xs text-gray-700 font-medium">
                      {[
                        "Delhi-NCR: Connaught Place, Noida Sector 15, Gurgaon, Ghaziabad, Faridabad, Rohini, Dwarka, Janakpuri",
                        "Maharashtra: Mumbai (Andheri, Dadar, Borivali, Ghatkopar), Pune (Kothrud, Hinjewadi, Wakad), Nagpur, Nashik, Thane, Navi Mumbai",
                        "Karnataka: Bangalore (Whitefield, Koramangala, Indiranagar, Jayanagar), Mysore, Hubli, Belgaum, Mangalore",
                        "Tamil Nadu: Chennai (T-Nagar, Adyar, Velachery, Anna Nagar), Coimbatore, Madurai, Trichy, Salem, Tiruppur",
                        "Telangana: Hyderabad (Banjara Hills, Gachibowli, Kukatpally, Miyapur), Secunderabad, Warangal, Nizamabad",
                        "Gujarat: Ahmedabad (Satellite, Vastrapur, Navrangpura), Surat, Vadodara, Rajkot, Bhavnagar, Gandhinagar",
                        "West Bengal: Kolkata (Salt Lake, Park Street, New Town, Garia), Howrah, Siliguri, Durgapur, Asansol",
                        "Uttar Pradesh: Lucknow (Gomti Nagar, Hazratganj), Kanpur, Agra, Varanasi, Meerut, Prayagraj, Bareilly, Ghaziabad",
                        "Rajasthan: Jaipur (Malviya Nagar, Vaishali Nagar), Jodhpur, Kota, Udaipur, Ajmer, Bikaner, Alwar",
                        "Punjab: Ludhiana, Amritsar, Jalandhar, Mohali, Patiala, Bathinda, Pathankot",
                        "Madhya Pradesh: Indore (Vijay Nagar), Bhopal, Gwalior, Jabalpur, Ujjain, Sagar",
                        "Bihar: Patna (Boring Road, Patliputra), Gaya, Bhagalpur, Muzaffarpur, Purnia",
                        "Odisha: Bhubaneswar (Nayapalli, Saheed Nagar), Cuttack, Rourkela, Berhampur, Sambalpur",
                        "Kerala: Kochi (Edappally, Marine Drive), Trivandrum, Kozhikode, Thrissur, Kollam, Palakkad",
                        "Andhra Pradesh: Visakhapatnam, Vijayawada, Guntur, Nellore, Tirupati, Kurnool, Kakinada"
                      ].map((item, i) => (
                        <div key={i} className="p-4 bg-white rounded-2xl border border-gray-100 flex items-start gap-3 shadow-sm hover:shadow-md transition-shadow">
                           <span className="text-[#D2A02A] text-lg">📍</span>
                           <span className="leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section id="faqs" className="scroll-mt-32">
                    <h2 className="text-xl md:text-4xl font-black text-gray-950 mb-12">Settlement Intelligence: Frequently Asked Questions</h2>
                    <div className="space-y-10">
                      {faqs.map((f, i) => (
                        <div key={i} className="group border-b border-gray-100 pb-10 last:border-0">
                           <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-4 flex items-start gap-4 group-hover:text-[#D2A02A] transition-colors">
                              <span className="bg-[#D2A02A]/10 text-[#D2A02A] px-3 py-1 rounded-lg text-sm font-black shrink-0">Q</span>
                              {f.question}
                           </h3>
                           <p className="text-gray-600 pl-14 text-xs md:text-base leading-relaxed">{f.answer}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Final CTA Section */}
                  <div className="relative pt-12">
                     <div className="absolute inset-0 bg-gradient-to-tr from-[#1a202c] via-[#2d3748] to-[#1a202c] rounded-[60px] transform -rotate-1"></div>
                     <section className="relative z-10 p-10 md:p-24 text-center text-white rounded-[60px] overflow-hidden">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-[#D2A02A]/10 blur-[100px] rounded-full"></div>
                        <h2 className="text-xl md:text-5xl font-black mb-6 leading-tight">Your Second Chance Starts with a Phone Call</h2>
                        <p className="text-xs md:text-lg opacity-80 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
                           Stop living in the shadow of debt. Our lawyers have settled billions in liabilities for thousands of Indian families. Let us handle the banks while you focus on rebuilding your future.
                        </p>
                        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                           <Link href="/contact" className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-black py-5 px-14 rounded-full transition-all transform hover:scale-105 shadow-[0_20px_50px_rgba(210,160,42,0.3)] text-xl w-full md:w-auto">
                              Get Free Legal Analysis
                           </Link>
                           <a href="tel:+918700343611" className="bg-transparent border-2 border-white/30 hover:border-white text-white font-bold py-5 px-14 rounded-full transition-all text-xl w-full md:w-auto backdrop-blur-sm">
                              Call 24/7 Helpline
                           </a>
                        </div>
                     </section>
                  </div>
               </div>
            </div>

            {/* Right Column: Sidebar */}
            <div className="hidden lg:block space-y-8 sticky top-24">
                {/* Contact Card */}
                <div className="bg-white p-8 rounded-[35px] shadow-sm border border-gray-50 text-center">
                  <div className="w-16 h-16 bg-[#D2A02A]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                     <span className="text-3xl">⚖️</span>
                  </div>
                  <h3 className="text-2xl font-black text-gray-950 mb-4 tracking-tight">Legal Protection</h3>
                  <p className="text-gray-500 mb-8 text-sm leading-relaxed font-medium">
                    Our senior advocates stop recovery harassment today and start negotiation tomorrow.
                  </p>
                  <a href="tel:+918700343611" className="block w-full bg-[#D2A02A] text-white text-center py-4 rounded-2xl font-black hover:bg-[#b88a22] transition-colors mb-4 shadow-lg">
                    Call: +91-8700343611
                  </a>
                  <Link href="/contact" className="block w-full border-2 border-[#D2A02A] text-[#D2A02A] text-center py-4 rounded-2xl font-black hover:bg-[#D2A02A] hover:text-white transition-all">
                    Register Case Now
                  </Link>
                </div>

                {/* Related Links */}
                <div className="bg-white p-8 rounded-[35px] shadow-sm border border-gray-50">
                  <h3 className="text-lg font-black text-gray-900 mb-6 uppercase tracking-widest border-b border-gray-50 pb-4">Resources</h3>
                  <ul className="space-y-4">
                    <li><Link href="/loan-settlement-amount-calculator" className="text-gray-600 hover:text-[#D2A02A] flex items-center text-sm font-bold transition-colors group"><span className="mr-3 text-gray-200 group-hover:text-[#D2A02A]">»</span> Settlement Calculator</Link></li>
                    <li><Link href="/services/loan-settlement" className="text-gray-600 hover:text-[#D2A02A] flex items-center text-sm font-bold transition-colors group"><span className="mr-3 text-gray-200 group-hover:text-[#D2A02A]">»</span> Personal Loan Help</Link></li>
                    <li><Link href="/services/debt-consolidation" className="text-gray-600 hover:text-[#D2A02A] flex items-center text-sm font-bold transition-colors group"><span className="mr-3 text-gray-200 group-hover:text-[#D2A02A]">»</span> Debt Management</Link></li>
                    <li><Link href="/services/banking-and-finance" className="text-gray-600 hover:text-[#D2A02A] flex items-center text-sm font-bold transition-colors group"><span className="mr-3 text-gray-200 group-hover:text-[#D2A02A]">»</span> Banking Law Expert</Link></li>
                  </ul>
                  
                  {/* App Links */}
                  <div className="mt-10 pt-8 border-t border-gray-50">
                    <p className="text-xs font-black mb-4 uppercase tracking-[0.2em]" style={{ color: 'rgba(210, 158, 13, 0.8)' }}>Mobile App</p>
                    <div className="flex flex-col gap-4">
                      <Link href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions" target="_blank" className="hover:opacity-80 transition-opacity">
                        <Image src="/newAssets/appstore.svg" alt="Android Play Store" width={130} height={36} className="w-full h-auto max-w-[150px]" />
                      </Link>
                      <Link href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186" target="_blank" className="hover:opacity-80 transition-opacity">
                        <Image src="/newAssets/playstore.svg" alt="Apple App Store" width={130} height={36} className="w-full h-auto max-w-[150px]" />
                      </Link>
                    </div>
                  </div>
                </div>
            </div>
          </div>

          {/* Banks Grid */}
          <div className="mt-20">
            <section className="my-10">
              <h2 className="text-2xl md:text-4xl font-black text-gray-950 mb-14 text-center tracking-tight">Expert Negotiators for all Indian Financial Institutions</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                {banks.map((bank, i) => (
                  <Link key={i} href={bank.href} className="bg-white border border-gray-200 rounded-2xl p-4 text-center hover:shadow-xl transition-all duration-300 hover:border-[#D2A02A]/50 hover:-translate-y-1">
                    <span className="text-gray-900 font-bold text-sm block">{bank.name}</span>
                  </Link>
                ))}
              </div>
              <div className="mt-12 text-center">
                <p className="text-lg text-gray-500 font-light italic">
                  *Our advocacy team has successfully represented clients in One Time Settlements with all major PSUs, Private Banks, and NBFCs across the nation.
                </p>
              </div>
            </section>
          </div>

          <div className="mt-24">
            <GenericStatesGrid 
              serviceName="Loan Settlement" 
              servicePath="loan-settlement" 
            />
          </div>
        </div>
      </div>
    </>
  );
}
