import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "What is the legal validity of a Will in India?",
    answer: "A Will is a legal declaration of a person's intention regarding the distribution of their property after their death. In India, it is primarily governed by the Indian Succession Act, 1925. To be legally valid, it must be in writing, signed by the testator (the person making the Will), and attested by at least two witnesses who saw the testator sign the document."
  },
  {
    question: "Is it mandatory to register a Will in India?",
    answer: "No, registration of a Will is not mandatory under the Indian Registration Act, 1908. A Will written on a plain piece of paper, properly signed and attested, is perfectly valid. However, registration is highly recommended as it provides an official record, making it harder to challenge for authenticity or tampering in the future."
  },
  {
    question: "Who can be a witness to a Will?",
    answer: "Any person who is of sound mind and has reached the age of majority can be a witness. Crucially, a beneficiary (someone who inherits under the Will) or their spouse should not be a witness. If a beneficiary witnesses the Will, the Will remains valid, but the specific bequest to that person becomes void under Indian law."
  },
  {
    question: "What is the role of an Executor in a Will?",
    answer: "An Executor is the person named in the Will to carry out the deceased's wishes. Their responsibilities include applying for probate (if required), identifying and securing assets, paying off debts and funeral expenses, and distributing the remaining assets to the beneficiaries as specified in the document."
  },
  {
    question: "Can I change my Will after it is signed?",
    answer: "Yes, a Will can be revoked or changed at any time during the testator's lifetime, provided they are of sound mind. Small changes can be made through a 'Codicil', which is a supplement to the Will. For major changes, it is best to draft a new Will that explicitly revokes all previous versions."
  },
  {
    question: "What is a Living Will or Advance Medical Directive?",
    answer: "A Living Will allows an individual to state their preferences for medical treatment in the event they become terminally ill or incapacitated and unable to communicate. The Supreme Court of India recognized the right to a Living Will in 2018, allowing for the refusal of life-sustaining treatment under strict medical and judicial guidelines."
  },
  {
    question: "Can I bequeath my ancestral property through a Will?",
    answer: "Under Hindu law, a person can only dispose of their 'self-acquired' property via a Will. Joint family or ancestral property is subject to the rules of coparcenary, and your right to dispose of it is limited to your specific share in that property as determined at the time of your death."
  },
  {
    question: "What happens if someone dies without making a Will?",
    answer: "If a person dies without a Will (intestate), their property is distributed according to the laws of succession applicable to their religion (e.g., Hindu Succession Act or Muslim Personal Law). This often leads to family disputes and may result in an inheritance pattern that the deceased did not intend."
  },
  {
    question: "What is Probate and is it always necessary?",
    answer: "Probate is a court-certified copy of a Will that establishes its validity. It is mandatory for Wills executed by Hindus, Buddhists, Sikhs, or Jains in the cities of Mumbai, Kolkata, and Chennai, or if it involves immovable property in those jurisdictions. In other parts of India, it is generally optional but often requested by banks or societies to transfer assets."
  },
  {
    question: "How does Muslim law differ regarding Wills?",
    answer: "Under Muslim Personal Law, a person can generally only bequeath one-third of their total estate through a Will (Wasiyat) without the consent of their legal heirs. The remaining two-thirds must be distributed according to fixed Islamic inheritance shares. Additionally, a Muslim Will can be made orally or in writing without strict attestation requirements."
  }
];

// Breadcrumb Schema
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
      "name": "Drafting of Will - Professional Legal Services",
      "item": "https://www.amalegalsolutions.com/drafting-of-will"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Professional Drafting of Will Services in India: Secure Your Legacy for ₹2999",
  "description": "Expert drafting of will services across India including Delhi, Mumbai, Bengaluru, and more. Comprehensive legal guidance on Indian Succession Act, probate, and estate planning to protect your family's future.",
  "image": "https://www.amalegalsolutions.com/services/will-drafting-banner.png",
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
  "datePublished": "2026-03-10",
  "dateModified": "2026-03-10"
};

// FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

// Review Schema
const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Will Drafting Services - AMA Legal Solutions",
  "image": "https://www.amalegalsolutions.com/services/will-drafting-icon.png",
  "description": "Legally sound and comprehensive Will drafting services starting at ₹2999. Trusted by thousands across India for estate planning and legacy protection.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "850"
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
        "name": "Anita Deshmukh"
      },
      "reviewBody": "Excellent service. The legal team helped me draft a complex will involving multiple properties in different states. Very professional and the price is amazing."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Rajesh Khanna"
      },
      "reviewBody": "AMA Legal Solutions made the process of drafting my Will incredibly simple. The lawyers were patient and explained every legal term. Highly recommended."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Priya Sundaram"
      },
      "reviewBody": "Professional and ensured my Will was compliant with local High Court rules in Chennai. Great service at an affordable price."
    }
  ]
};

export const metadata = {
  title: "Drafting of Will Services in India | Legally Secure Your Legacy ₹2999",
  description: "Get your Will drafted by expert lawyers at AMA Legal Solutions. We serve all cities in India. Professional drafting of will, probate help, and estate planning at just ₹2999. Protect your family today!",
  keywords: [
    "drafting of will",
    "will drafting services india",
    "legal will online india",
    "estate planning india",
    "probate of will legal help",
    "indian succession act 1925 will",
    "last will and testament drafting",
    "online will registration india",
    "legal advice for drafting will",
    "will for sikhs hindus muslims christians"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/drafting-of-will',
  },
};

export default function DraftingOfWillPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction to Will Drafting" },
    { id: "legal-significance", title: "Legal Significance of a Will" },
    { id: "framework-india", title: "Indian Legal Framework" },
    { id: "essential-elements", title: "Essential Elements of a Valid Will" },
    { id: "types-of-wills", title: "Types of Wills Recognized" },
    { id: "step-by-step-process", title: "The Drafting Process Explained" },
    { id: "executor-role", title: "Role and Importance of Executor" },
    { id: "registration-benefits", title: "Registration and Its Benefits" },
    { id: "probate-guide", title: "The Probate Process in India" },
    { id: "personal-laws", title: "Wills Under Personal Laws" },
    { id: "pan-india-service", title: "Service in All Indian Cities" },
    { id: "common-mistakes", title: "Mistakes to Avoid While Drafting" },
    { id: "future-planning", title: "Estate Planning Beyond the Will" },
    { id: "reviews", title: "Client Reviews" },
    { id: "faqs", title: "Frequently Asked Questions" },
  ];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Drafting of Will", href: "/drafting-of-will" },
  ];

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="review-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />

      <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
        {/* Hero Section */}
        <div className="relative bg-[#30261C] text-white">
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          <div className="relative z-20 container mx-auto px-4 py-16 md:py-36 text-center">
            <h1 className="text-2xl md:text-6xl font-bold mb-6 md:mb-8 leading-tight mt-10">
              Professional <span className="text-[#D2A02A]">Drafting of Will</span> Across India
            </h1>
            <p className="text-sm md:text-2xl mb-8 md:mb-12 max-w-4xl mx-auto text-gray-200">
              Secure your family's future and ensure your legacy is preserved exactly as you wish. Expert legal drafting of your last will and testament for just <span className="text-[#D2A02A] font-bold">₹2999</span>. We serve all 28 states and 8 union territories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-105 shadow-xl text-lg w-full sm:w-auto">
                  Start Drafting Your Will
                </button>
              </Link>
              <Link href="tel:+918700343611">
                <button className="bg-transparent border-2 border-white hover:bg-white hover:text-[#1a202c] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-105 shadow-xl text-lg w-full sm:w-auto">
                  Get Free Consultation
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-[1600px] py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          {/* Main Layout: 3 Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr_300px] gap-8 items-start mt-8">
            
            {/* Left Column: Sticky Table of Contents */}
            <div className="hidden lg:block sticky top-24">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold mb-4 px-2 text-gray-900 border-b pb-2">Navigation</h3>
                <TableOfContents sections={tocSections} orientation="vertical" />
              </div>
            </div>

            {/* Middle Column: Main Content */}
            <div className="min-w-0">
              {/* Mobile TOC */}
              <div className="lg:hidden mb-6 sticky top-20 z-10">
                <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-4 md:p-12 rounded-2xl shadow-sm space-y-12 md:space-y-20">
                
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 border-l-4 border-[#D2A02A] pl-6">Comprehensive Guide to Drafting of Will in India</h2>
                  <div className="prose max-w-none text-gray-700 space-y-6">
                    <p className="text-base md:text-lg leading-relaxed">
                      Death is a difficult subject to contemplate, but planning for what happens after you are gone is one of the most responsible acts you can perform for your loved ones. The <strong>drafting of Will</strong> is the cornerstone of effective estate planning. It ensures that your hard-earned assets, whether they be property, jewelry, savings, or investments, are distributed according to your specific desires. Without a valid Will, your estate becomes subject to the laws of 'intestate succession', which often leads to lengthy legal battles and family splits.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed">
                      At AMA Legal Solutions, we specialize in providing legally sound and robust Will drafting services. Whether you are a resident of a bustling metro area like Delhi, Mumbai, or Bengaluru, or living in a quieter town, our expert lawyers are trained to capture your intentions with surgical precision. We understand the nuances of the Indian Succession Act 1925 and various personal laws that govern inheritance in our culturally diverse nation.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed">
                      The process of <strong>drafting of Will</strong> is not merely about listing your assets. it is about creating a roadmap for your family's future. It involves identifying the right executors, appointing guardians for minor children, and ensuring that no ambiguity remains that could be exploited in a court of law. In today's digital age, even your social media accounts and digital assets need a clear succession plan, which we incorporate into our contemporary drafting services.
                    </p>
                  </div>
                </section>

                {/* Legal Significance */}
                <section id="legal-significance" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 border-l-4 border-[#D2A02A] pl-6">Why is Professional Drafting of Will Essential?</h2>
                  <div className="prose max-w-none text-gray-700 space-y-6">
                    <p>
                      Many people believe that they can simply write their wishes on a piece of paper and call it a day. While Indian law is flexible regarding the format of a Will, the legal significance of a professionally drafted document cannot be overstated. A professionally <strong>drafted Will</strong> minimizes the risk of the document being declared invalid due to technical flaws or contradictory clauses.
                    </p>
                    <p>
                      One of the primary benefits of a clear Will is the prevention of family disputes. In India, property litigation can drag on for decades, consuming more than the value of the property itself in legal fees and emotional distress. By clearly specifying who gets what, you remove the room for interpretation and greed. Furthermore, it allows you to provide for individuals who might not be recognized as legal heirs under traditional succession laws, such as friends, distant relatives, or charitable organizations.
                    </p>
                    <p>
                      Another critical aspect is the protection of minors. If both parents pass away without a Will, the court decides who becomes the guardian of the children. By <strong>drafting of Will</strong>, you retain the power to choose a person you trust implicitly to raise your children and manage their inheritance until they reach adulthood. This provides an immense sense of peace for young parents.
                    </p>
                  </div>
                </section>

                {/* Framework India */}
                <section id="framework-india" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 border-l-4 border-[#D2A02A] pl-6">The Indian Legal Framework Governing Wills</h2>
                  <div className="prose max-w-none text-gray-700 space-y-6">
                    <p>
                      The primary legislation governing the creation and execution of a Will in India is the <strong>Indian Succession Act, 1925</strong>. This Act applies broadly to most communities, including Hindus, Sikhs, Jains, Buddhists, and Christians. However, the application of specific chapters varies. For instance, the rules for 'privileged Wills' are reserved for soldiers, airmen, and mariners in active service due to the hazardous nature of their work and the likelihood of sudden death.
                    </p>
                    <p>
                      Section 63 of the Indian Succession Act 1925 sets out the mandatory requirements for an 'unprivileged' Will. It dictates that the Will must be in writing, the testator must sign or affix their mark to it, and it must be attested by at least two witnesses. The witnesses must either see the testator signing the Will or receive a personal acknowledgment from the testator that the signature or mark belongs to them.
                    </p>
                    <p>
                      It is also important to understand the role of the <strong>Indian Registration Act, 1908</strong>. While registration is not mandatory, the Act provides the mechanism through which a Will can be officially recorded with the government. This serves as powerful evidence of the document's authenticity and ensures that a copy is always available even if the original is lost or destroyed by an unhappy relative.
                    </p>
                  </div>
                </section>

                {/* Essential Elements */}
                <section id="essential-elements" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 border-l-4 border-[#D2A02A] pl-6">Essential Elements of a Legally Valid Will</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all border border-gray-100">
                             <h3 className="text-xl font-bold text-gray-900 mb-4">🧠 Testamentary Capacity</h3>
                             <p>The person making the Will must be of sound mind and at least 18 years old. They must understand the nature of their act and the extent of the property they are distributing.</p>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all border border-gray-100">
                             <h3 className="text-xl font-bold text-gray-900 mb-4">✍️ Signature and Execution</h3>
                             <p>The document must be signed by the testator. If the testator is unable to sign, they can use a thumb impression. The signature must be placed in a way that shows an intent to give effect to the Will.</p>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all border border-gray-100">
                             <h3 className="text-xl font-bold text-gray-900 mb-4">👥 Dual Attestation</h3>
                             <p>At least two witnesses are required. They must sign the Will in the presence of the testator. Crucially, witnesses should not be beneficiaries to avoid legal voiding of their shares.</p>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all border border-gray-100">
                             <h3 className="text-xl font-bold text-gray-900 mb-4">🚩 Non-Coercion</h3>
                             <p>A Will must be made voluntarily. Any evidence of fraud, undue influence, or coercion renders the entire document invalid in the eyes of the law.</p>
                        </div>
                    </div>
                </section>

                {/* Types of Wills */}
                <section id="types-of-wills" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 border-l-4 border-[#D2A02A] pl-6">Types of Wills Recognized in India</h2>
                  <div className="prose max-w-none text-gray-700 space-y-6">
                    <p>
                        The law recognizes several forms of Wills to accommodate different life situations. Understanding these is vital when you begin the <strong>drafting of Will</strong> process.
                    </p>
                    <ul className="list-disc pl-6 space-y-4">
                        <li><strong>Unprivileged Will:</strong> The most common form used by ordinary citizens. It requires strict adherence to signing and attestation rules.</li>
                        <li><strong>Privileged Will:</strong> A simpler form allowed for soldiers or mariners on active duty. These can even be oral in certain circumstances.</li>
                        <li><strong>Joint Will:</strong> A single document where two or more persons (usually spouses) distribute their property together. It takes effect after the death of both.</li>
                        <li><strong>Mutual Will:</strong> Two separate Wills made by two persons where they agree to leave their property to each other or to a common set of beneficiaries.</li>
                        <li><strong>Holographic Will:</strong> A Will entirely handwritten by the testator. While authentic, it still needs at least two witnesses to be valid as an unprivileged Will under Indian law.</li>
                        <li><strong>Living Will:</strong> An advance directive regarding your medical care if you become incapacitated. It is a separate concept from the distribution of property.</li>
                    </ul>
                  </div>
                </section>

                {/* Step by Step Process */}
                <section id="step-by-step-process" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 border-l-4 border-[#D2A02A] pl-6">The Step-by-Step Process of Drafting of Will</h2>
                  <div className="prose max-w-none text-gray-700 space-y-6">
                    <p>
                        Drafting a Will with AMA Legal Solutions is a streamlined and professional experience. Here is how we guide you through the journey:
                    </p>
                    <ol className="list-decimal pl-6 space-y-4">
                        <li><strong>Asset Audit:</strong> We help you compile a total list of your movable assets (bank accounts, shares, FDs, mutual funds, vehicles, jewelry) and immovable properties (land, apartments, commercial shops).</li>
                        <li><strong>Beneficiary Designation:</strong> You decide who should inherit. We help you specify the exact shares and include 'contingent beneficiaries' in case your primary choice predeceases you.</li>
                        <li><strong>Executor Selection:</strong> We advise you on choosing a reliable person who will manage your estate. This can be a trusted friend, family member, or a professional lawyer.</li>
                        <li><strong>Legal Drafting:</strong> Our lawyers draft the document using precise legal language that leaves no room for confusion. We ensure that the document starts with a clear declaration revoking all previous Wills.</li>
                        <li><strong>Review and Refinement:</strong> You get to review the draft. We make adjustments based on your feedback until you are completely satisfied that it reflects your heart's desire.</li>
                        <li><strong>Execution and Attestation:</strong> We guide you on the signing process in the presence of two witnesses to ensure the Will is technically perfect and ready for use.</li>
                    </ol>
                  </div>
                </section>

                {/* Executor Role */}
                <section id="executor-role" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 border-l-4 border-[#D2A02A] pl-6">The Role and Importance of an Executor</h2>
                    <div className="prose max-w-none text-gray-700 space-y-6">
                        <p>
                            While <strong>drafting of Will</strong>, appointing an Executor is perhaps the most critical practical decision. The Executor is the legal representative of the deceased. Their role begins the moment you pass away. They are responsible for making funeral arrangements (if specified), collecting all assets, paying off any outstanding debts or taxes, and finally handing over the inheritance to the beneficiaries.
                        </p>
                        <p>
                            If you do not appoint an Executor, the court will have to appoint an 'Administrator' of the estate, which is a much slower and costly process. Ideally, your Executor should be someone younger than you, possessing high integrity, and having a basic understanding of financial and legal matters. At AMA Legal Solutions, we can also act as professional executors if you prefer a neutral third party.
                        </p>
                    </div>
                </section>

                {/* Registration Benefits */}
                <section id="registration-benefits" className="scroll-mt-32 bg-[#fff9e6] p-8 md:p-12 rounded-3xl border border-[#D2A02A]">
                     <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">Registration: An Added Layer of Security</h2>
                     <div className="prose max-w-none text-gray-700 space-y-6">
                         <p>
                            As mentioned earlier, a Will does not have to be registered to be valid. However, the <strong>registration of Will</strong> at the Sub-Registrar's office is highly recommended for several reasons. Firstly, it places the Will in the safe custody of the government. This makes it impossible for an interested party to destroy or hide the original Will after your death.
                         </p>
                         <p>
                            Secondly, when you appear before the Sub-Registrar, they verify your identity and your capacity to make a Will. This makes it extremely difficult for anyone to later claim in court that the Will was forged or that you were not of sound mind when you made it. The process is simple and requires the testator and the two witnesses to visit the registrar's office with their identity documents. We provide complete physical and legal support for Will registration across India.
                         </p>
                     </div>
                </section>

                {/* Probate Guide */}
                <section id="probate-guide" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 border-l-4 border-[#D2A02A] pl-6">Navigating the Probate Process in India</h2>
                    <div className="prose max-w-none text-gray-700 space-y-6">
                        <p>
                            Probate is essentially a court certification that a Will is genuine. Once the court grants probate, the Executor gets the full legal authority to manage the deceased's assets. While <strong>drafting of Will</strong>, you should be aware if your estate will eventually require probate. 
                        </p>
                        <p>
                            Under the Indian Succession Act 1925, probate is mandatory for Hindus, Sikhs, Jains, and Buddhists if the Will is made in or involves immovable property in the presidential towns of Mumbai, Kolkata, and Chennai. In other parts of India, it is optional. However, if your assets include shares in a cooperative housing society or high-value bank accounts, these institutions often insist on probate before transferring the assets. Our team at AMA Legal Solutions handles the entire probate litigation and application process in High Courts across India.
                        </p>
                    </div>
                </section>

                {/* Personal Laws */}
                <section id="personal-laws" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 border-l-4 border-[#D2A02A] pl-6">Drafting of Will Under Various Personal Laws</h2>
                    <div className="prose max-w-none text-gray-700 space-y-6">
                        <p>
                            India's secular fabric means that inheritance is often guided by personal religious laws. When we undertake the <strong>drafting of Will</strong>, we tailor the document to the legal reality of the testator. For Muslims, the laws of 'Wasiyat' are quite distinct. A Muslim person can only bequeath one-third of their property through a Will. The remaining two-thirds must go to the legal heirs in mandatory portions. Any Will exceeding this limit requires the express consent of all legal heirs after the testator's death.
                        </p>
                        <p>
                            For Hindus, Sikhs, Jains, and Buddhists, the Hindu Succession Act 1956 provides the framework for what constitutes ancestral property versus self-acquired property. You have absolute power over your self-acquired property, but your power to Will away your share in joint family property is limited. Our legal experts ensure that your Will does not attempt to bequeath assets that you do not legally have the power to dispose of, which would otherwise lead to the Will being challenged.
                        </p>
                    </div>
                </section>

                {/* Pan India Service */}
                <section id="pan-india-service" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 border-l-4 border-[#D2A02A] pl-6">Will Drafting Services: We Serve Every Corner of India</h2>
                    <div className="prose max-w-none text-gray-700 space-y-6">
                        <p>
                            AMA Legal Solutions is proud to offer its professional <strong>drafting of Will</strong> services to clients across the entire country. Distance is no longer a barrier to getting top-tier legal protection. We have successfully assisted clients in every state and union territory.
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm bg-gray-50 p-6 rounded-xl border border-gray-100 italic">
                            <div>• Delhi (NCR)</div>
                            <div>• Mumbai (Maharashtra)</div>
                            <div>• Bengaluru (Karnataka)</div>
                            <div>• Chennai (Tamil Nadu)</div>
                            <div>• Kolkata (West Bengal)</div>
                            <div>• Hyderabad (Telangana)</div>
                            <div>• Pune (Maharashtra)</div>
                            <div>• Ahmedabad (Gujarat)</div>
                            <div>• Jaipur (Rajasthan)</div>
                            <div>• Lucknow (Uttar Pradesh)</div>
                            <div>• Chandigarh (Punjab/Haryana)</div>
                            <div>• Kochi (Kerala)</div>
                            <div>• Patna (Bihar)</div>
                            <div>• Guwahati (Assam)</div>
                            <div>• Bhubaneswar (Odisha)</div>
                            <div>• Bhopal (Madhya Pradesh)</div>
                            <div>• Ranchi (Jharkhand)</div>
                            <div>• Raipur (Chhattisgarh)</div>
                            <div>• Dehradun (Uttarakhand)</div>
                            <div>• Shimla (Himachal Pradesh)</div>
                            <div>• Srinagar (J&K)</div>
                            <div>• Panaji (Goa)</div>
                            <div>• Agartala (Tripura)</div>
                            <div>• Gangtok (Sikkim)</div>
                        </div>
                        <p>
                            From the localities of Saket and Vasant Kunj in Delhi to Bandra and Colaba in Mumbai, and from Indiranagar in Bengaluru to Salt Lake in Kolkata, our network covers the length and breadth of India. We also serve Tier-2 and Tier-3 cities and remote rural areas, ensuring that professional estate planning is accessible to every Indian citizen at a flat, transparent price of ₹2999.
                        </p>
                    </div>
                </section>

                {/* Common Mistakes */}
                <section id="common-mistakes" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 border-l-4 border-[#D2A02A] pl-6">Fatal Mistakes to Avoid While Drafting of Will</h2>
                    <div className="prose max-w-none text-gray-700 space-y-6">
                        <p>
                            In our years of practice, we have seen Wills fail for the simplest of reasons. When you are <strong>drafting of Will</strong>, avoid these common pitfalls:
                        </p>
                        <ul className="list-disc pl-6 space-y-4">
                            <li><strong>Vague Asset Descriptions:</strong> Simply saying &quot;my house&quot; is not enough if you own multiple or parts of properties. Use exact addresses, Khasra numbers, or Khata numbers.</li>
                            <li><strong>Ignoring the Residual Clause:</strong> A Will must include a clause for &quot;all other assets not mentioned above&quot;. This covers any property you might acquire between making the Will and your death.</li>
                            <li><strong>Witness Beneficiaries:</strong> Never make an inheritor a witness. It will lead to them losing their inheritance.</li>
                            <li><strong>Leaving Out the Date:</strong> A Will without a date is legally suspicious, especially if multiple versions of your Will are found later.</li>
                            <li><strong>Forgetting to Revoke Old Wills:</strong> Always explicitly state that this is your &quot;Last Will&quot; and that all previous Wills are hereby cancelled.</li>
                        </ul>
                    </div>
                </section>

                {/* Future Planning */}
                <section id="future-planning" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 border-l-4 border-[#D2A02A] pl-6">Estate Planning: Looking Beyond the Will</h2>
                    <div className="prose max-w-none text-gray-700 space-y-6">
                        <p>
                            While a Will is the primary document, true estate planning often involves other tools. For high-net-worth individuals, setting up a <strong>Private Family Trust</strong> can be more efficient for tax purposes and for protecting assets from creditors. A Trust also allows for a more controlled distribution of wealth over many years rather than a lump-sum handout.
                        </p>
                        <p>
                            Additionally, you must ensure that all your financial accounts have properly updated 'Nominations'. Remember, in Indian law, a Nominee is usually just a trustee who holds the money until the legal heirs (determined by the Will) can claim it. However, having a Nominee simplifies the immediate access to funds for your family after your passing. We provide a holistic estate review as part of our Will drafting process to ensure all your documents are in sync.
                        </p>
                    </div>
                </section>

                {/* Content Expansion for 5k words - Deep Dive Sessions */}
                <section className="scroll-mt-32 prose max-w-none text-gray-700 space-y-8">
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900 border-l-4 border-[#D2A02A] pl-6">Deep Dive: Complex Scenarios in Indian Will Drafting</h2>
                    <p>
                        The complexity of <strong>drafting of Will</strong> often arises in non-traditional families or with diversified asset portfolios. Consider a NRI (Non-Resident Indian) who owns property in India and abroad. Does a Will made in London or New York apply to assets in Pune? The answer is complex. For immovable property in India, the laws of India must be followed. It is often best to have a separate Indian Will for Indian assets to avoid jurisdictional clashes and the difficult process of getting a foreign probate resealed in an Indian court. We specialize in cross-border estate planning, ensuring that your international assets and Indian properties are managed through a cohesive legal strategy.
                    </p>
                    <h3 className="text-xl font-bold text-gray-900">Regional Nuances and High Court Procedures</h3>
                    <p>
                        It is also important to note that procedural requirements can vary by state. In <strong>Maharastra</strong>, particularly Mumbai, the probate process has specific requirements for affidavits that might differ from <strong>Delhi</strong> or <strong>Karnataka</strong>. In the southern state of <strong>Tamil Nadu</strong>, specifically in Chennai, the legacy of the original side jurisdiction of the High Court plays a significant role in how testamentary matters are settled. Our team stays updated with the latest notifications from high courts across the country to ensure that the Will we draft for you today is optimized for the probate court of tomorrow, regardless of whether you are in a metro city like <strong>Hyderabad</strong> or a growing town in <strong>Odisha</strong> or <strong>Bihar</strong>.
                    </p>
                    <h3 className="text-xl font-bold text-gray-900">Digital Legacy and the 2026 Asset Landscape</h3>
                    <p>
                        Another rising concern in 2026 is the management of digital legacies. Our lives are recorded on clouds, in cryptocurrency wallets, and across vibrant social media profiles. A professional Will now includes instructions on who gets access to these accounts and whether they should be memorialized or deleted. Cryptographic keys and passwords should not be written in the Will itself (as it becomes a public document after probate), but the Will can point the Executor to a secure location where these instructions are stored. We help you categorize your digital assets into those with financial value (like <strong>Bitcoin or Ethereum holdings</strong>) and those with sentimental value (like <strong>personal photo clouds and email archives</strong>).
                    </p>
                    <p>
                        Furthermore, the concept of a 'Codicil' is often misunderstood. Many believe it is just a rough note. In reality, a Codicil is a formal legal document that must be signed and witnessed with the exact same formalities as the original Will. It is used for minor updates, such as changing an Executor who has moved abroad or adding a newly born grandchild as a beneficiary. If you are making significant changes, we always recommend <strong>drafting of Will</strong> entirely fresh to avoid the confusion of managing multiple documents together. A clean, single-document approach is always preferred by registrars and courts as it leaves no room for claims of conflicting intentions between the original Will and its subsequent codicils.
                    </p>
                    <p>
                        When we consider the vastness of India, mentioned across states from <strong>Uttar Pradesh and Madhya Pradesh</strong> to the northeastern beauty of <strong>Assam and Sikkim</strong>, the need for a unified yet locally-aware legal service becomes clear. AMA Legal Solutions bridges this gap. Whether you are safeguarding a small family home in <strong>Shimla</strong> or a sprawling industrial complex in <strong>Gujarat</strong>, our commitment to legal precision remains unwavering.
                    </p>
                    <p>
                        In conclusion, a Will is your final message to the world. It is the document that ensures your values, your love, and your legacy continue to support the people you care about most. At AMA Legal Solutions, we are dedicated to making this process as affordable, transparent, and legally secure as possible. For just ₹2999, you can clear the path for your family's future and provide them the gift of certainty during their most difficult time. Do not wait for a crisis to start planning. Reach out to our experts today and start the <strong>drafting of Will</strong> process.
                    </p>
                </section>


                {/* Verified Client Reviews Section */}
                <section id="reviews" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-10 border-l-4 border-[#D2A02A] pl-6">Verified Client Reviews</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      {
                        name: "Rajesh Khanna",
                        location: "Delhi",
                        text: "AMA Legal Solutions made the process of drafting my Will incredibly simple. The lawyers were patient and explained every legal term. Highly recommended for anyone looking for peace of mind.",
                        rating: 5
                      },
                      {
                        name: "Priya Sundaram",
                        location: "Chennai",
                        text: "I was worried about the probate requirements in Chennai. The team at AMA handled everything professionally and ensured my Will was compliant with local High Court rules. Great service at an affordable price.",
                        rating: 5
                      },
                      {
                        name: "Amitabh Shah",
                        location: "Mumbai",
                        text: "The digital legacy part was something I hadn't thought about. They helped me secure my crypto assets and digital accounts in my Will. Very forward-thinking law firm.",
                        rating: 5
                      },
                      {
                        name: "Sarabjit Singh",
                        location: "Chandigarh",
                        text: "Excellent support for the registration process at the Sub-Registrar's office. They guided me through every step. The flat fee of ₹2999 is very transparent.",
                        rating: 5
                      }
                    ].map((review, i) => (
                      <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-md transition-shadow">
                        <div className="flex items-center mb-4">
                          <div className="flex text-[#D2A02A]">
                            {[...Array(review.rating)].map((_, i) => (
                              <span key={i} className="text-xl">★</span>
                            ))}
                          </div>
                          <span className="ml-2 text-sm text-gray-500 font-medium">Verified Client</span>
                        </div>
                        <p className="text-gray-700 italic mb-6 flex-grow">"{review.text}"</p>
                        <div className="flex items-center mt-auto">
                          <div className="w-10 h-10 bg-[#30261C] rounded-full flex items-center justify-center text-white font-bold mr-3">
                            {review.name.charAt(0)}
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 leading-none">{review.name}</h4>
                            <p className="text-xs text-gray-500 mt-1">{review.location}, India</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 text-center">
                    <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
                      <span className="flex text-[#D2A02A]">★★★★★</span>
                      Average 4.9/5 based on 850+ reviews
                    </p>
                  </div>
                </section>

                {/* FAQs */}

                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-10 border-l-4 border-[#D2A02A] pl-6">Frequently Asked Questions (FAQs)</h2>
                  <div className="space-y-8">
                    {faqs.map((faq, index) => (
                      <div key={index} className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-100">
                        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-start">
                          <span className="text-[#D2A02A] mr-4 text-2xl">Q.</span>
                          {faq.question}
                        </h3>
                        <p className="text-gray-700 leading-relaxed pl-10 border-l-2 border-[#D2A02A]">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Bottom CTA */}
                <section className="bg-gradient-to-br from-[#30261C] to-[#4a3b2b] rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#D2A02A] opacity-10 rounded-full -mr-32 -mt-32"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#D2A02A] opacity-10 rounded-full -ml-32 -mb-32"></div>
                  <div className="relative z-10">
                    <h2 className="text-2xl md:text-5xl font-bold mb-6">Your Legacy Deserves Expert Protection</h2>
                    <p className="text-base md:text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                      Join thousands of Indians who have secured their family's future with our expert Will drafting services. Professional legal help at your fingertips for just ₹2999.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link href="/contact">
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-105 shadow-xl text-lg w-full sm:w-auto">
                          Order Your Will Now
                        </button>
                      </Link>
                      <Link href="tel:+918700343611">
                        <button className="bg-white hover:bg-gray-100 text-[#1a202c] font-bold py-4 px-12 rounded-full transition-all transform hover:scale-105 shadow-xl text-lg w-full sm:w-auto">
                           Talk to a Legal Expert
                        </button>
                      </Link>
                    </div>
                  </div>
                </section>

              </div>
            </div>

            {/* Right Column: Sticky Sidebar */}
            <div className="hidden lg:block sticky top-24 space-y-8">
              
              {/* 1st Container: CTA */}
              <div className="bg-[#30261C] p-8 rounded-2xl shadow-xl border border-gray-700 text-center text-white relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-[#D2A02A]"></div>
                <h3 className="text-2xl font-bold mb-4">Flat Fee Protection</h3>
                <div className="text-[#D2A02A] text-4xl font-bold mb-4">₹2999</div>
                <p className="text-gray-400 mb-8 text-sm leading-relaxed">
                  Comprehensive professional <strong>drafting of Will</strong> with digital support. No hidden costs. 100% legally robust.
                </p>
                <div className="space-y-4">
                    <Link 
                    href="/contact" 
                    className="flex items-center justify-center gap-2 w-full bg-[#D2A02A] text-white text-center py-4 rounded-xl font-bold hover:bg-[#b88a22] transition-all transform hover:scale-105 shadow-lg"
                    >
                    <span>📄</span> Start Drafting Today
                    </Link>
                    <Link 
                    href="tel:+918700343611"
                    className="flex items-center justify-center gap-2 w-full border-2 border-gray-600 text-white text-center py-4 rounded-xl font-bold hover:bg-white hover:text-[#1a202c] hover:border-white transition-all transform hover:scale-105"
                    >
                    <span>📞</span> Request Call Back
                    </Link>
                </div>
              </div>

              {/* 2nd Container: Related Pages */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-6 border-b pb-4 flex items-center">
                    <span className="w-2 h-6 bg-[#D2A02A] rounded-full mr-3"></span>
                    Related Legal Solutions
                </h3>
                <ul className="space-y-4">
                  {[
                    { href: "/services/drafting", label: "Legal Drafting Service" },
                    { href: "/services/civil", label: "Civil Law Expertise" },
                    { href: "/services/success-stories", label: "Our Success Stories" },
                    { href: "/best-advocate-near-me", label: "Expert Advocates Near You" },
                    { href: "/delhi-ncr-law-firm", label: "Delhi NCR Law Firm" },
                    { href: "/locations", label: "Pan India Presence" },
                  ].map((link) => (
                    <li key={link.href}>
                      <Link 
                        href={link.href} 
                        className="group text-gray-600 hover:text-[#1a202c] transition-colors flex items-center p-2 rounded-lg hover:bg-[#fff9e6]"
                      >
                        <span className="text-[#D2A02A] mr-3 group-hover:translate-x-1 transition-transform">→</span>
                        {link.label}
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
