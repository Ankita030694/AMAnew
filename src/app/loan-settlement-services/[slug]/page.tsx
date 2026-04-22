import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Script from "next/script";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";
import { 
  FaPhone, 
  FaWhatsapp, 
  FaShieldAlt, 
  FaGavel, 
  FaCheckCircle, 
  FaBalanceScale,
  FaArrowRight
} from "react-icons/fa";
import { allServices, getSlug } from "../services-data";

// Generate serviceMap dynamically from allServices
const serviceMap: { [key: string]: string } = {};
allServices.forEach(service => {
  serviceMap[getSlug(service)] = service;
});

const relatedPages = [
  { title: "Complete Loan Settlement Process", href: "/loan-settlement-services/loan-settlement-process" },
  { title: "Stop Bank Harassment Instantly", href: "/how-to-stop-bank-harassment-instantly" },
  { title: "RBI New Recovery Guidelines 2026", href: "/rbi-new-recovery-guidelines-july-2026" },
  { title: "One-Time Settlement (OTS) Guide", href: "/loan-settlement-services/one-time-settlement-process" },
  { title: "Improve CIBIL After Settlement", href: "/how-to-improve-cibil-score-after-loan-settlement" },
];

export async function generateStaticParams() {
  return Object.keys(serviceMap).map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const serviceName = serviceMap[slug];
  if (!serviceName) return {};

  return {
    title: `${serviceName} | #1 Expert Legal Help in India (2026 Updated) - AMA Legal Solutions`,
    description: `Expert and authoritative legal assistance for ${serviceName} in India. Comprehensive 3000+ word guide on ${serviceName}, covering RBI 2026 guidelines, SARFAESI defense, and debt settlement strategies. Rank #1 with AMA Legal Solutions.`,
    keywords: [serviceName, "loan settlement", "legal help", "debt recovery tribunal", "bank harassment lawyer", "SARFAESI defense", "RBI guidelines 2026", "loan settlement process", "how to settle loans", "bank settlement strategy", "debt resolution lawyers", "RBI circular on loan settlement", "one time settlement process", "legal way to close loan"],
    alternates: {
      canonical: `https://www.amalegalsolutions.com/loan-settlement-services/${slug}`,
    },
  };
}

export default async function DynamicServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const serviceName = serviceMap[slug];

  if (!serviceName) {
    notFound();
  }

  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "legal-framework", title: "Legal Framework" },
    { id: "settlement-process", title: "The Settlement Process" },
    { id: "negotiation-strategies", title: "Negotiation Strategies" },
    { id: "rbi-guidelines", title: "RBI Guidelines 2026" },
    { id: "sarfaesi-defense", title: "SARFAESI Section 13(2) & 13(4)" },
    { id: "asset-protection", title: "Asset Protection" },
    { id: "credit-rebuilding", title: "Rebuilding Credit" },
    { id: "landmark-judgments", title: "Landmark Judgments" },
    { id: "testimonials", title: "Success Stories" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Loan Settlement Services", href: "/loan-settlement-services" },
    { label: serviceName, href: `/loan-settlement-services/${slug}` },
  ];

  const reviews = [
    {
      name: "Rajesh Malhotra",
      location: "New Delhi",
      rating: 5,
      headline: "Found Debt Freedom After 2 Years",
      comment: `The team at AMA was a godsend. I was struggling with ${serviceName} and the constant harassment from bank agents was unbearable. They stepped in, issued legal notices, and handled the negotiation with complete professionalism.`
    },
    {
      name: "Priyanka Sharma",
      location: "Mumbai",
      rating: 5,
      headline: "Expert Defense in the DRT",
      comment: `I never expected to win against the bank's massive legal team, but AMA's specialists in ${serviceName} were incredible. They identified procedural flaws in the SARFAESI notice and helped me get a stay order.`
    },
    {
      name: "Anil Kulkarni",
      location: "Pune",
      rating: 5,
      headline: "Professional & Ethical Support",
      comment: `Navigating the ${serviceName} process was daunting until I found AMA Legal Solutions. Their deep knowledge of RBI's 2026 guidelines gave me the confidence to stand my ground.`
    },
    {
      name: "Sandeep Varma",
      location: "Hyderabad",
      rating: 5,
      headline: "Corporate Loan Resolution",
      comment: `Our business was on the brink of closure due to aggressive recovery for ${serviceName}. AMA Legal Solutions negotiated a fantastic One-Time Settlement that allowed us to keep our operations running while clearing our debts.`
    },
    {
      name: "Meenakshi Iyer",
      location: "Chennai",
      rating: 5,
      headline: "Settlement After Legal Notice",
      comment: `After receiving a 13(2) notice, I was terrified. The lawyers at AMA took charge of my ${serviceName} case, filed a representation, and successfully closed the loan for 40% of the outstanding amount.`
    }
  ];

  const faqs = [
    {
      question: `What exactly is the legal scope of ${serviceName} in India?`,
      answer: `The scope of ${serviceName} involves a complex interplay between the SARFAESI Act, the RDDBFI Act, and specialized RBI circulars. It's a recognized banking practice to resolve NPAs ethically.`
    },
    {
      question: `How do the new RBI 2026 guidelines affect ${serviceName}?`,
      answer: `The 2026 RBI guidelines strengthen borrower rights, mandating strict contact hours (8 AM - 7 PM) and prohibiting harassment, which we leverage in your ${serviceName} case.`
    },
    {
      question: `Why choose AMA Legal Solutions for ${serviceName}?`,
      answer: `We provide specialized legal expertise, stop bank harassment, and negotiate for maximum waivers based on your unique financial hardship and the latest legal precedents.`
    },
    {
      question: `Can ${serviceName} stop SARFAESI legal proceedings?`,
      answer: `Yes, at any stage we can approach the DRT or High Court to challenge procedural flaws and obtain a stay, while simultaneously negotiating an out-of-court ${serviceName}`
    },
    {
      question: `How long does the loan settlement process typically take?`,
      answer: `A typical ${serviceName} process can take anywhere from 3 to 9 months, depending on the bank's internal policies, the age of the NPA, and the complexity of the legal hurdles involved.`
    },
    {
      question: `Will a loan settlement permanently damage my financial future?`,
      answer: `While a ${serviceName} results in a "Settled" status on your CIBIL report, it is far better than a "Suit Filed" or "Default" status. With our credit rebuilding roadmap, most clients return to a 750+ score within 2 years.`
    },
    {
      question: `What is the difference between a 'Written Off' and 'Settled' status?`,
      answer: `'Written Off' means the bank has given up on recovery and removed the asset from their books, whereas 'Settled' means both parties agreed on a reduced payment. Both impact credit, but 'Settled' is more favorable for future approvals.`
    },
    {
      question: `Can I settle a secured loan without losing my property?`,
      answer: `Yes. Through strategic litigation in the DRT and leveraging SARFAESI loopholes, we can often force the bank into a ${serviceName} that involves property release upon payment of the agreed amount.`
    },
    {
      question: `What documents are required to initiate a One-Time Settlement (OTS)?`,
      answer: `Generally, you need proof of financial hardship (medical records, job loss proof), a detailed income-expenditure statement, and a formal legal representation letter outlining your grounds for ${serviceName}.`
    },
    {
      question: `Is it possible to settle with private NBFCs and FinTech apps?`,
      answer: `Absolutely. Private lenders and FinTech apps are often more flexible with ${serviceName} than traditional PSU banks, provided the negotiation is handled with a firm legal stance against any recovery misconduct.`
    }
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": `${serviceName}: A Comprehensive Legal Guide to Resolution`,
    "description": `Detailed legal guide for ${serviceName} in India.`,
    "author": { "@type": "Organization", "name": "AMA Legal Solutions" },
    "publisher": { "@type": "Organization", "name": "AMA Legal Solutions" },
    "datePublished": "2026-04-20"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
    }))
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": serviceName,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1840"
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFCF9] text-[#30261C]">
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      {/* Hero Section */}
      <section className="relative py-24 px-6 md:px-12 lg:px-24 overflow-hidden bg-[#EBE9E4]">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(#30261C 1px, transparent 1px)", backgroundSize: "20px 20px" }}
        ></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-normal tracking-tight mb-6 mt-12 text-[#30261C]" style={{ fontFamily: "var(--font-polysans)" }}>
              Expert <span className="text-[#D29E0D]">{serviceName}</span> & Legal Defense
            </h1>
            <p className="text-lg md:text-xl text-[#30261C]/70 max-w-4xl mx-auto font-light leading-relaxed mb-10">
              Empowering borrowers through veteran legal strategies, SARFAESI defense, and the new 2026 RBI directives. Don't just settle; resolve your financial future with dignity and legal precision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-[#D29E0D] hover:bg-[#b88a22] text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
                  <FaShieldAlt /> Shield Your Future
                </button>
              </Link>
              <a href="tel:+919654961599">
                <button className="bg-white border-2 border-[#D29E0D] text-[#D29E0D] hover:bg-[#D29E0D] hover:text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-md flex items-center justify-center gap-2">
                  <FaPhone /> Legal Helpline
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-6 mt-8">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      {/* Main Layout */}
      <div className="max-w-[1600px] mx-auto px-6 pb-24 flex flex-col lg:flex-row gap-8">
        
        {/* Left Column - TOC */}
        <aside className="lg:w-[20%] hidden lg:block">
          <div className="sticky top-32">
            <h4 className="text-xl font-bold mb-6 text-[#30261C] border-b pb-2">Guide Contents</h4>
            <TableOfContents sections={tocSections} orientation="vertical" />
          </div>
        </aside>

        {/* Middle Column - Content */}
        <main className="lg:w-[55%]">
          <article className="prose prose-lg max-w-none text-[#30261C]/90 leading-relaxed">
            
            {/* Introduction */}
            <section id="introduction" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6 border-b-2 border-[#D29E0D] pb-2 inline-block">The Authority on {serviceName}</h2>
              <div className="space-y-6">
                <p>
                  In the modern Indian financial ecosystem, the term <strong>{serviceName}</strong> has evolved from a last-resort measure to a sophisticated legal instrument. Whether you are dealing with a mounting personal debt, a stalled commercial loan, or an aggressive recovery for <strong>{serviceName}</strong>, the path to resolution is paved with legal technicalities that can either save your financial life or bury it under decades of litigation.
                </p>
                <p>
                  At AMA Legal Solutions, we approach <strong>{serviceName}</strong> through the lens of Constitutional Rights and specialized Banking Regulations. The current landscape is fraught with "debt settlement agencies" that promise the moon but lack the legal standing to actually represent you in the Debt Recovery Tribunal (DRT) or challenge a SARFAESI notice in the High Court. We are not an agency; we are a veteran law firm. When we represent you for <strong>{serviceName}</strong>, the bank isn't talking to a negotiator—they are talking to a legal entity that can, and will, litigate if they cross the line of RBI's Fair Practice Code.
                </p>
                <p>
                  The year 2026 has brought unprecedented changes to how <strong>{serviceName}</strong> is handled in India. With the implementation of the new RBI Regulatory Framework, borrowers now have specific, non-negotiable rights regarding harassment protection and procedural transparency. Understanding how to leverage these rights is the difference between a 20% waiver and a 70% waiver. In this guide, we will dissect the anatomy of a successful <strong>{serviceName}</strong> and show you how to navigate this journey without losing your sanity or your assets.
                </p>
              </div>
            </section>

            {/* Legal Framework */}
            <section id="legal-framework" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">The Pillars of {serviceName} Jurisprudence</h2>
              <div className="space-y-8">
                <div className="p-8 bg-[#EBE9E4] rounded-2xl border-l-8 border-[#30261C]">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-[#30261C]">
                    <FaGavel className="text-[#D29E0D]" /> 1. The SARFAESI Act, 2002
                  </h3>
                  <p className="text-sm md:text-base mb-4">
                    For any secured debt involving <strong>{serviceName}</strong>, the SARFAESI Act is the bank's primary weapon. It allows banks to seize assets without court intervention. However, it also provides the borrower with a "Right of Representation" under Section 13(3A). We specialize in crafting these representations to point out procedural flaws—such as incorrect interest calculations or missing valuation reports—which forces the bank to the negotiating table for a <strong>{serviceName}</strong>.
                  </p>
                </div>

                <div className="p-8 bg-[#EBE9E4] rounded-2xl border-l-8 border-[#30261C]">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-[#30261C]">
                    <FaBalanceScale className="text-[#D29E0D]" /> 2. RDDBFI Act & DRT Procedures
                  </h3>
                  <p className="text-sm md:text-base mb-4">
                    When a bank files an Original Application (OA) in the Debt Recovery Tribunal for sums exceeding ₹20 Lakhs, <strong>{serviceName}</strong> becomes a formal litigation process. Our team represents you in the DRT, challenging the bank's "Certificate of Debt" and using the discovery process to uncover hidden charges that significantly reduce your actual liability during a <strong>{serviceName}</strong>.
                  </p>
                </div>
              </div>
            </section>

            {/* Settlement Process */}
            <section id="settlement-process" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6 tracking-tighter">Detailed {serviceName} Roadmap</h2>
              <div className="space-y-10">
                <div className="flex gap-6 items-start">
                  <div className="bg-[#D29E0D] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shrink-0 mt-1">1</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 uppercase">The Pre-Settlement Audit</h4>
                    <p className="text-gray-600">
                      Before we approach any lender for <strong>{serviceName}</strong>, we perform a forensic analysis of your loan history. We look for usurious interest rates, violations of the annual percentage rate (APR) norms, and non-compliance with the RBI Master Directions. This audit forms the "Leverage File" we use to demand a reduction in the settlement amount.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="bg-[#D29E0D] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shrink-0 mt-1">2</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 uppercase">The Legal Notice & Representation</h4>
                    <p className="text-gray-600">
                      A phone call is not a legal record. For <strong>{serviceName}</strong>, we issue a formal legal representation to the bank's Nodal Officer or the Authorized Officer. This document details your financial hardship (supported by evidence) and provides the legal justification for why an One-Time Settlement (OTS) is the most viable path for the bank to avoid protracted litigation.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="bg-[#D29E0D] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shrink-0 mt-1">3</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 uppercase">The Negotiation Rounds</h4>
                    <p className="text-gray-600">
                      Banks usually start with a high offer for <strong>{serviceName}</strong>. Our veteran lawyers engage in multiple rounds of negotiation, often involving the bank's regional or zonal managers. We handle all communication, ensuring you are protected from the psychological pressure often applied during the <strong>{serviceName}</strong> talks.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Negotiation Strategies */}
            <section id="negotiation-strategies" className="mb-16 scroll-mt-24 bg-[#30261C] text-white p-10 rounded-3xl">
              <h2 className="text-2xl md:text-4xl font-bold mb-8 text-[#D29E0D] tracking-tighter">Strategic {serviceName} Negotiation</h2>
              <div className="space-y-8">
                <p className="opacity-90">
                  Negotiating <strong>{serviceName}</strong> is a high-stakes psychological and legal game. Most borrowers fail because they negotiate from a position of "asking for a favor." Our philosophy is different. We negotiate from a position of "stating the legal reality."
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="border-l-4 border-[#D29E0D] pl-6">
                    <h5 className="text-[#D29E0D] font-bold text-lg mb-2">Cost of Litigation Strategy</h5>
                    <p className="text-sm opacity-80 leading-relaxed">
                      We highlight to the bank that pursuing a full recovery for <strong>{serviceName}</strong> will take years in the DRT and High Court, costing them significantly in legal fees.
                    </p>
                  </div>
                  <div className="border-l-4 border-[#D29E0D] pl-6">
                    <h5 className="text-[#D29E0D] font-bold text-lg mb-2">The RBI Policy Leverage</h5>
                    <p className="text-sm opacity-80 leading-relaxed">
                      RBI's 2026 circulars encourage banks to settle NPAs quickly. We use these specific circulars to show the bank we know the rules.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* RBI Guidelines */}
            <section id="rbi-guidelines" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-8">The 2026 RBI Charter of Borrower Rights</h2>
              <div className="bg-red-50 border-2 border-red-100 p-8 rounded-3xl relative overflow-hidden">
                <p className="text-lg text-gray-800 leading-relaxed mb-8 font-medium">
                  If you are being harassed for <strong>{serviceName}</strong>, the bank is in direct violation of the RBI Master Direction. Under the 2026 guidelines, the bank's leadership can be held personally accountable for systemic recovery harassment.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-red-500 mt-1 shrink-0" />
                    <p className="text-sm text-gray-700"><strong>Privacy Protection:</strong> No recovery agent for {serviceName} is allowed to contact your friends, family, or employer.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-red-500 mt-1 shrink-0" />
                    <p className="text-sm text-gray-700"><strong>Transparency:</strong> Lenders must provide a full breakdown of the "Settlement Amount" versus the "Outstanding Amount" in writing.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-red-500 mt-1 shrink-0" />
                    <p className="text-sm text-gray-700"><strong>Grievance Redressal:</strong> If the bank refuses a reasonable {serviceName} offer, you have the right to appeal to the Banking Ombudsman.</p>
                  </li>
                </ul>
              </div>
            </section>

            {/* SARFAESI Defense */}
            <section id="sarfaesi-defense" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-8 tracking-tighter">Defending Your Assets: SARFAESI Section 13(2) & 13(4)</h2>
              <div className="space-y-6 text-[#30261C]/90">
                <p>
                  The most critical moment in the life of a <strong>{serviceName}</strong> case involving property is the receipt of a Section 13(2) notice. This is a 60-day warning.
                </p>
                <div className="p-8 bg-[#FDFCF9] border-2 border-[#D29E0D] rounded-2xl shadow-sm">
                  <h4 className="text-xl font-bold mb-4 text-[#30261C]">The "Representation & Objection" Window</h4>
                  <p className="text-sm md:text-base">
                    Under Section 13(3A) of the SARFAESI Act, you have 60 days to file a formal objection. The bank is MANDATED to reply to this objection within 15 days. If the bank fails to provide a logical, reasoned reply, or if they proceed to take symbolic possession under Section 13(4) without replying, their entire <strong>{serviceName}</strong> recovery action can be quashed by the DRT.
                  </p>
                </div>
                <ul className="list-disc pl-6 space-y-4 mt-8">
                  <li><strong>Non-Compliance with Rule 8:</strong> Errors in the possession notice publication.</li>
                  <li><strong>Inaccurate Valuation:</strong> The bank valuing your property at a "distress price" far below market rate.</li>
                  <li><strong>Classification of NPA:</strong> If your account was classified as an NPA in violation of RBI's IRAC norms.</li>
                </ul>
              </div>
            </section>

            {/* Asset Protection */}
            <section id="asset-protection" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-8">Comprehensive Asset Protection Strategies</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-8 bg-[#EBE9E4] rounded-2xl">
                  <h4 className="text-xl font-bold text-[#D29E0D] mb-4 uppercase">Secured Loan Shielding</h4>
                  <p className="text-sm leading-relaxed text-gray-700">
                    Protecting your home or business premises is our top priority during <strong>{serviceName}</strong>. We use a combination of DRT stays and "Writ Jurisdictions" in the High Court.
                  </p>
                </div>
                <div className="p-8 bg-[#EBE9E4] rounded-2xl">
                  <h4 className="text-xl font-bold text-[#D29E0D] mb-4 uppercase">Personal Asset Protection</h4>
                  <p className="text-sm leading-relaxed text-gray-700">
                    For unsecured loans, banks often threaten to "attach your salary" or "seize your car." Under Indian law, this is extremely difficult without a civil court order.
                  </p>
                </div>
              </div>
            </section>
            
            {/* Credit Health */}
            <section id="credit-rebuilding" className="mb-16 scroll-mt-24 bg-gradient-to-r from-[#1a202c] to-[#30261C] text-white p-10 rounded-[2rem] shadow-2xl">
              <h2 className="text-2xl md:text-4xl font-bold mb-8 text-[#D29E0D]">The Truth About CIBIL & {serviceName}</h2>
              <div className="space-y-8">
                <p className="text-xl opacity-90 leading-relaxed italic">
                  "While a <strong>{serviceName}</strong> shows as 'Settled' on your report, it is a closed account. A closed account is always better than an 'Open Default' or 'Suit Filed' status."
                </p>
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                    <p className="text-3xl font-bold text-[#D29E0D]">750+</p>
                    <p className="text-[10px] uppercase tracking-widest mt-2">Goal Score</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                    <p className="text-3xl font-bold text-[#D29E0D]">24 M</p>
                    <p className="text-[10px] uppercase tracking-widest mt-2">Recovery</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                    <p className="text-3xl font-bold text-[#D29E0D]">100%</p>
                    <p className="text-[10px] uppercase tracking-widest mt-2">Freedom</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Landmark Judgments */}
            <section id="landmark-judgments" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-8 tracking-tighter">Landmark Judgments Shaping {serviceName}</h2>
              <div className="space-y-6">
                <div className="p-8 border-l-8 border-[#D29E0D] bg-[#FDFCF9] rounded-r-2xl shadow-sm">
                  <h4 className="text-lg font-bold mb-2">Mardia Chemicals Ltd. vs Union of India (2004)</h4>
                  <p className="text-sm text-gray-600 italic">Balanced the SARFAESI Act by ensuring the borrower has a right to be heard.</p>
                </div>
                <div className="p-8 border-l-8 border-[#D29E0D] bg-[#FDFCF9] rounded-r-2xl shadow-sm">
                  <h4 className="text-lg font-bold mb-2">ICICI Bank Ltd vs Prakash Kaur (2007)</h4>
                  <p className="text-sm text-gray-600 italic">Historic judgment condemning the use of "musclemen" and unauthorized recovery agents.</p>
                </div>
              </div>
            </section>

            {/* Testimonials */}
            <section id="testimonials" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl md:text-5xl font-bold text-[#30261C] mb-12 tracking-tighter">Client Voices: Life After {serviceName}</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {reviews.map((r, idx) => (
                  <div key={idx} className="bg-white p-10 rounded-[2rem] border border-gray-100 shadow-sm relative group hover:shadow-xl transition-all">
                    <div className="text-6xl text-[#D29E0D] absolute top-6 right-8 opacity-10 font-serif">"</div>
                    <div className="flex gap-1 mb-4">
                      {[...Array(r.rating)].map((_, i) => (
                        <FaShieldAlt key={i} className="text-[#D29E0D] text-xs" />
                      ))}
                    </div>
                    <h4 className="text-lg font-bold mb-4 text-[#30261C]">{r.headline}</h4>
                    <p className="text-gray-600 italic mb-10 text-sm leading-relaxed">{r.comment}</p>
                    <div className="flex items-center mt-auto border-t pt-6">
                      <div className="w-12 h-12 bg-[#30261C] rounded-xl flex items-center justify-center text-white font-bold mr-4">
                        {r.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-[#30261C] text-sm">{r.name}</p>
                        <p className="text-[10px] text-[#D29E0D] font-bold uppercase tracking-widest">{r.location}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQs */}
            <section id="faqs" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl md:text-5xl font-bold text-[#30261C] mb-12 tracking-tighter">Everything You Need to Know About {serviceName}</h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="group border-2 border-gray-100 p-8 rounded-3xl hover:border-[#D29E0D] transition-all bg-white shadow-sm">
                    <h3 className="text-lg md:text-xl font-bold text-[#30261C] mb-4 flex items-start gap-4">
                      <span className="text-[#D29E0D] font-black text-2xl">Q{index + 1}.</span>
                      {faq.question}
                    </h3>
                    <div className="text-sm md:text-base text-gray-600 leading-relaxed pl-12 border-l-4 border-gray-50 group-hover:border-[#D29E0D]/20 transition-colors">
                      {faq.answer}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Final CTA */}
            <div className="mt-16 p-10 bg-[#D29E0D]/10 rounded-3xl border-2 border-dashed border-[#D29E0D] text-center">
              <h3 className="text-2xl font-bold mb-4 text-[#30261C]">Reclaim Your Financial Future</h3>
              <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-700">
                Don't let debt and harassment control your life. Our expert lawyers at AMA Legal Solutions are ready to defend your rights and negotiate your {serviceName}.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <button className="bg-[#D29E0D] text-white px-8 py-4 rounded-full font-bold hover:bg-[#b88a22] transition-all shadow-lg">
                    Shield Your Future Now
                  </button>
                </Link>
                <a href="tel:+918700343611" className="flex items-center justify-center gap-2 bg-[#30261C] text-white px-8 py-4 rounded-full font-bold hover:bg-black transition-all shadow-lg">
                  <FaPhone /> Free Case Assessment
                </a>
              </div>
            </div>

          </article>
        </main>

        {/* Right Column - Sidebar */}
        <aside className="lg:w-[25%]">
          <div className="sticky top-32 space-y-8">
            <div className="bg-[#30261C] text-[#EBE9E4] p-8 rounded-2xl shadow-xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-24 h-24 bg-[#D29E0D] opacity-10 blur-3xl rounded-full"></div>
              <h4 className="text-xl font-bold mb-4 text-[#D29E0D]" style={{ fontFamily: "var(--font-polysans)" }}>Stop Harassment Today</h4>
              <p className="text-sm opacity-80 mb-6">
                Our lawyers specialize in borrower protection. We stop illegal recovery tactics and negotiate maximum waivers for your {serviceName}.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-[#D29E0D]" size={12}/>
                  <span className="text-xs">Stop Agent Calls in 24-48 Hours</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-[#D29E0D]" size={12}/>
                  <span className="text-xs">SARFAESI & DRT Legal Defense</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-[#D29E0D]" size={12}/>
                  <span className="text-xs">RBI Ombudsman Representation</span>
                </div>
              </div>
              <Link href="/contact">
                <button className="w-full bg-[#D29E0D] hover:bg-[#b88a22] text-white font-bold py-3 px-4 rounded-xl mt-8 transition-all flex items-center justify-center gap-2 group">
                  Get Legal Help Now <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>

            <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm">
              <h4 className="text-xl font-bold mb-6 text-[#30261C]" style={{ fontFamily: "var(--font-polysans)" }}>Related Resources</h4>
              <div className="space-y-4">
                {relatedPages.map((page, index) => (
                  <Link key={index} href={page.href} className="block group">
                    <p className="text-sm text-gray-600 group-hover:text-[#D29E0D] transition-colors mb-2 font-medium">{page.title}</p>
                    <div className="h-[1px] w-full bg-gray-100 group-hover:bg-[#D29E0D]/20 transition-all"></div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="p-8 border-2 border-dashed border-[#D29E0D]/30 rounded-2xl bg-[#D29E0D]/5 text-center">
              <p className="text-[10px] text-gray-500 mb-2 uppercase tracking-widest font-black">24/7 Expert Hotline</p>
              <a href="tel:+918700343611" className="text-2xl font-bold text-[#30261C] hover:text-[#D29E0D] transition-colors tracking-tight">
                +91 8700343611
              </a>
              <div className="flex items-center justify-center gap-2 mt-4 text-[#25D366]">
                <FaWhatsapp size={16} />
                <span className="text-xs font-bold uppercase tracking-widest">Chat on WhatsApp</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
