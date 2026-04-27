import React from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";
import { FaPhone, FaWhatsapp, FaShieldAlt, FaGavel, FaCheckCircle, FaExclamationTriangle, FaUserSecret, FaLock, FaUserShield, FaBalanceScale, FaHome, FaFileAlt, FaBalanceScaleRight } from "react-icons/fa";

export const metadata = {
  title: "Property Eviction Notice India: Legal Procedure & Grounds for Eviction",
  description:
    "Planning to evict a tenant in India? Learn the legal procedure for property eviction notice, valid grounds under Rent Control Acts, and how to reclaim possession legally.",
  keywords: "property eviction notice, legal notice for eviction india, how to evict a tenant in india, grounds for eviction of tenant, rent control act eviction procedure",
};

const sections = [
  { id: "introduction", title: "Introduction" },
  { id: "legal-framework", title: "Legal Framework" },
  { id: "grounds-for-eviction", title: "Valid Grounds for Eviction" },
  { id: "eviction-notice", title: "The Eviction Notice" },
  { id: "step-by-step", title: "Step-by-Step Procedure" },
  { id: "tenant-rights", title: "Rights of the Tenant" },
  { id: "common-pitfalls", title: "Common Pitfalls" },
  { id: "ama-helps", title: "How AMA Empowers You" },
  { id: "case-studies", title: "Case Studies" },
  { id: "faqs", title: "Frequently Asked Questions" },
  { id: "conclusion", title: "Conclusion" },
];

const relatedPages = [
  { title: "Legal Notice for Breach of Contract", href: "/breach-of-contract-notice" },
  { title: "Cheque Bounce Notice Guide", href: "/cheque-bounce-notice" },
  { title: "Consumer Complaint Legal Notice", href: "/consumer-complaint-notice" },
  { title: "How to Send a Legal Notice", href: "/how-can-i-send-legal-notice" },
  { title: "Procedure of Sending Legal Notice", href: "/procedure-of-sending-legal-notice" },
];

export default function PropertyEvictionGuide() {
  const breadcrumbItems = [
    { label: "Legal Notices", href: "/send-legal-notice" },
    { label: "Property Eviction Notice", href: "/property-eviction-notice" },
  ];

  // Schema Markup
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Property Eviction Notice India: A Complete Legal Guide to Tenant Eviction",
    "description": "Comprehensive legal guide for landlords and tenants on property eviction notices in India, covering Rent Control Acts, Transfer of Property Act, and valid grounds for eviction.",
    "author": { "@type": "Organization", "name": "AMA Legal Solutions" },
    "publisher": {
      "@type": "Organization",
      "name": "AMA Legal Solutions",
      "logo": { "@type": "ImageObject", "url": "https://www.amalegalsolutions.com/ama-legal-solutions-logo.png" }
    },
    "datePublished": "2026-04-27",
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.amalegalsolutions.com/property-eviction-notice" }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long does the eviction process take in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The timeline can vary significantly depending on the complexity of the case and the backlog of the local court. A straightforward eviction can take anywhere from six months to two years. Using the new Model Tenancy Act frameworks can potentially speed this up."
        }
      },
      {
        "@type": "Question",
        "name": "Can I evict a tenant without a written agreement?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, you can, but it is much harder. In the absence of a written agreement, the tenancy is considered month-to-month under the Transfer of Property Act. You still need to send a formal notice. Having a written agreement is always recommended for easier legal resolution."
        }
      },
      {
        "@type": "Question",
        "name": "What if the tenant refuses to receive the eviction notice?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If a tenant refuses to accept a registered letter, the postman will mark it as Refused. Under Indian law, a refused notice is considered served. You can use the returned envelope as proof in court that you made a legal attempt to serve the notice."
        }
      },
      {
        "@type": "Question",
        "name": "Can a landlord increase the rent arbitrarily to force an eviction?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. State Rent Control Acts usually have provisions for standard rent. Any arbitrary or excessive increase can be challenged by the tenant before the Rent Controller."
        }
      },
      {
        "@type": "Question",
        "name": "Is it possible to evict a tenant during a crisis or lockdown?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "During extreme crises like the COVID-19 lockdowns, courts often issued temporary moratoriums on evictions. In normal circumstances, the standard eviction procedures apply, but courts take humanitarian concerns into account."
        }
      },
      {
        "@type": "Question",
        "name": "What is a Leave and License agreement?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Common in states like Maharashtra, a Leave and License agreement gives the licensee a right to use the property without creating a tenancy. Evicting someone under this agreement is generally faster because the licensee does not have the same protected status as a tenant."
        }
      },
      {
        "@type": "Question",
        "name": "Can I evict a tenant for not vacating after the agreement expires?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Once the agreement expires, the tenant has no legal right to stay unless the agreement is renewed. You should send a notice as soon as the term ends to prevent any claim of implied renewal."
        }
      },
      {
        "@type": "Question",
        "name": "What are mesne profits exactly?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Mesne profits are the damages a landlord can claim from a tenant who stays in the property illegally after the tenancy has ended. It is calculated based on the current market rent of the property."
        }
      },
      {
        "@type": "Question",
        "name": "Can the police help me evict a tenant directly?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. The police cannot evict a tenant without a court order. They will usually treat it as a civil matter. However, they can help once a court has issued an execution decree or if there is a threat of violence."
        }
      },
      {
        "@type": "Question",
        "name": "Does AMA Legal Solutions handle commercial evictions too?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We handle both residential and commercial eviction cases. Commercial evictions often involve more complex contracts and higher stakes, and our team is well-equipped to handle these nuances."
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.amalegalsolutions.com/" },
      { "@type": "ListItem", "position": 2, "name": "Legal Notices", "item": "https://www.amalegalsolutions.com/send-legal-notice" },
      { "@type": "ListItem", "position": 3, "name": "Property Eviction Notice", "item": "https://www.amalegalsolutions.com/property-eviction-notice" }
    ]
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Property Legal Services",
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "2150" }
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
              Need to Send a <span className="text-[#D29E0D]">Property Eviction Notice</span>?
            </h1>
            <p className="text-lg md:text-xl text-[#30261C]/70 max-w-4xl mx-auto font-light leading-relaxed mb-10">
              Reclaim your property legally and peacefully. Learn the exact legal procedure, valid grounds for eviction, and how to draft a notice that holds up in court.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-[#D29E0D] hover:bg-[#b88a22] text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
                  <FaShieldAlt /> Start Eviction Process
                </button>
              </Link>
              <a href="tel:+918700343611">
                <button className="bg-white border-2 border-[#D29E0D] text-[#D29E0D] hover:bg-[#D29E0D] hover:text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-md flex items-center justify-center gap-2">
                  <FaPhone /> Property Helpline
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
            
            <section id="introduction" className="mb-16">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">Introduction: The Gravity of Property Eviction</h2>
              <p>
                Property is more than just a financial asset in India; it is often the culmination of a lifetime of savings and a symbol of security. However, the relationship between a landlord and a tenant can sometimes sour, leading to a situation where the landlord needs to reclaim their property. This process, known as eviction, is one of the most legally sensitive areas of Indian property law. It is not something that can be done overnight or through the use of force. Instead, it requires a meticulous adherence to the law, beginning with a formal property eviction notice.
              </p>
              <p>
                The term "property eviction notice" might sound simple, but it carries significant legal weight. It is the formal declaration by a landlord to a tenant that the rental agreement is being terminated and that the tenant must vacate the premises within a specified timeframe. Failure to issue this notice correctly can derail an entire eviction case, leading to years of unnecessary litigation and financial loss. Conversely, for a tenant, receiving such a notice can be a source of immense stress and uncertainty.
              </p>
              <p>
                At AMA Legal Solutions, we believe that clarity is the best antidote to legal conflict. Whether you are a landlord struggling with a non-paying tenant or a tenant facing an unjust eviction, understanding the rules of the game is essential. This guide is designed to be the ultimate resource on property eviction notices in India. We will explore the legal frameworks that govern tenancies, the valid grounds for eviction, the step-by-step procedure to follow, and the rights that protect both parties. Our goal is to ensure that you have the knowledge to navigate this complex process with dignity and legal precision.
              </p>
            </section>

            <section id="legal-framework" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">The Legal Framework: Rent Control vs. Transfer of Property</h2>
              <p>
                To understand how an eviction works, one must first understand which law applies to the property in question. In India, tenancy laws are divided into two main categories: state-specific Rent Control Acts and the Transfer of Property Act, 1882.
              </p>
              <div className="bg-[#EBE9E4] p-8 rounded-2xl mb-8">
                <h4 className="text-xl font-bold mb-4 flex items-center gap-2 text-[#D29E0D]">
                  <FaBalanceScale /> Governing Laws in India:
                </h4>
                <ul className="space-y-4">
                  <li>
                    <span className="font-bold">Rent Control Acts:</span> Most states have their own acts (e.g., Delhi Rent Control Act, Maharashtra Rent Control Act) designed to protect tenants from arbitrary eviction and excessive rent.
                  </li>
                  <li>
                    <span className="font-bold">Transfer of Property Act, 1882:</span> Applies when state acts are silent or inapplicable. Section 106 governs the termination of leases with notice.
                  </li>
                  <li>
                    <span className="font-bold">Model Tenancy Act, 2021:</span> A modern framework aiming to unify tenancy laws across India, focusing on faster dispute resolution through specialized courts.
                  </li>
                </ul>
              </div>
              <p>
                Under Rent Control Acts, tenants are often classified as protected tenants, and evicting them is significantly more difficult. A landlord can only evict a tenant on specific grounds mentioned in the statute. In contrast, the Transfer of Property Act provides a broader framework for termination of leases via a notice of quit.
              </p>
            </section>

            <section id="grounds-for-eviction" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">Valid Grounds for Eviction: Why You Can Legally Evict</h2>
              <p>
                A landlord cannot simply decide to evict a tenant because they found someone willing to pay more. The law requires a valid ground. Here are the most common legal reasons for eviction in India:
              </p>
              <div className="bg-red-50 p-8 rounded-2xl border-l-8 border-red-500 mb-8">
                <h4 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-2">
                  <FaExclamationTriangle /> Recognized Grounds for Eviction:
                </h4>
                <ul className="space-y-4 text-red-900">
                  <li className="flex items-start gap-2">
                    <span className="font-bold">•</span>
                    <span><strong>Non-payment of Rent:</strong> Persistent failure to pay rent for a specified period (usually 2 to 3 months).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">•</span>
                    <span><strong>Breach of Agreement:</strong> Unauthorized subletting or using residential space for commercial purposes.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">•</span>
                    <span><strong>Bona Fide Requirement:</strong> Genuine need for the property for the landlord's own residence or family.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">•</span>
                    <span><span><strong>Illegal Activities:</strong> Using premises for criminal or immoral acts or causing a nuisance.</span></span>
                  </li>
                </ul>
              </div>
              <p>
                Another common ground is substantial damage to the property. If a tenant makes structural changes without permission or causes damage that diminishes the property's value, they can be legally evicted. Normal wear and tear do not count as substantial damage.
              </p>
            </section>

            <section id="eviction-notice" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">The Property Eviction Notice: Your First Legal Weapon</h2>
              <p>
                The eviction process must always begin with a formal notice. This is not just a polite request; it is a legal requirement. A notice serves as a formal declaration of intent to terminate the lease and provides the tenant with a grace period.
              </p>
              <h3 className="text-2xl font-semibold mb-4 text-[#D29E0D]">Essential Components of an Eviction Notice:</h3>
              <ul className="list-disc ml-6 space-y-4 mb-6">
                <li><strong>Clear Identification:</strong> Full names and addresses of both landlord and tenant, plus a precise property description.</li>
                <li><strong>Specific Grounds:</strong> Clearly stating the reason for eviction (e.g., non-payment of rent for specific months).</li>
                <li><strong>Notice Period:</strong> Providing the legally mandated timeframe (usually 15 to 30 days) to vacate or rectify the breach.</li>
                <li><strong>Legal Consequences:</strong> A statement that failure to comply will result in formal legal proceedings.</li>
              </ul>
              <p>
                How you send the notice is as important as what is in it. It should be sent via Registered Post with Acknowledgment Due (RPAD) or Speed Post. This provides the landlord with a government-stamped receipt and proof that the notice was delivered to the tenant.
              </p>
            </section>

            <section id="step-by-step" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">Step-by-Step Procedure to Evict a Tenant</h2>
              <p>
                Evicting a tenant is a structured legal journey. Following these steps meticulously is essential for a successful outcome:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 flex gap-4">
                  <FaFileAlt className="text-[#D29E0D] text-2xl flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-2">Draft & Send Notice</h4>
                    <p className="text-sm text-gray-600">Prepare a formal legal notice stating the grounds and notice period. Send it via Registered Post.</p>
                  </div>
                </div>
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 flex gap-4">
                  <FaShieldAlt className="text-[#D29E0D] text-2xl flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-2">Wait for Expiry</h4>
                    <p className="text-sm text-gray-600">Wait for the notice period to end. The tenant might vacate or settle the issue during this time.</p>
                  </div>
                </div>
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 flex gap-4">
                  <FaGavel className="text-[#D29E0D] text-2xl flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-2">File Eviction Suit</h4>
                    <p className="text-sm text-gray-600">If the tenant stays, file an eviction suit in the appropriate civil court or with the Rent Controller.</p>
                  </div>
                </div>
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 flex gap-4">
                  <FaBalanceScaleRight className="text-[#D29E0D] text-2xl flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-2">Obtain & Execute Decree</h4>
                    <p className="text-sm text-gray-600">After hearings, the court passes a decree. If the tenant still refuses to leave, file an Execution Petition for physical possession.</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="tenant-rights" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">Rights of the Tenant: Protection Against Illegal Eviction</h2>
              <p>
                While landlords have rights to their property, tenants have the right to due process. In India, the law is quite protective of tenants to prevent homelessness and exploitation.
              </p>
              <p>
                A landlord cannot forcibly throw a tenant out, throw their belongings on the street, or lock the door in their absence. Such actions are illegal and can lead to criminal charges. Even if the tenant has not paid rent for a year, the landlord must still follow the court process.
              </p>
              <p>
                Furthermore, a landlord is strictly prohibited from cutting off essential services like water, electricity, or sewerage to pressure a tenant to vacate. If a landlord does this, the tenant can approach the Rent Controller or the police to have these services restored immediately.
              </p>
            </section>

            <section id="common-pitfalls" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">Common Pitfalls and How to Avoid Them</h2>
              <p>
                Many eviction cases fail because of simple mistakes made at the beginning. Here is how to avoid the most common traps:
              </p>
              <ul className="list-disc ml-6 space-y-4 mb-6">
                <li><strong>Waiver of Notice:</strong> Accepting rent after the notice period has started might be seen as a waiver, effectively canceling the eviction notice.</li>
                <li><strong>Inaccurate Descriptions:</strong> Discrepancies in the property address or boundaries in the notice can lead to the case being dismissed.</li>
                <li><strong>Incorrect Notice Period:</strong> Failing to give the full 15 or 30 days required by law is a fatal error that courts do not overlook.</li>
                <li><strong>Self-Help Measures:</strong> Taking the law into your own hands via force or utility cuts is the quickest way to lose your legal standing.</li>
              </ul>
            </section>

            <section id="ama-helps" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">How AMA Legal Solutions Empowers You</h2>
              <p>
                Navigating the world of property law can be overwhelming. At AMA Legal Solutions, we specialize in resolving landlord-tenant disputes with efficiency and expertise. Our team of experienced property lawyers can help you:
              </p>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 my-8">
                <h4 className="font-bold text-[#30261C] mb-4 flex items-center gap-2">
                  <FaShieldAlt className="text-[#D29E0D]" /> Our Property Protection Services:
                </h4>
                <ul className="space-y-4 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-[#D29E0D] mt-1" />
                    <span><strong>Drafting Legal Notices:</strong> We create robust eviction notices tailored to state-specific laws.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-[#D29E0D] mt-1" />
                    <span><strong>Court Representation:</strong> Expert representation in Rent Control Courts and Civil Courts across India.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-[#D29E0D] mt-1" />
                    <span><strong>Mediation & Settlement:</strong> Facilitating peaceful resolutions that save time and litigation costs.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-[#D29E0D] mt-1" />
                    <span><strong>Execution Support:</strong> Legal assistance in executing court decrees and regaining physical possession.</span>
                  </li>
                </ul>
              </div>
            </section>

            <section id="case-studies" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-10">Case Studies: Real-World Property Victories</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="flex text-[#D29E0D] mb-4 text-xl">★★★★★</div>
                  <p className="text-sm italic text-gray-600 mb-6">
                    "My tenant stopped paying rent and refused to leave. AMA Legal Solutions sent a formal notice and handled the court case in Delhi. We got an eviction order in less than a year. Their professionalism was outstanding."
                  </p>
                  <p className="font-bold text-sm">Vikas R., Delhi</p>
                </div>
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="flex text-[#D29E0D] mb-4 text-xl">★★★★★</div>
                  <p className="text-sm italic text-gray-600 mb-6">
                    "I needed my house for my own residence, but the tenant contested it. AMA helped me prove my bona fide requirement. The court passed the decree, and I finally moved back into my home. Highly recommend their property lawyers."
                  </p>
                  <p className="font-bold text-sm">Sunita M., Mumbai</p>
                </div>
              </div>
            </section>

            <section id="faqs" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-10">Frequently Asked Questions</h2>
              <div className="space-y-8">
                <div>
                  <h4 className="font-bold text-xl mb-2">How long does the eviction process take?</h4>
                  <p>A straightforward eviction can take anywhere from six months to two years depending on court backlogs. Using the Model Tenancy Act frameworks can potentially speed this up.</p>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Can I evict without a written agreement?</h4>
                  <p>Yes, but it is harder. The tenancy is considered month-to-month under the Transfer of Property Act. You still need to serve a formal notice to quit.</p>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">What if the tenant refuses the notice?</h4>
                  <p>If a tenant refuses a registered letter, it is marked as Refused. Under Indian law, this is considered as notice served. The returned envelope is valid proof in court.</p>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Can I increase rent to force an eviction?</h4>
                  <p>No. Rent Control Acts have provisions for standard rent. Arbitrary increases can be challenged by the tenant before the Rent Controller.</p>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">What is a Leave and License agreement?</h4>
                  <p>Common in Maharashtra, it gives a right to use property without creating a tenancy. Eviction is generally faster as licensees have fewer protections than tenants.</p>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Can I evict a tenant during a crisis?</h4>
                  <p>While courts may issue temporary moratoriums during extreme crises, standard procedures apply in normal times, with courts balancing legal and humanitarian concerns.</p>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">What are mesne profits?</h4>
                  <p>Mesne profits are damages claimed for illegal stay after a lease ends. They are calculated based on the current market rent, which is usually higher than the agreed rent.</p>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Can the police help evict directly?</h4>
                  <p>No. Police cannot evict without a court order. They will refer it as a civil matter. They assist only during the execution of a court decree.</p>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Can I evict for non-payment after the term ends?</h4>
                  <p>Yes. Once the term ends, the tenant must vacate. You should send a notice immediately to prevent claims of implied renewal of the lease.</p>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Does AMA handle commercial evictions?</h4>
                  <p>Yes. We specialize in both residential and commercial property disputes, handling the complex contracts and higher stakes involved in commercial tenancies.</p>
                </div>
              </div>
            </section>

            <section id="conclusion" className="mb-16">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">Conclusion: Take the Professional Path to Resolution</h2>
              <p>
                Property disputes are inherently stressful, but they do not have to be chaotic. By understanding the importance of a property eviction notice and following the legal steps diligently, you can protect your interests and achieve a peaceful resolution. Whether you are a landlord reclaiming your home or a tenant defending your rights, the law provides a framework for fairness.
              </p>
              <p>
                Do not let frustration lead you to make mistakes that could haunt you for years. Take the professional path. Document every interaction, respect the legal timelines, and seek expert advice when things get complicated. Your property and your peace of mind are too valuable to leave to chance.
              </p>
              <p>
                At AMA Legal Solutions, we are committed to providing you with the best legal support in India. Our deep understanding of property laws and our client-focused approach make us the ideal partner for your legal journey. Let us handle the complexities of the law while you focus on building your future. Contact us today for a consultation and take the first step toward resolving your property dispute with confidence.
              </p>
            </section>

            <div className="mt-16 p-10 bg-[#D29E0D]/10 rounded-3xl border-2 border-dashed border-[#D29E0D] text-center">
              <h3 className="text-2xl font-bold mb-4">Reclaim Your Property Legally</h3>
              <p className="text-lg mb-8 max-w-2xl mx-auto">
                Don't let tenant disputes destroy your peace of mind. Our expert lawyers at AMA Legal Solutions are ready to handle your eviction process with legal precision.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <button className="bg-[#D29E0D] text-white px-8 py-4 rounded-full font-bold hover:bg-[#b88a22] transition-all shadow-lg">
                    Get Free Legal Consultation
                  </button>
                </Link>
                <a href="https://wa.me/918700343611" target="_blank" className="flex items-center gap-2">
                  <button className="bg-[#25D366] text-white px-8 py-4 rounded-full font-bold hover:bg-[#128C7E] transition-all shadow-lg flex items-center gap-2">
                    <FaWhatsapp size={20} /> WhatsApp Us
                  </button>
                </a>
              </div>
            </div>

          </article>
        </main>

        {/* Right Column */}
        <aside className="lg:w-[25%]">
          <div className="sticky top-32 space-y-8">
            <div className="bg-[#30261C] text-[#EBE9E4] p-8 rounded-2xl shadow-xl">
              <h4 className="text-xl font-bold mb-4 text-[#D29E0D]" style={{ fontFamily: "var(--font-polysans)" }}>Eviction Legal Support</h4>
              <p className="text-sm opacity-80 mb-6">
                Our property lawyers specialize in landlord rights and tenant eviction. We ensure a legally sound process to reclaim your property.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-[#D29E0D] p-2 rounded-full text-white"><FaCheckCircle size={12}/></div>
                  <span className="text-xs">Expert Notice Drafting</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-[#D29E0D] p-2 rounded-full text-white"><FaCheckCircle size={12}/></div>
                  <span className="text-xs">Rent Control Act Expertise</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-[#D29E0D] p-2 rounded-full text-white"><FaCheckCircle size={12}/></div>
                  <span className="text-xs">Fast-Track Court Representation</span>
                </div>
              </div>
              <Link href="/contact">
                <button className="w-full bg-[#D29E0D] hover:bg-[#b88a22] text-white font-bold py-3 px-4 rounded-xl mt-8 transition-all">
                  Get Legal Help Now
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
              <p className="text-xs text-gray-500 mb-2 uppercase tracking-widest font-bold">Property Helpline</p>
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
