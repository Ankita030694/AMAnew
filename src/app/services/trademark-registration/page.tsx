import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "What is the detailed process for Trademark Objection Reply in India?",
    answer: "When your application faces a Section 9(1)(a) objection or Section 11 objection, you must file a trademark objection reply within 30 days of the examination report. This reply isn't just a formality; it requires citing specific case laws and proving distinctiveness. If you miss this deadline, your application status changes to 'Abandoned'. Our legal team drafts comprehensive replies that address the registry's concerns point-by-point to move your status to 'Accepted' or 'Advertised'."
  },
  {
    question: "How do I conduct a proper Trademark Public Search?",
    answer: "A standard search isn't enough. You need to verify brand name availability by checking specific classes (e.g., Class 35 for retail, Class 25 for clothing). You should also perform a phonetic similarity check and a Vienna code search for logos. Using the Ipindia public search tool is the first step, but interpreting the results requires legal expertise to avoid future oppositions."
  },
  {
    question: "What are the government fees for MSME trademark registration?",
    answer: "The government incentivizes small businesses. For MSMEs and Startups with a valid Udyam Registration or Startup India certificate, the government fee is ₹4,500 per class per mark. For larger entities or individuals without these certifications, the fee is ₹9,000. This 50% subsidy significantly reduces the trademark registration cost in India for small enterprises."
  },
  {
    question: "Can I get Tatkal Trademark Registration?",
    answer: "Yes, you can opt for expedited trademark processing by filing Form TM-M. This request significantly speeds up the examination process. While standard processing can take 12-18 months, expedited processing forces the registrar to issue the examination report within 30 days. This is ideal if you are facing infringement issues and need urgent legal protection."
  },
  {
    question: "How to handle a Trademark Hearing?",
    answer: "If the registrar is not satisfied with your written reply, a trademark hearing is scheduled. This is a specific date where your authorized agent or attorney must appear (physically or virtually) to argue your case. Missing a hearing leads to immediate refusal. We represent clients in hearings daily, ensuring your brand's distinctiveness is effectively communicated to the hearing officer."
  },
  {
    question: "What is the difference between Objected and Opposed trademark status?",
    answer: "These are two different stages. 'Objected' means the Trademark Registry has raised queries in the examination report (e.g., lack of distinctiveness). This is between you and the government. 'Opposed' happens after your mark is published in the journal; a third party (competitor) files an opposition claiming your mark damages their brand. Oppositions initiate a quasi-judicial trial process requiring counter-statements and evidence."
  },
  {
    question: "How much does a trademark objection reply cost?",
    answer: "The cost varies depending on the complexity of the objection. A standard reply to a clerical error is cheaper than a complex response to a Section 11 relative grounds objection involving similar marks. At AMA Legal Solutions, we provide transparent pricing for drafting and filing the TM-O reply format, ensuring you don't overpay while getting top-tier legal defense."
  },
  {
    question: "How to check if a logo is already registered?",
    answer: "Checking a logo involves a Vienna Code search on the Ipindia database. This system classifies figurative elements of marks (like animals, shapes, celestial bodies) into codes. You search these codes to find visually similar logos. This is critical because a brand name check alone won't reveal if your logo design infringes on an existing visual trademark."
  },
  {
    question: "What happens if my trademark is refused?",
    answer: "If a trademark is refused after a hearing, you can file a review petition (Form TM-M) within 30 days on limited grounds. If that fails, an appeal can be filed with the High Court (since the IPAB was abolished). A provisional refusal isn't the end; stronger evidence of user-ship and distinctiveness can often overturn the decision in appellate stages."
  },
  {
    question: "What documents are needed for filing a trademark?",
    answer: "You need the applicant's KYC (PAN, Aadhar), a clear representation of the trademark (logo/wordmark), User Affidavit (if claiming prior use with evidence like invoices), and MSME/Startup certificate for fee concession. For companies, a Board Resolution is required. Incorrect documents are a leading cause of formalities check failures."
  },
  {
    question: "Can I register a brand name for an online store globally?",
    answer: "An Indian registration only protects you within India. For global protection, you must use the Madrid Protocol system to file an international application based on your Indian application. This allows you to designate multiple countries. Each country will then examine the application according to their local laws."
  },
  {
    question: "Is Class 35 mandatory for all businesses?",
    answer: "Class 35 covers services like advertising, business management, and retail store services. Even if you sell clothing (Class 25) or electronics (Class 9), if you have a retail outlet or an e-commerce aggregation platform, registering under Class 35 is highly recommended to protect your store name and business identity."
  },
  {
    question: "What is Section 9(1)(a) objection?",
    answer: "This objection raises the issue that the mark is not capable of distinguishing the goods/services of one person from others. It usually applies to generic or non-distinctive names. Overcoming this requires proving that your mark has acquired a secondary meaning through extensive use or is inherently distinctive."
  },
  {
    question: "What is Section 11 objection?",
    answer: "This is a 'relative grounds' refusal, citing that your mark is identical or confusingly similar to an already registered trademark or pending application for similar goods. The registry acts to prevent consumer confusion. You must prove your mark is different or that there is honest concurrent use."
  },
  {
    question: "How do I reply to a Provisional Refusal?",
    answer: "A provisional refusal typically comes from international applications designating India under the Madrid Protocol. The response must be filed through an Indian trademark agent. The grounds are similar to domestic objections, and a detailed legal reply must be submitted to the Indian Registry to overcome the refusal."
  },
  {
    question: "What is Form TM-M?",
    answer: "Form TM-M is a multipurpose form used for various requests, including expedited processing, corrections of clerical errors, extension of time, and requesting the grounds of a decision. It involves specific government fees depending on the nature of the request."
  },
  {
    question: "How long is a trademark valid?",
    answer: "Once registered, a trademark is valid for 10 years from the date of filing. It can be renewed indefinitely every 10 years by paying the renewal fee. Failure to renew within the grace period results in the mark being removed from the register."
  },
  {
    question: "Can I use a brand name generator for my trademark?",
    answer: "Brand name generators are good for ideas, but they don't check for legal availability. A generated name might already be trademarks. Always follow up a generator session with a professional trademark public search to ensure the name is legally safe to use."
  },
  {
    question: "What is the penalty for using a fake ® symbol?",
    answer: "Using the ® symbol for an unregistered mark is a criminal offense under the Trade Marks Act, punishable with imprisonment or fines. You should only use the 'TM' symbol until your registration certificate is actually issued."
  },
  {
    question: "Why should I avoid 'common words' in my brand name?",
    answer: "Common words describe the quality or nature of goods (e.g., 'Best Shoes' for a shoe shop) and attract Section 9 objections. They are hard to monopolize. Invented words or arbitrary terms (like 'Kodak' or 'Apple' for computers) are the strongest trademarks and easiest to protect."
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
      "item": "https://amalegalsolutions.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://amalegalsolutions.com/services"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Trademark Registration",
      "item": "https://amalegalsolutions.com/services/trademark-registration"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Trademark Registration Services: Protect Your Brand Identity",
  "description": "Expert trademark registration, objection reply, and hearing services. Secure your brand name with India's top IP lawyers.",
  "image": "https://amalegalsolutions.com/services/4.png",
  "author": {
    "@type": "Organization",
    "name": "AMA Legal Solutions",
    "url": "https://amalegalsolutions.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "AMA Legal Solutions",
    "logo": {
      "@type": "ImageObject",
      "url": "https://amalegalsolutions.com/ama-legal-solutions-logo.png"
    }
  },
  "datePublished": "2024-01-15",
  "dateModified": "2024-01-15"
};

// FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
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
  "name": "Trademark Registration Services",
  "image": "https://amalegalsolutions.com/services/4.png",
  "description": "Comprehensive trademark services including search, filing, objection reply, and litigation.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "1540"
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
        "name": "Arjun Mehta"
      },
      "reviewBody": "We received a Section 9 objection for our startup's logo. AMA Legal Solutions drafted a brilliant reply citing relevant case laws. The objection was waived without a hearing!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Zara Qureshi"
      },
      "reviewBody": "Their trademark public search is very thorough. They identified a conflicting mark in Class 35 that we missed. Saved us from a costly rebranding later."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Rohan Das"
      },
      "reviewBody": "The hearing for our objection was handled professionally. We got our registration in 12 months."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Anjali Verma"
      },
      "reviewBody": "Best service for trademark renewal. They tracked the deadline and filed everything on time."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Vikram Singh"
      },
      "reviewBody": "Simple, transparent, and legally sound. Highly recommend for any startup."
    }
  ]
};

export const metadata = {
  title: "Trademark Registration & Objection Reply | Trademark Registration Experts",
  description:
    "Secure your brand with expert Trademark Registration services. We handle Objection Replies, Hearings, Renewals, and Oppositions. Fast, affordable, and legal.",
  keywords: [
    "trademark registration",
    "trademark objection reply",
    "brand name search",
    "logo registration",
    "trademark hearing",
    "TM-O reply format",
    "section 9 objection",
    "trademark cost india",
    "brand protection",
    "class 35 trademark",
    "fees for MSME",
    "Startup India trademark",
    "trademark classes list",
    "trademark renewal process"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/services/trademark-registration',
  },
  openGraph: {
    title: "Trademark Registration & Objection Reply | Trademark Registration Experts",
    description: "Secure your brand with expert Trademark Registration services. We handle Objection Replies, Hearings, and Oppositions.",
    url: "https://amalegalsolutions.com/services/trademark-registration",
    type: "website",
    images: [
      {
        url: "/services/4.png",
        width: 1200,
        height: 630,
        alt: "Trademark Registration Services",
      },
    ],
  },
};

export default function TrademarkRegistrationPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "trademark-classes", title: "Trademark Classes" },
    { id: "trademark-process", title: "Registration Process" },
    { id: "objection-handling", title: "Objection & Hearing" },
    { id: "search-verification", title: "Search & Verification" },
    { id: "startup-benefits", title: "Startup & MSME Benefits" },
    { id: "international-protection", title: "Global Protection" },
    { id: "cost-timeline", title: "Cost & Timeline" },
    { id: "documents-checklist", title: "Documents Checklist" },
    { id: "why-choose-us", title: "Why Choose Us" },
    { id: "client-reviews", title: "Client Reviews" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Trademark Registration", href: "/services/trademark-registration" },
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
        <div className="relative bg-[#0d1b2a] text-white">
          <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center z-0" 
            style={{ background: "linear-gradient(to right, #000000, #141e30)" }}
          ></div>
          <div className="relative z-20 container mx-auto px-4 py-24 md:py-32 text-center">
            <h1 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight mt-6 md:mt-10">
              Complete <span className="text-[#bf9848]">Trademark Registration</span> & Legal Protection
            </h1>
            <p className="text-lg md:text-2xl mb-8 md:mb-10 max-w-3xl mx-auto text-gray-300">
              From detailed public searches to winning high-stakes objection hearings. We are India's premier IP law firm dedicated to safeguarding your brand identity against infringement and copycats.
            </p>
            <Link href="/contact">
              <button className="bg-[#bf9848] hover:bg-[#9e7d3a] text-white font-bold py-3 px-8 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-base md:text-lg border border-[#bf9848]">
                Secure Your Brand Name Now
              </button>
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-[1600px] py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
            {/* Left Sidebar - TOC (Desktop) */}
            <div className="hidden lg:block sticky top-24">
              <TableOfContents sections={tocSections} orientation="vertical" />
            </div>

            {/* Main Content Area */}
            <div className="min-w-0">
              {/* TOC (Mobile) */}
              <TableOfContents sections={tocSections} className="lg:hidden mb-6 sticky top-20 md:top-16" />

              <div className="bg-white p-3 md:p-12 rounded-2xl shadow-sm space-y-6 md:space-y-12">
                
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-6">More Than Just Filing: A Strategic Shield for Your Brand</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    In the highly competitive Indian marketplace, your brand name is your most valuable asset. It represents your goodwill, your customer loyalty, and your business reputation. But simply using a name isn't enough; you must legally own it. <strong>Trademark registration</strong> is the only legal mechanism to secure exclusive rights to your brand, logo, slogan, or even sound mark. Without it, you risk losing your brand equity to unscrupulous copycats or, worse, facing legal action for using a name someone else has unknowingly registered.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    Many businesses mistakenly assume that a company registration (Incorporation) or a domain name purchase automatically protects their brand. This is a dangerous myth. Only a registration under the <strong>Trade Marks Act, 1999</strong>, grants you the statutory right to sue for infringement and stop others from trading on your goodwill. Whether you are a startup needing a preliminary <strong>brand name availability check</strong> or an established firm fighting a complex <strong>trademark status opposed</strong> situation, AMA Legal Solutions acts as your unyielding legal shield.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    We don't just fill forms. We provide strategic counsel. From conducting a rigorous <strong>phonetic similarity check</strong> on the Ipindia database to representing you in a high-stakes <strong>trademark hearing process</strong>, our team of seasoned IP attorneys ensures your brand remains unshakeable. We understand that a weak trademark is a business liability, and we work to ensure yours is an enforceable asset.
                  </p>
                </section>

                {/* Trademark Classes */}
                <section id="trademark-classes" className="scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-6">Understanding Trademark Classes: A Critical Decision</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    One of the most common reasons for trademark refusal is filing under the wrong class. The <strong>NICE Classification</strong> system divides goods and services into 45 classes (1-34 for goods, 35-45 for services). Choosing the correct class is vital for protection.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                    <div className="bg-gray-50 p-3 md:p-6 rounded-xl border border-gray-100 hover:border-[#D2A02A] transition-colors">
                      <h3 className="text-base md:text-xl font-bold text-[#D2A02A] mb-2">Class 9: Tech & Electronics</h3>
                      <p className="text-xs md:text-sm text-gray-600">
                        Software, mobile apps, computers, and electronics. Essential for tech startups and SaaS companies.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-3 md:p-6 rounded-xl border border-gray-100 hover:border-[#D2A02A] transition-colors">
                      <h3 className="text-base md:text-xl font-bold text-[#D2A02A] mb-2">Class 35: Advertising & Business</h3>
                      <p className="text-xs md:text-sm text-gray-600">
                        Business management, e-commerce, retail stores, and advertising services. The most common service class.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-3 md:p-6 rounded-xl border border-gray-100 hover:border-[#D2A02A] transition-colors">
                      <h3 className="text-base md:text-xl font-bold text-[#D2A02A] mb-2">Class 25: Clothing</h3>
                      <p className="text-xs md:text-sm text-gray-600">
                        Apparel, footwear, and headgear. A must for fashion brands and designers.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-3 md:p-6 rounded-xl border border-gray-100 hover:border-[#D2A02A] transition-colors">
                      <h3 className="text-base md:text-xl font-bold text-[#D2A02A] mb-2">Class 41: Education & Entertainment</h3>
                      <p className="text-xs md:text-sm text-gray-600">
                        Training institutes, events, content creation, and entertainment services.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-3 md:p-6 rounded-xl border border-gray-100 hover:border-[#D2A02A] transition-colors">
                      <h3 className="text-base md:text-xl font-bold text-[#D2A02A] mb-2">Class 42: Tech Services</h3>
                      <p className="text-xs md:text-sm text-gray-600">For SaaS platforms, software development services, and IT consultancy. distinct from the software product itself (Class 9).</p>
                    </div>
                    <div className="bg-gray-50 p-3 md:p-6 rounded-xl border border-gray-100 hover:border-[#D2A02A] transition-colors">
                      <h3 className="text-base md:text-xl font-bold text-[#D2A02A] mb-2">Class 5: Pharmaceuticals</h3>
                      <p className="text-xs md:text-sm text-gray-600">For medicines, supplements, and medical hygiene products. A highly litigated class requiring distinct names.</p>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-700 italic">
                    *Tip: We often recommend a multi-class filing strategy to ensure 360-degree protection. For example, a clothing brand should register in Class 25 (Apparel) AND Class 35 (Retail Store).
                  </p>
                </section>

                {/* Registration Process */}
                <section id="trademark-process" className="scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-6">The Strategic Registration Workflow</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 md:mb-8 text-gray-700">
                    Getting a trademark registered is a multi-step legal procedure. It is not an instant process. Understanding the lifecycle helps you plan your business launch effectively.
                  </p>
                  
                  <div className="space-y-8">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#bf9848] rounded-full flex items-center justify-center text-white text-2xl font-bold">1</div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Search & Classification</h3>
                        <p className="text-gray-700">
                          We begin with a deep-dive <strong>trademark public search</strong> on the Ipindia database. We don't just look for identical names; we analyze <strong>phonetic similarities</strong> (e.g., 'Caat' vs 'Cat') and verify <strong>Vienna code</strong> classifications for logos. We determine the correct classes to ensure total coverage.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#bf9848] rounded-full flex items-center justify-center text-white text-2xl font-bold">2</div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Application Filing & Usage Claim</h3>
                        <p className="text-gray-700">
                          We draft and file the application (Form TM-A). At this stage, we claim "User Date" carefully. If you have been using the mark, we submit a <strong>User Affidavit</strong> with evidence like invoices and social media posts to claim prior rights. This is crucial for overcoming future objections. Once filed, you can immediately start using the <strong>TM</strong> symbol.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#bf9848] rounded-full flex items-center justify-center text-white text-2xl font-bold">3</div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Examination & Reply</h3>
                        <p className="text-gray-700">
                          The Registrar examines the application. If they find issues, they issue an Examination Report. This is common. We draft a robust <strong>examination report reply</strong> addressing Section 9 or Section 11 objections to prevent the application from being abandoned.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#bf9848] rounded-full flex items-center justify-center text-white text-2xl font-bold">4</div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Publication & Registration</h3>
                        <p className="text-gray-700">
                          If accepted, the mark is published in the Trademark Journal. This opens a 4-month window for third-party oppositions. If no one opposes (or if we win the opposition), the Registration Certificate is issued. You can now upgrade to the prestigious <strong>®</strong> symbol.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* objection-handling */}
                <section id="objection-handling" className="scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-6">Mastering Objections and Hearings: Our Core Expertise</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    Receiving an objection is not a rejection; it is a question from the registry. However, answering it requires legal precision. A standard or template reply often leads to a hearing or refusal. We specialize in handling complex objections.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="bg-gray-50 p-6 rounded-xl border-t-4 border-red-500">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Section 9 Objection (Absolute Grounds)</h3>
                      <p className="text-gray-700 mb-4 text-sm">
                        Refusal because the mark is descriptive, generic, or lacks distinctiveness (e.g., "Best Quality Rice").
                      </p>
                      <p className="text-gray-800 font-medium mb-2">Our Strategy:</p>
                      <ul className="list-disc pl-5 space-y-2 text-gray-600 text-sm">
                        <li><strong>Proving Acquired Distinctiveness:</strong> We compile user evidence to show the mark has become distinctive through long use.</li>
                        <li><strong>Arbitrary vs Descriptive:</strong> We argue that the mark is "Arbitrary" or "Suggestive" in relation to the goods, citing case laws.</li>
                        <li>We ensure the reply is filed within 30 days to avoid abandonment.</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border-t-4 border-orange-500">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Section 11 Objection (Relative Grounds)</h3>
                      <p className="text-gray-700 mb-4 text-sm">
                        Refusal because the mark is similar to an existing mark on the register for similar goods.
                      </p>
                      <p className="text-gray-800 font-medium mb-2">Our Strategy:</p>
                      <ul className="list-disc pl-5 space-y-2 text-gray-600 text-sm">
                        <li><strong>Distinguishing Marks:</strong> We analyze the cited conflicting mark for visual, phonetic, and conceptual differences.</li>
                        <li><strong>Goods Differentiation:</strong> We argue that the goods/services are different and travel in different trade channels.</li>
                        <li><strong>Honest Concurrent Use:</strong> We prove parallel existence in the market without confusion.</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gray-900 text-white p-8 rounded-xl">
                    <h3 className="text-2xl font-bold mb-4 text-[#bf9848]">The Trademark Hearing Stage</h3>
                    <p className="mb-4">
                      If the written reply is not accepted, the Registrar schedules a <strong>Trademark Hearing</strong>. This is the "Troubleshooter" phase where expert advocacy is non-negotiable.
                    </p>
                    <p>
                       Our attorneys appear before the tribunal (physically or virtually) to present oral arguments. We bring case law binders, evidence affidavits, and persuasive legal logic to the table. We have a high success rate in converting hearing matters into "Accepted" or "Advertised" status by effectively distinguishing your mark from citations.
                    </p>
                  </div>
                </section>

                {/* Search & Verify */}
                <section id="search-verification" className="scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-6">Search & Verify: The Foundation of IP Strategy</h2>
                  <div className="bg-blue-50 p-4 md:p-8 rounded-xl border border-blue-100 mb-4 md:mb-8">
                    <h3 className="text-lg md:text-2xl font-bold text-blue-900 mb-3 md:mb-4">Why the "Ipindia" Check Matters</h3>
                    <p className="text-blue-800 leading-relaxed mb-4">
                      The Comptroller General of Patents, Designs, and Trade Marks maintains the public records. Searching this correctly is an art. Users often search only for the exact name, find zero results, and file the application - only to be rejected later because a phonetically similar name existed.
                    </p>
                    <p className="text-blue-800 leading-relaxed">
                      For example, if you want to register <strong>"KwikFix"</strong>, searching for that exact string shows nothing. But a professional search would uncover <strong>"QuickFix"</strong>, <strong>"Qwik-Fix"</strong>, or <strong>"QuikFix"</strong>, all of which would block your application. We perform this rigorous filtering using specialized tools and manual checking before you spend a single rupee on government fees.
                    </p>
                  </div>
                </section>

                {/* Startup Benefits */}
                <section id="startup-benefits" className="scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-6">Startup India & MSME Benefits</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    The Government of India is aggressively promoting entrepreneurship. If you are a registered MSME (Udyam Registration) or a DIPP-recognized Startup, you are eligible for significant benefits in trademark filing.
                  </p>
                   <div className="flex flex-col md:flex-row gap-6 mb-6">
                      <div className="flex-1 bg-green-50 p-6 rounded-xl border border-green-100">
                        <div className="text-4xl mb-2">💰</div>
                        <h3 className="text-xl font-bold text-green-800 mb-2">50% Fee Rebate</h3>
                        <p className="text-gray-700">
                          Government fees are slash from ₹9,000 to <strong>₹4,500</strong> per class. This makes protecting your IP affordable from Day 1.
                        </p>
                      </div>
                      <div className="flex-1 bg-green-50 p-6 rounded-xl border border-green-100">
                        <div className="text-4xl mb-2">⚡</div>
                        <h3 className="text-xl font-bold text-green-800 mb-2">Expedited Processing</h3>
                        <p className="text-gray-700">
                          Startups can file for expedited examination (Form TM-M) to get faster responses, crucial for securing investor confidence.
                        </p>
                      </div>
                   </div>
                   <p className="text-gray-700">
                     We assist you in obtaining the necessary MSME or Startup India certificates to ensure you can claim these rebates legally.
                   </p>
                </section>

                {/* International Protection */}
                <section id="international-protection" className="scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-6">Going Global: The Madrid Protocol</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    A trademark registered in India provides protection only within Indian territory. If you plan to export goods or offer services globally, you need international protection. Thanks to India's accession to the <strong>Madrid Protocol</strong>, this is now easier than ever.
                  </p>
                  <ul className="space-y-4 mb-6">
                    <li className="flex items-start">
                      <span className="text-[#bf9848] font-bold text-xl mr-3">•</span>
                      <p className="text-gray-700"><strong>Single Application:</strong> You can file one international application through the Indian Trade Mark Registry to target multiple member countries (like USA, UK, EU, China, etc.).</p>
                    </li>
                     <li className="flex items-start">
                      <span className="text-[#bf9848] font-bold text-xl mr-3">•</span>
                      <p className="text-gray-700"><strong>Cost Effective:</strong> It is significantly cheaper than filing separate applications in each country with different lawyers.</p>
                    </li>
                     <li className="flex items-start">
                      <span className="text-[#bf9848] font-bold text-xl mr-3">•</span>
                      <p className="text-gray-700"><strong>Centralized Management:</strong> You can renew and manage your global portfolio through a single window.</p>
                    </li>
                  </ul>
                  <p className="text-gray-700">
                    Our team specializes in filing international applications and handling "Provisional Refusals" from foreign trademark offices.
                  </p>
                </section>

                {/* Cost & Timeline */}
                <section id="cost-timeline" className="scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-6">Timelines and Cost Structure</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    Transparency in billing and expectations is our hallmark. Here is what you need to know about the investment and time required.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4 md:gap-8">
                    <div className="bg-white border border-gray-200 rounded-xl p-4 md:p-6 shadow-sm">
                      <h3 className="text-base md:text-xl font-bold text-gray-900 mb-3 md:mb-4 border-b pb-2">Government Fees</h3>
                      <ul className="space-y-3 md:space-y-4 text-xs md:text-base text-gray-700">
                        <li className="flex justify-between items-center">
                          <span>Individual / Startup / MSME</span>
                          <span className="font-bold  text-[#D2A02A]">₹4,500</span>
                        </li>
                        <li className="flex justify-between items-center">
                          <span>Company / LLP (Without MSME)</span>
                          <span className="font-bold text-[#D2A02A]">₹9,000</span>
                        </li>
                        <li className="flex justify-between items-center text-gray-500 text-[10px] md:text-sm mt-2 pt-2 border-t">
                          *Fees are per class per mark
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-white border border-gray-200 rounded-xl p-4 md:p-6 shadow-sm">
                      <h3 className="text-base md:text-xl font-bold text-gray-900 mb-3 md:mb-4 border-b pb-2">Estimated Timeline</h3>
                      <ul className="space-y-3 md:space-y-4 text-xs md:text-base text-gray-700">
                        <li className="flex items-start">
                          <div className="min-w-[4px] h-[4px] mt-1.5 rounded-full bg-green-500 mr-2"></div>
                          <span><strong>24 Hours:</strong> Application Filing & TM Receipt</span>
                        </li>
                        <li className="flex items-start">
                          <div className="min-w-[4px] h-[4px] mt-1.5 rounded-full bg-green-500 mr-2"></div>
                          <span><strong>1-3 Months:</strong> Examination Report Issued</span>
                        </li>
                        <li className="flex items-start">
                          <div className="min-w-[4px] h-[4px] mt-1.5 rounded-full bg-green-500 mr-2"></div>
                          <span><strong>4 Months:</strong> Opposition Period</span>
                        </li>
                        <li className="flex items-start">
                          <div className="min-w-[4px] h-[4px] mt-1.5 rounded-full bg-green-500 mr-2"></div>
                          <span><strong>6-18 Months:</strong> Final Registration Certificate</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Documents Checklist */}
                <section id="documents-checklist" className="scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-6">Documents Required for Filing</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    Preparing the right documents ensures your application doesn't get stalled in the "Formalities Check Fail" stage.
                  </p>
                  <ul className="grid md:grid-cols-2 gap-4">
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg border border-gray-100">
                      <span className="text-[#bf9848] mr-3 font-bold">✓</span> Applicant Details (Name/Address/Nationality)
                    </li>
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg border border-gray-100">
                      <span className="text-[#bf9848] mr-3 font-bold">✓</span> Brand Name / Logo Image (JPEG)
                    </li>
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg border border-gray-100">
                      <span className="text-[#bf9848] mr-3 font-bold">✓</span> Goods & Services Description
                    </li>
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg border border-gray-100">
                      <span className="text-[#bf9848] mr-3 font-bold">✓</span> Date of First Use (if applicable)
                    </li>
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg border border-gray-100">
                      <span className="text-[#bf9848] mr-3 font-bold">✓</span> Power of Attorney (Form TM-48)
                    </li>
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg border border-gray-100">
                      <span className="text-[#bf9848] mr-3 font-bold">✓</span> MSME / Startup India Certificate (for discount)
                    </li>
                  </ul>
                </section>

                {/* Why Choose Us */}
                <section id="why-choose-us" className="scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-6">Why Trust AMA Legal Solutions?</h2>
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fffcf5] transition-colors border border-gray-100">
                      <div className="text-4xl mb-4">🔍</div>
                      <h3 className="font-bold text-xl mb-2">Comprehensive Search</h3>
                      <p className="text-gray-600 text-sm">We don't rely on automation. Our attorneys categorize and search manually to ensure zero conflicts.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fffcf5] transition-colors border border-gray-100">
                      <div className="text-4xl mb-4">⚖️</div>
                      <h3 className="font-bold text-xl mb-2">Litigation Ready</h3>
                      <p className="text-gray-600 text-sm">Unlike filing agents, we are lawyers. We represent you in tribunals, District Courts, and High Courts.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fffcf5] transition-colors border border-gray-100">
                      <div className="text-4xl mb-4">🚀</div>
                      <h3 className="font-bold text-xl mb-2">End-to-End Support</h3>
                      <p className="text-gray-600 text-sm">From the first search to the final renewal after 10 years, we manage your entire IP portfolio.</p>
                    </div>
                  </div>
                </section>

                {/* Client Reviews */}
                <section id="client-reviews" className="scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-8">Client Success Stories</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {reviewSchema.review.map((review, index) => (
                      <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-100 relative">
                        <FaQuoteLeft className="text-4xl text-[#bf9848] opacity-20 absolute top-4 left-4" />
                        <div className="flex items-center mb-4 relative z-10">
                          <div className="flex text-[#bf9848] text-sm">
                            {[...Array(5)].map((_, i) => (
                              <FaStar key={i} />
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-700 italic mb-4 relative z-10">"{review.reviewBody}"</p>
                        <div className="font-bold text-gray-900 flex items-center">
                          <div className="w-8 h-8 bg-[#0d1b2a] rounded-full flex items-center justify-center text-white text-xs mr-3">
                            {review.author.name.charAt(0)}
                          </div>
                          {review.author.name}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* FAQs */}
                <section id="faqs" className="scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-8">Common Questions About Trademarks</h2>
                  <div className="space-y-6">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                          <span className="text-[#bf9848] mr-3">Q.</span>
                          {faq.question}
                        </h3>
                        <p className="text-gray-700 leading-relaxed pl-8">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Final CTA */}
                <section className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] rounded-xl md:rounded-3xl p-6 md:p-16 text-center text-white relative overflow-hidden">
                  <div className="relative z-10">
                    <h2 className="text-xl md:text-5xl font-bold mb-3 md:mb-6">Protect Your Intellectual Property Today</h2>
                    <p className="text-sm md:text-xl opacity-90 mb-6 md:mb-10 max-w-2xl mx-auto">
                      Don't leave your brand vulnerable. Secure your rights with India's most trusted IP legal experts.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                      <Link href="/contact">
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg w-full sm:w-auto">
                          Get Free Consultation
                        </button>
                      </Link>
                      <a href="tel:+918700343611">
                        <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-6 md:py-4 md:px-12 rounded-full transition-all text-sm md:text-lg w-full sm:w-auto">
                          Call: +91-8700343611
                        </button>
                      </a>
                    </div>
                    <p className="mt-4 md:mt-8 text-xs md:text-base opacity-70">
                      Confidential • Professional • Efficient
                    </p>
                  </div>
                </section>

              </div>
            </div>

            {/* Right Sidebar */}
            <div className="hidden lg:block space-y-8 sticky top-24">
              {/* Contact Card */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Protect Your Brand</h3>
                <p className="text-gray-600 mb-6 text-sm">
                  Speak to an IP Attorney today. Check availability and file instantly.
                </p>
                <a 
                  href="tel:+918700343611" 
                  className="block w-full bg-[#bf9848] text-white text-center py-3 rounded-lg font-semibold hover:bg-[#9e7d3a] transition-colors mb-4"
                >
                  Call +91-8700343611
                </a>
                <Link 
                  href="/contact" 
                  className="block w-full border border-[#bf9848] text-[#bf9848] text-center py-3 rounded-lg font-semibold hover:bg-[#bf9848] hover:text-white transition-colors"
                >
                  Get Legal Advice
                </Link>
              </div>

              {/* Quick Links */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4">IP Services</h3>
                <ul className="space-y-3 text-sm">
                   <li>
                    <Link href="/services/banking-and-finance" className="text-gray-600 hover:text-[#bf9848] flex items-center">
                      <span className="mr-2">›</span> Banking & Finance
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/civil" className="text-gray-600 hover:text-[#bf9848] flex items-center">
                      <span className="mr-2">›</span> Civil Litigation
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/corporate" className="text-gray-600 hover:text-[#bf9848] flex items-center">
                      <span className="mr-2">›</span> Corporate Law
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/cyber" className="text-gray-600 hover:text-[#bf9848] flex items-center">
                      <span className="mr-2">›</span> Cyber Crime
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/real-estate" className="text-gray-600 hover:text-[#bf9848] flex items-center">
                      <span className="mr-2">›</span> Real Estate
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/arbitration" className="text-gray-600 hover:text-[#bf9848] flex items-center">
                      <span className="mr-2">›</span> Arbitration
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
