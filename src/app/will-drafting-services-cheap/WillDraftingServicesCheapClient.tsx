"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";

/* ─────────────────────────── CONSTANTS ─────────────────────────── */
const SITE = "https://www.amalegalsolutions.com";
const PAGE_SLUG = "/will-drafting-services-cheap";
const PAGE_URL = `${SITE}${PAGE_SLUG}`;
const OG_IMAGE_URL = `${SITE}/images/og/will-drafting-services-cheap.png`;
const LOGO_URL = `${SITE}/ama3.svg`;
const TODAY = "2026-09-08";

/* ─────────────────────────── HELPERS ───────────────────────────── */
function Stars({ count = 5 }: { count?: number }) {
  return (
    <span className="inline-flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-[#D2A02A] fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </span>
  );
}

/* ─────────────────────────── FAQ DATA ──────────────────────────── */
const faqs = [
  {
    id: "faq-1",
    question: "Is a budget-friendly will legally valid in Indian courts?",
    answer: "A will does not require expensive stamp paper or exorbitant corporate legal fees to possess absolute statutory validity under Indian law. As established under Section 63 of the Indian Succession Act, 1925, any document drafted on plain paper, executed voluntarily by a testator of sound mind, and attested by two independent competent witnesses is completely legally binding and admissible in court.",
  },
  {
    id: "faq-2",
    question: "Why are free online DIY will templates dangerous?",
    answer: "Generic automated templates or free downloadable documents routinely lack customized residuary estate clauses, fail to explicitly revoke prior wills, and omit crucial executor indemnification provisions. When ambiguous or contradictory boilerplate language is contested during probate or succession proceedings, probate courts can invalidate testamentary bequests, causing the estate to devolve into protracted intestate litigation under personal religious laws.",
  },
  {
    id: "faq-3",
    question: "How does advocate-drafted estate planning protect against family disputes?",
    answer: "An advocate-drafted will ensures that every bequest is structured in unambiguous legal terminology, precisely distinguishing between ancestral coparcenary rights and self-acquired assets. Furthermore, senior advocates verify testamentary capacity, supervise proper attestation compliance under Section 63, and draft clear life interest covenants, creating formidable documentary evidence that insulates the testament against allegations of coercion or fraud.",
  },
  {
    id: "faq-4",
    question: "Is registration of a will mandatory to ensure court admissibility in India?",
    answer: "Under Section 18 of the Registration Act, 1908, the registration of a will is strictly optional and voluntary throughout India. An unregistered will executed in full compliance with the attestation formalities of Section 63 of the Indian Succession Act, 1925 holds equal legal validity, although formal registration before the Sub-Registrar establishes prima facie evidentiary proof against subsequent claims of forgery or tampering.",
  },
  {
    id: "faq-5",
    question: "Can a beneficiary under the will act as an attesting witness?",
    answer: "Under Section 67 of the Indian Succession Act, 1925, any bequest, legacy, or testamentary benefit made to an attesting witness or the spouse of an attesting witness is rendered completely void. While the execution of the will itself remains valid, the designated beneficiary forfeits their inheritance entirely, which makes independent, disinterested witnesses a mandatory legal safeguard during will drafting.",
  },
  {
    id: "faq-6",
    question: "Do I need to pay stamp duty when drafting or registering a will in India?",
    answer: "No stamp duty is payable on the drafting, execution, or registration of a will anywhere in the Republic of India under the Indian Stamp Act, 1899. Testators are never subjected to ad-valorem property stamp duty, as a will takes effect only post-mortem and constitutes a testamentary declaration rather than an inter-vivos conveyance.",
  },
  {
    id: "faq-7",
    question: "What is probate and is it compulsory for every will in India?",
    answer: "Probate is a court-certified copy of a will granted by a competent civil court under Section 213 and Section 57 of the Indian Succession Act, 1925, conclusively establishing the executor's legal authority. Obtaining probate is legally mandatory only for wills executed within the historical Presidency towns of Mumbai, Kolkata, and Chennai, or wills concerning immovable properties situated within those territorial limits.",
  },
  {
    id: "faq-8",
    question: "How can I update or modify an affordable will if my family situation changes?",
    answer: "A testator retains the sovereign statutory right to amend, alter, or revoke a will at any point during their lifetime while possessing testamentary capacity under Section 62 of the Indian Succession Act, 1925. Minor modifications can be seamlessly executed through a supplementary legal instrument known as a Codicil, whereas substantial asset additions or beneficiary redistributions are handled by executing an entirely fresh will that formally revokes all previous testamentary instruments.",
  },
];

/* ─────────────────────────── TOC DATA ──────────────────────────── */
const tocSections = [
  { id: "quick-answer", title: "Quick Answer: Will Drafting Cheap" },
  { id: "commercial-landscape", title: "The Search for Accessible Will Drafting" },
  { id: "statutory-requirements", title: "Statutory Requisites under Succession Act" },
  { id: "comparison-table", title: "DIY Templates vs. Advocate Drafting" },
  { id: "essential-clauses", title: "8 Mandatory Testamentary Clauses" },
  { id: "six-step-protocol", title: "6-Step Legal Drafting Protocol" },
  { id: "infographic-section", title: "Testamentary Architecture Blueprint" },
  { id: "registration-probate", title: "Registration & Probate Rules" },
  { id: "why-ama-legal", title: "Why Choose AMA Legal Solutions" },
  { id: "faqs", title: "Frequently Asked Questions" },
  { id: "internal-guides", title: "More Legal Guides" },
  { id: "citations", title: "References & Legal Authority" },
];

/* ────────────────────────── SCHEMA DATA ────────────────────────── */
const clientReviewData = {
  ratingValue: "5.0",
  bestRating: "5",
  reviewCount: "1",
  authorName: "Rameshwar Dayal Gupta",
  authorTitle: "Retired Civil Engineer & Property Owner • Verified Client",
  reviewBody: "I needed a legally valid will for my self-acquired properties in Delhi and agricultural land in Haryana, but traditional firms demanded excessive legal retainers. AMA Legal Solutions provided an exceptionally accessible testamentary advisory package without cutting any corners. Advocate Anuj Anand Malik personally guided me through Section 63 statutory formalities, structured precise executor and residuary clauses, and helped organize medical certification and registration. The entire testament was finalized within 48 hours. Truly outstanding service and unmatched legal integrity.",
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "Cheap Will Drafting Services in India | AMA Legal Solutions",
      description: "Affordable, customized, and legally binding will drafting services in India by senior advocates. Court-admissible testamentary drafting compliant with the Indian Succession Act, 1925.",
      inLanguage: "en-IN",
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", "#quick-answer"],
      },
    },
    {
      "@type": "Article",
      "@id": `${PAGE_URL}#article`,
      headline: "Will Drafting Cheap: Affordable & Legally Valid Will Drafting Services in India",
      description: "Comprehensive legal guide to affordable will drafting services in India. Compare DIY template risks versus advocate-drafted testaments, discover accessible estate planning, and learn statutory execution under the Indian Succession Act, 1925.",
      image: [OG_IMAGE_URL],
      datePublished: "2026-03-10T10:00:00+05:30",
      dateModified: TODAY,
      author: {
        "@type": "Person",
        name: "Anuj Anand Malik",
        url: `${SITE}/author/anuj-anand-malik`,
        jobTitle: "Founder & Senior Advocate",
        image: `${SITE}/anujbhiya.png`,
        sameAs: "https://www.linkedin.com/in/iamanujmalik/",
        worksFor: { "@type": "Organization", name: "AMA Legal Solutions", url: SITE },
      },
      reviewedBy: { "@type": "Organization", name: "AMA Legal Solutions", url: SITE },
      publisher: {
        "@type": "Organization",
        "@id": `${SITE}/#organization`,
        name: "AMA Legal Solutions",
        url: SITE,
        logo: { "@type": "ImageObject", url: LOGO_URL },
      },
      mainEntityOfPage: { "@type": "WebPage", "@id": `${PAGE_URL}#webpage` },
    },
    {
      "@type": "FAQPage",
      "@id": `${PAGE_URL}#faq`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
    {
      "@type": "Product",
      "@id": `${PAGE_URL}#product`,
      name: "Affordable Will Drafting Legal Advisory",
      image: OG_IMAGE_URL,
      description: "Professional, accessible will drafting and estate planning legal services in India. Custom testament drafting by High Court advocates under the Indian Succession Act, 1925 with zero hidden retainers.",
      brand: { "@type": "Brand", name: "AMA Legal Solutions" },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: clientReviewData.ratingValue,
        bestRating: clientReviewData.bestRating,
        reviewCount: clientReviewData.reviewCount,
      },
      review: {
        "@type": "Review",
        reviewRating: { "@type": "Rating", ratingValue: "5.0", bestRating: "5" },
        author: { "@type": "Person", name: clientReviewData.authorName },
        reviewBody: clientReviewData.reviewBody,
      },
    },
    {
      "@type": "Organization",
      "@id": `${SITE}/#organization`,
      name: "AMA Legal Solutions",
      url: SITE,
      logo: { "@type": "ImageObject", url: LOGO_URL },
      telephone: "+918700343611",
      email: "contact@amalegalsolutions.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "2493AP, Block G, Sushant Lok 2, Sector 57",
        addressLocality: "Gurugram",
        addressRegion: "Haryana",
        postalCode: "122001",
        addressCountry: "IN",
      },
      sameAs: [
        "https://www.facebook.com/amalegalsolutions",
        "https://twitter.com/amalegalsolutions",
        "https://www.linkedin.com/company/amalegalsolutions",
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumbs`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE },
        { "@type": "ListItem", position: 2, name: "Services", item: `${SITE}/services` },
        { "@type": "ListItem", position: 3, name: "Cheap Will Drafting Services", item: PAGE_URL },
      ],
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}#process`,
      name: "The 6-Step Protocol for Accessible and Court-Admissible Will Drafting in India",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Comprehensive Asset Inventory & Estate Mapping" },
        { "@type": "ListItem", position: 2, name: "Testamentary Intent & Beneficiary Allocation Assessment" },
        { "@type": "ListItem", position: 3, name: "Advocate-Led Legal Drafting & Statutory Structuring" },
        { "@type": "ListItem", position: 4, name: "Bespoke Legal Review & Client Clarifications" },
        { "@type": "ListItem", position: 5, name: "Execution, Attestation & Medical Certification Guidance" },
        { "@type": "ListItem", position: 6, name: "Optional Sub-Registrar Registration & Safe Archiving" },
      ],
    },
  ],
};

/* ──────────────────────── MAIN COMPONENT ───────────────────────── */
export default function WillDraftingServicesCheapClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);

  const toggleFaq = (id: string) => {
    setExpandedFaqs((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };


  const handleShare = (platform: string) => {
    const url = PAGE_URL;
    const text = "Will Drafting Cheap: Affordable & Legally Valid Services in India – AMA Legal Solutions";
    const map: Record<string, string> = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    };
    if (map[platform]) {
      window.open(map[platform], "_blank", "width=600,height=400");
    }
  };

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Will Drafting Cheap", href: PAGE_SLUG },
  ];

  return (
    <>
      <Script
        id="will-drafting-cheap-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
        strategy="afterInteractive"
      />

      <div className="min-h-screen bg-[#F5F2EB] text-gray-800 pt-20 md:pt-28">
        <div className="container mx-auto px-4 max-w-[1600px]">
          <Breadcrumbs items={breadcrumbItems} />

          {/* ══ HERO: Asymmetric 12-col (matches /blog/[slug]) ══ */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-8 mb-12 items-center">
            {/* Left col — title + meta */}
            <div className="flex flex-col lg:col-span-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight text-[#1a202c] max-w-4xl">
                Will Drafting <span className="text-[#D2A02A]">Cheap</span>: Affordable &amp; Legally Valid Services in India
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                Protect your life’s earnings and shield your family from bitter succession disputes. Retain senior High Court advocates to draft a customized, court-admissible testament strictly compliant with the Indian Succession Act, 1925—without paying excessive law firm retainers.
              </p>

              {/* Author & meta bar */}
              <div className="flex flex-wrap items-center gap-4 md:gap-6 mt-2">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-[#1a202c] border-2 border-[#D2A02A]">
                    <img
                      src="/anujbhiya.png"
                      alt="Advocate Anuj Anand Malik"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <Link
                      href="/author/anuj-anand-malik"
                      className="font-bold text-[#1a202c] text-base hover:text-[#D2A02A] transition-colors"
                    >
                      Anuj Anand Malik
                    </Link>
                    <p className="text-xs text-gray-500">Reviewed by Team AMA Legal Solutions</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 md:gap-3">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs font-semibold text-gray-600 shadow-sm">
                    <span className="text-gray-400">📅</span> 08-09-2026
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs font-semibold text-gray-600 shadow-sm">
                    <span className="text-gray-400">⏱️</span> 10 Min Read
                  </div>
                </div>
              </div>
            </div>

            {/* Right col — Image Card */}
            <div className="flex justify-center lg:justify-end w-full mt-6 lg:mt-0 lg:col-span-4">
              <div className="w-[90%] sm:w-[80%] lg:w-full rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-white flex items-center justify-center">
                <img
                  src="/images/og/will-drafting-services-cheap.png"
                  alt="Will Drafting Cheap: Affordable and Legally Valid Services in India – AMA Legal Solutions"
                  className="w-full h-auto object-contain block"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ══ MAIN CONTENT LAYOUT ══ */}
        <div className="container mx-auto px-4 max-w-[1600px] mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
            
            {/* Left Sidebar — Sticky TOC (Desktop) */}
            <div className="hidden lg:block sticky top-24">
              <TableOfContents sections={tocSections} orientation="vertical" />
            </div>

            {/* Center Editorial Column */}
            <div className="min-w-0">
              
              {/* Mobile TOC */}
              <div className="lg:hidden mb-8">
                <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-6 md:p-12 rounded-2xl shadow-sm space-y-12">
                
                {/* Meta details & Share bar */}
                <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center border-b border-gray-100 pb-6 mb-6 gap-4">
                  <div className="text-xs md:text-sm text-gray-500 font-medium">
                    Written by{" "}
                    <Link href="/author/anuj-anand-malik" className="text-[#D2A02A] hover:underline font-semibold">
                      Advocate Anuj Anand Malik
                    </Link>{" "}
                    &bull; Reviewed by{" "}
                    <span className="font-semibold text-gray-700">Team AMA Legal Solutions</span>{" "}
                    &bull; Last updated: September 2026
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs md:text-sm font-bold text-gray-700">Share:</span>
                    <button
                      onClick={() => handleShare("facebook")}
                      className="w-8 h-8 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:bg-blue-700 transition shadow-sm cursor-pointer"
                      title="Share on Facebook"
                      aria-label="Share on Facebook"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                    </button>
                    <button
                      onClick={() => handleShare("twitter")}
                      className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition shadow-sm cursor-pointer"
                      title="Share on X"
                      aria-label="Share on X"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                    </button>
                    <button
                      onClick={() => handleShare("linkedin")}
                      className="w-8 h-8 rounded-full bg-[#0A66C2] text-white flex items-center justify-center hover:bg-blue-800 transition shadow-sm cursor-pointer"
                      title="Share on LinkedIn"
                      aria-label="Share on LinkedIn"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </button>
                  </div>
                </div>

                {/* ================= QUICK ANSWER BLOCK ================= */}
                <div id="quick-answer" className="bg-amber-50/70 border-l-4 border-[#D2A02A] p-5 sm:p-7 rounded-xl shadow-sm">
                  <div className="flex items-center gap-2 mb-2 text-[#5A4C33] font-bold text-base md:text-lg">
                    <span>⚡</span>
                    <h2>Quick Answer: Can You Get Cheap Will Drafting That is Legally Valid in India?</h2>
                  </div>
                  <p className="text-gray-900 font-normal leading-relaxed text-sm md:text-base">
                    Cheap will drafting in India allows testators to secure a customized, legally binding testament without paying exorbitant law firm retainers, provided the document strictly adheres to Section 59 and Section 63 of the Indian Succession Act, 1925. Genuine legal affordability is achieved through fixed, accessible advocate-drafted estate planning that includes custom asset scheduling, unambiguous executor appointment, residuary estate distribution, and strict attestation compliance. Unlike dangerous free internet templates that routinely fail in probate court due to ambiguous drafting, an affordable advocate-vetted will guarantees full court admissibility while preventing contentious intestate succession disputes.
                  </p>
                </div>

                {/* ================= SECTION 1: THE COMMERCIAL LANDSCAPE ================= */}
                <section id="commercial-landscape" className="scroll-mt-28 space-y-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1a202c]">
                    The Commercial Search for Cheap Will Drafting: Busting Myths &amp; Understanding Quality
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    Every year in India, thousands of property owners, salaried executives, business entrepreneurs, and senior citizens search for <strong className="font-semibold text-gray-900">will drafting cheap</strong>. The driving motivation is simple and compelling: individuals recognize the existential necessity of safeguarding their hard-earned assets for their children and spouses, yet they are repeatedly repelled by the steep retainers demanded by conventional corporate law firms. In metropolitan hubs like Delhi, Mumbai, Bengaluru, and Gurugram, traditional solicitors frequently treat testamentary documentation as an exclusive luxury service.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    Faced with prohibitive barriers, many testators make the dangerous mistake of swinging to the opposite extreme: downloading free generic templates or paying micro-fees to automated computer algorithms. Under Indian jurisprudence, this creates an immense legal hazard. A testament is not a routine receipt; it is an evidentiary instrument that takes legal effect only after the author has passed away and can no longer clarify their intent before a judicial bench.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    At <Link href="/" className="text-[#D2A02A] hover:underline font-semibold">AMA Legal Solutions</Link>, we believe that estate planning is a fundamental civil safeguard that must remain accessible to every citizen. You do not need to choose between astronomical legal bills and reckless boilerplate downloads. By leveraging modern legal workflows and focused testamentary expertise, our advocate team delivers comprehensive, bespoke, and court-admissible will drafting services at genuine, accessible rates.
                  </p>
                </section>

                {/* ================= SECTION 2: STATUTORY REQUIREMENTS ================= */}
                <section id="statutory-requirements" className="scroll-mt-28 space-y-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#5A4C33]">
                    Statutory Requirements for a Valid Will under the Indian Succession Act, 1925
                  </h2>

                  <div className="bg-[#f6f4ee] border-l-4 border-[#5A4C33] p-4 md:p-6 rounded-r-xl">
                    <blockquote className="text-[#3a3020] text-sm md:text-base font-medium italic">
                      "Section 63 of the Indian Succession Act, 1925 mandates that every testator must sign or affix their mark to the Will, and the Will shall be attested by two or more witnesses, each of whom has seen the testator sign or affix their mark in their presence and in the presence of each other."
                    </blockquote>
                  </div>

                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    Many citizens mistakenly assume that an affordable will cannot be legally valid unless it is printed on expensive stamp paper, countersigned by a notary public, or processed through complicated bureaucratic channels. Indian statutory law contradicts every one of these assumptions. The legal validity of a will is determined solely by adherence to statutory criteria established under the <a href="https://www.indiacode.nic.in/handle/123456789/2385" target="_blank" rel="noopener noreferrer" className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold">Indian Succession Act, 1925</a>:
                  </p>

                  <ul className="space-y-3 text-gray-700 text-sm md:text-base list-disc list-inside">
                    <li>
                      <strong className="text-gray-900 font-semibold">Testamentary Capacity (Section 59):</strong> The testator must be a major of sound disposing mind who understands the nature of their property, the extent of their assets, and the natural objects of their bounty.
                    </li>
                    <li>
                      <strong className="text-gray-900 font-semibold">Free Volition &amp; Absence of Coercion (Section 61):</strong> A will procured through fraud, undue influence, deception, or physical/emotional coercion is void ab initio.
                    </li>
                    <li>
                      <strong className="text-gray-900 font-semibold">Written Instrument on Plain Paper:</strong> There is no statutory requirement for stamp paper. A will drafted on plain paper (or even handwritten) is 100% admissible in a court of law.
                    </li>
                    <li>
                      <strong className="text-gray-900 font-semibold">Valid Attestation by Two Independent Witnesses (Section 63(c)):</strong> The will must be attested by at least two competent adult witnesses who observe the testator signing. Crucially, under <strong className="text-gray-900 font-semibold">Section 67</strong>, an attesting witness cannot be a beneficiary under the will, nor can their spouse inherit.
                    </li>
                  </ul>
                </section>

                {/* ================= SECTION 3: COMPARISON TABLE ================= */}
                <section id="comparison-table" className="scroll-mt-28 space-y-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1a202c]">
                    Comparative Analysis: Free DIY Templates vs. Affordable Advocate Drafting
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    When comparing low-cost options in the Indian marketplace, commercial consumers must distinguish between unregulated automated website forms and genuine, advocate-led testamentary legal drafting:
                  </p>

                  <div className="overflow-x-auto my-6">
                    <table className="min-w-full bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                      <thead className="bg-[#5A4C33] text-white text-xs sm:text-sm">
                        <tr>
                          <th className="py-3 px-4 text-left font-semibold">Evaluation Factor</th>
                          <th className="py-3 px-4 text-left font-semibold bg-[#4b3f2b]">Automated Online Templates</th>
                          <th className="py-3 px-4 text-left font-semibold bg-[#D2A02A] text-black">AMA Legal Solutions (Affordable Advocate)</th>
                          <th className="py-3 px-4 text-left font-semibold">Legacy Corporate Law Firms</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 text-xs sm:text-sm text-gray-700">
                        <tr className="hover:bg-amber-50/40 transition-colors">
                          <td className="py-3.5 px-4 font-bold text-gray-900">Legal Representation &amp; Privilege</td>
                          <td className="py-3.5 px-4 text-red-600 font-medium">None. Unregulated software aggregators</td>
                          <td className="py-3.5 px-4 text-emerald-700 font-bold bg-amber-50/50">Full advocate-client legal privilege</td>
                          <td className="py-3.5 px-4 text-gray-600">Full advocate privilege</td>
                        </tr>
                        <tr className="hover:bg-amber-50/40 transition-colors">
                          <td className="py-3.5 px-4 font-bold text-gray-900">Ancestral vs Self-Acquired Analysis</td>
                          <td className="py-3.5 px-4 text-red-600 font-medium">Zero distinction. Causes void coparcenary bequests</td>
                          <td className="py-3.5 px-4 text-emerald-700 font-bold bg-amber-50/50">Thorough title &amp; coparcenary share audit</td>
                          <td className="py-3.5 px-4 text-gray-600">Included but billed with hefty markups</td>
                        </tr>
                        <tr className="hover:bg-amber-50/40 transition-colors">
                          <td className="py-3.5 px-4 font-bold text-gray-900">Residuary Estate &amp; Omission Clause</td>
                          <td className="py-3.5 px-4 text-red-600 font-medium">Frequently omitted; causes partial intestacy</td>
                          <td className="py-3.5 px-4 text-emerald-700 font-bold bg-amber-50/50">Customized, exhaustive residuary clause</td>
                          <td className="py-3.5 px-4 text-gray-600">Included</td>
                        </tr>
                        <tr className="hover:bg-amber-50/40 transition-colors">
                          <td className="py-3.5 px-4 font-bold text-gray-900">Sub-Registrar Registration Guidance</td>
                          <td className="py-3.5 px-4 text-red-600 font-medium">None; automated computer PDF output only</td>
                          <td className="py-3.5 px-4 text-emerald-700 font-bold bg-amber-50/50">Complete step-by-step registry docket guidance</td>
                          <td className="py-3.5 px-4 text-gray-600">Extra billing for clerk visits</td>
                        </tr>
                        <tr className="hover:bg-amber-50/40 transition-colors">
                          <td className="py-3.5 px-4 font-bold text-gray-900">Judicial Enforceability</td>
                          <td className="py-3.5 px-4 text-red-600 font-medium">Disclaimers waive all liability for invalidity</td>
                          <td className="py-3.5 px-4 text-emerald-700 font-bold bg-amber-50/50">Litigation-ready drafting backed by court advocates</td>
                          <td className="py-3.5 px-4 text-gray-600">Litigation-ready drafting</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* ================= SECTION 4: ESSENTIAL CLAUSES ================= */}
                <section id="essential-clauses" className="scroll-mt-28 space-y-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#5A4C33]">
                    8 Mandatory Clauses Every Affordable Will Must Contain to Resist Challenge
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    The difference between an amateur document and an unassailable legal instrument lies in the precision of its statutory covenants. Even budget-friendly testamentary documents must incorporate these eight vital clauses:
                  </p>

                  <div className="space-y-4 my-6">
                    <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl">
                      <h3 className="text-base font-bold text-gray-900 mb-1 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-[#D2A02A] text-white flex items-center justify-center text-xs">1</span>
                        Testator Identification &amp; Mental Soundness Declaration
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        Explicitly details the testator's full legal name, age, Aadhaar/PAN details, residential domicile, and a formal affirmation that the document is being made in sound disposing state of mind, body, and memory under Section 59.
                      </p>
                    </div>

                    <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl">
                      <h3 className="text-base font-bold text-gray-900 mb-1 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-[#D2A02A] text-white flex items-center justify-center text-xs">2</span>
                        Express Revocation of All Prior Wills &amp; Codicils
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        Under Section 62 of the Indian Succession Act, 1925, a will is revocable during the testator's lifetime. An express clause annulling, cancelling, and revoking all prior oral declarations, written wills, and codicils ensures that no outdated instrument can be presented in court.
                      </p>
                    </div>

                    <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl">
                      <h3 className="text-base font-bold text-gray-900 mb-1 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-[#D2A02A] text-white flex items-center justify-center text-xs">3</span>
                        Unambiguous Appointment of Primary &amp; Alternate Executors
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        The executor is the legal representative entrusted with implementing testamentary directions and securing probate if required. Naming a trustworthy primary executor and an alternate ensures seamless administration even if the primary executor predeceases the testator.
                      </p>
                    </div>

                    <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl">
                      <h3 className="text-base font-bold text-gray-900 mb-1 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-[#D2A02A] text-white flex items-center justify-center text-xs">4</span>
                        Exhaustive Schedule of Immovable &amp; Movable Assets
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        Rigorous legal descriptions of self-acquired immovable properties (complete with survey numbers, municipal ward allocations, registration deeds, and boundary coordinates) alongside demat account numbers, mutual fund folios, insurance policies, and locker inventories.
                      </p>
                    </div>

                    <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl">
                      <h3 className="text-base font-bold text-gray-900 mb-1 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-[#D2A02A] text-white flex items-center justify-center text-xs">5</span>
                        Specific Bequests, Absolute Devises &amp; Life Interest Stays
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        Clear demarcation establishing whether a beneficiary receives absolute, unencumbered ownership or a limited life interest (such as granting a surviving spouse the right to reside in a family property during their lifetime, with title reverting to children thereafter).
                      </p>
                    </div>

                    <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl">
                      <h3 className="text-base font-bold text-gray-900 mb-1 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-[#D2A02A] text-white flex items-center justify-center text-xs">6</span>
                        The Imperative Residuary Estate Clause
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        The single most dangerous omission in cheap online templates. A residuary clause states where all unlisted assets, future inheritances, tax refunds, or newly acquired properties will devolve, preventing partial intestacy and expensive court intervention.
                      </p>
                    </div>

                    <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl">
                      <h3 className="text-base font-bold text-gray-900 mb-1 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-[#D2A02A] text-white flex items-center justify-center text-xs">7</span>
                        Testamentary Guardianship for Minor Children
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        Under Section 9 of the Hindu Minority and Guardianship Act, 1956, parents can appoint a testamentary guardian for minor children and their property, ensuring that minors are protected by trusted individuals rather than state authorities.
                      </p>
                    </div>

                    <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl">
                      <h3 className="text-base font-bold text-gray-900 mb-1 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-[#D2A02A] text-white flex items-center justify-center text-xs">8</span>
                        Attestation &amp; Sign-Off Memorandum
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        Statutory attestation clause complying strictly with Section 63(c), wherein two independent non-beneficiary witnesses certify under signature, date, and residential address that they witnessed the testator signing freely in their physical presence.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ================= SECTION 5: 6-STEP PROTOCOL ================= */}
                <section id="six-step-protocol" className="scroll-mt-28 space-y-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1a202c]">
                    The 6-Step Legal Drafting Protocol: From Consultation to Registered Testament
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    At AMA Legal Solutions, our process ensures that securing an affordable will is fast, seamless, and completely shielded by advocate oversight:
                  </p>

                  <div className="space-y-4 my-6">
                    {[
                      {
                        title: "Comprehensive Asset Inventory & Estate Mapping",
                        desc: "Our advocates conduct an exhaustive intake of all self-acquired properties, ancestral coparcenary shares, bank accounts, mutual funds, corporate shares, insurance policies, and digital intellectual property to eliminate asset omissions.",
                      },
                      {
                        title: "Testamentary Intent & Beneficiary Allocation Assessment",
                        desc: "We analyze your specific devolution desires, structuring clear primary bequests, contingent devises for minor children, life interest stipulations for surviving spouses, and specific asset exclusions to prevent ambiguity.",
                      },
                      {
                        title: "Advocate-Led Legal Drafting & Statutory Structuring",
                        desc: "An enrolled High Court advocate drafts your customized testament incorporating mandatory revocation clauses, sound mind declarations, executor appointments, dispute resolution covenants, and comprehensive residuary estate clauses.",
                      },
                      {
                        title: "Bespoke Legal Review & Client Clarifications",
                        desc: "You receive the complete draft in plain, intelligible language for line-by-line review, with our senior legal team making all necessary modifications, clarifications, and asset additions without administrative friction.",
                      },
                      {
                        title: "Execution, Attestation & Medical Certification Guidance",
                        desc: "We provide precise instructions for executing the will on non-stamp paper, procuring the requisite medical practitioner sound mind certificate, and coordinating two independent adult witnesses pursuant to Section 63.",
                      },
                      {
                        title: "Optional Sub-Registrar Registration & Safe Archiving",
                        desc: "For clients seeking maximum evidentiary security, our legal team assists with scheduling sub-registrar appointments, preparing jurisdictional registration dockets, and structuring secure digital and physical testamentary archiving.",
                      },
                    ].map((step, idx) => (
                      <div key={idx} className="flex items-start gap-4 p-4 border border-gray-200 rounded-2xl bg-white hover:border-[#D2A02A] transition-colors">
                        <div className="w-8 h-8 rounded-full bg-[#5A4C33] text-[#D2A02A] flex items-center justify-center font-bold text-sm flex-shrink-0">
                          {idx + 1}
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 text-sm md:text-base mb-1">{step.title}</h3>
                          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* ================= SECTION 6: INFOGRAPHIC SECTION (BLOG STYLE) ================= */}
                <section id="infographic-section" className="my-10 p-4 sm:p-6 bg-gradient-to-br from-[#FAF7F0] via-white to-[#F7F3E9] border-2 border-[#D2A02A]/35 rounded-2xl shadow-sm">
                  <div className="flex items-center gap-3 mb-4 pb-3 border-b border-[#D2A02A]/20">
                    <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-[#D2A02A] text-white font-bold text-base shadow-sm">
                      📊
                    </span>
                    <div>
                      <h3 className="text-base sm:text-lg font-extrabold text-[#1a202c]">
                        Key Insights &amp; Testamentary Architecture Infographic
                      </h3>
                      <p className="text-xs text-gray-500 font-medium">
                        Visual summary, statutory compliance &amp; asset devolution protocol
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl overflow-hidden bg-white border border-[#D2A02A]/20 shadow-sm flex justify-center items-center p-2 sm:p-4">
                    <img
                      src="/images/og/will-drafting-services-cheap.png"
                      alt="Cheap Will Drafting Services in India - Testamentary Architecture Infographic by AMA Legal Solutions"
                      className="w-full h-auto max-h-[900px] object-contain rounded-lg hover:scale-[1.01] transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-[11px] text-gray-400 text-center mt-3 font-medium">
                    Prepared by AMA Legal Solutions Research &amp; Compliance Team &bull; Testamentary Architecture &amp; Succession Overview
                  </p>
                </section>

                {/* ================= SECTION 7: REGISTRATION & PROBATE ================= */}
                <section id="registration-probate" className="scroll-mt-28 space-y-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#5A4C33]">
                    Registration, Stamp Duty &amp; Probate Rules Across Indian Jurisdictions
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    Understanding the procedural statutory rules around registration and probate prevents testators from falling victim to misinformation:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                    <div className="bg-[#fcfbf9] p-5 rounded-2xl border border-gray-200">
                      <h3 className="font-bold text-gray-900 text-base mb-2 flex items-center gap-2">
                        <span>🏛️</span> Registration is Strictly Optional
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        Under Section 18(e) of the <a href="https://www.indiacode.nic.in/handle/123456789/2288" target="_blank" rel="noopener noreferrer" className="text-[#D2A02A] hover:underline font-semibold">Registration Act, 1908</a>, wills are categorized under documents where registration is optional. An unregistered will carries identical statutory force to a registered will. However, registering a will before the local Sub-Registrar requires the physical presence of the testator and two witnesses with biometric authentication, creating formidable documentary evidence that eliminates future claims of forged signatures or post-mortem tampering.
                      </p>
                    </div>

                    <div className="bg-[#fcfbf9] p-5 rounded-2xl border border-gray-200">
                      <h3 className="font-bold text-gray-900 text-base mb-2 flex items-center gap-2">
                        <span>📜</span> Zero Stamp Duty Mandate
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        Under Schedule I of the Indian Stamp Act, 1899, no stamp duty is leviable on a will or codicil. Anyone claiming that you must purchase expensive stamp paper is misleading you. The document takes legal effect as an un-stamped instrument executed on standard plain paper.
                      </p>
                    </div>
                  </div>

                  <div className="bg-amber-50/50 p-5 rounded-2xl border border-amber-200/60">
                    <h3 className="font-bold text-gray-900 text-base mb-2 flex items-center gap-2">
                      <span>⚖️</span> When is Court Probate Legally Required?
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                      Under Section 213 read with Section 57 of the Indian Succession Act, 1925, obtaining a probate grant from a civil court is legally compulsory only for wills executed by Hindus, Buddhists, Sikhs, or Jains within the historical Presidency towns of Mumbai, Kolkata, and Chennai, or in cases where immovable property bequeathed under the will is situated within those territorial limits. In Delhi, Haryana, Punjab, Uttar Pradesh, and all other Indian states, probate is not mandatory for asset mutation, enabling beneficiaries of an affordable, well-drafted will to mutate properties directly before municipal corporations and revenue authorities.
                    </p>
                  </div>
                </section>

                {/* ================= SECTION 8: WHY AMA LEGAL ================= */}
                <section id="why-ama-legal" className="scroll-mt-28 space-y-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1a202c]">
                    Why AMA Legal Solutions is India's Top Choice for Affordable Will Drafting
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    Unlike automated tech portals that sell unvetted computer downloads and disclaim all professional liability, AMA Legal Solutions is a premier, advocate-led legal advisory operating strictly under Bar Council of India standards:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                    <div className="p-4 border border-gray-200 rounded-xl bg-white shadow-xs">
                      <div className="text-xl mb-1 text-[#D2A02A]">👨‍⚖️</div>
                      <div className="font-bold text-sm text-gray-900 mb-1">Enrolled High Court Advocates</div>
                      <p className="text-xs text-gray-600">Every testament is personally reviewed, structured, and authenticated by senior practicing civil and succession litigation advocates.</p>
                    </div>

                    <div className="p-4 border border-gray-200 rounded-xl bg-white shadow-xs">
                      <div className="text-xl mb-1 text-[#D2A02A]">🔒</div>
                      <div className="font-bold text-sm text-gray-900 mb-1">100% Advocate-Client Confidentiality</div>
                      <p className="text-xs text-gray-600">All your financial, family, and asset declarations are safeguarded by statutory professional privilege under the Indian Evidence Act.</p>
                    </div>

                    <div className="p-4 border border-gray-200 rounded-xl bg-white shadow-xs">
                      <div className="text-xl mb-1 text-[#D2A02A]">⚡</div>
                      <div className="font-bold text-sm text-gray-900 mb-1">Swift 24-48 Hour Turnaround</div>
                      <p className="text-xs text-gray-600">We recognize the urgency of testamentary planning; receive your completed legal draft within 48 hours without compromising depth.</p>
                    </div>

                    <div className="p-4 border border-gray-200 rounded-xl bg-white shadow-xs">
                      <div className="text-xl mb-1 text-[#D2A02A]">🛡️</div>
                      <div className="font-bold text-sm text-gray-900 mb-1">Litigation-Tested Covenants</div>
                      <p className="text-xs text-gray-600">Because our advocates actively represent succession disputes in High Courts, our clauses are specifically drafted to withstand judicial challenges.</p>
                    </div>
                  </div>
                </section>

                {/* ================= SECTION 9: FAQS ACCORDION ================= */}
                <section id="faqs" className="scroll-mt-28 border-t border-gray-200 pt-12">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#1a202c] mb-8">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-4">
                    {faqs.map((faq) => {
                      const isOpen = expandedFaqs.includes(faq.id);
                      return (
                        <div key={faq.id} className="border border-gray-200 rounded-lg overflow-hidden">
                          <button
                            onClick={() => toggleFaq(faq.id)}
                            className="flex justify-between items-center w-full text-left p-4 font-medium text-gray-900 hover:bg-gray-50 focus:outline-none transition-colors cursor-pointer"
                            aria-expanded={isOpen}
                          >
                            <span className="flex items-center">
                              <span className="text-[#D2A02A] mr-3 font-bold">Q.</span>
                              {faq.question}
                            </span>
                            <span className={`transform transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}>
                              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </span>
                          </button>
                          {isOpen && (
                            <div className="px-4 pb-4 pt-0 text-gray-700 leading-relaxed pl-10 text-sm">
                              {faq.answer}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </section>

                {/* ================= SECTION 10: MORE LEGAL GUIDES ================= */}
                <section id="internal-guides" className="scroll-mt-28 border-t border-gray-200 pt-12">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#1a202c] mb-6">
                    More Legal Guides &amp; Succession Resources
                  </h2>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      { title: "Will Draft Under 3000", href: "/will-draft-under-3000", desc: "Understand statutory testamentary procedures, court admissibility, and essential clauses." },
                      { title: "Best Will Drafting Services in India", href: "/best-will-drafting-services-in-india", desc: "Compare top advocate-led estate planning and testamentary advisory firms." },
                      { title: "Drafting of Will: Legal Guidelines", href: "/drafting-of-will", desc: "Comprehensive statutory framework for executing an unassailable last will and testament." },
                      { title: "Simple Will Format Download", href: "/simple-will-format-download-free-legal-document-sample", desc: "Essential structure, witness attestation, and schedule formats under Indian law." },
                      { title: "Will Drafting Services in Delhi NCR", href: "/will-drafting-services-in-delhi-ncr", desc: "Experienced succession advocates for Delhi, Gurugram, Noida, and Faridabad residents." },
                      { title: "Affordable NRI Will Drafting", href: "/will-drafting-services-affordable-for-nri", desc: "Cross-border asset planning and Indian consulate execution protocols for global Indians." },
                      { title: "Free Will Drafting Consultation", href: "/free-will-drafting-consultation-in-delhi-ncr", desc: "Confidential case evaluation and asset allocation guidance with senior counsel." },
                      { title: "Affordable Contract Drafting", href: "/contract-drafting-between-two-parties-affordable", desc: "Commercial agreement drafting and legally binding breach defense." },
                      { title: "Family Lawyer Advisory", href: "/family-lawyer", desc: "Estate dispute defense, partition suits, and succession dispute mediation." },
                    ].map((guide) => (
                      <Link
                        key={guide.href}
                        href={guide.href}
                        className="group block bg-white border border-gray-200 hover:border-[#D2A02A] rounded-xl p-4 transition-all hover:shadow-sm"
                      >
                        <h3 className="font-bold text-[#5A4C33] group-hover:text-[#D2A02A] text-sm mb-2 transition-colors">
                          {guide.title}{" "}
                          <svg className="w-4 h-4 ml-1 inline group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </h3>
                        <p className="text-xs text-gray-600 leading-relaxed">{guide.desc}</p>
                      </Link>
                    ))}
                  </div>
                </section>

                {/* ================= SECTION 11: REFERENCES & CITATIONS ================= */}
                <section id="citations" className="scroll-mt-28 border-t border-gray-200 pt-8 mt-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">References &amp; Authority</h3>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
                    {[
                      { label: "Indian Succession Act, 1925 (Sections 59, 63, 67, 213)", href: "https://www.indiacode.nic.in/handle/123456789/2385" },
                      { label: "Registration Act, 1908 (Section 18)", href: "https://www.indiacode.nic.in/handle/123456789/2288" },
                      { label: "Supreme Court of India (Testamentary Capacity Jurisprudence)", href: "https://main.sci.gov.in" },
                      { label: "Delhi High Court Probate & Succession Bench Judgments", href: "https://delhihighcourt.nic.in" },
                      { label: "Bar Council of India Professional Conduct & Legal Standards", href: "http://www.barcouncilofindia.org" },
                      { label: "National Consumer Disputes Redressal Commission", href: "https://ncdrc.nic.in" },
                    ].map((cite) => (
                      <li key={cite.href}>
                        <a
                          href={cite.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline"
                        >
                          {cite.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* Share Section Bottom */}
                <div className="border-t border-gray-200 pt-8 mt-8">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-gray-900">Share this article:</span>
                    <div className="flex space-x-4">
                      {["facebook", "twitter", "linkedin"].map((p) => (
                        <button
                          key={p}
                          onClick={() => handleShare(p)}
                          className="text-gray-500 hover:text-[#D2A02A] transition-colors capitalize text-sm font-semibold cursor-pointer"
                        >
                          {p.charAt(0).toUpperCase() + p.slice(1)}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* AMA Legal Solutions Company & Media Section */}
                <section className="border-4 border-[#D2A02A] rounded-2xl p-6 md:p-10 bg-white text-center shadow-lg relative mt-12 mb-8">
                  <div className="flex justify-center mb-4">
                    <Image src="/ama3.svg" alt="AMA Legal Solutions Logo" width={75} height={75} className="object-contain" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#5A4C33] mb-3">
                    AMA Legal Solutions
                  </h2>
                  <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed mb-6 text-sm md:text-base font-medium">
                    Trusted with a{" "}
                    <strong className="text-[#D2A02A] font-bold">4.7 Google Rating</strong>, over{" "}
                    <strong className="text-[#D2A02A] font-bold">10,000+ Clients Served</strong>,{" "}
                    <strong className="text-[#D2A02A] font-bold">25,000+ Cases Handled</strong>, and
                    more than{" "}
                    <strong className="text-[#D2A02A] font-bold">40+ Years of Experience</strong> in
                    providing strategic legal defense, testamentary drafting, and estate advisory across India.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 max-w-5xl mx-auto">
                    <Link href="/drafting-of-will" className="px-3 py-2.5 border-2 border-[#D2A02A] text-[#5A4C33] font-bold rounded-lg hover:bg-[#D2A02A] hover:text-white transition-all text-center text-xs md:text-sm flex items-center justify-center">
                      Will Drafting Services
                    </Link>
                    <Link href="/family-lawyer" className="px-3 py-2.5 border-2 border-[#D2A02A] text-[#5A4C33] font-bold rounded-lg hover:bg-[#D2A02A] hover:text-white transition-all text-center text-xs md:text-sm flex items-center justify-center">
                      Estate &amp; Family Law
                    </Link>
                    <Link href="/contract-drafting-between-two-parties-affordable" className="px-3 py-2.5 border-2 border-[#D2A02A] text-[#5A4C33] font-bold rounded-lg hover:bg-[#D2A02A] hover:text-white transition-all text-center text-xs md:text-sm flex items-center justify-center">
                      Affordable Contract Drafting
                    </Link>
                    <Link href="/send-legal-notice" className="px-3 py-2.5 border-2 border-[#D2A02A] text-[#5A4C33] font-bold rounded-lg hover:bg-[#D2A02A] hover:text-white transition-all text-center text-xs md:text-sm flex items-center justify-center">
                      Legal Notice Services
                    </Link>
                  </div>
                </section>

              </div>
            </div>

            {/* ══ RIGHT SIDEBAR (Matches /blog/[slug]) ══ */}
            <div className="space-y-8 sticky top-24">
              
              {/* Author Card */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">About Author</h3>
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-[#D2A02A]">
                    <img src="/anujbhiya.png" alt="Anuj Anand Malik" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Anuj Anand Malik</h4>
                    <Link href="/author/anuj-anand-malik" className="text-xs text-[#D2A02A] hover:underline">
                      View Profile
                    </Link>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4 line-clamp-4">
                  Anuj Anand Malik, Founder of AMA Legal Solutions, is a trusted advocate and legal advisor with extensive experience in testamentary drafting, estate planning, and succession litigation under Indian law.
                </p>
                <a
                  href="https://www.linkedin.com/in/iamanujmalik/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full border border-[#0077b5] text-[#0077b5] text-center py-2 rounded-lg text-sm font-semibold hover:bg-[#0077b5] hover:text-white transition-colors"
                >
                  Connect on LinkedIn
                </a>
              </div>

              {/* CTA Card */}
              <div className="bg-[#5A4C33] p-6 rounded-xl shadow-sm text-white">
                <h3 className="text-xl font-bold mb-4">Need Will Drafting Help?</h3>
                <p className="text-gray-200 mb-6 text-sm">
                  Get personalized guidance on drafting a legally binding testament under the Indian Succession Act. Advocate Anuj Anand Malik will review your requirements.
                </p>
                <a
                  href="tel:+918700343611"
                  className="block w-full bg-[#D2A02A] text-white text-center py-3 rounded-lg font-semibold hover:bg-[#b88a22] transition-colors mb-4"
                >
                  Call +91-8700343611
                </a>
                <Link href="/contact"
                  className="block w-full border border-white text-white text-center py-3 rounded-lg font-semibold hover:bg-white hover:text-[#5A4C33] transition-colors cursor-pointer"
                >
                  Request Callback
                </Link>
              </div>

              {/* Client Reviews */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">Client Reviews</h3>
                <div className="flex items-center gap-2 mb-1">
                  <Stars />
                  <span className="font-extrabold text-gray-900">5.0</span>
                </div>
                <p className="text-xs text-gray-500 mb-4">Based on verified client reviews</p>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 relative">
                    <div className="text-4xl text-[#D2A02A] opacity-20 absolute top-3 left-3 font-serif leading-none">&ldquo;</div>
                    <div className="relative z-10">
                      <div className="flex items-center mb-2">
                        <Stars />
                        <span className="font-bold text-gray-900 ml-2 text-xs">5.0</span>
                      </div>
                      <p className="text-gray-700 italic text-xs mb-3">
                        &ldquo;{clientReviewData.reviewBody}&rdquo;
                      </p>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 mr-2 text-xs font-bold">
                          {clientReviewData.authorName.charAt(0)}
                        </div>
                        <div>
                          <p className="font-bold text-gray-900 text-xs">{clientReviewData.authorName}</p>
                          <p className="text-[10px] text-gray-500">{clientReviewData.authorTitle}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Link href="/ama-legal-solutions-reviews" className="block text-center text-xs text-[#D2A02A] hover:underline mt-4">
                  Read All Reviews →
                </Link>
              </div>

              {/* Quick links */}
              <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
                <h3 className="font-bold text-gray-900 text-sm mb-3 border-b border-gray-100 pb-2">Related Guides</h3>
                <ul className="space-y-2 text-xs">
                  {[
                    ["/will-draft-under-3000", "Will Draft Under 3000"],
                    ["/best-will-drafting-services-in-india", "Best Will Drafting Services"],
                    ["/drafting-of-will", "Drafting of Will Guide"],
                    ["/simple-will-format-download-free-legal-document-sample", "Simple Will Format Sample"],
                    ["/will-drafting-services-in-delhi-ncr", "Will Drafting in Delhi NCR"],
                  ].map(([url, title]) => (
                    <li key={url}>
                      <Link href={url} className="text-gray-600 hover:text-[#D2A02A] transition-colors flex items-center justify-between">
                        <span>{title}</span>
                        <span className="text-gray-400">→</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>
        </div>

      </div>
    </>
  );
}
