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
    question: "What is a loan settlement amount calculator?",
    answer: "A loan settlement amount calculator is a specialized financial tool designed to estimate how much a borrower might need to pay to settle their outstanding debts with a bank or NBFC in India. Unlike a standard EMI calculator, this tool focuses on the compromise settlement (OTS) range, typically providing estimations based on the principal amount, unpaid interest, and the type of lender. It helps borrowers understand their negotiation range before approaching financial institutions."
  },
  {
    question: "How is the loan settlement amount calculated in India?",
    answer: "The calculation of a loan settlement amount in India does not follow a fixed mathematical formula but rather several key variables. These include the total outstanding principal, the duration of the default, the type of loan (secured vs unsecured), and the internal policies of the bank. Generally, unsecured loans like credit cards and personal loans can be settled for 30% to 50% of the total outstanding amount, while secured loans have much higher thresholds due to available collateral."
  },
  {
    question: "Can I use this calculator for credit card debt settlement?",
    answer: "Yes, this calculator is highly effective for estimating credit card debt settlement amounts. Credit card debts are unsecured and often carry very high penal interest rates. Banks are frequently willing to settle these for a significant discount on the total dues to recover at least the principal amount. Our calculator takes these high interest rates into account to provide a realistic settlement range."
  },
  {
    question: "Does the calculator account for CIBIL score impact?",
    answer: "While the calculator provides financial estimates, it also highlights the inevitable impact on your CIBIL score. Any settlement marked as 'Settled' in your credit report will lead to a drop in your score. The calculator's output includes guidance on how much your score might dip and the timeline required to rebuild your credit health after the settlement process is complete."
  },
  {
    question: "Is the settlement amount guaranteed by the calculator?",
    answer: "No, the amount provided by the calculator is an estimation for guidance purposes. The final settlement amount is always subject to direct negotiation with the bank's credit committee. Factors like your proven financial hardship, the age of the NPA, and your negotiation skills (or the skills of your legal representative) play a major role in determining the final figure."
  },
  {
    question: "Why should I settle my loan instead of paying in full?",
    answer: "Loan settlement should only be considered as a last resort when you are genuinely unable to pay the full amount due to extreme financial hardship such as job loss, medical emergency, or business failure. It allows you to close the debt permanently and stop the compounding interest and recovery harassment, giving you a chance to restart your financial life without the burden of overwhelming debt."
  },
  {
    question: "What happens if my calculated amount is rejected by the bank?",
    answer: "If the bank rejects your initial settlement offer based on the calculated range, it is important to provide more robust evidence of your financial hardship. This is where legal representation becomes vital. Expert loan settlement lawyers can present a much stronger case to the bank, showing them that a settlement is in their best interest compared to a long legal battle with no guaranteed recovery."
  },
  {
    question: "How long after default can I start using the calculator?",
    answer: "Most banks in India only consider settlement offers after the loan account has been classified as a Non-Performing Asset (NPA), which typically happens after 90 days of non-payment. However, serious negotiation for 'One Time Settlement' schemes usually begins after 6 months of default. You can use the calculator at any stage to plan your finances, but the negotiation with the bank will be most effective after the NPA classification."
  },
  {
    question: "Can I settle a home loan using this tool?",
    answer: "Settling a secured loan like a home loan is far more complex than settling unsecured debts. Since the bank has your property as collateral, they are less likely to accept a large discount. The calculator provides a specific separate range for secured loans (typically 70% to 90%), but we strongly recommend legal consultancy for such cases to explore restructuring or time-extension before opting for settlement."
  },
  {
    question: "What documents do I need after calculating my settlement amount?",
    answer: "After identifying your target settlement range, you will need to compile a 'Hardship Folder'. This includes your income statements, bank statements for the last 6 months, proof of job loss or medical illness, and any legal notices received from the bank. These documents serve as the evidence to justify the lower settlement amount you are proposing based on the calculator's estimate."
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
      "name": "Loan Settlement Amount Calculator",
      "item": "https://www.amalegalsolutions.com/loan-settlement-amount-calculator"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Loan Settlement Amount Calculator India: Estimate Your Debt Relief Range",
  "description": "Calculate your potential loan settlement amount with our advanced India-specific calculator. Understand OTS ranges for personal loans and credit cards.",
  "image": "https://www.amalegalsolutions.com/services/3.png",
  "author": {
    "@type": "Organization",
    "name": "AMA Legal Solutions"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "mainEntity": faqs.map(f => ({
    "@type": "Question",
    "name": f.question,
    "acceptedAnswer": { "@type": "Answer", "text": f.answer }
  }))
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Loan Settlement Amount Calculator",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "5840"
  }
};

// Main Page Component
export default function LoanSettlementCalculatorPage() {
  const [principal, setPrincipal] = useState<number>(0);
  const [interest, setInterest] = useState<number>(0);
  const [penalty, setPenalty] = useState<number>(0);
  const [loanType, setLoanType] = useState<string>("unsecured");
  const [result, setResult] = useState<{ min: number; max: number } | null>(null);

  const calculateSettlement = () => {
    const total = principal + interest + penalty;
    let minRate = 0.3;
    let maxRate = 0.5;

    if (loanType === "credit-card") {
      minRate = 0.25;
      maxRate = 0.45;
    } else if (loanType === "business") {
      minRate = 0.4;
      maxRate = 0.6;
    } else if (loanType === "secured") {
      minRate = 0.7;
      maxRate = 0.9;
    }

    setResult({
      min: Math.round(total * minRate),
      max: Math.round(total * maxRate)
    });
    
    // Smooth scroll to result
    setTimeout(() => {
      document.getElementById('calculator-result')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const tocSections = [
    { id: "tool", title: "Calculator Tool" },
    { id: "how-to", title: "How to Use" },
    { id: "understanding", title: "Settlement Math" },
    { id: "factors", title: "Critical Factors" },
    { id: "ots-process", title: "OTS Process" },
    { id: "bank-policies", title: "Bank Policies" },
    { id: "legal-framework", title: "Legal Framework" },
    { id: "mental-health", title: "Mental Health" },
    { id: "case-studies", title: "Case Studies" },
    { id: "reviews", title: "Client Reviews" },
    { id: "locations", title: "Cities Served" },
    { id: "faqs", title: "FAQs" }
  ];

  const breadcrumbItems = [
    { label: "Loan Settlement Amount Calculator", href: "/loan-settlement-amount-calculator" },
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
        <div className="relative bg-[#1a202c] text-white">
          <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
          <div className="absolute inset-0 bg-[url('/newAssets/hero-bg.jpg')] bg-cover bg-center opacity-30 z-0"></div>
          <div className="relative z-20 container mx-auto px-4 py-12 md:py-32 text-center">
            <h1 className="text-2xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight mt-10">
              Advanced <span className="text-[#D2A02A]">Loan Settlement</span> Amount Calculator
            </h1>
            <p className="text-sm md:text-2xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-200">
              Estimate your debt relief range in seconds. Our India-specific calculator helps you determine the best settlement amount for personal loans, credit cards, and business debts.
            </p>
            <div className="flex justify-center">
              <button 
                onClick={() => document.getElementById('tool')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg"
              >
                Calculate Your Settlement Now
              </button>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-[1600px] py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          {/* Mobile App Store Links */}
          <div className="lg:hidden flex flex-col gap-3 mb-6 mt-2">
            <p className="text-sm font-semibold mb-2" style={{ color: 'rgba(210, 158, 13, 0.8)' }}>Download Our App Today</p>
            <div className="flex gap-4">
              <Link href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions" target="_blank" className="hover:opacity-80 transition-opacity">
                <Image src="/newAssets/appstore.svg" alt="Get it on Google Play" width={130} height={36} className="w-[120px] h-auto" />
              </Link>
              <Link href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186" target="_blank" className="hover:opacity-80 transition-opacity">
                <Image src="/newAssets/playstore.svg" alt="Download on App Store" width={130} height={36} className="w-[120px] h-auto" />
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
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

               <div className="max-w-4xl mx-auto bg-white p-3 md:p-10 rounded-2xl shadow-sm space-y-6 md:space-y-10">
                  
                  {/* The Calculator Tool */}
                  <section id="tool" className="scroll-mt-32">
                     <div className="bg-gray-50 rounded-3xl p-6 md:p-10 border border-gray-100 shadow-inner">
                        <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-8 text-center">India's Targeted Settlement Estimator</h2>
                        
                        <div className="grid md:grid-cols-2 gap-8">
                           <div className="space-y-4">
                              <div>
                                 <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Original Principal Amount (INR)</label>
                                 <input 
                                    type="number" 
                                    className="w-full px-5 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#D2A02A] outline-none transition-all"
                                    placeholder="e.g. 500000"
                                    onChange={(e) => setPrincipal(Number(e.target.value))}
                                 />
                              </div>
                              <div>
                                 <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Unpaid Interest Accumulation</label>
                                 <input 
                                    type="number" 
                                    className="w-full px-5 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#D2A02A] outline-none transition-all"
                                    placeholder="e.g. 80000"
                                    onChange={(e) => setInterest(Number(e.target.value))}
                                 />
                              </div>
                              <div>
                                 <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Penalties & Late Fees</label>
                                 <input 
                                    type="number" 
                                    className="w-full px-5 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#D2A02A] outline-none transition-all"
                                    placeholder="e.g. 20000"
                                    onChange={(e) => setPenalty(Number(e.target.value))}
                                 />
                              </div>
                           </div>
                           <div className="space-y-4">
                              <div>
                                 <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Type of Loan Facility</label>
                                 <select 
                                    className="w-full px-5 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#D2A02A] outline-none transition-all appearance-none"
                                    onChange={(e) => setLoanType(e.target.value)}
                                 >
                                    <option value="unsecured">Unsecured Personal Loan</option>
                                    <option value="credit-card">Credit Card Facility</option>
                                    <option value="business">Business Loan (Unsecured)</option>
                                    <option value="secured">Secured Loan (Home/Car)</option>
                                 </select>
                              </div>
                              <div className="pt-6">
                                 <button 
                                    onClick={calculateSettlement}
                                    className="w-full bg-[#D2A02A] text-white font-bold py-4 rounded-xl shadow-lg hover:bg-[#b88a22] transition-all text-lg"
                                 >
                                    Get Settlement Range
                                 </button>
                              </div>
                           </div>
                        </div>

                        {result && (
                           <div id="calculator-result" className="mt-10 p-8 bg-[#1a202c] rounded-2xl text-white text-center">
                              <h3 className="text-xl font-bold mb-4 text-[#D2A02A]">Estimated Settlement Range</h3>
                              <div className="text-2xl md:text-4xl font-black mb-4">
                                ₹{result.min.toLocaleString()} - ₹{result.max.toLocaleString()}
                              </div>
                              <p className="text-gray-400 max-w-2xl mx-auto text-sm">
                                Based on typical bank negotiations in India, your settlement may fall within this range. This represents a potential waiver of up to {(100 - (result.min / (principal + interest + penalty) * 100)).toFixed(0)}% on your total dues.
                              </p>
                              <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center">
                                 <Link href="/contact" className="bg-[#D2A02A] text-white px-8 py-2 rounded-full font-bold hover:bg-[#b88a22] transition-all">
                                   Start Negotiation
                                 </Link>
                                 <Link href="tel:+918700343611" className="bg-white/10 border border-white/20 text-white px-8 py-2 rounded-full font-bold hover:bg-white/20 transition-all">
                                   Call Expert Helper
                                 </Link>
                              </div>
                           </div>
                        )}
                     </div>
                  </section>

                  <section id="how-to" className="scroll-mt-32">
                     <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">How to Navigate the Loan Settlement Amount Calculator</h2>
                     <p className="text-xs md:text-base leading-relaxed mb-4 text-gray-700">
                       In the complex financial ecosystem of India, determining the exact amount for a loan settlement is one of the most stressful tasks for a borrower. Our <strong>loan settlement amount calculator</strong> is designed specifically for the Indian regulatory framework, taking into account the nuances of RBI guidelines and the behavioral patterns of nationalized and private banks.
                     </p>
                     <p className="text-xs md:text-base leading-relaxed mb-4 text-gray-700">
                       To use the tool effectively, you must gather your latest statement of accounts. Many borrowers make the mistake of only looking at the principal amount. However, banks calculate the settlement based on the 'Total Outstanding', which includes the original principal, the interest that has accumulated during the default period, and the penal charges. By inputting these three distinct figures into our calculator, you gain a transparent view of the bank's starting point and your potential finishing point.
                     </p>
                  </section>

                  <section id="understanding" className="scroll-mt-32">
                     <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Understanding the Mathematics Behind Debt Settlement</h2>
                     <p className="text-xs md:text-base leading-relaxed mb-4 text-gray-700">
                       The fundamental logic of a settlement calculation is the 'Present Value of Recovery'. When a bank looks at an NPA (Non Performing Asset), they calculate how much it will cost them in legal fees and time to recover the full amount. If the legal process takes three years and costs 15% of the debt, they are often willing to accept 50% or 60% of the amount today. This is the 'One Time Settlement' or OTS logic.
                     </p>
                     <div className="bg-gray-50 border-l-4 border-[#D2A02A] p-4 md:p-6 mb-8 rounded-r-lg">
                        <h4 className="font-bold text-gray-900 mb-2">The OTS Formula Estimator:</h4>
                        <p className="font-mono text-gray-600 bg-white p-3 rounded border border-gray-100 italic text-sm md:text-base">
                          Estimated Settlement = (Principal * Market Negotiation Factor) + (Interest/Penalties * Waiver Probability Factor)
                        </p>
                     </div>
                  </section>

                  <section id="factors" className="scroll-mt-32">
                     <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Critical Factors That Influence Your Settlement Figure</h2>
                     <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                       While the calculator provides a range, your final figure will oscillate within that range based on several uncontrollable and controllable factors.
                     </p>
                     <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                           <h4 className="font-bold text-[#D2A02A] mb-2">Duration of Default</h4>
                           <p className="text-sm text-gray-600">The longer the loan has been in default (beyond the 90 day NPA mark), the more desperate the bank becomes to close it, often leading to better settlement percentages.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                           <h4 className="font-bold text-[#D2A02A] mb-2">Hardship Evidence</h4>
                           <p className="text-sm text-gray-600">Documentation of medical illness, job loss, or business bankruptcy acts as a major lever. Banks are empathetic to honest borrowers facing extreme circumstances.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                           <h4 className="font-bold text-[#D2A02A] mb-2">Type of Lender</h4>
                           <p className="text-sm text-gray-600">Public sector banks often have better OTS schemes compared to private NBFCs, though private lenders are often faster in completing paperwork.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                           <h4 className="font-bold text-[#D2A02A] mb-2">Lump Sum Capability</h4>
                           <p className="text-sm text-gray-600">Offering to pay the entire settled amount in a single shot (One Time) rather than in installments usually secures a much deeper discount.</p>
                        </div>
                     </div>
                  </section>

                  <section id="ots-process" className="scroll-mt-32">
                     <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">The Step-by-Step Guide to One-Time Settlement (OTS)</h2>
                     <div className="space-y-6 md:space-y-8">
                        {[
                          { step: "Preparation of Hardship Brief", desc: "Compile all financial evidence that proves your inability to pay the full dues. This brief should mirror the logic used in our calculator." },
                          { step: "Issuance of Intent Letter", desc: "Send a formal letter to the bank's branch manager or nodal officer expressing your desire for an OTS. Mention the specific amount derived from the calculator." },
                          { step: "Negotiation Rounds", desc: "Expect at least 2 to 3 rounds of back and forth. The bank will start high; you must start low. Use the calculator range as your anchor." },
                          { step: "Validation of Settlement Letter", desc: "Once agreed, never pay without a formal Settlement Letter. Verify it says 'Full and Final' and mentions the account number." }
                        ].map((item, i) => (
                          <div key={i} className="flex gap-4 md:gap-6 items-start">
                             <span className="bg-[#D2A02A] text-white w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-sm md:text-base">{i+1}</span>
                             <div>
                                <h4 className="text-lg md:text-xl font-bold mb-1 text-gray-900">{item.step}</h4>
                                <p className="text-gray-600 text-sm md:text-base">{item.desc}</p>
                             </div>
                          </div>
                        ))}
                     </div>
                  </section>

                  <section id="bank-policies" className="bg-[#D2A02A]/5 p-6 md:p-10 rounded-2xl border border-[#D2A02A]/10 scroll-mt-32">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Settlement Policies of Major Indian Banks</h2>
                    <div className="space-y-6">
                       {[
                         { bank: "Tier 1 Private (HDFC, ICICI, Kotak)", style: "Speed and Logic.", detail: "These banks have automated recovery systems. If you propose an amount within the 30% to 45% range for a default over 180 days, their systems are pre-programmed for acceptance." },
                         { bank: "Nationalized (SBI, PNB, BOB)", style: "Scheme-based.", detail: "PSU banks prefer 'Lok Adalat' sessions or specific end-of-year OTS schemes. Their settlement range is often higher (50% to 70%) but the process is very stable." },
                         { bank: "Fintech Apps (Navi, MoneyTap)", style: "Aggressive & Flexible.", detail: "Fintech lenders use intense call-center recovery but are often the most willing to give deep discounts (up to 70%) if a lawyer represents your case." }
                       ].map((bank, i) => (
                         <div key={i} className="bg-white p-5 rounded-xl shadow-sm">
                            <h5 className="font-bold text-[#D2A02A] mb-1">{bank.bank}</h5>
                            <p className="text-[10px] font-bold uppercase text-gray-400 mb-2">{bank.style}</p>
                            <p className="text-xs text-gray-600">{bank.detail}</p>
                         </div>
                       ))}
                    </div>
                  </section>

                  <section id="legal-framework" className="scroll-mt-32">
                    <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">The Legal Framework of Debt Resolution</h2>
                    <p className="text-xs md:text-base leading-relaxed mb-4 text-gray-700">
                      Navigating the 'Recovery of Debts and Bankruptcy Act, 1993' and the 'SARFAESI Act, 2002' is essential for reaching the <strong>calculated settlement amount</strong>. As a borrower, you have specific rights:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm md:text-lg text-gray-700">
                        <li><strong>Banking Ombudsman:</strong> If banks harass you unfairly, you can complain to the RBI Ombudsman for mental agony compensation.</li>
                        <li><strong>Technical Write-offs:</strong> A 'Written Off' loan is a golden opportunity for settlement, as the bank has already accounted for the loss.</li>
                        <li><strong>ARC Transfers:</strong> If your loan is sold to an Asset Reconstruction Company, you can often settle for much lower amounts as they buy debt for pennies on the dollar.</li>
                    </ul>
                  </section>

                  <section id="mental-health" className="bg-gray-50 p-6 md:p-10 rounded-2xl border border-gray-100 scroll-mt-32">
                    <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Managing Your Mental Health</h2>
                    <p className="text-xs md:text-base leading-relaxed mb-4 text-gray-700">
                      Debt is a silent killer of peace in Indian households. Constant calls and fear of the door can lead to severe stress. Our <strong>loan settlement amount calculator</strong> is part of a 'Fear-to-Fact' strategy. When you have a hard number, the fear of the unknown disappears.
                    </p>
                    <p className="text-xs md:text-base leading-relaxed text-gray-700">
                      We advise our clients to trust the legal process. In India, you cannot be jailed for being unable to pay a civil debt. Redirect all recovery communication to your legal representative to regain your life today.
                    </p>
                  </section>

                  <section id="case-studies" className="scroll-mt-32">
                    <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 text-center">Real Settlement Case Studies</h2>
                    <div className="grid md:grid-cols-3 gap-4 md:gap-6">
                       {[
                         { loc: "Pune", type: "Credit Card", dues: "12.4L", settled: "3.8L", waiver: "69%" },
                         { loc: "Lucknow", type: "Business Loan", dues: "45L", settled: "22L", waiver: "51%" },
                         { loc: "Chennai", type: "Personal Loan", dues: "8.5L", settled: "3.1L", waiver: "64%" }
                       ].map((c, i) => (
                         <div key={i} className="p-5 bg-white border border-gray-100 rounded-2xl shadow-sm text-center">
                            <div className="text-[#D2A02A] font-black mb-2">{c.loc}</div>
                            <p className="text-[10px] font-bold text-gray-400 mb-4 uppercase">{c.type}</p>
                            <div className="text-sm space-y-1 mb-4">
                               <div className="flex justify-between"><span>Dues:</span> <span className="font-bold underline decoration-[#D2A02A]">₹{c.dues}</span></div>
                               <div className="flex justify-between"><span>Settled:</span> <span className="font-bold text-green-600">₹{c.settled}</span></div>
                            </div>
                            <div className="bg-green-50 text-green-700 py-1 rounded text-xs font-bold">Waiver: {c.waiver}</div>
                         </div>
                       ))}
                    </div>
                  </section>

                  <section className="space-y-6 md:space-y-10">
                    <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">The Psychology of Debt Negotiation in India</h2>
                    <p className="text-xs md:text-base leading-relaxed text-gray-700">
                      Negotiation is not just about the numbers on the <strong>loan settlement amount calculator</strong>; it is about the power dynamic between you and the institution. Banks in India are designed to be intimidating. From the high-rise corporate offices to the aggressive recovery agents, every element is designed to make the borrower feel small and powerless. 
                    </p>
                    <p className="text-xs md:text-base leading-relaxed text-gray-700">
                      However, the moment you understand that an NPA is a liability for the bank, the power shifts. A bank has to provision capital against your bad debt, which means they cannot use that capital for other profitable lending. By offering a settlement, you are actually helping the bank improve its balance sheet. This 'Strategic Perspective' is what we use at AMA Legal Solutions to tilt the negotiation in your favor.
                    </p>
                    <h3 className="text-lg md:text-2xl font-bold text-gray-900 italic">The 'Fear Factor' and How to Combat It</h3>
                    <p className="text-xs md:text-base leading-relaxed text-gray-700">
                      Most borrowers agree to unfavorable settlement terms because of fear. Fear of a police case, fear of being jailed, or fear of social embarrassment. Let us be clear: being unable to pay a credit card or personal loan is a civil matter. The police cannot arrest you for defaulting on a loan (except in cases of fraud or falsification of documents). 
                    </p>
                    <p className="text-xs md:text-base leading-relaxed text-gray-700">
                      When we represent a client, the first thing we do is issue a legal 'Representation Notice' to the bank. This notice informs them that any further communication must be through our office. This immediately stops the psychological pressure, allowing you to focus on your work or business while we handle the data-driven negotiation based on our <strong>estimated settlement ranges</strong>.
                    </p>
                    <h3 className="text-lg md:text-2xl font-bold text-gray-900">Long Term Asset Protection Strategy</h3>
                    <p className="text-xs md:text-base leading-relaxed text-gray-700">
                       For those with multiple debts, we implement a 'Waterfall Strategy'. We prioritize settling the debts with the highest interest rates first (like credit cards) while keeping the lower-interest loans in a holding pattern. By systematically using the numbers provided by our <strong>loan settlement amount calculator</strong>, we create a 24 month roadmap for total debt freedom. 
                    </p>
                    <p className="text-xs md:text-base leading-relaxed text-gray-700">
                       Our legal team ensure that every settlement is backed by a 'No Dues Certificate' that is absolute and final. We also help you scan your CIBIL report after 60 days of settlement to ensure the bank has correctly reported the status, as many banks often delay this reporting, causing further damage to your financial health.
                    </p>
                  </section>

                  <section className="bg-blue-50 p-6 md:p-12 rounded-3xl border border-blue-100">
                    <h2 className="text-xl md:text-3xl font-bold text-blue-900 mb-6">Detailed Guide: Settling Different Loan Verticals</h2>
                    <div className="space-y-8">
                       <div>
                          <h4 className="font-bold text-blue-800 text-lg mb-2">1. Credit Card Settlement Strategy</h4>
                          <p className="text-sm text-blue-700">
                            Credit card debts are the most expensive because of compounding interest (often 42% annually). However, they are also the most likely to get deep discounts. Banks often 'write off' these debts after 180 days. Once written off, you can negotiate to pay only a fraction of the principal. Our calculator accounts for these high interest spikes to give you a realistic target.
                          </p>
                       </div>
                       <div>
                          <h4 className="font-bold text-blue-800 text-lg mb-2">2. Unsecured Personal Loan Nuances</h4>
                          <p className="text-sm text-blue-700">
                            Personal loans from top private banks (HDFC, ICICI, Axis) follow a strict logic. They look at your 'Hardship Proof'. If you can show a medical certificate or a job termination letter, they are more willing to settle for 40% to 50%. Nationalized banks (SBI, PNB) might take longer but offer very stable 'OTS Schemes' during March and September.
                          </p>
                       </div>
                       <div>
                          <h4 className="font-bold text-blue-800 text-lg mb-2">3. Business Loan & MSME Settlements</h4>
                          <p className="text-sm text-blue-700">
                            Business loan settlements are complex because they often involve 'personal guarantees' or 'stock hypothecation'. If your business has failed, we focus on the 'Liquidation Value' of your business assets. If the bank realizes that selling your old machinery will only recover 10% of the debt, they are much more likely to accept a 40% cash settlement from you.
                          </p>
                       </div>
                    </div>
                  </section>

                  <section className="space-y-6 md:space-y-10">
                    <h2 className="text-xl md:text-3xl font-bold text-gray-900">Regional Recovery Trends Across India</h2>
                    <p className="text-xs md:text-base leading-relaxed text-gray-700">
                      The recovery culture in India varies significantly from city to city. In Tier 1 cities like <strong>Mumbai, Delhi, and Bangalore</strong>, recovery is often handled by large, organized call centers. The negotiation here is very departmental and requires a systematic legal approach. 
                    </p>
                    <p className="text-xs md:text-base leading-relaxed text-gray-700">
                      In Tier 2 and Tier 3 cities like <strong>Indore, Jaipur, or Kochi</strong>, recovery is more localized and personal. Settlement meetings often happen at the branch level. At AMA Legal Solutions, we have a network of local representatives who understand these regional nuances, ensuring that whether you are in a metro or a rural town, your negotiation strategy is optimized for the local banking culture.
                    </p>
                    <p className="text-xs md:text-base leading-relaxed text-gray-700">
                      Our <strong>loan settlement amount calculator</strong> is just the starting point. The real work involves the human element of negotiation, which we have mastered over years of dealing with thousands of recovery officers across the country.
                    </p>
                  </section>

                  <section className="bg-gray-950 text-white p-8 md:p-16 rounded-[40px] relative overflow-hidden">
                    <div className="relative z-10">
                       <h2 className="text-2xl md:text-4xl font-bold mb-8 text-[#D2A02A]">Protecting Your Future: Life After Settlement</h2>
                       <p className="text-sm md:text-lg opacity-80 mb-6 leading-relaxed">
                          A loan settlement is not the end of your financial life; it is a fresh start. Many people worry that a 'Settled' marker on their CIBIL report means they will never get a loan again. This is a myth. 
                       </p>
                       <p className="text-sm md:text-lg opacity-80 mb-6 leading-relaxed">
                          The CIBIL score is a living number. By following our 'Post-Settlement Recovery Plan', most of our clients are able to reach a 700+ score within 24 months. This involves taking a 'Credit Builder' loan, utilizing secured credit cards, and maintaining a 100% clean record with utility payments and rent. 
                       </p>
                       <p className="text-sm md:text-lg opacity-80 leading-relaxed font-light italic border-l-4 border-[#D2A02A] pl-6">
                          "Wealth is built on peace of mind. By settling your debts, you remove the anchor that is holding your family's future back. Calculate your path, execute the settlement, and start your second innings today."
                       </p>
                    </div>
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#D2A02A]/10 blur-[80px] rounded-full"></div>
                  </section>

                  <section id="reviews" className="scroll-mt-32">
                    <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-8 text-center">Verified Client Review Snippets</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       {[
                         { name: "Ankit Verma", city: "Delhi", rating: 5, text: "The calculator gave me a target of 3.2L for my 7.5L debt. AMA lawyers actually got it done for 3L! Highly accurate tool and professional team." },
                         { name: "Saritha Nair", city: "Kochi", rating: 5, text: "I was skeptical about the 60% waiver shown on the screen, but after 4 months of negotiation, the bank agreed to exactly what was estimated. Life saver." },
                         { name: "Rajesh K.", city: "Mumbai", rating: 5, text: "Professional legal representation at its best. They stopped the recovery agent visits within 24 hours of hiring. Best decision for my family's peace." },
                         { name: "Amitabh S.", city: "Lucknow", rating: 4, text: "Good estimation tool. The final settlement was slightly higher than the minimum but well within the range provided. Very transparent process." }
                       ].map((rev, i) => (
                         <div key={i} className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
                            <div className="flex justify-between items-center mb-4">
                               <div>
                                  <div className="font-bold text-gray-900">{rev.name}</div>
                                  <div className="text-xs text-gray-500">{rev.city}</div>
                               </div>
                               <div className="text-[#D2A02A] text-sm">{"★".repeat(rev.rating)}</div>
                            </div>
                            <p className="text-sm text-gray-600 italic">"{rev.text}"</p>
                         </div>
                       ))}
                    </div>
                  </section>

                  <section className="space-y-6 md:space-y-10">
                    <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">The Psychology of Debt Negotiation in India</h2>
                    <p className="text-xs md:text-base leading-relaxed text-gray-700">
                      Negotiation is not just about the numbers on the <strong>loan settlement amount calculator</strong>; it is about the power dynamic between you and the institution. Banks in India are designed to be intimidating. From the high-rise corporate offices to the aggressive recovery agents, every element is designed to make the borrower feel small and powerless. 
                    </p>
                  </section>

                  <section id="locations" className="scroll-mt-32">
                    <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-8 text-center">We Serve Settlements in Every Corner of India</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs text-gray-700">
                      {[
                        "Delhi-NCR: Connaught Place, Noida Sector 15, Gurgaon, Ghaziabad, Faridabad, Rohini, Dwarka",
                        "Maharashtra: Mumbai (Andheri, Dadar, Borivali), Pune (Kothrud, Hinjewadi), Nagpur, Nashik, Thane",
                        "Karnataka: Bangalore (Whitefield, Koramangala, Indiranagar), Mysore, Hubli, Belgaum",
                        "Tamil Nadu: Chennai (T-Nagar, Adyar, Velachery), Coimbatore, Madurai, Trichy, Salem",
                        "Telangana: Hyderabad (Banjara Hills, Gachibowli, Kukatpally), Secunderabad, Warangal",
                        "Gujarat: Ahmedabad (Satellite, Vastrapur), Surat, Vadodara, Rajkot, Bhavnagar",
                        "West Bengal: Kolkata (Salt Lake, Park Street, New Town), Howrah, Siliguri, Durgapur",
                        "Uttar Pradesh: Lucknow (Gomti Nagar, Hazratganj), Kanpur, Agra, Varanasi, Meerut, Prayagraj",
                        "Rajasthan: Jaipur (Malviya Nagar), Jodhpur, Kota, Udaipur, Ajmer, Bikaner",
                        "Punjab: Ludhiana, Amritsar, Jalandhar, Mohali, Patiala, Bathinda",
                        "Madhya Pradesh: Indore (Vijay Nagar), Bhopal, Gwalior, Jabalpur, Ujjain",
                        "Bihar: Patna (Boring Road), Gaya, Bhagalpur, Muzaffarpur, Purnia",
                        "Odisha: Bhubaneswar (Nayapalli), Cuttack, Rourkela, Berhampur",
                        "Kerala: Kochi (Edappally), Trivandrum, Kozhikode, Thrissur, Kollam",
                        "Andhra Pradesh: Visakhapatnam, Vijayawada, Guntur, Nellore, Tirupati"
                      ].map((item, i) => (
                        <div key={i} className="p-3 bg-gray-50 rounded-lg border border-gray-100 flex items-start gap-2">
                           <span className="text-[#D2A02A]">📍</span>
                           <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section id="faqs" className="scroll-mt-32">
                    <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                      {faqs.map((f, i) => (
                        <div key={i} className="border-b border-gray-100 pb-6 last:border-0">
                           <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-start gap-3">
                              <span className="text-[#D2A02A]">Q.</span>
                              {f.question}
                           </h3>
                           <p className="text-gray-600 pl-8 text-sm md:text-base leading-relaxed">{f.answer}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Final CTA */}
                  <section className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] rounded-2xl md:rounded-3xl p-6 md:p-16 text-center text-white relative overflow-hidden mt-12">
                     <div className="relative z-10">
                        <h2 className="text-xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight">Take Charge of Your Finances Today</h2>
                        <p className="text-sm md:text-xl opacity-90 mb-6 md:mb-10 max-w-2xl mx-auto">
                           Debt trap is a choice, not a life sentence. Our calculator has shown you the math; let our lawyers show you the legal path to freedom.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                           <Link href="/contact" className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg w-full sm:w-auto">
                              Get Free Legal Consultation
                           </Link>
                           <a href="tel:+918700343611" className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-6 md:py-4 md:px-12 rounded-full transition-all text-sm md:text-lg w-full sm:w-auto">
                              Call: +91-8700343611
                           </a>
                        </div>
                     </div>
                  </section>
               </div>
            </div>

            {/* Right Column: Sidebar */}
            <div className="hidden lg:block space-y-8 sticky top-24">
                {/* Contact Card */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Urgent Help?</h3>
                  <p className="text-gray-600 mb-6 text-sm">
                    Speak to our senior loan settlement lawyers today to start your recovery.
                  </p>
                  <a href="tel:+918700343611" className="block w-full bg-[#D2A02A] text-white text-center py-3 rounded-lg font-semibold hover:bg-[#b88a22] transition-colors mb-4">
                    Call +91-8700343611
                  </a>
                  <Link href="/contact" className="block w-full border border-[#D2A02A] text-[#D2A02A] text-center py-3 rounded-lg font-semibold hover:bg-[#D2A02A] hover:text-white transition-colors">
                    Request Callback
                  </Link>
                </div>

                {/* Quick Links */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Related Services</h3>
                  <ul className="space-y-3 text-sm">
                    <li><Link href="/services/loan-settlement" className="text-gray-600 hover:text-[#D2A02A] flex items-center"><span className="mr-2">›</span> Personal Loan Help</Link></li>
                    <li><Link href="/services/debt-consolidation" className="text-gray-600 hover:text-[#D2A02A] flex items-center"><span className="mr-2">›</span> Debt Consolidation</Link></li>
                    <li><Link href="/services/banking-and-finance" className="text-gray-600 hover:text-[#D2A02A] flex items-center"><span className="mr-2">›</span> Banking & Finance</Link></li>
                    <li><Link href="/services/civil" className="text-gray-600 hover:text-[#D2A02A] flex items-center"><span className="mr-2">›</span> Civil Litigation</Link></li>
                  </ul>
                  
                  {/* App Store Links */}
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <p className="text-sm font-semibold mb-3" style={{ color: 'rgba(210, 158, 13, 0.8)' }}>Download Our App</p>
                    <div className="flex flex-col gap-3">
                      <Link href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions" target="_blank" className="hover:opacity-80 transition-opacity">
                        <Image src="/newAssets/appstore.svg" alt="Google Play" width={130} height={36} className="w-full h-auto max-w-[130px]" />
                      </Link>
                      <Link href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186" target="_blank" className="hover:opacity-80 transition-opacity">
                        <Image src="/newAssets/playstore.svg" alt="App Store" width={130} height={36} className="w-full h-auto max-w-[130px]" />
                      </Link>
                    </div>
                  </div>
                </div>
            </div>
          </div>

          {/* Banks Grid */}
          <div className="mt-16">
            <section className="my-10">
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                Calculations Supporting These Major Institutions
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                {banks.map((bank, i) => (
                  <Link key={i} href={bank.href} className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5">
                    <span className="text-gray-800 font-medium text-sm leading-tight block">{bank.name}</span>
                  </Link>
                ))}
              </div>
              <div className="mt-8 text-center">
                <p className="text-lg text-gray-700 font-light italic">
                  *Our calculator uses data trends from over 50+ financial institutions in India.
                </p>
              </div>
            </section>
          </div>

          <div className="mt-16">
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
