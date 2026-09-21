import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { locationData, getLocationBySlug } from "../locationData";
import { getCitySEO } from "@/lib/seo";
import { getCityProfile } from "@/lib/cityContentEngine";

export const dynamicParams = true;
export const revalidate = 86400; // 24 hours ISR cache

// Generate top static params at build time for fast builds, remaining generated on-demand
export async function generateStaticParams() {
  return locationData.slice(0, 200).map((loc) => ({
    slug: loc.slug,
  }));
}

// Generate metadata for each page
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) return { title: "Not Found" };

  const { title, description } = getCitySEO(location.name, slug, "Loan Settlement");

  return {
    title,
    description,
    keywords: [
      `loan settlement ${location.name}`,
      `best lawyer ${location.name}`,
      `debt settlement ${location.name}`,
      `loan settlement lawyer ${location.name}`,
      `credit card settlement ${location.name}`,
      `personal loan settlement ${location.name}`,
      `bank harassment ${location.name}`,
      "loan settlement india",
      "debt relief services",
      "one time settlement scheme",
    ],
    alternates: {
      canonical: `https://www.amalegalsolutions.com/lawyer-by-city/${location.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://www.amalegalsolutions.com/lawyer-by-city/${location.slug}`,
      type: "website",
      images: [
        {
          url: "/services/3.png",
          width: 1200,
          height: 630,
          alt: `Loan Settlement Services in ${location.name}`,
        },
      ],
    },
  };
}

export default async function LawyerBySlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    notFound();
  }

  const locationName = location.name;
  const seo = getCitySEO(location.name, slug, "Loan Settlement");
  const pageTitle = seo.h1;
  const cityProfile = getCityProfile(slug, locationName);

  // Schema Markup
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.amalegalsolutions.com" },
      { "@type": "ListItem", "position": 2, "name": "Lawyers by City", "item": "https://www.amalegalsolutions.com/lawyer-by-city" },
      { "@type": "ListItem", "position": 3, "name": `Loan Settlement in ${locationName}`, "item": `https://www.amalegalsolutions.com/lawyer-by-city/${location.slug}` }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": `Best Advocate & Lawyers in ${locationName} for Loan Settlement`,
    "description": seo.description,
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
    "datePublished": "2024-01-15",
    "dateModified": "2026-09-15"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": cityProfile.faqs.map(faq => ({
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
    "name": `Loan Settlement Services in ${locationName}`,
    "image": "https://www.amalegalsolutions.com/services/3.png",
    "description": `Expert legal loan settlement and anti-harassment services in ${locationName}, India.`,
    "brand": {
      "@type": "Brand",
      "name": "AMA Legal Solutions"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1250"
    },
    "review": cityProfile.testimonials.map(t => ({
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "author": { "@type": "Person", "name": t.author },
      "reviewBody": t.quote
    }))
  };

  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "what-is-settlement", title: "What is Loan Settlement?" },
    { id: "regional-landscape", title: `Debt Resolution in ${locationName}` },
    { id: "when-to-consider", title: "When to Consider?" },
    { id: "pros-and-cons", title: "Pros & Cons" },
    { id: "legal-framework", title: "Legal Framework" },
    { id: "process", title: "Our Process" },
    { id: "documents", title: "Documents Required" },
    { id: "types-of-loans", title: "Types of Loans" },
    { id: "credit-score", title: "Credit Score Impact" },
    { id: "why-choose-us", title: "Why Choose Us" },
    { id: "testimonials", title: "Client Experiences" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Lawyers by City", href: "/lawyer-by-city" },
    { label: `${locationName}`, href: `/lawyer-by-city/${location.slug}` },
  ];

  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      

      <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
        {/* Hero Section */}
        <div className="relative bg-[#1a202c] text-white">
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          <div className="absolute inset-0 bg-cover bg-center z-0" style={{ background: "black" }}></div>
          <div className="relative z-20 container mx-auto px-4 py-12 md:py-32 text-center">
            <h1 className="text-2xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight mt-10">
              {pageTitle}
            </h1>
            <p className="text-sm md:text-2xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-200">
              Professional legal representation in <strong>{locationName}</strong> tailored for {cityProfile.economicFocus}. We negotiate directly with lenders, halt collection intimidation, and reduce your debt by up to 50% to 70%.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg">
                Get a Free Case Evaluation
              </button>
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-[1600px] py-8">
          <Breadcrumbs items={breadcrumbItems} />

          {/* Mobile App Store Links */}
          <div className="lg:hidden flex flex-col gap-3 mb-6 mt-2">
            <p className="text-sm font-semibold mb-2" style={{ color: "rgba(210, 158, 13, 0.8)" }}>Download Our App Today</p>
            <div className="flex gap-4">
              <Link href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions" target="_blank" className="hover:opacity-80 transition-opacity">
                <Image src="/newAssets/appstore.svg" alt="Get it on Google Play" width={130} height={36} className="w-[120px] h-auto" />
              </Link>
              <Link href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186" target="_blank" className="hover:opacity-80 transition-opacity">
                <Image src="/newAssets/playstore.svg" alt="Download on App Store" width={130} height={36} className="w-[120px] h-auto" />
              </Link>
            </div>
          </div>

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
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Best Advocates for Loan Settlement in {locationName}</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    Are you struggling with unmanageable debt in <strong>{locationName}</strong>? Financial volatility can confront anyone—whether triggered by sudden employment displacement, commercial liquidity challenges, or medical emergencies. When interest rates compound, borrowers often find themselves trapped between unrelenting recovery calls and legal demand notices.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    It is crucial to recognize that inability to service a debt obligation is strictly a civil matter under Indian contract law. <strong>Loan settlement</strong> (also widely sought as <em>debt settlement in {locationName}</em>) offers an honorable, legally recognized pathway under Reserve Bank of India (RBI) guidelines to resolve outstanding debts for a fraction of the claimed balance.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    AMA Legal Solutions is not an unregulated settlement agency. We are an established law firm with extensive experience representing borrowers before banking institutions and tribunals. We insulate our clients in {locationName} from unlawful collection intimidation while securing sustainable, legally verified One-Time Settlements (OTS).
                  </p>
                </section>

                {/* Regional Landscape */}
                <section id="regional-landscape" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Debt Resolution Realities in {locationName}</h2>
                  <div className="bg-[#FAF8F5] border-l-4 border-[#D2A02A] p-5 rounded-r-xl my-4">
                    <p className="text-sm md:text-base text-gray-800 m-0">
                      <strong>Jurisdictional Focus:</strong> Serving {cityProfile.economicFocus}. Our legal counsel handles disputes across {cityProfile.legalForum}.
                    </p>
                  </div>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    In the local economic environment of {locationName}, borrowers commonly encounter {cityProfile.debtLandscape}. When payments are disrupted, lenders frequently deploy outsourced collection agencies that violate RBI Fair Practice Codes by making unauthorized residential visits or calling workplace contacts.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    Our legal representation provides immediate relief: we issue formal Notices of Appearance under the Advocates Act, compelling lenders to halt direct calls to you or your family and redirect all correspondence to our chambers.
                  </p>
                </section>

                {/* What is Loan Settlement */}
                <section id="what-is-settlement" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">What is Loan Settlement?</h2>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 md:p-6 mb-4 md:mb-8 rounded-r-lg">
                    <p className="text-sm md:text-lg text-blue-900 italic">
                      &quot;A One Time Settlement (OTS) is a bilateral legal compromise wherein a bank or NBFC agrees to accept a negotiated lump-sum amount—significantly lower than total claimed arrears—as full and final satisfaction of the account.&quot;
                    </p>
                  </div>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    When loans become Non-Performing Assets (NPAs), financial institutions incur severe balance sheet provisioning costs. Faced with a well-documented hardship representation prepared by legal counsel, lenders recognize that recovering a compromised lump-sum immediately is vastly preferable to multi-year civil litigation with uncertain returns.
                  </p>
                </section>

                {/* When to Consider */}
                <section id="when-to-consider" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">When Should You Consider Loan Settlement in {locationName}?</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                    Loan settlement is a strategic legal remedy designed for genuine, verifiable financial distress. It is suitable if you are facing:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center mr-3 mt-1">⚠️</div>
                      <div>
                        <h4 className="font-bold text-gray-900">Job Loss or Salary Disruption</h4>
                        <p className="text-gray-600 text-sm">Disruption of primary employment or significant compensation reductions impacting living expenses.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center mr-3 mt-1">🏥</div>
                      <div>
                        <h4 className="font-bold text-gray-900">Critical Medical Emergencies</h4>
                        <p className="text-gray-600 text-sm">Catastrophic health expenses that depleted personal savings and emergency reserves.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center mr-3 mt-1">📉</div>
                      <div>
                        <h4 className="font-bold text-gray-900">Commercial / Business Downturn</h4>
                        <p className="text-gray-600 text-sm">Working capital compression, client defaults, or margin depletion making ongoing EMI service untenable.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center mr-3 mt-1">🔄</div>
                      <div>
                        <h4 className="font-bold text-gray-900">Compound Debt Spiral</h4>
                        <p className="text-gray-600 text-sm">Borrowing from one source to meet minimum due payments on credit cards with 40%+ interest.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Pros and Cons */}
                <section id="pros-and-cons" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Pros and Cons of Loan Settlement</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-200 rounded-lg overflow-hidden">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="p-4 text-left border-b border-gray-200 text-green-700 w-1/2">Key Advantages</th>
                          <th className="p-4 text-left border-b border-gray-200 text-red-700 w-1/2">Important Considerations</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-100">
                          <td className="p-4 align-top">
                            <ul className="list-disc pl-4 space-y-2 text-gray-700 text-sm">
                              <li><strong>Substantial Debt Haircut:</strong> Pay 40% to 70% less than the accumulated claim balance.</li>
                              <li><strong>Immediate Harassment Cessation:</strong> Legal representation halts all third-party collection intimidation.</li>
                              <li><strong>Protection Against Litigation:</strong> Quashes potential Section 138 / Section 25 criminal notices upon full payment.</li>
                              <li><strong>Clean Financial Exit:</strong> Receive official No Dues Certificates (NDC) and permanently close accounts.</li>
                            </ul>
                          </td>
                          <td className="p-4 align-top bg-gray-50">
                            <ul className="list-disc pl-4 space-y-2 text-gray-700 text-sm">
                              <li><strong>Temporary CIBIL Impact:</strong> Account status updates to &quot;Settled&quot;, temporarily impacting score by 50-100 points.</li>
                              <li><strong>Rebuilding Window:</strong> New unsecured credit cards require 12 to 24 months of positive financial rehabilitation.</li>
                              <li><strong>Lump-Sum Availability:</strong> Borrower must arrange the negotiated settlement sum within agreed timelines.</li>
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* Legal Framework */}
                <section id="legal-framework" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">The Legal Framework for Debt Settlement</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    Borrowers often fear that settlement involves legal peril. <strong>Loan settlement is a 100% legal, RBI-regulated banking procedure.</strong> Under Indian banking jurisprudence, borrowers possess clear statutory protections:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-6">
                    <div className="bg-gray-50 p-4 md:p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-base md:text-lg mb-2 text-[#D2A02A]">Dignity & Anti-Coercion</h4>
                      <p className="text-gray-600 text-sm">The Supreme Court in *Prakash Kaur* held that lenders cannot use goondas or musclemen for recovery. Intimidation is an actionable crime.</p>
                    </div>
                    <div className="bg-gray-50 p-4 md:p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-base md:text-lg mb-2 text-[#D2A02A]">Constitutional Privacy</h4>
                      <p className="text-gray-600 text-sm">Agents are barred from disclosing debt records to employers, neighbors, or third parties without explicit consent.</p>
                    </div>
                    <div className="bg-gray-50 p-4 md:p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-base md:text-lg mb-2 text-[#D2A02A]">Right to Legal Representation</h4>
                      <p className="text-gray-600 text-sm">Every citizen has the statutory right to appoint an advocate. Once representation is entered, all creditor communications must be addressed to legal counsel.</p>
                    </div>
                    <div className="bg-gray-50 p-4 md:p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-base md:text-lg mb-2 text-[#D2A02A]">Due Judicial Process</h4>
                      <p className="text-gray-600 text-sm">Unsecured debts cannot result in summary property attachment. Any claim requires rigorous civil adjudication.</p>
                    </div>
                  </div>
                </section>

                {/* Process */}
                <section id="process" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Our 4-Stage Settlement Protocol in {locationName}</h2>
                  <div className="space-y-6 md:space-y-8">
                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-xl font-bold">1</div>
                      <div>
                        <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-2">Comprehensive Audit & Strategy</h3>
                        <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                          We audit all outstanding statements, eliminate usurious compound penalties, analyze hardship documentation, and determine an achievable target settlement percentage.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-xl font-bold">2</div>
                      <div>
                        <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-2">Legal Shield & Anti-Harassment Notice</h3>
                        <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                          We issue formal Notices of Appearance to all creditors, asserting statutory representation and warning against unauthorized visits or calls to third parties.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-xl font-bold">3</div>
                      <div>
                        <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-2">Structured Negotiation with Committees</h3>
                        <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                          Our advocates negotiate directly with senior bank compromise committees and Zonal Managers, leveraging regulatory precedents to secure maximum waivers.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-xl font-bold">4</div>
                      <div>
                        <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-2">Sanction Letter Verification & Closure</h3>
                        <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                          We scrutinize the official OTS letter for complete legal finality, oversee direct settlement disbursement to your loan account, and obtain the definitive No Dues Certificate (NDC).
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Documents Required */}
                <section id="documents" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Documentation Required for Settlement</h2>
                  <ul className="grid md:grid-cols-2 gap-4">
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg"><span className="text-[#D2A02A] mr-3">✓</span> KYC Documents (PAN Card, Aadhaar Card)</li>
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg"><span className="text-[#D2A02A] mr-3">✓</span> Loan & Credit Card Statements (Most recent)</li>
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg"><span className="text-[#D2A02A] mr-3">✓</span> Proof of Income Disruption (Salary Slips / ITR)</li>
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg"><span className="text-[#D2A02A] mr-3">✓</span> Bank Statements for the past 6 months</li>
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg"><span className="text-[#D2A02A] mr-3">✓</span> Termination or Business Loss Documentation</li>
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg"><span className="text-[#D2A02A] mr-3">✓</span> Copies of Legal / Recovery Notices received</li>
                  </ul>
                </section>

                {/* Types of Loans */}
                <section id="types-of-loans" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Debt Facilities Handled in {locationName}</h2>
                  <div className="grid md:grid-cols-2 gap-4 md:gap-8">
                    <div className="bg-white border border-gray-200 rounded-xl p-4 md:p-6 shadow-sm">
                      <h3 className="text-base md:text-xl font-bold text-[#D2A02A] mb-2">Unsecured Personal Loans</h3>
                      <p className="text-gray-700 text-sm">Negotiating full-and-final closures on unsecured retail loans, eliminating inflated late fees and penal interest.</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-4 md:p-6 shadow-sm">
                      <h3 className="text-base md:text-xl font-bold text-[#D2A02A] mb-2">Credit Card Debt Settlement</h3>
                      <p className="text-gray-700 text-sm">Dismantling revolving credit card traps with 36-45% compound finance charges to achieve realistic lump-sum settlements.</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-4 md:p-6 shadow-sm">
                      <h3 className="text-base md:text-xl font-bold text-[#D2A02A] mb-2">MSME & Business Lines</h3>
                      <p className="text-gray-700 text-sm">Structuring debt workouts for trading and business enterprises to preserve commercial viability and resolve creditor claims.</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-4 md:p-6 shadow-sm">
                      <h3 className="text-base md:text-xl font-bold text-[#D2A02A] mb-2">Digital App & Fintech Loans</h3>
                      <p className="text-gray-700 text-sm">Neutralizing cyber harassment, morphed photo threats, and emergency contact intimidation under RBI Digital Lending Guidelines.</p>
                    </div>
                  </div>
                </section>

                {/* Credit Score Impact */}
                <section id="credit-score" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Understanding CIBIL Score Rehabilitation</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    A settled account is marked as &quot;Settled&quot; on your CIBIL report. While this reflects that dues were compromised, it eliminates active default status and halts compounding interest.
                  </p>
                  <div className="bg-green-50 p-4 md:p-6 rounded-xl text-sm md:text-base space-y-2 text-gray-800">
                    <h4 className="font-bold text-green-900">4-Step Post-Settlement Credit Rebuilding Plan:</h4>
                    <p>1. Ensure all closed facilities have received definitive No Dues Certificates (NDCs).</p>
                    <p>2. Obtain a secured credit card backed by a fixed deposit to generate consistent positive repayment history.</p>
                    <p>3. Maintain credit utilization under 30% on active facilities.</p>
                    <p>4. Conduct quarterly CIBIL checks to verify that settled accounts do not show active delinquent balances.</p>
                  </div>
                </section>

                {/* Why Choose Us */}
                <section id="why-choose-us" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Why Retain AMA Legal Solutions in {locationName}?</h2>
                  <div className="grid md:grid-cols-3 gap-4 md:gap-6 text-center">
                    <div className="p-4 md:p-6 rounded-xl bg-gray-50">
                      <div className="text-3xl md:text-4xl mb-3">⚖️</div>
                      <h3 className="font-bold text-lg mb-2">Advocate Standing</h3>
                      <p className="text-gray-600 text-sm">We are licensed legal advocates with standing to represent you before civil courts, magistrates, and Lok Adalats.</p>
                    </div>
                    <div className="p-4 md:p-6 rounded-xl bg-gray-50">
                      <div className="text-3xl md:text-4xl mb-3">🛡️</div>
                      <h3 className="font-bold text-lg mb-2">Zero Harassment</h3>
                      <p className="text-gray-600 text-sm">We enforce strict RBI Fair Practices regulations and take criminal action against abusive collection agencies.</p>
                    </div>
                    <div className="p-4 md:p-6 rounded-xl bg-gray-50">
                      <div className="text-3xl md:text-4xl mb-3">🤝</div>
                      <h3 className="font-bold text-lg mb-2">Maximum Waivers</h3>
                      <p className="text-gray-600 text-sm">Direct advocacy with senior bank compromise authorities secures optimal principal reductions.</p>
                    </div>
                  </div>
                </section>

                {/* Testimonials */}
                <section id="testimonials" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-8">Client Success Experiences</h2>
                  <div className="grid md:grid-cols-2 gap-4 md:gap-8">
                    {cityProfile.testimonials.map((t, idx) => (
                      <div key={idx} className="bg-gray-50 p-4 md:p-8 rounded-xl border border-gray-100 relative">
                        <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">&quot;</div>
                        <p className="text-gray-700 italic mb-4 relative z-10 text-sm md:text-base leading-relaxed">
                          &quot;{t.quote}&quot;
                        </p>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-bold text-gray-900 text-sm">{t.author}</p>
                            <p className="text-xs text-gray-500">{t.profile}</p>
                          </div>
                          <span className="text-xs font-semibold text-[#D2A02A] bg-[#D2A02A]/10 px-3 py-1 rounded-full">{t.saving}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* FAQs */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-8">Frequently Asked Questions in {locationName}</h2>
                  <div className="space-y-4 md:space-y-6">
                    {cityProfile.faqs.map((faq, index) => (
                      <div key={index} className="border-b border-gray-200 pb-4 md:pb-6 last:border-0">
                        <h3 className="text-base md:text-xl font-bold text-gray-900 mb-2 md:mb-3 flex items-start">
                          <span className="text-[#D2A02A] mr-2 md:mr-3">Q.</span>
                          {faq.question}
                        </h3>
                        <p className="text-gray-700 leading-relaxed pl-6 md:pl-8 text-sm md:text-base m-0">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

              </div>
            </div>

            {/* Right Column - Sidebar */}
            <aside className="space-y-6 sticky top-24">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Need Help in {locationName}?</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Speak directly with an experienced banking advocate to evaluate your settlement options.
                </p>
                <Link href="tel:+918178873087" className="block w-full">
                  <button className="w-full bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-4 rounded-xl transition-all shadow-md text-sm">
                    Call +91 81788 73087
                  </button>
                </Link>
                <a href="https://wa.me/918700343611" target="_blank" rel="noopener noreferrer" className="block w-full mt-2">
                  <button className="w-full bg-white border border-[#D2A02A] text-[#D2A02A] hover:bg-[#D2A02A] hover:text-white font-bold py-3 px-4 rounded-xl transition-all text-sm">
                    WhatsApp Us
                  </button>
                </a>
              </div>

              <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-[#D2A02A]/20">
                <h4 className="font-bold text-sm text-[#30261C] uppercase tracking-wider mb-2">Legal Immunity Guarantee</h4>
                <p className="text-xs text-gray-600 leading-relaxed m-0">
                  All communications and dispute strategies are protected by advocate-client privilege under Section 126 of the Indian Evidence Act.
                </p>
              </div>
            </aside>

          </div>
        </div>
      </div>
    </>
  );
}
