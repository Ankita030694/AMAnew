import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "./FaqSection";
import { faqs } from "./faqs";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import { FaMobileAlt, FaHandHoldingUsd, FaShieldAlt, FaPhoneAlt, FaBalanceScale, FaExclamationTriangle, FaUserTie, FaRegCheckCircle, FaBook, FaLandmark, FaMoneyBillWave, FaGavel, FaLock, FaUserSecret } from "react-icons/fa";
import { MdAppSettingsAlt, MdMoneyOff } from "react-icons/md";

// Metadata
export const metadata = {
  title: "Si Creva Loan Settlement | Kissht & Ring App Loan OTS | AMA Legal Solutions",
  description: "Unable to repay Si Creva (Kissht/Ring) loan? Stop harassment and legal threats. Expert legal help for One Time Settlement (OTS) of digital loans.",
  alternates: {
    canonical: 'https://amalegalsolutions.com/services/loan-settlement/si-creva',
  },
  openGraph: {
    title: "Si Creva Loan Settlement | Kissht & Ring App Loan OTS | AMA Legal Solutions",
    description: "Unable to repay Si Creva (Kissht/Ring) loan? Stop harassment and legal threats. Expert legal help for One Time Settlement (OTS) of digital loans.",
    url: "https://amalegalsolutions.com/services/loan-settlement/si-creva",
    type: "website",
    images: [
      {
        url: "/services/10.png",
        width: 1200,
        height: 630,
        alt: "Si Creva Loan Settlement Services",
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
      "name": "Si Creva Loan Settlement",
      "item": "https://amalegalsolutions.com/services/loan-settlement/si-creva"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Si Creva (Kissht/Ring) Loan Settlement: A Complete Guide",
  "description": "Learn how to settle your Si Creva Capital Services loan (Kissht/Ring apps) through the One Time Settlement (OTS) scheme. Stop recovery harassment legally.",
  "image": "https://amalegalsolutions.com/services/10.png",
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
      "url": "https://amalegalsolutions.com/logo.png"
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
  "name": "Si Creva Loan Settlement Services",
  "image": "https://amalegalsolutions.com/services/10.png",
  "description": "Legal settlement services for Si Creva (Kissht/Ring) loans.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.7",
    "reviewCount": "189"
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
        "name": "Rahul Verma"
      },
      "reviewBody": "I was harassed by Kissht agents for months. AMA Legal Solutions stopped the calls and settled my loan with Si Creva for just the principal amount. Lifesavers!"
    }
  ]
};

export default function SiCrevaLoanSettlementPage() {
  const tocSections = [
    { id: "introduction", title: "About Si Creva (Kissht/Ring)" },
    { id: "app-loans", title: "App Loan Traps" },
    { id: "harassment", title: "Stopping Harassment" },
    { id: "legal-actions", title: "Legal Actions (Arbitration)" },
    { id: "ots-process", title: "One Time Settlement (OTS)" },
    { id: "why-legal-help", title: "Why You Need a Lawyer" },
    { id: "process", title: "Our Settlement Process" },
    { id: "rbi-guidelines", title: "RBI Digital Lending Rules" },
    { id: "cibil-impact", title: "CIBIL Score Impact" },
    { id: "documents", title: "Required Documents" },
    { id: "testimonials", title: "Success Stories" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Loan Settlement", href: "/services/loan-settlement" },
    { label: "Si Creva (Kissht/Ring)", href: "/services/loan-settlement/si-creva" },
  ];

  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      <div className="bg-white min-h-screen font-sans text-gray-800">
        
        {/* Hero Section */}
        <div className="relative bg-[#004D40] text-white overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#00695C] to-[#004D40] opacity-90"></div>
          <div className="absolute top-0 right-0 w-full h-full opacity-10 bg-[url('/digital-pattern.png')]"></div>
          
          <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-3/5">
                <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase">
                  Digital Loan & App Debt Relief
                </div>
                <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                  Settle Your <span className="text-[#4DB6AC]">Si Creva (Kissht/Ring)</span> Loan
                </h1>
                <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
                  Trapped in a cycle of high interest and harassment from loan apps? We help you settle legally with Si Creva Capital Services and regain your peace of mind.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="px-8 py-4 bg-[#4DB6AC] text-[#004D40] font-bold rounded-lg transition-all shadow-lg hover:bg-white hover:shadow-xl transform hover:-translate-y-1">
                    Get Settlement Help
                  </Link>
                  <a href="tel:+918700343611" className="px-8 py-4 bg-transparent border-2 border-[#4DB6AC] text-[#4DB6AC] hover:bg-[#4DB6AC] hover:text-[#004D40] font-bold rounded-lg transition-all flex items-center justify-center gap-2">
                    <FaPhoneAlt /> +91-8700343611
                  </a>
                </div>
              </div>
              <div className="md:w-2/5 hidden md:block">
                <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-2xl">
                  <div className="flex items-center gap-4 mb-6 border-b border-white/10 pb-4">
                    <FaMobileAlt className="text-4xl text-[#4DB6AC]" />
                    <div>
                      <h3 className="font-bold text-xl">App Loan Specialist</h3>
                      <p className="text-sm text-gray-400">Stop Digital Harassment</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Kissht App</span>
                      <span className="bg-teal-500/20 text-teal-100 px-2 py-1 rounded text-xs">Settlement</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Ring App</span>
                      <span className="bg-teal-500/20 text-teal-100 px-2 py-1 rounded text-xs">OTS Available</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Si Creva Loans</span>
                      <span className="bg-teal-500/20 text-teal-100 px-2 py-1 rounded text-xs">Legal Defense</span>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About Si Creva Capital Services</h2>
              <div className="bg-gray-50 rounded-2xl p-8 border-l-4 border-[#00695C] mb-8">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  <strong>Si Creva Capital Services Pvt Ltd</strong> is a Reserve Bank of India (RBI) registered Non-Banking Financial Company (NBFC). It is the primary lending partner behind popular digital lending apps like <strong>Kissht</strong> and <strong>Ring</strong> (formerly EMI Pay).
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  These apps offer instant credit lines and small personal loans with minimal documentation. While convenient, they often come with very high interest rates and strict repayment terms. Defaulting on these loans can lead to aggressive recovery tactics, including harassment of contacts and legal threats.
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you are being harassed by recovery agents from Kissht, Ring, or Si Creva, you need to know that you have legal options. <strong>AMA Legal Solutions</strong> specializes in handling digital lending cases, stopping harassment, and negotiating fair settlements.
              </p>
            </section>

            {/* App Loans */}
            <section id="app-loans" className="mb-16 scroll-mt-32">
              <div className="flex items-center gap-4 mb-6">
                <MdAppSettingsAlt className="text-4xl text-[#00695C]" />
                <h2 className="text-3xl font-bold text-gray-900">The Trap of App-Based Loans</h2>
              </div>
              <p className="text-gray-700 mb-6">
                Digital loans are designed to be easy to take but hard to exit if you miss a payment.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">High Interest & Penalties</h3>
                  <p className="text-gray-600">
                    Apps like Ring often charge daily late fees. A small loan of ₹5,000 can turn into ₹15,000 in just a few months due to these compounding charges.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Data Privacy Risks</h3>
                  <p className="text-gray-600">
                    Many users report that recovery agents access their contact lists and call friends/family, which is a violation of RBI's digital lending guidelines.
                  </p>
                </div>
              </div>
            </section>

            {/* Harassment */}
            <section id="harassment" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Stopping Recovery Harassment</h2>
              <div className="bg-[#E0F2F1] p-8 rounded-2xl border border-[#B2DFDB]">
                <div className="flex items-center gap-3 mb-6">
                  <FaUserSecret className="text-3xl text-[#00695C]" />
                  <h3 className="text-2xl font-bold text-[#00695C]">Is Harassment Legal? NO.</h3>
                </div>
                <p className="text-gray-800 mb-6">
                  Recovery agents often cross the line. They may threaten police action, use abusive language, or shame you on social media. This is illegal.
                </p>
                <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
                  <h4 className="font-bold text-lg mb-3">How We Stop It:</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2"><FaShieldAlt className="mt-1 text-green-600" /> <strong>Legal Notice:</strong> We send a formal notice to Si Creva warning them against illegal recovery practices.</li>
                    <li className="flex items-start gap-2"><FaShieldAlt className="mt-1 text-green-600" /> <strong>Call Diversion:</strong> We instruct the lender to direct all future communication to us, your legal representatives.</li>
                    <li className="flex items-start gap-2"><FaShieldAlt className="mt-1 text-green-600" /> <strong>RBI Complaint:</strong> If harassment continues, we file a complaint with the RBI Ombudsman, which puts immense pressure on the NBFC to settle.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Legal Actions */}
            <section id="legal-actions" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Legal Actions by Si Creva</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <FaGavel className="text-[#00695C]" /> Arbitration Proceedings
                  </h3>
                  <p className="text-gray-700">
                    Si Creva often initiates arbitration for defaulted loans. They appoint a sole arbitrator to pass an award against you. This award is legally binding and can be enforced in court. We represent you in these proceedings to challenge the interest calculations and seek a fair settlement.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <FaExclamationTriangle className="text-red-600" /> Section 25 (PASSA)
                  </h3>
                  <p className="text-gray-700">
                    If you have set up an e-mandate (auto-debit) and it bounces due to insufficient funds, they can file a case under Section 25 of the Payment and Settlement Systems Act. This is similar to a cheque bounce case. We help you resolve this legally.
                  </p>
                </div>
              </div>
            </section>

            {/* OTS Process */}
            <section id="ots-process" className="mb-16 scroll-mt-32">
              <div className="bg-[#004D40] text-white rounded-3xl p-10 md:p-14">
                <h2 className="text-3xl font-bold mb-6 text-[#4DB6AC]">One Time Settlement (OTS) Solution</h2>
                <p className="text-lg text-gray-300 mb-8">
                  The best way to end the cycle of debt with digital lenders is a One Time Settlement. We negotiate with Si Creva to close the loan for a reduced amount.
                </p>
                
                <div className="grid md:grid-cols-2 gap-10">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-white border-b border-gray-600 pb-2">Why Settle?</h3>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-center gap-2"><FaRegCheckCircle className="text-[#4DB6AC]" /> Stop daily interest accumulation.</li>
                      <li className="flex items-center gap-2"><FaRegCheckCircle className="text-[#4DB6AC]" /> Stop harassment calls immediately.</li>
                      <li className="flex items-center gap-2"><FaRegCheckCircle className="text-[#4DB6AC]" /> Avoid legal cases and court visits.</li>
                      <li className="flex items-center gap-2"><FaRegCheckCircle className="text-[#4DB6AC]" /> Clear the debt for 40-60% less.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-white border-b border-gray-600 pb-2">Our Strategy</h3>
                    <p className="text-gray-300 leading-relaxed">
                      We bypass the call center agents who have no authority. We deal directly with the Nodal Officer or the Legal Department of Si Creva to get a formal settlement letter approved.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Why Legal Help */}
            <section id="why-legal-help" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Hire AMA Legal Solutions?</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="border border-gray-200 p-6 rounded-xl hover:shadow-lg transition-all">
                  <FaLock className="text-4xl text-[#00695C] mb-4" />
                  <h3 className="text-xl font-bold mb-3">Privacy Protection</h3>
                  <p className="text-gray-600">We ensure your data privacy is respected and stop agents from calling your relatives.</p>
                </div>
                <div className="border border-gray-200 p-6 rounded-xl hover:shadow-lg transition-all">
                  <FaHandHoldingUsd className="text-4xl text-[#00695C] mb-4" />
                  <h3 className="text-xl font-bold mb-3">Huge Savings</h3>
                  <p className="text-gray-600">We often settle digital loans for just the principal amount, waiving off the exorbitant interest.</p>
                </div>
                <div className="border border-gray-200 p-6 rounded-xl hover:shadow-lg transition-all">
                  <FaBook className="text-4xl text-[#00695C] mb-4" />
                  <h3 className="text-xl font-bold mb-3">Valid Closure</h3>
                  <p className="text-gray-600">We verify the settlement letter to ensure it's genuine and that the loan will be fully closed in the app.</p>
                </div>
              </div>
            </section>

            {/* Process */}
            <section id="process" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-12">Our Settlement Process</h2>
              <div className="relative border-l-4 border-[#00695C] ml-6 md:ml-12 space-y-12">
                {[
                  { 
                    title: "1. Case Assessment", 
                    desc: "We analyze your loan details from the Kissht/Ring app and your repayment history." 
                  },
                  { 
                    title: "2. Legal Representation", 
                    desc: "We inform Si Creva that you have legal counsel, which usually stops the aggressive calls." 
                  },
                  { 
                    title: "3. Negotiation", 
                    desc: "We negotiate with the company for a waiver of interest and penalties." 
                  },
                  { 
                    title: "4. Settlement Letter", 
                    desc: "We obtain a formal letter from Si Creva stating the final settlement amount." 
                  },
                  { 
                    title: "5. Payment & NDC", 
                    desc: "You pay the amount directly to the company, and we ensure the loan is closed on the app and credit report." 
                  }
                ].map((item, index) => (
                  <div key={index} className="relative pl-8 md:pl-12">
                    <div className="absolute -left-[14px] top-0 w-6 h-6 bg-white rounded-full border-4 border-[#00695C] shadow-sm"></div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* RBI Guidelines */}
            <section id="rbi-guidelines" className="mb-16 scroll-mt-32">
              <div className="bg-[#E0F7FA] p-8 rounded-2xl border border-[#B2EBF2]">
                <div className="flex items-center gap-3 mb-6">
                  <FaLandmark className="text-3xl text-[#006064]" />
                  <h2 className="text-2xl font-bold text-[#006064]">RBI Digital Lending Guidelines 2022</h2>
                </div>
                <p className="text-gray-800 mb-4">
                  The RBI has issued specific rules for digital lenders like Si Creva/Kissht:
                </p>
                <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
                  <li className="flex items-start gap-2"><div className="w-2 h-2 mt-2 bg-[#006064] rounded-full"></div> <strong>Data Access:</strong> Apps cannot access your mobile contacts or media gallery.</li>
                  <li className="flex items-start gap-2"><div className="w-2 h-2 mt-2 bg-[#006064] rounded-full"></div> <strong>Cooling-off Period:</strong> You must be given time to exit the loan without penalty.</li>
                  <li className="flex items-start gap-2"><div className="w-2 h-2 mt-2 bg-[#006064] rounded-full"></div> <strong>Agent Conduct:</strong> Recovery agents must be trained and cannot harass you.</li>
                  <li className="flex items-start gap-2"><div className="w-2 h-2 mt-2 bg-[#006064] rounded-full"></div> <strong>Transparency:</strong> All fees and interest rates must be clearly disclosed (Key Fact Statement).</li>
                </ul>
                <p className="mt-6 text-sm text-gray-600 italic">
                  We use these guidelines to defend you. If they have violated any of these, we can demand a better settlement.
                </p>
              </div>
            </section>

            {/* CIBIL Impact */}
            <section id="cibil-impact" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Impact on CIBIL Score</h2>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <p className="text-gray-700 mb-4">
                    Settling will lower your CIBIL score temporarily as the account is marked "Settled".
                  </p>
                  <p className="text-gray-700 mb-4">
                    However, leaving the loan open with "Overdue" status damages your score much more. Settlement stops the negative reporting.
                  </p>
                  <p className="text-gray-700">
                    You can rebuild your score quickly by taking a small secured credit card and paying it on time.
                  </p>
                </div>
                <div className="md:w-1/2 bg-white p-6 rounded-xl shadow-md border border-gray-200">
                  <h3 className="font-bold text-lg mb-4">Rebuilding Tips</h3>
                  <ul className="space-y-3 text-gray-600 text-sm">
                    <li className="flex items-center gap-2"><FaRegCheckCircle className="text-green-500" /> Get the NDC from Si Creva.</li>
                    <li className="flex items-center gap-2"><FaRegCheckCircle className="text-green-500" /> Wait 45-60 days for CIBIL update.</li>
                    <li className="flex items-center gap-2"><FaRegCheckCircle className="text-green-500" /> Apply for a secured credit card (FD backed).</li>
                    <li className="flex items-center gap-2"><FaRegCheckCircle className="text-green-500" /> Keep utilization low (&lt;30%).</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Documents */}
            <section id="documents" className="mb-16 scroll-mt-32">
              <div className="bg-[#004D40] text-white rounded-2xl p-10">
                <h2 className="text-3xl font-bold mb-8 text-center">Required Documents</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <ul className="space-y-4 text-gray-300">
                    <li className="flex items-center gap-3"><FaBook className="text-[#4DB6AC]" /> Loan ID / Registered Mobile Number</li>
                    <li className="flex items-center gap-3"><FaBook className="text-[#4DB6AC]" /> PAN Card & Aadhaar Card</li>
                    <li className="flex items-center gap-3"><FaBook className="text-[#4DB6AC]" /> Screenshots of App Dashboard</li>
                  </ul>
                  <ul className="space-y-4 text-gray-300">
                    <li className="flex items-center gap-3"><FaBook className="text-[#4DB6AC]" /> Legal Notices (WhatsApp/Email)</li>
                    <li className="flex items-center gap-3"><FaBook className="text-[#4DB6AC]" /> Proof of Income Loss</li>
                    <li className="flex items-center gap-3"><FaBook className="text-[#4DB6AC]" /> Bank Statement (Last 3 months)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Testimonials */}
            <section id="testimonials" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-10">Client Success Stories</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#00695C]">
                  <div className="flex items-center mb-4">
                    <div className="text-[#00695C] text-xl mr-2">★★★★★</div>
                  </div>
                  <p className="text-gray-600 italic mb-6 leading-relaxed">
                    "I took a small loan from Kissht which ballooned to ₹50,000 due to penalties. Agents were calling my office colleagues. AMA Legal Solutions stopped the calls and settled the loan for ₹20,000. I am so relieved."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-600 text-xl">R</div>
                    <div>
                      <h4 className="font-bold text-gray-900">Rahul Verma</h4>
                      <p className="text-xs text-gray-500">Sales Executive, Pune</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#00695C]">
                  <div className="flex items-center mb-4">
                    <div className="text-[#00695C] text-xl mr-2">★★★★★</div>
                  </div>
                  <p className="text-gray-600 italic mb-6 leading-relaxed">
                    "Ring app agents were threatening me with a police case. I was scared. The lawyers at AMA Legal Solutions explained that it's a civil matter and handled the settlement professionally. Highly recommended."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-600 text-xl">S</div>
                    <div>
                      <h4 className="font-bold text-gray-900">Sneha Gupta</h4>
                      <p className="text-xs text-gray-500">Student, Delhi</p>
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
        <section className="bg-[#00695C] py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Close Your Kissht/Ring Loan Today</h2>
            <p className="text-white/90 text-lg mb-10">
              Stop the harassment. Settle legally and move on.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="px-10 py-4 bg-white text-[#00695C] font-bold rounded-lg hover:bg-gray-100 transition-all shadow-xl text-lg">
                Book Free Consultation
              </Link>
              <a href="tel:+918700343611" className="px-10 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-[#00695C] transition-all text-lg flex items-center justify-center gap-2">
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
              "Andhra Pradesh": "AndhraPradesh",
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
              "Uttar Pradesh": "UttarPradesh",
              "Uttarakhand": "Uttrakhand",
              "West Bengal": "west-bengal"
            }}
          />
        </div>

      </div>
    </>
  );
}
