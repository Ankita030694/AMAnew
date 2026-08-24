"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";

export default function BestDebtSettlementCompanyClient() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    bankName: "",
    loanAmount: "",
    debtType: "Personal Loan & Credit Cards",
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
    { id: "introduction", title: "The Consumer & Commercial Debt Crisis in India" },
    { id: "why-advocate-led-firm", title: "Advocate-Led Law Firms vs. Unregulated Agencies" },
    { id: "rbi-guidelines-compromise-settlements", title: "RBI Master Directions & OTS Framework" },
    { id: "statutory-borrower-protections", title: "Borrower Rights & Anti-Harassment Law" },
    { id: "5-step-settlement-protocol", title: "The 5-Step Legal Debt Settlement Protocol" },
    { id: "infographic-section", title: "Legal Settlement Blueprint & Debt Reduction Chart" },
    { id: "bank-wise-haircut-matrix", title: "Bank-Wise Haircut & Settlement Waiver Matrix" },
    { id: "judicial-defense-138-25", title: "Defense Against Section 138 NI Act & Section 25 PSS Act" },
    { id: "post-settlement-cibil-recovery", title: "CIBIL Score Restoration & Credit Rebuilding" },
    { id: "why-ama-legal-solutions", title: "Why AMA Legal Solutions Ranks #1 in India" },
    { id: "more-legal-guides", title: "More Legal Debt Relief Guides" },
    { id: "statutory-references", title: "Statutory References & Regulatory Authorities" },
    { id: "frequently-asked-questions", title: "Frequently Asked Questions" },
  ];

  const faqs = [
    {
      question: "Which is the best debt settlement company in India?",
      answer: "AMA Legal Solutions is widely recognized as the best debt settlement company in India because it operates as an advocate-led legal practice under the Advocates Act, 1961 rather than an unregulated intermediary. The firm provides direct courtroom representation, halts recovery agent harassment through statutory cease-and-desist notices, conducts forensic ledger audits, and negotiates legally binding 40% to 75% One Time Settlements (OTS) with authenticated bank No Dues Certificates."
    },
    {
      question: "Is debt settlement legal in India under Reserve Bank of India (RBI) regulations?",
      answer: "Yes, debt settlement is entirely legal and formally governed by the RBI's Prudential Framework for Resolution of Stressed Assets and Master Directions on Compromise Settlements. These regulatory circulars empower commercial banks and NBFCs to negotiate board-approved compromise settlements and execute principal haircuts for borrowers facing verified, involuntary financial hardship."
    },
    {
      question: "How much waiver can the best debt settlement company negotiate with banks?",
      answer: "Experienced banking litigation advocates typically negotiate waivers ranging between 40% and 75% of the total outstanding loan or credit card balance, depending on the default vintage and Non-Performing Asset (NPA) status. The legal negotiation process mandates a 100% complete waiver of accumulated penal interest, compounding late fees, and overdue finance charges before securing substantial concessions on the principal debt."
    },
    {
      question: "What is the key difference between a law firm and a debt settlement agency or app?",
      answer: "Unregulated private debt settlement companies and mobile apps are commercial aggregators that possess zero advocate-client legal privilege and cannot represent borrowers before judicial magistrate courts or DRTs. In contrast, an advocate-led law firm provides constitutional legal standing, defends against Section 138 NI Act and Section 25 PSS Act criminal complaints, and interfaces directly with senior zonal bank authorities."
    },
    {
      question: "Can hiring a legal debt settlement firm stop recovery agent visits and harassment?",
      answer: "Yes, retaining an advocate-led debt resolution practice halts illegal recovery agent harassment by serving formal Vakalatnama notices under the RBI Master Directions on Fair Practices Code. Upon receipt of formal legal representation, lending institutions and collection agencies are legally prohibited from contacting third-party references, visiting workplaces unannounced, or making calls outside approved statutory hours (8:00 AM to 7:00 PM)."
    },
    {
      question: "Will settling my debt through a company lead to police arrest or criminal record?",
      answer: "No, simple financial default on unsecured personal loans, credit cards, or business credit is strictly a civil breach of contract under Indian law and cannot result in police arrest or incarceration. However, lenders frequently initiate quasi-criminal proceedings under Section 138 of the Negotiable Instruments Act, 1881 for bounced cheques or Section 25 of the PSS Act, 2007 for failed NACH auto-debits, which our litigation team defends and resolves through Lok Adalat consent decrees."
    },
    {
      question: "How does debt settlement affect my CIBIL score and can it be repaired?",
      answer: "A negotiated compromise settlement causes credit rating agencies such as TransUnion CIBIL, Experian, and Equifax to reflect the account status as 'Settled', which causes a temporary credit score drop of 60 to 120 points. However, settling the debt immediately arrests ongoing monthly Days Past Due (DPD) compounding and stops legal escalation, allowing borrowers to rebuild their CIBIL score back above 750 within 18 to 24 months through disciplined secured credit usage."
    },
    {
      question: "How does the fee structure work at AMA Legal Solutions for debt settlement?",
      answer: "AMA Legal Solutions maintains an ethical, transparent, and performance-oriented fee schedule designed specifically for borrowers undergoing liquidity distress. The legal engagement begins with an affordable administrative retainer to cover forensic statement audits and statutory anti-harassment notices, followed by a contingency success fee calculated strictly as a percentage of the actual financial savings achieved on your negotiated debt waiver."
    }
  ];

  const stepListItems = [
    {
      title: "Forensic Ledger Audit & Hardship Assessment",
      desc: "Our banking litigation advocates conduct an exhaustive forensic analysis of your personal loan sanction letter, statement of accounts, and repayment history, segregating inflated compounding interest, late payment penalties, and GST surcharges from the genuine principal sum."
    },
    {
      title: "Statutory Cease-and-Desist & Anti-Harassment Notice",
      desc: "We serve formal legal representation notices on all lending banks, NBFCs, and third-party recovery agencies under the Advocates Act, 1961 and RBI Master Directions, ordering an immediate halt to all unauthorized home visits, workplace intrusions, and abusive phone calls."
    },
    {
      title: "Drafting the Comprehensive OTS Legal Hardship Petition",
      desc: "We draft an authoritative One Time Settlement (OTS) brief supported by verified documentary proofs of income loss, commercial insolvency, or medical emergency, establishing statutory defenses and proposing a realistic, discounted lump-sum compromise."
    },
    {
      title: "Direct Institutional Negotiations with Stressed Asset Committees",
      desc: "Our senior advocates interface directly with the bank's zonal recovery verticals, collection heads, and credit settlement committees to negotiate maximum waivers (40% to 75%) and eliminate 100% of accumulated penal finance interest charges."
    },
    {
      title: "Bank Sanction Letter Authentication & No Dues Certificate Enforcement",
      desc: "Before any settlement funds are deposited, our legal team meticulously verifies the official bank settlement sanction letter to prevent fraud. Following payment, we enforce prompt issuance of the No Dues Certificate (NDC) and credit bureau reporting updates."
    }
  ];

  const clientReviewData = {
    ratingValue: "5.0",
    bestRating: "5",
    reviewCount: "1",
    authorName: "Rajeev Verma",
    authorTitle: "Commercial Director, Retail Logistics • Settled ₹32.4 Lakhs in Unsecured Loans",
    reviewBody: "Choosing AMA Legal Solutions as our debt settlement company was the best decision my family made during our acute financial crisis. After a severe supply chain downturn, I had accumulated over ₹32 Lakhs in personal loans and credit cards across four major private banks, leading to relentless recovery agent harassment and legal threats under Section 138. Advocate Anuj Anand Malik and his senior legal team took control of all lender communication immediately, issued formal anti-harassment notices, and represented me before the Lok Adalat. They successfully negotiated a comprehensive 65% waiver across all accounts, and I received genuine, verified bank No Dues Certificates within four months. Their legal shielding and transparency are unparalleled in India."
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://www.amalegalsolutions.com/best-debt-settlement-company#article",
        "headline": "Best Debt Settlement Company in India: Advocate-Led Legal Resolution & OTS Advisory",
        "description": "Comprehensive commercial evaluation of the best debt settlement company in India. Learn how senior advocate representation halts recovery harassment, eliminates compounding interest, secures 40% to 75% OTS waivers under RBI guidelines, and delivers valid No Dues Certificates.",
        "image": [
          "https://www.amalegalsolutions.com/images/og/best-debt-settlement-company.png"
        ],
        "datePublished": "2026-01-20T09:00:00+05:30",
        "dateModified": "2026-08-20T12:00:00+05:30",
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
            "url": "https://www.amalegalsolutions.com/ama3.svg"
          },
          "sameAs": [
            "https://www.facebook.com/amalegalsolutions",
            "https://twitter.com/amalegalsolutions",
            "https://www.linkedin.com/company/amalegalsolutions"
          ]
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.amalegalsolutions.com/best-debt-settlement-company"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://www.amalegalsolutions.com/best-debt-settlement-company",
        "url": "https://www.amalegalsolutions.com/best-debt-settlement-company",
        "name": "Best Debt Settlement Company in India | AMA Legal Solutions",
        "description": "India's premier advocate-led debt settlement company. Stop recovery agent harassment, negotiate 40%–75% waivers under RBI compromise frameworks, and secure authentic bank No Dues Certificates.",
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": ["h1", "#quick-answer"]
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.amalegalsolutions.com/best-debt-settlement-company#faq",
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
        "@id": "https://www.amalegalsolutions.com/best-debt-settlement-company#product",
        "name": "Commercial Debt Settlement Legal Services",
        "image": "https://www.amalegalsolutions.com/images/og/best-debt-settlement-company.png",
        "description": "India's top-rated advocate-led debt settlement company for unsecured personal loans, credit card debt, and MSME credit resolution. Halt recovery harassment, negotiate One Time Settlements (OTS), and secure genuine No Dues Certificates.",
        "brand": {
          "@type": "Organization",
          "name": "AMA Legal Solutions"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": clientReviewData.ratingValue,
          "bestRating": clientReviewData.bestRating,
          "reviewCount": clientReviewData.reviewCount
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
            "name": clientReviewData.authorName
          },
          "reviewBody": clientReviewData.reviewBody
        }
      },
      {
        "@type": "Organization",
        "@id": "https://www.amalegalsolutions.com/#organization",
        "name": "AMA Legal Solutions",
        "url": "https://www.amalegalsolutions.com",
        "logo": "https://www.amalegalsolutions.com/ama3.svg",
        "sameAs": [
          "https://www.facebook.com/amalegalsolutions",
          "https://twitter.com/amalegalsolutions",
          "https://www.linkedin.com/company/amalegalsolutions"
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.amalegalsolutions.com/best-debt-settlement-company#breadcrumbs",
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
            "name": "Best Debt Settlement Company",
            "item": "https://www.amalegalsolutions.com/best-debt-settlement-company"
          }
        ]
      },
      {
        "@type": "ItemList",
        "@id": "https://www.amalegalsolutions.com/best-debt-settlement-company#process",
        "name": "The 5-Step Legal Debt Settlement Protocol",
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
        id="best-debt-settlement-company-schema"
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
              India's Premier Advocate-Led Debt Settlement &amp; Legal Defense Practice
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight max-w-5xl mx-auto">
              Best <span className="text-[#D2A02A]">Debt Settlement Company</span> in India
            </h1>

            <p className="text-sm sm:text-base md:text-xl mb-8 md:mb-10 max-w-3xl mx-auto text-gray-200 leading-relaxed font-light">
              Stop aggressive recovery agent harassment instantly. Retain senior banking litigation advocates to negotiate <strong className="text-white font-semibold">40% to 75% debt waivers</strong> under Reserve Bank of India (RBI) compromise frameworks with genuine, verified No Dues Certificates.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto bg-[#D2A02A] hover:bg-[#b08522] text-white font-bold py-3.5 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 shadow-xl hover:shadow-[#D2A02A]/20 text-sm md:text-base flex items-center justify-center gap-2 cursor-pointer"
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
              <span className="flex items-center gap-1.5"><span className="text-[#D2A02A]">✓</span> Immediate Statutory Anti-Harassment Notice</span>
              <span className="flex items-center gap-1.5"><span className="text-[#D2A02A]">✓</span> Official Bank No Dues Certificate Guaranteed</span>
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
                <p className="text-xs md:text-sm text-gray-600 font-medium mt-0.5">15,000+ Borrowers Represented</p>
              </div>

              <div className="flex flex-col items-center justify-center p-2 pt-4 md:pt-2">
                <div className="text-2xl md:text-3xl mb-1.5 text-[#D2A02A]">⚖️</div>
                <div className="text-base md:text-lg font-bold text-gray-900">Statutory Remedies</div>
                <p className="text-xs md:text-sm text-gray-600 font-medium mt-0.5">RBI Ombudsman &amp; Section 138/25 Defense</p>
              </div>

              <div className="flex flex-col items-center justify-center p-2 pt-4 md:pt-2">
                <div className="text-2xl md:text-3xl mb-1.5 text-[#D2A02A]">⭐</div>
                <div className="text-base md:text-lg font-bold text-gray-900">5-Star Advocate Ratings</div>
                <p className="text-xs md:text-sm text-gray-600 font-medium mt-0.5">4.9/5 Score Across 30,000+ Matters</p>
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
                          Best Debt Settlement Company
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
                      href="https://www.facebook.com/sharer/sharer.php?u=https://www.amalegalsolutions.com/best-debt-settlement-company"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:opacity-90 transition font-bold text-xs shadow-sm"
                      title="Share on Facebook"
                      aria-label="Share on Facebook"
                    >
                      f
                    </a>
                    <a
                      href="https://twitter.com/intent/tweet?url=https://www.amalegalsolutions.com/best-debt-settlement-company&text=Best%20Debt%20Settlement%20Company%20in%20India%20-%20AMA%20Legal%20Solutions"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center hover:opacity-90 transition font-bold text-xs shadow-sm"
                      title="Share on X"
                      aria-label="Share on X"
                    >
                      𝕏
                    </a>
                    <a
                      href="https://www.linkedin.com/sharing/share-offsite/?url=https://www.amalegalsolutions.com/best-debt-settlement-company"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-[#0A66C2] text-white flex items-center justify-center hover:opacity-90 transition font-bold text-xs shadow-sm"
                      title="Share on LinkedIn"
                      aria-label="Share on LinkedIn"
                    >
                      in
                    </a>
                    <a
                      href="https://api.whatsapp.com/send?text=Best%20Debt%20Settlement%20Company%20in%20India%20https://www.amalegalsolutions.com/best-debt-settlement-company"
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
                    <h2>Quick Answer: What is the Best Debt Settlement Company in India?</h2>
                  </div>
                  <p className="text-gray-900 font-normal leading-relaxed text-sm md:text-base">
                    The best debt settlement company in India is an advocate-led legal advisory operating strictly under the Advocates Act, 1961 and Reserve Bank of India (RBI) compromise settlement frameworks. Unlike unregulated digital apps or private tele-calling agencies, a premier legal firm provides formal legal representation, serves statutory cease-and-desist notices to stop recovery agent harassment immediately, defends borrowers against Section 138 NI Act cheque bounce and Section 25 PSS Act NACH summons, eliminates compounding penal charges, negotiates 40% to 75% One Time Settlement (OTS) waivers, and secures authentic bank-issued No Dues Certificates (NDCs).
                  </p>
                </div>

                {/* ================= SECTION 1: THE CRISIS ================= */}
                <section id="introduction" className="scroll-mt-32 space-y-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
                    The Consumer &amp; Commercial Debt Crisis in India
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    The rapid proliferation of unsecured retail credit, high-interest credit cards, revolving lines of credit, and algorithmic Buy Now Pay Later (BNPL) loans across India has created unprecedented financial exposure for millions of middle-class households, salaried executives, and MSME entrepreneurs. When external economic disruptions, sudden job losses, corporate restructuring, or severe medical emergencies strike, servicing multiple monthly Equated Monthly Installments (EMIs) carrying annualized percentage rates (APR) of 18% to 42% becomes mathematically impossible.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    Once a borrower misses consecutive payment cycles, commercial lenders immediately trigger exorbitant default interest rates, late fees, and bounce charges. Within 90 days of non-payment, the loan account is categorized as a <Link href="/what-happens-after-loan-account-becomes-npa" className="text-[#D2A02A] hover:underline font-semibold">Non-Performing Asset (NPA)</Link>. At this critical juncture, banks and NBFCs frequently outsource loan files to aggressive, unregulated third-party collection agencies that deploy illegal coercive measures. Selecting the <strong>best debt settlement company in India</strong> is not merely a financial strategy; it is a vital statutory shield to protect your dignity, your family, and your constitutional rights under Indian law.
                  </p>
                </section>

                {/* ================= SECTION 2: LAW FIRM VS AGENCIES ================= */}
                <section id="why-advocate-led-firm" className="scroll-mt-32 space-y-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#5A4C33]">
                    Advocate-Led Law Firms vs. Unregulated Debt Settlement Agencies
                  </h2>
                  
                  <div className="bg-[#f6f4ee] border-l-4 border-[#5A4C33] p-4 md:p-6 rounded-r-xl">
                    <p className="text-[#3a3020] text-sm md:text-base font-medium italic">
                      "Under Indian jurisprudence, debt resolution is fundamentally a legal dispute rooted in the Indian Contract Act, 1872 and Negotiable Instruments Act, 1881. Entrusting commercial negotiations to unregulated private agencies or call-center aggregators exposes borrowers to financial fraud, lack of judicial defense, and ongoing litigation risk."
                    </p>
                  </div>

                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    When evaluating service providers for debt resolution, commercial borrowers must scrutinize the operational model and legal authority of the firm. Unregulated agencies frequently operate through non-transparent subscription models, collecting substantial non-refundable advance fees while having zero standing to appear before a judicial magistrate.
                  </p>

                  {/* Comparative Matrix Table */}
                  <div className="overflow-x-auto my-6">
                    <table className="min-w-full bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                      <thead className="bg-[#5A4C33] text-white text-xs sm:text-sm">
                        <tr>
                          <th className="py-3 px-4 text-left font-semibold">Evaluation Parameter</th>
                          <th className="py-3 px-4 text-left font-semibold">Advocate-Led Law Firm (AMA Legal)</th>
                          <th className="py-3 px-4 text-left font-semibold">Unregulated Settlement Agency / App</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 text-xs sm:text-sm text-gray-700">
                        <tr className="hover:bg-gray-50">
                          <td className="py-3 px-4 font-bold text-gray-900">Statutory Legal Standing</td>
                          <td className="py-3 px-4 text-emerald-700 font-semibold">Enrolled under Advocates Act, 1961; Authorized Court Representation</td>
                          <td className="py-3 px-4 text-red-600 font-medium">Private Commercial Entity; Zero Legal Standing in Court</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="py-3 px-4 font-bold text-gray-900">Anti-Harassment Power</td>
                          <td className="py-3 px-4 text-emerald-700 font-semibold">Statutory Cease-and-Desist Notices backed by RBI Ombudsman Complaints</td>
                          <td className="py-3 px-4 text-red-600 font-medium">Informal phone requests routinely ignored by recovery agents</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="py-3 px-4 font-bold text-gray-900">Judicial Summons Defense</td>
                          <td className="py-3 px-4 text-emerald-700 font-semibold">Vakalatnama filing &amp; Defense in Section 138 / Section 25 cases</td>
                          <td className="py-3 px-4 text-red-600 font-medium">Cannot draft legal replies or represent clients in Court / Lok Adalat</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="py-3 px-4 font-bold text-gray-900">Settlement Authentication</td>
                          <td className="py-3 px-4 text-emerald-700 font-semibold">Forensic audit of bank compromise letters &amp; NDC enforcement</td>
                          <td className="py-3 px-4 text-red-600 font-medium">High risk of fake settlement letters or unapproved discounts</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="py-3 px-4 font-bold text-gray-900">Advocate-Client Privilege</td>
                          <td className="py-3 px-4 text-emerald-700 font-semibold">100% Confidentiality protected under Indian Evidence Act</td>
                          <td className="py-3 px-4 text-red-600 font-medium">No legal privilege; client financial data frequently shared</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* ================= SECTION 3: RBI GUIDELINES ================= */}
                <section id="rbi-guidelines-compromise-settlements" className="scroll-mt-32 space-y-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
                    RBI Master Directions &amp; Legal Framework for Compromise Settlements
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    Debt settlement in India is not an informal compromise; it is an institutionalized statutory mechanism governed by the <Link href="/borrower-rights-under-rbi-guidelines-india" className="text-[#D2A02A] hover:underline font-semibold">RBI Master Directions on Compromise Settlements and Technical Write-offs</Link>. Under these regulatory directives, every Regulated Entity (RE)—including public sector banks, private scheduled commercial banks, and systemically important NBFCs—must maintain a board-approved policy for compromise settlements.
                  </p>
                  
                  <blockquote className="border-l-4 border-[#D2A02A] bg-amber-50/50 p-4 rounded-r-xl text-gray-800 text-sm md:text-base my-4">
                    <strong className="text-[#5A4C33]">RBI Prudential Mandate:</strong> Regulated Entities are legally authorized to undertake compromise settlements in respect of non-performing accounts, providing an equitable exit for genuine borrowers experiencing distress while maximizing net present value recovery for the lending institution.
                  </blockquote>

                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    The statutory negotiation process focuses on distinguishing genuine commercial hardship from willful default. By submitting an authoritative One Time Settlement (OTS) legal petition backed by verifiable financial evidence (such as hospital records, income tax returns, audited balance sheets, or termination notices), our senior advocates compel the bank's internal Stressed Asset Committee to waive 100% of accumulated penal interest and execute substantial haircuts on the principal sum. For a detailed breakdown of bank-specific policies, see our comprehensive guide on <Link href="/one-time-settlement-scheme-for-personal-loan-2026" className="text-[#D2A02A] hover:underline font-semibold">One Time Settlement Schemes for Personal Loans</Link>.
                  </p>
                </section>

                {/* ================= SECTION 4: BORROWER RIGHTS ================= */}
                <section id="statutory-borrower-protections" className="scroll-mt-32 space-y-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#5A4C33]">
                    Statutory Borrower Rights &amp; Anti-Harassment Enforcement
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    The Reserve Bank of India has established stringent regulations regarding recovery practices to prevent harassment and human rights violations. Borrowers undergoing loan default retain fundamental statutory rights that no recovery agency or bank official can violate:
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-4">
                    <div className="p-4 rounded-xl border border-gray-200 bg-white shadow-sm">
                      <div className="text-[#D2A02A] font-bold text-base mb-1">⏰ Calling Hours Restriction</div>
                      <p className="text-xs md:text-sm text-gray-600">Recovery agents are strictly prohibited from calling or visiting borrowers before 8:00 AM and after 7:00 PM under the RBI Fair Practices Code.</p>
                    </div>
                    <div className="p-4 rounded-xl border border-gray-200 bg-white shadow-sm">
                      <div className="text-[#D2A02A] font-bold text-base mb-1">🚫 Third-Party Privacy Shield</div>
                      <p className="text-xs md:text-sm text-gray-600">Lenders cannot disclose your loan details or contact relatives, neighbors, friends, or employers to extract debt repayment.</p>
                    </div>
                    <div className="p-4 rounded-xl border border-gray-200 bg-white shadow-sm">
                      <div className="text-[#D2A02A] font-bold text-base mb-1">⚖️ Formal Representation Protection</div>
                      <p className="text-xs md:text-sm text-gray-600">Once an advocate is formally retained, lenders must direct all communication exclusively to the legal counsel's office.</p>
                    </div>
                    <div className="p-4 rounded-xl border border-gray-200 bg-white shadow-sm">
                      <div className="text-[#D2A02A] font-bold text-base mb-1">🏛️ Ombudsman Censure Remedy</div>
                      <p className="text-xs md:text-sm text-gray-600">Violations of recovery guidelines expose banks to severe financial penalties and regulatory censure via the RBI Integrated Ombudsman Scheme.</p>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    If you are facing abusive collection calls, unauthorized home visits, or threats of unlawful detention, explore our statutory guide on <Link href="/how-to-stop-bank-recovery-agents-harassment-legally-in-india" className="text-[#D2A02A] hover:underline font-semibold">How to Stop Bank Recovery Agents Harassment Legally in India</Link>.
                  </p>
                </section>

                {/* ================= SECTION 5: 5-STEP PROTOCOL ================= */}
                <section id="5-step-settlement-protocol" className="scroll-mt-32 space-y-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
                    The 5-Step Legal Debt Settlement Protocol
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    At AMA Legal Solutions, our senior banking litigation advocates implement a structured, 5-stage legal protocol designed to maximize waiver percentages and provide ironclad protection throughout the debt resolution cycle:
                  </p>

                  <div className="space-y-4 my-6">
                    {stepListItems.map((item, index) => (
                      <div key={index} className="flex gap-4 p-4 sm:p-5 rounded-2xl bg-gray-50 border border-gray-200 hover:border-[#D2A02A]/40 transition-colors">
                        <div className="w-10 h-10 rounded-xl bg-[#5A4C33] text-[#D2A02A] flex items-center justify-center font-bold text-base shrink-0">
                          {index + 1}
                        </div>
                        <div>
                          <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* ================= SECTION 6: INFOGRAPHIC EMBED ================= */}
                <section id="infographic-section" className="scroll-mt-32 space-y-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#5A4C33]">
                    Legal Settlement Blueprint &amp; Debt Reduction Infographic
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    The visual diagram below outlines the core pillars of an advocate-led debt resolution framework, illustrating the contrast between original inflated debt ledgers and the statutory 40% to 75% settlement waivers negotiated under RBI compromise directives:
                  </p>

                  <div className="my-6 rounded-2xl overflow-hidden border border-gray-200 shadow-md bg-white">
                    <Image
                      src="/images/og/best-debt-settlement-company.png"
                      alt="Best Debt Settlement Company in India - Legal Defense and Debt Reduction Blueprint by AMA Legal Solutions"
                      width={1200}
                      height={675}
                      className="w-full h-auto object-cover"
                      priority
                    />
                    <div className="p-4 bg-gray-50 border-t border-gray-100 text-xs text-gray-600 text-center italic">
                      Figure 1: Legal Debt Reduction Framework, Regulatory Compliance Shields, and the 5-Stage Legitimate OTS Protocol.
                    </div>
                  </div>
                </section>

                {/* ================= SECTION 7: BANK-WISE MATRIX ================= */}
                <section id="bank-wise-haircut-matrix" className="scroll-mt-32 space-y-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
                    Bank-Wise Haircut &amp; Settlement Waiver Matrix
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    Different banking institutions in India maintain varying settlement appetites depending on their quarterly Non-Performing Asset provisioning requirements and whether the credit facility is an unsecured personal loan, credit card, or business overdraft. Below is an institutional analysis of realistic waiver ranges achievable through senior legal counsel:
                  </p>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
                    <div className="p-4 rounded-xl border border-gray-200 bg-white hover:border-[#D2A02A] transition shadow-sm">
                      <div className="font-bold text-gray-900 text-base mb-1">HDFC Bank</div>
                      <div className="text-xs text-[#D2A02A] font-extrabold uppercase tracking-wider mb-2">45% to 70% Average Waiver</div>
                      <p className="text-xs text-gray-600 mb-2">High willingness for compromise on credit cards and jumbo personal loans post-180 days default.</p>
                      <Link href="/settlement-waiver-percentage-of-hdfc-bank" className="text-xs text-[#5A4C33] font-bold hover:underline">Read HDFC Settlement Rules →</Link>
                    </div>

                    <div className="p-4 rounded-xl border border-gray-200 bg-white hover:border-[#D2A02A] transition shadow-sm">
                      <div className="font-bold text-gray-900 text-base mb-1">State Bank of India (SBI)</div>
                      <div className="text-xs text-[#D2A02A] font-extrabold uppercase tracking-wider mb-2">50% to 75% Average Waiver</div>
                      <p className="text-xs text-gray-600 mb-2">Extensive OTS schemes available during quarterly Lok Adalats with complete penal interest write-offs.</p>
                      <Link href="/settlement-waiver-percentage-of-sbi-bank-loans" className="text-xs text-[#5A4C33] font-bold hover:underline">Read SBI Settlement Guide →</Link>
                    </div>

                    <div className="p-4 rounded-xl border border-gray-200 bg-white hover:border-[#D2A02A] transition shadow-sm">
                      <div className="font-bold text-gray-900 text-base mb-1">ICICI Bank</div>
                      <div className="text-xs text-[#D2A02A] font-extrabold uppercase tracking-wider mb-2">40% to 65% Average Waiver</div>
                      <p className="text-xs text-gray-600 mb-2">Rapid resolution achievable through zonal collection heads when represented by senior litigation advocates.</p>
                      <Link href="/settlement-waiver-percentage-of-icici-bank" className="text-xs text-[#5A4C33] font-bold hover:underline">Read ICICI Settlement Rules →</Link>
                    </div>

                    <div className="p-4 rounded-xl border border-gray-200 bg-white hover:border-[#D2A02A] transition shadow-sm">
                      <div className="font-bold text-gray-900 text-base mb-1">Axis Bank</div>
                      <div className="text-xs text-[#D2A02A] font-extrabold uppercase tracking-wider mb-2">45% to 70% Average Waiver</div>
                      <p className="text-xs text-gray-600 mb-2">Favorable terms on revolving credit cards and unsecured personal loans post-NPA classification.</p>
                      <Link href="/settlement-waiver-percentage-of-axis-bank" className="text-xs text-[#5A4C33] font-bold hover:underline">Read Axis Bank Guidelines →</Link>
                    </div>

                    <div className="p-4 rounded-xl border border-gray-200 bg-white hover:border-[#D2A02A] transition shadow-sm">
                      <div className="font-bold text-gray-900 text-base mb-1">Bajaj Finance</div>
                      <div className="text-xs text-[#D2A02A] font-extrabold uppercase tracking-wider mb-2">40% to 60% Average Waiver</div>
                      <p className="text-xs text-gray-600 mb-2">Immediate cessation of aggressive recovery tactics upon service of formal legal representation notice.</p>
                      <Link href="/settlement-waiver-percentage-of-bajaj-fin" className="text-xs text-[#5A4C33] font-bold hover:underline">Read Bajaj Finance Rules →</Link>
                    </div>

                    <div className="p-4 rounded-xl border border-gray-200 bg-white hover:border-[#D2A02A] transition shadow-sm">
                      <div className="font-bold text-gray-900 text-base mb-1">RBL &amp; Kotak Bank</div>
                      <div className="text-xs text-[#D2A02A] font-extrabold uppercase tracking-wider mb-2">50% to 75% Average Waiver</div>
                      <p className="text-xs text-gray-600 mb-2">Substantial waivers on aged credit card portfolios and instant digital personal credit lines.</p>
                      <Link href="/settlement-waiver-percentage-of-rbl-bank-loans" className="text-xs text-[#5A4C33] font-bold hover:underline">Read RBL Settlement Rules →</Link>
                    </div>
                  </div>
                </section>

                {/* ================= SECTION 8: JUDICIAL DEFENSE ================= */}
                <section id="judicial-defense-138-25" className="scroll-mt-32 space-y-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#5A4C33]">
                    Judicial Defense: Quashing Section 138 NI Act &amp; Section 25 PSS Act Summons
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    Lenders in India routinely leverage statutory criminal provisions to coerce borrowers into immediate payment. Two primary statutory mechanisms are frequently deployed:
                  </p>

                  <div className="space-y-4 my-4">
                    <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                      <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-1">1. Section 138 of the Negotiable Instruments Act, 1881 (Cheque Bounce)</h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        When a post-dated security cheque bounces due to insufficient funds, lenders issue a 15-day statutory demand notice followed by a criminal complaint before the Metropolitan Magistrate. Our advocates enter appearance, file bail applications, and quash malicious complaints by establishing that security cheques cannot be misused for dynamic, disputed loan balances. Learn more about responding to <Link href="/section-138-cheque-bounce-notice-for-personal-loan" className="text-[#D2A02A] hover:underline font-semibold">Section 138 Cheque Bounce Notices</Link>.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                      <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-1">2. Section 25 of the Payment and Settlement Systems Act, 2007 (NACH Bounce)</h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        Dishonor of automated electronic clearing mandates (NACH / e-NACH) carries penal consequences identical to cheque bounce. We handle the drafting of formal legal replies, represent borrowers in court, and transition adversarial litigation into amicable Lok Adalat settlement orders.
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    For guidance on handling bank legal notices, review our detailed procedural breakdown on <Link href="/how-to-reply-to-bank-legal-notice-for-personal-loan-default" className="text-[#D2A02A] hover:underline font-semibold">How to Reply to Bank Legal Notice for Personal Loan Default</Link>.
                  </p>
                </section>

                {/* ================= SECTION 9: CIBIL SCORE RESTORATION ================= */}
                <section id="post-settlement-cibil-recovery" className="scroll-mt-32 space-y-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
                    CIBIL Score Restoration &amp; Credit Rebuilding Post-Settlement
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    A common concern among commercial borrowers is the long-term credit impact of a compromise settlement. When a loan is settled through a negotiated OTS, credit bureaus—including TransUnion CIBIL, Experian, CRIF High Mark, and Equifax—reflect the account remark as <Link href="/difference-between-loan-settlement-and-loan-closure-impact-on-cibil" className="text-[#D2A02A] hover:underline font-semibold">'Settled' rather than 'Closed'</Link>.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    While a 'Settled' status causes an immediate temporary drop of 60 to 120 points, it halts continuous monthly DPD compounding and completely eliminates legal liability. Borrowers can systematically rebuild their CIBIL score above 750 within 18 to 24 months through a disciplined credit rehabilitation strategy:
                  </p>

                  <ol className="list-decimal pl-5 space-y-2 text-xs sm:text-sm text-gray-700 my-4">
                    <li><strong className="text-gray-900">Secure Official No Dues Certificate:</strong> Ensure the bank issues an unencumbered NDC confirming full and final discharge of all liabilities.</li>
                    <li><strong className="text-gray-900">Enforce Credit Bureau Reporting:</strong> Confirm that the lender updates the bureau records to reflect zero outstanding balance within 45 days.</li>
                    <li><strong className="text-gray-900">Acquire a Secured Fixed-Deposit Credit Card:</strong> Obtain a secured credit card against a fixed deposit (FD) and maintain credit utilization below 30%.</li>
                    <li><strong className="text-gray-900">Maintain Flawless Repayment Track Record:</strong> Ensure 100% on-time payment on all utility bills and secured lines for 18 consecutive months.</li>
                  </ol>
                </section>

                {/* ================= SECTION 10: WHY AMA LEGAL SOLUTIONS ================= */}
                <section id="why-ama-legal-solutions" className="scroll-mt-32 space-y-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#5A4C33]">
                    Why AMA Legal Solutions Ranks #1 for Debt Settlement in India
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    AMA Legal Solutions is India's leading advocate-led debt resolution practice, combining high-stakes banking litigation experience with deep institutional negotiation expertise. Over the past decade, our legal practice has successfully resolved thousands of stressed loan portfolios, shielding clients from unlawful harassment and delivering verified, legally binding One Time Settlements.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-6 text-center">
                    <div className="p-5 rounded-2xl bg-amber-50/50 border border-[#D2A02A]/30">
                      <div className="text-2xl sm:text-3xl font-extrabold text-[#5A4C33] mb-1">₹150+ Cr</div>
                      <div className="text-xs font-bold text-gray-700 uppercase tracking-wider">Unsecured Debt Settled</div>
                    </div>
                    <div className="p-5 rounded-2xl bg-amber-50/50 border border-[#D2A02A]/30">
                      <div className="text-2xl sm:text-3xl font-extrabold text-[#5A4C33] mb-1">15,000+</div>
                      <div className="text-xs font-bold text-gray-700 uppercase tracking-wider">Borrowers Protected</div>
                    </div>
                    <div className="p-5 rounded-2xl bg-amber-50/50 border border-[#D2A02A]/30">
                      <div className="text-2xl sm:text-3xl font-extrabold text-[#5A4C33] mb-1">58% Avg.</div>
                      <div className="text-xs font-bold text-gray-700 uppercase tracking-wider">Principal &amp; Interest Haircut</div>
                    </div>
                  </div>
                </section>

                {/* ================= SECTION 11: MORE LEGAL GUIDES ================= */}
                <section id="more-legal-guides" className="scroll-mt-32 space-y-4 border-t border-gray-100 pt-8">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
                    More Legal Debt Relief Guides
                  </h2>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    Explore our comprehensive repository of authoritative legal guides, statutory analyses, and bank negotiation protocols:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5 pt-2">
                    <Link
                      href="/best-personal-loan-settlement-service"
                      className="p-4 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:bg-amber-50/30 transition duration-200 shadow-sm flex flex-col justify-between"
                    >
                      <div>
                        <div className="text-xs font-bold text-[#D2A02A] uppercase mb-1">Guide</div>
                        <div className="font-bold text-sm text-gray-900">Best Personal Loan Settlement Service</div>
                        <p className="text-xs text-gray-500 mt-1">Advocate-led personal loan debt defense and OTS negotiation.</p>
                      </div>
                      <span className="text-xs text-[#5A4C33] font-bold mt-3 inline-block">Read Guide →</span>
                    </Link>

                    <Link
                      href="/best-credit-card-settlement-service"
                      className="p-4 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:bg-amber-50/30 transition duration-200 shadow-sm flex flex-col justify-between"
                    >
                      <div>
                        <div className="text-xs font-bold text-[#D2A02A] uppercase mb-1">Guide</div>
                        <div className="font-bold text-sm text-gray-900">Best Credit Card Settlement Service</div>
                        <p className="text-xs text-gray-500 mt-1">Eliminate compounding interest and settle credit card dues.</p>
                      </div>
                      <span className="text-xs text-[#5A4C33] font-bold mt-3 inline-block">Read Guide →</span>
                    </Link>

                    <Link
                      href="/debt-resolution-company"
                      className="p-4 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:bg-amber-50/30 transition duration-200 shadow-sm flex flex-col justify-between"
                    >
                      <div>
                        <div className="text-xs font-bold text-[#D2A02A] uppercase mb-1">Guide</div>
                        <div className="font-bold text-sm text-gray-900">Debt Resolution Company in India</div>
                        <p className="text-xs text-gray-500 mt-1">Comprehensive commercial debt advisory and restructuring.</p>
                      </div>
                      <span className="text-xs text-[#5A4C33] font-bold mt-3 inline-block">Read Guide →</span>
                    </Link>

                    <Link
                      href="/credit-card-debt-settlement"
                      className="p-4 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:bg-amber-50/30 transition duration-200 shadow-sm flex flex-col justify-between"
                    >
                      <div>
                        <div className="text-xs font-bold text-[#D2A02A] uppercase mb-1">Guide</div>
                        <div className="font-bold text-sm text-gray-900">Credit Card Debt Settlement</div>
                        <p className="text-xs text-gray-500 mt-1">Resolve multi-card debt traps and stop recovery calls.</p>
                      </div>
                      <span className="text-xs text-[#5A4C33] font-bold mt-3 inline-block">Read Guide →</span>
                    </Link>

                    <Link
                      href="/personal-loan-debt-settlement"
                      className="p-4 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:bg-amber-50/30 transition duration-200 shadow-sm flex flex-col justify-between"
                    >
                      <div>
                        <div className="text-xs font-bold text-[#D2A02A] uppercase mb-1">Guide</div>
                        <div className="font-bold text-sm text-gray-900">Personal Loan Debt Settlement</div>
                        <p className="text-xs text-gray-500 mt-1">Legal defense protocols for unsecured loan defaults.</p>
                      </div>
                      <span className="text-xs text-[#5A4C33] font-bold mt-3 inline-block">Read Guide →</span>
                    </Link>

                    <Link
                      href="/one-time-settlement"
                      className="p-4 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:bg-amber-50/30 transition duration-200 shadow-sm flex flex-col justify-between"
                    >
                      <div>
                        <div className="text-xs font-bold text-[#D2A02A] uppercase mb-1">Guide</div>
                        <div className="font-bold text-sm text-gray-900">One Time Settlement (OTS) Process</div>
                        <p className="text-xs text-gray-500 mt-1">Complete legal manual on bank OTS policies and No Dues Certificates.</p>
                      </div>
                      <span className="text-xs text-[#5A4C33] font-bold mt-3 inline-block">Read Guide →</span>
                    </Link>
                  </div>
                </section>

                {/* ================= SECTION 12: STATUTORY REFERENCES ================= */}
                <section id="statutory-references" className="scroll-mt-32 space-y-4 border-t border-gray-100 pt-8">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                    Statutory References &amp; Regulatory Authorities
                  </h2>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    All legal statements, statutory citations, and procedural frameworks cited in this analysis are sourced directly from authoritative statutory databases and regulatory portals:
                  </p>

                  <ul className="space-y-2 text-xs sm:text-sm text-gray-700 list-disc pl-5">
                    <li>
                      <strong>Reserve Bank of India (RBI):</strong> Master Directions on Compromise Settlements and Prudential Framework for Resolution of Stressed Assets —{" "}
                      <a
                        href="https://www.rbi.org.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold"
                      >
                        rbi.org.in
                      </a>
                    </li>
                    <li>
                      <strong>RBI Integrated Ombudsman Scheme:</strong> Redressal of Grievances against Unlawful Recovery Harassment —{" "}
                      <a
                        href="https://bankingombudsman.rbi.org.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold"
                      >
                        bankingombudsman.rbi.org.in
                      </a>
                    </li>
                    <li>
                      <strong>National Consumer Disputes Redressal Commission (NCDRC):</strong> Consumer Protection and Unfair Trade Practices —{" "}
                      <a
                        href="https://ncdrc.nic.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold"
                      >
                        ncdrc.nic.in
                      </a>
                    </li>
                    <li>
                      <strong>India Code Digital Repository:</strong> Negotiable Instruments Act, 1881 (Section 138) &amp; Advocates Act, 1961 —{" "}
                      <a
                        href="https://www.indiacode.nic.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold"
                      >
                        indiacode.nic.in
                      </a>
                    </li>
                    <li>
                      <strong>Insolvency and Bankruptcy Board of India (IBBI):</strong> Individual Insolvency and Stressed Asset Resolutions —{" "}
                      <a
                        href="https://www.ibbi.gov.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold"
                      >
                        ibbi.gov.in
                      </a>
                    </li>
                  </ul>
                </section>

                {/* ================= SECTION 13: FAQS ================= */}
                <section id="frequently-asked-questions" className="scroll-mt-32 space-y-4 border-t border-gray-100 pt-8">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                    Frequently Asked Questions
                  </h2>

                  <div className="space-y-3">
                    {faqs.map((faq, index) => (
                      <div
                        key={index}
                        className="border border-gray-200 rounded-xl overflow-hidden bg-white transition shadow-sm"
                      >
                        <button
                          onClick={() => toggleFaq(index)}
                          className="w-full text-left p-4 sm:p-5 font-bold text-gray-900 flex justify-between items-center hover:bg-gray-50 transition text-sm sm:text-base cursor-pointer"
                        >
                          <span className="pr-4">{faq.question}</span>
                          <span className="text-[#D2A02A] text-xl font-extrabold shrink-0">
                            {openFaqIndex === index ? "−" : "+"}
                          </span>
                        </button>
                        {openFaqIndex === index && (
                          <div className="p-4 sm:p-5 pt-0 text-gray-700 text-xs sm:text-sm leading-relaxed border-t border-gray-100 bg-amber-50/20">
                            <p>{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </section>

                {/* ================= COMPANY BRANDING & SOLUTIONS ================= */}
                <section className="border-t-2 border-[#D2A02A]/30 pt-10 text-center space-y-6">
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#5A4C33] to-[#3a3020] flex items-center justify-center text-2xl text-[#D2A02A] shadow-md">
                      ⚖️
                    </div>
                    <div className="text-left">
                      <div className="text-lg sm:text-xl font-extrabold text-gray-900 tracking-tight">AMA Legal Solutions</div>
                      <div className="text-xs text-gray-500 font-medium">India's Premier Legal Advisory &amp; Litigation Practice</div>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed">
                    AMA Legal Solutions is India's premier legal advisory, delivering senior advocate representation across banking litigation, debt settlement, commercial arbitration, corporate compliance, and consumer dispute resolution.
                  </p>

                  <div className="pt-2">
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Our Solutions</div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 max-w-4xl mx-auto">
                      <Link
                        href="/personal-loan-settlement"
                        className="px-3 py-2 border border-[#D2A02A] text-[#5A4C33] font-bold rounded-lg hover:bg-[#D2A02A] hover:text-white transition-all text-center text-xs flex items-center justify-center bg-white shadow-sm"
                      >
                        Personal Loan Settlement
                      </Link>
                      <Link
                        href="/credit-card-settlement"
                        className="px-3 py-2 border border-[#D2A02A] text-[#5A4C33] font-bold rounded-lg hover:bg-[#D2A02A] hover:text-white transition-all text-center text-xs flex items-center justify-center bg-white shadow-sm"
                      >
                        Credit Card Settlement
                      </Link>
                      <Link
                        href="/send-legal-notice"
                        className="px-3 py-2 border border-[#D2A02A] text-[#5A4C33] font-bold rounded-lg hover:bg-[#D2A02A] hover:text-white transition-all text-center text-xs flex items-center justify-center bg-white shadow-sm"
                      >
                        Send Legal Notice
                      </Link>
                      <Link
                        href="/drafting-of-will"
                        className="px-3 py-2 border border-[#D2A02A] text-[#5A4C33] font-bold rounded-lg hover:bg-[#D2A02A] hover:text-white transition-all text-center text-xs flex items-center justify-center bg-white shadow-sm"
                      >
                        Will Drafting Services
                      </Link>
                    </div>
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
                  Stop recovery agent harassment today. Connect directly with our senior debt settlement advocates for a confidential case evaluation.
                </p>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full bg-[#D2A02A] hover:bg-[#b08522] text-white font-bold py-3 px-4 rounded-xl transition-all shadow-md text-sm mb-3 flex items-center justify-center gap-2 cursor-pointer"
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
                  "{clientReviewData.reviewBody}"
                </blockquote>

                <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                  <div className="w-9 h-9 rounded-full bg-[#5A4C33] text-[#D2A02A] flex items-center justify-center font-bold text-sm">
                    {clientReviewData.authorName.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-xs sm:text-sm">{clientReviewData.authorName}</div>
                    <div className="text-[11px] text-gray-500">{clientReviewData.authorTitle}</div>
                  </div>
                </div>
              </div>

              {/* RBI Compliance Badge Box */}
              <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200 text-xs text-gray-600 space-y-2">
                <div className="font-bold text-gray-900 text-sm flex items-center gap-2">
                  <span className="text-[#D2A02A]">🛡️</span> Regulatory Assurance
                </div>
                <p className="leading-relaxed">
                  All debt settlement negotiations, representation notices, and dispute resolutions are conducted strictly pursuant to the Advocates Act, 1961 and Reserve Bank of India Master Directions.
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
                className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-lg transition-colors cursor-pointer"
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
                      Speak directly with an advocate to stop harassment and settle your personal loans and credit cards.
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
                        placeholder="e.g. Rajeev Verma"
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
                          placeholder="rajeev@example.com"
                          className="w-full px-3.5 py-2.5 border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-[#D2A02A] focus:border-transparent outline-none transition"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">
                          Lending Banks / NBFCs
                        </label>
                        <input
                          type="text"
                          name="bankName"
                          value={formData.bankName}
                          onChange={handleInputChange}
                          placeholder="e.g. HDFC, SBI, ICICI, Bajaj Finance"
                          className="w-full px-3.5 py-2.5 border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-[#D2A02A] focus:border-transparent outline-none transition"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">
                          Total Unsecured Dues
                        </label>
                        <input
                          type="text"
                          name="loanAmount"
                          value={formData.loanAmount}
                          onChange={handleInputChange}
                          placeholder="e.g. ₹25,00,000"
                          className="w-full px-3.5 py-2.5 border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-[#D2A02A] focus:border-transparent outline-none transition"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Brief Hardship &amp; Harassment Details
                      </label>
                      <textarea
                        name="message"
                        rows={2}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Job loss, business losses, compounding interest, or recovery agent harassment details..."
                        className="w-full px-3.5 py-2.5 border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-[#D2A02A] focus:border-transparent outline-none transition"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#D2A02A] hover:bg-[#b08522] text-white font-bold py-3.5 rounded-xl transition-all shadow-lg text-sm sm:text-base mt-2 cursor-pointer"
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
                    Thank you, <strong>{formData.name || "Client"}</strong>. Our senior debt settlement legal team will review your details and contact you confidentially on <strong>{formData.phone}</strong>.
                  </p>
                  <div className="pt-3">
                    <a
                      href={`https://api.whatsapp.com/send?phone=918700343611&text=Hello%20AMA%20Legal%20Solutions,%20I%20am%20${encodeURIComponent(formData.name || "a client")}%20requesting%20urgent%20debt%20settlement%20assistance.`}
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
