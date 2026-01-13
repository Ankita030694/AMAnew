import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import Script from "next/script";
import {
  FaCheckCircle,
  FaExclamationTriangle,
  FaFileAlt,
  FaSearch,
  FaLaptopCode,
  FaUserShield,
  FaGlobe,
  FaIdCard,
  FaStar,
  FaQuoteLeft,
} from "react-icons/fa";

export const metadata: Metadata = {
  title: "How to Register Trademark with Ipindia | Official Portal Guide",
  description: "Master the Ipindia portal (ipindia.gov.in) for trademark registration. Detailed guide on DSC, Public Search, Form TM-A, and checking application status.",
  keywords: [
    "Ipindia trademark registration",
    "how to register trademark with ipindia",
    "ipindia public search",
    "ipindia login",
    "trademark e-filing india",
    "ipindia trademark status",
    "brand registration ipindia",
    "ipindia user registration",
    "digital signature for trademark"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/services/how-to-register-trademark-with-ipindia',
  },
  openGraph: {
    title: "How to Register Trademark with Ipindia | Official Portal Guide",
    description: "Master the Ipindia portal for trademark registration. Expert guide on creating an account, performing public search, and filing TM-A on ipindia.gov.in.",
    url: "https://www.amalegalsolutions.com/services/how-to-register-trademark-with-ipindia",
    siteName: "AMA Legal Solutions",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "https://www.amalegalsolutions.com/future.png",
        width: 1200,
        height: 630,
        alt: "Ipindia Trademark Registration Guide",
      },
    ],
  },
};

const tocSections = [
  { id: "introduction", title: "Introduction" },
  { id: "why-ipindia", title: "Why Ipindia?" },
  { id: "prerequisites", title: "Prerequisites" },
  { id: "public-search-guide", title: "Public Search Guide" },
  { id: "registration-steps", title: "Registration Process" },
  { id: "status-meanings", title: "Status Meanings" },
  { id: "common-mistakes", title: "Common Mistakes" },
  { id: "why-hire-expert", title: "Why Hire Experts?" },
  { id: "client-reviews", title: "Client Reviews" },
  { id: "faqs", title: "FAQs" },
];

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Ipindia Trademark Guide", href: "/services/how-to-register-trademark-with-ipindia" },
];

const faqs = [
  {
    question: "What is the official website for trademark registration in India?",
    answer: "The only official website for trademark registration in India is ipindia.gov.in, managed by the Office of the Controller General of Patents, Designs & Trade Marks (CGPDTM). Beware of private websites that look similar; they are third-party service providers. For official e-filing, you must access the comprehensive e-filing gateway via the Ipindia portal."
  },
  {
    question: "Do I need a Digital Signature Certificate (DSC) for Ipindia?",
    answer: "Yes, a Class 3 Digital Signature Certificate (DSC) is mandatory. The Ipindia portal is fully digitized, and all forms (TM-A, TM-O, TM-M) must be digitally signed. You cannot create a user account or submit an application without a valid DSC registered on the portal. This ensures the authenticity of the applicant."
  },
  {
    question: "How do I perform a trademark availability search on Ipindia?",
    answer: "Visit ipindia.gov.in > Trade Marks > Related Links > Public Search. Select the 'Wordmark' option for brand names. Enter your mark and the Class (1-45). Crucially, perform three types of searches: 'Start With', 'Contains', and 'Match With'. Also, perform a 'Phonetic' search to find similar-sounding names that could cause successful opposition against your mark."
  },
  {
    question: "What is the difference between 'Send to Vienna Codification' and 'Formalities Chk Pass'?",
    answer: "'Send to Vienna Codification' means your application includes a logo, and it is being assigned a Vienna Code for image classification. 'Formalities Chk Pass' means your application has passed the initial check for basic document completeness and is now waiting for substantive examination by a Trademark Examiner."
  },
  {
    question: "Can I file a trademark registration on Ipindia personally?",
    answer: "Yes, individuals can file as 'Proprietors'. However, the system is complex. Selecting the wrong 'User Date', invalid 'Goods description', or incorrect 'Class' can lead to permanent rejection. The legal nuances of responding to examination reports often require a trademark attorney's expertise."
  },
  {
    question: "What should I do if the Ipindia portal is not accepting my DSC?",
    answer: "This is a common technical issue. The Ipindia portal uses a specific signing component. Ensure you have the latest 'Capicom' or proper Java settings enabled. Often, using 'Internet Explorer Mode' in Microsoft Edge allows the signing component to load correctly. If issues persist, professional IP attorneys have configured systems to bypass these hurdles."
  },
  {
    question: "How do I check my trademark application status?",
    answer: "Go to 'Trade Mark Application/Registered Mark Status' on the Ipindia website. Select 'National/IRDI Number' on the left side. Enter your 6 or 7-digit application number and the captcha code. The system will show you the current status (e.g., Objected, Advertised) and allow you to download examination reports."
  },
  {
    question: "Is the government fee different for Startups on Ipindia?",
    answer: "Yes, the government heavily subsidizes fees for MSMEs and Startups. If you have a Udyam Registration or Startup India Certificate, the filing fee is ₹4,500. For other corporate entities (Pvt Ltd, LLP) without these certificates, the fee is ₹9,000 per class."
  }
];

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Ipindia Trademark Registration Guide",
  "image": "https://amalegalsolutions.com/future.png",
  "description": "Comprehensive guide to Ipindia trademark registration, DSC, and public search.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "950"
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
        "name": "Karan Patel"
      },
      "reviewBody": "The step-by-step guide on fixing Digital Signature errors was a lifesaver. Saved me ₹5000 in agent fees."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Sneha Gupta"
      },
      "reviewBody": "I was stuck at the 'Send to Vienna Codification' status for months. This guide explained exactly what it meant and why I didn't need to panic."
    },
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
      "reviewBody": "Unlike other blogs that just give generic advice, this page actually tells you which Class to pick for an e-commerce store. Brilliant."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Priya Desai"
      },
      "reviewBody": "I filed my trademark using this guide and got the registration certificate in just 7 months without a single objection."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Amit Verma"
      },
      "reviewBody": "Highly recommend their professional help if you get stuck. I messed up my User Affidavit, and their team fixed it via Form TM-M in 24 hours."
    }
  ]
};

export default function IpindiaTrademarkPage() {
  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "How to Register Trademark with Ipindia: The Ultimate Guide",
            "description": "Comprehensive guide to using the Ipindia portal for trademark registration. Learn about DSC, Public Search, and e-filing Form TM-A.",
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
            style={{ background: "linear-gradient(to right, #000000, #141e30)" }}
          ></div>
          <div className="relative z-20 container mx-auto px-4 py-24 md:py-32 text-center">
            <h1 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight mt-6 md:mt-10">
              Mastering <span className="text-[#bf9848]">Ipindia Trademark</span> Registration
            </h1>
            <p className="text-lg md:text-2xl mb-8 md:mb-10 max-w-3xl mx-auto text-gray-300">
              The definitive expert guide to navigating the official ipindia.gov.in portal. Secure your brand identity with precision, compliant filing, and strategic legal support.
            </p>
            <Link href="/contact">
              <button className="bg-[#bf9848] hover:bg-[#9e7d3a] text-white font-bold py-3 px-8 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-base md:text-lg border border-[#bf9848]">
                Start Your E-Filing
              </button>
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-[1600px] py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
            
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

              <div className="bg-white p-3 md:p-12 rounded-2xl shadow-sm space-y-6 md:space-y-12">
                
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-6">Navigating the Ipindia Portal: A Professional's Guide</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    The <strong>Ipindia portal</strong> (ipindia.gov.in) is the digital backbone of intellectual property rights in India. Managed by the CGPDTM, it effectively revolutionized trademark filing by moving from paper-based submissions to a centralized e-filing system. For business owners, this transparency is a boon; however, the platform's technical rigidity makes it unforgiving of errors.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    Successfully registering a trademark isn't just about creating an account. It involves understanding the <strong>legal implications</strong> of every checkbox you tick. Whether defining your "User Date" or selecting the "Nature of Business," the data entered on Ipindia becomes a permanent legal record that can be challenged in court.
                  </p>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                    <p className="text-sm md:text-base text-gray-800 italic">
                      "The Ipindia portal is a tool, but IPR law is the rulebook. Mastering the tool without knowing the rulebook often leads to application abandonment."
                    </p>
                  </div>
                </section>

                {/* Why Ipindia */}
                <section id="why-ipindia" className="scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-6">Why E-Filing on Ipindia is Superior</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                    While manual filing exists, e-filing via Ipindia is the industry standard for several critical reasons:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                      <h3 className="text-lg font-bold text-[#bf9848] mb-2">10% Fee Reduction</h3>
                      <p className="text-sm text-gray-700">The government encourages digital adoption by offering a 10% discount on official fees for e-filing compared to physical filing.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                      <h3 className="text-lg font-bold text-[#bf9848] mb-2">Instant Receipt</h3>
                      <p className="text-sm text-gray-700">You generate an immediate filing receipt with a temporary TM number, allowing you to use the "TM" symbol instantly.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                      <h3 className="text-lg font-bold text-[#bf9848] mb-2">Real-Time Status</h3>
                      <p className="text-sm text-gray-700">The online dashboard allows 24/7 monitoring of application status, putting you in control of your IP portfolio.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                      <h3 className="text-lg font-bold text-[#bf9848] mb-2">Digital Notices</h3>
                      <p className="text-sm text-gray-700">Examination reports and hearing notices are communicated digitally, reducing the risk of missing critical deadlines.</p>
                    </div>
                  </div>
                </section>

                {/* Prerequisites */}
                <section id="prerequisites" className="scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-6">Prerequisites: Before You Log In</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    You cannot simply sign up with an email ID. The Ipindia gateway has strict cryptographic requirements.
                  </p>
                  <div className="space-y-6">
                    <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
                      <div className="flex items-center mb-4">
                        <FaIdCard className="text-3xl text-[#bf9848] mr-4" />
                        <h3 className="text-xl font-bold text-gray-900">Class 3 Digital Signature (DSC)</h3>
                      </div>
                      <p className="text-gray-700 mb-2">
                        This is the digital equivalent of a notarized signature. You must procure a Class 3 DSC (Signing + Encryption) from a certifying authority.
                      </p>
                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                        <li>Required for creating the user account.</li>
                        <li>Required for signing Form TM-A.</li>
                        <li>Must be renewed every 2-3 years.</li>
                      </ul>
                    </div>

                    <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
                      <div className="flex items-center mb-4">
                        <FaLaptopCode className="text-3xl text-[#bf9848] mr-4" />
                        <h3 className="text-xl font-bold text-gray-900">System Configuration</h3>
                      </div>
                      <p className="text-gray-700 mb-2">
                        The portal uses legacy signing components. Modern browsers often block them.
                      </p>
                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                        <li><strong>Browser:</strong> Internet Explorer Mode in Edge or Mozilla Firefox (older versions).</li>
                        <li><strong>Java:</strong> Specific Java Runtime Environment (JRE) versions are often needed for the signing utility to launch.</li>
                        <li><strong>Pop-ups:</strong> Pop-up blockers must be disabled for the payment gateway to function.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Public Search Guide */}
                <section id="public-search-guide" className="scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-6">The Art of Ipindia Public Search</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                    The "Public Search" tab is your most important tool. A lazy search leads to rejection. At AMA Legal Solutions, our attorneys perform a "3-Layer Search" strategy.
                  </p>
                   <div className="space-y-4">
                    <div className="border-l-4 border-[#bf9848] pl-4">
                      <h3 className="font-bold text-lg text-gray-900">Layer 1: The Wordmark Scan</h3>
                      <p className="text-sm text-gray-700">
                        We check "Start With," "Contains," and "Match With" for the brand name. Example: For "Zenith," we check "Zenith," "Zen," and "Nith."
                      </p>
                    </div>
                    <div className="border-l-4 border-[#bf9848] pl-4">
                      <h3 className="font-bold text-lg text-gray-900">Layer 2: Phonetic Analysis</h3>
                      <p className="text-sm text-gray-700">
                        The registry objects to similar-sounding names. We search phonetically. "Xenith" will block "Zenith." This is where most DIY applications fail.
                      </p>
                    </div>
                    <div className="border-l-4 border-[#bf9848] pl-4">
                      <h3 className="font-bold text-lg text-gray-900">Layer 3: Vienna Code (Logo) Search</h3>
                      <p className="text-sm text-gray-700">
                        If your mark has a logo (e.g., a Lion), we search Vienna Code 3.1.1 (Lions). You cannot trademark a lion logo if another lion logo exists in the same class, even if the brand names differ.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Registration Steps */}
                <section id="registration-steps" className="scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-6">Step-by-Step E-Filing Guide</h2>
                  <div className="relative border-l-4 border-[#bf9848] ml-6 space-y-12">
                    
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#bf9848] rounded-full border-4 border-white"></div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Step 1: Account Creation</h3>
                      <p className="text-gray-700">
                        Navigate to "New User Registration". Select "Proprietor" (for individuals) or "Attorney/Agent" (for professionals). Enter your details exactly as per your DSC.
                      </p>
                    </div>

                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#bf9848] rounded-full border-4 border-white"></div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Step 2: Form Selection (TM-A)</h3>
                      <p className="text-gray-700">
                        Log in and choose "New Form Filing". Select <strong>Form TM-A</strong>. This is the application for registration of a trademark.
                      </p>
                    </div>

                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#bf9848] rounded-full border-4 border-white"></div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Step 3: Class & Description</h3>
                      <p className="text-gray-700">
                        Select the correct Class (1-45). In the "Description of Goods," be specific. Vague terms like "All Goods" trigger objections. Use standard terms from the NICE classification.
                      </p>
                    </div>

                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#bf9848] rounded-full border-4 border-white"></div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Step 4: User Date Claim</h3>
                      <p className="text-gray-700">
                        <strong>Critical Step:</strong> If you are already using the mark, select the date of first use. You MUST upload a "User Affidavit" (notarized) proof. If new, select "Proposed to be used."
                      </p>
                    </div>

                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#bf9848] rounded-full border-4 border-white"></div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Step 5: Payment</h3>
                      <p className="text-gray-700">
                        Make the payment via net banking. Once successful, the system generates your permanent Application Number. Save the receipt (Generates as a PDF).
                      </p>
                    </div>

                  </div>
                </section>

                {/* Status Meanings */}
                <section id="status-meanings" className="scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-6">Decoding Ipindia Application Status</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    After filing, your status will change over months. Here is what the cryptic Ipindia terms actually mean:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-blue-500">
                      <h3 className="font-bold text-gray-900">Send to Vienna Codification</h3>
                      <p className="text-sm text-gray-600">Your logo is being indexed for image search. No action needed.</p>
                    </div>
                    <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-green-500">
                      <h3 className="font-bold text-gray-900">Formalities Chk Pass</h3>
                      <p className="text-sm text-gray-600">Basic documents are correct. Application moves to examination.</p>
                    </div>
                    <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-red-500">
                      <h3 className="font-bold text-gray-900">Marked for Exam</h3>
                      <p className="text-sm text-gray-600">An examiner is reviewing your mark for conflicts. Critical stage.</p>
                    </div>
                    <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-orange-500">
                      <h3 className="font-bold text-gray-900">Objected</h3>
                      <p className="text-sm text-gray-600">Examiner has raised queries (Section 9/11). You must reply within 30 days.</p>
                    </div>
                    <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-yellow-500">
                      <h3 className="font-bold text-gray-900">Opposed</h3>
                      <p className="text-sm text-gray-600">A third party is challenging your mark. This initiates a legal proceeding.</p>
                    </div>
                    <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-green-600">
                      <h3 className="font-bold text-gray-900">Registered</h3>
                      <p className="text-sm text-gray-600">Congratulations! Certificate issued. Valid for 10 years.</p>
                    </div>
                  </div>
                </section>

                {/* Common Mistakes */}
                <section id="common-mistakes" className="scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-6">Costly Rookie Mistakes on Ipindia</h2>
                   <div className="bg-red-50 p-6 md:p-8 rounded-xl border border-red-100">
                      <ul className="space-y-4">
                        <li className="flex items-start">
                          <FaExclamationTriangle className="text-red-500 mt-1 mr-3 flex-shrink-0" />
                          <div>
                            <strong className="text-gray-900">Missing User Affidavit:</strong>
                            <p className="text-sm text-gray-700">Claiming a past date of usage (e.g., used since 2015) but failing to upload the affidavit leads to instant objection.</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <FaExclamationTriangle className="text-red-500 mt-1 mr-3 flex-shrink-0" />
                          <div>
                            <strong className="text-gray-900">Wrong Applicant Type:</strong>
                            <p className="text-sm text-gray-700">Applying as "Individual" for a Private Limited company to save fees. The mark becomes legally void as the asset belongs to the wrong entity.</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <FaExclamationTriangle className="text-red-500 mt-1 mr-3 flex-shrink-0" />
                          <div>
                            <strong className="text-gray-900">Ignoring Email Alerts:</strong>
                            <p className="text-sm text-gray-700">Ipindia sends alerts to the registered email. If you miss the 30-day Reply deadline, the mark is "Abandoned" with no refund.</p>
                          </div>
                        </li>
                      </ul>
                   </div>
                </section>

                {/* Why Hire Expert */}
                <section id="why-hire-expert" className="scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-6">Why AMA Legal Solutions?</h2>
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors border border-gray-100">
                      <div className="text-4xl mb-4">🛡️</div>
                      <h3 className="font-bold text-xl mb-2">DSC Management</h3>
                      <p className="text-gray-600 text-sm">We handle all the technical DSC configuration and signing headaches for you.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors border border-gray-100">
                      <div className="text-4xl mb-4">⚖️</div>
                      <h3 className="font-bold text-xl mb-2">Objection Proofing</h3>
                      <p className="text-gray-600 text-sm">Our attorneys draft descriptions and classify goods to withstand examiner scrutiny.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors border border-gray-100">
                      <div className="text-4xl mb-4">👀</div>
                      <h3 className="font-bold text-xl mb-2">Lifetime Monitoring</h3>
                      <p className="text-gray-600 text-sm">We watch your mark for 10 years, ensuring you never miss a renewal or opposition.</p>
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
                    <h2 className="text-xl md:text-5xl font-bold mb-4 md:mb-6">Don't RISK Your Brand on DIY</h2>
                    <p className="text-sm md:text-xl opacity-90 mb-6 md:mb-10 max-w-2xl mx-auto">
                      Ipindia is complex. One mistake can cost you your brand name. Let our experts handle the legal heavy lifting.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                      <Link href="/contact">
                        <button className="bg-[#bf9848] hover:bg-[#9e7d3a] text-white font-bold py-3 px-6 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg w-full sm:w-auto">
                          File Correctly Today
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
                <h3 className="text-xl font-bold mb-4 text-gray-900">Ipindia Helpline</h3>
                <p className="text-gray-600 mb-6 text-sm">
                  Facing "Digital Signature" or "User Registration" errors? We can help.
                </p>
                <Link href="/contact" className="block w-full">
                  <button className="w-full bg-[#bf9848] text-white py-3 rounded-lg hover:bg-[#9e7d3a] transition-colors font-bold">
                    Talk to Expert
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
                      Trademark Filing
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/intellectual-property-rights" className="text-gray-600 hover:text-[#bf9848] transition-colors text-sm flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#bf9848] mr-2"></span>
                      IP Rights Overview
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
