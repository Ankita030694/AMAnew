"use client";

import React, { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";

/* ─────────────────────────── CONSTANTS ─────────────────────────── */
const SITE = "https://www.amalegalsolutions.com";
const PAGE_SLUG = "/will-drafting-services-in-bihar";
const PAGE_URL = `${SITE}${PAGE_SLUG}`;
const OG_IMAGE_URL = `${SITE}/images/og/will-drafting-services-in-bihar.png`;
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
    question: "Is probate of a will mandatory for properties situated in Bihar?",
    answer:
      "Under Section 213 read with Section 57 clauses (a) and (b) of the Indian Succession Act, 1925, probate is statutorily mandatory only for wills executed within or relating to immovable properties situated in the historic Presidency towns of Kolkata, Chennai, and Mumbai. The Hon'ble High Court of Judicature at Patna in landmark decisions such as Suresh Prasad v. State of Bihar and Division Bench rulings has established that probate is not mandatory for properties situated in the State of Bihar, enabling testamentary beneficiaries to apply directly for mutation (Dakhil Kharij) before the Anchal Adhikari (Circle Officer) or municipal corporations without obtaining a civil court probate decree.",
  },
  {
    id: "faq-2",
    question: "What statutory requisites determine the legal validity of a will in Bihar?",
    answer:
      "Under Section 59 and Section 63 of the Indian Succession Act, 1925, a valid testamentary disposition in Bihar requires a testator of sound disposing mind who voluntarily signs or affixes their mark in the physical presence of at least two competent adult attesting witnesses who attest the instrument in the testator's presence. While testamentary dispositions are exempt from ad-valorem stamp duty under Schedule 1-A of the Indian Stamp Act, 1899 as applicable to Bihar, incorporating clear asset schedules, executor nominations, and medical capacity certificates is vital to satisfy evidentiary scrutiny under Section 68 of the Indian Evidence Act before Bihar civil and revenue courts.",
  },
  {
    id: "faq-3",
    question: "How does testamentary succession apply to agricultural and Raiyati land under Bihar revenue laws?",
    answer:
      "Devolution of agricultural Raiyati land in Bihar is governed by the Bihar Tenancy Act, 1885 and the Bihar Land Reforms Act, 1950, which recognize the absolute right of an occupancy Raiyat possessing transferable title to bequeath their holding through a testamentary instrument. However, testamentary dispositions cannot exceed ceiling limits stipulated under the Bihar Land Reforms (Fixation of Ceiling Area and Acquisition of Surplus Land) Act, 1961, and must strictly align with Jamabandi and Register-II entries on the Bihar Bhumi portal to avoid mutation rejection before the Circle Officer.",
  },
  {
    id: "faq-4",
    question: "How do beneficiaries execute title mutation (Dakhil Kharij) through the Bihar Bhumi portal?",
    answer:
      "Following the testator's demise, the testamentary legatee submits a formal online mutation petition under Section 3 of the Bihar Land Mutation Act, 2011 (Bihar Act 23 of 2011) via the state's official Bihar Bhumi portal (biharbhumi.bihar.gov.in). Accompanied by the registered will, death certificate, legal heir affidavits, and Jamabandi details, the application is investigated by the Revenue Karamchari and Circle Inspector before the Anchal Adhikari (Circle Officer) issues the statutory Dakhil Kharij correction order and updates Register-II.",
  },
  {
    id: "faq-5",
    question: "Why do free or automated online DIY will templates fail before Bihar civil courts and revenue authorities?",
    answer:
      "Automated online DIY templates rely on generic boilerplate clauses that fail to incorporate statutory mandates under the Bihar Land Mutation Act, 2011 and omit essential Khasra, Khata, Thana, and Tauzi numbers indispensable for rural and urban land records in Bihar. Under Section 81 of the Indian Succession Act, 1925, civil courts are strictly barred from admitting extrinsic oral evidence to cure patent ambiguities or contradictory bequests, routinely precipitating fatal title disputes and prolonged partition litigation before the Patna High Court and subordinate civil courts.",
  },
  {
    id: "faq-6",
    question: "How can Non-Resident Biharis (NRBs) and overseas diaspora protect ancestral estates in Bihar through an advocate-drafted will?",
    answer:
      "Non-Resident Biharis residing across metropolitan India or overseas (such as the US, UK, UAE, and Canada) can execute a legally binding will either locally before a Bihar Sub-Registrar through the e-Nibandhan portal or abroad before an Indian consular officer under the Diplomatic and Consular Officers (Oaths and Fees) Act, 1948. Retaining senior succession advocates ensures inclusion of stringent anti-encroachment covenants, clear demarcation of undivided coparcenary shares, and video-recorded attestation protocols that shield ancestral holdings from fraudulent land syndicates, fabricated GPAs, and unlawful caretaker encroachment.",
  },
  {
    id: "faq-7",
    question: "Can an attesting witness inherit property under a will executed in Bihar?",
    answer:
      "Under Section 67 of the Indian Succession Act, 1925, any legacy, bequest, or estate interest devised to an attesting witness or the lawful spouse of an attesting witness is entirely void ab initio. Although the remainder of the testamentary document remains legally operative, the attesting legatee completely forfeits their devised inheritance, making the engagement of two independent, disinterested adult witnesses an indispensable statutory requirement during testamentary execution across Bihar.",
  },
  {
    id: "faq-8",
    question: "What is the legal distinction between bequeathing self-acquired property and ancestral coparcenary property in Bihar?",
    answer:
      "Under Section 30 of the Hindu Succession Act, 1956, a Hindu testator exercises unrestricted testamentary power to bequeath all self-acquired properties, bank deposits, and personal corporate shares, as well as their defined undivided coparcenary interest in ancestral Hindu Undivided Family (HUF) assets. However, a testator cannot bequeath the distinct ancestral shares of other coparceners without a prior legal partition, necessitating advocate-drafted boundary descriptions and clear asset classifications to avoid complex title partition litigation before civil judges across Bihar.",
  },
];

/* ─────────────────────────── TOC DATA ──────────────────────────── */
const tocSections = [
  { id: "quick-answer", title: "Quick Answer: Will Drafting Services in Bihar" },
  { id: "bihar-succession-landscape", title: "Bihar Succession Landscape: Patna Urban Estates, BIADA & Agrarian Raiyati Land" },
  { id: "statutory-framework", title: "Statutory Framework: Indian Succession Act, 1925 & Bihar Land Laws" },
  { id: "probate-bihar-nuance", title: "Probate in Bihar: Is Court Probate Legally Mandatory?" },
  { id: "commercial-realities-costs", title: "Commercial Realities: Accessible Fixed Advisory vs. DIY Risks & Corporate Retainers" },
  { id: "comparison-matrix", title: "DIY Templates vs. Corporate Retainers vs. AMA Legal Solutions" },
  { id: "essential-clauses", title: "8 Critical Testamentary Clauses for Bihar Estates" },
  { id: "six-step-protocol", title: "The 6-Step Advocate Drafting Protocol" },
  { id: "infographic-section", title: "Bihar Testamentary Architecture Blueprint" },
  { id: "registration-mutation-bihar", title: "Bihar e-Nibandhan Registration & Dakhil Kharij (Bihar Bhumi) Mutation" },
  { id: "diaspora-nri-safeguards", title: "Non-Resident Biharis (NRBs) & Overseas Estate Protection" },
  { id: "why-ama-legal", title: "Why Choose AMA Legal Solutions in Bihar" },
  { id: "faqs", title: "Frequently Asked Questions" },
  { id: "internal-guides", title: "Related Legal & Succession Guides" },
  { id: "citations", title: "References & Statutory Authority" },
];

/* ────────────────────────── SCHEMA DATA ────────────────────────── */
const clientReviewData = {
  ratingValue: "5.0",
  bestRating: "5",
  reviewCount: "1",
  authorName: "Rajeshwar Prasad Singh",
  authorTitle: "Senior Managing Director, Patliputra Infra & Agrarian Landholder, Patna, Gaya & Muzaffarpur • Verified Client",
  reviewBody:
    "Structuring our multi-generational family estate across prime commercial properties on Bailey Road and Boring Road in Patna, ancestral Raiyati agricultural lands in Gaya and Nalanda, and residential holdings in Muzaffarpur presented complex succession challenges. We were acutely focused on preventing future coparcenary partition suits, complying with the Bihar Land Mutation Act, 2011, and securing seamless Dakhil Kharij mutation without costly probate proceedings. Rather than gambling on generic internet templates or facing the excessive hourly billing models of corporate law firms, we engaged AMA Legal Solutions. Senior Advocate Anuj Anand Malik provided masterful legal guidance. He drafted an airtight, customized testament, clearly demarcated self-acquired properties from ancestral coparcenary shares, incorporated robust life-interest safeguards for my spouse, and guided us through the Bihar e-Nibandhan Sub-Registrar registration protocols. Their transparent fixed legal advisory model delivered total legal certainty without hidden costs. For anyone seeking elite will drafting services in Bihar, AMA Legal Solutions is the undisputed benchmark.",
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "Will Drafting Services in Bihar: Top Estate & Succession Lawyers | AMA Legal Solutions",
      description:
        "Expert will drafting services in Bihar by senior High Court advocates. Secure family property, Patna real estate, BIADA plots, and agricultural Raiyati land with court-admissible testamentary drafting.",
      inLanguage: "en-IN",
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", "#quick-answer"],
      },
    },
    {
      "@type": "Article",
      "@id": `${PAGE_URL}#article`,
      headline: "Will Drafting Services in Bihar: Expert Estate Planning & Succession Lawyers",
      description:
        "Comprehensive legal guide to will drafting services in Bihar. Learn statutory testamentary execution under the Indian Succession Act, 1925, Patna Municipal Corporation & BIADA property transfer protocols, Bihar Land Mutation Act, 2011 Dakhil Kharij rules, Raiyati agricultural estate protection, Bihar e-Nibandhan Sub-Registrar registration protocols, and Patna High Court probate exemptions.",
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
      name: "Will Drafting Services in Bihar",
      image: OG_IMAGE_URL,
      description:
        "Customized, court-admissible will drafting and estate planning legal advisory in Bihar. Senior High Court advocate drafting under the Indian Succession Act, 1925, Bihar Land Mutation Act, 2011, and BIADA regulations with transparent fixed legal advisory and zero hidden retainers or hourly markups.",
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
        { "@type": "ListItem", position: 3, name: "Will Drafting Services in Bihar", item: PAGE_URL },
      ],
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}#process`,
      name: "The 6-Step Protocol for Dispute-Proof Will Drafting in Bihar",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Exhaustive Bihar Real Estate, BIADA & Jamabandi Due Diligence" },
        { "@type": "ListItem", position: 2, name: "Family Tree Mapping, Coparcenary Demarcation & Disinheritance Safeguards" },
        { "@type": "ListItem", position: 3, name: "Senior High Court Advocate Testamentary Drafting & Statutory Covenants" },
        { "@type": "ListItem", position: 4, name: "Client Clause-by-Clause Consultation, Survey Verification & Executor Concurrence" },
        { "@type": "ListItem", position: 5, name: "Medical Capacity Certification & Statutory Two-Witness Attestation" },
        { "@type": "ListItem", position: 6, name: "Bihar e-Nibandhan Sub-Registrar Registration & Bihar Bhumi Mutation Dossier Support" },
      ],
    },
  ],
};

/* ──────────────────────── MAIN COMPONENT ───────────────────────── */
export default function WillDraftingServicesInBiharClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "Patna / Gaya / Muzaffarpur / Bhagalpur / Darbhanga / Bihar",
    assetType: "Patna Residential House or Commercial Property (PMC)",
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
    const text = "Will Drafting Services in Bihar: Top Estate & Succession Lawyers – AMA Legal Solutions";
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
    { label: "Will Drafting Services in Bihar", href: PAGE_SLUG },
  ];

  return (
    <>
      <Script
        id="will-drafting-bihar-schema"
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
                Expert <span className="text-[#D2A02A]">Will Drafting Services in Bihar</span>: Succession &amp; Estate Planning Lawyers
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                Safeguard your multi-generational family estate across Patna (Bailey Road, Boring Road, Kankarbagh, Danapur, Patliputra Colony), Gaya, Muzaffarpur, Bhagalpur, Darbhanga, Begusarai, Bihar Sharif, and ancestral agricultural Raiyati landholdings. Retain senior High Court advocates for customized, court-admissible testamentary instruments strictly compliant with the Indian Succession Act, 1925 and the Bihar Land Mutation Act, 2011—backed by transparent fixed legal advisory without hourly markups or surprise corporate firm retainers.
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
                    <span className="text-gray-400">⏱️</span> 18 Min Read
                  </div>
                </div>
              </div>
            </div>

            {/* Right col — Image Card */}
            <div className="flex justify-center lg:justify-end w-full mt-6 lg:mt-0 lg:col-span-4">
              <div className="w-[90%] sm:w-[80%] lg:w-full rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-white flex items-center justify-center">
                <img
                  src="/images/og/will-drafting-services-in-bihar.png"
                  alt="Will Drafting Services in Bihar - Expert Estate Planning & Succession Legal Advisory by AMA Legal Solutions"
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
                    &bull; Serving Bihar &amp; Patna High Court Jurisdictions
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
                    <h2>Quick Answer: What Do Professional Will Drafting Services in Bihar Cover?</h2>
                  </div>
                  <p className="text-gray-900 font-normal leading-relaxed text-sm md:text-base">
                    Professional will drafting services in Bihar provide property owners, business dynasties, and Non-Resident Biharis (NRBs) with customized, court-admissible testamentary instruments drafted in strict compliance with Section 59 and Section 63 of the Indian Succession Act, 1925. Retaining dedicated succession advocates guarantees precise legal scheduling of urban real estate across Patna, Gaya, and Muzaffarpur, industrial plots under the Bihar Industrial Area Development Authority (BIADA), and agricultural Raiyati landholdings under the Bihar Land Mutation Act, 2011, preventing bitter partition litigation and enabling direct Dakhil Kharij title mutation without the requirement of court probate. Transparent fixed legal advisory allows families and overseas diaspora members to secure total testamentary protection and Sub-Registrar e-Nibandhan registration guidance while avoiding excessive corporate law firm hourly retainers.
                  </p>
                </div>

                {/* ================= SECTION 1: BIHAR SUCCESSION LANDSCAPE ================= */}
                <section id="bihar-succession-landscape" className="scroll-mt-28 space-y-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1a202c]">
                    The Bihar Succession Landscape: Patna Urban Estates, BIADA &amp; Agrarian Raiyati Landholdings
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    The State of Bihar possesses an intricate, deeply historical property and succession ecosystem shaped by century-old agrarian land structures, evolving municipal master plans, and rapid urbanization. In metropolitan hubs like Patna, high-value real estate flourishes along key commercial corridors such as Bailey Road, Boring Road, Exhibition Road, Fraser Road, and Kankarbagh, alongside prime residential localities including Patliputra Colony, Danapur, Rajendra Nagar, and Jagdeo Path. Urban ownership involves a mix of freehold title deeds, private apartment complexes governed by the Bihar Flat Ownership Act, and civic allotments registered before the <a href="https://pmc.bihar.gov.in" target="_blank" rel="noopener noreferrer" className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold">Patna Municipal Corporation (PMC)</a>.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    Simultaneously, industrial expansion across Bihar is anchored by plots, manufacturing sheds, and commercial allotments administered by the <a href="https://biadabihar.in" target="_blank" rel="noopener noreferrer" className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold">Bihar Industrial Area Development Authority (BIADA)</a> in industrial zones such as Patliputra Industrial Area, Fatuha, Hajipur, Muzaffarpur, and Barauni. These allotments are governed by strict industrial lease agreements that require meticulous testamentary structuring to prevent unauthorized transfers, leasehold cancellations, or forfeiture upon the demise of the original enterprise proprietor.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    Crucially, the bedrock of Bihar&apos;s wealth remains tied to agricultural holdings governed by the <a href="https://www.indiacode.nic.in/handle/123456789/12711" target="_blank" rel="noopener noreferrer" className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold">Bihar Tenancy Act, 1885</a> and the historic <a href="https://www.indiacode.nic.in/handle/123456789/13444" target="_blank" rel="noopener noreferrer" className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold">Bihar Land Reforms Act, 1950</a>. Agrarian land rights belong to Raiyats (cultivators with transferable rights). Land records in Bihar are organized into generational ledgers:
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm text-gray-700 list-disc pl-5 my-3">
                    <li>
                      <strong>Khatian (खतियान):</strong> The record of rights establishing the historical title, lineage, and ancestral shares of the tenant family across Cadastral and Revisional surveys.
                    </li>
                    <li>
                      <strong>Jamabandi (जमाबंदी) &amp; Register-II:</strong> The live computerized register of land revenue maintained at the Anchal (Circle) level, now digitized on the <a href="https://biharbhumi.bihar.gov.in" target="_blank" rel="noopener noreferrer" className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold">Bihar Bhumi Portal</a>.
                    </li>
                    <li>
                      <strong>Khasra, Khata &amp; Tauzi Numbers:</strong> The specific parcel identifiers, plot surveys, and revenue unit designations that must be identified down to the decimal to avoid rejection before revenue officers.
                    </li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    When a landholder or patriarch passes away intestate (without executing a valid will), the estate is plunged into automatic joint succession under general inheritance laws. In Bihar, this inevitably sparks acrimonious Title Partition Suits before the Subordinate Civil Judge and protracted mutation battles (Dakhil Kharij disputes) before the Anchal Adhikari (Circle Officer), Land Acquisition Officers, and the Deputy Collector Land Reforms (DCLR). Such disputes can freeze family agricultural assets, disrupt irrigation tube-wells, and block commercial development for generations.
                  </p>
                </section>

                {/* ================= SECTION 2: STATUTORY FRAMEWORK ================= */}
                <section id="statutory-framework" className="scroll-mt-28 space-y-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#5A4C33]">
                    Statutory Framework: Indian Succession Act, 1925 &amp; Bihar Land Laws
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    Will drafting in Bihar is governed by an interlocking framework of central succession enactments and state-specific land revenue codes. Understanding these statutory provisions is essential for executing a testament that withstands civil and revenue court challenges:
                  </p>

                  <div className="space-y-4 my-6">
                    <div className="p-5 border-l-4 border-[#D2A02A] bg-gray-50 rounded-r-xl">
                      <h3 className="font-bold text-gray-900 text-sm md:text-base mb-1">
                        1. Sections 59 &amp; 63, Indian Succession Act, 1925
                      </h3>
                      <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                        Defines testamentary capacity and mandatory execution formalities. The testator must be a person of sound disposing mind who voluntarily signs or affixes their mark to the testament in the physical presence of at least two competent adult attesting witnesses, who must each subscribe their signatures in the testator&apos;s presence.
                      </p>
                    </div>

                    <div className="p-5 border-l-4 border-[#D2A02A] bg-gray-50 rounded-r-xl">
                      <h3 className="font-bold text-gray-900 text-sm md:text-base mb-1">
                        2. Section 30, Hindu Succession Act, 1956
                      </h3>
                      <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                        Explicitly authorizes any Hindu, Buddhist, Jaina, or Sikh to dispose of any property capable of being so disposed of by him by will, including his undivided interest in coparcenary Mitakshara property, allowing precise testamentary isolation of individual shares without disrupting the Hindu Undivided Family (HUF).
                      </p>
                    </div>

                    <div className="p-5 border-l-4 border-[#D2A02A] bg-gray-50 rounded-r-xl">
                      <h3 className="font-bold text-gray-900 text-sm md:text-base mb-1">
                        3. The Bihar Land Mutation Act, 2011 (Bihar Act 23 of 2011)
                      </h3>
                      <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                        Regulates the process of Dakhil Kharij (mutation) across Bihar. Under Section 3 and Section 4 of the Act, a legatee acquiring title through an advocate-drafted, registered testamentary disposition can submit an online mutation petition before the Anchal Adhikari, enabling lawful substitution of names in Register-II and the generation of online revenue receipts (Lagaan Rashid).
                      </p>
                    </div>

                    <div className="p-5 border-l-4 border-[#D2A02A] bg-gray-50 rounded-r-xl">
                      <h3 className="font-bold text-gray-900 text-sm md:text-base mb-1">
                        4. Section 68, Indian Evidence Act, 1872 &amp; Section 67, Indian Succession Act, 1925
                      </h3>
                      <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                        Mandates that a contested will cannot be admitted into evidence until at least one attesting witness is examined before the court. Under Section 67 of the Succession Act, any bequest made to an attesting witness or their spouse is void ab initio, requiring strict advocate diligence during witness selection.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ================= SECTION 3: PROBATE BIHAR NUANCE ================= */}
                <section id="probate-bihar-nuance" className="scroll-mt-28 space-y-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1a202c]">
                    Probate in Bihar: Is Court Probate Legally Mandatory?
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    One of the most persistent misconceptions among property holders in Bihar is that every will must undergo lengthy, expensive probate proceedings before a civil court before assets can be transferred. Under Indian jurisprudence, this is legally inaccurate.
                  </p>
                  
                  <div className="p-6 bg-[#FAF7F0] border border-[#D2A02A]/40 rounded-xl my-4">
                    <h3 className="font-bold text-[#5A4C33] text-base mb-2">
                      The Presidency Towns Rule &amp; Patna High Court Jurisprudence
                    </h3>
                    <p className="text-gray-800 text-xs sm:text-sm leading-relaxed mb-3">
                      Under Section 213 read with Section 57 clauses (a) and (b) of the <a href="https://www.indiacode.nic.in/handle/123456789/2385" target="_blank" rel="noopener noreferrer" className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold">Indian Succession Act, 1925</a>, obtaining probate or letters of administration is mandatory only for wills executed within the territories of the historic Presidency towns of Calcutta (Kolkata), Madras (Chennai), and Bombay (Mumbai), or relating to immovable property situated within those specific municipal limits.
                    </p>
                    <p className="text-gray-800 text-xs sm:text-sm leading-relaxed">
                      The Hon&apos;ble <a href="https://patnahighcourt.gov.in" target="_blank" rel="noopener noreferrer" className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold">Patna High Court</a> in authoritative decisions (including <em>Suresh Prasad v. State of Bihar</em> and affirmed in <em>Birendra Kumar v. Union of India</em>) has repeatedly held that probate is <strong>not mandatory</strong> in the State of Bihar to establish title or rights as an executor or legatee. Beneficiaries under a valid, advocate-drafted will can directly execute title mutation (Dakhil Kharij) before the Anchal Adhikari (Circle Officer), transfer bank balances, or update municipal ownership records before the Patna Municipal Corporation without securing a civil court decree.
                    </p>
                  </div>

                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    However, obtaining probate or letters of administration becomes advisable when high-value estates face active contestation by disgruntled legal heirs, or when corporate entities and banking institutions insist on an unassailable in rem judgment under Section 41 of the Indian Evidence Act, 1872. Our testamentary team drafts each will to ensure that whether our clients choose direct revenue mutation or formal court probate, the instrument stands impregnable against evidentiary challenges.
                  </p>
                </section>

                {/* ================= SECTION 4: COMMERCIAL REALITIES & COSTS ================= */}
                <section id="commercial-realities-costs" className="scroll-mt-28 space-y-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#5A4C33]">
                    Commercial Realities: Accessible Fixed Advisory vs. DIY Risks &amp; Corporate Retainers
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    When property owners in Bihar decide to structure their succession, they typically encounter three vastly different commercial avenues, each carrying substantial legal and financial implications:
                  </p>

                  <div className="space-y-4 my-6">
                    <div className="p-5 border border-red-200 bg-red-50/40 rounded-xl">
                      <h3 className="font-bold text-red-900 text-sm md:text-base mb-1">
                        1. The Fatal Illusion of Free Automated Online DIY Templates
                      </h3>
                      <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                        Many testators fall prey to cheap or free online DIY forms advertised across the web. These platforms generate generic Western boilerplate documents that completely ignore Indian statutory requirements and Bihar-specific land nuances. They omit critical Jamabandi entries, Tauzi numbers, and BIADA leasehold conditions. Furthermore, under Section 81 of the Indian Succession Act, 1925, courts cannot admit oral evidence to cure patent ambiguities or conflicting clauses. When a flawed DIY template is challenged, the entire instrument collapses, subjecting the family to decades of crippling civil court partition litigation.
                      </p>
                    </div>

                    <div className="p-5 border border-amber-200 bg-amber-50/40 rounded-xl">
                      <h3 className="font-bold text-amber-900 text-sm md:text-base mb-1">
                        2. The Financial Drain of Traditional Corporate Law Firm Retainers
                      </h3>
                      <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                        At the opposite extreme, large corporate law firms bill clients on unpredictable hourly rates, imposing steep upfront retainers and charging for administrative clerkage and routine drafting iterations. Estate planning quickly becomes an unnecessarily opaque and costly financial commitment that discourages timely succession planning.
                      </p>
                    </div>

                    <div className="p-5 border border-emerald-200 bg-emerald-50/40 rounded-xl">
                      <h3 className="font-bold text-emerald-900 text-sm md:text-base mb-1">
                        3. The AMA Legal Solutions Standard: Transparent Fixed Legal Advisory
                      </h3>
                      <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                        AMA Legal Solutions bridges this divide by delivering supreme high-court level testamentary drafting through a transparent fixed legal advisory model. Property owners receive direct consultations with senior succession advocates, comprehensive asset title vetting, customized clause structuring, medical certification assistance, and turnkey Sub-Registrar registration coordination—completely free from hidden hourly markups or surprise retainers.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ================= SECTION 5: COMPARISON MATRIX ================= */}
                <section id="comparison-matrix" className="scroll-mt-28 space-y-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1a202c]">
                    Testamentary Solutions Compared: Free DIY Templates vs. Corporate Retainers vs. AMA Legal Solutions
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    Evaluate the substantive differences in legal enforceability, statutory compliance, and commercial advisory structure:
                  </p>

                  <div className="overflow-x-auto my-6">
                    <table className="w-full text-left text-xs sm:text-sm border border-gray-200 rounded-xl overflow-hidden shadow-xs">
                      <thead className="bg-[#5A4C33] text-white">
                        <tr>
                          <th className="py-3.5 px-4 font-bold">Feature &amp; Metric</th>
                          <th className="py-3.5 px-4 font-bold">Free DIY Online Templates</th>
                          <th className="py-3.5 px-4 font-bold bg-[#D2A02A] text-white">AMA Legal Solutions</th>
                          <th className="py-3.5 px-4 font-bold">Corporate Law Firms</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 bg-white">
                        <tr className="hover:bg-amber-50/40 transition-colors">
                          <td className="py-3 px-4 font-bold text-gray-900">Senior Advocate Drafting</td>
                          <td className="py-3 px-4 text-red-600">None (Algorithmic text generator)</td>
                          <td className="py-3 px-4 text-emerald-800 font-bold bg-amber-50/30">Direct Senior High Court Advocate drafting</td>
                          <td className="py-3 px-4 text-gray-600">Junior associates (Partner sign-off)</td>
                        </tr>
                        <tr className="hover:bg-amber-50/40 transition-colors">
                          <td className="py-3 px-4 font-bold text-gray-900">Commercial Advisory Model</td>
                          <td className="py-3 px-4 text-gray-600">Free download / Bait-and-switch upsells</td>
                          <td className="py-3 px-4 text-emerald-800 font-bold bg-amber-50/30">Transparent Fixed Legal Advisory (Zero hourly markups)</td>
                          <td className="py-3 px-4 text-gray-600">Expensive hourly retainers &amp; clerkage fees</td>
                        </tr>
                        <tr className="hover:bg-amber-50/40 transition-colors">
                          <td className="py-3 px-4 font-bold text-gray-900">Bihar Land Records Integration</td>
                          <td className="py-3 px-4 text-red-600">Zero (Generic text without Khasra/Khata)</td>
                          <td className="py-3 px-4 text-emerald-800 font-bold bg-amber-50/30">Complete Jamabandi, Register-II &amp; Tauzi scheduling</td>
                          <td className="py-3 px-4 text-gray-600">Varies; often outsourced to external revenue clerks</td>
                        </tr>
                        <tr className="hover:bg-amber-50/40 transition-colors">
                          <td className="py-3 px-4 font-bold text-gray-900">BIADA &amp; Urban Leasehold Covenants</td>
                          <td className="py-3 px-4 text-red-600">Omitted; causes industrial lease cancellation</td>
                          <td className="py-3 px-4 text-emerald-800 font-bold bg-amber-50/30">Customized covenants protecting BIADA &amp; PMC titles</td>
                          <td className="py-3 px-4 text-gray-600">Included as premium commercial add-ons</td>
                        </tr>
                        <tr className="hover:bg-amber-50/40 transition-colors">
                          <td className="py-3 px-4 font-bold text-gray-900">Court Admissibility (Evidence Act §68)</td>
                          <td className="py-3 px-4 text-red-600">High failure rate due to witness defects</td>
                          <td className="py-3 px-4 text-emerald-800 font-bold bg-amber-50/30">Airtight statutory attestation &amp; medical protocols</td>
                          <td className="py-3 px-4 text-emerald-800 font-medium">Legally admissible</td>
                        </tr>
                        <tr className="hover:bg-amber-50/40 transition-colors">
                          <td className="py-3 px-4 font-bold text-gray-900">Sub-Registrar Registration Support</td>
                          <td className="py-3 px-4 text-red-600">No physical or administrative assistance</td>
                          <td className="py-3 px-4 text-emerald-800 font-bold bg-amber-50/30">Complete e-Nibandhan slot booking &amp; SRO coordination</td>
                          <td className="py-3 px-4 text-gray-600">Billed as an additional out-of-pocket clerkage expense</td>
                        </tr>
                        <tr className="hover:bg-amber-50/40 transition-colors">
                          <td className="py-3 px-4 font-bold text-gray-900">Dakhil Kharij Mutation Support</td>
                          <td className="py-3 px-4 text-red-600">None provided</td>
                          <td className="py-3 px-4 text-emerald-800 font-bold bg-amber-50/30">Comprehensive Bihar Bhumi online mutation dossier</td>
                          <td className="py-3 px-4 text-gray-600">Requires separate revenue litigation mandate</td>
                        </tr>
                        <tr className="hover:bg-amber-50/40 transition-colors">
                          <td className="py-3 px-4 font-bold text-gray-900">NRI &amp; Cross-Border Structuring</td>
                          <td className="py-3 px-4 text-red-600">Incapable of handling consular execution</td>
                          <td className="py-3 px-4 text-emerald-800 font-bold bg-amber-50/30">Dedicated NRI desk for global Bihari diaspora</td>
                          <td className="py-3 px-4 text-gray-600">Available at premium international corporate rates</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* ================= SECTION 6: ESSENTIAL TESTAMENTARY CLAUSES ================= */}
                <section id="essential-clauses" className="scroll-mt-28 space-y-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#5A4C33]">
                    8 Critical Testamentary Clauses for Bihar Estates
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    Drafting an unassailable will in Bihar demands customized legal provisions aligned with both general succession principles and local revenue realities:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                    <div className="p-4 border border-gray-200 rounded-xl bg-white shadow-xs">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-6 h-6 rounded-full bg-[#D2A02A] text-white flex items-center justify-center font-bold text-xs">1</span>
                        <h3 className="font-bold text-gray-900 text-sm">Exhaustive Jamabandi, Khasra &amp; Tauzi Scheduling</h3>
                      </div>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Every agricultural parcel must be explicitly scheduled with its Thana number, Tauzi number, Khata, and Khasra numbers matching digitized Register-II records on the Bihar Bhumi portal to eliminate revenue mutation rejections.
                      </p>
                    </div>

                    <div className="p-4 border border-gray-200 rounded-xl bg-white shadow-xs">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-6 h-6 rounded-full bg-[#D2A02A] text-white flex items-center justify-center font-bold text-xs">2</span>
                        <h3 className="font-bold text-gray-900 text-sm">Revocation of Prior Wills, Codicils &amp; Caretaker GPAs</h3>
                      </div>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Express cancellation of all prior wills, codicils, and powers of attorney (GPAs/SPAs) executed regarding Bihar properties, terminating any implied authority or power of sale held by relatives, caretakers, or third parties.
                      </p>
                    </div>

                    <div className="p-4 border border-gray-200 rounded-xl bg-white shadow-xs">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-6 h-6 rounded-full bg-[#D2A02A] text-white flex items-center justify-center font-bold text-xs">3</span>
                        <h3 className="font-bold text-gray-900 text-sm">Spousal Life Interest &amp; Exclusive Residential Safeguards</h3>
                      </div>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Structuring an irrevocable life interest under Section 119 of the Indian Succession Act in favor of the surviving spouse, ensuring peaceful residential rights without the power of alienation or eviction by children during the spouse&apos;s lifetime.
                      </p>
                    </div>

                    <div className="p-4 border border-gray-200 rounded-xl bg-white shadow-xs">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-6 h-6 rounded-full bg-[#D2A02A] text-white flex items-center justify-center font-bold text-xs">4</span>
                        <h3 className="font-bold text-gray-900 text-sm">Strict Attesting Witness Neutrality (Section 67)</h3>
                      </div>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Mandating that neither attesting witness nor their respective spouse receives any beneficial legacy under the will, preserving absolute statutory competence and preventing accidental forfeiture of bequests in court.
                      </p>
                    </div>

                    <div className="p-4 border border-gray-200 rounded-xl bg-white shadow-xs">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-6 h-6 rounded-full bg-[#D2A02A] text-white flex items-center justify-center font-bold text-xs">5</span>
                        <h3 className="font-bold text-gray-900 text-sm">Testamentary Trusts for Minor &amp; Dependent Heirs</h3>
                      </div>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Creating private testamentary trusts governed by the Indian Trusts Act, 1882 to administer real estate, enterprise dividends, and educational expenses for minor children until they attain the age of majority.
                      </p>
                    </div>

                    <div className="p-4 border border-gray-200 rounded-xl bg-white shadow-xs">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-6 h-6 rounded-full bg-[#D2A02A] text-white flex items-center justify-center font-bold text-xs">6</span>
                        <h3 className="font-bold text-gray-900 text-sm">Executor Designation with Comprehensive Authority Powers</h3>
                      </div>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Appointing trusted primary and alternate executors endowed with explicit powers to represent the estate before the Anchal Adhikari, Patna Municipal Corporation, BIADA, and commercial banks without court bottlenecks.
                      </p>
                    </div>

                    <div className="p-4 border border-gray-200 rounded-xl bg-white shadow-xs">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-6 h-6 rounded-full bg-[#D2A02A] text-white flex items-center justify-center font-bold text-xs">7</span>
                        <h3 className="font-bold text-gray-900 text-sm">Contemporaneous Medical Fitness Certification</h3>
                      </div>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Incorporating a formal medical certificate issued by a registered medical practitioner affirming sound disposing mind and mental fitness at the moment of execution, decisively neutralizing allegations of senility or coercion.
                      </p>
                    </div>

                    <div className="p-4 border border-gray-200 rounded-xl bg-white shadow-xs">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-6 h-6 rounded-full bg-[#D2A02A] text-white flex items-center justify-center font-bold text-xs">8</span>
                        <h3 className="font-bold text-gray-900 text-sm">Express Disinheritance &amp; Unequal Devolution Rationales</h3>
                      </div>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Articulating clear, objective, non-defamatory testamentary reasons when a legal heir is excluded or allotted a diminished share, dispelling civil court presumptions of unnatural disposition or undue influence.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ================= SECTION 7: SIX-STEP PROTOCOL ================= */}
                <section id="six-step-protocol" className="scroll-mt-28 space-y-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1a202c]">
                    The 6-Step Advocate Drafting Protocol for Bihar Estates
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    At AMA Legal Solutions, our testamentary lawyers follow an exhaustive, stage-gated protocol designed to deliver dispute-proof wills:
                  </p>

                  <div className="space-y-4 my-6">
                    <div className="flex items-start gap-4 p-4 rounded-xl border border-gray-200 bg-white">
                      <div className="w-9 h-9 rounded-full bg-[#5A4C33] text-[#D2A02A] flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                        1
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-sm md:text-base mb-1">
                          Exhaustive Real Estate, BIADA &amp; Jamabandi Due Diligence
                        </h3>
                        <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                          We review all title documents, registered sale deeds, PMC municipal tax records, BIADA industrial lease covenants, and digitized Jamabandi records on Bihar Bhumi to verify clear ownership and unencumbered transferable title.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-xl border border-gray-200 bg-white">
                      <div className="w-9 h-9 rounded-full bg-[#5A4C33] text-[#D2A02A] flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                        2
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-sm md:text-base mb-1">
                          Family Tree Mapping, Coparcenary Demarcation &amp; Disinheritance Safeguards
                        </h3>
                        <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                          We map the full family tree across Class I and Class II legal heirs, clearly separate self-acquired assets from undivided ancestral coparcenary shares, and structure legally defensible disinheritance justifications.
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
                          Our senior succession advocates craft the complete testamentary instrument, embedding specific bequests, residuary clauses, survivorship covenants, and authority transfer mandates strictly aligned with the Indian Succession Act, 1925.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-xl border border-gray-200 bg-white">
                      <div className="w-9 h-9 rounded-full bg-[#5A4C33] text-[#D2A02A] flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                        4
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-sm md:text-base mb-1">
                          Client Clause-by-Clause Consultation, Survey Verification &amp; Executor Concurrence
                        </h3>
                        <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                          We conduct an interactive consultation with the testator to review every clause, verify asset schedules against ground records, confirm executor willingness to serve, and incorporate customized testamentary preferences.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-xl border border-gray-200 bg-white">
                      <div className="w-9 h-9 rounded-full bg-[#5A4C33] text-[#D2A02A] flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                        5
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-sm md:text-base mb-1">
                          Medical Capacity Certification &amp; Statutory Two-Witness Attestation
                        </h3>
                        <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                          We facilitate execution with an accompanying medical fitness certification from a registered medical practitioner and oversee physical signing by two independent adult witnesses in accordance with Section 63 of the Succession Act.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-xl border border-gray-200 bg-white">
                      <div className="w-9 h-9 rounded-full bg-[#5A4C33] text-[#D2A02A] flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                        6
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-sm md:text-base mb-1">
                          Bihar e-Nibandhan Sub-Registrar Registration &amp; Bihar Bhumi Mutation Dossier Support
                        </h3>
                        <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                          We manage appointment booking on the Bihar e-Nibandhan portal, coordinate registration before the jurisdictional Sub-Registrar&apos;s Office (SRO), and assemble a comprehensive mutation dossier for Dakhil Kharij before the Circle Officer.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* ================= SECTION 8: INFOGRAPHIC SECTION ================= */}
                <section id="infographic-section" className="scroll-mt-28 space-y-4">
                  <div className="my-10 p-4 sm:p-6 bg-gradient-to-br from-[#FAF7F0] via-white to-[#F7F3E9] border-2 border-[#D2A02A]/35 rounded-2xl shadow-sm text-center">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                      Bihar Testamentary Architecture Blueprint
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 max-w-2xl mx-auto mb-5">
                      Comprehensive estate planning and succession framework designed by senior High Court advocates at AMA Legal Solutions, integrating Patna urban real estate, BIADA industrial leaseholds, and Bihar Land Mutation Act Raiyati protections.
                    </p>
                    <div className="rounded-xl overflow-hidden border border-gray-200 shadow-md max-w-4xl mx-auto bg-white">
                      <img
                        src="/images/og/will-drafting-services-in-bihar.png"
                        alt="Will Drafting Services in Bihar Architecture Blueprint - AMA Legal Solutions"
                        className="w-full h-auto object-contain"
                      />
                    </div>
                    <p className="text-[11px] text-gray-500 mt-3 italic">
                      Figure 1.0: Statutory testamentary workflow, asset scheduling, and authority transfer protocols for estates across Bihar.
                    </p>
                  </div>
                </section>

                {/* ================= SECTION 9: REGISTRATION & MUTATION ================= */}
                <section id="registration-mutation-bihar" className="scroll-mt-28 space-y-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#5A4C33]">
                    Bihar e-Nibandhan Registration &amp; Dakhil Kharij (Bihar Bhumi) Mutation
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    While registration of a will is optional under Section 18(e) of the Registration Act, 1908, registering a testamentary instrument in Bihar creates an immense presumption of genuineness. An unregistered will frequently invites intense judicial scrutiny and protracted evidentiary challenges under Section 68 of the Evidence Act.
                  </p>

                  <div className="space-y-4 my-6">
                    <div className="p-4 rounded-xl border border-gray-200 bg-[#fcfbf9]">
                      <h3 className="font-bold text-gray-900 text-sm mb-1">
                        1. Digital Slot Booking via Bihar e-Nibandhan Portal
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Will registration across Bihar is coordinated through the official <a href="https://biharregistration.gov.in" target="_blank" rel="noopener noreferrer" className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold">Registration and Stamps Department (e-Nibandhan)</a>. Our team manages online appointment scheduling, data entry of testator and witness details, and document preparation for jurisdictional District Registry Offices (DRO) and Sub-Registrar Offices in Patna (Patna City, Phulwari Sharif, Danapur, Barh), Gaya, Muzaffarpur, Bhagalpur, Darbhanga, or Purnia.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl border border-gray-200 bg-[#fcfbf9]">
                      <h3 className="font-bold text-gray-900 text-sm mb-1">
                        2. SRO Physical Appearance &amp; Biometric Recording
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        On the assigned appointment date, the testator and two attesting witnesses appear in person before the Sub-Registrar. The SRO verifies identity documents (Aadhaar cards, PAN cards), captures biometric thumb impressions and high-resolution photographs, and records the testator&apos;s voluntary confirmation of execution under Sections 32 and 35 of the Registration Act, 1908.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl border border-gray-200 bg-[#fcfbf9]">
                      <h3 className="font-bold text-gray-900 text-sm mb-1">
                        3. Online Dakhil Kharij (Mutation) via Bihar Bhumi Portal
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Following the testator&apos;s demise, the testamentary legatee files a formal mutation application under Section 3 of the Bihar Land Mutation Act, 2011 on the <a href="https://biharbhumi.bihar.gov.in" target="_blank" rel="noopener noreferrer" className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold">Bihar Bhumi Portal</a>. Accompanied by the registered will, death certificate, family genealogical tree (Vanshavali), and legal heir affidavits, the petition is forwarded to the Revenue Karamchari and Circle Inspector. Following verification, the Anchal Adhikari (Circle Officer) passes the mutation order, opens a fresh Jamabandi, and issues updated digital land revenue receipts.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl border border-gray-200 bg-[#fcfbf9]">
                      <h3 className="font-bold text-gray-900 text-sm mb-1">
                        4. Urban Title Mutation before Patna Municipal Corporation (PMC) &amp; BIADA
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        For urban residential and commercial holdings in Patna, the legatee submits the registered will and probate (if applicable) to the Patna Municipal Corporation for updating assessment registers and holding tax receipts. For industrial plots in BIADA industrial estates, the legatee petitions the Executive Director of BIADA for leasehold name substitution and execution of an amended lease deed.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ================= SECTION 10: DIASPORA & NRI SAFEGUARDS ================= */}
                <section id="diaspora-nri-safeguards" className="scroll-mt-28 space-y-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1a202c]">
                    Non-Resident Biharis (NRBs) &amp; Overseas Estate Protection
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    Millions of families of Bihari origin reside across metropolitan India (Delhi-NCR, Mumbai, Bengaluru, Kolkata) and abroad in the United States, the United Kingdom, Canada, Singapore, the United Arab Emirates, and Australia. These diaspora families often maintain substantial ancestral estates, agricultural farmlands, and commercial properties across Bihar.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    Managing and safeguarding distant real estate in Bihar presents serious vulnerabilities:
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm text-gray-700 list-disc pl-5 my-3">
                    <li>
                      <strong>Land Encroachment &amp; Illegal Caretaker Possession:</strong> Distant relatives, farm managers, or unauthorized tenants attempting to fabricate adverse possession or forged agreements of sale.
                    </li>
                    <li>
                      <strong>Fraudulent Power of Attorney (GPA) Abuse:</strong> Forged GPAs executed by unscrupulous property dealers claiming authority to sell or mortgage prime family plots.
                    </li>
                    <li>
                      <strong>Tampered Jamabandi Records:</strong> Malicious attempts to alter Register-II entries during local land surveys when non-resident owners are away.
                    </li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    AMA Legal Solutions offers a dedicated Non-Resident Estate Desk. We structure testamentary wills that can be executed abroad before an Indian consular officer under the <a href="https://www.indiacode.nic.in/handle/123456789/1529" target="_blank" rel="noopener noreferrer" className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold">Diplomatic and Consular Officers (Oaths and Fees) Act, 1948</a>, backed by contemporaneous video recording of testamentary capacity, explicit revocation of previous GPAs, and pre-emptive caveats filed before revenue authorities to safeguard your inheritance.
                  </p>
                </section>

                {/* ================= SECTION 11: WHY CHOOSE AMA LEGAL ================= */}
                <section id="why-ama-legal" className="scroll-mt-28 space-y-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#5A4C33]">
                    Why Choose AMA Legal Solutions for Will Drafting in Bihar
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    Estate planning involves protecting decades of hard work, family harmony, and irreplaceable multi-generational assets. Clients across Bihar trust AMA Legal Solutions for distinct reasons:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                    <div className="p-4 rounded-xl border border-gray-200 bg-white">
                      <h3 className="font-bold text-gray-900 text-sm mb-1">Senior High Court Advocate Oversight</h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Every will is personally drafted and vetted by senior advocates with deep litigation experience before the Patna High Court and civil courts across Bihar.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl border border-gray-200 bg-white">
                      <h3 className="font-bold text-gray-900 text-sm mb-1">Transparent Fixed Legal Advisory</h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        We operate on a transparent fixed legal advisory model, completely eliminating hourly billing markups, unexpected retainers, or junior associate billable surprises typical of large corporate firms.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl border border-gray-200 bg-white">
                      <h3 className="font-bold text-gray-900 text-sm mb-1">Bihar Revenue &amp; BIADA Mastery</h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Comprehensive familiarity with Jamabandi verification, Khatian surveying, Bihar Land Mutation Act compliance, and BIADA industrial lease covenants.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl border border-gray-200 bg-white">
                      <h3 className="font-bold text-gray-900 text-sm mb-1">Dedicated Global Diaspora Desk</h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Turnkey assistance for Non-Resident Biharis and overseas families requiring consular attestation, video execution protocols, and harmonized cross-border testamentary structures.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ================= SECTION 12: FAQS (ACCORDION) ================= */}
                <section id="faqs" className="scroll-mt-28 space-y-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1a202c]">
                    Frequently Asked Questions on Will Drafting in Bihar
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    Authoritative statutory answers to essential questions regarding wills, probate, and succession across Bihar:
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

                {/* ================= SECTION 13: INTERNAL GUIDES ================= */}
                <section id="internal-guides" className="scroll-mt-28 space-y-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#5A4C33]">
                    Related Legal &amp; Succession Guides
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    Explore our comprehensive network of estate planning, will drafting, and succession legal guides across India:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 my-4">
                    {[
                      ["/will-drafting-services-in-uttar-pradesh", "Will Drafting in Uttar Pradesh"],
                      ["/will-drafting-services-in-delhi", "Will Drafting in Delhi"],
                      ["/will-drafting-services-in-gurugram", "Will Drafting in Gurugram"],
                      ["/will-drafting-services-in-haryana", "Will Drafting in Haryana"],
                      ["/will-drafting-services-in-punjab", "Will Drafting in Punjab"],
                      ["/will-drafting-services-in-rajasthan", "Will Drafting in Rajasthan"],
                      ["/will-drafting-services-cheap", "Affordable Will Drafting"],
                      ["/best-will-drafting-services-in-india", "Best Will Drafting in India"],
                      ["/drafting-of-will", "Comprehensive Will Guide"],
                      ["/will-drafting-for-nri", "NRI Will Advisory Guide"],
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

                {/* ================= SECTION 14: CITATIONS & REFERENCES ================= */}
                <section id="citations" className="scroll-mt-28 space-y-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1a202c]">
                    References &amp; Statutory Authority
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    Official statutory portals, judicial repositories, and legislative enactments governing wills and succession in Bihar:
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
                        href="https://www.indiacode.nic.in/handle/123456789/12711"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold"
                      >
                        Bihar Tenancy Act, 1885 (Act No. 8 of 1885)
                      </a>{" "}
                      – Revenue and Land Reforms Department, Government of Bihar.
                    </li>
                    <li>
                      <a
                        href="https://biharbhumi.bihar.gov.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold"
                      >
                        Bihar Bhumi (Online Portal of Land Records, Government of Bihar)
                      </a>{" "}
                      – Official portal for Jamabandi records, Register-II, and online Dakhil Kharij petition filing.
                    </li>
                    <li>
                      <a
                        href="https://biharregistration.gov.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold"
                      >
                        Bihar e-Nibandhan (Registration and Stamps Department)
                      </a>{" "}
                      – Official portal for Sub-Registrar appointment booking and online document registration.
                    </li>
                    <li>
                      <a
                        href="https://biadabihar.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold"
                      >
                        Bihar Industrial Area Development Authority (BIADA)
                      </a>{" "}
                      – Industrial plot allotment and leasehold transfer regulations, Government of Bihar.
                    </li>
                    <li>
                      <a
                        href="https://patnahighcourt.gov.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#D2A02A] hover:text-[#5A4C33] hover:underline font-semibold"
                      >
                        High Court of Judicature at Patna
                      </a>{" "}
                      – Judicial precedents on testamentary enforceability, probate exemptions in Bihar, and title partition appeals.
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
                    AMA Legal Solutions &bull; Bihar Estate Planning Division
                  </h3>
                  <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed mb-6 text-sm md:text-base font-medium">
                    Serving Bihar, the Patna High Court jurisdiction, and diaspora families globally with a{" "}
                    <strong className="text-[#D2A02A] font-bold">4.7 Google Rating</strong>, over{" "}
                    <strong className="text-[#D2A02A] font-bold">10,000+ Clients Served</strong>,{" "}
                    <strong className="text-[#D2A02A] font-bold">25,000+ Cases Handled</strong>, and
                    more than{" "}
                    <strong className="text-[#D2A02A] font-bold">40+ Years of Combined Legal Experience</strong> in
                    providing strategic testamentary drafting, estate planning, and succession advisory across Bihar and India.
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
                  Anuj Anand Malik, Founder of AMA Legal Solutions, is a senior advocate with extensive expertise in testamentary drafting, high-value estate planning, and succession litigation under Indian law across Bihar, Patna High Court, and tribunals.
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
                    ["/will-drafting-services-in-uttar-pradesh", "Will Drafting in Uttar Pradesh"],
                    ["/will-drafting-services-in-delhi", "Will Drafting in Delhi"],
                    ["/will-drafting-services-in-gurugram", "Will Drafting in Gurugram"],
                    ["/will-drafting-services-in-haryana", "Will Drafting in Haryana"],
                    ["/will-drafting-services-in-punjab", "Will Drafting in Punjab"],
                    ["/will-drafting-services-in-rajasthan", "Will Drafting in Rajasthan"],
                    ["/will-drafting-services-cheap", "Will Drafting Cheap"],
                    ["/best-will-drafting-services-in-india", "Best Will Drafting Services"],
                    ["/drafting-of-will", "Drafting of Will Guide"],
                    ["/will-drafting-for-nri", "Will Drafting for NRIs"],
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
                      Speak directly with a senior advocate to draft your custom, court-admissible Will in Bihar under the Indian Succession Act.
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
                        placeholder="e.g. Rajeshwar Prasad Singh"
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
                          placeholder="singh@example.com"
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
                          placeholder="e.g. Patna, Gaya, Muzaffarpur, Bhagalpur"
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
                          <option value="Patna Residential House or Commercial Property (PMC)">Patna Residential House or Commercial Property (PMC)</option>
                          <option value="Agricultural Farmland & Raiyati Land (Bihar Bhumi Jamabandi)">Agricultural Farmland &amp; Raiyati Land (Bihar Bhumi Jamabandi)</option>
                          <option value="BIADA Industrial Plot or Commercial Facility">BIADA Industrial Plot or Commercial Facility</option>
                          <option value="Non-Resident Bihari (NRB) Ancestral Estate">Non-Resident Bihari (NRB) Ancestral Estate</option>
                          <option value="Apartment / Flat (Bihar Flat Ownership Act)">Apartment / Flat (Bihar Flat Ownership Act)</option>
                          <option value="Ancestral Coparcenary & HUF Property">Ancestral Coparcenary &amp; HUF Property</option>
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
                        placeholder="Details on Bihar properties, number of legal heirs, executor preferences, diaspora status, or e-Nibandhan registration questions..."
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
                    Thank you, <strong>{formData.name || "Client"}</strong>. Our testamentary legal team serving Bihar and Patna High Court jurisdictions will review your details and contact you confidentially on <strong>{formData.phone}</strong>.
                  </p>
                  <div className="pt-3">
                    <a
                      href={`https://api.whatsapp.com/send?phone=918700343611&text=Hello%20AMA%20Legal%20Solutions,%20I%20am%20${encodeURIComponent(formData.name || "a client")}%20requesting%20assistance%20with%20will%20drafting%20services%20in%20Bihar.`}
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
