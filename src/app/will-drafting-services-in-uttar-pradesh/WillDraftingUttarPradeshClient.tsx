"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";

/* ─────────────────────────── CONSTANTS ─────────────────────────── */
const SITE = "https://www.amalegalsolutions.com";
const PAGE_SLUG = "/will-drafting-services-in-uttar-pradesh";
const PAGE_URL = `${SITE}${PAGE_SLUG}`;
const OG_IMAGE_URL = `${SITE}/images/og/will-drafting-services-in-uttar-pradesh.png`;
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
    question: "Is probate of a will mandatory for properties located in Uttar Pradesh?",
    answer:
      "Under Section 213 read with Section 57 clauses (a) and (b) of the Indian Succession Act, 1925, probate is statutorily mandatory only for wills executed within or relating to immovable properties situated in the historic Presidency towns of Kolkata, Chennai, and Mumbai. The Hon'ble High Court of Judicature at Allahabad in Smt. Saroj Sharma v. Civil Judge and the Supreme Court of India in Clarence Pais v. Union of India have authoritatively established that probate is not mandatory in the State of Uttar Pradesh, empowering beneficiaries to mutate real estate directly before the New Okhla Industrial Development Authority (NOIDA), Greater Noida (GNIDA), Yamuna Expressway Authority (YEIDA), Lucknow Development Authority (LDA), and Tehsil revenue authorities without obtaining a court decree.",
  },
  {
    id: "faq-2",
    question: "What statutory requisites determine the legal validity of a will in Uttar Pradesh?",
    answer:
      "Under Section 59 and Section 63 of the Indian Succession Act, 1925, a valid testamentary disposition in Uttar Pradesh requires a testator possessing a sound disposing mind who voluntarily signs or affixes their mark in the physical presence of at least two competent adult witnesses who attest the instrument in the testator's presence. While testamentary instruments are completely exempt from ad-valorem stamp duty under the Indian Stamp Act, 1899 as applicable to Uttar Pradesh, incorporating explicit asset schedules, executor designations, and medical capacity certificates is essential to withstand evidentiary scrutiny under Section 68 of the Indian Evidence Act before Uttar Pradesh civil courts.",
  },
  {
    id: "faq-3",
    question: "How does testamentary succession apply to agricultural Bhumidhari land under the Uttar Pradesh Revenue Code, 2006?",
    answer:
      "Devolution of agricultural holdings in Uttar Pradesh is governed by Section 107 of the Uttar Pradesh Revenue Code, 2006 (U.P. Act No. 8 of 2012), which explicitly empowers a Bhumidhar with transferable rights to bequeath their holding or any part thereof by will. However, under Section 107(2) read with Section 98 of the Code, a Bhumidhar belonging to a Scheduled Caste is statutorily restricted from bequeathing agricultural land to a person not belonging to a Scheduled Caste without prior permission from the Collector, rendering non-compliant testamentary bequests void ab initio before revenue courts.",
  },
  {
    id: "faq-4",
    question: "Can property owners in NOIDA, Greater Noida, YEIDA, or LDA sectors transfer leasehold plots via a will?",
    answer:
      "Allotted residential plots, commercial SCOs, and licensed industrial estates held on 90-year lease deeds under the NOIDA Authority, Greater Noida Industrial Development Authority (GNIDA), Yamuna Expressway Authority (YEIDA), or Lucknow Development Authority (LDA) can be legally bequeathed under Section 30 of the Hindu Succession Act, 1956. Upon the testator's demise, the testamentary beneficiary submits the advocate-drafted will, death certificate, indemnity bond, and no-objection affidavits to the respective development authority's property department to obtain direct leasehold substitution and title transfer without a court probate order.",
  },
  {
    id: "faq-5",
    question: "Why do automated online DIY will templates fail before Uttar Pradesh courts and development authorities?",
    answer:
      "Automated DIY online templates rely on generic Western boilerplate clauses that fail to incorporate vital Indian statutory mandates, Uttar Pradesh Revenue Code classifications (Khasra, Khatauni, Gata numbers), or mandatory authority lease deed covenants for NOIDA and LDA allotments. Under Section 81 of the Indian Succession Act, 1925, civil courts are strictly barred from admitting extrinsic oral evidence to cure patent ambiguities or conflicting testamentary bequests, frequently precipitating costly revenue partition litigation and freezing estates before Tehsildars and Civil Judges across Uttar Pradesh.",
  },
  {
    id: "faq-6",
    question: "How can Non-Resident Indians (NRIs) and diaspora families protect their ancestral Uttar Pradesh properties through a will?",
    answer:
      "Non-Resident Indians and diaspora business families holding ancestral properties, commercial showrooms, or farmlands across Noida, Lucknow, Kanpur, Varanasi, or Agra can execute a legally binding will either in India before the jurisdictional Sub-Registrar through IGRSUP or abroad before the Indian Embassy or Consulate under the Diplomatic and Consular Officers (Oaths and Fees) Act, 1948. Retaining senior High Court succession advocates ensures the testament contains ironclad anti-GPA revocation covenants, contemporaneous video attestation, and detailed revenue schedules that safeguard properties from fraudulent land mafias, forged mutation claims, and unauthorized caretaker possession.",
  },
  {
    id: "faq-7",
    question: "Can an attesting witness inherit property under a will executed in Uttar Pradesh?",
    answer:
      "Under Section 67 of the Indian Succession Act, 1925, any legacy, bequest, or estate interest devised to an attesting witness or the lawful spouse of an attesting witness is void ab initio. While the rest of the testamentary instrument remains legally operative, the attesting beneficiary entirely forfeits their devised inheritance, making the engagement of independent, disinterested adult witnesses an indispensable statutory requirement during testamentary execution across Uttar Pradesh.",
  },
  {
    id: "faq-8",
    question: "What is the legal distinction between bequeathing self-acquired property and ancestral coparcenary property in Uttar Pradesh?",
    answer:
      "Under Section 30 of the Hindu Succession Act, 1956, a Hindu testator exercises unrestricted testamentary power to bequeath all self-acquired properties, business equity, and personal investments, as well as their defined undivided coparcenary interest in ancestral Hindu Undivided Family (HUF) property. However, a testator cannot bequeath another coparcener's distinct ancestral share without prior legal partition, requiring meticulous advocate drafting to clearly distinguish personal assets from joint coparcenary assets across Uttar Pradesh.",
  },
];

/* ─────────────────────────── TOC DATA ──────────────────────────── */
const tocSections = [
  { id: "quick-answer", title: "Quick Answer: Will Drafting Services in Uttar Pradesh" },
  { id: "up-succession-landscape", title: "Uttar Pradesh Real Estate & Succession: NOIDA, YEIDA, LDA & Bhumidhari Land" },
  { id: "statutory-framework", title: "Statutory Framework: Indian Succession Act, 1925 & UP Revenue Code, 2006" },
  { id: "probate-up-nuance", title: "Probate in Uttar Pradesh: Is Court Probate Legally Mandatory?" },
  { id: "industrialists-nri-succession", title: "NCR Industrialists, Real Estate Dynasties & NRI Succession Safeguards" },
  { id: "comparison-matrix", title: "DIY Templates vs. Corporate Retainers vs. AMA Legal Solutions" },
  { id: "essential-clauses", title: "8 Critical Testamentary Clauses for Uttar Pradesh Estates" },
  { id: "six-step-protocol", title: "The 6-Step Advocate Drafting Protocol" },
  { id: "infographic-section", title: "Uttar Pradesh Testamentary Architecture Blueprint" },
  { id: "registration-mutation-up", title: "IGRSUP Sub-Registrar Registration & Authority/Tehsil Mutation" },
  { id: "why-ama-legal", title: "Why Choose AMA Legal Solutions in Uttar Pradesh" },
  { id: "faqs", title: "Frequently Asked Questions" },
  { id: "internal-guides", title: "Related Legal & Succession Guides" },
  { id: "citations", title: "References & Statutory Authority" },
];

/* ────────────────────────── SCHEMA DATA ────────────────────────── */
const clientReviewData = {
  ratingValue: "5.0",
  bestRating: "5",
  reviewCount: "1",
  authorName: "Suresh Chandra Agarwal",
  authorTitle: "Founder & Chairman, Agarwal Industrial Group & Agricultural Landholder, NOIDA, Ghaziabad & Lucknow • Verified Client",
  reviewBody:
    "Structuring our multi-generational family estate spanning prime industrial plots in UPSIDA Ghaziabad, residential properties in NOIDA Sector 15A, LDA commercial showrooms in Lucknow, and ancestral Bhumidhari agricultural land in Meerut involved intricate legal and succession complexities. We were deeply concerned about avoiding future family partition suits, navigating the Uttar Pradesh Revenue Code, and ensuring seamless mutation before the NOIDA Authority without probate delays. Rather than risking generic online templates or facing the excessive hourly billing models of corporate law firms, we retained AMA Legal Solutions. Senior Advocate Anuj Anand Malik provided extraordinary legal stewardship. He meticulously drafted our comprehensive family will, harmonized our HUF coparcenary assets with personal holdings, drafted protective spousal life-interest clauses, and ensured complete compliance with IGRSUP registration protocols. Their transparent fixed legal advisory model provided exceptional accessibility and dispute-proof certainty. For any family, business leader, or NRI seeking supreme will drafting services in Uttar Pradesh, AMA Legal Solutions is the definitive legal benchmark.",
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "Will Drafting Services in Uttar Pradesh: Top Estate & Succession Lawyers | AMA Legal Solutions",
      description:
        "Expert will drafting services in Uttar Pradesh by senior High Court advocates. Secure your family estate, NOIDA, GNIDA, YEIDA, LDA properties, and agricultural Bhumidhari land with court-admissible testamentary drafting.",
      inLanguage: "en-IN",
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", "#quick-answer"],
      },
    },
    {
      "@type": "Article",
      "@id": `${PAGE_URL}#article`,
      headline: "Will Drafting Services in Uttar Pradesh: Expert Estate Planning & Succession Lawyers",
      description:
        "Comprehensive legal guide to will drafting services in Uttar Pradesh. Learn statutory testamentary execution under the Indian Succession Act, 1925, NOIDA, Greater Noida, YEIDA, and LDA property transfer protocols, Uttar Pradesh Revenue Code, 2006 agricultural Bhumidhari land mutation rules, industrial family business and NRI estate protection, IGRSUP Sub-Registrar registration protocols, and probate exemptions.",
      image: [OG_IMAGE_URL],
      datePublished: "2026-03-25T09:00:00+05:30",
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
      name: "Will Drafting Services in Uttar Pradesh",
      image: OG_IMAGE_URL,
      description:
        "Customized, court-admissible will drafting and estate planning legal advisory in Uttar Pradesh. Senior High Court advocate drafting under the Indian Succession Act, 1925, NOIDA/YEIDA/LDA regulations, and Uttar Pradesh Revenue Code, 2006 protocols with zero hidden retainers or hourly markups.",
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
        "https://www.facebook.com/amalegalsolutions/",
        "https://twitter.com/amalegalsolutions",
        "https://www.linkedin.com/company/ama-legal-solutions/",
        "https://www.instagram.com/amalegalsolutions/",
        "https://www.youtube.com/@amalegalsolution",
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumbs`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE },
        { "@type": "ListItem", position: 2, name: "Services", item: `${SITE}/services` },
        { "@type": "ListItem", position: 3, name: "Will Drafting Services in Uttar Pradesh", item: PAGE_URL },
      ],
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}#process`,
      name: "The 6-Step Protocol for Dispute-Proof Will Drafting in Uttar Pradesh",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Exhaustive Uttar Pradesh Real Estate, NOIDA, YEIDA, LDA & Bhumidhari Title Due Diligence" },
        { "@type": "ListItem", position: 2, name: "Family Hierarchy, Coparcenary Isolation & Disinherison Legal Safeguards" },
        { "@type": "ListItem", position: 3, name: "Senior High Court Advocate Testamentary Drafting & Statutory Covenants" },
        { "@type": "ListItem", position: 4, name: "Client Clause-by-Clause Review, Khatauni Survey Check & Executor Concurrence" },
        { "@type": "ListItem", position: 5, name: "Medical Capacity Certification & Statutory Two-Witness Attestation" },
        { "@type": "ListItem", position: 6, name: "Uttar Pradesh IGRSUP Sub-Registrar Registration & Development Authority Mutation Dossier Support" },
      ],
    },
  ],
};

/* ──────────────────────── MAIN COMPONENT ───────────────────────── */
export default function WillDraftingUttarPradeshClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);

  const toggleFaq = (id: string) => {
    setExpandedFaqs((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };


  const handleShare = (platform: string) => {
    const url = PAGE_URL;
    const text = "Will Drafting Services in Uttar Pradesh: Top Estate & Succession Lawyers – AMA Legal Solutions";
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
    { label: "Will Drafting Services in Uttar Pradesh", href: PAGE_SLUG },
  ];

  return (
    <>
      <Script
        id="will-drafting-up-schema"
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
                Expert <span className="text-[#D2A02A]">Will Drafting Services in Uttar Pradesh</span>: Succession &amp; Estate Planning Lawyers
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                Safeguard your multi-generational family estate across New Okhla Industrial Development Authority (NOIDA) sectors, Greater Noida (GNIDA), Yamuna Expressway (YEIDA), Lucknow Development Authority (LDA), Ghaziabad (GDA), Kanpur (KDA), Agra, Varanasi, and ancestral agricultural Bhumidhari lands. Retain senior High Court advocates for customized, court-admissible testamentary instruments strictly compliant with the Indian Succession Act, 1925 and the Uttar Pradesh Revenue Code, 2006—backed by transparent fixed legal advisory without hourly markups or surprise corporate firm retainers.
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
                    <span className="text-gray-400">⏱️</span> 17 Min Read
                  </div>
                </div>
              </div>
            </div>

            {/* Right col — Image Card */}
            <div className="flex justify-center lg:justify-end w-full mt-6 lg:mt-0 lg:col-span-4">
              <div className="w-[90%] sm:w-[80%] lg:w-full rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-white flex items-center justify-center">
                <img
                  src="/images/og/will-drafting-services-in-uttar-pradesh.png"
                  alt="Will Drafting Services in Uttar Pradesh - Expert Estate Planning & Succession Legal Advisory by AMA Legal Solutions"
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
                    &bull; Serving Uttar Pradesh, Allahabad High Court &amp; Lucknow Bench
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
                    <h2>Quick Answer: What Do Professional Will Drafting Services in Uttar Pradesh Cover?</h2>
                  </div>
                  <p className="text-gray-900 font-normal leading-relaxed text-sm md:text-base">
                    Professional will drafting services in Uttar Pradesh provide property owners, business families, and Non-Resident Indians (NRIs) with customized, court-admissible testamentary instruments drafted in strict compliance with Section 59 and Section 63 of the Indian Succession Act, 1925. Retaining dedicated succession advocates guarantees precise legal scheduling of New Okhla Industrial Development Authority (NOIDA) leasehold plots, Greater Noida (GNIDA) and Yamuna Expressway (YEIDA) allotments, Lucknow Development Authority (LDA) properties, commercial corporate equity, and agricultural Bhumidhari land under Section 107 of the Uttar Pradesh Revenue Code, 2006, completely preventing bitter family partition suits and enabling direct title mutation without the requirement of court probate. Transparent fixed legal advisory allows Uttar Pradesh residents and overseas diaspora families to secure complete testamentary protection and Sub-Registrar registration guidance while avoiding excessive corporate law firm hourly retainers.
                  </p>
                </div>

                {/* ================= SECTION 1: UP SUCCESSION LANDSCAPE ================= */}
                <section id="up-succession-landscape" className="scroll-mt-28 space-y-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1a202c]">
                    The Uttar Pradesh Real Estate &amp; Succession Landscape: NOIDA, YEIDA, LDA &amp; Bhumidhari Landholdings
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    The State of Uttar Pradesh features India&apos;s most dynamic and legally intricate real estate ecosystem. Across the vibrant National Capital Region (NCR) industrial corridor of Gautam Buddha Nagar (NOIDA, Greater Noida) and Ghaziabad, property ownership is predominantly governed by statutory urban development bodies established under the Uttar Pradesh Industrial Area Development Act, 1976. In these high-value master-planned sectors, prime residential kothis, multi-storied group housing societies, builder floors, and commercial SCOs are held on 90-year lease deeds issued by the <a href="https://noidaauthorityonline.in" target="_blank" rel="noopener noreferrer" className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold">New Okhla Industrial Development Authority (NOIDA)</a>, the <a href="https://www.greaternoidaauthority.in" target="_blank" rel="noopener noreferrer" className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold">Greater Noida Industrial Development Authority (GNIDA)</a>, and the <a href="https://yamunaexpresswayauthority.com" target="_blank" rel="noopener noreferrer" className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold">Yamuna Expressway Industrial Development Authority (YEIDA)</a>. Similarly, across central and eastern regions, major urban real estate is administered by development authorities created under the Uttar Pradesh Urban Planning and Development Act, 1973, such as the <a href="https://www.ldaonline.co.in" target="_blank" rel="noopener noreferrer" className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold">Lucknow Development Authority (LDA)</a>, the Kanpur Development Authority (KDA), and the Varanasi Development Authority (VDA).
                  </p>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    Simultaneously, agrarian property across Uttar Pradesh is anchored in agricultural landholdings governed by the <a href="https://www.indiacode.nic.in/handle/123456789/19448" target="_blank" rel="noopener noreferrer" className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold">Uttar Pradesh Revenue Code, 2006 (U.P. Act No. 8 of 2012)</a>. Generational land records are maintained in computerized Khatauni registers, Khasra maps, and Gata ledgers accessible through the state&apos;s digital portal <a href="https://upbhulekh.gov.in" target="_blank" rel="noopener noreferrer" className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold">UP Bhulekh</a>. When a patriarch or landholder passes away intestate (without executing a legally valid will), the estate is subjected to mechanical division under statutory succession rules. In agrarian holdings, this triggers bitter revenue partition suits under Section 116 of the UP Revenue Code, 2006 before the Sub-Divisional Officer (SDO), freezing agricultural lands, tubewell irrigation rights, and commercial conversions under Section 80 of the Revenue Code for decades.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    Furthermore, Uttar Pradesh is home to prominent industrial and commercial enterprise dynasties spanning Kanpur leather and manufacturing hubs, Ghaziabad and Meerut manufacturing clusters, Agra export houses, and Varanasi silk and hospitality trades. High Net Worth Individuals (HNIs) and Non-Resident Indians (NRIs) residing in the United States, the United Kingdom, Canada, the United Arab Emirates, and Australia maintain substantial ancestral havelis, luxury NCR condominiums, and agricultural estates across the state. In the absence of an advocate-drafted, unassailable testamentary document, these high-value estates become primary targets for fraudulent General Power of Attorney (GPA) syndicates, forged mutation applications before local Lekhpals, and protracted civil partition litigation before Civil Judges and the Allahabad High Court.
                  </p>
                </section>

                {/* ================= SECTION 2: STATUTORY FRAMEWORK ================= */}
                <section id="statutory-framework" className="scroll-mt-28 space-y-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#5A4C33]">
                    Statutory Framework: Indian Succession Act, 1925 &amp; the Uttar Pradesh Revenue Code, 2006
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    Will drafting in Uttar Pradesh is governed by an interlocking framework of central succession enactments and state-specific land revenue codes. Understanding these statutory provisions is essential for executing a testament that withstands civil and revenue court challenges:
                  </p>

                  <div className="space-y-4 my-6">
                    <div className="p-5 border-l-4 border-[#D2A02A] bg-gray-50 rounded-r-xl">
                      <h3 className="font-bold text-gray-900 text-base mb-1">
                        1. Testamentary Capacity &amp; Execution (Sections 59 &amp; 63, Indian Succession Act, 1925)
                      </h3>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        Every person of sound disposing mind who is not a minor possesses testamentary capacity to dispose of their property by will. Under Section 63, the testator must sign or affix their mark to the will in the presence of at least two attesting witnesses, each of whom must sign the document in the testator&apos;s presence and sight. While registration is optional under Section 18(e) of the Registration Act, 1908, advocate-supervised execution ensures strict conformity with Section 68 of the Indian Evidence Act (now Section 67 of the Bharatiya Sakshya Adhiniyam, 2023).
                      </p>
                    </div>

                    <div className="p-5 border-l-4 border-[#D2A02A] bg-gray-50 rounded-r-xl">
                      <h3 className="font-bold text-gray-900 text-base mb-1">
                        2. Bequest of Bhumidhari Land (Section 107, UP Revenue Code, 2006)
                      </h3>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        Under Section 107(1) of the Uttar Pradesh Revenue Code, 2006, a Bhumidhar with transferable rights may bequeath their agricultural holding or any part thereof by will in writing. Crucially, Section 107(2) stipulates that no Bhumidhar belonging to a Scheduled Caste shall have the right to bequeath any holding to a person not belonging to a Scheduled Caste without prior permission of the Collector as provided under Section 98. Any will executed in violation of this statutory protection is legally void.
                      </p>
                    </div>

                    <div className="p-5 border-l-4 border-[#D2A02A] bg-gray-50 rounded-r-xl">
                      <h3 className="font-bold text-gray-900 text-base mb-1">
                        3. Summary Revenue Mutation on Basis of Will (Sections 34 &amp; 35, UP Revenue Code, 2006)
                      </h3>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        Upon the testator&apos;s death, the testamentary beneficiary applies for revenue mutation before the jurisdictional Tehsildar or Naib Tehsildar under Section 34 of the UP Revenue Code, 2006. If the will is registered under the Registration Act, 1908 and supported by affidavits from attesting witnesses, mutation in Khatauni records is processed expeditiously under Section 35, pre-empting frivolous objections by excluded legal heirs.
                      </p>
                    </div>

                    <div className="p-5 border-l-4 border-[#D2A02A] bg-gray-50 rounded-r-xl">
                      <h3 className="font-bold text-gray-900 text-base mb-1">
                        4. Devolution of Apartment &amp; Group Housing Units (UP Apartment Act, 2010)
                      </h3>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        Under Section 5 of the Uttar Pradesh Apartment (Promotion of Construction, Ownership and Maintenance) Act, 2010, each apartment together with its undivided interest in common areas constitutes heritable and transferable immovable property. An advocate-drafted will ensures that the apartment and its designated car parking allocations are transferred seamlessly to the designated legatee without objections from Resident Welfare Associations (RWAs).
                      </p>
                    </div>
                  </div>
                </section>

                {/* ================= SECTION 3: PROBATE IN UTTAR PRADESH ================= */}
                <section id="probate-up-nuance" className="scroll-mt-28 space-y-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1a202c]">
                    Probate in Uttar Pradesh: Is Court Probate Legally Mandatory for Real Estate?
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    One of the most widespread legal misconceptions among property owners and families in Uttar Pradesh is that a will cannot be acted upon without first obtaining probate from a District Judge or the High Court. This confusion frequently results in unnecessary litigation, court fee expenditures, and multi-year delays in property mutations.
                  </p>

                  <div className="bg-amber-50/50 p-6 rounded-2xl border border-amber-200/70 my-4 space-y-3">
                    <h3 className="text-lg font-bold text-[#5A4C33]">
                      The Statutory Mandate: Section 213 Read with Section 57 of the Indian Succession Act, 1925
                    </h3>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                      Under Section 213(1) of the Indian Succession Act, 1925, no right as executor or legatee can be established in any court of justice unless a court of competent jurisdiction has granted probate of the will. However, subsection (2) of Section 213 explicitly carves out an exception: it limits the mandatory application of subsection (1) strictly to wills specified in clauses (a) and (b) of Section 57—namely, wills executed within the territories subject to the Lieutenant-Governor of Bengal or within the local limits of the ordinary original civil jurisdiction of the High Courts of Judicature at Madras and Bombay (the historic Presidency towns of Kolkata, Chennai, and Mumbai).
                    </p>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                      For all other territories of India—including the entire State of Uttar Pradesh—probate is <strong>not mandatory</strong>. This statutory interpretation has been authoritatively settled by the Supreme Court of India in <em>Clarence Pais v. Union of India</em> (AIR 2001 SC 1151) and affirmed in numerous landmark judgments of the Hon&apos;ble High Court of Judicature at Allahabad, including <em>Smt. Saroj Sharma v. Civil Judge</em> and <em>Pitamo v. Shyam Singh</em>.
                    </p>
                  </div>

                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    Consequently, beneficiaries of a will executed in Uttar Pradesh are legally entitled to enforce their testamentary rights directly. Statutory urban development authorities such as NOIDA, Greater Noida, YEIDA, LDA, and GDA, as well as municipal corporations and Tehsil revenue offices, are legally mandated to mutate property titles upon receiving a certified copy of the registered will, the testator&apos;s death certificate, affidavits from legal heirs, and standard indemnity documentation—without demanding a court probate order.
                  </p>
                </section>

                {/* ================= SECTION 4: INDUSTRIALISTS & NRI SUCCESSION ================= */}
                <section id="industrialists-nri-succession" className="scroll-mt-28 space-y-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#5A4C33]">
                    NCR Industrialists, Real Estate Dynasties &amp; NRI Succession Safeguards
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    Succession planning for prominent business dynasties, real estate developers, and Non-Resident Indians (NRIs) holding substantial assets in Uttar Pradesh demands sophisticated testamentary architecture that insulates commercial operations and cross-border wealth from family deadlock:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                    <div className="p-4 border border-gray-200 rounded-xl bg-[#fcfbf9]">
                      <h3 className="font-bold text-gray-900 text-sm mb-1">NOIDA, GNIDA &amp; YEIDA Leasehold Structuring</h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Authority-allotted properties held on 90-year lease deeds involve specific transfer charges, unearned increase covenants, and builder-buyer timelines. Our advocates integrate precise clauses that fulfill authority transfer guidelines, ensuring seamless lease deed substitution without administrative rejections.
                      </p>
                    </div>

                    <div className="p-4 border border-gray-200 rounded-xl bg-[#fcfbf9]">
                      <h3 className="font-bold text-gray-900 text-sm mb-1">Corporate Equity &amp; Partnership Succession</h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Industrial families in Kanpur, Ghaziabad, and Noida holding shareholding in private limited companies or manufacturing partnerships require testamentary clauses harmonized with company Articles of Association (AoA) to ensure unbroken managerial control and board voting rights.
                      </p>
                    </div>

                    <div className="p-4 border border-gray-200 rounded-xl bg-[#fcfbf9]">
                      <h3 className="font-bold text-gray-900 text-sm mb-1">Overseas NRI Consular Execution</h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Under the Diplomatic and Consular Officers (Oaths and Fees) Act, 1948, Non-Resident Indians residing in the USA, UK, Canada, UAE, or Singapore can execute their Indian will before an authorized Indian Consular Officer. The diplomatic seal establishes prima facie authenticity under Section 85 of the Indian Evidence Act.
                      </p>
                    </div>

                    <div className="p-4 border border-gray-200 rounded-xl bg-[#fcfbf9]">
                      <h3 className="font-bold text-gray-900 text-sm mb-1">Anti-Land Grab &amp; GPA Revocation Covenants</h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        To protect vacant ancestral farmlands, urban plots, and kothis across Uttar Pradesh from predatory land syndicates, our testaments incorporate explicit clauses revoking all previous General and Special Powers of Attorney, terminating any implied caretaker or relative authority.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ================= SECTION 5: COMPARISON MATRIX ================= */}
                <section id="comparison-matrix" className="scroll-mt-28 space-y-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1a202c]">
                    Comparative Matrix: Free DIY Templates vs. Corporate Retainers vs. AMA Legal Solutions
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    Property holders and family offices evaluating testamentary drafting options in Uttar Pradesh must evaluate legal enforceability, statutory revenue compliance, and advisory transparency:
                  </p>

                  <div className="overflow-x-auto my-6">
                    <table className="min-w-full bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                      <thead className="bg-[#5A4C33] text-white text-xs sm:text-sm">
                        <tr>
                          <th className="py-3 px-4 text-left font-semibold">Evaluation Parameters</th>
                          <th className="py-3 px-4 text-left font-semibold bg-[#4b3f2b]">Automated DIY Online Templates</th>
                          <th className="py-3 px-4 text-left font-semibold bg-[#D2A02A] text-black">AMA Legal Solutions (Uttar Pradesh)</th>
                          <th className="py-3 px-4 text-left font-semibold">Tier-1 Corporate Law Firms</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 text-xs sm:text-sm text-gray-700">
                        <tr className="hover:bg-amber-50/40 transition-colors">
                          <td className="py-3 px-4 font-bold text-gray-900">Legal Accountability &amp; Counsel</td>
                          <td className="py-3 px-4 text-red-600">Zero legal advice; explicit &ldquo;as-is&rdquo; liability disclaimers</td>
                          <td className="py-3 px-4 text-emerald-800 font-bold bg-amber-50/30">Senior High Court succession advocates directly responsible</td>
                          <td className="py-3 px-4 text-gray-600">Junior associates draft; partners review at billing markups</td>
                        </tr>
                        <tr className="hover:bg-amber-50/40 transition-colors">
                          <td className="py-3 px-4 font-bold text-gray-900">UP Laws (NOIDA, YEIDA &amp; Revenue Code)</td>
                          <td className="py-3 px-4 text-red-600">Completely omitted; generic text causes authority/revenue rejection</td>
                          <td className="py-3 px-4 text-emerald-800 font-bold bg-amber-50/30">Precise scheduling compliant with NOIDA/LDA guidelines &amp; UP Revenue Code</td>
                          <td className="py-3 px-4 text-gray-600">Included, but billed as separate real estate advisory modules</td>
                        </tr>
                        <tr className="hover:bg-amber-50/40 transition-colors">
                          <td className="py-3 px-4 font-bold text-gray-900">Fee Model &amp; Commercial Structure</td>
                          <td className="py-3 px-4 text-gray-600">Unreliable free tier or hidden recurring subscription charges</td>
                          <td className="py-3 px-4 text-emerald-800 font-bold bg-amber-50/30">Transparent fixed legal advisory; zero hourly retainers</td>
                          <td className="py-3 px-4 text-red-600">Exorbitant hourly billing rates and heavy advance retainers</td>
                        </tr>
                        <tr className="hover:bg-amber-50/40 transition-colors">
                          <td className="py-3 px-4 font-bold text-gray-900">Court Admissibility &amp; Evidentiary Strength</td>
                          <td className="py-3 px-4 text-red-600">Highly vulnerable to undue influence challenges in civil courts</td>
                          <td className="py-3 px-4 text-emerald-800 font-bold bg-amber-50/30">Court-tested clauses with medical fitness and witness protocols</td>
                          <td className="py-3 px-4 text-emerald-700">Legally strong, but cost-prohibitive for private families</td>
                        </tr>
                        <tr className="hover:bg-amber-50/40 transition-colors">
                          <td className="py-3 px-4 font-bold text-gray-900">Sub-Registrar Registration Support (IGRSUP)</td>
                          <td className="py-3 px-4 text-red-600">No physical or local administrative support provided</td>
                          <td className="py-3 px-4 text-emerald-800 font-bold bg-amber-50/30">Complete appointment, IGRSUP portal, and advocate identification support</td>
                          <td className="py-3 px-4 text-gray-600">Billed as an additional administrative clerkage expense</td>
                        </tr>
                        <tr className="hover:bg-amber-50/40 transition-colors">
                          <td className="py-3 px-4 font-bold text-gray-900">NRI Cross-Border Asset Integration</td>
                          <td className="py-3 px-4 text-red-600">Incapable of handling cross-border jurisdictions or consular execution</td>
                          <td className="py-3 px-4 text-emerald-800 font-bold bg-amber-50/30">Dedicated NRI testamentary structuring harmonized with overseas wills</td>
                          <td className="py-3 px-4 text-gray-600">Offered at premium international cross-border rates</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* ================= SECTION 6: ESSENTIAL TESTAMENTARY CLAUSES ================= */}
                <section id="essential-clauses" className="scroll-mt-28 space-y-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#5A4C33]">
                    8 Critical Testamentary Clauses for Uttar Pradesh Estates
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    Drafting a dispute-proof will in Uttar Pradesh requires precise statutory language tailored to the state&apos;s distinctive property classifications:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                    <div className="p-4 border border-gray-200 rounded-xl bg-white shadow-xs">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-6 h-6 rounded-full bg-[#D2A02A] text-white flex items-center justify-center font-bold text-xs">1</span>
                        <h3 className="font-bold text-gray-900 text-sm">Exhaustive Asset &amp; Revenue Scheduling</h3>
                      </div>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Every property must be scheduled with exact authority sector/plot numbers, registered lease deed details, or agricultural Khasra, Khatauni, and Gata numbers matching computerized UP Bhulekh records to prevent mutation rejections.
                      </p>
                    </div>

                    <div className="p-4 border border-gray-200 rounded-xl bg-white shadow-xs">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-6 h-6 rounded-full bg-[#D2A02A] text-white flex items-center justify-center font-bold text-xs">2</span>
                        <h3 className="font-bold text-gray-900 text-sm">Clear Revocation of Prior Instruments &amp; GPAs</h3>
                      </div>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Explicit revocation of all prior wills, codicils, and powers of attorney (GPAs/SPAs) executed regarding Uttar Pradesh properties, completely terminating any implied authority previously granted to third parties or caretakers.
                      </p>
                    </div>

                    <div className="p-4 border border-gray-200 rounded-xl bg-white shadow-xs">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-6 h-6 rounded-full bg-[#D2A02A] text-white flex items-center justify-center font-bold text-xs">3</span>
                        <h3 className="font-bold text-gray-900 text-sm">Life Interest &amp; Spousal Protection</h3>
                      </div>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Creating exclusive, unassailable life interests in the matrimonial home for the surviving spouse under Section 119 of the Indian Succession Act, preventing children or third parties from alienating the home during the spouse&apos;s lifetime.
                      </p>
                    </div>

                    <div className="p-4 border border-gray-200 rounded-xl bg-white shadow-xs">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-6 h-6 rounded-full bg-[#D2A02A] text-white flex items-center justify-center font-bold text-xs">4</span>
                        <h3 className="font-bold text-gray-900 text-sm">Independent Attesting Witness Selection</h3>
                      </div>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Strict compliance with Section 67 of the Indian Succession Act, ensuring no attesting witness or their spouse receives any legacy under the will, thereby preserving their absolute statutory competence in court.
                      </p>
                    </div>

                    <div className="p-4 border border-gray-200 rounded-xl bg-white shadow-xs">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-6 h-6 rounded-full bg-[#D2A02A] text-white flex items-center justify-center font-bold text-xs">5</span>
                        <h3 className="font-bold text-gray-900 text-sm">Testamentary Trusts for Minor Children</h3>
                      </div>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Establishing private testamentary trusts under the Indian Trusts Act, 1882 to manage real estate, corporate dividends, and educational expenses for minor children until they attain the age of majority or completion of higher education.
                      </p>
                    </div>

                    <div className="p-4 border border-gray-200 rounded-xl bg-white shadow-xs">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-6 h-6 rounded-full bg-[#D2A02A] text-white flex items-center justify-center font-bold text-xs">6</span>
                        <h3 className="font-bold text-gray-900 text-sm">Executor Designation with Authority Powers</h3>
                      </div>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Appointing trusted executors and alternate executors endowed with explicit powers to represent the estate before NOIDA, YEIDA, LDA, municipal bodies, and banks, facilitating seamless asset distribution without administrative bottlenecks.
                      </p>
                    </div>

                    <div className="p-4 border border-gray-200 rounded-xl bg-white shadow-xs">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-6 h-6 rounded-full bg-[#D2A02A] text-white flex items-center justify-center font-bold text-xs">7</span>
                        <h3 className="font-bold text-gray-900 text-sm">Contemporaneous Medical Fitness Certification</h3>
                      </div>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Attaching an official medical fitness certificate from a registered medical practitioner affirming sound mental disposing state on the date of execution, conclusively neutralizing allegations of testamentary incapacity or senility.
                      </p>
                    </div>

                    <div className="p-4 border border-gray-200 rounded-xl bg-white shadow-xs">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-6 h-6 rounded-full bg-[#D2A02A] text-white flex items-center justify-center font-bold text-xs">8</span>
                        <h3 className="font-bold text-gray-900 text-sm">Specific Disinheritance Covenants</h3>
                      </div>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Where a legal heir is consciously excluded or allocated a reduced share, articulating clear, objective, non-defamatory testamentary rationales to dispel legal presumptions of unnatural disposition or undue coercion.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ================= SECTION 7: SIX-STEP PROTOCOL ================= */}
                <section id="six-step-protocol" className="scroll-mt-28 space-y-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1a202c]">
                    The 6-Step Advocate Drafting Protocol for Uttar Pradesh Estates
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    At AMA Legal Solutions, our testamentary lawyers follow a rigorous, stage-gated protocol designed to deliver dispute-proof wills:
                  </p>

                  <div className="space-y-4 my-6">
                    <div className="flex items-start gap-4 p-4 rounded-xl border border-gray-200 bg-white">
                      <div className="w-9 h-9 rounded-full bg-[#5A4C33] text-[#D2A02A] flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                        1
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-sm md:text-base mb-1">
                          Exhaustive Real Estate, Development Authority &amp; Bhumidhari Title Due Diligence
                        </h3>
                        <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                          We review all underlying title deeds, lease allotment letters from NOIDA, Greater Noida, YEIDA, or LDA, builder-buyer contracts, conveyance deeds, and UP Bhulekh Khatauni records to confirm clear ownership and transferable rights.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-xl border border-gray-200 bg-white">
                      <div className="w-9 h-9 rounded-full bg-[#5A4C33] text-[#D2A02A] flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                        2
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-sm md:text-base mb-1">
                          Family Tree Mapping, Coparcenary Isolation &amp; Disinherison Legal Safeguards
                        </h3>
                        <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                          We map the full family tree across Class I and Class II legal heirs, demarcate personal self-acquired assets from undivided ancestral coparcenary shares, and structure legally defensible disinheritance rationales.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-xl border border-gray-200 bg-white">
                      <div className="w-9 h-9 rounded-full bg-[#5A4C33] text-[#D2A02A] flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                        3
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-sm md:text-base mb-1">
                          Senior High Court Advocate Testamentary Drafting &amp; Statutory Covenants
                        </h3>
                        <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                          Our senior succession advocates craft the complete testamentary instrument incorporating specific bequests, residuary clauses, survivorship provisions, and authority transfer mandates strictly aligned with the Indian Succession Act, 1925.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-xl border border-gray-200 bg-white">
                      <div className="w-9 h-9 rounded-full bg-[#5A4C33] text-[#D2A02A] flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                        4
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-sm md:text-base mb-1">
                          Client Clause-by-Clause Review, Khatauni Survey Verification &amp; Executor Concurrence
                        </h3>
                        <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                          We conduct an interactive consultation with the testator to review every clause, verify asset schedules against ground records, confirm executor willingness to serve, and refine customized testamentary instructions.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-xl border border-gray-200 bg-white">
                      <div className="w-9 h-9 rounded-full bg-[#5A4C33] text-[#D2A02A] flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                        5
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-sm md:text-base mb-1">
                          Medical Capacity Certification &amp; Statutory Two-Witness Attestation Protocol
                        </h3>
                        <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                          We facilitate execution with an accompanying medical fitness certification from a licensed physician and oversee physical signing by two independent adult witnesses in accordance with Section 63 of the Succession Act.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-xl border border-gray-200 bg-white">
                      <div className="w-9 h-9 rounded-full bg-[#5A4C33] text-[#D2A02A] flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                        6
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-sm md:text-base mb-1">
                          Uttar Pradesh IGRSUP Sub-Registrar Registration &amp; Mutation Dossier Support
                        </h3>
                        <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                          We manage appointment booking on the IGRSUP portal, coordinate physical registration before the jurisdictional Sub-Registrar&apos;s Office (SRO), and assemble a comprehensive mutation dossier for NOIDA, LDA, or Tehsil authorities.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* ================= SECTION 8: INFOGRAPHIC SECTION ================= */}
                <section id="infographic-section" className="scroll-mt-28 space-y-4">
                  <div className="my-10 p-4 sm:p-6 bg-gradient-to-br from-[#FAF7F0] via-white to-[#F7F3E9] border-2 border-[#D2A02A]/35 rounded-2xl shadow-sm text-center">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                      Uttar Pradesh Testamentary Architecture Blueprint
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 max-w-2xl mx-auto mb-5">
                      Comprehensive estate planning and succession framework designed by senior High Court advocates at AMA Legal Solutions, integrating UP RERA, NOIDA/YEIDA leaseholds, and UP Revenue Code Bhumidhari land protections.
                    </p>
                    <div className="rounded-xl overflow-hidden border border-gray-200 shadow-md max-w-4xl mx-auto bg-white">
                      <img
                        src="/images/og/will-drafting-services-in-uttar-pradesh.png"
                        alt="Will Drafting Services in Uttar Pradesh Architecture Blueprint - AMA Legal Solutions"
                        className="w-full h-auto object-contain"
                      />
                    </div>
                    <p className="text-[11px] text-gray-500 mt-3 italic">
                      Figure 1.0: Statutory testamentary workflow, asset scheduling, and authority transfer protocols for estates across Uttar Pradesh.
                    </p>
                  </div>
                </section>

                {/* ================= SECTION 9: REGISTRATION & MUTATION ================= */}
                <section id="registration-mutation-up" className="scroll-mt-28 space-y-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#5A4C33]">
                    IGRSUP Sub-Registrar Registration &amp; Authority/Tehsil Mutation Protocols
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    While registration of a will is optional under Section 18(e) of the Registration Act, 1908, registering a testamentary instrument in Uttar Pradesh provides immense evidentiary weight. An un-registered will often invites intense judicial scrutiny and prolonged evidentiary inquiries under Section 68 of the Evidence Act.
                  </p>

                  <div className="space-y-4 my-6">
                    <div className="p-4 rounded-xl border border-gray-200 bg-[#fcfbf9]">
                      <h3 className="font-bold text-gray-900 text-sm mb-1">
                        1. Digital Slot Booking via IGRSUP Portal
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Will registration in Uttar Pradesh is facilitated online through the <a href="https://igrsup.gov.in" target="_blank" rel="noopener noreferrer" className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold">Inspector General of Registration and Stamps Uttar Pradesh (IGRSUP)</a> portal. Our legal team handles appointment scheduling, data entry of parties, and documentation uploads for the jurisdictional Sub-Registrar&apos;s Office (SRO) in Noida, Greater Noida, Ghaziabad, Lucknow, Kanpur, Agra, Varanasi, or Allahabad.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl border border-gray-200 bg-[#fcfbf9]">
                      <h3 className="font-bold text-gray-900 text-sm mb-1">
                        2. SRO Physical Appearance &amp; Biometric Recording
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        On the designated date, the testator and two attesting witnesses appear before the Sub-Registrar. The SRO verifies identity documents (Aadhaar cards, PAN cards), captures biometric thumb impressions and high-resolution photographs, and records the testator&apos;s voluntary confirmation of execution under Sections 32 and 35 of the Registration Act, 1908.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl border border-gray-200 bg-[#fcfbf9]">
                      <h3 className="font-bold text-gray-900 text-sm mb-1">
                        3. NOIDA / YEIDA / LDA Property Mutation
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Following the testator&apos;s demise, the testamentary legatee submits a formal mutation application to the Estate/Property Officer of NOIDA, GNIDA, YEIDA, or LDA accompanied by the certified registered will, original death certificate, affidavits from legal heirs, and an indemnity bond. The authority publishes a public notice in leading dailies and executes a transfer memorandum or fresh lease deed in favor of the beneficiary.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl border border-gray-200 bg-[#fcfbf9]">
                      <h3 className="font-bold text-gray-900 text-sm mb-1">
                        4. Agricultural Land Mutation before the Tehsildar (UP Bhulekh)
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        For agricultural Bhumidhari lands, the legatee files a mutation report under Section 34 of the UP Revenue Code, 2006 before the Tehsildar. Following issuance of proclamation and verification of the registered will, the Revenue Court orders substitution of names in the Khatauni register, which is subsequently updated on the public UP Bhulekh portal.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ================= SECTION 10: WHY CHOOSE AMA LEGAL ================= */}
                <section id="why-ama-legal" className="scroll-mt-28 space-y-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1a202c]">
                    Why Choose AMA Legal Solutions for Will Drafting in Uttar Pradesh
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    Estate planning involves protecting decades of hard work, family harmony, and irreplaceable multi-generational assets. Clients across Uttar Pradesh trust AMA Legal Solutions for distinct reasons:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                    <div className="p-4 rounded-xl border border-gray-200 bg-white">
                      <h3 className="font-bold text-gray-900 text-sm mb-1">Senior High Court Advocate Oversight</h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Every will is personally drafted and vetted by senior advocates with deep litigation experience before the Allahabad High Court, Lucknow Bench, and civil courts across Uttar Pradesh.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl border border-gray-200 bg-white">
                      <h3 className="font-bold text-gray-900 text-sm mb-1">Transparent Fixed Legal Advisory</h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        We operate on a transparent fixed legal advisory model, completely eliminating hourly billing markups, unexpected retainers, or junior associate billable surprises typical of large corporate firms.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl border border-gray-200 bg-white">
                      <h3 className="font-bold text-gray-900 text-sm mb-1">UP Development Authority Mastery</h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Comprehensive familiarity with lease deed clauses, transfer guidelines, and mutation formalities across NOIDA, Greater Noida, YEIDA, LDA, and GDA authorities.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl border border-gray-200 bg-white">
                      <h3 className="font-bold text-gray-900 text-sm mb-1">Dedicated Global NRI Desk</h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Turnkey assistance for overseas Indian families requiring consular attestation, video execution protocols, and harmonized cross-border testamentary structures.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ================= SECTION 11: FAQS (ACCORDION) ================= */}
                <section id="faqs" className="scroll-mt-28 space-y-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#5A4C33]">
                    Frequently Asked Questions on Will Drafting in Uttar Pradesh
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    Authoritative statutory answers to essential questions regarding wills, probate, and succession across Uttar Pradesh:
                  </p>

                  <div className="space-y-3 my-6">
                    {faqs.map((faq) => {
                      const isOpen = expandedFaqs.includes(faq.id);
                      return (
                        <div
                          key={faq.id}
                          className="border border-gray-200 rounded-xl overflow-hidden transition-colors"
                        >
                          <button
                            onClick={() => toggleFaq(faq.id)}
                            className="w-full text-left p-4 sm:p-5 bg-white hover:bg-[#FAF7F0] transition flex items-center justify-between gap-4 cursor-pointer"
                            aria-expanded={isOpen}
                          >
                            <span className="font-bold text-gray-900 text-sm sm:text-base">
                              {faq.question}
                            </span>
                            <span className="text-[#D2A02A] text-xl font-bold shrink-0">
                              {isOpen ? "−" : "+"}
                            </span>
                          </button>
                          {isOpen && (
                            <div className="p-4 sm:p-5 bg-[#FAF7F0]/60 border-t border-gray-100 text-gray-700 text-xs sm:text-sm leading-relaxed">
                              {faq.answer}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </section>

                {/* ================= SECTION 12: INTERNAL GUIDES ================= */}
                <section id="internal-guides" className="scroll-mt-28 space-y-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1a202c]">
                    Related Legal &amp; Succession Guides
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    Explore our comprehensive network of estate planning, will drafting, and succession legal guides across India:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 my-4">
                    {[
                      ["/will-drafting-services-in-delhi", "Will Drafting in Delhi"],
                      ["/will-drafting-services-in-gurugram", "Will Drafting in Gurugram"],
                      ["/will-drafting-services-in-haryana", "Will Drafting in Haryana"],
                      ["/will-drafting-services-in-punjab", "Will Drafting in Punjab"],
                      ["/will-drafting-services-in-rajasthan", "Will Drafting in Rajasthan"],
                      ["/will-drafting-services-cheap", "Affordable Will Drafting"],
                      ["/best-will-drafting-services-in-india", "Best Will Drafting in India"],
                      ["/drafting-of-will", "Comprehensive Will Guide"],
                      ["/will-drafting-for-nri", "NRI Will Advisory Guide"],
                      ["/send-legal-notice-in-uttar-pradesh", "Legal Notice in Uttar Pradesh"],
                      ["/simple-will-format-download-free-legal-document-sample", "Simple Will Format Sample"],
                      ["/lok-adalat-will-drafting-services", "Lok Adalat & Will Drafting"],
                    ].map(([url, label]) => (
                      <Link
                        key={url}
                        href={url}
                        className="p-3 border border-gray-200 rounded-lg bg-gray-50 hover:bg-[#FAF7F0] hover:border-[#D2A02A] text-xs font-semibold text-gray-800 transition flex items-center justify-between"
                      >
                        <span>{label}</span>
                        <span className="text-[#D2A02A]">→</span>
                      </Link>
                    ))}
                  </div>
                </section>

                {/* ================= SECTION 13: CITATIONS & REFERENCES ================= */}
                <section id="citations" className="scroll-mt-28 space-y-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#5A4C33]">
                    References &amp; Statutory Authority
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    Official statutory portals, judicial repositories, and legislative enactments governing wills and succession in Uttar Pradesh:
                  </p>

                  <ul className="space-y-2 text-xs text-gray-700 list-disc pl-5">
                    <li>
                      <a
                        href="https://www.indiacode.nic.in/handle/123456789/2385"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold"
                      >
                        Indian Succession Act, 1925 (Act No. 39 of 1925)
                      </a>{" "}
                      – Legislative Department, Ministry of Law and Justice, Government of India.
                    </li>
                    <li>
                      <a
                        href="https://www.indiacode.nic.in/handle/123456789/19448"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold"
                      >
                        Uttar Pradesh Revenue Code, 2006 (U.P. Act No. 8 of 2012)
                      </a>{" "}
                      – Revenue Department, Government of Uttar Pradesh.
                    </li>
                    <li>
                      <a
                        href="https://igrsup.gov.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold"
                      >
                        IGRSUP (Inspector General of Registration and Stamps Uttar Pradesh)
                      </a>{" "}
                      – Official portal for Sub-Registrar online registration and appointment booking.
                    </li>
                    <li>
                      <a
                        href="https://upbhulekh.gov.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold"
                      >
                        UP Bhulekh (Computerized Land Records of Uttar Pradesh)
                      </a>{" "}
                      – Revenue Board, Government of Uttar Pradesh.
                    </li>
                    <li>
                      <a
                        href="https://noidaauthorityonline.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold"
                      >
                        New Okhla Industrial Development Authority (NOIDA)
                      </a>{" "}
                      – Transfer and mutation policies under UP Industrial Area Development Act, 1976.
                    </li>
                    <li>
                      <a
                        href="https://www.allahabadhighcourt.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold"
                      >
                        High Court of Judicature at Allahabad
                      </a>{" "}
                      – Judicial precedents on testamentary enforceability, probate exemptions, and revenue appeals.
                    </li>
                  </ul>
                </section>

                {/* Social Share Row at Bottom */}
                <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
                  <span className="text-xs sm:text-sm text-gray-500">
                    Did you find this guide helpful? Share it with family, colleagues, or NRI relatives:
                  </span>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => handleShare("facebook")}
                      className="px-3 py-1.5 bg-[#1877F2] text-white rounded-lg text-xs font-semibold hover:bg-blue-700 transition flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Facebook</span>
                    </button>
                    <button
                      onClick={() => handleShare("twitter")}
                      className="px-3 py-1.5 bg-black text-white rounded-lg text-xs font-semibold hover:bg-gray-800 transition flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>X (Twitter)</span>
                    </button>
                    <button
                      onClick={() => handleShare("linkedin")}
                      className="px-3 py-1.5 bg-[#0A66C2] text-white rounded-lg text-xs font-semibold hover:bg-blue-800 transition flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>LinkedIn</span>
                    </button>
                  </div>
                </div>

                {/* ══ COMPANY & MEDIA SECTION ══ */}
                <section className="bg-gradient-to-br from-[#FAF7F0] via-white to-[#F7F3E9] border-4 border-[#D2A02A] rounded-2xl p-6 md:p-10 shadow-sm text-center">
                  <div className="flex justify-center mb-4">
                    <img src={LOGO_URL} alt="AMA Legal Solutions" className="h-14 w-auto" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                    AMA Legal Solutions &bull; Uttar Pradesh Estate Planning Division
                  </h3>
                  <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed mb-6 text-sm md:text-base font-medium">
                    Serving Uttar Pradesh, High Court benches at Allahabad and Lucknow, and diaspora families globally with a{" "}
                    <strong className="text-[#D2A02A] font-bold">4.7 Google Rating</strong>, over{" "}
                    <strong className="text-[#D2A02A] font-bold">10,000+ Clients Served</strong>,{" "}
                    <strong className="text-[#D2A02A] font-bold">25,000+ Cases Handled</strong>, and
                    more than{" "}
                    <strong className="text-[#D2A02A] font-bold">40+ Years of Combined Legal Experience</strong> in
                    providing strategic testamentary drafting, estate planning, and succession advisory across Uttar Pradesh and India.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 max-w-5xl mx-auto">
                    <Link href="/drafting-of-will" className="px-3 py-2.5 border-2 border-[#D2A02A] text-[#5A4C33] font-bold rounded-lg hover:bg-[#D2A02A] hover:text-white transition-all text-center text-xs md:text-sm flex items-center justify-center">
                      Will Drafting Services
                    </Link>
                    <Link href="/will-drafting-for-nri" className="px-3 py-2.5 border-2 border-[#D2A02A] text-[#5A4C33] font-bold rounded-lg hover:bg-[#D2A02A] hover:text-white transition-all text-center text-xs md:text-sm flex items-center justify-center">
                      NRI Will Advisory
                    </Link>
                    <Link href="/family-lawyer" className="px-3 py-2.5 border-2 border-[#D2A02A] text-[#5A4C33] font-bold rounded-lg hover:bg-[#D2A02A] hover:text-white transition-all text-center text-xs md:text-sm flex items-center justify-center">
                      Estate &amp; Family Law
                    </Link>
                    <Link href="/will-drafting-services-in-delhi" className="px-3 py-2.5 border-2 border-[#D2A02A] text-[#5A4C33] font-bold rounded-lg hover:bg-[#D2A02A] hover:text-white transition-all text-center text-xs md:text-sm flex items-center justify-center">
                      Will Drafting Delhi NCR
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
                  Anuj Anand Malik, Founder of AMA Legal Solutions, is a senior advocate with extensive expertise in testamentary drafting, high-value estate planning, and succession litigation under Indian law across Uttar Pradesh, High Court benches, and tribunals.
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
                    ["/will-drafting-services-in-delhi", "Will Drafting in Delhi"],
                    ["/will-drafting-services-in-gurugram", "Will Drafting in Gurugram"],
                    ["/will-drafting-services-in-haryana", "Will Drafting in Haryana"],
                    ["/will-drafting-services-in-punjab", "Will Drafting in Punjab"],
                    ["/will-drafting-services-in-rajasthan", "Will Drafting in Rajasthan"],
                    ["/will-drafting-services-cheap", "Will Drafting Cheap"],
                    ["/best-will-drafting-services-in-india", "Best Will Drafting Services"],
                    ["/drafting-of-will", "Drafting of Will Guide"],
                    ["/will-drafting-for-nri", "Will Drafting for NRIs"],
                    ["/send-legal-notice-in-uttar-pradesh", "Legal Notice in Uttar Pradesh"],
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
