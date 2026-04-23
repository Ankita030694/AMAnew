import React from 'react';
import Link from 'next/link';
import Script from 'next/script';
import Image from 'next/image';
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import GenericStatesGrid from "@/components/GenericStatesGrid";

import { getMatchedExpertise } from '../expertiseData';

export async function generateStaticParams() {
  // Return empty array to support On-Demand Static Generation.
  // This avoids increasing build time while still giving the cost benefits of static files.
  return [];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const matchedExpertise = getMatchedExpertise(resolvedParams.slug) || 
    resolvedParams.slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return {
    title: `Best Lawyers for ${matchedExpertise} | AMA Legal Solutions`,
    description: `Get expert legal consultation and find the top-rated lawyers for ${matchedExpertise}. Connect with AMA Legal Solutions today for professional representation.`,
    alternates: {
      canonical: `https://www.amalegalsolutions.com/lawyer-by-expertise/${resolvedParams.slug}`,
    },
  };
}

export default async function ExpertiseSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const matchedExpertise = getMatchedExpertise(resolvedParams.slug);

  if (!matchedExpertise) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#EBE9E4] text-[#30261C]">
        <div className="text-center">
          <h1 className="text-3xl mb-4 font-medium">Expertise Not Found</h1>
          <Link href="/lawyer-by-expertise" className="text-[#D29E0D] hover:underline">
            ← Back to Directory
          </Link>
        </div>
      </div>
    );
  }

  // Generate dynamic FAQs based on expertise
  const faqs = [
    {
      question: `What legal assistance can I get for ${matchedExpertise}?`,
      answer: `For matters concerning ${matchedExpertise}, our top-rated lawyers provide comprehensive legal support. This includes initial consultation, strategic planning, drafting necessary legal documents, filing petitions, and offering dedicated representation throughout the legal process to protect your rights.`
    },
    {
      question: `Why should I hire a specialized lawyer for ${matchedExpertise}?`,
      answer: `Hiring a specialized legal professional ensures that your case is handled by someone with deep domain knowledge. They understand the specific laws, precedents, and procedures related to ${matchedExpertise}, significantly increasing your chances of a favorable outcome.`
    },
    {
      question: `How long does the legal process take for ${matchedExpertise}?`,
      answer: `The timeline varies depending on the complexity of the specific case, jurisdiction, and the responsiveness of the opposing party. However, our specialized advocates use their expertise to streamline the process, ensuring no unnecessary delays occur while striving for a rapid resolution.`
    },
    {
      question: `What documents do I need to prepare for a consultation?`,
      answer: `Generally, you should bring any correspondence, contracts, notices, or evidence relevant to your case. During your initial consultation regarding ${matchedExpertise}, our lawyers will provide you with a precise checklist of required documents based on your unique situation.`
    },
    {
      question: `How do I engage AMA Legal Solutions for ${matchedExpertise}?`,
      answer: `You can begin by booking a consultation through our website or calling our helpline. Our senior legal team will evaluate your case regarding ${matchedExpertise} and propose a tailored legal strategy.`
    }
  ];

  // Dynamic Schemas
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
        "name": "Lawyer by Expertise",
        "item": "https://www.amalegalsolutions.com/lawyer-by-expertise"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": matchedExpertise,
        "item": `https://www.amalegalsolutions.com/lawyer-by-expertise/${resolvedParams.slug}`
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": `Expert Lawyers for ${matchedExpertise} in India`,
    "description": `Comprehensive legal guide and top-tier advocate services for ${matchedExpertise}. Connect with our expert team for dedicated legal representation.`,
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
    "datePublished": new Date().toISOString().split('T')[0],
    "dateModified": new Date().toISOString().split('T')[0]
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
    "name": `Legal Services for ${matchedExpertise}`,
    "image": "https://www.amalegalsolutions.com/services/3.png",
    "description": `Expert legal representation for ${matchedExpertise} in India.`,
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
          "name": "Verified Client"
        },
        "reviewBody": `AMA Legal Solutions provided exceptional service. Their expertise in ${matchedExpertise.toLowerCase()} was evident from day one, and they achieved a favorable outcome much faster than anticipated.`
      }
    ]
  };

  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "what-we-do", title: `What We Do` },
    { id: "why-specialized", title: "Why Specialized Lawyers?" },
    { id: "our-approach", title: "Our Approach" },
    { id: "why-choose-us", title: "Why Choose Us" },
    { id: "testimonials", title: "Success Stories" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Lawyer by Expertise", href: "/lawyer-by-expertise" },
    { label: matchedExpertise, href: `/lawyer-by-expertise/${resolvedParams.slug}` },
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
            <h1 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight mt-10">
              Get Expert Legal Representation for <br className="hidden md:block" />
              <span className="text-[#D2A02A]">{matchedExpertise}</span>
            </h1>
            <p className="text-sm md:text-xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-200">
              Top-rated advocates to manage your legal challenges with precision, ethical representation, and proven strategies designed to win.
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
            <p className="text-sm font-semibold mb-2" style={{ color: 'rgba(210, 158, 13, 0.8)' }}>Download Our iOS/Android App</p>
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
          
          {/* 3-Column Layout exactly like Loan Settlement */}
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

              <div className="bg-white p-3 md:p-12 rounded-2xl shadow-sm space-y-6 md:space-y-12 border border-gray-100">
                
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Understanding Your Legal Rights</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    Navigating the complexities of the Indian legal system can be a daunting task, especially when dealing with nuanced matters such as <strong>{matchedExpertise.toLowerCase()}</strong>. Without proper legal guidance, you risk making procedural mistakes or accepting terms that could severely impact your financial or personal well-being.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    At AMA Legal Solutions, we bridge the gap between complex legal statutes and your specific situation. Our dedicated team of top-tier attorneys possesses comprehensive domain knowledge, ensuring that every facet of your case is analyzed with supreme precision to deliver the best possible relief and remedy.
                  </p>
                </section>

                {/* What We Do */}
                <section id="what-we-do" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">How We Help with {matchedExpertise}</h2>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 md:p-6 mb-4 md:mb-8 rounded-r-lg">
                    <p className="text-sm md:text-lg text-blue-900 italic">
                      "A proactive legal strategy is the difference between a protracted dispute and a swiftly resolved matter."
                    </p>
                  </div>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Whether you are an individual pursuing justice, a corporate entity managing compliance, or someone facing unwarranted litigation, our strategic intervention in matters related to {matchedExpertise.toLowerCase()} is designed to give you an upper hand. We focus intensely on protecting our clients from extended litigation traps.
                  </p>
                </section>

                {/* Why Specialized Lawyers */}
                <section id="why-specialized" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why You Need a Specialized Attorney</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-200 rounded-lg overflow-hidden">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="p-4 text-left border-b border-gray-200 text-green-700 w-1/2">With Specialized Counsel</th>
                          <th className="p-4 text-left border-b border-gray-200 text-red-700 w-1/2">Without Specialized Counsel</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-100">
                          <td className="p-4 align-top">
                            <ul className="list-disc pl-4 space-y-2 text-gray-700">
                              <li>Deep understanding of the exact area of law.</li>
                              <li>Faster resolution time due to experience.</li>
                              <li>Protection against aggressive opposing counsel.</li>
                              <li>Clear, actionable, pre-litigation strategies.</li>
                            </ul>
                          </td>
                          <td className="p-4 align-top bg-gray-50">
                            <ul className="list-disc pl-4 space-y-2 text-gray-700">
                              <li>Risk of missing critical limitation periods.</li>
                              <li>Procedural mistakes that invalidate the case.</li>
                              <li>Potential for heavy financial losses or penalties.</li>
                              <li>Unnecessary stress and prolonged court battles.</li>
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* Our Process */}
                <section id="our-approach" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Our 4-Step Legal Approach</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We employ a systematic methodology for every case involving {matchedExpertise.toLowerCase()} to guarantee that no stone is left unturned.
                  </p>
                  
                  <div className="space-y-8">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">1</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Case Evaluation</h3>
                        <p className="text-gray-700 leading-relaxed">
                          A comprehensive audit of your facts, documents, and current standing. We outline the strengths, weaknesses, and potential pitfalls of your situation.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">2</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Strategic Planning</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Drafting the optimal legal pathway. Whether it is negotiation, arbitration, mediation, or hard-hitting litigation in the courts, we prepare the blueprint.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">3</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Action & Representation</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Filing the necessary petitions, notices, or replies. We serve as your unyielding shield and spear in tribunals, high courts, or at the negotiation table.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">4</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Final Closure</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Securing the final order, settlement deed, or closure report to ensure you are legally protected from all future liabilities associated with the dispute.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Why Choose Us */}
                <section id="why-choose-us" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why AMA Legal Solutions?</h2>
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">⚖️</div>
                      <h3 className="font-bold text-xl mb-2">Legal Authority</h3>
                      <p className="text-gray-600">Expert litigators capable of representing you at all levels of the judiciary.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🛡️</div>
                      <h3 className="font-bold text-xl mb-2">Complete Protection</h3>
                      <p className="text-gray-600">We shield you from hostile opposing parties, ensuring your peace of mind.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🤝</div>
                      <h3 className="font-bold text-xl mb-2">Unwavering Ethics</h3>
                      <p className="text-gray-600">No hidden fees, full transparency, and attorneys who truly care about your success.</p>
                    </div>
                  </div>
                </section>

                {/* Testimonials / Review Snippets */}
                <section id="testimonials" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Client Success Stories</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative shadow-sm">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "AMA Legal Solutions provided exceptional service. Their expertise in {matchedExpertise.toLowerCase()} was evident from day one, and they achieved a favorable outcome much faster than anticipated."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-[#D2A02A]/20 rounded-full flex items-center justify-center text-[#D2A02A] font-bold mr-3">V</div>
                        <div>
                          <p className="font-bold text-gray-900 flex items-center gap-2">Verified Client <span className="text-yellow-400 text-sm">★★★★★</span></p>
                          <p className="text-sm text-gray-500">Corporate Professional</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative shadow-sm">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "I was highly stressed due to complex legal notices. The legal team immediately took charge, provided a robust strategy for my case, and resolved the matter completely. Highly recommended!"
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-[#D2A02A]/20 rounded-full flex items-center justify-center text-[#D2A02A] font-bold mr-3">A</div>
                        <div>
                          <p className="font-bold text-gray-900 flex items-center gap-2">Anonymous User <span className="text-yellow-400 text-sm">★★★★★</span></p>
                          <p className="text-sm text-gray-500">Business Owner</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* FAQs */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
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

                {/* Final CTA */}
                <section className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] rounded-xl md:rounded-3xl p-6 md:p-16 text-center text-white relative overflow-hidden">
                  <div className="relative z-10">
                    <h2 className="text-xl md:text-4xl font-bold mb-4 md:mb-6 leading-snug">
                      Ready to resolve issues related to <br className="hidden md:block" />
                      <span className="text-[#D2A02A]">{matchedExpertise}</span>?
                    </h2>
                    <p className="text-sm md:text-xl opacity-90 mb-6 md:mb-10 max-w-2xl mx-auto">
                      Do not delay. Secure expert legal representation today and protect your rights.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                      <Link href="/contact">
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg w-full sm:w-auto">
                          Book Consultation
                        </button>
                      </Link>
                      <a href="tel:+918700343611">
                        <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-6 md:py-4 md:px-12 rounded-full transition-all text-sm md:text-lg w-full sm:w-auto">
                          Call: +91-8700343611
                        </button>
                      </a>
                    </div>
                  </div>
                </section>

              </div>
            </div>

            {/* Sidebar (Right) */}
            <div className="hidden lg:block space-y-8 sticky top-24">
              {/* Contact Card */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Get Expert Help Fast</h3>
                <p className="text-gray-600 mb-6 text-sm">
                  Speak directly to our specialized attorneys to discuss your case freely.
                </p>
                <a 
                  href="tel:+918700343611" 
                  className="block w-full bg-[#D2A02A] text-white text-center py-3 rounded-lg font-semibold hover:bg-[#b88a22] transition-colors mb-4"
                >
                  Call +91-8700343611
                </a>
                <Link 
                  href="/contact" 
                  className="block w-full border border-[#D2A02A] text-[#D2A02A] text-center py-3 rounded-lg font-semibold hover:bg-[#D2A02A] hover:text-white transition-colors"
                >
                  Request Callback
                </Link>
              </div>

              {/* Quick Links */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Related Services</h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link href="/services/loan-settlement" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                      <span className="mr-2">›</span> Loan Settlement
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/civil" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                      <span className="mr-2">›</span> Civil Litigation
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/arbitration" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                      <span className="mr-2">›</span> Arbitration
                    </Link>
                  </li>
                </ul>
                
                {/* App Store Links */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <p className="text-sm font-semibold mb-3" style={{ color: 'rgba(210, 158, 13, 0.8)' }}>Download Our App</p>
                  <div className="flex flex-col gap-3">
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
                        className="w-full h-auto max-w-[130px]"
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
                        className="w-full h-auto max-w-[130px]"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
          
          {/* States Grid at the bottom */}
          <div className="mt-16">
            <GenericStatesGrid 
              serviceName={matchedExpertise} 
              servicePath={`lawyer-by-expertise/${resolvedParams.slug}`} 
            />
          </div>

        </div>
      </div>
    </>
  );
}
