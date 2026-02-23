import Link from "next/link";
import Script from "next/script";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "./FaqSection";

export const metadata = {
  title: "Loan Settlement in Uttar Pradesh | DRT Lucknow & Allahabad Lawyers",
  description:
    "Expert loan settlement services in Uttar Pradesh (Noida, Kanpur, Lucknow). Settle debt legally through UPSLSA Lok Adalat & DRT. Stop harassment & save 50%.",
  alternates: {
    canonical: 'https://amalegalsolutions.com/services/loan-settlement/uttar-pradesh',
  },
  openGraph: {
    title: "Loan Settlement in Uttar Pradesh | DRT Lucknow & Allahabad Lawyers",
    description: "Expert loan settlement services in Uttar Pradesh (Noida, Kanpur, Lucknow). Settle debt legally through UPSLSA Lok Adalat & DRT. Stop harassment & save 50%.",
    url: "https://amalegalsolutions.com/services/loan-settlement/uttar-pradesh",
    type: "website",
    images: [
      {
        url: "/services/3.png",
        width: 1200,
        height: 630,
        alt: "Loan Settlement Services Uttar Pradesh",
      },
    ],
  },
};

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
      "name": "Loan Settlement",
      "item": "https://amalegalsolutions.com/services/loan-settlement"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Uttar Pradesh",
      "item": "https://amalegalsolutions.com/services/loan-settlement/uttar-pradesh"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Loan Settlement Services in Uttar Pradesh: Legal Debt Relief",
  "description": "Comprehensive guide to loan settlement in UP. Learn how to legally settle personal loans and credit card debt in Noida, Lucknow, and Kanpur using Lok Adalat.",
  "image": "https://amalegalsolutions.com/services/3.png",
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
  "datePublished": "2023-11-21",
  "dateModified": "2023-11-21"
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Loan Settlement Services Uttar Pradesh",
  "image": "https://amalegalsolutions.com/services/3.png",
  "description": "Expert legal loan settlement services in Uttar Pradesh.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
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
        "name": "Amit Verma"
      },
      "reviewBody": "I had a huge business loan default in Kanpur. AMA Legal Solutions helped me settle it through the Allahabad DRT process. Saved my factory from auction."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Suresh Gupta"
      },
      "reviewBody": "Best lawyers for loan settlement in Noida. They handled the harassment from recovery agents very effectively using UP Police help."
    }
  ]
};

export default function UPLoanSettlementPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "city-solutions", title: "City-Specific Solutions" },
    { id: "what-is-settlement", title: "What is Loan Settlement?" },
    { id: "legal-framework", title: "Legal Framework in UP" },
    { id: "cheque-bounce", title: "Cheque Bounce (Sec 138) in UP" },
    { id: "process", title: "Our Process" },
    { id: "lok-adalat", title: "Lok Adalat in UP" },
    { id: "agri-loans", title: "Agricultural vs. Personal Loans" },
    { id: "types-of-loans", title: "Types of Loans" },
    { id: "common-mistakes", title: "Common Mistakes" },
    { id: "why-choose-us", title: "Why Choose Us" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Loan Settlement", href: "/services/loan-settlement" },
    { label: "Uttar Pradesh", href: "/services/loan-settlement/uttar-pradesh" },
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
        id="review-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />

      <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
        {/* Hero Section */}
        <div className="relative bg-[#1a202c] text-white">
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center z-0" 
            style={{ background: "black" }}
          ></div>
          <div className="relative z-20 container mx-auto px-4 py-24 md:py-32 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight mt-10">
              Legal Debt Relief & <span className="text-[#D2A02A]">Loan Settlement in Uttar Pradesh</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
              Serving Noida, Lucknow, Kanpur, and all of UP. Stop harassment and settle your debts legally through DRT Lucknow/Allahabad & Lok Adalat.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg">
                Get a Free Case Evaluation
              </button>
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-7xl py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content Area */}
            <div className="lg:w-3/4">
              
              <TableOfContents sections={tocSections} />

              <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm mt-8 space-y-12">
                
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Financial Freedom for Uttar Pradesh: A Comprehensive Guide</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Uttar Pradesh, the heartland of India, is a state of immense economic diversity and complexity. From the high-rise corporate ecosystem of <strong>Noida and Greater Noida</strong> to the bustling industrial hubs of <strong>Kanpur and Ghaziabad</strong>, and the administrative power centers of <strong>Lucknow and Prayagraj</strong>, the financial challenges faced by residents are varied and unique.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    In recent years, the rapid expansion of credit - through credit cards, personal loans, and business financing - has led to a surge in household debt. Economic volatility, whether due to market slowdowns affecting MSMEs in Western UP or job instability in the NCR service sector, has left many families struggling to repay their loans.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    When loan EMIs bounce, the harassment from recovery agents can be intense and often crosses legal boundaries. In Uttar Pradesh, this is frequently compounded by the fear of police complaints and social stigma. <strong>Loan Settlement</strong> is your legal right and a dignified exit route. At AMA Legal Solutions, we empower borrowers across all 75 districts of UP to negotiate with banks and exit the debt trap, utilizing the robust legal mechanisms available in the state.
                  </p>
                </section>

                {/* City Specific Solutions */}
                <section id="city-solutions" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Tailored Debt Solutions for UP's Major Cities</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We understand that a borrower in Noida faces different challenges than a trader in Varanasi. Our approach is hyper-localized.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                      <h3 className="text-xl font-bold text-blue-900 mb-3">Noida & Ghaziabad (NCR)</h3>
                      <p className="text-gray-700 mb-4">
                        <strong>The Challenge:</strong> High cost of living, credit card traps, and home loan EMIs. Harassment often involves agents visiting corporate offices.
                      </p>
                      <p className="text-gray-700">
                        <strong>Our Solution:</strong> We leverage our proximity to Delhi to deal directly with the Head Offices of banks. We also utilize the <strong>Gautam Buddha Nagar District Court</strong> for effective injunctive relief against harassment.
                      </p>
                    </div>

                    <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
                      <h3 className="text-xl font-bold text-orange-900 mb-3">Kanpur & Agra (Industrial Belt)</h3>
                      <p className="text-gray-700 mb-4">
                        <strong>The Challenge:</strong> MSME loans, CC limits, and unsecured business loans. Cash flow issues in the leather and textile industries often lead to NPA status.
                      </p>
                      <p className="text-gray-700">
                        <strong>Our Solution:</strong> We specialize in restructuring and settling business loans by proving "Wilful Default" vs. "Genuine Business Failure" to the banks, preventing SARFAESI actions.
                      </p>
                    </div>

                    <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                      <h3 className="text-xl font-bold text-green-900 mb-3">Lucknow (Administrative Hub)</h3>
                      <p className="text-gray-700 mb-4">
                        <strong>The Challenge:</strong> Personal loans taken by government employees and service class individuals. Fear of departmental inquiries due to bank notices.
                      </p>
                      <p className="text-gray-700">
                        <strong>Our Solution:</strong> We ensure complete confidentiality. We handle the legal notices and settlements without letting the matter escalate to your employer or department.
                      </p>
                    </div>

                    <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
                      <h3 className="text-xl font-bold text-purple-900 mb-3">Allahabad & Varanasi (Eastern UP)</h3>
                      <p className="text-gray-700 mb-4">
                        <strong>The Challenge:</strong> Education loans and small business loans. Strong local recovery networks often use intimidation.
                      </p>
                      <p className="text-gray-700">
                        <strong>Our Solution:</strong> With <strong>DRT Allahabad</strong> being a key venue, we have a strong legal presence to counter any aggressive moves by banks in Eastern UP.
                      </p>
                    </div>
                  </div>
                </section>

                {/* What is Loan Settlement */}
                <section id="what-is-settlement" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding OTS in UP Banking</h2>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
                    <p className="text-lg text-blue-900 italic">
                      "In Uttar Pradesh, banks frequently float 'One Time Settlement' (OTS) schemes to clear their balance sheets of Non-Performing Assets (NPAs), especially before the financial year-end."
                    </p>
                  </div>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Loan settlement is a process where you pay a lump sum amount (often 30-50% of the total due) to close the loan account permanently. This is particularly prevalent with regional banks like <strong>Baroda UP Bank</strong>, <strong>Aryavart Bank</strong>, as well as major PSUs like SBI and PNB that have a massive presence in the state.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Instead of letting the interest pile up for years while the case drags on in a district court, banks prefer to recover the principal amount and move on. We facilitate this negotiation professionally.
                  </p>
                </section>

                {/* Legal Framework */}
                <section id="legal-framework" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Legal Framework & Protection in UP</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The legal infrastructure in Uttar Pradesh is vast, but navigating it requires expertise. We ensure you are protected under every applicable statute.
                  </p>
                  
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">The Twin DRT System: Know Your Jurisdiction</h3>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Unlike smaller states, UP is served by two major Debt Recovery Tribunals (DRTs). Filing in the wrong DRT can lead to immediate dismissal of your case.
                  </p>
                  <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-8">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-gray-100 border-b border-gray-200">
                          <th className="p-4 font-bold text-gray-900">Tribunal</th>
                          <th className="p-4 font-bold text-gray-900">Key Districts Covered</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-100">
                          <td className="p-4 font-semibold text-[#D2A02A]">DRT Lucknow</td>
                          <td className="p-4 text-gray-700">Lucknow, Kanpur Nagar, Kanpur Dehat, Unnao, Sitapur, Hardoi, Lakhimpur Kheri, Rae Bareli, Barabanki, Faizabad, Sultanpur, Amethi. <br/><span className="text-sm text-gray-500 mt-1 block">Also covers Western UP: Noida, Ghaziabad, Meerut, Agra, Aligarh, Bareilly, Moradabad, Saharanpur.</span></td>
                        </tr>
                        <tr>
                          <td className="p-4 font-semibold text-[#D2A02A]">DRT Allahabad</td>
                          <td className="p-4 text-gray-700">Prayagraj (Allahabad), Varanasi, Gorakhpur, Mirzapur, Jaunpur, Ghazipur, Ballia, Azamgarh, Mau, Deoria, Kushinagar, Basti, Gonda, Bahraich.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">UP State Legal Services Authority (UPSLSA)</h3>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The UPSLSA is highly active in organizing National Lok Adalats. These are held in every district court complex, from the <strong>Karkardooma courts (for some NCR matters)</strong> to the <strong>Lucknow District Court</strong>. A settlement award passed here has the force of a civil court decree and is final. We actively use the <strong>Pre-Litigation Lok Adalat</strong> mechanism to bring banks to the negotiating table before they can file a recovery suit.
                  </p>

                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Police Protection (Dial 112)</h3>
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mb-6">
                    <p className="text-gray-700 mb-4">
                      The UP Police has strict directives against "Gunda Raj" in loan recovery.
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li><strong>Harassment is a Crime:</strong> Recovery agents cannot abuse, threaten, or visit your home at odd hours (before 7 AM or after 7 PM).</li>
                      <li><strong>SSP Intervention:</strong> If the local Thana (police station) refuses to file an FIR, we help you escalate the complaint directly to the <strong>Senior Superintendent of Police (SSP)</strong> of your district under Section 154(3) CrPC.</li>
                      <li><strong>Anti-Romeo Squads & Women Safety:</strong> In cases where female borrowers are harassed, the specialized women safety cells of UP Police act very swiftly. We ensure these complaints are prioritized.</li>
                    </ul>
                  </div>
                </section>

                {/* Cheque Bounce Section */}
                <section id="cheque-bounce" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Cheque Bounce (Section 138) in UP Courts</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Banks in UP frequently misuse Section 138 of the Negotiable Instruments Act to pressure borrowers. They file criminal complaints in courts far from your residence to harass you.
                  </p>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold">!</div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">The Jurisdiction Trap</h3>
                        <p className="text-gray-700">Banks often file cases in their centralized hub (e.g., a bank with a branch in Noida might file the case in Mumbai or Delhi). We fight to transfer these cases back to your local jurisdiction in UP as per the Supreme Court's latest guidelines.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold">✓</div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">Bailable Offense</h3>
                        <p className="text-gray-700">Remember, Section 138 is a bailable offense. If you receive a summons, we arrange for your bail immediately in the local court (CJM or MM court) so you don't face arrest.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">⚖️</div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">Compounding the Offense</h3>
                        <p className="text-gray-700">The best defense in 138 cases is settlement. We move an application to "compound" the offense, meaning once the settlement amount is paid, the criminal case is legally quashed, and you are acquitted.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Process */}
                <section id="process" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Settlement Process in UP</h2>
                  <div className="space-y-8">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">1</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Jurisdiction Check</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We first verify if your case falls under DRT Lucknow or Allahabad. This is crucial because banks often file cases in the wrong jurisdiction to harass borrowers.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">2</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Notice to Regional Office</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We bypass the local recovery agents and send legal notices directly to the bank's Regional Office (RO) or Zonal Office (ZO), usually located in Lucknow, Kanpur, or Noida.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">3</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Hardship Representation</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We present your case - whether it's a factory closure in Kanpur or a salary cut in Noida - to the bank's Settlement Committee.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">4</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Lok Adalat Closure</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We ensure the final settlement is stamped by a Lok Adalat in your district. This gives you a "Civil Court Decree" that the loan is closed, protecting you from future claims.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Lok Adalat */}
                <section id="lok-adalat" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Lok Adalat: The UP Advantage</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Uttar Pradesh holds some of the largest Lok Adalats in the country. The <strong>UPSLSA</strong> ensures that these are held regularly (typically every quarter) in all district courts.
                  </p>
                  <div className="bg-green-50 p-8 rounded-xl border border-green-100 mb-6">
                    <h3 className="text-xl font-bold text-green-900 mb-4">Why it works in UP:</h3>
                    <ul className="list-disc pl-6 space-y-3 text-green-800">
                      <li><strong>Mass Disposal:</strong> UP courts are overburdened with over 1 crore pending cases. Judges actively encourage banks to settle in Lok Adalats to reduce their caseload.</li>
                      <li><strong>On-Spot Decision:</strong> You get the settlement order on the same day. There is no "Next Date" (Tareekh pe Tareekh).</li>
                      <li><strong>Refund of Court Fee:</strong> If the bank had filed a recovery suit, the court fee is refunded to them upon settlement, giving them a financial incentive to agree to your terms.</li>
                      <li><strong>Protection from Arrest:</strong> Once a matter is settled in Lok Adalat, any pending arrest warrants in Cheque Bounce cases are immediately cancelled.</li>
                    </ul>
                  </div>
                </section>

                {/* Agricultural vs Personal Loans */}
                <section id="agri-loans" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Agricultural Loans vs. Personal Loans: Clearing the Confusion</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    In Uttar Pradesh, there is often confusion between government "Loan Waivers" (Karz Maafi) and "Loan Settlement". It is crucial to understand the difference.
                  </p>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-100">
                      <h3 className="text-xl font-bold text-yellow-900 mb-3">Kisan Credit Card (KCC)</h3>
                      <p className="text-gray-700">
                        KCC and agricultural loans are often subject to state government waiver schemes. We generally <strong>do not</strong> recommend settling these through private negotiation as you might miss out on government benefits. However, if your land is being auctioned, legal intervention is necessary.
                      </p>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                      <h3 className="text-xl font-bold text-blue-900 mb-3">Tractor & Allied Loans</h3>
                      <p className="text-gray-700">
                        Loans for tractors, dairy farming, or small agro-businesses are treated as <strong>commercial loans</strong>. They are rarely waived by the government. If you default on a tractor loan, the bank can seize the vehicle. These loans <strong>must be settled</strong> through the OTS route to save your asset.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Types of Loans */}
                <section id="types-of-loans" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Loans We Settle in UP</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">MSME & Business Loans</h3>
                      <p className="text-gray-700">
                        Specialized help for industrial units in <strong>Kanpur, Agra, and Ghaziabad</strong>. We handle CC limits and unsecured business loans.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Noida/NCR Personal Loans</h3>
                      <p className="text-gray-700">
                        Tailored solutions for corporate employees in Noida/Greater Noida facing credit card debt and personal loan defaults.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Education Loans</h3>
                      <p className="text-gray-700">
                        Helping graduates in Lucknow and Allahabad settle education loans that have become a burden due to unemployment.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Professional Loans</h3>
                      <p className="text-gray-700">
                        Settlement services for doctors, lawyers, and CAs across UP who have taken professional loans.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Common Mistakes */}
                <section id="common-mistakes" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Beware of 'Dalaals' (Brokers)</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    In many UP district courts, you will find unauthorized agents or 'dalaals' promising to settle your loan for a commission.
                  </p>
                  <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
                    <h3 className="font-bold text-red-900 mb-2">Why Avoid Them?</h3>
                    <ul className="list-disc pl-6 space-y-2 text-red-800">
                      <li>They have no legal standing.</li>
                      <li>They often take cash from you and disappear.</li>
                      <li>They cannot represent you in DRT or Lok Adalat officially.</li>
                    </ul>
                  </div>
                  <p className="text-lg leading-relaxed text-gray-700">
                    Always trust a registered advocate or a legal firm like AMA Legal Solutions that is accountable and professional.
                  </p>
                </section>

                {/* Why Choose Us */}
                <section id="why-choose-us" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why AMA Legal Solutions in UP?</h2>
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">⚖️</div>
                      <h3 className="font-bold text-xl mb-2">Pan-UP Presence</h3>
                      <p className="text-gray-600">From Ghaziabad to Gorakhpur, we cover all major jurisdictions.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🛡️</div>
                      <h3 className="font-bold text-xl mb-2">Police Liaison</h3>
                      <p className="text-gray-600">We know how to effectively use the police machinery to stop illegal harassment.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">📉</div>
                      <h3 className="font-bold text-xl mb-2">Max Savings</h3>
                      <p className="text-gray-600">Our negotiation strategies are tailored to the UP banking mindset, maximizing your waivers.</p>
                    </div>
                  </div>
                </section>

                {/* Testimonials */}
                <section id="testimonials" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Success Stories from Uttar Pradesh</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "I was being threatened by recovery agents in Noida. AMA Legal Solutions intervened, stopped the harassment, and settled my personal loan for just 35% of the outstanding amount."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">A</div>
                        <div>
                          <p className="font-bold text-gray-900">Amit Verma</p>
                          <p className="text-sm text-gray-500">Noida</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "My factory in Kanpur was facing SARFAESI action. The lawyers at AMA Legal Solutions got a stay from DRT Allahabad and helped me restructure my business loan."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">M</div>
                        <div>
                          <p className="font-bold text-gray-900">Mohd. Irfan</p>
                          <p className="text-sm text-gray-500">Kanpur</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* FAQs */}
                <FaqSection />

                {/* Final CTA */}
                <section className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
                  <div className="relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Live Debt-Free in Uttar Pradesh</h2>
                    <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                      Don't let debt crush your dreams. Our expert lawyers are ready to fight for you in Noida, Lucknow, and beyond.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link href="/contact">
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg w-full sm:w-auto">
                          Book Your Consultation
                        </button>
                      </Link>
                      <a href="tel:+918700343611">
                        <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-4 px-12 rounded-full transition-all text-lg w-full sm:w-auto">
                          Call: +91-8700343611
                        </button>
                      </a>
                    </div>
                  </div>
                </section>

              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/4">
              <div className="sticky top-24 space-y-8">
                {/* Contact Card */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Need Urgent Help?</h3>
                  <p className="text-gray-600 mb-6 text-sm">
                    Speak to our senior loan settlement lawyers in UP today.
                  </p>
                  <a 
                    href="tel:+918700343611" 
                    className="block w-full bg-[#D2A02A] text-white text-center py-3 rounded-lg font-semibold hover:bg-[#b88a22] transition-colors mb-4"
                  >
                    Call +91-8700343611
                  </a>
                  <Link 
                    href="/contact" 
                    className="block w-full border border-[#D2A02A] text-[#D2A02A] text-center py-3 rounded-lg font-semibold hover:bg-[#D2A02A] hover:text-white transition-colors"
                  >
                    Request Callback
                  </Link>
                </div>

                {/* Quick Links */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Related Services</h3>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <Link href="/services/banking-and-finance" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Banking & Finance
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/civil" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Civil Litigation
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/arbitration" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Arbitration
                      </Link>
                    </li>
                    
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16">
            <GenericStatesGrid 
              serviceName="Loan Settlement" 
              servicePath="loan-settlement" 
              customSlugs={{
                "Andhra Pradesh": "andhra-pradesh",
                "Arunachal Pradesh": "arunachal-pradesh",
                "Assam": "Assam",
                "Bihar": "Bihar",
                "Chhattisgarh": "Chhattisgarh",
                "Delhi": "Delhi",
                "Goa": "Goa",
                "Gujarat": "Gujarat",
                "Haryana": "Haryana",
                "Himachal Pradesh": "himachal-pradesh",
                "Jharkhand": "Jharkhand",
                "Karnataka": "Karnataka",
                "Kerala": "Kerala",
                "Madhya Pradesh": "madhya-pradesh",
                "Maharashtra": "Maharashtra",
                "Manipur": "Manipur",
                "Meghalaya": "Meghalaya",
                "Mizoram": "Mizoram",
                "Odisha": "Odisha",
                "Puducherry": "Puducherry",
                "Punjab": "Punjab",
                "Rajasthan": "Rajasthan",
                "Sikkim": "Sikkim",
                "Tamil Nadu": "tamil-nadu",
                "Telangana": "Telangana",
                "Tripura": "Tripura",
                "Uttar Pradesh": "uttar-pradesh",
                "Uttarakhand": "uttarakhand",
                "West Bengal": "west-bengal"
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
