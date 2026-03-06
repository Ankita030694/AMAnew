import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "What is MSME registration and who needs it in India?",
    answer: "MSME registration, now officially known as Udyam Registration, is a government provided certification for Micro, Small, and Medium Enterprises in India. It is a digital recognition that allows businesses to access a wide range of subsidies, credit schemes, and legal protections. Any business entity, whether it is a sole proprietorship, partnership firm, Limited Liability Partnership (LLP), or a private limited company, that meets the investment and turnover criteria should obtain this registration to formalize their operations and gain competitive advantages in the Indian market."
  },
  {
    question: "What are the new MSME classification criteria for 2026?",
    answer: "As per the Union Budget 2025-26, the classification criteria have been significantly revised to support business growth. For Micro Enterprises, the investment limit is now up to 2.5 crore rupees with a turnover of up to 10 crore rupees. Small Enterprises are defined by investments up to 25 crore rupees and turnover up to 100 crore rupees. Medium Enterprises involve investments up to 125 crore rupees and turnover up to 500 crore rupees. These expanded limits ensure that growing businesses continue to enjoy MSME benefits for a longer period."
  },
  {
    question: "Is MSME registration mandatory for all businesses?",
    answer: "While MSME registration is not strictly mandatory for every business by law, it is highly recommended and practically essential for any business looking to scale. Without Udyam registration, an enterprise cannot access government tenders, collateral-free loans under the CGTMSE scheme, or protection against delayed payments under the MSMED Act. Most banks and financial institutions also require an MSME certificate as a primary document for opening current accounts or processing business loans."
  },
  {
    question: "What is the difference between Udyam, Udyog Aadhaar, and MSME registration?",
    answer: "Udyam Registration is the current, consolidated, and permanent registration process that replaced the older Udyog Aadhaar Memorandum (UAM) and Small Scale Industry (SSI) systems in July 2020. MSME registration is the general category name, while Udyam is the specific portal and certificate name. If you have an old UAM certificate, it is no longer valid for most benefits, and you must migrate to the Udyam portal to maintain your MSME status."
  },
  {
    question: "How much does MSME registration cost through the official portal?",
    answer: "The government of India does not charge any official fee for MSME or Udyam registration on the official portal. It is a free, paperless, and completely digital process. However, many businesses choose to hire professional legal firms like AMA Legal Solutions to handle the process. Professionals ensure that the National Industrial Classification (NIC) codes are chosen correctly, financial data is accurately reported, and the registration is compliant with the latest 2026 guidelines, preventing future legal or verification hurdles."
  },
  {
    question: "What documents are required for Udyam registration in 2026?",
    answer: "The Udyam registration process is based on self-declaration and does not require uploading physical documents. However, you must have specific information ready: the Aadhaar number of the proprietor or authorized signatory, the PAN card of the enterprise, and GSTIN details if applicable. The portal is integrated with Income Tax and GST systems, so it automatically fetches investment and turnover data. You will also need your bank account details, including the account number and IFSC code, along with your business address and employee count."
  },
  {
    question: "How long does it take to receive the MSME certificate?",
    answer: "Once the online application is submitted and the Aadhaar-based OTP verification is complete, the Udyam Registration Number (URN) is generated almost immediately. However, the final e-certificate, which includes a dynamic QR code, usually takes between 3 to 7 working days to be issued. This time allows the system to verify your internal PAN and GST records. Once issued, the certificate can be downloaded directly from the portal and is valid for the lifetime of the business."
  },
  {
    question: "What is the validity period of a Udyam Registration certificate?",
    answer: "A Udyam Registration certificate has permanent validity. Unlike older systems that required periodic renewals, the Udyam certificate does not expire as long as the business continues to operate. However, enterprises are required to update their financial and operational details on the portal annually after filing their income tax returns and GST returns. This ensures that the enterprise remains correctly classified according to the latest investment and turnover figures."
  },
  {
    question: "Can a trading business or a retail shop register as an MSME?",
    answer: "Yes, since 2021, the Ministry of MSME has included retail and wholesale trades under the ambit of MSME registration. While traders were previously excluded, they can now register on the Udyam portal to benefit from Priority Sector Lending (PSL) from banks. However, it is important to note that many other government subsidies and schemes under the Ministry of MSME are specifically tailored for manufacturing and service-based enterprises, and traders might have limited access to certain non-credit benefits."
  },
  {
    question: "What are the key benefits of MSME registration for startups?",
    answer: "For startups, MSME registration acts as a gateway to financial stability. Benefits include 50 percent subsidies on patent and trademark registration fees, easy access to seed funding through government incubators, and exemptions from Earnest Money Deposits (EMD) when bidding for government tenders. Startups also benefit from the revised 2025-26 budget provisions that offer doubled credit guarantee covers and specialized MSME credit cards for easier working capital management."
  },
  {
    question: "How does the MSMED Act protect businesses from delayed payments?",
    answer: "The MSME Development (MSMED) Act of 2006 provides a powerful legal shield for registered enterprises. It mandates that any buyer of goods or services from an MSME must make payment within 45 days of acceptance. If the payment is delayed beyond this period, the buyer is legally obligated to pay compound interest to the MSME at three times the bank rate notified by the RBI. This interest is also non-deductible as a business expense for the buyer, creating a strong financial incentive for timely payments."
  },
  {
    question: "Can I register multiple business units under a single Aadhaar number?",
    answer: "Under the Udyam system, only one registration is allowed per Aadhaar number for a proprietor. However, you can add multiple plant or shop locations and multiple business activities (NIC codes) within that single registration. If you own multiple distinct legal entities like a private limited company and a separate partnership firm, they will have their own registrations linked to the PIN of the firm and the Aadhaar of the authorized signatory, but each entity must be unique."
  },
  {
    question: "Is having a GSTIN mandatory for MSME registration?",
    answer: "As per the latest updates, having a GSTIN is mandatory for all enterprises except those that are specifically exempted from GST registration under the GST Law. While the Udyam portal allows for registration without GST in certain exempted categories, the integration with GST records is the primary way the government verifies turnover for classification. For most professional and manufacturing businesses, obtaining a GST number is a prerequisite for a smooth MSME registration process."
  },
  {
    question: "What is the ZED Certification Scheme for MSMEs?",
    answer: "The Zero Defect Zero Effect (ZED) scheme is a government initiative to improve the quality and environmental standards of Indian MSMEs. By obtaining ZED certification, businesses demonstrate their commitment to manufacturing products with zero defects and minimal environmental impact. Certified businesses get substantial subsidies on certification costs, easier access to exports, and preferential treatment in certain government procurement processes. In 2026, the government aims to certify over 2 lakh businesses under this scheme."
  },
  {
    question: "How can registered MSMEs obtain collateral-free loans?",
    answer: "Registered MSMEs can access the Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE). This scheme provides a credit guarantee to banks and NBFCs, allowing them to lend up to 10 crore rupees to MSMEs without any third-party collateral or personal guarantees. The guarantee cover has been recently increased in the 2025-26 budget, making it significantly easier for small businesses and startups to secure the capital needed for expansion."
  },
  {
    question: "What is the RAMP scheme and who can benefit from it?",
    answer: "The Raising and Accelerating MSME Performance (RAMP) scheme is a World Bank assisted initiative aimed at improving the performance and resilience of MSMEs across India. It focuses on enhancing access to markets, strengthening institutional capacity, and facilitating technology upgradation. RAMP specifically targets MSMEs in manufacturing and service sectors, helping them adopt digital tools and sustainable practices to stay competitive in the global market through 2026 and 2027."
  },
  {
    question: "Can I migrate my old SSI or Udyog Aadhaar to Udyam?",
    answer: "Yes, migration is absolutely necessary. All enterprises that were registered under the old SSI (Small Scale Industry) or Udyog Aadhaar Memorandum (UAM) systems must re-register on the Udyam portal. The process involves selecting the 'Migration' option on the portal and entering your old registration number. This ensures that your business history is preserved while your classification is updated according to the modern criteria. Failure to migrate can lead to the cancellation of your MSME benefits."
  },
  {
    question: "What happens if a business exceeds the MSME limits?",
    answer: "If an enterprise grows and its investment or turnover exceeds the limits for a Medium Enterprise, it will be re-classified as a large scale industry. However, the government provides a grace period of one year from the end of the year in which the limits were breached. During this period, the business can continue to enjoy MSME benefits and prepare for the transition. This 'graduation' is a sign of business success and opens up new avenues for larger scale financing and international operations."
  },
  {
    question: "How can I update my MSME registration details?",
    answer: "Udyam registration details can be updated online through the official portal using the 'Update Details' section. This requires logging in with your Udyam Registration Number and the mobile number linked to the Aadhaar. You can update your business address, bank account details, and NIC codes. Financial data like turnover and investment are usually updated automatically based on your latest ITR and GST filings, but manual verification is occasionally required during the annual update window."
  },
  {
    question: "Why should I consult a legal expert for MSME registration?",
    answer: "While the portal is open to everyone, professional legal consultation from firms like AMA Legal Solutions prevents common errors that can lead to registration rejection or loss of benefits. We help you choose the correct NIC codes, which determines your eligibility for specific subsidies. We also ensure your financial declarations align with your tax filings to avoid audits. Furthermore, we provide ongoing legal support for MSMED Act compliance and recovery of delayed payments, which simple registration agents cannot offer."
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
      "name": "Services",
      "item": "https://www.amalegalsolutions.com/services"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "MSME Registration",
      "item": "https://www.amalegalsolutions.com/msme-registration"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Full Guide to MSME (Udyam) Registration in India 2026: Process, Benefits, and Updates",
  "description": "Comprehensive 2026 guide for MSME registration in India. Learn about the updated classification criteria, online Udyam process, and government benefits for small businesses.",
  "image": "https://www.amalegalsolutions.com/services/msme-hero.png",
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
  "datePublished": "2024-01-01",
  "dateModified": "2026-01-31"
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
  "name": "MSME Registration Services",
  "image": "https://www.amalegalsolutions.com/services/msme-icon.png",
  "description": "Expert legal assistance for Udyam and MSME registration in India.",
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
        "name": "Sandeep Verma"
      },
      "reviewBody": "AMA Legal Solutions helped my small manufacturing unit get Udyam registration in just 3 days. Their understanding of NIC codes saved us from a lot of confusion. Very professional team."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Meenakshi Iyer"
      },
      "reviewBody": "I was struggling with the delayed payment from a large client. AMA Legal Solutions not only got my MSME certificate but also guided me through the MSME Samadhaan process. Highly recommended."
    }
  ]
};

export const metadata = {
  title: "MSME Registration India 2026 | Udyam Registration Guide & Benefits",
  description:
    "Get your MSME (Udyam) Registration in India with AMA Legal Solutions. Updated 2026 criteria, benefits of collateral-free loans, 45-day payment protection, and expert legal help.",
  keywords: [
    "msme registration",
    "udyam registration",
    "msme registration 2026",
    "online msme certificate",
    "udyam registration process",
    "msme benefits for small business",
    "msme registration india",
    "ssi registration",
    "msmed act 2006",
    "msme startup benefits"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/msme-registration',
  },
  openGraph: {
    title: "MSME Registration India 2026 | #1 Legal Assistance for Startups",
    description: "Secure your business growth with MSME (Udyam) Registration. Access subsidies, credit schemes, and legal protection with AMA Legal Solutions.",
    url: "https://www.amalegalsolutions.com/msme-registration",
    type: "website",
    images: [
      {
        url: "/services/msme-hero.png",
        width: 1200,
        height: 630,
        alt: "MSME Registration India",
      },
    ],
  },
};

export default function MsmeRegistrationPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "what-is-msme", title: "What is MSME Registration?" },
    { id: "classification", title: "2026 Classification Criteria" },
    { id: "benefits", title: "Major Benefits" },
    { id: "eligibility", title: "Eligibility Guide" },
    { id: "documents", title: "Documents Required" },
    { id: "process", title: "Step-by-Step Process" },
    { id: "delayed-payments", title: "Payment Protection" },
    { id: "government-schemes", title: "Key Schemes" },
    { id: "compliance", title: "Post-Registration Compliance" },
    { id: "why-choose-us", title: "Why Choose Us" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "MSME Registration", href: "/msme-registration" },
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
          <div 
            className="absolute inset-0 bg-cover bg-center z-0" 
            style={{ background: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/services/msme-bg.jpg') center/cover" }}
          ></div>
          <div className="relative z-20 container mx-auto px-4 py-12 md:py-32 text-center">
            <h1 className="text-2xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight mt-10">
              Empower Your Business with <span className="text-[#D2A02A]">MSME Registration</span>
            </h1>
            <p className="text-sm md:text-2xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-200">
              Unlock collateral-free loans, 50% subsidy on trademarks, and legal protection against delayed payments. The definitive 2026 guide to Udyam Registration in India.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg">
                Register Your MSME Today
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
              <div className="lg:hidden mb-6 sticky top-20 z-10">
                <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-3 md:p-12 rounded-2xl shadow-sm space-y-6 md:space-y-12">
                
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">The Backbone of the Indian Economy: MSMEs</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    Micro, Small, and Medium Enterprises (MSMEs) are the true engine of India's economic growth story. Contributing nearly 30 percent to the national GDP and 45 percent to manufacturing exports, they are the largest employers after the agricultural sector. In 2026, the landscape for small businesses has evolved dramatically, with the government introducing modern registration systems and enhanced financial support to make India a global manufacturing hub.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    However, many entrepreneurs remain unaware of the vast array of benefits they can access simply by formalizing their business through <strong>MSME registration</strong> (officially known as <strong>Udyam Registration</strong>). This registration is not just a piece of paper; it is a digital passport that unlocks credit, technology, and market access that would otherwise be unavailable to small scale units. Whether you are running a small consultancy from home or a medium sized manufacturing plant, being registered as an MSME is the first step toward institutional success.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    At AMA Legal Solutions, we understand that the jargon of investment limits and turnover thresholds can be overwhelming for business owners who want to focus on their core operations. This comprehensive guide is designed to clarify the 2026 MSME landscape, helping you understand how registration can protect your cash flow, reduce your operational costs, and provide a safety net against unfair business practices.
                  </p>
                </section>

                {/* What is MSME Registration */}
                <section id="what-is-msme" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">What is MSME (Udyam) Registration?</h2>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 md:p-6 mb-4 md:mb-8 rounded-r-lg">
                    <p className="text-sm md:text-lg text-blue-900 italic">
                      "Udyam Registration is the modern, permanent, and digital registration process for MSMEs in India, designed to replace all previous complicated systems with a single paperless portal."
                    </p>
                  </div>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    In July 2020, the Ministry of MSME launched the <strong>Udyam Registration portal</strong> to simplify the registration process for every small business owner in India. Previously, businesses had to navigate through SSI registrations and Udyog Aadhaar Memorandum (UAM), which were often fragmented and required periodic renewals. The Udyam system is integrated with the Income Tax and GST portals, ensuring that business data is verified automatically, reducing the risk of fraud and simplifying the compliance burden.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    When you complete your <strong>online MSME registration</strong>, you are issued a unique Udyam Registration Number (URN) and a digital e-certificate. This certificate contains a dynamic QR code which can be scanned to verify the authenticity of your business details instantly by banks, government departments, or potential international partners. It serves as your primary legal identity for accessing all MSME-specific schemes and subsidies provided by the Central and State governments.
                  </p>
                </section>

                {/* Classification Criteria 2026 */}
                <section id="classification" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Updated MSME Classification Criteria for 2026</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    The Union Budget 2025-26 has introduced revolutionary changes to the way MSMEs are classified in India. To prevent businesses from losing their benefits as they scale, the government has significantly increased the investment and turnover limits. The classification is now based on a composite criterion of both investment in plant and machinery and annual turnover.
                  </p>
                  <div className="overflow-x-auto mb-8">
                    <table className="w-full border-collapse border border-gray-200 rounded-lg overflow-hidden">
                      <thead>
                        <tr className="bg-gray-800 text-white">
                          <th className="p-4 text-left border-b border-gray-700">Enterprise Type</th>
                          <th className="p-4 text-left border-b border-gray-700">Investment Limit (Max)</th>
                          <th className="p-4 text-left border-b border-gray-700">Turnover Limit (Max)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-100 bg-white">
                          <td className="p-4 font-bold text-blue-900">Micro Enterprise</td>
                          <td className="p-4">Up to 2.5 Crore Rupees</td>
                          <td className="p-4">Up to 10 Crore Rupees</td>
                        </tr>
                        <tr className="border-b border-gray-100 bg-gray-50">
                          <td className="p-4 font-bold text-blue-900">Small Enterprise</td>
                          <td className="p-4">Up to 25 Crore Rupees</td>
                          <td className="p-4">Up to 100 Crore Rupees</td>
                        </tr>
                        <tr className="bg-white">
                          <td className="p-4 font-bold text-blue-900">Medium Enterprise</td>
                          <td className="p-4">Up to 125 Crore Rupees</td>
                          <td className="p-4">Up to 500 Crore Rupees</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    The expansion of these limits (2.5 times for investment and 2 times for turnover) is a game changer. It allows a Small enterprise to continue growing without reaching the Medium threshold quickly, ensuring they keep the subsidies and procurement preferences that are critical during their growth phase. These updated limits are part of the government's strategy to foster 'Atmanirbhar Bharat' by allowing Indian companies to reach a significant scale before being classified as large scale enterprises.
                  </p>
                </section>

                {/* Major Benefits */}
                <section id="benefits" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Unlocking the Major Benefits of MSME Registration</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    Registration on the Udyam portal is the key that opens many doors for small businesses. The benefits are not just limited to subsidized loans but extend to legal protections and cost reductions across your business lifecycle. Here are the most significant advantages you gain in 2026:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">1. Collateral-Free Bank Loans</h4>
                      <p className="text-gray-600 text-sm">Through the Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE), registered units can get loans up to 10 crore rupees without providing any third party collateral or property as security.</p>
                    </div>
                    <div className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">2. 50% Subsidy on IP Registration</h4>
                      <p className="text-gray-600 text-sm">Protecting your brand name and innovations is cheaper for MSMEs. You get a massive 50 percent reimbursement on the government fees for Trademark and Patent registrations.</p>
                    </div>
                    <div className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">3. Protection Against Delayed Payments</h4>
                      <p className="text-gray-600 text-sm">The MSMED Act protects you from large buyers who delay payments. Buyers are legally required to pay you within 45 days, or pay heavy interest at three times the bank rate.</p>
                    </div>
                    <div className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">4. Electricity Bill Concessions</h4>
                      <p className="text-gray-600 text-sm">Many states in India offer lower electricity tariffs and exemptions from security deposits for manufacturing units that hold a valid Udyam Registration certificate.</p>
                    </div>
                    <div className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">5. ISO Certification Reimbursement</h4>
                      <p className="text-gray-600 text-sm">Small businesses looking to improve their quality standards can get reimbursed for the expenses incurred in obtaining ISO 9000/ISO 14001 certifications.</p>
                    </div>
                    <div className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">6. Government Tender Preferences</h4>
                      <p className="text-gray-600 text-sm">MSMEs are exempt from paying Earnest Money Deposit (EMD) for government tenders. Also, 25 percent of procurement by PSUs must mandatory be from MSMEs.</p>
                    </div>
                  </div>
                </section>

                {/* Eligibility Guide */}
                <section id="eligibility" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Eligibility: Who Can Register as an MSME?</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The beauty of the Udyam portal is its inclusivity. Almost any business entity that fits within the investment and turnover limits can register. This includes:
                  </p>
                  <ul className="grid md:grid-cols-2 gap-4 mb-8">
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg">
                      <span className="text-blue-600 mr-3">●</span> Sole Proprietorships
                    </li>
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg">
                      <span className="text-blue-600 mr-3">●</span> Partnership Firms
                    </li>
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg">
                      <span className="text-blue-600 mr-3">●</span> Limited Liability Partnerships (LLP)
                    </li>
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg">
                      <span className="text-blue-600 mr-3">●</span> Private Limited Companies
                    </li>
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg">
                      <span className="text-blue-600 mr-3">●</span> Public Limited Companies
                    </li>
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg">
                      <span className="text-blue-600 mr-3">●</span> Cooperative Societies
                    </li>
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg">
                      <span className="text-blue-600 mr-3">●</span> Self-Help Groups (SHG)
                    </li>
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg">
                      <span className="text-blue-600 mr-3">●</span> Hindu Undivided Families (HUF)
                    </li>
                  </ul>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    It is important to remember that the classification is based on the <strong>enterprise</strong> rather than the individual proprietor. Even if you have started your business recently and your turnover is zero, you can still register as a Micro Enterprise. In fact, many fresh entrepreneurs register their business as an MSME on day one to secure their name and apply for startup loans. Retail and wholesale traders are also eligible, though their benefits are primarily focused on credit availability rather than manufacturing subsidies.
                  </p>
                </section>

                {/* Documents Required */}
                <section id="documents" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Documents and Information Checklist</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    The registration process is entirely digital and based on self-declaration. You do not need to upload any PDF copies of your documents. However, the system verifies your data against official government records like Income Tax and GST portals. You should have the following details ready:
                  </p>
                  
                  <div className="space-y-4">
                    <div className="p-6 bg-gray-50 rounded-xl border-l-8 border-[#D2A02A]">
                      <h4 className="font-bold text-xl mb-2">1. Aadhaar Card Details</h4>
                      <p className="text-gray-700">The Aadhaar number should belong to the proprietor (in case of proprietorship), the managing partner (in case of a partnership), or the director/authorized signatory (in case of companies and LLPs). Ensure the mobile number linked to the Aadhaar is active for OTP verification.</p>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-xl border-l-8 border-[#D2A02A]">
                      <h4 className="font-bold text-xl mb-2">2. PAN Card of the Entity</h4>
                      <p className="text-gray-700">For proprietorships, the individual PAN is used. For all other legal entities like companies or LLPs, the PAN of the firm is mandatory. The system fetches tax compliance and investment data using this PAN.</p>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-xl border-l-8 border-[#D2A02A]">
                      <h4 className="font-bold text-xl mb-2">3. GSTIN (if applicable)</h4>
                      <p className="text-gray-700">If your business is required to have a GST registration under the law, it must be provided. Turnover data is auto populated from GST returns to ensure accurate classification.</p>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-xl border-l-8 border-[#D2A02A]">
                      <h4 className="font-bold text-xl mb-2">4. Bank Account & IFSC Code</h4>
                      <p className="text-gray-700">You need to provide the operational bank account number and the IFSC code of the branch. This is used for any subsidy disbursements or interest subventions directly to your account.</p>
                    </div>
                  </div>
                </section>

                {/* Registration Process */}
                <section id="process" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Step-by-Step MSME Registration Process</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    Entering the world of formal business through the Udyam portal is straightforward if you follow these steps carefully. Any errors at this stage can complicate your tax filings or loan applications later.
                  </p>
                  
                  <div className="space-y-8">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#1a202c] rounded-lg flex items-center justify-center text-[#D2A02A] text-2xl font-bold border-2 border-[#D2A02A]">01</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Visit the Official Udyam Portal</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Always use the official government website (udyamregistration.gov.in). Be wary of third party websites that look similar but charge exorbitant 'handling fees'. Choose the option for 'New Entrepreneurs who are not Registered yet'.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#1a202c] rounded-lg flex items-center justify-center text-[#D2A02A] text-2xl font-bold border-2 border-[#D2A02A]">02</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Aadhaar and PAN Verification</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Enter your Aadhaar number and name. You will receive an OTP on your registered mobile number. Once verified, you need to enter the PAN of the organization. The system will validate the PAN with the Income Tax database.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#1a202c] rounded-lg flex items-center justify-center text-[#D2A02A] text-2xl font-bold border-2 border-[#D2A02A]">03</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Filling Enterprise Details</h3>
                        <p className="text-gray-700 leading-relaxed">
                          You will now enter the business name, type of organization, location of the plant, and administrative office address. You also need to input the date your business commenced operations and your bank account details.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#1a202c] rounded-lg flex items-center justify-center text-[#D2A02A] text-2xl font-bold border-2 border-[#D2A02A]">04</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Selecting NIC Codes</h3>
                        <p className="text-gray-700 leading-relaxed">
                          The National Industrial Classification (NIC) code defines your business activity. You can search for the codes by keywords. Choosing the right codes is critical because certain government schemes are only available for specific NIC categories. You can add multiple codes if your business has diverse activities.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#1a202c] rounded-lg flex items-center justify-center text-[#D2A02A] text-2xl font-bold border-2 border-[#D2A02A]">05</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Final Submission and Certificate</h3>
                        <p className="text-gray-700 leading-relaxed">
                          After filling in the investment and turnover details (if the system hasn't auto-fetched them), you will submit the form. A second OTP will be sent to your mobile. Upon successful validation, your Udyam Registration Number will be displayed. Your e-certificate will be available for download in a few days.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Delayed Payments Protection */}
                <section id="delayed-payments" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Strong Protection Against Delayed Payments</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The biggest challenge for any small business in India is working capital management, which is often severely impacted by delayed payments from large corporate clients or government departments. The MSMED Act of 2006 serves as a powerful shield for registered MSMEs.
                  </p>
                  <div className="bg-yellow-50 p-8 rounded-2xl border border-yellow-200 mb-8">
                    <h4 className="font-bold text-xl mb-4 text-gray-900">The 45-Day Rule</h4>
                    <p className="text-gray-700 mb-4">
                      By law, every buyer is obligated to pay the MSME for the goods or services supplied within 45 days of acceptance. If there is no specific written agreement, the payment must be made within 15 days.
                    </p>
                    <h4 className="font-bold text-xl mb-4 text-gray-900">Interest Penalty</h4>
                    <p className="text-gray-700 mb-4">
                      If the buyer fails to pay within this period, they must pay compound interest with monthly rests to the MSME on the amount. The rate of interest is three times the bank rate notified by the Reserve Bank of India.
                    </p>
                    <h4 className="font-bold text-xl mb-4 text-gray-900">MSME Samadhaan Portal</h4>
                    <p className="text-gray-700">
                      The government has launched the MSME Samadhaan portal where registered units can directly file cases against buyers for delayed payments. These cases are handled by the Micro and Small Enterprise Facilitation Council (MSEFC), which has the power to issue binding orders for payment and interest.
                    </p>
                  </div>
                </section>

                {/* Key Schemes */}
                <section id="government-schemes" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Powering Growth: Key Government Schemes for 2026</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    Once registered, your business becomes eligible for a variety of schemes funded by the Ministry of MSME and other government bodies. These schemes are designed to help you modernize your plant, increase your exports, and train your workforce.
                  </p>
                  <div className="space-y-6">
                    <div className="flex gap-4 p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:border-blue-200 transition-colors">
                      <div className="text-3xl">🚀</div>
                      <div>
                        <h4 className="font-bold text-xl mb-1 text-blue-900">RAMP Scheme</h4>
                        <p className="text-gray-600 text-sm">The Raising and Accelerating MSME Performance scheme provides financial and technical support to increase productivity and market reach. It helps businesses adopt digital solutions and global quality standards through 2026.</p>
                      </div>
                    </div>
                    <div className="flex gap-4 p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:border-blue-200 transition-colors">
                      <div className="text-3xl">🌱</div>
                      <div>
                        <h4 className="font-bold text-xl mb-1 text-blue-900">ZED Certification Scheme</h4>
                        <p className="text-gray-600 text-sm">Move towards sustainable manufacturing with Zero Defect Zero Effect certification. You get up to 80% subsidy on the cost of certification, helping you improve efficiency and reduce waste.</p>
                      </div>
                    </div>
                    <div className="flex gap-4 p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:border-blue-200 transition-colors">
                      <div className="text-3xl">💳</div>
                      <div>
                        <h4 className="font-bold text-xl mb-1 text-blue-900">MSME Credit Cards</h4>
                        <p className="text-gray-600 text-sm">Newly introduced in 2025, micro enterprises can now get specialized credit cards with limits up to 5 lakh rupees to manage their day to day operational expenses easily.</p>
                      </div>
                    </div>
                    <div className="flex gap-4 p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:border-blue-200 transition-colors">
                      <div className="text-3xl">🏭</div>
                      <div>
                        <h4 className="font-bold text-xl mb-1 text-blue-900">Cluster Development Program</h4>
                        <p className="text-gray-600 text-sm">Small industries operating in a specific geographical area can come together to build Common Facility Centers (CFCs) for testing, training, and logistics, with major funding from the government.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Post Registration Compliance */}
                <section id="compliance" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Post-Registration Compliance: Keeping Your Status Active</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Registration is not a one-time event that you can forget. To ensure your business continues to receive benefits and remains in the correct classification, you must adhere to certain post-registration responsibilities.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The most critical requirement is the <strong>Annual Update of Udyam Details</strong>. Every year, after you file your Income Tax Return (ITR) and GST returns, you should log back into the Udyam portal to verify your turnover and investment figures. While the system is designed to fetch these automatically, manual discrepancies can occur. Keeping your data updated prevents your certificate from being marked as 'inactive' or 'incorrectly classified', which could lead to the rejection of bank loans or government subsidies.
                  </p>
                  <div className="p-6 bg-red-50 rounded-xl border-l-4 border-red-500">
                    <p className="text-red-900 font-semibold mb-2">Important Warning for Businesses:</p>
                    <p className="text-red-700 text-sm">If your business undergoes a change in structure (for example, a proprietorship converting into a partnership) or if there is a major change in ownership, you must apply for a new Udyam registration, as the previous one is linked to the specific legal entity identified by its PAN.</p>
                  </div>
                </section>

                {/* Why Choose AMA Legal Solutions */}
                <section id="why-choose-us" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Partner with AMA Legal Solutions for MSME Registration?</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    While the government has made the portal accessible, navigating the legal and technical aspects of MSME registration can be tricky. AMA Legal Solutions is more than just a registration agency; we are your growth partners in the legal landscape of India.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors border border-gray-100">
                      <div className="text-4xl mb-4">🎯</div>
                      <h3 className="font-bold text-xl mb-2">Expert NIC Selection</h3>
                      <p className="text-gray-600 text-sm">We ensure you select the exactly correct NIC codes, ensuring you don't miss out on industry specific subsidies and schemes.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors border border-gray-100">
                      <div className="text-4xl mb-4">📑</div>
                      <h3 className="font-bold text-xl mb-2">Tax Alignment</h3>
                      <p className="text-gray-600 text-sm">We verify that your investment and turnover declarations match your ITR and GST records, preventing future tax audits or legal notices.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors border border-gray-100">
                      <div className="text-4xl mb-4">🛡️</div>
                      <h3 className="font-bold text-xl mb-2">Ongoing Legal Help</h3>
                      <p className="text-gray-600 text-sm">Beyond registration, our lawyers help you recover delayed payments through the MSME Samadhaan portal and handle commercial litigation.</p>
                    </div>
                  </div>
                </section>

                {/* FAQs */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions on MSME Registration</h2>
                  <div className="space-y-6">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                          <span className="text-[#D2A02A] mr-3">Q.</span>
                          {faq.question}
                        </h3>
                        <p className="text-gray-700 leading-relaxed pl-8">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Detailed Guide Expansion for Word Count */}
                <section id="additional-insights" className="scroll-mt-32 pt-10 border-t border-gray-100">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Expert Insights: Scaling Your Brand as a Registered MSME</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The journey from being a registered MSME to becoming a household name in India requires strategic use of the benefits provided by the government. One of the most underutilized advantages is the export promotion support. For Indian MSMEs, the global market is now closer than ever. The government, through various Export Promotion Councils (EPCs), provides subsidies for participating in international exhibitions, market research, and testing for international quality standards. If your product is innovative and caters to a global audience, your MSME certificate is your ticket to subsidized international growth.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Furthermore, the focus on 'vocal for local' has created a ecosystem where consumer sentiment is strongly in favor of homegrown small businesses. By showcasing your Udyam Registration and any quality markings like ZED certification on your packaging and marketing materials, you build immense trust with the Indian consumer. It signals that your business is formal, compliant, and committed to the high standards expected from modern Indian enterprises.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Technological adoption is another area where MSMEs often lag behind due to the perceived high cost. However, with the Digital MSME component of the Champions scheme, you can access cloud-based tools for ERP, inventory management, and digital marketing at highly subsidized rates. Leveraging these tools early in your journey ensures that your business processes are professional and scalable. At AMA Legal Solutions, we encourage our clients to look beyond just the tax benefits and see the MSME registration as a holistic platform for business excellence.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    In conclusion, MSME registration is a small step in terms of paperwork but a giant leap in terms of business possibilities. It formalizes your hard work, protects your rights as a supplier, and provides the financial backing needed to turn your vision into reality. As the Indian economy continues its march towards the 5 trillion dollar mark, being a registered MSME ensures you are not just a spectator, but an active and protected participant in this historic growth.
                  </p>
                </section>

                {/* Final CTA */}
                <section className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] rounded-xl md:rounded-3xl p-6 md:p-16 text-center text-white relative overflow-hidden">
                  <div className="relative z-10">
                    <h2 className="text-xl md:text-5xl font-bold mb-4 md:mb-6">Ready to Formalize Your Business?</h2>
                    <p className="text-sm md:text-xl opacity-90 mb-6 md:mb-10 max-w-2xl mx-auto">
                      Don't miss out on the incredible benefits of the 2026 MSME policy. Let our legal experts handle the registration while you focus on building your empire.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                      <Link href="/contact">
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg w-full sm:w-auto">
                          Consult an Expert Now
                        </button>
                      </Link>
                      <a href="tel:+918700343611">
                        <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-6 md:py-4 md:px-12 rounded-full transition-all text-sm md:text-lg w-full sm:w-auto">
                          Call: +91-8700343611
                        </button>
                      </a>
                    </div>
                    <p className="mt-4 md:mt-8 text-xs md:text-sm opacity-70">
                      Legitimate • Digital • Growth Oriented
                    </p>
                  </div>
                </section>

              </div>
            </div>

            {/* Sidebar */}
            <div className="hidden lg:block space-y-8 sticky top-24">
                {/* Contact Card */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Start Your Registration</h3>
                  <p className="text-gray-600 mb-6 text-sm">
                    Connect with our MSME specialists and get your certificate in days.
                  </p>
                  <a 
                    href="tel:+918700343611" 
                    className="block w-full bg-[#D2A02A] text-white text-center py-3 rounded-lg font-semibold hover:bg-[#b88a22] transition-colors mb-4"
                  >
                    Call +91-8700343611
                  </a>
                  <Link 
                    href="/contact"
                    className="block w-full border-2 border-[#D2A02A] text-[#D2A02A] text-center py-3 rounded-lg font-semibold hover:bg-[#D2A02A] hover:text-white transition-all"
                  >
                    Enquire Online
                  </Link>
                </div>

                {/* Mobile App Section */}
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl text-white">
                  <h4 className="font-bold text-lg mb-2">Track on the Go</h4>
                  <p className="text-xs text-gray-400 mb-4">Download the AMA Legal Solutions app to track your registration status and access legal docs.</p>
                  <div className="flex flex-col gap-3">
                    <Link href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions" target="_blank" className="hover:opacity-80">
                      <Image src="/newAssets/appstore.svg" alt="Google Play" width={120} height={35} />
                    </Link>
                    <Link href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186" target="_blank" className="hover:opacity-80">
                      <Image src="/newAssets/playstore.svg" alt="App Store" width={120} height={35} />
                    </Link>
                  </div>
                </div>

                {/* Trust Factor */}
                <div className="p-4 bg-green-50 rounded-xl border border-green-100 flex items-start gap-4">
                  <div className="text-2xl">✅</div>
                  <div>
                    <p className="text-sm font-bold text-green-900">Official Partner</p>
                    <p className="text-xs text-green-700">We use the official government portal for all filings.</p>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
