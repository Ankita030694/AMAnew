import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "How long is a trademark valid in India?",
    answer: "A registered trademark in India is valid for a period of 10 years from the date of the application. To maintain its status as an active and protected asset, the proprietor must renew the registration every 10 years by paying the prescribed renewal fees and filing the necessary forms with the Trademark Registry."
  },
  {
    question: "Can I renew my trademark after it has expired?",
    answer: "Yes, there is a six-month grace period immediately following the expiration date during which you can still renew the trademark by paying a late fee or surcharge. If you miss this grace period, you may still be able to restore the mark within one year of its expiration, although this process is more complex and involves higher government fees."
  },
  {
    question: "What happens if I forget to renew my trademark registration?",
    answer: "If a trademark is not renewed within the stipulated time, including the grace and restoration periods, it will be removed from the Register of Trademarks. This results in the loss of all statutory rights, meaning you cannot easily file for infringement and third parties may be able to register the same or a similar mark for their own use."
  },
  {
    question: "Is there a difference between trademark renewal and restoration?",
    answer: "Yes. Renewal is the process of extending a mark's validity, which should ideally be done before the expiration date. Restoration is a special procedure required when the trademark has already been removed from the registry because the renewal deadline and the subsequent six-month grace period were both missed."
  },
  {
    question: "Can someone else register my trademark if I miss the renewal?",
    answer: "Once a trademark is removed from the register due to non-renewal, it becomes legally available for anyone to apply for. This can lead to significant brand confusion and costly legal battles as you may have to rely on common law remedies like passing off to reclaim your rights, which is much harder to prove than a registered trademark."
  },
  {
    question: "Does the Trademark Registry send a notice before the mark expires?",
    answer: "The Registrar of Trademarks is required to send a notice in Form O-3 approximately three months before the expiration date to remind the proprietor. However, failure to receive this notice does not exempt the owner from the responsibility of renewal. It is always best to maintain your own IP calendar to track these critical dates."
  },
  {
    question: "How much is the fee for trademark renewal in India?",
    answer: "The government fee for trademark renewal depends on whether the application is filed online through the e-filing portal or physically at the registry. As of current standards, online filing is generally more cost-effective. Additional fees are applicable if the renewal is filed during the grace period or if a restoration is required."
  },
  {
    question: "Can a trademark be cancelled before its 10-year term ends?",
    answer: "Yes, a trademark registration can be challenged and cancelled at any time on various grounds. The most common ground is non-use for a continuous period of five years and three months. Other grounds include the mark becoming generic, improper registration through fraud, or if the mark lacks distinctiveness."
  },
  {
    question: "What is the non-use provision in Indian trademark law?",
    answer: "The law requires that a registered trademark must be used in commerce for the goods and services it was registered for. If a mark is not used for five years and three months after its registration, any aggrieved party can apply to have the mark removed from the register to prevent trademark hoarding."
  },
  {
    question: "Do I need a lawyer for trademark renewal?",
    answer: "While it is possible for a proprietor to file for renewal themselves, engaging an experienced trademark attorney is highly recommended. A lawyer can ensure that all deadlines are tracked, forms are filled accurately, and any objections or queries from the Trademark Registry are handled professionally to secure the mark's future."
  },
  {
    question: "What is an O-3 notice in trademark law?",
    answer: "The O-3 notice is an official reminder sent by the Registrar of Trademarks to the registered proprietor or their agent. It is typically sent six months before the expiration of the trademark. However, the law states that the validity of the trademark does not depend on the receipt of this notice; the owner is responsible for renewal regardless of whether they received the O-3 notice."
  },
  {
    question: "Can a trademark be renewed for less than 10 years?",
    answer: "No, under the Indian Trade Marks Act, 1999, the renewal period is fixed at 10 years. You cannot opt for a shorter or longer renewal term. Each successful renewal grants a decade of continued protection, ensuring stability for the brand's legal standing."
  },
  {
    question: "Is the renewal fee different for different classes?",
    answer: "The government fee for trademark renewal is generally charged per mark per class. If you have a single trademark registered in multiple classes (multi-class registration), the renewal fee will be a multiple of the base fee according to the number of classes covered in the registration."
  },
  {
    question: "What documents are required for trademark renewal?",
    answer: "Typically, you need the trademark registration number, a copy of the registration certificate, and a power of attorney if you are using a trademark agent or lawyer. In most cases, if the proprietor's details haven't changed, no extensive documentation is needed beyond the filing of Form TM-R."
  },
  {
    question: "Can I change my trademark during renewal?",
    answer: "No, the renewal process is strictly for extending the life of the existing mark as it stands on the register. If you wish to make significant changes to the logo, wordmark, or the goods/services it covers, you must file a new trademark application or a separate application for amendment (Form TM-M), which is subject to the Registrar's approval."
  },
  {
    question: "How long does the renewal process take?",
    answer: "Once the renewal application is filed and the fee is paid, the Registry usually updates the status within a few weeks to a couple of months. You can track the status online through the IP India website. Once updated, the 'Valid Up To' date will show the new expiration date 10 years into the future."
  },
  {
    question: "Can a collective mark or certification mark be renewed?",
    answer: "Yes, all types of registered trademarks, including collective marks and certification marks, are subject to the same 10-year renewal cycle. The procedures and fees are similar, though the underlying requirements for maintaining their validity might involve proving continued adherence to the regulations governing those specific mark types."
  },
  {
    question: "What is trademark 'hoarding' and how does it affect validity?",
    answer: "Trademark hoarding refers to the practice of registering numerous marks without any real intention of using them in commerce. Indian law discourages this by allowing 'aggrieved persons' to file for the rectification or removal of marks that haven't been used for over five years. This prevents the registry from being cluttered with deadwood and ensures that only active, valid marks enjoy legal protection."
  },
  {
    question: "Does a renewal certificate look like the original registration certificate?",
    answer: "The Registry typically issues a renewal notice or updates the electronic register rather than issuing a completely new 'Certificate of Registration' like the one you get at the start. The electronic record on the IP India portal serves as the primary evidence of the mark's renewed validity."
  },
  {
    question: "Can I renew a mark that is currently under opposition?",
    answer: "If a trademark is already registered but is facing post-registration opposition or rectification proceedings, you should still proceed with the renewal to maintain your statutory rights. Failing to renew would lead to the mark's removal regardless of the outcome of the legal challenge."
  },
  {
    question: "What is Section 25 of the Trade Marks Act, 1999?",
    answer: "Section 25 is the governing provision for the duration, renewal, and restoration of trademark registration in India. It outlines the Registrar's duty to notify the owner and the owner's right to extend the protection for successive periods of ten years."
  },
  {
    question: "Does renewing a trademark reset the non-use period?",
    answer: "No, renewal is an administrative extension of the registration. It does not reset the clock for the non-use provision. If a mark hasn't been used for over five years and three months, it remains vulnerable to cancellation even if it was recently renewed."
  },
  {
    question: "Can I renew my trademark in a different class during renewal?",
    answer: "No, renewal is for the existing registration. To add new classes, you must file fresh applications for the trademark in those specific classes. You can, however, choose to renew only some of the classes in a multi-class registration if you wish to let others lapse."
  },
  {
    question: "Is there a discount for bulk trademark renewals?",
    answer: "The government fee per mark per class is fixed by law and does not offer bulk discounts. However, professional legal firms like AMA Legal Solutions often provide tiered pricing for managing large IP portfolios, which can lead to significant administrative savings for the client."
  },
  {
    question: "What happens to the validity if the owner dies?",
    answer: "The trademark rights are transmissible by operation of law. The legal heirs or successors must file Form TM-P to bring their name on the record as the new proprietor to maintain the mark's validity and handle future renewals."
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
      "name": "Validity of Trademark Registration",
      "item": "https://www.amalegalsolutions.com/validity-of-trademark-registration"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Validity of Trademark Registration in India | Renewal & Restoration Guide",
  "description": "Comprehensive guide to the validity and renewal of trademark registration in India. Learn about the 10-year period, grace periods, restoration, and non-use grounds.",
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
  "datePublished": "2024-02-03",
  "dateModified": "2024-02-03"
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
  "description": "Expert legal trademark registration and renewal services in India.",
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
        "name": "Vikram Mehta"
      },
      "reviewBody": "AMA Legal Solutions handled our trademark renewal seamlessly. They tracked all deadlines and ensured our brand remained protected without any interruptions."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Neha Gupta"
      },
      "reviewBody": "Professional approach to IPR management. Their team helped us restore a lapsed trademark that we had missed renewing. Highly recommended lawyers."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Arjun Sharma"
      },
      "reviewBody": "AMA Legal's expertise in Madrid Protocol filings is unmatched. They handled our international trademark validity issues during the critical 5-year dependency period with absolute precision."
    }
  ]
};

export const metadata = {
  title: "Validity of Trademark Registration India | Renewal & Restoration",
  description: "Understand the validity of trademark registration in India. Guide on 10-year renewal cycles, grace periods, restoration process, and grounds for cancellation.",
  keywords: [
    "validity of trademark registration",
    "trademark renewal india",
    "trademark restoration process",
    "trademark validity period",
    "trademark renewal fees",
    "trademark cancellation grounds",
    "non-use of trademark",
    "ipindia renewal notice",
    "how to renew trademark online"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/validity-of-trademark-registration',
  },
  openGraph: {
    title: "Validity of Trademark Registration India | Renewal & Restoration",
    description: "Expert legal guide on maintaining your trademark's validity in India. Learn about renewals, grace periods, and protecting your brand assets.",
    url: "https://www.amalegalsolutions.com/validity-of-trademark-registration",
    type: "website",
    images: [
      {
        url: "/services/trademark.png",
        width: 1200,
        height: 630,
        alt: "Validity of Trademark Registration India",
      },
    ],
  },
};

export default function TrademarkValidityPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "ten-year-cycle", title: "The 10-Year Lifecycle" },
    { id: "importance-renewal", title: "Importance of Renewal" },
    { id: "renewal-process", title: "The Renewal Process" },
    { id: "grace-period", title: "Grace Period & Restoration" },
    { id: "consequences", title: "Consequences of Non-Renewal" },
    { id: "case-laws", title: "Landmark Judgments" },
    { id: "international", title: "Madrid Protocol & Global Validity" },
    { id: "global-perspectives", title: "Global Legal Perspectives" },
    { id: "invalidation", title: "Invalidation & Cancellation" },
    { id: "rectification", title: "Rectification of the Register" },
    { id: "comparative", title: "Comparison: Renewal vs Restoration" },
    { id: "myths", title: "Common Myths & Realities" },
    { id: "best-practices", title: "Strategic Best Practices" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Validity of Trademark Registration", href: "/validity-of-trademark-registration" },
  ];

  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
        {/* Hero Section */}
        <div className="relative bg-[#000000] text-white overflow-hidden">
          <div className="relative z-20 container mx-auto px-4 py-12 md:py-24 text-center">
            <h1 className="text-2xl md:text-5xl font-extrabold mb-5 md:mb-7 leading-tight tracking-tight uppercase">
              Validity of <span className="text-[#D2A02A]">Trademark Registration</span> in India
            </h1>
            <p className="text-sm md:text-xl mb-6 md:mb-10 max-w-4xl mx-auto text-gray-300 font-light leading-relaxed">
              Ensure the long term protection of your brand assets. Understand decadal renewal cycles, absolute restoration procedures, and the strategic importance of maintaining a legal monopoly.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-2xl text-sm md:text-lg uppercase tracking-widest">
                Consult a Trademark Expert
              </button>
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-8xl py-6">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr_260px] gap-6 items-start mt-5">
            {/* Left Sidebar - TOC (Desktop) */}
            <div className="hidden lg:block sticky top-24">
              <TableOfContents sections={tocSections} orientation="vertical" />
            </div>

            {/* Main Content Area */}
            <div className="min-w-0">
              {/* TOC (Mobile) */}
              <div className="lg:hidden mb-10 sticky top-20 z-10 bg-white shadow-md rounded-xl p-2">
                <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-4 md:p-10 rounded-2xl shadow-xl space-y-8 md:space-y-12">
                
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-6 md:mb-8 border-b-4 border-[#D2A02A] pb-4 inline-block uppercase">SECURE YOUR BRAND IDENTITY</h2>
                  <p className="text-base md:text-xl leading-relaxed mb-6 text-gray-700">
                    The protection of intellectual property is a cornerstone of modern business strategy. Among the various forms of intellectual property, trademarks are perhaps the most visible and valuable assets a company can possess. A registered trademark grants the owner exclusive rights to use a specific mark in relation to their goods or services, effectively preventing competitors from confusing the public or free riding on established brand reputation. However, this legal shield is not absolute nor is it perpetual. Understanding the validity of trademark registration in India is critical for any brand owner who wishes to maintain their market position and legal standing.
                  </p>
                  <p className="text-base md:text-xl leading-relaxed mb-6 text-gray-700">
                    In today's hyper competitive global marketplace, a brand is more than just a name; it is a repository of consumer trust and corporate heritage. When a trademark is registered, the state acknowledges the owner's investment in building that trust. This acknowledgment comes with a set of responsibilities and a finite period of initial protection. Many businesses mistakenly believe that once a trademark is registered, it remains theirs forever without further effort. This misconception can lead to catastrophic brand erosion. The validity of your trademark is a living status that requires periodic maintenance, active defense, and consistent commercial usage.
                  </p>
                  <p className="text-base md:text-xl leading-relaxed mb-6 text-gray-700">
                    Whether you are a startup building your first product or a multinational corporation managing a complex portfolio, the rules of trademark validity remain the same. The Indian Trade Marks Registry serves as the guardian of these records, but the onus of keeping them updated lies solely with the trademark proprietor. This guide provides a deep dive into the decadal cycles of trademark law, the restoration of lapsed rights, and the strategic importance of ensuring your legal monopoly never expires.
                  </p>
                </section>

                <section id="ten-year-cycle" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-6 md:mb-8 border-b-4 border-[#D2A02A] pb-4 inline-block uppercase">THE 10-YEAR LIFECYCLE</h2>
                  <p className="text-base md:text-xl leading-relaxed mb-6 text-gray-700">
                    In India, the statutory protection for a registered trademark is defined by the Trade Marks Act of 1999. The initial registration is valid for a period of ten years. This ten year window provides a balance between granting the owner enough time to establish their brand and the public interest in ensuring that unused marks do not clutter the register indefinitely. The clock starts ticking from the date of the application, which is considered the date of registration for all legal purposes once the certificate is finally issued.
                  </p>
                  <p className="text-base md:text-xl leading-relaxed mb-6 text-gray-700">
                    While ten years might seem like a long time, the reality of business management often means that renewal deadlines can sneak up on even the most diligent proprietors. The failure to track this ten year milestone can lead to the loss of rights that took years and significant investment to build. It is not merely about the expiration of a piece of paper; it is about the potential disappearance of your legal monopoly over your brand identifier.
                  </p>
                  <p className="text-base md:text-xl leading-relaxed mb-6 text-gray-700">
                    The decadal cycle exists because language and markets are dynamic. A word that was perfectly distinctive ten years ago might become descriptive or generic today. By requiring a renewal every ten years, the Registry ensures that the owner still actively values and uses the mark. This cycle is also a moment of administrative housekeeping, allowing the Registry to remove ghost marks and free up space for new businesses and innovators.
                  </p>
                  <p className="text-base md:text-xl leading-relaxed mb-6 text-gray-700">
                    Proprietors should view each ten year mark not as a burden but as a strategic audit. It is a time to review the classes in which the mark is registered and decide if they still align with the company's current business activities. Often, companies expand into new product lines over a decade, and the renewal period is the perfect time to ensure that the trademark's validity extends across all current revenue streams.
                  </p>
                </section>

                {/* Importance of Renewal */}
                <section id="importance-renewal" className="scroll-mt-32">
                  <div className="bg-[#FFFBEB] border-l-8 border-[#D2A02A] p-8 md:p-12 mb-10 rounded-2xl shadow-inner text-gray-900">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6">WHY CONTINUOUS RENEWAL MATTERS</h2>
                    <p className="text-base md:text-xl leading-relaxed">
                      The process of renewal is the mechanism by which a trademark owner signals their continued intent to use the mark in commerce. It is a vital administrative step that keeps the legal protections active. When a trademark is renewed, its validity is extended for another ten years from the date of the previous expiration. This cycle can, in theory, continue indefinitely as long as the mark remains in use and the renewal fees are paid.
                    </p>
                  </div>
                  <ul className="space-y-6">
                    <li className="flex items-start">
                        <span className="flex-shrink-0 w-10 h-10 bg-[#D2A02A] text-white rounded-full flex items-center justify-center font-bold mr-4 mt-1 shadow-md">1</span>
                        <div>
                            <h4 className="text-xl font-bold text-gray-900 mb-2">Uninterrupted Legal Protection</h4>
                            <p className="text-gray-700 leading-relaxed text-lg">Ensures you can always file for infringement against violators without any gaps in your statutory rights.</p>
                        </div>
                    </li>
                    <li className="flex items-start">
                        <span className="flex-shrink-0 w-10 h-10 bg-[#D2A02A] text-white rounded-full flex items-center justify-center font-bold mr-4 mt-1 shadow-md">2</span>
                        <div>
                            <h4 className="text-xl font-bold text-gray-900 mb-2">Asset Valuation</h4>
                            <p className="text-gray-700 leading-relaxed text-lg">Maintains the value of your brand on the balance sheet, crucial for licensing, franchising, or potential business sales.</p>
                        </div>
                    </li>
                    <li className="flex items-start">
                        <span className="flex-shrink-0 w-10 h-10 bg-[#D2A02A] text-white rounded-full flex items-center justify-center font-bold mr-4 mt-1 shadow-md">3</span>
                        <div>
                            <h4 className="text-xl font-bold text-gray-900 mb-2">Market Credibility</h4>
                            <p className="text-gray-700 leading-relaxed text-lg">Allows continued use of the registered mark symbol, building long term consumer trust and distinctiveness.</p>
                        </div>
                    </li>
                  </ul>
                </section>

                <section id="renewal-process" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-6 md:mb-8 border-b-4 border-[#D2A02A] pb-4 inline-block uppercase tracking-tight">THE RENEWAL PROCEDURE</h2>
                  <p className="text-base md:text-xl leading-relaxed mb-8 text-gray-700">
                    The Trademark Registry in India has established a structured process for renewals. Ideally, a brand owner should file for renewal within one year before the date of expiration. This proactive approach allows enough time to resolve any queries or administrative hurdles that might arise. The application for renewal is filed using Form TM-R along with the prescribed government fee.
                  </p>
                  <p className="text-base md:text-xl leading-relaxed mb-6 text-gray-700">
                    The move toward a digital Registry has made this process significantly faster and more transparent. Online filing through the Comprehensive Integrated Trademark Information System allows for instant acknowledgment and real time tracking of the renewal status. When filing Form TM-R, it is essential to ensure that the details of the mark match exactly what is on the register. Any discrepancies in the name or address of the proprietor can lead to objections that might delay the renewal.
                  </p>
                  <p className="text-base md:text-xl leading-relaxed mb-6 text-gray-700">
                    Although the Registrar is mandated to send a notice in Form O-3 as a reminder to the proprietor, relying solely on this notice is a risky strategy. Administrative delays or changes in the correspondence address can result in the notice never reaching the owner. The burden of maintaining the registration always rests with the trademark proprietor. Once the renewal application is processed and approved, the validity of the mark is secured for another decade.
                  </p>
                  <p className="text-base md:text-xl leading-relaxed mb-6 text-gray-700">
                    A common mistake made during the renewal process is failing to check if the trademark agent of record is still active or valid. If your original attorney has retired or changed firms, the O-3 notice might be sent to an outdated address. It is crucial to file a request for an address change or a change of agent before the renewal window closes. This ensures that the lines of communication between your business and the Registry remain open and efficient.
                  </p>
                </section>

                {/* Grace Period & Restoration */}
                <section id="grace-period" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-6 md:mb-8 border-b-4 border-[#D2A02A] pb-4 inline-block uppercase tracking-tight">GRACE PERIOD & RESTORATION</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="p-8 bg-gray-50 rounded-3xl shadow-md border-t-8 border-[#D2A02A]">
                        <h3 className="text-2xl font-bold mb-4 text-[#D2A02A]">Six-Month Grace Period</h3>
                        <p className="text-gray-700 leading-relaxed text-lg italic">
                          "Failing to renew before expiration gives you a final six month window to save the mark by paying a surcharge."
                        </p>
                    </div>
                    <div className="p-8 bg-gray-50 rounded-3xl shadow-md border-t-8 border-red-500">
                        <h3 className="text-2xl font-bold mb-4 text-red-500">Restoration (Last Resort)</h3>
                        <p className="text-gray-700 leading-relaxed text-lg italic">
                          "If the grace period passes, you have up to one year to petition for the restoration of the removed mark."
                        </p>
                    </div>
                  </div>
                  <p className="text-base md:text-xl leading-relaxed mt-10 text-gray-700">
                    If the six-month grace period also passes without action, the trademark is officially removed from the register. However, even then, all is not lost. The law allows for the "restoration" of a removed trademark if an application is filed after six months but within one year from the expiration date. This process is more complex than a simple renewal. The owner must prove that the failure to renew was not an intentional abandonment.
                  </p>
                </section>

                {/* Consequences of Non-Renewal */}
                <section id="consequences" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-6 md:mb-8 border-b-4 border-[#D2A02A] pb-4 inline-block uppercase tracking-tight">RISKS OF NON-RENEWAL</h2>
                  <p className="text-base md:text-xl leading-relaxed mb-8 text-gray-700">
                    The fallout from failing to renew a trademark is multifaceted and can be devastating. The most immediate impact is the loss of the right to use the (R) symbol, which signifies a registered mark. Continued use of this symbol after the registration has lapsed can be considered a criminal offense under certain circumstances. Without a valid registration, you are forced to rely on the common law remedy of passing off, which requires immense evidence of goodwill and actual damage.
                  </p>
                  <div className="bg-red-50 p-8 rounded-3xl border-2 border-red-100 flex flex-col md:flex-row gap-8 items-center">
                    <div className="text-6xl text-red-500 font-bold">!</div>
                    <div>
                        <h4 className="text-2xl font-bold text-red-900 mb-4">A Lapsed Mark is a Public Gift</h4>
                        <p className="text-lg text-red-800 leading-relaxed">
                            Once removed, competitors can use identical or confusingly similar marks. Without statutory protection, reclaiming your brand through passing-off actions is exponentially more expensive and difficult. You essentially lose the priority date that you might have spent years building.
                        </p>
                    </div>
                  </div>
                </section>

                {/* Case Laws Section */}
                <section id="case-laws" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-6 md:mb-8 border-b-4 border-[#D2A02A] pb-4 inline-block uppercase tracking-tight">LANDMARK JUDICIAL PRECEDENTS</h2>
                  <div className="space-y-6 text-base md:text-lg leading-relaxed text-gray-700">
                    <p>The Indian judiciary has played a defining role in clarifying the scope and validity of trademarks. Landmark cases like <strong>Parle Products Pvt. Ltd. v. JP & Co</strong> established that deceptive similarity is not just about exact replication but about the overall impression on a consumer of average intelligence and imperfect recollection. This principle ensures that a trademark's validity remains a shield against unfair competition, even if the infringing product has slight variations.</p>
                    <div className="bg-gray-50 p-6 rounded-2xl border-l-8 border-[#D2A02A] italic shadow-sm">
                        "In the <strong>Whirlpool</strong> case (N.R. Dongre v. Whirlpool Corp), the Supreme Court introduced the concept of trans-border reputation. This means a trademark can be valid and protected in India even if it hasn't been physically used in the Indian market, provided it has a global reputation that has reached Indian consumers through media, travel, or the internet."
                    </div>
                    <p>This protection is vital for international brands entering the Indian marketplace. Another critical interpretation comes from <strong>S. Syed Mohideen v. P. Sulochana Bai</strong>, where the court affirmed that the 'First in the Market' rule generally prevails over first to register. This underscores that while registration provides statutory strength, the actual commercial validity flows from the honest and continuous usage of the mark in trade.</p>
                  </div>
                </section>

                {/* International Protection */}
                <section id="international" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-6 md:mb-8 border-b-4 border-[#D2A02A] pb-4 inline-block uppercase tracking-tight">MADRID PROTOCOL & GLOBAL VALIDITY</h2>
                  <div className="space-y-4 text-base md:text-lg leading-relaxed text-gray-700">
                    <p>For businesses looking beyond Indian borders, the Madrid Protocol is a game changer. It allows a trademark registered in India (the basic registration) to serve as a springboard for international protection in over 120 member countries. This centralized system significantly reduces the cost and complexity of global brand management. However, the validity of these international registrations is heavily dependent on the Indian registration for the first five years.</p>
                    <p>If the Indian registration is cancelled, withdrawn, or fails during this initial five-year period, every single international registration linked to it can be automatically cancelled; a phenomenon known as <strong>'Central Attack'</strong>. This makes the meticulous maintenance of your home-country registration not just a local priority but a global necessity. After this dependency period, the international marks become independent, but until then, your entire global portfolio rests on the validity of your Indian trademark.</p>
                  </div>
                </section>

                {/* Global Perspectives */}
                <section id="global-perspectives" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-6 md:mb-8 border-b-4 border-[#D2A02A] pb-4 inline-block uppercase tracking-tight">GLOBAL LEGAL PERSPECTIVES</h2>
                    <p className="text-base md:text-xl leading-relaxed mb-6 text-gray-700">
                        While this guide focuses on Indian law, it is important to understand how trademark validity is treated in other major jurisdictions. In the United States, for instance, the requirement of 'use in commerce' is even stricter. To maintain a federal trademark registration, the owner must file a Declaration of Use between the 5th and 6th years of registration. Failure to do so leads to automatic cancellation, regardless of the 10 year renewal cycle.
                    </p>
                    <p className="text-base md:text-xl leading-relaxed mb-6 text-gray-700">
                        In the European Union, the concept of 'genuine use' is central. If a mark is not used for five years, it becomes subject to revocation. Interestingly, some jurisdictions allow for 'defensive trademarks' where a well known brand can register its mark in classes it doesn't intend to use, simply to prevent dilution. India does not explicitly have a defensive registration system, making active use even more critical for Indian brand owners.
                    </p>
                    <div className="bg-[#F8FAFC] p-8 rounded-3xl border border-gray-100 italic text-gray-600">
                        "The globalization of IP law through treaties like TRIPS has harmonized the 10 year renewal period as a global standard. However, the exact procedures for proving use and defending against cancellation still vary significantly, requiring a localized strategy for every market your brand enters."
                    </div>
                </section>

                {/* Visual Review Snippets */}
                <section id="reviews" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-8 border-b-4 border-[#D2A02A] inline-block uppercase tracking-wide">Success Stories & Reviews</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-gray-50 p-6 rounded-2xl shadow-sm border border-gray-100 transition-hover hover:bg-white hover:shadow-md">
                            <div className="flex text-[#D2A02A] mb-3 text-xl">★★★★★</div>
                            <p className="text-gray-600 italic mb-4 text-sm md:text-base">"AMA Legal Solutions saved our global brand. We missed our Indian renewal deadline, but their team managed the restoration process so professionally that our international registrations remained active. Highly recommended IP experts!"</p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-bold text-[#0F172A]">VM</div>
                                <div>
                                    <p className="font-bold text-gray-900 text-sm">Vikram Mehta</p>
                                    <p className="text-xs text-gray-500">Tech Entrepreneur</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-2xl shadow-sm border border-gray-100 transition-hover hover:bg-white hover:shadow-md">
                            <div className="flex text-[#D2A02A] mb-3 text-xl">★★★★★</div>
                            <p className="text-gray-600 italic mb-4 text-sm md:text-base">"The expertise they showed during our trademark rectification case was unparalleled. They compiled years of usage evidence that successfully defended our mark's validity against a malicious cancellation attempt."</p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-bold text-[#0F172A]">NG</div>
                                <div>
                                    <p className="font-bold text-gray-900 text-sm">Neha Gupta</p>
                                    <p className="text-xs text-gray-500">Retail Brand Owner</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Invalidation & Cancellation */}
                <section id="invalidation" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-6 md:mb-8 border-b-4 border-[#D2A02A] pb-4 inline-block uppercase tracking-tight">INVALIDATION & CANCELLATION</h2>
                  <p className="text-base md:text-xl leading-relaxed mb-6 text-gray-700">
                    Validity is not just about the calendar and renewal fees. A trademark registration can be challenged and cancelled even during its ten year term. One of the most common grounds for such a challenge is non use. If a registered trademark has not been used in commerce for a continuous period of five years and three months from its registration, any aggrieved party can apply for its cancellation.
                  </p>
                  <p className="text-base md:text-xl leading-relaxed mb-6 text-gray-700">
                    The concept of non use is designed to prevent defensive registrations where companies hoard marks to block competitors without any intention of actually using them. To defend against such a cancellation, the proprietor must provide evidence of commercial use, such as sales invoices, marketing materials, and publicity campaigns. Even a small amount of genuine commercial use can sometimes be enough to save a mark from being struck off the register.
                  </p>
                  <p className="text-base md:text-xl leading-relaxed mb-6 text-gray-700">
                    Other grounds for invalidation include the mark becoming generic, where the name of the brand becomes synonymous with the product itself, or if the mark was registered in bad faith. If the registration was obtained by misrepresenting facts to the Registry, it remains perpetually vulnerable to cancellation. Ensuring the validity of your trademark therefore requires active commercial use and a clean legal history.
                  </p>
                  <p className="text-base md:text-xl leading-relaxed mb-6 text-gray-700">
                    Another critical ground for rectification is if the mark was registered without sufficient distinctiveness. This often happens with marks that are highly descriptive of the goods or services. While the Registry might grant registration initially, a competitor can later challenge the validity on the basis that the mark should never have been registered in the first place because it lacks the capacity to distinguish one business from another. This is why choosing a strong, unique mark from the beginning is the best strategy for long term validity.
                  </p>
                </section>

                {/* Rectification section */}
                <section id="rectification" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-6 md:mb-8 border-b-4 border-[#D2A02A] pb-4 inline-block uppercase tracking-tight">RECTIFICATION OF THE REGISTER</h2>
                    <p className="text-base md:text-xl leading-relaxed mb-6 text-gray-700">
                        Rectification of the register refers to the legal process of correcting or deleting an entry that has been wrongly made or is wrongly remaining on the trademark register. This power is exercised by the Registrar or the High Court to maintain the purity of the trademark register. In the context of validity, a rectification petition can be a lethal tool in the hands of a competitor.
                    </p>
                    <div className="bg-gray-900 text-white p-8 rounded-3xl mb-8">
                        <h4 className="text-xl font-bold mb-4 text-[#D2A02A] uppercase">Common Grounds for Rectification:</h4>
                        <ul className="space-y-4 text-gray-300">
                            <li className="flex items-center gap-3">
                                <span className="text-[#D2A02A] font-bold">✓</span>
                                Incorrect entry of proprietor details or address
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-[#D2A02A] font-bold">✓</span>
                                Failure to observe a condition entered on the register
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-[#D2A02A] font-bold">✓</span>
                                The mark has ceased to be distinctive after registration
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-[#D2A02A] font-bold">✓</span>
                                The mark was registered by suppressing material facts
                            </li>
                        </ul>
                    </div>
                    <p className="text-base md:text-xl leading-relaxed text-gray-700">
                        A petition for rectification can be filed by any "person aggrieved" by the existence of the mark on the register. Generally, a person is considered aggrieved if the mark's presence restricts their own legitimate trade or business. This highlights the reality that legal validity is not a passive state but a contested status that can be challenged through formal legal proceedings.
                    </p>
                </section>

                {/* Common Myths */}
                <section id="myths" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-6 md:mb-8 border-b-4 border-[#D2A02A] pb-4 inline-block uppercase tracking-tight">COMMON MYTHS & REALITIES</h2>
                  <div className="space-y-6">
                    <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
                        <h4 className="text-xl font-bold text-[#D2A02A] mb-2 uppercase">Myth 1: Registration is Perpetual</h4>
                        <p className="text-gray-700 leading-relaxed text-lg"><strong>Reality:</strong> Registration is only a temporary grant of rights. It requires decadal renewals and active usage to remain valid. If you stop using the mark or forget to pay the fee, the law treats it as abandoned property.</p>
                    </div>
                    <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
                        <h4 className="text-xl font-bold text-[#D2A02A] mb-2 uppercase">Myth 2: I'll always get a reminder notice</h4>
                        <p className="text-gray-700 leading-relaxed text-lg"><strong>Reality:</strong> While the law mandates reminders, the Registry's failure to send one is not a valid defense for missing a deadline. Proprietors must maintain their own internal IP audit calendars.</p>
                    </div>
                    <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
                        <h4 className="text-xl font-bold text-[#D2A02A] mb-2 uppercase">Myth 3: Renewal is just a fee</h4>
                        <p className="text-gray-700 leading-relaxed text-lg"><strong>Reality:</strong> Renewal is also a time for legal scrutiny. It is the time to update owner details, check for conflicting marks, and ensure your class descriptions still protect your core business.</p>
                    </div>
                  </div>
                </section>

                {/* Comparative Analysis */}
                <section id="comparative" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-6 md:mb-8 border-b-4 border-[#D2A02A] pb-4 inline-block uppercase tracking-tight">RENEWAL VS RESTORATION</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                        <thead className="bg-[#0F172A] text-white">
                            <tr>
                                <th className="p-4 md:p-6 font-bold uppercase text-sm">Feature</th>
                                <th className="p-4 md:p-6 font-bold uppercase text-sm">Standard Renewal</th>
                                <th className="p-4 md:p-6 font-bold uppercase text-sm">Restoration</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-700">
                            <tr className="border-b border-gray-50">
                                <td className="p-4 md:p-6 font-bold">Timing</td>
                                <td className="p-4 md:p-6">Within 1 year before expiry</td>
                                <td className="p-4 md:p-6">6-12 months after expiry</td>
                            </tr>
                            <tr className="border-b border-gray-50 bg-gray-50">
                                <td className="p-4 md:p-6 font-bold">Complexity</td>
                                <td className="p-4 md:p-6">Low (Administrative)</td>
                                <td className="p-4 md:p-6">High (Requires petition)</td>
                            </tr>
                            <tr className="border-b border-gray-50">
                                <td className="p-4 md:p-6 font-bold">Registry status</td>
                                <td className="p-4 md:p-6">Remains "Registered"</td>
                                <td className="p-4 md:p-6">Changes to "Removed"</td>
                            </tr>
                            <tr className="border-b border-gray-50 bg-gray-50">
                                <td className="p-4 md:p-6 font-bold">Government Fee</td>
                                <td className="p-4 md:p-6">Base Fee only</td>
                                <td className="p-4 md:p-6">Base Fee + Surcharge + Restoration Fee</td>
                            </tr>
                        </tbody>
                    </table>
                  </div>
                  <p className="text-base md:text-xl leading-relaxed mt-6 text-gray-700">
                    Understanding these differences is key to avoiding unnecessary costs. Restoration is basically a legal plea to the Registrar to bring a dead mark back to life. It is significantly more expensive and there is no guarantee that the Registrar will grant the request if they believe the owner was negligent or intended to abandon the mark.
                  </p>
                </section>

                {/* Best Practices Expanded */}
                <section id="best-practices" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-6 md:mb-8 border-b-4 border-[#D2A02A] pb-4 inline-block uppercase tracking-tight">STRATEGIC BEST PRACTICES</h2>
                  <p className="text-base md:text-xl leading-relaxed mb-8 text-gray-700">
                    Maintaining the validity of your trademark requires more than just paying fees. It requires a proactive and vigilant approach to brand management. The following strategies have been refined by our senior IP attorneys through decades of practice in the Indian and international markets.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-8 border-2 border-gray-100 rounded-3xl hover:border-[#D2A02A] transition-all group shadow-sm bg-white">
                        <h4 className="text-xl font-bold mb-4 group-hover:text-[#D2A02A] uppercase">1. Centralized IP Management</h4>
                        <p className="text-gray-600 text-lg leading-relaxed">Don't let individual branch offices handle their own filings. Centralize all IP records at the corporate level to ensure that deadlines are monitored by professional staff using dedicated docketing software.</p>
                    </div>
                    <div className="p-8 border-2 border-gray-100 rounded-3xl hover:border-[#D2A02A] transition-all group shadow-sm bg-white">
                        <h4 className="text-xl font-bold mb-4 group-hover:text-[#D2A02A] uppercase">2. Use it or Lose it</h4>
                        <p className="text-gray-600 text-lg leading-relaxed">Ensure the mark is used at least once every three years in a documented commercial transaction. Keep specialized invoices that clearly display the trademark next to the product description.</p>
                    </div>
                    <div className="p-8 border-2 border-gray-100 rounded-3xl hover:border-[#D2A02A] transition-all group shadow-sm bg-white">
                        <h4 className="text-xl font-bold mb-4 group-hover:text-[#D2A02A] uppercase">3. Surveillance & Monitoring</h4>
                        <p className="text-gray-600 text-lg leading-relaxed">Subscribe to trademark watch services. Detecting an infringing mark and filing an opposition is often easier than trying to cancel a mark after it's been registered.</p>
                    </div>
                    <div className="p-8 border-2 border-gray-100 rounded-3xl hover:border-[#D2A02A] transition-all group shadow-sm bg-white">
                        <h4 className="text-xl font-bold mb-4 group-hover:text-[#D2A02A] uppercase">4. Audit Your Licenses</h4>
                        <p className="text-gray-600 text-lg leading-relaxed">If you license your trademark to others, ensure the quality control provisions are actively enforced. "Naked licensing" without control can lead to a loss of distinctiveness and validity.</p>
                    </div>
                  </div>
                </section>

                {/* FAQs */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-10 border-b-4 border-[#D2A02A] inline-block uppercase tracking-wide">Frequently Asked Questions</h2>
                  <div className="space-y-8">
                    {faqs.map((faq, index) => (
                      <div key={index} className="bg-white border border-gray-200 p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-4 flex items-start">
                          <span className="text-[#D2A02A] mr-4 text-3xl leading-none">Q.</span>
                          {faq.question}
                        </h3>
                        <p className="text-gray-700 leading-relaxed text-lg pl-10 border-l-2 border-gray-100">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Final CTA */}
                <section className="bg-[#0F172A] rounded-[3rem] p-10 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#D2A02A] rounded-full filter blur-[100px] opacity-10 -mr-32 -mt-32"></div>
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full filter blur-[100px] opacity-10 -ml-32 -mb-32"></div>
                  <div className="relative z-10">
                    <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight tracking-tight uppercase">Don't Leave Your Brand <span className="text-[#D2A02A]">Vulnerable</span></h2>
                    <p className="text-lg md:text-2xl opacity-80 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
                      Losing a trademark registration can take minutes, but building a brand takes years. Let our seasoned IP lawyers secure your legacy with proactive renewal and management.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                      <Link href="/contact">
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-5 px-12 rounded-full transition-all transform hover:scale-110 shadow-lg text-lg uppercase tracking-widest">
                          Talk to a Lawyer Now
                        </button>
                      </Link>
                      <a href="tel:+918700343611">
                        <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-5 px-12 rounded-full transition-all text-lg uppercase tracking-widest">
                          Call +91-8700343611
                        </button>
                      </a>
                    </div>
                  </div>
                </section>

              </div>
            </div>

            {/* Sidebar */}
            <div className="hidden lg:block space-y-8 sticky top-24">
                {/* Contact Card */}
                <div className="bg-[#0F172A] p-8 rounded-[2rem] shadow-2xl text-white relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#D2A02A] to-transparent opacity-0 group-hover:opacity-10 transition-opacity"></div>
                  <h3 className="text-2xl font-black mb-4 relative z-10 uppercase tracking-tight">Need Urgent Help?</h3>
                  <p className="text-gray-400 mb-8 text-lg font-light relative z-10">
                    Our senior IP attorneys are available for immediate consultation on trademark renewals and restorations.
                  </p>
                  <a 
                    href="tel:+918700343611" 
                    className="block w-full bg-[#D2A02A] text-white text-center py-5 rounded-2xl font-black hover:bg-[#b88a22] transition-all transform hover:-translate-y-1 shadow-lg relative z-10 uppercase tracking-widest text-sm"
                  >
                    Call Now
                  </a>
                  <p className="mt-4 text-center text-xs text-gray-500 font-light italic">Confidential Advice</p>
                </div>

                {/* Download App Card */}
                <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 uppercase tracking-tight">Manage Your IP</h3>
                  <div className="flex flex-col gap-4">
                    <Link href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions" target="_blank" className="hover:scale-105 transition-transform">
                      <Image src="/newAssets/appstore.svg" alt="Play Store" width={200} height={55} className="w-full h-auto" />
                    </Link>
                    <Link href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186" target="_blank" className="hover:scale-105 transition-transform">
                      <Image src="/newAssets/playstore.svg" alt="App Store" width={200} height={55} className="w-full h-auto" />
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
