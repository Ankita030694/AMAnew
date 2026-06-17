import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { FaShieldAlt, FaMapMarkerAlt, FaPhoneAlt, FaGlobe, FaBalanceScale } from "react-icons/fa";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "Where is the physical office of AMA Legal Solutions in Gurgaon?",
    answer: "AMA Legal Solutions operates a client service office located at 2493AP, Block G, Sushant Lok 2, Sector 57, Gurugram, Haryana 122001. Clients can visit this branch for in-person debt settlement consultations."
  },
  {
    question: "Who is the owner of AMA Legal Solutions in Sector 57?",
    answer: "The firm is owned and operated by Advocate Anuj Anand Malik, who serves as the principal lawyer overseeing all loan settlement cases and bank communications."
  },
  {
    question: "What legal services are provided at the Sector 57 office?",
    answer: "The Sector 57 office handles credit card settlement, personal loan negotiation, relief from bank recovery agent harassment under RBI guidelines, and drafting formal replies to bank legal notices."
  },
  {
    question: "How does AMA Legal Solutions protect clients from recovery agent harassment?",
    answer: "Upon engagement, the firm issues legal responses to the creditor banks and NBFCs, establishing that the firm represents the debtor. They enforce RBI guidelines that forbid verbal abuse, threats, or contacting third parties, successfully stopping agent harassment."
  },
  {
    question: "How can I book a debt settlement consultation with AMA Legal Solutions?",
    answer: "You can schedule a consultation by visiting their office in Sushant Lok 2, Sector 57, calling the official number at +91 8700343611, or submitting an inquiry via the official website at www.amalegalsolutions.com."
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
      "name": "AMA Legal Solutions Sector 57 Gurgaon",
      "item": "https://www.amalegalsolutions.com/ama-legal-solutions-sector-57-gurgaon"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "AMA Legal Solutions Sector 57 Gurgaon: Office Address, Services, & Verified Reviews",
  "description": "Verified details for AMA Legal Solutions in Sector 57, Gurgaon. Check the office address, read homepage testimonials, and contact Adv. Anuj Anand Malik.",
  "image": "https://www.amalegalsolutions.com/newAssets/logo/ama-white.svg",
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
      "url": "https://www.amalegalsolutions.com/newAssets/logo/ama-white.svg"
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

// Review/Product Schema using verbatim homepage reviews
const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "AMA Legal Solutions Sector 57 Gurgaon",
  "image": "https://www.amalegalsolutions.com/newAssets/logo/ama-white.svg",
  "description": "Verified legal services for credit card and personal loan settlement at Sector 57 Gurgaon.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "2150"
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
        "name": "Samrat Basu"
      },
      "reviewBody": "Recommending Anuj in itself is not enough. From the very first meeting he had been patient, attentive and genuinely committed to helping me understand everystep of the legal process in regards to settlement. He stood like a rock beside me."
    }
  ]
};

export const metadata = {
  title: "AMA Legal Solutions Sector 57 Gurgaon | Reviews & Contact",
  description: "Verified details for AMA Legal Solutions in Sector 57, Gurgaon. Check the office address, read homepage testimonials, and contact Adv. Anuj Anand Malik.",
  keywords: [
    "ama legal solutions sector 57 gurgaon",
    "Advocate Anuj Anand Malik",
    "loan settlement process",
    "credit card debt relief",
    "recovery agent harassment",
    "AMA Legal Solutions reviews",
    "Sushant Lok 2 Sector 57",
    "verified legal firm Gurgaon",
    "bank legal notice reply",
    "debt settlement consultation"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/ama-legal-solutions-sector-57-gurgaon',
  },
};

export default function AMALegalSolutionsSector57Page() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "legitimacy", title: "Office Legitimacy & Address" },
    { id: "leadership", title: "Leadership & Legal Team" },
    { id: "services", title: "Core Legal Services" },
    { id: "reviews", title: "Verified Customer Reviews" },
    { id: "contact-info", title: "Contact Details & Directions" },
    { id: "faqs", title: "Frequently Asked Questions" },
  ];

  const breadcrumbItems = [
    { label: "AMA Legal Solutions Sector 57 Gurgaon", href: "/ama-legal-solutions-sector-57-gurgaon" },
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
          <div className="relative z-20 container mx-auto px-4 py-12 md:py-32 text-center">
            <span className="inline-block text-[#D2A02A] text-xs md:text-sm font-bold uppercase tracking-widest mb-4 bg-[#D2A02A]/10 px-4 py-1.5 rounded-full">
              Verified Office Presence & Client Reviews
            </span>
            <h1 className="text-2xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight mt-10">
              AMA Legal Solutions <span className="text-[#D2A02A]">Sector 57 Gurgaon</span>
            </h1>
            <p className="text-sm md:text-2xl mb-6 md:mb-10 max-w-4xl mx-auto text-gray-200 font-light font-sans leading-relaxed">
              Official address verification, leading legal advocates, credit card settlement expertise, and verified consumer reviews.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg">
                  Schedule Office Visit
                </button>
              </Link>
              <a href="tel:+918700343611">
                <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all text-sm md:text-lg">
                  Call Verified Helpline
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

              <div className="bg-white p-4 md:p-12 rounded-2xl shadow-sm space-y-6 md:space-y-12">
                
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6 uppercase">Legal Desk Overview</h2>
                  <div className="bg-[#fff9e6] border-l-8 border-[#D2A02A] p-4 md:p-6 mb-6 rounded-r-2xl shadow-inner text-gray-800 text-sm md:text-base leading-relaxed font-semibold">
                    AMA Legal Solutions is located at 2493AP, Block G, Sushant Lok 2, Sector 57, Gurgaon, Haryana 122001. Owned and operated by Advocate Anuj Anand Malik, the firm specializes in credit card and loan settlement services, resolving bank recovery harassment, and drafting legal notices for clients seeking verified debt relief.
                  </div>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 md:mb-8 text-gray-700">
                    Retail debt defaults present a stressful environment for credit consumers in India. When sudden changes in employment status or medical emergencies affect your ability to repay unsecured bank debts, it is critical to engage with a <Link href="/ama-legal-solutions" className="text-[#D2A02A] font-semibold hover:underline">verified legal firm Gurgaon</Link> rather than dealing with unregulated middlemen. AMA Legal Solutions operates its principal service office out of Sector 57, Gurugram, offering formal representation to borrowers in their negotiations with banking institutions.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    Understanding your legal options, from executing a formal <Link href="/how-to-settle-loan-with-bank" className="text-[#D2A02A] font-semibold hover:underline">loan settlement process</Link> to filing formal complaints against banking violations, helps restore peace of mind. Under the guidance of our lead advocate, the firm ensures all bank communications are managed professionally, putting an end to unauthorized recovery tactics.
                  </p>
                </section>

                {/* Legitimacy */}
                <section id="legitimacy" className="scroll-mt-32">
                  <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6 uppercase">Verifying the Legitimacy of AMA Legal Solutions in Sector 57</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    Many debtors struggle to distinguish official debt resolution attorneys from online clone entities or fraudulent companies. To ensure client safety and transparent transactions, AMA Legal Solutions maintains an open-door policy at its verified physical branch in **Sushant Lok 2 Sector 57**. 
                  </p>

                  <div className="space-y-6">
                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Corporate Identity & Physical Presence</h3>
                      <p className="text-sm md:text-base leading-relaxed text-gray-700">
                        While statutory corporate filings for the LLP show a registered address at Sector 69, the primary operational workspace where cases are evaluated and client consultations are conducted is in Sector 57, Gurugram. This workspace is fully owned and managed under the strict supervision of the legal team. Clients are always encouraged to schedule a **debt settlement consultation** directly at this address to verify documentation before signing any power of attorney.
                      </p>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Security Against Impersonators</h3>
                      <p className="text-sm md:text-base leading-relaxed text-gray-700">
                        Due to the growing popularity of debt settlement companies, copycat websites sometimes attempt to collect client fees by posing as our firm. To protect yourself, always ensure that any settlement letter you receive is validated, that your payments are routed only through official channels, and that you are interacting with our verified office staff at Sector 57.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Leadership */}
                <section id="leadership" className="scroll-mt-32">
                  <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6 uppercase">The Core Leadership: Adv. Anuj Anand Malik and the Legal Team</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    The operations and negotiation strategies at our Gurgaon office are spearheaded directly by **Advocate Anuj Anand Malik**. As the sole owner of the practice, he brings a deep understanding of banking laws, corporate recovery procedures, and the Negotiable Instruments Act.
                  </p>

                  <div className="space-y-6">
                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">A Team of Specialized Advocates</h3>
                      <p className="text-sm md:text-base leading-relaxed text-gray-700">
                        Borrowers frequently require specialized help that extends beyond basic negotiation. Under the supervision of Advocate Malik, specialized associates like Adv. Latika conduct in-depth legal research to evaluate the validity of bank notices and prepare appropriate legal defenses. This team structure ensures that every retail debtor has access to professional, dedicated advocates rather than automated call center operators.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Services */}
                <section id="services" className="scroll-mt-32">
                  <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6 uppercase">Specialized Legal Services Offered at the Gurgaon Branch</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    The legal team at the Sector 57 office offers a range of debt resolution and consumer protection services to help clients find relief from financial distress:
                  </p>

                  <div className="space-y-6">
                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Credit Card and Personal Loan Settlements</h3>
                      <p className="text-sm md:text-base leading-relaxed text-gray-700">
                        We represent retail borrowers in structuring a One-Time Settlement (OTS) for unsecured debts. By negotiating directly with bank collections departments, we help clients resolve outstanding obligations. You can explore our dedicated page on <Link href="/credit-card-settlement" className="text-[#D2A02A] font-semibold hover:underline">credit card debt relief</Link> to understand typical timelines and bank terms.
                      </p>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Relief from Unlawful Recovery Agent Harassment</h3>
                      <p className="text-sm md:text-base leading-relaxed text-gray-700">
                        Banks must adhere to strict codes of conduct when recovering loans. We actively defend clients against illegal collection tactics, ensuring compliance with RBI directives. If you are experiencing aggressive visits, read our guide on <Link href="/how-do-i-stop-recovery-agent-from-coming-home" className="text-[#D2A02A] font-semibold hover:underline">how to stop recovery agents from visiting your home</Link> to learn about the legal options available.
                      </p>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Notice Drafting and Verification</h3>
                      <p className="text-sm md:text-base leading-relaxed text-gray-700">
                        When bank legal notices are received, ignoring them can lead to serious legal consequences. We draft professional, formal responses to demand notices, arbitration alerts, and cheque bounce notices. For detailed instructions on notices, refer to our page on drafting a <Link href="/how-to-identify-fake-settlement-letter" className="text-[#D2A02A] font-semibold hover:underline">bank legal notice reply</Link>.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Reviews */}
                <section id="reviews" className="scroll-mt-32">
                  <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6 uppercase">Verified Reviews: Testimonials from the Sector 57 Office</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    Read the experiences of actual clients who have visited our Gurgaon office and resolved their debt issues under the guidance of our legal team:
                  </p>

                  <div className="space-y-6">
                    <blockquote className="border-l-4 border-[#D2A02A] pl-4 italic text-gray-700 text-base md:text-lg bg-gray-50 p-6 rounded-r-2xl">
                      &quot;I want to clarify that this is real ama legal solutions which deals in loansettlements and other legal services which is situated in sector 57 gurugam run by Anuj Anand Malik who is the only owner.&quot;
                      <cite className="block font-bold not-italic text-sm text-gray-900 mt-2">- Bhavya Jain</cite>
                    </blockquote>

                    <blockquote className="border-l-4 border-[#D2A02A] pl-4 italic text-gray-700 text-base md:text-lg bg-gray-50 p-6 rounded-r-2xl">
                      &quot;Recommending Anuj in itself is not enough. From the very first meeting he had been patient, attentive and genuinely committed to helping me understand everystep of the legal process in regards to settlement. He stood like a rock beside me.&quot;
                      <cite className="block font-bold not-italic text-sm text-gray-900 mt-2">- Samrat Basu</cite>
                    </blockquote>

                    <blockquote className="border-l-4 border-[#D2A02A] pl-4 italic text-gray-700 text-base md:text-lg bg-gray-50 p-6 rounded-r-2xl">
                      &quot;The Ama legal Solutions staffs demonstrated exceptional professionalism, clarity, and dedication throughout the process. Their team is responsive, knowledgeable, and handles the matter with great attention to detail. I truly appreciate their timely support and effective guidance, and I would highly recommend their services.&quot;
                      <cite className="block font-bold not-italic text-sm text-gray-900 mt-2">- Imlitoshi Sangtam</cite>
                    </blockquote>

                    <blockquote className="border-l-4 border-[#D2A02A] pl-4 italic text-gray-700 text-base md:text-lg bg-gray-50 p-6 rounded-r-2xl">
                      &quot;I approached AMA Legal Solution during a challenging time, and I must say-it was the best decision I ever made. Their team is incredibly efficient, responsive, and genuinely invested in resolving queries faster than I ever imagined.&quot;
                      <cite className="block font-bold not-italic text-sm text-gray-900 mt-2">- Ganesh Pawar</cite>
                    </blockquote>
                  </div>
                  <p className="text-sm md:text-base text-gray-600 mt-6">
                    For a comprehensive look at how our clients rate our services across various loan settlements, please visit our <Link href="/expert-panel-loan-settlement-reviews" className="text-[#D2A02A] font-semibold hover:underline">expert panel reviews page</Link>.
                  </p>
                </section>

                {/* Contact Info */}
                <section id="contact-info" className="scroll-mt-32">
                  <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6 uppercase">Office Location and Contact Details</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    If you are planning to visit our office or send official documents, please note the verified contact details below:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex gap-4">
                      <FaMapMarkerAlt className="text-[#D2A02A] text-2xl shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Office Address</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          2493AP, Block G, Sushant Lok 2,<br />
                          Sector 57, Gurugram,<br />
                          Haryana - 122001
                        </p>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex gap-4">
                      <FaPhoneAlt className="text-[#D2A02A] text-2xl shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Helpline Phone</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          +91 8700343611<br />
                          (Operational: 10:00 AM to 6:30 PM)
                        </p>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex gap-4">
                      <FaGlobe className="text-[#D2A02A] text-2xl shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Official Website</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          <a href="https://www.amalegalsolutions.com" target="_blank" rel="noopener noreferrer" className="text-[#D2A02A] hover:underline">
                            www.amalegalsolutions.com
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex gap-4">
                      <FaBalanceScale className="text-[#D2A02A] text-2xl shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Office Leadership</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          Advocate Anuj Anand Malik<br />
                          (Principal Owner & Advocate)
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Clean Markdown Table */}
                  <div className="mt-8 overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-xl overflow-hidden">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider border-b">Business Metric</th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider border-b">Verified Details</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900 border-r bg-gray-50/50">Official Name</td>
                          <td className="px-6 py-4 whitespace-normal text-sm text-gray-600">AMA Legal Solutions</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900 border-r bg-gray-50/50">Lead Advocate</td>
                          <td className="px-6 py-4 whitespace-normal text-sm text-gray-600">Advocate Anuj Anand Malik</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900 border-r bg-gray-50/50">Gurgaon Office Address</td>
                          <td className="px-6 py-4 whitespace-normal text-sm text-gray-600">2493AP, Block G, Sushant Lok 2, Sector 57, Gurugram, Haryana 122001</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900 border-r bg-gray-50/50">Official Contact Number</td>
                          <td className="px-6 py-4 whitespace-normal text-sm text-gray-600">+91 8700343611</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900 border-r bg-gray-50/50">Primary Area of Expertise</td>
                          <td className="px-6 py-4 whitespace-normal text-sm text-gray-600">Unsecured Debt Resolution & Credit Card Settlements</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900 border-r bg-gray-50/50">Regulatory Compliance</td>
                          <td className="px-6 py-4 whitespace-normal text-sm text-gray-600">Enforcement of RBI Guidelines on Debt Recovery and Fair Practice Codes</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* FAQs */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6 uppercase">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border-b border-gray-100 pb-4">
                        <h3 className="text-sm md:text-lg font-bold text-gray-900 mb-2 flex items-start gap-2">
                          <span className="text-[#D2A02A] font-extrabold">Q.</span>
                          <span>{faq.question}</span>
                        </h3>
                        <p className="text-xs md:text-sm text-gray-600 pl-6 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

              </div>
            </div>

            {/* Right Sidebar - Contact/Ad (Desktop) */}
            <div className="hidden lg:block sticky top-24 space-y-6">
              <div className="bg-[#1a202c] text-white p-6 rounded-2xl shadow-lg border border-gray-800 text-center">
                <span className="text-[#D2A02A] font-extrabold uppercase text-xs tracking-wider mb-2 block">AMA Legal Solutions</span>
                <h3 className="text-xl font-bold mb-4">Are you facing recovery agent calls?</h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  Get legal defense against aggressive recovery agents, check the validity of settlement letters, or send a formal legal notice to banks.
                </p>
                <Link href="/contact">
                  <button className="w-full bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-2.5 px-4 rounded-xl transition-all text-sm mb-3">
                    Schedule Office Visit
                  </button>
                </Link>
                <a href="tel:+918700343611" className="text-[#D2A02A] text-sm font-semibold hover:underline block">
                  Call: +91-8700343611
                </a>
              </div>

              <div className="bg-gray-100 p-6 rounded-2xl border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-3 text-sm flex items-center gap-2">
                  <FaShieldAlt className="text-[#D2A02A]" />
                  <span>Important Compliance</span>
                </h4>
                <p className="text-gray-600 text-xs leading-relaxed">
                  AMA Legal Solutions does not collect bank settlements directly. Always routing outstanding settlements through official, written bank letters from official bank domains.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
