import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "How do I choose the best law firm for my specific case?",
    answer: "Choosing the best law firm involves looking for a team that has specific expertise in your area of concern. You should also consider the firm's track record, their transparency regarding fees, and their communication style. At AMA Legal Solutions, we suggest starting with an initial consultation to see if our approach aligns with your needs."
  },
  {
    question: "Can I get legal advice online from a top law firm?",
    answer: "Yes, AMA Legal Solutions offers online legal consultations via video calls and email. This is an efficient way to get expert advice regardless of your location. We provide the same level of attention and strategic insight during our digital meetings as we do in person."
  },
  {
    question: "What are the typical charges of a law firm in India?",
    answer: "Legal fees vary based on the complexity of the case, the experience of the advocates, and the duration of the litigation. We believe in transparent pricing and provide our clients with a clear fee structure upfront, so there are no surprises later on."
  },
  {
    question: "Do top law firms only handle high profile cases?",
    answer: "While some firms specialize in high profile matters, a truly great law firm provides excellence to every client. At AMA Legal Solutions, we treat every case with the same level of priority and dedication, whether it is a small property matter or a large corporate dispute."
  },
  {
    question: "How long does a typical court case take to resolve?",
    answer: "The duration of a case depends on the nature of the dispute and the court's case load. However, a good law firm can often speed up the process by using effective pre litigation strategies and proactive court representation."
  },
  {
    question: "What is the role of a legal notice in a dispute?",
    answer: "A legal notice is a formal communication that puts the other party on notice of your intention to start legal proceedings. It often acts as a final opportunity for the parties to resolve the matter outside of court, saving time and resources."
  },
  {
    question: "Can a law firm help if I am being harassed by bank recovery agents?",
    answer: "Absolutely. We have a dedicated team that handles banking disputes and protects clients from illegal harassment. We can send legal notices to the bank and represent you in negotiations to reach a fair settlement."
  },
  {
    question: "What is the difference between an advocate and a lawyer?",
    answer: "In common usage, the terms are often used interchangeably. However, an advocate is a lawyer who is registered with a Bar Council and is legally authorized to represent clients in a court of law. All practitioners at AMA Legal Solutions are registered advocates."
  },
  {
    question: "How do I verify a property title before buying land?",
    answer: "Title verification involves a detailed search of revenue records and deed history for the last 30 years. Our property advocates conduct this search to ensure that the seller has a clear, marketable title and that the property is free from encumbrances."
  },
  {
    question: "What should I do if I receive a court summons?",
    answer: "If you receive a court summons, you should consult an advocate immediately. Ignoring a summons can lead to an ex parte decree being passed against you. We can help you understand the allegations and prepare a strong legal response."
  }
];

// Review data
const reviews = [
  {
    author: "Arun Varma",
    location: "Delhi",
    reviewBody: "AMA Legal Solutions provided exceptional service for my property dispute. Their advocates are thorough and very professional. I highly recommend them.",
    ratingValue: 5
  },
  {
    author: "Sangeeta Rao",
    location: "Mumbai",
    reviewBody: "I was looking for a law firm that understood startup needs. Their corporate team was very helpful with our contracts and IP registration. Truly the best.",
    ratingValue: 5
  },
  {
    author: "Rajesh Mehra",
    location: "Bangalore",
    reviewBody: "The best Advocates for family matters. They handled my case with great sensitivity and patience. I am very grateful for their support.",
    ratingValue: 5
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
      "name": "Best Law Firm Near Me",
      "item": "https://www.amalegalsolutions.com/best-law-firm-near-me"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Best Law Firm Near Me: Top-Tier Legal Services in India",
  "description": "Comprehensive guide to finding the best law firm in India. Expert legal services in civil, criminal, family, and corporate law. Consult with top advocates today.",
  "image": "https://www.amalegalsolutions.com/newAssets/hero-bg.jpg",
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
  "datePublished": "2024-02-04",
  "dateModified": "2024-02-04"
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
  "name": "Legal Services - Best Law Firm Near Me",
  "image": "https://www.amalegalsolutions.com/newAssets/hero-bg.jpg",
  "description": "Expert legal services in India covering civil, criminal, family, and corporate law.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "1540"
  },
  "review": reviews.map(rev => ({
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": rev.author
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": rev.ratingValue
    },
    "reviewBody": rev.reviewBody
  }))
};

export const metadata = {
  title: "Best Law Firm Near Me | Top Rated Advocates India | AMA Legal Solutions",
  description: "Looking for the best law firm near you? AMA Legal Solutions provides expert legal representation across India. Highly optimized legal services for civil, criminal, and corporate matters.",
  keywords: [
    "best law firm near me",
    "top law firm india",
    "law firm near me",
    "best advocates near me",
    "legal services india",
    "hire a law firm",
    "expert legal advice india",
    "best civil lawyers india",
    "top criminal advocates india",
    "matrimonial law firm"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/best-law-firm-near-me',
  },
};

export default function BestLawFirmPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "experience-matters", title: "Why Experience Matters" },
    { id: "local-expertise", title: "Local Expertise & National Vision" },
    { id: "practice-areas", title: "Core Practice Areas" },
    { id: "why-choose-us", title: "Why Choose Our Firm" },
    { id: "technology", title: "Future of Law & Tech" },
    { id: "legal-process", title: "Understanding the Process" },
    { id: "protecting-rights", title: "Protecting Your Rights" },
    { id: "service-cities", title: "Pan-India Presence" },
    { id: "faqs", title: "FAQs" },
    { id: "reviews", title: "Client Reviews" },
  ];

  const breadcrumbItems = [
    { label: "Best Law Firm Near Me", href: "/best-law-firm-near-me" },
  ];

  const relatedPages = [
    { title: "Loan Settlement Services", href: "/services/loan-settlement" },
    { title: "Best Advocate Near Me", href: "/best-advocate-near-me" },
    { title: "Trademark Registration", href: "/services/trademark-registration" },
    { title: "Legal Notice Procedure", href: "/how-can-i-send-legal-notice" },
    { title: "GST Registration Service", href: "/services/gst-registration" },
  ];

  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
        {/* Hero Section */}
        <div className="relative bg-[#1a202c] text-white">
          <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
          <div className="relative z-20 container mx-auto px-4 py-16 md:py-32 text-center">
            <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight mt-10">
              Best <span className="text-[#D2A02A]">Law Firm Near Me</span>: <br className="hidden md:block"/> Strategic Legal Excellence in India
            </h1>
            <p className="text-base md:text-2xl mb-10 max-w-4xl mx-auto text-gray-200">
              Expert legal representation to protect your interests, secure your rights, and deliver results across all legal domains. Your trusted partner for justice in India.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-xl text-base md:text-lg">
                Book a Free Strategy Session
              </button>
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-[1700px] py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr_300px] gap-8 items-start mt-4">
            {/* Left Column - TOC */}
            <div className="hidden lg:block sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto no-scrollbar bg-white p-5 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold mb-4 text-gray-900 border-b pb-2">Table of Contents</h3>
              <TableOfContents sections={tocSections} orientation="vertical" />
            </div>

            {/* Middle Column - Main Content */}
            <div className="min-w-0">
              <div className="lg:hidden mb-6 sticky top-20 z-10">
                <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-5 md:p-12 rounded-2xl shadow-sm space-y-10 md:space-y-16">
                
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">Introduction: Why Experience Matters in Legal Disputes</h2>
                  <div className="space-y-6 text-sm md:text-lg leading-relaxed text-gray-700">
                    <p>
                      Finding the best law firm near you is not just about proximity; it is about finding a partner who understands the complexities of the legal landscape and can provide a strategic path to resolution. In India, where legal matters can span across various jurisdictions and involve local, state, and central laws, having a reputable law firm in your corner is your strongest asset. At AMA Legal Solutions, we bridge the gap between complex legal challenges and strategic outcomes. Whether you are dealing with a property dispute, a corporate contract, or a sensitive family matter, our team of seasoned advocates is dedicated to protecting your interests.
                    </p>
                    <p>
                      The search for a "best law firm near me" often starts in a moment of crisis. Perhaps you have received a legal notice that requires an urgent response, or you are on the verge of a business transaction that needs meticulous due diligence. Whatever the reason, the firm you choose will dictate the pace and effectiveness of your legal journey. A top tier law firm does not just file papers; they provide a comprehensive strategy that anticipates challenges and identifies opportunities for settlement or victory. We believe in proactive advocacy, ensuring that our clients are always one step ahead in any legal proceeding.
                    </p>
                  </div>
                </section>

                <section id="experience-matters" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">Beyond Reactive Advocacy: Strategic Legal Planning</h2>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    Many clients associate legal services with courtrooms and litigation. However, the true value of a top law firm lies in its ability to prevent disputes before they become expensive courtroom battles. Strategic legal planning involves a deep dive into the client's objectives and a thorough assessment of potential legal risks. By drafting clear, enforceable contracts and conducting rigorous due diligence, we provide our clients with a legal shield that protects their assets and reputation.
                  </p>
                </section>

                {/* Local Expertise */}
                <section id="local-expertise" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">The Importance of Local Expertise with a National Vision</h2>
                  <div className="space-y-6 text-sm md:text-lg leading-relaxed text-gray-700">
                    <p>
                      India is a vast country with a diverse set of local rules and judicial practices. While the central laws remain constant, the application of these laws can vary in different courts. This is why having a law firm that combines local expertise with a national vision is critical. Our advocates are well versed in the procedures of various High Courts and the Supreme Court, allowing us to represent you effectively regardless of where your case is located. We understand the nuances of local revenue records in property matters and the specific circulars of state governments that could affect your business operations.
                    </p>
                    <p>
                      By choosing AMA Legal Solutions, you are opting for a firm that has a significant presence across major Indian cities including Delhi, Mumbai, Bangalore, and beyond. This pan India reach allows us to handle cross border disputes within the country with ease. If your business is headquartered in Mumbai but has a dispute in a court in Delhi, we have the infrastructure to manage both locations seamlessly. This saves you the trouble of coordinating with multiple lawyers and ensures a consistent legal strategy across all forums.
                    </p>
                  </div>
                </section>

                {/* Practice Areas */}
                <section id="practice-areas" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">Our Core Practice Areas: Delivering Specialized Legal Solutions</h2>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-4">Civil Litigation</h3>
                      <p className="text-gray-700 text-sm md:text-base mb-4">
                        Handling property disputes, partition suits, and commercial litigation with a focus on strategic recovery and title protection.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-4">Criminal Defense</h3>
                      <p className="text-gray-700 text-sm md:text-base mb-4">
                        Expert representation in white-collar crimes, anticipatory bails, and the quashing of frivolous legal complaints.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-4">Family Law</h3>
                      <p className="text-gray-700 text-sm md:text-base mb-4">
                        Sensitive handling of divorce, child custody, and alimony matters, ensuring dignity and future security for our clients.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-4">Corporate Law</h3>
                      <p className="text-gray-700 text-sm md:text-base mb-4">
                        Comprehensive support for startups and corporations, including contract drafting, compliance, and M&A advisory.
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 space-y-6 text-sm md:text-lg leading-relaxed text-gray-700">
                    <p>
                       Our Intellectual Property department is dedicated to protecting the innovations that drive your business. From registering trademarks to defending patents in complex litigation, we provide the legal backbone needed for creativity to flourish. We also specialize in cyber law, assisting clients in navigating the legalities of the digital world, from data privacy to online fraud protection.
                    </p>
                    <p>
                        In the realm of constitutional law, we are known for our commitment to protecting fundamental rights. We file writ petitions to challenge arbitrary administrative decisions and ensure that the rule of law is upheld in every interaction between the citizen and the state.
                    </p>
                  </div>
                </section>

                {/* Why Choose Us */}
                <section id="why-choose-us" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">Why Choose AMA Legal Solutions is the Right Choice for You</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      { title: "Strategic Advocacy", desc: "We provide a clear roadmap for your case, identifying all risks and rewards." },
                      { title: "Transparent Fees", desc: "No hidden costs. We provide a clear fee structure right from the initial consultation." },
                      { title: "Result Oriented", desc: "Our focus is always on achieving the best possible legal outcome for our clients." },
                      { title: "Confidentiality", desc: "We maintain absolute professional secrecy regarding all client matters." },
                      { title: "National Reach", desc: "A strong presence across every major city hub in India for seamless service." },
                      { title: "Digital First", desc: "Leveraging technology for faster case updates and efficient communication." }
                    ].map((item, idx) => (
                      <div key={idx} className="p-6 bg-white border border-gray-200 rounded-xl hover:shadow-md transition-shadow">
                        <h4 className="font-bold text-lg mb-2 text-gray-900">{item.title}</h4>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Technology and Innovation */}
                <section id="technology" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">The Future of Law: Embracing Technology and Innovation</h2>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700 mb-6">
                    The Indian judiciary is undergoing a digital transformation, and AMA Legal Solutions is at the forefront of this change. We believe that technology can make legal services more accessible, transparent, and efficient. Our firm uses advanced legal research tools and digital case management systems to ensure that our advocates have the best resources at their fingertips. This allows us to provide better service to our clients, ensuring that no detail is overlooked.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    We also offer online legal consultations, making it easy for you to get expert advice from the comfort of your home or office. This is particularly useful for our international clients and NRIs who have legal interests in India. By embracing innovation, we are making the pursuit of justice faster and more effective for everyone.
                  </p>
                </section>

                {/* Understanding the Process */}
                <section id="legal-process" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">Understanding the Legal Process: A Step-by-Step Guide</h2>
                  <div className="space-y-6">
                    {[
                      { step: "1", title: "Consultation", content: "Initial deep dive into case facts and potential legal merit." },
                      { step: "2", title: "Strategy", content: "Preparing pre-litigation notices and exploring mediation options." },
                      { step: "3", title: "Filing", content: "Drafting and submitting plaints or applications in the correct court." },
                      { step: "4", title: "Trial", content: "Examination of witnesses and production of relevant evidence." },
                      { step: "5", title: "Arguments", content: "Final submission of legal precedents and factual summaries." },
                      { step: "6", title: "Resolution", content: "Obtaining the court decree and assisting in its final execution." }
                    ].map((item, idx) => (
                      <div key={idx} className="flex gap-6 items-start">
                        <div className="flex-shrink-0 w-10 h-10 bg-[#D2A02A] rounded-full flex items-center justify-center text-white font-bold">{item.step}</div>
                        <div>
                          <h4 className="font-bold text-gray-900 text-xl mb-1">{item.title}</h4>
                          <p className="text-gray-600">{item.content}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Protecting Your Rights */}
                <section id="protecting-rights" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">Protecting Your Rights Under Indian Law</h2>
                  <div className="space-y-6 text-sm md:text-lg leading-relaxed text-gray-700">
                    <p>
                        The Indian legal system provides numerous protections for individuals and organizations. Whether it is the protection of consumer rights through the Consumer Protection Act or the safeguarding of fundamental rights under the Constitution, we ensure that these laws are used to your full advantage. We have a dedicated team that handles consumer complaints against service providers and companies, seeking compensation for deficiency in service and unfair trade practices.
                    </p>
                    <p>
                        We also assist in matters related to the SARFAESI ACT and the Debt Recovery Tribunal (DRT), protecting borrowers from illegal recovery tactics and helping them negotiate settlements with banks. Our understanding of these specialized laws allows us to provide a level of protection that few other firms can offer.
                    </p>
                  </div>
                </section>

                {/* Service Cities */}
                <section id="service-cities" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">Service Excellence Across Every Major City in India</h2>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {["Delhi", "Gurugram", "Noida", "Mumbai", "Pune", "Bangalore", "Hyderabad", "Chennai", "Kolkata", "Chandigarh", "Jaipur", "Ahmedabad", "Lucknow", "Indore", "Bhopal", "Gwalior", "Jabalpur", "Amritsar", "Ludhiana", "Patna", "Ranchi", "Bhubaneswar", "Guwahati"].map((city) => (
                      <span key={city} className="px-4 py-2 bg-gray-100 rounded-full text-xs font-semibold text-gray-600 border border-gray-200 hover:border-[#D2A02A] cursor-default transition-colors">{city}</span>
                    ))}
                  </div>
                </section>

                {/* FAQs */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-10 text-center">Frequently Asked Questions</h2>
                  <div className="space-y-8">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border-b border-gray-100 pb-8 last:border-0">
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-start">
                          <span className="text-[#D2A02A] mr-3">Q.</span>
                          {faq.question}
                        </h3>
                        <p className="text-gray-700 leading-relaxed pl-8">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Reviews */}
                <section id="reviews" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-10 text-center underline decoration-[#D2A02A] decoration-3 underline-offset-4">Success Stories & Client Reviews</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reviews.map((rev, idx) => (
                      <div key={idx} className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative hover:border-[#D2A02A] transition-all">
                        <div className="flex text-[#D2A02A] mb-4">
                          {[...Array(rev.ratingValue)].map((_, i) => <span key={i}>★</span>)}
                        </div>
                        <p className="text-gray-700 italic mb-6">"{rev.reviewBody}"</p>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-[#D2A02A] rounded-full flex items-center justify-center text-white font-bold">{rev.author[0]}</div>
                          <div>
                            <p className="font-bold text-gray-900 text-sm">{rev.author}</p>
                            <p className="text-xs text-gray-500">{rev.location}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 text-center">
                    <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-200 shadow-sm text-xs font-medium">
                      <span className="flex text-[#D2A02A]">★★★★★</span>
                      <span className="text-gray-900">4.9/5 based on 1,540+ certified reviews</span>
                    </div>
                  </div>
                </section>

                {/* Final CTA */}
                <section className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
                  <div className="relative z-10">
                    <h2 className="text-2xl md:text-5xl font-bold mb-6">Don't Leave Your Justice to Chance</h2>
                    <p className="text-base md:text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                      Whether it's a personal legal challenge or a complex business dispute, our expert lawyers are ready to provide the strategic defense you deserve.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link href="/contact">
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg w-full sm:w-auto">
                          Consult an Expert Today
                        </button>
                      </Link>
                      <a href="tel:+918700343611">
                        <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-4 px-12 rounded-full transition-all text-lg w-full sm:w-auto">
                          Call +91-8700343611
                        </button>
                      </a>
                    </div>
                    <p className="mt-8 opacity-70 text-sm">
                        *Confidential Legal Consultations Provided Pan-India
                    </p>
                  </div>
                </section>

              </div>
            </div>

            {/* Right Column - CTA and Related */}
            <div className="hidden lg:block space-y-8 sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto no-scrollbar">
              {/* Sticky CTA Container */}
              <div className="bg-[#1a202c] p-6 rounded-2xl shadow-xl text-white border border-gray-700">
                <h3 className="text-xl font-bold mb-4 text-[#D2A02A]">Need Urgent Legal Help?</h3>
                <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                  Connect with our senior advocates now for a detailed assessment of your legal matter.
                </p>
                <div className="space-y-4">
                  <a href="tel:+918700343611" className="flex items-center justify-center gap-3 w-full bg-[#D2A02A] py-3 rounded-lg font-bold hover:bg-[#b88a22] transition-colors">
                    <span>📞 Call Now</span>
                  </a>
                  <Link href="/contact" className="flex items-center justify-center gap-3 w-full border border-gray-600 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                    <span>✉️ Send Message</span>
                  </Link>
                </div>
              </div>

              {/* Related Pages Container */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4 border-b pb-2">Related Services</h3>
                <ul className="space-y-4">
                  {relatedPages.map((page, idx) => (
                    <li key={idx}>
                      <Link href={page.href} className="flex items-center gap-3 group text-gray-600 hover:text-[#D2A02A] transition-colors">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-[#D2A02A]"></span>
                        <span className="text-sm font-medium">{page.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Download App Card */}
              <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
                <h4 className="font-bold text-gray-900 mb-3">Download Our App</h4>
                <div className="flex flex-col gap-3 items-center">
                    <Link href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions" target="_blank" className="hover:opacity-80 transition-opacity">
                        <Image src="/newAssets/appstore.svg" alt="Google Play" width={140} height={42} className="h-auto"/>
                    </Link>
                    <Link href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186" target="_blank" className="hover:opacity-80 transition-opacity">
                        <Image src="/newAssets/playstore.svg" alt="App Store" width={140} height={42} className="h-auto"/>
                    </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
