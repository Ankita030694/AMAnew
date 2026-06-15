import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { FaShieldAlt, FaStar, FaQuoteLeft, FaCheckCircle, FaGoogle, FaUser } from "react-icons/fa";
import { baseTestimonials } from "@/data/testimonials";

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
      "name": "AMA Legal Solutions Reviews",
      "item": "https://www.amalegalsolutions.com/ama-legal-solutions-reviews"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "AMA Legal Solutions Reviews: What Real Clients Say About the Debt Settlement Firm",
  "description": "Read verified AMA Legal Solutions reviews from real clients. Learn how Anuj Anand Malik and his team resolve credit card debt and stop agent harassment.",
  "image": "https://www.amalegalsolutions.com/newAssets/logo/ama-white.svg",
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
  "datePublished": "2026-06-15",
  "dateModified": "2026-06-15"
};

// FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is AMA Legal Solutions a legitimate law firm?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, AMA Legal Solutions is a legally registered, MSME-registered, and trademark-protected law firm located in Sector 57, Gurugram. The firm is owned and managed by principal advocate Anuj Anand Malik and specializes in banking, finance, and debt settlement laws."
      }
    },
    {
      "@type": "Question",
      "name": "Can AMA Legal Solutions stop recovery agent harassment?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. AMA Legal Solutions helps clients handle recovery agent harassment by educating them on their legal rights under the RBI guidelines and responding to bank notices legally. This helps minimize stress and prevents illegal collection tactics while settlement negotiations are underway."
      }
    },
    {
      "@type": "Question",
      "name": "What is the process of credit card settlement with the firm?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The process involves an initial financial evaluation, replying to outstanding bank notices, negotiating a reduction of the total outstanding amount, and ensuring that the client pays the bank directly to receive an official No Due Certificate (NDC)."
      }
    },
    {
      "@type": "Question",
      "name": "Does the client pay the settlement amount to AMA Legal Solutions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. The settlement amount is paid directly by the client to the creditor bank or NBFC as per the terms of the official settlement letter. AMA Legal Solutions only charges a legal fee for their consultation, notice replies, and negotiation services."
      }
    },
    {
      "@type": "Question",
      "name": "How long does a typical loan settlement take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The timeline varies based on the bank, the type of loan, and the stage of default. Generally, negotiations and formalizing a settlement agreement can take anywhere from 2 to 6 months."
      }
    }
  ]
};

// Review Schema
const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "AMA Legal Solutions Reviews & Testimonials",
  "image": "https://www.amalegalsolutions.com/newAssets/logo/ama-white.svg",
  "description": "Client reviews and testimonials for AMA Legal Solutions debt settlement and legal services.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "1790"
  },
  "review": baseTestimonials.slice(0, 10).map(t => ({
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5"
    },
    "author": {
      "@type": "Person",
      "name": t.author
    },
    "reviewBody": t.text
  }))
};

export const metadata = {
  title: "AMA Legal Solutions Reviews: Legit Loan Settlement Experts?",
  description: "Read verified AMA Legal Solutions reviews from real clients. Learn how Anuj Anand Malik and his team resolve credit card debt and stop agent harassment.",
  keywords: [
    "ama legal solutions reviews",
    "anuj anand malik reviews",
    "ama legal solutions gurugram",
    "loan settlement process reviews",
    "credit card debt settlement",
    "debt recovery agent harassment",
    "no due certificate ndc",
    "legal notice response",
    "unsecured loan relief",
    "financial debt consultation",
    "sector 57 gurugram office"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/ama-legal-solutions-reviews',
  },
};

export default function AMALegalSolutionsReviewsPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "verdict", title: "Legitimacy Verdict" },
    { id: "themes", title: "Key Client Themes" },
    { id: "testimonials", title: "Verified Testimonials" },
    { id: "process", title: "Resolution Process" },
    { id: "faqs", title: "Frequently Asked Questions" },
  ];

  const breadcrumbItems = [
    { label: "AMA Legal Solutions Reviews", href: "/ama-legal-solutions-reviews" },
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
        <div className="relative bg-[#1a202c] text-white">
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          <div className="relative z-20 container mx-auto px-4 py-12 md:py-32 text-center">
            <span className="inline-block text-[#D2A02A] text-xs md:text-sm font-bold uppercase tracking-widest mb-4 bg-[#D2A02A]/10 px-4 py-1.5 rounded-full">
              Client Feedback & Firm Credibility
            </span>
            <h1 className="text-2xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight mt-10">
              AMA Legal Solutions <span className="text-[#D2A02A]">Reviews</span>
            </h1>
            <p className="text-sm md:text-2xl mb-6 md:mb-10 max-w-4xl mx-auto text-gray-200 font-light font-sans leading-relaxed">
              Read verified testimonials from real clients who successfully resolved credit card debts, loans, and recovered their peace of mind.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg">
                  Get Free Consultation
                </button>
              </Link>
              <a href="tel:+918700343611">
                <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all text-sm md:text-lg">
                  Speak to a Legal Advisor
                </button>
              </a>
            </div>
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
              <div className="lg:hidden mb-6 sticky top-20 z-10">
                <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-4 md:p-12 rounded-2xl shadow-sm space-y-6 md:space-y-12">
                
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6 uppercase">AMA Legal Solutions Reviews Overview</h2>
                  <div className="bg-[#fff9e6] border-l-8 border-[#D2A02A] p-4 md:p-6 mb-6 rounded-r-2xl shadow-inner text-gray-800 text-sm md:text-base leading-relaxed font-semibold">
                    AMA Legal Solutions reviews highlight the Gurugram law firm's exceptional expertise in credit card debt and loan settlement. Clients praise owner Anuj Anand Malik and his legal team for providing stress free debt resolution, halting recovery agent harassment, and delivering transparent, professional legal advice that secures crucial financial relief today.
                  </div>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 md:mb-8 text-gray-700">
                    Entering a debt settlement process is a challenging and stressful decision. Defaulting on debt can lead to severe stress due to aggressive collection practices, legal notices, and damage to one's credit record. When facing these hurdles, it is vital to know that you are working with a legitimate and capable legal firm. The reviews for AMA Legal Solutions demonstrate how professional legal representation can help Indian consumers resolve their unmanageable liabilities safely and securely.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 md:mb-8 text-gray-700">
                    By coordinating communications, checking letter validities, and executing formal negotiations with creditors, the firm helps clients secure a written settlement offer letter and eventually a clean slate. To learn about typical percentages and waiver brackets, read our resource on the <Link href="/hdfc-credit-card-settlement-percentage" className="text-[#D2A02A] font-semibold hover:underline">HDFC credit card settlement percentage</Link> or understand the overall <Link href="/hdfc-credit-card-settlement-process" className="text-[#D2A02A] font-semibold hover:underline">HDFC credit card settlement process</Link> in our detailed bank-specific guides.
                  </p>
                </section>

                {/* Legitimacy Verdict */}
                <section id="verdict" className="scroll-mt-32">
                  <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6 uppercase">Legitimacy Verdict: Is AMA Legal Solutions Real?</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    With several questionable agencies operating in the financial relief domain, clients are right to exercise due diligence. Based on corporate registries, legal certifications, and verified client testimonials, here is a breakdown of the firm's legitimacy:
                  </p>
                  
                  {/* Table of Critical Data Points */}
                  <div className="overflow-x-auto my-6 border border-gray-200 rounded-xl">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Metric / Parameter</th>
                          <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Details & Verification</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-950">Firm Founder & Owner</td>
                          <td className="px-6 py-4 text-sm text-gray-700">Adv. Anuj Anand Malik (Only Owner)</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-950">Headquarters Location</td>
                          <td className="px-6 py-4 text-sm text-gray-700">Sector 57, Gurugram, Haryana, India</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-950">Primary Core Services</td>
                          <td className="px-6 py-4 text-sm text-gray-700">Credit card debt settlement, personal loan resolution, defense against harassment, legal notice replies</td>
                        </tr>
                        <tr>

                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-950">Critical Settlement Goal</td>
                          <td className="px-6 py-4 text-sm text-gray-700">Securing a bank-issued Settlement Letter followed by a No Due Certificate (NDC)</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-950">Compliance Standards</td>
                          <td className="px-6 py-4 text-sm text-gray-700">Adherence to RBI Fair Practices Code for debt collection and recovery</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    Unlike standard third-party agencies that might request clients to route payments through them, AMA Legal Solutions insists that all settlement payments be made directly to the creditor bank. This ensures maximum financial transparency and eliminates escrow or collection fraud risks, establishing them as a legitimate legal consulting firm.
                  </p>
                </section>

                {/* Key Client Themes */}
                <section id="themes" className="scroll-mt-32">
                  <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6 uppercase">Key Themes in Client Testimonials</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    Evaluating user sentiment reveals several crucial patterns regarding why clients choose AMA Legal Solutions:
                  </p>
                  
                  <div className="space-y-6">
                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">1. Credit Card & Personal Loan Settlement Success</h3>
                      <p className="text-sm md:text-base leading-relaxed text-gray-700">
                        The primary success vector mentioned in reviews is the ability of the firm to secure structured settlements. Clients have successfully negotiated waivers of up to 70% on credit cards and personal loans, avoiding bankruptcy and obtaining clear settlement letters.
                      </p>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">2. Protection Against Recovery Agent Harassment</h3>
                      <p className="text-sm md:text-base leading-relaxed text-gray-700">
                        Defaulting on loans often invites aggressive collection calls. Reviews highlight how the legal team advises clients under the RBI rules to redirect recovery agent communications and challenge illegal collection tactics. To understand these rules, view our guide on <Link href="/rbi-new-recovery-guidelines-july-2026" className="text-[#D2A02A] font-semibold hover:underline">RBI new recovery guidelines</Link>.
                      </p>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">3. Professionalism & Transparency</h3>
                      <p className="text-sm md:text-base leading-relaxed text-gray-700">
                        Reviews emphasize that the firm provides step-by-step guidance. Associates like Adv. Latika are commended for their legal research skills and for helping clients navigate complex banking litigation, ensuring clients are kept informed through regular updates.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Verified Testimonials Grid */}
                <section id="testimonials" className="scroll-mt-32">
                  <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6 uppercase">Verified Testimonials from Real Clients</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    Below are the testimonials as shared by clients who have completed their programs and received legal support from AMA Legal Solutions:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {baseTestimonials.map((testimonial) => (
                      <div 
                        key={testimonial.id}
                        className="flex flex-col justify-between p-6 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 relative"
                      >
                        <FaQuoteLeft className="text-[#D2A02A]/10 text-4xl absolute top-4 right-4" />
                        <div className="space-y-4">
                          {/* Rating stars */}
                          <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                              <FaStar key={i} className="text-[#FFC107] text-sm" />
                            ))}
                          </div>
                          
                          {/* Testimonial text */}
                          <p className="text-gray-700 text-sm leading-relaxed font-sans">
                            &ldquo;{testimonial.text}&rdquo;
                          </p>
                        </div>

                        {/* Author info */}
                        <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-[#D2A02A]/10 text-[#D2A02A] flex items-center justify-center font-bold text-lg">
                            {testimonial.author.charAt(0).toUpperCase()}
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-gray-900 flex items-center gap-1.5">
                              <span>{testimonial.author}</span>
                              <FaCheckCircle className="text-green-500 text-xs" title="Verified Review" />
                            </h4>
                            <span className="text-xs text-gray-500 flex items-center gap-1">
                              <FaGoogle className="text-[10px]" /> Google Review
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Resolution Process */}
                <section id="process" className="scroll-mt-32">
                  <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6 uppercase">How AMA Legal Solutions Resolves Debt Issues</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    Understanding the standard flow of debt resolution is critical to setting realistic expectations. The team guides clients through a structured, transparent process:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                    <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                      <div className="text-2xl font-bold text-[#D2A02A] mb-2">01</div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">Initial Case Assessment</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Evaluating outstanding dues, income streams, and pending court or bank notices to draft an optimal negotiation strategy.
                      </p>
                    </div>
                    
                    <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                      <div className="text-2xl font-bold text-[#D2A02A] mb-2">02</div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">Harassment Containment</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Training clients on how to legally address collection representatives and responding to notices under appropriate banking acts.
                      </p>
                    </div>

                    <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                      <div className="text-2xl font-bold text-[#D2A02A] mb-2">03</div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">Hardship Proof & Negotiation</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Formally filing financial hardship records to negotiate maximum waivers on interest and outstanding card balances.
                      </p>
                    </div>

                    <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                      <div className="text-2xl font-bold text-[#D2A02A] mb-2">04</div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">Closure Validation</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Validating the settlement letter directly with the bank, managing payment schedules, and securing the final No Due Certificate (NDC).
                      </p>
                    </div>
                  </div>

                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    If you are dealing with pending litigation or arbitration notices, you can read our guidelines on <Link href="/got-an-arbitration-notice-dont-worry-we-got-you" className="text-[#D2A02A] font-semibold hover:underline">handling arbitration notices</Link> or learn how to draft a formal <Link href="/reply-to-recovery-notice-format" className="text-[#D2A02A] font-semibold hover:underline">reply to a recovery notice</Link>.
                  </p>
                </section>

                {/* FAQs */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6 uppercase">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    {faqSchema.mainEntity.map((faq, index) => (
                      <div key={index} className="border-b border-gray-100 pb-4">
                        <h3 className="text-sm md:text-lg font-bold text-gray-900 mb-2 flex items-start gap-2">
                          <span className="text-[#D2A02A] font-extrabold">Q.</span>
                          <span>{faq.name}</span>
                        </h3>
                        <p className="text-xs md:text-sm text-gray-600 pl-6 leading-relaxed">
                          {faq.acceptedAnswer.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

              </div>
            </div>

            {/* Right Sidebar - Contact/Ad (Desktop) */}
            <div className="hidden lg:block sticky top-24 space-y-6">
              <div className="bg-[#1a202c] text-white p-6 rounded-2xl shadow-lg border border-gray-800 text-center">
                <span className="text-[#D2A02A] font-extrabold uppercase text-xs tracking-wider mb-2 block">AMA Legal Solutions</span>
                <h3 className="text-xl font-bold mb-4 font-sans">Resolved Your Credit Card Debt?</h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  Connect with our legal panel to handle bank notices, resolve recovery harassment, and safely negotiate loan settlements.
                </p>
                <Link href="/contact">
                  <button className="w-full bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-2.5 px-4 rounded-xl transition-all text-sm mb-3">
                    Request Consultation
                  </button>
                </Link>
                <a href="tel:+918700343611" className="text-[#D2A02A] text-sm font-semibold hover:underline block">
                  Call: +91-8700343611
                </a>
              </div>

              <div className="bg-gray-100 p-6 rounded-2xl border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-3 text-sm flex items-center gap-2">
                  <FaShieldAlt className="text-[#D2A02A]" />
                  <span>Verified Legal Firm</span>
                </h4>
                <p className="text-gray-600 text-xs leading-relaxed">
                  All consultations are handled by qualified advocates. AMA Legal Solutions does not collect bank settlements directly. Pay only verified bank accounts.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
