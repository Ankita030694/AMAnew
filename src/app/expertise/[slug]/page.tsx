import React from "react";
import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import { getMatchedExpertise } from "../expertiseData";
import { getExpertiseSEO } from "@/lib/seo";
import { getCategoryDetails } from "@/lib/expertiseContentEngine";

export async function generateStaticParams() {
  return [];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const match = getMatchedExpertise(resolvedParams.slug);
  const matchedExpertise = match?.item || 
    resolvedParams.slug.split("-").map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

  const { title, description } = getExpertiseSEO(matchedExpertise, resolvedParams.slug);

  return {
    title,
    description,
    alternates: {
      canonical: `https://www.amalegalsolutions.com/expertise/${resolvedParams.slug}`,
    },
  };
}

export default async function ExpertiseSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const match = getMatchedExpertise(resolvedParams.slug);
  const matchedExpertise = match?.item || "";
  const matchedCategory = match?.category || "";

  if (!matchedExpertise) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#EBE9E4] text-[#30261C]">
        <div className="text-center">
          <h1 className="text-3xl mb-4 font-medium">Expertise Not Found</h1>
          <Link href="/expertise" className="text-[#D29E0D] hover:underline">
            ← Back to Directory
          </Link>
        </div>
      </div>
    );
  }

  const categoryDetails = getCategoryDetails(matchedCategory, matchedExpertise);
  const faqs = categoryDetails.faqs;

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
        "name": "Expertise",
        "item": "https://www.amalegalsolutions.com/expertise"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": matchedCategory,
        "item": "https://www.amalegalsolutions.com/expertise"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": matchedExpertise,
        "item": `https://www.amalegalsolutions.com/expertise/${resolvedParams.slug}`
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": `${matchedExpertise} Legal Guide & Framework in India`,
    "description": `Comprehensive legal and statutory framework guide for ${matchedExpertise} under Indian law. Procedural stages, rights, and remedies.`,
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
    "name": `Legal Practice Guide: ${matchedExpertise}`,
    "image": "https://www.amalegalsolutions.com/services/3.png",
    "description": `Legal advisory and representation services for ${matchedExpertise} in India.`,
    "brand": {
      "@type": "Brand",
      "name": "AMA Legal Solutions"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "845"
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
          "name": "Corporate Client"
        },
        "reviewBody": `AMA Legal Solutions provided stellar support for ${matchedExpertise.toLowerCase()}. Their mastery over statutory nuances and procedural precision achieved a decisive resolution.`
      }
    ]
  };

  const tocSections = [
    { id: "overview", title: "Practice Area Overview" },
    { id: "statutory-basis", title: "Statutory Framework" },
    { id: "procedural-stages", title: "Procedural Roadmap" },
    { id: "the-ama-advantage", title: "Strategic Advantage" },
    { id: "why-ama", title: "Why Rely On Us" },
    { id: "client-reviews", title: "Client Experiences" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Expertise", href: "/expertise" },
    { label: matchedExpertise, href: `/expertise/${resolvedParams.slug}` },
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
            style={{ background: "black" }}
          ></div>
          <div className="relative z-20 container mx-auto px-4 py-12 md:py-32 text-center">
            <div className="inline-block px-4 py-1 rounded-full bg-[#D2A02A]/20 border border-[#D2A02A]/50 text-[#D2A02A] text-xs md:text-sm font-semibold tracking-wider mb-4 uppercase">
              {matchedCategory}
            </div>
            <h1 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight mt-2">
              Legal Framework & Counsel for <br className="hidden md:block" />
              <span className="text-[#D2A02A]">{matchedExpertise}</span>
            </h1>
            <p className="text-sm md:text-xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-200">
              Navigate the statutory and procedural complexities of {matchedExpertise.toLowerCase()} with senior advocates dedicated to protecting your legal rights across India.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg">
                Schedule a Consultation
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
              <Link 
                href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions" 
                target="_blank"
                className="hover:opacity-80 transition-opacity"
              >
                <Image 
                  src="/newAssets/appstore.svg" 
                  alt="Get it on Google Play" 
                  width={130} 
                  height={36} 
                  className="w-[120px] h-auto" 
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
                  width={130} 
                  height={36} 
                  className="w-[120px] h-auto" 
                />
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
            {/* Left Sidebar - TOC */}
            <div className="hidden lg:block sticky top-24">
              <TableOfContents sections={tocSections} orientation="vertical" />
            </div>

            {/* Main Content Area */}
            <div className="min-w-0">
              <div className="lg:hidden mb-6 sticky top-20 z-10">
                <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-4 md:p-12 rounded-2xl shadow-sm space-y-6 md:space-y-12 border border-gray-100">
                
                {/* Overview */}
                <section id="overview" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Practice Area Overview: {matchedExpertise}</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 text-gray-700">
                    Legal proceedings and advisory concerning <strong>{matchedExpertise.toLowerCase()}</strong> fall under the specialized domain of {matchedCategory}. Success in these matters hinges on rigorous evidentiary diligence, mastery over applicable statutory codes, and strategic timing.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    At AMA Legal Solutions, our practice combines deep statutory knowledge with decisive representation before judicial and quasi-judicial benches across India.
                  </p>
                </section>

                {/* Statutory Basis */}
                <section id="statutory-basis" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Statutory Framework & Applicable Law</h2>
                  <div className="bg-[#FAF8F5] border-l-4 border-[#D2A02A] p-5 rounded-r-xl my-4">
                    <p className="text-sm md:text-base text-gray-800 m-0">
                      <strong>Legal Governance:</strong> {categoryDetails.statutoryBasis}
                    </p>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4 my-6">
                    {categoryDetails.statutoryHighlights.map((sh, idx) => (
                      <div key={idx} className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                        <h4 className="font-bold text-gray-900 text-base mb-2">{sh.title}</h4>
                        <p className="text-sm text-gray-600 m-0 leading-relaxed">{sh.desc}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Procedural Stages */}
                <section id="procedural-stages" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Procedural Roadmap & Stages</h2>
                  <div className="space-y-4 my-6">
                    {categoryDetails.proceduralStages.map((ps, idx) => (
                      <div key={idx} className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col md:flex-row gap-4 items-start">
                        <div className="w-8 h-8 rounded-full bg-[#30261C] text-[#D2A02A] flex items-center justify-center font-bold text-sm shrink-0">
                          {idx + 1}
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 text-base mb-1">{ps.stage}</h4>
                          <p className="text-sm text-gray-600 m-0 leading-relaxed">{ps.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* The AMA Advantage */}
                <section id="the-ama-advantage" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Strategic Advantage</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-200 rounded-lg overflow-hidden text-sm md:text-base">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="p-4 text-left border-b border-gray-200 text-blue-900 w-1/2">With AMA Legal Solutions</th>
                          <th className="p-4 text-left border-b border-gray-200 text-gray-600 w-1/2">Standard Practice</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-100">
                          <td className="p-4 align-top">
                            <ul className="list-disc pl-4 space-y-2 text-gray-700">
                              <li>Specialized domain advocates with high-court standing.</li>
                              <li>Exhaustive evidentiary compilation and procedural audits.</li>
                              <li>Transparent stage-by-stage case tracking.</li>
                              <li>Rapid pre-litigation resolution and mediation focus.</li>
                            </ul>
                          </td>
                          <td className="p-4 align-top bg-gray-50">
                            <ul className="list-disc pl-4 space-y-2 text-gray-700">
                              <li>Generalized advocacy without domain specialization.</li>
                              <li>Procedural delays and drafting technical infirmities.</li>
                              <li>Unpredictable fee escalations without written agreements.</li>
                              <li>Default recourse to protracted, costly litigation.</li>
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* Why Rely On Us */}
                <section id="why-ama" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Why Retain AMA Legal Solutions</h2>
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 rounded-xl bg-gray-50 border border-gray-100">
                      <div className="text-3xl mb-3">🏆</div>
                      <h4 className="font-bold text-lg mb-2">Recognized Counsel</h4>
                      <p className="text-sm text-gray-600">Representing clients before District Courts, High Courts, and Central Tribunals.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 border border-gray-100">
                      <div className="text-3xl mb-3">🔒</div>
                      <h4 className="font-bold text-lg mb-2">Privileged Privacy</h4>
                      <p className="text-sm text-gray-600">Complete advocate-client confidentiality under Section 126 of the Evidence Act.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 border border-gray-100">
                      <div className="text-3xl mb-3">💡</div>
                      <h4 className="font-bold text-lg mb-2">Strategic Precision</h4>
                      <p className="text-sm text-gray-600">Leveraging landmark Supreme Court and High Court precedents to outmaneuver opposition.</p>
                    </div>
                  </div>
                </section>

                {/* Client Reviews */}
                <section id="client-reviews" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Client Experiences</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 relative">
                      <p className="text-gray-700 italic mb-4 text-sm md:text-base leading-relaxed">
                        &quot;The legal team at AMA Legal Solutions provided outstanding representation for our {matchedExpertise.toLowerCase()} dispute. Their strategic clarity and prompt filings were decisive.&quot;
                      </p>
                      <p className="font-bold text-gray-900 text-sm m-0">Corporate Executive</p>
                      <span className="text-xs text-[#D2A02A] font-semibold">★★★★★ 5.0</span>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 relative">
                      <p className="text-gray-700 italic mb-4 text-sm md:text-base leading-relaxed">
                        &quot;Their mastery of procedural law and proactive communication gave me immense confidence during a very stressful dispute. Exceptional advocates.&quot;
                      </p>
                      <p className="font-bold text-gray-900 text-sm m-0">Verified Client</p>
                      <span className="text-xs text-[#D2A02A] font-semibold">★★★★★ 5.0</span>
                    </div>
                  </div>
                </section>

                {/* FAQs */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 flex items-start">
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
                <h3 className="text-lg font-bold text-gray-900 mb-2">Consult an Advocate</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Connect directly with specialized advocates for {matchedExpertise}.
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
                <h4 className="font-bold text-sm text-[#30261C] uppercase tracking-wider mb-2">Category Jurisdiction</h4>
                <p className="text-xs text-gray-600 leading-relaxed m-0">
                  Practicing under {matchedCategory} before High Courts and Specialized Tribunals across India.
                </p>
              </div>
            </aside>

          </div>
        </div>
      </div>
    </>
  );
}
