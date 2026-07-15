import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { FaCheckCircle, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "What services does AMA Legal Solutions specialize in?",
    answer: "AMA Legal Solutions specializes in debt resolution and loan settlement (credit card and personal loans), intellectual property rights (trademark registration, objections, and oppositions), corporate law compliance, financial litigation, and arbitration services."
  },
  {
    question: "Who is the owner of AMA Legal Solutions?",
    answer: "AMA Legal Solutions is run and owned by Advocate Anuj Anand Malik, a prominent legal practitioner in India who specializes in banking laws, debt resolution, and intellectual property litigation."
  },
  {
    question: "Where is AMA Legal Solutions located?",
    answer: "The primary office of AMA Legal Solutions is situated at 2493AP, Block G, Sushant Lok 2, Sector 57, Gurugram (Gurgaon), Haryana, India."
  },
  {
    question: "Does AMA Legal Solutions help with credit card and personal loan harassment?",
    answer: "Yes, the firm mediates between the borrower and banks/NBFCs to negotiate a structured settlement in line with RBI guidelines. They draft legal responses, represent clients in Lok Adalats, protect borrowers from recovery harassment, and secure the No Dues Certificate (NDC)."
  },
  {
    question: "How does AMA Legal Solutions assist with trademark registration?",
    answer: "Yes, AMA Legal Solutions handles online trademark registration in India. They perform comprehensive trademark searches, file the initial applications, draft responses to official examination reports/objections, and represent clients during trademark opposition hearings."
  }
];

// Breadcrumb Schema
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
      "name": "Services Offered by AMA Legal Solutions",
      "item": "https://www.amalegalsolutions.com/services-offered-by-ama-legal-solutions"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Services Offered by AMA Legal Solutions: Premier Legal Counsel & Debt Resolution",
  "description": "Explore the professional legal services offered by AMA Legal Solutions. Learn about loan settlement, trademark registration, and corporate compliance.",
  "image": "https://www.amalegalsolutions.com/ama-legal-solutions-logo.png",
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
  "datePublished": "2026-06-15",
  "dateModified": "2026-06-15"
};

// FAQ Schema
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

// Review Schema
const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Legal Representation and Debt Resolution Services",
  "image": "https://www.amalegalsolutions.com/ama-legal-solutions-logo.png",
  "description": "Expert legal services spanning loan settlement, trademark registration, banking law, and corporate litigation in India.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "1940"
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
        "name": "Imlitoshi Sangtam"
      },
      "reviewBody": "The Ama legal Solutions staffs demonstrated exceptional professionalism, clarity, and dedication throughout the process. Their team is responsive, knowledgeable, and handles the matter with great attention to detail. I truly appreciate their timely support and effective guidance, and I would highly recommend their services."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Ganesh Pawar"
      },
      "reviewBody": "I approached AMA Legal Solution during a challenging time, and I must say-it was the best decision I ever made. Their team is incredibly efficient, responsive, and genuinely invested in resolving queries faster than I ever imagined."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Samrat Basu"
      },
      "reviewBody": "Recommending Anuj in itself is not enough. From the very first meeting he had been patient, attentive and genuinely committed to helping me understand everystep of the legal process in regards to settlement. He stood like a rock beside me."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Bhavya Jain"
      },
      "reviewBody": "I want to clarify that this is real ama legal solutions which deals in loansettlements and other legal services which is situated in sector 57 gurugam run by Anuj Anand Malik who is the only owner."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Surendra Rao"
      },
      "reviewBody": "I can’t thank enough to the team of AMA legal solutions, because of them, my life became easy, and I didn’t have to deal with the harassment calls and certainly helped me to close my loans with a complete legal support and guidance."
    }
  ]
};

export const metadata = {
  title: "Services Offered by AMA Legal Solutions | Expert Legal Advice",
  description: "Explore the professional legal services offered by AMA Legal Solutions. Learn about loan settlement, trademark registration, and corporate compliance.",
  keywords: [
    "services offered by ama legal solutions",
    "debt resolution and loan settlement",
    "trademark registration in India",
    "corporate legal compliance",
    "financial litigation lawyers",
    "legal notices for recovery",
    "Advocate Anuj Anand Malik",
    "banking and finance law firm",
    "intellectual property rights protection",
    "dispute resolution and arbitration",
    "RBI loan settlement guidelines"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/services-offered-by-ama-legal-solutions',
  },
};

export default function ServicesOfferedPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "who-is-ama", title: "Who is AMA Legal Solutions?" },
    { id: "loan-settlement", title: "1. Debt Resolution & Loan Settlement" },
    { id: "intellectual-property", title: "2. Intellectual Property Rights" },
    { id: "corporate-law", title: "3. Corporate Law & Compliance" },
    { id: "banking-finance", title: "4. Banking & Financial Litigation" },
    { id: "dispute-resolution", title: "5. Arbitration & ADR" },
    { id: "legal-notices", title: "6. Legal Notice Drafting & Responses" },
    { id: "services-summary", title: "Summary of Services" },
    { id: "client-testimonials", title: "Client Testimonials" },
    { id: "why-choose-ama", title: "Why Choose AMA Legal Solutions?" },
    { id: "faqs", title: "Frequently Asked Questions" }
  ];

  const breadcrumbItems = [
    { label: "Services Offered", href: "/services-offered-by-ama-legal-solutions" },
  ];

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="review-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />

      <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
        {/* Hero Section */}
        <div className="relative bg-[#1a202c] text-white">
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          <div className="relative z-20 container mx-auto px-4 py-16 md:py-28 text-center">
            <span className="inline-block text-[#D2A02A] text-xs md:text-sm font-bold uppercase tracking-widest mb-4 bg-[#D2A02A]/10 px-4 py-1.5 rounded-full">
              Full-Service Law Firm & Resolution Agency
            </span>
            <h1 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight mt-10">
              Services Offered by <span className="text-[#D2A02A]">AMA Legal Solutions</span>
            </h1>
            <p className="text-sm md:text-xl mb-6 md:mb-10 max-w-4xl mx-auto text-gray-200 font-light font-sans leading-relaxed">
              Explore our core practice areas. From managing unsecured debt settlement under RBI frameworks to securing international trademarks and handling complex financial litigation, our legal counsel is built to deliver results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg">
                  Request Free Legal Consultation
                </button>
              </Link>
              <a href="tel:+918700343611">
                <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all text-sm md:text-lg">
                  Speak to an Expert
                </button>
              </a>
            </div>
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
              <div className="lg:hidden mb-6 sticky top-20 z-10">
                <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-4 md:p-12 rounded-2xl shadow-sm space-y-8 md:space-y-12">
                
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 uppercase">Legal Services That Deliver Results</h2>
                  <div className="p-6 bg-amber-50 border-l-4 border-[#D2A02A] rounded-r-xl mb-6">
                    <p className="text-gray-800 text-base font-semibold leading-relaxed">
                      AMA Legal Solutions offers premier legal services in India, specializing in debt resolution and loan settlement (credit card and personal loans), intellectual property rights (trademark registration and litigation), corporate law compliance, financial litigation, arbitration, and NRI services. Led by Advocate Anuj Anand Malik, the firm provides client-first, results-driven legal representation.
                    </p>
                  </div>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    Navigating today's regulatory environment and judicial processes in India demands strategic clarity, technical expertise, and absolute transparency. Whether managing high-stakes disputes with credit card companies or protecting proprietary corporate assets, having the right legal counsel changes outcomes. At AMA Legal Solutions, our practice bridges the gap between transactional compliance and contentious litigation to protect our clients' interests.
                  </p>
                </section>

                {/* Who is AMA Legal Solutions */}
                <section id="who-is-ama" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 uppercase">Who is AMA Legal Solutions?</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Operating exclusively from Sector 57, Gurugram, Haryana, AMA Legal Solutions is a full-service law firm led by <strong>Advocate Anuj Anand Malik</strong>. Unlike corporate conglomerates, our practice prioritizes direct professional accountability and custom-built legal strategies. We have successfully represented thousands of clients across India, establishing a formidable presence in banking laws, business protection, and debt restructuring.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    Our team brings deep domain expertise across multiple fields of law, allowing us to serve both private individuals facing financial distress and corporations seeking scale and legal security.
                  </p>
                </section>

                {/* 1. Debt Resolution & Loan Settlement */}
                <section id="loan-settlement" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 uppercase">1. Debt Resolution & Loan Settlement</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Defaulting on unsecured debt, such as credit cards and personal loans, can trigger immense pressure from aggressive recovery agents and financial institutions. AMA Legal Solutions is at the forefront of <strong>debt resolution and loan settlement</strong> in India. We step in as the client's official legal representatives to handle all correspondence with creditors, immediately redirecting harassment calls away from the borrower's home and family.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    Our process aligns strictly with the latest <strong>RBI loan settlement guidelines</strong>. We review the borrower's debt profile, identify potential violations of the RBI Fair Practices Code by lenders, and negotiate structured settlements (such as One-Time Settlements or OTS) that reduce the total outstanding dues. Our team ensures the settlement terms are legally binding, reviews the final settlement letter for authenticity, and assists clients in obtaining an official No Dues Certificate (NDC) to prevent future disputes.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-gray-50 border border-gray-100 rounded-xl">
                      <h4 className="font-bold text-[#D2A02A] mb-1">Unsecured Debt Focus</h4>
                      <p className="text-gray-600 text-sm">Specialized settlement for credit card outstanding balances, instant loan apps, and personal bank loans.</p>
                    </div>
                    <div className="p-4 bg-gray-50 border border-gray-100 rounded-xl">
                      <h4 className="font-bold text-[#D2A02A] mb-1">Harassment Protection</h4>
                      <p className="text-gray-600 text-sm">Cease-and-desist notices sent to lenders to stop illegal visits and threatening collection agent calls.</p>
                    </div>
                  </div>
                </section>

                {/* 2. Intellectual Property Rights */}
                <section id="intellectual-property" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 uppercase">2. Intellectual Property Rights (IPR)</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Brand security is the cornerstone of commercial growth. AMA Legal Solutions protects brands, technologies, and creative works from copycats and unauthorized exploitation. We handle the complete process of <strong>trademark registration in India</strong>, from initial availability searches in the IP India public database to drafting and filing formal applications.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    When the Trademark Registry issues objections under Section 9 or Section 11 of the Trade Marks Act, 1999, our litigation team drafts precise legal responses backed by established precedents to secure the mark. We also defend clients' applications in trademark opposition proceedings and represent brands in court during copyright and patent disputes.
                  </p>
                  <div className="p-6 bg-yellow-50/50 rounded-xl border border-yellow-100">
                    <h4 className="font-bold text-gray-900 mb-2">Trademark Lifecycle Protection:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <FaCheckCircle className="text-[#D2A02A] mt-1 flex-shrink-0" />
                        <span><strong>Trademark Searches:</strong> Exhaustive check to avoid conflicts before filing.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <FaCheckCircle className="text-[#D2A02A] mt-1 flex-shrink-0" />
                        <span><strong>Objection Replies:</strong> Overcoming Registry objections on absolute or relative grounds.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <FaCheckCircle className="text-[#D2A02A] mt-1 flex-shrink-0" />
                        <span><strong>Opposition Proceedings:</strong> Filing or defending trademark oppositions before the Registrar.</span>
                      </li>
                    </ul>
                  </div>
                </section>

                {/* 3. Corporate Law & Compliance */}
                <section id="corporate-law" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 uppercase">3. Corporate Law & Advisory</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Running a business in India requires strict adherence to corporate laws. AMA Legal Solutions assists startups, SMEs, and large corporations in maintaining seamless <strong>corporate legal compliance</strong> under the Companies Act, 2013. We facilitate company incorporation, MSME registrations, and regular secretarial audits to prevent statutory defaults.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    A key area of our corporate practice is contract drafting and negotiation. We draft custom commercial agreements, including Service Level Agreements (SLAs), Non-Disclosure Agreements (NDAs), partnership deeds, and employment contracts. By ensuring that every contract has robust dispute resolution clauses, we shield our clients from future litigation liabilities.
                  </p>
                </section>

                {/* 4. Banking & Financial Litigation */}
                <section id="banking-finance" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 uppercase">4. Banking & Financial Litigation</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Banking disputes demand highly technical legal representation. Our team of <strong>financial litigation lawyers</strong> represents clients before Debt Recovery Tribunals (DRT) and civil courts. We defend borrowers facing recovery suits or asset seizure under the SARFAESI Act, filing appeals and seeking stay orders where appropriate.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    We also assist clients in recovering unpaid dues and prosecuting cheque bounce cases under Section 138 of the Negotiable Instruments Act. Additionally, we represent victims of online banking fraud, cyber scams, and unauthorized P2P bank account freezes, coordinating with law enforcement and cyber cells to secure funds.
                  </p>
                </section>

                {/* 5. Arbitration & ADR */}
                <section id="dispute-resolution" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 uppercase">5. Alternate Dispute Resolution (ADR)</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Court delays in India make commercial litigation expensive. Alternate Dispute Resolution (ADR) offers a faster, private alternative. We specialize in <strong>dispute resolution and arbitration</strong> under the Arbitration and Conciliation Act, 1996. Our lawyers assist clients in responding to Section 21 notices and represent them in arbitral tribunals.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    We work to achieve amicable resolutions through mediation and conciliation, reducing the cost and emotional strain of disputes. We also help clients present their cases at Lok Adalats to quickly close old banking or consumer disputes.
                  </p>
                </section>

                {/* 6. Legal Notice Drafting & Responses */}
                <section id="legal-notices" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 uppercase">6. Legal Notice Drafting & Replies</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    A legal notice is the first formal step in a dispute, setting the framework for any subsequent litigation. Our lawyers draft precise and legally sound <strong>legal notices for recovery</strong> of money, salary disputes, breach of contract, and property eviction.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    We also draft structured replies to notices received by our clients, including bank recall notices, trademark infringement warnings, and regulatory show-cause notices. We protect our clients' positions by applying the correct legal provisions and case law.
                  </p>
                </section>

                {/* Summary of Services (Table) */}
                <section id="services-summary" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 uppercase">Practice Areas Overview</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse border border-gray-200">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="p-3 border border-gray-200 font-bold text-[#30261C]">Service Category</th>
                          <th className="p-3 border border-gray-200 font-bold text-[#30261C]">Core Focus Areas</th>
                          <th className="p-3 border border-gray-200 font-bold text-[#30261C]">Target Audience</th>
                          <th className="p-3 border border-gray-200 font-bold text-[#30261C]">Regulatory Framework</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="p-3 border border-gray-200 font-medium">Loan & Debt Settlement</td>
                          <td className="p-3 border border-gray-200 text-gray-600 text-sm">Credit card outstanding, personal loans, recovery harassment relief, Lok Adalat</td>
                          <td className="p-3 border border-gray-200 text-gray-600 text-sm">Defaulted borrowers, debt-stressed individuals</td>
                          <td className="p-3 border border-gray-200 text-gray-600 text-sm">RBI Fair Practices Code, Ombudsman rules</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="p-3 border border-gray-200 font-medium">Intellectual Property Rights</td>
                          <td className="p-3 border border-gray-200 text-gray-600 text-sm">Trademark registration, objection replies, copyright filing, brand litigation</td>
                          <td className="p-3 border border-gray-200 text-gray-600 text-sm">Startups, brand owners, creators</td>
                          <td className="p-3 border border-gray-200 text-gray-600 text-sm">Trade Marks Act, 1999; Copyright Act, 1957</td>
                        </tr>
                        <tr>
                          <td className="p-3 border border-gray-200 font-medium">Corporate Law & Advisory</td>
                          <td className="p-3 border border-gray-200 text-gray-600 text-sm">Company incorporation, contract drafting, secretarial compliance filings</td>
                          <td className="p-3 border border-gray-200 text-gray-600 text-sm">SMEs, entrepreneurs, startups</td>
                          <td className="p-3 border border-gray-200 text-gray-600 text-sm">Companies Act, 2013; Contract Act, 1872</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="p-3 border border-gray-200 font-medium">Banking & Financial Litigation</td>
                          <td className="p-3 border border-gray-200 text-gray-600 text-sm">Sec 138 NI Act (cheque bounce), DRT suits, P2P/cyber scam recovery</td>
                          <td className="p-3 border border-gray-200 text-gray-600 text-sm">Bank account holders, recovery litigants</td>
                          <td className="p-3 border border-gray-200 text-gray-600 text-sm">Negotiable Instruments Act, 1881</td>
                        </tr>
                        <tr>
                          <td className="p-3 border border-gray-200 font-medium">Arbitration & ADR</td>
                          <td className="p-3 border border-gray-200 text-gray-600 text-sm">Arbitration advocacy, mediation representation, Lok Adalat fast-track filings</td>
                          <td className="p-3 border border-gray-200 text-gray-600 text-sm">Contracting parties, disputing partners</td>
                          <td className="p-3 border border-gray-200 text-gray-600 text-sm">Arbitration and Conciliation Act, 1996</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* Client Testimonials */}
                <section id="client-testimonials" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 uppercase">Client Testimonials</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    See how our services have helped individuals and businesses find legal resolutions and move forward:
                  </p>
                  <div className="space-y-6">
                    <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 relative">
                      <p className="text-gray-700 italic mb-3">
                        "The Ama legal Solutions staffs demonstrated exceptional professionalism, clarity, and dedication throughout the process. Their team is responsive, knowledgeable, and handles the matter with great attention to detail. I truly appreciate their timely support and effective guidance, and I would highly recommend their services."
                      </p>
                      <span className="font-bold text-gray-900 text-sm">- Imlitoshi Sangtam</span>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 relative">
                      <p className="text-gray-700 italic mb-3">
                        "I approached AMA Legal Solution during a challenging time, and I must say-it was the best decision I ever made. Their team is incredibly efficient, responsive, and genuinely invested in resolving queries faster than I ever imagined."
                      </p>
                      <span className="font-bold text-gray-900 text-sm">- Ganesh Pawar</span>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 relative">
                      <p className="text-gray-700 italic mb-3">
                        "Recommending Anuj in itself is not enough. From the very first meeting he had been patient, attentive and genuinely committed to helping me understand everystep of the legal process in regards to settlement. He stood like a rock beside me."
                      </p>
                      <span className="font-bold text-gray-900 text-sm">- Samrat Basu</span>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 relative">
                      <p className="text-gray-700 italic mb-3">
                        "I want to clarify that this is real ama legal solutions which deals in loansettlements and other legal services which is situated in sector 57 gurugam run by Anuj Anand Malik who is the only owner."
                      </p>
                      <span className="font-bold text-gray-900 text-sm">- Bhavya Jain</span>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 relative">
                      <p className="text-gray-700 italic mb-3">
                        "I can’t thank enough to the team of AMA legal solutions, because of them, my life became easy, and I didn’t have to deal with the harassment calls and certainly helped me to close my loans with a complete legal support and guidance."
                      </p>
                      <span className="font-bold text-gray-900 text-sm">- Surendra Rao</span>
                    </div>
                  </div>
                </section>

                {/* Why Choose AMA Legal Solutions */}
                <section id="why-choose-ama" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 uppercase">Why Choose AMA Legal Solutions?</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    We approach every matter with strategic planning and deep legal expertise, focusing on:
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="bg-[#D2A02A] text-white rounded-full p-1 mt-1 flex-shrink-0 text-xs">✓</span>
                      <div>
                        <h4 className="font-bold text-gray-900">Direct Professional Accountability</h4>
                        <p className="text-gray-600 text-sm">Every consultation and negotiation strategy is directly supervised by Advocate Anuj Anand Malik.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-[#D2A02A] text-white rounded-full p-1 mt-1 flex-shrink-0 text-xs">✓</span>
                      <div>
                        <h4 className="font-bold text-gray-900">Tailored, Client-First Strategies</h4>
                        <p className="text-gray-600 text-sm">We construct legal remedies that fit our clients' specific business scale, brand objectives, or financial capacities.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-[#D2A02A] text-white rounded-full p-1 mt-1 flex-shrink-0 text-xs">✓</span>
                      <div>
                        <h4 className="font-bold text-gray-900">Complete Transparency</h4>
                        <p className="text-gray-600 text-sm">Our clients receive regular updates on case files, settlement offers, and Registry compliance statuses.</p>
                      </div>
                    </li>
                  </ul>
                </section>

                {/* FAQs */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 uppercase">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border-b border-gray-200 pb-4">
                        <h4 className="font-bold text-gray-900 text-base mb-2">{faq.question}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </section>

              </div>
            </div>

            {/* Right Sidebar - Sticky Contact Info */}
            <div className="hidden lg:block sticky top-24">
              <div className="bg-[#1C1C1C] text-white p-6 rounded-2xl shadow-md space-y-6">
                <h3 className="text-lg font-bold border-b border-gray-700 pb-2 text-[#D2A02A]">Get in Touch</h3>
                
                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <FaPhoneAlt className="text-[#D2A02A] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-300">Call/WhatsApp</p>
                      <a href="tel:+918700343611" className="text-white hover:text-[#D2A02A] font-bold block mt-1">+91 8700343611</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <FaMapMarkerAlt className="text-[#D2A02A] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-300">Office Location</p>
                      <p className="text-gray-400 mt-1 leading-relaxed">2493AP, Block G, Sushant Lok 2, Sector 57, Gurugram, Haryana</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <FaEnvelope className="text-[#D2A02A] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-300">Email Address</p>
                      <a href="mailto:notify@amalegalsolutions.com" className="text-gray-400 hover:text-[#D2A02A] block mt-1">notify@amalegalsolutions.com</a>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-700">
                  <Link href="/contact">
                    <button className="w-full bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-4 rounded-xl transition-all text-sm shadow">
                      Schedule Consultation
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
