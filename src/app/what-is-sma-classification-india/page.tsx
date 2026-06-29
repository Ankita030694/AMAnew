import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// JSON-LD Schemas
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
      "name": "SMA Classification India",
      "item": "https://www.amalegalsolutions.com/what-is-sma-classification-india"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "SMA Classification in India: Complete Guide",
  "description": "Understand SMA classification in India. Learn the difference between SMA-0, SMA-1, and SMA-2, and how to resolve your loan before it becomes an NPA.",
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
  "datePublished": "2026-06-29",
  "dateModified": "2026-06-29"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the meaning of SMA in banking?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SMA stands for Special Mention Account. It is an RBI classification system used by banks to identify accounts that are showing signs of stress or potential default before they become Non-Performing Assets (NPAs)."
      }
    },
    {
      "@type": "Question",
      "name": "Does SMA-0 affect my CIBIL score?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, even an SMA-0 classification is reported to credit bureaus. It shows up as a slight delay in your credit history, which can marginally lower your score and act as a red flag to future lenders."
      }
    },
    {
      "@type": "Question",
      "name": "How is SMA different from NPA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An SMA is a warning stage indicating a delay in repayment between 1 and 90 days. An account is only classified as an NPA (Non-Performing Asset) when the overdue period exceeds 90 days."
      }
    },
    {
      "@type": "Question",
      "name": "Can I negotiate a settlement during the SMA phase?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, the SMA phase is often the best time to negotiate a restructuring or settlement plan with your lender, as the account has not yet been classified as a total loss (NPA)."
      }
    },
    {
      "@type": "Question",
      "name": "What happens if my account reaches SMA-2?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Reaching SMA-2 (61-90 days overdue) is a critical stage. The bank will intensify recovery efforts and may issue formal notices warning of imminent NPA classification and subsequent legal actions."
      }
    }
  ]
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Loan Settlement Services",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "890"
  },
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Suresh Gupta"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "My loan was classified as SMA-2, and the bank was threatening immediate legal action. AMA Legal Solutions stepped in and negotiated a brilliant settlement plan right before it turned into an NPA."
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Ramesh Iyer"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4",
        "bestRating": "5"
      },
      "reviewBody": "Clear guidance on my SMA status. I didn't even know what SMA-0 meant until their team explained the RBI guidelines to me and helped me restructure my debt effectively."
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Neha Sharma"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "Professional and fast. They managed my communication with the bank during the critical SMA-1 phase and prevented my credit report from being completely ruined."
    }
  ]
};

export const metadata = {
  title: "SMA Classification in India: Complete Guide",
  description: "Understand SMA classification in India. Learn the difference between SMA-0, SMA-1, and SMA-2, and how to resolve your loan before it becomes an NPA.",
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    "best loan settlement india",
    "loan settlement india",
    "what is sma classification",
    "sma-0",
    "sma-1",
    "sma-2",
    "rbi sma guidelines"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/what-is-sma-classification-india',
  },
};

export default function SMAClassificationPage() {
  const tocSections = [
    { id: "understanding-sma", title: "Understanding SMA Classification in India" },
    { id: "triggers", title: "What Triggers an SMA Alert?" },
    { id: "three-stages", title: "The Three Stages of Special Mention Accounts" },
    { id: "sma-0", title: "SMA-0: The Initial Warning" },
    { id: "sma-1", title: "SMA-1: The 30-Day Threshold" },
    { id: "sma-2", title: "SMA-2: The Critical 60-Day Mark" },
    { id: "credit-impact", title: "How SMA Status Impacts Your Credit Report" },
    { id: "strategies", title: "Strategies to Resolve SMA Classification" },
    { id: "restructuring", title: "Restructuring and Settlement Options" },
    { id: "faq", title: "Frequently Asked Questions" },
  ];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "What is SMA Classification", href: "/what-is-sma-classification-india" },
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
              SMA Classification in India: Complete Guide
            </h1>
            <p className="text-sm md:text-xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-200">
              Navigate the RBI's Special Mention Account system and protect your financial future.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link href="/contact">
                <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg w-full sm:w-auto">
                  Get Immediate Legal Help
                </button>
              </Link>
            </div>
          </div>
        </header>

        <article className="container mx-auto px-4 max-w-[1600px] py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
            <nav className="hidden lg:block sticky top-24">
              <TableOfContents sections={tocSections} orientation="vertical" />
            </nav>

            <div className="min-w-0">
              <nav className="lg:hidden mb-6 sticky top-20 z-10">
                <TableOfContents sections={tocSections} />
              </nav>

              <div className="bg-white p-3 md:p-12 rounded-2xl shadow-sm space-y-6 md:space-y-12">
                
                <section>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700 font-semibold">
                    Under the Reserve Bank of India’s stringent asset classification norms, a single day of delay in loan repayment automatically flags your account as a Special Mention Account (SMA-0). This pre-NPA warning system means that missing your EMI by even 24 hours immediately puts your financial credibility under the bank's microscopic radar.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    If you are facing financial distress and seeking the <Link href="/" className="text-[#D2A02A] hover:underline font-bold">best loan settlement india</Link> solutions, understanding the SMA framework is your critical first step. It provides a vital window of opportunity to rectify your account standing before it transitions into a Non-Performing Asset (NPA).
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    This comprehensive guide unravels the complexities of the SMA classification, helping you decipher bank notices and empowering you to take proactive measures. Whether you are dealing with a personal loan, business credit, or a mortgage, the rules apply universally across the Indian banking ecosystem.
                  </p>
                </section>

                <section id="understanding-sma" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Understanding SMA Classification in India</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    The concept of a Special Mention Account (SMA) was introduced by the <a href="https://rbi.org.in/" rel="nofollow" target="_blank" className="text-[#D2A02A] hover:underline font-bold">Reserve Bank of India (RBI)</a> to identify incipient stress in borrower accounts long before they actually default. Historically, banks often waited until an account had been entirely unpaid for 90 days before recognizing it as a problem. This reactive approach led to a massive accumulation of bad debts within the banking system.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    To mitigate this systemic risk, the RBI created the SMA framework. It acts as an early warning system. By categorizing accounts that show early signs of repayment irregularity, banks are mandated to intervene promptly. The primary goal is not to punish the borrower immediately, but to initiate corrective action, offer restructuring if viable, and prevent the loan from slipping into the dreaded NPA category. For anyone considering <Link href="/understanding-non-performing-assets-npa-what-happens-next-your-complete-guide" className="text-[#D2A02A] hover:underline font-bold">what happens after an NPA classification</Link>, understanding SMA is essential.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    It is crucial to recognize that an SMA classification is not a death sentence for your creditworthiness, but rather a loud alarm bell. It signifies that your financial buffer has eroded, and the lending institution is now monitoring your transactional behavior with extreme prejudice. Your responses to bank communications during this phase will heavily influence their subsequent recovery strategies.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    The framework is structured temporally, meaning the severity of the classification escalates precisely with the number of days your payment is overdue. This transparent, timeline-based approach leaves no room for ambiguity between the lender and the borrower.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    For corporate borrowers, entering the SMA categories triggers the formation of a Joint Lenders' Forum (JLF) designed to formulate a corrective action plan. For retail borrowers, it generally initiates automated recovery calls, warning letters, and ultimately, a demand for <Link href="/" className="text-[#D2A02A] hover:underline font-bold">loan settlement india</Link> negotiations or legal action.
                  </p>
                </section>

                <section id="triggers" className="scroll-mt-32">
                  <h3 className="text-lg md:text-2xl font-bold text-gray-800 mb-3 mt-6">What Triggers an SMA Alert?</h3>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    The trigger for an SMA alert is strictly mathematical and time-bound. It is not based on the subjective judgment of a bank manager, but rather on automated systems tracking the 'Day-End Process' (EoD).
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Specifically, if the principal or interest payment, or any other amount wholly or partly overdue, remains unpaid beyond the stipulated due date, the account is instantly flagged. For instance, if your EMI is due on the 5th of the month, and the bank does not receive the funds by the end of the day on the 5th, your account becomes SMA-0 on the 6th.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Beyond simple non-payment, other factors can trigger stress signals, particularly for business accounts. These include continuous irregularities in cash credit or overdraft accounts, failure to renew limits on time, or a sudden, drastic drop in the borrower's credit rating. However, for most retail borrowers, the trigger is purely a missed or delayed EMI payment.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    It's a common misconception that paying a partial EMI will prevent an SMA classification. Under RBI norms, the entire expected amount must be cleared to keep the account in standard, regular standing. Partial payments will not reset the clock on the SMA timeline.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Borrowers must also be wary of technical delays. If your cheque clears late or your NEFT transfer is delayed due to banking holidays, the system will still flag the account. While the bank may reverse late fees upon request, the initial automated reporting to credit bureaus regarding the delay often remains, highlighting the necessity of maintaining sufficient balance well before the due date.
                  </p>
                </section>

                <section id="three-stages" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">The Three Stages of Special Mention Accounts</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    The RBI has categorized the SMA framework into three distinct temporal buckets. Each bucket represents a deeper level of financial distress and triggers a correspondingly more severe response from the lending institution.
                  </p>
                  
                  {/* Visual Implementation: Timeline */}
                  <div className="my-8 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg shadow-sm">
                    <h4 className="text-lg font-bold text-blue-900 mb-4">SMA Classification Timeline</h4>
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
                      <div className="flex flex-col items-center p-4 bg-white rounded shadow flex-1 mx-2 w-full md:w-auto">
                        <span className="text-2xl font-bold text-yellow-500">1-30 Days</span>
                        <span className="font-semibold mt-2">SMA-0</span>
                        <span className="text-sm text-gray-500 text-center">Initial Warning Stage</span>
                      </div>
                      <div className="hidden md:block text-gray-400">➔</div>
                      <div className="flex flex-col items-center p-4 bg-white rounded shadow flex-1 mx-2 w-full md:w-auto">
                        <span className="text-2xl font-bold text-orange-500">31-60 Days</span>
                        <span className="font-semibold mt-2">SMA-1</span>
                        <span className="text-sm text-gray-500 text-center">Escalated Stress Stage</span>
                      </div>
                      <div className="hidden md:block text-gray-400">➔</div>
                      <div className="flex flex-col items-center p-4 bg-white rounded shadow flex-1 mx-2 w-full md:w-auto">
                        <span className="text-2xl font-bold text-red-600">61-90 Days</span>
                        <span className="font-semibold mt-2">SMA-2</span>
                        <span className="text-sm text-gray-500 text-center">Critical Default Stage</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Understanding this timeline is crucial because it dictates the window of negotiation you have before the bank initiates hostile recovery measures.
                  </p>
                </section>

                <section id="sma-0" className="scroll-mt-32">
                  <h3 className="text-lg md:text-2xl font-bold text-gray-800 mb-3 mt-6">SMA-0: The Initial Warning</h3>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    An account falls into the <strong>SMA-0</strong> category if the principal or interest payment is overdue for <strong>1 to 30 days</strong>. This is the very first stage of default. 
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    During this period, the bank typically employs gentle reminders. You may receive automated SMS messages, emails, or courtesy calls from the bank's internal collections team reminding you of the missed payment. The tone is generally polite, assuming a genuine oversight or a minor, temporary cash flow issue.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    However, do not mistake this politeness for leniency. The SMA-0 tag is recorded in the bank's internal systems and, depending on the bank's reporting cycle, may be transmitted to credit bureaus like CIBIL. Late payment fees and penal interest will be applied to your account balance immediately.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    This is the ideal time to communicate with your lender if you foresee a prolonged financial crisis. Explaining a sudden job loss or a medical emergency during the SMA-0 phase sets a cooperative precedent, making it easier to negotiate a restructuring plan before the situation deteriorates.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Ignoring the bank's communications during the SMA-0 phase is a strategic error. It signals a willful intent to default, prompting the bank to quickly escalate the account to external recovery agencies once it crosses the 30-day threshold.
                  </p>
                </section>

                <section id="sma-1" className="scroll-mt-32">
                  <h3 className="text-lg md:text-2xl font-bold text-gray-800 mb-3 mt-6">SMA-1: The 30-Day Threshold</h3>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    If the overdue amount remains unpaid between <strong>31 and 60 days</strong>, the account is downgraded to the <strong>SMA-1</strong> category. 
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    At this juncture, the bank's approach shifts significantly from 'reminder' to 'recovery.' The account is typically transferred from the regular customer service team to the specialized collections department. The frequency and intensity of calls will increase, and you may receive formal written notices demanding immediate payment.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    The SMA-1 status is a clear indicator of sustained financial distress. The bank recognizes that this is no longer a simple oversight. They will actively scrutinize your account behavior and may initiate field visits by recovery agents. If you are experiencing harassment, you must know your rights regarding <Link href="/what-happens-after-bank-issues-recall-notice" className="text-[#D2A02A] hover:underline font-bold">what happens after bank issues recall notices</Link>.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Credit bureaus are definitively notified at this stage. A 30+ days overdue mark (often denoted as DPD - Days Past Due) will appear on your credit report, causing a noticeable drop in your credit score. This mark severely impairs your ability to secure fresh credit from any other financial institution.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Negotiating a resolution during the SMA-1 phase requires concrete proposals. The bank will demand proof of income and a clear timeline for clearing the dues. If you intend to request a loan restructuring, you must present a compelling, documented case demonstrating your intent and future capacity to repay.
                  </p>
                </section>

                <section id="sma-2" className="scroll-mt-32">
                  <h3 className="text-lg md:text-2xl font-bold text-gray-800 mb-3 mt-6">SMA-2: The Critical 60-Day Mark</h3>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    The <strong>SMA-2</strong> classification applies when the overdue period stretches between <strong>61 and 90 days</strong>. This is the critical, final warning stage before an account is legally declared a Non-Performing Asset.
                  </p>
                  
                  {/* Visual Implementation: Case Study */}
                  <div className="my-8 bg-green-50 border border-green-200 p-6 rounded-lg shadow-sm">
                    <h4 className="text-lg font-bold text-green-900 mb-2">Case Study: Navigating SMA-2 Successfully</h4>
                    <p className="text-sm text-gray-700 mb-2"><strong>Profile:</strong> A small business owner with a ₹15 Lakh unsecured business loan.</p>
                    <p className="text-sm text-gray-700 mb-2"><strong>Situation:</strong> Cash flow issues resulted in missing two consecutive EMIs, pushing the account to SMA-2 (65 days overdue). The bank issued a pre-NPA warning letter threatening legal action.</p>
                    <p className="text-sm text-gray-700 mb-2"><strong>Action Taken:</strong> Instead of ignoring the notices, the borrower engaged legal experts. A formal representation was made to the bank highlighting temporary distress. They proposed a restructuring plan extending the tenure to reduce the EMI burden, backed by projected revenue charts.</p>
                    <p className="text-sm text-gray-700"><strong>Outcome:</strong> The bank accepted the restructuring just 5 days before the 90-day NPA threshold. The account was regularized, avoiding legal battles and saving the borrower's business credit profile.</p>
                  </div>

                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    In the SMA-2 phase, the bank's primary objective is risk mitigation and aggressive recovery. They view the account as highly probable to default entirely. You will receive final warning notices, often drafted by the bank's legal department, explicitly stating the consequences of failing to clear the dues by the 90th day.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    If the loan is secured (e.g., a home loan or loan against property), the bank will begin preparing the groundwork for invoking the SARFAESI Act, which allows them to auction the collateral without court intervention once the account becomes an NPA. The psychological pressure applied by recovery agents reaches its peak during this period.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    A 60+ days DPD mark on your credit report is a massive red flag. It indicates severe financial instability. While a <Link href="/loan-settlement-after-npa-classification" className="text-[#D2A02A] hover:underline font-bold">loan settlement after NPA classification</Link> is possible, negotiating a settlement during the SMA-2 phase is often more advantageous as the bank is eager to prevent the account from adding to their gross NPA metrics.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    If you reach SMA-2, it is highly advisable to seek professional financial or legal counsel immediately. The window for amicable resolution is closing rapidly, and expert intervention is often required to halt the impending legal machinery and negotiate a feasible exit strategy.
                  </p>
                </section>

                <section id="credit-impact" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">How SMA Status Impacts Your Credit Report</h2>
                  
                  {/* Visual Implementation: Myth vs Fact */}
                  <div className="my-8 bg-purple-50 p-6 rounded-lg shadow-sm border border-purple-200">
                    <h4 className="text-lg font-bold text-purple-900 mb-4">Myth vs Fact: SMA and Credit Scores</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded shadow">
                        <strong className="text-red-600 block mb-2">Myth:</strong>
                        <p className="text-sm text-gray-700">The bank only reports my default to CIBIL after 90 days when it becomes an NPA.</p>
                      </div>
                      <div className="bg-white p-4 rounded shadow">
                        <strong className="text-green-600 block mb-2">Fact:</strong>
                        <p className="text-sm text-gray-700">Banks report data monthly. Even an SMA-0 (1 day late) can be reported and will reflect as a delayed payment on your credit report immediately.</p>
                      </div>
                      <div className="bg-white p-4 rounded shadow">
                        <strong className="text-red-600 block mb-2">Myth:</strong>
                        <p className="text-sm text-gray-700">If I pay the overdue amount, the SMA history is erased from my credit file.</p>
                      </div>
                      <div className="bg-white p-4 rounded shadow">
                        <strong className="text-green-600 block mb-2">Fact:</strong>
                        <p className="text-sm text-gray-700">Paying clears the current overdue status, but the historical record of the late payment (Days Past Due) remains visible on your report for up to 7 years.</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    The relationship between SMA classification and your credit report is direct and unforgiving. Credit bureaus like CIBIL, Experian, and Equifax rely on the monthly data submissions from banks, which include your account's exact DPD (Days Past Due) status.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    A single instance of SMA-0 might cause a minor dip in your score, perhaps 10 to 20 points, depending on your overall credit history. However, as the account progresses to SMA-1 and SMA-2, the damage multiplies exponentially. A 60+ DPD mark signifies high risk, and your score will plummet, effectively locking you out of the organized credit market.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Future lenders scrutinize the DPD matrix closely. A history showing frequent slips into SMA-1 or SMA-2, even if eventually cleared, brands you as a chronic late payer. This history results in loan rejections or approvals at exorbitant interest rates, as lenders price in the risk associated with your erratic payment behavior.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Furthermore, an unresolved SMA-2 leading to an NPA status is catastrophic for your financial profile. To mitigate this, borrowers must prioritize clearing the minimum overdue amounts to reset the classification clock, even if paying the full EMI is challenging.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    If you are already deep in the SMA timeline, you must weigh the impact of continuing to default versus opting for a formal loan settlement. While a settlement also negatively impacts your score (showing as "Settled" rather than "Closed"), it halts the continuous accumulation of negative DPD marks and stops the relentless harassment from recovery agents.
                  </p>
                </section>

                <section id="strategies" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Strategies to Resolve SMA Classification</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Resolving an SMA classification requires proactive communication, financial discipline, and a clear understanding of the bank's internal processes. The worst strategy is avoidance.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    <strong>1. Immediate Communication:</strong> As soon as you anticipate a payment delay or receive an SMA-0 alert, contact your branch manager or the bank's customer service. Explain the reason for the delay logically-whether it's a medical emergency, a delayed salary, or a business downturn. Request a short grace period. While banks cannot alter the automated SMA flagging, a documented conversation on file often delays aggressive recovery tactics.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    <strong>2. Liquidate Assets:</strong> If the financial crunch is severe, consider liquidating low-yielding investments like fixed deposits, mutual funds, or gold to clear the overdue EMIs. The penal interest charged by the bank during the SMA phase often far exceeds the returns generated by these investments. Clearing the overdue amount immediately pulls the account out of the SMA category and restores its standard status.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    <strong>3. Balance Transfer or Debt Consolidation:</strong> If you are struggling with a high-interest personal loan or credit card debt, explore a balance transfer to a lender offering a lower interest rate, provided your credit score has not yet been severely damaged by SMA-1 or SMA-2 reporting. Alternatively, a debt consolidation loan can merge multiple EMI obligations into a single, smaller monthly payment, reducing the immediate cash flow burden.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    <strong>4. Prioritize Secured Debts:</strong> If you have multiple loans and limited funds, always prioritize clearing the EMIs of secured loans (like home or auto loans) to prevent the loss of your physical assets. Unsecured loans (like personal loans and credit cards) should take secondary priority, as the bank's recourse is limited to legal notices and credit score damage, rather than immediate asset seizure.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    <strong>5. Seek Professional Intervention:</strong> If you have reached the SMA-2 stage and face imminent NPA classification, dealing with the bank's recovery department independently can be overwhelming and legally perilous. Engaging legal professionals who specialize in debt management ensures your rights are protected against coercive recovery tactics and provides a buffer between you and the bank's aggressive agents.
                  </p>
                </section>

                <section id="restructuring" className="scroll-mt-32">
                  <h3 className="text-lg md:text-2xl font-bold text-gray-800 mb-3 mt-6">Restructuring and Settlement Options</h3>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    If liquidating assets or consolidating debt is not feasible, you must formally approach the bank for restructuring or settlement. These are specialized processes governed by RBI guidelines, and banks evaluate them on a case-by-case basis.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    <strong>Loan Restructuring:</strong> This involves modifying the original terms of the loan agreement to make the EMIs affordable. You can request the bank to extend the tenure of the loan, which automatically reduces the monthly EMI amount. Alternatively, you can request a temporary moratorium (a pause on EMI payments) for a few months until your financial situation stabilizes, though interest will continue to accrue. Restructuring must usually be negotiated before the account turns NPA, making the SMA-1 and SMA-2 phases critical for this strategy.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    <strong>One-Time Settlement (OTS):</strong> If your financial distress is permanent (e.g., severe business failure or permanent disability) and you cannot afford even restructured EMIs, a One-Time Settlement is the final recourse. In an OTS, you offer to pay a lump sum amount that is substantially lower than the total outstanding balance. The bank agrees to write off the remainder of the debt.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Banks generally entertain settlement offers only when the account is deep into SMA-2 or has already become an NPA, as they prefer recovering a portion of the bad debt over engaging in prolonged, expensive litigation. It is highly recommended to use expert legal counsel when negotiating a settlement to ensure the bank issues a legally binding 'No Dues Certificate' and updates the credit bureaus correctly, preventing future claims.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Remember, while a settlement provides immense relief from unmanageable debt and harassment, it will reflect on your CIBIL report for seven years, signaling to future lenders that you did not fulfill your original financial obligations in full.
                  </p>
                </section>

                <section id="faq" className="scroll-mt-32 border-t pt-8">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Frequently Asked Questions</h2>
                  
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">What is the meaning of SMA in banking?</h3>
                      <p className="text-gray-700">SMA stands for Special Mention Account. It is an RBI classification system used by banks to identify accounts that are showing signs of stress or potential default before they become Non-Performing Assets (NPAs).</p>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Does SMA-0 affect my CIBIL score?</h3>
                      <p className="text-gray-700">Yes, even an SMA-0 classification is reported to credit bureaus. It shows up as a slight delay in your credit history, which can marginally lower your score and act as a red flag to future lenders.</p>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">How is SMA different from NPA?</h3>
                      <p className="text-gray-700">An SMA is a warning stage indicating a delay in repayment between 1 and 90 days. An account is only classified as an NPA (Non-Performing Asset) when the overdue period exceeds 90 days.</p>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Can I negotiate a settlement during the SMA phase?</h3>
                      <p className="text-gray-700">Yes, the SMA phase is often the best time to negotiate a restructuring or settlement plan with your lender, as the account has not yet been classified as a total loss (NPA).</p>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">What happens if my account reaches SMA-2?</h3>
                      <p className="text-gray-700">Reaching SMA-2 (61-90 days overdue) is a critical stage. The bank will intensify recovery efforts and may issue formal notices warning of imminent NPA classification and subsequent legal actions.</p>
                    </div>
                  </div>
                </section>

                <section id="reviews" className="scroll-mt-32 border-t pt-8">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Client Success Stories</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-[#1a202c] text-white p-6 rounded-xl shadow-md">
                      <div className="flex text-[#D2A02A] mb-3">★★★★★</div>
                      <p className="text-gray-300 text-sm mb-4">"My loan was classified as SMA-2, and the bank was threatening immediate legal action. AMA Legal Solutions stepped in and negotiated a brilliant settlement plan right before it turned into an NPA."</p>
                      <p className="font-bold text-sm"> Suresh Gupta</p>
                    </div>
                    <div className="bg-[#1a202c] text-white p-6 rounded-xl shadow-md">
                      <div className="flex text-[#D2A02A] mb-3">★★★★☆</div>
                      <p className="text-gray-300 text-sm mb-4">"Clear guidance on my SMA status. I didn't even know what SMA-0 meant until their team explained the RBI guidelines to me and helped me restructure my debt effectively."</p>
                      <p className="font-bold text-sm"> Ramesh Iyer</p>
                    </div>
                    <div className="bg-[#1a202c] text-white p-6 rounded-xl shadow-md">
                      <div className="flex text-[#D2A02A] mb-3">★★★★★</div>
                      <p className="text-gray-300 text-sm mb-4">"Professional and fast. They managed my communication with the bank during the critical SMA-1 phase and prevented my credit report from being completely ruined."</p>
                      <p className="font-bold text-sm"> Neha Sharma</p>
                    </div>
                  </div>
                </section>

              </div>
            </div>

            <aside className="hidden lg:block sticky top-24">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
                <Image 
                  src="/anujbhiya.png" 
                  alt="Anuj Anand Malik - Legal Expert" 
                  width={150} 
                  height={150} 
                  className="rounded-full mx-auto mb-4 border-4 border-[#fcf8f2]"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Anuj Anand Malik</h3>
                <p className="text-sm text-[#D2A02A] font-semibold mb-4">Legal Strategy Expert</p>
                <p className="text-sm text-gray-600 mb-6">Specializing in debt settlement, banking disputes, and protecting borrower rights under RBI guidelines.</p>
                <Link href="/contact" className="block w-full bg-[#1a202c] hover:bg-gray-800 text-white font-bold py-3 px-4 rounded-xl transition-colors text-sm">
                  Consult Anuj
                </Link>
              </div>
            </aside>
          </div>
        </article>
      </main>
    </>
  );
}
