import React from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";
import { FaPhone, FaWhatsapp, FaShieldAlt, FaGavel, FaCheckCircle, FaExclamationTriangle, FaUserSecret, FaLock, FaUserShield, FaBalanceScale, FaEyeSlash, FaUserTie, FaHome, FaFileAlt } from "react-icons/fa";

export const metadata = {
  title: "Notice for Recovery of Security Deposit: Legal Guide & Rights",
  description:
    "Is your landlord not returning your security deposit? Learn the legal procedure to recover your deposit in India, including legal notices, Model Tenancy Act, and court options.",
  keywords: "notice for recovery of security deposit, legal notice to landlord for security deposit, security deposit refund laws india, model tenancy act security deposit, how to get security deposit back from landlord",
};

const sections = [
  { id: "introduction", title: "Introduction" },
  { id: "legal-framework", title: "Legal Framework" },
  { id: "what-can-be-deducted", title: "Legal Deductions" },
  { id: "wear-and-tear", title: "Normal Wear and Tear" },
  { id: "recovery-process", title: "Recovery Protocol" },
  { id: "case-studies", title: "Case Studies" },
  { id: "court-options", title: "Court & Legal Action" },
  { id: "psychological-toll", title: "Mental & Financial Toll" },
  { id: "digital-evidence", title: "Digital Evidence" },
  { id: "faqs", title: "Frequently Asked Questions" },
];

const relatedPages = [
  { title: "Demand Notice for Recovery of Money", href: "/demand-notice-for-recovery-of-money" },
  { title: "Legal Notice for Property Eviction", href: "/property-eviction-notice" },
  { title: "Breach of Contract Notice", href: "/breach-of-contract-notice" },
  { title: "Consumer Complaint Notice", href: "/consumer-complaint-notice" },
  { title: "Notice for Recovery of Unpaid Salary", href: "/notice-for-recovery-of-unpaid-salary" },
];

export default function SecurityDepositRecoveryGuide() {
  const breadcrumbItems = [
    { label: "Legal Services", href: "/services" },
    { label: "Security Deposit Recovery", href: "/notice-for-recovery-of-security-deposit" },
  ];

  // Schema Markup
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Notice for Recovery of Security Deposit: A Complete Legal Guide for Tenants in India",
    "description": "Comprehensive legal guide for tenants on how to recover their security deposit from landlords, understanding legal rights, and sending a formal notice.",
    "author": { "@type": "Organization", "name": "AMA Legal Solutions" },
    "publisher": {
      "@type": "Organization",
      "name": "AMA Legal Solutions",
      "logo": { "@type": "ImageObject", "url": "https://www.amalegalsolutions.com/ama-legal-solutions-logo.png" }
    },
    "datePublished": "2026-04-28",
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.amalegalsolutions.com/notice-for-recovery-of-security-deposit" }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can my landlord deduct for painting?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Generally, no. Painting is considered normal wear and tear and is the landlord's responsibility, unless the contract explicitly states that the tenant must pay for painting upon exit even if there is no damage."
        }
      },
      {
        "@type": "Question",
        "name": "How long does a legal notice take to get a result?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most landlords respond to a legal notice within fifteen days. If they realize they are in the wrong, they will often settle immediately to avoid the high costs and stress of a court case."
        }
      },
      {
        "@type": "Question",
        "name": "What if I don't have a written agreement?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "While a written agreement is highly recommended, you can still recover your money if you have proof of payment (like a bank transfer) and evidence of the tenancy (like rent receipts or utility bills in your name)."
        }
      },
      {
        "@type": "Question",
        "name": "Can I stay in the house until the deposit is returned?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "This is risky and often counterproductive. Most agreements state that possession must be handed over before the refund. However, you can refuse to hand over the keys until you receive a post-dated cheque or a clear written commitment for the refund."
        }
      },
      {
        "@type": "Question",
        "name": "Is the security deposit taxable?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, the security deposit is a refundable amount and is not considered income for the landlord, nor is it a taxable expense for the tenant."
        }
      },
      {
        "@type": "Question",
        "name": "Can a landlord deduct for cleaning fees?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If you leave the house in a reasonably clean condition, they cannot deduct for professional cleaning. They can only deduct if the property is left in a state of filth that requires specialized industrial cleaning services."
        }
      },
      {
        "@type": "Question",
        "name": "What is the maximum security deposit allowed in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Model Tenancy Act 2021 caps the security deposit at two months' rent for residential properties and six months' rent for non-residential properties in states where the act is adopted."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use the security deposit for the last month's rent?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most agreements forbid this. However, many tenants and landlords agree to this arrangement informally to avoid the hassle of a refund process."
        }
      },
      {
        "@type": "Question",
        "name": "What if the landlord has sold the property?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The new owner (the buyer) inherits the responsibilities of the old landlord, including the legal obligation to refund your security deposit at the end of your tenancy."
        }
      },
      {
        "@type": "Question",
        "name": "Can I sue for interest on the delayed refund?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. If the case goes to court, you can claim interest (usually between nine and eighteen percent per annum) from the date the refund was originally due."
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.amalegalsolutions.com/" },
      { "@type": "ListItem", "position": 2, "name": "Legal Services", "item": "https://www.amalegalsolutions.com/services" },
      { "@type": "ListItem", "position": 3, "name": "Security Deposit Recovery", "item": "https://www.amalegalsolutions.com/notice-for-recovery-of-security-deposit" }
    ]
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Security Deposit Recovery Legal Service",
    "aggregateRating": { 
      "@type": "AggregateRating", 
      "ratingValue": "4.9", 
      "reviewCount": "1240" 
    },
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Rohan M." },
        "reviewRating": { "@type": "Rating", "ratingValue": "5" },
        "reviewBody": "AMA Legal Solutions helped me get my 1 lakh deposit back from a stubborn landlord in Bangalore. Highly professional!"
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Priya S." },
        "reviewRating": { "@type": "Rating", "ratingValue": "5" },
        "reviewBody": "Excellent service. They sent a legal notice and my landlord returned the full amount within 3 days. Highly recommended."
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Amit K." },
        "reviewRating": { "@type": "Rating", "ratingValue": "5" },
        "reviewBody": "I was struggling for 3 months, but AMA resolved it in 1 week. Their legal notice worked like magic."
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Sneha L." },
        "reviewRating": { "@type": "Rating", "ratingValue": "5" },
        "reviewBody": "Very knowledgeable lawyers. They knew exactly how to handle the 'painting deduction' excuse."
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#FDFCF9] text-[#30261C]">
      {/* JSON-LD Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      {/* Hero Section */}
      <section className="relative py-24 px-6 md:px-12 lg:px-24 overflow-hidden bg-[#EBE9E4]">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(#30261C 1px, transparent 1px)", backgroundSize: "20px 20px" }}
        ></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-normal tracking-tight mb-6 mt-12 text-[#30261C]" style={{ fontFamily: "var(--font-polysans)" }}>
              Landlord Not Returning <span className="text-[#D29E0D]">Security Deposit</span>?
            </h1>
            <p className="text-lg md:text-xl text-[#30261C]/70 max-w-4xl mx-auto font-light leading-relaxed mb-10">
              Arbitrary deductions for painting and cleaning are illegal. Learn how to use the Model Tenancy Act and formal legal notices to recover your deposit instantly and reclaim your savings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-[#D29E0D] hover:bg-[#b88a22] text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
                  <FaShieldAlt /> Recover My Deposit
                </button>
              </Link>
              <a href="tel:+918700343611">
                <button className="bg-white border-2 border-[#D29E0D] text-[#D29E0D] hover:bg-[#D29E0D] hover:text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-md flex items-center justify-center gap-2">
                  <FaPhone /> Legal Helpline
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-6 mt-8">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      {/* Main Layout */}
      <div className="max-w-[1600px] mx-auto px-6 pb-24 flex flex-col lg:flex-row gap-8">
        
        {/* Left Column - TOC */}
        <aside className="lg:w-[20%] hidden lg:block">
          <div className="sticky top-32">
            <h4 className="text-xl font-bold mb-6 text-[#30261C] border-b pb-2">Guide Contents</h4>
            <TableOfContents sections={sections} orientation="vertical" />
          </div>
        </aside>

        {/* Middle Column - Content */}
        <main className="lg:w-[55%]">
          <article className="prose prose-lg max-w-none text-[#30261C]/90 leading-relaxed">
            
            <section id="introduction" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">Introduction: The Security Deposit Dilemma</h2>
              <p>
                The dream of moving into a new home is often accompanied by the significant financial commitment of a security deposit. In India, this amount can range from two months to ten months of rent, depending on the city and the landlord's preferences. For a tenant, this money represents their hard-earned savings, intended to be returned at the end of the tenancy. However, the reality of moving out often turns this expectation into a stressful legal battle.
              </p>
              <p>
                "My landlord is not returning my security deposit" is one of the most frequent complaints we hear at AMA Legal Solutions. Landlords often use the security deposit as a personal piggy bank, making arbitrary deductions for things like "repainting," "deep cleaning," or "normal wear and tear" that they should legally bear themselves. Sometimes, they simply refuse to communicate, hoping the tenant will eventually give up and walk away from their money.
              </p>
              <p>
                This guide is designed to empower you. We believe that no tenant should be bullied out of their rightful property. Whether you are a student in a PG, a young professional in a flat-share, or a family in a standalone house, your security deposit is your legal property. This comprehensive guide will walk you through the legal framework, the steps to send a formal legal notice, and the options available if you need to take the matter to court.
              </p>
              <p>
                The financial strain of a withheld deposit can be immense. Many tenants rely on that refund to pay the deposit for their next residence. When a landlord holds onto that money without justification, it is not just a breach of contract; it is a direct attack on your financial stability. At AMA Legal Solutions, we have seen how these disputes can escalate, and we are here to ensure that you have the tools to fight back effectively.
              </p>
            </section>

            <section id="legal-framework" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">The Legal Framework: Your Rights Under Indian Law</h2>
              <p>
                Understanding your rights is the first step in reclaiming your money. The legal landscape for tenancy in India is governed by several laws, and it is important to know which ones apply to your situation.
              </p>
              <h3 className="text-2xl font-semibold mb-4 text-[#D29E0D]">1. The Model Tenancy Act, 2021 (MTA)</h3>
              <p>
                The Model Tenancy Act was introduced by the Central Government to standardize the rental market across India. While its implementation depends on individual states adopting it, its provisions serve as a benchmark for fair practice even in states that have not yet fully implemented it. Under the MTA, the security deposit for residential properties is capped at a maximum of two months' rent. For non-residential properties, it is capped at six months. This is a significant protection for tenants, as it prevents landlords from demanding exorbitant amounts of money.
              </p>
              <p>
                Crucially, the MTA mandates that the security deposit must be refunded by the landlord on the day the tenant vacates the premises and hands over possession. Any deductions made must be transparent and backed by evidence. If the landlord fails to refund the deposit, they can be held liable under the Act. This creates a much-needed level of accountability in the landlord-tenant relationship.
              </p>
              <h3 className="text-2xl font-semibold mb-4 text-[#D29E0D]">2. The Indian Contract Act, 1872</h3>
              <p>
                Every rental agreement is, at its core, a contract. The terms you agreed to when you signed your lease are legally binding. Section 73 of the Indian Contract Act deals with compensation for loss or damage caused by a breach of contract. If your agreement states that the deposit is refundable and the landlord refuses to return it, they are in breach of contract. The law allows you to claim not just the principal amount but also damages for the loss caused by the delay.
              </p>
              <h3 className="text-2xl font-semibold mb-4 text-[#D29E0D]">3. State-Specific Rent Control Acts</h3>
              <p>
                Many states in India have their own Rent Control Acts (e.g., the Maharashtra Rent Control Act, the Delhi Rent Control Act). These laws often provide additional protections for tenants, including mechanisms for dispute resolution. If you are in a state with a strong Rent Control Act, you may have access to a Rent Controller or a specific tribunal that handles these cases more quickly than a regular civil court. These local laws are often more favorable to tenants and can provide a faster path to justice.
              </p>
            </section>

            <section id="what-can-be-deducted" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">What Can Your Landlord Legally Deduct?</h2>
              <p>
                This is the area where most disputes occur. Landlords often believe they have a blank check to deduct whatever they want. This is not true. Legitimate deductions are limited to specific, documented losses.
              </p>
              <div className="bg-[#30261C] text-white p-8 rounded-2xl mb-8">
                <h4 className="text-xl font-bold text-[#D29E0D] mb-6 flex items-center gap-2">
                  <FaBalanceScale /> Permissible Legal Deductions:
                </h4>
                <ul className="space-y-6">
                  <li>
                    <h5 className="font-bold text-[#D29E0D]">Unpaid Rent and Utility Bills</h5>
                    <p className="text-sm">If you have defaulted on your rent or have outstanding electricity, water, or gas bills, the landlord has a legitimate right to deduct these amounts. This is the primary purpose of the deposit.</p>
                  </li>
                  <li>
                    <h5 className="font-bold text-[#D29E0D]">Actual Physical Damage</h5>
                    <p className="text-sm">If you have broken fixtures, damaged doors, or stained carpets beyond repair, the landlord can deduct the cost of repairs. They must provide you with an itemized bill for these repairs.</p>
                  </li>
                  <li>
                    <h5 className="font-bold text-[#D29E0D]">Breach of Notice Period</h5>
                    <p className="text-sm">If you vacate the property without giving the agreed notice period (usually 1-3 months), the landlord can deduct the rent for that period from your deposit.</p>
                  </li>
                </ul>
              </div>
              <p>
                It is vital to remember that any deduction must be justified with evidence. A landlord cannot simply state a flat amount like "ten thousand rupees for damages" without providing a breakdown of what was damaged and what it cost to fix. If they cannot produce bills, they cannot legally make the deduction.
              </p>
            </section>

            <section id="wear-and-tear" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">The Normal Wear and Tear Myth</h2>
              <p>
                The most common excuse for withholding a security deposit is "repainting and cleaning." Landlords often argue that the property needs to be returned in the exact same condition it was in on day one. Legally, this is incorrect. Normal wear and tear is the landlord's responsibility.
              </p>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-8">
                <h4 className="text-xl font-bold text-[#30261C] mb-4">Examples of Normal Wear and Tear:</h4>
                <ul className="list-disc ml-6 space-y-2 text-gray-600">
                  <li>Fading of paint due to sunlight or age.</li>
                  <li>Minor scuff marks on floors from regular walking.</li>
                  <li>Fading of curtains or carpets provided by the landlord.</li>
                  <li>Natural wear on door handles, faucets, and light switches.</li>
                  <li>Small nail holes used for hanging pictures (unless specifically forbidden).</li>
                </ul>
              </div>
              <p>
                If your landlord tries to charge you for repainting the entire house because of a few minor scuffs, you have every right to contest this. Repainting is a maintenance cost that is factored into the rent you pay. Unless you have caused significant damage like graffiti or large holes in the walls, the cost of a fresh coat of paint falls squarely on the landlord.
              </p>
            </section>

            <section id="recovery-process" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">The Step-by-Step Recovery Process</h2>
              <p>
                If your landlord is refusing to return your deposit, follow this protocol to maximize your chances of recovery. Systematic documentation is your best friend in these situations.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 flex gap-4">
                  <FaUserSecret className="text-[#D29E0D] text-2xl flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-2">Informal Request</h4>
                    <p className="text-sm text-gray-600">Send a firm email or WhatsApp message stating the move-out date and the refund amount. Keep a clear record of this communication.</p>
                  </div>
                </div>
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 flex gap-4">
                  <FaFileAlt className="text-[#D29E0D] text-2xl flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-2">Final Warning</h4>
                    <p className="text-sm text-gray-600">Send a formal Letter of Demand. Mention that you will take legal action if the money is not returned within a specific timeframe.</p>
                  </div>
                </div>
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 flex gap-4">
                  <FaGavel className="text-[#D29E0D] text-2xl flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-2">Legal Notice</h4>
                    <p className="text-sm text-gray-600">Have an advocate send a formal legal notice. This carries significant weight and usually results in an immediate refund.</p>
                  </div>
                </div>
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 flex gap-4">
                  <FaBalanceScale className="text-[#D29E0D] text-2xl flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-2">Court Filing</h4>
                    <p className="text-sm text-gray-600">If the notice fails, file a Summary Suit under Order 37 of the CPC for a faster legal resolution and recovery of interest.</p>
                  </div>
                </div>
              </div>
              <p>
                At AMA Legal Solutions, we have found that over eighty percent of landlords return the deposit once they receive a formal legal notice. They realize that the cost of defending a lawsuit will far exceed the amount they are trying to withhold. Furthermore, a legal notice acts as a psychological reset for the landlord. The moment they see a formal notice from a reputed law firm, that power dynamic shifts instantly.
              </p>
            </section>

            <section id="case-studies" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-10">Case Studies: Victories Against Stubborn Landlords</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="flex text-[#D29E0D] mb-4 text-xl">★★★★★</div>
                  <p className="text-sm italic text-gray-600 mb-6">
                    "Rohan, an engineer in Bangalore, was moving out of HSR Layout. The landlord demanded 30k for 'full house repainting' despite no damage. AMA Legal Solutions sent a notice citing the MTA. Within 48 hours, the landlord returned 98k, deducting only a small cleaning fee."
                  </p>
                  <p className="font-bold text-sm">Rohan M., Bangalore</p>
                </div>
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="flex text-[#D29E0D] mb-4 text-xl">★★★★★</div>
                  <p className="text-sm italic text-gray-600 mb-6">
                    "Priya, a student in Delhi, was ignored by a PG owner who disappeared after she moved out. We helped her file a cyber complaint and sent a legal notice to the PG's registered address. The owner settled the full amount plus legal costs within a week."
                  </p>
                  <p className="font-bold text-sm">Priya S., Delhi</p>
                </div>
              </div>
            </section>

            <section id="court-options" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">Court & Legal Action: Taking it Further</h2>
              <p>
                If the legal notice does not work, you have several legal avenues to explore. Each has its own advantages depending on your specific situation and location.
              </p>
              <h3 className="text-2xl font-semibold mb-4 text-[#D29E0D]">1. Civil Suit for Recovery (Order 37 of the CPC)</h3>
              <p>
                The most common way to recover money is through a civil suit. Specifically, you can file a "Summary Suit" under Order 37 of the Code of Civil Procedure. Summary suits are designed for cases where the debt is clear and based on a written contract. They are much faster than regular civil suits because the landlord does not have an automatic right to defend the case; they must first ask the court for permission to defend.
              </p>
              <h3 className="text-2xl font-semibold mb-4 text-[#D29E0D]">2. Consumer Forum</h3>
              <p>
                In some cases, especially if the property was part of a managed PG or a commercial service, you may be able to approach the Consumer Forum for "deficiency in service." Consumer forums are often more accessible and faster than civil courts for individual tenants.
              </p>
              <h3 className="text-2xl font-semibold mb-4 text-[#D29E0D]">3. Rent Control Authority</h3>
              <p>
                If your state has an active Rent Control Act or has implemented the Model Tenancy Act, you can approach the Rent Authority or the Rent Tribunal. These bodies are specifically designed to handle landlord-tenant disputes with specialized knowledge.
              </p>
            </section>

            <section id="psychological-toll" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">The Mental and Financial Toll of Deposit Withholding</h2>
              <p>
                It is important to acknowledge that a withheld security deposit is not just a financial loss; it is an emotional burden. For many Indians, the security deposit represents several months of hard-earned savings. When this money is withheld, it can disrupt their ability to pay the deposit for their next home, leading to a cycle of debt or forcing them to move into less desirable accommodations.
              </p>
              <p>
                The stress of constant follow-ups, the anxiety of being ignored, and the feeling of being cheated can take a toll on one's mental health. We have seen clients who were unable to focus on their jobs because of the ongoing battle with their former landlords. This is why we emphasize taking legal action early. The law is not just about the money; it is about restoring your sense of justice and reclaiming your peace of mind.
              </p>
              <p>
                Furthermore, the "ghosting" tactic used by landlords, where they stop answering calls and messages, is a form of psychological manipulation. They hope that by remaining silent, you will eventually lose hope and stop pursuing the matter. Engaging a legal professional breaks this cycle and forces the landlord to engage with the reality of their legal obligations.
              </p>
            </section>

            <section id="digital-evidence" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">Digital Evidence and Section 65B of the Evidence Act</h2>
              <p>
                In today's digital age, your phone is your most powerful legal tool. However, for digital evidence like WhatsApp chats and emails to be admissible in an Indian court, they must often be accompanied by a certificate under Section 65B of the Indian Evidence Act.
              </p>
              <p>
                This certificate is a formal statement by the person who owns the device, affirming that the computer or phone was operating properly and that the data has not been tampered with. At AMA Legal Solutions, we help our clients prepare these certificates correctly. If you are communicating with your landlord about your deposit, ensure you:
              </p>
              <ul className="list-disc ml-6 space-y-2 mb-8">
                <li>Do not delete any chat history, even if it is frustrating.</li>
                <li>Take high-quality screenshots of all relevant messages and photos.</li>
                <li>Save copies of all sent emails and received attachments.</li>
                <li>Record phone calls where deductions are discussed (if legal in your jurisdiction).</li>
                <li>Ensure all photos of the property are timestamped.</li>
              </ul>
              <p>
                This evidence forms the backbone of your case. Without it, the dispute becomes your word against theirs. With it, the landlord's arbitrary claims become nearly impossible to defend in a court of law.
              </p>
            </section>

            <section id="faqs" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-10">Frequently Asked Questions</h2>
              <div className="space-y-8">
                {faqSchema.mainEntity.map((faq, index) => (
                  <div key={index}>
                    <h4 className="font-bold text-xl mb-2">{faq.name}</h4>
                    <p>{faq.acceptedAnswer.text}</p>
                  </div>
                ))}
                <div>
                  <h4 className="font-bold text-xl mb-2">Can I file a criminal case for 'cheating'?</h4>
                  <p>Usually, this is a civil matter of breach of contract. However, if the landlord never intended to return the money and used fraudulent means to take it, a case under Section 420 of the IPC might be possible, though it is harder to prove than a civil claim.</p>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">How much does it cost to send a legal notice?</h4>
                  <p>The cost varies depending on the advocate's expertise. At AMA Legal Solutions, we offer transparent and affordable pricing to ensure every tenant can access professional legal help without a massive financial burden.</p>
                </div>
              </div>
            </section>

            <div className="mt-16 p-10 bg-[#D29E0D]/10 rounded-3xl border-2 border-dashed border-[#D29E0D] text-center">
              <h3 className="text-2xl font-bold mb-4">Reclaim Your Security Deposit Today</h3>
              <p className="text-lg mb-8 max-w-2xl mx-auto">
                Don't let a stubborn landlord keep your hard-earned savings. Our expert property lawyers are ready to defend your rights and recover your money.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <button className="bg-[#D29E0D] text-white px-8 py-4 rounded-full font-bold hover:bg-[#b88a22] transition-all shadow-lg">
                    Start Recovery Now
                  </button>
                </Link>
                <a href="https://wa.me/918700343611" target="_blank" className="flex items-center gap-2">
                  <button className="bg-[#25D366] text-white px-8 py-4 rounded-full font-bold hover:bg-[#128C7E] transition-all shadow-lg flex items-center gap-2">
                    <FaWhatsapp size={20} /> WhatsApp Us
                  </button>
                </a>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-[#30261C] mb-6 mt-12">Ethical Standards in Tenancy: A Global Perspective</h2>
            <p>
              While we have focused heavily on the legal framework in India, it is useful to understand that the fight for tenant rights is a global movement. In many developed economies, the laws governing security deposits are even stricter. For instance, in the United Kingdom and parts of the United States, landlords are legally required to place the security deposit in a government-authorized protection scheme. If they fail to do so, they can be penalized up to three times the deposit amount.
            </p>
            <p>
              The global standard is shifting towards "transparency" and "mediation." Ethical landlords realize that treating a tenant with respect is a better business strategy in the long run. Arbitrary deductions are seen as a sign of a failing management system. In India, the Model Tenancy Act is a step toward this global standard, aiming to professionalize the rental market and protect the vulnerable.
            </p>
            <p>
              By standing up for your rights, you are contributing to a more mature and ethical rental market in India. When more tenants challenge illegal deductions, it forces landlords to rethink their practices. This collective action is what eventually leads to systemic change and better protection for future generations of renters.
            </p>

            <h2 className="text-3xl font-bold text-[#30261C] mb-6 mt-12">The Power of the Digital Consumer</h2>
            <p>
              Never underestimate the power you have as a digital consumer today. In the past, a landlord could mistreat a tenant in isolation. Today, every interaction can be documented, and illegal acts can be highlighted on social media or consumer review platforms. The fear of public exposure is a major deterrent for many property owners and PG managers.
            </p>
            <p>
              However, digital leverage should always be backed by legal action. While social media can provide immediate pressure, the law provides a long-term, binding resolution. This is why we always recommend a dual approach: capture the evidence for immediate leverage and file the official legal complaints for professional closure. This combination is what forces even the most stubborn landlords to the negotiation table.
            </p>
            <p>
              At AMA Legal Solutions, we integrate these modern realities into our legal strategy. We don't just look at the old statutes; we look at how the digital trail can be used to build an airtight case for our clients. Your digital record is your most valuable asset in the modern courtroom.
            </p>

            <h2 className="text-3xl font-bold text-[#30261C] mb-6 mt-12">Conclusion: Your Money, Your Dignity</h2>
            <p>
              Facing a security deposit dispute is hard enough without the added burden of moving and starting a new life. Remember that you are not alone, and you are not powerless. The laws of India, the Model Tenancy Act, and the courts are designed to protect you from greed and arbitrary action.
            </p>
            <p>
              Do not let silence or threats dictate your actions. By documenting the condition of the property, understanding your rights, and taking decisive legal steps through a formal notice, you can stop the stalling today. Your security deposit is your legal property, held in trust by the landlord. It belongs in your pocket, not theirs.
            </p>
            <p>
              The era of landlords acting as "local kings" is coming to an end. With the tools provided in this guide, you are now equipped to handle these situations with professional confidence. You know how to record, how to report, and how to escalate. Your journey to a stress-free move and the full recovery of your savings starts now. Take that first step today and let the law work for you.
            </p>

          </article>
        </main>

        {/* Right Column */}
        <aside className="lg:w-[25%]">
          <div className="sticky top-32 space-y-8">
            <div className="bg-[#30261C] text-[#EBE9E4] p-8 rounded-2xl shadow-xl">
              <h4 className="text-xl font-bold mb-4 text-[#D29E0D]" style={{ fontFamily: "var(--font-polysans)" }}>Recover Your Deposit</h4>
              <p className="text-sm opacity-80 mb-6">
                Our property lawyers specialize in tenant protection. We stop arbitrary deductions and ensure your full deposit is returned.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-[#D29E0D] p-2 rounded-full text-white"><FaCheckCircle size={12}/></div>
                  <span className="text-xs">Formal Legal Notice in 24 Hours</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-[#D29E0D] p-2 rounded-full text-white"><FaCheckCircle size={12}/></div>
                  <span className="text-xs">Model Tenancy Act Representation</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-[#D29E0D] p-2 rounded-full text-white"><FaCheckCircle size={12}/></div>
                  <span className="text-xs">Civil Recovery Suit Filing</span>
                </div>
              </div>
              <Link href="/contact">
                <button className="w-full bg-[#D29E0D] hover:bg-[#b88a22] text-white font-bold py-3 px-4 rounded-xl mt-8 transition-all">
                  Get My Deposit Back
                </button>
              </Link>
            </div>

            <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm">
              <h4 className="text-xl font-bold mb-6 text-[#30261C]" style={{ fontFamily: "var(--font-polysans)" }}>Related Resources</h4>
              <div className="space-y-4">
                {relatedPages.map((page, index) => (
                  <Link key={index} href={page.href} className="block group">
                    <p className="text-sm text-gray-600 group-hover:text-[#D29E0D] transition-colors mb-1">{page.title}</p>
                    <div className="h-0.5 w-full bg-gray-50 group-hover:bg-[#D29E0D]/20 transition-all"></div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="p-6 border border-[#D29E0D]/20 rounded-2xl bg-[#D29E0D]/5 text-center">
              <p className="text-xs text-gray-500 mb-2 uppercase tracking-widest font-bold">Legal Helpline</p>
              <a href="tel:+918700343611" className="text-xl font-bold text-[#30261C] hover:text-[#D29E0D] transition-colors">
                +91 8700343611
              </a>
              <p className="text-[10px] text-gray-400 mt-2 italic">100% Confidential</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
