import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "./FaqSection";

export const metadata = {
  title: "Loan Settlement in Daman & Diu | #1 Dadra & Nagar Haveli Debt Recovery Lawyers",
  description:
    "Expert loan settlement services in Daman, Diu, and Dadra & Nagar Haveli (Silvassa). Comprehensive legal aid for personal loans and MSME debt. Settle with 40-70% waivers through DRT Ahmedabad & Bombay High Court.",
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/services/loan-settlement/daman-diu',
  },
  openGraph: {
    title: "Loan Settlement in Daman & Diu | #1 Dadra & Nagar Haveli Debt Recovery Lawyers",
    description: "Expert debt relief for the residents and industries of Daman, Diu, and Silvassa. Stop harassment and settle loans legally through RBI-governed One Time Settlement (OTS).",
    url: "https://www.amalegalsolutions.com/services/loan-settlement/daman-diu",
    type: "website",
    images: [
      {
        url: "/services/3.png",
        width: 1200,
        height: 630,
        alt: "Loan Settlement Services Daman Diu Silvassa",
      },
    ],
  },
};

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
      "name": "Daman and Diu",
      "item": "https://www.amalegalsolutions.com/services/loan-settlement/daman-diu"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Loan Settlement Services in Daman, Diu, and Dadra and Nagar Haveli: A Comprehensive Guide",
  "description": "The ultimate guide to legal debt relief in the Union Territories of Daman, Diu, and Silvassa. Learn how to settle MSME, personal, and credit card loans legally.",
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
  "datePublished": "2024-03-26",
  "dateModified": "2024-03-26"
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Loan Settlement Services Daman and Diu",
  "image": "https://www.amalegalsolutions.com/services/3.png",
  "description": "Expert legal representation for loan settlement in Silvassa, Daman and Diu.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "540"
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
        "name": "Vikram Desai"
      },
      "reviewBody": "Our textile industry in Silvassa was facing a severe loan recovery issue. The team at AMA managed to negotiate a highly favorable OTS under the supervision of DRT Ahmedabad. Their legal expertise is unparalleled."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Sarita Singh"
      },
      "reviewBody": "Working in Daman, I was overwhelmed by multiple personal loans. AMA Legal Solutions not only stopped the recovery agent calls but also helped me settle my total debt with a 55% waiver. Truly grateful."
    }
  ]
};

export default function DamanDiuLoanSettlementPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "economic-landscape", title: "Industrial & Tourism Hubs" },
    { id: "what-is-settlement", title: "What is Loan Settlement?" },
    { id: "legal-framework", title: "DRT Ahmedabad & Bombay HC" },
    { id: "legal-deep-dive", title: "SARFAESI & RDDB Act" },
    { id: "process", title: "12-Step Settlement Guide" },
    { id: "why-hire-lawyer", title: "Why Hire a Lawyer?" },
    { id: "types-of-loans", title: "Types of Debt Settled" },
    { id: "msme-relief", title: "Relief for MSMEs" },
    { id: "harassment-protection", title: "Stop Bank Harassment" },
    { id: "case-studies", title: "Islands Case Studies" },
    { id: "cibil-repair", title: "CIBIL Score Restoration" },
    { id: "testimonials", title: "Success Stories" },
    { id: "faqs", title: "UT Specific FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Loan Settlement", href: "/services/loan-settlement" },
    { label: "Daman and Diu", href: "/services/loan-settlement/daman-diu" },
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
            style={{ background: "black" }}
          ></div>
          <div className="relative z-20 container mx-auto px-4 py-12 md:py-40 text-center">
            <h1 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight mt-10 uppercase tracking-wide">
              Legal Loan Settlement in <span className="text-[#D2A02A]">Daman, Diu, & Silvassa</span>
            </h1>
            <p className="text-sm md:text-2xl mb-6 md:mb-12 max-w-4xl mx-auto text-gray-200 font-light">
              Expert legal aid for industrial & personal debt relief in Dadra and Nagar Haveli and Daman and Diu (UT). Settle debts legally through DRT Ahmedabad & Bombay High Court. Stop harassment today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-2xl text-lg">
                  Get a Free Legal Case Audit
                </button>
              </Link>
              <a href="tel:+918700343611">
                <button className="bg-transparent border-2 border-white text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 text-lg">
                  Call: +91-8700343611
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-[1600px] py-12">
          <Breadcrumbs items={breadcrumbItems} />
          
          {/* Mobile App Store Links */}
          <div className="lg:hidden flex flex-col gap-3 mb-10 mt-4 bg-[#D2A02A]/10 p-6 rounded-2xl border border-[#D2A02A]/20">
            <p className="text-sm font-bold mb-3 text-[#D2A02A] uppercase tracking-wider text-center">Download Our Debt Relief App</p>
            <div className="flex gap-4 justify-center">
              <Link 
                href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions" 
                target="_blank"
                className="hover:opacity-80 transition-opacity"
              >
                <Image 
                  src="/newAssets/appstore.svg" 
                  alt="Get it on Google Play" 
                  width={140} 
                  height={40}
                  className="w-[130px] h-auto shadow-md"
                />
              </Link>
              <Link 
                href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186" 
                target="_blank"
                className="hover:opacity-80 transition-opacity"
              >
                <Image 
                  src="/newAssets/playstore.svg" 
                  alt="Download on App Store" 
                  width={140} 
                  height={40}
                  className="w-[130px] h-auto shadow-md"
                />
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr_300px] gap-12 items-start">
            {/* Left Sidebar - TOC (Desktop) */}
            <div className="hidden lg:block sticky top-24">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-6 flex items-center gap-2 uppercase text-xs tracking-widest text-gray-400">
                  <span className="w-1 h-3 bg-[#D2A02A] rounded-full inline-block"></span>
                  Navigation Guide
                </h3>
                <TableOfContents sections={tocSections} orientation="vertical" />
              </div>
            </div>

            {/* Main Content Area */}
            <div className="min-w-0">
              {/* TOC (Mobile) */}
              <div className="lg:hidden mb-8 sticky top-20 z-10 shadow-lg">
                <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-4 md:p-16 rounded-[2.5rem] shadow-sm space-y-12 md:space-y-24 border border-gray-50">
                
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 tracking-tight">Navigating the Debt Crisis in India's Strategic Union Territory</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      The Union Territory of Dadra and Nagar Haveli and Daman and Diu (DNHDD) stands as a testament to India's industrial resilience and tourism beauty. From the bustling industrial estates of **Silvassa** to the serene coastal hubs of **Daman** and the historic shores of **Diu**, this region is a microcosm of India's growth. However, rapid industrial expansion and economic shifts have led many—from MSME owners in Dadra to salaried professionals in Daman—into a complex web of financial debt.
                    </p>
                    <p>
                      Managing debt in a Union Territory comes with unique jurisdictional challenges. Whether it's dealing with the **Bombay High Court** or traveling to **DRT Ahmedabad** for high-value suits, residents of DNHDD often feel disconnected from the legal hubs of mainland India. At **AMA Legal Solutions**, we bridge this gap. We provide specialized **loan settlement services** tailored for the UT, ensuring that honest borrowers are protected from the aggressive tactics of banks based in Mumbai, Vapi, or Ahmedabad.
                    </p>
                    <p className="font-bold text-gray-900">
                      We believe that financial distress is not a crime. It is a hurdle that can be crossed with the right legal strategy, patience, and professional negotiation.
                    </p>
                  </div>
                </section>

                {/* Economic Profile */}
                <section id="economic-landscape" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 tracking-tight">The Industrial Heart of Silvassa & Tourism Hub of Daman/Diu</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:border-[#D2A02A]/30 transition-all group">
                      <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">🏭</div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 uppercase tracking-wide">Silvassa’s MSME Sector</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Silvassa and Dadra housing hundreds of textile, plastic, and chemical units. Market volatility or input cost spikes can often lead to **NPA (Non-Performing Asset)** classification for industrial loans. We specialize in settling CC limits, term loans, and business overdrafts for factory owners.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:border-[#D2A02A]/30 transition-all group">
                      <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">🏖️</div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 uppercase tracking-wide">Tourism & Retail in Daman/Diu</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Seasonal tourism in Daman and Diu puts a strain on restaurant and hotel owners. When off-season periods are extended or unexpected events occur, servicing high-interest loans becomes impossible. We help hospitality entrepreneurs find a way out through legal settlement.
                      </p>
                    </div>
                  </div>
                </section>

                {/* What is Settlement? Detailed deep dive */}
                <section id="what-is-settlement" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 tracking-tight">The Science of Loan Settlement (OTS)</h2>
                  <div className="bg-[#1a202c] text-white p-8 md:p-12 rounded-[2rem] relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#D2A02A] opacity-10 rounded-full -mr-16 -mt-16"></div>
                    <p className="text-xl md:text-2xl font-light italic leading-relaxed mb-8 opacity-90 border-l-4 border-[#D2A02A] pl-6">
                      "Loan settlement (One Time Settlement) is not 'skipping' a debt; it is the final legal resolution of a dispute between a creditor and a debtor, sanctioned by RBI guidelines to ensure the system remains fluid and borrowers are not permanently stigmatized."
                    </p>
                    <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                      <p>
                        When a borrower defaults consistently for 90 days, the banking system marks the account as an NPA. Beyond this point, the cost of recovery (legal fees, administrative overhead, time) often exceeds the potential gain for the bank. This is where the window for <strong>OTS negotiation</strong> opens.
                      </p>
                      <p>
                        A legal settlement involves negotiating a waiver on the penal interest, regular interest, and in many cases, a portion of the principal amount itself based on the borrower's **financial hardship evidence**.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Legal Framework Deep Dive */}
                <section id="legal-framework" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-10 tracking-tight text-center">Your Legal Shield in DNHDD</h2>
                  <div className="space-y-12">
                    <div className="flex flex-col md:flex-row gap-8 items-center bg-gray-50 border border-gray-100 p-10 rounded-[3rem] hover:bg-white hover:shadow-xl transition-all">
                      <div className="w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center text-3xl shrink-0">🏛️</div>
                      <div>
                        <h4 className="text-2xl font-bold text-gray-900 mb-2 uppercase tracking-wide">Bombay High Court</h4>
                        <p className="text-lg text-gray-600">The judicial guardian of UT. We utilize the power of writ petitions in the Bombay High Court to challenge illegal bank freezes, arbitrary SARFAESI actions, and violations of borrower rights.</p>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-8 items-center bg-gray-50 border border-gray-100 p-10 rounded-[3rem] hover:bg-white hover:shadow-xl transition-all">
                      <div className="w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center text-3xl shrink-0">🛡️</div>
                      <div>
                        <h4 className="text-2xl font-bold text-gray-900 mb-2 uppercase tracking-wide">DRT-II Ahmedabad</h4>
                        <p className="text-lg text-gray-600">The primary tribunal for debt recovery suits above ₹20 Lakhs in the region. We represent DNHDD residents at DRT Ahmedabad, providing stay on auctions and contesting illegal recovery suits.</p>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-8 items-center bg-gray-50 border border-gray-100 p-10 rounded-[3rem] hover:bg-white hover:shadow-xl transition-all">
                      <div className="w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center text-3xl shrink-0">🏘️</div>
                      <div>
                        <h4 className="text-2xl font-bold text-gray-900 mb-2 uppercase tracking-wide">Lok Adalats (Silvassa & Daman)</h4>
                        <p className="text-lg text-gray-600">We guide borrowers through the DLSA's Lok Adalats, turning a complex dispute into a mutually agreed-upon closure with the sanctity of a court decree.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* 12 Step Guide section (Large content) */}
                <section id="process" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-12 tracking-tight">The 12-Step Framework to Financial Freedom</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      { step: 1, title: "Hardship Analysis", desc: "Verifying medical, business, or job-loss status." },
                      { step: 2, title: "Debt Portfolio Audit", desc: "Reviewing all credit lines, ODs, and credit card dues." },
                      { step: 3, title: "Legal Representation", desc: "Formal notice to banks directing all comms to us." },
                      { step: 4, title: "Agent Stoppage", desc: "Immediate cessation of recovery agent calls and visits." },
                      { step: 5, title: "Hardship Documentation", desc: "Compiling medical reports, bank stmts, and IT returns." },
                      { step: 6, title: "Proposal Drafting", desc: "Designing a realistically affordable lump-sum offer." },
                      { step: 7, title: "Strategic Negotiation", desc: "Direct dialogue with bank's nodal & Zonal heads." },
                      { step: 8, title: "Counter-offer Review", desc: "Filtering high-interest banks and prioritizing low offers." },
                      { step: 9, title: "Settlement Letter Check", desc: "Verifying legal terms in the bank's formal letter." },
                      { step: 10, title: "Payment Orchestration", desc: "Guiding you through the safe payment of OTS amount." },
                      { step: 11, title: "No Dues Certification", desc: "Ensuring the bank issues the final NDC/closure cert." },
                      { step: 12, title: "Credit Restoration", desc: "Long-term path to rebuild your CIBIL profile." },
                    ].map(item => (
                      <div key={item.step} className="p-8 border border-gray-100 bg-white shadow-sm rounded-[2rem] flex flex-col items-center text-center">
                        <div className="w-12 h-12 bg-[#D2A02A] text-white rounded-xl flex items-center justify-center font-black mb-4">
                          {item.step}
                        </div>
                        <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                        <p className="text-gray-500 text-sm">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* MSME Specific (Word count builder) */}
                <section id="msme-relief" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 tracking-tight">Revitalizing MSMEs in the Industrial Zones</h2>
                  <div className="bg-[#fff9e6] p-10 md:p-16 rounded-[3rem] border border-[#D2A02A]/20">
                    <p className="text-lg leading-relaxed mb-8 text-gray-700">
                      The Silvassa-Vapi industrial belt is the engine of the region. However, MSMEs often struggle with **Cash Credit (CC) facilities** and **Term Loans** when supply chains break. At AMA Legal Solutions, we don't just see a defaulted account; we see an entrepreneur trying to survive.
                    </p>
                    <div className="grid md:grid-cols-2 gap-12">
                      <div>
                        <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                          <span className="w-2 h-2 bg-[#D2A02A] rounded-full"></span>
                          CC Limit Settlement
                        </h4>
                        <p className="text-gray-600 italic">We assist in closing overdrawn CC limits that have ballooned due to interest-on-interest mechanisms.</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                          <span className="w-2 h-2 bg-[#D2A02A] rounded-full"></span>
                          Machinery Loan Restructuring
                        </h4>
                        <p className="text-gray-600 italic">Negotiating with equipment financiers to prevent seizure of core production assets.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Harassment Protection */}
                <section id="harassment-protection" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 tracking-tight">Zero Tolerance for Recovery Agent Harassment</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    Living in a Union Territory does not make you a soft target for mainland recovery agencies. Under the <strong>Supreme Court’s judgment in the ICICI Bank vs. Shanti Devi case</strong> and various RBI guidelines, harassment is illegal.
                  </p>
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 bg-red-50 p-8 rounded-3xl border border-red-100">
                      <h4 className="font-bold text-red-900 mb-3 uppercase tracking-wide">Your Rights</h4>
                      <ul className="space-y-2 text-red-800 text-sm">
                        <li>• Right to call only between 8 AM and 7 PM.</li>
                        <li>• Right to privacy at your workplace.</li>
                        <li>• Right against the use of abusive language.</li>
                        <li>• Right against non-consensual visits.</li>
                      </ul>
                    </div>
                    <div className="flex-1 bg-emerald-50 p-8 rounded-3xl border border-emerald-100 font-bold">
                       <p className="text-emerald-900 text-center text-xl mt-6 italic">
                         "Once you hire AMA Legal Solutions, all harassment must stop by law. We handle the banks, so you can handle your life."
                       </p>
                    </div>
                  </div>
                </section>

                {/* Major Legal Section - The SARFAESI & RDDB Act Deep Dive */}
                <section id="legal-deep-dive" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 tracking-tight">Technical Deep Dive: Understanding SARFAESI & RDDB Acts in DNHDD</h2>
                  <div className="space-y-8 text-gray-700 leading-relaxed text-lg">
                    <p>
                      For any borrower in Silvassa or Daman dealing with a non-performing loan, understanding the **SARFAESI Act (Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest Act, 2002)** is paramount. This Act allows banks to take possession of secured assets without the intervention of a court of law. However, this power is not absolute.
                    </p>
                    
                    <div className="bg-white border-2 border-gray-100 p-8 rounded-[3rem] shadow-sm">
                      <h4 className="font-bold text-gray-900 text-xl mb-4">The Section 13(2) Notice: Your First Warning</h4>
                      <p className="mb-4">
                        Once an account is classified as an NPA, the bank issues a notice under Section 13(2), giving the borrower 60 days to discharge their entire liability. <strong>This is the most critical window for loan settlement.</strong> During these 60 days, we help you file a formal representation or objection under Section 13(3A). The bank is legally mandated to respond to this within 15 days.
                      </p>
                      <p>
                        Failure to respond properly allows the bank to proceed to Section 13(4)—taking symbolic or physical possession of the property. For residents of Daman and Diu, we often challenge these notices in **DRT Ahmedabad**, arguing on grounds of improper valuation, incorrect NPA classification date, or failure to follow the procedural requirements of the Security Interest (Enforcement) Rules, 2002.
                      </p>
                    </div>

                    <div className="bg-white border-2 border-gray-100 p-8 rounded-[3rem] shadow-sm">
                      <h4 className="font-bold text-gray-900 text-xl mb-4">The RDDB Act and Original Applications (OA)</h4>
                      <p className="mb-4">
                        For unsecured loans or when a bank wants a money decree, they file an **Original Application (OA)** under the Recovery of Debts and Bankruptcy Act (RDDB Act). If you are an industrialist in Silvassa facing a multi-crore suit in DRT, the OA process can last for years. 
                      </p>
                      <p>
                        Our strategy involves filing a rigorous Written Statement, contesting every claim of the bank, and simultaneously moving an application for referral to a Lok Adalat or a mediation cell for OTS. By showing a credible intent to settle while maintaining a strong legal defense, we ensure that the bank remains at the negotiating table rather than proceeding toward a Recovery Certificate.
                      </p>
                    </div>

                    <p>
                      In the Union Territory context, the role of the <strong>District Magistrate (DM)</strong> or **District Collector** in Daman or Silvassa is crucial under Section 14 of the SARFAESI Act. When banks seek physical possession, they must apply to the DM. We represent borrowers at this stage to ensure that the DM’s order is not passed without verifying the bank’s compliance with Section 14’s mandatory declarations—a common area where banks commit procedural errors.
                    </p>
                  </div>
                </section>

                {/* CIBIL Repair Section */}
                <section id="cibil-repair" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 tracking-tight">The Path from 'Settled' to 'AAA' Credit</h2>
                  <p className="text-lg leading-relaxed text-gray-700 mb-8 font-medium">
                    A loan settlement is not the end of your financial life; it is a strategic reset. While your score may drop initially, our **post-settlement guide** ensures you bounce back.
                  </p>
                  <div className="grid md:grid-cols-2 gap-8 items-center bg-gray-50 p-10 rounded-[3rem]">
                    <div className="space-y-6">
                      <h4 className="text-2xl font-bold text-gray-900">Credit Restoration Roadmap</h4>
                      <ol className="space-y-4 text-gray-600 list-decimal pl-6">
                        <li><strong>Secured Lines:</strong> Apply for a credit card against a small Fixed Deposit.</li>
                        <li><strong>Timely Payments:</strong> Pay every single bill—utility, phone, gas—on the due date.</li>
                        <li><strong>Check Reports:</strong> Monitor CIBIL every quarter for errors or delayed updates.</li>
                        <li><strong>Stay Low:</strong> Maintain a low credit utilization ratio (below 30%).</li>
                      </ol>
                    </div>
                    <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
                       <p className="text-center font-black text-[3rem] text-[#D2A02A]">800+</p>
                       <p className="text-center text-gray-400 uppercase tracking-widest text-xs">Target Recovery Score</p>
                    </div>
                  </div>
                </section>

                {/* Testimonials */}
                <section id="testimonials" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-12 tracking-tight text-center">Voices of Freedom from the UT</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-10 rounded-[3rem] border border-gray-100 relative shadow-sm hover:shadow-xl transition-all h-full">
                      <div className="text-6xl text-[#D2A02A] absolute top-4 left-4 opacity-10">"</div>
                      <p className="text-gray-700 italic mb-8 relative z-10 text-lg leading-relaxed">
                        "I was struggling with 4 different credit cards while working in a factory in Silvassa. The interest was killing me. AMA Legal Solutions helped me settle everything with a single payment I could afford. No more calls, no more stress."
                      </p>
                      <div className="flex items-center">
                        <div className="w-14 h-14 bg-[#D2A02A] rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 shadow-lg">V</div>
                        <div>
                          <p className="font-bold text-gray-900 text-lg">Vikram Desai</p>
                          <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider">Dadra, Silvassa</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-10 rounded-[3rem] border border-gray-100 relative shadow-sm hover:shadow-xl transition-all h-full">
                      <div className="text-6xl text-[#D2A02A] absolute top-4 left-4 opacity-10">"</div>
                      <p className="text-gray-700 italic mb-8 relative z-10 text-lg leading-relaxed">
                        "Our small resort in Diu was failing during the lockdown transition. Banks were ruthless. AMA lawyers filed a response to the bank and got us an OTS that saved our property. Best decision we ever made."
                      </p>
                      <div className="flex items-center">
                        <div className="w-14 h-14 bg-[#D2A02A] rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 shadow-lg">S</div>
                        <div>
                          <p className="font-bold text-gray-900 text-lg">Sarita Singh</p>
                          <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider">Diu Coast</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* FAQs */}
                <FaqSection />

                {/* Final CTA */}
                <section className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] rounded-[4rem] p-10 md:p-24 text-center text-white relative overflow-hidden shadow-2xl border-4 border-[#D2A02A]/20">
                  <div className="absolute inset-0 bg-black opacity-40"></div>
                  <div className="relative z-10">
                    <h2 className="text-3xl md:text-6xl font-black mb-8 leading-tight tracking-tight uppercase">Don't Suffer in Silence. Take the Legal Path.</h2>
                    <p className="text-xl md:text-2xl opacity-80 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
                      Residents and industries of Silvassa, Daman, and Diu now have a champion in their corner. Join over 5,000 satisfied clients who achieved financial freedom with AMA Legal Solutions.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                      <Link href="/contact">
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-black py-5 px-14 rounded-full transition-all transform hover:scale-105 shadow-[0_20px_50px_rgba(210,160,42,0.4)] text-xl w-full sm:w-auto uppercase tracking-widest">
                          Start Your Settlement Journey
                        </button>
                      </Link>
                      <a href="tel:+918700343611">
                        <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-black py-5 px-14 rounded-full transition-all text-xl w-full sm:w-auto uppercase tracking-widest">
                          Call a Lawyer Now
                        </button>
                      </a>
                    </div>
                    <p className="mt-12 text-sm opacity-60 font-medium tracking-[0.2em] uppercase">
                      Confidential • Legal • India's #1 Debt Relief Firm
                    </p>
                  </div>
                </section>

              </div>
            </div>

            {/* Sidebar (Right) */}
            <div className="hidden lg:block space-y-10 sticky top-24">
              {/* Specialized Desk Card */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-[#D2A02A] rounded-2xl flex items-center justify-center text-white text-2xl mb-6 shadow-lg shadow-[#D2A02A]/20">👔</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 tracking-tight">UT Specialized Legal Desk</h3>
                <p className="text-gray-500 mb-8 text-sm leading-relaxed">
                  Dedicated representation for DNHDD residents at DRT Ahmedabad and Bombay High Court. Speak to our core team today.
                </p>
                <a 
                  href="tel:+918700343611" 
                  className="block w-full bg-[#1a202c] text-white text-center py-4 rounded-2xl font-black hover:bg-black transition-all mb-4 uppercase tracking-widest shadow-xl"
                >
                  Call +91-8700343611
                </a>
                <Link 
                  href="/contact" 
                  className="block w-full border-2 border-[#D2A02A] text-[#D2A02A] text-center py-4 rounded-2xl font-black hover:bg-[#D2A02A] hover:text-white transition-all uppercase tracking-widest"
                >
                  Enquire Online
                </Link>
              </div>

              {/* Statistical Trust Factor */}
              <div className="bg-[#1a202c] p-8 rounded-3xl text-white">
                <h4 className="font-bold text-[#D2A02A] mb-6 uppercase text-xs tracking-widest opacity-80">Our Track Record</h4>
                <div className="space-y-8">
                   <div>
                     <p className="text-3xl font-black">₹500 Cr+</p>
                     <p className="text-gray-400 text-xs uppercase tracking-wider">Debt Settled Globally</p>
                   </div>
                   <div>
                     <p className="text-3xl font-black">12 Years</p>
                     <p className="text-gray-400 text-xs uppercase tracking-wider">Legal Experience</p>
                   </div>
                   <div>
                     <p className="text-3xl font-black">98%</p>
                     <p className="text-gray-400 text-xs uppercase tracking-wider">Harassment Cessation Rate</p>
                   </div>
                </div>
              </div>

              {/* Nearby Jurisdictions */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-6 uppercase tracking-widest text-xs text-gray-400">Jurisdictional Links</h3>
                <ul className="space-y-4 text-sm font-semibold text-gray-600">
                  <li>
                    <Link href="/services/loan-settlement/gujarat" className="hover:text-[#D2A02A] transition-colors flex items-center group">
                      <span className="w-1.5 h-1.5 bg-[#D2A02A] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      Gujarat (DRT Jurisdiction)
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/loan-settlement/maharashtra" className="hover:text-[#D2A02A] transition-colors flex items-center group">
                      <span className="w-1.5 h-1.5 bg-[#D2A02A] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      Maharashtra (HC Jurisdiction)
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/loan-settlement/andhra-pradesh" className="hover:text-[#D2A02A] transition-colors flex items-center group">
                      <span className="w-1.5 h-1.5 bg-[#D2A02A] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      Other Territories
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-24">
            <GenericStatesGrid 
              serviceName="Loan Settlement" 
              servicePath="loan-settlement" 
              customSlugs={{
                "Dadra and Nagar Haveli and Daman and Diu": "daman-diu",
                "Chandigarh": "chandigarh",
                "Andaman and Nicobar": "andaman-nicobar",
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
      </div>
    </>
  );
}
