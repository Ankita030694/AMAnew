import React from "react";
import fs from "fs";
import path from "path";
import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import { notFound } from "next/navigation";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import { getBankSettlementSEO } from "@/lib/seo";
import { getBankSettlementProfile } from "@/lib/bankContentEngine";

const slugify = (text: any) => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
};

const findBankData = (banksData: any[], rawSlug: string) => {
  const cleanSlug = (rawSlug || "").toLowerCase().trim();
  return banksData.find((b: any) => {
    const s = slugify(b.company);
    return s === cleanSlug || `${s}-bank` === cleanSlug || cleanSlug.replace(/-bank$/, "") === s;
  });
};

export async function generateMetadata({ params }: { params: any }) {
  const resolvedParams = await params;
  const dataPath = path.join(process.cwd(), "src/app/loan-settlement-by-bank/banks.json");
  const rawData = fs.readFileSync(dataPath, "utf-8");
  const banksData = JSON.parse(rawData);

  const bankData = findBankData(banksData, resolvedParams.slug);

  if (!bankData) {
    return {
      title: "Bank Not Found | AMA Legal Solutions",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const bankName = bankData.company;
  const canonicalSlug = slugify(bankData.company);
  const { title, description } = getBankSettlementSEO(bankName, canonicalSlug);

  return {
    title,
    description,
    alternates: {
      canonical: `https://www.amalegalsolutions.com/loan-settlement-by-bank/${canonicalSlug}`,
    },
  };
}

export default async function BankSlugPage({ params }: { params: any }) {
  const resolvedParams = await params;
  const dataPath = path.join(process.cwd(), "src/app/loan-settlement-by-bank/banks.json");
  const rawData = fs.readFileSync(dataPath, "utf-8");
  const banksData = JSON.parse(rawData);

  const bankData = findBankData(banksData, resolvedParams.slug);

  if (!bankData) {
    notFound();
  }

  const bankName = bankData.company;
  const bankProfile = getBankSettlementProfile(resolvedParams.slug, bankName);
  const faqs = bankProfile.faqs;

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
        "name": "Loan Settlement by Bank",
        "item": "https://www.amalegalsolutions.com/loan-settlement-by-bank"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": bankName,
        "item": `https://www.amalegalsolutions.com/loan-settlement-by-bank/${resolvedParams.slug}`
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": `The Complete 2026 Legal Guide to Loan Settlement for ${bankName}`,
    "description": `A comprehensive, in-depth legal guide to stopping recovery agent harassment, understanding your RBI rights, and successfully negotiating a One Time Settlement (OTS) with ${bankName}.`,
    "image": "https://www.amalegalsolutions.com/services/loan-settlement.png",
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
    "datePublished": "2026-07-04",
    "dateModified": "2026-09-15"
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
    "name": `Expert Loan Settlement for ${bankName}`,
    "image": "https://www.amalegalsolutions.com/services/loan-settlement.png",
    "description": `Expert legal representation for debt settlement, OTS negotiation, and comprehensive anti-harassment protection against ${bankName} across all states in India.`,
    "brand": {
      "@type": "Brand",
      "name": "AMA Legal Solutions"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1024"
    },
    "review": bankProfile.reviews.map(r => ({
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": r.rating
      },
      "author": {
        "@type": "Person",
        "name": r.author
      },
      "reviewBody": r.quote
    }))
  };

  const tocSections = [
    { id: "introduction", title: "Introduction to Debt Defense" },
    { id: "what-is-settlement", title: `What is an OTS for ${bankName}?` },
    { id: "official-contacts", title: `Official Grievance Contacts` },
    { id: "understanding-default", title: "Lifecycle of Default" },
    { id: "rbi-guidelines", title: `${bankProfile.categoryLabel} Guidelines` },
    { id: "types-of-loans", title: "Eligible Debt Facilities" },
    { id: "settlement-process", title: "Our 4-Step Settlement Process" },
    { id: "harassment", title: "Stopping Illegal Recovery Harassment" },
    { id: "cibil-impact", title: "Impact on CIBIL Score" },
    { id: "why-choose-us", title: "Why Choose AMA Legal Solutions" },
    { id: "testimonials", title: "Client Experiences" },
    { id: "faqs", title: "Frequently Asked Questions" },
  ];

  const breadcrumbItems = [
    { label: "Loan Settlement by Bank", href: "/loan-settlement-by-bank" },
    { label: bankName, href: `/loan-settlement-by-bank/${resolvedParams.slug}` },
  ];

  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
        {/* Hero Section */}
        <div className="relative bg-[#1a202c] text-white overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
          <div
            className="absolute inset-0 bg-cover bg-center z-0 opacity-40"
            style={{ backgroundImage: "url(/images/legal-hammer-bg.jpg)" }}
          ></div>
          <div className="relative z-20 container mx-auto px-4 py-16 md:py-32 text-center mt-12">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#D2A02A]/20 border border-[#D2A02A]/50 text-[#D2A02A] text-xs md:text-sm font-semibold tracking-wider mb-6 uppercase">
              {bankProfile.categoryLabel} Settlement Defense
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Secure a Loan Settlement for <br className="hidden md:block" />
              <span className="text-[#D2A02A]">{bankName}</span> Legally & Safely
            </h1>
            <p className="text-base md:text-xl mb-10 max-w-4xl mx-auto text-gray-300 font-light leading-relaxed">
              Are you facing severe financial distress? Stop relentless recovery harassment, defend against statutory legal notices, and allow our advocates to negotiate an authorized One Time Settlement (OTS) with {bankName}.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(210,160,42,0.3)] text-sm md:text-lg">
                Get Your Free Case Evaluation Now
              </button>
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-[1600px] py-8">
          <Breadcrumbs items={breadcrumbItems} />

          {/* Mobile App Store Links */}
          <div className="lg:hidden flex flex-col gap-3 mb-6 mt-2">
            <p className="text-sm font-semibold mb-2" style={{ color: "rgba(210, 158, 13, 0.8)" }}>Download Our iOS/Android App</p>
            <div className="flex gap-4">
              <Link href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions" target="_blank" className="hover:opacity-80 transition-opacity">
                <Image src="/newAssets/appstore.svg" alt="Get it on Google Play" width={130} height={36} className="w-[120px] h-auto" />
              </Link>
              <Link href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186" target="_blank" className="hover:opacity-80 transition-opacity">
                <Image src="/newAssets/playstore.svg" alt="Download on App Store" width={130} height={36} className="w-[120px] h-auto" />
              </Link>
            </div>
          </div>

          {/* 3-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr_300px] gap-8 items-start mt-6">
            {/* Left Sidebar - TOC (Desktop) */}
            <div className="hidden lg:block sticky top-24 max-h-[85vh] overflow-y-auto pr-2 custom-scrollbar">
              <TableOfContents sections={tocSections} orientation="vertical" />
            </div>

            {/* Main Content Area */}
            <div className="min-w-0">
              {/* TOC (Mobile) */}
              <div className="lg:hidden mb-6 sticky top-20 z-10">
                <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-5 md:p-10 lg:p-14 rounded-2xl shadow-sm space-y-12 md:space-y-16 border border-gray-100">
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">Understanding Financial Hardship and Debt Defense</h2>
                  <p className="text-base md:text-lg leading-relaxed mb-6 text-gray-700">
                    Falling into a debt cycle is an intensely stressful experience that millions of individuals face due to unforeseen life events—such as sudden medical emergencies, corporate layoffs, business cash-flow disruption, or death of an earning member. Defaulting on debt with <strong>{bankName}</strong> can rapidly escalate if not handled through proper legal channels.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed mb-6 text-gray-700">
                    Defaulting on an unsecured personal loan or credit card is strictly a <strong>civil matter</strong> under Indian contract law. Under no circumstances is it a criminal offense. Borrowers possess constitutional protections under Article 21, reinforced by comprehensive Reserve Bank of India (RBI) Fair Practices Codes.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed text-gray-700">
                    At AMA Legal Solutions, our banking advocates specialize in structuring formal One-Time Settlements with {bankName}, shielding you from unlawful collection tactics while securing maximum financial waivers.
                  </p>
                </section>

                {/* What is a Loan Settlement Section */}
                <section id="what-is-settlement" className="scroll-mt-32 bg-gray-50 p-8 rounded-xl border border-gray-100">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">What Exactly is an OTS with {bankName}?</h2>
                  <p className="text-base md:text-lg leading-relaxed mb-4 text-gray-700">
                    A <strong>One Time Settlement (OTS) for {bankName}</strong> is a formal bilateral compromise wherein the lender agrees to accept a discounted lump-sum payment to close a defaulted loan account permanently.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed text-gray-700">
                    When genuine hardship is demonstrated through structured legal documentation, {bankName} routinely waives 100% of accumulated late fees and penal interest, alongside a 40% to 75% haircut on the core principal balance. Once paid, {bankName} issues an official No Objection Certificate (NOC), extinguishing the debt permanently.
                  </p>
                </section>

                {/* Official Contacts */}
                <section id="official-contacts" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 border-b pb-4">Official Grievance Contacts for {bankName}</h2>
                  <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      All formal statutory communications and settlement proposals must be directed in writing to the authorized Nodal and Grievance officers of {bankName}. Maintaining a verifiable digital paper trail is essential:
                    </p>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-gray-900 uppercase tracking-wide text-sm">Official Corporate Grievance Email Addresses:</h4>
                      {bankData.emails && bankData.emails.length > 0 ? (
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {bankData.emails.map((email: any, idx: any) => (
                            <li key={idx} className="flex items-center bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-100 hover:border-[#D2A02A] transition-colors">
                              <span className="text-[#D2A02A] mr-3 text-xl">✉</span>
                              <a href={`mailto:${email}`} className="text-blue-700 hover:text-blue-900 hover:underline font-medium break-all">{email}</a>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-gray-500 italic p-4 bg-gray-50 rounded border border-gray-100">Official contact registry is being synchronized. Contact our office for immediate escalation details.</p>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mt-6 bg-yellow-50 p-4 rounded-lg border border-yellow-100">
                      <strong>Statutory Remedy:</strong> If {bankName} fails to resolve a recorded complaint within 30 days, the matter is directly escalated to the RBI Banking Ombudsman under the Integrated Ombudsman Scheme, 2021.
                    </p>
                  </div>
                </section>

                {/* Understanding Default */}
                <section id="understanding-default" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">The Lifecycle of a Loan Default</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    Understanding the regulatory classifications of default is critical to timing your settlement negotiations with {bankName}:
                  </p>
                  <ul className="space-y-6">
                    <li className="bg-white border-l-8 border-yellow-400 p-6 shadow-md rounded-r-xl">
                      <h4 className="font-bold text-xl text-gray-900 mb-2">Phase 1: 1 to 90 Days Overdue (SMA-0 to SMA-2)</h4>
                      <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                        Accounts in this bracket are classified as Special Mention Accounts (SMA). Automated reminders and internal recovery calls begin. Banks rarely offer deep haircuts at this stage as they anticipate regularization.
                      </p>
                    </li>
                    <li className="bg-white border-l-8 border-orange-500 p-6 shadow-md rounded-r-xl">
                      <h4 className="font-bold text-xl text-gray-900 mb-2">Phase 2: 90+ Days Overdue (NPA Classification)</h4>
                      <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                        At 90 days of continuous non-payment, {bankName} must classify the account as a Non-Performing Asset (NPA). Lenders often issue loan recall notices. Crucially, this opens the official window for formal OTS negotiations.
                      </p>
                    </li>
                    <li className="bg-white border-l-8 border-red-600 p-6 shadow-md rounded-r-xl">
                      <h4 className="font-bold text-xl text-gray-900 mb-2">Phase 3: 180+ Days Overdue (Written-Off Status)</h4>
                      <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                        To clean quarterly balance sheets, {bankName} may move the debt to \"Written-Off\" status. The debt remains enforceable, but the bank compromise committee has the highest discretionary flexibility to approve maximum waivers of 50% to 75%.
                      </p>
                    </li>
                  </ul>
                </section>

                {/* RBI Guidelines & Rights */}
                <section id="rbi-guidelines" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">{bankProfile.categoryLabel} Regulatory Directives</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {bankProfile.regulatoryOverview}
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 my-6">
                    {bankProfile.coreDirectives.map((d, idx) => (
                      <div key={idx} className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:border-[#D2A02A] transition-all">
                        <h4 className="font-bold text-gray-900 text-lg mb-2 flex items-center">
                          <span className="w-7 h-7 rounded-full bg-[#D2A02A]/20 text-[#D2A02A] text-xs flex items-center justify-center mr-3 font-bold">{idx + 1}</span>
                          {d.title}
                        </h4>
                        <p className="text-sm text-gray-600 leading-relaxed m-0">
                          {d.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Types of Loans Section */}
                <section id="types-of-loans" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Eligible Credit Facilities with {bankName}</h2>
                  <div className="space-y-4 my-6">
                    {bankProfile.debtTypes.map((dt, idx) => (
                      <div key={idx} className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{dt.title}</h3>
                        <p className="text-gray-700 leading-relaxed text-sm md:text-base m-0">{dt.desc}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* The Settlement Process */}
                <section id="settlement-process" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Our 4-Step Settlement Process for {bankName}</h2>
                  <div className="grid md:grid-cols-2 gap-6 my-6">
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                      <div className="w-10 h-10 rounded-full bg-[#D2A02A] text-white flex items-center justify-center font-bold mb-3">1</div>
                      <h4 className="font-bold text-lg text-gray-900 mb-2">Notice of Representation</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">We issue formal legal appearance notices, legally compelling {bankName} to halt collection agent visits and route all communication through our legal team.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                      <div className="w-10 h-10 rounded-full bg-[#2d3748] text-white flex items-center justify-center font-bold mb-3">2</div>
                      <h4 className="font-bold text-lg text-gray-900 mb-2">Hardship Documentation</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">We structure an evidentiary hardship docket (medical records, job loss proof, bank statements) establishing verified inability to service full dues.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                      <div className="w-10 h-10 rounded-full bg-[#2d3748] text-white flex items-center justify-center font-bold mb-3">3</div>
                      <h4 className="font-bold text-lg text-gray-900 mb-2">Direct Committee Advocacy</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">Our advocates negotiate directly with senior recovery committees at {bankName}, stripping away penal interest and securing substantial principal haircuts.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                      <div className="w-10 h-10 rounded-full bg-[#D2A02A] text-white flex items-center justify-center font-bold mb-3">4</div>
                      <h4 className="font-bold text-lg text-gray-900 mb-2">Official Sanction & NOC</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">We authenticate the formal OTS sanction letter on {bankName} letterhead and ensure the prompt delivery of your No Objection Certificate (NOC).</p>
                    </div>
                  </div>
                </section>

                {/* Stopping Harassment */}
                <section id="harassment" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Stopping Unlawful Recovery Harassment</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    If agents representing {bankName} use abusive language, continuous calling, or unannounced residential visits, you have immediate legal remedies under the Bharatiya Nyaya Sanhita (BNS):
                  </p>
                  <div className="bg-red-50 p-8 rounded-2xl border-l-8 border-red-600 shadow-md space-y-4 text-gray-800">
                    <p><strong>1. Audio & Digital Forensics:</strong> Maintain call recordings and WhatsApp transcripts. Under Section 63 BSA (formerly Section 65B), electronic records are admissible evidence.</p>
                    <p><strong>2. Section 351 BNS (Criminal Intimidation):</strong> Threatening physical violence or home disturbance is a cognizable criminal offense.</p>
                    <p><strong>3. Section 356 BNS (Defamation):</strong> Calling employers or neighbors to disclose debt defaults constitutes actionable criminal defamation.</p>
                    <p><strong>4. Formal Legal Representation:</strong> Serving an advocate notice puts {bankName} on notice that unauthorized third-party harassment will trigger direct criminal and regulatory prosecution.</p>
                  </div>
                </section>

                {/* CIBIL Impact */}
                <section id="cibil-impact" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">CIBIL Impact & Post-Settlement Credit Rebuilding</h2>
                  <p className="text-base md:text-lg leading-relaxed mb-4 text-gray-700">
                    A settled account is reported as \"Settled\" to credit bureaus. While this temporarily impacts your credit score, it halts compounding penal debt. Through structured credit rehabilitation—including secured credit cards and on-time utility payments—scores recover within 18 to 24 months.
                  </p>
                </section>

                {/* Why Choose Us */}
                <section id="why-choose-us" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Why Choose AMA Legal Solutions</h2>
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 rounded-xl bg-gray-50 border border-gray-100">
                      <div className="text-4xl mb-3">⚖️</div>
                      <h4 className="font-bold text-lg mb-2">Licensed Advocates</h4>
                      <p className="text-sm text-gray-600">Full standing under the Advocates Act to represent you in court and defend against statutory notices.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 border border-gray-100">
                      <div className="text-4xl mb-3">🛡️</div>
                      <h4 className="font-bold text-lg mb-2">Immediate Protection</h4>
                      <p className="text-sm text-gray-600">We halt aggressive third-party collection calls and doorstep visits within 48 hours.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 border border-gray-100">
                      <div className="text-4xl mb-3">🤝</div>
                      <h4 className="font-bold text-lg mb-2">Maximum Waivers</h4>
                      <p className="text-sm text-gray-600">Direct negotiations with senior bank compromise committees secure optimal haircuts.</p>
                    </div>
                  </div>
                </section>

                {/* Testimonials */}
                <section id="testimonials" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Client Success Experiences with {bankName}</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    {bankProfile.reviews.map((r, idx) => (
                      <div key={idx} className="bg-gray-50 p-6 md:p-8 rounded-xl border border-gray-100 relative">
                        <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">&quot;</div>
                        <p className="text-gray-700 italic mb-4 relative z-10 text-sm md:text-base leading-relaxed">
                          &quot;{r.quote}&quot;
                        </p>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-bold text-gray-900 text-sm">{r.author}</p>
                            <p className="text-xs text-gray-500">{r.profile}</p>
                          </div>
                          <span className="text-xs font-semibold text-[#D2A02A] bg-[#D2A02A]/10 px-3 py-1 rounded-full">★★★★★ 5.0</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* FAQs */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions About {bankName} Settlement</h2>
                  <div className="space-y-6">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 flex items-start">
                          <span className="text-[#D2A02A] mr-3">Q:</span>
                          {faq.question}
                        </h3>
                        <p className="text-gray-700 leading-relaxed pl-7 text-sm md:text-base m-0">
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
                <h3 className="text-lg font-bold text-gray-900 mb-2">Dispute with {bankName}?</h3>
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
                <h4 className="font-bold text-sm text-[#30261C] uppercase tracking-wider mb-2">Legal Privilege</h4>
                <p className="text-xs text-gray-600 leading-relaxed m-0">
                  All discussions and financial reviews are strictly confidential under Section 126 of the Indian Evidence Act.
                </p>
              </div>
            </aside>

          </div>
        </div>
      </div>
    </>
  );
}
