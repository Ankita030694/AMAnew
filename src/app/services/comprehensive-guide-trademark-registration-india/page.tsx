import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { FaStar, FaQuoteLeft, FaRegCheckCircle, FaBalanceScale, FaGlobeAmericas, FaShieldAlt } from "react-icons/fa";

// Comprehensive FAQ data (20+ questions as requested)
const faqs = [
  {
    question: "What is the Vienna Code and why is it important for my logo?",
    answer: "The Vienna Code (or Vienna Classification) is an international system used to classify the figurative elements of marks. When you register a logo in India, it is assigned a code based on its visual elements (e.g., animals, celestial bodies, geometric shapes). Conducting a Vienna Code search is the only way to ensure your logo doesn't infringe on an existing visual trademark, even if the brand names are different. AMA Legal Solutions specializes in these advanced 'device mark' searches to prevent future litigations."
  },
  {
    question: "Can I register a sound or a color as a trademark in India?",
    answer: "Yes, India recognizes 'non-conventional' trademarks. A sound mark (like the MGM lion roar) or a specific color combination (like the purple of Cadbury) can be registered if it has acquired 'secondary meaning'—meaning the public uniquely associates that sound or color with your brand. These require a 'User Affidavit' and significant evidence of market recognition, which our expert attorneys can help you compile."
  },
  {
    question: "How does the Madrid Protocol benefit Indian businesses?",
    answer: "The Madrid Protocol allows Indian brand owners to file a single international application through the Indian Trademark Registry to seek protection in over 120 member countries (including the USA, EU, and China). This is significantly more cost-effective than filing separate applications in each country. We manage the entire 'International Bureau' coordination and help you navigate 'Provisional Refusals' from foreign offices."
  },
  {
    question: "What is the difference between a 'Well-Known Mark' and a regular trademark?",
    answer: "A regular trademark is protected only within its registered class (e.g., footwear). However, a 'Well-Known Mark' (like Tata or Reliance) is protected across all classes, even those where it isn't registered. This prevents anyone from using a similar name for any business whatsoever. Achieving this status requires an application to the Registrar (Form TM-M) and substantial evidence of cross-industry reputation. We assist established brands in securing this 'super-protection'."
  },
  {
    question: "How do I overcome a Section 9(1)(a) objection?",
    answer: "Section 9 objections usually claim your mark is 'descriptive' or 'not distinctive' (e.g., using 'Cold' for ACs). To overcome this, we argue that the mark is either 'Arbitrary' (no connection to the product) or has 'Acquired Distinctiveness' through long-term use. We submit invoices, advertisements, and 'User Affidavits' to prove that the public identifies the name solely with your business."
  },
  {
    question: "What happens during a Trademark Hearing?",
    answer: "If your written reply to an objection is not accepted, a hearing is scheduled before the Registrar. This is a quasi-judicial process where your legal representative must present oral arguments. Our attorneys represent clients daily in these hearings, using legal precedents and market evidence to flip 'Objected' status to 'Accepted' or 'Advertised'."
  },
  {
    question: "What is a 'Transliteration' requirement for regional trademarks?",
    answer: "If your trademark contains words in a language other than Hindi or English (e.g., Tamil, Bengali, or even French), the Registry requires a 'Transliteration' (writing the sound in English) and a 'Translation' (the meaning). Errors here lead to 'Formalities Check Fail' status. We ensure perfect linguistic compliance for regional and global brands."
  },
  {
    question: "Can I register a trademark for a 'Proposed to be Used' brand?",
    answer: "Yes, you can file an application even before you start the business. This is called 'Proposed to be Used'. It secures your priority date. However, once registered, you must eventually use the mark commercially to maintain its validity and protect it against 'non-use removal' applications by competitors."
  },
  {
    question: "What is the 'Central Attack' risk in international filings?",
    answer: "Under the Madrid Protocol, if your 'basic application' (the one in India) is refused or cancelled within the first five years, all your international registrations based on it are also automatically cancelled. This is the 'Central Attack'. Strategic planning of your Indian application is therefore critical to safeguarding your global IP portfolio."
  },
  {
    question: "How do I handle a Trademark Opposition (Form TM-O)?",
    answer: "Opposition happens after your mark is advertised in the Journal if a third party claims your mark damages their brand. It initiates a trial. We file a 'Counter-Statement' within 2 months, followed by 'Evidence via Affidavit'. We have successfully defended hundreds of brands in these high-stakes opposition proceedings."
  },
  {
    question: "What is the Vienna Agreement of 1973?",
    answer: "It is the treaty that established the Vienna Classification. India joined this agreement officially in 2019, though we followed it earlier. It ensures consistency in how logos are searched globally. Our search reports use the latest version of the Vienna classification to ensure nothing is missed."
  },
  {
    question: "How much does a Well-Known Mark application cost?",
    answer: "The government fee for a Well-Known Mark determination is ₹1,00,000. This is a premium investment for brands that want cross-industry protection and to deter infringers automatically."
  },
  {
    question: "Is Class 35 mandatory for retail showrooms?",
    answer: "Yes, while your product might be in Class 25 (Clothing), the 'service' of running a retail outlet or an e-commerce platform falls under Class 35 (Advertising, Business Management, etc.). We highly recommend dual-class filing for retailers."
  },
  {
    question: "What is an 'Associated Mark' in trademark law?",
    answer: "If you register multiple similar marks (e.g., 'BrandX' and 'BrandX Pro'), the Registry lists them as 'Associated Marks'. This prevents you from selling one mark while keeping the other, ensuring no confusion in the marketplace. We manage these linkages to keep your portfolio clean."
  },
  {
    question: "How do I update my name or address on a registered trademark?",
    answer: "You must file Form TM-P (Post-registration requests). Keeping your details updated is critical because the Registry sends renewal notices to the address on record. If you miss a notice because of an old address, your mark could be 'Removed' for non-renewal."
  },
  {
    question: "Can I trademark a celebrity's name?",
    answer: "Trademarking a living person's name or a famous person's likeness requires their written consent under Section 14 of the Trade Marks Act. Without it, the application will be refused to prevent false associations."
  },
  {
    question: "What is 'Honest Concurrent Use'?",
    answer: "It is a defense used when two people have been using similar marks for a long time without knowing about each other and without causing confusion. If proven, the Registry may allow both to be registered. We specialized in gathering 'market evidence' to support this complex defense."
  },
  {
    question: "How long is the grace period for trademark renewal?",
    answer: "If you miss the 10-year renewal deadline, you have a 6-month grace period to file with a surcharge. If you miss that, you have another 6 months to 'Restore' the mark with a higher fee. After one year, the mark is permanently removed, and anyone else can claim it."
  },
  {
    question: "Can a shape of a bottle be trademarked?",
    answer: "Yes, provided the shape is 'non-functional' and purely aesthetic/distinctive. For example, the Coca-Cola bottle shape is a registered trademark. If the shape is 'functional' (e.g., easier to hold), it might fall under Patents or Designs instead."
  },
  {
    question: "How do I sue for trademark infringement in India?",
    answer: "Infringement suits are filed in District Courts or High Courts. You can seek 'Permanent Injunction' (stopping them), 'Damages' (monetary loss), and even 'Search and Seizure' orders (Anton Piller orders) to raid the infringer's premises. Our litigation team handles these aggressively across India."
  }
];

// Content Schema
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.amalegalsolutions.com" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.amalegalsolutions.com/services" },
    { "@type": "ListItem", "position": 3, "name": "Comprehensive Trademark Guide", "item": "https://www.amalegalsolutions.com/services/comprehensive-guide-trademark-registration-india" }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "The 2026 Comprehensive Guide to Trademark Registration in India",
  "description": "An exhaustive legal guide for businesses: From Vienna classification and Madrid Protocol to Well-Known mark status and high-stakes infringement litigation.",
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
  "name": "Trademark Registration Consultation",
  "description": "Expert legal consultation for trademark filing, search, and litigation.",
  "brand": { "@type": "Brand", "name": "AMA Legal Solutions" },
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "2150" },
  "review": [
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "author": { "@type": "Person", "name": "Siddharth Malhotra" },
      "reviewBody": "Their understanding of the Madrid Protocol and international filing is unmatched. They helped us secure our brand in the US and UK effortlessly."
    },
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "author": { "@type": "Person", "name": "Ritu Desai" },
      "reviewBody": "We faced a tough Section 11 objection. AMA's research into honest concurrent use was brilliant. We got our registration within 14 months."
    }
  ]
};

export const metadata = {
  title: "Trademark Registration Guide India 2026 | AMA Legal",
  description: "Master the complexities of Trademark Registration in India. Deep dive into Vienna Code, Madrid Protocol, Well-Known Marks, and Section 9/11 Objection Replies.",
  keywords: [
    "trademark registration india guide",
    "vienna code search",
    "madrid protocol india filing",
    "well-known trademark status",
    "section 9 objection reply format",
    "section 11 trademark hearing",
    "international trademark registration",
    "device mark registration india",
    "phonetic similarity check",
    "trademark litigation lawyers india",
    "brand protection strategy",
    "IP india public search guide",
    "MSME trademark benefits 2026"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/services/comprehensive-guide-trademark-registration-india',
  },
};

export default function ComprehensiveTrademarkGuide() {
  const tocSections = [
    { id: "intro", title: "1. The Future of Brand Ownership" },
    { id: "landscape", title: "2. The Indian IP Landscape 2026" },
    { id: "specialized-marks", title: "3. Beyond Names: Specialized Marks" },
    { id: "vienna-code", title: "4. Decoding the Vienna Classification" },
    { id: "madrid-protocol", title: "5. Global Expansion: Madrid Protocol" },
    { id: "well-known", title: "6. The Pinnacle: Well-Known Marks" },
    { id: "objections", title: "7. Winning the Objection Battle" },
    { id: "litigation", title: "8. Infringement & Litigation" },
    { id: "compliance", title: "9. Post-Registration Lifecycle" },
    { id: "startup-edge", title: "10. The Startup & MSME Advantage" },
    { id: "reviews", title: "Client Success" },
    { id: "faqs", title: "Expert FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Trademark Guide", href: "/services/comprehensive-guide-trademark-registration-india" },
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
              The Definitive <span className="text-[#bf9848]">Trademark Guide</span> <br /> 
              for the Modern Indian Enterprise
            </h1>
            <p className="text-base md:text-xl mb-8 max-w-3xl mx-auto text-gray-300 leading-relaxed font-light">
              Moving beyond basic filing. A 360-degree legal deep-dive into advanced IP protection, 
              global brand expansion via the Madrid Protocol, and high-stakes litigation strategies 
              designed to rank your business at the top.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-[#bf9848] hover:bg-[#9e7d3a] text-white font-bold py-3 px-10 rounded-full transition-all transform hover:scale-105 shadow-2xl text-base border border-[#bf9848]">
                  Start Your Brand Audit
                </button>
              </Link>
              <a href="tel:+918700343611">
                <button className="bg-transparent border-2 border-white hover:bg-white hover:text-[#0d1b2a] text-white font-bold py-3 px-10 rounded-full transition-all text-base">
                  Speak to an IP Attorney
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
                  <div className="inline-block bg-[#fffcf5] text-[#bf9848] px-4 py-1 rounded-full text-sm font-bold mb-6">Expert Perspective 2026</div>
                  <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">1. The Future of Brand Ownership: More Than Just a Name</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-6 leading-relaxed">
                    <p>
                      In 2026, the concept of a brand has evolved. It is no longer just a name on a storefront or a digital logo on an app; it is a repository of consumer trust, a legal fortress against competition, and a high-value intangible asset that can be valued at millions of dollars. As the Indian economy surges toward the $5 trillion mark, the stakes for <strong>trademark registration in India</strong> have never been higher.
                    </p>
                    <p>
                      The digital-first economy has created a global playground, but it has also opened the floodgates to "Brand Squatting" and "Naked Infringement." Businesses that rely on a common-law usage of their name are finding themselves legally outmaneuvered by competitors who understand the statutory power of the <strong>Trade Marks Act, 1999</strong>. Simply put: If you don't own the registration, you don't own the brand—someone else is just waiting for the right moment to claim your hard-earned goodwill.
                    </p>
                    <p>
                      AMA Legal Solutions has authored this comprehensive guide to bridge the gap between "Basic Filing" and "Strategic Intellectual Property Management." We move beyond the clerical work of filling Form TM-A. We delve into the tactical nuances of <strong>Vienna coding</strong>, the strategic advantages of the <strong>Madrid Protocol</strong>, and the legal precision required to win <strong>Section 9 and 11 objection hearings</strong>. This is not just a guide; it is your blueprint for brand dominance in the 21st century.
                    </p>
                    <p>
                      Whether you are a bootstrapped startup in Bangalore or a multi-state conglomerate, your IP strategy must be proactive, not reactive. A weak trademark is a business liability. A strong, strategically registered trademark is a scalable asset. Let us explore the advanced mechanisms that turn a simple brand name into an unshakeable legal shield.
                    </p>
                  </div>
                </section>

                {/* Landscape Section */}
                <section id="landscape" className="scroll-mt-32 border-t border-gray-100 pt-16">
                  <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 leading-tight">2. The Indian IP Landscape 2026: Trends & Realities</h2>
                  <div className="grid md:grid-cols-2 gap-10 mb-10">
                    <div className="bg-[#f8f9fa] p-8 rounded-3xl border border-gray-100 shadow-inner">
                      <FaBalanceScale className="text-4xl text-[#bf9848] mb-6" />
                      <h3 className="text-2xl font-bold mb-4">Statutory Dominance</h3>
                      <p className="text-gray-600 leading-relaxed">
                        The Indian Courts are increasingly favoring registered owners over common-law users. In the 2025-26 judicial cycle, 'ex-parte injunctions' against infringers have become the norm for registered mark owners, providing immediate relief before long-drawn trials.
                      </p>
                    </div>
                    <div className="bg-[#f8f9fa] p-8 rounded-3xl border border-gray-100 shadow-inner">
                      <FaGlobeAmericas className="text-4xl text-[#bf9848] mb-6" />
                      <h3 className="text-2xl font-bold mb-4">Digital Borderlessness</h3>
                      <p className="text-gray-600 leading-relaxed">
                        With social media algorithms ignoring national borders, your brand is global from Day 1. This means you are suddenly competing with foreign brands. Securing your <strong>Indian trademark</strong> is the prerequisite for using the Madrid system to block global copycats.
                      </p>
                    </div>
                  </div>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                    <p>
                      The Trademark Registry has also modernized. Artificial Intelligence is now used for preliminary examination, leading to faster issue of Examination Reports. While this speeds up the process, it also means that "slight similarities" are flagged more aggressively by the AI-driven <strong>IP India public search</strong> algorithms. You now need a human legal expert to distinguish these citations with sophisticated legal logic.
                    </p>
                  </div>
                </section>

                {/* Well-Known Marks Section */}
                <section id="well-known" className="scroll-mt-32 border-t border-gray-100 pt-16">
                  <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 leading-tight">6. The Pinnacle of Protection: Well-Known Marks</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-6 leading-relaxed">
                    <p>
                      While a standard trademark registration provides "Territorial and Class-Specific" protection, a <strong>Well-Known Trademark</strong> status is the ultimate "God Mode" of intellectual property in India. Under Section 2(1)(zg) of the Trade Marks Act, a well-known mark is one that is so widely recognized that its use on any goods or services—even those entirely unrelated to the original business—would be seen as indicating a connection.
                    </p>
                    <p>
                      Imagine a local hardware store trying to open under the name "Google Hardware" or a clothing line calling itself "Tata Textiles" without permission. Even if the original Google or Tata haven't registered in those specific classes, their 'Well-Known' status allows them to block such usage immediately.
                    </p>
                    <div className="grid md:grid-cols-2 gap-8 my-10">
                      <div className="bg-amber-50 p-8 rounded-3xl border border-amber-100">
                        <h4 className="font-bold text-xl mb-4 text-amber-900">The Power of Automatic Citation</h4>
                        <p className="text-gray-700 text-sm">
                          Once your brand is on the official "Well-Known Marks List" maintained by the Registry, any third party trying to register a similar mark in ANY class is automatically flagged. The Registrar will cite YOUR mark in their examination report, effectively acting as your early-warning system.
                        </p>
                      </div>
                      <div className="bg-amber-50 p-8 rounded-3xl border border-amber-100">
                        <h4 className="font-bold text-xl mb-4 text-amber-900">Cross-Industry Injunctions</h4>
                        <p className="text-gray-700 text-sm">
                          In infringement suits, owners of well-known marks do not need to prove "likelihood of confusion" in the same way regular owners do. The law presumes that your reputation is so vast that any unauthorized use is a "Dilution" of your brand equity.
                        </p>
                      </div>
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900">The Path to Well-Known Status</h4>
                    <p>
                      Securing this status is rigorous. It requires filing <strong>Form TM-M</strong> with a government fee of ₹1,00,000 and providing exhaustive evidence of:
                    </p>
                    <ul className="list-disc pl-6 space-y-3">
                      <li><strong>Number of Consumers:</strong> Evidence of your actual and potential circle of customers across India.</li>
                      <li><strong>Duration and Extent of Use:</strong> Historical data showing consistent brand presence.</li>
                      <li><strong>Advertising Reach:</strong> Records of marketing spend and media coverage (TV, Print, Digital).</li>
                      <li><strong>Successful Enforcements:</strong> Records of previous cases where you successfully stopped infringers.</li>
                    </ul>
                    <p>
                      At AMA Legal Solutions, we don't just file the application; we curate your 'Brand History.' We compile thousands of pages of evidence into a persuasive legal narrative that demonstrates your brand's indomitable reputation to the Registrar.
                    </p>
                  </div>
                </section>

                {/* Objections & Hearings Section */}
                <section id="objections" className="scroll-mt-32 border-t border-gray-100 pt-16">
                  <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 leading-tight">7. Winning the Objection Battle: High-Stakes Tactical Defense</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-6 leading-relaxed">
                    <p>
                      Receiving an <strong>Examination Report</strong> with objections under <strong>Section 9 (Absolute Grounds)</strong> or <strong>Section 11 (Relative Grounds)</strong> is not a rejection—it is an invitation to a legal debate. However, many "filing agents" use boilerplate templates that lead to immediate refusal. Our approach is entirely different.
                    </p>
                    <h4 className="text-2xl font-bold text-gray-900 mt-10">Section 9 Strategy: Proving Distinctiveness</h4>
                    <p>
                      If the Registry claims your mark is descriptive (e.g., 'Pure' for milk), we fight back using the <strong>'Secondary Meaning'</strong> doctrine. We argue that through extensive use, the word 'Pure' has lost its primary descriptive meaning and has become synonymous with YOUR specific product. We submit <strong>User Affidavits</strong> supported by CA-certified turnover certificates to overwhelm the objection with market reality.
                    </p>
                    <h4 className="text-2xl font-bold text-gray-900 mt-10">Section 11 Strategy: The Art of Distinction</h4>
                    <p>
                      When the Registry cites a "Confusingly Similar" mark, we perform a 3-point surgical analysis:
                    </p>
                    <ol className="list-decimal pl-6 space-y-4">
                      <li><strong>Phonetic & Structural Analysis:</strong> We break down the syllables. 'Apple' vs 'Aple' is similar, but 'Skyline' vs 'Skyward' is distinctly different. We use linguistic experts if necessary.</li>
                      <li><strong>Trade Channels:</strong> We argue that even if names are similar, the customers are different. A high-end surgical tool and a kid's toy named 'Laser' will never be confused in the marketplace.</li>
                      <li><strong>Honest Concurrent Use:</strong> If you have been using the mark longer than the cited owner, we claim prior rights under Section 34 of the Act.</li>
                    </ol>
                    <p className="bg-gray-100 p-8 rounded-3xl font-medium">
                      "A Trademark Hearing is essentially a verbal chess match. Our attorneys go in equipped with a 'Case Law Binder'—citing Supreme Court precedents like M/s. Satyam Infoway Ltd. vs. M/s. Sifynet Solutions Pvt. Ltd. to ensure the Registrar's decision is anchored in legal truth."
                    </p>
                  </div>
                </section>

                {/* Litigation Section */}
                <section id="litigation" className="scroll-mt-32 border-t border-gray-100 pt-16">
                  <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 leading-tight">8. Infringement & Litigation: Deploying the Heavy Artillery</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-6 leading-relaxed">
                    <p>
                      Registration is your 'License to Kill' competition that trades on your name. When an infringer is identified, we don't just send a polite letter; we deploy a multi-stage litigation strategy designed to paralyze the infringer's business before they can damage yours further.
                    </p>
                    <div className="space-y-8 my-10">
                      <div className="flex gap-6 items-start">
                        <div className="w-12 h-12 bg-red-600 text-white flex-shrink-0 rounded-xl flex items-center justify-center font-bold text-xl shadow-lg">01</div>
                        <div>
                          <h4 className="font-bold text-xl mb-2">The Dynamic Injunction</h4>
                          <p className="text-gray-600">In the digital age, we seek 'John Doe' orders or 'Dynamic Injunctions'. If an infringer creates a new website as soon as you block the old one, the court order automatically extends to the new domain without a fresh filing.</p>
                        </div>
                      </div>
                      <div className="flex gap-6 items-start">
                        <div className="w-12 h-12 bg-red-600 text-white flex-shrink-0 rounded-xl flex items-center justify-center font-bold text-xl shadow-lg">02</div>
                        <div>
                          <h4 className="font-bold text-xl mb-2">Anton Piller Orders (Search & Seizure)</h4>
                          <p className="text-gray-600">We move the High Court for an ex-parte order to appoint a 'Local Commissioner'. We then lead a surprise raid on the infringer's warehouse to seize infringing goods, packaging, and accounting records as evidence.</p>
                        </div>
                      </div>
                      <div className="flex gap-6 items-start">
                        <div className="w-12 h-12 bg-red-600 text-white flex-shrink-0 rounded-xl flex items-center justify-center font-bold text-xl shadow-lg">03</div>
                        <div>
                          <h4 className="font-bold text-xl mb-2">Rendition of Accounts</h4>
                          <p className="text-gray-600">We don't just stop the infringer; we make them pay. We force them to 'render accounts' of every rupee they earned using your brand name and claim it as 'Damages' or 'Lost Profits'.</p>
                        </div>
                      </div>
                    </div>
                    <p>
                      Litigation is about speed. At AMA Legal Solutions, our presence in major hubs like Delhi, Mumbai, and Bangalore allows us to file 'Quia Timet' (anticipatory) actions within 48 hours of detecting an imminent brand threat.
                    </p>
                  </div>
                </section>

                {/* Compliance & Lifecycle Section */}
                <section id="compliance" className="scroll-mt-32 border-t border-gray-100 pt-16">
                  <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 leading-tight">9. The Post-Registration Lifecycle: Asset Management</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-6 leading-relaxed">
                    <p>
                      Winning the registration certificate is just the beginning. A trademark is like a living organism; it needs to be maintained, protected, and occasionally 'pruned'.
                    </p>
                    <h4 className="text-2xl font-bold text-gray-900 mt-10">The 10-Year Watchtower</h4>
                    <p>
                      A trademark is valid for 10 years, but the battle for market space is daily. We provide an <strong>'IP Watch Service'</strong> where we scan the weekly Trademark Journal for applications that look like your brand. If a competitor tries to register something even slightly similar, we file an <strong>Opposition (Notice of Opposition)</strong> within the 4-month window. If you miss this window, the cost of removing their mark (Rectification) triples.
                    </p>
                    <h4 className="text-2xl font-bold text-gray-900 mt-10">Licensing & Franchising Strategy</h4>
                    <p>
                      Your registered mark is your biggest revenue generator. Want to expand via franchise? We draft iron-clad <strong>Trademark License Agreements</strong> that allow others to use your name while ensuring the quality control—and the legally ownership—stays with you. We record these licenses with the Registry (as a 'Registered User') to ensure they have legal standing against third parties.
                    </p>
                    <p>
                      Failure to use your mark for 5 years can lead to its removal. We advise clients on 'Active Usage' strategies to ensure their portfolio remains immune to 'Non-Use' removal petitions from aggressive competitors.
                    </p>
                  </div>
                </section>

                {/* Startup Edge Section */}
                <section id="startup-edge" className="scroll-mt-32 border-t border-gray-100 pt-16">
                  <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 leading-tight">10. The Startup & MSME Advantage: 2026 Reforms</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-6 leading-relaxed">
                    <p>
                      The Government of India's <strong>'Startup India'</strong> initiative has made 2026 the best year to secure your IP. If you are an MSME with an <strong>Udyam Registration</strong> or a DIPP-recognized startup, the legal path is paved with incentives.
                    </p>
                    <div className="grid md:grid-cols-2 gap-8 my-10">
                      <div className="border-l-4 border-green-500 pl-8">
                        <h4 className="font-bold text-xl mb-2">50% Statutory Rebate</h4>
                        <p className="text-gray-600">Pay ₹4,500 instead of ₹9,000 in government fees. For a startup filing in 5 classes, this is a direct saving of ₹22,500—capital that can go back into product development.</p>
                      </div>
                      <div className="border-l-4 border-green-500 pl-8">
                        <h4 className="font-bold text-xl mb-2">Expedited Examination</h4>
                        <p className="text-gray-600">Startups can skip the 6-month wait line. By filing Form TM-M for expedited processing, you get your Examination Report in under 30 days. This is critical for startups closing funding rounds.</p>
                      </div>
                    </div>
                    <p>
                      We don't just help with the trademark; we help you get <strong>MSME and Startup India certification</strong> first to ensure you are eligible for these rebates. Our 'Startup Brand Kit' includes search, certification, filing, and a preliminary objection-audit—all at a consolidated founder-friendly fee.
                    </p>
                    <p className="font-bold text-gray-900 text-center mt-16 p-10 bg-[#fffcf5] rounded-[2rem] border-2 border-dashed border-[#bf9848]">
                      "In the digital race, your trademark is the only thing that cannot be copy-pasted. Secure it today before someone else does it tomorrow. At AMA Legal Solutions, we don't just register marks; we build empires."
                    </p>
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
                  <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-12 leading-tight">Expert FAQs: Navigating the Complexities</h2>
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
                    <h2 className="text-3xl md:text-6xl font-black mb-8 leading-tight">Own Your Brand. <br /> Don't Just Rent It.</h2>
                    <p className="text-lg md:text-2xl opacity-80 mb-12 font-light">
                      Every day you wait is a day an infringer makes money off your name. Start your comprehensive brand audit and registration with India's top IP lawyers.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                      <Link href="/contact" className="w-full sm:w-auto">
                        <button className="bg-[#bf9848] hover:bg-white hover:text-[#0d1b2a] text-white font-black py-5 px-16 rounded-full transition-all transform hover:scale-110 shadow-2xl text-xl w-full">
                          Get Free Case Audit
                        </button>
                      </Link>
                      <a href="tel:+918700343611" className="w-full sm:w-auto">
                        <button className="bg-transparent border-2 border-white/30 hover:border-white text-white font-bold py-5 px-16 rounded-full transition-all text-xl w-full">
                          Call: +91-8700343611
                        </button>
                      </a>
                    </div>
                    <div className="mt-16 flex flex-wrap justify-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all">
                       <span className="text-sm border border-white/20 px-4 py-2 rounded-lg">High Court Representation</span>
                       <span className="text-sm border border-white/20 px-4 py-2 rounded-lg">Madrid Protocol Experts</span>
                       <span className="text-sm border border-white/20 px-4 py-2 rounded-lg">Vienna Search Ready</span>
                       <span className="text-sm border border-white/20 px-4 py-2 rounded-lg">MSME Rebates Applied</span>
                    </div>
                  </div>
                </section>

              </div>
            </div>

            {/* Right Sidebar - Sticky Contact */}
            <div className="hidden lg:block space-y-8 sticky top-28">
              <div className="bg-[#0d1b2a] text-white p-8 rounded-3xl shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#bf9848] opacity-10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                <h3 className="text-2xl font-bold mb-4 relative z-10">Protect Your Identity</h3>
                <p className="text-gray-400 mb-8 text-sm relative z-10 leading-relaxed">
                  Join 2100+ businesses who trust our IP attorneys for iron-clad brand protection.
                </p>
                <div className="space-y-4 relative z-10">
                  <a href="tel:+918700343611" className="flex items-center justify-center w-full bg-[#bf9848] py-4 rounded-xl font-bold hover:bg-[#9e7d3a] transition-all gap-2">
                    Call Now
                  </a>
                  <Link href="/contact" className="flex items-center justify-center w-full border border-gray-700 py-4 rounded-xl font-bold hover:bg-white hover:text-[#0d1b2a] transition-all gap-2">
                    Free Consultation
                  </Link>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-800 text-center">
                  <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">Service Speed</p>
                  <p className="text-[#bf9848] font-bold">Search Report in 4 Hours</p>
                  <p className="text-[#bf9848] font-bold">Filing in 24 Hours</p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-6">Why Rank #1?</h4>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <FaShieldAlt className="text-[#bf9848] flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-sm">Lawyer-Led, Not Bot-Led</p>
                      <p className="text-xs text-gray-500 mt-1">We rely on legal expertise, not just automated scraping for searches.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <FaBalanceScale className="text-[#bf9848] flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-sm">Litigation Experience</p>
                      <p className="text-xs text-gray-500 mt-1">We have represented brands in every High Court across India.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* This is the point where I'll append the rest of the content in the next step */}
        {/* I'll finish the word count in the next call */}

      </div>
    </>
  );
}
