import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { creditCardBanks, CreditCardBank } from "@/data/creditCardBanks";
import { statesData, StateData } from "@/data/statesData";
import { notFound } from "next/navigation";
import { getBankStateSettlementSEO } from "@/lib/seo";

// ISR: Cache pages for 24 hours
export const revalidate = 86400;
export const dynamicParams = true;

export async function generateStaticParams() {
  const topBanks = creditCardBanks.slice(0, 15);
  const topStates = statesData.slice(0, 10);
  const params: { slug: string; "state-slug": string }[] = [];
  
  for (const bank of topBanks) {
    for (const state of topStates) {
      params.push({ slug: bank.slug, "state-slug": state.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string; "state-slug": string }> }) {
  const { slug, "state-slug": stateSlug } = await params;
  const bank = creditCardBanks.find((b) => b.slug === slug);
  const state = statesData.find((s) => s.slug === stateSlug);

  if (!bank || !state) return {};

  const { title, description } = getBankStateSettlementSEO(bank.name, state.name, slug, stateSlug, true);

  return {
    title,
    description,
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
      `stop ${bank.name} credit card recovery harassment ${state.name}`,
      `minimum amount due trap ${bank.name}`,
      `${state.name} credit card debt settlement`,
      `${state.policeAuthority} credit card harassment complaint`,
      `RBI master directions credit card settlement`
    ],
    alternates: {
      canonical: `https://www.amalegalsolutions.com/credit-card-settlement/${bank.slug}/${state.slug}`,
    },
  };
}

export default async function CreditCardBankStateSettlementPage({ params }: { params: Promise<{ slug: string; "state-slug": string }> }) {
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
        "name": `${bank.name} Card Settlement`,
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
    "headline": `${bank.name} Credit Card Settlement in ${state.name} | RBI Guidelines & Legal Guide`,
    "description": `Comprehensive legal guide for resolving unmanageable ${bank.name} credit card debt in ${state.name}. Escape compounding finance charges under RBI Master Directions.`,
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
    "dateModified": "2026-09-15"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `Can ${bank.name} freeze my savings account if I default on my credit card in ${state.name}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Yes. Under the common-law Right of Set-Off (Banker's Lien), ${bank.name} can legally attach funds from any savings or current account you maintain with their institution in ${state.name}. To safeguard your emergency finances, you must shift your salary or operational banking to an independent financial institution before initiating credit card settlement discussions.`
        }
      },
      {
        "@type": "Question",
        "name": `How does the Minimum Amount Due (MAD) trap work on ${bank.name} credit cards?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Paying only the Minimum Amount Due covers primarily accrued interest, taxes, and late fees without reducing the principal balance. Finance charges of 3.5% to 4.2% per month (42% to 52% APR) continue to compound on the entire outstanding amount, resulting in a snowballing debt balance that becomes mathematically impossible to clear through minimum payments alone.`
        }
      },
      {
        "@type": "Question",
        "name": `What legal protection does the RBI Master Direction 2022 provide to cardholders in ${state.name}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `The RBI Master Directions (2022) on Credit Cards explicitly prohibit card issuers and their recovery agents from engaging in verbal harassment, intimidation, calling before 7:00 AM or after 7:00 PM, or contacting relatives and employers. Any violation can be reported directly to the RBI Ombudsman and the ${state.policeAuthority}.`
        }
      },
      {
        "@type": "Question",
        "name": `Can ${bank.name} file a Section 25 PSSA case for a bounced credit card auto-debit?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `If you had set up an electronic NACH mandate that failed due to insufficient balance, ${bank.name} may issue a notice under Section 25 of the Payment and Settlement Systems Act. However, this is a procedural notification that can be answered and defended by an advocate, and it is routinely settled through the One-Time Settlement (OTS) agreement.`
        }
      },
      {
        "@type": "Question",
        "name": `How much waiver can I expect on a ${bank.name} credit card settlement?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Because credit card balances consist heavily of inflated finance charges, late fees, and compounding penalties, settlements often achieve waivers of 50% to 75% off the total balance, allowing borrowers to settle close to the actual original principal expenditure.`
        }
      },
      {
        "@type": "Question",
        "name": `What is a No Dues Certificate (NDC) and when does ${bank.name} issue it?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `An NDC (or NOC) is the official closure certificate issued on bank letterhead confirming that the credit card account has been fully closed and the bank has no surviving legal claims. It is typically issued within 30 to 45 days following the clearance of the agreed settlement payment.`
        }
      }
    ]
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": `${bank.name} Credit Card Settlement Legal Services in ${state.name}`,
    "brand": {
      "@type": "Brand",
      "name": "AMA Legal Solutions"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1920"
    }
  };

  const tocSections = [
    { id: "mad-trap", title: `The Minimum Amount Due Trap` },
    { id: "card-vs-loan", title: `Credit Card vs Loan Differences` },
    { id: "rbi-card-directions", title: `RBI Master Directions on Cards` },
    { id: "bankers-lien", title: `Banker's Lien & Account Shielding` },
    { id: "nach-bounce-defence", title: `Section 25 PSSA Defence` },
    { id: "settlement-framework", title: `The 4-Step Settlement Strategy` },
    { id: "faqs", title: `Frequently Asked Questions` },
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
              Break free from the compounding revolving debt trap of {bank.name}. Invoke the RBI Master Directions (2022) to halt collection agent harassment in {state.name} and settle your credit card dues on principal-only terms.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link href="/contact">
                <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg w-full sm:w-auto">
                  Resolve Credit Card Debt
                </button>
              </Link>
              <a href="https://wa.me/918700343611" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg w-full sm:w-auto">
                Consult on WhatsApp
              </a>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 max-w-[1600px] py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr_280px] gap-8 items-start">
            <nav className="hidden lg:block sticky top-24">
              <TableOfContents sections={tocSections} orientation="vertical" />
            </nav>

            <article className="min-w-0 bg-white p-4 md:p-12 rounded-2xl shadow-sm space-y-8 md:space-y-12">
              <nav className="lg:hidden mb-6 sticky top-20 z-10">
                <TableOfContents sections={tocSections} />
              </nav>

              {/* SECTION 1: MAD TRAP */}
              <section id="mad-trap" className="scroll-mt-32">
                <div className="bg-[#fcf8f2] border-l-4 border-[#D2A02A] p-6 rounded-r-xl my-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Key Reality: The Minimum Amount Due Illusion</h4>
                  <p className="text-sm md:text-base text-gray-700">
                    Paying only the 5% Minimum Amount Due on a {bank.name} credit card keeps the account active on paper, but nearly 80% of your payment is consumed by finance charges (up to 54% APR) and 18% GST. The principal remains virtually untouched, keeping cardholders in {state.name} trapped indefinitely.
                  </p>
                </div>

                <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4">The Mechanics of {bank.name} Credit Card Debt in {state.name}</h2>
                <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                  {state.economicContext} Revolving credit instruments like {bank.name} credit cards function on fundamentally different financial mechanics than standard fixed-term loans. The moment a payment deadline is missed in {state.name}, the bank terminates the interest-free grace period on all subsequent purchases, applying retrospective finance charges dating back to the exact day of each transaction.
                </p>
                <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                  With annualized interest rates ranging from 42% to 54% compounded monthly, combined with over-limit charges and late payment fees, a modest ₹1,00,000 credit line can balloon to over ₹2,50,000 within 18 months. If you are struggling with unpaid card dues in {state.name}, continuing to make partial or minimum payments merely burns capital without ever reducing your principal liability.
                </p>
              </section>

              {/* SECTION 2: COMPARISON TABLE */}
              <section id="card-vs-loan" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4">Revolving Credit Cards vs Fixed Personal Loans</h2>
                <p className="text-sm md:text-base text-gray-600 mb-6">
                  Understanding why credit card debt requires a specialized legal settlement approach compared to installment loans:
                </p>

                <div className="overflow-x-auto my-6">
                  <table className="w-full text-left border-collapse border border-gray-200 text-sm md:text-base">
                    <thead>
                      <tr className="bg-gray-100 text-gray-900">
                        <th className="p-3 border border-gray-200">Parameter</th>
                        <th className="p-3 border border-gray-200">{bank.name} Credit Card</th>
                        <th className="p-3 border border-gray-200">Standard Personal Loan</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-3 font-semibold text-gray-800">Effective Annual APR</td>
                        <td className="p-3 text-red-600 font-bold">42% to 54% p.a.</td>
                        <td className="p-3 text-gray-700">11% to 18% p.a.</td>
                      </tr>
                      <tr className="border-b bg-gray-50">
                        <td className="p-3 font-semibold text-gray-800">Interest Calculation</td>
                        <td className="p-3 text-gray-700">Daily compounding on total balance</td>
                        <td className="p-3 text-gray-700">Reducing balance monthly EMI</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 font-semibold text-gray-800">Minimum Payment Traps</td>
                        <td className="p-3 text-gray-700">Yes (MAD covers only interest + GST)</td>
                        <td className="p-3 text-gray-700">No (Full EMI covers principal)</td>
                      </tr>
                      <tr className="border-b bg-gray-50">
                        <td className="p-3 font-semibold text-gray-800">Governing RBI Regulation</td>
                        <td className="p-3 text-gray-700">Master Direction 2022 (Credit Cards)</td>
                        <td className="p-3 text-gray-700">RBI Fair Practices Code (Loans)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-gray-800">Average Settlement Waiver</td>
                        <td className="p-3 text-green-700 font-bold">50% to 75% on total claim</td>
                        <td className="p-3 text-gray-700">40% to 60% on total claim</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* SECTION 3: RBI MASTER DIRECTIONS */}
              <section id="rbi-card-directions" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4">RBI Master Directions (2022) on Credit Card Conduct</h2>
                <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                  The Reserve Bank of India enacted strict regulatory boundaries in its <em>Master Direction – Credit Card and Debit Card – Issuance and Conduct Directions, 2022</em> (updated 2024). Under Chapter VI of these directions, cardholders residing in {state.name} enjoy decisive protections:
                </p>
                <ul className="list-disc pl-5 space-y-3 text-gray-700 text-sm md:text-base mb-6">
                  <li><strong>Prohibition of Third-Party Disclosure:</strong> Lenders cannot disclose card balances, default status, or payment histories to unauthorized third parties, including family members, colleagues, or neighbors in {state.name}.</li>
                  <li><strong>Time Restrictions on Recovery Calls:</strong> Recovery agents cannot contact you before 7:00 AM or after 7:00 PM. Calls at odd hours constitute illegal harassment under RBI guidelines.</li>
                  <li><strong>No Humiliation or Verbal Abuse:</strong> Collection personnel are forbidden from employing intimidation, threats of immediate police detention, or offensive language.</li>
                  <li><strong>Grievance Redressal Mechanism:</strong> Lenders must maintain a dedicated Nodal Grievance Redressal desk. If an unaddressed complaint persists beyond 30 days, cardholders have the right to escalate directly to the RBI Integrated Ombudsman.</li>
                </ul>
                <p className="text-sm md:text-base text-gray-700">
                  If recovery agents empanelled by {bank.name} violate these codes in {state.name}, an immediate complaint can be lodged with the <strong>{state.policeAuthority}</strong>, converting an aggressive debt collection attempt into an actionable legal investigation.
                </p>
              </section>

              {/* SECTION 4: BANKER'S LIEN */}
              <section id="bankers-lien" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4">Protecting Your Accounts from Banker&apos;s Lien in {state.name}</h2>
                <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                  A common risk faced by credit card holders is the banker&apos;s right of set-off. If your salary, savings, or fixed deposit account is held with the same institution that issued your credit card ({bank.name}), the bank&apos;s core agreements grant them the legal authority to debit funds from your deposit accounts to offset delinquent credit card balances without advance notice.
                </p>
                <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl my-4 text-sm md:text-base text-gray-800">
                  <strong>Crucial Defensive Step:</strong> Before stopping card payments or submitting a settlement hardship letter, immediately transfer your salary credit, emergency savings, and family deposits to an independent bank where you have zero loan or credit card exposure.
                </div>
              </section>

              {/* SECTION 5: NACH BOUNCE DEFENCE */}
              <section id="nach-bounce-defence" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4">Handling Auto-Debit Bounces & Section 25 PSSA in {state.name}</h2>
                <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                  When cardholders revoke auto-debit authorizations or maintain zero balance on auto-pay dates, {bank.name} often issues legal notices under Section 25 of the Payment and Settlement Systems Act (PSSA), 2007. 
                </p>
                <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                  Recovery agents frequently misrepresent Section 25 notices as &ldquo;imminent arrest warrants.&rdquo; In judicial practice within {state.name} overseen by the {state.highCourt}, Section 25 proceedings are quasi-criminal payment mechanism issues. Once legal counsel enters an appearance and establishes ongoing hardship negotiations, courts encourage amicable resolution through Lok Adalats or One-Time Settlement agreements.
                </p>
              </section>

              {/* SECTION 6: THE 4-STEP FRAMEWORK */}
              <section id="settlement-framework" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4">The 4-Step {bank.name} Credit Card Settlement Strategy</h2>
                <div className="space-y-4">
                  <div className="p-4 border border-gray-200 rounded-xl bg-white">
                    <h3 className="font-bold text-lg text-gray-900 mb-1">Step 1: Account Audit & Financial Hardship Documentation</h3>
                    <p className="text-sm md:text-base text-gray-600">
                      Our legal advocates review your {bank.name} credit card statements to isolate legitimate principal expenditure from accumulated finance charges, penal interest, and annual card fees. We build a comprehensive hardship portfolio documenting income changes, medical emergencies, or business disruptions.
                    </p>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-xl bg-white">
                    <h3 className="font-bold text-lg text-gray-900 mb-1">Step 2: Legal Shielding & Harassment Cessation</h3>
                    <p className="text-sm md:text-base text-gray-600">
                      We issue a formal representation to {bank.name}&apos;s compliance desk, redirecting all recovery communications to our legal team and warning them of statutory consequences under {state.name}&apos;s police jurisdiction if third-party intimidation occurs.
                    </p>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-xl bg-white">
                    <h3 className="font-bold text-lg text-gray-900 mb-1">Step 3: Direct OTS Negotiation with Bank Decision-Makers</h3>
                    <p className="text-sm md:text-base text-gray-600">
                      We bypass external tele-calling agencies to negotiate directly with {bank.name}&apos;s centralized debt resolution vertical, seeking a 50% to 75% waiver on the total claimed amount and fixing a feasible one-time or structured installment schedule.
                    </p>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-xl bg-white">
                    <h3 className="font-bold text-lg text-gray-900 mb-1">Step 4: Verification of Settlement Letter & No Dues Certificate</h3>
                    <p className="text-sm md:text-base text-gray-600">
                      We verify that the settlement sanction letter is generated on authentic {bank.name} letterhead with a verified closure clause before any payment is transferred. Once paid, we track the issuance of your official No Dues Certificate (NDC).
                    </p>
                  </div>
                </div>
              </section>

              {/* FAQS */}
              <section id="faqs" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  {faqSchema.mainEntity.map((faq, index) => (
                    <div key={index} className="border-b border-gray-200 pb-6 last:border-0 hover:bg-gray-50 p-4 transition-colors rounded-lg">
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 flex items-start">
                        <span className="text-[#D2A02A] mr-3 mt-1 shadow-sm font-serif font-bold">Q.</span>
                        {faq.name}
                      </h3>
                      <p className="text-sm md:text-base text-gray-700 leading-relaxed pl-7">
                        {faq.acceptedAnswer.text}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Call to Action */}
              <div className="bg-[#fcf8f2] border border-[#e8d5b5] rounded-2xl p-6 md:p-10 text-center my-8">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  Resolve Your {bank.name} Credit Card Dues with Legal Backing
                </h3>
                <p className="text-sm md:text-base text-gray-700 max-w-2xl mx-auto mb-6">
                  Don&apos;t let compounding finance charges dictate your future in {state.name}. Our seasoned advocates negotiate directly with {bank.name} to close your card accounts legally and stop agent harassment today.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link href="/contact" className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3.5 px-8 rounded-full transition-all shadow-md">
                    Request Legal Hardship Evaluation
                  </Link>
                  <a href="https://wa.me/918700343611" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3.5 px-8 rounded-full transition-all shadow-md">
                    Connect on WhatsApp
                  </a>
                </div>
              </div>
            </article>

            {/* Right Column - Legal Support Card */}
            <aside className="hidden lg:block sticky top-24 space-y-6">
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                <h4 className="font-bold text-gray-900 text-lg mb-2">Need Immediate Shielding?</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Our legal team intervenes within 24 hours to halt recovery calls and issue formal notices to {bank.name}.
                </p>
                <a href="tel:+918700343611" className="block w-full text-center bg-[#1a202c] text-white font-bold py-3 rounded-xl hover:bg-black transition-colors text-sm mb-3">
                  Call: +91 8700343611
                </a>
                <Link href="/contact" className="block w-full text-center border border-[#D2A02A] text-[#D2A02A] font-bold py-3 rounded-xl hover:bg-[#D2A02A] hover:text-white transition-colors text-sm">
                  Book Confidential Consultation
                </Link>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                <h5 className="font-bold text-gray-800 text-sm mb-3 uppercase tracking-wider">Related Guides</h5>
                <ul className="space-y-2 text-sm text-[#D2A02A]">
                  <li>
                    <Link href="/minimum-amount-due-in-credit-card-meaning" className="hover:underline">
                      Minimum Amount Due Trap Explained
                    </Link>
                  </li>
                  <li>
                    <Link href="/multiple-credit-card-loan-settlement" className="hover:underline">
                      Settling Multiple Credit Cards
                    </Link>
                  </li>
                  <li>
                    <Link href="/top-credit-card-banks-offering-settlement-india" className="hover:underline">
                      Top Banks Offering Card Settlements
                    </Link>
                  </li>
                  <li>
                    <Link href="/how-to-stop-bank-recovery-agents-harassment-legally-in-india" className="hover:underline">
                      Legal Steps to Stop Recovery Agents
                    </Link>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}
