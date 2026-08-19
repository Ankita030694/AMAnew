"use client";

import React, { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";

export default function PersonalLoanSettlementServicesClient() {
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
    { id: "introduction", title: "Commercial Debt Overview" },
    { id: "what-are-services", title: "What Are Personal Loan Settlement Services?" },
    { id: "rbi-fair-practices", title: "RBI Fair Practices & Legal Framework" },
    { id: "statutory-remedies", title: "Borrower Rights & Statutory Remedies" },
    { id: "step-by-step-process", title: "The Step-by-Step Legal Settlement Protocol" },
    { id: "self-vs-advocate", title: "Self-Settlement vs. Advocate-Led Services" },
    { id: "cibil-credit-impact", title: "Credit Score (CIBIL) & Post-Settlement Roadmap" },
    { id: "why-ama-legal-solutions", title: "Why Choose AMA Legal Solutions" },
    { id: "more-legal-guides", title: "More Legal Guides" },
    { id: "frequently-asked-questions", title: "Frequently Asked Questions" },
  ];

  const faqs = [
    {
      question: "Are personal loan settlement services legal and recognized under Indian banking regulations?",
      answer: "Yes, personal loan settlement services are entirely legal and operate within the compromise settlement framework established by the Reserve Bank of India (RBI). Under RBI circulars and Master Directions on Non-Performing Assets (NPAs), commercial banks and NBFCs possess authorized board-approved policies to negotiate One Time Settlements (OTS) with distressed borrowers. Professional legal advocates represent borrowers to ensure compromise terms are formally recognized, statutory rights are defended, and a valid No Dues Certificate (NDC) is issued."
    },
    {
      question: "How much waiver on outstanding personal loan debt can legal settlement services negotiate?",
      answer: "Depending on the age of default, NPA classification, and verified financial hardship documentation, professional personal loan settlement services typically negotiate waivers between 40% and 75% of the total outstanding dues. The negotiation prioritizes the complete waiver of accumulated penal interest, late payment fines, and compound interest charges before determining a discounted lump-sum principal payoff. Every settlement is evaluated by the lender's internal settlement committee on the merits of verifiable financial distress."
    },
    {
      question: "Can personal loan settlement services stop recovery agent harassment and threatening calls immediately?",
      answer: "Yes, engaging an authorized legal law firm immediately stops unlawful recovery agent harassment through formal legal representation. Once a lawyer issues a formal Cease-and-Desist notice and representation letter to the bank and collection agencies, all communications must be routed exclusively through legal counsel under RBI Fair Practices Codes. Any subsequent harassment, workplace visits, or intimidation constitutes a punishable offense that can be escalated to the RBI Banking Ombudsman and local police authorities."
    },
    {
      question: "What is the difference between a One Time Settlement (OTS) and a standard loan closure?",
      answer: "A standard loan closure occurs when a borrower pays off 100% of the principal and accrued interest according to the original loan schedule, resulting in a 'Closed' remark on credit bureau reports. In contrast, a One Time Settlement (OTS) is a mutually agreed compromise where the lender accepts a discounted lump sum to extinguish the debt, marking the account as 'Settled' on CIBIL and credit reports. While a settled status temporarily lowers your credit score, it legally discharges you from all future liability and stops judicial recovery actions."
    },
    {
      question: "What legal documents are required to initiate commercial personal loan settlement services?",
      answer: "Initiating a personal loan settlement requires KYC identity documents (PAN card and Aadhaar card), official loan account statements detailing the default history, and verified proof of financial distress. Valid hardship documentation includes formal job termination letters, salary reduction slips, medical discharge summaries and hospital invoices, or audited business profit-and-loss statements demonstrating insolvency. A specialized debt settlement advocate synthesizes these records into a formal legal hardship brief presented to the bank's committee."
    },
    {
      question: "Can a bank initiate criminal proceedings or arrest a borrower for defaulting on an unsecured personal loan?",
      answer: "No, defaulting on an unsecured personal loan is strictly a civil dispute arising from a breach of contract under Indian law and does not constitute a cognizable criminal offense. However, if a borrower has issued post-dated cheques that dishonor upon presentation, the lender may initiate proceedings under Section 138 of the Negotiable Instruments Act or Section 25 of the Payment and Settlement Systems Act. An experienced legal settlement advocate handles these statutory notices, appears before the court or Lok Adalat, and converts the litigation into a compromise settlement."
    },
    {
      question: "How does settling a personal loan affect your CIBIL score and how can it be rebuilt?",
      answer: "Settling a personal loan causes the credit bureaus (CIBIL, Experian, CRIF High Mark, Equifax) to record the loan account as 'Settled', which usually reduces the borrower's credit score by 50 to 120 points. However, this is significantly less damaging than lingering in active default, charge-off, or litigation status with daily accumulating penalties. Borrowers can systematically rebuild their CIBIL score within 12 to 24 months by maintaining punctual payments on a secured credit card backed by a fixed deposit and ensuring zero subsequent credit defaults."
    },
    {
      question: "What is the fee structure for professional personal loan settlement services at AMA Legal Solutions?",
      answer: "AMA Legal Solutions operates an ethical, transparent, and result-oriented fee structure tailored to assist individuals experiencing genuine financial distress. The advisory begins with a low, structured administrative retainer to cover initial legal drafting, issuance of formal representation notices, and direct committee communications. The primary remuneration consists of a mutually agreed performance success fee calculated as a percentage of the actual debt amount saved, ensuring our legal advocates are entirely motivated to maximize your debt waiver."
    }
  ];

  const stepListItems = [
    {
      title: "Comprehensive Forensic Debt & Hardship Audit",
      desc: "Our legal team conducts a thorough review of your loan sanction letters, repayment history, interest rates, penalty charges, and genuine hardship evidence (medical records, job loss proofs, or business decline data)."
    },
    {
      title: "Immediate Statutory Representation & Anti-Harassment Shield",
      desc: "We serve an official advocate representation notice and cease-and-desist mandate on all lending banks, NBFCs, and collection agencies, mandating all communications be routed strictly through our law firm under RBI guidelines."
    },
    {
      title: "Drafting the Strategic One Time Settlement (OTS) Brief",
      desc: "We draft a comprehensive, legally compliant OTS proposal highlighting verifiable financial distress, statutory defenses, and an affordable, realistic lump-sum settlement figure grounded in regulatory precedent."
    },
    {
      title: "High-Level Executive & Committee Negotiations",
      desc: "Our senior advocates interface directly with the bank's zonal recovery heads, SAM (Stressed Asset Management) verticals, and credit committees to strike down exorbitant interest and secure maximum principal waivers."
    },
    {
      title: "Settlement Letter Scrutiny & Issuance of No Dues Certificate (NDC)",
      desc: "Before any payment is released, our attorneys rigorously verify the authenticity of the bank's formal settlement letter. Upon payment, we enforce prompt issuance of the No Dues Certificate and reporting updates to CIBIL."
    }
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://www.amalegalsolutions.com/personal-loan-settlement-services#article",
        "headline": "Personal Loan Settlement Services in India: Legal Debt Relief, RBI Codes, and Negotiation Guide",
        "description": "Comprehensive legal analysis of personal loan settlement services in India. Learn RBI Fair Practices Codes, statutory remedies against recovery harassment, OTS negotiation frameworks, and credit restoration.",
        "image": [
          "https://www.amalegalsolutions.com/images/og/personal-loan-settlement-services.png"
        ],
        "datePublished": "2026-01-15T09:00:00+05:30",
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
          "@id": "https://www.amalegalsolutions.com/personal-loan-settlement-services"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://www.amalegalsolutions.com/personal-loan-settlement-services",
        "url": "https://www.amalegalsolutions.com/personal-loan-settlement-services",
        "name": "Personal Loan Settlement Services in India | AMA Legal Solutions",
        "description": "Expert advocate-led personal loan settlement services to stop harassment, negotiate up to 70% debt waivers, and obtain No Dues Certificates.",
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": ["h1", "#quick-answer"]
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.amalegalsolutions.com/personal-loan-settlement-services#faq",
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
        "@id": "https://www.amalegalsolutions.com/personal-loan-settlement-services#product",
        "name": "Personal Loan Settlement Legal Services",
        "image": "https://www.amalegalsolutions.com/images/og/personal-loan-settlement-services.png",
        "description": "Premier advocate-led personal loan settlement and commercial debt resolution services across India. Halt recovery agent harassment, negotiate One Time Settlements (OTS), and secure No Dues Certificates.",
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
        "@id": "https://www.amalegalsolutions.com/personal-loan-settlement-services#breadcrumbs",
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
            "name": "Personal Loan Settlement Services",
            "item": "https://www.amalegalsolutions.com/personal-loan-settlement-services"
          }
        ]
      },
      {
        "@type": "ItemList",
        "@id": "https://www.amalegalsolutions.com/personal-loan-settlement-services#process",
        "name": "The Step-by-Step Legal Settlement Protocol for Personal Loans",
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
      <Script
        id="personal-loan-settlement-schema"
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
              Strategic <span className="text-[#D2A02A]">Personal Loan Settlement Services</span> for Honest Borrowers
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
                          Personal Loan Settlement Services
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
                      href="https://www.facebook.com/sharer/sharer.php?u=https://www.amalegalsolutions.com/personal-loan-settlement-services"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:opacity-90 transition font-bold text-xs shadow-sm"
                      title="Share on Facebook"
                      aria-label="Share on Facebook"
                    >
                      f
                    </a>
                    <a
                      href="https://twitter.com/intent/tweet?url=https://www.amalegalsolutions.com/personal-loan-settlement-services&text=Personal%20Loan%20Settlement%20Services%20in%20India"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center hover:opacity-90 transition font-bold text-xs shadow-sm"
                      title="Share on X"
                      aria-label="Share on X"
                    >
                      𝕏
                    </a>
                    <a
                      href="https://www.linkedin.com/sharing/share-offsite/?url=https://www.amalegalsolutions.com/personal-loan-settlement-services"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-[#0A66C2] text-white flex items-center justify-center hover:opacity-90 transition font-bold text-xs shadow-sm"
                      title="Share on LinkedIn"
                      aria-label="Share on LinkedIn"
                    >
                      in
                    </a>
                    <a
                      href="https://api.whatsapp.com/send?text=Personal%20Loan%20Settlement%20Services%20in%20India%20https://www.amalegalsolutions.com/personal-loan-settlement-services"
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
                    <h2>Quick Answer: What Are Personal Loan Settlement Services?</h2>
                  </div>
                  <p className="text-gray-900 font-normal leading-relaxed text-sm md:text-base">
                    Personal loan settlement services are specialized legal and advisory solutions that enable financially distressed borrowers to negotiate a compromised One Time Settlement (OTS) with banks and Non-Banking Financial Companies (NBFCs). Under regulatory frameworks established by the Reserve Bank of India (RBI), authorized legal advocates represent borrowers to waive accumulated penal interest, reduce outstanding principal balances, halt unlawful recovery harassment, and secure a binding No Dues Certificate (NDC). These services provide a statutory debt resolution mechanism for individuals experiencing verifiable financial hardships such as job loss, critical medical illness, or business failure.
                  </p>
                </div>

                {/* ================= SECTION 1 ================= */}
                <section id="introduction" className="scroll-mt-32 space-y-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
                    The Commercial Landscape of Personal Loans in India
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    The explosive growth of retail credit and instant digital lending apps across India has created unprecedented consumer indebtedness. Unsecured personal loans, marketed aggressively with minimal initial documentation, carry compound annual percentage rates (APR) ranging between 14% and 36%. When unexpected economic disruptions occur—such as sudden corporate layoffs, medical catastrophes, or severe business revenue contractions—borrowers rapidly find themselves in a compounding debt spiral.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    Missing two or three equated monthly installments (EMIs) triggers aggressive automated penal charges, transforming a manageable liability into an insurmountable financial burden. In this vulnerable state, honest borrowers face relentless pressure from unregulated collection agencies. Seeking professional <strong>personal loan settlement services</strong> from an established legal advisory firm provides a structured, lawful, and dignified exit from unmanageable debt.
                  </p>
                </section>

                {/* ================= SECTION 2 ================= */}
                <section id="what-are-services" className="scroll-mt-32 space-y-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#5A4C33]">
                    What Are Commercial Personal Loan Settlement Services?
                  </h2>
                  
                  <div className="bg-[#f6f4ee] border-l-4 border-[#5A4C33] p-4 md:p-6 rounded-r-xl">
                    <p className="text-[#3a3020] text-sm md:text-base font-medium italic">
                      "Personal loan settlement is a formal, legally enforceable contract between a lending institution and a borrower wherein the lender agrees to accept a mutually agreed lump-sum payment—substantially lower than the total ledger balance—as full and final satisfaction of all outstanding claims."
                    </p>
                  </div>

                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    Commercial loan settlement services represent the structured legal mechanism by which borrowers transition an unserviceable loan into a closed file. Under the regulatory purview of the <a href="https://rbi.org.in/" target="_blank" rel="noopener noreferrer" className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold">Reserve Bank of India (RBI)</a>, scheduled commercial banks and NBFCs are encouraged to implement board-approved policies for compromised settlements. These frameworks enable financial institutions to resolve Non-Performing Assets (NPAs) efficiently without clogging judicial courts with lengthy recovery suits.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    Unlike fly-by-night tele-calling agencies, a legitimate legal settlement advisory operates with full statutory authority. Legal advocates analyze loan contracts for predatory lending clauses, verify the legitimacy of accumulated interest and penalty charges, formulate hardship portfolios, and present formal compromise proposals directly to bank credit committees.
                  </p>
                </section>

                {/* ================= INFOGRAPHIC EMBED ================= */}
                <figure className="my-8 rounded-2xl overflow-hidden shadow-xl border-2 border-[#D2A02A]/40 bg-gray-900">
                  <Image
                    src="/images/og/personal-loan-settlement-services.png"
                    alt="Personal Loan Settlement Services & RBI Fair Practice Guidelines Infographic"
                    width={1200}
                    height={675}
                    className="w-full h-auto object-cover"
                  />
                  <figcaption className="p-3.5 bg-gray-900 text-center text-xs md:text-sm text-gray-300 font-medium">
                    Infographic: The Statutory Framework for Personal Loan Settlements and Borrower Rights in India.
                  </figcaption>
                </figure>

                {/* ================= SECTION 3 ================= */}
                <section id="rbi-fair-practices" className="scroll-mt-32 space-y-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#5A4C33]">
                    RBI Fair Practices Code & Anti-Harassment Regulations
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    The Reserve Bank of India has enacted rigorous regulatory directives that govern debt recovery operations. These rules strictly prohibit aggressive, unlawful, and coercive tactics by recovery agents. When engaging personal loan settlement services, your legal counsel invokes these explicit protections:
                  </p>

                  <blockquote className="border-l-4 border-[#D2A02A] pl-5 py-3 bg-gray-50 text-gray-800 italic rounded-r-lg text-sm md:text-base">
                    "Banks and NBFCs shall not resort to intimidation or harassment of any kind, either verbally or physically, against any person in their debt collection efforts, including persistently calling at odd hours, using muscle power, or publicly humiliating borrowers." — RBI Master Direction on Fair Practices Code.
                  </blockquote>

                  <div className="grid sm:grid-cols-2 gap-4 my-4">
                    <div className="p-4 rounded-xl border border-gray-200 bg-white shadow-sm">
                      <div className="text-[#D2A02A] font-bold text-base mb-1">⏰ Regulated Calling Hours</div>
                      <p className="text-xs md:text-sm text-gray-600">Recovery calls and agent visits are strictly restricted between 08:00 AM and 07:00 PM. Communications outside this window violate central banking mandates.</p>
                    </div>
                    <div className="p-4 rounded-xl border border-gray-200 bg-white shadow-sm">
                      <div className="text-[#D2A02A] font-bold text-base mb-1">🔒 Absolute Borrower Privacy</div>
                      <p className="text-xs md:text-sm text-gray-600">Lenders cannot disclose your default details, outstanding loan balances, or settlement talks to neighbors, colleagues, friends, or employers.</p>
                    </div>
                    <div className="p-4 rounded-xl border border-gray-200 bg-white shadow-sm">
                      <div className="text-[#D2A02A] font-bold text-base mb-1">🚫 Ban on Coercion & Abuse</div>
                      <p className="text-xs md:text-sm text-gray-600">Threatening arrest, utilizing abusive vernacular, or deploying musclemen violates the Indian Penal Code and triggers immediate penal actions by the RBI.</p>
                    </div>
                    <div className="p-4 rounded-xl border border-gray-200 bg-white shadow-sm">
                      <div className="text-[#D2A02A] font-bold text-base mb-1">📜 Right to Written Terms</div>
                      <p className="text-xs md:text-sm text-gray-600">Every compromised settlement figure must be provided on the official letterhead of the bank or NBFC with unambiguous payment milestones.</p>
                    </div>
                  </div>
                </section>

                {/* ================= SECTION 4 ================= */}
                <section id="statutory-remedies" className="scroll-mt-32 space-y-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#5A4C33]">
                    Borrower Rights & Statutory Remedies Under Indian Law
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    Being in temporary financial distress does not strip a citizen of their fundamental constitutional and legal protections. The Indian legal framework equips borrowers with formidable statutory channels:
                  </p>

                  <ul className="space-y-4 text-sm md:text-base text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="text-[#D2A02A] font-bold text-lg leading-none mt-1">▶</span>
                      <div>
                        <strong>RBI Integrated Ombudsman Scheme:</strong> Borrowers facing persistent collection harassment, unauthorized fee debits, or refusal of legitimate hardship reviews can lodge formal complaints via the <a href="https://cms.rbi.org.in/" target="_blank" rel="noopener noreferrer" className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold">RBI Integrated Ombudsman Portal</a> for rapid regulatory redressal.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#D2A02A] font-bold text-lg leading-none mt-1">▶</span>
                      <div>
                        <strong>Consumer Protection Act, 2019:</strong> Unfair trade practices, extortionate penal compounding, and mental harassment can be aggressively challenged before Consumer Disputes Redressal Commissions up to the <a href="https://ncdrc.nic.in/" target="_blank" rel="noopener noreferrer" className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold">National Consumer Disputes Redressal Commission (NCDRC)</a> for damages and punitive compensation.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#D2A02A] font-bold text-lg leading-none mt-1">▶</span>
                      <div>
                        <strong>Supreme Court Precedents on Human Dignity:</strong> In landmark decisions such as <em>ICICI Bank Ltd. v. Prakash Kaur</em> and <em>Shanti Devi Sharma</em>, the <a href="https://main.sci.gov.in/" target="_blank" rel="noopener noreferrer" className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold">Supreme Court of India</a> has reiterated that banks cannot deploy strong-arm tactics or hire musclemen for debt collection.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#D2A02A] font-bold text-lg leading-none mt-1">▶</span>
                      <div>
                        <strong>Statutory Notice Defense (Section 138 NI Act & Section 25 PSA):</strong> If banks issue demand notices for bounced security cheques or failed NACH mandates, our legal team replies formally, contest fraudulent claims, and moves the matter toward a peaceful Lok Adalat settlement.
                      </div>
                    </li>
                  </ul>
                </section>

                {/* ================= SECTION 5 ================= */}
                <section id="step-by-step-process" className="scroll-mt-32 space-y-6">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#5A4C33]">
                    The Step-by-Step Legal Settlement Protocol
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    Achieving a legally binding, discounted One Time Settlement requires an organized and evidence-backed protocol. AMA Legal Solutions follows a proven 5-stage legal methodology:
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
                    Self-Settlement vs. Advocate-Led Personal Loan Settlement
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    While borrowers possess the legal right to approach banks independently, navigating institutional credit hierarchies without formal legal backing presents severe commercial vulnerabilities:
                  </p>

                  <div className="overflow-x-auto my-4">
                    <table className="min-w-full text-left text-xs md:text-sm border border-gray-200 rounded-xl overflow-hidden">
                      <thead className="bg-[#5A4C33] text-white">
                        <tr>
                          <th className="p-3 md:p-4 font-semibold">Strategic Parameter</th>
                          <th className="p-3 md:p-4 font-semibold">Self-Negotiation</th>
                          <th className="p-3 md:p-4 font-semibold bg-[#D2A02A] text-white">AMA Legal Solutions Representation</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 bg-white">
                        <tr>
                          <td className="p-3 md:p-4 font-bold text-gray-900">Harassment Protection</td>
                          <td className="p-3 md:p-4 text-red-600">Recovery calls persist daily; no legal shield</td>
                          <td className="p-3 md:p-4 text-emerald-700 font-semibold bg-amber-50/40">Immediate Cease-and-Desist notice halts harassment</td>
                        </tr>
                        <tr>
                          <td className="p-3 md:p-4 font-bold text-gray-900">Waiver Percentage</td>
                          <td className="p-3 md:p-4 text-gray-600">Typically 10% – 25% (penal fees often retained)</td>
                          <td className="p-3 md:p-4 text-emerald-700 font-semibold bg-amber-50/40">40% – 75% waiver on gross outstanding ledger</td>
                        </tr>
                        <tr>
                          <td className="p-3 md:p-4 font-bold text-gray-900">Legal Notice Defenses</td>
                          <td className="p-3 md:p-4 text-red-600">Risk of default judgments under Sec 138 / Arbitration</td>
                          <td className="p-3 md:p-4 text-emerald-700 font-semibold bg-amber-50/40">Formal legal replies and Lok Adalat representation</td>
                        </tr>
                        <tr>
                          <td className="p-3 md:p-4 font-bold text-gray-900">Documentation Security</td>
                          <td className="p-3 md:p-4 text-red-600">Vulnerable to fake verbal promises by collection agents</td>
                          <td className="p-3 md:p-4 text-emerald-700 font-semibold bg-amber-50/40">Vetted bank settlement letters & enforceable NDCs</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* ================= SECTION 7 ================= */}
                <section id="cibil-credit-impact" className="scroll-mt-32 space-y-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#5A4C33]">
                    Credit Score (CIBIL) Dynamics & Post-Settlement Roadmap
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    Transparency regarding credit score consequences is paramount in commercial debt resolution. Settling an unsecured personal loan results in credit bureaus marking the account status as "Settled" instead of "Closed."
                  </p>
                  
                  <div className="grid sm:grid-cols-3 gap-4 my-4">
                    <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                      <div className="text-sm font-bold text-[#5A4C33] mb-1">1. Immediate Relief</div>
                      <p className="text-xs text-gray-600">Freezes interest compounding, removes default risk, and terminates pending legal actions permanently.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                      <div className="text-sm font-bold text-[#5A4C33] mb-1">2. Credit Rebuilding (Months 1–12)</div>
                      <p className="text-xs text-gray-600">Acquire a secured credit card against a small fixed deposit. Keep credit utilization below 25% to build positive payment cycles.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                      <div className="text-sm font-bold text-[#5A4C33] mb-1">3. Long-Term Restoration (Months 18–24)</div>
                      <p className="text-xs text-gray-600">As positive on-time payment history accumulates, the negative impact of the settled tag diminishes, restoring creditworthiness.</p>
                    </div>
                  </div>
                </section>

                {/* ================= SECTION 8 ================= */}
                <section id="why-ama-legal-solutions" className="scroll-mt-32 space-y-6">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
                    Why Choose AMA Legal Solutions for Personal Loan Settlement?
                  </h2>
                  
                  <div className="grid sm:grid-cols-3 gap-4 text-center">
                    <div className="p-5 rounded-xl bg-gray-50 border border-gray-200 shadow-sm hover:border-[#D2A02A] transition-colors">
                      <div className="text-3xl mb-2">⚖️</div>
                      <h3 className="font-bold text-base text-[#5A4C33] mb-1">Qualified Advocates</h3>
                      <p className="text-xs text-gray-600">Practicing high court lawyers with deep mastery in banking regulations, consumer courts, and arbitration.</p>
                    </div>
                    <div className="p-5 rounded-xl bg-gray-50 border border-gray-200 shadow-sm hover:border-[#D2A02A] transition-colors">
                      <div className="text-3xl mb-2">🛡️</div>
                      <h3 className="font-bold text-base text-[#5A4C33] mb-1">Zero Harassment Policy</h3>
                      <p className="text-xs text-gray-600">We mandate all recovery contact through our office, protecting your peace of mind and family dignity.</p>
                    </div>
                    <div className="p-5 rounded-xl bg-gray-50 border border-gray-200 shadow-sm hover:border-[#D2A02A] transition-colors">
                      <div className="text-3xl mb-2">🎯</div>
                      <h3 className="font-bold text-base text-[#5A4C33] mb-1">Success-Aligned Fees</h3>
                      <p className="text-xs text-gray-600">No extortionate upfront fees. Our success fee is directly proportional to the actual debt reduction we achieve.</p>
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
                      Managing Partner at AMA Legal Solutions. Supreme Court and High Court Advocate specializing in commercial debt resolution, banking litigation, and consumer rights.
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
                      • <a href="https://main.sci.gov.in/" target="_blank" rel="noopener noreferrer" className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-medium">Supreme Court of India</a> — Landmark Rulings on Borrower Dignity and Prohibition of Muscle Tactics.
                    </li>
                    <li>
                      • <a href="https://incometaxindia.gov.in/" target="_blank" rel="noopener noreferrer" className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-medium">Income Tax Department of India</a> — Capital vs. Revenue Treatment of Compromise Loan Waivers.
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
                    <Link
                      href="/send-legal-notice"
                      className="p-3.5 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:bg-amber-50/40 transition-all text-xs md:text-sm font-semibold text-gray-800 flex items-center justify-between"
                    >
                      <span>Send Legal Notice Online</span>
                      <span className="text-[#D2A02A]">→</span>
                    </Link>
                  </div>
                </section>

                {/* ================= SECTION 9: FAQs ================= */}
                <section id="frequently-asked-questions" className="scroll-mt-32 border-t border-gray-200 pt-8">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                    Frequently Asked Questions on Personal Loan Settlement
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
                      href={`https://api.whatsapp.com/send?phone=918700343611&text=Hello%20AMA%20Legal%20Solutions,%20I%20am%20${encodeURIComponent(formData.name || "a client")}%20requesting%20urgent%20personal%20loan%20settlement%20assistance.`}
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
