import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "./FaqSection";
import { faqs } from "./faqs";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import { FaHome, FaBuilding, FaHandHoldingUsd, FaGavel, FaFileContract, FaChartLine, FaShieldAlt, FaPhoneAlt, FaBalanceScale, FaExclamationTriangle, FaUserTie, FaRegCheckCircle, FaBook, FaLandmark, FaMoneyBillWave } from "react-icons/fa";
import { MdRealEstateAgent, MdBusinessCenter, MdMoneyOff, MdTimeline, MdWarning } from "react-icons/md";

// Metadata
export const metadata = {
  title: "Piramal Finance Loan Settlement | Housing & Business Loan OTS | AMA Legal Solutions",
  description: "Struggling with Piramal Finance loan repayment? Expert legal help for settling Housing Loans, Business Loans, and Personal Loans. Stop SARFAESI and harassment.",
  alternates: {
    canonical: 'https://amalegalsolutions.com/services/loan-settlement/piramal-finance',
  },
  openGraph: {
    title: "Piramal Finance Loan Settlement | Housing & Business Loan OTS | AMA Legal Solutions",
    description: "Struggling with Piramal Finance loan repayment? Expert legal help for settling Housing Loans, Business Loans, and Personal Loans. Stop SARFAESI and harassment.",
    url: "https://amalegalsolutions.com/services/loan-settlement/piramal-finance",
    type: "website",
    images: [
      {
        url: "/services/7.png",
        width: 1200,
        height: 630,
        alt: "Piramal Finance Loan Settlement Services",
      },
    ],
  },
};

// Schemas
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://amalegalsolutions.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://amalegalsolutions.com/services"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Loan Settlement",
      "item": "https://amalegalsolutions.com/services/loan-settlement"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Piramal Finance Loan Settlement",
      "item": "https://amalegalsolutions.com/services/loan-settlement/piramal-finance"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Piramal Finance Loan Settlement: A Comprehensive Guide to OTS and Debt Relief",
  "description": "An in-depth guide on how to settle your Piramal Finance housing or business loan through the One Time Settlement (OTS) scheme. Learn about SARFAESI, arbitration, and your legal rights.",
  "image": "https://amalegalsolutions.com/services/7.png",
  "author": {
    "@type": "Organization",
    "name": "AMA Legal Solutions",
    "url": "https://amalegalsolutions.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "AMA Legal Solutions",
    "logo": {
      "@type": "ImageObject",
      "url": "https://amalegalsolutions.com/ama-legal-solutions-logo.png"
    }
  },
  "datePublished": "2023-11-24",
  "dateModified": "2023-11-24"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Piramal Finance Loan Settlement Services",
  "image": "https://amalegalsolutions.com/services/7.png",
  "description": "Legal settlement services for Piramal Finance loans.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "156"
  },
  "review": [
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Vikram Singh"
      },
      "reviewBody": "I was facing a SARFAESI notice for my home loan from Piramal. AMA Legal Solutions intervened and helped me restructure and settle the dues. Saved my home."
    }
  ]
};

export default function PiramalFinanceLoanSettlementPage() {
  const tocSections = [
    { id: "introduction", title: "About Piramal Finance" },
    { id: "npa-stages", title: "Understanding Default (NPA)" },
    { id: "legal-framework", title: "Legal Actions (SARFAESI/Arbitration)" },
    { id: "housing-loans", title: "Housing Loan Settlement" },
    { id: "business-loans", title: "Business Loan Settlement" },
    { id: "personal-loans", title: "Personal Loan Settlement" },
    { id: "ots-scheme", title: "One Time Settlement (OTS)" },
    { id: "why-legal-help", title: "Why You Need a Lawyer" },
    { id: "process", title: "Our Settlement Process" },
    { id: "rbi-guidelines", title: "RBI Guidelines & Rights" },
    { id: "cibil-impact", title: "CIBIL Score Impact" },
    { id: "documents", title: "Required Documents" },
    { id: "comparison", title: "Settlement vs Restructuring" },
    { id: "testimonials", title: "Success Stories" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Loan Settlement", href: "/services/loan-settlement" },
    { label: "Piramal Finance", href: "/services/loan-settlement/piramal-finance" },
  ];

  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      <div className="bg-white min-h-screen font-sans text-gray-800">
        
        {/* Hero Section */}
        <div className="relative bg-[#2D2D2D] text-white overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#D84315] to-[#BF360C] opacity-90"></div>
          <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-3/5">
                <div className="inline-block bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase">
                  Housing & Business Debt Relief
                </div>
                <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                  Settle Your <span className="text-[#FFCCBC]">Piramal Finance</span> Loan Legally
                </h1>
                <p className="text-xl text-white/90 mb-10 leading-relaxed max-w-2xl">
                  Facing SARFAESI notices, arbitration, or harassment? We specialize in negotiating One Time Settlements (OTS) for Piramal Finance housing, business, and personal loans.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="px-8 py-4 bg-white text-[#D84315] font-bold rounded-lg transition-all shadow-lg hover:bg-gray-100 hover:shadow-xl transform hover:-translate-y-1">
                    Get Free Advice
                  </Link>
                  <a href="tel:+918700343611" className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2">
                    <FaPhoneAlt /> +91-8700343611
                  </a>
                </div>
              </div>
              <div className="md:w-2/5 hidden md:block">
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-2xl">
                  <div className="flex items-center gap-4 mb-6 border-b border-white/20 pb-4">
                    <FaShieldAlt className="text-4xl text-[#FFCCBC]" />
                    <div>
                      <h3 className="font-bold text-xl">Legal Protection</h3>
                      <p className="text-sm text-white/70">Against Harassment & Seizure</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Housing Loans</span>
                      <span className="bg-green-500/20 text-green-100 px-2 py-1 rounded text-xs">SARFAESI Expert</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Business Loans</span>
                      <span className="bg-green-500/20 text-green-100 px-2 py-1 rounded text-xs">Arbitration Defense</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Personal Loans</span>
                      <span className="bg-green-500/20 text-green-100 px-2 py-1 rounded text-xs">Harassment Stop</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-12 py-12">
          {/* Sidebar Navigation - Vertical */}
          <div className="lg:w-1/4 hidden lg:block">
            <div className="sticky top-24">
              <TableOfContents sections={tocSections} orientation="vertical" />
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            
            {/* Introduction */}
            <section id="introduction" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Piramal Finance: The New Giant & The DHFL Legacy</h2>
              <div className="bg-gray-50 rounded-2xl p-8 border-l-4 border-[#D84315] mb-8">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  <strong>Piramal Capital & Housing Finance Limited (PCHFL)</strong>, now branded as <strong>Piramal Finance</strong>, is a behemoth in the Indian lending space. Their massive footprint is largely due to the acquisition of the bankrupt <strong>Dewan Housing Finance Corporation Limited (DHFL)</strong> in 2021. This merger created one of the largest Housing Finance Companies (HFCs) in India.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  <strong>For DHFL Borrowers:</strong> If you took a loan from DHFL years ago, you are now a customer of Piramal Finance. Many legacy borrowers are confused by the sudden change in aggressive recovery tactics. The "friendly" local DHFL branch approach has been replaced by Piramal's corporate, process-driven recovery mechanism.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  <strong>For New Borrowers:</strong> Piramal has aggressively expanded into "Digital Personal Loans" and "Small Business Loans" in Tier 2/3 cities. They use advanced data analytics to assess credit, but their recovery process is equally advanced and stringent.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Whether you are an old DHFL customer facing a sudden SARFAESI notice or a new borrower trapped in a high-interest personal loan, understanding Piramal's specific legal strategy is key to saving your assets. AMA Legal Solutions specializes in navigating this specific corporate structure to secure favorable settlements.
                </p>
              </div>
            </section>

            {/* NPA Stages */}
            <section id="npa-stages" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Understanding Loan Default: The Road to NPA</h2>
              <p className="text-gray-700 mb-6">
                Many borrowers panic when they miss a single EMI. It is important to understand the timeline of default classification by the RBI, as this dictates the legal actions Piramal Finance can take.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <h3 className="text-xl font-bold text-[#D84315] mb-2">SMA-0 (0-30 Days)</h3>
                  <p className="text-gray-600">
                    If you miss an EMI, your account is flagged as Special Mention Account-0. You will receive reminder calls and SMS. There is no legal action at this stage, but late fees apply.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <h3 className="text-xl font-bold text-[#D84315] mb-2">SMA-1 (31-60 Days)</h3>
                  <p className="text-gray-600">
                    If the payment is overdue by more than 30 days, recovery efforts intensify. Field agents may visit your address. It is crucial to communicate your difficulty to the bank now.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <h3 className="text-xl font-bold text-[#D84315] mb-2">SMA-2 (61-90 Days)</h3>
                  <p className="text-gray-600">
                    This is the critical warning zone. The bank prepares for legal classification. You might receive a Loan Recall Notice asking you to pay the full amount.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-red-200 bg-red-50">
                  <h3 className="text-xl font-bold text-red-600 mb-2">NPA (90+ Days)</h3>
                  <p className="text-gray-600">
                    <strong>Non-Performing Asset.</strong> The loan is officially defaulted. Piramal Finance can now initiate SARFAESI (for property) or Arbitration (for unsecured loans). Settlement discussions usually begin seriously after this stage.
                  </p>
                </div>
              </div>
            </section>

            {/* Legal Framework */}
            <section id="legal-framework" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">The Legal Arsenal: SARFAESI & Arbitration</h2>
              <div className="space-y-12">
                
                {/* SARFAESI Deep Dive */}
                <div className="bg-[#FFF3E0] p-8 rounded-2xl border border-[#FFE0B2]">
                  <div className="flex items-center gap-3 mb-6">
                    <FaHome className="text-4xl text-[#E65100]" />
                    <h3 className="text-2xl font-bold text-[#E65100]">1. The SARFAESI Act (For Housing/LAP)</h3>
                  </div>
                  <p className="text-gray-800 mb-6 text-lg">
                    The <strong>Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest Act, 2002</strong> is the most powerful tool in Piramal's arsenal. It allows them to seize your property <strong>without court intervention</strong>. Here is the timeline you must know:
                  </p>
                  
                  <div className="space-y-6">
                    <div className="bg-white p-6 rounded-xl border-l-4 border-red-500 shadow-sm">
                      <h4 className="font-bold text-red-600 text-lg mb-2">Stage 1: Section 13(2) Demand Notice</h4>
                      <p className="text-gray-700 mb-2"><strong>When:</strong> Issued immediately after your account turns NPA (90 days).</p>
                      <p className="text-gray-700 mb-2"><strong>What it says:</strong> "Pay the full outstanding amount within 60 days."</p>
                      <p className="text-gray-900 font-semibold"><strong>Your Move:</strong> This is the best time to negotiate. We file a legal reply/objection under Section 13(3A). The bank MUST respond to this objection within 15 days. This buys us valuable time to structure a settlement.</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl border-l-4 border-red-600 shadow-sm">
                      <h4 className="font-bold text-red-700 text-lg mb-2">Stage 2: Section 13(4) Possession Notice</h4>
                      <p className="text-gray-700 mb-2"><strong>When:</strong> If you fail to pay/settle within the 60-day notice period.</p>
                      <p className="text-gray-700 mb-2"><strong>What it says:</strong> The bank has taken "Symbolic Possession" of your property. They may paste a notice on your door and publish it in newspapers.</p>
                      <p className="text-gray-900 font-semibold"><strong>Your Move:</strong> The danger level is high. We can challenge this in the Debt Recovery Tribunal (DRT) under Section 17 if there are procedural lapses. Simultaneously, we push aggressively for OTS to prevent physical loss.</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl border-l-4 border-red-800 shadow-sm">
                      <h4 className="font-bold text-red-900 text-lg mb-2">Stage 3: DM/CMM Order (Physical Possession)</h4>
                      <p className="text-gray-700 mb-2"><strong>When:</strong> 3-6 months after symbolic possession.</p>
                      <p className="text-gray-700 mb-2"><strong>What happens:</strong> The District Magistrate orders the police to assist the bank in physically evicting you and taking the keys.</p>
                      <p className="text-gray-900 font-semibold"><strong>Your Move:</strong> This is the final stand. We can seek a stay order from the DRT or High Court, but usually, settlement is the only practical way out. We have successfully halted evictions by presenting a concrete settlement proposal even at this stage.</p>
                    </div>
                  </div>
                </div>

                {/* Arbitration Deep Dive */}
                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
                  <div className="flex items-center gap-3 mb-6">
                    <FaGavel className="text-4xl text-gray-700" />
                    <h3 className="text-2xl font-bold text-gray-800">2. Arbitration (For Business/Personal Loans)</h3>
                  </div>
                  <p className="text-gray-700 mb-6 text-lg">
                    For unsecured loans, Piramal Finance uses Arbitration. This is a private dispute resolution process. However, it is often skewed against the borrower.
                  </p>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">The "Venue" Trap</h4>
                      <p className="text-gray-600 mb-4">
                        Your loan agreement likely has a clause stating arbitration will be held in Mumbai or Delhi, even if you live in a small town. This makes it expensive for you to attend.
                      </p>
                      <p className="text-[#D84315] font-semibold">
                        How We Fight: We challenge this venue clause. Courts have ruled that arbitration should be accessible to the borrower. We petition to move the proceedings to your city or handle it via video conferencing.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Ex-Parte Awards</h4>
                      <p className="text-gray-600 mb-4">
                        If you ignore the arbitrator's notices, they will pass an order (Award) in your absence. This Award is enforceable like a court decree to freeze your bank accounts.
                      </p>
                      <p className="text-[#D84315] font-semibold">
                        How We Fight: We ensure you are represented. We attend the hearings (virtually or physically) and highlight your financial hardship, forcing the arbitrator to consider a settlement rather than a harsh recovery order.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </section>

            {/* Housing Loan Settlement */}
            <section id="housing-loans" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Settling Piramal Housing Loans & LAP</h2>
              <p className="text-lg text-gray-700 mb-6">
                Settling a secured loan is challenging because the lender has collateral (your house). However, it is not impossible. Piramal Finance may agree to settlement if:
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2"><FaRegCheckCircle className="mt-1 text-green-600" /> The property value has depreciated significantly.</li>
                  <li className="flex items-start gap-2"><FaRegCheckCircle className="mt-1 text-green-600" /> The property is involved in legal disputes making auction difficult.</li>
                </ul>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2"><FaRegCheckCircle className="mt-1 text-green-600" /> The borrower has genuine, proven long-term financial hardship.</li>
                  <li className="flex items-start gap-2"><FaRegCheckCircle className="mt-1 text-green-600" /> The cost of legal recovery exceeds the benefit of auction.</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
                <h3 className="text-lg font-bold text-blue-800 mb-2">Our Strategy for Home Loans:</h3>
                <p className="text-gray-700">
                  We first attempt to <strong>restructure</strong> the loan (increase tenure, reduce EMI). If that fails, we aim for a settlement where you pay a lump sum (often arranged by selling other assets or borrowing from family) to release the property papers. We also ensure that the foreclosure charges are waived.
                </p>
              </div>
            </section>

            {/* Business Loan Settlement */}
            <section id="business-loans" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Settling Business Loans</h2>
              <p className="text-lg text-gray-700 mb-6">
                Business loans from Piramal are often unsecured but backed by personal guarantees of directors. When a business fails, the personal assets of the owners are at risk.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <MdBusinessCenter className="text-4xl text-[#D84315] mb-4" />
                  <h3 className="font-bold text-lg mb-2">MSME Loans</h3>
                  <p className="text-gray-600 text-sm">We help small business owners settle debts without declaring bankruptcy, protecting their future creditworthiness.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <FaUserTie className="text-4xl text-[#D84315] mb-4" />
                  <h3 className="font-bold text-lg mb-2">Personal Guarantees</h3>
                  <p className="text-gray-600 text-sm">We negotiate to limit the liability of personal guarantors, ensuring their personal homes are not attached.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <FaMoneyBillWave className="text-4xl text-[#D84315] mb-4" />
                  <h3 className="font-bold text-lg mb-2">Working Capital</h3>
                  <p className="text-gray-600 text-sm">Settling overdrafts and cash credit facilities that have turned into NPAs due to business losses.</p>
                </div>
              </div>
            </section>

            {/* OTS Scheme */}
            <section id="ots-scheme" className="mb-16 scroll-mt-32">
              <div className="bg-[#2D2D2D] text-white rounded-3xl p-10 md:p-14">
                <h2 className="text-3xl font-bold mb-6 text-[#FFCCBC]">The One Time Settlement (OTS) Scheme</h2>
                <p className="text-lg text-gray-300 mb-8">
                  OTS is a formal agreement where Piramal Finance agrees to accept a reduced amount to close the loan account permanently. This is the most effective way to exit a debt trap.
                </p>
                
                <div className="grid md:grid-cols-2 gap-10">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-white border-b border-gray-600 pb-2">How OTS Amount is Calculated</h3>
                    <ul className="space-y-4 text-gray-300">
                      <li className="flex justify-between">
                        <span>Principal Outstanding</span>
                        <span className="font-bold">100% (Usually mandatory)</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Interest Accrued</span>
                        <span className="font-bold text-green-400">Negotiable (50-100% Waiver)</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Penal Interest</span>
                        <span className="font-bold text-green-400">100% Waiver Possible</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Legal Charges</span>
                        <span className="font-bold text-green-400">Waived upon settlement</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-white border-b border-gray-600 pb-2">The "Principal Only" Myth</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Many borrowers believe they only have to pay the principal amount. While this is possible for unsecured loans that are old NPAs, for secured loans or recent defaults, the bank will demand at least the principal plus a portion of the interest. 
                      <br/><br/>
                      <strong>Our Goal:</strong> To get you as close to the principal amount as possible, saving you lakhs in interest and penalties.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Why Legal Help */}
            <section id="why-legal-help" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Why You Need a Lawyer for Settlement</h2>
              <p className="text-lg text-gray-700 mb-8">
                You might think, "Why can't I just talk to the bank myself?" You can, but banks have teams of lawyers and recovery experts trained to extract the maximum amount from you. Going alone puts you at a disadvantage.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="border border-gray-200 p-6 rounded-xl hover:shadow-lg transition-all">
                  <FaBalanceScale className="text-4xl text-[#D84315] mb-4" />
                  <h3 className="text-xl font-bold mb-3">Level Playing Field</h3>
                  <p className="text-gray-600">We speak the language of the law. When a lawyer represents you, the bank takes your request seriously and stops using illegal coercion tactics.</p>
                </div>
                <div className="border border-gray-200 p-6 rounded-xl hover:shadow-lg transition-all">
                  <FaFileContract className="text-4xl text-[#D84315] mb-4" />
                  <h3 className="text-xl font-bold mb-3">Document Verification</h3>
                  <p className="text-gray-600">Banks often issue vague settlement letters. We ensure the OTS letter clearly states "Full and Final Settlement" with no hidden clauses.</p>
                </div>
                <div className="border border-gray-200 p-6 rounded-xl hover:shadow-lg transition-all">
                  <FaShieldAlt className="text-4xl text-[#D84315] mb-4" />
                  <h3 className="text-xl font-bold mb-3">Harassment Protection</h3>
                  <p className="text-gray-600">Once we are hired, all calls must be directed to us. This gives you the mental peace needed to arrange funds for the settlement.</p>
                </div>
              </div>
            </section>

            {/* Process */}
            <section id="process" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-12">Our Step-by-Step Settlement Process</h2>
              <div className="relative border-l-4 border-[#D84315] ml-6 md:ml-12 space-y-12">
                {[
                  { 
                    title: "1. Case Analysis & Strategy", 
                    desc: "We review your loan agreement, repayment history, and financial status. We determine if you are a candidate for restructuring or OTS." 
                  },
                  { 
                    title: "2. Legal Representation", 
                    desc: "We send a formal Letter of Representation to Piramal Finance, informing them that AMA Legal Solutions is now handling your case. This usually stops the recovery calls." 
                  },
                  { 
                    title: "3. Proposal Submission", 
                    desc: "We draft a strong settlement proposal highlighting your genuine financial hardship (job loss, medical issues) with supporting evidence." 
                  },
                  { 
                    title: "4. Negotiation with Credit Committee", 
                    desc: "We negotiate directly with the authorized officers at Piramal's central or regional office, bypassing the local collection agents who have no authority to offer deep discounts." 
                  },
                  { 
                    title: "5. Settlement Letter & Payment", 
                    desc: "Once the amount is agreed, we verify the official settlement letter. You make the payment directly to the loan account." 
                  },
                  { 
                    title: "6. No Dues Certificate (NDC)", 
                    desc: "We follow up to ensure you receive the NDC and that the loan is marked as 'Settled' in your credit report." 
                  }
                ].map((item, index) => (
                  <div key={index} className="relative pl-8 md:pl-12">
                    <div className="absolute -left-[14px] top-0 w-6 h-6 bg-white rounded-full border-4 border-[#D84315] shadow-sm"></div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* RBI Guidelines */}
            <section id="rbi-guidelines" className="mb-16 scroll-mt-32">
              <div className="bg-[#FFF8E1] p-8 rounded-2xl border border-[#FFECB3]">
                <div className="flex items-center gap-3 mb-6">
                  <FaLandmark className="text-3xl text-[#FF6F00]" />
                  <h2 className="text-2xl font-bold text-[#FF6F00]">RBI Guidelines on Recovery Agents</h2>
                </div>
                <p className="text-gray-800 mb-4">
                  The Reserve Bank of India has laid down strict guidelines to protect borrowers. Piramal Finance and its agents must adhere to these:
                </p>
                <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
                  <li className="flex items-start gap-2"><div className="w-2 h-2 mt-2 bg-[#FF6F00] rounded-full"></div> Agents cannot call before 8 AM or after 7 PM.</li>
                  <li className="flex items-start gap-2"><div className="w-2 h-2 mt-2 bg-[#FF6F00] rounded-full"></div> They cannot use abusive or threatening language.</li>
                  <li className="flex items-start gap-2"><div className="w-2 h-2 mt-2 bg-[#FF6F00] rounded-full"></div> They cannot visit your workplace without prior notice.</li>
                  <li className="flex items-start gap-2"><div className="w-2 h-2 mt-2 bg-[#FF6F00] rounded-full"></div> They cannot harass your family members or neighbors.</li>
                  <li className="flex items-start gap-2"><div className="w-2 h-2 mt-2 bg-[#FF6F00] rounded-full"></div> They must carry an authorization letter from the bank.</li>
                </ul>
                <p className="mt-6 text-sm text-gray-600 italic">
                  If any of these rights are violated, we can file a complaint with the Banking Ombudsman and use it as leverage during settlement negotiations.
                </p>
              </div>
            </section>

            {/* CIBIL Impact */}
            <section id="cibil-impact" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Impact on CIBIL Score</h2>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <p className="text-gray-700 mb-4">
                    A common concern is, "Will settlement ruin my CIBIL score?" The honest answer is: <strong>Yes, it will have a negative impact, but it is better than the alternative.</strong>
                  </p>
                  <p className="text-gray-700 mb-4">
                    When you settle, your account status changes to <strong>"Settled"</strong>. This indicates that you paid less than the full amount. Your score may drop by 50-100 points.
                  </p>
                  <p className="text-gray-700">
                    However, if you do not settle and the loan remains "Written Off" or in "Default", your score will continue to bleed every month, and you may be blacklisted. Settlement stops the damage.
                  </p>
                </div>
                <div className="md:w-1/2 bg-white p-6 rounded-xl shadow-md border border-gray-200">
                  <h3 className="font-bold text-lg mb-4 flex items-center gap-2"><FaChartLine className="text-green-600" /> Rebuilding Your Score</h3>
                  <ul className="space-y-3 text-gray-600 text-sm">
                    <li className="flex items-center gap-2"><FaRegCheckCircle className="text-green-500" /> Obtain the No Dues Certificate (NDC).</li>
                    <li className="flex items-center gap-2"><FaRegCheckCircle className="text-green-500" /> Take a secured credit card (against FD).</li>
                    <li className="flex items-center gap-2"><FaRegCheckCircle className="text-green-500" /> Use the card for small purchases and pay 100% bill on time.</li>
                    <li className="flex items-center gap-2"><FaRegCheckCircle className="text-green-500" /> In 12-18 months, your score will recover to 750+.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Documents */}
            <section id="documents" className="mb-16 scroll-mt-32">
              <div className="bg-[#2D2D2D] text-white rounded-2xl p-10">
                <h2 className="text-3xl font-bold mb-8 text-center">Required Documents for Settlement</h2>
                <p className="text-center text-gray-300 mb-8 max-w-2xl mx-auto">
                  To get a settlement approved, we need to prove to Piramal Finance that you have a genuine inability to pay.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-[#FFCCBC] mb-4">KYC & Loan Details</h3>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-center gap-3"><FaBook /> Loan Account Number & Branch Name</li>
                      <li className="flex items-center gap-3"><FaBook /> PAN Card & Aadhaar Card</li>
                      <li className="flex items-center gap-3"><FaBook /> Latest Loan Account Statement</li>
                      <li className="flex items-center gap-3"><FaBook /> Copies of any Legal Notices received</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#FFCCBC] mb-4">Proof of Hardship</h3>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-center gap-3"><FaBook /> Termination Letter (if job lost)</li>
                      <li className="flex items-center gap-3"><FaBook /> Medical Reports/Bills (for health issues)</li>
                      <li className="flex items-center gap-3"><FaBook /> Bank Statements (last 6 months showing low balance)</li>
                      <li className="flex items-center gap-3"><FaBook /> Closure of Business proof (for business loans)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Comparison Table */}
            <section id="comparison" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Settlement vs. Restructuring vs. Insolvency</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse rounded-xl overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-[#D84315] text-white">
                      <th className="p-4 border border-[#BF360C]">Feature</th>
                      <th className="p-4 border border-[#BF360C]">Loan Settlement (OTS)</th>
                      <th className="p-4 border border-[#BF360C]">Loan Restructuring</th>
                      <th className="p-4 border border-[#BF360C]">Insolvency / Bankruptcy</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    <tr>
                      <td className="p-4 border border-gray-200 font-bold">Objective</td>
                      <td className="p-4 border border-gray-200">Close loan by paying less</td>
                      <td className="p-4 border border-gray-200">Extend tenure / Lower EMI</td>
                      <td className="p-4 border border-gray-200">Declare inability to pay legally</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="p-4 border border-gray-200 font-bold">Debt Reduction</td>
                      <td className="p-4 border border-gray-200 text-green-600 font-bold">Yes (40-60%)</td>
                      <td className="p-4 border border-gray-200 text-red-600">No (Interest increases)</td>
                      <td className="p-4 border border-gray-200">Yes (Assets liquidated)</td>
                    </tr>
                    <tr>
                      <td className="p-4 border border-gray-200 font-bold">CIBIL Impact</td>
                      <td className="p-4 border border-gray-200">Moderate (Recoverable)</td>
                      <td className="p-4 border border-gray-200">Low (Shows 'Restructured')</td>
                      <td className="p-4 border border-gray-200 text-red-600">Severe (7-10 years)</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="p-4 border border-gray-200 font-bold">Best For</td>
                      <td className="p-4 border border-gray-200">Lump sum available, income lost</td>
                      <td className="p-4 border border-gray-200">Temporary cash flow issue</td>
                      <td className="p-4 border border-gray-200">Total loss of assets & income</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Testimonials */}
            <section id="testimonials" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-10">Real Client Success Stories</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#D84315]">
                  <div className="flex items-center mb-4">
                    <div className="text-[#D84315] text-xl mr-2">★★★★★</div>
                    <span className="text-sm text-gray-500">Business Loan Case</span>
                  </div>
                  <h4 className="font-bold text-lg mb-2">Saved Factory from Auction</h4>
                  <p className="text-gray-600 italic mb-6 leading-relaxed">
                    "I run a small packaging unit in Ahmedabad. I took a ₹25 Lakh loan from Piramal (originally DHFL) for expansion. During the lockdown, my factory was shut for 8 months. I defaulted. They sent a legal notice and threatened to file a cheque bounce case. I was suicidal. I found AMA Legal Solutions online. They took over the communication. They attended the arbitration dates on my behalf. Finally, they negotiated a settlement for ₹12 Lakhs. I paid it by selling some old machinery. Today, my business is running again, and I am debt-free."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-600 text-xl">R</div>
                    <div>
                      <h4 className="font-bold text-gray-900">Rajesh Gupta</h4>
                      <p className="text-xs text-gray-500">Business Owner, Ahmedabad</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#D84315]">
                  <div className="flex items-center mb-4">
                    <div className="text-[#D84315] text-xl mr-2">★★★★★</div>
                    <span className="text-sm text-gray-500">Housing Loan Case</span>
                  </div>
                  <h4 className="font-bold text-lg mb-2">Stopped SARFAESI Possession</h4>
                  <p className="text-gray-600 italic mb-6 leading-relaxed">
                    "My home loan was in default for 6 months due to a medical emergency in the family. I received a Section 13(2) notice under SARFAESI. I was terrified of losing my house. The bank agents were pasting notices on my wall. AMA Legal Solutions intervened immediately. They filed a strong objection to the notice. They negotiated with the regional manager. We agreed on a settlement where I paid the principal amount plus 10% interest, and they waived all the penalties. They saved my home."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-600 text-xl">V</div>
                    <div>
                      <h4 className="font-bold text-gray-900">Vikram Singh</h4>
                      <p className="text-xs text-gray-500">Service, Delhi</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section id="faqs" className="mb-16 scroll-mt-32">
              <FaqSection />
            </section>

          </div>
        </div>

        {/* Final CTA */}
        <section className="bg-[#D84315] py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Resolve Your Piramal Loan Today</h2>
            <p className="text-white/90 text-lg mb-10">
              Don't wait for the police or recovery agents to show up. Take control of your finances with our expert legal help.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="px-10 py-4 bg-white text-[#D84315] font-bold rounded-lg hover:bg-gray-100 transition-all shadow-xl text-lg">
                Book Free Consultation
              </Link>
              <a href="tel:+918700343611" className="px-10 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-[#D84315] transition-all text-lg flex items-center justify-center gap-2">
                <FaPhoneAlt /> Call: +91-8700343611
              </a>
            </div>
          </div>
        </section>

        {/* States Grid */}
        <div className="container mx-auto px-4 py-12">
          <GenericStatesGrid 
            serviceName="Loan Settlement" 
            servicePath="loan-settlement" 
            customSlugs={{
              "Andhra Pradesh": "andhra-pradesh",
              "Arunachal Pradesh": "arunachal-pradesh",
              "Assam": "Assam",
              "Bihar": "Bihar",
              "Chhattisgarh": "Chhattisgarh",
              "Delhi": "Delhi",
              "Goa": "Goa",
              "Gujarat": "Gujarat",
              "Haryana": "Haryana",
              "Himachal Pradesh": "himachal-pradesh",
              "Jharkhand": "Jharkhand",
              "Karnataka": "Karnataka",
              "Kerala": "Kerala",
              "Madhya Pradesh": "madhya-pradesh",
              "Maharashtra": "Maharashtra",
              "Manipur": "Manipur",
              "Meghalaya": "Meghalaya",
              "Mizoram": "Mizoram",
              "Odisha": "Odisha",
              "Puducherry": "Puducherry",
              "Punjab": "Punjab",
              "Rajasthan": "Rajasthan",
              "Sikkim": "Sikkim",
              "Tamil Nadu": "tamil-nadu",
              "Telangana": "Telangana",
              "Tripura": "Tripura",
              "Uttar Pradesh": "uttar-pradesh",
              "Uttarakhand": "uttarakhand",
              "West Bengal": "west-bengal"
            }}
          />
        </div>

      </div>
    </>
  );
}
