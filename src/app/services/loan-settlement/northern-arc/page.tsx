import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "./FaqSection";
import { faqs } from "./faqs";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import { FaShieldAlt, FaHandshake, FaFileInvoiceDollar, FaGavel, FaUserSecret, FaMobileAlt, FaBalanceScale, FaCheckDouble, FaPhoneSlash } from "react-icons/fa";
import { MdAccessTime, MdMoneyOff, MdVerifiedUser } from "react-icons/md";

// Metadata
export const metadata = {
  title: "Northern Arc Loan Settlement | OTS for App Loans | AMA Legal Solutions",
  description: "Struggling with Northern Arc Capital loans (Slice, Uni, KreditBee)? We help settle your debt legally. Stop harassment and save up to 50%.",
  alternates: {
    canonical: 'https://amalegalsolutions.com/services/loan-settlement/northern-arc',
  },
  openGraph: {
    title: "Northern Arc Loan Settlement | OTS for App Loans | AMA Legal Solutions",
    description: "Struggling with Northern Arc Capital loans (Slice, Uni, KreditBee)? We help settle your debt legally. Stop harassment and save up to 50%.",
    url: "https://amalegalsolutions.com/services/loan-settlement/northern-arc",
    type: "website",
    images: [
      {
        url: "/services/5.png",
        width: 1200,
        height: 630,
        alt: "Northern Arc Loan Settlement Services",
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
      "name": "Northern Arc Loan Settlement",
      "item": "https://amalegalsolutions.com/services/loan-settlement/northern-arc"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Northern Arc Capital Loan Settlement: The Hidden Lender Behind Your Apps",
  "description": "Expert guide on settling loans with Northern Arc Capital, the lending partner for many fintech apps. Learn how to get an OTS and stop harassment.",
  "image": "https://amalegalsolutions.com/services/5.png",
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
  "name": "Northern Arc Loan Settlement Services",
  "image": "https://amalegalsolutions.com/services/5.png",
  "description": "Legal settlement services for Northern Arc Capital loans.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "142"
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
        "name": "Ankit Verma"
      },
      "reviewBody": "I had a loan from a BNPL app, but the notice came from Northern Arc. I was confused. AMA Legal explained everything and settled the loan for me."
    }
  ]
};

export default function NorthernArcLoanSettlementPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "the-hidden-lender", title: "The Hidden Lender" },
    { id: "settlement-benefits", title: "Why Settle?" },
    { id: "eligibility", title: "Eligibility" },
    { id: "process", title: "Our Process" },
    { id: "documents", title: "Documents" },
    { id: "legal-rights", title: "Your Rights" },
    { id: "testimonials", title: "Reviews" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Loan Settlement", href: "/services/loan-settlement" },
    { label: "Northern Arc", href: "/services/loan-settlement/northern-arc" },
  ];

  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      <div className="bg-slate-50 min-h-screen font-sans text-slate-800">
        
        {/* Modern Hero Section */}
        <div className="relative bg-[#0f172a] text-white overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-900/30 to-transparent"></div>
          
          <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-3/5">
                <div className="inline-flex items-center gap-2 bg-teal-500/20 border border-teal-500/30 rounded-full px-4 py-1.5 mb-8">
                  <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
                  <span className="text-teal-300 text-sm font-semibold tracking-wide uppercase">Fintech Debt Relief</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  Settle Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">Northern Arc</span> Loans
                </h1>
                <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
                  Received a notice from Northern Arc for a loan you took on an app? Don't panic. We help you negotiate a legal One Time Settlement (OTS) and save up to 50%.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="group relative px-8 py-4 bg-teal-500 hover:bg-teal-400 text-slate-900 font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(20,184,166,0.3)] hover:shadow-[0_0_30px_rgba(20,184,166,0.5)]">
                    <span className="relative z-10">Start Settlement</span>
                  </Link>
                  <a href="tel:+918700343611" className="px-8 py-4 bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-xl font-semibold transition-all flex items-center justify-center gap-2">
                    <FaPhoneSlash className="text-teal-400" /> +91-8700343611
                  </a>
                </div>
              </div>
              
              {/* Glassmorphism Card */}
              <div className="md:w-2/5 w-full">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden group hover:border-teal-500/30 transition-all duration-500">
                  <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
                    <FaShieldAlt className="text-9xl text-teal-500 transform rotate-12" />
                  </div>
                  <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
                  <ul className="space-y-4">
                    {[
                      "Stop Harassment Calls",
                      "Legal Notice Handling",
                      "Up to 50% Waiver",
                      "Official OTS Letter"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-200">
                        <div className="w-6 h-6 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400">
                          <FaCheckDouble size={12} />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
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
              <TableOfContents sections={tocSections} />
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            
            {/* Introduction */}
            <section id="introduction" className="mb-20 scroll-mt-32">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Understanding Northern Arc Capital</h2>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  Northern Arc Capital is a premier Non-Banking Financial Company (NBFC) in India. While they do lend directly, they are more famous for being the <strong>"Lender Behind the Apps"</strong>. 
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  If you took a loan from apps like <strong>Slice, Uni Cards, KreditBee, or other BNPL platforms</strong>, the actual money often comes from Northern Arc. That is why, when you default, the legal notice and CIBIL reporting come from Northern Arc, not just the app.
                </p>
              </div>
            </section>

            {/* The Hidden Lender */}
            <section id="the-hidden-lender" className="mb-20 scroll-mt-32">
              <div className="bg-teal-900 rounded-3xl p-10 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>
                <h2 className="text-3xl font-bold mb-8 relative z-10">The "Hidden Lender" Reality</h2>
                <div className="grid md:grid-cols-2 gap-8 relative z-10">
                  <div>
                    <h3 className="text-xl font-bold text-teal-300 mb-4 flex items-center gap-2">
                      <FaMobileAlt /> The App (Frontend)
                    </h3>
                    <p className="text-slate-300">
                      You download an app, upload KYC, and get money. You think the app is the lender. They handle the UI and initial collection.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-teal-300 mb-4 flex items-center gap-2">
                      <FaUserSecret /> Northern Arc (Backend)
                    </h3>
                    <p className="text-slate-300">
                      They provide the funds. Legally, you signed a loan agreement with them. They have the power to file cases and report to CIBIL.
                    </p>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t border-teal-800">
                  <p className="font-semibold text-center text-teal-100">
                    <span className="bg-teal-500/20 px-2 py-1 rounded">Note:</span> Settlement must be done with Northern Arc to be valid. Paying the app's collection agent without a proper letter is risky.
                  </p>
                </div>
              </div>
            </section>

            {/* Why Settle? - Grid Layout */}
            <section id="settlement-benefits" className="mb-20 scroll-mt-32">
              <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Why Opt for Settlement?</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    icon: <MdMoneyOff className="text-4xl text-teal-500" />,
                    title: "Waive Penalties",
                    desc: "Northern Arc charges heavy late fees. Settlement wipes these out completely."
                  },
                  {
                    icon: <FaGavel className="text-4xl text-teal-500" />,
                    title: "Avoid Litigation",
                    desc: "Stop arbitration and Section 138 cases before they become court decrees."
                  },
                  {
                    icon: <FaPhoneSlash className="text-4xl text-teal-500" />,
                    title: "Stop Harassment",
                    desc: "Our legal intervention stops the aggressive calls to you and your contacts."
                  }
                ].map((card, i) => (
                  <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg hover:border-teal-200 transition-all group">
                    <div className="mb-6 bg-teal-50 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      {card.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{card.title}</h3>
                    <p className="text-slate-600">{card.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Eligibility */}
            <section id="eligibility" className="mb-20 scroll-mt-32">
              <div className="bg-slate-900 text-white rounded-3xl p-10 md:p-16 text-center">
                <h2 className="text-3xl font-bold mb-6">Are You Eligible?</h2>
                <p className="text-slate-300 mb-10 max-w-2xl mx-auto">
                  Settlement isn't for everyone. It's for those in genuine financial distress.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  {["Job Loss", "Medical Emergency", "Business Failure", "Salary Delay", "Heavy Debt Burden"].map((tag, i) => (
                    <span key={i} className="px-6 py-3 bg-white/10 rounded-full border border-white/10 hover:bg-teal-500 hover:border-teal-500 transition-colors cursor-default">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </section>

            {/* Process - Timeline */}
            <section id="process" className="mb-20 scroll-mt-32">
              <h2 className="text-3xl font-bold text-slate-900 mb-12">How We Settle Your Loan</h2>
              <div className="space-y-8">
                {[
                  { step: "01", title: "Consultation", desc: "We analyze your loan documents and financial situation." },
                  { step: "02", title: "Legal Notice", desc: "We send a representation letter to Northern Arc to stop harassment." },
                  { step: "03", title: "Negotiation", desc: "We bargain with the central team for the lowest possible amount." },
                  { step: "04", title: "Closure", desc: "You receive the OTS letter, pay the amount, and get the NDC." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 items-start group">
                    <div className="w-16 h-16 shrink-0 bg-teal-100 text-teal-600 rounded-2xl flex items-center justify-center text-2xl font-bold group-hover:bg-teal-600 group-hover:text-white transition-colors">
                      {item.step}
                    </div>
                    <div className="pt-2">
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Documents */}
            <section id="documents" className="mb-20 scroll-mt-32">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Required Documents</h2>
              <div className="bg-white border-l-4 border-teal-500 rounded-r-xl p-8 shadow-sm">
                <ul className="grid md:grid-cols-2 gap-4">
                  {[
                    "Loan Account Statement",
                    "PAN Card Copy",
                    "Any Legal Notice Received",
                    "Proof of Income Loss (Termination letter, etc.)",
                    "Bank Statement (Last 3 months)"
                  ].map((doc, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-700">
                      <FaFileInvoiceDollar className="text-teal-500" /> {doc}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Testimonials */}
            <section id="testimonials" className="mb-20 scroll-mt-32">
              <h2 className="text-3xl font-bold text-slate-900 mb-10">Client Stories</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 relative">
                  <div className="absolute -top-4 -left-4 bg-teal-500 text-white w-10 h-10 rounded-full flex items-center justify-center text-2xl font-serif">"</div>
                  <p className="text-slate-600 italic mb-6">
                    "I took a loan from Uni Cards. When I couldn't pay, Northern Arc sent a notice. I was scared. AMA Legal handled it and closed the loan for 45% of the amount."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-600">A</div>
                    <div>
                      <h4 className="font-bold text-slate-900">Ankit Verma</h4>
                      <p className="text-xs text-slate-500">Software Engineer, Bangalore</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 relative">
                  <div className="absolute -top-4 -left-4 bg-teal-500 text-white w-10 h-10 rounded-full flex items-center justify-center text-2xl font-serif">"</div>
                  <p className="text-slate-600 italic mb-6">
                    "The calls were non-stop. They called my office. AMA Legal sent a notice and the calls stopped within 48 hours. Highly recommended."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-600">S</div>
                    <div>
                      <h4 className="font-bold text-slate-900">Sneha R.</h4>
                      <p className="text-xs text-slate-500">Marketing Exec, Mumbai</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section id="faqs" className="mb-20 scroll-mt-32">
              <FaqSection />
            </section>

          </div>
        </div>

        {/* Final CTA */}
        <section className="bg-teal-900 py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Don't Let Debt Define You</h2>
            <p className="text-teal-100 text-lg mb-10">
              Take the first step towards financial freedom. Legal, safe, and effective settlement.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="px-10 py-4 bg-white text-teal-900 font-bold rounded-full hover:bg-teal-50 transition-all shadow-xl">
                Get Free Advice
              </Link>
              <a href="tel:+918700343611" className="px-10 py-4 border-2 border-teal-500 text-white font-bold rounded-full hover:bg-teal-800 transition-all">
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
