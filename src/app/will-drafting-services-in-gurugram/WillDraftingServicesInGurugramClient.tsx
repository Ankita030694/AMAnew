"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";

/* ─────────────────────────── CONSTANTS ─────────────────────────── */
const SITE = "https://www.amalegalsolutions.com";
const PAGE_SLUG = "/will-drafting-services-in-gurugram";
const PAGE_URL = `${SITE}${PAGE_SLUG}`;
const OG_IMAGE_URL = `${SITE}/images/og/will-drafting-services-in-gurugram.png`;
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
    question: "Is a will executed in Gurugram legally valid without mandatory probate?",
    answer: "Under Section 213 read with Section 57 of the Indian Succession Act, 1925, probate is legally mandatory only for wills executed within the historical Presidency towns of Mumbai, Kolkata, and Chennai, or for properties situated within those territorial limits. For testators in Gurugram and throughout Haryana, obtaining probate from a civil court is entirely optional, allowing beneficiaries to directly mutate self-acquired real estate before the Municipal Corporation of Gurugram (MCG) or Haryana Shahari Vikas Pradhikaran (HSVP) upon presenting a valid, attested will.",
  },
  {
    id: "faq-2",
    question: "What statutory requirements govern valid will drafting in Gurugram under Indian law?",
    answer: "Under Section 59 and Section 63 of the Indian Succession Act, 1925, a valid will requires a testator of sound disposing mind executing the instrument voluntarily in the presence of at least two competent adult witnesses. While stamp paper is not statutorily mandated by the Indian Stamp Act, 1899, the document must contain unequivocal revocation of prior wills, precise property schedules, and valid attestation by non-beneficiary witnesses to withstand legal challenges in civil courts.",
  },
  {
    id: "faq-3",
    question: "Why should property owners in Gurugram avoid generic free online will templates?",
    answer: "Automated internet templates routinely omit mandatory residuary estate clauses, fail to account for Haryana land ceiling and HSVP transfer guidelines, and lack tailored life-interest provisions for surviving spouses. When ambiguous boilerplate language triggers succession disputes, courts under Section 81 of the Indian Succession Act, 1925 cannot rectify conflicting intentions, causing prime Gurugram properties to fall into protracted intestate litigation under personal religious succession codes.",
  },
  {
    id: "faq-4",
    question: "How does registration at the Gurugram Sub-Registrar office protect against family disputes?",
    answer: "Although will registration is strictly optional under Section 18 of the Registration Act, 1908, formal registration before the Sub-Registrar in Gurugram (such as Wazirabad, Badshahpur, or Farrukhnagar) provides strong prima facie evidence of genuine testamentary execution. Biometric verification, official photography, and advocate identification establish formidable proof that the testator possessed testamentary capacity and was free from undue influence or coercion under Section 61 of the Indian Succession Act, 1925.",
  },
  {
    id: "faq-5",
    question: "Can an attesting witness also be a beneficiary in a Gurugram will?",
    answer: "Under Section 67 of the Indian Succession Act, 1925, any legacy, bequest, or testamentary benefit bequeathed to an attesting witness or the spouse of an attesting witness is rendered void ab initio. Although the execution of the will itself remains legally valid, the interested witness permanently forfeits their share of the estate, making independent and disinterested witnesses a strict legal requirement during testamentary execution.",
  },
  {
    id: "faq-6",
    question: "Does a will drafted in Gurugram require payment of stamp duty?",
    answer: "Under Schedule I of the Indian Stamp Act, 1899, no stamp duty is leviable on the drafting, execution, or registration of a last will and testament anywhere in Haryana or across India. Testators in Gurugram do not incur ad-valorem stamp fees because a will constitutes a post-mortem testamentary declaration of intent rather than an inter-vivos property conveyance deed.",
  },
  {
    id: "faq-7",
    question: "How are ancestral coparcenary rights distinguished from self-acquired property in Gurugram wills?",
    answer: "Under Section 30 of the Hindu Succession Act, 1956, a Hindu testator can bequeath their undivided coparcenary interest in ancestral property alongside their absolute self-acquired estate. However, any testamentary attempt to bequeath another coparcener's defined ancestral share without valid partition is legally invalid, requiring experienced advocate drafting to clearly delineate distinct title boundaries between ancestral HUF holdings and self-acquired assets in Gurugram.",
  },
  {
    id: "faq-8",
    question: "How can a testator in Gurugram legally amend or revoke a previously drafted will?",
    answer: "Under Section 62 and Section 70 of the Indian Succession Act, 1925, a will remains fully revocable and amendable throughout the testator's lifetime provided testamentary capacity is maintained. Minor alterations can be legally executed through a supplementary instrument called a Codicil, whereas major structural changes to asset distribution or beneficiary appointments are best executed through a comprehensive fresh will that expressly cancels all prior instruments.",
  },
];

/* ─────────────────────────── TOC DATA ──────────────────────────── */
const tocSections = [
  { id: "quick-answer", title: "Quick Answer: Will Drafting Services in Gurugram" },
  { id: "estate-landscape-gurugram", title: "Gurugram Real Estate & Succession Landscape" },
  { id: "statutory-framework", title: "Statutory Framework: Indian Succession Act" },
  { id: "comparison-matrix", title: "DIY Templates vs. Corporate Retainers vs. AMA" },
  { id: "essential-clauses", title: "8 Critical Testamentary Clauses for Gurugram Estates" },
  { id: "six-step-protocol", title: "The 6-Step Advocate Drafting Protocol" },
  { id: "infographic-section", title: "Testamentary Architecture Blueprint" },
  { id: "registration-mutation-haryana", title: "Sub-Registrar Registration & MCG/HSVP Mutation" },
  { id: "why-ama-legal", title: "Why Choose AMA Legal Solutions in Gurugram" },
  { id: "faqs", title: "Frequently Asked Questions" },
  { id: "internal-guides", title: "Related Legal & Succession Guides" },
  { id: "citations", title: "References & Statutory Authority" },
];

/* ────────────────────────── SCHEMA DATA ────────────────────────── */
const clientReviewData = {
  ratingValue: "5.0",
  bestRating: "5",
  reviewCount: "1",
  authorName: "Col. Rajeev Ahluwalia (Retd.)",
  authorTitle: "Resident of DLF Phase 5, Gurugram • Verified Client",
  reviewBody:
    "Drafting a comprehensive testamentary will for my commercial properties on Golf Course Road and residential floor in Gurugram felt daunting until I consulted AMA Legal Solutions. Advocate Anuj Anand Malik personally examined our family's asset structure, drafted unassailable executor and residuary clauses compliant with the Indian Succession Act, and coordinated our Sub-Registrar registration at Wazirabad Tehsil with zero administrative delays. Their transparent fixed legal advisory saved us from the unreasonable hourly retainers of big corporate firms while providing court-tested protection. I cannot recommend their Gurugram estate planning team highly enough.",
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "Will Drafting Services in Gurugram: Top Estate & Succession Lawyers | AMA Legal Solutions",
      description:
        "Expert will drafting services in Gurugram by senior High Court advocates. Secure your family's assets with court-admissible, dispute-proof testamentary drafting compliant with the Indian Succession Act, 1925.",
      inLanguage: "en-IN",
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", "#quick-answer"],
      },
    },
    {
      "@type": "Article",
      "@id": `${PAGE_URL}#article`,
      headline: "Will Drafting Services in Gurugram: Expert Estate Planning & Succession Lawyers",
      description:
        "Comprehensive legal guide to will drafting services in Gurugram, Haryana. Learn statutory testamentary execution under the Indian Succession Act, 1925, HSVP/MCG property mutation rules, and Sub-Registrar registration protocols.",
      image: [OG_IMAGE_URL],
      datePublished: "2026-03-15T09:00:00+05:30",
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
      name: "Will Drafting Services in Gurugram",
      image: OG_IMAGE_URL,
      description:
        "Customized, court-admissible will drafting and estate planning legal advisory in Gurugram, Haryana. Senior High Court advocate drafting under the Indian Succession Act, 1925 with zero hidden retainers or hourly markups.",
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
        { "@type": "ListItem", position: 3, name: "Will Drafting Services in Gurugram", item: PAGE_URL },
      ],
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}#process`,
      name: "The 6-Step Protocol for Dispute-Proof Will Drafting in Gurugram",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Comprehensive Estate & High-Value Asset Mapping in Gurugram" },
        { "@type": "ListItem", position: 2, name: "Disinherison & Beneficiary Allocation Legal Structuring" },
        { "@type": "ListItem", position: 3, name: "Senior Advocate Testamentary Drafting & Statutory Covenants" },
        { "@type": "ListItem", position: 4, name: "Client Review, Asset Schedule Verification & Tax Planning" },
        { "@type": "ListItem", position: 5, name: "Medical Capacity Certification & Statutory Witness Attestation" },
        { "@type": "ListItem", position: 6, name: "Sub-Registrar Registration & MCG/HSVP Mutation Readiness" },
      ],
    },
  ],
};

/* ──────────────────────── MAIN COMPONENT ───────────────────────── */
export default function WillDraftingServicesInGurugramClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);

  const toggleFaq = (id: string) => {
    setExpandedFaqs((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };


  const handleShare = (platform: string) => {
    const url = PAGE_URL;
    const text = "Will Drafting Services in Gurugram: Top Estate & Succession Lawyers – AMA Legal Solutions";
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
    { label: "Will Drafting Services in Gurugram", href: PAGE_SLUG },
  ];

  return (
    <>
      <Script
        id="will-drafting-gurugram-schema"
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
                Expert <span className="text-[#D2A02A]">Will Drafting Services</span> in Gurugram: Succession &amp; Estate Planning Lawyers
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                Protect your high-value real estate across DLF, Golf Course Road, Sohna Road, and New Gurugram. Retain senior High Court advocates to draft customized, court-admissible testamentary instruments strictly compliant with the Indian Succession Act, 1925—with transparent, fixed legal advisory and zero corporate firm retainers.
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
                    <span className="text-gray-400">⏱️</span> 11 Min Read
                  </div>
                </div>
              </div>
            </div>

            {/* Right col — Image Card */}
            <div className="flex justify-center lg:justify-end w-full mt-6 lg:mt-0 lg:col-span-4">
              <div className="w-[90%] sm:w-[80%] lg:w-full rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-white flex items-center justify-center">
                <img
                  src="/images/og/will-drafting-services-in-gurugram.png"
                  alt="Will Drafting Services in Gurugram - Expert Estate Planning & Succession Legal Advisory by AMA Legal Solutions"
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
                    &bull; Headquartered at Sector 57, Gurugram
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
                    <h2>Quick Answer: What Do Professional Will Drafting Services in Gurugram Cover?</h2>
                  </div>
                  <p className="text-gray-900 font-normal leading-relaxed text-sm md:text-base">
                    Professional will drafting services in Gurugram provide testators with customized, legally binding estate planning instruments compliant with Section 59 and Section 63 of the Indian Succession Act, 1925. Retaining experienced succession advocates ensures precise property scheduling across HSVP, builder floor, and private condominium holdings, eliminates the risk of conflicting coparcenary claims, and secures direct municipal property mutation without the delay of civil court probate. Transparent fixed legal advisory enables families in Gurugram to obtain dispute-proof testamentary drafting and Sub-Registrar registration guidance while completely eliminating excessive corporate law firm retainers.
                  </p>
                </div>

                {/* ================= SECTION 1: ESTATE LANDSCAPE IN GURUGRAM ================= */}
                <section id="estate-landscape-gurugram" className="scroll-mt-28 space-y-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1a202c]">
                    The Gurugram Real Estate &amp; Succession Landscape: Why Customized Wills Are Vital
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    Gurugram has evolved from an agrarian district of Haryana into India’s premier Millennium City—a booming hub of corporate enterprise, luxury residential condominiums, independent builder floors, commercial plazas, and ancestral landholdings. Families residing in sectors across DLF Phase 1 to 5, Sushant Lok, Golf Course Extension Road, Sohna Road, and the Dwarka Expressway frequently hold multi-asset portfolios comprising self-acquired luxury apartments, ancestral agricultural shares, equity portfolios, corporate ESOPs, and offshore assets.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    Because real estate valuations in Gurugram are among the highest in North India, estate devolution carries substantial financial and emotional stakes. When a property owner passes away intestate (without executing a valid testament), their wealth is mechanically distributed under statutory succession rules, such as the <a href="https://www.indiacode.nic.in/handle/123456789/1711" target="_blank" rel="noopener noreferrer" className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold">Hindu Succession Act, 1956</a> or the Indian Succession Act, 1925. Intestate succession frequently triggers bitter partition suits, freezing property sales and subjecting grieving families to years of litigation before the District Courts in Gurugram.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    Many residents seek commercial <strong className="font-semibold text-gray-900">will drafting services</strong> to establish order, security, and clarity for the next generation. However, property owners often face a stark dilemma: either pay exorbitant hourly retainers to corporate legal practices that treat estate planning as a niche luxury, or risk their life’s assets on unreliable, free automated online generators. At <Link href="/" className="text-[#D2A02A] hover:underline font-semibold">AMA Legal Solutions</Link>, headquartered in Sector 57, Gurugram, we provide an authoritative, accessible alternative: comprehensive testamentary drafting by senior advocates under a transparent, fixed advisory model without hidden retainers.
                  </p>
                </section>

                {/* ================= SECTION 2: STATUTORY FRAMEWORK ================= */}
                <section id="statutory-framework" className="scroll-mt-28 space-y-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#5A4C33]">
                    Statutory Framework: Testamentary Requisites under the Indian Succession Act, 1925
                  </h2>

                  <div className="bg-[#f6f4ee] border-l-4 border-[#5A4C33] p-4 md:p-6 rounded-r-xl">
                    <blockquote className="text-[#3a3020] text-sm md:text-base font-medium italic">
                      "Section 59 of the Indian Succession Act, 1925 provides that every person of sound mind not being a minor may dispose of his property by Will. Under Section 63, the testator shall sign or affix his mark, attested by two or more witnesses, each of whom has seen the testator sign or affix his mark."
                    </blockquote>
                  </div>

                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    In Gurugram and throughout Haryana, the validity of a will is judged strictly against the substantive standards established by the <a href="https://www.indiacode.nic.in/handle/123456789/2385" target="_blank" rel="noopener noreferrer" className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold">Indian Succession Act, 1925</a> and binding precedents of the Hon&apos;ble Punjab and Haryana High Court:
                  </p>

                  <ul className="space-y-3 text-gray-700 text-sm md:text-base list-disc list-inside">
                    <li>
                      <strong className="text-gray-900 font-semibold">Absolute Testamentary Disposing Capacity (Section 59):</strong> The testator must comprehend the nature and extent of their assets, the specific individuals who naturally expect testamentary consideration, and the legal consequences of executing the disposition.
                    </li>
                    <li>
                      <strong className="text-gray-900 font-semibold">Freedom from Coercion, Fraud &amp; Undue Influence (Section 61):</strong> A will procured by manipulation, family pressure, or misrepresentation is void ab initio. When large real estate portfolios in Gurugram are bequeathed unequally among siblings, establishing an unassailable evidentiary record of voluntary execution is critical.
                    </li>
                    <li>
                      <strong className="text-gray-900 font-semibold">Non-Mandatory Stamp Duty Status:</strong> Under Schedule I of the Indian Stamp Act, 1899, no stamp duty is payable on a will. Wills executed on plain paper carry complete statutory force and are admissible in revenue offices and courts.
                    </li>
                    <li>
                      <strong className="text-gray-900 font-semibold">Strict Independent Attestation (Section 63(c) &amp; Section 67):</strong> At least two adult witnesses must physically observe the testator signing. Crucially, under Section 67, any bequest made to an attesting witness or their spouse is void. Beneficiaries must never act as attesting witnesses.
                    </li>
                  </ul>
                </section>

                {/* ================= SECTION 3: COMPARISON MATRIX ================= */}
                <section id="comparison-matrix" className="scroll-mt-28 space-y-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1a202c]">
                    Comparative Matrix: Free DIY Templates vs. Corporate Retainers vs. AMA Legal Solutions
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    Property owners evaluating will drafting services in Gurugram must assess legal enforceability, asset coverage, and cost structures before choosing their estate planning partner:
                  </p>

                  <div className="overflow-x-auto my-6">
                    <table className="min-w-full bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                      <thead className="bg-[#5A4C33] text-white text-xs sm:text-sm">
                        <tr>
                          <th className="py-3 px-4 text-left font-semibold">Key Evaluation Criteria</th>
                          <th className="py-3 px-4 text-left font-semibold bg-[#4b3f2b]">Automated DIY Templates</th>
                          <th className="py-3 px-4 text-left font-semibold bg-[#D2A02A] text-black">AMA Legal Solutions (Gurugram)</th>
                          <th className="py-3 px-4 text-left font-semibold">Large Corporate Firms</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 text-xs sm:text-sm text-gray-700">
                        <tr className="hover:bg-amber-50/40 transition-colors">
                          <td className="py-3.5 px-4 font-bold text-gray-900">Commercial Advisory Model</td>
                          <td className="py-3.5 px-4 text-red-600 font-medium">Generic form with zero personal legal liability</td>
                          <td className="py-3.5 px-4 text-emerald-700 font-bold bg-amber-50/50">Accessible, transparent fixed legal advisory</td>
                          <td className="py-3.5 px-4 text-gray-600">Costly hourly retainers &amp; multiple billing tiers</td>
                        </tr>
                        <tr className="hover:bg-amber-50/40 transition-colors">
                          <td className="py-3.5 px-4 font-bold text-gray-900">Gurugram Property Title Audit</td>
                          <td className="py-3.5 px-4 text-red-600 font-medium">None. Blind text insertion risks void bequests</td>
                          <td className="py-3.5 px-4 text-emerald-700 font-bold bg-amber-50/50">Comprehensive HSVP, MCG &amp; builder title audit</td>
                          <td className="py-3.5 px-4 text-gray-600">Included at steep supplemental billable hours</td>
                        </tr>
                        <tr className="hover:bg-amber-50/40 transition-colors">
                          <td className="py-3.5 px-4 font-bold text-gray-900">Ancestral vs Self-Acquired Review</td>
                          <td className="py-3.5 px-4 text-red-600 font-medium">Fails to distinguish; sparks coparcenary litigation</td>
                          <td className="py-3.5 px-4 text-emerald-700 font-bold bg-amber-50/50">Precise coparcenary partition &amp; share demarcation</td>
                          <td className="py-3.5 px-4 text-gray-600">Handled by junior associates</td>
                        </tr>
                        <tr className="hover:bg-amber-50/40 transition-colors">
                          <td className="py-3.5 px-4 font-bold text-gray-900">Sub-Registrar Registration Support</td>
                          <td className="py-3.5 px-4 text-red-600 font-medium">Zero registry assistance; only generates automated PDF</td>
                          <td className="py-3.5 px-4 text-emerald-700 font-bold bg-amber-50/50">Full docket preparation &amp; Sub-Registrar support</td>
                          <td className="py-3.5 px-4 text-gray-600">Billed separately with clerk overheads</td>
                        </tr>
                        <tr className="hover:bg-amber-50/40 transition-colors">
                          <td className="py-3.5 px-4 font-bold text-gray-900">Court Litigation Resilience</td>
                          <td className="py-3.5 px-4 text-red-600 font-medium">Disclaimers waive all court admissibility guarantees</td>
                          <td className="py-3.5 px-4 text-emerald-700 font-bold bg-amber-50/50">Drafted by active High Court succession litigators</td>
                          <td className="py-3.5 px-4 text-gray-600">Litigation-ready drafting</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* ================= SECTION 4: ESSENTIAL CLAUSES ================= */}
                <section id="essential-clauses" className="scroll-mt-28 space-y-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#5A4C33]">
                    8 Critical Testamentary Clauses Every Gurugram Will Must Contain
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    Drafting a will for properties in Gurugram demands meticulous contractual drafting. An omission of a single statutory covenant can leave an estate exposed to prolonged legal disputes. Our senior advocates ensure every testament contains these eight vital clauses:
                  </p>

                  <div className="space-y-4 my-6">
                    <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl">
                      <h3 className="text-base font-bold text-gray-900 mb-1 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-[#D2A02A] text-white flex items-center justify-center text-xs">1</span>
                        Testator Domicile &amp; Testamentary Capacity Affirmation
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        Sets forth the testator&apos;s full legal identity, age, Aadhaar and PAN identification, residential domicile in Gurugram, and an explicit declaration of sound disposing mind and memory, eliminating allegations of mental infirmity under Section 59.
                      </p>
                    </div>

                    <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl">
                      <h3 className="text-base font-bold text-gray-900 mb-1 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-[#D2A02A] text-white flex items-center justify-center text-xs">2</span>
                        Absolute Revocation of All Prior Wills &amp; Codicils
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        Under Section 62 of the Indian Succession Act, 1925, a will remains revocable during the testator&apos;s lifetime. This clause unequivocally annuls, cancels, and supersedes any earlier wills, codicils, or testamentary declarations made in India or abroad.
                      </p>
                    </div>

                    <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl">
                      <h3 className="text-base font-bold text-gray-900 mb-1 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-[#D2A02A] text-white flex items-center justify-center text-xs">3</span>
                        Appointment of Primary &amp; Successor Executors
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        Designates a trusted primary executor and an alternate executor endowed with explicit administrative powers to take possession of assets, settle liabilities, liaise with municipal authorities, and distribute bequests without requiring probate in Haryana.
                      </p>
                    </div>

                    <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl">
                      <h3 className="text-base font-bold text-gray-900 mb-1 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-[#D2A02A] text-white flex items-center justify-center text-xs">4</span>
                        Comprehensive Real Estate &amp; Financial Asset Schedules
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        Detailed legal descriptions of immovable properties—including apartment numbers, condominium names, sector allocations, conveyancing deeds, and HSVP plot allocations—alongside demat account folios, bank deposits, company shareholdings, and lockers.
                      </p>
                    </div>

                    <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl">
                      <h3 className="text-base font-bold text-gray-900 mb-1 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-[#D2A02A] text-white flex items-center justify-center text-xs">5</span>
                        Life Interest Covenants &amp; Reversionary Rights
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        Enables a testator to provide lifelong residential rights or income streams to a surviving spouse without granting absolute power of alienation, ensuring that upon the spouse&apos;s demise, absolute title devolves seamlessly to designated lineal descendants.
                      </p>
                    </div>

                    <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl">
                      <h3 className="text-base font-bold text-gray-900 mb-1 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-[#D2A02A] text-white flex items-center justify-center text-xs">6</span>
                        The Essential Residuary Estate Clause
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        A vital safeguard routinely omitted in automated downloads. The residuary clause governs all unlisted, forgotten, newly acquired, or contingent assets, preventing partial intestacy and ensuring zero assets are left to statutory court distribution.
                      </p>
                    </div>

                    <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl">
                      <h3 className="text-base font-bold text-gray-900 mb-1 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-[#D2A02A] text-white flex items-center justify-center text-xs">7</span>
                        Testamentary Guardianship for Minors
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        Under Section 9 of the Hindu Minority and Guardianship Act, 1956, parents can appoint testamentary guardians to manage the welfare, custody, and inherited property of minor children, eliminating jurisdictional guardianship disputes before family courts.
                      </p>
                    </div>

                    <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl">
                      <h3 className="text-base font-bold text-gray-900 mb-1 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-[#D2A02A] text-white flex items-center justify-center text-xs">8</span>
                        Statutory Attestation Memorandum &amp; Witness Verification
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        Rigorous attestation clause in strict conformity with Section 63(c) of the Indian Succession Act, 1925, wherein two independent, non-beneficiary witnesses certify that the testator executed the will voluntarily in their joint presence and sight.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ================= SECTION 5: 6-STEP PROTOCOL ================= */}
                <section id="six-step-protocol" className="scroll-mt-28 space-y-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1a202c]">
                    The 6-Step Advocate Drafting Protocol for Gurugram Residents
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    At AMA Legal Solutions, our testamentary workflow bridges the gap between high-level legal precision and accessible legal service. Our streamlined protocol ensures absolute protection:
                  </p>

                  <div className="space-y-4 my-6">
                    {[
                      {
                        title: "Comprehensive Estate & High-Value Asset Mapping in Gurugram",
                        desc: "Our advocates conduct an exhaustive inventory of all real estate holdings (DLF apartments, Sushant Lok floors, HSVP plots), business assets, startup equity, demat accounts, and bank lockers to eliminate inadvertent omissions.",
                      },
                      {
                        title: "Disinherison & Beneficiary Allocation Legal Structuring",
                        desc: "We analyze your testamentary intentions, structuring primary devises, secondary contingent bequests, life-interest trusts, and clear explanatory statements if any natural legal heir is being excluded to defeat future claims of undue influence.",
                      },
                      {
                        title: "Senior Advocate Testamentary Drafting & Statutory Covenants",
                        desc: "An experienced High Court succession advocate drafts your bespoke testament incorporating revocation covenants, sound-mind declarations, executor authorities, and comprehensive residuary estate clauses.",
                      },
                      {
                        title: "Client Review, Asset Schedule Verification & Tax Planning",
                        desc: "You receive the complete draft in plain, intelligible language for a clause-by-clause review, enabling you to verify survey numbers, bank details, and asset allocations with our senior team without administrative friction.",
                      },
                      {
                        title: "Medical Capacity Certification & Statutory Witness Attestation",
                        desc: "We provide specific guidelines for obtaining a registered medical practitioner's certificate confirming sound mental disposing state on the date of execution, alongside supervising independent two-witness attestation under Section 63.",
                      },
                      {
                        title: "Sub-Registrar Registration & MCG/HSVP Mutation Readiness",
                        desc: "For testators seeking maximum evidentiary security, we prepare the jurisdictional registration docket for the Gurugram Sub-Registrar office (Wazirabad, Badshahpur, or Farrukhnagar) and structure the will for seamless post-mortem mutation.",
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
                        Visual guide to statutory compliance, asset protection &amp; Gurugram estate planning
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl overflow-hidden bg-white border border-[#D2A02A]/20 shadow-sm flex justify-center items-center p-2 sm:p-4">
                    <img
                      src="/images/og/will-drafting-services-in-gurugram.png"
                      alt="Will Drafting Services in Gurugram - Testamentary Architecture Infographic by AMA Legal Solutions"
                      className="w-full h-auto max-h-[900px] object-contain rounded-lg hover:scale-[1.01] transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-[11px] text-gray-400 text-center mt-3 font-medium">
                    Prepared by AMA Legal Solutions Research &amp; Succession Team &bull; Gurugram Testamentary Architecture &amp; Succession Overview
                  </p>
                </section>

                {/* ================= SECTION 7: REGISTRATION & MUTATION IN HARYANA ================= */}
                <section id="registration-mutation-haryana" className="scroll-mt-28 space-y-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#5A4C33]">
                    Sub-Registrar Registration &amp; Property Mutation Across Gurugram Authorities
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    Understanding the local procedural nuances in Haryana ensures that an executed will achieves its primary purpose: fast, dispute-free property mutation without judicial roadblocks:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                    <div className="bg-[#fcfbf9] p-5 rounded-2xl border border-gray-200">
                      <h3 className="font-bold text-gray-900 text-base mb-2 flex items-center gap-2">
                        <span>🏛️</span> Optional Registration at Gurugram Tehsils
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        Under Section 18(e) of the <a href="https://www.indiacode.nic.in/handle/123456789/2288" target="_blank" rel="noopener noreferrer" className="text-[#D2A02A] hover:underline font-semibold">Registration Act, 1908</a>, registering a will is optional. However, registration before the Sub-Registrar (Gurugram Tehsil, Wazirabad, Badshahpur, Kadipur, or Manesar) creates unimpeachable official records. The physical presence of the testator, biometric fingerprinting, and official photographs create overwhelming evidence defeating future allegations of fraud.
                      </p>
                    </div>

                    <div className="bg-[#fcfbf9] p-5 rounded-2xl border border-gray-200">
                      <h3 className="font-bold text-gray-900 text-base mb-2 flex items-center gap-2">
                        <span>📋</span> Direct Mutation at MCG &amp; HSVP (No Probate)
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        Under Sections 57 and 213 of the Indian Succession Act, 1925, probate is not mandatory in Haryana. Consequently, beneficiaries under a clear, unassailable will can apply directly for mutation (Dakhil Kharij) before the Municipal Corporation of Gurugram (MCG), Haryana Shahari Vikas Pradhikaran (HSVP), or revenue patwaris without waiting for prolonged civil court proceedings.
                      </p>
                    </div>
                  </div>

                  <div className="bg-amber-50/50 p-5 rounded-2xl border border-amber-200/60">
                    <h3 className="font-bold text-gray-900 text-base mb-2 flex items-center gap-2">
                      <span>⚖️</span> Probate Jurisdiction vs. Gurugram Real Estate
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                      While Gurugram properties do not require mandatory probate, testators who own concurrent properties in Mumbai, Kolkata, or Chennai must account for Presidency Town probate mandates. Our advocates structure wills with modular asset schedules and dedicated regional executors to ensure that assets in Gurugram can be mutated immediately, even if concurrent probate petitions are filed in other high court jurisdictions.
                    </p>
                  </div>
                </section>

                {/* ================= SECTION 8: WHY AMA LEGAL ================= */}
                <section id="why-ama-legal" className="scroll-mt-28 space-y-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1a202c]">
                    Why Choose AMA Legal Solutions for Will Drafting Services in Gurugram
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    Unlike automated web portals that generate unvetted text and disclaim all professional responsibility, AMA Legal Solutions is a trusted law firm operating with complete advocate-client confidentiality and deep roots in Gurugram:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                    <div className="p-4 border border-gray-200 rounded-xl bg-white shadow-xs">
                      <div className="text-xl mb-1 text-[#D2A02A]">🏢</div>
                      <div className="font-bold text-sm text-gray-900 mb-1">Local Presence in Sector 57, Gurugram</div>
                      <p className="text-xs text-gray-600">Our physical office at Sushant Lok 2 enables convenient in-person consultations, localized Sub-Registrar support, and immediate document execution.</p>
                    </div>

                    <div className="p-4 border border-gray-200 rounded-xl bg-white shadow-xs">
                      <div className="text-xl mb-1 text-[#D2A02A]">👨‍⚖️</div>
                      <div className="font-bold text-sm text-gray-900 mb-1">Senior High Court Advocates</div>
                      <p className="text-xs text-gray-600">Every will is drafted and authenticated by senior advocates actively practicing succession litigation before the Punjab and Haryana High Court and Delhi High Court.</p>
                    </div>

                    <div className="p-4 border border-gray-200 rounded-xl bg-white shadow-xs">
                      <div className="text-xl mb-1 text-[#D2A02A]">🤝</div>
                      <div className="font-bold text-sm text-gray-900 mb-1">Transparent Fixed Legal Advisory</div>
                      <p className="text-xs text-gray-600">We eliminate unpredictable hourly fees and corporate retainers, providing complete legal clarity and cost-effective estate planning for families.</p>
                    </div>

                    <div className="p-4 border border-gray-200 rounded-xl bg-white shadow-xs">
                      <div className="text-xl mb-1 text-[#D2A02A]">🔒</div>
                      <div className="font-bold text-sm text-gray-900 mb-1">Absolute Legal Privilege</div>
                      <p className="text-xs text-gray-600">All your financial, family, and asset declarations are protected by strict advocate-client confidentiality under Section 126 of the Indian Evidence Act.</p>
                    </div>
                  </div>
                </section>

                {/* ================= SECTION 9: FAQS ACCORDION ================= */}
                <section id="faqs" className="scroll-mt-28 border-t border-gray-200 pt-12">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#1a202c] mb-8">
                    Frequently Asked Questions on Will Drafting in Gurugram
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
                    More Legal &amp; Succession Guides
                  </h2>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      { title: "Will Drafting in Delhi NCR", href: "/will-drafting-services-in-delhi-ncr", desc: "Testamentary drafting across Delhi, Gurugram, Noida, and Faridabad." },
                      { title: "Best Will Drafting Services in India", href: "/best-will-drafting-services-in-india", desc: "Compare advocate-led estate planning and testamentary advisory firms." },
                      { title: "Drafting of Will: Complete Guide", href: "/drafting-of-will", desc: "Comprehensive statutory framework for executing an unassailable last will." },
                      { title: "Simple Will Format Sample", href: "/simple-will-format-download-free-legal-document-sample", desc: "Essential clause structure, witness attestation, and schedule formats." },
                      { title: "Will Drafting Cheap & Accessible", href: "/will-drafting-services-cheap", desc: "Cost-effective, court-admissible testamentary drafting by senior advocates." },
                      { title: "Will Draft Under 3000 Guide", href: "/will-draft-under-3000", desc: "Statutory rules, court admissibility, and avoiding boilerplate pitfalls." },
                      { title: "Will Drafting for NRIs", href: "/will-drafting-for-nri", desc: "Cross-border asset planning and Indian consulate execution for global Indians." },
                      { title: "Legal Services in Gurgaon", href: "/legal-services-in-gurgaon", desc: "Comprehensive civil, corporate, and real estate legal support in Gurugram." },
                      { title: "Send Legal Notice in Gurugram", href: "/send-legal-notice-in-gurugram", desc: "Expert notice drafting for property, contract, and civil disputes in Gurugram." },
                      { title: "AMA Sector 57 Gurgaon Office", href: "/ama-legal-solutions-sector-57-gurgaon", desc: "Visit our primary legal practice office in Sushant Lok 2, Sector 57." },
                      { title: "Family Lawyer Advisory", href: "/family-lawyer", desc: "Partition suits, succession dispute mediation, and estate dispute defense." },
                      { title: "Affordable Contract Drafting", href: "/contract-drafting-between-two-parties-affordable", desc: "Legally binding commercial agreements, MoUs, and partnership deeds." },
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
                  <h3 className="text-xl font-bold text-gray-900 mb-4">References &amp; Statutory Authority</h3>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
                    {[
                      { label: "Indian Succession Act, 1925 (Sections 57, 59, 61, 63, 67, 213)", href: "https://www.indiacode.nic.in/handle/123456789/2385" },
                      { label: "Registration Act, 1908 (Sections 18, 32, 40, 41)", href: "https://www.indiacode.nic.in/handle/123456789/2288" },
                      { label: "Hindu Succession Act, 1956 (Section 30 - Testamentary Disposition)", href: "https://www.indiacode.nic.in/handle/123456789/1711" },
                      { label: "Punjab and Haryana High Court Judgments on Haryana Will Probate Exemption", href: "https://highcourtchd.gov.in" },
                      { label: "Supreme Court of India (Testamentary Capacity & Undue Influence Precedents)", href: "https://main.sci.gov.in" },
                      { label: "Jamabandi Haryana Official Land Records & Revenue Portal", href: "https://jamabandi.nic.in" },
                      { label: "Bar Council of India Professional Conduct & Standards", href: "http://www.barcouncilofindia.org" },
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
                    <strong className="text-[#D2A02A] font-bold">40+ Years of Combined Legal Experience</strong> in
                    providing strategic testamentary drafting, estate planning, and succession advisory in Gurugram and across India.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 max-w-5xl mx-auto">
                    <Link href="/drafting-of-will" className="px-3 py-2.5 border-2 border-[#D2A02A] text-[#5A4C33] font-bold rounded-lg hover:bg-[#D2A02A] hover:text-white transition-all text-center text-xs md:text-sm flex items-center justify-center">
                      Will Drafting Services
                    </Link>
                    <Link href="/family-lawyer" className="px-3 py-2.5 border-2 border-[#D2A02A] text-[#5A4C33] font-bold rounded-lg hover:bg-[#D2A02A] hover:text-white transition-all text-center text-xs md:text-sm flex items-center justify-center">
                      Estate &amp; Family Law
                    </Link>
                    <Link href="/ama-legal-solutions-sector-57-gurgaon" className="px-3 py-2.5 border-2 border-[#D2A02A] text-[#5A4C33] font-bold rounded-lg hover:bg-[#D2A02A] hover:text-white transition-all text-center text-xs md:text-sm flex items-center justify-center">
                      Gurugram Sector 57 Office
                    </Link>
                    <Link href="/send-legal-notice-in-gurugram" className="px-3 py-2.5 border-2 border-[#D2A02A] text-[#5A4C33] font-bold rounded-lg hover:bg-[#D2A02A] hover:text-white transition-all text-center text-xs md:text-sm flex items-center justify-center">
                      Legal Notice Gurugram
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
                  Anuj Anand Malik, Founder of AMA Legal Solutions, is a senior advocate with extensive expertise in testamentary drafting, high-value estate planning, and succession litigation under Indian law across Gurugram, Delhi NCR, and High Courts.
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
                    ["/will-drafting-services-in-delhi-ncr", "Will Drafting in Delhi NCR"],
                    ["/best-will-drafting-services-in-india", "Best Will Drafting Services"],
                    ["/drafting-of-will", "Drafting of Will Guide"],
                    ["/simple-will-format-download-free-legal-document-sample", "Simple Will Format Sample"],
                    ["/will-drafting-services-cheap", "Will Drafting Cheap & Valid"],
                    ["/will-drafting-for-nri", "Will Drafting for NRIs"],
                    ["/legal-services-in-gurgaon", "Legal Services in Gurgaon"],
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
