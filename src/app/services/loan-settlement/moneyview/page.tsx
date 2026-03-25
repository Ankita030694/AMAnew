import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "./FaqSection";
import { faqs } from "./faqs";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import { FaMobileAlt, FaHandHoldingUsd, FaShieldAlt, FaPhoneAlt, FaBalanceScale, FaExclamationTriangle, FaUserTie, FaRegCheckCircle, FaBook, FaLandmark, FaMoneyBillWave, FaGavel, FaUserSecret } from "react-icons/fa";
import { MdAppShortcut, MdMoneyOff } from "react-icons/md";

// Metadata
export const metadata = {
  title: "Moneyview Loan Settlement | Personal Loan OTS | AMA Legal Solutions",
  description: "Struggling with Moneyview personal loan repayment? Expert legal help for settling app loans. Stop harassment, arbitration, and legal notices.",
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/services/loan-settlement/moneyview',
  },
  openGraph: {
    title: "Moneyview Loan Settlement | Personal Loan OTS | AMA Legal Solutions",
    description: "Struggling with Moneyview personal loan repayment? Expert legal help for settling app loans. Stop harassment, arbitration, and legal notices.",
    url: "https://www.amalegalsolutions.com/services/loan-settlement/moneyview",
    type: "website",
    images: [
      {
        url: "/services/16.png",
        width: 1200,
        height: 630,
        alt: "Moneyview Loan Settlement Services",
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
      "name": "Moneyview Settlement",
      "item": "https://www.amalegalsolutions.com/services/loan-settlement/moneyview"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Moneyview Loan Settlement: Guide to Whizdm Finance OTS",
  "description": "Comprehensive guide on how to settle Moneyview personal loans. Learn about the One Time Settlement (OTS) process, arbitration defense, and how to stop harassment.",
  "image": "https://www.amalegalsolutions.com/services/16.png",
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
  "name": "Moneyview Settlement Services",
  "image": "https://www.amalegalsolutions.com/services/16.png",
  "description": "Legal settlement services for Moneyview loans.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
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
        "name": "Karan Malhotra"
      },
      "reviewBody": "Moneyview agents were threatening me with arbitration. AMA Legal Solutions handled the case professionally and settled the loan for 45% of the amount. Highly recommended."
    }
  ]
};

export default function MoneyviewSettlementPage() {
  const tocSections = [
    { id: "introduction", title: "About Moneyview" },
    { id: "app-loans", title: "Digital Loan Traps" },
    { id: "harassment", title: "Stop Harassment" },
    { id: "legal-actions", title: "Legal Actions (Arbitration)" },
    { id: "ots-process", title: "One Time Settlement (OTS)" },
    { id: "why-hire-us", title: "Why Hire AMA Legal Solutions?" },
    { id: "process-steps", title: "Our Settlement Process" },
    { id: "rbi-rights", title: "Your Rights (RBI)" },
    { id: "cibil-score", title: "CIBIL Score Impact" },
    { id: "documents", title: "Required Documents" },
    { id: "testimonials", title: "Success Stories" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Loan Settlement", href: "/services/loan-settlement" },
    { label: "Moneyview", href: "/services/loan-settlement/moneyview" },
  ];

  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      <div className="bg-white min-h-screen font-sans text-gray-800">
        
        {/* Hero Section */}
        <div className="relative bg-[#2E7D32] text-white overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#43A047] to-[#2E7D32] opacity-90"></div>
          <div className="absolute top-0 right-0 w-full h-full opacity-10 bg-[url('/digital-pattern.png')]"></div>
          
          <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-3/5">
                <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase">
                  App Loan Debt Relief
                </div>
                <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                  Settle Your <span className="text-[#A5D6A7]">Moneyview</span> Loan Legally
                </h1>
                <p className="text-xl text-gray-100 mb-10 leading-relaxed max-w-2xl">
                  Facing arbitration notices or harassment from Moneyview agents? We help you negotiate a One Time Settlement (OTS) and close your loan for a reduced amount.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="px-8 py-4 bg-[#A5D6A7] text-[#1B5E20] font-bold rounded-lg transition-all shadow-lg hover:bg-white hover:shadow-xl transform hover:-translate-y-1">
                    Get Settlement Help
                  </Link>
                  <a href="tel:+918700343611" className="px-8 py-4 bg-transparent border-2 border-[#A5D6A7] text-[#A5D6A7] hover:bg-[#A5D6A7] hover:text-[#1B5E20] font-bold rounded-lg transition-all flex items-center justify-center gap-2">
                    <FaPhoneAlt /> +91-8700343611
                  </a>
                </div>
              </div>
              <div className="md:w-2/5 hidden md:block">
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-2xl">
                  <div className="flex items-center gap-4 mb-6 border-b border-white/20 pb-4">
                    <MdAppShortcut className="text-4xl text-[#A5D6A7]" />
                    <div>
                      <h3 className="font-bold text-xl">Moneyview Expert</h3>
                      <p className="text-sm text-gray-300">Stop Legal Action</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Personal Loan</span>
                      <span className="bg-green-500/20 text-green-100 px-2 py-1 rounded text-xs">Settlement</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Arbitration</span>
                      <span className="bg-green-500/20 text-green-100 px-2 py-1 rounded text-xs">Defense</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Harassment</span>
                      <span className="bg-green-500/20 text-green-100 px-2 py-1 rounded text-xs">Protection</span>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About Moneyview (Whizdm Finance)</h2>
              <div className="bg-gray-50 rounded-2xl p-8 border-l-4 border-[#2E7D32] mb-8">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  <strong>Moneyview</strong> is one of India's most popular instant personal loan apps. It is operated by <strong>Whizdm Finance Pvt Ltd</strong>, an RBI-registered NBFC. Moneyview also partners with other major lenders like DMI Finance, IDFC First Bank, and Aditya Birla Capital to disburse loans.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  While getting a loan from Moneyview is quick and paperless, the repayment terms can be strict. The interest rates are often higher than traditional banks, and the penalties for missed payments are severe. Defaulting on a Moneyview loan can lead to a barrage of recovery calls, legal notices, and even arbitration proceedings initiated by their lending partners.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  If you are overwhelmed by Moneyview debt and harassment, <strong>AMA Legal Solutions</strong> can help. We specialize in handling digital lending cases, protecting your privacy, and negotiating a legal <strong>One Time Settlement (OTS)</strong> to close the loan for a reduced amount.
                </p>
              </div>
            </section>

            {/* App Loans */}
            <section id="app-loans" className="mb-16 scroll-mt-32">
              <div className="flex items-center gap-4 mb-6">
                <FaMobileAlt className="text-4xl text-[#2E7D32]" />
                <h2 className="text-3xl font-bold text-gray-900">The "Instant Loan" Trap</h2>
              </div>
              <p className="text-gray-700 mb-8 text-lg">
                The convenience of app-based loans often comes with hidden costs and risks. Here is what borrowers typically face:
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <FaMoneyBillWave className="text-red-600" /> Sky-High Interest & Penalties
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Moneyview loans can have an Annual Percentage Rate (APR) of up to 36%. If you miss an EMI, they charge a "bounce fee" (for the failed auto-debit) plus "overdue charges" that are added daily. A ₹50,000 loan can easily turn into a ₹80,000 debt within a few months of default.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <FaUserSecret className="text-red-600" /> Privacy Invasion
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Some recovery agents may try to access your contact list (if you granted permission) and call your relatives or colleagues. This "shaming" tactic is illegal under RBI's Digital Lending Guidelines, but it is still commonly used to pressure borrowers.
                  </p>
                </div>
              </div>
            </section>

            {/* Harassment */}
            <section id="harassment" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Stopping Recovery Harassment</h2>
              <div className="bg-[#E8F5E9] p-8 rounded-2xl border border-[#C8E6C9]">
                <div className="flex items-center gap-3 mb-6">
                  <FaUserSecret className="text-3xl text-[#2E7D32]" />
                  <h3 className="text-2xl font-bold text-[#2E7D32]">Know Your Rights</h3>
                </div>
                <p className="text-gray-800 mb-6">
                  Moneyview recovery agents must adhere to the RBI's Fair Practices Code and Digital Lending Guidelines.
                </p>
                <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
                  <h4 className="font-bold text-lg mb-3">Illegal Tactics We Stop:</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2"><FaShieldAlt className="mt-1 text-green-600" /> <strong>Contacting References:</strong> Agents cannot call your friends, family, or colleagues to shame you.</li>
                    <li className="flex items-start gap-2"><FaShieldAlt className="mt-1 text-green-600" /> <strong>Abusive Language:</strong> Threats, abuse, and intimidation are strictly prohibited.</li>
                    <li className="flex items-start gap-2"><FaShieldAlt className="mt-1 text-green-600" /> <strong>Odd Hours:</strong> Calls are only allowed between 8 AM and 7 PM.</li>
                  </ul>
                </div>
                <p className="text-sm text-gray-600 italic">
                  We send a legal notice to Moneyview demanding they stop these illegal activities immediately.
                </p>
              </div>
            </section>

            {/* Legal Actions */}
            <section id="legal-actions" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Legal Actions by Moneyview</h2>
              <p className="text-gray-700 mb-8 text-lg">
                Moneyview and its partners are technologically advanced and use automated legal systems to file cases against defaulters.
              </p>
              <div className="space-y-8">
                <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-[#2E7D32]">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <FaGavel className="text-[#2E7D32]" /> Online Arbitration
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Moneyview often uses "Online Dispute Resolution" (ODR) platforms. They appoint an arbitrator who conducts hearings via video call or email.
                  </p>
                  <ul className="space-y-3 text-gray-600 mb-4">
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 mt-2 bg-[#2E7D32] rounded-full"></div> <strong>The Risk:</strong> If you miss the email or link, the arbitrator will pass an "Ex-Parte Award" against you. This award is binding and can be enforced in court.</li>
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 mt-2 bg-[#2E7D32] rounded-full"></div> <strong>Our Defense:</strong> We represent you in these online proceedings. We ensure your side is heard, challenge the interest calculations, and use the platform to negotiate a settlement.</li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-red-600">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <FaExclamationTriangle className="text-red-600" /> Section 138 (Cheque Bounce)
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Since Moneyview loans are repaid via NACH (auto-debit), a bounce is treated as a criminal offense under Section 138 of the NI Act or Section 25 of the PASSA.
                  </p>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 mt-2 bg-red-600 rounded-full"></div> <strong>Consequences:</strong> You may receive a court summons. Ignoring it can lead to a warrant.</li>
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 mt-2 bg-red-600 rounded-full"></div> <strong>Our Strategy:</strong> We handle the legal defense, appear in court if needed, and negotiate with the lender to withdraw the case upon settlement.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* OTS Process */}
            <section id="ots-process" className="mb-16 scroll-mt-32">
              <div className="bg-[#1B5E20] text-white rounded-3xl p-10 md:p-14">
                <h2 className="text-3xl font-bold mb-6 text-[#A5D6A7]">One Time Settlement (OTS) Solution</h2>
                <p className="text-lg text-white/90 mb-8">
                  OTS is the best way to exit the debt trap. It involves paying a negotiated lump sum amount to close the loan account permanently.
                </p>
                
                <div className="grid md:grid-cols-2 gap-10">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-white border-b border-white/20 pb-2">Why Choose OTS?</h3>
                    <ul className="space-y-3 text-white/90">
                      <li className="flex items-center gap-2"><FaRegCheckCircle className="text-[#A5D6A7]" /> Waiver of accumulated interest and penalties.</li>
                      <li className="flex items-center gap-2"><FaRegCheckCircle className="text-[#A5D6A7]" /> Immediate stop to legal actions and calls.</li>
                      <li className="flex items-center gap-2"><FaRegCheckCircle className="text-[#A5D6A7]" /> Complete closure of the loan.</li>
                      <li className="flex items-center gap-2"><FaRegCheckCircle className="text-[#A5D6A7]" /> Peace of mind.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-white border-b border-white/20 pb-2">Our Success</h3>
                    <p className="text-white/90 leading-relaxed">
                      We negotiate aggressively with Moneyview's legal and settlement teams. We typically achieve settlements at <strong>40-60%</strong> of the total outstanding amount, depending on the case.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Why Hire Us */}
            <section id="why-hire-us" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose AMA Legal Solutions?</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="border border-gray-200 p-6 rounded-xl hover:shadow-lg transition-all bg-gray-50">
                  <FaShieldAlt className="text-4xl text-[#2E7D32] mb-4" />
                  <h3 className="text-xl font-bold mb-3">Protection</h3>
                  <p className="text-gray-600">We shield you from harassment and handle all communication with agents.</p>
                </div>
                <div className="border border-gray-200 p-6 rounded-xl hover:shadow-lg transition-all bg-gray-50">
                  <FaMoneyBillWave className="text-4xl text-[#2E7D32] mb-4" />
                  <h3 className="text-xl font-bold mb-3">Savings</h3>
                  <p className="text-gray-600">Our negotiation strategies maximize your savings on the settlement amount.</p>
                </div>
                <div className="border border-gray-200 p-6 rounded-xl hover:shadow-lg transition-all bg-gray-50">
                  <FaGavel className="text-4xl text-[#2E7D32] mb-4" />
                  <h3 className="text-xl font-bold mb-3">Legal Defense</h3>
                  <p className="text-gray-600">We represent you in arbitration and court cases effectively.</p>
                </div>
              </div>
            </section>

            {/* Process */}
            <section id="process-steps" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-12">Our Settlement Roadmap</h2>
              <div className="relative border-l-4 border-[#2E7D32] ml-6 md:ml-12 space-y-12">
                {[
                  { 
                    title: "Step 1: Loan Analysis", 
                    desc: "We analyze your Moneyview loan statement to calculate the actual principal received versus the inflated interest and penalty charges." 
                  },
                  { 
                    title: "Step 2: Legal Intervention", 
                    desc: "We send a formal legal notice to Moneyview/Whizdm Finance, stating that you have legal representation. This stops them from contacting you directly." 
                  },
                  { 
                    title: "Step 3: Harassment Protection", 
                    desc: "If agents continue to harass you or call your references, we file a complaint with the RBI Ombudsman for violation of Digital Lending Guidelines." 
                  },
                  { 
                    title: "Step 4: Negotiation", 
                    desc: "We negotiate with the lender's settlement team. We present your financial hardship and push for a maximum waiver on the outstanding amount." 
                  },
                  { 
                    title: "Step 5: Settlement Agreement", 
                    desc: "We obtain a formal Settlement Letter from Moneyview. We verify the amount, the due date, and the closure terms to ensure there are no loopholes." 
                  },
                  { 
                    title: "Step 6: Closure & NDC", 
                    desc: "You make the payment directly to the lender's official account. We then ensure the loan is closed on the app and the 'Settled' status is updated in your CIBIL report." 
                  }
                ].map((item, index) => (
                  <div key={index} className="relative pl-8 md:pl-12">
                    <div className="absolute -left-[14px] top-0 w-6 h-6 bg-white rounded-full border-4 border-[#2E7D32] shadow-sm"></div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* RBI Rights */}
            <section id="rbi-rights" className="mb-16 scroll-mt-32">
              <div className="bg-[#E8F5E9] p-8 rounded-2xl border border-[#C8E6C9]">
                <div className="flex items-center gap-3 mb-6">
                  <FaLandmark className="text-3xl text-[#2E7D32]" />
                  <h2 className="text-2xl font-bold text-[#2E7D32]">RBI Digital Lending Guidelines</h2>
                </div>
                <p className="text-gray-800 mb-4">
                  You are protected by specific RBI rules for digital lenders:
                </p>
                <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
                  <li className="flex items-start gap-2"><div className="w-2 h-2 mt-2 bg-[#2E7D32] rounded-full"></div> <strong>Data Privacy:</strong> Apps cannot access your contacts or gallery.</li>
                  <li className="flex items-start gap-2"><div className="w-2 h-2 mt-2 bg-[#2E7D32] rounded-full"></div> <strong>Fair Recovery:</strong> Agents must follow a code of conduct.</li>
                  <li className="flex items-start gap-2"><div className="w-2 h-2 mt-2 bg-[#2E7D32] rounded-full"></div> <strong>Grievance Redressal:</strong> There must be a Nodal Officer to handle complaints.</li>
                  <li className="flex items-start gap-2"><div className="w-2 h-2 mt-2 bg-[#2E7D32] rounded-full"></div> <strong>Cooling-off Period:</strong> You have a right to exit the loan within a specific period.</li>
                </ul>
              </div>
            </section>

            {/* CIBIL Impact */}
            <section id="cibil-score" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Impact on CIBIL Score</h2>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <p className="text-gray-700 mb-4">
                    Settlement results in a "Settled" status on your credit report. This does lower your score.
                  </p>
                  <p className="text-gray-700 mb-4">
                    However, it is a necessary step to stop the debt from growing and to avoid legal complications. A "Settled" status is better than "Written Off".
                  </p>
                  <p className="text-gray-700">
                    You can rebuild your score to 750+ within 12-18 months by using a secured credit card and maintaining good financial discipline.
                  </p>
                </div>
                <div className="md:w-1/2 bg-white p-6 rounded-xl shadow-md border border-gray-200">
                  <h3 className="font-bold text-lg mb-4">Rebuilding Strategy</h3>
                  <ul className="space-y-3 text-gray-600 text-sm">
                    <li className="flex items-center gap-2"><FaRegCheckCircle className="text-green-500" /> Obtain NDC from Moneyview.</li>
                    <li className="flex items-center gap-2"><FaRegCheckCircle className="text-green-500" /> Check CIBIL report for update.</li>
                    <li className="flex items-center gap-2"><FaRegCheckCircle className="text-green-500" /> Apply for a Fixed Deposit backed credit card.</li>
                    <li className="flex items-center gap-2"><FaRegCheckCircle className="text-green-500" /> Pay all bills on time.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Documents */}
            <section id="documents" className="mb-16 scroll-mt-32">
              <div className="bg-[#212121] text-white rounded-2xl p-10">
                <h2 className="text-3xl font-bold mb-8 text-center">Required Documents</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <ul className="space-y-4 text-gray-300">
                    <li className="flex items-center gap-3"><FaBook className="text-[#A5D6A7]" /> Loan Account Number (from App)</li>
                    <li className="flex items-center gap-3"><FaBook className="text-[#A5D6A7]" /> PAN Card & Aadhaar Card</li>
                    <li className="flex items-center gap-3"><FaBook className="text-[#A5D6A7]" /> Loan Statement / Screenshots</li>
                  </ul>
                  <ul className="space-y-4 text-gray-300">
                    <li className="flex items-center gap-3"><FaBook className="text-[#A5D6A7]" /> Legal Notices (if any)</li>
                    <li className="flex items-center gap-3"><FaBook className="text-[#A5D6A7]" /> Proof of Financial Hardship</li>
                    <li className="flex items-center gap-3"><FaBook className="text-[#A5D6A7]" /> Bank Statements (Last 3 months)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Testimonials */}
            <section id="testimonials" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-10">Real Success Stories</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#2E7D32]">
                  <div className="flex items-center mb-4">
                    <div className="text-[#2E7D32] text-xl mr-2">★★★★★</div>
                    <span className="text-sm text-gray-500">Settled Moneyview Loan</span>
                  </div>
                  <h4 className="font-bold text-lg mb-3">Arbitration Threat Stopped</h4>
                  <p className="text-gray-600 italic mb-6 leading-relaxed">
                    "I received an email about an online arbitration hearing from Moneyview. I was scared I would lose the case. AMA Legal Solutions represented me in the online hearing. They challenged the interest charges and negotiated a settlement of ₹45,000 against a demand of ₹90,000. They saved me from a court order."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-600 text-xl">K</div>
                    <div>
                      <h4 className="font-bold text-gray-900">Karan Malhotra</h4>
                      <p className="text-xs text-gray-500">Sales Executive, Mumbai</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#2E7D32]">
                  <div className="flex items-center mb-4">
                    <div className="text-[#2E7D32] text-xl mr-2">★★★★★</div>
                    <span className="text-sm text-gray-500">Stopped Harassment</span>
                  </div>
                  <h4 className="font-bold text-lg mb-3">Peace of Mind Restored</h4>
                  <p className="text-gray-600 italic mb-6 leading-relaxed">
                    "Recovery agents were calling my school and harassing the staff. It was humiliating. I contacted AMA Legal Solutions, and they sent a strong legal notice to Moneyview about the privacy violation. The calls to my workplace stopped immediately, and we settled the loan peacefully."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-600 text-xl">S</div>
                    <div>
                      <h4 className="font-bold text-gray-900">Sneha Gupta</h4>
                      <p className="text-xs text-gray-500">Teacher, Delhi</p>
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
        <section className="bg-[#2E7D32] py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Resolve Your Moneyview Loan Today</h2>
            <p className="text-white/90 text-lg mb-10">
              Stop the harassment and get a legal settlement.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="px-10 py-4 bg-white text-[#2E7D32] font-bold rounded-lg hover:bg-gray-100 transition-all shadow-xl text-lg">
                Book Free Consultation
              </Link>
              <a href="tel:+918700343611" className="px-10 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-[#2E7D32] transition-all text-lg flex items-center justify-center gap-2">
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
