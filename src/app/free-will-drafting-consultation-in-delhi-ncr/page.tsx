import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// JSON-LD Schemas
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
      "name": "Free Will Drafting Consultation",
      "item": "https://www.amalegalsolutions.com/free-will-drafting-consultation-in-delhi-ncr"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Free Will Drafting Consultation in Delhi NCR | Legal Experts",
  "description": "Secure your family's future with a legally binding will in Delhi NCR. Get a free consultation to draft, register, and protect your assets from disputes.",
  "image": "https://www.amalegalsolutions.com/newAssets/bhiya.png",
  "author": {
    "@type": "Person",
    "name": "Anuj Anand Malik",
    "jobTitle": "Advocate & Founder",
    "url": "https://www.amalegalsolutions.com/author/anuj-anand-malik",
    "sameAs": [
      "https://www.linkedin.com/in/iamanujmalik/",
      "https://www.instagram.com/amalegalsolutions/?hl=en"
    ]
  },
  "publisher": {
    "@type": "Organization",
    "name": "AMA Legal Solutions",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.amalegalsolutions.com/ama-legal-solutions-logo.png"
    }
  },
  "datePublished": "2026-07-14",
  "dateModified": "2026-07-14"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What happens if I die without making a will in Delhi NCR?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If you die without a will (intestate), your assets will be distributed according to the rigid succession laws applicable to your religion, not according to your personal wishes. This often leads to complex fractional ownership of properties, frozen bank accounts, and lengthy, expensive family disputes in civil courts."
      }
    },
{
      "@type": "Question",
      "name": "Is it mandatory to register a will in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, registering a will is not legally mandatory under the Indian Registration Act. However, it is highly recommended, especially in Delhi NCR. Registration provides strong legal evidence of the will's authenticity and the testator's sound mind, making it significantly harder for disgruntled heirs to challenge it in court."
      }
    },
{
      "@type": "Question",
      "name": "Can I change my registered will later?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, you can change, modify, or completely revoke a registered will as many times as you want during your lifetime. You can make minor changes using a supplementary document called a 'codicil', or you can draft and register an entirely new will, which automatically supersedes all previous versions."
      }
    },
{
      "@type": "Question",
      "name": "Who can be a witness to my will?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A witness must be an adult of sound mind who can verify that you signed the document willingly. Crucially, a witness or their spouse cannot be a beneficiary of the will. If a beneficiary signs as a witness, they will lose their inheritance. Always choose independent, neutral individuals."
      }
    },
{
      "@type": "Question",
      "name": "Do I need a lawyer to draft a will, or can I write it myself?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "While you can legally write a will yourself on plain paper, DIY wills frequently contain ambiguous language, lack proper legal phrasing, or fail to account for complex legal scenarios. Hiring an expert lawyer ensures the document is legally watertight, properly structured, and immune to future litigation."
      }
    },
{
      "@type": "Question",
      "name": "What is the role of an executor in a will?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An executor is the person you appoint to carry out the instructions in your will after your death. Their duties include clearing any outstanding debts, gathering all assets, managing the estate, and distributing the properties to the beneficiaries exactly as you have dictated in the document."
      }
    },
{
      "@type": "Question",
      "name": "How much does it cost to register a will in Delhi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The official government registration fee at the Sub-Registrar's office in Delhi is nominal, typically under Rs. 1,000. However, the professional legal fees for drafting the will depend on the complexity of your estate, the inclusion of trusts, and the lawyer's expertise, usually ranging from Rs. 15,000 to Rs. 50,000."
      }
    }
  ]
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Free Will Drafting Consultation",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "156"
  },
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Arun Kumar"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "The legal team at AMA Legal Solutions made the entire will drafting process incredibly smooth. They identified assets I hadn't even considered and drafted a foolproof document that protects my business and my family. Their expertise in Delhi jurisdiction is unmatched."
    },
{
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Priya Sharma"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "I was anxious about setting up a trust for my minor children. Advocate Anuj Anand Malik patiently explained the legal mechanisms and created a comprehensive will that gave me absolute peace of mind. Highly professional and empathetic service."
    },
{
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Rajiv Mehra"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "I had a complex family structure and needed specific exclusion clauses to avoid future litigation over my properties. The firm drafted a flawless registered will and handled the entire sub-registrar process without any delays. Exceptional legal counsel."
    }
  ]
};

const legalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "AMA Legal Solutions",
  "image": "https://www.amalegalsolutions.com/newAssets/bhiya.png",
  "telephone": "+918700343611",
  "url": "https://www.amalegalsolutions.com",
  "priceRange": "₹₹",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Block G, Sushant Lok 2, Sector 57",
    "addressLocality": "Gurugram",
    "addressRegion": "Haryana",
    "postalCode": "122003",
    "addressCountry": "IN"
  }
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Anuj Anand Malik",
  "jobTitle": "Advocate & Founder",
  "worksFor": {
    "@type": "Organization",
    "name": "AMA Legal Solutions"
  },
  "sameAs": [
    "https://www.linkedin.com/in/iamanujmalik/",
    "https://www.instagram.com/amalegalsolutions/?hl=en"
  ]
};

export const metadata = {
  title: "Free Will Drafting Consultation in Delhi NCR | Expert Lawyers",
  description: "Secure your family's future with a legally binding will in Delhi NCR. Get a free consultation to draft, register, and protect your assets from disputes.",
  keywords: [
    "will drafting lawyer delhi ncr",
    "free will consultation gurgaon",
    "registered will process india",
    "estate planning advocate noida",
    "indian succession act lawyers",
    "drafting of will in delhi"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/free-will-drafting-consultation-in-delhi-ncr',
  },
  openGraph: {
    title: "Free Will Drafting Consultation in Delhi NCR | Expert Lawyers",
    description: "Secure your family's future with a legally binding will in Delhi NCR. Get a free consultation to draft, register, and protect your assets from disputes.",
    url: 'https://www.amalegalsolutions.com/free-will-drafting-consultation-in-delhi-ncr',
    siteName: 'AMA Legal Solutions',
    images: [
      {
        url: 'https://www.amalegalsolutions.com/newAssets/bhiya.png',
        width: 800,
        height: 600,
        alt: 'Advocate Anuj Anand Malik Consultation',
      }
    ],
    locale: 'en_IN',
    type: 'article',
  }
};

export default function FreeWillDraftingPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "why-registered-will", title: "Why You Need a Registered Will" },
    { id: "what-to-expect", title: "What to Expect During a Free Consultation" },
    { id: "key-elements", title: "Key Elements of a Legally Valid Will" },
    { id: "why-choose-us", title: "Why Choose Our Law Firm" },
    { id: "success-stories", title: "Success Stories" },
    { id: "faqs", title: "FAQs" }
  ];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Free Will Drafting Consultation", href: "/free-will-drafting-consultation-in-delhi-ncr" }
  ];

  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      <Script id="legalservice-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema) }} />
      <Script id="person-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />

      <main className="bg-gray-50 min-h-screen font-sans text-gray-800">
        
        {/* Hero Section */}
        <header className="relative bg-[#1a202c] text-white">
          <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
          <div className="relative z-20 container mx-auto px-4 py-16 md:py-32 text-center">
            <h1 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight mt-10">
              Free Will Drafting Consultation in Delhi NCR
            </h1>
            <p className="text-sm md:text-xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-200">
              Secure your legacy, prevent family disputes, and ensure your assets are distributed according to your exact wishes with a legally binding, registered will.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg">
                Book Free Legal Consultation
              </button>
            </Link>
          </div>
        </header>

        {/* Content Container */}
        <article className="container mx-auto px-4 max-w-[1600px] py-8">
          <nav>
             <Breadcrumbs items={breadcrumbItems} />
          </nav>
          
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start mt-4">
            
            {/* Left Sidebar Table of Contents */}
            <aside className="hidden lg:block sticky top-24">
              <TableOfContents sections={tocSections} orientation="vertical" />
            </aside>

            {/* Middle Main Content */}
            <div className="min-w-0">
              <div className="lg:hidden mb-6 sticky top-20 z-10">
                <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-4 md:p-12 rounded-2xl shadow-sm space-y-8 text-lg leading-relaxed text-gray-700">
                
                
<section id="introduction" className="scroll-mt-32">
  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Introduction to Will Drafting</h2>
  <p className="mb-4">Under Section 63 of the Indian Succession Act, 1925, a will only becomes legally enforceable when executed by the testator and attested by two or more independent witnesses. In Delhi NCR, thousands of families end up in decades-long civil suits in the Delhi High Court over unregistered or improperly drafted wills, completely freezing the deceased's assets. The absence of a registered will leaves your family vulnerable to the complex and often unforgiving legal mechanisms governing intestacy. Creating a will is not just a document; it is a profound act of securing your family's future and ensuring that the wealth you have built over a lifetime is distributed exactly according to your intentions, without interference from the state or estranged relatives.</p>
  <p className="mb-4">In a rapidly growing urban landscape like Delhi NCR, property values have skyrocketed, making real estate and financial portfolios highly contested assets. Without a clear, legally sound will, the distribution of these assets falls under the strict, generalized rules of the Indian Succession Act or applicable personal laws, such as the Hindu Succession Act or Muslim Personal Law. This default distribution rarely aligns with a person's actual wishes. For instance, you might want to leave a larger share of your estate to a dependent child or a spouse, but intestacy laws mandate equal division among all legal heirs, regardless of their financial status or your personal relationship with them.</p>
  <p className="mb-4">Furthermore, the process of obtaining a succession certificate or letters of administration from the local courts in Delhi, Noida, or Gurugram is notoriously slow. Families often spend years navigating bureaucratic hurdles, paying hefty court fees, and engaging in bitter litigation just to access bank accounts, transfer property titles, or claim insurance benefits. A properly drafted and registered will bypasses these massive delays. It provides an immediate, clear roadmap for your executors, empowering them to manage and distribute your estate efficiently and transparently.</p>
  <p className="mb-4">Our law firm specializes in providing comprehensive will drafting services tailored to the unique jurisdictional requirements of the National Capital Region. We understand that every family dynamic is different, and standard templates downloaded from the internet fail to capture the nuances of individual wealth structuring. Whether you need a simple will for basic assets or a complex testamentary trust to protect minor children, our <Link href="/drafting-of-will" className="text-[#D2A02A] hover:underline font-semibold">drafting of will</Link> services ensure that every clause is bulletproof against future legal challenges. We invite you to schedule a free consultation with our senior advocates to discuss your estate planning needs.</p>
</section>

<section id="why-registered-will" className="scroll-mt-32 border-t pt-8">
  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Why You Need a Registered Will in Delhi NCR</h2>
  <p className="mb-6 font-semibold text-gray-800 bg-gray-50 p-4 border-l-4 border-[#D2A02A]">
    A registered will in Delhi NCR serves as irrefutable evidence of your final wishes, significantly reducing the likelihood of prolonged probate litigation. While registration is not legally mandatory for a will to be valid, it adds an essential layer of authenticity that deters frivolous challenges by disgruntled heirs in local courts.
  </p>

  <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">The Dangers of Dying Intestate</h3>
  <p className="mb-4 text-gray-700">Dying intestate, which means passing away without a valid will, triggers a rigid set of legal procedures governed by your religion's succession laws. In India, this often leads to the fragmentation of properties, especially real estate located in prime areas of Delhi, Gurugram, or Noida. When multiple heirs inherit fractional shares of a single property, selling or developing the asset becomes practically impossible without unanimous consent. This gridlock frequently results in the property falling into disrepair or being sold at a distressed value due to ongoing family disputes.</p>
  <p className="mb-4 text-gray-700">Moreover, intestacy completely removes your agency in choosing guardians for minor children. If you and your spouse pass away simultaneously without a will nominating a trusted guardian, the court will appoint one based on statutory guidelines. This appointed individual may not share your values, educational goals, or parenting philosophy. A well - crafted will allows you to proactively designate guardians and establish financial trusts to cover their upbringing, ensuring their future remains secure and aligned with your vision.</p>
  <p className="mb-4 text-gray-700">Intestacy also creates severe liquidity crises for surviving spouses. Without a will explicitly transferring bank balances, mutual funds, and fixed deposits, the surviving family members cannot simply walk into a bank and withdraw the funds. They must first obtain a succession certificate from the district court, a process that can take anywhere from six months to two years. During this period, the family may struggle to pay basic living expenses, medical bills, or educational fees, despite the deceased having substantial wealth locked in the banking system.</p>

  <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">Understanding the Delhi NCR Jurisdiction</h3>
  <p className="mb-4 text-gray-700">The Delhi NCR region presents unique jurisdictional challenges for estate planning. Properties located in Delhi, Gurugram, Noida, and Faridabad fall under different state revenue laws, municipal regulations, and court jurisdictions. A will drafted without accounting for these regional variations can face execution hurdles. For example, the process of mutating a property in the records of the Delhi Development Authority (DDA) differs significantly from the mutation process in the Haryana Urban Development Authority (HUDA) or the Noida Authority.</p>
  <p className="mb-4 text-gray-700">When drafting a will for assets spread across the NCR, it is crucial to explicitly detail the location, registration numbers, and current status of each property. Our expert <Link href="/family-lawyer" className="text-[#D2A02A] hover:underline font-semibold">family lawyer</Link> team ensures that all jurisdictional requirements are met, preventing bureaucratic bottlenecks when the will is executed. We also advise on the implications of the Delhi Land Reforms Act, which places specific restrictions on the inheritance and transfer of agricultural land situated within the National Capital Territory.</p>
  <p className="mb-4 text-gray-700">Furthermore, the choice of the Sub - Registrar's office for registering the will plays a vital role. In Delhi, a will can be registered at any Sub - Registrar office, but it is highly recommended to register it in the district where the testator resides or where the majority of the immovable property is located. This localized registration simplifies the process of obtaining certified copies and proving the will's authenticity if it is ever challenged in the future. Proper jurisdictional planning is the bedrock of a robust estate strategy.</p>

  <div className="bg-[#f0f4ff] border-l-4 border-[#3182ce] p-6 rounded-r-xl my-8">
    <h4 className="text-lg font-bold text-gray-900 mb-2">Myth vs Fact: Will Registration in India</h4>
    <ul className="list-none space-y-3 text-gray-700">
      <li><strong>Myth:</strong> A registered will cannot be changed or revoked.</li>
      <li><strong>Fact:</strong> You can revoke, alter, or update a registered will as many times as you want during your lifetime by executing a new will or a codicil. The latest dated will supersedes all previous versions.</li>
      <li><strong>Myth:</strong> Only elderly people or those with massive wealth need a will.</li>
      <li><strong>Fact:</strong> Anyone over the age of 18 who owns bank accounts, vehicles, digital assets, or has minor children needs a will to prevent legal chaos for their family.</li>
      <li><strong>Myth:</strong> Nominees automatically become the absolute owners of the assets upon death.</li>
      <li><strong>Fact:</strong> A nominee is merely a trustee or custodian holding the asset on behalf of the legal heirs. The ultimate ownership is decided by the will or succession laws.</li>
    </ul>
  </div>
</section>

<section id="what-to-expect" className="scroll-mt-32 border-t pt-8">
  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">What to Expect During a Free Consultation</h2>
  <p className="mb-6 font-semibold text-gray-800 bg-gray-50 p-4 border-l-4 border-[#D2A02A]">
    During your initial free consultation, our legal experts will conduct a comprehensive review of your financial portfolio, family structure, and specific estate planning goals. This session is designed to identify potential legal risks and outline a customized strategy to secure your legacy efficiently.
  </p>

  <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">Asset Assessment and Structuring</h3>
  <p className="mb-4 text-gray-700">The first step in any effective estate planning consultation is a meticulous inventory of your assets. We categorize your wealth into immovable properties (residential homes, commercial spaces, agricultural land), movable assets (bank accounts, mutual funds, stocks, jewelry, vehicles), and digital assets. It is common for individuals to overlook certain assets, such as dormant bank accounts, old insurance policies, or intellectual property rights. A thorough assessment ensures that absolutely nothing is left intestate, preventing unexpected legal complications for your heirs.</p>
  <p className="mb-4 text-gray-700">Once the inventory is complete, we focus on structuring the distribution. Simply listing assets and beneficiaries is often insufficient. For instance, leaving a lump sum of cash to a financially inexperienced young adult can be disastrous. We discuss the implementation of testamentary trusts, where a designated trustee manages the funds and releases them to the beneficiary at specific milestones, such as turning twenty - five, graduating from university, or getting married. This structured approach protects the wealth from being squandered and ensures it serves its intended purpose of providing long - term security.</p>
  <p className="mb-4 text-gray-700">We also evaluate the tax implications of your proposed distribution. While India currently does not have an inheritance tax or estate duty, the transfer of certain assets can trigger capital gains tax or stamp duty obligations for the beneficiaries. By strategically allocating specific assets to specific heirs, we can minimize the overall tax burden on your estate. For example, transferring a primary residence to a spouse and highly appreciated stocks to a charitable trust might optimize the financial outcome for all parties involved.</p>

  <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">Nominating Executors and Guardians</h3>
  <p className="mb-4 text-gray-700">The executor is the individual responsible for administering your estate, paying off any outstanding debts, and distributing the assets according to your will. During the consultation, we help you identify the right person for this critical role. An executor must be trustworthy, organized, and capable of handling bureaucratic procedures. We often recommend appointing a primary executor and a backup executor, in case the primary choice is unable or unwilling to serve when the time comes. We also discuss whether a professional corporate executor might be more appropriate for complex estates.</p>
  <p className="mb-4 text-gray-700">If you have minor children, nominating a legal guardian is arguably the most important decision in your will. We explore the legal requirements for guardianship and help you select individuals who share your parenting values and have the financial and emotional capacity to raise your children. We strongly advise against appointing joint guardians (such as a married couple) without a clear contingency plan if they separate. It is always better to appoint a single primary guardian and a secondary alternative.</p>
  <p className="mb-4 text-gray-700">By meticulously covering these elements, our consultation provides you with a clear, actionable roadmap. You will leave the session with a deep understanding of how your current assets are positioned, the vulnerabilities in your existing setup, and the exact legal steps required to fortify your family's future. Our goal is to replace uncertainty and anxiety with confidence and profound peace of mind.</p>

  <div className="bg-[#fcf8f2] border-l-4 border-[#e53e3e] p-6 rounded-r-xl my-8">
    <h4 className="text-lg font-bold text-gray-900 mb-2">Cost Breakdown: Will Drafting and Registration</h4>
    <p className="text-gray-700 mb-4">Understanding the financial commitment required for estate planning is essential. While we offer a free initial consultation, the subsequent legal services involve specific costs. Please note that these are estimated ranges and can vary based on complexity.</p>
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border-b text-left text-sm font-semibold text-gray-700">Service Component</th>
            <th className="py-2 px-4 border-b text-left text-sm font-semibold text-gray-700">Estimated Cost Range (INR)</th>
            <th className="py-2 px-4 border-b text-left text-sm font-semibold text-gray-700">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4 border-b text-sm text-gray-700">Basic Will Drafting</td>
            <td className="py-2 px-4 border-b text-sm text-gray-700">₹15,000 - ₹25,000</td>
            <td className="py-2 px-4 border-b text-sm text-gray-700">Standard will for straightforward asset distribution without trusts.</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="py-2 px-4 border-b text-sm text-gray-700">Complex Will with Trusts</td>
            <td className="py-2 px-4 border-b text-sm text-gray-700">₹35,000 - ₹75,000+</td>
            <td className="py-2 px-4 border-b text-sm text-gray-700">Includes testamentary trusts, life interest clauses, and multiple property schedules.</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border-b text-sm text-gray-700">Medical Certificate</td>
            <td className="py-2 px-4 border-b text-sm text-gray-700">₹2,000 - ₹5,000</td>
            <td className="py-2 px-4 border-b text-sm text-gray-700">Obtained from a registered medical practitioner proving sound mind.</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="py-2 px-4 border-b text-sm text-gray-700">Sub-Registrar Fees</td>
            <td className="py-2 px-4 border-b text-sm text-gray-700">₹500 - ₹1,500</td>
            <td className="py-2 px-4 border-b text-sm text-gray-700">Official government fees for registering the document in Delhi NCR.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

<section id="key-elements" className="scroll-mt-32 border-t pt-8">
  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Key Elements of a Legally Valid Will</h2>
  <p className="mb-6 font-semibold text-gray-800 bg-gray-50 p-4 border-l-4 border-[#D2A02A]">
    A will is only valid if it satisfies the stringent statutory requirements of the Indian Succession Act. Any deviation from these rules, such as improper attestation or ambiguous language, can render the entire document void, plunging the estate back into intestacy.
  </p>

  <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">Witness and Registration Requirements</h3>
  <p className="mb-4 text-gray-700">The most critical legal requirement for a valid will is proper attestation. The law mandates that the testator (the person making the will) must sign or affix their mark to the document in the presence of two or more independent witnesses. These witnesses must then sign the will in the presence of the testator. Crucially, a beneficiary named in the will, or their spouse, should never act as a witness. If a beneficiary signs as a witness, the bequest to them becomes completely void, although the rest of the will may survive. We ensure that your witnesses are neutral, credible, and understand their legal duty.</p>
  <p className="mb-4 text-gray-700">While registration is optional, we consider it practically mandatory for clients in Delhi NCR due to the high volume of property litigation. Registration involves executing the will before the Sub - Registrar of Assurances. The process requires the physical presence of the testator and the two witnesses, along with their original identification documents. The Sub - Registrar records the execution, captures photographs and thumb impressions digitally, and preserves a copy of the will in the government archives. This creates an unshakeable presumption of the will's genuineness.</p>
  <p className="mb-4 text-gray-700">Furthermore, obtaining a medical certificate of fitness from a registered doctor, ideally a general physician or a psychiatrist, and attaching it to the will at the time of registration is a powerful defensive strategy. This certificate unequivocally proves that the testator was of sound disposing mind and capable of understanding the consequences of their actions, preemptively defeating any future allegations of dementia, coercion, or undue influence raised by unhappy relatives.</p>

  <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">Avoiding Future Family Disputes</h3>
  <p className="mb-4 text-gray-700">The primary objective of a will is to prevent conflict. Ambiguity is the enemy of peace in estate planning. Vague descriptions like "my house" or "my bank accounts" are guaranteed to cause disputes if you own multiple properties or accounts. A professionally drafted will includes precise, granular details. For immovable property, this means stating the exact municipal address, plot number, area, and registration details. For financial assets, it requires specifying bank names, branch addresses, account numbers, and exact folio numbers for investments.</p>
  <p className="mb-4 text-gray-700">To further minimize disputes, we utilize specific exclusion clauses. If you are intentionally leaving a legal heir out of your will (for example, an estranged son or daughter), it is crucial to state this explicitly in the document. You do not necessarily need to detail the reasons for the exclusion, but acknowledging their existence and explicitly stating your decision to exclude them proves that it was a deliberate choice, not an accidental oversight. This prevents them from claiming they were forgotten and challenging the will on those grounds.</p>
  <p className="mb-4 text-gray-700">Finally, the use of unambiguous language regarding the nature of the bequest is vital. Terms like "life interest" versus "absolute ownership" must be used precisely. If you wish to grant your spouse the right to live in a house for their lifetime, but want the ownership to pass to your children after their death, creating a 'life interest' is necessary. If the language inadvertently grants absolute ownership to the spouse, they could legally sell the property or leave it to someone else in their own will, defeating your original intention. Our rigorous drafting process eliminates these linguistic traps.</p>
</section>

<section id="why-choose-us" className="scroll-mt-32 border-t pt-8">
  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Why Choose Our Law Firm for Will Drafting</h2>
  <p className="mb-6 font-semibold text-gray-800 bg-gray-50 p-4 border-l-4 border-[#D2A02A]">
    AMA Legal Solutions is recognized as a premier provider of <Link href="/legal-services-in-delhi" className="text-[#D2A02A] hover:underline font-semibold">legal services in delhi</Link> NCR. Our dedicated estate planning team combines decades of litigation experience with meticulous drafting skills to deliver unparalleled legal protection for your family's assets.
  </p>

  <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">Step-by-step Process for Registration</h3>
  <p className="mb-4 text-gray-700">Our process is designed to be seamless, transparent, and completely stress-free for our clients. We handle the bureaucratic heavy lifting, allowing you to focus entirely on making the right decisions for your family. The journey from the initial consultation to the final registered document follows a strict, proven protocol.</p>
  
  <div className="bg-[#f8fcf2] border-l-4 border-[#38a169] p-6 rounded-r-xl my-8">
    <h4 className="text-lg font-bold text-gray-900 mb-2">Step Checklist: The Complete Will Registration Process</h4>
    <ul className="list-decimal pl-5 space-y-2 text-gray-700">
      <li><strong>Initial Consultation:</strong> Schedule a free meeting to discuss your assets, family structure, and specific distribution goals.</li>
      <li><strong>Information Gathering:</strong> Submit copies of property deeds, bank statements, identification documents, and a list of beneficiaries.</li>
      <li><strong>Drafting the Will:</strong> Our legal team prepares the first draft, incorporating necessary trusts, guardian nominations, and specific exclusion clauses.</li>
      <li><strong>Review and Refine:</strong> You review the draft thoroughly. We make unlimited revisions until the document perfectly reflects your intentions.</li>
      <li><strong>Medical Certification:</strong> We guide you in obtaining a certificate of sound mind from a registered medical practitioner on the day of registration.</li>
      <li><strong>Execution and Registration:</strong> We schedule an appointment at the appropriate Sub-Registrar's office. Our lawyers accompany you and the two independent witnesses to oversee the signing, biometric verification, and official registration process.</li>
      <li><strong>Secure Storage:</strong> We provide you with the original registered will and offer secure digital archiving options for permanent safety.</li>
    </ul>
  </div>

  <p className="mb-4 text-gray-700">We do not just draft documents; we build enduring legal architectures. Our deep understanding of local succession laws, combined with our proactive approach to identifying and mitigating potential family disputes, ensures that your legacy is preserved exactly as you intended. By choosing AMA Legal Solutions, you are not just getting a will; you are securing peace of mind for yourself and absolute clarity for the generations that follow.</p>
  <p className="mb-4 text-gray-700">Furthermore, we offer ongoing support and review services. As your life circumstances change - such as the acquisition of new properties, the birth of grandchildren, or changes in tax laws - your estate plan must adapt. We recommend reviewing your will every three to five years. Our firm maintains a secure database of our clients' estate plans, making updates and codicils a swift and efficient process. Partner with us to ensure your family's financial security is never left to chance.</p>
</section>

<section id="success-stories" className="scroll-mt-32 border-t pt-8">
  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Client Success Stories</h2>
  <div className="grid md:grid-cols-2 gap-8 mb-12">

    <div key="0" className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
      <p className="text-gray-700 italic mb-4 relative z-10">
        "The legal team at AMA Legal Solutions made the entire will drafting process incredibly smooth. They identified assets I hadn't even considered and drafted a foolproof document that protects my business and my family. Their expertise in Delhi jurisdiction is unmatched."
      </p>
      <div className="flex items-center">
        <div className="w-10 h-10 bg-[#D2A02A] rounded-full flex items-center justify-center text-white font-bold mr-3">A</div>
        <div>
          <p className="font-bold text-gray-900">Arun Kumar</p>
          <p className="text-xs text-gray-500">Vasant Vihar, New Delhi</p>
        </div>
      </div>
    </div>

    <div key="1" className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
      <p className="text-gray-700 italic mb-4 relative z-10">
        "I was anxious about setting up a trust for my minor children. Advocate Anuj Anand Malik patiently explained the legal mechanisms and created a comprehensive will that gave me absolute peace of mind. Highly professional and empathetic service."
      </p>
      <div className="flex items-center">
        <div className="w-10 h-10 bg-[#D2A02A] rounded-full flex items-center justify-center text-white font-bold mr-3">P</div>
        <div>
          <p className="font-bold text-gray-900">Priya Sharma</p>
          <p className="text-xs text-gray-500">DLF Phase 3, Gurugram</p>
        </div>
      </div>
    </div>

    <div key="2" className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
      <p className="text-gray-700 italic mb-4 relative z-10">
        "I had a complex family structure and needed specific exclusion clauses to avoid future litigation over my properties. The firm drafted a flawless registered will and handled the entire sub-registrar process without any delays. Exceptional legal counsel."
      </p>
      <div className="flex items-center">
        <div className="w-10 h-10 bg-[#D2A02A] rounded-full flex items-center justify-center text-white font-bold mr-3">R</div>
        <div>
          <p className="font-bold text-gray-900">Rajiv Mehra</p>
          <p className="text-xs text-gray-500">Sector 15, Noida</p>
        </div>
      </div>
    </div>

  </div>
</section>

<section id="faqs" className="scroll-mt-32 border-t pt-8">
  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions (FAQs)</h2>
  <div className="space-y-6">

    <div key="0" className="border-b border-gray-200 pb-6 last:border-0">
      <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-start">
        <span className="text-[#D2A02A] mr-3">Q.</span>
        What happens if I die without making a will in Delhi NCR?
      </h3>
      <p className="text-gray-700 leading-relaxed pl-8">
        If you die without a will (intestate), your assets will be distributed according to the rigid succession laws applicable to your religion, not according to your personal wishes. This often leads to complex fractional ownership of properties, frozen bank accounts, and lengthy, expensive family disputes in civil courts.
      </p>
    </div>

    <div key="1" className="border-b border-gray-200 pb-6 last:border-0">
      <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-start">
        <span className="text-[#D2A02A] mr-3">Q.</span>
        Is it mandatory to register a will in India?
      </h3>
      <p className="text-gray-700 leading-relaxed pl-8">
        No, registering a will is not legally mandatory under the Indian Registration Act. However, it is highly recommended, especially in Delhi NCR. Registration provides strong legal evidence of the will's authenticity and the testator's sound mind, making it significantly harder for disgruntled heirs to challenge it in court.
      </p>
    </div>

    <div key="2" className="border-b border-gray-200 pb-6 last:border-0">
      <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-start">
        <span className="text-[#D2A02A] mr-3">Q.</span>
        Can I change my registered will later?
      </h3>
      <p className="text-gray-700 leading-relaxed pl-8">
        Yes, you can change, modify, or completely revoke a registered will as many times as you want during your lifetime. You can make minor changes using a supplementary document called a 'codicil', or you can draft and register an entirely new will, which automatically supersedes all previous versions.
      </p>
    </div>

    <div key="3" className="border-b border-gray-200 pb-6 last:border-0">
      <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-start">
        <span className="text-[#D2A02A] mr-3">Q.</span>
        Who can be a witness to my will?
      </h3>
      <p className="text-gray-700 leading-relaxed pl-8">
        A witness must be an adult of sound mind who can verify that you signed the document willingly. Crucially, a witness or their spouse cannot be a beneficiary of the will. If a beneficiary signs as a witness, they will lose their inheritance. Always choose independent, neutral individuals.
      </p>
    </div>

    <div key="4" className="border-b border-gray-200 pb-6 last:border-0">
      <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-start">
        <span className="text-[#D2A02A] mr-3">Q.</span>
        Do I need a lawyer to draft a will, or can I write it myself?
      </h3>
      <p className="text-gray-700 leading-relaxed pl-8">
        While you can legally write a will yourself on plain paper, DIY wills frequently contain ambiguous language, lack proper legal phrasing, or fail to account for complex legal scenarios. Hiring an expert lawyer ensures the document is legally watertight, properly structured, and immune to future litigation.
      </p>
    </div>

    <div key="5" className="border-b border-gray-200 pb-6 last:border-0">
      <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-start">
        <span className="text-[#D2A02A] mr-3">Q.</span>
        What is the role of an executor in a will?
      </h3>
      <p className="text-gray-700 leading-relaxed pl-8">
        An executor is the person you appoint to carry out the instructions in your will after your death. Their duties include clearing any outstanding debts, gathering all assets, managing the estate, and distributing the properties to the beneficiaries exactly as you have dictated in the document.
      </p>
    </div>

    <div key="6" className="border-b border-gray-200 pb-6 last:border-0">
      <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-start">
        <span className="text-[#D2A02A] mr-3">Q.</span>
        How much does it cost to register a will in Delhi?
      </h3>
      <p className="text-gray-700 leading-relaxed pl-8">
        The official government registration fee at the Sub-Registrar's office in Delhi is nominal, typically under Rs. 1,000. However, the professional legal fees for drafting the will depend on the complexity of your estate, the inclusion of trusts, and the lawyer's expertise, usually ranging from Rs. 15,000 to Rs. 50,000.
      </p>
    </div>

  </div>
</section>


                {/* Author Bio Box */}
                <aside className="bg-[#f9f5e8] p-6 md:p-8 rounded-2xl border border-amber-200 mt-12 flex flex-col md:flex-row gap-6 items-center">
                  <div className="relative w-32 h-32 md:w-40 md:h-40 flex-shrink-0 bg-gray-200 rounded-full overflow-hidden border-2 border-[#D2A02A]">
                    <Image
                      src="/newAssets/bhiya.png"
                      alt="Advocate Anuj Anand Malik Negotiating a Loan Settlement in Delhi"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-gray-900">Written by Advocate Anuj Anand Malik</h3>
                    <p className="text-sm font-semibold text-gray-600">Founder, AMA Legal Solutions | Expert in Estate Planning & Will Drafting</p>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                      Advocate Anuj Anand Malik is a credentialed legal consultant specializing in asset protection and succession laws. He has represented thousands of clients in executing legally robust wills across Delhi NCR. He is an active member of the Bar Council of Delhi and the Indo-American Chamber of Commerce.
                    </p>
                    <div className="flex gap-4">
                      <a href="https://www.linkedin.com/in/iamanujmalik/" target="_blank" rel="noopener noreferrer" className="text-[#D2A02A] hover:text-[#b88a22] font-semibold text-sm flex items-center">
                        LinkedIn Profile →
                      </a>
                      <Link href="/author/anuj-anand-malik" className="text-gray-600 hover:text-gray-900 font-semibold text-sm flex items-center">
                        Author Bio Page →
                      </Link>
                    </div>
                  </div>
                </aside>

                {/* Trust Signals Footer Block */}
                <footer className="border-t pt-8 mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-xs text-gray-500">
                  <div>
                    <Link href="/about" className="hover:text-gray-900">About AMA Legal</Link>
                  </div>
                  <div>
                    <Link href="/privacy-policy" className="hover:text-gray-900">Privacy Policy</Link>
                  </div>
                  <div>
                    <Link href="/terms-and-conditions" className="hover:text-gray-900">Legal Disclaimer & Terms</Link>
                  </div>
                  <div>
                    <Link href="/contact" className="hover:text-gray-900">Contact Us</Link>
                  </div>
                </footer>

                {/* Final CTA Block */}
                <section className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden">
                  <div className="relative z-10 space-y-4">
                    <h2 className="text-2xl md:text-4xl font-bold">Ready to Secure Your Family's Future?</h2>
                    <p className="text-sm md:text-lg opacity-90 max-w-2xl mx-auto">
                      Avoid the legal complexities of dying intestate. Consult our senior advocates in Delhi NCR today to draft a legally binding, challenge-proof will.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                      <Link href="/contact">
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-base w-full sm:w-auto">
                          Book Free Legal Consultation
                        </button>
                      </Link>
                      <a href="tel:+918700343611">
                        <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-8 rounded-full transition-all text-sm md:text-base w-full sm:w-auto">
                          Call Us: +91-8700343611
                        </button>
                      </a>
                    </div>
                    <p className="text-[10px] opacity-75 italic pt-2">Disclaimer: Consultation is subject to standard legal confidentiality guidelines.</p>
                  </div>
                </section>

              </div>
            </div>

            {/* Right Sidebar Contacts & Stats */}
            <aside className="hidden lg:block space-y-8 sticky top-24">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Delhi NCR Legal Office</h3>
                <p className="text-gray-600 mb-6 text-sm">
                  Consult our estate planning lawyers in Sector 57, Gurugram.
                </p>
                <a 
                  href="tel:+918700343611" 
                  className="flex items-center justify-center w-full bg-[#1a202c] hover:bg-gray-800 text-white font-bold py-3 px-4 rounded-lg transition-colors"
                >
                  <span className="mr-2">📞</span> +91-8700343611
                </a>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-4">Why Choose Us?</h4>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="text-[#D2A02A] mr-2">✓</span>
                    Tailored Wills & Testamentary Trusts
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D2A02A] mr-2">✓</span>
                    End-to-End Sub-Registrar Assistance
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D2A02A] mr-2">✓</span>
                    Strict Confidentiality Guaranteed
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D2A02A] mr-2">✓</span>
                    Decades of Civil Litigation Expertise
                  </li>
                </ul>
              </div>
            </aside>

          </div>
        </article>
      </main>
    </>
  );
}
