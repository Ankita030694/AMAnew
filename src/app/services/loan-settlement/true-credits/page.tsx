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
  title: "True Credits Loan Settlement | TrueBalance App OTS | AMA Legal Solutions",
  description: "Struggling with True Credits (TrueBalance) loan repayment? Expert legal help for settling app loans. Stop harassment and legal notices.",
  alternates: {
    canonical: 'https://amalegalsolutions.com/services/loan-settlement/true-credits',
  },
  openGraph: {
    title: "True Credits Loan Settlement | TrueBalance App OTS | AMA Legal Solutions",
    description: "Struggling with True Credits (TrueBalance) loan repayment? Expert legal help for settling app loans. Stop harassment and legal notices.",
    url: "https://amalegalsolutions.com/services/loan-settlement/true-credits",
    type: "website",
    images: [
      {
        url: "/services/15.png",
        width: 1200,
        height: 630,
        alt: "True Credits Loan Settlement Services",
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
      "name": "True Credits Settlement",
      "item": "https://amalegalsolutions.com/services/loan-settlement/true-credits"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "True Credits Loan Settlement: Guide to TrueBalance OTS",
  "description": "Comprehensive guide on how to settle True Credits (TrueBalance) loans. Learn about the One Time Settlement (OTS) process and how to stop harassment.",
  "image": "https://amalegalsolutions.com/services/15.png",
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
  "name": "True Credits Settlement Services",
  "image": "https://amalegalsolutions.com/services/15.png",
  "description": "Legal settlement services for True Credits loans.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.7",
    "reviewCount": "132"
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
        "name": "Rahul Sharma"
      },
      "reviewBody": "TrueBalance agents were harassing my contacts. AMA Legal Solutions stopped it immediately and helped me settle the loan for 50% less."
    }
  ]
};

export default function TrueCreditsSettlementPage() {
  const tocSections = [
    { id: "introduction", title: "About True Credits" },
    { id: "app-loans", title: "App Loan Traps" },
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
    { label: "True Credits", href: "/services/loan-settlement/true-credits" },
  ];

  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      <div className="bg-white min-h-screen font-sans text-gray-800">
        
        {/* Hero Section */}
        <div className="relative bg-[#4A148C] text-white overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#7B1FA2] to-[#4A148C] opacity-90"></div>
          <div className="absolute top-0 right-0 w-full h-full opacity-10 bg-[url('/digital-pattern.png')]"></div>
          
          <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-3/5">
                <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase">
                  Digital Loan Relief
                </div>
                <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                  Settle Your <span className="text-[#E1BEE7]">True Credits</span> (TrueBalance) Loan
                </h1>
                <p className="text-xl text-gray-200 mb-10 leading-relaxed max-w-2xl">
                  Harassed by recovery agents? Stuck in a high-interest app loan trap? We help you negotiate a legal One Time Settlement (OTS) and stop the abuse.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="px-8 py-4 bg-[#E1BEE7] text-[#4A148C] font-bold rounded-lg transition-all shadow-lg hover:bg-white hover:shadow-xl transform hover:-translate-y-1">
                    Get Help Now
                  </Link>
                  <a href="tel:+918700343611" className="px-8 py-4 bg-transparent border-2 border-[#E1BEE7] text-[#E1BEE7] hover:bg-[#E1BEE7] hover:text-[#4A148C] font-bold rounded-lg transition-all flex items-center justify-center gap-2">
                    <FaPhoneAlt /> +91-8700343611
                  </a>
                </div>
              </div>
              <div className="md:w-2/5 hidden md:block">
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-2xl">
                  <div className="flex items-center gap-4 mb-6 border-b border-white/20 pb-4">
                    <MdAppShortcut className="text-4xl text-[#E1BEE7]" />
                    <div>
                      <h3 className="font-bold text-xl">App Loan Expert</h3>
                      <p className="text-sm text-gray-300">Stop Contact Harassment</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>TrueBalance App</span>
                      <span className="bg-purple-500/20 text-purple-100 px-2 py-1 rounded text-xs">Settlement</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>True Credits NBFC</span>
                      <span className="bg-purple-500/20 text-purple-100 px-2 py-1 rounded text-xs">Legal Defense</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Data Privacy</span>
                      <span className="bg-purple-500/20 text-purple-100 px-2 py-1 rounded text-xs">Protection</span>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About True Credits (TrueBalance)</h2>
              <div className="bg-gray-50 rounded-2xl p-8 border-l-4 border-[#7B1FA2] mb-8">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  <strong>True Credits Pvt Ltd</strong> is the RBI-registered Non-Banking Financial Company (NBFC) that operates the popular <strong>TrueBalance</strong> lending app. They specialize in providing small-ticket personal loans to millions of users across India, often with minimal documentation.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  While the app offers quick cash, the financial reality can be harsh. True Credits loans often carry extremely high interest rates, and the repayment tenures are short. If you miss a payment, the penalty charges stack up daily, and the recovery process can be aggressive, involving frequent calls and messages to you and your contacts.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  If you are trapped in a cycle of debt with TrueBalance, <strong>AMA Legal Solutions</strong> can help. We intervene legally to stop the harassment and negotiate a <strong>One Time Settlement (OTS)</strong> that allows you to close the loan for a fraction of the inflated demand.
                </p>
              </div>
            </section>

            {/* App Loans */}
            <section id="app-loans" className="mb-16 scroll-mt-32">
              <div className="flex items-center gap-4 mb-6">
                <FaMobileAlt className="text-4xl text-[#7B1FA2]" />
                <h2 className="text-3xl font-bold text-gray-900">The "Instant Loan" Trap</h2>
              </div>
              <p className="text-gray-700 mb-8 text-lg">
                The convenience of TrueBalance loans often masks the severe financial risks. Here is how borrowers get trapped:
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <FaMoneyBillWave className="text-purple-600" /> Sky-High Interest Rates
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    The Annual Percentage Rate (APR) on these loans can exceed <strong>60-80%</strong>. Additionally, if you default, they add "overdue charges" and "bounce fees" daily. A loan of ₹10,000 can easily balloon to ₹25,000 within a few months.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <MdMoneyOff className="text-purple-600" /> Short Repayment Cycles
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Many loans have very short tenures (15, 30, or 60 days). This doesn't give borrowers enough time to generate cash flow, leading to default. Once you default, the pressure from recovery agents begins immediately.
                  </p>
                </div>
              </div>
            </section>

            {/* Harassment */}
            <section id="harassment" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Stopping Recovery Harassment</h2>
              <div className="bg-[#F3E5F5] p-8 rounded-2xl border border-[#E1BEE7]">
                <div className="flex items-center gap-3 mb-6">
                  <FaUserSecret className="text-3xl text-[#7B1FA2]" />
                  <h3 className="text-2xl font-bold text-[#7B1FA2]">Data Privacy Violations</h3>
                </div>
                <p className="text-gray-800 mb-6">
                  The most common complaint against digital lenders is the harassment of contacts. Agents may call your parents, friends, or colleagues to shame you into paying.
                </p>
                <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
                  <h4 className="font-bold text-lg mb-3">How We Protect You:</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2"><FaShieldAlt className="mt-1 text-purple-600" /> <strong>Legal Notice:</strong> We send a strong legal notice to True Credits demanding an immediate stop to contact harassment.</li>
                    <li className="flex items-start gap-2"><FaShieldAlt className="mt-1 text-purple-600" /> <strong>RBI Complaint:</strong> If they persist, we file a formal complaint with the RBI Ombudsman for violation of Digital Lending Guidelines.</li>
                    <li className="flex items-start gap-2"><FaShieldAlt className="mt-1 text-purple-600" /> <strong>Cyber Cell:</strong> In extreme cases of abuse, we assist in filing a Cyber Cell complaint.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Legal Actions */}
            <section id="legal-actions" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Legal Actions by True Credits</h2>
              <p className="text-gray-700 mb-8 text-lg">
                Despite being a digital lender, True Credits uses formal legal channels to recover dues.
              </p>
              <div className="space-y-8">
                <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-[#7B1FA2]">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <FaGavel className="text-[#7B1FA2]" /> Online Arbitration
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    True Credits frequently uses Online Dispute Resolution (ODR) platforms. They send arbitration notices via email or SMS.
                  </p>
                  <ul className="space-y-3 text-gray-600 mb-4">
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 mt-2 bg-[#7B1FA2] rounded-full"></div> <strong>The Risk:</strong> If you miss the online hearing link, an "Ex-Parte Award" is passed against you. This is a binding legal order to pay the full amount.</li>
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 mt-2 bg-[#7B1FA2] rounded-full"></div> <strong>Our Defense:</strong> We join these online hearings on your behalf. We contest the inflated charges and use the platform to negotiate a fair settlement.</li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-red-600">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <FaExclamationTriangle className="text-red-600" /> Section 25 (PASSA)
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Most app loans are repaid via e-mandate (NACH). If this auto-debit bounces due to insufficient funds, it is a criminal offense.
                  </p>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 mt-2 bg-red-600 rounded-full"></div> <strong>Consequences:</strong> They can file a complaint under Section 25 of the Payment and Settlement Systems Act. This can lead to a court summons.</li>
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 mt-2 bg-red-600 rounded-full"></div> <strong>Our Strategy:</strong> We handle the legal response, appear in court if necessary, and ensure the case is withdrawn upon settlement.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* OTS Process */}
            <section id="ots-process" className="mb-16 scroll-mt-32">
              <div className="bg-[#4A148C] text-white rounded-3xl p-10 md:p-14">
                <h2 className="text-3xl font-bold mb-6 text-[#E1BEE7]">One Time Settlement (OTS) Solution</h2>
                <p className="text-lg text-white/90 mb-8">
                  OTS is the most effective way to close your TrueBalance loan if you are in a debt trap. We negotiate a final settlement amount that is significantly lower than the total dues.
                </p>
                
                <div className="grid md:grid-cols-2 gap-10">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-white border-b border-white/20 pb-2">Why Settle?</h3>
                    <ul className="space-y-3 text-white/90">
                      <li className="flex items-center gap-2"><FaRegCheckCircle className="text-[#E1BEE7]" /> Waiver of all penalty charges and late fees.</li>
                      <li className="flex items-center gap-2"><FaRegCheckCircle className="text-[#E1BEE7]" /> Stop the daily harassment calls.</li>
                      <li className="flex items-center gap-2"><FaRegCheckCircle className="text-[#E1BEE7]" /> Prevent legal escalation.</li>
                      <li className="flex items-center gap-2"><FaRegCheckCircle className="text-[#E1BEE7]" /> Close the loan permanently.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-white border-b border-white/20 pb-2">Our Results</h3>
                    <p className="text-white/90 leading-relaxed">
                      We have successfully settled hundreds of True Credits cases, often achieving waivers of 40-60% on the total outstanding amount, depending on the case specifics.
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
                  <FaShieldAlt className="text-4xl text-[#7B1FA2] mb-4" />
                  <h3 className="text-xl font-bold mb-3">Anti-Harassment</h3>
                  <p className="text-gray-600">We specialize in stopping digital lending harassment and protecting your privacy.</p>
                </div>
                <div className="border border-gray-200 p-6 rounded-xl hover:shadow-lg transition-all bg-gray-50">
                  <FaMoneyBillWave className="text-4xl text-[#7B1FA2] mb-4" />
                  <h3 className="text-xl font-bold mb-3">Negotiation Power</h3>
                  <p className="text-gray-600">We deal directly with the NBFC's legal team, bypassing the aggressive call center agents.</p>
                </div>
                <div className="border border-gray-200 p-6 rounded-xl hover:shadow-lg transition-all bg-gray-50">
                  <FaBook className="text-4xl text-[#7B1FA2] mb-4" />
                  <h3 className="text-xl font-bold mb-3">Legal Expertise</h3>
                  <p className="text-gray-600">We know the RBI guidelines inside out and use them to your advantage.</p>
                </div>
              </div>
            </section>

            {/* Process */}
            <section id="process-steps" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-12">Our Settlement Roadmap</h2>
              <div className="relative border-l-4 border-[#7B1FA2] ml-6 md:ml-12 space-y-12">
                {[
                  { 
                    title: "Step 1: Loan & Harassment Audit", 
                    desc: "We analyze your loan statement to separate principal from penalties. We also document any instances of harassment for legal action." 
                  },
                  { 
                    title: "Step 2: Legal Cease & Desist", 
                    desc: "We send a strong legal notice to True Credits, demanding they stop contacting you and your references immediately." 
                  },
                  { 
                    title: "Step 3: RBI Complaint (If Needed)", 
                    desc: "If harassment continues, we escalate the matter to the RBI Ombudsman, citing specific violations of the Digital Lending Guidelines." 
                  },
                  { 
                    title: "Step 4: Settlement Negotiation", 
                    desc: "We negotiate with the lender's legal team. We aim to waive off all interest and penalties, settling for a amount close to the principal." 
                  },
                  { 
                    title: "Step 5: Formal Agreement", 
                    desc: "We verify the Settlement Letter from True Credits to ensure it guarantees full closure and no future claims." 
                  },
                  { 
                    title: "Step 6: Payment & NDC", 
                    desc: "You make the payment to the official account. We then ensure the loan is closed on the app and your CIBIL report is updated." 
                  }
                ].map((item, index) => (
                  <div key={index} className="relative pl-8 md:pl-12">
                    <div className="absolute -left-[14px] top-0 w-6 h-6 bg-white rounded-full border-4 border-[#7B1FA2] shadow-sm"></div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* RBI Rights */}
            <section id="rbi-rights" className="mb-16 scroll-mt-32">
              <div className="bg-[#F3E5F5] p-8 rounded-2xl border border-[#E1BEE7]">
                <div className="flex items-center gap-3 mb-6">
                  <FaLandmark className="text-3xl text-[#7B1FA2]" />
                  <h2 className="text-2xl font-bold text-[#7B1FA2]">RBI Digital Lending Guidelines</h2>
                </div>
                <p className="text-gray-800 mb-4">
                  The RBI has issued strict guidelines for digital lenders:
                </p>
                <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
                  <li className="flex items-start gap-2"><div className="w-2 h-2 mt-2 bg-[#7B1FA2] rounded-full"></div> <strong>Data Access:</strong> Apps cannot access your contacts or gallery.</li>
                  <li className="flex items-start gap-2"><div className="w-2 h-2 mt-2 bg-[#7B1FA2] rounded-full"></div> <strong>Cooling-off Period:</strong> You must be given time to exit the loan without penalty.</li>
                  <li className="flex items-start gap-2"><div className="w-2 h-2 mt-2 bg-[#7B1FA2] rounded-full"></div> <strong>KFS:</strong> Key Fact Statement must be provided before loan execution.</li>
                  <li className="flex items-start gap-2"><div className="w-2 h-2 mt-2 bg-[#7B1FA2] rounded-full"></div> <strong>Grievance Officer:</strong> Details must be prominently displayed.</li>
                </ul>
              </div>
            </section>

            {/* CIBIL Impact */}
            <section id="cibil-score" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Impact on CIBIL Score</h2>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <p className="text-gray-700 mb-4">
                    Settlement marks the account as "Settled" in CIBIL. This does lower your score.
                  </p>
                  <p className="text-gray-700 mb-4">
                    However, continuing to default is worse. A "Written Off" status or active "Overdue" status damages your score more severely and for a longer time.
                  </p>
                  <p className="text-gray-700">
                    After settlement, you can rebuild your score by using a secured credit card and paying bills on time for 12 months.
                  </p>
                </div>
                <div className="md:w-1/2 bg-white p-6 rounded-xl shadow-md border border-gray-200">
                  <h3 className="font-bold text-lg mb-4">Rebuilding Steps</h3>
                  <ul className="space-y-3 text-gray-600 text-sm">
                    <li className="flex items-center gap-2"><FaRegCheckCircle className="text-green-500" /> Get NDC from True Credits.</li>
                    <li className="flex items-center gap-2"><FaRegCheckCircle className="text-green-500" /> Check CIBIL for status update.</li>
                    <li className="flex items-center gap-2"><FaRegCheckCircle className="text-green-500" /> Apply for FD-backed credit card.</li>
                    <li className="flex items-center gap-2"><FaRegCheckCircle className="text-green-500" /> Keep utilization low (&lt;30%).</li>
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
                    <li className="flex items-center gap-3"><FaBook className="text-[#E1BEE7]" /> Loan Account Number (from App)</li>
                    <li className="flex items-center gap-3"><FaBook className="text-[#E1BEE7]" /> PAN Card & Aadhaar Card</li>
                    <li className="flex items-center gap-3"><FaBook className="text-[#E1BEE7]" /> Screenshots of Loan Details</li>
                  </ul>
                  <ul className="space-y-4 text-gray-300">
                    <li className="flex items-center gap-3"><FaBook className="text-[#E1BEE7]" /> Legal Notices (if any)</li>
                    <li className="flex items-center gap-3"><FaBook className="text-[#E1BEE7]" /> Proof of Financial Hardship</li>
                    <li className="flex items-center gap-3"><FaBook className="text-[#E1BEE7]" /> Bank Statements (Last 3 months)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Testimonials */}
            <section id="testimonials" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-10">Real Success Stories</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#7B1FA2]">
                  <div className="flex items-center mb-4">
                    <div className="text-[#7B1FA2] text-xl mr-2">★★★★★</div>
                    <span className="text-sm text-gray-500">Stopped Harassment</span>
                  </div>
                  <h4 className="font-bold text-lg mb-3">Privacy Protected</h4>
                  <p className="text-gray-600 italic mb-6 leading-relaxed">
                    "TrueBalance agents were calling my parents and friends, which was humiliating. AMA Legal Solutions sent a legal notice and filed a complaint. The calls stopped within 48 hours. We then settled the loan for 50% of the demand. I got my peace of mind back."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-600 text-xl">R</div>
                    <div>
                      <h4 className="font-bold text-gray-900">Rahul Sharma</h4>
                      <p className="text-xs text-gray-500">Student, Delhi</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#7B1FA2]">
                  <div className="flex items-center mb-4">
                    <div className="text-[#7B1FA2] text-xl mr-2">★★★★★</div>
                    <span className="text-sm text-gray-500">Settled Multiple Loans</span>
                  </div>
                  <h4 className="font-bold text-lg mb-3">Escaped the Debt Trap</h4>
                  <p className="text-gray-600 italic mb-6 leading-relaxed">
                    "I was stuck in a debt trap with multiple app loans, including True Credits. The interest was piling up daily. AMA Legal Solutions helped me prioritize and settle them one by one. For True Credits, they negotiated a waiver of all the extra charges. I am finally debt-free."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-600 text-xl">P</div>
                    <div>
                      <h4 className="font-bold text-gray-900">Pooja Verma</h4>
                      <p className="text-xs text-gray-500">Retail Employee, Mumbai</p>
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
        <section className="bg-[#7B1FA2] py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">End Your TrueBalance Loan Worries</h2>
            <p className="text-white/90 text-lg mb-10">
              Stop the harassment and settle your debt legally.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="px-10 py-4 bg-white text-[#7B1FA2] font-bold rounded-lg hover:bg-gray-100 transition-all shadow-xl text-lg">
                Book Free Consultation
              </Link>
              <a href="tel:+918700343611" className="px-10 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-[#7B1FA2] transition-all text-lg flex items-center justify-center gap-2">
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
