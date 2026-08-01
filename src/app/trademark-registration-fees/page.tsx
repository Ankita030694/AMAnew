import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "What are the government fees for trademark registration in India for individuals?",
    answer: "For individuals, startups, and MSMEs in India, the government fee for filing a trademark application is ₹4,500 for e-filing. If you choose physical filing, the cost is slightly higher at ₹5,000. This 50% concession is provided to encourage small entities and individual creators to protect their intellectual property rights."
  },
  {
    question: "How much does a company pay for trademark registration in India?",
    answer: "A company or any other entity that does not qualify as a startup or MSME must pay ₹9,000 for e-filing a trademark application per class. For physical filing, the fee is ₹10,000 per class. It is always recommended to use e-filing not only to save money but also to ensure faster processing of your application."
  },
  {
    question: "What is the fee for filing a trademark in multiple classes?",
    answer: "The government fee for trademark registration is calculated per class. For example, if an individual files a trademark in two classes, the e-filing fee will be ₹9,000 (₹4,500 x 2). For a company, it would be ₹18,000 (₹9,000 x 2). Choosing the right classes is crucial for comprehensive protection."
  },
  {
    question: "Are there any hidden costs in the trademark registration process?",
    answer: "While the filing fee is the primary cost, additional expenses may arise during the process. These include professional fees for attorneys, costs for responding to office actions or objections, and fees for representation if a hearing is scheduled. It is wise to budget for these possibilities to ensure your trademark reaches registration without financial hurdles."
  },
  {
    question: "How much is the professional fee for a trademark attorney in India?",
    answer: "Professional fees vary depending on the expertise of the attorney and the complexity of the brand. Typically, basic filing services range from ₹5,000 to ₹15,000. Comprehensive services that include a detailed search, drafting, and managing objections can range higher. Hiring an expert ensures that your application is legally sound from the start."
  },
  {
    question: "Is a trademark search really necessary, and does it cost extra?",
    answer: "Yes, a trademark search is absolutely essential to avoid potential conflicts and legal disputes. While some firms include it in their package, others may charge a nominal fee for a professional search report. Conducting a search before filing can save you thousands in future legal costs and prevent your application from being rejected."
  },
  {
    question: "What is the cost of renewing a trademark in India?",
    answer: "A trademark must be renewed every 10 years. The standard renewal fee is ₹9,000 per class for e-filing. If the renewal is filed late, an additional surcharge will apply. Maintaining your trademark registration is vital for preserving your brand value and legal rights over the long term."
  },
  {
    question: "How much does it cost to oppose a trademark application?",
    answer: "If you believe a new trademark application infringes on your rights, you can file an opposition. The government fee for filing a notice of opposition is ₹2,700 for e-filing. However, the legal costs for managing the opposition proceedings can vary based on the complexity and duration of the case."
  },
  {
    question: "What is the fee for a series trademark in India?",
    answer: "A series trademark allows you to register multiple marks that are substantially similar with minor differences. The government fee for a series trademark application is the same as the standard filing fee per class, but it covers the entire series, making it a cost-effective option for brands with multiple variations."
  },
  {
    question: "Are there concessions for startups and MSMEs in trademark fees?",
    answer: "Absolutely. Startups recognized by the DPIIT and registered MSMEs enjoy a 50% concession on government filing fees. This means they pay only ₹4,500 instead of ₹9,000. This initiative is part of the government's push to foster innovation and support small businesses across India."
  },
  {
    question: "What happens if my trademark application gets an objection?",
    answer: "If your application is objected to by the trademark registrar, you must file a response within 30 days. The cost for drafting a professional response typically ranges from ₹3,000 to ₹7,000. If the registrar is not satisfied, a hearing may be scheduled, which carries its own set of professional representation costs."
  },
  {
    question: "Can I file for a trademark internationally, and what are the fees?",
    answer: "Yes, you can file for international protection through the Madrid Protocol. The costs include a basic fee to the WIPO, plus individual fees for each member country you designate. The total cost fluctuates based on the number of countries and the exchange rate, often running into several thousand dollars."
  },
  {
    question: "What is the cost of restoring a removed trademark?",
    answer: "If your trademark has been removed from the register due to non-renewal, you can apply for restoration. The fee for restoration is ₹9,000 plus the renewal fee. This is an expensive process, which is why we always advise our clients to track their renewal dates carefully."
  },
  {
    question: "Do I have to pay for a trademark certificate?",
    answer: "Once your trademark is successfully registered and published, the digital certificate is issued at no additional government cost. However, if you require a certified copy for legal purposes, there is a specific fee prescribed by the registry for providing such documentation."
  },
  {
    question: "Is the trademark fee refundable if my application is rejected?",
    answer: "No, the government fees paid for a trademark application are non-refundable. Regardless of whether the application is accepted, rejected, or abandoned, the registry does not return the filing fees. This highlights the importance of doing thorough research and filing a strong application from the start."
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
      "name": "Trademark Registration Fees",
      "item": "https://www.amalegalsolutions.com/trademark-registration-fees"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Trademark Registration Fees in India 2026: A Comprehensive Fee Guide",
  "description": "Exhaustive guide on trademark registration costs in India. Learn about government fees, professional charges, and concessions for startups and MSMEs.",
  "image": "https://www.amalegalsolutions.com/services/trademark.png",
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
  "datePublished": "2026-01-31",
  "dateModified": "2026-01-31"
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
  "image": "https://www.amalegalsolutions.com/services/trademark.png",
  "description": "Professional trademark registration and IP services in India.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "1850"
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
        "name": "Ankit Verma"
      },
      "reviewBody": "AMA Legal Solutions made the trademark process so easy. Their fee structure was transparent, and they helped us save 50% as a startup. Highly professional!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Megha Gupta"
      },
      "reviewBody": "Excellent service for our company's trademark expansion. They managed multiple classes and handled objections with ease. Value for money."
    }
  ]
};

export const metadata = {
  title: "Trademark Registration Fees India 2026 | #1 Cost Guide",
  description:
    "Official guide to trademark and logo registration fees in India. Complete breakdown of government costs, professional fees, and startup concessions. Get protected today.",
  keywords: [
    "logo registration fees",
    "trademark registration fees",
    "trademark cost india",
    "government fee for trademark",
    "trademark application cost",
    "startup trademark fees",
    "msme trademark concession",
    "trademark renewal fees",
    "trademark attorney charges",
    "online trademark registration cost",
    "ip india portal fees"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/trademark-registration-fees',
  },
  openGraph: {
    title: "Trademark Registration Fees India 2026 | #1 Cost Guide",
    description: "Official guide to trademark registration fees in India. Complete breakdown of government costs and professional fees.",
    url: "https://www.amalegalsolutions.com/trademark-registration-fees",
    type: "website",
    images: [
      {
        url: "/services/trademark.png",
        width: 1200,
        height: 630,
        alt: "Trademark Registration Fees India",
      },
    ],
  },
};

export default function TrademarkFeesPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "govt-fees", title: "Government Fee Structure" },
    { id: "class-system", title: "Class-wise Explanation" },
    { id: "startup-benefits", title: "Startup & MSME Benefits" },
    { id: "professional-fees", title: "Professional Charges" },
    { id: "additional-costs", title: "Milestone & Hidden Costs" },
    { id: "renewal-restoration", title: "Renewal & Restoration" },
    { id: "international-filing", title: "International Costs" },
    { id: "comparison-table", title: "Cost Comparison" },
    { id: "why-choose-us", title: "Why AMA Legal Solutions" },
    { id: "testimonials", title: "Client Reviews" },
    { id: "faqs", title: "Comprehensive FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Trademark Registration Fees", href: "/trademark-registration-fees" },
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
        <div className="relative bg-[#0f172a] text-white">
          <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
          <div className="relative z-20 container mx-auto px-4 py-16 md:py-36 text-center">
            <h1 className="text-3xl md:text-6xl font-extrabold mb-6 leading-tight mt-10">
              Complete Guide to <span className="text-[#D2A02A]">Trademark Registration Fees</span> in India
            </h1>
            <p className="text-base md:text-2xl mb-8 md:mb-12 max-w-4xl mx-auto text-gray-200">
              Navigate the complex landscape of intellectual property costs with our exhaustive 2026 fee guide. From government charges to professional expertise, we cover every detail to ensure your brand remains protected without breaking the bank.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact">
                <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-xl text-lg">
                  Start Your Registration
                </button>
              </Link>
              <a href="tel:+918700343611" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold py-4 px-10 rounded-full transition-all text-lg flex items-center justify-center">
                Call Expert Advice
              </a>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-[1600px] py-10">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr_300px] gap-10 items-start mt-8">
            {/* Left Sidebar - TOC */}
            <div className="hidden lg:block sticky top-28 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h4 className="text-lg font-bold mb-4 text-[#D2A02A]">Guide Navigation</h4>
              <TableOfContents sections={tocSections} orientation="vertical" />
            </div>

            {/* Main Content Area */}
            <div className="min-w-0">
              <div className="lg:hidden mb-8 sticky top-20 z-10">
                <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-5 md:p-16 rounded-3xl shadow-lg space-y-12 md:space-y-20 border border-gray-50">
                
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-8 border-l-8 border-[#D2A02A] pl-6">Understanding the Cost of Brand Protection</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      In the modern business era, your brand is one of your most valuable assets. It represents your reputation, your quality, and the unique connection you have with your customers. However, many entrepreneurs and business owners in India are often deterred by the perceived complexity and costs associated with trademark registration. The question of how much it costs to register a trademark is one of the most frequent inquiries we receive at AMA Legal Solutions.
                    </p>
                    <p>
                      The cost of trademark registration in India is not a single, flat fee. It is a structured investment that varies based on the type of applicant, the number of categories or classes the brand falls into, and the level of professional support required to navigate the legal requirements. Whether you are a solo entrepreneur operating from a home office or a large multinational company expanding your footprint in India, understanding the financial breakdown of intellectual property protection is the first step toward securing your legacy.
                    </p>
                    <p>
                      A trademark provides you with the exclusive right to use a name, logo, slogan, or even a sound. This exclusivity is what prevents others from profiting off your hard work and confusing your customers. While the filing fee might seem like an expense, it is actually a defensive investment that saves you from the massive costs of litigation and rebranding that occur when someone else steals your identity. In this guide, we will peel back the layers of the Trademark Rules 2017 and provide you with a transparent, detailed view of every cost involved in the registration journey.
                    </p>
                    <p>
                      Protecting your brand is not just about paying a fee to the government. it is about strategic planning. By the end of this comprehensive guide, you will have a clear understanding of the government fee structure, the professional charges involved, and how you can leverage concessions provided by the Indian government to minimize your costs.
                    </p>
                  </div>
                </section>

                {/* Government Fee Structure */}
                <section id="govt-fees" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 md:mb-10">The Official Government Fee Breakdown</h2>
                  <div className="bg-gradient-to-r from-[#D2A02A]/10 to-transparent p-6 md:p-10 rounded-2xl border-l-4 border-[#D2A02A] mb-10">
                    <p className="text-lg md:text-xl font-medium text-gray-800 italic">
                      "The Trademark Rules 2017 introduced a clear distinction in fees based on the nature of the applicant and the method of filing, favoring digital adoption and small creators."
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-white border-2 border-gray-100 p-8 rounded-3xl hover:border-[#D2A02A] transition-all group shadow-sm">
                      <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">👤</div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Small Entities & Individuals</h3>
                      <p className="text-gray-600 mb-6">Applicable to individuals, recognized startups, and registered MSMEs.</p>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center py-2 border-b border-gray-50">
                          <span className="font-semibold">E-Filing Fee</span>
                          <span className="text-2xl font-bold text-[#D2A02A]">₹4,500</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-gray-50">
                          <span className="font-semibold">Physical Filing</span>
                          <span className="text-lg font-semibold text-gray-500">₹5,000</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white border-2 border-gray-100 p-8 rounded-3xl hover:border-[#D2A02A] transition-all group shadow-sm">
                      <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">🏢</div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Body Corporates & Others</h3>
                      <p className="text-gray-600 mb-6">Applicable to large companies, LLPs, and other legal entities.</p>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center py-2 border-b border-gray-50">
                          <span className="font-semibold">E-Filing Fee</span>
                          <span className="text-2xl font-bold text-[#D2A02A]">₹9,000</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-gray-50">
                          <span className="font-semibold">Physical Filing</span>
                          <span className="text-lg font-semibold text-gray-500">₹10,000</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      The government of India has made a conscious effort to move toward a digital-first approach. This is evident in the pricing strategy where e-filing (electronic filing through the IP India portal) is consistently 10% cheaper than physical filing at the trademark registry offices. For most businesses, e-filing is the only logical choice as it provides instant acknowledgment, faster tracking, and reduced administrative overhead.
                    </p>
                    <p>
                      It is important to note that these fees are per application and per class. If your business operates in multiple areas like clothing and retail services, you may need to file in two different classes. This would effectively double the government fee. Proper class selection is a critical part of the planning phase to ensure you get the maximum protection for every rupee spent.
                    </p>
                    <p>
                      Furthermore, for individuals and joint applicants, the lower fee of ₹4,500 applies regardless of the size of the turnover. This democratic approach ensures that even the smallest artist or inventor has the same access to the legal protections of the state as a large corporation. The fee is paid directly to the Controller General of Patents, Designs, and Trade Marks through the online payment gateway.
                    </p>
                  </div>
                </section>

                {/* Class-wise Explanation */}
                <section id="class-system" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 md:mb-10">The Impact of the Nice Classification System</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      One of the most common misconceptions is that a single trademark registration covers everything. in reality, trademarks are registered according to a specific classification of goods and services known as the Nice Classification. There are 45 classes in total: classes 1 to 34 are for goods, and classes 35 to 45 are for services.
                    </p>
                    <p>
                      The fee you pay is directly tied to how many classes you choose. If you are launching a brand for organic skincare (Class 3) but also plan to open a chain of retail stores (Class 35), you must pay for both. This means a company would pay ₹18,000 in government fees (₹9,000 x 2).
                    </p>
                    <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100 my-10">
                      <h4 className="text-xl font-bold text-blue-900 mb-4">Strategic Tip: Multi-Class Applications</h4>
                      <p className="text-blue-800">
                        While you can file a single application covering multiple classes (Form TM-A), the fee remains cumulative. There is no discount for bundling classes into one application. however, it does simplify the administrative tracking of your brand assets.
                      </p>
                    </div>
                    <p>
                      Choosing the right classes requires deep insight into your business's current operations and future expansion plans. Filing in the wrong class is a costly mistake as changes cannot be made after the application is submitted. You would have to file a fresh application and pay the fees again. A professional trademark attorney at AMA Legal Solutions can help you map your business activities to the correct classes to ensure no gap in your protection.
                    </p>
                    <p>
                      Additionally, some brands opt for "Series Marks" or "Collective Marks," which have their own unique fee structures but follow the same principle of class-based calculation. The goal is always to create a wide enough net of protection to discourage competitors while staying within your budget.
                    </p>
                  </div>
                </section>

                {/* Startup & MSME Benefits */}
                <section id="startup-benefits" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 md:mb-10">Exclusive Concessions for Startups and MSMEs</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      India is witnessing a startup revolution, and the government has introduced several incentives to ensure that financial constraints do not hinder innovation. Under the Startup India initiative and the MSME Development Act, eligible entities can avail of a 50% discount on the government filing fees.
                    </p>
                    <div className="grid md:grid-cols-2 gap-8 my-10">
                      <div className="bg-gradient-to-br from-[#D2A02A] to-[#b88a22] p-8 rounded-3xl text-white">
                        <h4 className="text-xl font-bold mb-4">MSME Category</h4>
                        <ul className="space-y-3 opacity-95">
                          <li>• Valid Udyam Registration required</li>
                          <li>• Applies to Micro, Small, and Medium entities</li>
                          <li>• 50% flat discount on filing fees</li>
                          <li>• Faster processing in many cases</li>
                        </ul>
                      </div>
                      <div className="bg-gray-900 p-8 rounded-3xl text-white">
                        <h4 className="text-xl font-bold mb-4 text-[#D2A02A]">DPIIT Recognized Startups</h4>
                        <ul className="space-y-3 opacity-95">
                          <li>• Certificate of recognition required</li>
                          <li>• Lower filing fees (₹4,500)</li>
                          <li>• Access to Govt. Panel of Facilitators</li>
                          <li>• Reimbursable costs in specific schemes</li>
                        </ul>
                      </div>
                    </div>
                    <p>
                      To claim these benefits, you must provide the relevant certificates at the time of filing. For MSMEs, the Udyam Registration certificate is mandatory. For startups, the recognition from the Department for Promotion of Industry and Internal Trade (DPIIT) is the golden ticket.
                    </p>
                    <p>
                      This concession is a enormous benefit for new businesses. It allows a startup to register two trademarks for the price of one company application. It encourages a culture of intellectual property awareness from the very beginning of the business lifecycle. Many of our clients have saved tens of thousands of rupees simply by ensuring their registrations were current and correctly linked to their trademark applications.
                    </p>
                  </div>
                </section>

                {/* Professional Charges */}
                <section id="professional-fees" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 md:mb-10">The Value of Professional Expertise</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      While it is technically possible for an individual to file a trademark application themselves, it is often a classic case of being "penny wise and pound foolish." The trademark process is filled with legal pitfalls that can result in your application being objected to or abandoned, leading to a loss of your government fees.
                    </p>
                    <p>
                      Professional fees for a trademark attorney or agent typically cover a range of critical services:
                    </p>
                    <ul className="list-none space-y-4 my-8">
                      <li className="flex items-start bg-gray-50 p-6 rounded-2xl border border-gray-100">
                        <span className="text-[#D2A02A] text-2xl mr-4 flex-shrink-0 mt-1">✓</span>
                        <div>
                          <span className="font-bold text-gray-900 block mb-1">Comprehensive Trademark Search:</span>
                          Using advanced software to find phonetically similar marks and potential conflicts before you file.
                        </div>
                      </li>
                      <li className="flex items-start bg-gray-50 p-6 rounded-2xl border border-gray-100">
                        <span className="text-[#D2A02A] text-2xl mr-4 flex-shrink-0 mt-1">✓</span>
                        <div>
                          <span className="font-bold text-gray-900 block mb-1">Strategic Class Mapping:</span>
                          Ensuring your brand is protected in all relevant industries to prevent future loopholes.
                        </div>
                      </li>
                      <li className="flex items-start bg-gray-50 p-6 rounded-2xl border border-gray-100">
                        <span className="text-[#D2A02A] text-2xl mr-4 flex-shrink-0 mt-1">✓</span>
                        <div>
                          <span className="font-bold text-gray-900 block mb-1">Legal Drafting:</span>
                          Preparing the application with the correct descriptions and legal justifications to minimize the chance of office actions.
                        </div>
                      </li>
                    </ul>
                    <p>
                      Professional fees at a firm like AMA Legal Solutions are transparent and competitive. Typically, they range from ₹5,000 to ₹15,000 for the initial filing process. Given that a trademark is valid for 10 years, the annual cost of professional protection is surprisingly low. The peace of mind knowing that experts are handling your legal documentation is invaluable.
                    </p>
                  </div>
                </section>

                {/* Additional Milestone Costs */}
                <section id="additional-costs" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 md:mb-10">Managing Milestone and Hidden Costs</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      The journey from filing to registration is rarely a straight line. The Trademark Registry often raises objections (known as office actions) that require a formal legal response. If the registrar is not satisfied with the written response, a show-cause hearing may be scheduled.
                    </p>
                    <div className="overflow-x-auto my-10">
                      <table className="w-full border-collapse rounded-2xl overflow-hidden shadow-sm">
                        <thead className="bg-[#0f172a] text-white">
                          <tr>
                            <th className="p-6 text-left">Service/Milestone</th>
                            <th className="p-6 text-center">Estimated Professional Fee</th>
                            <th className="p-6 text-center">Outcome</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white border text-gray-700">
                          <tr className="border-b">
                            <td className="p-6 font-semibold">Response to Office Action</td>
                            <td className="p-6 text-center">₹3,000 - ₹5,000</td>
                            <td className="p-6 text-center">Addresses initial registry concerns</td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-6 font-semibold">Representation at Hearing</td>
                            <td className="p-6 text-center">₹5,000 - ₹10,000</td>
                            <td className="p-6 text-center">In-person/Virtual legal defense</td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-6 font-semibold">Opposition Filing</td>
                            <td className="p-6 text-center">₹10,000 - ₹20,000</td>
                            <td className="p-6 text-center">Stops a competitor from registering</td>
                          </tr>
                          <tr>
                            <td className="p-6 font-semibold">Certified Copy Request</td>
                            <td className="p-6 text-center">₹2,000 + Govt Fee</td>
                            <td className="p-6 text-center">Official proof for legal actions</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p>
                      These costs are situational and only incurred if the specific milestone is reached. By conducting a thorough search and filing a clean application, we aim to help our clients avoid these extra costs altogether. however, it is important to be aware of them so you are not surprised if your application enters a contested phase.
                    </p>
                    <p>
                      Remember, the cost of responding to an objection is small compared to the value of the trademark itself. If you fail to respond to an objection within the 30-day deadline, your application will be marked as abandoned, and your government fee will be forfeited.
                    </p>
                  </div>
                </section>

                {/* Renewal & Restoration */}
                <section id="renewal-restoration" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 md:mb-10">The Long-term Investment: Renewal and Restoration</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      A trademark registration is not permanent. It is granted for a period of 10 years. To maintain your rights, you must file a renewal application six months before the expiry date. The government fee for renewal is ₹9,000 per class for e-filing.
                    </p>
                    <p>
                      If you miss the renewal deadline, there is a grace period of six months during which you can still renew by paying a surcharge. However, if you let the trademark expire completely, it will be removed from the registry. To bring it back, you must go through the "Restoration" process, which involves a fee of ₹9,000 plus the standard renewal fee.
                    </p>
                    <div className="bg-red-50 p-8 rounded-3xl border border-red-100 my-10 flex gap-6">
                      <div className="text-4xl">⚠️</div>
                      <div>
                        <h4 className="text-xl font-bold text-red-900 mb-2">Crucial Warning</h4>
                        <p className="text-red-800 leading-relaxed">
                          Failing to renew your trademark can be devastating. It opens the door for competitors to register your brand name under their own identity, leading to expensive legal battles and potential loss of your hard-earned brand equity.
                        </p>
                      </div>
                    </div>
                    <p>
                      At AMA Legal Solutions, we offer long-term trademark monitoring and renewal tracking services to ensure our clients never miss a deadline. This proactive management is a small price to pay for the indefinite protection of your brand assets.
                    </p>
                  </div>
                </section>

                {/* International Filing */}
                <section id="international-filing" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 md:mb-10">Expanding Globally: International Trademark Costs</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      If you are planning to take your business beyond Indian borders, you should consider international trademark protection. India is a member of the Madrid Protocol, which allows you to file a single application in India and designate multiple member countries for protection.
                    </p>
                    <p>
                      The costs for international filing are significantly higher and are paid in Swiss Francs (CHF) to the World Intellectual Property Organization (WIPO). They include:
                    </p>
                    <ul className="list-disc pl-8 space-y-3">
                      <li>A basic fee for the application process.</li>
                      <li>Complementary fees for each country designated.</li>
                      <li>Individual fees if a specific country has opted out of the standard fee structure.</li>
                    </ul>
                    <p>
                      While the costs can range from $1,000 to several thousand dollars, the Madrid Protocol is far more cost-effective than filing individual applications in every single country through local agents. It provides a centralized way to manage your global brand portfolio.
                    </p>
                  </div>
                </section>

                {/* Comparison Table */}
                <section id="comparison-table" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 md:mb-10">Cost Comparison Summary</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border border-gray-200 rounded-2xl overflow-hidden">
                      <thead className="bg-gray-50 text-gray-700 uppercase text-sm">
                        <tr>
                          <th className="p-6">Applicant Type</th>
                          <th className="p-6">Govt. Fee (E-Filing)</th>
                          <th className="p-6">Govt. Fee (Physical)</th>
                          <th className="p-6">Concession</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-100">
                        <tr>
                          <td className="p-6 font-medium">Individual</td>
                          <td className="p-6">₹4,500</td>
                          <td className="p-6">₹5,000</td>
                          <td className="p-6 text-green-600 font-bold">Standard Low Fee</td>
                        </tr>
                        <tr>
                          <td className="p-6 font-medium">Startup (Recognized)</td>
                          <td className="p-6">₹4,500</td>
                          <td className="p-6">₹5,000</td>
                          <td className="p-6 text-green-600 font-bold">50% Discounted</td>
                        </tr>
                        <tr>
                          <td className="p-6 font-medium">MSME (Registered)</td>
                          <td className="p-6">₹4,500</td>
                          <td className="p-6">₹5,000</td>
                          <td className="p-6 text-green-600 font-bold">50% Discounted</td>
                        </tr>
                        <tr>
                          <td className="p-6 font-medium">Company/LLP/Others</td>
                          <td className="p-6">₹9,000</td>
                          <td className="p-6">₹10,000</td>
                          <td className="p-6 text-gray-400">None</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* Why Choose AMA */}
                <section id="why-choose-us" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 md:mb-10">Why Thousands Trust AMA Legal Solutions</h2>
                  <div className="grid md:grid-cols-3 gap-10">
                    <div className="text-center p-8 bg-gray-50 rounded-3xl">
                      <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-3xl mx-auto mb-6 shadow-sm border border-gray-100">⚖️</div>
                      <h4 className="text-xl font-bold mb-3">Expert Lawyers</h4>
                      <p className="text-gray-600">Our team consists of specialists who understand the nuances of IP law and registry procedures.</p>
                    </div>
                    <div className="text-center p-8 bg-gray-50 rounded-3xl">
                      <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-3xl mx-auto mb-6 shadow-sm border border-gray-100">💎</div>
                      <h4 className="text-xl font-bold mb-3">Transparent Pricing</h4>
                      <p className="text-gray-600">No hidden charges or surprise invoices. We provide clear, upfront cost structures from day one.</p>
                    </div>
                    <div className="text-center p-8 bg-gray-50 rounded-3xl">
                      <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-3xl mx-auto mb-6 shadow-sm border border-gray-100">🚀</div>
                      <h4 className="text-xl font-bold mb-3">End-to-End Support</h4>
                      <p className="text-gray-600">From the initial search to the final registration and beyond, we handle everything for you.</p>
                    </div>
                  </div>
                </section>

                {/* Testimonials */}
                <section id="testimonials" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-10">What Our Clients Say</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="border border-gray-100 p-8 rounded-3xl bg-white shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex text-yellow-400 mb-4">★★★★★</div>
                      <p className="text-gray-700 italic mb-6">"As a startup owner, I was worried about the costs, but AMA Legal Solutions helped us navigate the concessions perfectly. We registered our logo for half the price we expected!"</p>
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center text-white font-bold mr-4">AV</div>
                        <div>
                          <p className="font-bold">Ankit Verma</p>
                          <p className="text-sm text-gray-500">Founder, Techtrip Solutions</p>
                        </div>
                      </div>
                    </div>
                    <div className="border border-gray-100 p-8 rounded-3xl bg-white shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex text-yellow-400 mb-4">★★★★★</div>
                      <p className="text-gray-700 italic mb-6">"Highly professional team. They handled two classes for my new brand and managed the entire process remotely. Worth every rupee for the expertise they bring to the table."</p>
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-white font-bold mr-4">MG</div>
                        <div>
                          <p className="font-bold">Megha Gupta</p>
                          <p className="text-sm text-gray-500">Director, Gupta Fashions</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* FAQs */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">Frequently Asked Questions</h2>
                  <div className="grid divide-y divide-gray-100">
                    {faqs.map((faq, index) => (
                      <div key={index} className="py-8">
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-start">
                          <span className="text-[#D2A02A] mr-4 text-2xl">Q.</span>
                          {faq.question}
                        </h3>
                        <p className="text-gray-700 leading-relaxed pl-10 text-lg">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Final CTA */}
                <section className="bg-[#0f172a] rounded-3xl p-10 md:p-20 text-center text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#D2A02A]/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                  <div className="relative z-10 max-w-4xl mx-auto">
                    <h2 className="text-2xl md:text-5xl font-bold mb-8">Secure Your Brand's Future Today</h2>
                    <p className="text-lg md:text-xl opacity-90 mb-12">
                      Don't let your hard work go unprotected. Take advantage of our expert legal guidance and transparent fee structures to build a lasting legacy.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                      <Link href="/contact">
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-5 px-14 rounded-full transition-all transform hover:scale-105 shadow-2xl text-xl w-full sm:w-auto">
                          Book a Consultation
                        </button>
                      </Link>
                      <a href="tel:+918700343611" className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-5 px-14 rounded-full transition-all text-xl w-full sm:w-auto">
                        Call +91-8700343611
                      </a>
                    </div>
                  </div>
                </section>

              </div>
            </div>

            {/* Right Sidebar - Sticky Widget */}
            <div className="hidden lg:block space-y-8 sticky top-28">
              <div className="bg-[#0f172a] text-white p-8 rounded-3xl shadow-xl border border-gray-800">
                <h3 className="text-2xl font-bold mb-4">Instant Quote</h3>
                <p className="text-gray-400 mb-8 text-sm leading-relaxed">
                  Get a detailed breakdown of trademark fees for your specific business case in minutes.
                </p>
                <Link href="/contact" className="block w-full bg-[#D2A02A] text-white text-center py-4 rounded-2xl font-bold hover:bg-[#b88a22] transition-colors mb-6 shadow-lg shadow-[#D2A02A]/20">
                  Get Free Estimate
                </Link>
                <div className="pt-6 border-t border-gray-800 space-y-4">
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Why call us?</p>
                  <div className="flex items-center gap-3">
                    <span className="text-[#D2A02A] text-xl">🛡️</span>
                    <span className="text-sm text-gray-300">100% Secure Process</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[#D2A02A] text-xl">📜</span>
                    <span className="text-sm text-gray-300">Expert Legal Documentation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[#D2A02A] text-xl">📞</span>
                    <span className="text-sm text-gray-300">24/7 Priority Support</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-6">Expert Facilitator</h4>
                <div className="flex items-center gap-5 mb-8">
                  <div className="w-16 h-16 bg-gray-200 rounded-2xl overflow-hidden grayscale">
                    <Image src="/newcomp/AmaLogo.png" alt="AMA Legal" width={64} height={64} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">AMA Solutions</p>
                    <p className="text-xs text-gray-500">Trademark Specialists</p>
                  </div>
                </div>
                <div className="space-y-4">
                   <p className="text-sm text-gray-600 leading-relaxed italic border-l-4 border-[#D2A02A] pl-4">
                    "We have helped over 1800 brands secure their identity with zero hidden costs."
                   </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
