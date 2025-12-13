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
  title: "DMI Finance Loan Settlement | Samsung Finance+ & GPay Loans | AMA Legal",
  description: "Struggling with DMI Finance loans (Samsung Finance+, Google Pay)? Expert legal settlement services to stop phone locking, harassment, and reduce debt.",
  alternates: {
    canonical: 'https://amalegalsolutions.com/services/loan-settlement/dmi-finance',
  },
  openGraph: {
    title: "DMI Finance Loan Settlement | Samsung Finance+ & GPay Loans | AMA Legal",
    description: "Struggling with DMI Finance loans (Samsung Finance+, Google Pay)? Expert legal settlement services to stop phone locking, harassment, and reduce debt.",
    url: "https://amalegalsolutions.com/services/loan-settlement/dmi-finance",
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
      "name": "DMI Finance Loan Settlement",
      "item": "https://amalegalsolutions.com/services/loan-settlement/dmi-finance"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "DMI Finance Loan Settlement: Guide for Samsung Finance+ & Digital Loans",
  "description": "Comprehensive guide on how to settle DMI Finance loans, including those taken for Samsung phones or via Google Pay. Learn about the OTS process.",
  "image": "https://amalegalsolutions.com/services/6.png",
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
  "name": "DMI Finance Loan Settlement Services",
  "image": "https://amalegalsolutions.com/services/6.png",
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
      "reviewBody": "My Samsung phone was locked because I missed EMIs to DMI Finance. AMA Legal helped me settle the loan and get my phone unlocked. Very professional."
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">DMI Finance: The Tech-Lender</h2>
              <div className="bg-white rounded-xl p-8 shadow-sm border-l-4 border-red-600">
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  <strong>DMI Finance</strong> is a major NBFC that powers many of the digital loans you see today. They are the primary lending partner for <strong>Samsung Finance+</strong>, enabling millions to buy smartphones on EMI. They also partner with <strong>Google Pay, Paytm, and other fintech apps</strong> to offer instant personal loans.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Because they are tech-driven, their recovery process is also highly automated and aggressive. From remote device locking to automated legal notices, defaulting on a DMI Finance loan can quickly become stressful. AMA Legal Solutions helps you navigate this complex landscape and settle your debt legally.
                </p>
              </div>
            </section>

            {/* Samsung Finance+ Section */}
            <section id="samsung-finance" className="mb-16 scroll-mt-32">
              <div className="bg-blue-900 text-white rounded-2xl p-8 md:p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>
                <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                  <div className="md:w-2/3">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
                      <MdSmartphone className="text-4xl text-blue-300" /> Samsung Finance+ Issues
                    </h2>
                    <p className="text-blue-100 mb-6 text-lg">
                      Did you buy a Samsung phone on EMI? If you miss payments, DMI Finance (via Knox Guard) can <strong>lock your phone remotely</strong>, turning it into a brick.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2 text-blue-50"><FaCheckCircle className="text-blue-400" /> We negotiate to settle the loan amount.</li>
                      <li className="flex items-center gap-2 text-blue-50"><FaCheckCircle className="text-blue-400" /> Settlement leads to loan closure and device unlocking.</li>
                      <li className="flex items-center gap-2 text-blue-50"><FaCheckCircle className="text-blue-400" /> We stop the harassment from recovery agents.</li>
                    </ul>
                  </div>
                  <div className="md:w-1/3 flex justify-center">
                    <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 text-center">
                      <FaMobileAlt className="text-6xl text-blue-300 mx-auto mb-4" />
                      <p className="font-bold">Device Lock Removal</p>
                      <p className="text-sm text-blue-200">Post Settlement</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Digital Loans Section */}
            <section id="digital-loans" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Google Pay & Digital Loans</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                      <FaGooglePay className="text-3xl text-gray-700" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">GPay Loans</h3>
                  </div>
                  <p className="text-gray-600">
                    Loans taken via Google Pay are often powered by DMI Finance. Defaulting here affects your CIBIL and can lead to legal action. We handle the settlement directly with DMI.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                      <MdOutlinePayments className="text-3xl text-gray-700" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Other Apps</h3>
                  </div>
                  <p className="text-gray-600">
                    DMI partners with many other fintech apps. Regardless of the app you used, if the lender is DMI, we can help you settle the debt through a formal OTS process.
                  </p>
                </div>
              </div>
            </section>

            {/* Benefits Grid */}
            <section id="settlement-benefits" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Why Settle with AMA Legal?</h2>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-12">Our Settlement Process</h2>
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                <div className="space-y-12">
                  {[
                    { step: "1", title: "Case Analysis", desc: "We review your loan details, outstanding amount, and the nature of default (Device vs Personal Loan)." },
                    { step: "2", title: "Legal Notice Response", desc: "If you've received a notice, we reply to it immediately to prevent legal escalation." },
                    { step: "3", title: "Negotiation", desc: "We engage with DMI Finance's central settlement team to agree on a reduced payoff amount." },
                    { step: "4", title: "Settlement & Closure", desc: "You receive the OTS letter, make the payment, and we ensure the loan account is closed." }
                  ].map((item, i) => (
                    <div key={i} className="relative pl-24">
                      <div className="absolute left-0 top-0 w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg border-4 border-white">
                        {item.step}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-10">Client Success Stories</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                  <p className="text-gray-600 italic mb-6">
                    "I bought a phone for my sister on Samsung Finance+. I lost my job and couldn't pay. The phone got locked. AMA Legal helped me settle the remaining amount for just ₹8,000 against a demand of ₹18,000. Phone unlocked!"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center font-bold text-red-600">R</div>
                    <div>
                      <h4 className="font-bold text-gray-900">Rahul M.</h4>
                      <p className="text-xs text-gray-500">Student, Delhi</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                  <p className="text-gray-600 italic mb-6">
                    "I had a personal loan via Google Pay from DMI. The agents were harassing my parents. AMA Legal stepped in, stopped the calls, and closed the loan. Very relieved."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-600">S</div>
                    <div>
                      <h4 className="font-bold text-gray-900">Suresh K.</h4>
                      <p className="text-xs text-gray-500">IT Professional, Pune</p>
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
