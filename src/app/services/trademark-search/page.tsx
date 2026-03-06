import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { FaSearch, FaMicroscope, FaExclamationTriangle, FaCheckDouble, FaGlobe, FaShieldAlt, FaStar, FaQuoteLeft } from "react-icons/fa";

// Comprehensive FAQ data for Trademark Search
const faqs = [
  {
    question: "Why can't I just search for my brand name on Google or Instagram?",
    answer: "A Google search only shows brands that are active online. It misses pending trademark applications, registered marks that haven't launched yet, and companies that operate through offline distribution. Only an official IP India Public Search reveals the 'Statutory Rights' held by others, which can stop your business even if they don't have a website."
  },
  {
    question: "What is a 'Phonetic Similarity' search?",
    answer: "Phonetic similarity identifies marks that sound the same even if they are spelled differently. For example, if you want to register 'Klarity', a phonetic search will find 'Clarity', 'Klairity', and 'Claritee'. Under Section 11 of the Trade Marks Act, phonetic similarity is as strong a ground for rejection as visual similarity."
  },
  {
    question: "How do I search for a logo or a symbol?",
    answer: "Logos are searched using the Vienna Classification (Vienna Code). Every visual element (like a star, a lion, or a specific geometric shape) has a numerical code. We identify your logo's codes and search the registry for any similar pictorial representations in your category."
  },
  {
    question: "Does a 'No Match Found' result guarantee my trademark will be registered?",
    answer: "No. 'No Match Found' only means no identical or highly similar marks were found in that specific class. It doesn't account for marks in 'Cross-Classes', dynamic well-known marks, or marks that might be cited during the 'Absolute Grounds' examination (like descriptive terms)."
  },
  {
    question: "What are 'Well-Known Marks' and how do they affect my search?",
    answer: "Well-known marks (like Amazon, Tata, or Apple) are protected across ALL 45 classes regardless of where they are registered. Even if a search in your specific class comes up empty, using a name similar to a well-known mark will lead to immediate rejection."
  },
  {
    question: "How many classes should I search in?",
    answer: "While you primarily search in your business class (e.g., Class 25 for clothing), you should also search 'Related Classes'. For example, if you sell 'Leather Bags' (Class 18), you should also search 'Retail Services' (Class 35) and 'Footwear' (Class 25) to avoid future conflicts."
  },
  {
    question: "What does 'Objected' status in search results mean?",
    answer: "It means the Registry has already found a conflict with that mark. If a mark is 'Objected', it still blocks you until it is either successfully defended or officially 'Abandoned' or 'Refused' by the Registry."
  },
  {
    question: "What is an 'Associated Mark' in search results?",
    answer: "Associated marks are multiple similar filings by the same owner. They indicate a strong brand portfolio and suggest that the owner is very likely to oppose any similar new application."
  },
  {
    question: "Can I register a name that is common in my industry?",
    answer: "No. Terms that are 'Generic' or 'Descriptive' in an industry (like 'Soft' for pillows or 'Crunchy' for chips) are prohibited under Section 9. Our search reports identify these 'Absolute Grounds' risks."
  },
  {
    question: "Is there a global search for trademarks?",
    answer: "Yes, for international expansion, we use the WIPO Global Brand Database. This is critical if you plan to export goods or use the Madrid Protocol for international filing later."
  },
  {
    question: "How often are search results updated?",
    answer: "The IP India database reflects new applications in real-time. However, there can be a 24-48 hour delay in data indexing. We conduct 'Snapshot Searches' right before filing to ensure the latest data is captured."
  },
  {
    question: "What is a 'Prohibited Mark' under the Emblems Act?",
    answer: "India prohibits the registration of marks containing official emblems, national flags, and names of international organizations (like UNO, WHO). Our search includes these 'Statutory Prohibitions'."
  },
  {
    question: "How do I interpret 'Formalities Check Pass'?",
    answer: "This is the first stage after filing. It means the document requirements are met, but the 'Substantive Search' by the Examiner hasn't begun yet. A search result with this status still represents a valid threat."
  },
  {
    question: "Is a 'Proposed to be Used' mark just as strong as a registered one?",
    answer: "In terms of blocking you, yes. A mark filed earlier, even if not yet in use, holds 'Priority' over your new application. You cannot ignore marks just because the business hasn't started yet."
  },
  {
    question: "Can I use search results in court?",
    answer: "Search reports from the public portal are evidence of 'Due Diligence'. They show you didn't 'honestly and concurrently' adopt the mark if it was already on the registry."
  },
  {
    question: "What is the Vienna Agreement of 1973?",
    answer: "It is the treaty that governs the classification of figurative elements. India's adherence to this ensures that your logo search follows international standards, which is vital for global brand protection."
  },
  {
    question: "Why do some marks have a 'User Date' older than their application?",
    answer: "This means they are claiming 'Prior Use'. If a mark in search results shows a 1990 user date, they have superior rights even if they only filed for registration in 2024. These are the most dangerous marks to find in a search."
  },
  {
    question: "What does 'Advertised beff acc' mean?",
    answer: "It means the mark was accepted despite some initial concerns and is now published in the journal for public opposition. This is proof that the mark has passed the Registry's search hurdles."
  },
  {
    question: "Can names of deities be trademarked?",
    answer: "Generally, names or pictures of gods and goddesses are prohibited if they could hurt religious sentiments. However, some historical usages might be allowed if they are non-offensive and distinctive."
  },
  {
    question: "How long does a professional search report take?",
    answer: "While the portal is public, a 'Professional Search' by AMA Legal Solutions involves analyzing 45 classes, phonetic variants, and case-law relevance. We typically deliver a 20-page comprehensive report within 4-6 hours."
  }
];

// SEO Schema Data
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.amalegalsolutions.com" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.amalegalsolutions.com/services" },
    { "@type": "ListItem", "position": 3, "name": "Trademark Search Guide", "item": "https://www.amalegalsolutions.com/services/trademark-search" }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Professional Trademark Search in India: The 2026 Definitive Guide",
  "description": "Master the art of trademark search on the IP India portal. Learn about phonetic similarity, Vienna classification, and prohibited marks to protect your brand.",
  "author": { "@type": "Organization", "name": "AMA Legal Solutions", "url": "https://www.amalegalsolutions.com" },
  "publisher": { "@type": "Organization", "name": "AMA Legal Solutions" },
  "datePublished": "2026-01-31",
  "dateModified": "2026-01-31"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
  }))
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Professional Trademark Search Report",
  "description": "Comprehensive attorney-led search report covering all 45 classes, phonetic similarity, and Vienna classification.",
  "brand": { "@type": "Brand", "name": "AMA Legal Solutions" },
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "1840" },
  "review": [
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "author": { "@type": "Person", "name": "Arjun Khanna" },
      "reviewBody": "Their search report saved us from a potential lawsuit. We were about to launch with a name that had a phonetic conflict we didn't see on our own."
    }
  ]
};

export const metadata = {
  title: "Trademark Search India 2026 | Professional IP Search & Analysis",
  description: "Free & Professional Trademark Search in India. Detailed guide on Wordmark, Phonetic, and Vienna search via IP India Portal. Avoid Section 9 and 11 objections.",
  keywords: [
    "trademark search india guide",
    "public search ip india portal",
    "phonetic trademark similarity",
    "vienna code search logo",
    "prohibited marks list india",
    "trademark class search",
    "how to check trademark availability",
    "brand name search software",
    "registered trademark database",
    "trademark attorney search report",
    "Section 11 trademark conflict",
    "free trademark availability check"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/services/trademark-search',
  },
};

export default function TrademarkSearchPage() {
  const tocSections = [
    { id: "intro", title: "1. The Strategic Importance of Search" },
    { id: "portal-guide", title: "2. The Anatomy of Public Search" },
    { id: "wordmark-search", title: "3. Wordmark Search: Beyond Matches" },
    { id: "phonetic-search", title: "4. Phonetic Search: The Hidden Killer" },
    { id: "vienna-search", title: "5. Vienna Search: Visual Identity" },
    { id: "prohibited-marks", title: "6. Prohibited Marks Analysis" },
    { id: "cross-class", title: "7. Cross-Class Search Strategy" },
    { id: "status-interpretation", title: "8. Interpreting Registry Status" },
    { id: "international", title: "9. WIPO Global Search Database" },
    { id: "attorney-report", title: "10. The 20-Point Professional Audit" },
    { id: "reviews", title: "Client Testimonials" },
    { id: "faqs", title: "Technical FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Trademark Search", href: "/services/trademark-search" },
  ];

  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
        {/* Hero Section */}
        <div className="relative bg-[#0d1b2a] text-white">
          <div className="absolute inset-0 bg-black opacity-70 z-10"></div>
          <div className="relative z-20 container mx-auto px-4 py-20 md:py-32 text-center">
            <h1 className="text-2xl md:text-6xl font-extrabold mb-5 leading-tight mt-8 tracking-tight">
              Master the Art of <span className="text-[#bf9848]">Trademark Search</span> <br /> 
              Protect Your Brand Before You Build It
            </h1>
            <p className="text-base md:text-xl mb-8 max-w-3xl mx-auto text-gray-300 leading-relaxed font-light">
              Don't leave your brand equity to chance. Learn how to navigate the IP India portal, 
              decode phonetic similarities, and conduct advanced Vienna searches like a legal expert 
              to ensure your brand is registration-ready.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-[#bf9848] hover:bg-[#9e7d3a] text-white font-bold py-3 px-10 rounded-full transition-all transform hover:scale-105 shadow-2xl text-base border border-[#bf9848]">
                  Get Free Search Report
                </button>
              </Link>
              <a href="tel:+918700343611">
                <button className="bg-transparent border-2 border-white hover:bg-white hover:text-[#0d1b2a] text-white font-bold py-3 px-10 rounded-full transition-all text-base">
                  Instant Phone Consultation
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-8xl py-12">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr_240px] gap-8 items-start mt-8">
            {/* Left Sidebar - TOC */}
            <div className="hidden lg:block sticky top-28 bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">In This Guide</h4>
              <TableOfContents sections={tocSections} orientation="vertical" />
            </div>

            {/* Main Content Area */}
            <div className="min-w-0">
              <div className="bg-white p-6 md:p-12 rounded-[1.5rem] shadow-xl border border-gray-50 space-y-12">
                
                {/* Intro Section */}
                <section id="intro" className="scroll-mt-32">
                  <div className="inline-block bg-[#fffcf5] text-[#bf9848] px-4 py-1 rounded-full text-sm font-bold mb-6">Due Diligence Guide 2026</div>
                  <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 leading-tight">1. The Strategic Importance of Trademark Search</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-6 leading-relaxed">
                    <p>
                      In the modern marketplace, naming a business is no longer a creative exercise—it is a legal one. Every hour, hundreds of new trademark applications are filed in India. If you launch a brand without a <strong>comprehensive trademark search</strong>, you are essentially building a skyscraper on land you don't own. 
                    </p>
                    <p>
                      A "Trademark Search" is the process of identifying potential conflicts with existing marks registered or pending with the <strong>Controller General of Patents, Designs & Trade Marks (CGPDTM)</strong>. It is the single most important step in the intellectual property lifecycle. Why? Because the cost of re-branding—changing your logo, domain, packaging, and marketing collateral—is often 50 times the cost of a professional legal search.
                    </p>
                    <p>
                      At AMA Legal Solutions, we view a search report not just as a "Yes or No" check, but as a risk assessment tool. We analyze whether your brand name violates <strong>Absolute Grounds (Section 9)</strong>—for being too descriptive—or <strong>Relative Grounds (Section 11)</strong>—for being too similar to someone else. This guide will teach you the technical nuances of conducting these searches like a seasoned IP attorney.
                    </p>
                  </div>
                </section>

                {/* Portal Guide */}
                <section id="portal-guide" className="scroll-mt-32 border-t border-gray-100 pt-16">
                  <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 leading-tight">2. The Anatomy of the IP India Public Search Portal</h2>
                  <p className="text-lg text-gray-700 mb-6">
                    The official gateway to trademark data in India is the <Link href="https://ipindiaonline.gov.in/tmrpublicsearch/frmmain.aspx" className="text-[#bf9848] underline">IP India Public Search portal</Link>. While it looks simple, its database holds over 75 years of branding history.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6 my-10">
                    <div className="bg-[#f8f9fa] p-8 rounded-2xl border-t-4 border-[#bf9848]">
                      <h4 className="font-bold mb-3">Wordmark Search</h4>
                      <p className="text-sm text-gray-600">The most common search type, used to find identical or similar character strings in your target class.</p>
                    </div>
                    <div className="bg-[#f8f9fa] p-8 rounded-2xl border-t-4 border-[#bf9848]">
                      <h4 className="font-bold mb-3">Phonetic Search</h4>
                      <p className="text-sm text-gray-600">Crucial for finding names that sound the same but are spelled differently (e.g., 'Lux' vs 'Lucks').</p>
                    </div>
                    <div className="bg-[#f8f9fa] p-8 rounded-2xl border-t-4 border-[#bf9848]">
                      <h4 className="font-bold mb-3">Vienna Code</h4>
                      <p className="text-sm text-gray-600">Used for figurative marks (logos, images, shapes) by categorizing visual elements into international codes.</p>
                    </div>
                  </div>
                  <p className="text-gray-700">To get started, you must select the 'Search Type' and input the 'Class' number. India follows the <strong>Nice Classification (1-45 classes)</strong>. Choosing the wrong class is the #1 reason why entrepreneurs get "Clean Search Reports" only to be sued later because they missed a conflict in a neighboring category.</p>
                </section>

                {/* Wordmark Search Deep Dive */}
                <section id="wordmark-search" className="scroll-mt-32 border-t border-gray-100 pt-16">
                  <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 leading-tight">3. Wordmark Search: Going Beyond Exact Matches</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                    <p>
                      A basic wordmark search using "Match With" only finds exact copies. To be truly safe, you must use the <strong>"Starts With"</strong> and <strong>"Contains"</strong> operators. 
                    </p>
                    <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100 flex gap-6">
                       <FaMicroscope className="text-4xl text-blue-600 flex-shrink-0 mt-1" />
                       <div>
                          <h4 className="font-bold text-xl mb-2">The 'Root Name' Strategy</h4>
                          <p className="text-base leading-relaxed">
                            If your brand is "Zylos Solutions", searching for "Zylos" isn't enough. You must search for "Zyl", "Zylo", and "Ylos". Often, a mark like "Zylo-Tech" or "Zyloria" will be enough to block your application. Our legal team uses multi-string queries to ensure no 'root-name' conflicts exist.
                          </p>
                       </div>
                    </div>
                    <p>
                      Remember: The Registry doesn't just block identical names. It blocks <strong>'Deceptively Similar'</strong> names. If the public could be confused, the search is a 'Fail'.
                    </p>
                  </div>
                </section>

                {/* Phonetic Search Section */}
                <section id="phonetic-search" className="scroll-mt-32 border-t border-gray-100 pt-16">
                  <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 leading-tight">4. Phonetic Search: The Hidden Brand Killer</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                    <p>
                      In India, many businesses are named based on sounds and pronunciations. This leads to the <strong>Phonetic Similarity Doctrine</strong>. Even if the spelling is 100% different, if the sound is the same, the marks are conflicting.
                    </p>
                    <ul className="list-none space-y-4">
                       <li className="flex items-start gap-4"><FaExclamationTriangle className="text-amber-500 mt-1" /> <span><strong>Example:</strong> 'Apple' vs 'A-Pul' vs 'Eppl'. All three are phonetically identical.</span></li>
                       <li className="flex items-start gap-4"><FaExclamationTriangle className="text-amber-500 mt-1" /> <span><strong>Example:</strong> 'K-Nine' vs 'Canine'. The auditory perception is the same.</span></li>
                    </ul>
                    <p>
                      The IP India portal's phonetic algorithm is sophisticated but not perfect. We manually verify 'Rhyming Conflicts' which the portal often misses. For example, 'Vanish' and 'Banis' might not trigger a portal flag, but a High Court would likely consider them phonetically similar enough to cause confusion.
                    </p>
                  </div>
                </section>

                {/* Vienna Classification Section */}
                <section id="vienna-search" className="scroll-mt-32 border-t border-gray-100 pt-16">
                  <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 leading-tight">5. Vienna Search: Decoding Your Visual Identity</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                    <p>
                      If you have a logo, a <strong>Vienna Code Search</strong> is mandatory. The Vienna Classification (1973) allows the Registry to index logos by what they represent. 
                    </p>
                    <div className="bg-gray-900 text-white p-10 rounded-3xl grid md:grid-cols-2 gap-8 items-center">
                       <div>
                          <h4 className="text-[#bf9848] text-2xl font-bold mb-4">How it works:</h4>
                          <p className="opacity-80 mb-4">
                             If your logo has an 'eagle flying over a mountain in a circle', we identify the codes for:
                          </p>
                          <ul className="text-sm space-y-2 opacity-80">
                             <li>- 03.07.01 (Eagle)</li>
                             <li>- 06.01.02 (Mountain)</li>
                             <li>- 26.01.01 (Circle)</li>
                          </ul>
                       </div>
                       <div className="border border-white/20 p-6 rounded-2xl bg-white/5">
                          <p className="text-sm italic">"Without a Vienna search, you could spend thousands on logo design only to find a perfectly identical logo exists for a competitor under a different brand name."</p>
                       </div>
                    </div>
                  </div>
                </section>

                {/* Prohibited Marks Analysis */}
                <section id="prohibited-marks" className="scroll-mt-32 border-t border-gray-100 pt-16">
                  <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 leading-tight">6. Prohibited Marks Analysis: Avoiding Absolute Refusal</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                    <p>
                      Even if a name is 100% unique in the search portal, it might still be <strong>prohibited from registration</strong> in India. This is where Section 9 (Absolute Grounds) and Section 13 (Prohibition of registration of names of chemical elements) come into play. A professional search report must flag these "non-conflict" risks.
                    </p>
                    <div className="grid md:grid-cols-2 gap-8 my-10">
                       <div className="border-l-4 border-red-500 pl-8">
                          <h4 className="font-bold text-xl mb-2 text-red-900">National Symbols & Emblems</h4>
                          <p className="text-gray-600">The Emblems and Names (Prevention of Improper Use) Act, 1950, prohibits the use of the Indian National Flag, Ashoka Chakra, or names like 'President of India'. Searching for these is mandatory for ethical brand creation.</p>
                       </div>
                       <div className="border-l-4 border-red-500 pl-8">
                          <h4 className="font-bold text-xl mb-2 text-red-900">Religious Sentiments</h4>
                          <p className="text-gray-600">Under Section 9(2)(b), any mark that could hurt the religious sentiments of any class of citizens is prohibited. Using names of deities for inappropriate products (e.g., 'Ganesh' for tobacco) will lead to an 'Absolute Refusal'.</p>
                       </div>
                    </div>
                    <p>
                      Furthermore, <strong>generic terms (Publici Juris)</strong> cannot be trademarked. If you sell computers, you cannot trademark the name "Computer" or even "Super Computer". Our audit identifies if your brand is 'Arbitrary' (strong), 'Suggestive' (protectable), or 'Descriptive' (weak/prohibited).
                    </p>
                  </div>
                </section>

                {/* Cross-Class Search Strategy */}
                <section id="cross-class" className="scroll-mt-32 border-t border-gray-100 pt-16">
                  <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 leading-tight">7. The Cross-Class Search: Closing the Legal Gaps</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                    <p>
                      A rookie mistake in trademark searching is looking ONLY at one class. The Indian Registry often cites marks from 'Co-related Classes' during examination. If you are in the food business, your search must span at least 4 classes.
                    </p>
                    <div className="bg-[#fffcf5] border border-[#bf9848]/20 p-8 rounded-3xl">
                       <h4 className="font-bold text-2xl mb-6">Strategic Search Matrix</h4>
                       <div className="overflow-x-auto">
                          <table className="w-full text-sm">
                             <thead className="border-b border-gray-200">
                                <tr>
                                   <th className="text-left py-4 px-4 font-black">Your Core Class</th>
                                   <th className="text-left py-4 px-4 font-black">Mandatory 'Co-related' Search</th>
                                </tr>
                             </thead>
                             <tbody>
                                <tr className="border-b border-gray-50">
                                   <td className="py-4 px-4">Class 25 (Clothing)</td>
                                   <td className="py-4 px-4 font-medium">Class 35 (Retail), Class 18 (Leather), Class 24 (Fabrics)</td>
                                </tr>
                                <tr className="border-b border-gray-50">
                                   <td className="py-4 px-4">Class 5 (Pharma)</td>
                                   <td className="py-4 px-4 font-medium">Class 3 (Cosmetics), Class 30 (Health Supplements)</td>
                                </tr>
                                <tr className="border-b border-gray-50">
                                   <td className="py-4 px-4">Class 9 (Software)</td>
                                   <td className="py-4 px-4 font-medium">Class 42 (IT Services), Class 38 (Telecom), Class 35 (E-comm)</td>
                                </tr>
                             </tbody>
                          </table>
                       </div>
                    </div>
                    <p>
                      By searching horizontally across the matrix, we ensure that a competitor in a "similar trade channel" doesn't have a prior right that could block your expansion.
                    </p>
                  </div>
                </section>

                {/* Interpreting Registry Status */}
                <section id="status-interpretation" className="scroll-mt-32 border-t border-gray-100 pt-16">
                  <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 leading-tight">8. Interpreting Registry Status: Decoding the Competitive Landscape</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-8 text-justify">
                    <p>
                      When the public search results appear, the most important column in the table is <strong>'Status'</strong>. Most entrepreneurs look at the name and ignore the status, but the status determines whether that mark is a "Live Bullet" or a "Blank" in the context of your application.
                    </p>
                    <div className="space-y-8">
                       <div className="p-10 bg-white border border-gray-100 rounded-[2.5rem] shadow-sm relative overflow-hidden group hover:shadow-2xl transition-all">
                          <div className="absolute top-0 right-0 p-4 bg-red-500 text-white font-bold text-xs uppercase tracking-tighter">Status: Registered</div>
                          <p className="font-black text-[#0d1b2a] text-2xl mb-4">The 'Fatal' Conflict</p>
                          <p className="text-base leading-relaxed mb-4 italic">Threat Level: Ultra-High</p>
                          <p className="text-sm">
                             A 'Registered' status means the brand owner has the full weight of the Trade Marks Act, 1999, behind them. They can sue for <strong>Trademark Infringement</strong>. In search reports, if we find a 'Registered' mark that is even 60-70% similar to yours in a similar class, we generally recommend an immediate pivot or re-branding.
                          </p>
                       </div>
                       <div className="p-10 bg-white border border-gray-100 rounded-[2.5rem] shadow-sm relative overflow-hidden group hover:shadow-2xl transition-all">
                          <div className="absolute top-0 right-0 p-4 bg-amber-500 text-white font-bold text-xs uppercase tracking-tighter">Status: Objected / Opposed</div>
                          <p className="font-black text-[#0d1b2a] text-2xl mb-4">The 'Active Litigation' Conflict</p>
                          <p className="text-base leading-relaxed mb-4 italic">Threat Level: High / Volatile</p>
                          <p className="text-sm">
                             This means the applicant is currently fighting for their rights. If you see 'Opposed', it means another brand has stepped in to stop them. You might think this makes the name "available", but it actually makes it a minefield. If the opposition fails, the mark will register and block you. If the opposition is based on a well-known mark, that same well-known mark owner will likely oppose you next.
                          </p>
                       </div>
                       <div className="p-10 bg-white border border-gray-100 rounded-[2.5rem] shadow-sm relative overflow-hidden group hover:shadow-2xl transition-all">
                          <div className="absolute top-0 right-0 p-4 bg-gray-400 text-white font-bold text-xs uppercase tracking-tighter">Status: Abandoned / Removed</div>
                          <p className="font-black text-[#0d1b2a] text-2xl mb-4">The 'Open Window' Opportunity</p>
                          <p className="text-base leading-relaxed mb-4 italic">Threat Level: Moderate (Due Diligence Required)</p>
                          <p className="text-sm">
                             An 'Abandoned' mark is one where the owner failed to reply to an objection or attend a hearing. While this technically frees up the name, we always check if the owner has <strong>Common Law Rights</strong>. If they are still using the brand in the market despite the registration failing, they can still sue you for 'Passing Off'.
                          </p>
                       </div>
                    </div>
                  </div>
                </section>

                {/* WIPO & International Database */}
                <section id="international" className="scroll-mt-32 border-t border-gray-100 pt-16">
                  <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 leading-tight">9. WIPO Global Search: Protecting Your Brand for Export</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-8 text-justify">
                    <p>
                      If your business model involves international shipping, software-as-a-service (SaaS) available globally, or any future plans to expand to the US, Europe, or Middle East, an Indian search is insufficient. 
                    </p>
                    <p>
                      The <strong>WIPO Global Brand Database</strong> is the central clearing house for international marks. Under the <strong>Madrid System</strong>, an international registration can designate India as a target country. This means a company in Germany could have a mark that blocks yours, but it might not show up clearly on the local IP India portal for several weeks during the 'Synchronization Phase'.
                    </p>
                    <div className="bg-[#0d1b2a] text-white p-12 rounded-[3rem] shadow-2xl relative overflow-hidden group">
                       <FaGlobe className="absolute -right-10 -bottom-10 text-[15rem] opacity-10 group-hover:scale-110 transition-transform duration-1000" />
                       <h4 className="text-[#bf9848] text-2xl font-bold mb-6">The Madrid Protocol Trap</h4>
                       <p className="text-lg opacity-80 leading-relaxed mb-8">
                          Many startups file in India, spend years building the brand, and then apply for a US trademark only to receive a 'Provisional Refusal' because they didn't search the WIPO database initially. This often forces companies to use different names in different countries, diluting their global brand equity and increasing legal costs by 300%.
                       </p>
                       <div className="p-6 bg-white/5 border border-white/10 rounded-2xl text-sm italic">
                          "At AMA Legal Solutions, our premium search reports always include a WIPO 'Snapshot' to ensure your global expansion roadmap is clear of obstacles."
                       </div>
                    </div>
                  </div>
                </section>

                {/* The Professional Audit Checklist */}
                <section id="attorney-report" className="scroll-mt-32 border-t border-gray-100 pt-16">
                  <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 leading-tight">10. The 20-Point Professional Attorney Audit: Why it Beats the Portal</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-10 text-justify">
                    <p>
                       While the public portal is a great starting point, interpreting its data requires specialized legal training. A "Match Found" in the portal doesn't always mean a conflict, and "No Match Found" doesn't always mean safety. 
                    </p>
                    
                    <div className="bg-white border border-gray-100 p-12 rounded-[3.5rem] shadow-xl space-y-12">
                       <div className="grid md:grid-cols-2 gap-12">
                          <div className="space-y-4">
                             <div className="w-12 h-12 bg-[#0d1b2a] text-[#bf9848] rounded-xl flex items-center justify-center font-bold text-xl shadow-lg">01</div>
                             <h5 className="font-bold text-xl text-gray-900">The Proprietary Similarity Matrix</h5>
                             <p className="text-sm leading-relaxed text-gray-600">We don't just look for words; we look for 'Deceptive Patterns'. This includes syllable breakdown, vowel similarity, and conceptual equivalents (e.g., searching for 'Sun' when your brand is 'Surya').</p>
                          </div>
                          <div className="space-y-4">
                             <div className="w-12 h-12 bg-[#0d1b2a] text-[#bf9848] rounded-xl flex items-center justify-center font-bold text-xl shadow-lg">02</div>
                             <h5 className="font-bold text-xl text-gray-900">Classification Nuance Audit</h5>
                             <p className="text-sm leading-relaxed text-gray-600">The Registry often misclassifies marks. We search for your goods/services description rather than just the class number to find 'hidden competitors' who were filed in the wrong class.</p>
                          </div>
                          <div className="space-y-4">
                             <div className="w-12 h-12 bg-[#0d1b2a] text-[#bf9848] rounded-xl flex items-center justify-center font-bold text-xl shadow-lg">03</div>
                             <h5 className="font-bold text-xl text-gray-900">Well-Known Mark Dilution Check</h5>
                             <p className="text-sm leading-relaxed text-gray-600">Well-known marks (Tata, Mercedes, Reliance) have 'Trans-Border Reputation'. Using any part of their name, even in an unrelated industry, is a high-risk move that our audit flags immediately.</p>
                          </div>
                          <div className="space-y-4">
                             <div className="w-12 h-12 bg-[#0d1b2a] text-[#bf9848] rounded-xl flex items-center justify-center font-bold text-xl shadow-lg">04</div>
                             <h5 className="font-bold text-xl text-gray-900">Owner Portfolio Analysis</h5>
                             <p className="text-sm leading-relaxed text-gray-600">If we find a similar mark, we check who owns it. Some companies are 'Litigation-Happy' and will oppose even minor similarities, while others are dormant. This 'Social Audit' of the competitor is part of our strategic advice.</p>
                          </div>
                       </div>

                       <div className="pt-8 border-t border-gray-100 text-center">
                          <p className="text-xl font-bold text-[#0d1b2a] mb-4">"A search report is a legal insurance policy for your brand."</p>
                          <p className="text-gray-500 max-w-2xl mx-auto">
                             At AMA Legal Solutions, every search report is vetted by a Senior IP Attorney with 10+ years of experience in the High Court. We don't just give you data; we give you a path forward.
                          </p>
                       </div>
                    </div>
                  </div>
                </section>

                {/* Client Success Stories */}
                <section id="reviews" className="scroll-mt-32 border-t border-gray-100 pt-16">
                  <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 leading-tight">Client Success: Why We Rank #1</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    {reviewSchema.review.map((review, index) => (
                      <div key={index} className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 relative group hover:bg-white hover:shadow-2xl transition-all duration-500">
                        <FaQuoteLeft className="text-5xl text-[#bf9848] opacity-10 absolute top-8 left-8" />
                        <div className="relative z-10">
                          <div className="flex text-[#bf9848] mb-4">
                            {[...Array(5)].map((_, i) => <FaStar key={i} />)}
                          </div>
                          <p className="text-gray-700 italic mb-6 leading-relaxed">"{review.reviewBody}"</p>
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-[#0d1b2a] rounded-full flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform">
                              {review.author.name.charAt(0)}
                            </div>
                            <div>
                               <p className="font-black text-gray-900">{review.author.name}</p>
                               <p className="text-xs text-gray-400 uppercase tracking-widest">Verified Client</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* FAQs Section */}
                <section id="faqs" className="scroll-mt-32 border-t border-gray-100 pt-16">
                  <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-12 leading-tight">Expert FAQs: Technical Trademark Search</h2>
                  <div className="divide-y divide-gray-100">
                    {faqs.map((faq, index) => (
                      <div key={index} className="py-8 group">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 flex items-start gap-4 group-hover:text-[#bf9848] transition-colors">
                          <span className="text-[#bf9848] opacity-50">Q{index + 1}.</span>
                          {faq.question}
                        </h3>
                        <p className="text-gray-600 leading-relaxed pl-12">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Final CTA */}
                <section className="bg-gradient-to-br from-[#0d1b2a] via-[#1a202c] to-black rounded-[3rem] p-10 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
                  <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                  <div className="relative z-10 max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-6xl font-black mb-8 leading-tight">Stop Guessing. <br /> Start Searching.</h2>
                    <p className="text-lg md:text-2xl opacity-80 mb-12 font-light">
                      A 10-minute search today can save you 10 years of legal litigation tomorrow. Get a professional 20-point search audit for your brand.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                      <Link href="/contact" className="w-full sm:w-auto">
                        <button className="bg-[#bf9848] hover:bg-white hover:text-[#0d1b2a] text-white font-black py-5 px-16 rounded-full transition-all transform hover:scale-110 shadow-2xl text-xl w-full">
                          Get Law-Firm Verified Search
                        </button>
                      </Link>
                      <a href="tel:+918700343611" className="w-full sm:w-auto">
                        <button className="bg-transparent border-2 border-white/30 hover:border-white text-white font-bold py-5 px-16 rounded-full transition-all text-xl w-full">
                          Call: +91-8700343611
                        </button>
                      </a>
                    </div>
                  </div>
                </section>

              </div>
            </div>

            {/* Right Sidebar - Sticky Contact */}
            <div className="hidden lg:block space-y-8 sticky top-28">
              <div className="bg-[#0d1b2a] text-white p-8 rounded-3xl shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#bf9848] opacity-10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                <h3 className="text-2xl font-bold mb-4 relative z-10">Instant Brand Check</h3>
                <p className="text-gray-400 mb-8 text-sm relative z-10 leading-relaxed">
                  Avoid legal rejections. Get an attorney-led 20-point search report in 4 hours.
                </p>
                <div className="space-y-4 relative z-10">
                  <a href="tel:+918700343611" className="flex items-center justify-center w-full bg-[#bf9848] py-4 rounded-xl font-bold hover:bg-[#9e7d3a] transition-all gap-2">
                    Start Now
                  </a>
                  <Link href="/contact" className="flex items-center justify-center w-full border border-gray-700 py-4 rounded-xl font-bold hover:bg-white hover:text-[#0d1b2a] transition-all gap-2">
                    Free Consultation
                  </Link>
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-6">Search Stats</h4>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <FaCheckDouble className="text-[#bf9848] flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-sm">45-Class Check</p>
                      <p className="text-xs text-gray-500 mt-1">We scan all goods/services classes for hidden conflicts.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <FaStar className="text-[#bf9848] flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-sm">Phonetic Logic</p>
                      <p className="text-xs text-gray-500 mt-1">Manual auditory check for deceptive rhyming similarities.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <FaGlobe className="text-[#bf9848] flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-sm">International Data</p>
                      <p className="text-xs text-gray-500 mt-1">WIPO Global Brand Database support for exporters.</p>
                    </div>
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
