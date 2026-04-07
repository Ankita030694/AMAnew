import React from 'react';
import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import Script from 'next/script';
import Image from 'next/image';
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import GenericStatesGrid from "@/components/GenericStatesGrid";

const slugify = (text: string) => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
};

type ExpertiseCategory = {
  category: string;
  items: string[];
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const dataPath = path.join(process.cwd(), "src/app/expertise/expertiseData.json");
  const rawData = fs.readFileSync(dataPath, "utf-8");
  const groupedData: ExpertiseCategory[] = JSON.parse(rawData);
  
  let matchedExpertise = "";
  for (const group of groupedData) {
    const found = group.items.find((e: string) => slugify(e) === resolvedParams.slug);
    if (found) {
      matchedExpertise = found;
      break;
    }
  }

  if (!matchedExpertise) {
    matchedExpertise = resolvedParams.slug.split('-').map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }

  return {
    title: `Expert ${matchedExpertise} Associates | AMA Legal Solutions`,
    description: `Discover premier legal guidance for ${matchedExpertise}. AMA Legal Solutions offers specialized advocates to secure your rights and resolve your cases efficiently.`,
    alternates: {
      canonical: `https://www.amalegalsolutions.com/expertise/${resolvedParams.slug}`,
    },
  };
}

export default async function ExpertiseSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const dataPath = path.join(process.cwd(), "src/app/expertise/expertiseData.json");
  const rawData = await fs.promises.readFile(dataPath, "utf-8");
  const groupedData: ExpertiseCategory[] = JSON.parse(rawData);
  
  let matchedExpertise = "";
  let matchedCategory = "";

  for (const group of groupedData) {
    const found = group.items.find((e: string) => slugify(e) === resolvedParams.slug);
    if (found) {
      matchedExpertise = found;
      matchedCategory = group.category;
      break;
    }
  }

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

  // Generate dynamic FAQs based on expertise
  const faqs = [
    {
      question: `What makes AMA Legal Solutions the right choice for ${matchedExpertise}?`,
      answer: `Our dedicated focus on ${matchedExpertise} ensures that our legal strategies are highly specific to your situation. We bring years of targeted experience to swiftly navigate the complexities surrounding your case.`
    },
    {
      question: `Can I resolve my ${matchedExpertise} issue without going to court?`,
      answer: `Yes, in many instances, aggressive pre-litigation strategies, precise legal notices, or mediation can resolve matters related to ${matchedExpertise} without requiring a prolonged court battle. Our initial objective is always a swift resolution.`
    },
    {
      question: `What are the typical costs associated with ${matchedExpertise}?`,
      answer: `Costs can vary significantly depending on the intricacies of the matter. During your initial consultation, we will assess your ${matchedExpertise} case and provide a transparent fee structure without any hidden charges.`
    },
    {
      question: `How should I prepare for my first meeting regarding ${matchedExpertise}?`,
      answer: `Please gather all relevant communications, agreements, notices, and historical facts. A comprehensively prepared timeline regarding your ${matchedExpertise} issue helps our attorneys build a stronger foundation immediately.`
    },
    {
      question: `What regions do you cover for ${matchedExpertise}?`,
      answer: `While our headquarters are prominently located, our network of specialized attorneys handles ${matchedExpertise} matters pan-India, ensuring you receive top-tier representation regardless of your jurisdiction.`
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
        "name": "Expertise",
        "item": "https://www.amalegalsolutions.com/expertise"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": matchedCategory,
        "item": "https://www.amalegalsolutions.com/expertise" // Links to the directory for categorized view
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
    "description": `Expert legal representation for ${matchedExpertise} in India under the ${matchedCategory} sector.`,
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
    { id: "overview", title: "Overview" },
    { id: "our-services", title: `Our Services` },
    { id: "the-ama-advantage", title: "The AMA Advantage" },
    { id: "workflow", title: "How We Work" },
    { id: "why-ama", title: "Why Rely On Us" },
    { id: "client-reviews", title: "Client Reviews" },
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
            <h1 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight mt-10">
              Specialized Legal Solutions for <br className="hidden md:block" />
              <span className="text-[#D2A02A]">{matchedExpertise}</span>
            </h1>
            <p className="text-sm md:text-xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-200">
              Empower your legal journey with industry-leading attorneys who prioritize your rights, deliver clear strategies, and ensure optimal outcomes.
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
                
                {/* Overview */}
                <section id="overview" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Comprehensive Legal Overview</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    Legal challenges involving <strong>{matchedExpertise.toLowerCase()}</strong> require more than just a basic understanding of the law. They require tactical foresight, meticulous preparation, and a robust defense mechanism to prevent exploitation and safeguard your future.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    AMA Legal Solutions is committed to providing elite legal support tailored to the unique dimensions of your case. Our specialized counsel deeply investigates the nuances of your situation, ensuring every regulatory requirement and strategic advantage is fully leveraged.
                  </p>
                </section>

                {/* Our Services */}
                <section id="our-services" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Dedicated Services in {matchedExpertise}</h2>
                  <div className="bg-amber-50 border-l-4 border-amber-500 p-4 md:p-6 mb-4 md:mb-8 rounded-r-lg">
                    <p className="text-sm md:text-lg text-amber-900 italic">
                      "Precision in preparation translates to victory in execution."
                    </p>
                  </div>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    We offer highly focused legal assistance tailored exclusively to {matchedExpertise.toLowerCase()}. By isolating the core issues of your dispute or requirement, we draft precision-based agreements, highly effective notices, and unassailable litigation strategies aimed at achieving your objectives efficiently.
                  </p>
                </section>

                {/* The AMA Advantage */}
                <section id="the-ama-advantage" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">The AMA Advantage</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-200 rounded-lg overflow-hidden">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="p-4 text-left border-b border-gray-200 text-blue-800 w-1/2">With AMA Solutions</th>
                          <th className="p-4 text-left border-b border-gray-200 text-gray-600 w-1/2">Standard Approach</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-100">
                          <td className="p-4 align-top">
                            <ul className="list-disc pl-4 space-y-2 text-gray-700">
                              <li>Highly targeted domain expertise.</li>
                              <li>Transparent, stage-wise procedural updates.</li>
                              <li>Fierce advocacy protecting client liberties.</li>
                              <li>Meticulous documentation preventing loopholes.</li>
                            </ul>
                          </td>
                          <td className="p-4 align-top bg-gray-50">
                            <ul className="list-disc pl-4 space-y-2 text-gray-700">
                              <li>Generalized legal advice without depth.</li>
                              <li>Lack of communication and slow progress.</li>
                              <li>Vulnerability to aggressive opposition tactics.</li>
                              <li>High probability of procedural technical errors.</li>
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* Workflow */}
                <section id="workflow" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">How We Work</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    Navigating {matchedExpertise.toLowerCase()} requires a structured, step-by-step resolution model. Here is our roadmap to success:
                  </p>
                  
                  <div className="space-y-8">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#30261C] rounded-full flex items-center justify-center text-[#D2A02A] text-2xl font-bold">I</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Initial Consultation & Fact-Finding</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We meticulously review your case history, current evidence, and desired objectives to form a solid factual foundation.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#30261C] rounded-full flex items-center justify-center text-[#D2A02A] text-2xl font-bold">II</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Formulating the Legal Strategy</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Our seasoned attorneys identify the most efficient legal mechanisms, mitigating risks while maximizing your advantage.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#30261C] rounded-full flex items-center justify-center text-[#D2A02A] text-2xl font-bold">III</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Execution & Advocacy</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Swift execution through appropriate legal channels—be it robust negotiation drafting or presenting decisive arguments before the bench.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#30261C] rounded-full flex items-center justify-center text-[#D2A02A] text-2xl font-bold">IV</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Resolution & Compliance</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Ensuring the final resolution is fully binding, successfully implemented, and fully shields you from post-resolution discrepancies.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Why Rely On Us */}
                <section id="why-ama" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Rely On Us?</h2>
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                      <div className="text-4xl mb-4">🏆</div>
                      <h3 className="font-bold text-xl mb-2">Proven Track Record</h3>
                      <p className="text-gray-600">A consistent history of favorable judgments and successful settlements across multiple jurisdictions.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                      <div className="text-4xl mb-4">🔒</div>
                      <h3 className="font-bold text-xl mb-2">Strict Confidentiality</h3>
                      <p className="text-gray-600">Your data, strategies, and personal discussions are guarded with standard-setting privacy.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                      <div className="text-4xl mb-4">💡</div>
                      <h3 className="font-bold text-xl mb-2">Innovative Solutions</h3>
                      <p className="text-gray-600">We utilize lateral thinking and contemporary legal precedents to outmaneuver the opposition.</p>
                    </div>
                  </div>
                </section>

                {/* Client Reviews */}
                <section id="client-reviews" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">What Our Clients Say</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative shadow-sm">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "The level of professionalism at AMA Legal Solutions is unmatched. They handled my {matchedExpertise.toLowerCase()} issues brilliantly, securing an outcome that protected my long-term interests."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-[#30261C] rounded-full flex items-center justify-center text-[#D2A02A] font-bold mr-3">M</div>
                        <div>
                          <p className="font-bold text-gray-900 flex items-center gap-2">Verified Client <span className="text-yellow-400 text-sm">★★★★★</span></p>
                          <p className="text-sm text-gray-500">Executive Consultant</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative shadow-sm">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "When I needed urgent assistance regarding specific compliance matters, the attorneys practically took over everything and delivered a flawless resolution. Outstanding experience."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-[#30261C] rounded-full flex items-center justify-center text-[#D2A02A] font-bold mr-3">P</div>
                        <div>
                          <p className="font-bold text-gray-900 flex items-center gap-2">Anonymous User <span className="text-yellow-400 text-sm">★★★★★</span></p>
                          <p className="text-sm text-gray-500">Entrepreneur</p>
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
              servicePath={`expertise/${resolvedParams.slug}`} 
            />
          </div>

        </div>
      </div>
    </>
  );
}
