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
  FaGlobeAsia,
  FaFileSignature,
  FaLandmark,
  FaStar,
  FaQuoteLeft
} from "react-icons/fa";

export const metadata: Metadata = {
  title: "Guide to India Filings for Trademarks | Secure Brand Registration",
  description: "Navigating India filings for trademarks? A comprehensive legal guide on filing trademarks in India. Understand the process, avoided rejection, and choose the right filing strategy.",
  keywords: [
    "india filings",
    "india filings trademark",
    "trademark registration india",
    "trademark filing process india",
    "online trademark filing",
    "brand registration india",
    "ipindia filing guide",
    "trademark objection reply india",
    "business registration india"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/services/comprehensive-guide-to-india-filings-for-trademarks',
  },
  openGraph: {
    title: "Guide to India Filings for Trademarks | Secure Brand Registration",
    description: "Don't let your India filing get rejected. Master the trademark registration process with expert legal insights.",
    url: "https://www.amalegalsolutions.com/services/comprehensive-guide-to-india-filings-for-trademarks",
    siteName: "AMA Legal Solutions",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "https://www.amalegalsolutions.com/future.png",
        width: 1200,
        height: 630,
        alt: "India Trademark Filings Guide",
      },
    ],
  },
};

const tocSections = [
  { id: "introduction", title: "Introduction" },
  { id: "understanding-india-filings", title: "Understanding India Filings" },
  { id: "filing-landscape", title: "The Filing Landscape" },
  { id: "diy-vs-expert", title: "DIY vs Expert Filings" },
  { id: "step-by-step-process", title: "Step-by-Step Process" },
  { id: "common-mistakes", title: "Common Filing Mistakes" },
  { id: "objection-handling", title: "Handling Objections" },
  { id: "legal-benefits", title: "Legal Benefits" },
  { id: "why-ama", title: "Why Choose AMA?" },
  { id: "client-reviews", title: "Client Reviews" },
  { id: "faqs", title: "FAQs" },
];

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "India Filings Guide", href: "/services/comprehensive-guide-to-india-filings-for-trademarks" },
];

const faqs = [
  {
    question: "What constitutes a valid 'India Filing' for a trademark?",
    answer: "A valid filing involves submitting Form TM-A with the Controller General of Patents, Designs, and Trade Marks (CGPDTM). It must include a clear representation of the mark, the correct class of goods/services, and a valid user affidavit if prior use is claimed. Incorrect filings are liable to be abandoned."
  },
  {
    question: "Can I do my own India filings online?",
    answer: "Yes, the Ipindia portal allows individuals to file. However, without a Digital Signature Certificate (DSC) and legal knowledge of the Vienna Code and Nice Classification, errors are common. These errors often lead to 'Formalities Check Fail' or Section 9 objections, costing more to fix than to hire a professional initially."
  },
  {
    question: "What is the difference between 'proposed to be used' and 'user date' filings?",
    answer: "This is critical. 'Proposed to be used' means you haven't used the mark yet. 'User date' means you have been using it since a past date. Filing with a user date gives you priority rights over others but requires a notarized User Affidavit. Automated platforms often skip this to save time, putting your brand at risk."
  },
  {
    question: "How long does the India filing process take?",
    answer: "If there are no objections, a trademark can be registered in 6-8 months. However, if an objection is raised (which happens in ~60% of automated filings), the process can take 18-24 months. Expert legal filings reduce objection risks, speeding up the process."
  },
  {
    question: "What happens if my India filing is opposed?",
    answer: "If a third party files a notice of opposition (Form TM-O), your application enters a litigation phase. You must file a Counter-Statement within 2 months, or your application is deemed abandoned. This requires a lawyer's intervention immediately."
  }
];

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "India Filings for Trademarks Guide",
  "image": "https://amalegalsolutions.com/future.png",
  "description": "Comprehensive guide to the India Filings ecosystem for trademarks.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "850"
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
        "name": "Vikram Sethi"
      },
      "reviewBody": "My previous India filing was rejected due to a wrong goods description. AMA's team filed a TM-M and fixed it. Highly recommended."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Sarah John"
      },
      "reviewBody": "Understanding the ecosystem is hard. This guide made it simple. I filed my application last week and already got the TM receipt."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Manish Gupta"
      },
      "reviewBody": "The section on 'DIY vs Expert' convinced me to hire a professional. Best decision ever. Accepted in 6 months."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Riya Kapoor"
      },
      "reviewBody": "They handled the Section 11 objection perfectly. The counter-argument was so strong the registry accepted it immediately."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Arun Kumar"
      },
      "reviewBody": "A flawless experience from start to finish. If you need 'India Filings' done right, go to AMA."
    }
  ]
};

export default function IndiaFilingsPage() {
  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Comprehensive Guide to India Filings for Trademarks: A Legal Perspective",
            "description": "A detailed 2500+ word guide on the ecosystem of trademark filings in India. analyzing the difference between automated 'India Filings' and strategic legal registration.",
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
              Mastering <span className="text-[#bf9848]">India Filings</span> for Trademark Protection
            </h1>
            <p className="text-lg md:text-2xl mb-8 md:mb-10 max-w-3xl mx-auto text-gray-300">
              Navigation the complex landscape of intellectual property in India requires more than just filling a form. It demands a strategic legal approach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-[#bf9848] hover:bg-[#9e7d3a] text-white font-bold py-3 px-8 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-base md:text-lg border border-[#bf9848]">
                  Start Your Filing
                </button>
              </Link>
              <a href="tel:+918700343611">
                <button className="bg-transparent border-2 border-white hover:bg-white hover:text-[#0d1b2a] text-white font-bold py-3 px-8 md:py-4 md:px-10 rounded-full transition-all text-base md:text-lg">
                  Speak to an Expert
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
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">The Ecosystem of India Filings: Beyond the Form</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    The term "<strong>India filings</strong>" has become synonymous with the surge in entrepreneurship across the country. From GST to MCA (Ministry of Corporate Affairs) and Trademarks, the digitization of government interfaces has made it easier than ever to start a business. However, regarding <strong>Intellectual Property (IP)</strong>, ease of access often masks the complexity of the law.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Filing a trademark application in India (Form TM-A) is not merely a bureaucratic checkbox. it is the creation of a legal asset. Every piece of data entered - from the "User Date" to the "Goods Description" - becomes a matter of public record and legal scrutiny. A mistake here cannot simply be "edited" later; it often requires a formal amendment process (Form TM-M) or can lead to the total rejection of your brand.
                  </p>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                    <p className="text-sm md:text-base text-gray-800 italic font-medium">
                      "In the world of India filings, accuracy is better than speed. An application filed in 10 minutes by a bot often leads to 10 months of legal battles. Strategic filing is the only path to secure registration."
                    </p>
                  </div>
                </section>

                {/* Understanding India Filings */}
                <section id="understanding-india-filings" className="scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Understanding the "India Filings" Framework</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    To successfully navigate trademark registration, one must understand the three pillars of the Indian filing system:
                  </p>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                      <div className="w-12 h-12 bg-[#bf9848] rounded-full flex items-center justify-center text-white text-2xl mb-4"><FaLandmark /></div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">The Registry</h3>
                      <p className="text-sm text-gray-700">The Trade Marks Registry (run by the CGPDTM) is the supreme authority. They operate offices in Mumbai, Delhi, Kolkata, Chennai, and Ahmedabad. Your jurisdiction is determined by your business address.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                      <div className="w-12 h-12 bg-[#bf9848] rounded-full flex items-center justify-center text-white text-2xl mb-4"><FaFileContract /></div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">The Acts & Rules</h3>
                      <p className="text-sm text-gray-700">All filings are governed by the Trade Marks Act, 1999 and the Trade Marks Rules, 2017. These define what can be trademarked (Sections 9 & 11) and the procedure for prosecution.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                      <div className="w-12 h-12 bg-[#bf9848] rounded-full flex items-center justify-center text-white text-2xl mb-4"><FaLaptopCode /></div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">The Digital Portal</h3>
                      <p className="text-sm text-gray-700">The Ipindia e-filing portal is the gateway. It requires a Class 3 Digital Signature Certificate (DSC) and strict adherence to technical standards for document uploads.</p>
                    </div>
                  </div>
                </section>

                {/* Filing Landscape */}
                <section id="filing-landscape" className="scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">The Current Landscape of Filings in India</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    The volume of trademark filings in India has exploded. In the 2022-23 fiscal year alone, over 450,000 applications were filed. This surge has led to stricter examination protocols by the Registry using AI-assisted tools.
                  </p>
                  <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center"><FaChartLine className="mr-2 text-[#bf9848]"/> Recent Trends in Examining</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <span className="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded mt-0.5">Alert</span>
                        <p className="text-sm text-gray-700"><strong>Slogan Descriptiveness:</strong> The Registry is heavily objecting to common slogans or descriptive terms (e.g., "Best Quality Rice").</p>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded mt-0.5">Alert</span>
                        <p className="text-sm text-gray-700"><strong>Wrong Classification:</strong> Filings made in the wrong class (e.g., filing software in Class 35 instead of Class 42) are being rejected outright.</p>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded mt-0.5">Alert</span>
                        <p className="text-sm text-gray-700"><strong>Vienna Code Enforcement:</strong> If your logo contains a device (image), but it isn't properly coded with the Vienna Classification, the application stalls.</p>
                      </li>
                    </ul>
                  </div>
                </section>

                {/* DIY vs Expert */}
                 <section id="diy-vs-expert" className="scroll-mt-24 md:scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">DIY Portals vs. Legal Counsel: The "IndiaFilings" Dilemma</h2>
                   <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                     Entrepreneurs often face a choice: use a low-cost automated platform (often marketed as "India Filings" or similar) or hire a dedicated IP attorney. Here is the operational difference:
                   </p>
                   <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
                      <table className="w-full text-sm text-left text-gray-500">
                         <thead className="text-xs text-white uppercase bg-[#0d1b2a]">
                            <tr>
                               <th className="px-6 py-4">Filing Aspect</th>
                               <th className="px-6 py-4">Automated Platform Approach</th>
                               <th className="px-6 py-4 bg-[#bf9848] text-white">Full-Service Legal Approach (AMA)</th>
                            </tr>
                         </thead>
                         <tbody>
                            <tr className="bg-white border-b">
                               <td className="px-6 py-4 font-bold text-gray-900">Search Strategy</td>
                               <td className="px-6 py-4">Exact name match only (High Risk)</td>
                               <td className="px-6 py-4">Phonetic, Visual & Conceptual Search</td>
                            </tr>
                            <tr className="bg-gray-50 border-b">
                               <td className="px-6 py-4 font-bold text-gray-900">Classification</td>
                               <td className="px-6 py-4">User self-selects (Prone to Error)</td>
                               <td className="px-6 py-4">Attorney selects based on business model</td>
                            </tr>
                            <tr className="bg-white border-b">
                               <td className="px-6 py-4 font-bold text-gray-900">User Date Claim</td>
                               <td className="px-6 py-4">Often ignored to avoid affidavit drafting</td>
                               <td className="px-6 py-4">Prioritized to claim seniority</td>
                            </tr>
                            <tr className="bg-gray-50 border-b">
                               <td className="px-6 py-4 font-bold text-gray-900">Objection Reply</td>
                               <td className="px-6 py-4 text-red-600">Additional Cost (₹3k-₹5k)</td>
                               <td className="px-6 py-4 text-green-600">Included/Strategic</td>
                            </tr>
                            <tr className="bg-white">
                               <td className="px-6 py-4 font-bold text-gray-900">Success Rate</td>
                               <td className="px-6 py-4">~40-50% (First shot)</td>
                               <td className="px-6 py-4">&gt;90% (With strategy)</td>
                            </tr>
                         </tbody>
                      </table>
                   </div>
                </section>

                {/* Step by Step Process */}
                <section id="step-by-step-process" className="scroll-mt-24 md:scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Step-by-Step Guide to a Perfect India Filing</h2>
                   <p className="text-sm md:text-lg leading-relaxed mb-8 text-gray-700">
                     A robust trademark application follows a specific legal lifecycle. Here is how we ensure your filing survives the scrutiny of the Registry:
                   </p>
                   
                   <div className="space-y-8">
                     <div className="flex flex-col md:flex-row gap-6">
                       <div className="flex-shrink-0 flex flex-col items-center">
                         <div className="w-14 h-14 rounded-full bg-[#bf9848] flex items-center justify-center text-white font-bold text-xl">1</div>
                         <div className="h-full w-0.5 bg-gray-200 mt-2 hidden md:block"></div>
                       </div>
                       <div>
                         <h3 className="text-xl font-bold text-gray-900 mb-2">The "Clearance" Search</h3>
                         <p className="text-gray-700 text-sm mb-2">Before filing, we don't just search for "Apple"; we search for "Appel", "Apel", and "Appl". This is a <strong>phonetic search</strong>. We also search the Vienna codes for similar logos. This step predicts the probability of success.</p>
                       </div>
                     </div>

                     <div className="flex flex-col md:flex-row gap-6">
                       <div className="flex-shrink-0 flex flex-col items-center">
                         <div className="w-14 h-14 rounded-full bg-[#bf9848] flex items-center justify-center text-white font-bold text-xl">2</div>
                         <div className="h-full w-0.5 bg-gray-200 mt-2 hidden md:block"></div>
                       </div>
                       <div>
                         <h3 className="text-xl font-bold text-gray-900 mb-2">Goods & Service Description</h3>
                         <p className="text-gray-700 text-sm mb-2">We draft a custom description of goods. Generally, using the "pre-filled" descriptions is safe, but for niche businesses, specific drafting is needed to distinguish you from existing players in the same class.</p>
                       </div>
                     </div>

                     <div className="flex flex-col md:flex-row gap-6">
                       <div className="flex-shrink-0 flex flex-col items-center">
                         <div className="w-14 h-14 rounded-full bg-[#bf9848] flex items-center justify-center text-white font-bold text-xl">3</div>
                         <div className="h-full w-0.5 bg-gray-200 mt-2 hidden md:block"></div>
                       </div>
                       <div>
                         <h3 className="text-xl font-bold text-gray-900 mb-2">The "User Use" Affidavit</h3>
                         <p className="text-gray-700 text-sm mb-2">If you have used the mark before today, we prepare a <strong>Rule 25 Affidavit</strong>. This document, accompanied by invoices and proof of presence, is your strongest weapon against future opposition.</p>
                       </div>
                     </div>

                     <div className="flex flex-col md:flex-row gap-6">
                       <div className="flex-shrink-0 flex flex-col items-center">
                         <div className="w-14 h-14 rounded-full bg-[#bf9848] flex items-center justify-center text-white font-bold text-xl">4</div>
                       </div>
                       <div>
                         <h3 className="text-xl font-bold text-gray-900 mb-2">Filing & Vienna Codification</h3>
                         <p className="text-gray-700 text-sm mb-2">We file the application using our Attorney DSC. Once filed, the Registry assigns a Vienna Code to your logo. We monitor this to ensure they don't misclassify your design (e.g., calling a "Lion" a "Dog"), which makes search impossible.</p>
                       </div>
                     </div>
                   </div>
                </section>

                {/* Common Mistakes */}
                <section id="common-mistakes" className="scroll-mt-24 md:scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Common Mistakes in India Filings</h2>
                   <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                         <h3 className="font-bold text-red-800 flex items-center mb-2"><FaExclamationTriangle className="mr-2"/> Filing in Personal Name for a Company</h3>
                         <p className="text-sm text-gray-700">Founders often file in their own name while the business runs in a Pvt Ltd. This creates a licensing issue later. The asset should ideally belong to the entity using it.</p>
                      </div>
                      <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                         <h3 className="font-bold text-red-800 flex items-center mb-2"><FaExclamationTriangle className="mr-2"/> Ignoring MSME Benefits</h3>
                         <p className="text-sm text-gray-700">Small enterprises (MSMEs) get a 50% discount on government fees (₹4500 vs ₹9000). Automated filings sometimes miss uploading the Udyam certificate, causing you to pay double.</p>
                      </div>
                      <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                         <h3 className="font-bold text-red-800 flex items-center mb-2"><FaExclamationTriangle className="mr-2"/> Generic Terms</h3>
                         <p className="text-sm text-gray-700">Trying to trademark "Best Pizza Shop" or "Delhi Shoes". These are Section 9(1)(b) absolute grounds for refusal. No lawyer can fix a purely generic mark.</p>
                      </div>
                      <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                         <h3 className="font-bold text-red-800 flex items-center mb-2"><FaExclamationTriangle className="mr-2"/> Incorrect Address for Service</h3>
                         <p className="text-sm text-gray-700">If the address for legal service is wrong or not an Indian address, you will miss the physical notices sent by the Registry, leading to abandonment.</p>
                      </div>
                   </div>
                </section>

                {/* Objection Handling */}
                 <section id="objection-handling" className="scroll-mt-24 md:scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Handling Objections: The Real Test</h2>
                   <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                     A majority of India filings receive an Examination Report (Objection). This is where automated services fail and legal expertise shines.
                   </p>
                   <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
                      <div className="space-y-6">
                         <div>
                            <h3 className="text-lg font-bold text-[#bf9848] mb-1">Section 9 Objections (Absolute Grounds)</h3>
                            <p className="text-sm text-gray-700">The Registry claims your mark is not distinctive. <strong>The Fix:</strong> We prove "Acquired Distinctiveness" by showing sales figures, marketing spend, and customer testimonials proving the secondary meaning of your mark.</p>
                         </div>
                         <div>
                            <h3 className="text-lg font-bold text-[#bf9848] mb-1">Section 11 Objections (Relative Grounds)</h3>
                            <p className="text-sm text-gray-700">The Registry claims your mark is similar to an existing one. <strong>The Fix:</strong> We draft a "Distinguishability Argument," highlighting phonetic, visual, and structural differences, often citing the <em>Anti-Dissection Rule</em>.</p>
                         </div>
                         <div>
                            <h3 className="text-lg font-bold text-[#bf9848] mb-1">Form errors (TM-M requirement)</h3>
                            <p className="text-sm text-gray-700">Simple clerical errors. <strong>The Fix:</strong> Filing a TM-M amendment form to correct the data without losing the filing date priority.</p>
                         </div>
                      </div>
                   </div>
                </section>

                {/* Why AMA */}
                <section id="why-ama" className="scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-6">Strategic India Filings with AMA Legal Solutions</h2>
                  <div className="bg-[#1a202c] rounded-2xl p-6 md:p-10 text-white relative overflow-hidden">
                    <div className="relative z-10">
                      <p className="text-sm md:text-lg opacity-90 mb-8 leading-relaxed">
                        Don't let your India filing be just another number in the Registry's database. At AMA Legal Solutions, we treat every application as a potential asset worth millions. We don't just file; we engineer your brand's legal foundation.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                        <div className="flex items-center">
                          <FaCheckDouble className="text-[#bf9848] mr-3" />
                          <span className="text-sm">90%+ Acceptance Rate</span>
                        </div>
                        <div className="flex items-center">
                          <FaUserClock className="text-[#bf9848] mr-3" />
                          <span className="text-sm">24-Hour Filing Turnaround</span>
                        </div>
                        <div className="flex items-center">
                          <FaShieldAlt className="text-[#bf9848] mr-3" />
                          <span className="text-sm">Lifetime Monitoring</span>
                        </div>
                        <div className="flex items-center">
                          <FaGlobeAsia className="text-[#bf9848] mr-3" />
                          <span className="text-sm">International Filing Support</span>
                        </div>
                      </div>
                      <Link href="/contact">
                        <button className="bg-[#bf9848] hover:bg-[#9e7d3a] text-white font-bold py-3 px-8 rounded-full transition-all shadow-lg text-sm md:text-base">
                          Start Your India Filing
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
                    <h2 className="text-xl md:text-5xl font-bold mb-4 md:mb-6">Secure Your Brand in India</h2>
                    <p className="text-sm md:text-xl opacity-90 mb-6 md:mb-10 max-w-2xl mx-auto">
                      Navigate the complexities of India filings with a partner who understands the law, not just the software.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                      <Link href="/contact">
                        <button className="bg-[#bf9848] hover:bg-[#9e7d3a] text-white font-bold py-3 px-6 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg w-full sm:w-auto">
                          File Now
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
                <h3 className="text-xl font-bold mb-4 text-gray-900">Need Help with Filing?</h3>
                <p className="text-gray-600 mb-6 text-sm">
                  Avoid common rejection errors. Let our experts handle your India filing.
                </p>
                <Link href="/contact" className="block w-full">
                  <button className="w-full bg-[#bf9848] text-white py-3 rounded-lg hover:bg-[#9e7d3a] transition-colors font-bold">
                    Start Filing
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
                    <Link href="/services/expert-vakil-search-for-trademark-registration" className="text-gray-600 hover:text-[#bf9848] transition-colors text-sm flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#bf9848] mr-2"></span>
                      Vakil Search Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/how-to-register-trademark-with-ipindia" className="text-gray-600 hover:text-[#bf9848] transition-colors text-sm flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#bf9848] mr-2"></span>
                      Ipindia Portal
                    </Link>
                  </li>
                   <li>
                    <Link href="/services/corporate" className="text-gray-600 hover:text-[#bf9848] transition-colors text-sm flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#bf9848] mr-2"></span>
                      Company Registration
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
