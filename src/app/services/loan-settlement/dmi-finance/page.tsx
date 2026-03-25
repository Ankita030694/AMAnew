import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "./FaqSection";
import { faqs } from "./faqs";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import { FaMobileAlt, FaGooglePay, FaFileContract, FaGavel, FaHandHoldingUsd, FaShieldAlt, FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";
import { MdSmartphone, MdOutlinePayments, MdSecurity } from "react-icons/md";

// Metadata
export const metadata = {
  title: "DMI Finance Loan Settlement | Samsung Finance+ & GPay Loans | AMA Legal Solutions",
  description: "Struggling with DMI Finance loans (Samsung Finance+, Google Pay)? Expert legal settlement services to stop phone locking, harassment, and reduce debt.",
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/services/loan-settlement/dmi-finance',
  },
  openGraph: {
    title: "DMI Finance Loan Settlement | Samsung Finance+ & GPay Loans | AMA Legal Solutions",
    description: "Struggling with DMI Finance loans (Samsung Finance+, Google Pay)? Expert legal settlement services to stop phone locking, harassment, and reduce debt.",
    url: "https://www.amalegalsolutions.com/services/loan-settlement/dmi-finance",
    type: "website",
    images: [
      {
        url: "/services/6.png",
        width: 1200,
        height: 630,
        alt: "DMI Finance Loan Settlement Services",
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
      "name": "DMI Finance Loan Settlement",
      "item": "https://www.amalegalsolutions.com/services/loan-settlement/dmi-finance"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "DMI Finance Loan Settlement: Guide for Samsung Finance+ & Digital Loans",
  "description": "Comprehensive guide on how to settle DMI Finance loans, including those taken for Samsung phones or via Google Pay. Learn about the OTS process.",
  "image": "https://www.amalegalsolutions.com/services/6.png",
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
  "name": "DMI Finance Loan Settlement Services",
  "image": "https://www.amalegalsolutions.com/services/6.png",
  "description": "Legal settlement services for DMI Finance loans.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "180"
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
        "name": "Rahul M."
      },
      "reviewBody": "My Samsung phone was locked because I missed EMIs to DMI Finance. AMA Legal Solutions helped me settle the loan and get my phone unlocked. Very professional."
    }
  ]
};

export default function DmiFinanceLoanSettlementPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "samsung-finance", title: "Samsung Finance+ & DMI" },
    { id: "digital-loans", title: "GPay & Digital Loans" },
    { id: "settlement-benefits", title: "Benefits of Settlement" },
    { id: "eligibility", title: "Eligibility Criteria" },
    { id: "process", title: "Settlement Process" },
    { id: "documents", title: "Required Documents" },
    { id: "legal-action", title: "Legal Consequences" },
    { id: "testimonials", title: "Success Stories" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Loan Settlement", href: "/services/loan-settlement" },
    { label: "DMI Finance", href: "/services/loan-settlement/dmi-finance" },
  ];

  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
        
        {/* Hero Section */}
        <div className="relative bg-[#1a1a1a] text-white overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/40 to-black/80 z-0"></div>
          <div className="absolute top-0 right-0 w-full h-full opacity-20 bg-[url('/circuit-pattern.png')]"></div>
          
          <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-6 tracking-wide uppercase shadow-lg">
                Consumer & Digital Loan Relief
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                Settle Your <span className="text-red-500">DMI Finance</span> Loans <br className="hidden md:block" /> & Unlock Your Peace of Mind
              </h1>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
                Whether it's a <strong>Samsung Finance+</strong> device loan or a <strong>Google Pay</strong> personal loan, we help you settle legally. Stop device locking and harassment today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-10 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-all shadow-lg transform hover:-translate-y-1">
                  Get Settlement Advice
                </Link>
                <a href="tel:+918700343611" className="px-10 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-black font-bold rounded-lg transition-all flex items-center justify-center gap-2">
                  Call: +91-8700343611
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-12 py-12">
          {/* Sidebar Navigation */}
          <div className="lg:w-1/4 hidden lg:block">
            <div className="sticky top-24">
              <TableOfContents sections={tocSections} orientation="vertical" />
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            
            {/* Introduction */}
            <section id="introduction" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">DMI Finance: The Giant Behind Your Digital Loans</h2>
              <div className="bg-white rounded-xl p-8 shadow-sm border-l-4 border-red-600">
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  <strong>DMI Finance Private Limited</strong> is not your typical bank. It is a technology-first Non-Banking Financial Company (NBFC) that has revolutionized—and in some ways, weaponized—digital lending in India. If you have bought a smartphone on EMI without a credit card, or taken an instant personal loan through an app, chances are DMI Finance is the lender behind the screen.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  They are the exclusive lending partner for <strong>Samsung Finance+</strong>, powering the EMI schemes for millions of Samsung devices. Beyond that, they are a primary lender for major fintech platforms like <strong>Google Pay (GPay), Paytm, PhonePe, and Mobikwik</strong>. Their reach is vast, penetrating deep into Tier 2 and Tier 3 cities where traditional banks fear to tread.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  However, their reliance on technology extends to their recovery methods. DMI Finance uses sophisticated algorithms and automated systems for collections. For Samsung users, this means the dreaded <strong>"Device Lock"</strong> via Knox Guard. For personal loan borrowers, it means an incessant barrage of automated calls, legal notices sent via WhatsApp and email, and aggressive digital recovery agents.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  At AMA Legal Solutions, we understand the unique "Tech-Legal" challenges posed by DMI Finance. We don't just negotiate money; we fight the technological coercion. Whether it's getting your phone unlocked or stopping the cyber-harassment from recovery agents, our specialized team knows exactly which legal levers to pull to bring DMI Finance to the settlement table.
                </p>
              </div>
            </section>

            {/* Samsung Finance+ Deep Dive */}
            <section id="samsung-finance" className="mb-16 scroll-mt-32">
              <div className="bg-blue-900 text-white rounded-2xl p-8 md:p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>
                <div className="relative z-10">
                  <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-4">
                    <MdSmartphone className="text-5xl text-blue-300" /> 
                    The Samsung Finance+ Trap: Understanding Knox Guard
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-12">
                    <div>
                      <h3 className="text-xl font-bold text-blue-200 mb-4">How It Works</h3>
                      <p className="text-blue-50 leading-relaxed mb-6">
                        When you buy a phone via Samsung Finance+, you aren't just signing a loan agreement; you are installing a "Digital Handcuff" called <strong>Knox Guard</strong>. This is a chip-level security layer that gives DMI Finance administrative control over your device.
                      </p>
                      <ul className="space-y-4 text-blue-100">
                        <li className="flex items-start gap-3">
                          <MdSecurity className="text-2xl text-blue-400 mt-1" />
                          <span><strong>The Reminder Stage:</strong> 3 days before the EMI date, the phone starts showing intrusive full-screen reminders.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <MdSecurity className="text-2xl text-blue-400 mt-1" />
                          <span><strong>The Lock Stage:</strong> The moment you miss a payment, the device locks. You can only make emergency calls. Your data, photos, and apps are inaccessible.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <MdSecurity className="text-2xl text-blue-400 mt-1" />
                          <span><strong>The Brick Stage:</strong> If you try to tamper with the software or "root" the device, Knox Guard can permanently disable the hardware (brick the phone), rendering it useless.</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
                      <h3 className="text-xl font-bold text-blue-200 mb-4">Our Unlocking Strategy</h3>
                      <p className="text-blue-50 mb-6">
                        Many local mobile repair shops claim they can "bypass" the lock. <strong>DO NOT DO THIS.</strong> It is illegal and voids your warranty. DMI Finance can track this and file a criminal case for "Destruction of Property" or "Cheating".
                      </p>
                      <p className="text-blue-50 mb-6">
                        The only legal way to unlock your phone is through settlement. Here is how we do it:
                      </p>
                      <ol className="list-decimal pl-5 space-y-3 text-blue-100">
                        <li><strong>Legal Notice:</strong> We send a notice to DMI stating that depriving you of your personal data (which may contain medical or work records) is a violation of your fundamental rights, even if EMI is pending.</li>
                        <li><strong>Settlement Negotiation:</strong> We negotiate a "One Time Settlement" to close the loan.</li>
                        <li><strong>NOC Generation:</strong> Once payment is made, DMI issues a clearance signal to the Knox server.</li>
                        <li><strong>Auto-Unlock:</strong> Your phone unlocks automatically within 24 hours of the settlement update.</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Digital Loans & Click-Wrap Agreements */}
            <section id="digital-loans" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Google Pay & The Reality of "Click-Wrap" Loans</h2>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                      <FaGooglePay className="text-3xl text-gray-700" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">The 2-Minute Loan Trap</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Apps like Google Pay and Paytm make it incredibly easy to get a loan. You click a few buttons, accept the "Terms & Conditions", and the money is in your account. This is called a <strong>Click-Wrap Agreement</strong>.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    <strong>The Problem:</strong> Most borrowers don't read the fine print. These agreements often contain clauses that allow DMI Finance to:
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
                    <li>Charge exorbitant penal interest (up to 36% p.a.).</li>
                    <li>Initiate arbitration in a city of their choice (usually Delhi).</li>
                    <li>Report defaults to CIBIL immediately.</li>
                  </ul>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                      <MdOutlinePayments className="text-3xl text-gray-700" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">The "Contact List" Fear</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    While DMI Finance is a regulated entity, some of the third-party apps they partner with (Loan Service Providers or LSPs) often ask for <strong>Contact List Permissions</strong>.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    If you are being threatened that "We will call your parents/boss", this is a violation of the <strong>RBI Digital Lending Guidelines 2022</strong>. DMI Finance is responsible for the conduct of its LSPs. We use these violations as leverage. If their agents harass you, we file a formal grievance with DMI's Nodal Officer and the RBI Ombudsman, forcing them to come to the negotiation table respectfully.
                  </p>
                </div>
              </div>
            </section>

            {/* Benefits Grid */}
            <section id="settlement-benefits" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Why Settle with AMA Legal Solutions?</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    icon: <FaHandHoldingUsd className="text-4xl text-red-600" />,
                    title: "Save Money",
                    desc: "We negotiate to waive off 100% of late fees and penal interest, often saving you 40-60% of the total debt."
                  },
                  {
                    icon: <FaShieldAlt className="text-4xl text-red-600" />,
                    title: "Legal Protection",
                    desc: "We stand between you and the recovery agents, ensuring no illegal harassment or threats."
                  },
                  {
                    icon: <FaFileContract className="text-4xl text-red-600" />,
                    title: "Formal Closure",
                    desc: "Get a valid 'No Dues Certificate' (NDC) from DMI Finance, ensuring the loan is closed permanently."
                  }
                ].map((card, i) => (
                  <div key={i} className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-red-600 hover:shadow-lg transition-all">
                    <div className="mb-4">{card.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
                    <p className="text-gray-600">{card.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Process Timeline */}
            <section id="process" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-12">Our Comprehensive Settlement Process</h2>
              <p className="text-gray-600 mb-10 text-lg">
                Settling with a tech-driven lender like DMI Finance requires a strategic, step-by-step approach. We don't just "ask" for a discount; we build a legal case for it.
              </p>
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                <div className="space-y-12">
                  {[
                    { 
                      step: "1", 
                      title: "Case Analysis & Harassment Shield", 
                      desc: "We start by analyzing your loan statement. Immediately, we issue a 'Letter of Representation' to DMI Finance. This legal document informs them that you have legal counsel, which typically stops the aggressive recovery calls to you and your family." 
                    },
                    { 
                      step: "2", 
                      title: "Legal Notice Response", 
                      desc: "If you have received a legal notice (Section 138, Arbitration, or Conciliation), we draft a strong legal reply. We deny any illegal claims and put on record your genuine intent to settle due to financial hardship, protecting you from ex-parte orders." 
                    },
                    { 
                      step: "3", 
                      title: "Hardship Documentation", 
                      desc: "We compile proofs of your financial crisis (job loss letter, medical bills, bank statements). DMI's system requires documented proof to approve a high-waiver settlement." 
                    },
                    { 
                      step: "4", 
                      title: "Strategic Negotiation", 
                      desc: "We engage with DMI's central settlement team. We push for a 'Principal-Only' settlement or a deep discount on the total outstanding. We leverage any past harassment or procedural lapses by their agents to get a better deal." 
                    },
                    { 
                      step: "5", 
                      title: "Settlement Letter Verification", 
                      desc: "DMI will issue a settlement letter. We verify it to ensure it mentions 'Full and Final Settlement' and clearly states that the loan will be closed and (for Samsung phones) the device will be unlocked." 
                    },
                    { 
                      step: "6", 
                      title: "Closure & NDC", 
                      desc: "You make the payment directly to DMI Finance (never to an agent). We track the payment and ensure you receive the No Dues Certificate (NDC) within 15-20 days." 
                    }
                  ].map((item, i) => (
                    <div key={i} className="relative pl-24">
                      <div className="absolute left-0 top-0 w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg border-4 border-white">
                        {item.step}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Legal Consequences */}
            <section id="legal-action" className="mb-16 scroll-mt-32">
              <div className="bg-red-50 border border-red-100 rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <FaExclamationTriangle className="text-4xl text-red-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Consequences of Ignoring DMI Finance</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-bold text-red-700 mb-2">Arbitration Proceedings</h3>
                    <p className="text-gray-700 mb-4">
                      DMI is quick to initiate arbitration. An arbitration award is legally binding and can be executed like a court decree against your assets.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-red-700 mb-2">Section 25 / 138 Cases</h3>
                    <p className="text-gray-700 mb-4">
                      If your NACH mandate or cheque bounces, they can file a criminal case under the Payment and Settlement Systems Act or NI Act.
                    </p>
                  </div>
                </div>
                <p className="mt-4 font-semibold text-gray-800">
                  Don't wait for legal action. Settle the debt before it reaches court.
                </p>
              </div>
            </section>

            {/* Testimonials */}
            <section id="testimonials" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-10">Real Success Stories</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 text-xl mr-2">★★★★★</div>
                    <span className="text-sm text-gray-500">Samsung Finance+ Case</span>
                  </div>
                  <p className="text-gray-600 italic mb-6 leading-relaxed">
                    "I am a final year student. I bought a Samsung A53 for my online classes. When my father fell sick, we missed 2 EMIs. DMI locked my phone right before my exams. I was panicked. I contacted AMA Legal Solutions. They immediately sent a legal notice to DMI about the exam situation. Within 48 hours, they negotiated a settlement. I paid ₹6,500 against the pending ₹14,000. My phone was unlocked the next morning. These guys are lifesavers."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center font-bold text-red-600 text-xl">R</div>
                    <div>
                      <h4 className="font-bold text-gray-900">Rahul Mishra</h4>
                      <p className="text-xs text-gray-500">Student, Delhi University</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 text-xl mr-2">★★★★★</div>
                    <span className="text-sm text-gray-500">Google Pay Loan Case</span>
                  </div>
                  <p className="text-gray-600 italic mb-6 leading-relaxed">
                    "I took a ₹2 Lakh loan via GPay for my sister's wedding. I lost my job in the tech layoffs. DMI's agents started calling my old office HR and my relatives. It was humiliating. AMA Legal Solutions stepped in and stopped the harassment completely. They handled all the calls. Finally, they settled the loan for ₹85,000. I got my NDC last week. Highly recommended for anyone facing DMI harassment."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-600 text-xl">S</div>
                    <div>
                      <h4 className="font-bold text-gray-900">Suresh K.</h4>
                      <p className="text-xs text-gray-500">Software Engineer, Pune</p>
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
        <section className="bg-gray-900 py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Close Your DMI Loan?</h2>
            <p className="text-gray-400 text-lg mb-10">
              Get expert legal help to settle your Samsung Finance+ or Personal Loan today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="px-10 py-4 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-all shadow-xl">
                Book Consultation
              </Link>
              <a href="tel:+918700343611" className="px-10 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-black transition-all">
                Call Now
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
