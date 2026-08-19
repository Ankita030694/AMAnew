"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";

export default function BestPersonalLoanSettlementServiceClient() {
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
    { id: "introduction", title: "The Personal Loan Debt Crisis in India" },
    { id: "what-makes-best-service", title: "What Defines the Best Debt Settlement Service?" },
    { id: "law-firm-vs-agencies", title: "Advocate-Led Law Firms vs. Unregulated Agencies" },
    { id: "rbi-guidelines-ots", title: "RBI Master Directions & Compromise Settlements" },
    { id: "statutory-borrower-rights", title: "Borrower Rights & Legal Harassment Protection" },
    { id: "step-by-step-protocol", title: "The 5-Step Legal Personal Loan Settlement Protocol" },
    { id: "bank-negotiation-dynamics", title: "Settlement Dynamics with Leading Indian Banks & NBFCs" },
    { id: "cibil-credit-repair", title: "CIBIL Score Impact & 24-Month Credit Recovery" },
    { id: "why-ama-legal-solutions", title: "Why AMA Legal Solutions is India's #1 Advisory" },
    { id: "more-legal-guides", title: "More Legal Debt Relief Guides" },
    { id: "frequently-asked-questions", title: "Frequently Asked Questions" },
  ];

  const faqs = [
    {
      question: "What is the best personal loan debt settlement service in India?",
      answer: "The best personal loan debt settlement service in India is an advocate-led legal advisory that operates strictly under the Advocates Act, 1961 and Reserve Bank of India (RBI) compromise settlement frameworks. Unlike unregulated private debt management apps or call-center agencies, a premier law firm provides formal legal representation, serves statutory cease-and-desist notices to stop recovery agent harassment, represents borrowers in Section 138/25 judicial proceedings, forensic-audits inflated bank ledgers, and negotiates formal 40% to 75% One Time Settlement (OTS) waivers backed by verified No Dues Certificates."
    },
    {
      question: "How much waiver can be negotiated through a personal loan debt settlement service?",
      answer: "Depending on the loan default vintage, Non-Performing Asset (NPA) classification, and verified documentary proof of genuine financial distress, experienced advocates routinely negotiate waivers between 40% and 75% of the total outstanding personal loan balance. The legal negotiation protocol prioritizes the complete 100% elimination of accumulated penal interest, late payment surcharges, and compounding fees before securing significant concessions on the unpaid principal balance through the bank's internal Stressed Asset Settlement Committee."
    },
    {
      question: "Can hiring a legal loan settlement service stop recovery agent harassment immediately?",
      answer: "Yes, retaining an authorized legal counsel halts recovery agent harassment through formal statutory notices issued under the Advocates Act, 1961 and RBI Master Directions on Fair Practices Code. Once our law firm issues formal Vakalatnama and legal representation directives to the lending bank or NBFC, all recovery calls, workplace intrusions, and unannounced home visits must immediately cease and redirect exclusively to our legal offices, with non-compliance subject to RBI Integrated Ombudsman and police complaints."
    },
    {
      question: "What is the difference between a law firm and a debt settlement agency or app?",
      answer: "Unregulated debt settlement companies and digital apps are commercial intermediaries that cannot legally represent borrowers in court, hold zero advocate-client privilege, and often charge hefty non-refundable advance subscription fees without regulatory accountability. In contrast, an advocate-led legal practice provides constitutional and statutory representation, defends borrowers against Section 138 NI Act cheque bounce cases and Section 25 PSS Act auto-debit summons, and negotiates directly with senior zonal bank recovery heads under strict legal oversight."
    },
    {
      question: "Can personal loan default lead to police arrest or criminal imprisonment in India?",
      answer: "No, defaulting on an unsecured personal loan is strictly a civil breach of contract under Indian commercial law and cannot result in police arrest or criminal incarceration for simple inability to pay. However, lending institutions frequently file quasi-criminal complaints under Section 138 of the Negotiable Instruments Act, 1881 for bounced cheques or Section 25 of the Payment and Settlement Systems Act, 2007 for failed NACH mandate debits. Our litigation advocates enter formal appearances in court to quash malicious litigation and transition disputes to amicable Lok Adalat compromise settlements."
    },
    {
      question: "What documents are required to initiate a personal loan settlement?",
      answer: "To establish a legitimate One Time Settlement (OTS) petition before a bank's Stressed Asset Committee, borrowers must supply documentary evidence proving an involuntary loss of repayment capacity. Essential documentation includes loan account sanction letters, latest statement of accounts, termination letters or salary reduction slips for salaried individuals, audited profit-and-loss statements or GST return filings showing commercial insolvency for business owners, and hospital discharge summaries or medical records in cases of critical health emergencies."
    },
    {
      question: "How does a personal loan settlement impact my CIBIL score and how can I rebuild it?",
      answer: "When a personal loan is settled through a negotiated OTS, credit rating bureaus such as TransUnion CIBIL, Equifax, and Experian reflect the account remark as 'Settled' rather than 'Closed', resulting in an immediate temporary credit score reduction of 60 to 130 points. However, settling the loan permanently stops continuous negative monthly DPD compounding and eliminates legal risk. Borrowers can systematically rebuild their CIBIL score back above 750 within 18 to 24 months by utilizing secured fixed-deposit credit cards and maintaining disciplined repayment."
    },
    {
      question: "What is the fee structure for AMA Legal Solutions personal loan debt settlement service?",
      answer: "AMA Legal Solutions maintains an ethical, transparent, and success-oriented fee schedule designed specifically for distressed borrowers. The engagement begins with an accessible administrative retainer to draft statutory cease-and-desist notices, issue formal legal representation briefs to all lenders, and protect the client from recovery coercion. Our primary advocate fee is structured on a contingency basis, calculated strictly as an agreed percentage of the actual financial savings achieved on your debt waiver, aligning our incentives directly with maximizing your relief."
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

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://www.amalegalsolutions.com/best-personal-loan-settlement-service#article",
        "headline": "Best Personal Loan Debt Settlement Service in India: Advocate-Led Legal Defense & OTS Advisory",
        "description": "Comprehensive guide on selecting the best personal loan debt settlement service in India. Learn how advocate representation halts recovery harassment, eliminates compounding interest, secures 40% to 75% OTS waivers under RBI guidelines, and delivers valid No Dues Certificates.",
        "image": [
          "https://www.amalegalsolutions.com/images/og/best-personal-loan-settlement-service.png"
        ],
        "datePublished": "2026-01-18T09:00:00+05:30",
        "dateModified": "2026-08-19T17:55:00+05:30",
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
          "@id": "https://www.amalegalsolutions.com/best-personal-loan-settlement-service"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://www.amalegalsolutions.com/best-personal-loan-settlement-service",
        "url": "https://www.amalegalsolutions.com/best-personal-loan-settlement-service",
        "name": "Best Personal Loan Debt Settlement Service in India | AMA Legal Solutions",
        "description": "Expert advocate-led personal loan debt settlement service in India. Stop recovery harassment, negotiate 40%–75% waivers under RBI frameworks, and secure authentic No Dues Certificates.",
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": ["h1", "#quick-answer"]
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.amalegalsolutions.com/best-personal-loan-settlement-service#faq",
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
        "@id": "https://www.amalegalsolutions.com/best-personal-loan-settlement-service#product",
        "name": "Personal Loan Debt Settlement Legal Services",
        "image": "https://www.amalegalsolutions.com/images/og/best-personal-loan-settlement-service.png",
        "description": "India's top-rated advocate-led personal loan debt settlement and commercial resolution service. Defend against recovery harassment, negotiate One Time Settlements (OTS), and secure genuine No Dues Certificates.",
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
            "name": "Vikram Singhania"
          },
          "reviewBody": "Advocate Anuj Anand Malik and AMA Legal Solutions provided an exceptional, life-changing personal loan settlement service. When I faced sudden medical expenses and corporate restructuring, my personal loans across three major banks surged to ₹18.5 Lakhs with aggressive recovery calls disrupting my family daily. AMA Legal Solutions stepped in immediately with formal legal notices, halted all recovery agent harassment within 48 hours, and negotiated a structured 62% waiver on the total outstanding balance under RBI compromise settlement guidelines. I received official No Dues Certificates from all lenders without stepping into a courtroom."
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
        "@id": "https://www.amalegalsolutions.com/best-personal-loan-settlement-service#breadcrumbs",
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
            "name": "Best Personal Loan Settlement Service",
            "item": "https://www.amalegalsolutions.com/best-personal-loan-settlement-service"
          }
        ]
      },
      {
        "@type": "ItemList",
        "@id": "https://www.amalegalsolutions.com/best-personal-loan-settlement-service#process",
        "name": "The 5-Step Legal Personal Loan Settlement Protocol",
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
        id="best-personal-loan-settlement-service-schema"
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
              India's Premier Advocate-Led Personal Loan Debt Settlement Practice
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight max-w-5xl mx-auto">
              Best <span className="text-[#D2A02A]">Personal Loan Debt Settlement Service</span> in India
            </h1>

            <p className="text-sm sm:text-base md:text-xl mb-8 md:mb-10 max-w-3xl mx-auto text-gray-200 leading-relaxed font-light">
              Stop aggressive recovery agent harassment instantly. Retain senior banking litigation advocates to negotiate <strong className="text-white font-semibold">40% to 75% debt waivers</strong> under Reserve Bank of India (RBI) compromise frameworks with genuine No Dues Certificates.
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
                <p className="text-xs md:text-sm text-gray-600 font-medium mt-0.5">10,000+ Borrowers Represented</p>
              </div>

              <div className="flex flex-col items-center justify-center p-2 pt-4 md:pt-2">
                <div className="text-2xl md:text-3xl mb-1.5 text-[#D2A02A]">⚖️</div>
                <div className="text-base md:text-lg font-bold text-gray-900">Statutory Remedies</div>
                <p className="text-xs md:text-sm text-gray-600 font-medium mt-0.5">RBI Ombudsman &amp; Section 138/25 Defense</p>
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
                          Best Personal Loan Settlement Service
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
                      href="https://www.facebook.com/sharer/sharer.php?u=https://www.amalegalsolutions.com/best-personal-loan-settlement-service"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:opacity-90 transition font-bold text-xs shadow-sm"
                      title="Share on Facebook"
                      aria-label="Share on Facebook"
                    >
                      f
                    </a>
                    <a
                      href="https://twitter.com/intent/tweet?url=https://www.amalegalsolutions.com/best-personal-loan-settlement-service&text=Best%20Personal%20Loan%20Debt%20Settlement%20Service%20in%20India"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center hover:opacity-90 transition font-bold text-xs shadow-sm"
                      title="Share on X"
                      aria-label="Share on X"
                    >
                      𝕏
                    </a>
                    <a
                      href="https://www.linkedin.com/sharing/share-offsite/?url=https://www.amalegalsolutions.com/best-personal-loan-settlement-service"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-[#0A66C2] text-white flex items-center justify-center hover:opacity-90 transition font-bold text-xs shadow-sm"
                      title="Share on LinkedIn"
                      aria-label="Share on LinkedIn"
                    >
                      in
                    </a>
                    <a
                      href="https://api.whatsapp.com/send?text=Best%20Personal%20Loan%20Debt%20Settlement%20Service%20in%20India%20https://www.amalegalsolutions.com/best-personal-loan-settlement-service"
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
                    <h2>Quick Answer: What is the Best Personal Loan Debt Settlement Service in India?</h2>
                  </div>
                  <p className="text-gray-900 font-normal leading-relaxed text-sm md:text-base">
                    The best personal loan debt settlement service in India is an advocate-led legal advisory that operates strictly under the statutory framework of the Advocates Act, 1961 and Reserve Bank of India (RBI) compromise settlement guidelines. Unlike unregulated third-party apps or call-center agencies, a premier legal firm provides formal legal representation, serves statutory cease-and-desist notices to stop recovery agent harassment immediately, defends borrowers against Section 138 NI Act cheque bounce and Section 25 PSS Act NACH court summons, eliminates compounding penal charges, negotiates 40% to 75% One Time Settlement (OTS) waivers, and delivers authentic bank-issued No Dues Certificates (NDCs).
                  </p>
                </div>

                {/* ================= SECTION 1 ================= */}
                <section id="introduction" className="scroll-mt-32 space-y-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
                    The Personal Loan Debt Crisis in India
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    The rapid expansion of unsecured consumer credit across India has led to unprecedented financial stress for millions of retail borrowers. Unsecured personal loans—marketed aggressively by scheduled commercial banks, Non-Banking Financial Companies (NBFCs), and digital fintech lenders—carry high interest rates ranging from 12% to 28% per annum. When economic headwinds, corporate downsizing, medical crises, or commercial business insolvency disrupt a borrower's cash flow, meeting high Equated Monthly Installments (EMIs) becomes mathematically unviable.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    Missing consecutive personal loan payments triggers immediate compounding penalties, late payment charges, and automated NACH bounce surcharges, inflating the outstanding debt exponentially. Within 90 days of non-payment, the loan account is categorized as a Non-Performing Asset (NPA). At this stage, lending institutions frequently assign aggressive third-party collection agencies that deploy coercive, unlawful recovery tactics. Navigating this acute financial distress requires engaging the <strong>best personal loan debt settlement service in India</strong>—a dedicated legal practice equipped to protect your statutory rights and negotiate an enforceable, discounted full-and-final settlement.
                  </p>
                </section>

                {/* ================= SECTION 2 ================= */}
                <section id="what-makes-best-service" className="scroll-mt-32 space-y-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#5A4C33]">
                    What Defines the Best Personal Loan Debt Settlement Service?
                  </h2>
                  
                  <div className="bg-[#f6f4ee] border-l-4 border-[#5A4C33] p-4 md:p-6 rounded-r-xl">
                    <p className="text-[#3a3020] text-sm md:text-base font-medium italic">
                      "A credible personal loan debt settlement service is characterized by institutional legal authority, direct advocate-level negotiation access with bank Stressed Asset Committees, strict adherence to RBI Master Directions, complete transparency in fee structures, and the guaranteed delivery of verified, authentic bank-issued No Dues Certificates."
                    </p>
                  </div>

                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    When evaluating debt relief providers in India, commercial borrowers must differentiate between superficial marketing promises and genuine legal capability. The premier personal loan settlement providers distinguish themselves across five essential criteria:
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-4">
                    <div className="p-4 rounded-xl border border-gray-200 bg-white shadow-sm">
                      <div className="text-[#D2A02A] font-bold text-base mb-1">⚖️ Statutory Legal Standing</div>
                      <p className="text-xs md:text-sm text-gray-600">The service must be led by Bar Council-enrolled advocates authorized to represent clients under the Advocates Act, 1961 and issue binding legal notices.</p>
                    </div>
                    <div className="p-4 rounded-xl border border-gray-200 bg-white shadow-sm">
                      <div className="text-[#D2A02A] font-bold text-base mb-1">🛡️ Anti-Harassment Immunity</div>
                      <p className="text-xs md:text-sm text-gray-600">Immediate issuance of Cease-and-Desist directives to bank recovery verticals, enforcing RBI Fair Practices Code to shield home and workplace privacy.</p>
                    </div>
                    <div className="p-4 rounded-xl border border-gray-200 bg-white shadow-sm">
                      <div className="text-[#D2A02A] font-bold text-base mb-1">🏛️ Judicial Defense Capability</div>
                      <p className="text-xs md:text-sm text-gray-600">Comprehensive courtroom litigation representation to defend against Section 138 NI Act, Section 25 PSS Act, and Arbitration notices.</p>
                    </div>
                    <div className="p-4 rounded-xl border border-gray-200 bg-white shadow-sm">
                      <div className="text-[#D2A02A] font-bold text-base mb-1">📜 Authentic NDC Guarantee</div>
                      <p className="text-xs md:text-sm text-gray-600">Rigorous legal verification of official bank compromise sanction letters and prompt enforcement of formal No Dues Certificates.</p>
                    </div>
                  </div>
                </section>

                {/* ================= INFOGRAPHIC EMBED ================= */}
                <figure className="my-8 rounded-2xl overflow-hidden shadow-xl border-2 border-[#D2A02A]/40 bg-gray-900">
                  <Image
                    src="/images/og/best-personal-loan-settlement-service.png"
                    alt="Best Personal Loan Debt Settlement Service & RBI Compromise Settlement Infographic"
                    width={1200}
                    height={675}
                    className="w-full h-auto object-cover"
                  />
                  <figcaption className="p-3.5 bg-gray-900 text-center text-xs md:text-sm text-gray-300 font-medium">
                    Infographic: Strategic Personal Loan Debt Settlement Framework, Borrower Legal Protections, and RBI Compromise Regulations in India.
                  </figcaption>
                </figure>

                {/* ================= SECTION 3 ================= */}
                <section id="law-firm-vs-agencies" className="scroll-mt-32 space-y-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#5A4C33]">
                    Advocate-Led Law Firms vs. Unregulated Debt Settlement Agencies
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    Many distressed borrowers fall victim to unlicensed private debt management apps or call-center "settlement agencies." Understanding the profound legal and operational disparities between an advocate-led law firm and a commercial intermediary is crucial:
                  </p>

                  <div className="overflow-x-auto my-4">
                    <table className="min-w-full text-left text-xs md:text-sm border border-gray-200 rounded-xl overflow-hidden">
                      <thead className="bg-[#5A4C33] text-white">
                        <tr>
                          <th className="p-3 md:p-4 font-semibold">Service Parameter</th>
                          <th className="p-3 md:p-4 font-semibold">Unregulated Debt Agency / App</th>
                          <th className="p-3 md:p-4 font-semibold bg-[#D2A02A] text-white">AMA Legal Solutions (Advocate-Led)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 bg-white">
                        <tr>
                          <td className="p-3 md:p-4 font-bold text-gray-900">Legal Authority &amp; Privilege</td>
                          <td className="p-3 md:p-4 text-red-600">Zero legal standing; cannot represent borrowers in court</td>
                          <td className="p-3 md:p-4 text-emerald-700 font-semibold bg-amber-50/40">Full Advocate-Client privilege under Advocates Act, 1961</td>
                        </tr>
                        <tr>
                          <td className="p-3 md:p-4 font-bold text-gray-900">Recovery Harassment Shield</td>
                          <td className="p-3 md:p-4 text-red-600">Informal emails easily ignored by bank recovery agents</td>
                          <td className="p-3 md:p-4 text-emerald-700 font-semibold bg-amber-50/40">Statutory Cease-and-Desist notices halt all third-party contact</td>
                        </tr>
                        <tr>
                          <td className="p-3 md:p-4 font-bold text-gray-900">Litigation Defense (Sec 138/25)</td>
                          <td className="p-3 md:p-4 text-red-600">No courtroom representation; high risk of non-bailable warrants</td>
                          <td className="p-3 md:p-4 text-emerald-700 font-semibold bg-amber-50/40">Formal advocate appearances in court &amp; Lok Adalat settlement</td>
                        </tr>
                        <tr>
                          <td className="p-3 md:p-4 font-bold text-gray-900">Debt Waiver Percentage</td>
                          <td className="p-3 md:p-4 text-gray-600">Modest (15% to 25%); bank penal charges largely retained</td>
                          <td className="p-3 md:p-4 text-emerald-700 font-semibold bg-amber-50/40">Aggressive 40% to 75% waivers negotiated with zonal heads</td>
                        </tr>
                        <tr>
                          <td className="p-3 md:p-4 font-bold text-gray-900">Document Fraud Protection</td>
                          <td className="p-3 md:p-4 text-red-600">Frequent issues with fake WhatsApp settlement letters</td>
                          <td className="p-3 md:p-4 text-emerald-700 font-semibold bg-amber-50/40">100% verified official bank sanction letters &amp; authentic NDCs</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* ================= SECTION 4 ================= */}
                <section id="rbi-guidelines-ots" className="scroll-mt-32 space-y-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#5A4C33]">
                    RBI Master Directions &amp; Compromise Settlement Frameworks
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    Loan settlement in India is an institutionalized statutory mechanism governed by the <a href="https://rbi.org.in/" target="_blank" rel="noopener noreferrer" className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold">Reserve Bank of India (RBI)</a>. Under RBI Master Directions on Resolution of Stressed Assets and the June 2023 Prudential Framework on Compromise Settlements and Technical Write-offs, all regulated commercial banks, NBFCs, and housing finance companies are mandated to maintain board-approved compromise policies.
                  </p>

                  <blockquote className="border-l-4 border-[#D2A02A] pl-5 py-3 bg-gray-50 text-gray-800 italic rounded-r-lg text-sm md:text-base">
                    "Regulated entities shall undertake compromise settlements or technical write-offs in respect of stressed accounts classified as Non-Performing Assets (NPAs), provided such settlements are executed under board-approved transparent policies and are in the commercial interest of the lending institution." — Reserve Bank of India Framework on Compromise Settlements.
                  </blockquote>

                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    Because unsecured personal loans carry no physical collateral for attachment under the SARFAESI Act, 2002, holding overdue accounts on bank balance sheets forces lenders to make 100% provisioning allocations. A structured One Time Settlement (OTS) negotiated by seasoned advocates allows lenders to recover a realistic lump-sum while permanently closing toxic balance sheet exposure.
                  </p>
                </section>

                {/* ================= SECTION 5 ================= */}
                <section id="statutory-borrower-rights" className="scroll-mt-32 space-y-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#5A4C33]">
                    Borrower Rights &amp; Statutory Legal Defense Under Indian Law
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    Financial default does not forfeit your constitutional right to dignity and statutory legal protections. Indian jurisprudence provides robust safeguards against coercive debt collection:
                  </p>

                  <ul className="space-y-4 text-sm md:text-base text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="text-[#D2A02A] font-bold text-lg leading-none mt-1">▶</span>
                      <div>
                        <strong>Protection Under the RBI Fair Practices Code:</strong> Recovery agents are legally restricted to contacting borrowers strictly between 08:00 AM and 07:00 PM. Calling at unreasonable hours, contacting friends or colleagues, visiting workplaces without consent, or using abusive language constitutes a direct violation of RBI guidelines punishable by regulatory penalties.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#D2A02A] font-bold text-lg leading-none mt-1">▶</span>
                      <div>
                        <strong>RBI Integrated Ombudsman Redressal:</strong> In cases of persistent recovery harassment, unlawful data leakage, or arbitrary interest compounding, cardholders and borrowers can escalate grievances to the <a href="https://cms.rbi.org.in/" target="_blank" rel="noopener noreferrer" className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold">RBI Integrated Ombudsman Scheme</a> for swift regulatory intervention.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#D2A02A] font-bold text-lg leading-none mt-1">▶</span>
                      <div>
                        <strong>Consumer Protection Act, 2019 Remedies:</strong> Unfair trade practices, predatory loan servicing, and emotional distress caused by rogue collection agents can be prosecuted before Consumer Dispute Redressal Commissions and the <a href="https://ncdrc.nic.in/" target="_blank" rel="noopener noreferrer" className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold">National Consumer Disputes Redressal Commission (NCDRC)</a> to claim substantial punitive damages.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#D2A02A] font-bold text-lg leading-none mt-1">▶</span>
                      <div>
                        <strong>Supreme Court Jurisprudence on Debt Dignity:</strong> In historic rulings such as <em>ICICI Bank Ltd. v. Prakash Kaur</em> and <em>Sonia Mehra v. State of Maharashtra</em>, the <a href="https://main.sci.gov.in/" target="_blank" rel="noopener noreferrer" className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold">Supreme Court of India</a> affirmed that banks cannot employ strong-arm tactics or musclemen for loan recovery and bear direct legal liability for unlawful acts of their agents.
                      </div>
                    </li>
                  </ul>
                </section>

                {/* ================= SECTION 6 ================= */}
                <section id="step-by-step-protocol" className="scroll-mt-32 space-y-6">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#5A4C33]">
                    The 5-Step Legal Personal Loan Settlement Protocol
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    Executing an authentic, legally bulletproof personal loan settlement requires a disciplined 5-stage institutional legal protocol executed by experienced banking litigation advocates:
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

                {/* ================= SECTION 7 ================= */}
                <section id="bank-negotiation-dynamics" className="scroll-mt-32 space-y-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#5A4C33]">
                    Settlement Dynamics Across Major Indian Banks &amp; NBFCs
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    Every lending institution in India maintains specific NPA aging guidelines, provisioning thresholds, and internal settlement matrices. AMA Legal Solutions possesses extensive institutional experience negotiating with all major lenders:
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-4">
                    <div className="p-4 rounded-xl border border-gray-200 bg-white shadow-sm">
                      <div className="text-[#5A4C33] font-bold text-base mb-1">🏦 Tier-1 Private Banks</div>
                      <div className="text-xs font-semibold text-[#D2A02A] mb-2">HDFC, ICICI, Axis, Kotak</div>
                      <p className="text-xs text-gray-600">Settlements are processed through zonal credit committees once default exceeds 90–120 DPD. Waiver ranges typically span 45% to 70% with strict hardship documentation.</p>
                    </div>
                    <div className="p-4 rounded-xl border border-gray-200 bg-white shadow-sm">
                      <div className="text-[#5A4C33] font-bold text-base mb-1">🏛️ Public Sector Banks</div>
                      <div className="text-xs font-semibold text-[#D2A02A] mb-2">SBI, PNB, Bank of Baroda, Canara</div>
                      <p className="text-xs text-gray-600">Regulated under standardized One Time Settlement (OTS) circulars and Lok Adalat compromise portals, offering 50% to 75% principal-focused waivers.</p>
                    </div>
                    <div className="p-4 rounded-xl border border-gray-200 bg-white shadow-sm">
                      <div className="text-[#5A4C33] font-bold text-base mb-1">⚡ Leading Retail NBFCs</div>
                      <div className="text-xs font-semibold text-[#D2A02A] mb-2">Bajaj Finance, Tata Capital, Aditya Birla</div>
                      <p className="text-xs text-gray-600">Fast-tracked digital settlement approvals once statutory legal representation notices are served, securing substantial waivers on compounding late charges.</p>
                    </div>
                  </div>
                </section>

                {/* ================= SECTION 8 ================= */}
                <section id="cibil-credit-repair" className="scroll-mt-32 space-y-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#5A4C33]">
                    Credit Score (CIBIL) Impact &amp; 24-Month Credit Recovery Strategy
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    Transparency regarding credit bureau reporting is fundamental to ethical legal advisory. When an unsecured personal loan is settled under an OTS compromise, credit information companies (CIBIL, Experian, Equifax, CRIF High Mark) record the account remark as "Settled" rather than "Closed."
                  </p>
                  
                  <div className="grid sm:grid-cols-3 gap-4 my-4">
                    <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                      <div className="text-sm font-bold text-[#5A4C33] mb-1">1. Immediate Relief &amp; Debt Closure</div>
                      <p className="text-xs text-gray-600">Eliminates mounting compound interest, halts ongoing monthly DPD delinquency reporting, and quashes all active or impending court litigation.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                      <div className="text-sm font-bold text-[#5A4C33] mb-1">2. Credit Rebuilding (Months 1–12)</div>
                      <p className="text-xs text-gray-600">Open a secured credit card backed by a fixed deposit (FD). Maintain credit utilization below 25% and pay 100% on time every billing cycle.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                      <div className="text-sm font-bold text-[#5A4C33] mb-1">3. Long-Term Restoration (Months 18–24)</div>
                      <p className="text-xs text-gray-600">With 24 months of consistent on-time trade lines, your credit score steadily climbs back to 750+, restoring broad eligibility for retail credit facilities.</p>
                    </div>
                  </div>
                </section>

                {/* ================= SECTION 9 ================= */}
                <section id="why-ama-legal-solutions" className="scroll-mt-32 space-y-6">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
                    Why AMA Legal Solutions is India's #1 Rated Personal Loan Debt Settlement Practice
                  </h2>
                  
                  <div className="grid sm:grid-cols-3 gap-4 text-center">
                    <div className="p-5 rounded-xl bg-gray-50 border border-gray-200 shadow-sm hover:border-[#D2A02A] transition-colors">
                      <div className="text-3xl mb-2">⚖️</div>
                      <h3 className="font-bold text-base text-[#5A4C33] mb-1">Senior Legal Advocates</h3>
                      <p className="text-xs text-gray-600">Supreme Court and High Court advocates with extensive statutory mastery over banking jurisprudence, NPA resolution, and borrower rights.</p>
                    </div>
                    <div className="p-5 rounded-xl bg-gray-50 border border-gray-200 shadow-sm hover:border-[#D2A02A] transition-colors">
                      <div className="text-3xl mb-2">🛡️</div>
                      <h3 className="font-bold text-base text-[#5A4C33] mb-1">Anti-Harassment Shield</h3>
                      <p className="text-xs text-gray-600">We mandate all recovery communication through our legal offices, safeguarding your peace of mind, family dignity, and workplace privacy.</p>
                    </div>
                    <div className="p-5 rounded-xl bg-gray-50 border border-gray-200 shadow-sm hover:border-[#D2A02A] transition-colors">
                      <div className="text-3xl mb-2">🎯</div>
                      <h3 className="font-bold text-base text-[#5A4C33] mb-1">Success-Driven Model</h3>
                      <p className="text-xs text-gray-600">Zero predatory advance subscription fees. Our primary fee is tied directly to the actual financial savings negotiated on your personal loan.</p>
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
                      Managing Partner at AMA Legal Solutions. Supreme Court and High Court Advocate specializing in banking litigation, unsecured debt resolution, commercial insolvency, and borrower defense.
                    </p>
                    <Link
                      href="/author/anuj-anand-malik"
                      className="text-[#D2A02A] hover:text-[#5A4C33] font-bold text-xs sm:text-sm mt-2 inline-flex items-center gap-1 underline transition-colors"
                    >
                      View Full Verified Legal Profile &amp; Credentials →
                    </Link>
                  </div>
                </div>

                {/* ================= EXTERNAL AUTHORITY SOURCING ================= */}
                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span>📚</span> Statutory Authorities &amp; Legal References
                  </h3>
                  <ul className="space-y-2 text-xs md:text-sm text-gray-600">
                    <li>
                      • <a href="https://www.rbi.org.in/" target="_blank" rel="noopener noreferrer" className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-medium">Reserve Bank of India (RBI)</a> — Prudential Framework on Compromise Settlements and Technical Write-offs &amp; Fair Practices Code.
                    </li>
                    <li>
                      • <a href="https://cms.rbi.org.in/" target="_blank" rel="noopener noreferrer" className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-medium">RBI Integrated Ombudsman Scheme</a> — Mechanism for Redressal of Deficiencies in Bank Services &amp; Recovery Agent Harassment.
                    </li>
                    <li>
                      • <a href="https://ncdrc.nic.in/" target="_blank" rel="noopener noreferrer" className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-medium">National Consumer Disputes Redressal Commission (NCDRC)</a> — Judicial Precedents on Unfair Banking Practices and Excessive Surcharges.
                    </li>
                    <li>
                      • <a href="https://www.indiacode.nic.in/handle/123456789/2006" target="_blank" rel="noopener noreferrer" className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-medium">India Code — SARFAESI Act, 2002</a> &amp; <a href="https://www.indiacode.nic.in/handle/123456789/1960" target="_blank" rel="noopener noreferrer" className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-medium">Recovery of Debts and Bankruptcy Act, 1993</a>.
                    </li>
                    <li>
                      • <a href="https://main.sci.gov.in/" target="_blank" rel="noopener noreferrer" className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-medium">Supreme Court of India</a> — Landmark Judgments on Borrower Dignity and Injunctions Against Strong-Arm Recovery Practices.
                    </li>
                    <li>
                      • <a href="https://incometaxindia.gov.in/" target="_blank" rel="noopener noreferrer" className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-medium">Income Tax Department of India</a> — Regulatory Tax Treatment of Personal &amp; Commercial Compromise Debt Waivers.
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
                      href="/personal-loan-debt-settlement"
                      className="p-3.5 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:bg-amber-50/40 transition-all text-xs md:text-sm font-semibold text-gray-800 flex items-center justify-between"
                    >
                      <span>Personal Loan Debt Settlement</span>
                      <span className="text-[#D2A02A]">→</span>
                    </Link>
                    <Link
                      href="/best-loan-settlement-companies-and-platforms-in-india"
                      className="p-3.5 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:bg-amber-50/40 transition-all text-xs md:text-sm font-semibold text-gray-800 flex items-center justify-between"
                    >
                      <span>Best Loan Settlement Platforms</span>
                      <span className="text-[#D2A02A]">→</span>
                    </Link>
                    <Link
                      href="/how-can-I-negotiate-a-personal-loan-settlement-with-lenders"
                      className="p-3.5 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:bg-amber-50/40 transition-all text-xs md:text-sm font-semibold text-gray-800 flex items-center justify-between"
                    >
                      <span>How to Negotiate with Lenders</span>
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
                      href="/one-time-settlement-scheme-for-personal-loan-2026"
                      className="p-3.5 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:bg-amber-50/40 transition-all text-xs md:text-sm font-semibold text-gray-800 flex items-center justify-between"
                    >
                      <span>One Time Settlement Scheme 2026</span>
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
                      href="/how-to-stop-bank-recovery-agents-harassment-legally-in-india"
                      className="p-3.5 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:bg-amber-50/40 transition-all text-xs md:text-sm font-semibold text-gray-800 flex items-center justify-between"
                    >
                      <span>Stop Recovery Harassment Legally</span>
                      <span className="text-[#D2A02A]">→</span>
                    </Link>
                    <Link
                      href="/difference-between-loan-settlement-and-loan-closure-impact-on-cibil"
                      className="p-3.5 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:bg-amber-50/40 transition-all text-xs md:text-sm font-semibold text-gray-800 flex items-center justify-between"
                    >
                      <span>Settlement vs Closure CIBIL Impact</span>
                      <span className="text-[#D2A02A]">→</span>
                    </Link>
                    <Link
                      href="/documents-required-for-loan-settlement-through-law-firm"
                      className="p-3.5 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:bg-amber-50/40 transition-all text-xs md:text-sm font-semibold text-gray-800 flex items-center justify-between"
                    >
                      <span>Documents for Loan Settlement</span>
                      <span className="text-[#D2A02A]">→</span>
                    </Link>
                    <Link
                      href="/who-is-the-best-lawyer-for-loan-settlement-in-india"
                      className="p-3.5 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:bg-amber-50/40 transition-all text-xs md:text-sm font-semibold text-gray-800 flex items-center justify-between"
                    >
                      <span>Best Lawyer for Loan Settlement</span>
                      <span className="text-[#D2A02A]">→</span>
                    </Link>
                    <Link
                      href="/section-138-cheque-bounce-notice-for-personal-loan"
                      className="p-3.5 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:bg-amber-50/40 transition-all text-xs md:text-sm font-semibold text-gray-800 flex items-center justify-between"
                    >
                      <span>Section 138 NI Act Notice Defense</span>
                      <span className="text-[#D2A02A]">→</span>
                    </Link>
                  </div>
                </section>

                {/* ================= SECTION 10: FAQs ================= */}
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
                          className="w-full text-left p-4 sm:p-5 bg-gray-50/80 hover:bg-gray-100/80 font-bold text-[#5A4C33] flex justify-between items-center transition-colors text-sm sm:text-base gap-3 cursor-pointer"
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
                      Reclaim Your Peace of Mind &amp; Settle Your Personal Loans Legally
                    </h2>
                    <p className="text-xs sm:text-sm md:text-base text-gray-300 max-w-xl mx-auto leading-relaxed">
                      Do not let overwhelming personal loan EMIs and persistent recovery calls disrupt your family. Consult directly with our senior banking litigation advocates today for an authoritative, confidential case evaluation.
                    </p>
                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                      <button
                        onClick={() => setIsModalOpen(true)}
                        className="w-full sm:w-auto bg-[#D2A02A] hover:bg-[#b08522] text-white font-bold py-3.5 px-8 rounded-xl transition-all shadow-lg hover:shadow-[#D2A02A]/30 text-sm md:text-base cursor-pointer"
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
                      Advocate-Client Privilege Protected &bull; Pan-India Legal Defense &bull; 100% Legal &amp; Ethical
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
                    AMA Legal Solutions is India's premium legal advisory and litigation law firm. Trusted with a <strong className="text-[#D2A02A]">4.7 Google Rating</strong>, over <strong className="text-[#D2A02A]">10,000+ Clients Served</strong>, <strong className="text-[#D2A02A]">25,000+ Cases Handled</strong>, and more than <strong className="text-[#D2A02A]">40+ Years of Combined Legal Experience</strong> providing strategic legal defense and debt resolution across India.
                  </p>

                  {/* Media Coverages */}
                  <div className="border-t border-b border-gray-200 py-4 my-5">
                    <div className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-3">
                      Featured In National Media &amp; Legal Journals
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
                <h3 className="text-xl font-bold mb-2 text-white">Need Urgent Loan Relief?</h3>
                <p className="text-gray-200 text-xs sm:text-sm leading-relaxed mb-5">
                  Stop recovery agent harassment today. Connect directly with our senior personal loan debt settlement advocates for a confidential case evaluation.
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
                  "Advocate Anuj Anand Malik and AMA Legal Solutions provided an exceptional, life-changing personal loan settlement service. When I faced sudden medical expenses and corporate restructuring, my personal loans across three major banks surged to ₹18.5 Lakhs with aggressive recovery calls disrupting my family daily. AMA Legal Solutions stepped in immediately with formal legal notices, halted all recovery agent harassment within 48 hours, and negotiated a structured 62% waiver on the total outstanding balance under RBI compromise settlement guidelines. I received official No Dues Certificates from all lenders without stepping into a courtroom."
                </blockquote>

                <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                  <div className="w-9 h-9 rounded-full bg-[#5A4C33] text-[#D2A02A] flex items-center justify-center font-bold text-sm">
                    V
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-xs sm:text-sm">Vikram Singhania</div>
                    <div className="text-[11px] text-gray-500">Senior IT Consultant &bull; Settled ₹18.5 Lakhs PL</div>
                  </div>
                </div>
              </div>

              {/* RBI Compliance Badge Box */}
              <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200 text-xs text-gray-600 space-y-2">
                <div className="font-bold text-gray-900 text-sm flex items-center gap-2">
                  <span className="text-[#D2A02A]">🛡️</span> Regulatory Assurance
                </div>
                <p className="leading-relaxed">
                  All personal loan settlement negotiations, representation notices, and dispute resolutions are conducted strictly pursuant to the Advocates Act, 1961 and Reserve Bank of India Master Directions.
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
                        placeholder="e.g. Vikram Singhania"
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
                          placeholder="vikram@example.com"
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
                          placeholder="e.g. HDFC, ICICI, SBI, Bajaj Finance"
                          className="w-full px-3.5 py-2.5 border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-[#D2A02A] focus:border-transparent outline-none transition"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">
                          Total Loan Dues Outstanding
                        </label>
                        <input
                          type="text"
                          name="loanAmount"
                          value={formData.loanAmount}
                          onChange={handleInputChange}
                          placeholder="e.g. ₹12,50,000"
                          className="w-full px-3.5 py-2.5 border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-[#D2A02A] focus:border-transparent outline-none transition"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Brief Hardship &amp; Default Description
                      </label>
                      <textarea
                        name="message"
                        rows={2}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Job loss, business slowdown, compounding interest, or recovery agent harassment details..."
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
                    Thank you, <strong>{formData.name || "Client"}</strong>. Our senior personal loan debt settlement legal team will review your details and contact you confidentially on <strong>{formData.phone}</strong>.
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
