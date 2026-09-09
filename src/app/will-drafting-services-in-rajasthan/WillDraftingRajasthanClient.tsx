"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";

/* ─────────────────────────── CONSTANTS ─────────────────────────── */
const SITE = "https://www.amalegalsolutions.com";
const PAGE_SLUG = "/will-drafting-services-in-rajasthan";
const PAGE_URL = `${SITE}${PAGE_SLUG}`;
const OG_IMAGE_URL = `${SITE}/images/og/will-drafting-services-in-rajasthan.png`;
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
    question: "Is probate of a will mandatory for properties located in Rajasthan?",
    answer: "Under Section 213 read with Section 57 clauses (a) and (b) of the Indian Succession Act, 1925, probate is statutorily mandatory only for wills executed within or relating to immovable properties situated in the historic Presidency towns of Kolkata, Chennai, and Mumbai. The Hon'ble Rajasthan High Court in Bhanwar Lal v. Jamna Devi and the Supreme Court of India in Clarence Pais v. Union of India have authoritatively established that probate is not mandatory in the State of Rajasthan, empowering beneficiaries to mutate real estate directly before the Jaipur Development Authority (JDA), Jodhpur Development Authority, Urban Improvement Trusts (UITs), Municipal Corporations, and Tehsil revenue authorities without a court decree.",
  },
  {
    id: "faq-2",
    question: "What statutory requisites determine the legal validity of a will in Rajasthan?",
    answer: "Under Section 59 and Section 63 of the Indian Succession Act, 1925, a valid testamentary disposition in Rajasthan requires a testator possessing sound disposing mind who voluntarily signs or affixes their mark in the physical presence of at least two competent adult witnesses who attest in the testator's presence. While testamentary instruments are completely exempt from ad-valorem stamp duty under Article 64 of Schedule I of the Rajasthan Stamp Act, 1998, incorporating explicit asset schedules, executor designations, and medical capacity certificates is essential to withstand evidentiary scrutiny under Section 68 of the Indian Evidence Act before Rajasthan civil courts.",
  },
  {
    id: "faq-3",
    question: "How does testamentary succession apply to agricultural Khatedari land under the Rajasthan Tenancy Act, 1955?",
    answer: "Devolution of agricultural Khatedari tenancies in Rajasthan is governed by Section 38 through Section 40 of the Rajasthan Tenancy Act, 1955 (Act No. 3 of 1955) read with personal succession laws. A Khatedar tenant enjoys the statutory right to bequeath agricultural landholdings through a valid will, subject to the mandatory statutory restriction under Section 42 of the Rajasthan Tenancy Act, 1955, which prohibits the transfer or bequest of Khatedari rights belonging to a Scheduled Caste (SC) or Scheduled Tribe (ST) person in favor of any non-SC/ST individual.",
  },
  {
    id: "faq-4",
    question: "Can property owners in Jaipur Development Authority (JDA) or Rajasthan Housing Board (RHB) sectors transfer plots via a will?",
    answer: "Freehold residential plots, leasehold properties, commercial SCOs, and licensed builder floors developed by the Jaipur Development Authority (JDA), Jodhpur Development Authority, Urban Improvement Trusts (UITs), or Rajasthan Housing Board (RHB) can be freely bequeathed under Section 30 of the Hindu Succession Act, 1956. Upon the testator's demise, the testamentary legatee submits the advocate-drafted will along with the death certificate, legal heir affidavits, indemnity bond, and public notice documentation to the Estate Officer for direct ownership substitution and lease deed or patta re-allotment without requiring a court probate order.",
  },
  {
    id: "faq-5",
    question: "Why do free automated online DIY will templates fail in Rajasthan courts and authorities?",
    answer: "Automated online DIY templates utilize generic Western boilerplate clauses that fail to incorporate vital Indian statutory mandates, Rajasthan revenue land definitions (Khewat, Khatoni, Khasra numbers), or JDA and UIT leasehold transfer regulations. Under Section 81 of the Indian Succession Act, 1925, civil courts are strictly barred from admitting extrinsic oral evidence to cure patent ambiguities or conflicting testamentary bequests, frequently leading to testamentary voidance and decades of partition litigation before Rajasthan District and Revenue Courts.",
  },
  {
    id: "faq-6",
    question: "How can Non-Resident Indians (NRIs) and diaspora families protect their ancestral Rajasthan properties through a will?",
    answer: "Non-Resident Indians and diaspora business families holding ancestral havelis, commercial showrooms, or farmlands across Jaipur, Jodhpur, Udaipur, or Shekhawati can execute a legally binding will either in India before the jurisdictional Sub-Registrar through E-Panjiyan Rajasthan or abroad before the Indian Embassy or Consulate under the Diplomatic and Consular Officers (Oaths and Fees) Act, 1948. Retaining senior High Court succession advocates ensures the testament contains ironclad anti-GPA revocation covenants, contemporaneous video attestation, and detailed revenue schedules that safeguard properties from fraudulent land syndicates and unauthorized caretaker claims.",
  },
  {
    id: "faq-7",
    question: "Can an attesting witness inherit property under a will executed in Rajasthan?",
    answer: "Under Section 67 of the Indian Succession Act, 1925, any legacy, bequest, or estate interest devised to an attesting witness or the lawful spouse of an attesting witness is void ab initio. While the rest of the testamentary instrument remains legally operative, the attesting beneficiary entirely forfeits their devised inheritance, making the engagement of independent, disinterested adult witnesses an indispensable statutory requirement during testamentary execution.",
  },
  {
    id: "faq-8",
    question: "What is the legal distinction between bequeathing self-acquired property and ancestral coparcenary property in Rajasthan?",
    answer: "Under Section 30 of the Hindu Succession Act, 1956, a Hindu testator exercises unrestricted testamentary power to bequeath all self-acquired properties, business equity, and personal investments, as well as their defined undivided coparcenary interest in ancestral Hindu Undivided Family (HUF) property. However, a testator cannot bequeath another coparcener's distinct ancestral share without prior legal partition, requiring meticulous advocate drafting to clearly distinguish personal assets from joint coparcenary assets across Rajasthan.",
  },
];

/* ─────────────────────────── TOC DATA ──────────────────────────── */
const tocSections = [
  { id: "quick-answer", title: "Quick Answer: Will Drafting Services in Rajasthan" },
  { id: "rajasthan-succession-landscape", title: "Rajasthan Real Estate & Succession: JDA, UITs, Khatedari Land & NRIs" },
  { id: "statutory-framework", title: "Statutory Framework: Indian Succession Act, 1925 & Rajasthan Tenancy Act" },
  { id: "probate-rajasthan-nuance", title: "Probate in Rajasthan: Is Court Probate Legally Mandatory?" },
  { id: "marwari-nri-succession", title: "Marwari Business Dynasties & NRI Succession Safeguards" },
  { id: "comparison-matrix", title: "DIY Templates vs. Corporate Retainers vs. AMA Legal Solutions" },
  { id: "essential-clauses", title: "8 Critical Testamentary Clauses for Rajasthan Estates" },
  { id: "six-step-protocol", title: "The 6-Step Advocate Drafting Protocol" },
  { id: "infographic-section", title: "Rajasthan Testamentary Architecture Blueprint" },
  { id: "registration-mutation-rajasthan", title: "E-Panjiyan Sub-Registrar Registration & JDA/Tehsil Mutation" },
  { id: "why-ama-legal", title: "Why Choose AMA Legal Solutions in Rajasthan" },
  { id: "faqs", title: "Frequently Asked Questions" },
  { id: "internal-guides", title: "Related Legal & Succession Guides" },
  { id: "citations", title: "References & Statutory Authority" },
];

/* ────────────────────────── SCHEMA DATA ────────────────────────── */
const clientReviewData = {
  ratingValue: "5.0",
  bestRating: "5",
  reviewCount: "1",
  authorName: "Vikramaditya Singh Rathore",
  authorTitle: "Managing Director, Heritage Hospitality Group & Agricultural Landholder, Jaipur, Jodhpur & Shekhawati • Verified Client",
  reviewBody:
    "Structuring our multi-generational family estate across Jaipur commercial properties in C-Scheme, JDA residential plots in Jagatpura, agricultural Khatedari land in Shekhawati, and our heritage hotel holdings in Jodhpur was fraught with complex succession challenges. Given the risks of family disputes, intricate Rajasthan Tenancy Act provisions, and ambiguous revenue Jamabandi mutations, we sought senior High Court advocates rather than generic online templates. AMA Legal Solutions provided consummate legal stewardship. Advocate Anuj Anand Malik meticulously drafted our family will, resolving coparcenary demarcations, drafting robust spousal life-interest covenants, and aligning every asset with JDA transfer guidelines and Tehsil revenue protocols. Their transparent fixed legal advisory shielded our estate from exorbitant corporate law firm retainers while providing absolute, dispute-proof peace of mind. For any family, business owner, or NRI seeking the highest caliber will drafting services in Rajasthan, AMA Legal Solutions is without equal.",
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "Will Drafting Services in Rajasthan: Top Estate & Succession Lawyers | AMA Legal Solutions",
      description:
        "Expert will drafting services in Rajasthan by senior High Court advocates. Protect your family's estate, JDA/UIT plots, Marwari & NRI assets, and agricultural Jamabandi land with court-admissible, dispute-proof testamentary drafting.",
      inLanguage: "en-IN",
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", "#quick-answer"],
      },
    },
    {
      "@type": "Article",
      "@id": `${PAGE_URL}#article`,
      headline: "Will Drafting Services in Rajasthan: Expert Estate Planning & Succession Lawyers",
      description:
        "Comprehensive legal guide to will drafting services in Rajasthan. Learn statutory testamentary execution under the Indian Succession Act, 1925, Jaipur Development Authority (JDA) and UIT property transfer protocols, Rajasthan Tenancy Act agricultural Khatedari land mutation rules, Marwari family business and NRI estate protection, E-Panjiyan Sub-Registrar registration protocols, and probate exemptions.",
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
      name: "Will Drafting Services in Rajasthan",
      image: OG_IMAGE_URL,
      description:
        "Customized, court-admissible will drafting and estate planning legal advisory in Rajasthan. Senior High Court advocate drafting under the Indian Succession Act, 1925, JDA/UIT regulations, and Rajasthan Tenancy Act revenue protocols with zero hidden retainers or hourly markups.",
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
        { "@type": "ListItem", position: 3, name: "Will Drafting Services in Rajasthan", item: PAGE_URL },
      ],
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}#process`,
      name: "The 6-Step Protocol for Dispute-Proof Will Drafting in Rajasthan",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Exhaustive Rajasthan Real Estate, JDA, UIT & Revenue Title Due Diligence" },
        { "@type": "ListItem", position: 2, name: "Family Hierarchy, Coparcenary Isolation & Disinherison Legal Safeguards" },
        { "@type": "ListItem", position: 3, name: "Senior High Court Advocate Testamentary Drafting & Statutory Covenants" },
        { "@type": "ListItem", position: 4, name: "Client Clause-by-Clause Review, Khatedari Survey Check & Executor Concurrence" },
        { "@type": "ListItem", position: 5, name: "Medical Capacity Certification & Statutory Two-Witness Attestation" },
        { "@type": "ListItem", position: 6, name: "Rajasthan E-Panjiyan Sub-Registrar Registration & JDA/Tehsil Mutation Dossier Support" },
      ],
    },
  ],
};

/* ──────────────────────── MAIN COMPONENT ───────────────────────── */
export default function WillDraftingRajasthanClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);

  const toggleFaq = (id: string) => {
    setExpandedFaqs((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };


  const handleShare = (platform: string) => {
    const url = PAGE_URL;
    const text = "Will Drafting Services in Rajasthan: Top Estate & Succession Lawyers – AMA Legal Solutions";
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
    { label: "Will Drafting Services in Rajasthan", href: PAGE_SLUG },
  ];

  return (
    <>
      <Script
        id="will-drafting-rajasthan-schema"
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
                Expert <span className="text-[#D2A02A]">Will Drafting Services in Rajasthan</span>: Succession &amp; Estate Planning Lawyers
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                Safeguard your multi-generational family wealth across Jaipur Development Authority (JDA) schemes, Urban Improvement Trust (UIT) sectors, ancestral agricultural Khatedari farmlands, heritage havelis, and commercial holdings in Jaipur, Jodhpur, Udaipur, Kota, Bikaner, Ajmer, and Shekhawati. Retain senior High Court advocates for customized, court-admissible testamentary instruments strictly compliant with the Indian Succession Act, 1925 and Rajasthan revenue enactments—backed by transparent fixed legal advisory without hourly markups or surprise corporate firm retainers.
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
                    <span className="text-gray-400">⏱️</span> 16 Min Read
                  </div>
                </div>
              </div>
            </div>

            {/* Right col — Image Card */}
            <div className="flex justify-center lg:justify-end w-full mt-6 lg:mt-0 lg:col-span-4">
              <div className="w-[90%] sm:w-[80%] lg:w-full rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-white flex items-center justify-center">
                <img
                  src="/images/og/will-drafting-services-in-rajasthan.png"
                  alt="Will Drafting Services in Rajasthan - Expert Estate Planning & Succession Legal Advisory by AMA Legal Solutions"
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
                    &bull; Serving Rajasthan State, High Court at Jodhpur/Jaipur &amp; Global Diaspora
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
                    <h2>Quick Answer: What Do Professional Will Drafting Services in Rajasthan Cover?</h2>
                  </div>
                  <p className="text-gray-900 font-normal leading-relaxed text-sm md:text-base">
                    Professional will drafting services in Rajasthan provide property holders, business families, and Non-Resident Indians (NRIs) with customized, court-admissible testamentary instruments drafted in strict conformity with Section 59 and Section 63 of the Indian Succession Act, 1925. Retaining dedicated succession advocates guarantees precise legal scheduling of Jaipur Development Authority (JDA) leasehold and freehold plots, Urban Improvement Trust (UIT) allotments, commercial business equity, and agricultural Khatedari landholdings under the Rajasthan Tenancy Act, 1955, completely preventing bitter family partition suits and enabling direct title mutation without the requirement of court probate. Transparent fixed legal advisory allows Rajasthan residents and overseas diaspora families to secure complete testamentary protection and Sub-Registrar registration guidance while avoiding excessive corporate law firm hourly retainers.
                  </p>
                </div>

                {/* ================= SECTION 1: RAJASTHAN SUCCESSION LANDSCAPE ================= */}
                <section id="rajasthan-succession-landscape" className="scroll-mt-28 space-y-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1a202c]">
                    The Rajasthan Real Estate &amp; Succession Landscape: JDA, UITs, Agricultural Khatedari Land &amp; the Global Diaspora
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    The State of Rajasthan presents a unique, sophisticated property ecosystem that combines rapid urban industrial development with deep-rooted feudal, agrarian, and joint Hindu family traditions. Across its diverse geographic and economic zones—the Jaipur capital region, the Marwar desert commercial corridors of Jodhpur, the Mewar heritage landscapes of Udaipur, the educational and industrial hubs of Kota, and the historical merchant centers of Shekhawati (Sikar, Jhunjhunu, Churu)—property ownership encompasses diverse classes of title. In major metropolitan centers, residential kothis, multi-storied commercial showrooms, and flatted factories are governed by statutory urban development bodies, primarily the <a href="https://jda.urban.rajasthan.gov.in" target="_blank" rel="noopener noreferrer" className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold">Jaipur Development Authority (JDA)</a> under the Jaipur Development Authority Act, 1982, the Jodhpur Development Authority, regional Urban Improvement Trusts (UITs), and the <a href="https://urban.rajasthan.gov.in" target="_blank" rel="noopener noreferrer" className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold">Rajasthan Housing Board (RHB)</a>.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    Simultaneously, agrarian property in Rajasthan is anchored in agricultural landholdings governed by the <a href="https://revenue.rajasthan.gov.in" target="_blank" rel="noopener noreferrer" className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold">Rajasthan Land Revenue Act, 1956 (Act No. 15 of 1956)</a> and the <a href="https://www.indiacode.nic.in/handle/123456789/12711" target="_blank" rel="noopener noreferrer" className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold">Rajasthan Tenancy Act, 1955 (Act No. 3 of 1955)</a>. Generational land records are maintained in computerized Jamabandi registers, Khasra maps, and Khewat-Khatoni ledgers accessible via the state&apos;s Apna Khata (E-Dharti) system. When a patriarch or landholder passes away intestate (without executing a valid testamentary instrument), the estate is subjected to mechanical division under Class I rules of the <a href="https://www.indiacode.nic.in/handle/123456789/1711" target="_blank" rel="noopener noreferrer" className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold">Hindu Succession Act, 1956</a>. Intestate devolution often precipitates debilitating revenue partition disputes under Section 53 of the Rajasthan Tenancy Act, freezing valuable agricultural land, canal irrigation water rights, and commercial conversions under Section 90A of the Rajasthan Land Revenue Act for years before Assistant Collectors and Revenue Appellate Authorities.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    Adding another layer of legal nuance is Rajasthan&apos;s prominent commercial diaspora. Multi-generational Marwari enterprise families based in Mumbai, Kolkata, Chennai, Bengaluru, and overseas Non-Resident Indians (NRIs) residing in the United States, the United Kingdom, Canada, the United Arab Emirates, and Singapore maintain substantial heritage havelis, family palaces, commercial retail real estate, and ancestral agricultural estates across Rajasthan. In the absence of an advocate-drafted, unassailable will, these high-value properties become vulnerable to forged General Powers of Attorney (GPAs), unauthorized caretaker occupations, collusive revenue mutations, and vexatious civil suits instituted by distant branches of the coparcenary.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    For individuals seeking professional <strong className="font-semibold text-gray-900">will drafting services in Rajasthan</strong>, conventional avenues have proven deeply flawed. National corporate law firms frequently demand exorbitant hourly retainers that treat testamentary drafting as an incidental luxury service, while automated DIY internet generators output generic foreign templates that are routinely rejected by Rajasthan revenue courts and urban development authorities. With proven trial experience and deep succession proficiency before the Rajasthan High Court benches at Jodhpur and Jaipur, <Link href="/" className="text-[#D2A02A] hover:underline font-semibold">AMA Legal Solutions</Link> bridges this critical divide. We provide bespoke, court-tested testamentary drafting by senior advocates under a transparent, fixed legal advisory model that guarantees complete accessibility without hidden billing surprises.
                  </p>
                </section>

                {/* ================= SECTION 2: STATUTORY FRAMEWORK ================= */}
                <section id="statutory-framework" className="scroll-mt-28 space-y-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#5A4C33]">
                    Statutory Framework: Testamentary Requisites under the Indian Succession Act, 1925 &amp; Rajasthan Tenancy Laws
                  </h2>

                  <div className="bg-[#f6f4ee] border-l-4 border-[#5A4C33] p-4 md:p-6 rounded-r-xl">
                    <blockquote className="text-[#3a3020] text-sm md:text-base font-medium italic">
                      &ldquo;Under Section 59 of the Indian Succession Act, 1925, every person of sound mind who is not a minor may dispose of their property by Will. Under Section 63, the testator shall sign or affix their mark in the presence of two or more attesting witnesses. Furthermore, under Section 38 of the Rajasthan Tenancy Act, 1955, Khatedari tenancy rights devolve in accordance with personal law, subject to statutory restrictions on transfer under Section 42.&rdquo;
                    </blockquote>
                  </div>

                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    Every will executed within or concerning properties in the State of Rajasthan must satisfy rigorous legal criteria established by central statutes, state revenue laws, and binding judicial pronouncements of the Rajasthan High Court:
                  </p>

                  <ul className="space-y-3 text-gray-700 text-sm md:text-base list-disc list-inside">
                    <li>
                      <strong className="text-gray-900 font-semibold">Testamentary Mental Capacity (Section 59, Indian Succession Act):</strong> The testator must possess active testamentary disposing mind, comprehending the exact nature of their estate, the distribution being made, and the legitimate claims of natural heirs. For senior citizens executing wills in Rajasthan, securing a contemporaneous medical certificate from a qualified civil surgeon or registered medical practitioner is a decisive safeguard against subsequent claims of senile dementia or diminished capacity.
                    </li>
                    <li>
                      <strong className="text-gray-900 font-semibold">Freedom from Coercion &amp; Undue Influence (Section 61):</strong> A testamentary document executed under coercion, fraudulent misrepresentation, or emotional manipulation is void ab initio. When bequeathing prime JDA commercial plots or unequal shares among children, advocate drafting includes specific explanatory recitals detailing the reasons for disparate bequests, thereby dispelling suspicious circumstances in civil litigation.
                    </li>
                    <li>
                      <strong className="text-gray-900 font-semibold">Complete Stamp Duty Exemption in Rajasthan:</strong> Under Article 64 of Schedule I of the Rajasthan Stamp Act, 1998, no stamp duty is chargeable on the execution or registration of a last will and testament. Wills executed on plain bond paper possess full legal force and are entirely admissible before civil and revenue courts across Rajasthan.
                    </li>
                    <li>
                      <strong className="text-gray-900 font-semibold">Independent Two-Witness Attestation (Section 63(c) &amp; Section 67):</strong> The testator must sign in the physical presence of at least two adult attesting witnesses, each of whom must witness the testator signing. Crucially, under Section 67, any bequest or legacy devised to an attesting witness or their spouse is void. Beneficiaries must strictly never serve as attesting witnesses.
                    </li>
                    <li>
                      <strong className="text-gray-900 font-semibold">Agricultural Khatedari Restrictions (Section 42, Rajasthan Tenancy Act, 1955):</strong> While Khatedari tenant rights in agricultural land can be bequeathed by will under Section 38 through Section 40, Section 42 strictly prohibits any transfer or bequest of Khatedari interest held by a Scheduled Caste or Scheduled Tribe tenant in favor of a person who is not a member of a Scheduled Caste or Scheduled Tribe. Any testamentary clause violating this statutory prohibition is void in law.
                    </li>
                    <li>
                      <strong className="text-gray-900 font-semibold">Devolution of Coparcenary Interest (Section 30, Hindu Succession Act, 1956):</strong> A Hindu testator possesses unrestricted legal power to bequeath all self-acquired properties, commercial business shares, and personal bank accounts, as well as their defined undivided coparcenary share in ancestral Hindu Undivided Family (HUF) property. However, a testator cannot bequeath another coparcener&apos;s distinct interest without prior legal partition.
                    </li>
                  </ul>
                </section>

                {/* ================= SECTION 3: PROBATE IN RAJASTHAN ================= */}
                <section id="probate-rajasthan-nuance" className="scroll-mt-28 space-y-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1a202c]">
                    Probate in Rajasthan: Is Court Probate Legally Mandatory for Rajasthan Properties?
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    A persistent misconception among property owners, housing society administrators, and revenue patwaris in Rajasthan is that every will must be probated by a civil court before immovable property can be transferred. Statutory codification and authoritative rulings of the Rajasthan High Court establish that court probate is not mandatory for properties situated in Rajasthan:
                  </p>

                  <div className="bg-amber-50/50 p-5 rounded-2xl border border-amber-200/60 my-4 space-y-3">
                    <h3 className="font-bold text-gray-900 text-base flex items-center gap-2">
                      <span>⚖️</span> The Statutory Exemption under Section 213(1) Read with Section 57
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                      Under Section 213(1) read with clauses (a) and (b) of Section 57 of the Indian Succession Act, 1925, obtaining probate or Letters of Administration from a court is mandatory <em>only</em> if the will was executed within the historic Presidency towns of Calcutta, Madras, and Bombay, or if the immovable property bequeathed is located within those specific municipal limits.
                    </p>
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                      Because the State of Rajasthan was historically formed through the integration of princely states and was never part of a British Presidency town, the Hon&apos;ble Rajasthan High Court in leading precedents—including <em>Bhanwar Lal v. Jamna Devi</em> and <em>Ghewar Chand v. Mahendra Singh</em>—and the Hon&apos;ble Supreme Court in <em>Clarence Pais v. Union of India (2001)</em> have settled beyond doubt that probate of a will is <strong>NOT mandatory</strong> in Rajasthan. Beneficiaries holding an authentic, advocate-drafted will can apply directly for title mutation before the JDA, UITs, Municipal Corporations, and Tehsil revenue authorities without having to obtain a civil court probate decree.
                    </p>
                  </div>

                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    Although probate is not legally compulsory, voluntary probate remains accessible under Section 276 of the Indian Succession Act. When substantial commercial estates face hostile challenges from disgruntled legal heirs, or when financial institutions or foreign probate jurisdictions require an official court validation of an executor&apos;s title over Indian assets, an advocate-drafted will equipped with complete statutory compliance allows the designated executor to obtain probate expeditiously before the jurisdictional District Judge or the High Court.
                  </p>
                </section>

                {/* ================= SECTION 4: MARWARI & NRI SUCCESSION ================= */}
                <section id="marwari-nri-succession" className="scroll-mt-28 space-y-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#5A4C33]">
                    Marwari Business Dynasties &amp; NRI Succession Safeguards: Protecting Multi-Generational Wealth
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    Rajasthan is the ancestral cradle of many of India&apos;s most prominent business families and a thriving global NRI diaspora. Succession planning for these estates requires specialized legal structuring that addresses complex commercial holdings, ancestral coparcenary trusts, and cross-border assets:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                    <div className="p-4 border border-gray-200 rounded-xl bg-[#fcfbf9]">
                      <h3 className="font-bold text-gray-900 text-sm mb-1">Family Business Equity &amp; Partnership Continuity</h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Commercial patriarchs holding equity in private limited companies, family partnerships, or proprietary trading firms across Jaipur, Jodhpur, and Bhilwara require testamentary covenants that nominate successors without destabilizing ongoing commercial operations or triggering partner deadlock.
                      </p>
                    </div>

                    <div className="p-4 border border-gray-200 rounded-xl bg-[#fcfbf9]">
                      <h3 className="font-bold text-gray-900 text-sm mb-1">Overseas NRI Consular Execution</h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Under the Diplomatic and Consular Officers (Oaths and Fees) Act, 1948, Non-Resident Indians residing in Dubai, London, New York, or Singapore can execute their Indian will before an authorized Indian Consular Officer. The diplomatic seal establishes prima facie authenticity under Section 85 of the Indian Evidence Act.
                      </p>
                    </div>

                    <div className="p-4 border border-gray-200 rounded-xl bg-[#fcfbf9]">
                      <h3 className="font-bold text-gray-900 text-sm mb-1">Anti-GPA Revocation &amp; Caretaker Protection</h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        To protect vacant ancestral havelis and prime land from illegal land-grabbing syndicates, our advocates embed explicit clauses revoking all previous general or special powers of attorney (GPAs/SPAs), terminating any implied authority granted to local caretakers or distant relatives.
                      </p>
                    </div>

                    <div className="p-4 border border-gray-200 rounded-xl bg-[#fcfbf9]">
                      <h3 className="font-bold text-gray-900 text-sm mb-1">Harmonization with Foreign Wills</h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        NRIs holding assets both in Rajasthan and abroad require carefully structured testamentary instruments. Our advocates ensure the Indian testament is restricted strictly to assets located in India, ensuring it operates smoothly without unintentionally revoking offshore wills in the US, UK, or UAE.
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
                    Property owners and NRI families evaluating testamentary drafting options in Rajasthan must weigh legal enforceability, statutory revenue compliance, and fee transparency:
                  </p>

                  <div className="overflow-x-auto my-6">
                    <table className="min-w-full bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                      <thead className="bg-[#5A4C33] text-white text-xs sm:text-sm">
                        <tr>
                          <th className="py-3 px-4 text-left font-semibold">Evaluation Parameters</th>
                          <th className="py-3 px-4 text-left font-semibold bg-[#4b3f2b]">Automated DIY Online Templates</th>
                          <th className="py-3 px-4 text-left font-semibold bg-[#D2A02A] text-black">AMA Legal Solutions (Rajasthan)</th>
                          <th className="py-3 px-4 text-left font-semibold">Tier-1 Corporate Law Firms</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 text-xs sm:text-sm text-gray-700">
                        <tr className="hover:bg-amber-50/40 transition-colors">
                          <td className="py-3 px-4 font-bold text-gray-900">Legal Counsel &amp; Accountability</td>
                          <td className="py-3 px-4 text-red-600">Zero legal advice; explicit &ldquo;as-is&rdquo; liability disclaimers</td>
                          <td className="py-3 px-4 text-emerald-800 font-bold bg-amber-50/30">Senior High Court succession advocates directly responsible</td>
                          <td className="py-3 px-4 text-gray-600">Junior associates draft; partners review at billing markups</td>
                        </tr>
                        <tr className="hover:bg-amber-50/40 transition-colors">
                          <td className="py-3 px-4 font-bold text-gray-900">Rajasthan Laws (JDA, UIT &amp; Khatedari)</td>
                          <td className="py-3 px-4 text-red-600">Completely omitted; generic text causes revenue rejection</td>
                          <td className="py-3 px-4 text-emerald-800 font-bold bg-amber-50/30">Precise scheduling compliant with JDA guidelines &amp; Tenancy Act rules</td>
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
                          <td className="py-3 px-4 text-red-600">Highly vulnerable to undue influence challenges in civil suits</td>
                          <td className="py-3 px-4 text-emerald-800 font-bold bg-amber-50/30">Court-tested clauses with medical fitness and witness protocols</td>
                          <td className="py-3 px-4 text-emerald-700">Legally strong, but cost-prohibitive for private families</td>
                        </tr>
                        <tr className="hover:bg-amber-50/40 transition-colors">
                          <td className="py-3 px-4 font-bold text-gray-900">Sub-Registrar Registration Support (E-Panjiyan)</td>
                          <td className="py-3 px-4 text-red-600">No physical or local administrative support provided</td>
                          <td className="py-3 px-4 text-emerald-800 font-bold bg-amber-50/30">Complete appointment, E-Panjiyan portal, and advocate identification support</td>
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
                    8 Critical Testamentary Clauses for Rajasthan Estates &amp; Heritage Portfolios
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    An unassailable will drafted for properties in Rajasthan must incorporate tailored statutory covenants designed to satisfy regional land revenue records, urban leasehold conditions, and family business dynamics:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                    <div className="p-4 border border-gray-200 rounded-xl bg-[#fcfbf9]">
                      <h3 className="font-bold text-gray-900 text-sm mb-1">1. Absolute Revocation Clause</h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Under Section 62 of the Indian Succession Act, an unambiguous covenant formally revoking all prior wills, codicils, and testamentary writings executed in India or abroad prevents multi-document succession contests.
                      </p>
                    </div>

                    <div className="p-4 border border-gray-200 rounded-xl bg-[#fcfbf9]">
                      <h3 className="font-bold text-gray-900 text-sm mb-1">2. Sound Disposing Mind Affirmation</h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        A clear affirmation of testamentary capacity under Section 59, supported by a contemporaneous medical fitness certificate from a registered physician, defeating allegations of senility or coercion.
                      </p>
                    </div>

                    <div className="p-4 border border-gray-200 rounded-xl bg-[#fcfbf9]">
                      <h3 className="font-bold text-gray-900 text-sm mb-1">3. Exhaustive Revenue &amp; JDA/UIT Schedules</h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Precise itemization of JDA/UIT lease deeds, patta numbers, Rajasthan Housing Board allotment letters, and agricultural Jamabandi identifiers (Khasra, Khewat, and Khatoni numbers with canal irrigation details).
                      </p>
                    </div>

                    <div className="p-4 border border-gray-200 rounded-xl bg-[#fcfbf9]">
                      <h3 className="font-bold text-gray-900 text-sm mb-1">4. Executor Appointment &amp; Administrative Powers</h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Designation of a reliable primary and alternate executor under Section 222, conferring wide administrative authority to collect debts, defend suits, and execute mutations before Rajasthan authorities.
                      </p>
                    </div>

                    <div className="p-4 border border-gray-200 rounded-xl bg-[#fcfbf9]">
                      <h3 className="font-bold text-gray-900 text-sm mb-1">5. Urban Kothi, Haveli &amp; Floor Demarcation</h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Clear demarcations for residential kothis and commercial properties in Jaipur, Jodhpur, or Udaipur, delineating separate floor ownership, parking spaces, terrace access, and easement rights.
                      </p>
                    </div>

                    <div className="p-4 border border-gray-200 rounded-xl bg-[#fcfbf9]">
                      <h3 className="font-bold text-gray-900 text-sm mb-1">6. Spousal Life Interest (Usufructuary Protection)</h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Creation of a protected life interest ensuring the surviving spouse retains exclusive residence and rental income without alienation rights, passing remainder title to children to prevent elder displacement.
                      </p>
                    </div>

                    <div className="p-4 border border-gray-200 rounded-xl bg-[#fcfbf9]">
                      <h3 className="font-bold text-gray-900 text-sm mb-1">7. Documented Disinherison Justifications</h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Where an estranged legal heir is excluded or receives an unequal bequest, detailing specific factual grounds (such as previous lifetime settlements or conduct) dispels judicial suspicions of unnatural disposition.
                      </p>
                    </div>

                    <div className="p-4 border border-gray-200 rounded-xl bg-[#fcfbf9]">
                      <h3 className="font-bold text-gray-900 text-sm mb-1">8. Exhaustive Residuary Estate Clause</h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        A robust catch-all clause under Section 102 governing subsequently acquired real estate, demat shares, bank lockers, and omitted assets, preventing partial intestacy before civil courts.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ================= SECTION 7: SIX-STEP PROTOCOL ================= */}
                <section id="six-step-protocol" className="scroll-mt-28 space-y-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1a202c]">
                    The 6-Step Advocate Protocol for Dispute-Proof Will Drafting in Rajasthan
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    At AMA Legal Solutions, our succession advocates adhere to an established six-step protocol designed to eliminate administrative ambiguity and secure unassailable judicial enforceability:
                  </p>

                  <div className="space-y-4 my-6">
                    {[
                      {
                        title: "Exhaustive Rajasthan Real Estate, JDA, UIT & Revenue Title Due Diligence",
                        desc: "Our advocates conduct an in-depth title analysis across your real estate holdings (JDA freehold and leasehold plots, UIT commercial units, Khatedari farmlands via Apna Khata, Rajasthan Housing Board flats), bank accounts, demat holdings, and lockers across Rajasthan.",
                      },
                      {
                        title: "Family Hierarchy, Coparcenary Isolation & Disinherison Legal Safeguards",
                        desc: "We analyze your family hierarchy and succession goals, separating self-acquired assets from ancestral coparcenary property, creating protective life-interest trusts for dependents, and documenting sound legal reasons if any Class I heir is excluded.",
                      },
                      {
                        title: "Senior High Court Advocate Testamentary Drafting & Statutory Covenants",
                        desc: "A senior succession advocate drafts your bespoke testament, incorporating revocation covenants, sound-disposing capacity affirmations, executor mandates, and comprehensive residuary clauses under the Indian Succession Act, 1925.",
                      },
                      {
                        title: "Client Clause-by-Clause Review, Khatedari Survey Check & Executor Concurrence",
                        desc: "You receive the draft in clear, rigorous legal language for meticulous review, ensuring all plot numbers, revenue Khasra details, bank account numbers, and beneficiary designations align perfectly with official records.",
                      },
                      {
                        title: "Medical Capacity Certification & Statutory Two-Witness Attestation",
                        desc: "We guide you in securing a contemporaneous medical fitness certificate from a registered physician and supervise independent two-witness attestation under Section 63 to defeat future claims of undue influence.",
                      },
                      {
                        title: "Rajasthan E-Panjiyan Sub-Registrar Registration & JDA/Tehsil Mutation Dossier Support",
                        desc: "For testators desiring definitive evidentiary security, we coordinate registration before the jurisdictional Sub-Registrar via E-Panjiyan Rajasthan and structure the will for seamless post-mortem mutation before JDA, UITs, and Tehsil revenue authorities.",
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

                {/* ================= SECTION 8: INFOGRAPHIC SECTION (BLOG STYLE) ================= */}
                <section id="infographic-section" className="my-10 p-4 sm:p-6 bg-gradient-to-br from-[#FAF7F0] via-white to-[#F7F3E9] border-2 border-[#D2A02A]/35 rounded-2xl shadow-sm">
                  <div className="flex items-center gap-3 mb-4 pb-3 border-b border-[#D2A02A]/20">
                    <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-[#D2A02A] text-white font-bold text-base shadow-sm">
                      📊
                    </span>
                    <div>
                      <h3 className="text-base sm:text-lg font-extrabold text-[#1a202c]">
                        Rajasthan Testamentary Architecture &amp; Succession Blueprint
                      </h3>
                      <p className="text-xs text-gray-500 font-medium">
                        Visual guide to statutory compliance, JDA/UIT scheduling &amp; Rajasthan estate planning
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl overflow-hidden bg-white border border-[#D2A02A]/20 shadow-sm flex justify-center items-center p-2 sm:p-4">
                    <img
                      src="/images/og/will-drafting-services-in-rajasthan.png"
                      alt="Will Drafting Services in Rajasthan - Testamentary Architecture Infographic by AMA Legal Solutions"
                      className="w-full h-auto max-h-[900px] object-contain rounded-lg hover:scale-[1.01] transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-[11px] text-gray-400 text-center mt-3 font-medium">
                    Prepared by AMA Legal Solutions Research &amp; Succession Team &bull; Rajasthan Testamentary Architecture &amp; Succession Overview
                  </p>
                </section>

                {/* ================= SECTION 9: REGISTRATION & MUTATION IN RAJASTHAN ================= */}
                <section id="registration-mutation-rajasthan" className="scroll-mt-28 space-y-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1a202c]">
                    E-Panjiyan Sub-Registrar Registration &amp; Property Mutation Protocols Across Rajasthan Authorities
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    A will fulfills its core legal purpose only when named beneficiaries can mutate titles smoothly across urban development authorities and revenue records without confronting administrative roadblocks or civil injunctions:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                    <div className="bg-[#fcfbf9] p-5 rounded-2xl border border-gray-200">
                      <h3 className="font-bold text-gray-900 text-base mb-2 flex items-center gap-2">
                        <span>🏛️</span> Sub-Registrar Registration via E-Panjiyan Rajasthan
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        Under Section 18(e) of the <a href="https://www.indiacode.nic.in/handle/123456789/2288" target="_blank" rel="noopener noreferrer" className="text-[#D2A02A] hover:underline font-semibold">Registration Act, 1908</a>, registering a will is optional. However, registering before the jurisdictional Sub-Registrar (in Jaipur, Jodhpur, Udaipur, Kota, or Ajmer) via the Rajasthan E-Panjiyan (IGR Rajasthan) portal establishes formidable official documentation. Biometric verification, photographic records, and advocate identification provide strong evidentiary backing under Section 68 of the Indian Evidence Act, refuting future claims of forgery or coercion.
                      </p>
                    </div>

                    <div className="bg-[#fcfbf9] p-5 rounded-2xl border border-gray-200">
                      <h3 className="font-bold text-gray-900 text-base mb-2 flex items-center gap-2">
                        <span>📋</span> Direct JDA, UIT &amp; Municipal Mutation (No Mandatory Probate)
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        Beneficiaries under an advocate-drafted will can submit an application for transfer of ownership directly to the Estate Officer, Jaipur Development Authority (JDA) or regional UIT, alongside the death certificate, registered will, indemnity bond, and legal heir affidavits. Municipal Corporations (such as Jaipur Greater, Jaipur Heritage, and Jodhpur) process property tax mutations directly without requiring a civil court probate order when the disposition is uncontested.
                      </p>
                    </div>
                  </div>

                  <div className="bg-[#f6f4ee] p-5 rounded-2xl border border-[#5A4C33]/20">
                    <h3 className="font-bold text-gray-900 text-base mb-2 flex items-center gap-2">
                      <span>🌾</span> Agricultural Land Mutation: Tehsil Jamabandi &amp; Dakhil Kharij
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                      For agricultural land, succession is formalized under Chapter VIII of the Rajasthan Land Revenue Act, 1956. The beneficiary presents the will before the Halqa Patwari, who enters a formal mutation entry (Dakhil Kharij) in the register. Following field inspection and notice to legal heirs, the Circle Revenue Officer (Tehsildar or Naib Tehsildar) sanctions the mutation, updating the official Jamabandi records on Apna Khata without subjecting the estate to civil court probate proceedings.
                    </p>
                  </div>
                </section>

                {/* ================= SECTION 10: WHY AMA LEGAL ================= */}
                <section id="why-ama-legal" className="scroll-mt-28 space-y-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#5A4C33]">
                    Why Choose AMA Legal Solutions for Will Drafting Services in Rajasthan
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    Unlike automated document aggregators that generate generic boilerplate forms and disclaim all legal responsibility, AMA Legal Solutions is an established full-service law firm offering complete advocate-client privilege, trial-tested courtroom experience, and dedicated testamentary advisory across Rajasthan:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                    <div className="p-4 border border-gray-200 rounded-xl bg-white shadow-xs">
                      <div className="text-xl mb-1 text-[#D2A02A]">⚖️</div>
                      <div className="font-bold text-sm text-gray-900 mb-1">Senior High Court Advocates</div>
                      <p className="text-xs text-gray-600">Every testament is drafted, reviewed, and finalized by senior advocates actively practicing succession litigation before the Rajasthan High Court and District Courts.</p>
                    </div>

                    <div className="p-4 border border-gray-200 rounded-xl bg-white shadow-xs">
                      <div className="text-xl mb-1 text-[#D2A02A]">🤝</div>
                      <div className="font-bold text-sm text-gray-900 mb-1">Transparent Fixed Legal Advisory</div>
                      <p className="text-xs text-gray-600">We eliminate unpredictable hourly billing and corporate retainers, providing complete cost transparency and accessible estate planning for Rajasthan and NRI families.</p>
                    </div>

                    <div className="p-4 border border-gray-200 rounded-xl bg-white shadow-xs">
                      <div className="text-xl mb-1 text-[#D2A02A]">🏛️</div>
                      <div className="font-bold text-sm text-gray-900 mb-1">End-to-End Rajasthan Sub-Registrar Support</div>
                      <p className="text-xs text-gray-600">From drafting to coordinating official registration appointments via E-Panjiyan across Jaipur, Jodhpur, Udaipur, or Kota Sub-Registrar offices, we manage the entire procedural lifecycle.</p>
                    </div>

                    <div className="p-4 border border-gray-200 rounded-xl bg-white shadow-xs">
                      <div className="text-xl mb-1 text-[#D2A02A]">🔒</div>
                      <div className="font-bold text-sm text-gray-900 mb-1">Absolute Legal Privilege</div>
                      <p className="text-xs text-gray-600">All your asset disclosures, family declarations, and estate instructions are protected under strict advocate-client confidentiality under Section 126 of the Indian Evidence Act.</p>
                    </div>
                  </div>
                </section>

                {/* ================= SECTION 11: FAQS ACCORDION ================= */}
                <section id="faqs" className="scroll-mt-28 border-t border-gray-200 pt-12">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#1a202c] mb-8">
                    Frequently Asked Questions on Will Drafting in Rajasthan
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

                {/* ================= SECTION 12: MORE LEGAL GUIDES ================= */}
                <section id="internal-guides" className="scroll-mt-28 border-t border-gray-200 pt-12">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#1a202c] mb-6">
                    More Legal &amp; Succession Guides
                  </h2>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      { title: "Will Drafting in Punjab", href: "/will-drafting-services-in-punjab", desc: "Expert estate planning, GMADA/GLADA plots, and Jamabandi mutation compliance in Punjab." },
                      { title: "Will Drafting in Haryana", href: "/will-drafting-services-in-haryana", desc: "Expert estate planning, HSVP plots, and Jamabandi mutation compliance in Haryana." },
                      { title: "Will Drafting in Gurugram", href: "/will-drafting-services-in-gurugram", desc: "Testamentary drafting across Millennium City, builder floors, and DLF sectors." },
                      { title: "Will Drafting in Delhi", href: "/will-drafting-services-in-delhi", desc: "Testamentary drafting across South Delhi, DDA sectors, and High Court jurisdiction." },
                      { title: "Will Drafting in Delhi NCR", href: "/will-drafting-services-in-delhi-ncr", desc: "Comprehensive testamentary drafting across Gurugram, Noida, Delhi, and Faridabad." },
                      { title: "Best Will Drafting Services in India", href: "/best-will-drafting-services-in-india", desc: "Compare advocate-led estate planning and testamentary advisory firms." },
                      { title: "Drafting of Will: Complete Guide", href: "/drafting-of-will", desc: "Comprehensive statutory framework for executing an unassailable last will." },
                      { title: "Simple Will Format Sample", href: "/simple-will-format-download-free-legal-document-sample", desc: "Essential clause structure, witness attestation, and schedule formats." },
                      { title: "Will Drafting Cheap & Accessible", href: "/will-drafting-services-cheap", desc: "Cost-effective, court-admissible testamentary drafting by senior advocates." },
                      { title: "Will Drafting for NRIs", href: "/will-drafting-for-nri", desc: "Cross-border asset planning and Indian consulate execution for global Indians." },
                      { title: "NRI Will Drafting Affordable", href: "/will-drafting-services-affordable-for-nri", desc: "Fixed legal fee testamentary structuring for overseas diaspora estates." },
                      { title: "Family Lawyer Advisory", href: "/family-lawyer", desc: "Partition suits, succession dispute mediation, and estate dispute defense." },
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

                {/* ================= SECTION 13: REFERENCES & CITATIONS ================= */}
                <section id="citations" className="scroll-mt-28 border-t border-gray-200 pt-8 mt-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">References &amp; Statutory Authority</h3>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
                    {[
                      { label: "Indian Succession Act, 1925 (Sections 57, 59, 61, 63, 67, 213)", href: "https://www.indiacode.nic.in/handle/123456789/2385" },
                      { label: "Registration Act, 1908 (Sections 18, 32, 40, 41)", href: "https://www.indiacode.nic.in/handle/123456789/2288" },
                      { label: "Hindu Succession Act, 1956 (Section 30 - Testamentary Disposition)", href: "https://www.indiacode.nic.in/handle/123456789/1711" },
                      { label: "Rajasthan Tenancy Act, 1955 (Act No. 3 of 1955 - Sections 38 to 42)", href: "https://www.indiacode.nic.in/handle/123456789/12711" },
                      { label: "Rajasthan Land Revenue Act, 1956 (Act No. 15 of 1956 - Jamabandi & Mutation)", href: "https://revenue.rajasthan.gov.in" },
                      { label: "Jaipur Development Authority (JDA) Transfer Regulations", href: "https://jda.urban.rajasthan.gov.in" },
                      { label: "Rajasthan High Court Case Law Portal (Jodhpur & Jaipur)", href: "https://hcraj.nic.in" },
                      { label: "Supreme Court of India Precedents on Testamentary Capacity & Probate Exemption", href: "https://main.sci.gov.in" },
                      { label: "Rajasthan E-Panjiyan Registration Portal (IGR Rajasthan)", href: "https://epanjiyan.rajasthan.gov.in" },
                      { label: "Bar Council of Rajasthan Standards of Professional Conduct", href: "https://barcouncilofrajasthan.org" },
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
                    Serving Rajasthan, High Court benches at Jodhpur and Jaipur, and diaspora families globally with a{" "}
                    <strong className="text-[#D2A02A] font-bold">4.7 Google Rating</strong>, over{" "}
                    <strong className="text-[#D2A02A] font-bold">10,000+ Clients Served</strong>,{" "}
                    <strong className="text-[#D2A02A] font-bold">25,000+ Cases Handled</strong>, and
                    more than{" "}
                    <strong className="text-[#D2A02A] font-bold">40+ Years of Combined Legal Experience</strong> in
                    providing strategic testamentary drafting, estate planning, and succession advisory across Rajasthan and India.
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
                    <Link href="/will-drafting-services-in-punjab" className="px-3 py-2.5 border-2 border-[#D2A02A] text-[#5A4C33] font-bold rounded-lg hover:bg-[#D2A02A] hover:text-white transition-all text-center text-xs md:text-sm flex items-center justify-center">
                      Will Drafting Punjab
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
                  Anuj Anand Malik, Founder of AMA Legal Solutions, is a senior advocate with extensive expertise in testamentary drafting, high-value estate planning, and succession litigation under Indian law across Rajasthan, High Court benches, and tribunals.
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
                    ["/will-drafting-services-in-punjab", "Will Drafting in Punjab"],
                    ["/will-drafting-services-in-haryana", "Will Drafting in Haryana"],
                    ["/will-drafting-services-in-gurugram", "Will Drafting in Gurugram"],
                    ["/will-drafting-services-in-delhi", "Will Drafting in Delhi"],
                    ["/will-drafting-services-in-delhi-ncr", "Will Drafting in Delhi NCR"],
                    ["/best-will-drafting-services-in-india", "Best Will Drafting Services"],
                    ["/drafting-of-will", "Drafting of Will Guide"],
                    ["/will-drafting-for-nri", "Will Drafting for NRIs"],
                    ["/simple-will-format-download-free-legal-document-sample", "Simple Will Format Sample"],
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
