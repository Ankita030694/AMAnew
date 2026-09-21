import React from "react";
import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import { getMatchedExpertise } from "../expertiseData";
import { getExpertiseSEO } from "@/lib/seo";

export const revalidate = 86400;

export async function generateStaticParams() {
  return [];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const matchedExpertise = getMatchedExpertise(resolvedParams.slug) || 
    resolvedParams.slug.split("-").map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

  const { title, description } = getExpertiseSEO(matchedExpertise, resolvedParams.slug);

  return {
    title,
    description,
    alternates: {
      canonical: `https://www.amalegalsolutions.com/lawyer-by-expertise/${resolvedParams.slug}`,
    },
  };
}

export default async function LawyerByExpertiseSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const matchedExpertise = getMatchedExpertise(resolvedParams.slug) ||
    resolvedParams.slug.split("-").map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

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

  const faqs = [
    {
      question: `Why do I need a specialized advocate for ${matchedExpertise}?`,
      answer: `Legal disputes concerning ${matchedExpertise} require specific procedural expertise and familiarity with judicial bench precedents. A specialized advocate understands how to frame pleadings, structure evidence, and present arguments to maximize your legal advantage.`
    },
    {
      question: `What is the procedure for hiring an advocate for ${matchedExpertise}?`,
      answer: `The process begins with a confidential case evaluation where we review your documents, assess legal risks, and outline a tailored roadmap. Upon signing the Vakalatnama and retainer, our advocates assume full representation.`
    },
    {
      question: `Can my ${matchedExpertise} case be resolved through pre-litigation settlement?`,
      answer: `Yes, in many situations, drafting a structured statutory legal notice or conducting strategic conciliation achieves a prompt resolution without the delays and expenses of a full court trial.`
    },
    {
      question: `What documents should I provide during the first case evaluation?`,
      answer: `Provide all relevant contracts, agreements, official correspondences, court summons, and evidence logs. A complete chronological dossier allows our advocates to identify key defenses immediately.`
    },
    {
      question: `Does AMA Legal Solutions represent clients pan-India for ${matchedExpertise}?`,
      answer: `Yes, our legal network represents clients across District Courts, High Courts, and Central Tribunals throughout India, providing seamless litigation support.`
    }
  ];

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
    "headline": `Hire Top Advocates for ${matchedExpertise} in India | Legal Representation`,
    "description": `Connect with experienced lawyers and advocates for ${matchedExpertise}. Court representation, notice drafting, and litigation defense across India.`,
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
    "name": `Advocate Representation for ${matchedExpertise}`,
    "image": "https://www.amalegalsolutions.com/services/3.png",
    "description": `Professional advocate representation and litigation defense for ${matchedExpertise} in India.`,
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
          "name": "Retained Client"
        },
        "reviewBody": `AMA Legal Solutions handled our representation in ${matchedExpertise.toLowerCase()} with tremendous vigor and clinical precision. The courtroom advocacy was top-notch.`
      }
    ]
  };

  const tocSections = [
    { id: "representation-overview", title: "Representation Overview" },
    { id: "court-advocacy", title: "Courtroom Advocacy & Defense" },
    { id: "notice-drafting", title: "Notice Drafting & Pre-Litigation" },
    { id: "retainer-process", title: "Retainer & Engagement Model" },
    { id: "why-choose-ama", title: "Why Choose AMA Legal" },
    { id: "client-feedback", title: "Client Testimonials" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Lawyer by Expertise", href: "/lawyer-by-expertise" },
    { label: matchedExpertise, href: `/lawyer-by-expertise/${resolvedParams.slug}` },
  ];

  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      

      <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
        <div className="relative bg-[#1a202c] text-white">
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          <div className="absolute inset-0 bg-cover bg-center z-0" style={{ background: "black" }}></div>
          <div className="relative z-20 container mx-auto px-4 py-12 md:py-32 text-center">
            <h1 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight mt-10">
              Hire Dedicated Advocates for <br className="hidden md:block" />
              <span className="text-[#D2A02A]">{matchedExpertise}</span>
            </h1>
            <p className="text-sm md:text-xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-200">
              Retain senior litigation lawyers and legal counsel with proven courtroom experience in managing complex {matchedExpertise.toLowerCase()} disputes across India.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg">
                Request a Case Evaluation
              </button>
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-[1600px] py-8">
          <Breadcrumbs items={breadcrumbItems} />

          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start mt-6">
            <div className="hidden lg:block sticky top-24">
              <TableOfContents sections={tocSections} orientation="vertical" />
            </div>

            <div className="min-w-0">
              <div className="lg:hidden mb-6 sticky top-20 z-10">
                <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-4 md:p-12 rounded-2xl shadow-sm space-y-6 md:space-y-12 border border-gray-100">
                
                {/* Representation Overview */}
                <section id="representation-overview" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Advocate Representation for {matchedExpertise}</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 text-gray-700">
                    Navigating disputes or regulatory compliance involving <strong>{matchedExpertise.toLowerCase()}</strong> demands active, strategic legal representation. Engaging qualified legal counsel ensures that your constitutional rights and commercial interests are vigorously safeguarded.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    AMA Legal Solutions provides end-to-end advocacy—from issuing statutory legal notices to arguing petitions before judicial benches across India.
                  </p>
                </section>

                {/* Courtroom Advocacy */}
                <section id="court-advocacy" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Courtroom Advocacy & Defense Protocol</h2>
                  <div className="grid md:grid-cols-2 gap-4 my-6">
                    <div className="p-5 bg-[#FAF8F5] rounded-xl border border-gray-200">
                      <h4 className="font-bold text-gray-900 text-base mb-2">Interim Injunctions & Emergency Relief</h4>
                      <p className="text-sm text-gray-600 m-0">Securing urgent stay orders, temporary injunctions, or bail protections to prevent irreversible prejudice.</p>
                    </div>
                    <div className="p-5 bg-[#FAF8F5] rounded-xl border border-gray-200">
                      <h4 className="font-bold text-gray-900 text-base mb-2">Pleadings & Evidentiary Scrutiny</h4>
                      <p className="text-sm text-gray-600 m-0">Drafting bulletproof plaints, written statements, and affidavits that leave zero procedural loopholes for opposing counsel.</p>
                    </div>
                  </div>
                </section>

                {/* Notice Drafting */}
                <section id="notice-drafting" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Statutory Legal Notices & Responses</h2>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    A well-crafted legal notice forms the foundation of any litigation. Our advocates draft precise, demand-backed notices that clearly delineate cause of action, statutory violations, and time-bound requisitions, frequently compelling the opposing party to settle matters out of court.
                  </p>
                </section>

                {/* Retainer Process */}
                <section id="retainer-process" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Our 4-Step Retainer & Advocacy Model</h2>
                  <div className="space-y-4 my-6">
                    <div className="p-5 bg-white border border-gray-200 rounded-xl shadow-sm flex items-start gap-4">
                      <span className="w-8 h-8 rounded-full bg-[#D2A02A] text-white flex items-center justify-center font-bold text-sm shrink-0">1</span>
                      <div>
                        <h4 className="font-bold text-gray-900 text-base mb-1">Confidential Strategy Session</h4>
                        <p className="text-sm text-gray-600 m-0">In-depth assessment of dispute records, evidentiary strengths, and legal remedies.</p>
                      </div>
                    </div>
                    <div className="p-5 bg-white border border-gray-200 rounded-xl shadow-sm flex items-start gap-4">
                      <span className="w-8 h-8 rounded-full bg-[#2d3748] text-white flex items-center justify-center font-bold text-sm shrink-0">2</span>
                      <div>
                        <h4 className="font-bold text-gray-900 text-base mb-1">Pleadings & Dossier Preparation</h4>
                        <p className="text-sm text-gray-600 m-0">Drafting notices, plaints, or defense statements backed by relevant judicial citations.</p>
                      </div>
                    </div>
                    <div className="p-5 bg-white border border-gray-200 rounded-xl shadow-sm flex items-start gap-4">
                      <span className="w-8 h-8 rounded-full bg-[#2d3748] text-white flex items-center justify-center font-bold text-sm shrink-0">3</span>
                      <div>
                        <h4 className="font-bold text-gray-900 text-base mb-1">Judicial Representation</h4>
                        <p className="text-sm text-gray-600 m-0">Vigorous oral arguments and cross-examination before the bench or tribunal.</p>
                      </div>
                    </div>
                    <div className="p-5 bg-white border border-gray-200 rounded-xl shadow-sm flex items-start gap-4">
                      <span className="w-8 h-8 rounded-full bg-[#D2A02A] text-white flex items-center justify-center font-bold text-sm shrink-0">4</span>
                      <div>
                        <h4 className="font-bold text-gray-900 text-base mb-1">Decree Execution & Compliance</h4>
                        <p className="text-sm text-gray-600 m-0">Ensuring final orders are executed and full compliance is enforced.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Why Choose AMA */}
                <section id="why-choose-ama" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Why Retain AMA Legal Solutions</h2>
                  <div className="grid md:grid-cols-3 gap-4 text-center my-6">
                    <div className="p-5 rounded-xl bg-gray-50 border border-gray-100">
                      <div className="text-3xl mb-2">⚖️</div>
                      <h4 className="font-bold text-base mb-1">Trial Lawyers</h4>
                      <p className="text-xs text-gray-600">Seasoned advocates with regular appearances across District and High Courts.</p>
                    </div>
                    <div className="p-5 rounded-xl bg-gray-50 border border-gray-100">
                      <div className="text-3xl mb-2">🛡️</div>
                      <h4 className="font-bold text-base mb-1">Fierce Defense</h4>
                      <p className="text-xs text-gray-600">Uncompromising commitment to protecting client constitutional liberties and assets.</p>
                    </div>
                    <div className="p-5 rounded-xl bg-gray-50 border border-gray-100">
                      <div className="text-3xl mb-2">🤝</div>
                      <h4 className="font-bold text-base mb-1">Fee Transparency</h4>
                      <p className="text-xs text-gray-600">Clear stage-wise fee agreements without ambiguous hidden expenses.</p>
                    </div>
                  </div>
                </section>

                {/* Client Feedback */}
                <section id="client-feedback" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6">Client Testimonials</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                      <p className="text-gray-700 italic mb-3 text-sm leading-relaxed">
                        &quot;The courtroom advocacy by AMA Legal Solutions in our {matchedExpertise.toLowerCase()} litigation was masterful. They secured an interim stay when we needed it most.&quot;
                      </p>
                      <p className="font-bold text-gray-900 text-sm m-0">Senior Consultant</p>
                      <span className="text-xs text-[#D2A02A]">★★★★★ 5.0</span>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                      <p className="text-gray-700 italic mb-3 text-sm leading-relaxed">
                        &quot;Very responsive and highly knowledgeable advocates. Handled our representation with extreme dedication and achieved an amicable settlement.&quot;
                      </p>
                      <p className="font-bold text-gray-900 text-sm m-0">Managing Director</p>
                      <span className="text-xs text-[#D2A02A]">★★★★★ 5.0</span>
                    </div>
                  </div>
                </section>

                {/* FAQs */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                  <div className="space-y-4">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border-b border-gray-200 pb-4 last:border-0">
                        <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1 flex items-start">
                          <span className="text-[#D2A02A] mr-3">Q:</span>
                          {faq.question}
                        </h3>
                        <p className="text-gray-700 leading-relaxed pl-7 text-sm m-0">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

              </div>
            </div>

            <aside className="space-y-6 sticky top-24">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Retain Counsel</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Schedule an immediate legal assessment for {matchedExpertise}.
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
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
