import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "./FaqSection";
import { faqs } from "./faqs";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import { FaHandHoldingUsd, FaShieldAlt, FaPhoneAlt, FaBalanceScale, FaExclamationTriangle, FaUserTie, FaRegCheckCircle, FaBook, FaLandmark, FaMoneyBillWave, FaGavel, FaGem, FaBriefcase } from "react-icons/fa";
import { MdRealEstateAgent, MdMoneyOff } from "react-icons/md";

// Metadata
export const metadata = {
  title: "South Indian Bank Loan Settlement | Gold & Personal Loan OTS | AMA Legal Solutions",
  description: "Struggling with South Indian Bank loan repayment? Expert legal help for settling Gold Loans, Personal Loans, and Business Loans. Stop auction and harassment.",
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/services/loan-settlement/south-indian-bank',
  },
  openGraph: {
    title: "South Indian Bank Loan Settlement | Gold & Personal Loan OTS | AMA Legal Solutions",
    description: "Struggling with South Indian Bank loan repayment? Expert legal help for settling Gold Loans, Personal Loans, and Business Loans. Stop auction and harassment.",
    url: "https://www.amalegalsolutions.com/services/loan-settlement/south-indian-bank",
    type: "website",
    images: [
      {
        url: "/services/9.png",
        width: 1200,
        height: 630,
        alt: "South Indian Bank Loan Settlement Services",
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
      "name": "Loan Settlement",
      "item": "https://www.amalegalsolutions.com/services/loan-settlement"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "South Indian Bank Loan Settlement",
      "item": "https://www.amalegalsolutions.com/services/loan-settlement/south-indian-bank"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "South Indian Bank Loan Settlement: A Complete Guide to OTS",
  "description": "Learn how to settle your South Indian Bank gold, personal, or business loan through the One Time Settlement (OTS) scheme. Expert legal advice to stop auctions and legal action.",
  "image": "https://www.amalegalsolutions.com/services/9.png",
  "author": {
    "@type": "Organization",
    "name": "AMA Legal Solutions",
    "url": "https://www.amalegalsolutions.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "AMA Legal Solutions",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.amalegalsolutions.com/ama-legal-solutions-logo.png"
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
  "name": "South Indian Bank Loan Settlement Services",
  "image": "https://www.amalegalsolutions.com/services/9.png",
  "description": "Legal settlement services for South Indian Bank loans.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "134"
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
        "name": "Mathew Thomas"
      },
      "reviewBody": "My gold loan was in default and they were about to auction my family jewelry. AMA Legal Solutions intervened and helped me settle the loan and release my gold. Forever grateful."
    }
  ]
};

export default function SouthIndianBankLoanSettlementPage() {
  const tocSections = [
    { id: "introduction", title: "About South Indian Bank" },
    { id: "gold-loans", title: "Gold Loan Settlement" },
    { id: "personal-loans", title: "Personal Loan Settlement" },
    { id: "business-loans", title: "Business Loan Settlement" },
    { id: "legal-actions", title: "Legal Actions (SARFAESI/138)" },
    { id: "ots-scheme", title: "One Time Settlement (OTS)" },
    { id: "why-legal-help", title: "Why You Need a Lawyer" },
    { id: "process", title: "Our Settlement Process" },
    { id: "rbi-guidelines", title: "RBI Guidelines & Rights" },
    { id: "cibil-impact", title: "CIBIL Score Impact" },
    { id: "documents", title: "Required Documents" },
    { id: "testimonials", title: "Success Stories" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Loan Settlement", href: "/services/loan-settlement" },
    { label: "South Indian Bank", href: "/services/loan-settlement/south-indian-bank" },
  ];

  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      <div className="bg-white min-h-screen font-sans text-gray-800">
        
        {/* Hero Section */}
        <div className="relative bg-[#D32F2F] text-white overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#B71C1C] to-[#D32F2F] opacity-90"></div>
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#FFC107] opacity-10 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-3/5">
                <div className="inline-block bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase">
                  Gold & Business Loan Relief
                </div>
                <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                  Settle Your <span className="text-[#FFC107]">South Indian Bank</span> Loan Legally
                </h1>
                <p className="text-xl text-white/90 mb-10 leading-relaxed max-w-2xl">
                  Facing gold auction or legal notices? We specialize in negotiating One Time Settlements (OTS) for South Indian Bank loans. Protect your assets and peace of mind.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="px-8 py-4 bg-white text-[#D32F2F] font-bold rounded-lg transition-all shadow-lg hover:bg-gray-100 hover:shadow-xl transform hover:-translate-y-1">
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
                    <FaShieldAlt className="text-4xl text-[#FFC107]" />
                    <div>
                      <h3 className="font-bold text-xl">Asset Protection</h3>
                      <p className="text-sm text-white/70">Stop Auctions & Seizures</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Gold Loans</span>
                      <span className="bg-yellow-500/20 text-yellow-100 px-2 py-1 rounded text-xs">Auction Stay</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Personal Loans</span>
                      <span className="bg-yellow-500/20 text-yellow-100 px-2 py-1 rounded text-xs">Settlement</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Business Loans</span>
                      <span className="bg-yellow-500/20 text-yellow-100 px-2 py-1 rounded text-xs">OTS Expert</span>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About South Indian Bank (SIB)</h2>
              <div className="bg-gray-50 rounded-2xl p-8 border-l-4 border-[#D32F2F] mb-8">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  <strong>South Indian Bank (SIB)</strong> is one of the oldest private sector banks in India, headquartered in Thrissur, Kerala. It has a significant presence across the country, known for its personalized service and strong focus on retail and MSME lending.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  SIB is particularly aggressive in the <strong>Gold Loan</strong> segment and loans to small businesses. While they are customer-friendly during lending, their recovery process for Non-Performing Assets (NPAs) can be strict. They utilize the SARFAESI Act effectively for secured loans and have a robust legal team for pursuing unsecured defaults.
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have defaulted on a loan with South Indian Bank, you might be facing pressure from recovery agents or receiving legal notices. It is crucial to understand that you have rights. <strong>AMA Legal Solutions</strong> can help you navigate this difficult time, stop the harassment, and negotiate a dignified settlement.
              </p>
            </section>

            {/* Gold Loans */}
            <section id="gold-loans" className="mb-16 scroll-mt-32">
              <div className="flex items-center gap-4 mb-6">
                <FaGem className="text-4xl text-[#FFC107]" />
                <h2 className="text-3xl font-bold text-gray-900">Gold Loan Settlement: Saving Your Family Jewelry</h2>
              </div>
              <p className="text-gray-700 mb-6 text-lg">
                Gold loans are the most sensitive debt because the collateral—your family jewelry—holds immense sentimental value. South Indian Bank is very aggressive with gold loan recoveries because the asset is liquid and easy to sell.
              </p>
              
              <div className="bg-[#FFF8E1] p-8 rounded-2xl border border-[#FFECB3] mb-8">
                <h3 className="text-2xl font-bold text-[#D32F2F] mb-4">The Auction Timeline</h3>
                <p className="text-gray-800 mb-6">
                  Unlike a home loan where foreclosure takes months, a gold loan auction can happen in weeks. Here is the danger zone:
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center font-bold text-red-600 shrink-0">1</div>
                    <div>
                      <h4 className="font-bold text-gray-900">The Notice</h4>
                      <p className="text-gray-700">If you miss 3 EMIs or fail to renew the loan after 1 year, SIB sends a registered notice giving you 7-14 days to pay.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center font-bold text-red-600 shrink-0">2</div>
                    <div>
                      <h4 className="font-bold text-gray-900">The Paper Ad</h4>
                      <p className="text-gray-700">If you don't pay, they publish an auction notice in a local newspaper. This is often the first time neighbors find out, causing social embarrassment.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center font-bold text-red-600 shrink-0">3</div>
                    <div>
                      <h4 className="font-bold text-gray-900">The Auction</h4>
                      <p className="text-gray-700">On the scheduled date, the gold is auctioned. If it sells for more than your debt, the excess is returned (rarely happens due to 'fees'). If it sells for less, you still owe the difference.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-green-500">
                <h3 className="text-xl font-bold text-green-800 mb-4">How We Stop the Auction</h3>
                <p className="text-gray-700 mb-4">
                  <strong>Time is of the essence.</strong> If you contact us before the auction date, we can:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2"><FaShieldAlt className="mt-1 text-green-600" /> <strong>Legal Intervention:</strong> We file a representation to the bank citing your intent to settle, which legally obligates them to pause the auction.</li>
                  <li className="flex items-start gap-2"><FaShieldAlt className="mt-1 text-green-600" /> <strong>Waiver Negotiation:</strong> Gold loans accrue massive penal interest. We negotiate to waive this off, bringing the settlement amount closer to the principal + basic interest.</li>
                  <li className="flex items-start gap-2"><FaShieldAlt className="mt-1 text-green-600" /> <strong>Safe Release:</strong> We ensure that upon payment, your ornaments are released immediately from the branch safe.</li>
                </ul>
              </div>
            </section>

            {/* Personal Loans */}
            <section id="personal-loans" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Personal Loan Settlement</h2>
              <p className="text-lg text-gray-700 mb-6">
                SIB Personal Loans are unsecured. If you have lost your job or faced a medical crisis, paying high EMIs can be impossible.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:border-[#D32F2F] transition-colors">
                  <FaHandHoldingUsd className="text-4xl text-[#D32F2F] mb-4" />
                  <h3 className="text-xl font-bold mb-2">Settlement Opportunity</h3>
                  <p className="text-gray-600">
                    Since there is no collateral, the bank is often willing to settle for a reduced amount (Principal + small interest or even less) to close the NPA account.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:border-[#D32F2F] transition-colors">
                  <FaBalanceScale className="text-4xl text-[#D32F2F] mb-4" />
                  <h3 className="text-xl font-bold mb-2">Legal Defense</h3>
                  <p className="text-gray-600">
                    We defend you against arbitration or civil suits filed by the bank, ensuring that you are not forced to pay more than you can afford.
                  </p>
                </div>
              </div>
            </section>

            {/* Business Loans */}
            <section id="business-loans" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Business & MSME Loan Settlement</h2>
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                  <p className="text-lg text-gray-700 mb-6">
                    Many small businesses rely on SIB for working capital (OD/CC limits) and term loans. A business downturn can lead to default.
                  </p>
                  <p className="text-lg text-gray-700">
                    <strong>Our Approach:</strong> We analyze your business financials to prove genuine hardship. We then negotiate a restructuring plan or a One Time Settlement (OTS) that allows you to clear the debt without liquidating your business assets.
                  </p>
                </div>
                <div className="md:w-1/2 bg-gray-50 p-8 rounded-2xl text-center border border-gray-200">
                  <FaBriefcase className="text-6xl text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Save Your Business</h3>
                  <p className="text-gray-600">Don't let debt shut you down. Settle and restart.</p>
                </div>
              </div>
            </section>

            {/* Legal Actions */}
            <section id="legal-actions" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Legal Actions: SARFAESI & Section 138</h2>
              <div className="space-y-8">
                
                {/* SARFAESI Deep Dive */}
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                  <div className="flex items-center gap-3 mb-4">
                    <FaGavel className="text-3xl text-[#D32F2F]" />
                    <h3 className="text-2xl font-bold text-gray-900">1. SARFAESI Act (For Secured Loans)</h3>
                  </div>
                  <p className="text-gray-700 mb-6 text-lg">
                    For loans against property (LAP) or home loans, South Indian Bank uses the SARFAESI Act to seize property without going to court.
                  </p>
                  <div className="space-y-4 border-l-2 border-gray-200 pl-6">
                    <div>
                      <h4 className="font-bold text-gray-900">Section 13(2) Notice</h4>
                      <p className="text-gray-600">A demand notice giving you 60 days to pay. <strong>Action:</strong> We file a legal objection under Section 13(3A) to pause the clock.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Section 13(4) Possession</h4>
                      <p className="text-gray-600">The bank takes symbolic possession. <strong>Action:</strong> We challenge this in the Debt Recovery Tribunal (DRT) or push for an immediate OTS to save the property.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Physical Possession</h4>
                      <p className="text-gray-600">The DM orders police to evict you. <strong>Action:</strong> This is the last stage. Only a strong settlement proposal or a High Court stay can save you now.</p>
                    </div>
                  </div>
                </div>

                {/* Section 138 Deep Dive */}
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                  <div className="flex items-center gap-3 mb-4">
                    <FaExclamationTriangle className="text-3xl text-[#D32F2F]" />
                    <h3 className="text-2xl font-bold text-gray-900">2. Section 138 (Cheque Bounce)</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    SIB often takes blank security cheques during loan disbursement. Upon default, they deposit these cheques, knowing they will bounce, and then file a criminal case.
                  </p>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <p className="text-red-800 font-semibold">
                      <strong>Don't Panic:</strong> A Section 138 case is primarily a pressure tactic to recover money. It is a "compoundable offense," meaning if you settle the debt, the case is closed. We handle the court appearances and the settlement simultaneously.
                    </p>
                  </div>
                </div>

                {/* Arbitration */}
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                  <div className="flex items-center gap-3 mb-4">
                    <FaUserTie className="text-3xl text-[#D32F2F]" />
                    <h3 className="text-2xl font-bold text-gray-900">3. Arbitration</h3>
                  </div>
                  <p className="text-gray-700">
                    For unsecured business and personal loans, SIB may initiate arbitration. We ensure you are represented in these proceedings to prevent an ex-parte award that could freeze your bank accounts.
                  </p>
                </div>
              </div>
            </section>

            {/* OTS Scheme */}
            <section id="ots-scheme" className="mb-16 scroll-mt-32">
              <div className="bg-[#D32F2F] text-white rounded-3xl p-10 md:p-14">
                <h2 className="text-3xl font-bold mb-6 text-[#FFC107]">One Time Settlement (OTS) Explained</h2>
                <p className="text-lg text-white/90 mb-8">
                  OTS is the most effective way to exit a debt trap. South Indian Bank agrees to accept a lump sum amount (usually lower than the total due) to close the loan permanently.
                </p>
                
                <div className="grid md:grid-cols-2 gap-10">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-white border-b border-white/20 pb-2">How It Works</h3>
                    <ul className="space-y-3 text-white/90">
                      <li className="flex items-center gap-2"><FaRegCheckCircle className="text-[#FFC107]" /> We submit a proposal based on your affordability.</li>
                      <li className="flex items-center gap-2"><FaRegCheckCircle className="text-[#FFC107]" /> The proposal goes to the Regional/Zonal office.</li>
                      <li className="flex items-center gap-2"><FaRegCheckCircle className="text-[#FFC107]" /> Negotiations happen on the waiver amount.</li>
                      <li className="flex items-center gap-2"><FaRegCheckCircle className="text-[#FFC107]" /> You pay the agreed amount and get an NDC.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-white border-b border-white/20 pb-2">Benefits</h3>
                    <p className="text-white/90 leading-relaxed">
                      You save money on interest and penalties. All legal cases are withdrawn. You get peace of mind and can start rebuilding your financial life immediately.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Why Legal Help */}
            <section id="why-legal-help" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Why You Need AMA Legal Solutions</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="border border-gray-200 p-6 rounded-xl hover:shadow-lg transition-all bg-gray-50">
                  <FaShieldAlt className="text-4xl text-[#D32F2F] mb-4" />
                  <h3 className="text-xl font-bold mb-3">Stop Harassment</h3>
                  <p className="text-gray-600">We take over all communication with recovery agents. They stop calling you once they know a lawyer is involved.</p>
                </div>
                <div className="border border-gray-200 p-6 rounded-xl hover:shadow-lg transition-all bg-gray-50">
                  <FaMoneyBillWave className="text-4xl text-[#D32F2F] mb-4" />
                  <h3 className="text-xl font-bold mb-3">Maximize Savings</h3>
                  <p className="text-gray-600">Our negotiation strategies often result in 40-60% savings on the total outstanding amount for unsecured loans.</p>
                </div>
                <div className="border border-gray-200 p-6 rounded-xl hover:shadow-lg transition-all bg-gray-50">
                  <FaBook className="text-4xl text-[#D32F2F] mb-4" />
                  <h3 className="text-xl font-bold mb-3">Legal Safety</h3>
                  <p className="text-gray-600">We ensure the settlement letter is legally watertight, preventing the bank from claiming dues in the future.</p>
                </div>
              </div>
            </section>

            {/* Process */}
            <section id="process" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-12">Our Settlement Roadmap</h2>
              <div className="relative border-l-4 border-[#D32F2F] ml-6 md:ml-12 space-y-12">
                {[
                  { 
                    title: "1. Case Analysis & Asset Protection", 
                    desc: "We review your loan details. For gold/property loans, our first priority is to secure a legal shield against immediate auction or possession." 
                  },
                  { 
                    title: "2. Legal Representation", 
                    desc: "We issue a formal notice to South Indian Bank, informing them that AMA Legal Solutions represents you. This stops the harassment from recovery agents." 
                  },
                  { 
                    title: "3. Hardship Proof & Proposal", 
                    desc: "We compile evidence of your financial crisis (business loss, job loss, medical issues) and submit a structured One Time Settlement (OTS) proposal." 
                  },
                  { 
                    title: "4. Negotiation with Regional Office", 
                    desc: "Branch managers often have limited power. We negotiate directly with the Regional or Zonal office of SIB to get approval for higher waivers." 
                  },
                  { 
                    title: "5. Settlement Letter Verification", 
                    desc: "We verify the official settlement letter to ensure it clearly states 'Full and Final Settlement' and includes clauses for the return of security documents/gold." 
                  },
                  { 
                    title: "6. Closure & Asset Release", 
                    desc: "You make the payment. We ensure the No Dues Certificate (NDC) is issued and your gold/property documents are released within the stipulated time." 
                  }
                ].map((item, index) => (
                  <div key={index} className="relative pl-8 md:pl-12">
                    <div className="absolute -left-[14px] top-0 w-6 h-6 bg-white rounded-full border-4 border-[#D32F2F] shadow-sm"></div>
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
                  <h2 className="text-2xl font-bold text-[#FF6F00]">RBI Guidelines on Recovery</h2>
                </div>
                <p className="text-gray-800 mb-4">
                  You are protected by RBI's Fair Practices Code. Recovery agents cannot:
                </p>
                <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
                  <li className="flex items-start gap-2"><div className="w-2 h-2 mt-2 bg-[#FF6F00] rounded-full"></div> Call before 8 AM or after 7 PM.</li>
                  <li className="flex items-start gap-2"><div className="w-2 h-2 mt-2 bg-[#FF6F00] rounded-full"></div> Use threatening or abusive language.</li>
                  <li className="flex items-start gap-2"><div className="w-2 h-2 mt-2 bg-[#FF6F00] rounded-full"></div> Contact your employer or neighbors without cause.</li>
                  <li className="flex items-start gap-2"><div className="w-2 h-2 mt-2 bg-[#FF6F00] rounded-full"></div> Enter your home without permission.</li>
                </ul>
                <p className="mt-6 text-sm text-gray-600 italic">
                  If these rules are broken, we can file a complaint with the Banking Ombudsman.
                </p>
              </div>
            </section>

            {/* CIBIL Impact */}
            <section id="cibil-impact" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Impact on CIBIL Score</h2>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <p className="text-gray-700 mb-4">
                    Settlement will mark your account as "Settled" in CIBIL. This lowers your score temporarily.
                  </p>
                  <p className="text-gray-700 mb-4">
                    <strong>But consider this:</strong> A "Settled" account is closed. A "Default" or "Written Off" account stays open and hurts your score every single month. Settlement stops the bleeding.
                  </p>
                  <p className="text-gray-700">
                    You can rebuild your score to 750+ within 12-18 months by using a secured credit card and paying bills on time.
                  </p>
                </div>
                <div className="md:w-1/2 bg-white p-6 rounded-xl shadow-md border border-gray-200">
                  <h3 className="font-bold text-lg mb-4">Rebuilding Steps</h3>
                  <ul className="space-y-3 text-gray-600 text-sm">
                    <li className="flex items-center gap-2"><FaRegCheckCircle className="text-green-500" /> Obtain NDC from South Indian Bank.</li>
                    <li className="flex items-center gap-2"><FaRegCheckCircle className="text-green-500" /> Check CIBIL report after 45 days for update.</li>
                    <li className="flex items-center gap-2"><FaRegCheckCircle className="text-green-500" /> Take a small secured loan/card.</li>
                    <li className="flex items-center gap-2"><FaRegCheckCircle className="text-green-500" /> Maintain 100% payment history.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Documents */}
            <section id="documents" className="mb-16 scroll-mt-32">
              <div className="bg-[#2D2D2D] text-white rounded-2xl p-10">
                <h2 className="text-3xl font-bold mb-8 text-center">Required Documents</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <ul className="space-y-4 text-gray-300">
                    <li className="flex items-center gap-3"><FaBook className="text-[#FFC107]" /> Loan Account Number</li>
                    <li className="flex items-center gap-3"><FaBook className="text-[#FFC107]" /> PAN Card & Aadhaar Card</li>
                    <li className="flex items-center gap-3"><FaBook className="text-[#FFC107]" /> Latest Loan Statement</li>
                  </ul>
                  <ul className="space-y-4 text-gray-300">
                    <li className="flex items-center gap-3"><FaBook className="text-[#FFC107]" /> Legal Notices (if any)</li>
                    <li className="flex items-center gap-3"><FaBook className="text-[#FFC107]" /> Proof of Income Loss</li>
                    <li className="flex items-center gap-3"><FaBook className="text-[#FFC107]" /> Medical Records (if applicable)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Testimonials */}
            <section id="testimonials" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-10">Real Client Success Stories</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#D32F2F]">
                  <div className="flex items-center mb-4">
                    <div className="text-[#D32F2F] text-xl mr-2">★★★★★</div>
                    <span className="text-sm text-gray-500">Gold Loan Case</span>
                  </div>
                  <h4 className="font-bold text-lg mb-2">Saved Family Gold from Auction</h4>
                  <p className="text-gray-600 italic mb-6 leading-relaxed">
                    "I had pledged 150g of gold with SIB for my business. I defaulted, and they sent an auction notice. I was devastated. AMA Legal Solutions intervened just 3 days before the auction. They legally halted the process, negotiated a waiver of the penal interest, and gave me 45 days to arrange the funds. I settled the loan and got my family jewelry back. I can't thank them enough."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-600 text-xl">M</div>
                    <div>
                      <h4 className="font-bold text-gray-900">Mathew Thomas</h4>
                      <p className="text-xs text-gray-500">Business Owner, Kochi</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#D32F2F]">
                  <div className="flex items-center mb-4">
                    <div className="text-[#D32F2F] text-xl mr-2">★★★★★</div>
                    <span className="text-sm text-gray-500">Personal Loan Case</span>
                  </div>
                  <h4 className="font-bold text-lg mb-2">Settled at 40% of Outstanding</h4>
                  <p className="text-gray-600 italic mb-6 leading-relaxed">
                    "I had a personal loan of ₹8 Lakhs with SIB. After losing my job in Bangalore, I couldn't pay. The recovery agents were harassing my parents in Kerala. AMA Legal Solutions took over the case. They stopped the harassment immediately. After 4 months of negotiation, they settled the loan for ₹3.2 Lakhs. It was a huge relief."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-600 text-xl">S</div>
                    <div>
                      <h4 className="font-bold text-gray-900">Suresh Kumar</h4>
                      <p className="text-xs text-gray-500">IT Professional, Bangalore</p>
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
        <section className="bg-[#D32F2F] py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Resolve Your South Indian Bank Loan</h2>
            <p className="text-white/90 text-lg mb-10">
              Expert legal help to stop auctions and settle debts.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="px-10 py-4 bg-white text-[#D32F2F] font-bold rounded-lg hover:bg-gray-100 transition-all shadow-xl text-lg">
                Book Free Consultation
              </Link>
              <a href="tel:+918700343611" className="px-10 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-[#D32F2F] transition-all text-lg flex items-center justify-center gap-2">
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
              "Assam": "assam",
              "Bihar": "bihar",
              "Chhattisgarh": "chhattisgarh",
              "Delhi": "delhi",
              "Goa": "goa",
              "Gujarat": "gujarat",
              "Haryana": "haryana",
              "Himachal Pradesh": "himachal-pradesh",
              "Jharkhand": "jharkhand",
              "Karnataka": "karnataka",
              "Kerala": "kerala",
              "Madhya Pradesh": "madhya-pradesh",
              "Maharashtra": "maharashtra",
              "Manipur": "manipur",
              "Meghalaya": "meghalaya",
              "Mizoram": "mizoram",
              "Odisha": "odisha",
              "Puducherry": "puducherry",
              "Punjab": "punjab",
              "Rajasthan": "rajasthan",
              "Sikkim": "sikkim",
              "Tamil Nadu": "tamil-nadu",
              "Telangana": "telangana",
              "Tripura": "tripura",
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
