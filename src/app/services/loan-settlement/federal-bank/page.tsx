import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "./FaqSection";
import { faqs } from "./faqs";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import { 
  FaCheckCircle, 
  FaShieldAlt, 
  FaHandHoldingUsd, 
  FaFileContract, 
  FaUniversity, 
  FaGavel, 
  FaBalanceScale, 
  FaUserTie, 
  FaChartLine, 
  FaPlane, 
  FaTractor, 
  FaMobileAlt, 
  FaGlobeAmericas,
  FaHome,
  FaPassport,
  FaUserInjured
} from "react-icons/fa";

// Metadata
export const metadata = {
  title: "Federal Bank Loan Settlement | NRI & Agri Loan OTS | AMA Legal Solutions",
  description: "Struggling with Federal Bank loan repayment? Expert legal help for Federal Bank loan settlement, including NRI, Agricultural, and Personal loans. Stop harassment and settle debt.",
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/services/loan-settlement/federal-bank',
  },
  openGraph: {
    title: "Federal Bank Loan Settlement | NRI & Agri Loan OTS | AMA Legal Solutions",
    description: "Struggling with Federal Bank loan repayment? Expert legal help for Federal Bank loan settlement, including NRI, Agricultural, and Personal loans. Stop harassment and settle debt.",
    url: "https://www.amalegalsolutions.com/services/loan-settlement/federal-bank",
    type: "website",
    images: [
      {
        url: "/services/3.png",
        width: 1200,
        height: 630,
        alt: "Federal Bank Loan Settlement Services",
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
      "name": "Federal Bank Loan Settlement",
      "item": "https://www.amalegalsolutions.com/services/loan-settlement/federal-bank"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Federal Bank Loan Settlement: A Guide for NRIs and Residents",
  "description": "Learn how to settle your Federal Bank personal, agricultural, or NRI loan through the One Time Settlement (OTS) scheme. Expert legal advice to stop harassment.",
  "image": "https://www.amalegalsolutions.com/services/3.png",
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
  "name": "Federal Bank Loan Settlement Services",
  "image": "https://www.amalegalsolutions.com/services/3.png",
  "description": "Expert legal services for settling Federal Bank loans and dues.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "310"
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
        "name": "Mathew Thomas"
      },
      "reviewBody": "I am an NRI working in Dubai. I had a loan with Federal Bank in Kerala. When I lost my job, I couldn't pay. AMA Legal Solutions handled the settlement remotely. I didn't have to travel to India even once."
    }
  ]
};

export default function FederalBankLoanSettlementPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "nri-loans", title: "NRI Loan Settlement" },
    { id: "agri-loans", title: "Agricultural Loans" },
    { id: "understanding-settlement", title: "What is Federal Bank OTS?" },
    { id: "eligibility", title: "Eligibility Criteria" },
    { id: "settlement-process", title: "Settlement Process" },
    { id: "documents-required", title: "Required Documents" },
    { id: "legal-rights", title: "Legal Rights & SARFAESI" },
    { id: "consequences", title: "Restructuring vs Settlement" },
    { id: "cibil-impact", title: "CIBIL Score Impact" },
    { id: "why-choose-us", title: "Why Choose AMA?" },
    { id: "testimonials", title: "Success Stories" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Loan Settlement", href: "/services/loan-settlement" },
    { label: "Federal Bank", href: "/services/loan-settlement/federal-bank" },
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

      <div className="bg-white min-h-screen font-sans text-gray-800">
        {/* Full Width Hero Section */}
        <div className="relative bg-gradient-to-r from-[#00488E] to-[#003366] text-white overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
             <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
               <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
             </svg>
          </div>
          <div className="relative z-10 container mx-auto px-4 py-24 md:py-32 text-center">
            <div className="inline-block bg-white text-[#00488E] text-xs font-bold px-3 py-1 rounded-full mb-6 tracking-wide uppercase shadow-lg">
              Your Perfect Settlement Partner
            </div>
            <h1 className="text-4xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight drop-shadow-md">
              Settle Your <span className="text-[#F7A800]">Federal Bank Loan</span> <br className="hidden md:block" /> With Confidence
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-blue-50 font-light leading-relaxed">
              Specialized legal help for NRIs, Farmers, and Business Owners. Resolve your debt remotely without harassment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-white hover:bg-gray-100 text-[#00488E] font-bold py-4 px-10 rounded-lg transition-all transform hover:-translate-y-1 shadow-xl text-lg w-full sm:w-auto">
                  Get Free Settlement Advice
                </button>
              </Link>
              <a href="tel:+918700343611">
                <button className="bg-transparent border-2 border-[#F7A800] hover:bg-[#F7A800] text-white font-bold py-4 px-10 rounded-lg transition-all text-lg w-full sm:w-auto">
                  Call: +91-8700343611
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        <div className="relative flex flex-col lg:flex-row gap-10 container mx-auto px-4">
          {/* Sidebar for Desktop */}
          <div className="hidden lg:block w-1/4">
             <div className="sticky top-24">
               <TableOfContents sections={tocSections} orientation="vertical" />
             </div>
          </div>

          {/* Main Content */}
          <div className="w-full lg:w-3/4">
            
            {/* Introduction Section */}
            <div id="introduction" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Facing Debt Issues with Federal Bank?
              </h2>
              <div className="prose prose-lg text-gray-600 max-w-none">
                <p className="mb-6">
                  Federal Bank is a prominent private sector bank with a strong presence in South India and a massive NRI customer base. While they are known for their customer-friendly "Perfect Banking Partner" approach, their debt recovery process is stringent and systematic. They utilize tools like <strong>SARFAESI</strong> for secured loans and <strong>Arbitration</strong> for unsecured debts.
                </p>
                <p className="mb-6">
                  Whether you are an <strong>NRI</strong> facing job loss abroad, a <strong>farmer</strong> dealing with crop failure, or a <strong>business owner</strong> with cash flow issues, defaulting on a Federal Bank loan can be stressful. The fear of legal action, travel restrictions (for NRIs), or asset attachment is real.
                </p>
                <p>
                  At <strong>AMA Legal Solutions</strong>, we bridge the gap. We understand Federal Bank's specific policies for different customer segments. We negotiate legally to secure a <strong>One Time Settlement (OTS)</strong> that allows you to clear your debt for a reduced amount and move on with your life.
                </p>
              </div>
            </div>

            {/* NRI Loans - Unique Section */}
            <div id="nri-loans" className="bg-[#f8fafc] p-8 md:p-12 rounded-3xl mb-16 scroll-mt-32 border border-blue-100">
              <div className="flex flex-col md:flex-row gap-10 items-start">
                <div className="flex-1">
                  <div className="inline-block bg-[#00488E] text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                    Specialized Service
                  </div>
                  <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center">
                    <FaPlane className="mr-3 text-[#00488E]" />
                    NRI Loan Settlement
                  </h2>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    A significant portion of Federal Bank's portfolio consists of NRI loans. We understand the unique panic NRIs face when they default:
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <FaGlobeAmericas className="text-[#F7A800] mt-1 mr-3 flex-shrink-0 text-xl" />
                      <span className="text-gray-700"><strong>Remote Processing:</strong> You do not need to fly to India. We handle everything via Power of Attorney or digital authorization.</span>
                    </li>
                    <li className="flex items-start">
                      <FaPassport className="text-[#F7A800] mt-1 mr-3 flex-shrink-0 text-xl" />
                      <span className="text-gray-700"><strong>Immigration Protection:</strong> We ensure civil disputes don't escalate into criminal cases that could affect your visa or travel.</span>
                    </li>
                    <li className="flex items-start">
                      <FaUniversity className="text-[#F7A800] mt-1 mr-3 flex-shrink-0 text-xl" />
                      <span className="text-gray-700"><strong>NRE/NRO Account Safety:</strong> We advise you on how to protect your other savings accounts from being debited by the bank.</span>
                    </li>
                  </ul>
                </div>
                <div className="w-full md:w-1/3 bg-white p-6 rounded-2xl shadow-xl border-t-4 border-[#F7A800]">
                  <h3 className="text-xl font-bold mb-4 text-[#00488E]">Case Study: NRI in Dubai</h3>
                  <p className="text-gray-600 mb-4 italic text-sm">
                    "Client X, working in Dubai, lost his job and couldn't pay his personal loan in Kerala. Federal Bank started calling his elderly parents in India."
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center bg-blue-50 p-3 rounded-lg">
                      <div className="w-8 h-8 bg-[#00488E] rounded-full flex items-center justify-center text-white font-bold mr-3 flex-shrink-0">1</div>
                      <p className="text-xs font-medium text-gray-800">We issued a legal notice to stop harassment of parents.</p>
                    </div>
                    <div className="flex items-center bg-blue-50 p-3 rounded-lg">
                      <div className="w-8 h-8 bg-[#00488E] rounded-full flex items-center justify-center text-white font-bold mr-3 flex-shrink-0">2</div>
                      <p className="text-xs font-medium text-gray-800">We proved his job loss with termination letters.</p>
                    </div>
                    <div className="flex items-center bg-blue-50 p-3 rounded-lg">
                      <div className="w-8 h-8 bg-[#00488E] rounded-full flex items-center justify-center text-white font-bold mr-3 flex-shrink-0">3</div>
                      <p className="text-xs font-medium text-gray-800">Settled the ₹15L loan for ₹6.5L (43%).</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Agricultural Loans - Unique Section */}
            <div id="agri-loans" className="bg-[#00488E] text-white p-8 md:p-12 rounded-3xl mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center">
                <FaTractor className="mr-3 text-[#F7A800]" />
                Agricultural & KCC Loans
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm border border-white/20">
                  <h3 className="text-xl font-bold mb-3 text-[#F7A800]">Kisan Credit Card (KCC)</h3>
                  <p className="text-white/80">
                    KCC loans are meant for cultivation. If crops fail due to weather or pests, you are eligible for relief. We help you prove "Agricultural Distress" to get interest waivers.
                  </p>
                </div>
                <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm border border-white/20">
                  <h3 className="text-xl font-bold mb-3 text-[#F7A800]">Agri-Gold Loans</h3>
                  <p className="text-white/80">
                    Gold pledged for agricultural purposes has lower interest rates. If you default, the auction risk is high. We negotiate to give you time to sell the gold yourself at market rate.
                  </p>
                </div>
                <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm border border-white/20">
                  <h3 className="text-xl font-bold mb-3 text-[#F7A800]">Rinn Mukti Schemes</h3>
                  <p className="text-white/80">
                    Federal Bank occasionally launches special OTS schemes for farmers. We stay updated on these internal circulars to get you the best deal when available.
                  </p>
                </div>
              </div>
            </div>

            {/* What is OTS - Card Layout */}
            <div id="understanding-settlement" className="mb-16 scroll-mt-32">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-[#00488E] mb-4">What is Federal Bank One Time Settlement (OTS)?</h2>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                  OTS is a legal agreement where Federal Bank accepts a reduced amount to close a loan account that has turned into a Non-Performing Asset (NPA). This is a win-win: you get debt free, and the bank cleans up its balance sheet.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-lg border-b-4 border-[#F7A800]">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Principal Reduction</h3>
                  <p className="text-gray-600">
                    For unsecured loans (Personal, Business), we can often negotiate a reduction in the principal amount itself, not just the interest.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border-b-4 border-[#F7A800]">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Interest Waiver</h3>
                  <p className="text-gray-600">
                    Penal interest, late fees, and accumulated interest are almost always waived off in a successful settlement.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border-b-4 border-[#F7A800]">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Legal Closure</h3>
                  <p className="text-gray-600">
                    The settlement ensures that all legal proceedings (Civil Suits, DRT cases, Section 138 cases) are withdrawn by the bank.
                  </p>
                </div>
              </div>
            </div>

            {/* Eligibility Criteria */}
            <div id="eligibility" className="bg-gray-50 p-8 md:p-12 rounded-3xl mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Who is Eligible for Settlement?</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                  <div className="flex items-center mb-4">
                    <FaUserTie className="text-3xl text-[#00488E] mr-4" />
                    <h3 className="text-xl font-bold text-gray-900">Salaried Individuals / NRIs</h3>
                  </div>
                  <p className="text-gray-600">
                    Job loss, pay cuts, or visa expiry forcing a return to India are valid grounds. Medical emergencies in the family also qualify.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                  <div className="flex items-center mb-4">
                    <FaChartLine className="text-3xl text-[#00488E] mr-4" />
                    <h3 className="text-xl font-bold text-gray-900">SME Business Owners</h3>
                  </div>
                  <p className="text-gray-600">
                    Business failure due to market conditions, GST issues, or loss of key clients. Proof of cash flow crunch is required.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                  <div className="flex items-center mb-4">
                    <FaTractor className="text-3xl text-[#00488E] mr-4" />
                    <h3 className="text-xl font-bold text-gray-900">Farmers</h3>
                  </div>
                  <p className="text-gray-600">
                    Crop failure, natural calamities (floods/droughts), or low market prices for produce.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                  <div className="flex items-center mb-4">
                    <FaMobileAlt className="text-3xl text-[#00488E] mr-4" />
                    <h3 className="text-xl font-bold text-gray-900">FedMobile Loan Borrowers</h3>
                  </div>
                  <p className="text-gray-600">
                    Borrowers of small-ticket digital loans who are unable to pay due to high interest burdens or personal financial crises.
                  </p>
                </div>
              </div>
            </div>

            {/* Process Section */}
            <div id="settlement-process" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
                Our Settlement Process
              </h2>
              <div className="relative border-l-4 border-[#00488E] ml-6 md:ml-12 space-y-12">
                {[
                  { title: "Consultation & Analysis", desc: "We analyze your loan type (NRI/Agri/Personal) and legal status to determine the best settlement strategy." },
                  { title: "Authorization", desc: "You authorize us to represent you. For NRIs, this is done digitally via email or Power of Attorney." },
                  { title: "Proposal Submission", desc: "We submit a formal OTS proposal to the Regional or Zonal office, bypassing local branch delays." },
                  { title: "Negotiation", desc: "We negotiate with the bank's credit committee for the best possible waiver, often involving multiple rounds." },
                  { title: "Closure & NDC", desc: "You pay the settlement amount directly to the bank, and we ensure the No Dues Certificate is issued promptly." }
                ].map((item, index) => (
                  <div key={index} className="relative pl-8 md:pl-12">
                    <div className="absolute -left-[14px] top-0 w-6 h-6 bg-[#F7A800] rounded-full border-4 border-white shadow-sm"></div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Required Documents */}
            <div id="documents-required" className="bg-gray-50 p-8 md:p-12 rounded-3xl mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Documents Required</h2>
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-bold text-[#00488E] mb-4 border-b pb-2">General Documents</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center"><FaCheckCircle className="mr-2 text-[#00488E]"/> PAN Card & Aadhaar Card</li>
                      <li className="flex items-center"><FaCheckCircle className="mr-2 text-[#00488E]"/> Loan Account Statement</li>
                      <li className="flex items-center"><FaCheckCircle className="mr-2 text-[#00488E]"/> Bank Statements (last 6 months)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#00488E] mb-4 border-b pb-2">Specific Proofs</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center"><FaCheckCircle className="mr-2 text-[#00488E]"/> <strong>NRI:</strong> Passport copy, Visa termination letter.</li>
                      <li className="flex items-center"><FaCheckCircle className="mr-2 text-[#00488E]"/> <strong>Agri:</strong> Land records, proof of crop loss.</li>
                      <li className="flex items-center"><FaCheckCircle className="mr-2 text-[#00488E]"/> <strong>Business:</strong> GST returns, closure proof.</li>
                      <li className="flex items-center"><FaCheckCircle className="mr-2 text-[#00488E]"/> <strong>Medical:</strong> Doctor's certificate/bills.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Legal Rights Section */}
            <div id="legal-rights" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Legal Rights & Actions</h2>
              <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                Federal Bank follows due process. Understanding their tools helps us defend you better.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <h3 className="text-xl font-bold text-[#00488E] mb-3 flex items-center">
                    <FaHome className="mr-2" /> SARFAESI Act (Secured Loans)
                  </h3>
                  <p className="text-gray-600 mb-4">
                    For Home/LAP loans, they can issue a 13(2) notice. If unpaid for 60 days, they can take possession.
                  </p>
                  <p className="text-gray-900 font-semibold bg-blue-50 p-3 rounded-lg text-sm">
                    <strong>Our Defense:</strong> We file objections to the notice, buying you time to negotiate or sell the asset yourself.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <h3 className="text-xl font-bold text-[#00488E] mb-3 flex items-center">
                    <FaGavel className="mr-2" /> Arbitration & DRT
                  </h3>
                  <p className="text-gray-600 mb-4">
                    For larger loans (&gt;20 Lakhs), they move to the Debt Recovery Tribunal (DRT). For smaller ones, they use Arbitration.
                  </p>
                  <p className="text-gray-900 font-semibold bg-blue-50 p-3 rounded-lg text-sm">
                    <strong>Our Defense:</strong> We represent you in these forums to prove hardship and push for a settlement decree.
                  </p>
                </div>
              </div>
            </div>

            {/* Restructuring vs Settlement */}
            <div id="consequences" className="bg-[#00488E] text-white p-8 md:p-12 rounded-3xl mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-center mb-12">Restructuring vs. Settlement</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white/10 shadow-lg rounded-lg overflow-hidden text-white">
                  <thead>
                    <tr className="bg-[#F7A800] text-[#00488E]">
                      <th className="p-4 text-left">Feature</th>
                      <th className="p-4 text-left">Restructuring</th>
                      <th className="p-4 text-left">Settlement (OTS)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/20">
                      <td className="p-4 font-bold">Cost</td>
                      <td className="p-4">Full Amount + Interest</td>
                      <td className="p-4">Reduced Amount</td>
                    </tr>
                    <tr className="border-b border-white/20">
                      <td className="p-4 font-bold">Credit Score</td>
                      <td className="p-4">Maintained</td>
                      <td className="p-4">Impacted ("Settled")</td>
                    </tr>
                    <tr className="border-b border-white/20">
                      <td className="p-4 font-bold">Closure</td>
                      <td className="p-4">Long Term (Years)</td>
                      <td className="p-4">Immediate</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* CIBIL Impact */}
            <div id="cibil-impact" className="mb-16 scroll-mt-32 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">CIBIL Score Reality</h2>
              <p className="text-lg text-gray-600 mb-8 max-w-4xl mx-auto">
                Settlement will reflect as "Settled" in your CIBIL report, dropping your score. However, this is a temporary setback. It stops the monthly "DPD" (Days Past Due) reporting which is far worse. We guide you on how to rebuild your score post-settlement.
              </p>
            </div>

            {/* Why Choose Us */}
            <div id="why-choose-us" className="bg-white mb-16 scroll-mt-32">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-12">Why Choose AMA Legal Solutions?</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-gray-50 p-8 rounded-xl shadow-md">
                    <FaPlane className="text-5xl text-[#00488E] mx-auto mb-6" />
                    <h3 className="text-xl font-bold mb-3">NRI Specialists</h3>
                    <p className="text-gray-600">We have a dedicated team for handling NRI cases remotely, understanding the time zone and legal nuances.</p>
                  </div>
                  <div className="bg-gray-50 p-8 rounded-xl shadow-md">
                    <FaTractor className="text-5xl text-[#00488E] mx-auto mb-6" />
                    <h3 className="text-xl font-bold mb-3">Agri-Loan Experts</h3>
                    <p className="text-gray-600">We know how to leverage government schemes and bank policies for farmers' relief.</p>
                  </div>
                  <div className="bg-gray-50 p-8 rounded-xl shadow-md">
                    <FaGavel className="text-5xl text-[#00488E] mx-auto mb-6" />
                    <h3 className="text-xl font-bold mb-3">Legal Defense</h3>
                    <p className="text-gray-600">We don't just negotiate; we provide legal protection against harassment and court cases.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonials Section */}
            <div id="testimonials" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Success Stories</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 relative">
                  <div className="text-6xl text-blue-100 absolute top-4 left-4">"</div>
                  <p className="text-gray-700 italic mb-6 relative z-10 leading-relaxed">
                    "I was stuck in Dubai with no job and a loan in Kerala. AMA Legal Solutions handled everything. I settled my 10 Lakh loan for 4.5 Lakhs without flying back."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-[#00488E] rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                      M
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Mathew Thomas</p>
                      <p className="text-sm text-gray-500">Ex-NRI, Dubai</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 relative">
                  <div className="text-6xl text-blue-100 absolute top-4 left-4">"</div>
                  <p className="text-gray-700 italic mb-6 relative z-10 leading-relaxed">
                    "My KCC loan was a burden after the floods. The bank was not listening. AMA Legal Solutions helped me prove my crop loss and got a huge interest waiver."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-[#F7A800] rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                      R
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Ramesh K.</p>
                      <p className="text-sm text-gray-500">Farmer, Palakkad</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div id="faqs" className="mb-16 scroll-mt-32">
              <FaqSection />
            </div>

            {/* Final CTA */}
            <div className="bg-[#00488E] rounded-3xl p-10 md:p-16 text-center text-white shadow-2xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Close Your Federal Bank Loan?</h2>
              <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                Don't let debt control your life. Get expert legal help to settle your Federal Bank loan today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <button className="bg-white text-[#00488E] font-bold py-4 px-12 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg w-full sm:w-auto">
                    Book Free Consultation
                  </button>
                </Link>
                <a href="tel:+918700343611">
                  <button className="bg-transparent border-2 border-white hover:bg-white hover:text-[#00488E] text-white font-bold py-4 px-12 rounded-full transition-all text-lg w-full sm:w-auto">
                    Call: +91-8700343611
                  </button>
                </a>
              </div>
            </div>

          </div>
        </div>
        
        {/* States Grid */}
        <div className="container mx-auto px-4 pb-10 mt-16">
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
