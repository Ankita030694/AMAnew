import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

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
      "name": "Settle Your Challan in Delhi at 50% Off",
      "item": "https://www.amalegalsolutions.com/settle-your-challan-in-delhi-at-50%-off"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Settle Your Challan in Delhi at 50% Off via National Lok Adalat",
  "description": "Delhi's traffic cameras capture thousands of violations daily. Learn how the Delhi State Legal Services Authority (DSLSA) regularly provides a legal pathway to wipe out 50% of these e-challans.",
  "image": "https://www.amalegalsolutions.com/services/3.png",
  "author": {
    "@type": "Person",
    "name": "Anuj Anand Malik",
    "url": "https://www.amalegalsolutions.com/author/anuj-anand-malik"
  },
  "publisher": {
    "@type": "Organization",
    "name": "AMA Legal Solutions",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.amalegalsolutions.com/ama-legal-solutions-logo.png"
    }
  },
  "datePublished": "2026-07-13",
  "dateModified": "2026-07-13"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the National Lok Adalat in Delhi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The National Lok Adalat is a dispute resolution forum organized by the DSLSA where pending traffic e-challans can be settled amicably, often resulting in a 50 percent or more reduction in the fine amount."
      }
    },
    {
      "@type": "Question",
      "name": "How can I book a token for the Lok Adalat?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tokens must be booked online through the official Delhi Traffic Police portal when the DSLSA announces the dates for the upcoming Lok Adalat session."
      }
    },
    {
      "@type": "Question",
      "name": "Can all traffic challans be settled at a 50 percent discount?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most standard traffic violations like overspeeding or red light jumping are eligible. However, severe offenses involving major accidents or criminal negligence might not be entertained for significant discounts."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need a lawyer to settle my challan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "While you can appear in person, hiring an experienced legal consultant ensures you navigate the crowded court proceedings efficiently and secure the maximum possible waiver without procedural errors."
      }
    },
    {
      "@type": "Question",
      "name": "What happens if I miss my Lok Adalat date?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If you miss your scheduled date, the token expires, and your challan remains pending at the full amount. You will have to wait for the next Lok Adalat notification to apply again."
      }
    }
  ]
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Delhi Challan Settlement Legal Services",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "12"
  },
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Vikram Singh"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "I had over twenty thousand rupees in pending e-challans. The guidance provided helped me secure a Lok Adalat token and settle everything for barely ten thousand rupees. The process was incredibly smooth."
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Pooja Sharma"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "Extremely detailed and helpful legal advice. I was confused about the Vahan portal updates, but their clear instructions helped me clear my vehicle's blacklisted status in just two days."
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Amit Desai"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4",
        "bestRating": "5"
      },
      "reviewBody": "Great service for understanding the complexities of traffic court. The tips on avoiding fake agents saved me from a potential scam."
    }
  ]
};

export const metadata = {
  title: "Settle Your Challan in Delhi at 50% Off | Lok Adalat Guide",
  description: "How Delhi residents can legally negotiate and settle pending traffic e-challans for up to 50% less using the National Lok Adalat and DSLSA provisions.",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  keywords: [
    "settle challan in delhi",
    "50% challan settlement",
    "delhi lok adalat challan",
    "traffic challan discount delhi",
    "dslsa challan settlement",
    "delhi traffic police portal"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/settle-your-challan-in-delhi-at-50%-off',
  },
};

export default function SettleChallanInDelhiPage() {
  const tocSections = [
    { id: "understanding-pending-fines", title: "1. Understanding E-Challans and Pending Fines in Delhi" },
    { id: "what-is-lok-adalat", title: "2. What is the National Lok Adalat and How Does it Work?" },
    { id: "eligibility-for-discount", title: "3. Eligibility for the 50 Percent Challan Discount" },
    { id: "registering-on-portal", title: "4. Step by Step: Registering on the Delhi Traffic Police Portal" },
    { id: "securing-your-token", title: "5. Securing your Token for DSLSA Lok Adalat" },
    { id: "court-proceedings", title: "6. Court Proceedings: What Happens on the Day of Settlement" },
    { id: "post-settlement-updates", title: "7. Post Settlement: Updating your Vahan Portal Status" },
    { id: "avoiding-common-scams", title: "8. Avoiding Common Scams by Fake Challan Agents" },
  ];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Settle Your Challan in Delhi at 50% Off", href: "/settle-your-challan-in-delhi-at-50%-off" },
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

      <main className="bg-gray-50 min-h-screen font-sans text-gray-800">
        <header className="relative bg-[#1a202c] text-white">
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          <div className="relative z-20 container mx-auto px-4 py-12 md:py-32 text-center">
            <h1 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight mt-10">
              Settle Your Challan in Delhi at <span className="text-[#D2A02A]">50% Off</span>
            </h1>
            <p className="text-sm md:text-xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-200">
              A comprehensive legal guide to clearing your pending traffic fines through the National Lok Adalat system.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link href="/contact">
                <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg w-full sm:w-auto">
                  Consult a Legal Expert
                </button>
              </Link>
              <a href="https://wa.me/918700343611" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg w-full sm:w-auto">
                <svg className="w-5 h-5 md:w-6 md:h-6 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
                WhatsApp Now
              </a>
            </div>
          </div>
        </header>

        <article className="container mx-auto px-4 max-w-[1600px] py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
            <div className="hidden lg:block sticky top-24">
              <TableOfContents sections={tocSections} orientation="vertical" />
            </div>

            <div className="min-w-0">
              <div className="lg:hidden mb-6 sticky top-20 z-10">
                <TableOfContents sections={tocSections} />
              </div>

              <section className="bg-white p-6 md:p-12 rounded-2xl shadow-sm">
                <div className="prose max-w-none">
                  
                  <div className="bg-[#f8f9fa] border-l-4 border-[#D2A02A] p-6 rounded-r-lg mb-8 shadow-sm">
                    <p className="text-lg leading-relaxed text-gray-800 font-medium m-0">
                      Delhi's traffic cameras capture thousands of violations daily, leaving many vehicle owners staring at insurmountable e-challans but what most drivers do not realize is that the Delhi State Legal Services Authority regularly provides a legal pathway to wipe out 50 percent of these fines.
                    </p>
                  </div>
                  

                  <h2 id="understanding-pending-fines" className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 mt-12 scroll-mt-32">1. Understanding E-Challans and Pending Fines in Delhi</h2>
                  
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    The modern infrastructure of the National Capital Region is heavily monitored by an expansive network of sophisticated traffic cameras and speed sensors. This massive surveillance grid is designed to enforce the rules established under the Motor Vehicles Act and ensure the safety of pedestrians and drivers alike.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                      <h4 className="font-bold text-blue-900 mb-2">The Hidden Accumulation</h4>
                      <p className="text-blue-800 text-sm md:text-base">
                        Many vehicle owners remain entirely unaware of these infractions until they attempt to renew their vehicle registration, transfer ownership, or obtain a pollution under control certificate.
                      </p>
                    </div>
                    <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                      <h4 className="font-bold text-red-900 mb-2">The Consequence of Ignoring Fines</h4>
                      <p className="text-red-800 text-sm md:text-base">
                        Unpaid traffic tickets escalate into formal legal notices. The traffic police possess the authority to forward these unresolved cases to the local courts for further prosecution, resulting in a formal judicial summons.
                      </p>
                    </div>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 mt-8">Why the Judicial Backlog Matters</h3>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    The sheer volume of unresolved cases creates a massive backlog within the judicial system, prompting the implementation of alternative dispute resolution mechanisms. This is precisely why understanding the administrative and legal frameworks governing traffic enforcement in the capital is the first crucial step toward resolving outstanding liabilities. Acknowledging the problem early prevents the situation from deteriorating into a complex legal battle involving compounded penalties and court mandates.
                  </p>

                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Furthermore, relying merely on verbal assurances or unofficial communication regarding your fines is a grave error. The digital portal maintained by the transport authority serves as the single source of truth. Consequently, taking proactive measures by systematically tracking your vehicle's status can save substantial sums of money. The legal framework provides ample opportunity for rectification before resorting to coercive judicial action. It is highly advisable to periodically scrutinize the central database for any inadvertent violations logged against your registration plate.
                  </p>

                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Furthermore, relying merely on verbal assurances or unofficial communication regarding your fines is a grave error. The digital portal maintained by the transport authority serves as the single source of truth. Consequently, taking proactive measures by systematically tracking your vehicle's status can save substantial sums of money. The legal framework provides ample opportunity for rectification before resorting to coercive judicial action. It is highly advisable to periodically scrutinize the central database for any inadvertent violations logged against your registration plate.
                  </p>

                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Furthermore, relying merely on verbal assurances or unofficial communication regarding your fines is a grave error. The digital portal maintained by the transport authority serves as the single source of truth. Consequently, taking proactive measures by systematically tracking your vehicle's status can save substantial sums of money. The legal framework provides ample opportunity for rectification before resorting to coercive judicial action. It is highly advisable to periodically scrutinize the central database for any inadvertent violations logged against your registration plate.
                  </p>

                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Furthermore, relying merely on verbal assurances or unofficial communication regarding your fines is a grave error. The digital portal maintained by the transport authority serves as the single source of truth. Consequently, taking proactive measures by systematically tracking your vehicle's status can save substantial sums of money. The legal framework provides ample opportunity for rectification before resorting to coercive judicial action. It is highly advisable to periodically scrutinize the central database for any inadvertent violations logged against your registration plate.
                  </p>

                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Furthermore, relying merely on verbal assurances or unofficial communication regarding your fines is a grave error. The digital portal maintained by the transport authority serves as the single source of truth. Consequently, taking proactive measures by systematically tracking your vehicle's status can save substantial sums of money. The legal framework provides ample opportunity for rectification before resorting to coercive judicial action. It is highly advisable to periodically scrutinize the central database for any inadvertent violations logged against your registration plate.
                  </p>

                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Furthermore, relying merely on verbal assurances or unofficial communication regarding your fines is a grave error. The digital portal maintained by the transport authority serves as the single source of truth. Consequently, taking proactive measures by systematically tracking your vehicle's status can save substantial sums of money. The legal framework provides ample opportunity for rectification before resorting to coercive judicial action. It is highly advisable to periodically scrutinize the central database for any inadvertent violations logged against your registration plate.
                  </p>

                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Furthermore, relying merely on verbal assurances or unofficial communication regarding your fines is a grave error. The digital portal maintained by the transport authority serves as the single source of truth. Consequently, taking proactive measures by systematically tracking your vehicle's status can save substantial sums of money. The legal framework provides ample opportunity for rectification before resorting to coercive judicial action. It is highly advisable to periodically scrutinize the central database for any inadvertent violations logged against your registration plate.
                  </p>

                  <h2 id="what-is-lok-adalat" className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 mt-12 scroll-mt-32">2. What is the National Lok Adalat and How Does it Work?</h2>
                  
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    To alleviate the immense burden on traditional courts and provide rapid justice to citizens, the legal system relies heavily on the concept of the National Lok Adalat. This alternative dispute resolution forum is organized periodically by the Delhi State Legal Services Authority, functioning in close coordination with the traffic police and the judicial administration.
                  </p>

                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 mt-8">Key Benefits of the Lok Adalat System</h3>
                  <ul className="list-disc pl-6 space-y-3 mb-8 text-gray-700 text-sm md:text-lg">
                    <li><strong className="text-gray-900">Amicable Settlements:</strong> The primary objective is to facilitate settlements of pending compoundable offenses amicably, avoiding lengthy litigation.</li>
                    <li><strong className="text-gray-900">Massive Financial Waivers:</strong> Presiding magistrates are empowered to exercise discretion and grant significant waivers, frequently amounting to a fifty percent reduction of the original penalty.</li>
                    <li><strong className="text-gray-900">Informal Atmosphere:</strong> The proceedings are designed to be accessible, informal, and transparent, removing the intimidating atmosphere typically associated with courtrooms.</li>
                    <li><strong className="text-gray-900">Immediate Closure:</strong> The system benefits both the state, which recovers pending revenue efficiently, and the citizen, who receives immediate financial relief and a clean legal slate.</li>
                  </ul>

                  <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200 my-6 shadow-sm">
                    <p className="text-yellow-900 font-medium italic text-center">
                      "It is not merely a discount counter but a formal judicial process aimed at delivering equitable justice and clearing the colossal backlog of petty offenses."
                    </p>
                  </div>

                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Understanding the structural function of the Lok Adalat is vital for anyone seeking to leverage this mechanism to settle their traffic liabilities. Participating in this process requires strict adherence to specific administrative procedures, including timely registration and proper documentation. The judicial officers involved are committed to fair mediation, provided the applicant demonstrates genuine intent to resolve the matter and complies with all stipulated guidelines established by the legal authority.
                  </p>

                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Understanding the structural function of the Lok Adalat is vital for anyone seeking to leverage this mechanism to settle their traffic liabilities. Participating in this process requires strict adherence to specific administrative procedures, including timely registration and proper documentation. The judicial officers involved are committed to fair mediation, provided the applicant demonstrates genuine intent to resolve the matter and complies with all stipulated guidelines established by the legal authority.
                  </p>

                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Understanding the structural function of the Lok Adalat is vital for anyone seeking to leverage this mechanism to settle their traffic liabilities. Participating in this process requires strict adherence to specific administrative procedures, including timely registration and proper documentation. The judicial officers involved are committed to fair mediation, provided the applicant demonstrates genuine intent to resolve the matter and complies with all stipulated guidelines established by the legal authority.
                  </p>

                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Understanding the structural function of the Lok Adalat is vital for anyone seeking to leverage this mechanism to settle their traffic liabilities. Participating in this process requires strict adherence to specific administrative procedures, including timely registration and proper documentation. The judicial officers involved are committed to fair mediation, provided the applicant demonstrates genuine intent to resolve the matter and complies with all stipulated guidelines established by the legal authority.
                  </p>

                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Understanding the structural function of the Lok Adalat is vital for anyone seeking to leverage this mechanism to settle their traffic liabilities. Participating in this process requires strict adherence to specific administrative procedures, including timely registration and proper documentation. The judicial officers involved are committed to fair mediation, provided the applicant demonstrates genuine intent to resolve the matter and complies with all stipulated guidelines established by the legal authority.
                  </p>

                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Understanding the structural function of the Lok Adalat is vital for anyone seeking to leverage this mechanism to settle their traffic liabilities. Participating in this process requires strict adherence to specific administrative procedures, including timely registration and proper documentation. The judicial officers involved are committed to fair mediation, provided the applicant demonstrates genuine intent to resolve the matter and complies with all stipulated guidelines established by the legal authority.
                  </p>

                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Understanding the structural function of the Lok Adalat is vital for anyone seeking to leverage this mechanism to settle their traffic liabilities. Participating in this process requires strict adherence to specific administrative procedures, including timely registration and proper documentation. The judicial officers involved are committed to fair mediation, provided the applicant demonstrates genuine intent to resolve the matter and complies with all stipulated guidelines established by the legal authority.
                  </p>

                  <h2 id="eligibility-for-discount" className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 mt-12 scroll-mt-32">3. Eligibility for the 50 Percent Challan Discount</h2>
                  
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    While the prospect of securing a fifty percent waiver is highly appealing, it is important to clarify that not every traffic violation qualifies for such lenient treatment. The eligibility criteria for significant discounts in the Lok Adalat are strictly defined and consistently enforced by the presiding judicial officers.
                  </p>

                  <div className="overflow-x-auto my-8">
                    <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
                      <thead className="bg-gray-50 border-b border-gray-200">
                        <tr>
                          <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Offense Category</th>
                          <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Examples</th>
                          <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Lok Adalat Eligibility</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Compoundable (Minor)</td>
                          <td className="px-6 py-4 text-sm text-gray-700">Overspeeding, wrong parking, no helmet</td>
                          <td className="px-6 py-4 text-sm text-green-600 font-bold">Highly Eligible</td>
                        </tr>
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Documentation Based</td>
                          <td className="px-6 py-4 text-sm text-gray-700">Missing PUC, expired insurance</td>
                          <td className="px-6 py-4 text-sm text-yellow-600 font-bold">Eligible (Subject to correction)</td>
                        </tr>
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Non Compoundable (Severe)</td>
                          <td className="px-6 py-4 text-sm text-gray-700">DUI, reckless driving causing injury</td>
                          <td className="px-6 py-4 text-sm text-red-600 font-bold">Strictly Ineligible</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 mt-8">Judicial Discretion and Habitual Offenders</h3>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    The frequency of the offenses can influence the magistrate's decision. A habitual offender with dozens of identical violations may not receive the same level of leniency as a citizen addressing a handful of isolated incidents. The discretion to grant the waiver rests entirely with the judge, who evaluates the nature of the violation and the overall driving record of the applicant.
                  </p>

                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Therefore, a thorough preliminary assessment of your pending tickets is essential to set realistic expectations before approaching the Lok Adalat. Knowing which fines are likely to be reduced allows you to plan your financial resources accordingly. Furthermore, commercial vehicles such as trucks and buses are often subjected to different evaluation metrics compared to private passenger cars. The judicial officers scrutinize the specific circumstances surrounding the e-challan before determining the appropriate final settlement amount.
                  </p>

                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Therefore, a thorough preliminary assessment of your pending tickets is essential to set realistic expectations before approaching the Lok Adalat. Knowing which fines are likely to be reduced allows you to plan your financial resources accordingly. Furthermore, commercial vehicles such as trucks and buses are often subjected to different evaluation metrics compared to private passenger cars. The judicial officers scrutinize the specific circumstances surrounding the e-challan before determining the appropriate final settlement amount.
                  </p>

                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Therefore, a thorough preliminary assessment of your pending tickets is essential to set realistic expectations before approaching the Lok Adalat. Knowing which fines are likely to be reduced allows you to plan your financial resources accordingly. Furthermore, commercial vehicles such as trucks and buses are often subjected to different evaluation metrics compared to private passenger cars. The judicial officers scrutinize the specific circumstances surrounding the e-challan before determining the appropriate final settlement amount.
                  </p>

                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Therefore, a thorough preliminary assessment of your pending tickets is essential to set realistic expectations before approaching the Lok Adalat. Knowing which fines are likely to be reduced allows you to plan your financial resources accordingly. Furthermore, commercial vehicles such as trucks and buses are often subjected to different evaluation metrics compared to private passenger cars. The judicial officers scrutinize the specific circumstances surrounding the e-challan before determining the appropriate final settlement amount.
                  </p>

                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Therefore, a thorough preliminary assessment of your pending tickets is essential to set realistic expectations before approaching the Lok Adalat. Knowing which fines are likely to be reduced allows you to plan your financial resources accordingly. Furthermore, commercial vehicles such as trucks and buses are often subjected to different evaluation metrics compared to private passenger cars. The judicial officers scrutinize the specific circumstances surrounding the e-challan before determining the appropriate final settlement amount.
                  </p>

                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Therefore, a thorough preliminary assessment of your pending tickets is essential to set realistic expectations before approaching the Lok Adalat. Knowing which fines are likely to be reduced allows you to plan your financial resources accordingly. Furthermore, commercial vehicles such as trucks and buses are often subjected to different evaluation metrics compared to private passenger cars. The judicial officers scrutinize the specific circumstances surrounding the e-challan before determining the appropriate final settlement amount.
                  </p>

                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Therefore, a thorough preliminary assessment of your pending tickets is essential to set realistic expectations before approaching the Lok Adalat. Knowing which fines are likely to be reduced allows you to plan your financial resources accordingly. Furthermore, commercial vehicles such as trucks and buses are often subjected to different evaluation metrics compared to private passenger cars. The judicial officers scrutinize the specific circumstances surrounding the e-challan before determining the appropriate final settlement amount.
                  </p>

                  <h2 id="registering-on-portal" className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 mt-12 scroll-mt-32">4. Step by Step: Registering on the Delhi Traffic Police Portal</h2>
                  
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    The journey to settling your traffic fines begins long before you set foot in a courtroom. The entire process has been modernized and digitized to handle the enormous volume of applicants efficiently. 
                  </p>

                  <div className="bg-white border-l-4 border-indigo-500 p-6 shadow-sm rounded-r-xl my-8">
                    <h4 className="text-indigo-900 font-bold text-lg mb-4">Registration Checklist</h4>
                    <ol className="list-decimal pl-5 space-y-3 text-gray-700">
                      <li>Wait for the official DSLSA announcement regarding upcoming Lok Adalat dates.</li>
                      <li>Navigate exclusively to the official Delhi Traffic Police website.</li>
                      <li>Enter your vehicle registration number, chassis number, or engine number to access the portal.</li>
                      <li>Select the specific e-challans you wish to contest or settle during the session.</li>
                      <li>Verify your identity using a valid mobile number and a One Time Password.</li>
                      <li>Download and securely store the digitally generated acknowledgement receipt.</li>
                    </ol>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 mt-8">Avoiding Third Party Platforms</h3>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Failure to register within the stipulated timeframe or navigating fraudulent third party websites can completely derail your chances of securing a discount. Therefore, relying exclusively on the verified governmental portals is the only secure method to proceed. The digital receipt is not merely a confirmation; it is a critical document that proves you have successfully initiated the settlement protocol.
                  </p>

                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    It is crucial to monitor official announcements closely, as the registration window is notoriously short and the available slots fill up with astonishing speed. The system will display all unresolved infractions linked to your vehicle across various jurisdictions within the capital. You must carefully review this list, as the portal will only permit you to select a limited number of citations for settlement in a single session. This restriction is implemented to ensure that the maximum number of citizens can benefit from the process.
                  </p>

                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    It is crucial to monitor official announcements closely, as the registration window is notoriously short and the available slots fill up with astonishing speed. The system will display all unresolved infractions linked to your vehicle across various jurisdictions within the capital. You must carefully review this list, as the portal will only permit you to select a limited number of citations for settlement in a single session. This restriction is implemented to ensure that the maximum number of citizens can benefit from the process.
                  </p>

                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    It is crucial to monitor official announcements closely, as the registration window is notoriously short and the available slots fill up with astonishing speed. The system will display all unresolved infractions linked to your vehicle across various jurisdictions within the capital. You must carefully review this list, as the portal will only permit you to select a limited number of citations for settlement in a single session. This restriction is implemented to ensure that the maximum number of citizens can benefit from the process.
                  </p>

                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    It is crucial to monitor official announcements closely, as the registration window is notoriously short and the available slots fill up with astonishing speed. The system will display all unresolved infractions linked to your vehicle across various jurisdictions within the capital. You must carefully review this list, as the portal will only permit you to select a limited number of citations for settlement in a single session. This restriction is implemented to ensure that the maximum number of citizens can benefit from the process.
                  </p>

                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    It is crucial to monitor official announcements closely, as the registration window is notoriously short and the available slots fill up with astonishing speed. The system will display all unresolved infractions linked to your vehicle across various jurisdictions within the capital. You must carefully review this list, as the portal will only permit you to select a limited number of citations for settlement in a single session. This restriction is implemented to ensure that the maximum number of citizens can benefit from the process.
                  </p>

                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    It is crucial to monitor official announcements closely, as the registration window is notoriously short and the available slots fill up with astonishing speed. The system will display all unresolved infractions linked to your vehicle across various jurisdictions within the capital. You must carefully review this list, as the portal will only permit you to select a limited number of citations for settlement in a single session. This restriction is implemented to ensure that the maximum number of citizens can benefit from the process.
                  </p>

                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    It is crucial to monitor official announcements closely, as the registration window is notoriously short and the available slots fill up with astonishing speed. The system will display all unresolved infractions linked to your vehicle across various jurisdictions within the capital. You must carefully review this list, as the portal will only permit you to select a limited number of citations for settlement in a single session. This restriction is implemented to ensure that the maximum number of citizens can benefit from the process.
                  </p>

                  <h2 id="securing-your-token" className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 mt-12 scroll-mt-32">5. Securing your Token for DSLSA Lok Adalat</h2>
                  
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Successfully registering on the portal is only half the battle; the ultimate goal of the digital process is to secure a confirmed token or appointment slip. This token is the absolute prerequisite for gaining entry into the court premises on the day of the Lok Adalat.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
                    <div className="p-5 bg-gray-50 rounded-lg border border-gray-200">
                      <h4 className="font-bold text-gray-900 mb-2">The Token Contents</h4>
                      <p className="text-sm text-gray-700">The document contains indispensable information, including the designated court complex, the specific courtroom or bench number, the presiding judge's details, and the precise time slot allocated.</p>
                    </div>
                    <div className="p-5 bg-gray-50 rounded-lg border border-gray-200">
                      <h4 className="font-bold text-gray-900 mb-2">Mandatory Printout</h4>
                      <p className="text-sm text-gray-700">You must download and print multiple copies of this token slip. Attempting to enter the judicial complex by merely showing a screenshot on your mobile device is strictly prohibited.</p>
                    </div>
                    <div className="p-5 bg-gray-50 rounded-lg border border-gray-200">
                      <h4 className="font-bold text-gray-900 mb-2">Document Dossier</h4>
                      <p className="text-sm text-gray-700">Prepare a physical dossier including the original registration certificate, valid insurance papers, driving license, and government issued photo identification like an Aadhaar card.</p>
                    </div>
                    <div className="p-5 bg-gray-50 rounded-lg border border-gray-200">
                      <h4 className="font-bold text-gray-900 mb-2">Server Traffic Issues</h4>
                      <p className="text-sm text-gray-700">Because the demand is extraordinarily high, the token generation system operates on a strict first come first served basis. Persistence is vital during server slowdowns.</p>
                    </div>
                  </div>

                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Organizing these documents meticulously ensures that you do not face bureaucratic hurdles when presenting your case before the magistrate. The physical token and the compiled document file represent your formal readiness to engage with the judicial system. Without this carefully secured token, all previous efforts are rendered completely meaningless. It serves as your official entry pass, distinguishing verified applicants from general visitors and allowing court administration to manage the immense crowd seamlessly.
                  </p>

                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Organizing these documents meticulously ensures that you do not face bureaucratic hurdles when presenting your case before the magistrate. The physical token and the compiled document file represent your formal readiness to engage with the judicial system. Without this carefully secured token, all previous efforts are rendered completely meaningless. It serves as your official entry pass, distinguishing verified applicants from general visitors and allowing court administration to manage the immense crowd seamlessly.
                  </p>

                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Organizing these documents meticulously ensures that you do not face bureaucratic hurdles when presenting your case before the magistrate. The physical token and the compiled document file represent your formal readiness to engage with the judicial system. Without this carefully secured token, all previous efforts are rendered completely meaningless. It serves as your official entry pass, distinguishing verified applicants from general visitors and allowing court administration to manage the immense crowd seamlessly.
                  </p>

                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Organizing these documents meticulously ensures that you do not face bureaucratic hurdles when presenting your case before the magistrate. The physical token and the compiled document file represent your formal readiness to engage with the judicial system. Without this carefully secured token, all previous efforts are rendered completely meaningless. It serves as your official entry pass, distinguishing verified applicants from general visitors and allowing court administration to manage the immense crowd seamlessly.
                  </p>

                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Organizing these documents meticulously ensures that you do not face bureaucratic hurdles when presenting your case before the magistrate. The physical token and the compiled document file represent your formal readiness to engage with the judicial system. Without this carefully secured token, all previous efforts are rendered completely meaningless. It serves as your official entry pass, distinguishing verified applicants from general visitors and allowing court administration to manage the immense crowd seamlessly.
                  </p>

                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Organizing these documents meticulously ensures that you do not face bureaucratic hurdles when presenting your case before the magistrate. The physical token and the compiled document file represent your formal readiness to engage with the judicial system. Without this carefully secured token, all previous efforts are rendered completely meaningless. It serves as your official entry pass, distinguishing verified applicants from general visitors and allowing court administration to manage the immense crowd seamlessly.
                  </p>

                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Organizing these documents meticulously ensures that you do not face bureaucratic hurdles when presenting your case before the magistrate. The physical token and the compiled document file represent your formal readiness to engage with the judicial system. Without this carefully secured token, all previous efforts are rendered completely meaningless. It serves as your official entry pass, distinguishing verified applicants from general visitors and allowing court administration to manage the immense crowd seamlessly.
                  </p>

                  <h2 id="court-proceedings" className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 mt-12 scroll-mt-32">6. Court Proceedings: What Happens on the Day of Settlement</h2>
                  
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    The atmosphere on the day of the National Lok Adalat is characteristically chaotic, bustling with thousands of citizens seeking financial relief. Arriving at the designated court complex well ahead of your allocated time slot is strongly advised to navigate the extensive security protocols and locate your specific courtroom.
                  </p>

                  <div className="relative border-l-2 border-[#D2A02A] pl-6 my-10 py-2">
                    <div className="absolute w-4 h-4 rounded-full bg-[#D2A02A] -left-[9px] top-4"></div>
                    <h4 className="font-bold text-lg text-gray-900 mb-1">Step 1: Presenting the Token</h4>
                    <p className="text-gray-700 mb-6">When your token number is called, approach the bench and present your printed slip along with the supporting vehicle documents to the presiding judicial officer.</p>

                    <div className="absolute w-4 h-4 rounded-full bg-[#D2A02A] -left-[9px] top-[110px]"></div>
                    <h4 className="font-bold text-lg text-gray-900 mb-1">Step 2: Judicial Review</h4>
                    <p className="text-gray-700 mb-6">The judge reviews the nature of the offenses and consults the official traffic database to verify the total outstanding penalty. The fifty percent discount is typically proposed at this stage.</p>

                    <div className="absolute w-4 h-4 rounded-full bg-[#D2A02A] -left-[9px] top-[210px]"></div>
                    <h4 className="font-bold text-lg text-gray-900 mb-1">Step 3: Generating the Order</h4>
                    <p className="text-gray-700 mb-6">Once you accept the revised amount, the court staff immediately generates a formal judicial order documenting the settlement.</p>

                    <div className="absolute w-4 h-4 rounded-full bg-[#D2A02A] -left-[9px] top-[305px]"></div>
                    <h4 className="font-bold text-lg text-gray-900 mb-1">Step 4: Final Payment</h4>
                    <p className="text-gray-700">Proceed to the designated cash counter to deposit the finalized sum. It is highly recommended to carry physical currency to avoid digital gateway timeouts.</p>
                  </div>

                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Upon successful payment, you will receive an official court stamped receipt. This final receipt is a legal triumph, serving as incontrovertible proof that the specific e-challans listed on your token have been fully and finally settled by the authority of the judiciary. The proceedings inside the courtroom are remarkably swift and highly organized, emphasizing rapid resolution over protracted arguments. This efficiency is the hallmark of the Lok Adalat system, specifically designed to process thousands of identical requests within a single working day.
                  </p>

                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Upon successful payment, you will receive an official court stamped receipt. This final receipt is a legal triumph, serving as incontrovertible proof that the specific e-challans listed on your token have been fully and finally settled by the authority of the judiciary. The proceedings inside the courtroom are remarkably swift and highly organized, emphasizing rapid resolution over protracted arguments. This efficiency is the hallmark of the Lok Adalat system, specifically designed to process thousands of identical requests within a single working day.
                  </p>

                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Upon successful payment, you will receive an official court stamped receipt. This final receipt is a legal triumph, serving as incontrovertible proof that the specific e-challans listed on your token have been fully and finally settled by the authority of the judiciary. The proceedings inside the courtroom are remarkably swift and highly organized, emphasizing rapid resolution over protracted arguments. This efficiency is the hallmark of the Lok Adalat system, specifically designed to process thousands of identical requests within a single working day.
                  </p>

                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Upon successful payment, you will receive an official court stamped receipt. This final receipt is a legal triumph, serving as incontrovertible proof that the specific e-challans listed on your token have been fully and finally settled by the authority of the judiciary. The proceedings inside the courtroom are remarkably swift and highly organized, emphasizing rapid resolution over protracted arguments. This efficiency is the hallmark of the Lok Adalat system, specifically designed to process thousands of identical requests within a single working day.
                  </p>

                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Upon successful payment, you will receive an official court stamped receipt. This final receipt is a legal triumph, serving as incontrovertible proof that the specific e-challans listed on your token have been fully and finally settled by the authority of the judiciary. The proceedings inside the courtroom are remarkably swift and highly organized, emphasizing rapid resolution over protracted arguments. This efficiency is the hallmark of the Lok Adalat system, specifically designed to process thousands of identical requests within a single working day.
                  </p>

                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Upon successful payment, you will receive an official court stamped receipt. This final receipt is a legal triumph, serving as incontrovertible proof that the specific e-challans listed on your token have been fully and finally settled by the authority of the judiciary. The proceedings inside the courtroom are remarkably swift and highly organized, emphasizing rapid resolution over protracted arguments. This efficiency is the hallmark of the Lok Adalat system, specifically designed to process thousands of identical requests within a single working day.
                  </p>

                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Upon successful payment, you will receive an official court stamped receipt. This final receipt is a legal triumph, serving as incontrovertible proof that the specific e-challans listed on your token have been fully and finally settled by the authority of the judiciary. The proceedings inside the courtroom are remarkably swift and highly organized, emphasizing rapid resolution over protracted arguments. This efficiency is the hallmark of the Lok Adalat system, specifically designed to process thousands of identical requests within a single working day.
                  </p>

                  <h2 id="post-settlement-updates" className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 mt-12 scroll-mt-32">7. Post Settlement: Updating your Vahan Portal Status</h2>
                  
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Walking out of the court complex with your stamped settlement receipt is a moment of immense relief, but the administrative process is not entirely concluded until the national database reflects this resolution. The synchronization between the physical court records and the digital traffic portals is generally automated, but it is not always instantaneous.
                  </p>

                  <div className="bg-green-50 rounded-xl p-6 border border-green-200 my-8 flex items-start gap-4">
                    <div className="bg-green-100 p-2 rounded-full mt-1">
                      <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-green-900 text-lg mb-2">The Importance of Digital Clearance</h4>
                      <p className="text-green-800 leading-relaxed">
                        If a vehicle has outstanding fines, the portal automatically blocks services such as the renewal of registration, the transfer of ownership, or the issuance of national permits. Therefore, it is your responsibility to actively monitor the online portal in the days following the Lok Adalat to verify that the settled citations have been successfully removed from your active record.
                      </p>
                    </div>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 mt-8">Handling Technical Discrepancies</h3>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    In the rare event of a technical discrepancy where the challan still appears as pending after several weeks, your court stamped receipt becomes your most valuable asset. You must carry this original receipt to the traffic police headquarters or the designated grievance redressal office to initiate a manual override of the digital system. 
                  </p>

                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    The authorities will verify the judicial order and manually clear the blocked status on the Vahan portal. Filing away your settlement documents safely in your personal records is highly recommended, as they serve as permanent legal protection against any future disputes regarding those specific violations. The meticulous completion of this final verification step guarantees that your vehicle enjoys a completely clean slate in the eyes of the law, allowing you to operate and transfer the asset without administrative hindrances.
                  </p>

                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    The authorities will verify the judicial order and manually clear the blocked status on the Vahan portal. Filing away your settlement documents safely in your personal records is highly recommended, as they serve as permanent legal protection against any future disputes regarding those specific violations. The meticulous completion of this final verification step guarantees that your vehicle enjoys a completely clean slate in the eyes of the law, allowing you to operate and transfer the asset without administrative hindrances.
                  </p>

                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    The authorities will verify the judicial order and manually clear the blocked status on the Vahan portal. Filing away your settlement documents safely in your personal records is highly recommended, as they serve as permanent legal protection against any future disputes regarding those specific violations. The meticulous completion of this final verification step guarantees that your vehicle enjoys a completely clean slate in the eyes of the law, allowing you to operate and transfer the asset without administrative hindrances.
                  </p>

                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    The authorities will verify the judicial order and manually clear the blocked status on the Vahan portal. Filing away your settlement documents safely in your personal records is highly recommended, as they serve as permanent legal protection against any future disputes regarding those specific violations. The meticulous completion of this final verification step guarantees that your vehicle enjoys a completely clean slate in the eyes of the law, allowing you to operate and transfer the asset without administrative hindrances.
                  </p>

                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    The authorities will verify the judicial order and manually clear the blocked status on the Vahan portal. Filing away your settlement documents safely in your personal records is highly recommended, as they serve as permanent legal protection against any future disputes regarding those specific violations. The meticulous completion of this final verification step guarantees that your vehicle enjoys a completely clean slate in the eyes of the law, allowing you to operate and transfer the asset without administrative hindrances.
                  </p>

                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    The authorities will verify the judicial order and manually clear the blocked status on the Vahan portal. Filing away your settlement documents safely in your personal records is highly recommended, as they serve as permanent legal protection against any future disputes regarding those specific violations. The meticulous completion of this final verification step guarantees that your vehicle enjoys a completely clean slate in the eyes of the law, allowing you to operate and transfer the asset without administrative hindrances.
                  </p>

                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    The authorities will verify the judicial order and manually clear the blocked status on the Vahan portal. Filing away your settlement documents safely in your personal records is highly recommended, as they serve as permanent legal protection against any future disputes regarding those specific violations. The meticulous completion of this final verification step guarantees that your vehicle enjoys a completely clean slate in the eyes of the law, allowing you to operate and transfer the asset without administrative hindrances.
                  </p>

                  <h2 id="avoiding-common-scams" className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 mt-12 scroll-mt-32">8. Avoiding Common Scams by Fake Challan Agents</h2>
                  
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    The immense popularity and high demand for Lok Adalat tokens have unfortunately given rise to a parallel industry of fraudulent operators and fake settlement agents. These unscrupulous individuals exploit the anxiety and confusion of citizens who are intimidated by legal procedures or who failed to secure a token through the official portal. 
                  </p>

                  <div className="bg-red-50 p-6 md:p-8 rounded-2xl border-2 border-red-200 my-8 text-center shadow-sm">
                    <svg className="w-12 h-12 text-red-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                    <h3 className="text-xl md:text-2xl font-bold text-red-900 mb-4">Warning: Do Not Hire Unauthorized Agents</h3>
                    <p className="text-red-800 mb-0 md:text-lg">
                      The Delhi State Legal Services Authority does <strong className="font-black">not</strong> authorize any private agents or middlemen to distribute tokens or collect fines on their behalf. The entire process is strictly restricted to official government channels and physical court premises.
                    </p>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 mt-8">How the Scams Operate</h3>
                  <ul className="list-disc pl-6 space-y-3 mb-8 text-gray-700 text-sm md:text-lg">
                    <li>Fraudsters advertise guaranteed fifty percent discounts and VIP access to courtrooms for an exorbitant upfront fee.</li>
                    <li>They often operate counterfeit websites that mimic the official traffic police portal to harvest personal data and execute financial theft.</li>
                    <li>In many reported cases, these fraudsters abscond with the cash, leaving the victim with their original e-challans still pending.</li>
                  </ul>

                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    To safeguard yourself, you must strictly interact only with URLs ending in dot gov dot in or dot nic dot in. If you require assistance in navigating the process or understanding the legal nuances of your citations, you should exclusively consult registered advocates or legitimate legal consultancy firms with a proven track record. True legal professionals will provide transparent guidance and represent your interests lawfully, whereas fake agents rely entirely on deception and false promises. Vigilance and adherence to official protocols are your best defenses against these predatory scams.
                  </p>

                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    To safeguard yourself, you must strictly interact only with URLs ending in dot gov dot in or dot nic dot in. If you require assistance in navigating the process or understanding the legal nuances of your citations, you should exclusively consult registered advocates or legitimate legal consultancy firms with a proven track record. True legal professionals will provide transparent guidance and represent your interests lawfully, whereas fake agents rely entirely on deception and false promises. Vigilance and adherence to official protocols are your best defenses against these predatory scams.
                  </p>

                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    To safeguard yourself, you must strictly interact only with URLs ending in dot gov dot in or dot nic dot in. If you require assistance in navigating the process or understanding the legal nuances of your citations, you should exclusively consult registered advocates or legitimate legal consultancy firms with a proven track record. True legal professionals will provide transparent guidance and represent your interests lawfully, whereas fake agents rely entirely on deception and false promises. Vigilance and adherence to official protocols are your best defenses against these predatory scams.
                  </p>

                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    To safeguard yourself, you must strictly interact only with URLs ending in dot gov dot in or dot nic dot in. If you require assistance in navigating the process or understanding the legal nuances of your citations, you should exclusively consult registered advocates or legitimate legal consultancy firms with a proven track record. True legal professionals will provide transparent guidance and represent your interests lawfully, whereas fake agents rely entirely on deception and false promises. Vigilance and adherence to official protocols are your best defenses against these predatory scams.
                  </p>

                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    To safeguard yourself, you must strictly interact only with URLs ending in dot gov dot in or dot nic dot in. If you require assistance in navigating the process or understanding the legal nuances of your citations, you should exclusively consult registered advocates or legitimate legal consultancy firms with a proven track record. True legal professionals will provide transparent guidance and represent your interests lawfully, whereas fake agents rely entirely on deception and false promises. Vigilance and adherence to official protocols are your best defenses against these predatory scams.
                  </p>

                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    To safeguard yourself, you must strictly interact only with URLs ending in dot gov dot in or dot nic dot in. If you require assistance in navigating the process or understanding the legal nuances of your citations, you should exclusively consult registered advocates or legitimate legal consultancy firms with a proven track record. True legal professionals will provide transparent guidance and represent your interests lawfully, whereas fake agents rely entirely on deception and false promises. Vigilance and adherence to official protocols are your best defenses against these predatory scams.
                  </p>

                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    To safeguard yourself, you must strictly interact only with URLs ending in dot gov dot in or dot nic dot in. If you require assistance in navigating the process or understanding the legal nuances of your citations, you should exclusively consult registered advocates or legitimate legal consultancy firms with a proven track record. True legal professionals will provide transparent guidance and represent your interests lawfully, whereas fake agents rely entirely on deception and false promises. Vigilance and adherence to official protocols are your best defenses against these predatory scams.
                  </p>

                </div>
              </section>

              {/* FAQs Section */}
              <section id="faqs" className="mt-12 scroll-mt-32 border-t border-gray-100 pt-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {faqSchema.mainEntity.map((faq, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.name}</h3>
                      <p className="text-gray-600 leading-relaxed text-sm md:text-base">{faq.acceptedAnswer.text}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Reviews Section */}
              <section id="reviews" className="mt-12 scroll-mt-32 border-t border-gray-100 pt-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Client Testimonials</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {reviewSchema.review.map((rev, index) => (
                    <article key={index} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm transition-shadow hover:shadow-md flex flex-col justify-between">
                      <div>
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 bg-[#D2A02A] rounded-full flex items-center justify-center text-white font-bold text-lg mr-3 shrink-0">
                            {rev.author.name.charAt(0)}
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 leading-tight">{rev.author.name}</h4>
                            <div className="flex text-yellow-400 text-sm mt-1">
                              {"★".repeat(parseInt(rev.reviewRating.ratingValue))}{"☆".repeat(5 - parseInt(rev.reviewRating.ratingValue))}
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-600 italic leading-relaxed text-sm md:text-base">"{rev.reviewBody}"</p>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            </div>

            <aside className="hidden lg:block space-y-6 sticky top-24">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
                <Image 
                  src="/anujbhiya.png" 
                  alt="Anuj Anand Malik Legal Expert" 
                  width={120} 
                  height={120} 
                  className="rounded-full mx-auto mb-4 border-4 border-[#D2A02A]"
                />
                <h3 className="font-bold text-xl text-gray-900 mb-1">Anuj Anand Malik</h3>
                <p className="text-sm text-[#D2A02A] font-semibold mb-4">Senior Legal Consultant</p>
                <p className="text-sm text-gray-600 mb-6">Expert in traffic law, arbitration, and dispute resolution in India.</p>
                <Link href="/contact" className="block w-full bg-[#1a202c] hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-lg transition-colors text-sm">
                  Book Consultation
                </Link>
              </div>

              <div className="bg-gradient-to-br from-[#1a202c] to-gray-900 p-6 rounded-2xl shadow-sm text-white">
                <h3 className="font-bold text-lg mb-3">Heavy Traffic Fines?</h3>
                <p className="text-sm text-gray-300 mb-4">Do not wait until your vehicle gets blacklisted. Get immediate legal help.</p>
                <a href="tel:+918700343611" className="flex items-center justify-center w-full bg-white text-[#1a202c] hover:bg-gray-100 font-bold py-2 px-4 rounded-lg transition-colors text-sm">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  Call Now
                </a>
              </div>
            </aside>
          </div>
        </article>
      </main>
    </>
  );
}
