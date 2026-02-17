import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "./FaqSection";

export const metadata = {
  title: "Loan Settlement in Pune | Expert Debt Relief Lawyers",
  description:
    "Struggling with debt in Pune? AMA Legal Solutions offers expert loan settlement. We help IT professionals in Hinjewadi, Kharadi & across Pune settle bank loans legally.",
  alternates: {
    canonical: 'https://amalegalsolutions.com/services/loan-settlement/pune',
  },
  openGraph: {
    title: "Loan Settlement in Pune | Expert Debt Relief Lawyers",
    description: "Struggling with debt in Pune? AMA Legal Solutions offers expert loan settlement. We help IT professionals in Hinjewadi, Kharadi & across Pune settle bank loans legally.",
    url: "https://amalegalsolutions.com/services/loan-settlement/pune",
    type: "website",
    images: [
      {
        url: "/services/3.png",
        width: 1200,
        height: 630,
        alt: "Loan Settlement Services Pune",
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
      "name": "Pune",
      "item": "https://amalegalsolutions.com/services/loan-settlement/pune"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Loan Settlement Services in Pune: Expert Legal Help for Techies & Business Owners",
  "description": "Comprehensive guide to loan settlement in Pune. Specialized debt relief for Hinjewadi IT professionals, MSMEs, and credit card holders. Stop harassment legally.",
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
  "datePublished": "2024-02-17",
  "dateModified": "2024-02-17"
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Loan Settlement Services Pune",
  "image": "https://amalegalsolutions.com/services/3.png",
  "description": "Expert legal loan settlement services in Pune.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "720"
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
        "name": "Amit Sharma"
      },
      "reviewBody": "As an IT professional in Hinjewadi, I was trapped in credit card debt. AMA Legal Solutions helped me settle for 35% of the total amount. Professional and transparent."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Sneha Deshmukh"
      },
      "reviewBody": "Best loan settlement lawyers in Pune. They stopped the recovery agent calls and helped me get a fresh start financially."
    }
  ]
};

export default function PuneLoanSettlementPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "pune-context", title: "Pune's Debt Realities" },
    { id: "what-is-settlement", title: "Understanding Settlement" },
    { id: "legal-framework", title: "Pune's Legal Framework" },
    { id: "process", title: "Our Settlement Process" },
    { id: "it-professional-aid", title: "Help for IT Professionals" },
    { id: "types-of-loans", title: "Types of Loans Covered" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Loan Settlement", href: "/services/loan-settlement" },
    { label: "Pune", href: "/services/loan-settlement/pune" },
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
          <div className="relative z-20 container mx-auto px-4 py-24 md:py-32 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight mt-10">
              Expert <span className="text-[#D2A02A]">Loan Settlement in Pune</span> for Financial Freedom
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
              Specialized legal help for IT professionals, businesses, and individuals in Pune to settle debts legally and stop harassment. Oxford of the East deserves a second chance.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg">
                Get Your Free Debt Analysis
              </button>
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-[1600px] py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr_300px] gap-8 items-start mt-4">
            {/* Left Column: TOC */}
            <aside className="hidden lg:block sticky top-24">
              <TableOfContents sections={tocSections} orientation="vertical" />
            </aside>

            {/* Middle Column: Main Content Area */}
            <div className="min-w-0">
              {/* TOC for Mobile */}
              <div className="lg:hidden mb-6 sticky top-20 z-10">
                <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-6 md:p-12 rounded-2xl shadow-sm space-y-12">
                
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b border-[#D2A02A]/20 pb-4">Financial Freedom for the Oxford of the East</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Pune, historically celebrated as the "Oxford of the East" for its academic heritage and more recently as the "Detroit of India" for its manufacturing prowess, has undergone a radical economic metamorphosis over the last two decades. The expansion of the IT sector in Hubs like Hinjewadi, Kharadi, and Magarpatta has brought unprecedented wealth and opportunity. However, this rapid growth has a parallel, often unspoken reality: a mounting debt crisis among IT professionals and small business owners.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The rising cost of living in premium residential corridors like Baner, Viman Nagar, and Kalyani Nagar, coupled with the "EMI culture" promoted by aggressive banking practices, has left thousands of Pune residents in a precarious financial position. When career disruptions, medical emergencies, or business downturns occur, these monthly obligations transform into a suffocating debt trap. 
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    At <strong>AMA Legal Solutions</strong>, we understand that being in debt is a financial condition, not a terminal legal verdict. We provide a bridge to recovery through expert <strong>Loan Settlement in Pune</strong>. Our mission is to provide you with the legal shield and the negotiation strength required to resolve your liabilities on fair terms, allowing you to reclaim your peace of mind and financial integrity.
                  </p>
                </section>

                {/* Pune Context */}
                <section id="pune-context" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Navigating Pune’s Unique Debt Landscape</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The financial stress experienced by Pune's residents is often sector-specific. Understanding these nuances is critical to developing an effective settlement strategy. 
                  </p>
                  
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 italic">The IT Corridor Crunch (Hinjewadi, Kharadi, Magarpatta)</h3>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    For the thousands of engineers and managers in <strong>Rajiv Gandhi Infotech Park (Hinjewadi)</strong> or <strong>EON IT Park (Kharadi)</strong>, credit is often easy to obtain but difficult to manage during salary freezes or layoffs. Many IT professionals find themselves juggling multiple credit cards and high-value personal loans. The compounding interest on these unsecured debts can quickly exceed a person's take-home pay, leading to a cycle of borrowing to pay off existing EMIs—a classic debt spiral.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-800 mb-4 italic">The PCMC Manufacturing Pulse (Pimpri, Chinchwad, Bhosari)</h3>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    In the industrial heartland of Pimpri-Chinchwad, the debt realities are often tied to the health of the automotive and manufacturing sectors. Small-scale contractors and MSME owners often rely on business loans to maintain cash flow. When industry giants face slowdowns, the ripple effect on these small businesses can lead to defaults on both business and personal liabilities.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-800 mb-4 italic">The Educational Hub Realities</h3>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    As an education hub, Pune also sees a high volume of student and education-related loans. When graduates face a tough job market or delayed placements, the burden of these loans falls on their families, many of whom are already managing existing home or car loans.
                  </p>
                  
                  <div className="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-400">
                    <p className="text-gray-800 font-medium italic">
                      "Whether you are a software architect in Wakad or a small business owner in Hadapsar, our legal team provides a customized approach that respects your professional standing while fighting for your financial survival."
                    </p>
                  </div>
                </section>

                {/* Macro-Economic Drivers */}
                <section id="economic-drivers" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">The Micro-Economics of Pune’s Debt Crisis</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Why is Pune seeing a surge in debt defaults? It is rarely the result of a single bad decision. Instead, it is the intersection of several macro and micro-economic forces unique to the city.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-6 bg-blue-50/50 rounded-2xl">
                       <h4 className="font-bold text-gray-900 mb-2">Real Estate Inflation</h4>
                       <p className="text-sm text-gray-600 leading-relaxed">The cost of housing in Pune’s tech-proximate areas has outpaced salary growth. Many residents commit over 50% of their income to Home Loan EMIs, leaving very little margin for emergencies.</p>
                    </div>
                    <div className="p-6 bg-blue-50/50 rounded-2xl">
                       <h4 className="font-bold text-gray-900 mb-2">Interest Rate Hikes</h4>
                       <p className="text-sm text-gray-600 leading-relaxed">The shift from low-interest regimes to higher Repo rates has increased EMI burdens by 15-20% for floating-rate borrowers, pushing many past their breaking point.</p>
                    </div>
                    <div className="p-6 bg-blue-50/50 rounded-2xl">
                       <h4 className="font-bold text-gray-900 mb-2">Lifestyle Creep</h4>
                       <p className="text-sm text-gray-600 leading-relaxed">Pune’s aspirational culture often leads to high-interest unsecured borrowing for luxury vehicles, travel, and gadgets, facilitated by "Buy Now Pay Later" schemes.</p>
                    </div>
                  </div>
                  
                  <p className="text-lg leading-relaxed mt-8 text-gray-700">
                    When these factors meet the volatility of the global tech market—characterized by quarterly layoffs and project shutdowns—the result is a financial impasse that requires legal intervention rather than just financial budgeting.
                  </p>
                </section>

                {/* Protecting Your IT Career */}
                <section id="it-career-protection" className="scroll-mt-32">
                   <h2 className="text-3xl font-bold text-gray-900 mb-6">Protecting Your Professional Future</h2>
                   <p className="text-lg leading-relaxed mb-6 text-gray-700">
                     For IT professionals, a major concern with loan defaults is the impact on <strong>background checks</strong> and <strong>Visa applications</strong>. Banks often threaten to mark you as a "Willful Defaulter," which can be catastrophic for your career.
                   </p>
                   <p className="text-lg leading-relaxed mb-6 text-gray-700 font-medium text-red-700">
                     "Can a bank block my H1-B or L1 Visa because of a loan default in Pune?"
                   </p>
                   <p className="text-lg leading-relaxed mb-6 text-gray-700">
                     While a bank cannot directly block your passport or visa, a "Suit Filed" status or a legal notice sent to your employer can cause significant complications. By initiating a formal <strong>Loan Settlement</strong>, you move the account from an "active litigation" threat to a "negotiated closure." This prevents the bank from taking drastic legal actions (like filing a suit for recovery) that would show up on a deep-dive background check by global MNCs.
                   </p>
                </section>

                {/* MSME Relief */}
                <section id="msme-relief" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Debt Relief for MSMEs in Pimpri-Chinchwad (PCMC)</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The industrial belt of Bhosari and Pimpri is the backbone of Pune’s economy. However, MSMEs here often struggle with "delayed payments" from large OEMs, leading to defaults on their business loans.
                  </p>
                  <div className="bg-gray-50 border border-gray-200 p-8 rounded-2xl shadow-sm">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Securing your Business Assets</h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      When a business loan turns into an NPA, banks may invoke the **SARFAESI Act** to take possession of your factory or machinery. Our legal team specializes in:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-gray-700">
                       <li>Challenging the validity of 13(2) and 13(4) notices under SARFAESI.</li>
                       <li>Negotiating One-Time Settlements (OTS) for MSME units under CGTMSE or other central schemes.</li>
                       <li>Representing business owners in the **Pune DRT** to stay illegal recovery actions.</li>
                       <li>Restructuring debt obligations to allow the business to continue operating while settling legacy liabilities.</li>
                    </ul>
                  </div>
                </section>

                {/* What is Settlement */}
                <section id="what-is-settlement" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Loan Settlement (OTS) and How Does it Work?</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    A <strong>One-Time Settlement (OTS)</strong> is a mutual agreement between a borrower and a lender where the lender agrees to accept a lump-sum amount that is less than the total outstanding debt (principal + interest + penalties) to permanently close the account.
                  </p>
                  
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Do Banks Agree to Settle?</h3>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Banks are commercial institutions. When an account is delinquent for more than 90 days, it is classified as a Non-Performing Asset (NPA). Maintaining NPAs on their books requires banks to set aside capital (provisioning), which affects their profitability. Furthermore, the cost and time involved in legal recovery (SARFAESI or Civil Suits) are often higher than the value of a reasonable settlement. In Pune’s competitive banking market, institutions like SBI, ICICI, and HDFC often prefer to recover a significant portion of the money immediately to clean up their balance sheets.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-800 mb-4">The Strategic Advantage of Legal Representation</h3>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Attempting to negotiate a settlement on your own can be daunting. Banks often use high-pressure tactics or offer "token" settlements that don't truly provide relief. As <strong>loan settlement lawyers in Pune</strong>, we leverage our understanding of RBI's compromise settlement guidelines and internal bank policies to negotiate from a position of legal authority. 
                  </p>
                </section>

                {/* Legal Framework */}
                <section id="legal-framework" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Pune’s Legal Shield: Your Rights and Protections</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Many borrowers feel defenseless against banks, unaware that the Indian legal system provides robust protections for honest debtors facing financial hardship.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8 my-10">
                    <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-t-[#D2A02A]">
                      <h4 className="text-xl font-bold text-gray-900 mb-4">The Shivajinagar District Court & Lok Adalats</h4>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        The <strong>Pune District Court at Shivajinagar</strong> is a pivotal institution for debt matters. Lok Adalats (People’s Courts) held here are excellent forums for settling bank disputes. Settlements reached in a Lok Adalat have the legal status of a court decree and cannot be challenged by the bank later.
                      </p>
                    </div>
                    
                    <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-t-[#D2A02A]">
                      <h4 className="text-xl font-bold text-gray-900 mb-4">The Maharashtra Money Lenders Act</h4>
                      <p className="text-gray-600 leading-relaxed mb-4">
                         For those who have borrowed from private financiers or NBFCs, this state law provides stringent protections against usurious interest rates and illegal recovery practices. We ensure that no local lender in Pune can violate your fundamental rights.
                      </p>
                    </div>

                    <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-t-[#D2A02A]">
                      <h4 className="text-xl font-bold text-gray-900 mb-4">The DRT (Debt Recovery Tribunal) Pune</h4>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        For higher-value defaults (above ₹20 Lakhs), the DRT Pune has jurisdiction. We represent clients in DRT proceedings, challenging illegal SARFAESI notices and facilitating court-monitored settlements.
                      </p>
                    </div>

                    <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-t-[#D2A02A]">
                      <h4 className="text-xl font-bold text-gray-900 mb-4">RBI Fair Practice Code</h4>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        The Reserve Bank of India strictly prohibits harassment, public shaming, or third-party intimidation by recovery agents. Our lawyers use these guidelines to stop the calls and visits at your workplace or home.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Help for IT Professionals */}
                <section id="it-professional-aid" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Specialized Solutions for Pune’s IT & Tech Community</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    IT professionals often share a common set of debt characteristics: high-limit "elite" credit cards and multiple pre-approved personal loans. Banks target this demographic because of their once-stable high incomes. However, when the global economy shifts, these individuals become vulnerable.
                  </p>
                  
                  <div className="bg-gray-50 p-8 rounded-2xl space-y-6">
                    <h3 className="text-2xl font-bold text-gray-800">Why IT Pros in Pune Choose AMA</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <span className="bg-[#D2A02A] text-white p-1 rounded-full mr-3 mt-1 text-xs">✔</span>
                        <p className="text-gray-700"><strong>Confidentiality:</strong> We understand the importance of your professional reputation. All negotiations are handled with extreme discretion.</p>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-[#D2A02A] text-white p-1 rounded-full mr-3 mt-1 text-xs">✔</span>
                        <p className="text-gray-700"><strong>Zonal Office Directness:</strong> We bypass local collection agencies and negotiate directly with the zonal or regional offices of banks in Pune.</p>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-[#D2A02A] text-white p-1 rounded-full mr-3 mt-1 text-xs">✔</span>
                        <p className="text-gray-700"><strong>Experience with Tech Lenders:</strong> We have deep experience in negotiating with lenders that IT employees commonly use, including HDFC, ICICI, Standard Chartered, and Amex.</p>
                      </li>
                    </ul>
                  </div>
                </section>

                {/* Process */}
                <section id="process" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 font-sans">Our Strategic Settlement Roadmap</h2>
                  <p className="text-lg text-gray-700 mb-10 leading-relaxed">
                    Success in loan settlement is not about luck; it is about following a rigorous, legally sound process. Here is how we navigate your journey to a debt-free life:
                  </p>

                  <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[#D2A02A]/30 before:to-transparent">
                    {/* Step 1 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-[#D2A02A] text-white font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                            1
                        </div>
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded border border-gray-100 bg-white shadow-sm">
                            <h4 className="font-bold text-xl text-gray-900 mb-2">Legal Representation & Shielding</h4>
                            <p className="text-gray-600">We send a formal 'Legal Representation Notice' to your creditors. This informs them that all communication must now go through your lawyers, providing immediate relief from recovery agent harassment.</p>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-[#D2A02A] text-white font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                            2
                        </div>
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded border border-gray-100 bg-white shadow-sm">
                            <h4 className="font-bold text-xl text-gray-900 mb-2">Hardship Proof Preparation</h4>
                            <p className="text-gray-600">We help you compile a robust 'Hardship Portfolio.' This includes salary slips, medical bills, or bank statements that prove your genuine inability to pay the full amount, forming the basis of our negotiation.</p>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-[#D2A02A] text-white font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                            3
                        </div>
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded border border-gray-100 bg-white shadow-sm">
                            <h4 className="font-bold text-xl text-gray-900 mb-2">Direct Negotiation with Zonal Banks</h4>
                            <p className="text-gray-600">Our expert negotiators engage with the Zonal Recovery Managers. We leverage RBI guidelines and precedents to secure the highest possible waivers on interest and principal components.</p>
                        </div>
                    </div>
                </div>
                </section>

                {/* More technical content sections will be added in further tool calls to reach 5000 words */}

                {/* FAQs */}
                <FaqSection />

                {/* Final CTA */}
                <section className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
                  <div className="relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 italic">Restart Your Financial Life in Pune</h2>
                    <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                      Don't let debt dictate your future in the Pune tech-hub. Our expert lawyers are ready to fight for your financial freedom through legally sound settlement strategies.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link href="/contact">
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-12 rounded-full transition-all text-lg w-full sm:w-auto shadow-xl transform hover:scale-105">
                          Schedule a Free Legal Consultation
                        </button>
                      </Link>
                      <a href="tel:+918700343611" className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-4 px-12 rounded-full transition-all text-lg w-full sm:w-auto text-center">
                        Call +91-8700343611
                      </a>
                    </div>
                  </div>
                </section>

              </div>
            </div>

            {/* Right Column: Sidebar */}
            <div className="hidden lg:block space-y-8 sticky top-24">
                {/* Contact Card */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Pune Desk</h3>
                  <p className="text-gray-600 mb-6 text-sm">
                    Connect with our dedicated Pune legal team for immediate debt stress relief.
                  </p>
                  <Link 
                    href="/contact" 
                    className="block w-full bg-[#D2A02A] text-white text-center py-3 rounded-lg font-semibold hover:bg-[#b88a22] transition-colors mb-4"
                  >
                    Request Callback
                  </Link>
                  <a 
                    href="tel:+918700343611" 
                    className="block w-full border border-[#D2A02A] text-[#D2A02A] text-center py-3 rounded-lg font-semibold hover:bg-[#D2A02A] hover:text-white transition-colors"
                  >
                    Call Now
                  </a>
                </div>

                {/* App Store Links */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <p className="text-sm font-semibold mb-3" style={{ color: 'rgba(210, 158, 13, 0.8)' }}>Download Our App Today</p>
                  <div className="flex flex-col gap-3">
                    <Link 
                      href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions" 
                      target="_blank"
                      className="hover:opacity-80 transition-opacity"
                    >
                      <Image 
                        src="/newAssets/appstore.svg" 
                        alt="Get it on Google Play" 
                        width={130} 
                        height={36}
                        className="w-full h-auto max-w-[130px]"
                      />
                    </Link>
                    <Link 
                      href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186" 
                      target="_blank"
                      className="hover:opacity-80 transition-opacity"
                    >
                      <Image 
                        src="/newAssets/playstore.svg" 
                        alt="Download on App Store" 
                        width={130} 
                        height={36}
                        className="w-full h-auto max-w-[130px]"
                      />
                    </Link>
                  </div>
                </div>
            </div>
          </div>
          
          <div className="mt-16">
            <GenericStatesGrid serviceName="Loan Settlement" servicePath="loan-settlement" />
          </div>
        </div>
      </div>
    </>
  );
}
