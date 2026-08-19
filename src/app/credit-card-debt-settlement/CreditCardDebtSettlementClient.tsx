"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";

export default function CreditCardDebtSettlementClient() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    bankName: "",
    loanAmount: "",
    debtType: "Credit Card Debt",
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
    { id: "introduction", title: "Commercial Credit Card Debt Crisis in India" },
    { id: "what-is-debt-settlement", title: "What Is Credit Card Debt Settlement? (OTS Framework)" },
    { id: "revolving-credit-trap", title: "The Revolving Credit Trap & 42%–52% APR Mechanics" },
    { id: "rbi-master-directions", title: "RBI Master Directions & Anti-Harassment Regulations" },
    { id: "statutory-remedies", title: "Borrower Rights & Statutory Legal Defense" },
    { id: "step-by-step-process", title: "The 5-Step Legal Settlement Protocol" },
    { id: "self-vs-advocate", title: "Self-Settlement vs. Advocate Representation" },
    { id: "cibil-credit-impact", title: "CIBIL Score Impact & 24-Month Credit Repair" },
    { id: "why-ama-legal-solutions", title: "Why Choose AMA Legal Solutions" },
    { id: "more-legal-guides", title: "More Legal Debt Relief Guides" },
    { id: "frequently-asked-questions", title: "Frequently Asked Questions" },
  ];

  const faqs = [
    {
      question: "What is credit card debt settlement under Indian banking regulations?",
      answer: "Credit card debt settlement is a legally binding compromise agreement between a cardholder facing genuine financial distress and a card-issuing bank or NBFC where the creditor agrees to accept a discounted lump-sum payment to extinguish the entire outstanding ledger balance. Governed under Reserve Bank of India (RBI) Prudential Norms and Compromise Settlement Frameworks, this mechanism enables commercial banks to resolve unsecured Non-Performing Assets (NPAs) while issuing an official No Dues Certificate (NDC) that permanently discharges the borrower from further financial liability."
    },
    {
      question: "How much waiver can be negotiated on credit card outstanding dues?",
      answer: "Depending on the default vintage, NPA aging classification, and verified documentary proof of financial distress, experienced advocates typically negotiate waivers between 40% and 75% of the total accumulated credit card ledger. The legal negotiation protocol prioritizes the complete 100% elimination of exorbitant late payment penalties, over-limit fees, and compounding finance charges before securing substantial concessions on the original principal sum spent. Final settlement terms are reviewed, sanctioned, and executed by the issuing bank's internal Stressed Asset Settlement Committee."
    },
    {
      question: "Can credit card debt settlement stop aggressive recovery agent harassment?",
      answer: "Yes, retaining authorized legal counsel halts recovery agent harassment immediately through statutory representation under the Advocates Act, 1961 and RBI Master Directions on Fair Practices Code. Once our law firm issues formal Cease-and-Desist notices and legal representation memos to the lending institution, all recovery communications must strictly redirect to our offices. Any persistent home invasions, unpermitted workplace inquiries, abusive telephone calls, or vulgar threats expose the bank to immediate penal action before the RBI Integrated Ombudsman and jurisdictional criminal courts."
    },
    {
      question: "Can a bank initiate criminal cases or arrest a cardholder for credit card default?",
      answer: "No, defaulting on credit card repayments is purely a civil breach of contract under Indian commercial law and cannot result in police arrest or criminal incarceration for simple non-payment. However, banks may issue statutory notices under Section 138 of the Negotiable Instruments Act if repayment cheques dishonor, or Section 25 of the Payment and Settlement Systems Act for failed electronic NACH auto-debit instructions. A seasoned debt settlement lawyer enters a formal legal appearance, provides comprehensive statutory replies, and transitions contentious court litigation into a mutually settled compromise before National Lok Adalats."
    },
    {
      question: "What is the difference between a One Time Settlement (OTS) and converting dues to EMIs?",
      answer: "Converting overdue credit card balances into equated monthly installments (EMIs) merely restructures the debt tenure at continued interest rates of 18% to 24% per annum without reducing the underlying principal obligation. In contrast, a One Time Settlement (OTS) permanently terminates the credit agreement through a negotiated discounted payment that waives all penal compounding, removes active default status, and completely extinguishes the cardholder's debt burden. An OTS results in a 'Settled' credit bureau remark and provides absolute legal closure via an official No Dues Certificate."
    },
    {
      question: "What verifiable documents are required to prove financial hardship for credit card settlement?",
      answer: "To substantiate a legitimate One Time Settlement proposal before a bank's settlement committee, cardholders must present concrete evidentiary records documenting an involuntary erosion of repayment capacity. Standard hardship documentation includes termination letters, layoff notices, or salary reduction slips for salaried professionals; audited income statements or GST filing summaries demonstrating business losses for commercial traders; and medical hospital bills or discharge summaries for major illnesses. These records form the evidentiary foundation of the formal legal hardship representation drafted by our advocates."
    },
    {
      question: "How does credit card debt settlement affect my CIBIL score and how can I rebuild it?",
      answer: "When a credit card account is settled through an OTS, credit rating agencies such as TransUnion CIBIL, Equifax, and Experian record the trade line status as 'Settled', which causes a temporary credit score reduction of 50 to 120 points. However, settling the account is vastly superior to ongoing, open default status which accumulates fresh negative delinquency marks and legal exposure every month. Cardholders can systematically rehabilitate their credit score back to 750+ within 18 to 24 months by maintaining secured fixed-deposit credit cards and ensuring zero subsequent missed payments."
    },
    {
      question: "What fee model does AMA Legal Solutions charge for credit card debt settlement?",
      answer: "AMA Legal Solutions maintains a transparent, highly ethical, and client-centric fee structure specifically tailored to distressed borrowers. The engagement initiates with an accessible legal administrative retainer to draft statutory anti-harassment notices, issue formal power of attorney notices, and establish legal protection across all lending banks. The primary advocate fee is structured as a contingency success fee based on a pre-agreed percentage of the actual financial savings achieved through our negotiations, guaranteeing our incentives remain perfectly aligned with maximizing your debt waiver."
    }
  ];

  const stepListItems = [
    {
      title: "Forensic Ledger Audit & Hardship Assessment",
      desc: "Our banking litigation advocates conduct an exhaustive forensic review of your monthly credit card statements, segregating inflated compounding finance charges, GST surcharges, and penal over-limit levies from the genuine principal expenditures while analyzing verified hardship proofs."
    },
    {
      title: "Statutory Representation & Anti-Harassment Cease-and-Desist",
      desc: "We serve formal legal representation notices and Cease-and-Desist directives on all card-issuing banks, collection agencies, and recovery managers, invoking RBI Fair Practices Code to halt unauthorized home visits, workplace intrusions, and third-party disclosures."
    },
    {
      title: "Drafting the Comprehensive OTS Hardship Brief",
      desc: "We draft an authoritative One Time Settlement (OTS) petition supported by documentary evidence of job loss, medical catastrophe, or business failure, articulating statutory defenses under banking regulations and offering a realistic, discounted lump-sum compromise."
    },
    {
      title: "Institutional Negotiation with Bank Stressed Asset Committees",
      desc: "Our senior advocates interface directly with the bank's zonal recovery verticals, collection heads, and credit settlement committees to negotiate maximum waivers (40% to 75%) and eliminate 100% of accumulated penal finance interest charges."
    },
    {
      title: "Settlement Letter Authentication & No Dues Certificate Enforcement",
      desc: "Before any compromise payment is deposited, our legal team meticulously verifies the official bank settlement sanction letter to prevent fraud. Following payment, we enforce prompt issuance of the No Dues Certificate (NDC) and credit bureau reporting updates."
    }
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://www.amalegalsolutions.com/credit-card-debt-settlement#article",
        "headline": "Credit Card Debt Settlement in India: Legal Protection, RBI Regulations, and OTS Negotiation Guide",
        "description": "Comprehensive legal guide on credit card debt settlement in India. Learn how to stop recovery agent harassment, eliminate compounding finance charges, negotiate 40% to 75% OTS waivers under RBI guidelines, and secure official No Dues Certificates.",
        "image": [
          "https://www.amalegalsolutions.com/images/og/credit-card-debt-settlement.png"
        ],
        "datePublished": "2026-01-15T09:00:00+05:30",
        "dateModified": "2026-08-19T17:35:00+05:30",
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
          "@id": "https://www.amalegalsolutions.com/credit-card-debt-settlement"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://www.amalegalsolutions.com/credit-card-debt-settlement",
        "url": "https://www.amalegalsolutions.com/credit-card-debt-settlement",
        "name": "Credit Card Debt Settlement in India | AMA Legal Solutions",
        "description": "Expert advocate-led credit card debt settlement to halt recovery harassment, negotiate up to 75% debt waivers under RBI frameworks, and obtain valid No Dues Certificates.",
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": ["h1", "#quick-answer"]
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.amalegalsolutions.com/credit-card-debt-settlement#faq",
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
        "@id": "https://www.amalegalsolutions.com/credit-card-debt-settlement#product",
        "name": "Credit Card Debt Settlement Legal Services",
        "image": "https://www.amalegalsolutions.com/images/og/credit-card-debt-settlement.png",
        "description": "Premier advocate-led credit card debt settlement and commercial debt resolution advisory across India. Stop recovery agent harassment, negotiate One Time Settlements (OTS), and obtain valid No Dues Certificates.",
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
            "name": "Rohit Deshmukh"
          },
          "reviewBody": "Advocate Anuj Anand Malik and the team at AMA Legal Solutions saved me from an impossible financial nightmare. My credit card debt had spiraled to over ₹14 Lakhs due to exorbitant 45% compounding finance charges after I lost my job. AMA Legal Solutions stepped in, silenced the abusive recovery agents within 24 hours with strict legal notices, and negotiated a formal 65% One Time Settlement with the bank. I received my authentic No Dues Certificate and complete peace of mind."
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
        "@id": "https://www.amalegalsolutions.com/credit-card-debt-settlement#breadcrumbs",
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
            "name": "Credit Card Debt Settlement",
            "item": "https://www.amalegalsolutions.com/credit-card-debt-settlement"
          }
        ]
      },
      {
        "@type": "ItemList",
        "@id": "https://www.amalegalsolutions.com/credit-card-debt-settlement#process",
        "name": "The 5-Step Legal Settlement Protocol for Credit Card Debt",
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
        id="credit-card-debt-settlement-schema"
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
              India's Premier Legal Debt Relief &amp; Credit Card Settlement Advisory
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight max-w-5xl mx-auto">
              Strategic <span className="text-[#D2A02A]">Credit Card Debt Settlement</span> &amp; Legal Protection
            </h1>

            <p className="text-sm sm:text-base md:text-xl mb-8 md:mb-10 max-w-3xl mx-auto text-gray-200 leading-relaxed font-light">
              Halt predatory recovery harassment immediately. Advocate-led negotiations to eliminate compounding interest traps and reduce unmanageable credit card liabilities by <strong className="text-white font-semibold">40% to 75%</strong> under Reserve Bank of India (RBI) compromise frameworks.
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
                          Credit Card Debt Settlement
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
                      href="https://www.facebook.com/sharer/sharer.php?u=https://www.amalegalsolutions.com/credit-card-debt-settlement"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:opacity-90 transition font-bold text-xs shadow-sm"
                      title="Share on Facebook"
                      aria-label="Share on Facebook"
                    >
                      f
                    </a>
                    <a
                      href="https://twitter.com/intent/tweet?url=https://www.amalegalsolutions.com/credit-card-debt-settlement&text=Credit%20Card%20Debt%20Settlement%20in%20India"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center hover:opacity-90 transition font-bold text-xs shadow-sm"
                      title="Share on X"
                      aria-label="Share on X"
                    >
                      𝕏
                    </a>
                    <a
                      href="https://www.linkedin.com/sharing/share-offsite/?url=https://www.amalegalsolutions.com/credit-card-debt-settlement"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-[#0A66C2] text-white flex items-center justify-center hover:opacity-90 transition font-bold text-xs shadow-sm"
                      title="Share on LinkedIn"
                      aria-label="Share on LinkedIn"
                    >
                      in
                    </a>
                    <a
                      href="https://api.whatsapp.com/send?text=Credit%20Card%20Debt%20Settlement%20in%20India%20https://www.amalegalsolutions.com/credit-card-debt-settlement"
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
                    <h2>Quick Answer: How Does Credit Card Debt Settlement Work in India?</h2>
                  </div>
                  <p className="text-gray-900 font-normal leading-relaxed text-sm md:text-base">
                    Credit card debt settlement is a formal legal procedure in India wherein cardholders suffering verifiable financial distress negotiate a compromised One Time Settlement (OTS) with card-issuing banks or NBFCs. Regulated under Reserve Bank of India (RBI) compromise settlement frameworks, specialized debt advocates eliminate compounding finance charges (annualized at 42%–52%), negotiate 40% to 75% waivers on accumulated balances, enforce strict anti-harassment injunctions against recovery agencies, and secure a legally binding No Dues Certificate (NDC) that permanently extinguishes all future financial and legal liabilities.
                  </p>
                </div>

                {/* ================= SECTION 1 ================= */}
                <section id="introduction" className="scroll-mt-32 space-y-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
                    The Commercial Credit Card Debt Crisis in India
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    The unprecedented expansion of revolving retail credit cards across India has created a structural consumer debt crisis. Unsecured credit card facilities represent the most expensive credit instrument in the modern banking ecosystem. Unlike collateralized facilities such as residential mortgages or auto loans, credit cards require zero pledged physical security. To offset this elevated commercial default risk, commercial banks and NBFCs charge exorbitant monthly finance charges ranging between 3.5% and 4.25%—which compounds into an alarming Annual Percentage Rate (APR) of 42% to 52%, further inflated by 18% Goods and Services Tax (GST) on all charges.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    When unpredictable life crises strike—such as sudden corporate layoffs, commercial business insolvency, severe medical emergencies, or family breadwinner demise—cardholders find it mathematically impossible to service revolving balances. Paying only the "Minimum Amount Due" (MAD) directs nearly 90% of funds toward interest and taxes while the principal balance remains untouched. Once consecutive billing statements lapse past 90 days, the account is classified as a Non-Performing Asset (NPA), triggering aggressive third-party collection agencies. Engaging an established debt settlement law firm to execute a formal <strong>credit card debt settlement</strong> provides the sole statutory mechanism to permanently extinguish toxic compounding debt.
                  </p>
                </section>

                {/* ================= SECTION 2 ================= */}
                <section id="what-is-debt-settlement" className="scroll-mt-32 space-y-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#5A4C33]">
                    What Is Credit Card Debt Settlement? (OTS Framework)
                  </h2>
                  
                  <div className="bg-[#f6f4ee] border-l-4 border-[#5A4C33] p-4 md:p-6 rounded-r-xl">
                    <p className="text-[#3a3020] text-sm md:text-base font-medium italic">
                      "A credit card debt settlement is an enforceable legal contract executed between a card-issuing bank or financial institution and a cardholder, wherein the creditor agrees to accept a discounted, negotiated lump-sum payment as full and final satisfaction of the total ledger balance, releasing the borrower from all subsequent claims and court actions."
                    </p>
                  </div>

                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    From a commercial banking standpoint, unsecured credit cards carry no underlying physical assets for seizure under the SARFAESI Act, 2002. Once an account exceeds 90 days past due (DPD), commercial banks must allocate mandatory provisioning on their balance sheets in compliance with <a href="https://rbi.org.in/" target="_blank" rel="noopener noreferrer" className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold">Reserve Bank of India (RBI)</a> prudential guidelines. Maintaining toxic unsecured NPAs on internal books damages the bank's Capital Adequacy Ratio (CAR).
                  </p>

                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    Consequently, all major card-issuing institutions—including HDFC Bank, SBI Cards, ICICI Bank, Axis Bank, RBL Bank, Kotak Mahindra Bank, IndusInd Bank, and American Express—maintain board-approved Stressed Asset Compromise Policies. These statutory policies authorize internal credit settlement committees to accept compromised One Time Settlements (OTS) from bona fide distressed borrowers, writing off uncollectible interest and portions of the principal sum to realize immediate cash recovery.
                  </p>
                </section>

                {/* ================= INFOGRAPHIC EMBED ================= */}
                <figure className="my-8 rounded-2xl overflow-hidden shadow-xl border-2 border-[#D2A02A]/40 bg-gray-900">
                  <Image
                    src="/images/og/credit-card-debt-settlement.png"
                    alt="Credit Card Debt Settlement & RBI Fair Practice Guidelines Infographic"
                    width={1200}
                    height={675}
                    className="w-full h-auto object-cover"
                  />
                  <figcaption className="p-3.5 bg-gray-900 text-center text-xs md:text-sm text-gray-300 font-medium">
                    Infographic: Strategic Credit Card Debt Settlement Framework, Borrower Legal Protections, and RBI Compromise Regulations in India.
                  </figcaption>
                </figure>

                {/* ================= SECTION 3 ================= */}
                <section id="revolving-credit-trap" className="scroll-mt-32 space-y-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#5A4C33]">
                    The Revolving Credit Trap &amp; 42%–52% Compounding APR Mechanics
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    Understanding the financial mechanics of credit card debt demonstrates why informal self-repayment often fails during severe financial crises. Credit cards calculate interest daily using an exponential compound interest formula:
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 my-4">
                    <div className="p-4 rounded-xl border border-gray-200 bg-white shadow-sm">
                      <div className="text-[#D2A02A] font-bold text-base mb-1">📈 42% to 52% APR</div>
                      <p className="text-xs md:text-sm text-gray-600">Daily compounding monthly finance charges of 3.5% to 4.35% cause an unpaid balance to double within 18 months even without new card transactions.</p>
                    </div>
                    <div className="p-4 rounded-xl border border-gray-200 bg-white shadow-sm">
                      <div className="text-[#D2A02A] font-bold text-base mb-1">⚠️ The "MAD" Illusion</div>
                      <p className="text-xs md:text-sm text-gray-600">Paying the 5% Minimum Amount Due primarily services past interest, GST, and late charges, requiring 15 to 20 years to pay off a single statement balance.</p>
                    </div>
                    <div className="p-4 rounded-xl border border-gray-200 bg-white shadow-sm">
                      <div className="text-[#D2A02A] font-bold text-base mb-1">🛑 Cascading Penalties</div>
                      <p className="text-xs md:text-sm text-gray-600">Over-limit fees, late payment charges, cheque/NACH bounce fees, and 18% GST inflate a ₹2 Lakh default into ₹5 Lakhs within 24 billing cycles.</p>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    During a formal advocate-led settlement negotiation, our legal team forensic audits the bank's ledger to systematically strip away 100% of these accrued compound finance charges and punitive surcharges, anchoring negotiations strictly to the underlying realistic principal.
                  </p>
                </section>

                {/* ================= SECTION 4 ================= */}
                <section id="rbi-master-directions" className="scroll-mt-32 space-y-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#5A4C33]">
                    RBI Master Directions &amp; Anti-Harassment Regulations
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    The Reserve Bank of India has enacted rigorous Master Directions governing credit card operations and debt recovery conduct. Coercive or abusive collection practices are strictly illegal under Indian law:
                  </p>

                  <blockquote className="border-l-4 border-[#D2A02A] pl-5 py-3 bg-gray-50 text-gray-800 italic rounded-r-lg text-sm md:text-base">
                    "Card-issuing banks and their outsourced recovery agents shall not resort to intimidation, harassment, or verbal abuse of any nature. Lenders are strictly prohibited from contacting cardholders at uncivilized hours, harassing family members or workplace superiors, or disclosing debt details publicly." — RBI Master Direction on Credit Card Operations &amp; Fair Practices Code.
                  </blockquote>

                  <div className="grid sm:grid-cols-2 gap-4 my-4">
                    <div className="p-4 rounded-xl border border-gray-200 bg-white shadow-sm">
                      <div className="text-[#D2A02A] font-bold text-base mb-1">⏰ Strict Time Windows</div>
                      <p className="text-xs md:text-sm text-gray-600">Recovery calls and representative visits are legally permitted only between 08:00 AM and 07:00 PM. Calls at night, early morning, or frequent repeated dialer spamming violate statutory directives.</p>
                    </div>
                    <div className="p-4 rounded-xl border border-gray-200 bg-white shadow-sm">
                      <div className="text-[#D2A02A] font-bold text-base mb-1">🔒 Absolute Third-Party Privacy</div>
                      <p className="text-xs md:text-sm text-gray-600">Recovery agents are legally barred from contacting your employers, HR departments, relatives, or neighbors. Sharing default notices with third parties breaches constitutional privacy rights.</p>
                    </div>
                    <div className="p-4 rounded-xl border border-gray-200 bg-white shadow-sm">
                      <div className="text-[#D2A02A] font-bold text-base mb-1">🚫 Ban on Threats &amp; Coercion</div>
                      <p className="text-xs md:text-sm text-gray-600">Threatening police arrest, passport impounding, or physical asset seizure for credit card dues is illegal and constitutes criminal intimidation under the Indian Penal Code.</p>
                    </div>
                    <div className="p-4 rounded-xl border border-gray-200 bg-white shadow-sm">
                      <div className="text-[#D2A02A] font-bold text-base mb-1">📜 Mandatory Written Sanction</div>
                      <p className="text-xs md:text-sm text-gray-600">Oral settlement deals or cash collection promises by field agents have zero legal standing. All compromise agreements must be issued via official bank letterhead with digital signatures.</p>
                    </div>
                  </div>
                </section>

                {/* ================= SECTION 5 ================= */}
                <section id="statutory-remedies" className="scroll-mt-32 space-y-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#5A4C33]">
                    Borrower Rights &amp; Statutory Legal Defense Under Indian Law
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    An unexpected credit card default does not strip away your legal rights. Indian statutory frameworks provide potent remedies to defend borrowers and force lawful resolution:
                  </p>

                  <ul className="space-y-4 text-sm md:text-base text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="text-[#D2A02A] font-bold text-lg leading-none mt-1">▶</span>
                      <div>
                        <strong>RBI Integrated Ombudsman Mechanism:</strong> Cardholders experiencing persistent recovery harassment, unauthorized billing surcharges, or refusal to review genuine hardship requests can lodge statutory complaints via the <a href="https://cms.rbi.org.in/" target="_blank" rel="noopener noreferrer" className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold">RBI Integrated Ombudsman Portal</a> for rapid regulatory inquiry and binding corrective rulings.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#D2A02A] font-bold text-lg leading-none mt-1">▶</span>
                      <div>
                        <strong>Consumer Protection Act, 2019:</strong> Unfair trade practices, predatory compounding, and mental trauma inflicted by rogue collection agencies can be challenged directly before District, State, and National Consumer Commissions, including the <a href="https://ncdrc.nic.in/" target="_blank" rel="noopener noreferrer" className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold">National Consumer Disputes Redressal Commission (NCDRC)</a>, to obtain punitive financial damages.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#D2A02A] font-bold text-lg leading-none mt-1">▶</span>
                      <div>
                        <strong>Supreme Court Precedents on Recovery Dignity:</strong> In landmark rulings such as <em>ICICI Bank Ltd. v. Prakash Kaur</em> and <em>Manager, ICICI Bank Ltd. v. Prakash Kaur &amp; Ors.</em>, the <a href="https://main.sci.gov.in/" target="_blank" rel="noopener noreferrer" className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold">Supreme Court of India</a> firmly ruled that debt collection through musclemen or harassment is illegal and that banks bear direct vicarious liability for unlawful recovery acts.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#D2A02A] font-bold text-lg leading-none mt-1">▶</span>
                      <div>
                        <strong>Defense Against Section 138 NI Act &amp; Section 25 PSS Act:</strong> If a bank deposits undated security cheques or triggers automated NACH mandate bounces, our litigation advocates draft comprehensive legal replies establishing that the instruments were security instruments rather than immediate debt discharge, facilitating amicable compromise settlements before National Lok Adalats.
                      </div>
                    </li>
                  </ul>
                </section>

                {/* ================= SECTION 6 ================= */}
                <section id="step-by-step-process" className="scroll-mt-32 space-y-6">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#5A4C33]">
                    The 5-Step Legal Settlement Protocol for Credit Card Debt
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    Executing an authentic, enforceable, and cost-effective credit card debt settlement demands an institutional legal protocol. AMA Legal Solutions adheres to a battle-tested 5-stage legal methodology:
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
                <section id="self-vs-advocate" className="scroll-mt-32 space-y-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#5A4C33]">
                    Self-Negotiation vs. Advocate-Led Credit Card Debt Settlement
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    While cardholders occasionally consider negotiating directly with bank telecallers, negotiating against institutional recovery machinery without seasoned legal counsel carries immense strategic and financial risks:
                  </p>

                  <div className="overflow-x-auto my-4">
                    <table className="min-w-full text-left text-xs md:text-sm border border-gray-200 rounded-xl overflow-hidden">
                      <thead className="bg-[#5A4C33] text-white">
                        <tr>
                          <th className="p-3 md:p-4 font-semibold">Negotiation Parameter</th>
                          <th className="p-3 md:p-4 font-semibold">Individual Self-Settlement</th>
                          <th className="p-3 md:p-4 font-semibold bg-[#D2A02A] text-white">AMA Legal Solutions Representation</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 bg-white">
                        <tr>
                          <td className="p-3 md:p-4 font-bold text-gray-900">Anti-Harassment Protection</td>
                          <td className="p-3 md:p-4 text-red-600">Recovery calls, threats, and home visits escalate unabated</td>
                          <td className="p-3 md:p-4 text-emerald-700 font-semibold bg-amber-50/40">Immediate statutory Cease-and-Desist halts all direct contact</td>
                        </tr>
                        <tr>
                          <td className="p-3 md:p-4 font-bold text-gray-900">Debt Waiver Percentage</td>
                          <td className="p-3 md:p-4 text-gray-600">Typically 10% to 20% (penal finance charges retained)</td>
                          <td className="p-3 md:p-4 text-emerald-700 font-semibold bg-amber-50/40">40% to 75% waiver negotiated on total ledger balance</td>
                        </tr>
                        <tr>
                          <td className="p-3 md:p-4 font-bold text-gray-900">Litigation Shield</td>
                          <td className="p-3 md:p-4 text-red-600">High vulnerability to ex-parte orders in Sec 138/25 courts</td>
                          <td className="p-3 md:p-4 text-emerald-700 font-semibold bg-amber-50/40">Advocate formal court appearances &amp; Lok Adalat compromise</td>
                        </tr>
                        <tr>
                          <td className="p-3 md:p-4 font-bold text-gray-900">Document Security</td>
                          <td className="p-3 md:p-4 text-red-600">Risk of fake WhatsApp settlement letters and fraud</td>
                          <td className="p-3 md:p-4 text-emerald-700 font-semibold bg-amber-50/40">100% vetted official bank sanction letters &amp; authentic NDCs</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* ================= SECTION 8 ================= */}
                <section id="cibil-credit-impact" className="scroll-mt-32 space-y-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#5A4C33]">
                    Credit Score (CIBIL) Impact &amp; 24-Month Credit Repair Roadmap
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    Transparency regarding credit bureau reporting is central to ethical legal practice. When a credit card debt is resolved via an OTS compromise, credit rating agencies (CIBIL, Experian, Equifax, CRIF High Mark) record the account remark as "Settled" rather than "Closed."
                  </p>
                  
                  <div className="grid sm:grid-cols-3 gap-4 my-4">
                    <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                      <div className="text-sm font-bold text-[#5A4C33] mb-1">1. Immediate Relief &amp; Discharge</div>
                      <p className="text-xs text-gray-600">Terminates 42%+ compounding interest, freezes active default deductions, and removes all threat of civil or judicial litigation.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                      <div className="text-sm font-bold text-[#5A4C33] mb-1">2. Credit Rebuilding (Months 1–12)</div>
                      <p className="text-xs text-gray-600">Open a secured credit card backed by a fixed deposit (FD). Utilize less than 20% of the limit and settle 100% on time each billing cycle.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                      <div className="text-sm font-bold text-[#5A4C33] mb-1">3. Long-Term Restoration (Months 18–24)</div>
                      <p className="text-xs text-gray-600">As positive on-time payment history compounds, your credit score steadily climbs back to 750+, restoring broad loan eligibility.</p>
                    </div>
                  </div>
                </section>

                {/* ================= SECTION 9 ================= */}
                <section id="why-ama-legal-solutions" className="scroll-mt-32 space-y-6">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
                    Why Choose AMA Legal Solutions for Credit Card Debt Settlement?
                  </h2>
                  
                  <div className="grid sm:grid-cols-3 gap-4 text-center">
                    <div className="p-5 rounded-xl bg-gray-50 border border-gray-200 shadow-sm hover:border-[#D2A02A] transition-colors">
                      <div className="text-3xl mb-2">⚖️</div>
                      <h3 className="font-bold text-base text-[#5A4C33] mb-1">Senior Legal Advocates</h3>
                      <p className="text-xs text-gray-600">High Court and Supreme Court advocates with comprehensive statutory mastery over Indian banking regulations, NPA resolution, and borrower rights.</p>
                    </div>
                    <div className="p-5 rounded-xl bg-gray-50 border border-gray-200 shadow-sm hover:border-[#D2A02A] transition-colors">
                      <div className="text-3xl mb-2">🛡️</div>
                      <h3 className="font-bold text-base text-[#5A4C33] mb-1">Anti-Harassment Shield</h3>
                      <p className="text-xs text-gray-600">We mandate all recovery communication through our legal firm, safeguarding your peace of mind, family dignity, and workplace privacy.</p>
                    </div>
                    <div className="p-5 rounded-xl bg-gray-50 border border-gray-200 shadow-sm hover:border-[#D2A02A] transition-colors">
                      <div className="text-3xl mb-2">🎯</div>
                      <h3 className="font-bold text-base text-[#5A4C33] mb-1">Success-Driven Model</h3>
                      <p className="text-xs text-gray-600">Zero predatory upfront costs. Our primary fee is linked directly to the real financial savings negotiated on your credit card debt.</p>
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
                      Managing Partner at AMA Legal Solutions. Supreme Court and High Court Advocate specializing in commercial credit card debt resolution, banking litigation, and consumer rights defense.
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
                      • <a href="https://www.rbi.org.in/" target="_blank" rel="noopener noreferrer" className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-medium">Reserve Bank of India (RBI)</a> — Master Direction on Credit Card and Debit Card Issuance and Conduct (2022/2024/2026).
                    </li>
                    <li>
                      • <a href="https://cms.rbi.org.in/" target="_blank" rel="noopener noreferrer" className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-medium">RBI Integrated Ombudsman Scheme</a> — Mechanism for Redressal of Deficiencies in Card Operations &amp; Recovery Agent Harassment.
                    </li>
                    <li>
                      • <a href="https://ncdrc.nic.in/" target="_blank" rel="noopener noreferrer" className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-medium">National Consumer Disputes Redressal Commission (NCDRC)</a> — Judicial Precedents on Unfair Banking Levies and Excessive Card Interest Charges.
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
                      href="/how-to-settle-credit-card-debt"
                      className="p-3.5 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:bg-amber-50/40 transition-all text-xs md:text-sm font-semibold text-gray-800 flex items-center justify-between"
                    >
                      <span>How to Settle Credit Card Debt</span>
                      <span className="text-[#D2A02A]">→</span>
                    </Link>
                    <Link
                      href="/top-credit-card-banks-offering-settlement-india"
                      className="p-3.5 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:bg-amber-50/40 transition-all text-xs md:text-sm font-semibold text-gray-800 flex items-center justify-between"
                    >
                      <span>Top Credit Card Banks Offering Settlement</span>
                      <span className="text-[#D2A02A]">→</span>
                    </Link>
                    <Link
                      href="/best-company-to-settle-credit-card-debt"
                      className="p-3.5 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:bg-amber-50/40 transition-all text-xs md:text-sm font-semibold text-gray-800 flex items-center justify-between"
                    >
                      <span>Best Company to Settle Credit Card Debt</span>
                      <span className="text-[#D2A02A]">→</span>
                    </Link>
                    <Link
                      href="/hdfc-credit-card-settlement-percentage"
                      className="p-3.5 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:bg-amber-50/40 transition-all text-xs md:text-sm font-semibold text-gray-800 flex items-center justify-between"
                    >
                      <span>HDFC Credit Card Settlement Percentage</span>
                      <span className="text-[#D2A02A]">→</span>
                    </Link>
                    <Link
                      href="/hdfc-credit-card-settlement-process"
                      className="p-3.5 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:bg-amber-50/40 transition-all text-xs md:text-sm font-semibold text-gray-800 flex items-center justify-between"
                    >
                      <span>HDFC Credit Card Settlement Process</span>
                      <span className="text-[#D2A02A]">→</span>
                    </Link>
                    <Link
                      href="/legal-notice-for-credit-card-recovery-harassment-dues"
                      className="p-3.5 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:bg-amber-50/40 transition-all text-xs md:text-sm font-semibold text-gray-800 flex items-center justify-between"
                    >
                      <span>Notice for Credit Card Harassment</span>
                      <span className="text-[#D2A02A]">→</span>
                    </Link>
                    <Link
                      href="/credit-card-arbitration-notice-from-bank"
                      className="p-3.5 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:bg-amber-50/40 transition-all text-xs md:text-sm font-semibold text-gray-800 flex items-center justify-between"
                    >
                      <span>Credit Card Arbitration Notice Defense</span>
                      <span className="text-[#D2A02A]">→</span>
                    </Link>
                    <Link
                      href="/do-banks-file-fir-for-credit-card-dues"
                      className="p-3.5 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:bg-amber-50/40 transition-all text-xs md:text-sm font-semibold text-gray-800 flex items-center justify-between"
                    >
                      <span>Do Banks File FIR for Credit Card Dues?</span>
                      <span className="text-[#D2A02A]">→</span>
                    </Link>
                    <Link
                      href="/can-i-settle-my-credit-card-debt"
                      className="p-3.5 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:bg-amber-50/40 transition-all text-xs md:text-sm font-semibold text-gray-800 flex items-center justify-between"
                    >
                      <span>Can I Settle My Credit Card Debt?</span>
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
                      href="/one-time-settlement"
                      className="p-3.5 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:bg-amber-50/40 transition-all text-xs md:text-sm font-semibold text-gray-800 flex items-center justify-between"
                    >
                      <span>One Time Settlement (OTS) Scheme</span>
                      <span className="text-[#D2A02A]">→</span>
                    </Link>
                    <Link
                      href="/bank-loan-settlement-rules"
                      className="p-3.5 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:bg-amber-50/40 transition-all text-xs md:text-sm font-semibold text-gray-800 flex items-center justify-between"
                    >
                      <span>Bank Loan Settlement Rules</span>
                      <span className="text-[#D2A02A]">→</span>
                    </Link>
                  </div>
                </section>

                {/* ================= SECTION 10: FAQs ================= */}
                <section id="frequently-asked-questions" className="scroll-mt-32 border-t border-gray-200 pt-8">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                    Frequently Asked Questions on Credit Card Debt Settlement
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
                      Reclaim Your Financial Dignity &amp; Freedom from Credit Card Debt
                    </h2>
                    <p className="text-xs sm:text-sm md:text-base text-gray-300 max-w-xl mx-auto leading-relaxed">
                      Do not let compounding 42%+ credit card interest and incessant recovery calls overwhelm your family. Speak directly with senior debt settlement advocates today for an authoritative, confidential case review.
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
                    AMA Legal Solutions is India's premier legal advisory and litigation law firm. Trusted with a <strong className="text-[#D2A02A]">4.7 Google Rating</strong>, over <strong className="text-[#D2A02A]">10,000+ Clients Served</strong>, <strong className="text-[#D2A02A]">25,000+ Cases Handled</strong>, and more than <strong className="text-[#D2A02A]">40+ Years of Combined Legal Experience</strong> providing strategic legal defense and debt resolution across India.
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
                <h3 className="text-xl font-bold mb-2 text-white">Need Urgent Card Debt Relief?</h3>
                <p className="text-gray-200 text-xs sm:text-sm leading-relaxed mb-5">
                  Stop recovery agent harassment today. Connect directly with our senior credit card debt settlement advocates for a confidential case evaluation.
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
                  "Advocate Anuj Anand Malik and the team at AMA Legal Solutions saved me from an impossible financial nightmare. My credit card debt had spiraled to over ₹14 Lakhs due to exorbitant 45% compounding finance charges after I lost my job. AMA Legal Solutions stepped in, silenced the abusive recovery agents within 24 hours with strict legal notices, and negotiated a formal 65% One Time Settlement with the bank. I received my authentic No Dues Certificate and complete peace of mind."
                </blockquote>

                <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                  <div className="w-9 h-9 rounded-full bg-[#5A4C33] text-[#D2A02A] flex items-center justify-center font-bold text-sm">
                    R
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-xs sm:text-sm">Rohit Deshmukh</div>
                    <div className="text-[11px] text-gray-500">Senior Marketing Specialist &bull; Settled ₹14.2 Lakhs CC</div>
                  </div>
                </div>
              </div>

              {/* RBI Compliance Badge Box */}
              <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200 text-xs text-gray-600 space-y-2">
                <div className="font-bold text-gray-900 text-sm flex items-center gap-2">
                  <span className="text-[#D2A02A]">🛡️</span> Regulatory Assurance
                </div>
                <p className="leading-relaxed">
                  All credit card settlement negotiations, representation notices, and dispute resolutions are conducted strictly pursuant to the Advocates Act, 1961 and Reserve Bank of India Master Directions.
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
                      Speak directly with an advocate to stop harassment and settle your credit card debt.
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
                        placeholder="e.g. Rohit Deshmukh"
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
                          placeholder="rohit@example.com"
                          className="w-full px-3.5 py-2.5 border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-[#D2A02A] focus:border-transparent outline-none transition"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">
                          Card Issuing Bank / NBFC
                        </label>
                        <input
                          type="text"
                          name="bankName"
                          value={formData.bankName}
                          onChange={handleInputChange}
                          placeholder="e.g. HDFC, SBI Card, ICICI, Axis"
                          className="w-full px-3.5 py-2.5 border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-[#D2A02A] focus:border-transparent outline-none transition"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">
                          Total Card Dues Outstanding
                        </label>
                        <input
                          type="text"
                          name="loanAmount"
                          value={formData.loanAmount}
                          onChange={handleInputChange}
                          placeholder="e.g. ₹6,50,000"
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
                    Thank you, <strong>{formData.name || "Client"}</strong>. Our senior credit card debt settlement legal team will review your details and contact you confidentially on <strong>{formData.phone}</strong>.
                  </p>
                  <div className="pt-3">
                    <a
                      href={`https://api.whatsapp.com/send?phone=918700343611&text=Hello%20AMA%20Legal%20Solutions,%20I%20am%20${encodeURIComponent(formData.name || "a client")}%20requesting%20urgent%20credit%20card%20debt%20settlement%20assistance.`}
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
