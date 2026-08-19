"use client";

import React, { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";

export default function PersonalLoanDebtSettlementClient() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    bankName: "",
    loanAmount: "",
    debtType: "Personal Loan",
    message: "",
  });

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const tocSections = [
    { id: "introduction", title: "Commercial Debt Crisis in India" },
    { id: "what-is-debt-settlement", title: "What Is Personal Loan Debt Settlement?" },
    { id: "rbi-fair-practices", title: "RBI Fair Practices & Anti-Harassment Rules" },
    { id: "statutory-remedies", title: "Borrower Rights & Statutory Legal Remedies" },
    { id: "step-by-step-process", title: "The 5-Step Legal Settlement Protocol" },
    { id: "self-vs-advocate", title: "Self-Settlement vs. Advocate Representation" },
    { id: "cibil-credit-impact", title: "CIBIL Score Impact & Credit Repair Roadmap" },
    { id: "why-ama-legal-solutions", title: "Why Choose AMA Legal Solutions" },
    { id: "more-legal-guides", title: "More Legal Debt Relief Guides" },
    { id: "frequently-asked-questions", title: "Frequently Asked Questions" },
  ];

  const faqs = [
    {
      question: "What is personal loan debt settlement under Indian banking law?",
      answer: "Personal loan debt settlement is a legally binding compromise agreement between a defaulting borrower and a lending institution where the lender accepts a discounted lump-sum payment to extinguish the debt completely. Regulated under Reserve Bank of India (RBI) compromise settlement guidelines, this process enables banks and NBFCs to resolve Non-Performing Assets (NPAs) while granting honest borrowers facing genuine financial hardship a complete legal discharge through a formal No Dues Certificate (NDC)."
    },
    {
      question: "How much waiver can be negotiated on a personal loan debt settlement?",
      answer: "Depending on the vintage of default, NPA classification stage, and verified financial hardship documentation, professional advocates typically negotiate waivers between 40% and 75% of the total outstanding loan balance. The settlement process initially eliminates 100% of accumulated penal interest, late payment surcharges, and compounding fees before negotiating a substantial reduction on the principal loan amount. Final compromise figures are reviewed and approved by the bank's internal credit and settlement committees."
    },
    {
      question: "Can personal loan debt settlement legally stop recovery agent harassment?",
      answer: "Yes, engaging an authorized legal law firm puts an immediate stop to recovery agent harassment through formal legal representation. Under RBI Master Directions on Fair Practices Codes, once an advocate issues a formal Cease-and-Desist notice and representation memo, lenders must immediately cease direct contact and route all future communications exclusively through legal counsel. Continued unauthorized visits, abusive calls, or third-party disclosures expose the lender to statutory penalties before the RBI Ombudsman and criminal complaints under the Indian Penal Code."
    },
    {
      question: "What is the difference between a One Time Settlement (OTS) and loan restructuring?",
      answer: "A One Time Settlement (OTS) permanently terminates the loan contract through a negotiated lump-sum payoff at a steep discount, resulting in a 'Settled' remark on credit bureau records and zero future financial liability. In contrast, loan restructuring modifies the existing repayment terms by extending the loan tenure, adjusting the interest rate, or granting a temporary moratorium without reducing the principal debt. While restructuring keeps the loan marked as active or standard, it often increases the total cumulative interest paid over the long term."
    },
    {
      question: "What verifiable documents are required to prove financial hardship for debt settlement?",
      answer: "To establish bona fide financial hardship for a personal loan debt settlement, borrowers must present verified documentary evidence demonstrating an involuntary loss of repayment capacity. Mandatory records include employer termination letters or salary reduction slips for salaried individuals, audited profit-and-loss statements or GST return filings showing business failure for entrepreneurs, and medical hospital discharge summaries for severe illnesses. These documents are compiled into a formal legal hardship brief submitted to the bank's Stressed Asset Management committee."
    },
    {
      question: "Can a bank arrest a borrower or initiate criminal proceedings for personal loan default?",
      answer: "No, default on an unsecured personal loan is strictly a civil dispute arising from a breach of contract and does not constitute a criminal offense punishable by arrest or imprisonment. However, if security cheques or electronic NACH mandates dishonor, lenders may initiate proceedings under Section 138 of the Negotiable Instruments Act or Section 25 of the Payment and Settlement Systems Act. An experienced debt settlement advocate defends these statutory notices, appears before the court or National Lok Adalat, and converts the judicial dispute into a mutually agreed settlement."
    },
    {
      question: "How does personal loan debt settlement impact my CIBIL score and how can I restore it?",
      answer: "Settling a personal loan causes credit bureaus such as CIBIL, Experian, and Equifax to reflect the account status as 'Settled', which usually causes a temporary drop of 50 to 120 points on your credit score. However, this is significantly less detrimental than remaining in continuous active default, which causes ongoing point deductions and legal exposure each billing cycle. Borrowers can systematically rebuild their CIBIL score to 750+ within 18 to 24 months by managing a secured credit card backed by a fixed deposit and maintaining zero default history on new facilities."
    },
    {
      question: "What fee model does AMA Legal Solutions utilize for personal loan debt settlement?",
      answer: "AMA Legal Solutions operates a transparent, highly ethical, and result-oriented fee structure specifically tailored to individuals experiencing financial distress. The advisory begins with a modest administrative retainer to draft legal notices, establish representation, and freeze recovery harassment. The primary legal fee is structured as a performance-based success fee calculated as a predefined percentage of the actual debt amount saved through advocate negotiations, aligning our incentives directly with maximizing your financial relief."
    }
  ];

  const stepListItems = [
    {
      title: "Comprehensive Forensic Debt & Hardship Audit",
      desc: "Our banking legal team performs a rigorous audit of your loan agreements, interest compounding calculations, penalty surcharges, and verified hardship proofs (job termination, hospital bills, or business revenue loss)."
    },
    {
      title: "Immediate Advocate Representation & Anti-Harassment Shield",
      desc: "We serve an official legal representation notice and Cease-and-Desist mandate on all lending banks, NBFCs, and collection agencies, requiring all communications to be routed exclusively through our law firm under RBI mandates."
    },
    {
      title: "Drafting the Statutory One Time Settlement (OTS) Proposal",
      desc: "We draft a comprehensive legal OTS proposal outlining your genuine financial distress, statutory defenses, and an affordable, realistic lump-sum settlement figure grounded in regulatory precedent."
    },
    {
      title: "High-Tier Executive & Credit Committee Negotiations",
      desc: "Our senior advocates interface directly with the bank's zonal recovery heads, Stressed Asset Management (SAM) verticals, and credit committees to strike down extortionate penalties and maximize principal waivers."
    },
    {
      title: "Settlement Letter Scrutiny & Securing the No Dues Certificate (NDC)",
      desc: "Before any payment is released, our attorneys rigorously verify the authenticity of the bank's official settlement letter. Upon payment, we enforce prompt issuance of the No Dues Certificate and reporting updates to CIBIL."
    }
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://www.amalegalsolutions.com/personal-loan-debt-settlement#article",
        "headline": "Personal Loan Debt Settlement in India: Legal Relief, RBI Codes, and Negotiation Guide",
        "description": "Comprehensive legal analysis of personal loan debt settlement in India. Learn RBI Fair Practices Codes, statutory remedies against recovery harassment, OTS negotiation frameworks, and credit restoration.",
        "image": [
          "https://www.amalegalsolutions.com/images/og/personal-loan-debt-settlement.png"
        ],
        "datePublished": "2026-01-20T09:00:00+05:30",
        "dateModified": "2026-08-19T17:30:00+05:30",
        "author": {
          "@type": "Person",
          "name": "Anuj Anand Malik",
          "url": "https://www.amalegalsolutions.com/author/anuj-anand-malik"
        },
        "reviewedBy": {
          "@type": "Organization",
          "name": "Team AMA Legal Solutions",
          "url": "https://www.amalegalsolutions.com"
        },
        "publisher": {
          "@type": "Organization",
          "@id": "https://www.amalegalsolutions.com/#organization",
          "name": "AMA Legal Solutions",
          "url": "https://www.amalegalsolutions.com",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.amalegalsolutions.com/newAssets/logo/ama_box.svg"
          },
          "sameAs": [
            "https://www.facebook.com/amalegalsolutions",
            "https://twitter.com/amalegalsolutions",
            "https://www.linkedin.com/company/amalegalsolutions"
          ]
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.amalegalsolutions.com/personal-loan-debt-settlement"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://www.amalegalsolutions.com/personal-loan-debt-settlement",
        "url": "https://www.amalegalsolutions.com/personal-loan-debt-settlement",
        "name": "Personal Loan Debt Settlement in India | AMA Legal Solutions",
        "description": "Expert advocate-led personal loan debt settlement to halt harassment, negotiate up to 75% debt waivers, and secure official No Dues Certificates.",
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": ["h1", "#quick-answer"]
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.amalegalsolutions.com/personal-loan-debt-settlement#faq",
        "mainEntity": faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      },
      {
        "@type": "Product",
        "@id": "https://www.amalegalsolutions.com/personal-loan-debt-settlement#product",
        "name": "Personal Loan Debt Settlement Legal Services",
        "image": "https://www.amalegalsolutions.com/images/og/personal-loan-debt-settlement.png",
        "description": "Premier advocate-led personal loan debt settlement and commercial debt resolution advisory across India. Stop recovery agent harassment, negotiate One Time Settlements (OTS), and obtain valid No Dues Certificates.",
        "brand": {
          "@type": "Organization",
          "name": "AMA Legal Solutions"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5.0",
          "bestRating": "5",
          "reviewCount": "1"
        },
        "review": {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5.0",
            "bestRating": "5"
          },
          "author": {
            "@type": "Person",
            "name": "Vikramaditya S."
          },
          "reviewBody": "Advocate Anuj Anand Malik and AMA Legal Solutions provided phenomenal legal support during my severe financial crisis. They stopped endless harassment from recovery agents immediately and negotiated a 60% waiver on my multiple unsecured personal loans with major banks. Everything was completed transparently with official No Dues Certificates. Truly the most reliable legal debt settlement team in India."
        }
      },
      {
        "@type": "Organization",
        "@id": "https://www.amalegalsolutions.com/#organization",
        "name": "AMA Legal Solutions",
        "url": "https://www.amalegalsolutions.com",
        "logo": "https://www.amalegalsolutions.com/newAssets/logo/ama_box.svg",
        "sameAs": [
          "https://www.facebook.com/amalegalsolutions",
          "https://twitter.com/amalegalsolutions",
          "https://www.linkedin.com/company/amalegalsolutions"
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.amalegalsolutions.com/personal-loan-debt-settlement#breadcrumbs",
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
            "name": "Services",
            "item": "https://www.amalegalsolutions.com/services"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Personal Loan Debt Settlement",
            "item": "https://www.amalegalsolutions.com/personal-loan-debt-settlement"
          }
        ]
      },
      {
        "@type": "ItemList",
        "@id": "https://www.amalegalsolutions.com/personal-loan-debt-settlement#process",
        "name": "The 5-Step Legal Settlement Protocol for Personal Loans",
        "itemListElement": stepListItems.map((item, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": item.title,
          "description": item.desc
        }))
      }
    ]
  };

  return (
    <>
      <script
        id="personal-loan-debt-settlement-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <div className="bg-[#fcfbf9] min-h-screen font-sans text-gray-800 pt-20 md:pt-24">
        
        {/* ================= HERO SECTION ================= */}
        <section className="relative bg-gradient-to-br from-black via-[#1c1813] to-[#5A4C33] text-white overflow-hidden py-14 md:py-24 border-b border-[#D2A02A]/20">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#D2A02A]/15 via-transparent to-transparent pointer-events-none"></div>
          
          <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center">
            <div className="inline-flex items-center gap-2 bg-[#D2A02A]/20 border border-[#D2A02A]/40 text-[#f3cf7a] text-xs md:text-sm font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#D2A02A] animate-pulse"></span>
              India's Premier Legal Debt Relief & Settlement Advisory
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight max-w-5xl mx-auto">
              Strategic <span className="text-[#D2A02A]">Personal Loan Debt Settlement</span> for Honest Borrowers
            </h1>

            <p className="text-sm sm:text-base md:text-xl mb-8 md:mb-10 max-w-3xl mx-auto text-gray-200 leading-relaxed font-light">
              Stop unlawful recovery harassment immediately. Advocate-led negotiations to reduce personal loan liabilities by <strong className="text-white font-semibold">40% to 75%</strong> under Reserve Bank of India (RBI) regulatory compromise frameworks.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto bg-[#D2A02A] hover:bg-[#b08522] text-white font-bold py-3.5 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 shadow-xl hover:shadow-[#D2A02A]/20 text-sm md:text-base flex items-center justify-center gap-2"
              >
                <span>🛡️ Request Case Evaluation</span>
              </button>
              <a
                href="tel:+918700343611"
                className="w-full sm:w-auto bg-transparent border-2 border-[#D2A02A]/60 hover:border-[#D2A02A] text-white hover:bg-white/10 font-bold py-3.5 px-8 rounded-xl transition-all duration-300 text-sm md:text-base flex items-center justify-center gap-2"
              >
                <span>📞 Call +91-8700343611</span>
              </a>
            </div>

            <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-xs md:text-sm text-gray-300 font-medium">
              <span className="flex items-center gap-1.5"><span className="text-[#D2A02A]">✓</span> 100% Confidential Legal Privilege</span>
              <span className="flex items-center gap-1.5"><span className="text-[#D2A02A]">✓</span> Immediate Anti-Harassment Notice</span>
              <span className="flex items-center gap-1.5"><span className="text-[#D2A02A]">✓</span> Formal No Dues Certificate Guaranteed</span>
            </div>
          </div>
        </section>

        {/* ================= ACHIEVEMENTS & TRUST BANNER ================= */}
        <section className="bg-white border-b border-gray-200 shadow-sm py-6">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100">
              
              <div className="flex flex-col items-center justify-center p-2">
                <div className="text-2xl md:text-3xl mb-1.5 text-[#D2A02A]">🔍</div>
                <div className="text-base md:text-lg font-bold text-gray-900">Verified Insights</div>
                <p className="text-xs md:text-sm text-gray-600 font-medium mt-0.5">10,000+ Borrowers Represented</p>
              </div>

              <div className="flex flex-col items-center justify-center p-2 pt-4 md:pt-2">
                <div className="text-2xl md:text-3xl mb-1.5 text-[#D2A02A]">⚖️</div>
                <div className="text-base md:text-lg font-bold text-gray-900">Statutory Remedies</div>
                <p className="text-xs md:text-sm text-gray-600 font-medium mt-0.5">RBI Ombudsman & Section 138 Defense</p>
              </div>

              <div className="flex flex-col items-center justify-center p-2 pt-4 md:pt-2">
                <div className="text-2xl md:text-3xl mb-1.5 text-[#D2A02A]">⭐</div>
                <div className="text-base md:text-lg font-bold text-gray-900">5-Star Advocate Ratings</div>
                <p className="text-xs md:text-sm text-gray-600 font-medium mt-0.5">4.7/5 Score Across 25,000+ Matters</p>
              </div>

              <div className="flex flex-col items-center justify-center p-2 pt-4 md:pt-2">
                <div className="text-2xl md:text-3xl mb-1.5 text-[#D2A02A]">📜</div>
                <div className="text-base md:text-lg font-bold text-gray-900">RBI Compliance Experts</div>
                <p className="text-xs md:text-sm text-gray-600 font-medium mt-0.5">Strict Fair Practices Code Enforcement</p>
              </div>

            </div>
          </div>
        </section>

        {/* ================= MAIN CONTENT LAYOUT ================= */}
        <main className="container mx-auto px-4 max-w-[1600px] py-10">
          <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr_320px] gap-8 items-start">
            
            {/* LEFT SIDEBAR: Table of Contents (Desktop) */}
            <aside className="hidden lg:block sticky top-28 bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-sm font-bold text-[#5A4C33] uppercase tracking-wider mb-4 pb-2 border-b border-gray-100 flex items-center gap-2">
                <span className="text-[#D2A02A]">📑</span> Table of Contents
              </h3>
              <TableOfContents sections={tocSections} orientation="vertical" />
            </aside>

            {/* CENTER: Main Editorial & Legal Content */}
            <article className="min-w-0">
              
              {/* Mobile Table of Contents */}
              <div className="lg:hidden mb-6 sticky top-24 z-20">
                <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-6 sm:p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 space-y-10">
                
                {/* Breadcrumbs Navigation */}
                <nav className="flex text-xs md:text-sm text-gray-500" aria-label="Breadcrumb">
                  <ol className="inline-flex items-center space-x-1 md:space-x-2">
                    <li className="inline-flex items-center">
                      <Link href="/" className="hover:text-[#D2A02A] transition-colors flex items-center">
                        <svg className="w-3.5 h-3.5 mr-1.5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                        </svg>
                        Home
                      </Link>
                    </li>
                    <li>
                      <div className="flex items-center">
                        <span className="text-gray-400 mx-1">/</span>
                        <Link href="/services" className="hover:text-[#D2A02A] transition-colors">
                          Services
                        </Link>
                      </div>
                    </li>
                    <li aria-current="page">
                      <div className="flex items-center">
                        <span className="text-gray-400 mx-1">/</span>
                        <span className="font-semibold text-gray-800 truncate max-w-[200px] sm:max-w-none">
                          Personal Loan Debt Settlement
                        </span>
                      </div>
                    </li>
                  </ol>
                </nav>

                {/* Author Metadata & Social Share */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-gray-100 pb-5 gap-4">
                  <div className="text-xs md:text-sm text-gray-600">
                    By <Link href="/author/anuj-anand-malik" className="text-[#D2A02A] hover:underline font-bold">Advocate Anuj Anand Malik</Link> &bull; Reviewed by <span className="font-semibold text-gray-800">Team AMA Legal Solutions</span> &bull; Updated: August 2026
                  </div>
                  
                  {/* Social Share in Native Colors */}
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-gray-500 uppercase">Share:</span>
                    <a
                      href="https://www.facebook.com/sharer/sharer.php?u=https://www.amalegalsolutions.com/personal-loan-debt-settlement"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:opacity-90 transition font-bold text-xs shadow-sm"
                      title="Share on Facebook"
                      aria-label="Share on Facebook"
                    >
                      f
                    </a>
                    <a
                      href="https://twitter.com/intent/tweet?url=https://www.amalegalsolutions.com/personal-loan-debt-settlement&text=Personal%20Loan%20Debt%20Settlement%20in%20India"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center hover:opacity-90 transition font-bold text-xs shadow-sm"
                      title="Share on X"
                      aria-label="Share on X"
                    >
                      𝕏
                    </a>
                    <a
                      href="https://www.linkedin.com/sharing/share-offsite/?url=https://www.amalegalsolutions.com/personal-loan-debt-settlement"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-[#0A66C2] text-white flex items-center justify-center hover:opacity-90 transition font-bold text-xs shadow-sm"
                      title="Share on LinkedIn"
                      aria-label="Share on LinkedIn"
                    >
                      in
                    </a>
                    <a
                      href="https://api.whatsapp.com/send?text=Personal%20Loan%20Debt%20Settlement%20in%20India%20https://www.amalegalsolutions.com/personal-loan-debt-settlement"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:opacity-90 transition font-bold text-xs shadow-sm"
                      title="Share on WhatsApp"
                      aria-label="Share on WhatsApp"
                    >
                      WA
                    </a>
                  </div>
                </div>

                {/* ================= QUICK ANSWER BLOCK (GEO OPTIMIZED) ================= */}
                <div id="quick-answer" className="bg-amber-50/70 border-l-4 border-[#D2A02A] p-5 sm:p-7 rounded-xl shadow-sm">
                  <div className="flex items-center gap-2 mb-2 text-[#5A4C33] font-bold text-base md:text-lg">
                    <span>⚡</span>
                    <h2>Quick Answer: How Does Personal Loan Debt Settlement Work?</h2>
                  </div>
                  <p className="text-gray-900 font-normal leading-relaxed text-sm md:text-base">
                    Personal loan debt settlement is a structured legal process in India wherein a borrower facing genuine financial distress negotiates a discounted One Time Settlement (OTS) with lending banks or NBFCs. Governed by the Reserve Bank of India (RBI) compromise settlement guidelines, authorized advocates negotiate to waive penal charges, reduce total principal balances by 40% to 75%, stop third-party recovery harassment, and secure an official No Dues Certificate (NDC). This legal compromise extinguishes the entire debt obligation permanently without criminal liabilities.
                  </p>
                </div>

                {/* ================= SECTION 1 ================= */}
                <section id="introduction" className="scroll-mt-32 space-y-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
                    The Commercial Debt Crisis and Unsecured Personal Loans in India
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    The aggressive expansion of retail credit, instant fintech loan apps, and digital banking platforms across India has led to a historic surge in unsecured consumer debt. Unlike secured home or vehicle loans backed by tangible collateral, personal loans are issued purely on personal credit standing and employment credentials. Consequently, commercial lenders price this uncollateralized risk by charging exorbitant annual percentage rates (APR) ranging between 13% and 36%, coupled with steep penal compounding upon default.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    When unexpected macroeconomic disruptions occur—such as sudden corporate downsizing, prolonged medical hospitalization, or catastrophic commercial revenue losses—borrowers can quickly find their monthly equated installments (EMIs) mathematically impossible to service. Missing successive payments triggers automated penal interest rates, late fee levies, and immediate assignment to aggressive third-party recovery agencies. In such distress, pursuing a formal <strong>personal loan debt settlement</strong> through an established legal advisory firm becomes the most prudent, statutory, and cost-effective strategy to achieve debt freedom.
                  </p>
                </section>

                {/* ================= SECTION 2 ================= */}
                <section id="what-is-debt-settlement" className="scroll-mt-32 space-y-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#5A4C33]">
                    What Is Personal Loan Debt Settlement? (Commercial OTS Mechanics)
                  </h2>
                  
                  <div className="bg-[#f6f4ee] border-l-4 border-[#5A4C33] p-4 md:p-6 rounded-r-xl">
                    <p className="text-[#3a3020] text-sm md:text-base font-medium italic">
                      "Personal loan debt settlement is an enforceable legal contract executed between a lending bank or NBFC and a borrower, wherein the creditor agrees to accept a negotiated, discounted lump-sum payment as full and final satisfaction of the total loan account, waiving all remaining balances and future claims."
                    </p>
                  </div>

                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    From a commercial banking perspective, when an unsecured personal loan crosses 90 days of non-payment, Indian banking regulations classify the account as a Non-Performing Asset (NPA). Because the loan carries no collateral for physical asset seizure under the SARFAESI Act, banks must maintain heavy capital provisioning against bad debts on their balance sheets. Prolonged civil litigation in Debt Recovery Tribunals (DRT) or civil courts is both resource-draining and commercially unviable for retail personal loan portfolios.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    Under explicit directives issued by the <a href="https://rbi.org.in/" target="_blank" rel="noopener noreferrer" className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold">Reserve Bank of India (RBI)</a>, commercial banks and Non-Banking Financial Companies (NBFCs) maintain board-approved compromise settlement policies. These policies authorize institutional credit committees to accept compromised One Time Settlements (OTS) from distressed borrowers, writing off unrecoverable interest and portions of the principal to recover immediate cash liquidity.
                  </p>
                </section>

                {/* ================= INFOGRAPHIC EMBED ================= */}
                <figure className="my-8 rounded-2xl overflow-hidden shadow-xl border-2 border-[#D2A02A]/40 bg-gray-900">
                  <Image
                    src="/images/og/personal-loan-debt-settlement.png"
                    alt="Personal Loan Debt Settlement & RBI Fair Practice Guidelines Infographic"
                    width={1200}
                    height={675}
                    className="w-full h-auto object-cover"
                  />
                  <figcaption className="p-3.5 bg-gray-900 text-center text-xs md:text-sm text-gray-300 font-medium">
                    Infographic: Understanding Personal Loan Debt Settlement, Borrower Protections, and RBI Compliant Frameworks in India.
                  </figcaption>
                </figure>

                {/* ================= SECTION 3 ================= */}
                <section id="rbi-fair-practices" className="scroll-mt-32 space-y-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#5A4C33]">
                    RBI Fair Practices Code & Anti-Harassment Regulations
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    The Reserve Bank of India has established comprehensive, mandatory regulations governing how financial institutions and their recovery agents must treat borrowers. Unlawful collection practices are strictly prohibited under Indian law, and engaging specialized debt settlement advocates ensures that your statutory protections are vigorously enforced:
                  </p>

                  <blockquote className="border-l-4 border-[#D2A02A] pl-5 py-3 bg-gray-50 text-gray-800 italic rounded-r-lg text-sm md:text-base">
                    "Lenders shall ensure that recovery agents do not resort to intimidation, harassment, or verbal abuse of any kind against borrowers. Lenders shall strictly refrain from calling at uncivil hours, contacting unrelated third parties, or attempting public humiliation." — RBI Master Direction on Fair Practices Code.
                  </blockquote>

                  <div className="grid sm:grid-cols-2 gap-4 my-4">
                    <div className="p-4 rounded-xl border border-gray-200 bg-white shadow-sm">
                      <div className="text-[#D2A02A] font-bold text-base mb-1">⏰ Regulated Calling Hours</div>
                      <p className="text-xs md:text-sm text-gray-600">Recovery calls and agent visits are legally restricted to between 08:00 AM and 07:00 PM. Telephonic calls before 8 AM or after 7 PM constitute punishable harassment.</p>
                    </div>
                    <div className="p-4 rounded-xl border border-gray-200 bg-white shadow-sm">
                      <div className="text-[#D2A02A] font-bold text-base mb-1">🔒 Absolute Borrower Privacy</div>
                      <p className="text-xs md:text-sm text-gray-600">Lenders cannot contact your workplace colleagues, supervisors, family members, or neighbors to disclose your loan default or settlement proceedings.</p>
                    </div>
                    <div className="p-4 rounded-xl border border-gray-200 bg-white shadow-sm">
                      <div className="text-[#D2A02A] font-bold text-base mb-1">🚫 Prohibition of Coercion & Threats</div>
                      <p className="text-xs md:text-sm text-gray-600">Threatening arrest, confiscation of household goods, or using musclemen violates the Indian Penal Code and triggers regulatory sanctions.</p>
                    </div>
                    <div className="p-4 rounded-xl border border-gray-200 bg-white shadow-sm">
                      <div className="text-[#D2A02A] font-bold text-base mb-1">📜 Mandatory Written Documentation</div>
                      <p className="text-xs md:text-sm text-gray-600">Verbal settlement promises by recovery agents carry zero legal validity. All settlement offers must be issued on official bank letterhead.</p>
                    </div>
                  </div>
                </section>

                {/* ================= SECTION 4 ================= */}
                <section id="statutory-remedies" className="scroll-mt-32 space-y-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#5A4C33]">
                    Borrower Rights & Statutory Legal Remedies Under Indian Law
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    Experiencing an involuntary loan default does not compromise your constitutional and statutory rights as an Indian citizen. The legal system provides robust remedies to protect borrowers from predatory practices:
                  </p>

                  <ul className="space-y-4 text-sm md:text-base text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="text-[#D2A02A] font-bold text-lg leading-none mt-1">▶</span>
                      <div>
                        <strong>RBI Integrated Ombudsman Scheme:</strong> Distressed borrowers facing persistent collection harassment, unauthorized bank charges, or denial of compromise settlement reviews can escalate complaints via the <a href="https://cms.rbi.org.in/" target="_blank" rel="noopener noreferrer" className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold">RBI Integrated Ombudsman Portal</a> for rapid regulatory inquiry and binding resolution.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#D2A02A] font-bold text-lg leading-none mt-1">▶</span>
                      <div>
                        <strong>Consumer Protection Act, 2019:</strong> Unfair trade practices, illegal debiting of accounts, and mental agony caused by aggressive recovery agents can be aggressively challenged before District, State, and National Consumer Commissions, including the <a href="https://ncdrc.nic.in/" target="_blank" rel="noopener noreferrer" className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold">National Consumer Disputes Redressal Commission (NCDRC)</a>, seeking punitive damages.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#D2A02A] font-bold text-lg leading-none mt-1">▶</span>
                      <div>
                        <strong>Supreme Court Precedents on Borrower Dignity:</strong> In seminal judgments such as <em>ICICI Bank Ltd. v. Prakash Kaur</em> and <em>Manager, ICICI Bank Ltd. v. Prakash Kaur & Ors.</em>, the <a href="https://main.sci.gov.in/" target="_blank" rel="noopener noreferrer" className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold">Supreme Court of India</a> established that recovery through strong-arm tactics is illegal and that banks are vicariously liable for the unlawful acts of their recovery agents.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#D2A02A] font-bold text-lg leading-none mt-1">▶</span>
                      <div>
                        <strong>Statutory Defenses (Section 138 NI Act & Section 25 PSS Act):</strong> In situations where lenders deposit security cheques or trigger automated NACH dishonors, our legal team files comprehensive replies, demonstrates that the cheques were issued as security rather than existing debt discharge, and facilitates peaceful compromise settlements before National Lok Adalats.
                      </div>
                    </li>
                  </ul>
                </section>

                {/* ================= SECTION 5 ================= */}
                <section id="step-by-step-process" className="scroll-mt-32 space-y-6">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#5A4C33]">
                    The 5-Step Legal Settlement Protocol for Personal Loans
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    Executing a commercially viable and legally binding personal loan debt settlement requires a disciplined, multi-stage protocol. AMA Legal Solutions utilizes a proven 5-stage legal methodology:
                  </p>

                  <div className="space-y-4">
                    {stepListItems.map((step, idx) => (
                      <div key={idx} className="flex gap-4 p-4 md:p-5 rounded-xl border border-gray-100 bg-gray-50/80 hover:bg-white transition-all shadow-sm">
                        <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#5A4C33] text-white flex items-center justify-center font-bold text-sm md:text-base shadow-sm">
                          {idx + 1}
                        </div>
                        <div>
                          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1">{step.title}</h3>
                          <p className="text-xs md:text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* ================= SECTION 6 ================= */}
                <section id="self-vs-advocate" className="scroll-mt-32 space-y-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#5A4C33]">
                    Self-Settlement vs. Advocate-Led Personal Loan Debt Settlement
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    While borrowers technically possess the option to approach banks individually, negotiating against structured banking credit committees without professional legal representation involves significant risks:
                  </p>

                  <div className="overflow-x-auto my-4">
                    <table className="min-w-full text-left text-xs md:text-sm border border-gray-200 rounded-xl overflow-hidden">
                      <thead className="bg-[#5A4C33] text-white">
                        <tr>
                          <th className="p-3 md:p-4 font-semibold">Strategic Dimension</th>
                          <th className="p-3 md:p-4 font-semibold">Self-Negotiation Attempt</th>
                          <th className="p-3 md:p-4 font-semibold bg-[#D2A02A] text-white">AMA Legal Solutions Representation</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 bg-white">
                        <tr>
                          <td className="p-3 md:p-4 font-bold text-gray-900">Anti-Harassment Shield</td>
                          <td className="p-3 md:p-4 text-red-600">Recovery calls and home visits persist unabated</td>
                          <td className="p-3 md:p-4 text-emerald-700 font-semibold bg-amber-50/40">Immediate legal Cease-and-Desist halts all agent contact</td>
                        </tr>
                        <tr>
                          <td className="p-3 md:p-4 font-bold text-gray-900">Debt Waiver Percentage</td>
                          <td className="p-3 md:p-4 text-gray-600">Typically 10% to 25% (penal fees usually retained)</td>
                          <td className="p-3 md:p-4 text-emerald-700 font-semibold bg-amber-50/40">40% to 75% waiver negotiated on total ledger balance</td>
                        </tr>
                        <tr>
                          <td className="p-3 md:p-4 font-bold text-gray-900">Statutory Notice Defense</td>
                          <td className="p-3 md:p-4 text-red-600">High risk of ex-parte orders in Sec 138 or Arbitration</td>
                          <td className="p-3 md:p-4 text-emerald-700 font-semibold bg-amber-50/40">Formal advocate replies & Lok Adalat representation</td>
                        </tr>
                        <tr>
                          <td className="p-3 md:p-4 font-bold text-gray-900">Legal Document Validity</td>
                          <td className="p-3 md:p-4 text-red-600">Vulnerable to fake WhatsApp settlement letters by agents</td>
                          <td className="p-3 md:p-4 text-emerald-700 font-semibold bg-amber-50/40">Thoroughly vetted bank letters & enforceable No Dues Certificates</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* ================= SECTION 7 ================= */}
                <section id="cibil-credit-impact" className="scroll-mt-32 space-y-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#5A4C33]">
                    Credit Score (CIBIL) Impact & 24-Month Credit Repair Roadmap
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    Transparency regarding credit score consequences is paramount in commercial debt resolution. When a personal loan account is settled under an OTS scheme, credit bureaus (CIBIL, Equifax, Experian, CRIF High Mark) record the status as "Settled" rather than "Closed."
                  </p>
                  
                  <div className="grid sm:grid-cols-3 gap-4 my-4">
                    <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                      <div className="text-sm font-bold text-[#5A4C33] mb-1">1. Immediate Relief & Closure</div>
                      <p className="text-xs text-gray-600">Freezes interest compounding, removes active default status, and terminates all imminent judicial recovery actions permanently.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                      <div className="text-sm font-bold text-[#5A4C33] mb-1">2. Credit Rebuilding (Months 1–12)</div>
                      <p className="text-xs text-gray-600">Acquire a secured credit card backed by a fixed deposit. Maintain credit utilization strictly below 25% to build positive payment cycles.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                      <div className="text-sm font-bold text-[#5A4C33] mb-1">3. Long-Term Restoration (Months 18–24)</div>
                      <p className="text-xs text-gray-600">As on-time payment records accumulate, the impact of the historical settled tag diminishes, restoring creditworthiness for major loans.</p>
                    </div>
                  </div>
                </section>

                {/* ================= SECTION 8 ================= */}
                <section id="why-ama-legal-solutions" className="scroll-mt-32 space-y-6">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
                    Why Choose AMA Legal Solutions for Personal Loan Debt Settlement?
                  </h2>
                  
                  <div className="grid sm:grid-cols-3 gap-4 text-center">
                    <div className="p-5 rounded-xl bg-gray-50 border border-gray-200 shadow-sm hover:border-[#D2A02A] transition-colors">
                      <div className="text-3xl mb-2">⚖️</div>
                      <h3 className="font-bold text-base text-[#5A4C33] mb-1">Practicing Advocates</h3>
                      <p className="text-xs text-gray-600">High Court and Supreme Court advocates with deep statutory mastery in banking laws, debt recovery, and consumer protection.</p>
                    </div>
                    <div className="p-5 rounded-xl bg-gray-50 border border-gray-200 shadow-sm hover:border-[#D2A02A] transition-colors">
                      <div className="text-3xl mb-2">🛡️</div>
                      <h3 className="font-bold text-base text-[#5A4C33] mb-1">Zero-Harassment Shield</h3>
                      <p className="text-xs text-gray-600">We mandate all recovery communication through our legal firm, safeguarding your peace of mind and family dignity.</p>
                    </div>
                    <div className="p-5 rounded-xl bg-gray-50 border border-gray-200 shadow-sm hover:border-[#D2A02A] transition-colors">
                      <div className="text-3xl mb-2">🎯</div>
                      <h3 className="font-bold text-base text-[#5A4C33] mb-1">Success-Driven Fee</h3>
                      <p className="text-xs text-gray-600">No predatory upfront fees. Our success fee is directly tied to the actual debt reduction we achieve on your behalf.</p>
                    </div>
                  </div>
                </section>

                {/* ================= AUTHOR BYLINE ================= */}
                <div className="p-5 sm:p-6 bg-[#f7f5ef] text-[#30261C] rounded-2xl flex flex-col sm:flex-row items-center gap-5 border-l-4 border-[#D2A02A] shadow-sm">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 relative rounded-full overflow-hidden border-2 border-[#D2A02A] flex-shrink-0 shadow-md">
                    <Image
                      src="/anujbhiya.png"
                      alt="Advocate Anuj Anand Malik"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">Written by Advocate Anuj Anand Malik</h3>
                    <p className="text-gray-600 text-xs sm:text-sm mt-1 leading-relaxed">
                      Managing Partner at AMA Legal Solutions. Supreme Court and High Court Advocate specializing in commercial debt resolution, banking litigation, and borrower rights defense.
                    </p>
                    <Link
                      href="/author/anuj-anand-malik"
                      className="text-[#D2A02A] hover:text-[#5A4C33] font-bold text-xs sm:text-sm mt-2 inline-flex items-center gap-1 underline transition-colors"
                    >
                      View Full Verified Legal Profile & Credentials →
                    </Link>
                  </div>
                </div>

                {/* ================= EXTERNAL AUTHORITY SOURCING ================= */}
                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span>📚</span> Statutory Authorities & Legal References
                  </h3>
                  <ul className="space-y-2 text-xs md:text-sm text-gray-600">
                    <li>
                      • <a href="https://www.rbi.org.in/" target="_blank" rel="noopener noreferrer" className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-medium">Reserve Bank of India (RBI)</a> — Master Directions on Compromise Settlements and Regulatory Framework for Stressed Assets.
                    </li>
                    <li>
                      • <a href="https://cms.rbi.org.in/" target="_blank" rel="noopener noreferrer" className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-medium">RBI Integrated Ombudsman Scheme</a> — Mechanism for Resolving Deficiencies in Banking Services & Harassment Grievances.
                    </li>
                    <li>
                      • <a href="https://ncdrc.nic.in/" target="_blank" rel="noopener noreferrer" className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-medium">National Consumer Disputes Redressal Commission (NCDRC)</a> — Redressal of Unfair Trade Practices under the Consumer Protection Act, 2019.
                    </li>
                    <li>
                      • <a href="https://www.indiacode.nic.in/handle/123456789/2006" target="_blank" rel="noopener noreferrer" className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-medium">India Code — SARFAESI Act, 2002</a> & <a href="https://www.indiacode.nic.in/handle/123456789/1960" target="_blank" rel="noopener noreferrer" className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-medium">Recovery of Debts and Bankruptcy Act, 1993</a>.
                    </li>
                    <li>
                      • <a href="https://main.sci.gov.in/" target="_blank" rel="noopener noreferrer" className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-medium">Supreme Court of India</a> — Landmark Judgments on Borrower Dignity and Prohibition of Coercive Recovery Tactics.
                    </li>
                    <li>
                      • <a href="https://incometaxindia.gov.in/" target="_blank" rel="noopener noreferrer" className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-medium">Income Tax Department of India</a> — Capital vs. Revenue Treatment of Compromise Personal Loan Waivers.
                    </li>
                  </ul>
                </div>

                {/* ================= MORE LEGAL GUIDES (TOPICAL INTERNAL LINKS) ================= */}
                <section id="more-legal-guides" className="border-t border-gray-200 pt-8">
                  <h3 className="text-lg md:text-xl font-bold text-[#5A4C33] mb-4 flex items-center gap-2">
                    <span>📖</span> Explore Related Legal Debt Relief Guides
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    <Link
                      href="/personal-loan-settlement"
                      className="p-3.5 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:bg-amber-50/40 transition-all text-xs md:text-sm font-semibold text-gray-800 flex items-center justify-between"
                    >
                      <span>Personal Loan Settlement Guide</span>
                      <span className="text-[#D2A02A]">→</span>
                    </Link>
                    <Link
                      href="/can-i-settle-my-personal-loan"
                      className="p-3.5 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:bg-amber-50/40 transition-all text-xs md:text-sm font-semibold text-gray-800 flex items-center justify-between"
                    >
                      <span>Can I Settle My Personal Loan?</span>
                      <span className="text-[#D2A02A]">→</span>
                    </Link>
                    <Link
                      href="/personal-loan-settlement-services"
                      className="p-3.5 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:bg-amber-50/40 transition-all text-xs md:text-sm font-semibold text-gray-800 flex items-center justify-between"
                    >
                      <span>Personal Loan Settlement Services</span>
                      <span className="text-[#D2A02A]">→</span>
                    </Link>
                    <Link
                      href="/how-can-I-negotiate-a-personal-loan-settlement-with-lenders"
                      className="p-3.5 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:bg-amber-50/40 transition-all text-xs md:text-sm font-semibold text-gray-800 flex items-center justify-between"
                    >
                      <span>Negotiating Settlement with Lenders</span>
                      <span className="text-[#D2A02A]">→</span>
                    </Link>
                    <Link
                      href="/how-to-settle-my-personal-loan-by-myself"
                      className="p-3.5 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:bg-amber-50/40 transition-all text-xs md:text-sm font-semibold text-gray-800 flex items-center justify-between"
                    >
                      <span>Settling Personal Loan By Yourself</span>
                      <span className="text-[#D2A02A]">→</span>
                    </Link>
                    <Link
                      href="/best-loan-settlement-companies-india-flexible-payment-plans"
                      className="p-3.5 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:bg-amber-50/40 transition-all text-xs md:text-sm font-semibold text-gray-800 flex items-center justify-between"
                    >
                      <span>Best Settlement Companies & Plans</span>
                      <span className="text-[#D2A02A]">→</span>
                    </Link>
                    <Link
                      href="/bank-loan-settlement-rules"
                      className="p-3.5 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:bg-amber-50/40 transition-all text-xs md:text-sm font-semibold text-gray-800 flex items-center justify-between"
                    >
                      <span>Bank Loan Settlement Rules</span>
                      <span className="text-[#D2A02A]">→</span>
                    </Link>
                    <Link
                      href="/rbi-guidelines-for-recovery-agents-pdf-2026"
                      className="p-3.5 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:bg-amber-50/40 transition-all text-xs md:text-sm font-semibold text-gray-800 flex items-center justify-between"
                    >
                      <span>RBI Recovery Agent Guidelines</span>
                      <span className="text-[#D2A02A]">→</span>
                    </Link>
                    <Link
                      href="/one-time-settlement"
                      className="p-3.5 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:bg-amber-50/40 transition-all text-xs md:text-sm font-semibold text-gray-800 flex items-center justify-between"
                    >
                      <span>One Time Settlement (OTS) Scheme</span>
                      <span className="text-[#D2A02A]">→</span>
                    </Link>
                  </div>
                </section>

                {/* ================= SECTION 9: FAQs ================= */}
                <section id="frequently-asked-questions" className="scroll-mt-32 border-t border-gray-200 pt-8">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                    Frequently Asked Questions on Personal Loan Debt Settlement
                  </h2>
                  
                  <div className="space-y-3">
                    {faqs.map((faq, index) => (
                      <div
                        key={index}
                        className="border border-gray-200 rounded-xl overflow-hidden bg-white transition-all shadow-sm"
                      >
                        <button
                          onClick={() => toggleFaq(index)}
                          className="w-full text-left p-4 sm:p-5 bg-gray-50/80 hover:bg-gray-100/80 font-bold text-[#5A4C33] flex justify-between items-center transition-colors text-sm sm:text-base gap-3"
                          aria-expanded={openFaqIndex === index}
                        >
                          <span className="flex items-start">
                            <span className="text-[#D2A02A] mr-2.5 font-extrabold">Q.</span>
                            <span>{faq.question}</span>
                          </span>
                          <span className="text-[#D2A02A] text-xl font-bold flex-shrink-0">
                            {openFaqIndex === index ? "−" : "+"}
                          </span>
                        </button>
                        {openFaqIndex === index && (
                          <div className="p-4 sm:p-5 bg-white text-gray-700 leading-relaxed border-t border-gray-100 text-xs sm:text-sm">
                            <p>{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </section>

                {/* ================= FINAL CTA SECTION ================= */}
                <section className="bg-gradient-to-br from-black via-[#1c1813] to-[#5A4C33] rounded-2xl p-6 sm:p-10 md:p-14 text-center text-white relative overflow-hidden shadow-2xl border border-[#D2A02A]/30">
                  <div className="relative z-10 max-w-3xl mx-auto space-y-4">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
                      Reclaim Your Peace of Mind & Financial Independence
                    </h2>
                    <p className="text-xs sm:text-sm md:text-base text-gray-300 max-w-xl mx-auto leading-relaxed">
                      Do not let insurmountable loan debt and persistent recovery harassment overwhelm your life. Consult senior debt settlement advocates today for an authoritative, confidential case review.
                    </p>
                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                      <button
                        onClick={() => setIsModalOpen(true)}
                        className="w-full sm:w-auto bg-[#D2A02A] hover:bg-[#b08522] text-white font-bold py-3.5 px-8 rounded-xl transition-all shadow-lg hover:shadow-[#D2A02A]/30 text-sm md:text-base"
                      >
                        Book Confidential Case Evaluation
                      </button>
                      <a
                        href="tel:+918700343611"
                        className="w-full sm:w-auto border-2 border-white/80 hover:bg-white hover:text-gray-900 text-white font-bold py-3.5 px-8 rounded-xl transition-all text-sm md:text-base"
                      >
                        Call: +91-8700343611
                      </a>
                    </div>
                    <p className="text-xs text-gray-400 font-medium">
                      Advocate-Client Privilege Protected &bull; Pan-India Coverage &bull; 100% Legal & Ethical
                    </p>
                  </div>
                </section>

                {/* ================= BRAND COMPANY SECTION ================= */}
                <section className="border-2 border-[#D2A02A] rounded-2xl p-6 sm:p-8 bg-[#faf8f5] text-center shadow-md relative">
                  <div className="flex justify-center mb-3">
                    <Image
                      src="/ama3.svg"
                      alt="AMA Legal Solutions Logo"
                      width={65}
                      height={65}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#5A4C33] mb-2">
                    AMA Legal Solutions
                  </h3>
                  <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed text-xs sm:text-sm font-medium mb-6">
                    AMA Legal Solutions is India's premier legal advisory and litigation law firm. Trusted with a <strong className="text-[#D2A02A]">4.7 Google Rating</strong>, over <strong className="text-[#D2A02A]">10,000+ Clients Served</strong>, <strong className="text-[#D2A02A]">25,000+ Cases Handled</strong>, and more than <strong className="text-[#D2A02A]">40+ Years of Combined Legal Experience</strong> providing strategic legal defense and debt resolution across India.
                  </p>

                  {/* Media Coverages */}
                  <div className="border-t border-b border-gray-200 py-4 my-5">
                    <div className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-3">
                      Featured In National Media & Legal Journals
                    </div>
                    <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
                      <Link
                        href="https://yourstory.com/companies/ama-legal-solutions"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-75 transition-opacity"
                      >
                        <Image
                          src="/newAssets/media/yourstory.png"
                          alt="YourStory"
                          width={110}
                          height={38}
                          className="h-5 sm:h-6 w-auto object-contain"
                        />
                      </Link>
                      <Link
                        href="https://www.livemint.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-75 transition-opacity"
                      >
                        <Image
                          src="/newAssets/media/livemint.png"
                          alt="LiveMint"
                          width={110}
                          height={38}
                          className="h-5 sm:h-6 w-auto object-contain"
                        />
                      </Link>
                      <Link
                        href="https://www.barandbench.com/news/ama-legal-solutions-launches-indias-first-law-firm-backed-pro-bono-driven-mobile-app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-75 transition-opacity"
                      >
                        <Image
                          src="/newAssets/media/barandbench.png"
                          alt="Bar and Bench"
                          width={110}
                          height={38}
                          className="h-5 sm:h-6 w-auto object-contain"
                        />
                      </Link>
                      <Link
                        href="https://medium.com/@amalegalsolutions"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-75 transition-opacity"
                      >
                        <Image
                          src="/newAssets/media/medium.png"
                          alt="Medium"
                          width={110}
                          height={38}
                          className="h-5 sm:h-6 w-auto object-contain"
                        />
                      </Link>
                      <Link
                        href="https://www.mid-day.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-75 transition-opacity"
                      >
                        <Image
                          src="/newAssets/media/mid_day.png"
                          alt="Mid-day"
                          width={110}
                          height={38}
                          className="h-5 sm:h-6 w-auto object-contain"
                        />
                      </Link>
                    </div>
                  </div>

                  {/* Our Solutions Button Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 max-w-4xl mx-auto mt-4">
                    <Link
                      href="/personal-loan-settlement"
                      className="px-3 py-2 border border-[#D2A02A] text-[#5A4C33] font-bold rounded-lg hover:bg-[#D2A02A] hover:text-white transition-all text-center text-xs flex items-center justify-center bg-white shadow-sm"
                    >
                      Personal Loan Settlement
                    </Link>
                    <Link
                      href="/send-legal-notice"
                      className="px-3 py-2 border border-[#D2A02A] text-[#5A4C33] font-bold rounded-lg hover:bg-[#D2A02A] hover:text-white transition-all text-center text-xs flex items-center justify-center bg-white shadow-sm"
                    >
                      Legal Notice Services
                    </Link>
                    <Link
                      href="/drafting-of-will"
                      className="px-3 py-2 border border-[#D2A02A] text-[#5A4C33] font-bold rounded-lg hover:bg-[#D2A02A] hover:text-white transition-all text-center text-xs flex items-center justify-center bg-white shadow-sm"
                    >
                      Will Drafting Services
                    </Link>
                    <Link
                      href="/virtual-inhouse-councel"
                      className="px-3 py-2 border border-[#D2A02A] text-[#5A4C33] font-bold rounded-lg hover:bg-[#D2A02A] hover:text-white transition-all text-center text-xs flex items-center justify-center bg-white shadow-sm"
                    >
                      Virtual In-House Counsel
                    </Link>
                  </div>
                </section>

              </div>
            </article>

            {/* ================= RIGHT STICKY SIDEBAR ================= */}
            <aside className="space-y-6 sticky top-28">
              
              {/* Premium Intake CTA Box */}
              <div className="bg-gradient-to-b from-[#5A4C33] to-[#3a3020] text-white p-6 rounded-2xl shadow-xl border border-[#D2A02A]/30">
                <div className="inline-block bg-[#D2A02A]/20 border border-[#D2A02A]/40 text-[#f3cf7a] text-[11px] font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
                  Direct Legal Protection
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Need Urgent Debt Relief?</h3>
                <p className="text-gray-200 text-xs sm:text-sm leading-relaxed mb-5">
                  Stop recovery agent harassment today. Connect directly with our senior loan settlement advocates for a confidential evaluation.
                </p>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full bg-[#D2A02A] hover:bg-[#b08522] text-white font-bold py-3 px-4 rounded-xl transition-all shadow-md text-sm mb-3 flex items-center justify-center gap-2"
                >
                  <span>📋 Start Case Evaluation</span>
                </button>
                <a
                  href="tel:+918700343611"
                  className="block w-full bg-white/10 hover:bg-white/20 border border-white/30 text-white text-center py-2.5 rounded-xl font-semibold transition-colors text-xs"
                >
                  Direct Call: +91-8700343611
                </a>
              </div>

              {/* Client Reviews UI Block (Exact Match with Schema) */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 relative overflow-hidden">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Verified Client Review</span>
                  <span className="bg-amber-100 text-[#5A4C33] text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    5.0 Google Rating
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <div className="flex text-[#D2A02A] text-base tracking-widest">
                    ★★★★★
                  </div>
                  <span className="text-gray-900 font-extrabold text-sm">5.0 / 5.0</span>
                </div>

                <blockquote className="text-gray-700 italic text-xs sm:text-sm leading-relaxed mb-4">
                  "Advocate Anuj Anand Malik and AMA Legal Solutions provided phenomenal legal support during my severe financial crisis. They stopped endless harassment from recovery agents immediately and negotiated a 60% waiver on my multiple unsecured personal loans with major banks. Everything was completed transparently with official No Dues Certificates. Truly the most reliable legal debt settlement team in India."
                </blockquote>

                <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                  <div className="w-9 h-9 rounded-full bg-[#5A4C33] text-[#D2A02A] flex items-center justify-center font-bold text-sm">
                    V
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-xs sm:text-sm">Vikramaditya S.</div>
                    <div className="text-[11px] text-gray-500">IT Executive &bull; Settled ₹18 Lakhs PL</div>
                  </div>
                </div>
              </div>

              {/* RBI Compliance Badge Box */}
              <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200 text-xs text-gray-600 space-y-2">
                <div className="font-bold text-gray-900 text-sm flex items-center gap-2">
                  <span className="text-[#D2A02A]">🛡️</span> Regulatory Assurance
                </div>
                <p className="leading-relaxed">
                  All settlement negotiations and legal notices are executed strictly in compliance with RBI Fair Practices Codes and the Advocates Act, 1961.
                </p>
              </div>

            </aside>

          </div>
        </main>

        {/* ================= INTERACTIVE INTAKE MODAL ================= */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 overflow-y-auto">
            <div className="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full p-6 sm:p-8 border border-gray-100 my-8">
              
              {/* Close Button */}
              <button
                onClick={() => {
                  setIsModalOpen(false);
                  setFormSubmitted(false);
                }}
                className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-lg transition-colors"
                aria-label="Close Modal"
              >
                ✕
              </button>

              {!formSubmitted ? (
                <div>
                  <div className="text-center mb-6">
                    <div className="inline-block p-2.5 rounded-full bg-amber-50 text-[#D2A02A] text-2xl mb-2">
                      ⚖️
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                      Confidential Case Evaluation
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500 mt-1">
                      Speak directly with an advocate to stop harassment and settle your personal loans.
                    </p>
                  </div>

                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-3.5 py-2.5 border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-[#D2A02A] focus:border-transparent outline-none transition"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">
                          WhatsApp / Phone *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+91 9876543210"
                          className="w-full px-3.5 py-2.5 border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-[#D2A02A] focus:border-transparent outline-none transition"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="rahul@example.com"
                          className="w-full px-3.5 py-2.5 border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-[#D2A02A] focus:border-transparent outline-none transition"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">
                          Lending Bank / NBFC
                        </label>
                        <input
                          type="text"
                          name="bankName"
                          value={formData.bankName}
                          onChange={handleInputChange}
                          placeholder="e.g. HDFC, Bajaj, ICICI"
                          className="w-full px-3.5 py-2.5 border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-[#D2A02A] focus:border-transparent outline-none transition"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">
                          Approx Total Outstanding
                        </label>
                        <input
                          type="text"
                          name="loanAmount"
                          value={formData.loanAmount}
                          onChange={handleInputChange}
                          placeholder="e.g. ₹5,00,000"
                          className="w-full px-3.5 py-2.5 border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-[#D2A02A] focus:border-transparent outline-none transition"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Brief Hardship Description
                      </label>
                      <textarea
                        name="message"
                        rows={2}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Job loss, medical emergency, business loss, or agent harassment details..."
                        className="w-full px-3.5 py-2.5 border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-[#D2A02A] focus:border-transparent outline-none transition"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#D2A02A] hover:bg-[#b08522] text-white font-bold py-3.5 rounded-xl transition-all shadow-lg text-sm sm:text-base mt-2"
                    >
                      Submit Confidential Request
                    </button>

                    <p className="text-[11px] text-gray-400 text-center">
                      🔒 Guaranteed 100% Privacy. Advocate-Client confidentiality applies.
                    </p>
                  </form>
                </div>
              ) : (
                <div className="text-center py-6 space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-3xl mx-auto">
                    ✓
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Request Submitted Successfully</h3>
                  <p className="text-gray-600 text-sm max-w-sm mx-auto">
                    Thank you, <strong>{formData.name || "Client"}</strong>. Our senior debt settlement legal advocate will review your details and contact you confidentially on <strong>{formData.phone}</strong>.
                  </p>
                  <div className="pt-3">
                    <a
                      href={`https://api.whatsapp.com/send?phone=918700343611&text=Hello%20AMA%20Legal%20Solutions,%20I%20am%20${encodeURIComponent(formData.name || "a client")}%20requesting%20urgent%20personal%20loan%20debt%20settlement%20assistance.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold py-3 px-6 rounded-xl hover:bg-emerald-600 transition text-sm shadow-md"
                    >
                      <span>💬 Connect on WhatsApp Instantly</span>
                    </a>
                  </div>
                </div>
              )}

            </div>
          </div>
        )}

      </div>
    </>
  );
}
