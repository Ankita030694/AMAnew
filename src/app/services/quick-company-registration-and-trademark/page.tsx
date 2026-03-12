import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import Script from "next/script";
import {
  FaRocket,
  FaUserTie,
  FaSearch,
  FaRegCheckCircle,
  FaExclamationTriangle,
  FaBalanceScale,
  FaGlobeAsia,
  FaShieldAlt,
  FaLaptopCode,
  FaFileContract,
  FaMoneyBillWave,
  FaChartLine,
  FaBuilding,
  FaLightbulb,
  FaCheckDouble,
  FaStar,
  FaQuoteLeft
} from "react-icons/fa";

export const metadata: Metadata = {
  title: "Quick Company Registration Explained | Speed & Legal Strategy",
  description: "Want to register a 'Quick Company'? Learn how to fast-track your business incorporation in India while ensuring full legal compliance and trademark protection.",
  keywords: [
    "quick company",
    "quick company registration",
    "fast company incorporation",
    "company registration india",
    "trademark search india",
    "online company formation",
    "instant business registration",
    "private limited registration",
    "start a business india"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/services/quick-company-registration-and-trademark',
  },
  openGraph: {
    title: "Quick Company Registration & Trademark Insights | Speed vs Safety",
    description: "Launch your business fast. Detailed guide on achieving a quick company registration with robust legal foundations.",
    url: "https://www.amalegalsolutions.com/services/quick-company-registration-and-trademark",
    siteName: "AMA Legal Solutions",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "https://www.amalegalsolutions.com/future.png",
        width: 1200,
        height: 630,
        alt: "Quick Company Registration Guide",
      },
    ],
  },
};

const tocSections = [
  { id: "introduction", title: "Introduction" },
  { id: "understanding-fast-filing", title: "Understanding Fast Filing" },
  { id: "trademark-vs-company", title: "Trademark vs Company Name" },
  { id: "optimizing-for-speed", title: "Optimizing for Speed" },
  { id: "strategic-workflow", title: "Strategic Workflow" },
  { id: "smart-search", title: "Smart Search Strategies" },
  { id: "client-reviews", title: "Client Success Stories" },
  { id: "why-ama", title: "Why Choose AMA?" },
  { id: "faqs", title: "FAQs" },
];

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Quick Company Guide", href: "/services/quick-company-registration-and-trademark" },
];

const reviews = [
  {
    name: "Arjun Mehta",
    role: "Tech Founder, Bengaluru",
    text: "Needed to incorporate before our investor meeting. AMA Legal handled the SPICe+ filing and trademark search in parallel. We got our COI in 4 days. Truly a 'quick company' experience without the stress.",
    rating: 5
  },
  {
    name: "Sarah Jenkins",
    role: "D2C Brand Owner, Mumbai",
    text: "I almost filed with a generic name that would have been rejected. AMA's deep search saved me from a trademark conflict. They balanced speed with safety perfectly.",
    rating: 5
  },
  {
    name: "Rajiv Kumar",
    role: "Fintech Startup, Gurugram",
    text: "Their advice on the MOA drafting was crucial. We got our bank account opened faster because the objects were clear. Much better than the automated portals I tried first.",
    rating: 5
  },
  {
    name: "Priya Desai",
    role: "Consultant, Delhi",
    text: "Fast, professional, and transparent. No hidden fees. The team explained every step of the 'quick company' process clearly.",
    rating: 5
  },
  {
    name: "GreenLeaf Organics",
    role: "Sustainable Retail, Pune",
    text: "We wanted a quick launch but didn't want to mess up the legal side. AMA provided the perfect balance of agility and compliance.",
    rating: 5
  }
];

const faqs = [
  {
    question: "Is 'Quick Company' registration possible in 24 hours?",
    answer: "While the term 'quick company' implies instant results, the fastest realistic timeline for incorporation in India is 3-5 working days. This depends on the approval speed of the Central Registration Centre (CRC) and the readiness of your documents."
  },
  {
    question: "How can I speed up my company registration?",
    answer: "To ensure a quick company registration, have your Digital Signature Certificates (DSC) ready and ensure your proposed name is unique. Running a proper trademark search beforehand prevents rejection delays."
  },
  {
    question: "Does a quick company registration include trademark protection?",
    answer: "Standard incorporation protects your corporate name but not your brand. For complete protection, you should file a trademark application simultaneously with your company registration."
  },
  {
    question: "Can I register a trademark and company simultaneously?",
    answer: "Yes, this is the best strategy. When filing for company incorporation (SPICe+ Part A), you can reserve the name. Simultaneously, filing a trademark application (TM-A) ensures you have brand protection beyond just the corporate name."
  },
  {
    question: "What delays a company registration?",
    answer: "The most common delays in what should be a quick company process are name rejections due to similarity with existing trademarks, or incorrect business activity codes (NIC codes) in the application."
  },
  {
    question: "Do I need a physical office for a quick registration?",
    answer: "No, you do not need a physical commercial office immediately. You can start with a residential address as the registered office, but you must have a registered office capable of receiving official mail."
  },
  {
    question: "Can I use a residential address as my registered office?",
    answer: "Yes, the MCA allows the use of a residential address for your company's registered office. You will need a utility bill (not older than 2 months) and a NOC from the owner (even if it's your parents)."
  },
  {
    question: "What is the SPICe+ form?",
    answer: "SPICe+ (Simplified Proforma for Incorporating Company Electronically) is the integrated web form used for quick company registration. It combines name reservation, incorporation, DIN allotment, and PAN/TAN application into one process."
  },
  {
    question: "Is a Digital Signature Certificate (DSC) mandatory?",
    answer: "Yes, all forms for company incorporation are filed electronically. Therefore, all proposed directors and subscribers must have a valid Class 3 Digital Signature Certificate (DSC)."
  },
  {
    question: "Can a foreign national be a director in a quick company?",
    answer: "Yes, foreign nationals can be directors. However, at least one director must be an Indian Resident (stayed in India for 182+ days in the previous year). Foreign documents will need notarization/apostille, which may add time."
  },
  {
    question: "What is the minimum capital required?",
    answer: "There is no minimum paid-up capital requirement for a Private Limited Company in India. You can start with as little as ₹10,000, though ₹1,00,000 is a common standard."
  },
  {
    question: "Do I need to be physically present at the ROC?",
    answer: "No, the entire 'quick company' registration process is digital. You do not need to visit the Registrar of Companies (ROC) physically."
  },
  {
    question: "What is the difference between MOA and AOA?",
    answer: "The MOA (Memorandum of Association) defines the company's relationship with the outside world and its objectives. The AOA (Articles of Association) defines the internal rules and management regulations."
  },
  {
    question: "Can I change my company name later?",
    answer: "Yes, you can change the name later via Form MGT-14 and INC-24, but it is a time-consuming process. It is better to choose the right name during the initial quick registration phase."
  },
  {
    question: "What if my chosen name is rejected?",
    answer: "If your name is rejected, the MCA gives you a chance to resubmit with alternative names. This resubmission cycle is the biggest enemy of a 'quick' registration, which is why pre-search is vital."
  },
  {
    question: "How do I get a GST number quickly?",
    answer: "You can apply for GSTN registration directly within the SPICe+ form during incorporation. This is the fastest way to get your tax ID."
  },
  {
    question: "Is a Director Identification Number (DIN) required?",
    answer: "Yes, every director needs a DIN. If you don't have one, upto 3 DINs can be allotted through the SPICe+ incorporation form itself."
  },
  {
    question: "Can I convert a sole proprietorship to a company quickly?",
    answer: "Conversion is possible but it is not 'quick'. It involves a separate legal procedure (Part I conversion). It's often faster to register a new company and transfer assets."
  },
  {
    question: "What are the annual compliance requirements?",
    answer: "After incorporation, you must file an Annual Return (MGT-7) and Financial Statements (AOC-4) every year, along with Income Tax Returns."
  },
  {
    question: "Why should I hire a lawyer instead of doing it myself?",
    answer: "While the forms are online, the legal drafting (MOA objects, declarations) requires expertise. Errors can lead to rejection or future non-compliance penalties. A lawyer ensures your 'quick company' is also a 'safe company'."
  }
];

export default function QuickCompanyPage() {
  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Quick Company Registration: Balancing Speed and Strategy",
            "description": "A comprehensive guide on how to achieve a quick company registration in India without cutting legal corners.",
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
              Your Guide to a <span className="text-[#bf9848]">Quick Company</span> Launch
            </h1>
            <p className="text-lg md:text-2xl mb-8 md:mb-10 max-w-3xl mx-auto text-gray-300">
              Start your business journey with speed and confidence. Learn the strategic way to achieve a quick company registration in India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-[#bf9848] hover:bg-[#9e7d3a] text-white font-bold py-3 px-8 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-base md:text-lg border border-[#bf9848]">
                  Launch Your Company
                </button>
              </Link>
              <a href="tel:+918700343611">
                <button className="bg-transparent border-2 border-white hover:bg-white hover:text-[#0d1b2a] text-white font-bold py-3 px-8 md:py-4 md:px-10 rounded-full transition-all text-base md:text-lg">
                  Legal Consultation
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
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">The Need for Speed in Company Registration</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    In today's fast-paced business environment, founders are often looking for a "<strong>quick company</strong>" solution. The desire to move from idea to execution instantly is understandable. Startups want to secure their name, open a bank account, and start billing clients as soon as possible.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    A quick company registration is indeed possible thanks to the digitization of the Ministry of Corporate Affairs (MCA). However, speed should not come at the cost of legal foresight. Building a "quick company" foundation requires not just fast data entry, but smart legal choices regarding your capital structure, registered office, and business objectives.
                  </p>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                    <p className="text-sm md:text-base text-gray-800 italic font-medium">
                      "A truly quick company launch is one that doesn't just start fast, but keeps running without legal hurdles. The goal is efficient execution, not just instant filing."
                    </p>
                  </div>
                </section>

                {/* Understanding Fast Filing */}
                <section id="understanding-fast-filing" className="scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Decoding the "Quick Company" Registration Process</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    To achieve a quick company incorporation, it's vital to understand the tools and platforms available in the Indian ecosystem:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                      <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center"><FaSearch className="mr-2 text-[#bf9848]"/> Preliminary Search Tools</h3>
                      <p className="text-sm text-gray-700">
                        Many founders use online directories to check if a name exists. While checking a "quick company" database is a good first step, remember these are often aggregators. For a legally safe name, one must check the official MCA Master Data and the Trademark Registry.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                      <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center"><FaRocket className="mr-2 text-[#bf9848]"/> The SPICe+ Advantage</h3>
                      <p className="text-sm text-gray-700">
                        The legitimate way to create a quick company is via the SPICe+ (Simplified Proforma for Incorporating Company Electronically) form. This integrated web form offers 10 services (DIN, Incorporation, PAN, TAN, etc.) in a single application, significantly reducing timelines.
                      </p>
                    </div>
                  </div>
                </section>

                 {/* Trademark vs Company */}
                <section id="trademark-vs-company" className="scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Crucial Distinction: Corporate Name vs. Brand Name</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    A common oversight when trying to build a quick company is assuming that the registered name is fully protected.
                  </p>
                  <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                    <table className="w-full text-sm text-left text-gray-500">
                         <thead className="text-xs text-white uppercase bg-[#0d1b2a]">
                            <tr>
                               <th className="px-6 py-4">Feature</th>
                               <th className="px-6 py-4">Company Registration (MCA)</th>
                               <th className="px-6 py-4 bg-[#bf9848] text-white">Trademark Registration (IPR)</th>
                            </tr>
                         </thead>
                         <tbody>
                            <tr className="bg-white border-b">
                               <td className="px-6 py-4 font-bold text-gray-900">What it protects</td>
                               <td className="px-6 py-4">Corporate Entity Name</td>
                               <td className="px-6 py-4 text-green-700 font-bold">Brand Name / Logo / Slogan</td>
                            </tr>
                            <tr className="bg-gray-50 border-b">
                               <td className="px-6 py-4 font-bold text-gray-900">Scope</td>
                               <td className="px-6 py-4">Prevents other <em>Companies</em> from using the name</td>
                               <td className="px-6 py-4">Prevents <em>Anyone</em> (products/services) from using the name</td>
                            </tr>
                            <tr className="bg-white border-b">
                               <td className="px-6 py-4 font-bold text-gray-900">Use of Symbol</td>
                               <td className="px-6 py-4">Pvt Ltd / LLP</td>
                               <td className="px-6 py-4">® or TM</td>
                            </tr>
                            <tr className="bg-gray-50">
                                <td className="px-6 py-4 font-bold text-gray-900">Legal Power</td>
                                <td className="px-6 py-4">Administrative</td>
                                <td className="px-6 py-4">Proprietary Asset (Can be sold/licensed)</td>
                            </tr>
                         </tbody>
                      </table>
                  </div>
                  <p className="text-sm md:text-base mt-4 text-gray-600 italic">
                    Example: You might register "Quick Foods Pvt Ltd" at the MCA. But if "Quick" is a registered trademark of another entity in Class 43 (Restaurants), you could face legal action despite your company registration.
                  </p>
                </section>

                {/* Optimizing for Speed */}
                <section id="optimizing-for-speed" className="scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Balancing Speed with Legal Precision</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    To ensure your "quick company" registration doesn't hit a wall, avoid these common errors that cause rejection:
                  </p>
                  <div className="space-y-6">
                    <div className="flex flex-col md:flex-row gap-4 items-start bg-yellow-50 p-6 rounded-xl border border-yellow-100">
                      <FaExclamationTriangle className="text-3xl text-yellow-500 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Restricted MOA Objects</h3>
                        <p className="text-sm text-gray-700">
                           In the rush to register, using a standard template for the Memorandum of Association (MOA) can be risky. If your fintech startup has a generic description, getting regulatory licenses later will be difficult.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 items-start bg-yellow-50 p-6 rounded-xl border border-yellow-100">
                      <FaExclamationTriangle className="text-3xl text-yellow-500 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Capital Structure Planning</h3>
                        <p className="text-sm text-gray-700">
                           Setting Authorized Capital requires balance. Too high means unnecessary government fees; too low necessitates an immediate increase. A lawyer helps calculate the optimal structure for your immediate fundraising needs.
                        </p>
                      </div>
                    </div>
                     <div className="flex flex-col md:flex-row gap-4 items-start bg-yellow-50 p-6 rounded-xl border border-yellow-100">
                      <FaExclamationTriangle className="text-3xl text-yellow-500 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Name Rejections</h3>
                        <p className="text-sm text-gray-700">
                           The Companies Act forbids names identical to existing trademarks. Thoroughly checking the Trademark Registry is the only way to avoid a 'Resubmission' status, which delays your 'quick company' dream by weeks.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Strategic Workflow */}
                <section id="strategic-workflow" className="scroll-mt-24 md:scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Strategic Workflow for Fast Execution</h2>
                   <p className="text-sm md:text-lg leading-relaxed mb-8 text-gray-700">
                     You can indeed have a quick company launch without the risk if you follow a parallel processing workflow:
                   </p>
                   
                   <div className="space-y-8">
                     <div className="flex gap-6">
                       <div className="flex-shrink-0">
                         <div className="w-10 h-10 rounded-full bg-[#bf9848] flex items-center justify-center text-white font-bold">1</div>
                         <div className="h-full w-0.5 bg-gray-200 mx-auto mt-2"></div>
                       </div>
                       <div>
                         <h3 className="text-xl font-bold text-gray-900 mb-2">Pre-Verification (Day 0-1)</h3>
                         <p className="text-gray-700 text-sm">Don't just Google. Run a Phonetic Search on Ipindia and a Name Search on MCA. Ensure the name is unique. Prepare DSCs for all directors immediately.</p>
                       </div>
                     </div>

                     <div className="flex gap-6">
                       <div className="flex-shrink-0">
                         <div className="w-10 h-10 rounded-full bg-[#bf9848] flex items-center justify-center text-white font-bold">2</div>
                         <div className="h-full w-0.5 bg-gray-200 mx-auto mt-2"></div>
                       </div>
                       <div>
                         <h3 className="text-xl font-bold text-gray-900 mb-2">Drafting & SPICe+ Part A (Day 2)</h3>
                         <p className="text-gray-700 text-sm">File Part A to reserve your name. While waiting (usually 1-2 days), draft custom MOA/AOA. Don't rely on default templates if you plan to deal with investors.</p>
                       </div>
                     </div>

                     <div className="flex gap-6">
                       <div className="flex-shrink-0">
                         <div className="w-10 h-10 rounded-full bg-[#bf9848] flex items-center justify-center text-white font-bold">3</div>
                         <div className="h-full w-0.5 bg-gray-200 mx-auto mt-2"></div>
                       </div>
                       <div>
                         <h3 className="text-xl font-bold text-gray-900 mb-2">Incorporation & Trademark Filing (Day 3-5)</h3>
                         <p className="text-gray-700 text-sm">Once the name is approved, file SPICe+ Part B. <strong>Simultaneously</strong>, file the Trademark Application (TM-A). This locks your brand protection from Day 1.</p>
                       </div>
                     </div>

                     <div className="flex gap-6">
                       <div className="flex-shrink-0">
                         <div className="w-10 h-10 rounded-full bg-[#bf9848] flex items-center justify-center text-white font-bold">4</div>
                       </div>
                       <div>
                         <h3 className="text-xl font-bold text-gray-900 mb-2">Post-Incorporation Compliance (Day 6+)</h3>
                         <p className="text-gray-700 text-sm">Open the bank account. File INC-20A (Commencement of Business) within 180 days. This step is crucial for any company to operate legally.</p>
                       </div>
                     </div>
                   </div>
                </section>

                {/* Smart Search */}
                <section id="smart-search" className="scroll-mt-24 md:scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Smart Search Strategies for the Modern Founder</h2>
                   <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                     Using online search directories is fine for preliminary research, but for legal certainty during your quick company setup, engage in <strong>Deep Search</strong>.
                   </p>
                   <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-[#f8fafc] p-6 rounded-xl border border-gray-200">
                         <h3 className="text-lg font-bold text-[#0d1b2a] mb-2"><FaGlobeAsia className="inline mr-2"/> Domain Check</h3>
                         <p className="text-sm text-gray-600">A company name is useless if the .com or .in domain isn't available. Check domain registrars alongside your MCA search.</p>
                      </div>
                      <div className="bg-[#f8fafc] p-6 rounded-xl border border-gray-200">
                         <h3 className="text-lg font-bold text-[#0d1b2a] mb-2"><FaBalanceScale className="inline mr-2"/> Class 35 Check</h3>
                         <p className="text-sm text-gray-600">Even if you are a product company, check Trademark Class 35 (Retail/Business services). Many conflicts arise here.</p>
                      </div>
                      <div className="bg-[#f8fafc] p-6 rounded-xl border border-gray-200">
                         <h3 className="text-lg font-bold text-[#0d1b2a] mb-2"><FaShieldAlt className="inline mr-2"/> Director Check</h3>
                         <p className="text-sm text-gray-600">Ensure co-founders aren't directors in non-compliant companies. This could lead to DIN disqualification.</p>
                      </div>
                      <div className="bg-[#f8fafc] p-6 rounded-xl border border-gray-200">
                         <h3 className="text-lg font-bold text-[#0d1b2a] mb-2"><FaLaptopCode className="inline mr-2"/> Social Handles</h3>
                         <p className="text-sm text-gray-600">Check availability on LinkedIn/Twitter/Instagram. Brand consistency across platforms is key for valuation.</p>
                      </div>
                   </div>
                </section>

                {/* Reviews Section */}
                <section id="client-reviews" className="scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6">What Founders Say</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {reviews.map((review, index) => (
                      <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-100 flex flex-col">
                        <div className="flex text-[#bf9848] mb-3">
                          {[...Array(review.rating)].map((_, i) => (
                            <FaStar key={i} size={16} />
                          ))}
                        </div>
                        <p className="text-gray-700 italic mb-4 flex-grow relative pl-6">
                          <FaQuoteLeft className="absolute left-0 top-0 text-gray-300 opacity-50 text-xl" />
                          "{review.text}"
                        </p>
                        <div>
                          <h4 className="font-bold text-gray-900">{review.name}</h4>
                          <p className="text-xs text-gray-500">{review.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Why AMA */}
                <section id="why-ama" className="scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-6">Why AMA Legal Solutions is Your Best Partner</h2>
                  <div className="bg-[#1a202c] rounded-2xl p-6 md:p-10 text-white relative overflow-hidden">
                    <div className="relative z-10">
                      <p className="text-sm md:text-lg opacity-90 mb-8 leading-relaxed">
                        We facilitate a "Quick Company" setup by adhering to the law, not bypassing it. At AMA Legal Solutions, we blend speed with compliance. We don't just register your company; we set up your legal infrastructure for scale.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                        <div className="flex items-center">
                          <FaUserTie className="text-[#bf9848] mr-3" />
                          <span className="text-sm">Attorney-Drafted MOA/AOA</span>
                        </div>
                        <div className="flex items-center">
                          <FaCheckDouble className="text-[#bf9848] mr-3" />
                          <span className="text-sm">Integrated Trademark Search</span>
                        </div>
                        <div className="flex items-center">
                          <FaMoneyBillWave className="text-[#bf9848] mr-3" />
                          <span className="text-sm">Transparent Government Fees</span>
                        </div>
                        <div className="flex items-center">
                          <FaChartLine className="text-[#bf9848] mr-3" />
                          <span className="text-sm">Post-Incorporation Support</span>
                        </div>
                      </div>
                      <Link href="/contact">
                        <button className="bg-[#bf9848] hover:bg-[#9e7d3a] text-white font-bold py-3 px-8 rounded-full transition-all shadow-lg text-sm md:text-base">
                          Start Your Registration
                        </button>
                      </Link>
                    </div>
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
                    <h2 className="text-xl md:text-5xl font-bold mb-4 md:mb-6">Get Fast. Stay Legal.</h2>
                    <p className="text-sm md:text-xl opacity-90 mb-6 md:mb-10 max-w-2xl mx-auto">
                      Launch your company with the speed of a startup and the security of a law firm.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                      <Link href="/contact">
                        <button className="bg-[#bf9848] hover:bg-[#9e7d3a] text-white font-bold py-3 px-6 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg w-full sm:w-auto">
                          Get Started
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
                <h3 className="text-xl font-bold mb-4 text-gray-900">Ready to Launch?</h3>
                <p className="text-gray-600 mb-6 text-sm">
                  Register your Private Limited Company with expert legal backing.
                </p>
                <Link href="/contact" className="block w-full">
                  <button className="w-full bg-[#bf9848] text-white py-3 rounded-lg hover:bg-[#9e7d3a] transition-colors font-bold">
                    Start Now
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
                    <Link href="/services/corporate" className="text-gray-600 hover:text-[#bf9848] transition-colors text-sm flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#bf9848] mr-2"></span>
                      Company Registration
                    </Link>
                  </li>

                  <li>
                    <Link href="/services/expert-vakil-search-for-trademark-registration" className="text-gray-600 hover:text-[#bf9848] transition-colors text-sm flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#bf9848] mr-2"></span>
                      Vakil Search Guide
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
