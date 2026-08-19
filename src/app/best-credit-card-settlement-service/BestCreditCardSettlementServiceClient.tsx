"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";

export default function BestCreditCardSettlementServiceClient() {
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
    { id: "introduction", title: "Commercial Analysis: Credit Card Debt in India" },
    { id: "selection-criteria", title: "Key Criteria to Evaluate the Best Settlement Service" },
    { id: "advocate-vs-fintech", title: "Law Firm Advocacy vs. Unregulated Fintech Agencies" },
    { id: "rbi-regulatory-framework", title: "RBI Compromise Settlement Framework & Legal Rules" },
    { id: "settlement-benchmarks", title: "Bank-Wise Settlement & Waiver Benchmarks (40%–75%)" },
    { id: "step-by-step-process", title: "The 5-Stage Institutional Settlement Protocol" },
    { id: "statutory-protections", title: "Statutory Defenses Against Criminal Threats & Harassment" },
    { id: "fee-transparency", title: "Transparent Legal Retainer vs. Success Contingency Models" },
    { id: "cibil-credit-rehabilitation", title: "Credit Score Rehabilitation & Post-Settlement Recovery" },
    { id: "more-legal-guides", title: "Related Legal Debt Relief Guides" },
    { id: "frequently-asked-questions", title: "Frequently Asked Questions" },
  ];

  const faqs = [
    {
      question: "Why is a law firm considered the best credit card debt settlement service in India?",
      answer: "A specialized law firm provides statutory attorney-client privilege, issues binding Cease-and-Desist notices under the Advocates Act, 1961, and directly represents borrowers against Section 138 cheque bounce or Section 25 electronic mandate notices. Unlike unregulated third-party apps or collection mediators, practicing banking litigation advocates negotiate directly with senior bank Stressed Asset Settlement Committees under Reserve Bank of India compromise frameworks to secure authentic, legally enforceable No Dues Certificates."
    },
    {
      question: "How much waiver can the best credit card debt settlement service negotiate with Indian banks?",
      answer: "The best legal debt settlement services routinely secure waivers ranging between 40% and 75% of the total outstanding ledger balance depending on the default vintage, NPA aging classification, and verified hardship documentation. Professional advocates ensure 100% elimination of penal interest charges, compounding finance levies of 42%–52% APR, and accumulated late fees prior to negotiating substantial discounts on the original principal spend."
    },
    {
      question: "How do legal debt settlement services stop abusive recovery agent harassment?",
      answer: "Legal debt settlement advocates serve formal legal representation notices and statutory notices on the card-issuing bank and its contracted recovery agencies, invoking Reserve Bank of India Master Directions on Fair Practices Code. Under Indian banking regulations, once a customer is represented by an authorized legal counsel, all institutional communications must strictly redirect to the advocate's office, making unsolicited home invasions, workplace visits, and abusive phone calls actionable offenses punishable before the RBI Integrated Ombudsman."
    },
    {
      question: "What is the difference between debt settlement and debt consolidation loans in India?",
      answer: "Debt consolidation merges multiple high-interest credit card balances into a single new loan requiring continued full repayment of principal and interest over extended tenures. In contrast, credit card debt settlement executes a legally sanctioned One Time Settlement (OTS) that permanently waives a major portion of the debt (40% to 75%) through a discounted lump-sum or staggered compromise payment, terminating the cardholder's financial liability immediately upon issuance of a No Dues Certificate."
    },
    {
      question: "Can cardholders face police arrest or jail time for defaulting on credit card dues?",
      answer: "Credit card default is purely a civil contractual dispute under Indian jurisprudence and cannot result in criminal arrest, detention, or FIR registration for genuine inability to pay. While banks may attempt coercive pressure by issuing statutory legal notices under Section 25 of the Payment and Settlement Systems Act or Section 138 of the Negotiable Instruments Act, experienced settlement lawyers defend these proceedings and facilitate amicable compromise settlements before Lok Adalats."
    },
    {
      question: "How do commercial debt settlement services charge fees in India?",
      answer: "Reputable legal debt settlement services operate on a transparent hybrid fee structure comprising a nominal initial legal administrative retainer followed by a performance-based contingency fee tied exclusively to actual savings achieved. This ethical compensation model ensures that the legal firm's incentives remain completely aligned with maximizing the borrower's debt waiver while protecting clients from predatory upfront advance fee schemes."
    },
    {
      question: "How does credit card settlement affect credit scores and can it be repaired?",
      answer: "Credit card settlement results in a temporary credit score reduction and trade line remark of 'Settled' across credit information bureaus like TransUnion CIBIL, Equifax, and Experian. However, resolving an outstanding non-performing asset terminates compounding monthly delinquency entries, allowing borrowers to methodically rebuild their credit score back to 750+ within 18 to 24 months through secured credit lines and disciplined repayment habits."
    },
    {
      question: "What documents are required to initiate professional credit card debt settlement?",
      answer: "To formulate an authoritative One Time Settlement hardship proposal, borrowers must provide the latest credit card billing statements, bank correspondence notices, and verified proof of involuntary financial distress. Acceptable hardship records include medical treatment records, employment termination or salary reduction letters, or certified business balance sheets demonstrating sudden revenue collapse."
    }
  ];

  const evaluationSteps = [
    {
      step: "01",
      title: "Statutory Forensic Ledger & Hardship Audit",
      desc: "Our banking litigation advocates conduct a line-item forensic audit of all monthly statements, dissecting predatory compounding finance charges (42%–52% APR), GST surcharges, and over-limit penalties from original capital expenditures while structuring verified hardship proof."
    },
    {
      step: "02",
      title: "Issuance of Cease-and-Desist Anti-Harassment Directives",
      desc: "We serve formal statutory notices of legal representation under the Advocates Act, 1961 and RBI Master Directions on all creditor banks and collection desks, immediately halting unpermitted home visits, employer intrusions, and abusive communication."
    },
    {
      step: "03",
      title: "Formulation of the Authoritative OTS Legal Brief",
      desc: "Our senior counsel drafts a comprehensive One Time Settlement (OTS) memorandum detailing involuntary financial distress (job loss, business downturn, medical emergency), citing RBI compromise frameworks and proposing a realistic settlement matrix."
    },
    {
      step: "04",
      title: "Direct Escalation with Bank Stressed Asset Committees",
      desc: "We bypass aggressive outsourced telecallers to negotiate directly with bank zonal credit settlement committees, legal heads, and asset reconstruction verticals to secure maximum debt waivers (40% to 75%) and flexible payment tenures."
    },
    {
      step: "05",
      title: "Sanction Letter Authentication & No Dues Certificate Enforcement",
      desc: "Before any payment is released, we authenticate the formal bank settlement sanction letter on official bank letterhead with authorized digital signatures. Post-payment, we ensure expedited delivery of the authentic No Dues Certificate (NDC) and credit bureau reporting updates."
    }
  ];

  const comparisonRows = [
    {
      metric: "Legal Representation Authority",
      ama: "Practicing Advocates & High Court Litigators (Advocates Act, 1961)",
      fintech: "Unregulated Telecalling Marketing Agencies",
      self: "Unrepresented Individual Facing Institutional Pressure"
    },
    {
      metric: "Anti-Harassment Enforcement",
      ama: "Statutory Cease-and-Desist & RBI Ombudsman Complaints",
      fintech: "Soft Call Forwarding Scripts (Easily Ignored)",
      self: "Vulnerable to Intimidation and Home Invasions"
    },
    {
      metric: "Court & Lok Adalat Defense",
      ama: "Comprehensive Defense for Sec 138 NI Act & Sec 25 PSS Act",
      fintech: "No Legal Right of Audience; Abandons Court Cases",
      self: "Risk of Ex-Parte Orders & Summons"
    },
    {
      metric: "Average Debt Waiver",
      ama: "40% to 75% Total Debt Reduction (Principal + Interest)",
      fintech: "20% to 40% (Often Fails to Waive Penal APR)",
      self: "10% to 25% (Bank Dictates Rigid Terms)"
    },
    {
      metric: "Settlement Authentication",
      ama: "100% Verified Official Sanction Letter & Verified NDC",
      fintech: "Frequent Fake WhatsApp Letters & Recovery Scams",
      self: "High Risk of False Compromise by Freelance Agents"
    },
    {
      metric: "Confidentiality & Privilege",
      ama: "Protected by Strict Attorney-Client Privilege",
      fintech: "Client Data Sold/Shared Across Telemarketing Databases",
      self: "Direct Exposure of Personal & Professional Contacts"
    }
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://www.amalegalsolutions.com/best-credit-card-settlement-service#article",
        "headline": "Best Credit Card Debt Settlement Service in India: Commercial Evaluation, RBI Legal Protection, and Advocate-Led OTS Guide",
        "description": "Commercial evaluation of India’s best credit card debt settlement services. Learn how practicing advocates negotiate 40% to 75% debt waivers under RBI compromise guidelines, halt recovery agent harassment, and obtain certified No Dues Certificates.",
        "image": [
          "https://www.amalegalsolutions.com/images/og/best-credit-card-settlement-service.png"
        ],
        "datePublished": "2026-02-10T09:00:00+05:30",
        "dateModified": "2026-08-19T17:50:00+05:30",
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
          "@id": "https://www.amalegalsolutions.com/best-credit-card-settlement-service"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://www.amalegalsolutions.com/best-credit-card-settlement-service",
        "url": "https://www.amalegalsolutions.com/best-credit-card-settlement-service",
        "name": "Best Credit Card Debt Settlement Service in India | AMA Legal Solutions",
        "description": "Explore why AMA Legal Solutions is rated India’s best credit card debt settlement service. Advocate representation, RBI compromise compliance, 40%–75% waivers, and guaranteed No Dues Certificates.",
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": ["h1", "#quick-answer"]
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.amalegalsolutions.com/best-credit-card-settlement-service#faq",
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
        "@id": "https://www.amalegalsolutions.com/best-credit-card-settlement-service#product",
        "name": "Best Credit Card Debt Settlement Service in India",
        "image": "https://www.amalegalsolutions.com/images/og/best-credit-card-settlement-service.png",
        "description": "India's highest rated advocate-led credit card debt settlement service. Strategic legal defense against recovery harassment, RBI compromise framework negotiations, 40%–75% debt waivers, and official No Dues Certificates.",
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
            "name": "Siddharth Vardhan"
          },
          "reviewBody": "Selecting AMA Legal Solutions was the best financial and legal decision I have ever made. After my export consultancy incurred massive losses, my 4 credit card balances across top private banks surged from ₹8 Lakhs to over ₹21 Lakhs because of predatory 48% finance charges and endless late penalties. Advocate Anuj Anand Malik and his team took immediate charge, stopped all illegal harassment calls within 24 hours through formal legal notices, and negotiated an official 68% One Time Settlement directly with the bank's zonal committee. I settled the entire debt for ₹6.7 Lakhs in convenient installments and received verified No Dues Certificates."
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
        "@id": "https://www.amalegalsolutions.com/best-credit-card-settlement-service#breadcrumbs",
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
            "name": "Best Credit Card Settlement Service",
            "item": "https://www.amalegalsolutions.com/best-credit-card-settlement-service"
          }
        ]
      },
      {
        "@type": "ItemList",
        "@id": "https://www.amalegalsolutions.com/best-credit-card-settlement-service#process",
        "name": "The 5-Stage Institutional Settlement Protocol for Credit Cards",
        "itemListElement": evaluationSteps.map((item, index) => ({
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
        id="best-credit-card-settlement-service-schema"
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
              India's Top-Rated Credit Card Debt Settlement Legal Firm
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight max-w-5xl mx-auto">
              Best <span className="text-[#D2A02A]">Credit Card Debt Settlement Service</span> in India
            </h1>

            <p className="text-sm sm:text-base md:text-xl mb-8 md:mb-10 max-w-3xl mx-auto text-gray-200 leading-relaxed font-light">
              Experience the highest benchmark of legal protection and debt relief. Advocate-led institutional negotiations to stop predatory recovery harassment, eliminate compounding 42%+ interest, and secure <strong className="text-white font-semibold">40% to 75% debt waivers</strong> under Reserve Bank of India (RBI) compromise frameworks.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto bg-[#D2A02A] hover:bg-[#b08522] text-white font-bold py-3.5 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 shadow-xl hover:shadow-[#D2A02A]/20 text-sm md:text-base flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>🛡️ Evaluate My Settlement Savings</span>
              </button>
              <a
                href="tel:+918700343611"
                className="w-full sm:w-auto bg-transparent border-2 border-[#D2A02A]/60 hover:border-[#D2A02A] text-white hover:bg-white/10 font-bold py-3.5 px-8 rounded-xl transition-all duration-300 text-sm md:text-base flex items-center justify-center gap-2"
              >
                <span>📞 Speak with Senior Advocate</span>
              </a>
            </div>

            <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-xs md:text-sm text-gray-300 font-medium">
              <span className="flex items-center gap-1.5"><span className="text-[#D2A02A]">✓</span> 100% Attorney-Client Privilege</span>
              <span className="flex items-center gap-1.5"><span className="text-[#D2A02A]">✓</span> Immediate Cease-and-Desist Notices</span>
              <span className="flex items-center gap-1.5"><span className="text-[#D2A02A]">✓</span> Certified Bank No Dues Certificates</span>
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

            {/* CENTER: Main Editorial & Commercial Legal Content */}
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
                          Best Credit Card Settlement Service
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
                      href="https://www.facebook.com/sharer/sharer.php?u=https://www.amalegalsolutions.com/best-credit-card-settlement-service"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:opacity-90 transition font-bold text-xs shadow-sm"
                      title="Share on Facebook"
                      aria-label="Share on Facebook"
                    >
                      f
                    </a>
                    <a
                      href="https://twitter.com/intent/tweet?url=https://www.amalegalsolutions.com/best-credit-card-settlement-service&text=Best%20Credit%20Card%20Debt%20Settlement%20Service%20in%20India"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center hover:opacity-90 transition font-bold text-xs shadow-sm"
                      title="Share on X"
                      aria-label="Share on X"
                    >
                      𝕏
                    </a>
                    <a
                      href="https://www.linkedin.com/sharing/share-offsite/?url=https://www.amalegalsolutions.com/best-credit-card-settlement-service"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-[#0A66C2] text-white flex items-center justify-center hover:opacity-90 transition font-bold text-xs shadow-sm"
                      title="Share on LinkedIn"
                      aria-label="Share on LinkedIn"
                    >
                      in
                    </a>
                    <a
                      href="https://api.whatsapp.com/send?text=Best%20Credit%20Card%20Debt%20Settlement%20Service%20in%20India%20https://www.amalegalsolutions.com/best-credit-card-settlement-service"
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
                    <h2>Quick Answer: What Is the Best Credit Card Debt Settlement Service in India?</h2>
                  </div>
                  <p className="text-gray-900 font-normal leading-relaxed text-sm md:text-base">
                    The best credit card debt settlement service in India is an advocate-led legal advisory firm that represents distressed borrowers under Reserve Bank of India (RBI) compromise settlement frameworks. AMA Legal Solutions delivers comprehensive legal protection by serving statutory anti-harassment Cease-and-Desist notices, defending against Section 138 NI Act or Section 25 PSS Act court proceedings, negotiating 40% to 75% debt waivers directly with bank Stressed Asset Settlement Committees, and securing official, certified No Dues Certificates (NDCs).
                  </p>
                </div>

                {/* ================= SECTION 1: COMMERCIAL INTRODUCTION ================= */}
                <section id="introduction" className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#5A4C33] tracking-tight">
                    Commercial Analysis: The Unchecked Credit Card Debt Crisis in India
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                    The commercial consumer credit landscape in India has witnessed an exponential surge in unsecured revolving lines of credit. While credit cards offer seamless transactional convenience, their underlying financial architecture contains some of the highest compounding annual percentage rates (APR) in modern consumer finance, oscillating between <strong className="text-gray-900 font-semibold">42% and 52.8% per annum</strong>. When an unexpected financial disruption occurs—such as sudden employment termination, commercial business contraction, medical emergencies, or divorce—revolving credit balances compound aggressively, transforming manageable expenditures into insurmountable financial obligations within a few billing cycles.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                    Cardholders trapped in this revolving cycle frequently make minimum amount due (MAD) payments under the mistaken belief that they are servicing their debt. In reality, minimum payments cover only accrued monthly interest and Goods and Services Tax (GST at 18%), leaving the core principal virtually untouched while exposing the borrower to continuous over-limit fees and late payment surcharges. When payments cease, card issuers deploy outsourced third-party recovery agencies that routinely violate fair debt collection norms, subjecting individuals to relentless psychological intimidation, intrusive workplace harassment, and threats of criminal litigation.
                  </p>
                  
                  <blockquote className="border-l-4 border-[#D2A02A] bg-gray-50 p-4 sm:p-5 rounded-r-xl italic text-gray-800 text-sm sm:text-base my-4">
                    "Under Indian jurisprudence and Reserve Bank of India Master Directions, credit card default is purely a civil contractual dispute. Coercive recovery tactics, unauthorized third-party disclosures, and unlawful threats of criminal incarceration constitute statutory violations of fundamental borrower protections enforceable under consumer and criminal courts."
                  </blockquote>

                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                    Navigating this commercial crisis demands more than informal financial budgeting; it requires strategic, advocate-led legal intervention. Choosing the <strong className="text-gray-900">best credit card debt settlement service in India</strong> ensures that distressed borrowers regain control over their financial dignity, eliminate predatory compounding charges, and achieve absolute legal closure through sanctioned One Time Settlement (OTS) mechanisms.
                  </p>
                </section>

                {/* ================= SECTION 2: SELECTION CRITERIA ================= */}
                <section id="selection-criteria" className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#5A4C33] tracking-tight">
                    Key Criteria to Evaluate the Best Credit Card Settlement Services
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                    Selecting a debt settlement partner is a high-stakes commercial decision. Distressed cardholders must evaluate prospective service providers against stringent legal, operational, and regulatory parameters before committing their trust or financial resources:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                    <div className="p-5 rounded-xl border border-amber-200/70 bg-amber-50/40">
                      <div className="text-[#D2A02A] text-xl font-bold mb-2">1. Statutory Legal Standing</div>
                      <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                        Verify whether the service is operated by licensed advocates enrolled with the Bar Council of India. Legal practitioners possess statutory authority under the <Link href="/lawyer-who-provides-loan-debt-settlement-services" className="text-[#D2A02A] font-semibold hover:underline">Advocates Act, 1961</Link> to issue binding legal notices, appear before courts, and represent clients during institutional mediation.
                      </p>
                    </div>

                    <div className="p-5 rounded-xl border border-amber-200/70 bg-amber-50/40">
                      <div className="text-[#D2A02A] text-xl font-bold mb-2">2. Direct Institutional Negotiation Channels</div>
                      <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                        The top settlement firms bypass entry-level collection telecallers and engage directly with the bank's internal Zonal Stressed Asset Management Committees, legal departments, and authorized settlement authorities who hold genuine sanctioning power.
                      </p>
                    </div>

                    <div className="p-5 rounded-xl border border-amber-200/70 bg-amber-50/40">
                      <div className="text-[#D2A02A] text-xl font-bold mb-2">3. Robust Anti-Harassment Enforcement</div>
                      <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                        An elite service provider immediately invokes the <Link href="/rbi-guidelines-for-recovery-agents-pdf-2026" className="text-[#D2A02A] font-semibold hover:underline">RBI Master Directions on Fair Practices Code</Link> to silence abusive recovery agents, redirecting all communications to formal legal channels under penalty of statutory ombudsman complaints.
                      </p>
                    </div>

                    <div className="p-5 rounded-xl border border-amber-200/70 bg-amber-50/40">
                      <div className="text-[#D2A02A] text-xl font-bold mb-2">4. Transparent, Contingency-Based Fee Models</div>
                      <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                        Ethical firms avoid predatory upfront fees that drain already distressed borrowers. They operate with an accessible legal administrative retainer combined with a performance success fee calculated as a percentage of actual verified savings.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ================= SECTION 3: ADVOCATE VS FINTECH COMPARISON ================= */}
                <section id="advocate-vs-fintech" className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#5A4C33] tracking-tight">
                    Law Firm Legal Advocacy vs. Unregulated Fintech Mediation Agencies
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                    The Indian market features two distinct categories of debt resolution entities: specialized banking litigation law firms and unregulated digital fintech agencies. Understanding the stark functional divide between these models is essential for safeguarding your financial and legal interests:
                  </p>

                  {/* Comprehensive Comparison Table */}
                  <div className="overflow-x-auto my-6 border border-gray-200 rounded-xl shadow-sm">
                    <table className="w-full text-left text-xs sm:text-sm text-gray-700">
                      <thead className="bg-[#5A4C33] text-white uppercase text-[11px] sm:text-xs">
                        <tr>
                          <th className="py-3.5 px-4 font-bold">Key Evaluation Dimension</th>
                          <th className="py-3.5 px-4 font-bold bg-[#433723] text-[#D2A02A]">AMA Legal Solutions (Law Firm)</th>
                          <th className="py-3.5 px-4 font-bold">Fintech Apps &amp; Third-Party Agencies</th>
                          <th className="py-3.5 px-4 font-bold">Self-Negotiation (Unrepresented)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {comparisonRows.map((row, idx) => (
                          <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50/70"}>
                            <td className="py-3.5 px-4 font-bold text-gray-900">{row.metric}</td>
                            <td className="py-3.5 px-4 font-semibold text-[#5A4C33] bg-amber-50/50">{row.ama}</td>
                            <td className="py-3.5 px-4 text-gray-600">{row.fintech}</td>
                            <td className="py-3.5 px-4 text-gray-600">{row.self}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                    Unregulated third-party settlement apps lack legal standing under Indian law. When commercial banks escalate overdue credit card defaults to judicial forums—such as issuing statutory demand notices under <Link href="/section-138-cheque-bounce-notice-for-personal-loan" className="text-[#D2A02A] font-semibold hover:underline">Section 138 of the Negotiable Instruments Act</Link> or <Link href="/payment-of-settlement-act" className="text-[#D2A02A] font-semibold hover:underline">Section 25 of the Payment and Settlement Systems Act</Link>—fintech agencies cannot represent you in court. Only an advocate possesses the statutory right of audience to protect you from adverse judicial decrees and transition contested litigation into binding Lok Adalat settlements.
                  </p>
                </section>

                {/* ================= INFOGRAPHIC / DIGITAL ART EMBED ================= */}
                <div className="my-8 bg-black rounded-2xl overflow-hidden shadow-xl border border-[#D2A02A]/30">
                  <div className="relative w-full aspect-[16/9]">
                    <Image
                      src="/images/og/best-credit-card-settlement-service.png"
                      alt="Best Credit Card Debt Settlement Services in India - Strategic Legal Framework Infographic"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="p-4 bg-gradient-to-r from-black via-[#1c1813] to-[#5A4C33] text-center border-t border-[#D2A02A]/30">
                    <p className="text-xs sm:text-sm text-gray-200 font-medium">
                      <strong className="text-[#D2A02A]">Institutional Framework:</strong> Strategic Debt Assessment, Statutory Legal Defense, 40%–75% One Time Settlement Waivers, and Certified No Dues Certificates.
                    </p>
                  </div>
                </div>

                {/* ================= SECTION 4: RBI REGULATORY FRAMEWORK ================= */}
                <section id="rbi-regulatory-framework" className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#5A4C33] tracking-tight">
                    Reserve Bank of India (RBI) Compromise Settlement Framework
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                    Debt settlement in India is neither an illegal loophole nor an informal waiver; it is a legally sanctioned statutory mechanism established by the central banking regulator. Under the <a href="https://www.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[#D2A02A] font-bold hover:text-[#5A4C33] hover:underline">Reserve Bank of India (Prudential Framework for Resolution of Stressed Assets) Directions</a> and the landmark RBI Circular on <em>Compromise Settlements and Technical Write-offs</em>, commercial banks and NBFCs are mandated to institute board-approved compromise settlement policies.
                  </p>

                  <div className="space-y-3 my-4">
                    <div className="p-4 rounded-xl border border-gray-200 bg-white">
                      <h4 className="font-bold text-gray-900 text-sm sm:text-base flex items-center gap-2">
                        <span className="text-[#D2A02A]">⚖️</span> Prudential Asset Classification (NPA Lifecycle)
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">
                        When credit card minimum dues remain unpaid for over 90 days, the account transitions from Special Mention Account (SMA-0, SMA-1, SMA-2) to a <Link href="/understanding-non-performing-assets-npa-what-happens-next-your-complete-guide" className="text-[#D2A02A] font-medium hover:underline">Non-Performing Asset (NPA)</Link>. To prevent mounting capital provisioning burdens under Basel III norms, banks are incentivized to recover capital through structured OTS compromises.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl border border-gray-200 bg-white">
                      <h4 className="font-bold text-gray-900 text-sm sm:text-base flex items-center gap-2">
                        <span className="text-[#D2A02A]">🛡️</span> Fair Practices Code on Debt Collection
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">
                        The <a href="https://bankingombudsman.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[#D2A02A] font-bold hover:text-[#5A4C33] hover:underline">RBI Master Circular on Customer Service</a> strictly prohibits recovery agencies from contacting borrowers before 8:00 AM or after 7:00 PM, calling undisclosed family members or employers, using abusive language, or invading borrower residences without prior intimation.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl border border-gray-200 bg-white">
                      <h4 className="font-bold text-gray-900 text-sm sm:text-base flex items-center gap-2">
                        <span className="text-[#D2A02A]">📜</span> Legally Binding Compromise Agreements
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">
                        Every sanctioned settlement must be formalized through a written compromise sanction letter issued on the bank's official letterhead, specifying the exact negotiated amount, payment timeline, waiver breakdown, and explicit covenant for issuing a <Link href="/documents-needed-for-loan-settlement-noc" className="text-[#D2A02A] font-medium hover:underline">No Dues Certificate (NDC)</Link>.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ================= SECTION 5: SETTLEMENT BENCHMARKS ================= */}
                <section id="settlement-benchmarks" className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#5A4C33] tracking-tight">
                    Bank-Wise Settlement &amp; Waiver Benchmarks (40% to 75%)
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                    Waiver percentages during credit card debt settlement vary based on the issuing institution's internal risk appetite, portfolio provisioning status, and default aging. Based on AMA Legal Solutions' empirical litigation record across over 25,000 banking matters, the following benchmarks reflect typical negotiated outcomes:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                    <div className="p-5 rounded-2xl bg-gradient-to-b from-white to-amber-50/50 border border-amber-200 shadow-sm text-center">
                      <div className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">Major Private Banks</div>
                      <div className="text-2xl sm:text-3xl font-extrabold text-[#5A4C33] my-2">45% – 70%</div>
                      <div className="text-xs font-semibold text-[#D2A02A] mb-3">HDFC, ICICI, Axis, Kotak, IndusInd</div>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Rapidly waive 100% of accumulated penal finance charges (3.5%–4.2% monthly) and provide aggressive principal reductions upon verification of genuine hardship.
                      </p>
                      <div className="mt-3 pt-3 border-t border-amber-200/60 text-xs">
                        <Link href="/hdfc-credit-card-settlement-process" className="text-[#D2A02A] font-bold hover:underline">
                          View HDFC Settlement Guide &rarr;
                        </Link>
                      </div>
                    </div>

                    <div className="p-5 rounded-2xl bg-gradient-to-b from-white to-amber-50/50 border border-amber-200 shadow-sm text-center">
                      <div className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">Public Sector Undertakings</div>
                      <div className="text-2xl sm:text-3xl font-extrabold text-[#5A4C33] my-2">50% – 75%</div>
                      <div className="text-xs font-semibold text-[#D2A02A] mb-3">SBI Card, PNB, Bank of Baroda, Canara</div>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Operate structured annual OTS schemes (especially during Q4 March financial year-end) with massive interest write-offs and flexible installment schedules.
                      </p>
                      <div className="mt-3 pt-3 border-t border-amber-200/60 text-xs">
                        <Link href="/settlement-waiver-percentage-of-sbi-bank-loans" className="text-[#D2A02A] font-bold hover:underline">
                          View SBI Card Settlement Guide &rarr;
                        </Link>
                      </div>
                    </div>

                    <div className="p-5 rounded-2xl bg-gradient-to-b from-white to-amber-50/50 border border-amber-200 shadow-sm text-center">
                      <div className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">Foreign &amp; Fintech NBFCs</div>
                      <div className="text-2xl sm:text-3xl font-extrabold text-[#5A4C33] my-2">40% – 65%</div>
                      <div className="text-xs font-semibold text-[#D2A02A] mb-3">Standard Chartered, HSBC, RBL, OneCard</div>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        High initial compounding APR. Advocate-led legal notices force these lenders to strip inflated charges back to the net principal expenditure.
                      </p>
                      <div className="mt-3 pt-3 border-t border-amber-200/60 text-xs">
                        <Link href="/indusind-bank-credit-card-settlement" className="text-[#D2A02A] font-bold hover:underline">
                          View RBL &amp; IndusInd Guide &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </section>

                {/* ================= SECTION 6: 5-STEP PROTOCOL ================= */}
                <section id="step-by-step-process" className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#5A4C33] tracking-tight">
                    The 5-Stage Institutional Settlement Protocol at AMA Legal Solutions
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                    Executing a successful credit card debt settlement requires an unyielding, methodical legal approach. Our firm implements a battle-tested 5-stage protocol that protects your rights while maximizing financial savings:
                  </p>

                  <div className="space-y-4 my-6">
                    {evaluationSteps.map((step) => (
                      <div key={step.step} className="flex flex-col sm:flex-row gap-4 p-5 rounded-2xl border border-gray-200 bg-white hover:border-[#D2A02A]/50 transition-colors shadow-sm">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#5A4C33] to-[#3a3020] text-[#D2A02A] font-extrabold text-lg flex items-center justify-center shadow-md">
                          {step.step}
                        </div>
                        <div className="space-y-1">
                          <h3 className="text-base sm:text-lg font-bold text-gray-900">{step.title}</h3>
                          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* ================= SECTION 7: STATUTORY PROTECTIONS ================= */}
                <section id="statutory-protections" className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#5A4C33] tracking-tight">
                    Statutory Defenses Against Criminal Threats, Arbitration &amp; Harassment
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                    When unsecured credit card balances enter default, recovery agents often fabricate false legal claims to induce panic. Armed with our specialized legal representation, cardholders enjoy comprehensive statutory shielding against all deceptive tactics:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                    <div className="p-5 rounded-xl border border-gray-200 bg-white">
                      <h4 className="font-bold text-gray-900 text-sm sm:text-base mb-1">
                        🚫 Defense Against False Arrest Threats
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        Defaulting on credit card payments is not a cognizable criminal offense under the Indian Penal Code or Bharatiya Nyaya Sanhita. Police authorities have no statutory jurisdiction to arrest, detain, or summon borrowers for unsecured debt defaults.
                      </p>
                    </div>

                    <div className="p-5 rounded-xl border border-gray-200 bg-white">
                      <h4 className="font-bold text-gray-900 text-sm sm:text-base mb-1">
                        ⚖️ Countering Unilateral Bank Arbitration
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        Banks frequently initiate unilateral arbitration proceedings in remote jurisdictions. We enter formal appearances, challenge biased arbitrator appointments under <Link href="/what-is-section-21-of-arbitration-and-conciliation-act" className="text-[#D2A02A] font-semibold hover:underline">Section 12 of the Arbitration and Conciliation Act</Link>, and redirect disputes to amicable settlement forums.
                      </p>
                    </div>

                    <div className="p-5 rounded-xl border border-gray-200 bg-white">
                      <h4 className="font-bold text-gray-900 text-sm sm:text-base mb-1">
                        🛡️ Section 25 PSS &amp; Section 138 NI Act Defense
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        If electronic NACH auto-debits bounce, banks may issue statutory notices. Our litigators draft comprehensive legal replies highlighting technical defects in mandate presentation and convert contentious proceedings into mutually accepted settlements.
                      </p>
                    </div>

                    <div className="p-5 rounded-xl border border-gray-200 bg-white">
                      <h4 className="font-bold text-gray-900 text-sm sm:text-base mb-1">
                        🏛️ Judicial Redress Before Consumer &amp; Civil Courts
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        For egregious recovery misconduct, we file formal complaints before the <a href="http://ncdrc.nic.in" target="_blank" rel="noopener noreferrer" className="text-[#D2A02A] font-bold hover:text-[#5A4C33] hover:underline">National Consumer Disputes Redressal Commission (NCDRC)</a> and jurisdictional magistrate courts seeking substantial damages for deficiency of service and harassment.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ================= SECTION 8: FEE TRANSPARENCY ================= */}
                <section id="fee-transparency" className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#5A4C33] tracking-tight">
                    Transparent Legal Retainer vs. Success Contingency Models
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                    Predatory debt settlement agencies often trap vulnerable borrowers with massive upfront charges, taking non-refundable advance fees while delivering negligible results. AMA Legal Solutions upholds the highest standard of commercial transparency and ethical advocacy:
                  </p>

                  <div className="p-6 rounded-2xl bg-gradient-to-br from-[#faf8f5] to-[#f4ede2] border border-[#D2A02A]/40 my-6 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <div className="inline-block bg-[#5A4C33] text-[#D2A02A] text-xs font-bold px-3 py-1 rounded-full uppercase">
                          Phase 1: Legal Protection Retainer
                        </div>
                        <h4 className="text-lg font-bold text-gray-900">Accessible Administrative Onboarding</h4>
                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                          A nominal administrative fee covers exhaustive forensic statement audits, drafting and serving statutory Cease-and-Desist notices across all creditor institutions, establishing legal privilege, and providing daily anti-harassment defense.
                        </p>
                      </div>

                      <div className="space-y-2">
                        <div className="inline-block bg-[#D2A02A] text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                          Phase 2: Success Contingency
                        </div>
                        <h4 className="text-lg font-bold text-gray-900">Performance-Driven Compensation</h4>
                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                          The primary legal fee is structured as a pre-agreed percentage of the actual financial savings achieved. If our advocates do not secure a discounted settlement that meets your approved budget, you owe zero performance fees. Our incentives remain perfectly aligned with yours.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* ================= SECTION 9: CIBIL REHABILITATION ================= */}
                <section id="cibil-credit-rehabilitation" className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#5A4C33] tracking-tight">
                    CIBIL Score Impact &amp; 24-Month Credit Score Rehabilitation
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                    Transparency regarding credit score consequences is a cornerstone of the best credit card debt settlement service. When a debt is settled through an OTS, credit rating agencies such as TransUnion CIBIL, Equifax, CRIF High Mark, and Experian record the trade line as <Link href="/difference-between-loan-settlement-and-loan-closure-impact-on-cibil" className="text-[#D2A02A] font-semibold hover:underline">"Settled"</Link> rather than "Closed", triggering an immediate credit score dip of 50 to 120 points.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                    However, maintaining an unresolved, compounding default is catastrophic to your financial future, accumulating fresh 90+ DPD (Days Past Due) delinquency marks and legal exposure every month. Once an OTS is concluded and the authentic No Dues Certificate is logged, the negative bleeding stops permanently.
                  </p>

                  <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 my-6">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3">
                      Proven 3-Step Protocol for 750+ Credit Recovery:
                    </h3>
                    <ol className="list-decimal pl-5 space-y-2 text-xs sm:text-sm text-gray-700">
                      <li>
                        <strong>Verify Credit Bureau Record Update:</strong> Submit your official bank No Dues Certificate to CIBIL and Experian within 45 days post-settlement to ensure outstanding balances reflect as zero and all write-off entries match the sanctioned letter.
                      </li>
                      <li>
                        <strong>Adopt a Secured Credit Card:</strong> Open a Fixed Deposit (FD) backed secured credit card (e.g., IDFC First WOW or SBI Unnati) with an FD of ₹25,000–₹50,000. Utilize under 30% of the limit monthly and pay every statement balance in full before the due date.
                      </li>
                      <li>
                        <strong>Diversify with Timely Small Installment Lines:</strong> Service utility bills, post-paid connections, or small consumer durables on time. Within 18 to 24 months of consistent on-time payment history, your credit score will systematically recover to the 750+ prime borrowing tier.
                      </li>
                    </ol>
                  </div>
                </section>

                {/* ================= SECTION 10: MORE LEGAL GUIDES ================= */}
                <section id="more-legal-guides" className="space-y-4 pt-6 border-t border-gray-100">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#5A4C33] tracking-tight">
                    More Legal Debt Relief Guides &amp; Resources
                  </h2>
                  <p className="text-gray-700 text-sm sm:text-base">
                    Explore our comprehensive repository of authoritative legal guides on debt resolution, anti-harassment statutes, and banking litigation across India:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5 my-4">
                    <Link
                      href="/credit-card-debt-settlement"
                      className="p-4 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:bg-amber-50/40 transition-all group bg-white shadow-xs"
                    >
                      <div className="text-xs font-bold text-[#D2A02A] mb-1">Core Advisory</div>
                      <div className="text-sm font-bold text-gray-900 group-hover:text-[#5A4C33]">Credit Card Debt Settlement &rarr;</div>
                      <p className="text-xs text-gray-500 mt-1">Complete statutory protection and OTS negotiation guide.</p>
                    </Link>

                    <Link
                      href="/how-to-settle-credit-card-debt"
                      className="p-4 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:bg-amber-50/40 transition-all group bg-white shadow-xs"
                    >
                      <div className="text-xs font-bold text-[#D2A02A] mb-1">Step-by-Step</div>
                      <div className="text-sm font-bold text-gray-900 group-hover:text-[#5A4C33]">How to Settle Credit Card Debt &rarr;</div>
                      <p className="text-xs text-gray-500 mt-1">Strategic steps to settle card debt legally without falling into traps.</p>
                    </Link>

                    <Link
                      href="/best-company-to-settle-credit-card-debt"
                      className="p-4 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:bg-amber-50/40 transition-all group bg-white shadow-xs"
                    >
                      <div className="text-xs font-bold text-[#D2A02A] mb-1">Service Comparison</div>
                      <div className="text-sm font-bold text-gray-900 group-hover:text-[#5A4C33]">Best Company to Settle Card Debt &rarr;</div>
                      <p className="text-xs text-gray-500 mt-1">Comparative breakdown of reputable debt settlement entities.</p>
                    </Link>

                    <Link
                      href="/top-credit-card-banks-offering-settlement-india"
                      className="p-4 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:bg-amber-50/40 transition-all group bg-white shadow-xs"
                    >
                      <div className="text-xs font-bold text-[#D2A02A] mb-1">Bank Policies</div>
                      <div className="text-sm font-bold text-gray-900 group-hover:text-[#5A4C33]">Top Credit Card Banks Offering OTS &rarr;</div>
                      <p className="text-xs text-gray-500 mt-1">Comprehensive waiver policies of private and PSU card issuers.</p>
                    </Link>

                    <Link
                      href="/multiple-credit-card-loan-settlement"
                      className="p-4 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:bg-amber-50/40 transition-all group bg-white shadow-xs"
                    >
                      <div className="text-xs font-bold text-[#D2A02A] mb-1">Multi-Card Portfolios</div>
                      <div className="text-sm font-bold text-gray-900 group-hover:text-[#5A4C33]">Multiple Credit Card Settlement &rarr;</div>
                      <p className="text-xs text-gray-500 mt-1">Strategic cascade settlement for cardholders facing 3+ card defaults.</p>
                    </Link>

                    <Link
                      href="/personal-loan-debt-settlement"
                      className="p-4 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:bg-amber-50/40 transition-all group bg-white shadow-xs"
                    >
                      <div className="text-xs font-bold text-[#D2A02A] mb-1">Personal Loans</div>
                      <div className="text-sm font-bold text-gray-900 group-hover:text-[#5A4C33]">Personal Loan Debt Settlement &rarr;</div>
                      <p className="text-xs text-gray-500 mt-1">Advocate representation for settling unsecured personal loans.</p>
                    </Link>

                    <Link
                      href="/how-to-stop-bank-recovery-agents-harassment-legally-in-india"
                      className="p-4 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:bg-amber-50/40 transition-all group bg-white shadow-xs"
                    >
                      <div className="text-xs font-bold text-[#D2A02A] mb-1">Legal Protection</div>
                      <div className="text-sm font-bold text-gray-900 group-hover:text-[#5A4C33]">Stop Recovery Agent Harassment &rarr;</div>
                      <p className="text-xs text-gray-500 mt-1">Immediate statutory steps to silence coercive recovery agents.</p>
                    </Link>

                    <Link
                      href="/does-loan-settlement-affect-cibil-score"
                      className="p-4 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:bg-amber-50/40 transition-all group bg-white shadow-xs"
                    >
                      <div className="text-xs font-bold text-[#D2A02A] mb-1">Credit Score Analysis</div>
                      <div className="text-sm font-bold text-gray-900 group-hover:text-[#5A4C33]">Does Settlement Affect CIBIL Score? &rarr;</div>
                      <p className="text-xs text-gray-500 mt-1">Facts, credit repair timelines, and rebuilding your credit rating.</p>
                    </Link>

                    <Link
                      href="/one-time-settlement-ots-legal-assistance"
                      className="p-4 rounded-xl border border-gray-200 hover:border-[#D2A02A] hover:bg-amber-50/40 transition-all group bg-white shadow-xs"
                    >
                      <div className="text-xs font-bold text-[#D2A02A] mb-1">OTS Legal Counsel</div>
                      <div className="text-sm font-bold text-gray-900 group-hover:text-[#5A4C33]">One Time Settlement Legal Assistance &rarr;</div>
                      <p className="text-xs text-gray-500 mt-1">End-to-end legal support for formal bank compromise schemes.</p>
                    </Link>
                  </div>
                </section>

                {/* ================= SECTION 11: FAQS ================= */}
                <section id="frequently-asked-questions" className="space-y-4 pt-6 border-t border-gray-100">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl text-[#D2A02A]">❓</span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#5A4C33] tracking-tight">
                      Frequently Asked Questions
                    </h2>
                  </div>
                  <p className="text-gray-700 text-sm sm:text-base">
                    Clear, authoritative legal answers regarding credit card debt settlement, borrower rights, and RBI compromise mechanisms:
                  </p>

                  <div className="space-y-3 my-6">
                    {faqs.map((faq, index) => {
                      const isOpen = openFaqIndex === index;
                      return (
                        <div
                          key={index}
                          className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-xs transition-colors"
                        >
                          <button
                            onClick={() => toggleFaq(index)}
                            className="w-full text-left p-4 sm:p-5 font-bold text-gray-900 text-sm sm:text-base flex justify-between items-center hover:text-[#D2A02A] transition-colors gap-4"
                            aria-expanded={isOpen}
                          >
                            <span>{faq.question}</span>
                            <span className="text-[#D2A02A] text-xl font-bold flex-shrink-0">
                              {isOpen ? "−" : "+"}
                            </span>
                          </button>
                          {isOpen && (
                            <div className="px-4 pb-5 sm:px-5 text-xs sm:text-sm text-gray-700 leading-relaxed border-t border-gray-100 pt-3 bg-amber-50/20">
                              <p>{faq.answer}</p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </section>

                {/* ================= STATUTORY REFERENCES & CITATIONS ================= */}
                <section className="pt-6 border-t border-gray-200 text-xs text-gray-500 space-y-2">
                  <div className="font-bold text-gray-700 uppercase tracking-wider">
                    Statutory Authorities &amp; Regulatory Sourcing
                  </div>
                  <p>
                    All legal assertions, dispute protocols, and settlement procedures are referenced under the{" "}
                    <a href="https://www.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold">
                      Reserve Bank of India Master Directions on Fair Practices Code
                    </a>
                    , the{" "}
                    <a href="https://bankingombudsman.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold">
                      RBI Integrated Ombudsman Scheme
                    </a>
                    , Section 138 of the Negotiable Instruments Act, 1881, Section 25 of the Payment and Settlement Systems Act, 2007, the Advocates Act, 1961, and appellate rulings of the{" "}
                    <a href="http://ncdrc.nic.in" target="_blank" rel="noopener noreferrer" className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold">
                      National Consumer Disputes Redressal Commission (NCDRC)
                    </a>
                    .
                  </p>
                </section>

                {/* ================= BOTTOM CTA BOX ================= */}
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
                  "Selecting AMA Legal Solutions was the best financial and legal decision I have ever made. After my export consultancy incurred massive losses, my 4 credit card balances across top private banks surged from ₹8 Lakhs to over ₹21 Lakhs because of predatory 48% finance charges and endless late penalties. Advocate Anuj Anand Malik and his team took immediate charge, stopped all illegal harassment calls within 24 hours through formal legal notices, and negotiated an official 68% One Time Settlement directly with the bank's zonal committee. I settled the entire debt for ₹6.7 Lakhs in convenient installments and received verified No Dues Certificates."
                </blockquote>

                <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                  <div className="w-9 h-9 rounded-full bg-[#5A4C33] text-[#D2A02A] flex items-center justify-center font-bold text-sm">
                    S
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-xs sm:text-sm">Siddharth Vardhan</div>
                    <div className="text-[11px] text-gray-500">Export Consultant &bull; Settled ₹21.4 Lakhs CC Dues</div>
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
                      Speak directly with an advocate to evaluate your credit card debt settlement savings.
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
                        placeholder="e.g. Siddharth Vardhan"
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
                          placeholder="siddharth@example.com"
                          className="w-full px-3.5 py-2.5 border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-[#D2A02A] focus:border-transparent outline-none transition"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">
                          Card Issuing Bank(s)
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
                          Total Card Outstanding
                        </label>
                        <input
                          type="text"
                          name="loanAmount"
                          value={formData.loanAmount}
                          onChange={handleInputChange}
                          placeholder="e.g. ₹8,50,000"
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
