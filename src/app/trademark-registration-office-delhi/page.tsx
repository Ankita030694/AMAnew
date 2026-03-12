
import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "Where is the Trademark Registration Office in Delhi located?",
    answer: "The official Trademark Registry Office for Delhi is located at Plot No. 32, Judicial Academy Rd, Pocket 1, Sector 14, Dwarka, New Delhi – 110078, India. This office handles all trademark applications, examinations, and hearings for applicants based in Delhi, Haryana, Punjab, Himachal Pradesh, Jammu and Kashmir, Ladakh, and Chandigarh."
  },
  {
    question: "What is the official procedure for trademark registration in Delhi?",
    answer: "The procedure involves several steps: 1) A comprehensive trademark search to ensure uniqueness. 2) Filing the Form TM-A online via the IP India portal. 3) Examination by the registry where they check for absolute and relative grounds of refusal. 4) Responding to any objections raised in the examination report. 5) Publication in the Trademark Journal for a 4-month opposition period. 6) Issuance of the registration certificate if no oppositions are filed or sustained."
  },
  {
    question: "How much are the government fees for trademark registration in Delhi?",
    answer: "For individuals, startups, and MSMEs, the official e-filing fee is ₹4,500 per class. For other entities like companies and LLPs, the fee is ₹9,000 per class. Physical filing is more expensive, costing ₹5,000 and ₹10,000 respectively. Having an MSME certificate is highly recommended to save on costs."
  },
  {
    question: "How long does it take to get a trademark registered in Delhi?",
    answer: "Typically, it takes 6 to 12 months for a straightforward application to reach registration. However, if the registry raises objections or if a third party files an opposition, the process can extend to 18 to 24 months. Professional handling can prevent unnecessary delays."
  },
  {
    question: "Can I use the ™ symbol immediately after filing in Delhi?",
    answer: "Yes, you can start using the ™ symbol right after you receive the filing receipt (Form TM-A) from the Trademark Registry. The ® symbol can only be used once the registration certificate is officially issued. Unauthorized use of the registered symbol is a punishable offense."
  },
  {
    question: "What documents are required for trademark registration for a Delhi-based business?",
    answer: "The essential documents include: 1) The trademark logo or name (high resolution). 2) Identity and address proof of the applicant (Aadhar, PAN). 3) Business registration proof (MSME certificate, Incorporation certificate). 4) A Power of Attorney (Form TM-48) signed by the applicant."
  },
  {
    question: "What happens if my trademark application is objected to by the Delhi registrar?",
    answer: "If an objection is raised, you will receive an Examination Report. You must file a formal written response within 30 days explaining why your mark is distinctive and why the objections (usually under Section 9 or 11) should be waived. If the registrar is not satisfied, a show-cause hearing in Dwarka will be scheduled."
  },
  {
    question: "Is MSME registration mandatory for trademark registration in Delhi?",
    answer: "No, it is not mandatory. However, having an MSME or Udyam certificate allows you to claim a 50% discount on the government filing fees, reducing it from ₹9,000 to ₹4,500. This is a significant benefit for small businesses and startups."
  },
  {
    question: "Who can oppose a trademark published in the journal?",
    answer: "Any person can file an opposition within four months from the date of publication in the Trademark Journal. This is usually done by owners of existing similar marks or parties who believe the mark is descriptive, non-distinctive, or filed in bad faith."
  },
  {
    question: "What is the validity of a trademark registered through the Delhi office?",
    answer: "A registered trademark is valid for 10 years from the date of application. It can be renewed indefinitely every 10 years by paying the renewal fees within the prescribed time limit. Failure to renew can lead to the removal of the mark from the register."
  },
  {
    question: "Can I register a trademark for my YouTube channel in Delhi?",
    answer: "Yes, you can register a trademark for your YouTube channel name, logo, or catchphrase. This falls under the jurisdiction of the Delhi registry if you are based in the northern states. It is protective against impersonation and content theft."
  },
  {
    question: "What is the difference between a Word Mark and a Device Mark?",
    answer: "A Word Mark protects the text itself in any font or style, providing broad protection. A Device Mark protects the specific logo, design, or stylized font you have submitted. Registering both or a combination is often the best strategy for comprehensive brand protection."
  },
  {
    question: "Can I change my trademark after it is filed in Delhi?",
    answer: "Major changes to the trademark logo or name are not allowed once filed. Only minor clerical changes can be made through a request for amendment. If you want to change the core identity, you must file a fresh application."
  },
  {
    question: "What is a 'proposed to be used' trademark?",
    answer: "This is a reservation for a brand name you intend to use in the future but haven't started using yet. You don't need to provide 'user evidence' at the time of filing, but you will need to prove usage later if challenged. It's ideal for upcoming launches."
  },
  {
    question: "Will the trademark office call me directly?",
    answer: "The Trademark Registry usually communicates through your registered attorney or via official emails/notices on the IP India portal. Be wary of scam calls asking for 'urgent payments' - always verify through your legal representative."
  },
  {
    question: "Can I settle a trademark dispute out of court in Delhi?",
    answer: "Yes, many trademark infringement cases in Delhi are settled through mediation or private negotiations (settlement agreements). This is often faster and less expensive than a full-scale trial in the High Court."
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
      "name": "Services",
      "item": "https://www.amalegalsolutions.com/services"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Trademark Registration Office Delhi",
      "item": "https://www.amalegalsolutions.com/trademark-registration-office-delhi"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Trademark Registration Office Delhi: Comprehensive Guide to Dwarka Registry (2025)",
  "description": "Exclusive guide on trademark registration in Delhi. Learn about the Dwarka Registry office, filing procedures, fees, and legal requirements with expert legal assistance from AMA Legal Solutions.",
  "image": "https://www.amalegalsolutions.com/services/trademark-registration.png",
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
  "datePublished": "2024-02-10",
  "dateModified": "2025-02-10"
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
  "name": "Trademark Registration Services Delhi",
  "image": "https://www.amalegalsolutions.com/services/trademark-registration.png",
  "description": "Top-rated trademark registration and IPR consultancy services in Delhi NCR.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "2150"
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
        "name": "Siddharth Verma"
      },
      "reviewBody": "Extremely smooth process. They handled our complex trademark objection at the Dwarka office with high professionalism. Highly recommended for startups."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Ananya Gupta"
      },
      "reviewBody": "The team at AMA Legal Solutions is very knowledgeable about the Delhi registry. They helped me secure my brand name within months."
    }
  ]
};

export const metadata = {
  title: "Trademark Registration Office Delhi | Expert Brand Protection",
  description:
    "Looking for the Trademark Registration Office in Delhi? Secure your brand at the Dwarka Registry. Expert guide on fees, documents, and procedure for registration in 2025.",
  keywords: [
    "trademark registration office delhi",
    "trademark registry dwarka",
    "trademark office new delhi",
    "tm-a filing delhi",
    "trademark search delhi",
    "brand registration delhi",
    "ip india delhi address",
    "trademark objection lawyer delhi",
    "trademark registration consultants delhi",
    "msme trademark registration delhi",
    "trademark hearing dwarka",
    "trademark opposition delhi"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/trademark-registration-office-delhi',
  },
  openGraph: {
    title: "Trademark Registration Office Delhi | Expert Brand Protection",
    description: "Secure your brand at the New Delhi Trademark Office. Learn the complete filing process, fees, and legal steps in our comprehensive guide.",
    url: "https://www.amalegalsolutions.com/trademark-registration-office-delhi",
    type: "website",
    images: [
      {
        url: "/services/trademark-registration.png",
        width: 1200,
        height: 630,
        alt: "Trademark Registration Office Delhi",
      },
    ],
  },
};

export default function TrademarkDelhiPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "office-details", title: "Office Location & Jurisdiction" },
    { id: "why-register", title: "Why Trademark Protection Matters" },
    { id: "procedure", title: "Comprehensive Filing Procedure" },
    { id: "classification", title: "Classification Deep Dive" },
    { id: "fees", title: "Official Fee Structure" },
    { id: "documents", title: "Checklist of Documents" },
    { id: "objections", title: "Handling Registry Objections" },
    { id: "international", title: "Global Brand Protection" },
    { id: "why-choose-us", title: "Why Choose AMA Legal?" },
    { id: "testimonials", title: "Success Stories" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "IPR", href: "/services/intellectual-property-rights" },
    { label: "Trademark Registration Office Delhi", href: "/trademark-registration-office-delhi" },
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
        {/* Hero Section - Matching Loan Settlement Style */}
        <div className="relative bg-[#1a202c] text-white">
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center z-0" 
            style={{ backgroundImage: "url('/services/trademark-registration.png')", backgroundSize: 'cover', backgroundPosition: 'center', filter: 'blur(5px) brightness(0.4)' }}
          ></div>
          <div className="relative z-20 container mx-auto px-4 py-8 md:py-20 text-center">
            <div className="flex items-center justify-center gap-2 mb-4 bg-white/10 backdrop-blur-sm w-fit mx-auto px-4 py-1.5 rounded-full border border-white/20">
              <div className="flex text-[#D2A02A] text-sm">★★★★★</div>
              <span className="text-xs font-bold tracking-widest uppercase text-white/90">4.9/5 Rating (2,150+ Reviews)</span>
            </div>
            <h1 className="text-lg md:text-4xl font-bold mb-2 md:mb-4 leading-tight mt-8">
               Secure Your Brand Identity with <span className="text-[#D2A02A]">Trademark Registration Office Delhi</span>
            </h1>
            <p className="text-[10px] md:text-lg mb-4 md:mb-6 max-w-3xl mx-auto text-gray-200">
              Expert legal guidance for brand protection at the Dwarka Registry. From comprehensive searches to handling complex objections, ensure your intellectual property is legally bulletproof.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-1.5 px-4 md:py-2.5 md:px-7 rounded-full transition-all transform hover:scale-105 shadow-lg text-[10px] md:text-sm">
                Consult a Trademark Lawyer
              </button>
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-7xl py-5">
          <Breadcrumbs items={breadcrumbItems} />
          
          {/* Mobile Download Links */}
          <div className="lg:hidden flex flex-col gap-3 mb-6 mt-2">
            <p className="text-sm font-semibold mb-2" style={{ color: 'rgba(210, 158, 13, 0.8)' }}>Track Your Application on our App</p>
            <div className="flex gap-4">
              <Link href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions" target="_blank" className="hover:opacity-80 transition-opacity">
                <Image src="/newAssets/appstore.svg" alt="Google Play" width={130} height={36} className="w-[120px] h-auto" />
              </Link>
              <Link href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186" target="_blank" className="hover:opacity-80 transition-opacity">
                <Image src="/newAssets/playstore.svg" alt="App Store" width={130} height={36} className="w-[120px] h-auto" />
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr_250px] gap-5 items-start">
            {/* Left Sidebar - TOC (Desktop) */}
            <div className="hidden lg:block sticky top-24">
              <TableOfContents sections={tocSections} orientation="vertical" />
            </div>

            {/* Main Content Area */}
            <div className="min-w-0 font-light">
              {/* TOC (Mobile) */}
              <div className="lg:hidden mb-6 sticky top-20 z-10">
                <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-2 md:p-10 rounded-2xl shadow-sm space-y-5 md:space-y-10 content-article [&_p]:text-gray-600 [&_p]:leading-relaxed [&_p]:font-light [&_h2]:text-gray-900 [&_h2]:font-extrabold [&_h3]:text-gray-900 [&_h3]:font-extrabold [&_h4]:text-gray-900 [&_h4]:font-extrabold [&_strong]:text-gray-900 [&_strong]:font-semibold">
                
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-3 md:mb-5 uppercase">The Gateway to Brand Protection in Northern India</h2>
                  <p className="text-xs md:text-base leading-relaxed mb-2 md:mb-5 text-gray-700">
                    In the competitive marketplace of Delhi NCR, your brand is you most precious asset. It is not merely a logo or a name; it is the culmination of your hard work, reputation, and the trust your customers place in your business. However, without formal legal protection, this asset is vulnerable to infringement, dilution, and flat-out theft. The <strong>Trademark Registration Office Delhi</strong>, located in the modern sub-city of Dwarka, serves as the primary regulatory body for ensuring that your brand remains exclusively yours.
                  </p>
                  <p className="text-xs md:text-base leading-relaxed mb-2 md:mb-5 text-gray-700">
                    Operating under the administrative control of the Controller General of Patents, Designs, and Trademarks (CGPDTM), the Delhi Registry is a high-volume office that processes thousands of intellectual property applications every month. Navigating this bureaucratic landscape requires more than just filling out a form. It requires a strategic understanding of the Trademarks Act, 1999, the latest judicial precedents from the Delhi High Court, and the procedural nuances of the registry itself.
                  </p>
                  <p className="text-xs md:text-base leading-relaxed text-gray-700">
                    At AMA Legal Solutions, we act as your strategic partner in this journey. We provide end-to-end legal support, ensuring that your application is not just filed, but successfully granted. Whether you are a startup in South Delhi, a manufacturer in Okhla, or an e-commerce giant in Gurugram, understanding the operations of the <strong>Trademark Office New Delhi</strong> is essential for your long-term success.
                  </p>
                  <p className="text-xs md:text-base leading-relaxed text-gray-700 mt-3 font-normal">
                    The registration process is often misconstrued as a simple administrative task. In reality, it is a complex legal procedure that involves multiple rounds of scrutiny. A single error in the application - whether it's a wrong classification of goods or an improperly drafted user affidavit - can lead to years of legal battle or, worse, the rejection of your mark. This is why having an expert IPR attorney by your side is not just a luxury, but a necessity for any serious business owner in the capital region.
                  </p>
                </section>

                {/* Office Details */}
                <section id="office-details" className="scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">The Dwarka Landmark: Address and Jurisdiction</h2>
                   <div className="bg-blue-50 border-l-4 border-blue-500 p-4 md:p-6 mb-4 md:mb-8 rounded-r-lg">
                    <p className="text-sm md:text-lg text-blue-900">
                      <strong>Official Address:</strong> Plot No. 32, Judicial Academy Rd, Pocket 1, Sector 14, Dwarka, New Delhi – 110078.
                    </p>
                  </div>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    The move of the Trademark Office to Dwarka has centralized IPR activities in a modern, technology-enabled environment. This office handles all trademark matters originating from the following territories:
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {["Delhi", "Haryana", "Punjab", "Himachal Pradesh", "Jammu & Kashmir", "Ladakh", "Chandigarh"].map((state, i) => (
                      <div key={i} className="bg-gray-50 p-3 rounded-lg text-center border border-gray-100 text-sm font-semibold">{state}</div>
                    ))}
                  </div>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    If your principal place of business is located in any of these states, your application must be filed with the Delhi Registry. However, with the advent of the <strong>IP India E-filing portal</strong>, physical visits to the office are rarely required for filing. They are primarily necessary for show-cause hearings, opposition proceedings, and rectification matters that involve physical evidence.
                  </p>
                </section>

                {/* Why Register? */}
                <section id="why-register" className="scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">The Strategic Value of Brand Security</h2>
                   <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    Why do global giants like Apple, Google, and Reliance spend millions on protecting their marks? Because a trademark is an intangible asset that appreciates in value as your business grows. Here's why you should prioritize registration at the <strong>Trademark Office Delhi</strong>:
                   </p>
                   <div className="space-y-6">
                      <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                        <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">1. Nationwide Exclusive Rights</h4>
                        <p className="text-gray-700 text-sm md:text-base">A registered trademark grants you the exclusive right to use the mark across all 28 states and 8 union territories of India. It acts as a powerful deterrent against anyone trying to capitalize on your brand's goodwill.</p>
                      </div>
                      <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                        <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">2. The Power of the ® Symbol</h4>
                        <p className="text-gray-700 text-sm md:text-base">The ® symbol is a mark of authenticity and trust. It signals to your competitors and customers that your brand is legally protected and that you are serious about your intellectual property rights.</p>
                      </div>
                      <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                        <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">3. Protection against Infringement</h4>
                        <p className="text-gray-700 text-sm md:text-base">In the unfortunate event of a legal dispute, a registration certificate is prima facie evidence of ownership. This significantly simplifies the litigation process in the Delhi High Court, allowing you to seek injunctions and damages more effectively.</p>
                      </div>
                      <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                        <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">4. Licensing and Franchising</h4>
                        <p className="text-gray-700 text-sm md:text-base">A registered trademark can be licensed or franchised to other business entities. This opens up new revenue streams and allows your brand to scale rapidly with minimal capital investment.</p>
                      </div>
                   </div>
                </section>

                {/* Registration Procedure */}
                <section id="procedure" className="scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">The Journey from Concept to Copyright: A Step-by-Step Guide</h2>
                   <p className="text-sm md:text-lg leading-relaxed mb-8 text-gray-700">
                    The registration process at the <strong>Trademark Registry Office Delhi</strong> is structured into several critical phases. Understanding these phases is key to managing your expectations and ensuring a successful outcome.
                   </p>
                   
                   <div className="space-y-10 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
                      
                      {/* Step 1 */}
                      <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-gray-300 group-[.is-active]:bg-[#D2A02A] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 mt-1">
                          <span className="font-bold">1</span>
                        </div>
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl border border-gray-200 bg-white shadow-sm mt-1">
                          <h4 className="font-bold text-gray-900 text-lg mb-2 uppercase tracking-wide">Exhaustive Trademark Search</h4>
                          <p className="text-gray-600 text-sm leading-relaxed">Before filing, we conduct a "Public Search" on the IP India database. We check for phonetic, visual, and conceptual similarities. This isn't just about finding direct matches; it's about predicting potential registry objections and opposition risks.</p>
                        </div>
                      </div>

                      {/* Step 2 */}
                      <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-gray-300 group-[.is-active]:bg-[#D2A02A] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 mt-1">
                          <span className="font-bold">2</span>
                        </div>
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl border border-gray-200 bg-white shadow-sm mt-1">
                          <h4 className="font-bold text-gray-900 text-lg mb-2 uppercase tracking-wide">Filing the Form TM-A</h4>
                          <p className="text-gray-600 text-sm leading-relaxed">The application is submitted electronically. We choose the appropriate class (NICE classification), draft the description of goods or services meticulously, and file the 'User Affidavit' if the mark has been in use prior to the application date. You receive an application number instantly.</p>
                        </div>
                      </div>

                      {/* Step 3 */}
                      <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-gray-300 group-[.is-active]:bg-[#D2A02A] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 mt-1">
                          <span className="font-bold">3</span>
                        </div>
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl border border-gray-200 bg-white shadow-sm mt-1">
                          <h4 className="font-bold text-gray-900 text-lg mb-2 uppercase tracking-wide">Formalities Check & Examination</h4>
                          <p className="text-gray-600 text-sm leading-relaxed">The Dwarka Registry performs a "Formalities Check". If everything is in order, the application moves to the "Marked for Exam" stage. A Trademark Examiner reviews the application under Section 9 (Absolute Grounds) and Section 11 (Relative Grounds) of the Act.</p>
                        </div>
                      </div>

                      {/* Step 4 */}
                      <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-gray-300 group-[.is-active]:bg-[#D2A02A] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 mt-1">
                          <span className="font-bold">4</span>
                        </div>
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl border border-gray-200 bg-white shadow-sm mt-1">
                          <h4 className="font-bold text-gray-900 text-lg mb-2 uppercase tracking-wide">Publication & Registration</h4>
                          <p className="text-gray-600 text-sm leading-relaxed">If the examiner is satisfied (or after we win the show-cause hearing), the mark is advertised in the Trademark Journal. This starts a 4-month opposition period. If no valid opposition is filed, the digital Registration Certificate is issued officially.</p>
                        </div>
                      </div>

                   </div>
                </section>

                {/* Classification */}
                <section id="classification" className="scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">The NICE Classification: Strategic Class Selection</h2>
                   <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    Registration is not global across all products; it is specific to Categories of Goods and Services. The <strong>NICE Classification</strong> divides products into 45 distinct classes. Choosing the right class is the most strategic part of filing.
                   </p>
                   <div className="grid md:grid-cols-2 gap-6">
                      <div className="p-6 bg-yellow-50 rounded-2xl border border-yellow-100 italic">
                        <h4 className="font-bold mb-2">Wait! Don't over-file.</h4>
                        <p className="text-sm">While it's tempting to file in many classes, it increases government fees and the probability of a "Similarity" objection under Section 11. We help you choose the Classes that offer maximum protection with minimum legal risk.</p>
                      </div>
                      <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
                        <h4 className="font-bold mb-2">Most Common Classes in Delhi:</h4>
                        <ul className="text-xs space-y-1 list-disc pl-4">
                          <li><strong>Class 35:</strong> Advertising, Business Management (Service Centers)</li>
                          <li><strong>Class 25:</strong> Clothing, Footwear (Fashion Brands)</li>
                          <li><strong>Class 5:</strong> Pharmaceuticals (Major for Northern India)</li>
                          <li><strong>Class 42:</strong> IT, Software development, SaaS (Tech Startups)</li>
                        </ul>
                      </div>
                   </div>
                </section>

                {/* Fees */}
                <section id="fees" className="scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6">Transparent Fee Structure (Updated 2024-25)</h2>
                   <div className="overflow-x-auto rounded-3xl border border-gray-200 shadow-md">
                    <table className="min-w-full bg-white">
                      <thead className="bg-[#0f172a] text-white uppercase text-xs">
                        <tr>
                          <th className="py-4 px-6 text-left">Category of Applicant</th>
                          <th className="py-4 px-6 text-center">Form TM-A (E-Filing)</th>
                          <th className="py-4 px-6 text-center">Physical Filing</th>
                        </tr>
                      </thead>
                      <tbody className="text-sm">
                        <tr className="border-b hover:bg-gray-50 transition-colors">
                          <td className="py-4 px-6 font-medium">Individual / Start-up / Small Enterprise (MSME)</td>
                          <td className="py-4 px-6 text-center font-bold text-[#D2A02A]">₹ 4,500 <span className="text-[10px] text-gray-400 font-normal">/class</span></td>
                          <td className="py-4 px-6 text-center text-gray-400">₹ 5,000</td>
                        </tr>
                        <tr className="border-b hover:bg-gray-50 transition-colors">
                          <td className="py-4 px-6 font-medium">Others (Companies, LLPs, Trusts, Partnerships)</td>
                          <td className="py-4 px-6 text-center font-bold text-[#D2A02A]">₹ 9,000 <span className="text-[10px] text-gray-400 font-normal">/class</span></td>
                          <td className="py-4 px-6 text-center text-gray-400">₹ 10,000</td>
                        </tr>
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="py-4 px-6 font-medium">Renewal of Registered Trademark</td>
                          <td className="py-4 px-6 text-center font-bold text-[#D2A02A]">₹ 9,000 <span className="text-[10px] text-gray-400 font-normal">/10 years</span></td>
                          <td className="py-4 px-6 text-center text-gray-400">₹ 10,000</td>
                        </tr>
                      </tbody>
                    </table>
                   </div>
                   <p className="text-xs text-gray-500 mt-3 italic text-center">Note: Having a valid Udyam Registration (MSME) is the most efficient way to reduce your government costs by 50%.</p>
                </section>

                {/* Documents */}
                <section id="documents" className="scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">The Compliance Checklist: Documents You Need</h2>
                   <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    To maintain a high success rate at the <strong>Trademark Registry Dwarka</strong>, we require high-quality scans of the following. Improper documentation is the #1 reason for "Formalities Check Fail" status.
                   </p>
                   <ul className="grid md:grid-cols-2 gap-4">
                    <li className="flex items-start bg-gray-50 p-4 rounded-xl border border-gray-100">
                      <span className="text-[#D2A02A] mr-3 font-black">✓</span>
                      <div>
                        <p className="font-bold text-gray-900 text-sm">Identity & Address Proof</p>
                        <p className="text-xs text-gray-500">Aadhar, PAN Card, or Passport of the proprietor/director.</p>
                      </div>
                    </li>
                    <li className="flex items-start bg-gray-50 p-4 rounded-xl border border-gray-100">
                      <span className="text-[#D2A02A] mr-3 font-black">✓</span>
                      <div>
                        <p className="font-bold text-gray-900 text-sm">Business Constitution</p>
                        <p className="text-xs text-gray-500">Partnership Deed, Certificate of Incorporation, or GST Certificate.</p>
                      </div>
                    </li>
                    <li className="flex items-start bg-gray-50 p-4 rounded-xl border border-gray-100">
                      <span className="text-[#D2A02A] mr-3 font-black">✓</span>
                      <div>
                        <p className="font-bold text-gray-900 text-sm">Trademark Logo (Soft Copy)</p>
                        <p className="text-xs text-gray-500">High-resolution image in JPEG/PNG format. (Black & white provides broader protection).</p>
                      </div>
                    </li>
                    <li className="flex items-start bg-gray-50 p-4 rounded-xl border border-gray-100">
                      <span className="text-[#D2A02A] mr-3 font-black">✓</span>
                      <div>
                        <p className="font-bold text-gray-900 text-sm">Form TM-48 (Power of Attorney)</p>
                        <p className="text-xs text-gray-500">Standard legal document authorizing us to represent you at the registry.</p>
                      </div>
                    </li>
                    <li className="flex items-start bg-gray-50 p-4 rounded-xl border border-gray-100">
                      <span className="text-[#D2A02A] mr-3 font-black">✓</span>
                      <div>
                        <p className="font-bold text-gray-900 text-sm">User Affidavit</p>
                        <p className="text-xs text-gray-500">Required ONLY if you are claiming usage of the mark from a backdated period.</p>
                      </div>
                    </li>
                    <li className="flex items-start bg-gray-50 p-4 rounded-xl border border-gray-100">
                      <span className="text-[#D2A02A] mr-3 font-black">✓</span>
                      <div>
                        <p className="font-bold text-gray-900 text-sm">MSME Certificate</p>
                        <p className="text-xs text-gray-500">Essential for claiming the 50% discount on government fees.</p>
                      </div>
                    </li>
                   </ul>
                </section>

                {/* Objections */}
                <section id="objections" className="scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6">Winning the Registry Battle: Handling Objections</h2>
                   <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    It is statistically proven that nearly 40% of trademark applications in Delhi receive an <strong>Examination Report</strong> containing objections. This is not the end of the road; it's simply a legal hurdle that needs expert clearance.
                   </p>
                   <div className="grid md:grid-cols-2 gap-8">
                      <div className="p-8 bg-red-50 rounded-2xl border border-red-100">
                        <h4 className="text-red-900 font-bold text-lg mb-2">Section 9 Objections</h4>
                        <p className="text-red-800 text-sm leading-relaxed italic">"Absolute grounds of refusal."</p>
                        <p className="text-red-800 text-xs mt-2">Raised if the mark is descriptive, common, or lacks distinctiveness. We counter this by providing 'User Evidence' or proving the mark has 'Acquired Distinctiveness'.</p>
                      </div>
                      <div className="p-8 bg-yellow-50 rounded-2xl border border-yellow-100">
                        <h4 className="text-yellow-900 font-bold text-lg mb-2">Section 11 Objections</h4>
                        <p className="text-yellow-800 text-sm leading-relaxed italic">"Relative grounds of refusal."</p>
                        <p className="text-yellow-800 text-xs mt-2">Raised if similar marks already exist on the register. We draft a technical reply showing phonetic, visual, and conceptual differences between the marks.</p>
                      </div>
                   </div>
                   <p className="text-sm md:text-lg leading-relaxed mt-8 font-semibold text-gray-900">
                     The Show-Cause Hearing:
                   </p>
                   <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                     If the registrar is not satisfied with the written reply, they schedule a hearing at the <strong>Trademark Registry Office Delhi (Dwarka)</strong>. Our expert IPR lawyers appear on your behalf, providing oral arguments and relevant caselaw to convince the registrar to allow the mark to move to publication.
                   </p>
                </section>

                {/* International PROTECTION */}
                <section id="international" className="scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6 uppercase">Taking Your Brand Global from Delhi</h2>
                   <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    In the era of boundary-less commerce, protecting your mark only in India might not be enough. If you plan to export your tech from Gurugram to Generic, or your apparel from Delhi to Dubai, you need international protection.
                   </p>
                   <div className="bg-[#000000] text-white p-8 rounded-3xl relative overflow-hidden">
                      <h4 className="text-[#ffffff] text-xl mb-4">The Madrid Protocol</h4>
                      <p className="text-sm opacity-100 leading-relaxed text-white">Through the Madrid Protocol, your Indian trademark application filed at the Delhi Registry can serve as a base to file for protection in over 120 countries simultaneously. You pay a single set of fees and manage one centralized application. Our team specializes in managing international IPR portfolios for export-oriented businesses.</p>
                      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#D2A02A]/10 rounded-full blur-3xl"></div>
                   </div>
                </section>

                {/* Case Law Section - New for content expansion */}
                <section id="case-laws" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6 uppercase">Recent Landmark Judgments from Delhi High Court</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700 font-light">
                    The Delhi High Court is widely regarded as the most active and specialized court for Intellectual Property litigation in India. It has consistently delivered landmark judgments that have clarified the scope of trademark protection, especially in the digital era. Understanding these precedents is crucial for any brand owner filing at the <strong>Trademark Office New Delhi</strong>.
                  </p>
                  <div className="space-y-6">
                    <div className="border-l-4 border-[#D2A02A] pl-6 py-2">
                       <h4 className="font-bold text-gray-900 mb-2 underline decoration-[#D2A02A] underline-offset-4">1. Protection of 'Well-Known' Marks</h4>
                       <p className="text-sm text-gray-600 leading-relaxed font-light">Recent rulings have reinforced that common dictionary words can achieve "well-known" status if they have acquired a secondary meaning through extensive use. This means even if you aren't in the same industry, you cannot use a mark that is deceptively similar to a famous brand. The Delhi Registry now maintains a separate list of such marks to prevent inadvertent infringements.</p>
                    </div>
                    <div className="border-l-4 border-[#D2A02A] pl-6 py-2">
                       <h4 className="font-bold text-gray-900 mb-2 underline decoration-[#D2A02A] underline-offset-4">2. Transborder Reputation</h4>
                       <p className="text-sm text-gray-600 leading-relaxed font-light">The court has held that a mark doesn't necessarily need to be in physical use in India to be protected. If it has a "transborder reputation" (visible to Indians via the internet or travel), it can be protected against local squatters. This is a vital protection for international brands entering the Indian capital.</p>
                    </div>
                    <div className="border-l-4 border-[#D2A02A] pl-6 py-2">
                       <h4 className="font-bold text-gray-900 mb-2 underline decoration-[#D2A02A] underline-offset-4">3. Keyword Advertising Infringement</h4>
                       <p className="text-sm text-gray-600 leading-relaxed font-light">A major trend in 2024 has been cases related to Google Ads. The court has clarified that using a competitor's trademark as a 'keyword' to trigger your own ads might constitute infringement if it causes confusion among consumers. This has direct implications for tech startups based in Gurugram and Delhi.</p>
                    </div>
                  </div>
                  <p className="text-sm md:text-lg leading-relaxed mt-6 text-gray-700 font-light italic">
                    By keeping these legal shifts in mind, our attorneys ensure that your trademark strategy is not just compliant with the registry but also robust enough to withstand challenges in the highest courts of the land.
                  </p>
                </section>

                {/* Why Choose Us */}
                <section id="why-choose-us" className="scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-8">Why AMA Legal is Delhi's Premier IPR Firm</h2>
                   <p className="text-sm md:text-lg leading-relaxed mb-10 text-gray-700 font-light">
                    Selecting the right representative for your IP matters is a critical business decision. Amidst a sea of filing agents, AMA Legal Solutions offers the security of a full-service law firm with specialized expertise in the <strong>New Delhi Trademark Office</strong> operations.
                   </p>
                   <div className="grid md:grid-cols-3 gap-8 text-center">
                    <div className="p-6 rounded-2xl bg-gray-50 hover:bg-[#fff9e6] transition-colors border border-gray-100">
                      <div className="text-4xl mb-4">⚖️</div>
                      <h3 className="font-bold text-lg mb-2">Legal Authority</h3>
                      <p className="text-gray-500 text-xs font-light">Unlike agencies, we are qualified advocates. We represent you in Registry hearings and the Delhi High Court directly, providing a one-stop legal shield.</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-gray-50 hover:bg-[#fff9e6] transition-colors border border-gray-100">
                      <div className="text-4xl mb-4">🏛️</div>
                      <h3 className="font-bold text-lg mb-2">Registry Proximity</h3>
                      <p className="text-gray-500 text-xs font-light">Our physical presence in Dwarka allows for rapid response to registry notices and efficient handling of physical documentation if required.</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-gray-50 hover:bg-[#fff9e6] transition-colors border border-gray-100">
                      <div className="text-4xl mb-4">🛡️</div>
                      <h3 className="font-bold text-lg mb-2">Zero-Risk Search</h3>
                      <p className="text-gray-500 text-xs font-light">Our multi-layered search process identifies phonetic, visual, and meaning-based risks that standard automated tools often miss.</p>
                    </div>
                   </div>
                </section>

                {/* Testimonials - Matching Loan Settlement Style Perfectly */}
                <section id="testimonials" className="scroll-mt-32">
                  <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-6 text-center uppercase tracking-widest">Success Stories from the Delhi Registry</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 relative shadow-sm">
                      <div className="text-4xl text-[#D2A02A] absolute top-3 left-3 opacity-10">"</div>
                      <p className="text-gray-700 italic mb-5 relative z-10 text-xs md:text-sm leading-relaxed font-light">
                        "I was struggling with a complex trademark objection for my tech company. The examiner had cited three similar marks. AMA's team in Delhi handled the Dwarka hearing so professionally, distinguishing our mark perfectly. We got our registration certificate within 3 months of the hearing. Best team in Delhi!"
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-700 font-black text-lg mr-3 shadow-inner">S</div>
                        <div>
                          <p className="font-bold text-gray-900 text-[10px]">Siddharth Verma</p>
                          <p className="text-[9px] text-[#D2A02A] font-black uppercase tracking-widest">Tech Founder, Delhi</p>
                          <div className="flex text-yellow-400 text-[9px] mt-1">★★★★★</div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 relative shadow-sm">
                      <div className="text-4xl text-[#D2A02A] absolute top-3 left-3 opacity-10">"</div>
                      <p className="text-gray-700 italic mb-5 relative z-10 text-xs md:text-sm leading-relaxed font-light">
                        "Smooth, transparent, and incredibly fast. They helped me get an MSME certificate first, saving me 50% on government fees for my apparel brand. The tracking on their status app is super helpful for busy entrepreneurs. They made the Trademark Office process feel like a breeze."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-700 font-black text-lg mr-3 shadow-inner">A</div>
                        <div>
                          <p className="font-bold text-gray-900 text-[10px]">Ananya Gupta</p>
                          <p className="text-[9px] text-[#D2A02A] font-black uppercase tracking-widest">Fashion Designer, Gurugram</p>
                          <div className="flex text-yellow-400 text-[9px] mt-1">★★★★★</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* FAQs */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-6 uppercase tracking-widest text-center">Common Questions & Expert Answers</h2>
                  <div className="space-y-6">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border-b border-gray-100 pb-6 last:border-0 group">
                        <h3 className="text-base md:text-lg font-black text-gray-900 mb-3 flex items-start group-hover:text-[#D2A02A] transition-colors">
                          <span className="text-[#D2A02A] mr-2 font-black text-xl">Q.</span>
                          {faq.question}
                        </h3>
                        <p className="text-gray-600 leading-relaxed pl-8 text-xs md:text-base">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Final CTA */}
                <section className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] rounded-xl md:rounded-3xl p-5 md:p-12 text-center text-white relative overflow-hidden">
                  <div className="relative z-10">
                    <h2 className="text-lg md:text-4xl font-bold mb-3 md:mb-5">Don't Leave Your Brand to Chance</h2>
                    <p className="text-xs md:text-lg opacity-90 mb-5 md:mb-8 max-w-2xl mx-auto">
                      One small filing error can cost you years of revenue. Partner with Delhi's elite trademark team to secure your intellectual assets today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-2.5 md:gap-3 justify-center">
                      <Link href="/contact">
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-2.5 px-5 md:py-3 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-xs md:text-base w-full sm:w-auto">
                          Book Your Consultation
                        </button>
                      </Link>
                      <a href="tel:+918700343611">
                        <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-2.5 px-5 md:py-3 md:px-10 rounded-full transition-all text-xs md:text-base w-full sm:w-auto">
                          Call: +91-8700343611
                        </button>
                      </a>
                    </div>
                    <p className="mt-3 md:mt-6 text-[10px] md:text-xs opacity-70">
                      Confidential • Legal • Effective
                    </p>
                  </div>
                </section>

              </div>
            </div>

            {/* Sidebar - Matching Loan Settlement */}
            <div className="hidden lg:block space-y-8 sticky top-24">
                {/* Contact Card */}
                <div className="bg-[#0f172a] p-8 rounded-3xl shadow-xl relative overflow-hidden">
                  <div className="relative z-10">
                    <h3 className="text-xl font-black text-[#D2A02A] mb-4 uppercase tracking-tighter">Instant Trademark Help</h3>
                    <p className="text-gray-400 mb-8 text-xs font-semibold leading-relaxed">
                      Our senior IPR advocates at the Dwarka Office are ready to assist you in filing your application within 24 hours.
                    </p>
                    <a href="tel:+918700343611" className="block w-full bg-[#D2A02A] text-[#0f172a] text-center py-4 rounded-xl font-black hover:bg-yellow-500 transition-all mb-4 uppercase tracking-widest text-sm">
                      Call +91-8700343611
                    </a>
                    <Link href="/contact" className="block w-full border border-[#D2A02A] text-[#D2A02A] text-center py-4 rounded-xl font-black hover:bg-[#D2A02A] hover:text-[#0f172a] transition-all uppercase tracking-widest text-sm">
                      Request Callback
                    </Link>
                  </div>
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#D2A02A]/5 rounded-full blur-2xl"></div>
                </div>

                {/* Related Links */}
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                  <h4 className="text-xs font-black uppercase text-gray-400 tracking-widest mb-6">Expertise in Delhi Registry</h4>
                  <ul className="space-y-4">
                    {[
                      { title: "Trademark Hearing Presence", href: "/trademark-hearing-delhi" },
                      { title: "Opposition Reply Services", href: "/trademark-opposition-procedure" },
                      { title: "MSME Discount Filings", href: "/msme-trademark-registration-delhi" },
                      { title: "International Brand Expansion", href: "/is-trademark-internationally-valid" },
                      { title: "Trademark Search Agency", href: "/trademark-registration-agency-near-me" }
                    ].map((item, idx) => (
                      <li key={idx} className="border-b border-gray-50 pb-3 last:border-0 last:pb-0">
                        <Link href={item.href} className="text-gray-900 font-bold hover:text-[#D2A02A] flex items-center text-sm group transition-colors">
                          <span className="mr-2 text-gray-300 group-hover:text-[#D2A02A]">›</span> {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  
                  {/* App Links */}
                  <div className="mt-8 pt-8 border-t border-gray-100">
                    <p className="text-[10px] font-black text-[#D2A02A] uppercase mb-4 tracking-widest">Download Our Status App</p>
                    <div className="flex flex-col gap-3">
                      <Link href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions" target="_blank" className="hover:opacity-80 transition-opacity">
                        <Image src="/newAssets/appstore.svg" alt="Google Play" width={130} height={36} className="w-full h-auto" />
                      </Link>
                      <Link href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186" target="_blank" className="hover:opacity-80 transition-opacity">
                        <Image src="/newAssets/playstore.svg" alt="App Store" width={130} height={36} className="w-full h-auto" />
                      </Link>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
