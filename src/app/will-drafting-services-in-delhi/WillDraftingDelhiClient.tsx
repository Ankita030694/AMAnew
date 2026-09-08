"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";

/* ─────────────────────────── CONSTANTS ─────────────────────────── */
const SITE = "https://www.amalegalsolutions.com";
const PAGE_SLUG = "/will-drafting-services-in-delhi";
const PAGE_URL = `${SITE}${PAGE_SLUG}`;
const OG_IMAGE_URL = `${SITE}/images/og/will-drafting-services-in-delhi.png`;
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
    question: "Is probate of a will mandatory for properties located in Delhi?",
    answer: "Under Section 213 read with Section 57 of the Indian Succession Act, 1925, probate is statutorily mandatory only for wills executed within the historical Presidency towns of Kolkata, Chennai, and Mumbai, or for immovable properties situated within those territories. As reaffirmed by the Supreme Court in Kanta Yadav v. Om Prakash Yadav and consistent Delhi High Court precedents, obtaining probate for a will executed in Delhi is entirely optional, enabling beneficiaries to seek direct mutation of assessment before the Municipal Corporation of Delhi (MCD) or Delhi Development Authority (DDA).",
  },
  {
    id: "faq-2",
    question: "What statutory legal requirements govern the valid execution of a will in Delhi?",
    answer: "Under Section 59 and Section 63 of the Indian Succession Act, 1925, a valid will requires a testator possessing sound testamentary disposing capacity who signs or affixes their mark voluntarily in the presence of at least two competent adult witnesses. While execution on non-judicial stamp paper is not required under the Indian Stamp Act, 1899, the instrument must contain an express revocation of previous wills, a comprehensive schedule of assets, and non-beneficiary attestations to withstand challenge before the Delhi High Court or District Courts.",
  },
  {
    id: "faq-3",
    question: "Why do automated online DIY will templates frequently fail in Delhi courts?",
    answer: "Automated online templates regularly fail because they rely on generic Western boilerplate provisions that fail to address Indian personal succession laws, DDA leasehold conversion conditions, or specific MCD mutation bylaws under Section 128 of the Delhi Municipal Corporation Act, 1957. Under Section 81 of the Indian Succession Act, 1925, courts cannot admit extrinsic evidence to cure patent legal ambiguities or conflicting bequests, exposing high-value Delhi residential and commercial estates to protracted partition suits under personal succession codes.",
  },
  {
    id: "faq-4",
    question: "How does registering a will before the Delhi Sub-Registrar provide evidentiary security?",
    answer: "Although testamentary registration remains optional under Section 18 of the Registration Act, 1908, registering a will before the jurisdictional Sub-Registrar in Delhi (such as Mehrauli, Kashmere Gate, Saket, or Kapashera) establishes strong prima facie evidence of genuine execution. The mandatory biometric fingerprinting, official digital photography, and advocate identification record refute subsequent frivolous claims of forgery, impersonation, or undue influence under Section 61 of the Indian Succession Act, 1925.",
  },
  {
    id: "faq-5",
    question: "Can an attesting witness also inherit property as a beneficiary under a Delhi will?",
    answer: "Under Section 67 of the Indian Succession Act, 1925, any testamentary bequest, legacy, or interest devised to an attesting witness or the spouse of an attesting witness is void ab initio. While the execution of the will itself remains legally operative, the interested witness completely forfeits their entitlement to the estate, making independent, disinterested witnesses a mandatory precaution during execution.",
  },
  {
    id: "faq-6",
    question: "Does a will executed in Delhi attract stamp duty under the Indian Stamp Act?",
    answer: "Under Schedule I of the Indian Stamp Act, 1899 as applicable to the National Capital Territory of Delhi, no stamp duty is leviable on the drafting, execution, or registration of a last will and testament. Because a will constitutes an ambulatory post-mortem testamentary disposition rather than an inter-vivos conveyance of title, testators execute valid wills on plain white paper without incurring ad-valorem stamp expenditures.",
  },
  {
    id: "faq-7",
    question: "How are self-acquired properties distinguished from ancestral coparcenary shares in Delhi wills?",
    answer: "Under Section 30 of the Hindu Succession Act, 1956, a Hindu testator holds absolute testamentary disposition over their self-acquired real estate and financial wealth, alongside their defined undivided share in ancestral coparcenary property. However, any attempt to bequeath another coparcener's legitimate ancestral entitlement without prior partition is legally void, necessitating careful advocate drafting to separate ancestral coparcenary interests from individually titled Delhi builder floors and DDA allotments.",
  },
  {
    id: "faq-8",
    question: "What is the statutory procedure to alter or revoke a will previously drafted in Delhi?",
    answer: "Under Section 62 and Section 70 of the Indian Succession Act, 1925, a testator may alter or revoke their will at any time during their lifetime provided they retain sound mental disposing capacity. Minor administrative modifications or substituted executor appointments are legally executed via an attested supplementary instrument known as a Codicil, whereas substantial changes to asset allocations warrant executing a fresh comprehensive will with an explicit revocation clause superseding all earlier instruments.",
  },
];

/* ─────────────────────────── TOC DATA ──────────────────────────── */
const tocSections = [
  { id: "quick-answer", title: "Quick Answer: Will Drafting Services in Delhi" },
  { id: "delhi-succession-landscape", title: "Delhi Real Estate & Succession Landscape (DDA, MCD, L&DO)" },
  { id: "statutory-framework", title: "Statutory Framework: Indian Succession Act, 1925" },
  { id: "probate-delhi-nuance", title: "Probate in Delhi: Is Court Probate Legally Mandatory?" },
  { id: "comparison-matrix", title: "DIY Templates vs. Corporate Retainers vs. AMA Legal Solutions" },
  { id: "essential-clauses", title: "8 Critical Testamentary Clauses for Delhi Estates" },
  { id: "six-step-protocol", title: "The 6-Step Advocate Drafting Protocol" },
  { id: "infographic-section", title: "Delhi Testamentary Architecture Blueprint" },
  { id: "registration-mutation-delhi", title: "Sub-Registrar Registration & DDA/MCD Mutation Protocols" },
  { id: "why-ama-legal", title: "Why Choose AMA Legal Solutions in Delhi" },
  { id: "faqs", title: "Frequently Asked Questions" },
  { id: "internal-guides", title: "Related Legal & Succession Guides" },
  { id: "citations", title: "References & Statutory Authority" },
];

/* ────────────────────────── SCHEMA DATA ────────────────────────── */
const clientReviewData = {
  ratingValue: "5.0",
  bestRating: "5",
  reviewCount: "1",
  authorName: "Dr. Vikramjit Sehgal",
  authorTitle: "Senior Consultant & Property Owner, Greater Kailash II, New Delhi • Verified Client",
  reviewBody:
    "Drafting a comprehensive testamentary will for our multi-generational properties across Greater Kailash, Vasant Vihar, and commercial units in Connaught Place felt overwhelming until we retained AMA Legal Solutions. Advocate Anuj Anand Malik personally assessed our complex family asset distribution, structured ironclad executor and residuary clauses under the Indian Succession Act, and guided us through seamless registration at the Mehrauli Sub-Registrar office. Their transparent fixed legal advisory protected us from the excessive hourly retainers charged by corporate law firms while delivering absolute court-tested peace of mind. For anyone in Delhi seeking dispute-proof will drafting, AMA Legal Solutions is incomparable.",
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "Will Drafting Services in Delhi: Top Estate & Succession Lawyers | AMA Legal Solutions",
      description:
        "Expert will drafting services in Delhi by senior High Court advocates. Secure your family's assets with court-admissible, dispute-proof testamentary drafting compliant with the Indian Succession Act, 1925.",
      inLanguage: "en-IN",
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", "#quick-answer"],
      },
    },
    {
      "@type": "Article",
      "@id": `${PAGE_URL}#article`,
      headline: "Will Drafting Services in Delhi: Expert Estate Planning & Succession Lawyers",
      description:
        "Comprehensive legal guide to will drafting services in Delhi, NCT of Delhi. Learn statutory testamentary execution under the Indian Succession Act, 1925, DDA/MCD property mutation rules, Sub-Registrar registration protocols, and probate exemptions.",
      image: [OG_IMAGE_URL],
      datePublished: "2026-03-20T09:00:00+05:30",
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
      name: "Will Drafting Services in Delhi",
      image: OG_IMAGE_URL,
      description:
        "Customized, court-admissible will drafting and estate planning legal advisory in Delhi, National Capital Territory of Delhi. Senior High Court advocate drafting under the Indian Succession Act, 1925 with zero hidden retainers or hourly markups.",
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
        { "@type": "ListItem", position: 3, name: "Will Drafting Services in Delhi", item: PAGE_URL },
      ],
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}#process`,
      name: "The 6-Step Protocol for Dispute-Proof Will Drafting in Delhi",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Comprehensive Delhi Real Estate & Financial Portfolio Due Diligence" },
        { "@type": "ListItem", position: 2, name: "Family Tree Structuring, Heir Allocation & Disinherison Legal Safeguards" },
        { "@type": "ListItem", position: 3, name: "Senior High Court Advocate Testamentary Drafting & Statutory Covenants" },
        { "@type": "ListItem", position: 4, name: "Client Clause-by-Clause Review, Survey Verification & Executor Concurrence" },
        { "@type": "ListItem", position: 5, name: "Medical Capacity Certification & Statutory Two-Witness Attestation" },
        { "@type": "ListItem", position: 6, name: "Delhi Sub-Registrar Registration & MCD/DDA Property Mutation Dossier Preparation" },
      ],
    },
  ],
};

/* ──────────────────────── MAIN COMPONENT ───────────────────────── */
export default function WillDraftingDelhiClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "Delhi",
    assetType: "Delhi Property & Financial Portfolios",
    message: "",
  });

  const toggleFaq = (id: string) => {
    setExpandedFaqs((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const handleShare = (platform: string) => {
    const url = PAGE_URL;
    const text = "Will Drafting Services in Delhi: Top Estate & Succession Lawyers – AMA Legal Solutions";
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
    { label: "Will Drafting Services in Delhi", href: PAGE_SLUG },
  ];

  return (
    <>
      <Script
        id="will-drafting-delhi-schema"
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
                Expert <span className="text-[#D2A02A]">Will Drafting Services in Delhi</span>: Succession &amp; Estate Planning Lawyers
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                Protect your high-value real estate across South Delhi, Vasant Kunj, Rohini, Dwarka, and Greater Kailash. Retain senior High Court advocates to draft customized, court-admissible testamentary instruments strictly compliant with the Indian Succession Act, 1925—with transparent fixed legal advisory and zero corporate firm retainers.
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
                    <span className="text-gray-400">⏱️</span> 12 Min Read
                  </div>
                </div>
              </div>
            </div>

            {/* Right col — Image Card */}
            <div className="flex justify-center lg:justify-end w-full mt-6 lg:mt-0 lg:col-span-4">
              <div className="w-[90%] sm:w-[80%] lg:w-full rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-white flex items-center justify-center">
                <img
                  src="/images/og/will-drafting-services-in-delhi.png"
                  alt="Will Drafting Services in Delhi - Expert Estate Planning & Succession Legal Advisory by AMA Legal Solutions"
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
                    &bull; Serving Delhi NCT &amp; High Court Jurisdictions
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
                    <h2>Quick Answer: What Do Professional Will Drafting Services in Delhi Cover?</h2>
                  </div>
                  <p className="text-gray-900 font-normal leading-relaxed text-sm md:text-base">
                    Professional will drafting services in Delhi provide testators with customized, legally binding estate planning instruments drafted in strict compliance with Section 59 and Section 63 of the Indian Succession Act, 1925. Retaining experienced succession advocates ensures precise scheduling of Delhi Development Authority (DDA), Municipal Corporation of Delhi (MCD), and freehold real estate, prevents bitter family partition litigation, and secures direct municipal property mutation without the necessity of court probate. Transparent fixed legal advisory allows Delhi residents to obtain dispute-proof testamentary drafting and Sub-Registrar registration assistance while completely eliminating excessive corporate law firm hourly retainers.
                  </p>
                </div>

                {/* ================= SECTION 1: DELHI SUCCESSION LANDSCAPE ================= */}
                <section id="delhi-succession-landscape" className="scroll-mt-28 space-y-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1a202c]">
                    The Delhi Real Estate &amp; Succession Landscape: DDA, MCD, L&amp;DO &amp; Multi-Tiered Assets
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    The National Capital Territory of Delhi presents one of the most intricate property and succession landscapes in India. Unlike homogenous suburban developments, real estate in Delhi spans a multifaceted mosaic of land tenures: historic freehold plots in Civil Lines and Old Delhi; leasehold and converted freehold allotments under the Delhi Development Authority (DDA) in Rohini, Dwarka, and Vasant Kunj; Land &amp; Development Office (L&amp;DO) properties in Central Delhi and Lutyens&apos; periphery; independent builder floors across South Delhi enclaves such as Greater Kailash, Hauz Khas, Panchsheel Park, and Defence Colony; and Cooperative Group Housing Society (CGHS) apartments across East Delhi and Dwarka.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    Because land valuations across Delhi represent substantial family fortunes, the devolution of real estate carries immense financial and emotional implications. When an estate owner dies intestate (without executing a valid testament), their property is mechanically apportioned among all Class I legal heirs under personal succession codes, such as the <a href="https://www.indiacode.nic.in/handle/123456789/1711" target="_blank" rel="noopener noreferrer" className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold">Hindu Succession Act, 1956</a> or the Indian Succession Act, 1925. Intestate succession frequently fragments family titles, creating joint co-ownership among estranged siblings or distant relatives and triggering multi-year partition suits before the Delhi District Courts (Tis Hazari, Saket, Patiala House, Karkardooma, Rohini, Dwarka) and the Hon&apos;ble High Court of Delhi.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    Discerning families seeking commercial <strong className="font-semibold text-gray-900">will drafting services in Delhi</strong> often find themselves trapped between two undesirable extremes: either paying exorbitant hourly retainers to elite corporate law firms that treat testamentary drafting as an overpriced niche luxury, or relying on dangerous, free automated online DIY templates that lack statutory validity under Indian law. At <Link href="/" className="text-[#D2A02A] hover:underline font-semibold">AMA Legal Solutions</Link>, we bridge this market gap by delivering comprehensive, court-tested estate planning and testamentary drafting by senior High Court advocates through a transparent, fixed legal advisory model that guarantees complete accessibility without surprise retainers.
                  </p>
                </section>

                {/* ================= SECTION 2: STATUTORY FRAMEWORK ================= */}
                <section id="statutory-framework" className="scroll-mt-28 space-y-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#5A4C33]">
                    Statutory Framework: Testamentary Requisites under the Indian Succession Act, 1925
                  </h2>

                  <div className="bg-[#f6f4ee] border-l-4 border-[#5A4C33] p-4 md:p-6 rounded-r-xl">
                    <blockquote className="text-[#3a3020] text-sm md:text-base font-medium italic">
                      &ldquo;Section 59 of the Indian Succession Act, 1925 provides that every person of sound mind not being a minor may dispose of his property by Will. Under Section 63, the testator shall sign or affix his mark, attested by two or more witnesses, each of whom has seen the testator sign or affix his mark.&rdquo;
                    </blockquote>
                  </div>

                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    Every will executed within the National Capital Territory of Delhi is judged strictly against the substantive standards codified in the <a href="https://www.indiacode.nic.in/handle/123456789/2385" target="_blank" rel="noopener noreferrer" className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold">Indian Succession Act, 1925</a> and authoritative precedents of the Supreme Court of India and the Delhi High Court:
                  </p>

                  <ul className="space-y-3 text-gray-700 text-sm md:text-base list-disc list-inside">
                    <li>
                      <strong className="text-gray-900 font-semibold">Testamentary Capacity &amp; Sound Disposing Mind (Section 59):</strong> The testator must fully comprehend the extent of their assets, the natural objects of their bounty, and the legal effect of the disposition at the exact moment of execution. For senior citizens or individuals undergoing medical treatments in Delhi hospitals, securing a contemporaneous medical fitness certificate from a registered medical practitioner is an indispensable safeguard.
                    </li>
                    <li>
                      <strong className="text-gray-900 font-semibold">Absence of Coercion, Fraud &amp; Undue Influence (Section 61):</strong> A will obtained through emotional manipulation, physical duress, or misrepresentation is void ab initio. When multi-crore Delhi properties or unequal shares between sons and daughters are involved, clear, recorded testamentary rationale is essential to eliminate suspicious circumstances.
                    </li>
                    <li>
                      <strong className="text-gray-900 font-semibold">Exemption from Stamp Duty:</strong> Under Schedule I of the Indian Stamp Act, 1899 as applicable to Delhi, no stamp duty is payable on a will. A testament executed on ordinary plain bond paper carries complete legal authority and is fully admissible in courts and administrative registries.
                    </li>
                    <li>
                      <strong className="text-gray-900 font-semibold">Strict Independent Attestation (Section 63(c) &amp; Section 67):</strong> The will must be attested by at least two adult witnesses who personally observe the testator signing. Crucially, under Section 67, any legacy, devise, or interest given to an attesting witness or their spouse is void. Beneficiaries must never sign as attesting witnesses.
                    </li>
                    <li>
                      <strong className="text-gray-900 font-semibold">Self-Acquired vs. Coparcenary Powers (Section 30, Hindu Succession Act):</strong> A Hindu testator holds unfettered testamentary power over self-acquired real estate and personal wealth, alongside their undivided interest in Hindu Undivided Family (HUF) coparcenary property. However, attempting to bequeath another family member&apos;s distinct ancestral share without partition is legally defective.
                    </li>
                  </ul>
                </section>

                {/* ================= SECTION 3: PROBATE IN DELHI ================= */}
                <section id="probate-delhi-nuance" className="scroll-mt-28 space-y-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1a202c]">
                    Probate in Delhi: Is Court Probate Legally Mandatory for Delhi Properties?
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    One of the most persistent misconceptions among Delhi property owners is the belief that every will must undergo lengthy, expensive probate proceedings before a court can recognize it. Indian statutory law draws a critical geographic distinction that directly benefits testators in the National Capital Territory of Delhi:
                  </p>

                  <div className="bg-amber-50/50 p-5 rounded-2xl border border-amber-200/60 my-4 space-y-3">
                    <h3 className="font-bold text-gray-900 text-base flex items-center gap-2">
                      <span>⚖️</span> The Historic Statutory Exemption under Section 213(1) &amp; Section 57
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                      Under Section 213(1) read with clauses (a) and (b) of Section 57 of the Indian Succession Act, 1925, obtaining probate or Letters of Administration is legally mandatory <em>only</em> if the will was executed within the historic Presidency towns of Kolkata, Chennai, and Mumbai, or if the immovable property bequeathed is located within those territories.
                    </p>
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                      Because Delhi was never a Presidency town, the Supreme Court of India in landmark rulings—including <em>Kanta Yadav v. Om Prakash Yadav (2019)</em>—and the Delhi High Court in <em>Pamela Manmohan Singh v. State</em> and <em>Murlidhar Dua v. Shashi Mohan</em> have definitively settled that probate of a will is <strong>NOT mandatory</strong> for properties situated in Delhi. Beneficiaries under a valid, legally drafted will can directly apply for title mutation before the Municipal Corporation of Delhi (MCD), DDA, and revenue authorities without obtaining a court decree.
                    </p>
                  </div>

                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    However, while mandatory probate is not imposed by statute in Delhi, voluntary probate remains an available legal remedy under Section 276 of the Act. If hostile relatives dispute the execution of the will, or if financial institutions and offshore registrars demand judicial confirmation of the executor&apos;s title, an advocate-drafted will with solid evidentiary foundations enables an executor to secure probate smoothly before the District Judge or the Delhi High Court.
                  </p>
                </section>

                {/* ================= SECTION 4: COMPARISON MATRIX ================= */}
                <section id="comparison-matrix" className="scroll-mt-28 space-y-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#5A4C33]">
                    Comparative Matrix: Free DIY Templates vs. Corporate Retainers vs. AMA Legal Solutions
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    Delhi property owners evaluating testamentary drafting services must scrutinize legal enforceability, jurisdictional compliance, and fee transparency before selecting their legal counsel:
                  </p>

                  <div className="overflow-x-auto my-6">
                    <table className="min-w-full bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                      <thead className="bg-[#5A4C33] text-white text-xs sm:text-sm">
                        <tr>
                          <th className="py-3 px-4 text-left font-semibold">Evaluation Parameters</th>
                          <th className="py-3 px-4 text-left font-semibold bg-[#4b3f2b]">Automated DIY Online Templates</th>
                          <th className="py-3 px-4 text-left font-semibold bg-[#D2A02A] text-black">AMA Legal Solutions (Delhi)</th>
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
                          <td className="py-3 px-4 font-bold text-gray-900">Delhi Property Nuances (DDA &amp; MCD)</td>
                          <td className="py-3 px-4 text-red-600">Completely omitted; generic boilerplate causes mutation rejections</td>
                          <td className="py-3 px-4 text-emerald-800 font-bold bg-amber-50/30">Precise scheduling compliant with DDA conversion &amp; MCD bylaws</td>
                          <td className="py-3 px-4 text-gray-600">Included, but billed as separate real estate advisory modules</td>
                        </tr>
                        <tr className="hover:bg-amber-50/40 transition-colors">
                          <td className="py-3 px-4 font-bold text-gray-900">Fee Structure &amp; Commercial Model</td>
                          <td className="py-3 px-4 text-gray-600">Unreliable free tier or hidden recurring subscription markups</td>
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
                          <td className="py-3 px-4 font-bold text-gray-900">Sub-Registrar Registration Guidance</td>
                          <td className="py-3 px-4 text-red-600">No physical or local administrative support provided</td>
                          <td className="py-3 px-4 text-emerald-800 font-bold bg-amber-50/30">Complete appointment, biometric, and advocate identification support</td>
                          <td className="py-3 px-4 text-gray-600">Billed as an additional administrative clerkage expense</td>
                        </tr>
                        <tr className="hover:bg-amber-50/40 transition-colors">
                          <td className="py-3 px-4 font-bold text-gray-900">Disinherison &amp; Life Interest Trusts</td>
                          <td className="py-3 px-4 text-red-600">Incapable of handling contested bequests or usufructuary rights</td>
                          <td className="py-3 px-4 text-emerald-800 font-bold bg-amber-50/30">Custom protective trusts and documented justification clauses</td>
                          <td className="py-3 px-4 text-gray-600">Handled well, but framed with excessive bureaucratic density</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* ================= SECTION 5: ESSENTIAL TESTAMENTARY CLAUSES ================= */}
                <section id="essential-clauses" className="scroll-mt-28 space-y-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1a202c]">
                    8 Critical Testamentary Clauses for Delhi Estates &amp; High-Value Portfolios
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    A legally sound testament must contain precise statutory covenants tailored to the unique attributes of Delhi real estate and multi-generational family dynamics:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                    <div className="p-4 border border-gray-200 rounded-xl bg-[#fcfbf9]">
                      <h3 className="font-bold text-gray-900 text-sm mb-1">1. Absolute Revocation Clause</h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Under Section 62 of the Indian Succession Act, an explicit covenant revoking all prior wills, codicils, and testamentary dispositions executed anywhere in India or abroad prevents conflicting multi-document probate disputes.
                      </p>
                    </div>

                    <div className="p-4 border border-gray-200 rounded-xl bg-[#fcfbf9]">
                      <h3 className="font-bold text-gray-900 text-sm mb-1">2. Testamentary Capacity &amp; Sound Mind</h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        A sworn affirmation confirming that the testator is of sound disposing mind, free from coercion, fraud, or undue influence under Section 59 and Section 61, backed by contemporaneous registered medical certification.
                      </p>
                    </div>

                    <div className="p-4 border border-gray-200 rounded-xl bg-[#fcfbf9]">
                      <h3 className="font-bold text-gray-900 text-sm mb-1">3. Exhaustive Delhi Property Schedules</h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Detailed schedules delineating freehold titles, DDA allotment letter numbers, lease-to-freehold conveyance deed registration numbers, MCD property tax UPIC identifiers, and CGHS share certificate numbers.
                      </p>
                    </div>

                    <div className="p-4 border border-gray-200 rounded-xl bg-[#fcfbf9]">
                      <h3 className="font-bold text-gray-900 text-sm mb-1">4. Executor Appointment &amp; Alternate Succession</h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Appointment of a trusted primary executor and alternate successor executor under Section 222, conferring full administrative authority to collect assets, discharge liabilities, and execute title mutations before Delhi authorities.
                      </p>
                    </div>

                    <div className="p-4 border border-gray-200 rounded-xl bg-[#fcfbf9]">
                      <h3 className="font-bold text-gray-900 text-sm mb-1">5. Demarcation of Builder Floors &amp; Terrace Rights</h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Precise floor-by-floor allocation of independent builder floors across South Delhi, explicitly defining exclusive roof/terrace construction rights, stilt parking bay numbers, and common staircase easements.
                      </p>
                    </div>

                    <div className="p-4 border border-gray-200 rounded-xl bg-[#fcfbf9]">
                      <h3 className="font-bold text-gray-900 text-sm mb-1">6. Life Interest (Usufructuary) for Surviving Spouse</h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Creation of an unassailable life interest granting the surviving spouse absolute residence and rental rights for life, while vesting remainder ownership in children to prevent mid-life dispossession or elder abuse.
                      </p>
                    </div>

                    <div className="p-4 border border-gray-200 rounded-xl bg-[#fcfbf9]">
                      <h3 className="font-bold text-gray-900 text-sm mb-1">7. Express Disinherison &amp; Justification Clauses</h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        When a natural legal heir is excluded or bequeathed an unequal share, drafting clear factual justifications (such as prior inter-vivos gifts or estrangement) refutes judicial presumptions of unnatural disposition.
                      </p>
                    </div>

                    <div className="p-4 border border-gray-200 rounded-xl bg-[#fcfbf9]">
                      <h3 className="font-bold text-gray-900 text-sm mb-1">8. Comprehensive Residuary Estate Clause</h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        A robust catch-all clause under Section 102 governing all future property acquisitions, bank balances, tax refunds, and inadvertently omitted assets, completely preventing partial intestacy.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ================= SECTION 6: SIX-STEP PROTOCOL ================= */}
                <section id="six-step-protocol" className="scroll-mt-28 space-y-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#5A4C33]">
                    The 6-Step Advocate Protocol for Dispute-Proof Will Drafting in Delhi
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    At AMA Legal Solutions, our testamentary lawyers follow a rigorous six-step protocol designed to eliminate administrative ambiguity and ensure unassailable court enforceability:
                  </p>

                  <div className="space-y-4 my-6">
                    {[
                      {
                        title: "Comprehensive Delhi Real Estate & Financial Portfolio Due Diligence",
                        desc: "Our advocates conduct an exhaustive inventory of all immovable real estate (freehold kothis, builder floors, DDA allotments, CGHS memberships), commercial shops, startup equity, demat investments, and bank lockers across Delhi NCR.",
                      },
                      {
                        title: "Family Tree Structuring, Heir Allocation & Disinherison Legal Safeguards",
                        desc: "We analyze your family structure and succession goals, designing contingent bequests, life-interest protections for dependents, and documented justification covenants if any Class I legal heir is omitted.",
                      },
                      {
                        title: "Senior High Court Advocate Testamentary Drafting & Statutory Covenants",
                        desc: "A senior succession advocate drafts your bespoke testament, embedding revocation covenants, sound-disposing mind recitals, executor powers, and airtight residuary clauses under the Indian Succession Act, 1925.",
                      },
                      {
                        title: "Client Clause-by-Clause Review, Survey Verification & Executor Concurrence",
                        desc: "You receive the complete draft in clear, plain legal language for meticulous review, ensuring all municipal property numbers, bank accounts, and beneficiary designations match official records with zero discrepancies.",
                      },
                      {
                        title: "Medical Capacity Certification & Statutory Two-Witness Attestation",
                        desc: "We provide comprehensive guidance on obtaining a contemporaneous medical fitness certificate from a registered physician and supervise independent two-witness attestation under Section 63 to defeat future undue influence claims.",
                      },
                      {
                        title: "Delhi Sub-Registrar Registration & MCD/DDA Property Mutation Dossier Preparation",
                        desc: "For testators desiring maximum evidentiary security, we coordinate registration before the jurisdictional Delhi Sub-Registrar (such as Mehrauli, Kashmere Gate, Saket, or Kapashera) and structure the will for seamless post-mortem mutation.",
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

                {/* ================= SECTION 7: INFOGRAPHIC SECTION (BLOG STYLE) ================= */}
                <section id="infographic-section" className="my-10 p-4 sm:p-6 bg-gradient-to-br from-[#FAF7F0] via-white to-[#F7F3E9] border-2 border-[#D2A02A]/35 rounded-2xl shadow-sm">
                  <div className="flex items-center gap-3 mb-4 pb-3 border-b border-[#D2A02A]/20">
                    <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-[#D2A02A] text-white font-bold text-base shadow-sm">
                      📊
                    </span>
                    <div>
                      <h3 className="text-base sm:text-lg font-extrabold text-[#1a202c]">
                        Delhi Testamentary Architecture &amp; Succession Blueprint
                      </h3>
                      <p className="text-xs text-gray-500 font-medium">
                        Visual guide to statutory compliance, asset scheduling &amp; Delhi estate planning
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl overflow-hidden bg-white border border-[#D2A02A]/20 shadow-sm flex justify-center items-center p-2 sm:p-4">
                    <img
                      src="/images/og/will-drafting-services-in-delhi.png"
                      alt="Will Drafting Services in Delhi - Testamentary Architecture Infographic by AMA Legal Solutions"
                      className="w-full h-auto max-h-[900px] object-contain rounded-lg hover:scale-[1.01] transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-[11px] text-gray-400 text-center mt-3 font-medium">
                    Prepared by AMA Legal Solutions Research &amp; Succession Team &bull; Delhi Testamentary Architecture &amp; Succession Overview
                  </p>
                </section>

                {/* ================= SECTION 8: REGISTRATION & MUTATION IN DELHI ================= */}
                <section id="registration-mutation-delhi" className="scroll-mt-28 space-y-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1a202c]">
                    Sub-Registrar Registration &amp; Property Mutation Protocols Across Delhi Authorities
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    A will accomplishes its ultimate legal objective only when the designated beneficiaries can smoothly mutate property titles without facing bureaucratic rejection or judicial stays:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                    <div className="bg-[#fcfbf9] p-5 rounded-2xl border border-gray-200">
                      <h3 className="font-bold text-gray-900 text-base mb-2 flex items-center gap-2">
                        <span>🏛️</span> Sub-Registrar Registration across Delhi Districts
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        Under Section 18(e) of the <a href="https://www.indiacode.nic.in/handle/123456789/2288" target="_blank" rel="noopener noreferrer" className="text-[#D2A02A] hover:underline font-semibold">Registration Act, 1908</a>, registering a will is optional. However, registering before the jurisdictional Sub-Registrar (such as Mehrauli, Kashmere Gate, Saket, Janakpuri, Rohini, Kapashera, or Preet Vihar) creates official government documentation. High-resolution digital photographs, biometric fingerprint scans, and advocate verification establish formidable proof that defeats subsequent claims of forgery or impersonation under Section 61 of the Indian Succession Act.
                      </p>
                    </div>

                    <div className="bg-[#fcfbf9] p-5 rounded-2xl border border-gray-200">
                      <h3 className="font-bold text-gray-900 text-base mb-2 flex items-center gap-2">
                        <span>📋</span> Direct MCD &amp; DDA Mutation (No Mandatory Probate)
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        Under Section 128 of the Delhi Municipal Corporation Act, 1957, beneficiaries can submit an application for mutation of property tax assessment directly to the Municipal Corporation of Delhi (MCD) upon presenting a registered or attested will alongside a death certificate and indemnity bond. Similarly, the Delhi Development Authority (DDA) and Land &amp; Development Office (L&amp;DO) process title mutations without insisting on a probate decree when the will is uncontested.
                      </p>
                    </div>
                  </div>

                  <div className="bg-[#f6f4ee] p-5 rounded-2xl border border-[#5A4C33]/20">
                    <h3 className="font-bold text-gray-900 text-base mb-2 flex items-center gap-2">
                      <span>🏙️</span> High-Value Builder Floors &amp; CGHS Societies in Delhi
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                      For independent builder floors in South Delhi, a properly drafted will specifies undivided impartible ownership rights in land alongside exclusive roof/terrace rights. For Cooperative Group Housing Society (CGHS) flats in Dwarka and Patparganj, the will enables the managing committee to transfer society share certificates directly to the testamentary legatee in accordance with the Delhi Co-operative Societies Act, 2003.
                    </p>
                  </div>
                </section>

                {/* ================= SECTION 9: WHY AMA LEGAL ================= */}
                <section id="why-ama-legal" className="scroll-mt-28 space-y-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#5A4C33]">
                    Why Choose AMA Legal Solutions for Will Drafting Services in Delhi
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    Unlike automated internet portals that generate unverified text and disclaim all professional responsibility, AMA Legal Solutions is an established law firm offering complete advocate-client privilege, trial-tested courtroom experience, and dedicated testamentary advisory across Delhi NCR:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                    <div className="p-4 border border-gray-200 rounded-xl bg-white shadow-xs">
                      <div className="text-xl mb-1 text-[#D2A02A]">⚖️</div>
                      <div className="font-bold text-sm text-gray-900 mb-1">Senior High Court Advocates</div>
                      <p className="text-xs text-gray-600">Every testament is drafted, reviewed, and finalized by senior advocates actively practicing succession litigation before the Delhi High Court and District Courts.</p>
                    </div>

                    <div className="p-4 border border-gray-200 rounded-xl bg-white shadow-xs">
                      <div className="text-xl mb-1 text-[#D2A02A]">🤝</div>
                      <div className="font-bold text-sm text-gray-900 mb-1">Transparent Fixed Legal Advisory</div>
                      <p className="text-xs text-gray-600">We eliminate unpredictable hourly billing and corporate retainers, providing complete cost transparency and accessible estate planning for Delhi families.</p>
                    </div>

                    <div className="p-4 border border-gray-200 rounded-xl bg-white shadow-xs">
                      <div className="text-xl mb-1 text-[#D2A02A]">🏛️</div>
                      <div className="font-bold text-sm text-gray-900 mb-1">End-to-End Delhi Sub-Registrar Support</div>
                      <p className="text-xs text-gray-600">From drafting to coordinating official registration appointments at Mehrauli, Kashmere Gate, or Saket Sub-Registrar offices, we manage the entire procedural lifecycle.</p>
                    </div>

                    <div className="p-4 border border-gray-200 rounded-xl bg-white shadow-xs">
                      <div className="text-xl mb-1 text-[#D2A02A]">🔒</div>
                      <div className="font-bold text-sm text-gray-900 mb-1">Absolute Legal Privilege</div>
                      <p className="text-xs text-gray-600">All your asset disclosures, family declarations, and estate instructions are protected under strict advocate-client confidentiality under Section 126 of the Indian Evidence Act.</p>
                    </div>
                  </div>
                </section>

                {/* ================= SECTION 10: FAQS ACCORDION ================= */}
                <section id="faqs" className="scroll-mt-28 border-t border-gray-200 pt-12">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#1a202c] mb-8">
                    Frequently Asked Questions on Will Drafting in Delhi
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

                {/* ================= SECTION 11: MORE LEGAL GUIDES ================= */}
                <section id="internal-guides" className="scroll-mt-28 border-t border-gray-200 pt-12">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#1a202c] mb-6">
                    More Legal &amp; Succession Guides
                  </h2>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      { title: "Will Drafting in Delhi NCR", href: "/will-drafting-services-in-delhi-ncr", desc: "Testamentary drafting across Delhi, Gurugram, Noida, and Faridabad." },
                      { title: "Will Drafting in Gurugram", href: "/will-drafting-services-in-gurugram", desc: "Expert estate planning and HSVP/MCG mutation compliance in Millennium City." },
                      { title: "Best Will Drafting Services in India", href: "/best-will-drafting-services-in-india", desc: "Compare advocate-led estate planning and testamentary advisory firms." },
                      { title: "Drafting of Will: Complete Guide", href: "/drafting-of-will", desc: "Comprehensive statutory framework for executing an unassailable last will." },
                      { title: "Simple Will Format Sample", href: "/simple-will-format-download-free-legal-document-sample", desc: "Essential clause structure, witness attestation, and schedule formats." },
                      { title: "Will Drafting Cheap & Accessible", href: "/will-drafting-services-cheap", desc: "Cost-effective, court-admissible testamentary drafting by senior advocates." },
                      { title: "Will Drafting for NRIs", href: "/will-drafting-for-nri", desc: "Cross-border asset planning and Indian consulate execution for global Indians." },
                      { title: "Legal Services in Delhi", href: "/legal-services-in-delhi", desc: "Comprehensive civil, corporate, and real estate legal support across Delhi." },
                      { title: "Send Legal Notice in Delhi", href: "/send-legal-notice-in-delhi", desc: "Expert notice drafting for property, contract, and civil disputes in Delhi." },
                      { title: "Delhi NCR Law Firm Overview", href: "/delhi-ncr-law-firm", desc: "Explore our full-service legal advisory across High Courts and tribunals." },
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

                {/* ================= SECTION 12: REFERENCES & CITATIONS ================= */}
                <section id="citations" className="scroll-mt-28 border-t border-gray-200 pt-8 mt-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">References &amp; Statutory Authority</h3>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
                    {[
                      { label: "Indian Succession Act, 1925 (Sections 57, 59, 61, 63, 67, 213)", href: "https://www.indiacode.nic.in/handle/123456789/2385" },
                      { label: "Registration Act, 1908 (Sections 18, 32, 40, 41)", href: "https://www.indiacode.nic.in/handle/123456789/2288" },
                      { label: "Hindu Succession Act, 1956 (Section 30 - Testamentary Disposition)", href: "https://www.indiacode.nic.in/handle/123456789/1711" },
                      { label: "Delhi Municipal Corporation Act, 1957 (Section 128 - Mutation of Property Tax)", href: "https://mcdonline.nic.in" },
                      { label: "Delhi High Court Judgments on Delhi Will Probate Exemption", href: "https://delhihighcourt.nic.in" },
                      { label: "Supreme Court of India Precedents on Testamentary Capacity & Probate Rules", href: "https://main.sci.gov.in" },
                      { label: "Delhi Online Registration Information System (DORIS) Portal", href: "https://doris.delhigovt.nic.in" },
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
                    providing strategic testamentary drafting, estate planning, and succession advisory in Delhi and across India.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 max-w-5xl mx-auto">
                    <Link href="/drafting-of-will" className="px-3 py-2.5 border-2 border-[#D2A02A] text-[#5A4C33] font-bold rounded-lg hover:bg-[#D2A02A] hover:text-white transition-all text-center text-xs md:text-sm flex items-center justify-center">
                      Will Drafting Services
                    </Link>
                    <Link href="/family-lawyer" className="px-3 py-2.5 border-2 border-[#D2A02A] text-[#5A4C33] font-bold rounded-lg hover:bg-[#D2A02A] hover:text-white transition-all text-center text-xs md:text-sm flex items-center justify-center">
                      Estate &amp; Family Law
                    </Link>
                    <Link href="/legal-services-in-delhi" className="px-3 py-2.5 border-2 border-[#D2A02A] text-[#5A4C33] font-bold rounded-lg hover:bg-[#D2A02A] hover:text-white transition-all text-center text-xs md:text-sm flex items-center justify-center">
                      Legal Services Delhi
                    </Link>
                    <Link href="/send-legal-notice-in-delhi" className="px-3 py-2.5 border-2 border-[#D2A02A] text-[#5A4C33] font-bold rounded-lg hover:bg-[#D2A02A] hover:text-white transition-all text-center text-xs md:text-sm flex items-center justify-center">
                      Legal Notice Delhi
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
                  Anuj Anand Malik, Founder of AMA Legal Solutions, is a senior advocate with extensive expertise in testamentary drafting, high-value estate planning, and succession litigation under Indian law across Delhi, Delhi High Court, and tribunals.
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
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="block w-full border border-white text-white text-center py-3 rounded-lg font-semibold hover:bg-white hover:text-[#5A4C33] transition-colors cursor-pointer"
                >
                  Request Callback
                </button>
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
                    ["/will-drafting-services-in-gurugram", "Will Drafting in Gurugram"],
                    ["/best-will-drafting-services-in-india", "Best Will Drafting Services"],
                    ["/drafting-of-will", "Drafting of Will Guide"],
                    ["/simple-will-format-download-free-legal-document-sample", "Simple Will Format Sample"],
                    ["/will-drafting-services-cheap", "Will Drafting Cheap & Valid"],
                    ["/will-drafting-for-nri", "Will Drafting for NRIs"],
                    ["/legal-services-in-delhi", "Legal Services in Delhi"],
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

        {/* ══ INTERACTIVE INTAKE MODAL ══ */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 overflow-y-auto">
            <div className="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full p-6 sm:p-8 border border-gray-100 my-8">
              {/* Close Button */}
              <button
                onClick={() => {
                  setIsModalOpen(false);
                  setFormSubmitted(false);
                }}
                className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-lg transition-colors cursor-pointer"
                aria-label="Close Modal"
              >
                ✕
              </button>

              {!formSubmitted ? (
                <div>
                  <div className="text-center mb-6">
                    <div className="inline-block p-2.5 rounded-full bg-amber-50 text-[#D2A02A] text-2xl mb-2">
                      📜
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                      Will Drafting Legal Consultation
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500 mt-1">
                      Speak directly with an advocate to draft your custom, court-admissible Will in Delhi under the Indian Succession Act.
                    </p>
                  </div>

                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Dr. Vikramjit Sehgal"
                        className="w-full px-3.5 py-2.5 border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-[#D2A02A] focus:border-transparent outline-none transition"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">
                          WhatsApp / Phone *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+91 9876543210"
                          className="w-full px-3.5 py-2.5 border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-[#D2A02A] focus:border-transparent outline-none transition"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="sehgal@example.com"
                          className="w-full px-3.5 py-2.5 border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-[#D2A02A] focus:border-transparent outline-none transition"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">
                          City / Location
                        </label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          placeholder="e.g. Delhi (Greater Kailash, Vasant Vihar, Rohini)"
                          className="w-full px-3.5 py-2.5 border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-[#D2A02A] focus:border-transparent outline-none transition"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">
                          Primary Asset Type
                        </label>
                        <select
                          name="assetType"
                          value={formData.assetType}
                          onChange={handleInputChange}
                          className="w-full px-3.5 py-2.5 border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-[#D2A02A] focus:border-transparent outline-none transition bg-white"
                        >
                          <option value="Delhi Property & Financial Portfolios">Delhi Property &amp; Financial Portfolios</option>
                          <option value="South Delhi Builder Floor & Freehold Plot">South Delhi Builder Floor &amp; Freehold Plot</option>
                          <option value="DDA Flat & CGHS Society Apartment">DDA Flat &amp; CGHS Society Apartment</option>
                          <option value="Multiple Commercial Properties & Demat Accounts">Multiple Commercial Properties &amp; Demat Accounts</option>
                          <option value="Ancestral Property & HUF Holdings">Ancestral Property &amp; HUF Holdings</option>
                          <option value="Cross-Border Assets & Offshore Investments">Cross-Border Assets &amp; Offshore Investments</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Brief Details or Specific Questions
                      </label>
                      <textarea
                        name="message"
                        rows={2}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Details on Delhi properties, number of legal heirs, executor preferences, or registration questions..."
                        className="w-full px-3.5 py-2.5 border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-[#D2A02A] focus:border-transparent outline-none transition"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#D2A02A] hover:bg-[#b08522] text-white font-bold py-3.5 rounded-xl transition-all shadow-lg text-sm sm:text-base mt-2 cursor-pointer"
                    >
                      Submit Confidential Request
                    </button>

                    <p className="text-[11px] text-gray-400 text-center">
                      🔒 Guaranteed 100% Privacy. Advocate-Client confidentiality applies.
                    </p>
                  </form>
                </div>
              ) : (
                <div className="text-center py-6 space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-3xl mx-auto">
                    ✓
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Request Submitted Successfully</h3>
                  <p className="text-gray-600 text-sm max-w-sm mx-auto">
                    Thank you, <strong>{formData.name || "Client"}</strong>. Our testamentary legal team serving Delhi will review your details and contact you confidentially on <strong>{formData.phone}</strong>.
                  </p>
                  <div className="pt-3">
                    <a
                      href={`https://api.whatsapp.com/send?phone=918700343611&text=Hello%20AMA%20Legal%20Solutions,%20I%20am%20${encodeURIComponent(formData.name || "a client")}%20in%20Delhi%20requesting%20assistance%20with%20will%20drafting%20services.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold py-3 px-6 rounded-xl hover:bg-emerald-600 transition text-sm shadow-md"
                    >
                      <span>💬 Connect on WhatsApp Instantly</span>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

      </div>
    </>
  );
}
