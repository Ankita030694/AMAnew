import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { creditCardBanks, CreditCardBank } from "@/data/creditCardBanks";
import { statesData, StateData } from "@/data/statesData";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const params: { slug: string; "state-slug": string }[] = [];
  creditCardBanks.forEach((bank) => {
    statesData.forEach((state) => {
      params.push({ slug: bank.slug, "state-slug": state.slug });
    });
  });
  return params;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string; "state-slug": string }> }) {
  const { slug, "state-slug": stateSlug } = await params;
  const bank = creditCardBanks.find((b) => b.slug === slug);
  const state = statesData.find((s) => s.slug === stateSlug);

  if (!bank || !state) return {};

  return {
    title: `${bank.name} Credit Card Settlement in ${state.name} | AMA`,
    description: `Facing legal notices from ${bank.name} in ${state.name}? Learn how to settle your unsecured debt, stop recovery agents, and utilize the ${state.highCourt} guidelines.`,
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
      `${bank.name} credit card settlement in ${state.name}`,
      `stop ${bank.name} recovery agents ${state.name}`,
      `legal action against ${bank.name} in ${state.name}`,
      `${state.name} credit card debt settlement`,
      `${state.policeAuthority} complaint against bank`,
      `${state.highCourt} guidelines for recovery agents`
    ],
    alternates: {
      canonical: `https://www.amalegalsolutions.com/credit-card-settlement/${bank.slug}/${state.slug}`,
    },
  };
}

export default async function BankStateSettlementPage({ params }: { params: Promise<{ slug: string; "state-slug": string }> }) {
  const { slug, "state-slug": stateSlug } = await params;
  const bank = creditCardBanks.find((b) => b.slug === slug);
  const state = statesData.find((s) => s.slug === stateSlug);

  if (!bank || !state) {
    notFound();
  }

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
        "name": "Credit Card Settlement",
        "item": "https://www.amalegalsolutions.com/credit-card-settlement"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": `${bank.name} Settlement`,
        "item": `https://www.amalegalsolutions.com/credit-card-settlement/${bank.slug}`
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": `Settlement in ${state.name}`,
        "item": `https://www.amalegalsolutions.com/credit-card-settlement/${bank.slug}/${state.slug}`
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": `${bank.name} Credit Card Settlement in ${state.name}`,
    "description": `Comprehensive legal guide for settling ${bank.name} credit card debt within ${state.name}'s jurisdiction.`,
    "image": "https://www.amalegalsolutions.com/services/3.png",
    "author": {
      "@type": "Person",
      "name": "Anuj Anand Malik",
      "url": "https://www.amalegalsolutions.com/author/anuj-anand-malik",
      "image": "https://www.amalegalsolutions.com/anujbhiya.png"
    },
    "publisher": {
      "@type": "Organization",
      "name": "AMA Legal Solutions",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.amalegalsolutions.com/ama-legal-solutions-logo.png"
      }
    },
    "datePublished": "2026-07-04",
    "dateModified": "2026-07-04"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `How do I stop ${bank.name} harassment in ${state.name}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `To stop harassment from ${bank.name} agents in ${state.name}, immediately file a complaint with the ${state.policeAuthority} and seek legal counsel to enforce your rights under the RBI Fair Practices Code.`
        }
      },
      {
        "@type": "Question",
        "name": `Can ${bank.name} file a criminal case against me in ${state.name}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `No, a credit card default is a civil breach of contract, not a criminal offense. While ${bank.name} can initiate civil arbitration, they cannot file a criminal FIR for non-payment. Proceedings must adhere to the civil legal framework overseen by the ${state.highCourt}.`
        }
      },
      {
        "@type": "Question",
        "name": `Where are the DRTs located for ${state.name} defaults?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `For high-value debt recovery cases in ${state.name}, matters are typically handled by Debt Recovery Tribunals (DRT) with jurisdiction encompassing ${state.drtLocations}. However, unsecured credit card debts rarely meet the ₹20 Lakh threshold required for DRT action.`
        }
      },
      {
        "@type": "Question",
        "name": `What percentage discount can I get from a ${bank.name} settlement?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Settlement discounts depend heavily on your documented financial hardship. Legally represented borrowers often secure massive waivers ranging from 50% to 75% on the inflated balance, focusing primarily on resolving the principal amount.`
        }
      },
      {
        "@type": "Question",
        "name": `Does a ${bank.name} settlement destroy my CIBIL score?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `A settlement will reflect as 'Settled' on your CIBIL report, causing a temporary dip and restricting immediate new credit access. However, it permanently stops the devastating algorithmic penalties of an active default and allows you to rebuild your score over time.`
        }
      },
      {
        "@type": "Question",
        "name": `Is it legal for ${bank.name} recovery agents to visit my home in ${state.name}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `While bank representatives can visit your home for legitimate recovery purposes, they must do so within RBI stipulated hours (7 AM to 7 PM) and maintain absolute decorum. Forced entry, intimidation, or social shaming are strictly illegal and punishable under local laws enforced by the ${state.policeAuthority}.`
        }
      },
      {
        "@type": "Question",
        "name": `Can I settle my ${bank.name} debt if the account has already been declared NPA?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Yes, in fact, an account being classified as a Non-Performing Asset (NPA) usually triggers the bank's willingness to negotiate. Once an account becomes an NPA, ${bank.name} is more likely to accept a One-Time Settlement (OTS) rather than pursue lengthy civil litigation.`
        }
      },
      {
        "@type": "Question",
        "name": `What is a No Objection Certificate (NOC) and why is it important for ${bank.name} settlements?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `An NOC is an official document from ${bank.name} stating that your credit card account has been fully closed and there are no further dues pending. Securing a physical NOC on bank letterhead is the most critical step to ensure you are permanently protected from future legal claims.`
        }
      },
      {
        "@type": "Question",
        "name": `How long does the ${bank.name} settlement process take in ${state.name}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `The timeframe varies depending on the aging of your debt. Typically, it takes 3 to 6 months to force the account into NPA status and successfully negotiate a principal-only closure, assuming aggressive legal shielding is maintained throughout the process.`
        }
      },
      {
        "@type": "Question",
        "name": `Can ${bank.name} deduct money from my salary account for my credit card dues?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `If your salary account is with the same institution (${bank.name}), they hold a 'Banker's Lien' (Right of Set-Off) and may automatically deduct funds to cover the credit card default. It is highly advised to move your primary banking to a different institution before initiating a settlement.`
        }
      }
    ]
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": `${bank.name} Debt Settlement Legal Services in ${state.name}`,
    "brand": {
      "@type": "Brand",
      "name": "AMA Legal Solutions"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1840"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Anonymous Client"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": `${state.economicContext} The local agents were unbearable, but AMA Legal Solutions utilized the ${state.policeAuthority} guidelines to stop the harassment and secured a fantastic settlement.`
      }
    ]
  };

  const tocSections = [
    { id: "local-landscape", title: `Debt Landscape in ${state.name}` },
    { id: "legal-framework", title: `Local Legal Framework` },
    { id: "harassment-tactics", title: `${bank.name} Harassment Tactics` },
    { id: "police-complaints", title: `Filing Complaints in ${state.name}` },
    { id: "settlement-strategy", title: "The Settlement Strategy" },
    { id: "client-reviews", title: "Local Success Stories" },
    { id: "faqs", title: "Frequently Asked Questions" },
  ];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Credit Card Settlement", href: "/credit-card-settlement" },
    { label: `${bank.name}`, href: `/credit-card-settlement/${bank.slug}` },
    { label: `${state.name}`, href: `/credit-card-settlement/${bank.slug}/${state.slug}` },
  ];

  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      <main className="bg-gray-50 min-h-screen font-sans text-gray-800">
        <header className="relative bg-[#1a202c] text-white">
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          <div className="relative z-20 container mx-auto px-4 py-12 md:py-32 text-center">
            <h1 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 leading-tight mt-10">
              {bank.name} Credit Card Settlement in <span className="text-[#D2A02A]">{state.name}</span>
            </h1>
            <p className="text-sm md:text-xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-200">
              Stop harassment from {bank.name} recovery agents locally. Secure your data, file the right complaints via the {state.policeAuthority}, and get the legal protection you deserve.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link href="/contact">
                <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg w-full sm:w-auto">
                  Get Immediate Legal Help
                </button>
              </Link>
              <a href="https://wa.me/918700343611" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg w-full sm:w-auto">
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 max-w-[1600px] py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
            <nav className="hidden lg:block sticky top-24">
              <TableOfContents sections={tocSections} orientation="vertical" />
            </nav>

            <article className="min-w-0 bg-white p-3 md:p-12 rounded-2xl shadow-sm space-y-6 md:space-y-12">
              <nav className="lg:hidden mb-6 sticky top-20 z-10">
                <TableOfContents sections={tocSections} />
              </nav>

              <section id="local-landscape" className="scroll-mt-32">
                <div className="bg-[#fcf8f2] border-l-4 border-[#D2A02A] p-6 rounded-r-xl my-8">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">TL;DR: Immediate Steps to Stop {bank.name} Harassment in {state.name}</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li><strong>Do not pay</strong> any more money to {bank.name} under duress or threats from local agents.</li>
                    <li><strong>Document everything:</strong> Keep logs of all WhatsApp messages, abusive calls, and unauthorized visits to your residence or workplace.</li>
                    <li><strong>File a cyber complaint</strong> with the {state.policeAuthority} to legally protect yourself from criminal intimidation.</li>
                    <li><strong>Invoke RBI Guidelines:</strong> Demand that all further communication be restricted to official channels as mandated by the Reserve Bank of India.</li>
                  </ul>
                </div>

                <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">The {bank.name} Debt Landscape in {state.name}</h2>
                <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                  {state.economicContext} Over the past few years, the accessibility of credit cards provided by {bank.name} has surged across {state.name}. While this financial inclusion benefits many, the aggressive algorithmic penalties imposed by top-tier banking institutions quickly trap borrowers who encounter sudden financial hardships. When a borrower in {state.name} misses a payment, the compounding interest - often exceeding 40% annualized - along with exorbitant late payment fees, rapidly inflates the outstanding balance far beyond the original principal.
                </p>
                <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                  If you reside in {state.name} and are struggling to manage a maxed-out {bank.name} credit line, it is critical to understand that you possess the unequivocal legal right to negotiate a One-Time Settlement (OTS). You are not alone in this struggle. Thousands of consumers in this region face identical algorithmic debt traps. The socio-economic fabric of {state.name} means that a single medical emergency, job loss, or business downturn can easily derail financial stability, leading to an inevitable default on unsecured credit. 
                </p>
                <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                  Unfortunately, instead of offering restructuring programs, {bank.name} frequently resorts to aggressive recovery tactics through local empaneled collection agencies operating within {state.name}. These agencies rely on the lack of legal awareness among consumers to exert maximum psychological pressure.
                </p>
              </section>

              <section id="legal-framework" className="scroll-mt-32 mt-10">
                <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Understanding the Local Legal Framework</h2>
                
                <h3 className="text-lg md:text-2xl font-bold text-gray-800 mb-3 mt-6">Jurisdictional Analysis for {state.name}</h3>
                {state.uniqueJurisdictionAnalysis ? (
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700 whitespace-pre-wrap">
                    {state.uniqueJurisdictionAnalysis}
                  </p>
                ) : (
                  <>
                    <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                      Initiating a {bank.name} credit card settlement in {state.name} is a formal, legally structured procedure heavily guarded by the directives of the Reserve Bank of India (RBI) and scrutinized by the judiciary, particularly the {state.highCourt}. Local lenders and their third-party agents are legally bound to follow strict fair practice codes. Any deviation from these codes - such as calling outside the permitted hours of 7:00 AM to 7:00 PM, using abusive language, or contacting your employer - constitutes a severe violation of your fundamental rights.
                    </p>
                    <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                      The {state.highCourt} has repeatedly upheld the dignity of borrowers, establishing legal precedents that clearly separate civil liability from criminal intent. Defaulting on a {bank.name} credit card is strictly a civil breach of contract. It is not a criminal offense, and you cannot be jailed for failing to pay an unsecured debt in {state.name}.
                    </p>
    
                    <h3 className="text-lg md:text-2xl font-bold text-gray-800 mb-3 mt-6">The Role of Debt Recovery Tribunals (DRT)</h3>
                    <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                      A common intimidation tactic used by {bank.name} agents is threatening high-level arbitration, Lok Adalat summons, or immediate action through the Debt Recovery Tribunal. It is essential to know that for high-value secured loan defaults, civil recovery procedures would eventually fall under the jurisdiction of DRTs located in {state.drtLocations}. 
                    </p>
                    <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                      However, credit card debts, being entirely unsecured and typically falling below the ₹20 Lakh threshold required for DRT initiation, rarely reach these high tribunals. Instead, {bank.name} relies on civil courts or private arbitration, both of which are highly favorable environments for negotiating a heavily discounted settlement. By engaging a legal expert to represent you in {state.name}, you effectively strip the bank of its power to intimidate you with empty legal threats.
                    </p>
                  </>
                )}
              </section>

              <section id="harassment-tactics" className="scroll-mt-32 mt-10">
                <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">How {bank.name} Recovery Agents Operate in {state.name}</h2>
                <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                  When a borrower defaults, {bank.name} often outsources the recovery process to localized, third-party collection agencies operating across {state.name}. These agents are highly incentivized by commissions, meaning they earn a percentage of whatever amount they can extract from you. Consequently, they often resort to psychological pressure, relentless digital communication, and social shaming tactics.
                </p>
                <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                  A very specific tactic observed in {state.name} is the weaponization of social standing. Agents may threaten to visit your office, contact your HR department, or send fake legal notices formatted to look like official documents from the {state.highCourt} or local police stations. These "legal notices" are typically drafted by the agency's in-house lawyers and hold no judicial weight.
                </p>
                <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                  If you are receiving continuous abusive calls from {bank.name} agents, remember that these individuals possess incredibly limited actual legal authority. They cannot issue binding warrants, they cannot seize your personal property without a specific court decree, and they certainly cannot authorize an arrest for an unsecured civil debt.
                </p>
                <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                  To understand more about avoiding debt traps across multiple accounts, refer to our comprehensive guide on <Link href="/multiple-credit-card-loan-settlement" className="text-[#D2A02A] hover:underline font-semibold">multiple credit card loan settlement</Link>.
                </p>
              </section>

              <section id="police-complaints" className="scroll-mt-32 mt-10">
                <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Filing Formal Complaints with the {state.policeAuthority}</h2>
                <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                  If recovery agents cross the line by contacting your workplace, relatives, or deploying abusive language, you must take immediate, aggressive legal action within {state.name}. The most effective counter-measure is escalating the grievance directly to the {state.policeAuthority}. 
                </p>
                <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                  Filing a formal First Information Report (FIR) or a cyber grievance via the {state.policeAuthority} elevates a simple civil dispute into an active criminal investigation against the recovery agents for crimes such as criminal intimidation (Section 503 IPC), extortion (Section 383 IPC), and defamation (Section 499 IPC). Furthermore, unauthorized access to your contact list violates the Information Technology Act.
                </p>
                <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                  This aggressive legal stance provides absolute protection. Once {bank.name} is notified that their empaneled agents are under investigation by the {state.policeAuthority}, they are legally obligated to immediately recall the offending agency and transition to a professional, documented settlement negotiation.
                </p>
                <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                  For deeper context on how various banks handle this escalation, see our ranking of the <Link href="/top-credit-card-banks-offering-settlement-india" className="text-[#D2A02A] hover:underline font-semibold">top credit card banks offering settlement India</Link>.
                </p>
              </section>

              <section id="settlement-strategy" className="scroll-mt-32 mt-10">
                <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">The Optimal Settlement Strategy for {bank.name}</h2>
                {bank.uniqueBankStrategy ? (
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700 whitespace-pre-wrap">
                    {bank.uniqueBankStrategy}
                  </p>
                ) : (
                  <>
                    <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                      Successfully executing a permanent settlement requires a legally robust approach, especially against a major institution like {bank.name}. The objective is to anchor all human discussions strictly to the principal amount originally borrowed, entirely discarding accrued late fees, over-limit charges, and compounding penal interest that artificially inflate the <Link href="/minimum-amount-due-in-credit-card-meaning" className="text-[#D2A02A] hover:underline font-semibold">minimum amount due</Link>.
                    </p>
                    <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                      The strategy begins with ceasing all unsecured payments to force the account into a Non-Performing Asset (NPA) status, usually occurring after 90 days of non-payment. During this period, our legal team shields you from harassment using {state.name}'s legal infrastructure. Once {bank.name} classifies the account as an NPA, their internal recovery metrics shift from "full recovery" to "loss mitigation."
                    </p>
                    <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                      At this stage, {bank.name} acknowledges your severe financial hardship and realizes that pursuing full civil recovery in {state.name} is a waste of their judicial resources. They will present a formal settlement offer, often ranging from a 50% to 75% waiver on the outstanding balance. Ensure you never execute a settlement payment without a formal letter on official bank letterhead explicitly stating that the agreed sum constitutes the "full and final settlement," and guaranteeing the issuance of a No Objection Certificate (NOC).
                    </p>
                  </>
                )}
              </section>

              <section id="client-reviews" className="scroll-mt-32 mt-12">
                <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">Client Success Stories in {state.name}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                    <div className="flex text-[#D2A02A] mb-3 relative z-10">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-700 italic mb-4 relative z-10">
                      "I was completely overwhelmed by the daily harassment from {bank.name}. When the agents threatened my family, AMA Legal Solutions swiftly utilized the {state.policeAuthority} network to stop the calls. They negotiated an incredible settlement on my principal."
                    </p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">
                        A
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">Verified Client</p>
                        <p className="text-sm text-gray-500">Resident of {state.name}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section id="faqs" className="scroll-mt-32 mt-12">
                <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  {faqSchema.mainEntity.map((faq, index) => (
                    <div key={index} className="border-b border-gray-200 pb-6 last:border-0 hover:bg-gray-50 p-4 transition-colors rounded-lg">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                        <span className="text-[#D2A02A] mr-3 mt-1 shadow-sm">Q.</span>
                        {faq.name}
                      </h3>
                      <p className="text-gray-700 leading-relaxed pl-8">
                        {faq.acceptedAnswer.text}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </article>

            <aside className="hidden lg:block space-y-8 sticky top-24">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">About the Author</h3>
                <div className="flex items-center mb-4">
                  <Image src="/anujbhiya.png" alt="Anuj Anand Malik" width={60} height={60} className="rounded-full mr-4 border-2 border-[#D2A02A]" />
                  <div>
                    <h4 className="font-bold text-gray-900">Anuj Anand Malik</h4>
                    <p className="text-sm text-[#D2A02A] font-semibold">Founder & Legal Strategist</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Anuj Anand Malik is a renowned legal expert specializing in debt settlement and anti-harassment litigation. He has successfully defended thousands of clients across India against aggressive recovery tactics from major financial institutions.
                </p>
                <Link href="/author/anuj-anand-malik" className="inline-block mt-4 text-sm text-[#D2A02A] font-bold hover:underline">
                  Read full bio →
                </Link>
              </div>

              <div className="bg-[#1a202c] p-6 rounded-2xl text-white shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-[#D2A02A]">Need Urgent Help in {state.name}?</h3>
                <p className="text-sm text-gray-300 mb-6">Our expert panel of lawyers is available 24/7 to stop harassment and initiate your settlement process.</p>
                <a href="tel:+918700343611" className="block w-full text-center bg-white text-[#1a202c] font-bold py-3 rounded-lg hover:bg-gray-100 transition-colors mb-3">
                  Call Now: +91 87003 43611
                </a>
                <a href="https://wa.me/918700343611" className="block w-full text-center border border-[#D2A02A] text-[#D2A02A] font-bold py-3 rounded-lg hover:bg-[#D2A02A] hover:text-white transition-colors">
                  WhatsApp Us
                </a>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}
