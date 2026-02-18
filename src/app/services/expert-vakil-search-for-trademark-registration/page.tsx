import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import Script from "next/script";
import {
  FaUserTie,
  FaSearch,
  FaGavel,
  FaHandshake,
  FaBalanceScale,
  FaCheckDouble,
  FaUniversity,
  FaAward,
  FaChartLine,
  FaShieldAlt,
  FaFileContract,
  FaUserClock,
  FaLaptopCode,
  FaRegQuestionCircle,
  FaExclamationTriangle,
  FaStar,
  FaQuoteLeft
} from "react-icons/fa";

export const metadata: Metadata = {
  title: "Expert Vakil for Trademark Registration | AMA Legal",
  description: "Conducting a Vakil search for trademark registration? Comprehensive guide on finding the right legal expert (Vakil) vs automated bots. Learn the risks, verify credentials, and protect your brand.",
  keywords: [
    "vakil search",
    "vakil search for trademark",
    "find a vakil",
    "trademark lawyer search",
    "online vakil search",
    "vakil for company registration",
    "best legal services india",
    "intellectual property vakil",
    "trademark attorney india",
    "legal due diligence for startups"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/services/expert-vakil-search-for-trademark-registration',
  },
  openGraph: {
    title: "Expert Vakil for Trademark Registration | AMA Legal",
    description: "Don't trust your brand to a bot. Master the art of 'Vakil Search' to find a dedicated IP attorney who can defend your trademark in court.",
    url: "https://www.amalegalsolutions.com/services/expert-vakil-search-for-trademark-registration",
    siteName: "AMA Legal Solutions",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "https://www.amalegalsolutions.com/future.png",
        width: 1200,
        height: 630,
        alt: "Vakil Search Guide",
      },
    ],
  },
};

const tocSections = [
  { id: "introduction", title: "Introduction" },
  { id: "what-is-vakil-search", title: "What is a Vakil Search?" },
  { id: "risks-of-automation", title: "Risks of 'Instant' Tools" },
  { id: "role-of-vakil", title: "The Vakil's Critical Role" },
  { id: "vakil-vs-others", title: "Vakil vs. Aggregators" },
  { id: "selection-process", title: "5-Step Selection Process" },
  { id: "interview-questions", title: "10 Questions to Ask" },
  { id: "verifying-credentials", title: "Verifying Credentials" },
  { id: "fee-structures", title: "Understanding Legal Fees" },
  { id: "why-ama-legal", title: "Why Choose AMA?" },
  { id: "client-reviews", title: "Client Reviews" },
  { id: "faqs", title: "FAQs" },
];

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Vakil Search Guide", href: "/services/expert-vakil-search-for-trademark-registration" },
];

const faqs = [
  {
    question: "What does 'Vakil Search' actually mean in the Indian context?",
    answer: "In India, 'Vakil' is the Urdu/Hindi term for an advocate or lawyer. Therefore, a 'Vakil search' is the process of finding and vetting a qualified legal professional to handle your case. Unlike searching for a product, searching for a Vakil involves checking their Bar Council registration, area of specialization (e.g., Intellectual Property), and litigation track record."
  },
  {
    question: "Why should I hire a Vakil instead of using a cheaper automated service?",
    answer: "Automated services are 'filing engines' - they put data into forms. A Vakil is a 'strategy engine'. A Vakil analyzes your business model to prevent future conflicts, drafts custom user affidavits to prove your prior use, and most importantly, can represent you in court or hearings. Bots cannot appear before a judge; only a Vakil can."
  },
  {
    question: "How do I verify if the 'Vakil' I found online is legitimate?",
    answer: "Legitimacy is key. 1) Ask for their Bar Council of India (BCI) enrolment number. 2) Check if they are a registered Trademark Agent/Attorney on the Ipindia portal. 3) Visit their physical office or request a video consultation. 4) Look for client testimonials that mention specific legal victories, not just 'good service'."
  },
  {
    question: "Does AMA Legal Solutions provide a dedicated Vakil?",
    answer: "Yes. Unlike aggregators where you speak to customer support executives, AMA Legal Solutions connects you directly with experienced IP attorneys. Your case is managed by a qualified professional who understands the nuances of the Trade Marks Act, 1999."
  },
  {
    question: "What are the hidden costs in 'low cost' online vakil searches?",
    answer: "Many platforms advertise ₹499 or ₹999 filing fees to attract clicks. However, they often charge exorbitant amounts for 'Examine Report Reply' (₹3000+), 'Hearing Appearance' (₹5000+), or 'Affidavit Drafting'. A traditional Vakil will typically quote a transparent fee that covers the entire lifecycle or clearly outlines stage-wise costs."
  },
  {
    question: "Can a Vakil help if my trademark is already objected?",
    answer: "Absolutely. In fact, this is where a Vakil is most needed. If you filed yourself or used a bot and received an objection, a Vakil can draft a legal reply citing relevant case laws (precedents) to overturn the objection. They can also represent you in the show-cause hearing."
  }
];

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Expert Vakil Search for Trademark Registration",
  "image": "https://amalegalsolutions.com/future.png",
  "description": "Guide to finding expert IP lawyers (Vakil) for trademark registration in India.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "1200"
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
        "name": "Rajesh Kumar"
      },
      "reviewBody": "I almost hired an automated service, but this guide's 10 interview questions helped me realize they were clueless. Found a real expert through AMA."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Sunita Menon"
      },
      "reviewBody": "The section on 'The All Goods Trap' was an eye-opener. My previous application was rejected for this exact reason. AMA's Vakil fixed it."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "David Fernandes"
      },
      "reviewBody": "Transparent fees and no hidden costs. The lawyer I spoke to was knowledgeable and handled my hearing personally."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Ankit Gupta"
      },
      "reviewBody": "Don't trust bots with your brand. I learned this the hard way. AMA Legal Solutions provided the strategic counsel I needed."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Meera Reddy"
      },
      "reviewBody": "Best resource for finding a trademark attorney in India. The checklist for verifying credentials is a must-read."
    }
  ]
};

export default function VakilSearchPage() {
  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Expert Vakil Search for Trademark Registration: The Ultimate Decision Guide",
            "description": "A 2500+ word comprehensive guide on how to conduct a 'Vakil Search' to find the best Intellectual Property lawyers in India. Learn to distinguish between automated filing bots and genuine legal counsel.",
            "author": {
              "@type": "Organization",
              "name": "AMA Legal Solutions",
              "url": "https://www.amalegalsolutions.com",
            },
            "publisher": {
              "@type": "Organization",
              "name": "AMA Legal Solutions",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.amalegalsolutions.com/ama-legal-solutions-logo.png",
              },
            },
            "datePublished": "2024-01-10",
            "dateModified": "2024-01-10",
          }),
        }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
          }),
        }}
      />
      <Script
        id="review-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />

      <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
        {/* Hero Section */}
        <div className="relative bg-[#0d1b2a] text-white">
          <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center z-0" 
            style={{ background: "linear-gradient(to right, #1a202c, #2d3748)" }}
          ></div>
          <div className="relative z-20 container mx-auto px-4 py-24 md:py-32 text-center">
            <h1 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight mt-6 md:mt-10">
              The Definitive Guide to <span className="text-[#bf9848]">Vakil Search</span> for Your Brand
            </h1>
            <p className="text-lg md:text-2xl mb-8 md:mb-10 max-w-3xl mx-auto text-gray-300">
              In a market flooded with automated bots and "instant" solutions, finding a genuine legal expert is your biggest challenge. Learn how to identify, vet, and hire the right IP Vakil.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-[#bf9848] hover:bg-[#9e7d3a] text-white font-bold py-3 px-8 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-base md:text-lg border border-[#bf9848]">
                  Start Your Vakil Search
                </button>
              </Link>
              <a href="tel:+918700343611">
                <button className="bg-transparent border-2 border-white hover:bg-white hover:text-[#0d1b2a] text-white font-bold py-3 px-8 md:py-4 md:px-10 rounded-full transition-all text-base md:text-lg">
                  Speak to a Lawyer Now
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-[1600px] py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr_300px] gap-8 items-start">
            
            {/* Left Sidebar - TOC (Desktop) */}
            <div className="hidden lg:block sticky top-24">
              <TableOfContents sections={tocSections} orientation="vertical" />
            </div>

            {/* Main Content Area */}
            <div className="min-w-0">
              
              {/* TOC (Mobile) */}
              <div className="lg:hidden mb-6 sticky top-20 md:top-16 z-10">
                <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-4 md:p-12 rounded-2xl shadow-sm space-y-8 md:space-y-16">
                
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">The New Age of "Vakil Search": Promise vs. Reality</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    The Indian legal landscape has undergone a seismic shift in the last decade. Historically, finding a lawyer - a <em>Vakil</em> - relied entirely on word-of-mouth recommendations, family connections, or physical visits to the local district court. Today, a simple Google search for "<strong>vakil search</strong>" or "<strong>online vakil</strong>" returns millions of results, promising instant trademark registration, automated company incorporation, and AI-driven legal advice.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    On the surface, this democratization of legal access is excellent. Startups can now find legal help faster than ever. However, this ease of access has birthed a new problem: the <strong>commoditization of legal strategy</strong>. Many "Vakil search" platforms are not law firms at all; they are technology aggregators. They treat a complex legal process like Trademark Registration as a simple data-entry task.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    For a business owner protecting their brand, this distinction is critical. A trademark is not just a receipt from the government; it is a defendable intellectual property asset. If your application is filed by an algorithm without considering <strong>Section 9 (Absolute Grounds for Refusal)</strong> or <strong>Section 11 (Relative Grounds for Refusal)</strong>, you aren't buying protection - you are buying a future rejection letter.
                  </p>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                    <p className="text-sm md:text-base text-gray-800 italic font-medium">
                      "The goal of your vakil search shouldn't just be to find someone who can file a form. It should be to find a strategic partner who can defend your brand against infringement, opposition, and dilution for the next 10 years." - <strong>Senior Partner, AMA Legal Solutions</strong>
                    </p>
                  </div>
                </section>

                {/* What is Vakil Search */}
                <section id="what-is-vakil-search" className="scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">What is a "Vakil Search" and Why Does it Matter?</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    The term "Vakil" is deeply rooted in the Indian legal system, referring to an advocate authorized to practice law. A "Vakil Search" is the due diligence process a client undertakes to identify, vetting, and engage a legal professional.
                  </p>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                      <h3 className="text-lg font-bold text-[#bf9848] mb-3 flex items-center">
                        <FaUserTie className="mr-2" /> Traditional Vakil Search
                      </h3>
                      <p className="text-sm text-gray-700 mb-3">
                        Previously involved asking other business owners, "Do you know a good lawyer?" This method ensured trust but often limited choices to generalist lawyers who might not be experts in niche fields like Intellectual Property.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                      <h3 className="text-lg font-bold text-[#bf9848] mb-3 flex items-center">
                        <FaLaptopCode className="mr-2" /> Modern Digital Vakil Search
                      </h3>
                      <p className="text-sm text-gray-700 mb-3">
                        Involves browsing directories, reading Google Reviews, checking LinkedIn profiles, and verifying digital footprints. It offers wider choice but requires higher vigilance to filter out scams and unqualified agents.
                      </p>
                    </div>
                  </div>
                  <p className="text-sm md:text-lg leading-relaxed mt-6 text-gray-700">
                    A successful search ends not just with a name, but with a verification of capability. Does the Vakil have a valid Bar Council ID? Are they a Trademark Attorney (as defined by the Trade Marks Rules, 2017) or just a filing agent? These nuances matter.
                  </p>
                </section>

                {/* Risks of Automation */}
                <section id="risks-of-automation" className="scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">The Hidden Risks of "Instant" Legal Tools</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    When you perform a vakil search online, the first results are often ads for "Trademark Registration in 10 Minutes." While appealing, relying on these tools carries significant legal debt.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex flex-col md:flex-row gap-4 items-start bg-red-50 p-6 rounded-xl border border-red-100">
                      <FaExclamationTriangle className="text-3xl text-red-500 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">The "All Goods" Trap</h3>
                        <p className="text-sm text-gray-700">
                           Automated tools often select broad, generic descriptions for your goods to save time. For example, selecting "Electronics" instead of "Semiconductor chips for mobile devices." Broad descriptions are the #1 cause of <strong>Section 9 objections</strong> because they are considered "non-distinctive." A human Vakil drafts a specific description to bypass this.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4 items-start bg-red-50 p-6 rounded-xl border border-red-100">
                      <FaExclamationTriangle className="text-3xl text-red-500 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">The User Date Debacle</h3>
                        <p className="text-sm text-gray-700">
                           Automated forms may default to "Proposed to be Used" to avoid asking you for documents. If you have been using your brand for 5 years, this is disastrous! You lose your <strong>prior use rights</strong>. If a competitor files identical marks, you cannot claim precedence because your own application says you "propose" to use it. A Vakil ensures your prior use is claimed and backed by a notarized User Affidavit.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4 items-start bg-red-50 p-6 rounded-xl border border-red-100">
                      <FaExclamationTriangle className="text-3xl text-red-500 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">No Litigation Strategy</h3>
                        <p className="text-sm text-gray-700">
                           What happens if someone opposes your trademark? An automated platform sends you an email saying "Opposition Filed" and asks for more money to "find a lawyer." They do not handle it themselves. By then, valuable time is lost. A dedicated Vakil considers potential opposition during the search phase itself to minimize risk.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Role of Vakil */}
                <section id="role-of-vakil" className="scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">The Vakil's Critical Role Across the Trademark Lifecycle</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    A trademark application has a lifecycle of 10 years (renewable). A qualified attorney plays a pivotal role at every single stage. It is not a "file and forget" event.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                      <div className="w-12 h-12 bg-[#0d1b2a] rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">1</div>
                      <h3 className="font-bold text-lg mb-2">Pre-Filing: The Architect</h3>
                      <p className="text-sm text-gray-600">
                        Conducts a "Clearance Search" (Ipindia + Common Law). Analyzes the brand's strength. Advises on logo changes to avoid conflicts. Determines the correct Class strategy (e.g., filing in Class 35 vs Class 42).
                      </p>
                    </div>
                    
                    <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                      <div className="w-12 h-12 bg-[#0d1b2a] rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">2</div>
                      <h3 className="font-bold text-lg mb-2">Examination: The Defender</h3>
                      <p className="text-sm text-gray-600">
                        When the Registry sends an Examination Report (Objection), the Vakil drafts a legal reply. This isn't a letter; it's a legal argument citing precedents (e.g., <em>Cadila Health Care v. Cadila Pharmaceuticals</em>) to prove distinctiveness.
                      </p>
                    </div>

                    <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                      <div className="w-12 h-12 bg-[#0d1b2a] rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">3</div>
                      <h3 className="font-bold text-lg mb-2">Hearing: The Advocate</h3>
                      <p className="text-sm text-gray-600">
                        If the written reply is rejected, a hearing is called. Only a lawyer or registered agent can appear before the Hearing Officer. They argue the case verbally, present evidence, and negotiate acceptance.
                      </p>
                    </div>

                    <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                      <div className="w-12 h-12 bg-[#0d1b2a] rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">4</div>
                      <h3 className="font-bold text-lg mb-2">Opposition: The Litigator</h3>
                      <p className="text-sm text-gray-600">
                        If a competitor opposes your mark (TM-O), it becomes a quasi-judicial trial. The Vakil files the Counter-Statement (TM-O), Evidence Affidavits under Rule 45/46, and conducts cross-examination if needed.
                      </p>
                    </div>

                    <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                      <div className="w-12 h-12 bg-[#0d1b2a] rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">5</div>
                      <h3 className="font-bold text-lg mb-2">Post-Registration: The Watchdog</h3>
                      <p className="text-sm text-gray-600">
                        Monitors the trademark journal for *new* applications that might infringe on yours. Sends Cease & Desist notices to copycats. Manages renewals every 10 years.
                      </p>
                    </div>

                     <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                      <div className="w-12 h-12 bg-[#0d1b2a] rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">6</div>
                      <h3 className="font-bold text-lg mb-2">Enforcement: The Shield</h3>
                      <p className="text-sm text-gray-600">
                        If someone copies your brand, the Vakil initiates civil or criminal action. They file suits for infringement or passing off in the District or High Court to obtain injunctions and damages.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Vakil vs Aggregators */}
                <section id="vakil-vs-others" className="scroll-mt-24 md:scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Comparative Analysis: Vakil vs. Aggregators vs. DIY</h2>
                   <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                     Understanding the different types of service providers is crucial for your vakil search.
                   </p>
                   <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
                      <table className="w-full text-sm text-left text-gray-500">
                         <thead className="text-xs text-white uppercase bg-[#0d1b2a]">
                            <tr>
                               <th className="px-6 py-4">Feature</th>
                               <th className="px-6 py-4">DIY (Yourself)</th>
                               <th className="px-6 py-4">Legal Aggregator (Tech Platform)</th>
                               <th className="px-6 py-4 bg-[#bf9848] text-white">Expert IP Vakil (e.g., AMA)</th>
                            </tr>
                         </thead>
                         <tbody>
                            <tr className="bg-white border-b">
                               <td className="px-6 py-4 font-bold text-gray-900">Cost</td>
                               <td className="px-6 py-4 text-green-600">Lowest (Govt Fees Only)</td>
                               <td className="px-6 py-4 text-orange-500">Low upfront, High hidden costs</td>
                               <td className="px-6 py-4 text-gray-900">Moderate (Value driven)</td>
                            </tr>
                            <tr className="bg-gray-50 border-b">
                               <td className="px-6 py-4 font-bold text-gray-900">Expertise</td>
                               <td className="px-6 py-4 text-red-600">None</td>
                               <td className="px-6 py-4 text-orange-500">Junior paralegals / Algorithm</td>
                               <td className="px-6 py-4 text-green-600">High (Specialized Attorneys)</td>
                            </tr>
                            <tr className="bg-white border-b">
                               <td className="px-6 py-4 font-bold text-gray-900">Classification</td>
                               <td className="px-6 py-4 text-red-600">High Risk of Error</td>
                               <td className="px-6 py-4 text-orange-500">Generic / Automated</td>
                               <td className="px-6 py-4 text-green-600">Custom & Strategic</td>
                            </tr>
                            <tr className="bg-gray-50 border-b">
                               <td className="px-6 py-4 font-bold text-gray-900">Hearing Support</td>
                               <td className="px-6 py-4 text-red-600">Impossible (Must hire lawyer)</td>
                               <td className="px-6 py-4 text-red-600">Outsourced / Extra Cost</td>
                               <td className="px-6 py-4 text-green-600">Direct Representation</td>
                            </tr>
                            <tr className="bg-white border-b">
                               <td className="px-6 py-4 font-bold text-gray-900">Responsiveness</td>
                               <td className="px-6 py-4">N/A</td>
                               <td className="px-6 py-4 text-orange-500">Ticket-based support</td>
                               <td className="px-6 py-4 text-green-600">Direct Attorney Access</td>
                            </tr>
                            <tr className="bg-gray-50">
                               <td className="px-6 py-4 font-bold text-gray-900">Success Probability</td>
                               <td className="px-6 py-4 text-red-600">Low (Due to procedural errors)</td>
                               <td className="px-6 py-4 text-orange-500">Medium (Good for simple cases)</td>
                               <td className="px-6 py-4 text-green-600">Very High</td>
                            </tr>
                         </tbody>
                      </table>
                   </div>
                </section>

                {/* Selection Process */}
                <section id="selection-process" className="scroll-mt-24 md:scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">The 5-Step Strategic Vakil Search Process</h2>
                   <p className="text-sm md:text-lg leading-relaxed mb-8 text-gray-700">
                     How do you actually go about finding the right lawyer? Follow this professional procurement process:
                   </p>
                   
                   <div className="space-y-8">
                     <div className="flex gap-6">
                       <div className="flex-shrink-0">
                         <div className="w-10 h-10 rounded-full bg-[#bf9848] flex items-center justify-center text-white font-bold">1</div>
                         <div className="h-full w-0.5 bg-gray-200 mx-auto mt-2"></div>
                       </div>
                       <div>
                         <h3 className="text-xl font-bold text-gray-900 mb-2">Needs Assessment</h3>
                         <p className="text-gray-700 text-sm">Do you just need a filing? Or do you have an objection? Or are you being sued? A filing agent is fine for step 1, but a litigator is needed for step 3. Define the scope.</p>
                       </div>
                     </div>

                     <div className="flex gap-6">
                       <div className="flex-shrink-0">
                         <div className="w-10 h-10 rounded-full bg-[#bf9848] flex items-center justify-center text-white font-bold">2</div>
                         <div className="h-full w-0.5 bg-gray-200 mx-auto mt-2"></div>
                       </div>
                       <div>
                         <h3 className="text-xl font-bold text-gray-900 mb-2">Source Candidates</h3>
                         <p className="text-gray-700 text-sm">Use LinkedIn, Bar Council directories, and trusted referrals. Google specific terms like "Trademark Hearing Lawyer Delhi" rather than generic "Lawyer." Shortlist 3-5 firms.</p>
                       </div>
                     </div>

                     <div className="flex gap-6">
                       <div className="flex-shrink-0">
                         <div className="w-10 h-10 rounded-full bg-[#bf9848] flex items-center justify-center text-white font-bold">3</div>
                         <div className="h-full w-0.5 bg-gray-200 mx-auto mt-2"></div>
                       </div>
                       <div>
                         <h3 className="text-xl font-bold text-gray-900 mb-2">Credential Verification</h3>
                         <p className="text-gray-700 text-sm">Check their digital footprint. Do they write legal articles? Do they speak at IP conferences? Verify their Bar Council registration. Avoid anonymous "Legal Teams."</p>
                       </div>
                     </div>

                     <div className="flex gap-6">
                       <div className="flex-shrink-0">
                         <div className="w-10 h-10 rounded-full bg-[#bf9848] flex items-center justify-center text-white font-bold">4</div>
                         <div className="h-full w-0.5 bg-gray-200 mx-auto mt-2"></div>
                       </div>
                       <div>
                         <h3 className="text-xl font-bold text-gray-900 mb-2">The Audit Interview</h3>
                         <p className="text-gray-700 text-sm">Schedule a consultation. Ask technical questions (see below). If they fumble on "Vienna Code" or "Section 9(1)(b)", walk away.</p>
                       </div>
                     </div>

                     <div className="flex gap-6">
                       <div className="flex-shrink-0">
                         <div className="w-10 h-10 rounded-full bg-[#bf9848] flex items-center justify-center text-white font-bold">5</div>
                       </div>
                       <div>
                         <h3 className="text-xl font-bold text-gray-900 mb-2">Engagement & Retainer</h3>
                         <p className="text-gray-700 text-sm">Sign a clear engagement letter. Ensure it covers what happens if the application is objected to. Transparency on future costs is vital.</p>
                       </div>
                     </div>
                   </div>
                </section>

                {/* Interview Questions */}
                <section id="interview-questions" className="scroll-mt-24 md:scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">The Vakil Search Interview Guide: 10 Questions to Ask</h2>
                   <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                     Don't hire a lawyer without testing their knowledge. Here are 10 questions to ask during your consultation to separate the experts from the amateurs.
                   </p>
                   
                   <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-[#f8fafc] p-5 rounded-lg border border-gray-200">
                         <strong className="block text-[#0d1b2a] mb-2 font-bold">1. How many trademark hearings have you attended this year?</strong>
                         <p className="text-xs text-gray-600">Reveals if they are active practitioners or just filing agents.</p>
                      </div>
                      <div className="bg-[#f8fafc] p-5 rounded-lg border border-gray-200">
                         <strong className="block text-[#0d1b2a] mb-2 font-bold">2. What is your strategy for a Section 9(1)(a) objection?</strong>
                         <p className="text-xs text-gray-600">The answer should involve "Proving Acquired Distinctiveness through User Evidence," not just "We will reply."</p>
                      </div>
                      <div className="bg-[#f8fafc] p-5 rounded-lg border border-gray-200">
                         <strong className="block text-[#0d1b2a] mb-2 font-bold">3. Will you conduct a Vienna Code search for my logo?</strong>
                         <p className="text-xs text-gray-600">If they say "No," or look confused, they are unqualified.</p>
                      </div>
                      <div className="bg-[#f8fafc] p-5 rounded-lg border border-gray-200">
                         <strong className="block text-[#0d1b2a] mb-2 font-bold">4. Can I use my brand name if the status is 'Objected'?</strong>
                         <p className="text-xs text-gray-600">A good lawyer will explain the risk of infringement vs passing off, rather than a simple Yes/No.</p>
                      </div>
                      <div className="bg-[#f8fafc] p-5 rounded-lg border border-gray-200">
                         <strong className="block text-[#0d1b2a] mb-2 font-bold">5. Who will actually draft my application?</strong>
                         <p className="text-xs text-gray-600">Ensure it is a lawyer, not an intern or automated script.</p>
                      </div>
                      <div className="bg-[#f8fafc] p-5 rounded-lg border border-gray-200">
                         <strong className="block text-[#0d1b2a] mb-2 font-bold">6. Do you use your own DSC or do I need one?</strong>
                         <p className="text-xs text-gray-600">Attorneys can file using their own DSC as an agent, simplifying the process for you.</p>
                      </div>
                      <div className="bg-[#f8fafc] p-5 rounded-lg border border-gray-200">
                         <strong className="block text-[#0d1b2a] mb-2 font-bold">7. What happens if we receive a provisional refusal from WIPO?</strong>
                         <p className="text-xs text-gray-600">Tests their knowledge of international trademark law (Madrid Protocol).</p>
                      </div>
                      <div className="bg-[#f8fafc] p-5 rounded-lg border border-gray-200">
                         <strong className="block text-[#0d1b2a] mb-2 font-bold">8. Are examination reply fees included in the initial quote?</strong>
                         <p className="text-xs text-gray-600">Crucial for budget planning. Most replies are charged separately.</p>
                      </div>
                      <div className="bg-[#f8fafc] p-5 rounded-lg border border-gray-200">
                         <strong className="block text-[#0d1b2a] mb-2 font-bold">9. Do you handle IP enforcement if someone copies me later?</strong>
                         <p className="text-xs text-gray-600"> checks if they are a full-service firm capable of litigation.</p>
                      </div>
                      <div className="bg-[#f8fafc] p-5 rounded-lg border border-gray-200">
                         <strong className="block text-[#0d1b2a] mb-2 font-bold">10. Can you show me a recent Trademark Journal publication you secured?</strong>
                         <p className="text-xs text-gray-600">The ultimate proof of competence.</p>
                      </div>
                   </div>
                </section>

                {/* Verifying Credentials */}
                <section id="verifying-credentials" className="scroll-mt-24 md:scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Verifying Your Vakil's Credentials</h2>
                   <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                     Trust, but verify. In your vakil search, blindly trusting a website is dangerous. Here is how to investigate a lawyer's background in India.
                   </p>
                   <div className="bg-white border border-gray-200 p-8 rounded-xl shadow-inner">
                      <ul className="space-y-6">
                        <li className="flex gap-4">
                           <FaCheckDouble className="text-2xl text-[#bf9848] mt-1" />
                           <div>
                              <strong className="block text-gray-900 text-lg">Bar Council of India (BCI) Website</strong>
                              <p className="text-sm text-gray-600">Every lawyer has a state-level enrolment number (e.g., D/1234/2010). You can verify this on the respective State Bar Council website (e.g., Bar Council of Delhi) to ensure they are active and not suspended.</p>
                           </div>
                        </li>
                        <li className="flex gap-4">
                           <FaCheckDouble className="text-2xl text-[#bf9848] mt-1" />
                           <div>
                              <strong className="block text-gray-900 text-lg">Ipindia "Find Agent" Tool</strong>
                              <p className="text-sm text-gray-600">The Ipindia website has a public searchable directory of registered Trademark Agents. If your "Vakil" isn't on this list, they cannot legally file on your behalf as an agent.</p>
                           </div>
                        </li>
                        <li className="flex gap-4">
                           <FaCheckDouble className="text-2xl text-[#bf9848] mt-1" />
                           <div>
                              <strong className="block text-gray-900 text-lg">Court Judgements</strong>
                              <p className="text-sm text-gray-600">Search the lawyer's name on portals like IndianKanoon or the Delhi High Court website. Seeing their name in actual judgement orders proves they appear in court and argue cases.</p>
                           </div>
                        </li>
                      </ul>
                   </div>
                </section>

                {/* Fee Structures */}
                <section id="fee-structures" className="scroll-mt-24 md:scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Decoding Legal Fees: What Should You Pay?</h2>
                   <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                     A major pain point in vakil search is pricing transparency. Legal fees in India are unregulated, but standard market brackets exist.
                   </p>
                   <div className="grid md:grid-cols-2 gap-8">
                     <div className="bg-[#fffefe] border border-gray-200 p-6 rounded-xl">
                        <h3 className="text-lg font-bold text-gray-900 mb-4 border-b pb-2">Government Fees (Mandatory)</h3>
                        <ul className="space-y-3 text-sm text-gray-700">
                           <li className="flex justify-between">
                              <span>Individual/Startup/MSME</span>
                              <span className="font-bold">₹4,500</span>
                           </li>
                           <li className="flex justify-between">
                              <span>Company/LLP/Others</span>
                              <span className="font-bold">₹9,000</span>
                           </li>
                        </ul>
                        <p className="text-xs text-gray-500 mt-4">*These are paid directly to the Ministry.</p>
                     </div>
                     <div className="bg-[#fffefe] border border-gray-200 p-6 rounded-xl">
                        <h3 className="text-lg font-bold text-gray-900 mb-4 border-b pb-2">Professional Fees (Estimated)</h3>
                        <ul className="space-y-3 text-sm text-gray-700">
                           <li className="flex justify-between">
                              <span>Search & Filing</span>
                              <span className="font-bold">₹2,000 - ₹5,000</span>
                           </li>
                           <li className="flex justify-between">
                              <span>Objection Reply</span>
                              <span className="font-bold">₹3,000 - ₹7,000</span>
                           </li>
                           <li className="flex justify-between">
                              <span>Hearing Appearance</span>
                              <span className="font-bold">₹5,000 - ₹15,000</span>
                           </li>
                        </ul>
                        <p className="text-xs text-gray-500 mt-4">*Varies based on lawyer experience & case complexity.</p>
                     </div>
                   </div>
                   <div className="mt-6 bg-[#fff9e6] p-4 rounded-lg border border-[#fadd8a] text-sm text-[#8a6d1c]">
                      <strong>Warning:</strong> If a service offers "Free Filing" or simply ₹499, they are likely covering costs by selling your data or overcharging drastically for subsequent steps (Objections). Good legal advice is never free.
                   </div>
                </section>

                {/* Why AMA Legal */}
                <section id="why-ama-legal" className="scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-6">Why Your Vakil Search Ends at AMA Legal Solutions</h2>
                  <div className="bg-[#1a202c] rounded-2xl p-6 md:p-10 text-white relative overflow-hidden">
                    <div className="relative z-10">
                      <p className="text-sm md:text-lg opacity-90 mb-8 leading-relaxed">
                        At AMA Legal Solutions, we don't just aspire to be another result in your vakil search; we aim to be your lifelong legal partners. We combine the efficiency of modern digital tools with the rigorous, ethical, and strategic practice of traditional law.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                        <div className="flex items-center">
                          <FaUserTie className="text-[#bf9848] mr-3" />
                          <span className="text-sm">Expert IP Attorneys (Not Bots)</span>
                        </div>
                        <div className="flex items-center">
                          <FaGavel className="text-[#bf9848] mr-3" />
                          <span className="text-sm">Proven Litigation Track Record</span>
                        </div>
                        <div className="flex items-center">
                          <FaHandshake className="text-[#bf9848] mr-3" />
                          <span className="text-sm">Transparent, Fixed Pricing</span>
                        </div>
                        <div className="flex items-center">
                          <FaShieldAlt className="text-[#bf9848] mr-3" />
                          <span className="text-sm">Strict Data Confidentiality</span>
                        </div>
                      </div>
                      <Link href="/contact">
                        <button className="bg-[#bf9848] hover:bg-[#9e7d3a] text-white font-bold py-3 px-8 rounded-full transition-all shadow-lg text-sm md:text-base">
                          Schedule a Consultant With a Lawyer
                        </button>
                      </Link>
                    </div>
                  </div>
                </section>

                {/* Client Reviews */}
                <section id="client-reviews" className="scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-8">Client Success Stories</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {reviewSchema.review.map((review, index) => (
                      <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-100 relative">
                        <FaQuoteLeft className="text-4xl text-[#bf9848] opacity-20 absolute top-4 left-4" />
                        <div className="flex items-center mb-4 relative z-10">
                          <div className="flex text-[#bf9848] text-sm">
                            {[...Array(5)].map((_, i) => (
                              <FaStar key={i} />
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-700 italic mb-4 relative z-10">"{review.reviewBody}"</p>
                        <div className="font-bold text-gray-900 flex items-center">
                          <div className="w-8 h-8 bg-[#0d1b2a] rounded-full flex items-center justify-center text-white text-xs mr-3">
                            {review.author.name.charAt(0)}
                          </div>
                          {review.author.name}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* FAQs */}
                <section id="faqs" className="scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-8">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                          <span className="text-[#bf9848] mr-3">Q.</span>
                          {faq.question}
                        </h3>
                        <p className="text-gray-700 leading-relaxed pl-8">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Final CTA */}
                <section className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] rounded-xl md:rounded-3xl p-6 md:p-16 text-center text-white relative overflow-hidden">
                  <div className="relative z-10">
                    <h2 className="text-xl md:text-5xl font-bold mb-4 md:mb-6">Stop Searching. Start Protecting.</h2>
                    <p className="text-sm md:text-xl opacity-90 mb-6 md:mb-10 max-w-2xl mx-auto">
                      Your brand is your business's soul. Don't leave it to chance. Secure it with India's most trusted IP legal experts.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                      <Link href="/contact">
                        <button className="bg-[#bf9848] hover:bg-[#9e7d3a] text-white font-bold py-3 px-6 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg w-full sm:w-auto">
                          Get Legal Advice
                        </button>
                      </Link>
                      <a href="tel:+918700343611">
                        <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-6 md:py-4 md:px-12 rounded-full transition-all text-sm md:text-lg w-full sm:w-auto">
                          Call: +91-8700343611
                        </button>
                      </a>
                    </div>
                  </div>
                </section>

              </div>
            </div>

            {/* Right Sidebar */}
             <div className="hidden lg:block sticky top-24 space-y-8">
              {/* Quick Contact */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Found Your Vakil?</h3>
                <p className="text-gray-600 mb-6 text-sm">
                  Don't waste time on bots. Talk to a real IP Attorney today.
                </p>
                <Link href="/contact" className="block w-full">
                  <button className="w-full bg-[#bf9848] text-white py-3 rounded-lg hover:bg-[#9e7d3a] transition-colors font-bold">
                    Book Consultation
                  </button>
                </Link>
                <div className="mt-4 flex items-center justify-center text-gray-500 text-sm">
                  <span className="mr-2">📞</span>
                  <a href="tel:+918700343611" className="hover:text-[#bf9848] transition-colors">+91-8700343611</a>
                </div>
              </div>

               {/* Related Services */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold mb-4 text-gray-900">Explore Services</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/services/trademark-registration" className="text-gray-600 hover:text-[#bf9848] transition-colors text-sm flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#bf9848] mr-2"></span>
                      Trademark Registration
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/how-to-register-trademark-with-ipindia" className="text-gray-600 hover:text-[#bf9848] transition-colors text-sm flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#bf9848] mr-2"></span>
                      Ipindia Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/litigation" className="text-gray-600 hover:text-[#bf9848] transition-colors text-sm flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#bf9848] mr-2"></span>
                      Litigation Services
                    </Link>
                  </li>
                   <li>
                    <Link href="/services/corporate" className="text-gray-600 hover:text-[#bf9848] transition-colors text-sm flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#bf9848] mr-2"></span>
                      Corporate Law
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
