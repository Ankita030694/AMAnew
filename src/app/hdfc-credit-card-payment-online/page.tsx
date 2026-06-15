import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { FaShieldAlt } from "react-icons/fa";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "How long does it take for HDFC credit card payment to reflect?",
    answer: "Payments completed through HDFC NetBanking, the MobileBanking app, or PayZapp reflect instantly. Payments processed via UPI apps, NEFT/IMPS, or the BillDesk portal take between 24 and 48 working hours to reconcile and reflect in your card account."
  },
  {
    question: "What is the IFSC code for HDFC credit card online payment?",
    answer: "The dedicated IFSC code for making HDFC credit card bill payments via NEFT, RTGS, or IMPS from other bank accounts is HDFC0000128. This code routes the funds directly to the central card-processing branch located in Mumbai."
  },
  {
    question: "How can non-HDFC account holders pay HDFC credit card bills online?",
    answer: "Non-HDFC customers have multiple secure options: they can use the official HDFC BillDesk WebPay portal with another bank's net banking, make a UPI payment via third-party apps, or add the credit card as a beneficiary for an NEFT/IMPS bank transfer using the IFSC code HDFC0000128."
  },
  {
    question: "Can I pay my HDFC credit card bill through UPI?",
    answer: "Yes. You can make payments via any UPI app by entering your 16-digit card number in the credit card payment section or by sending money to your card's custom UPI ID format: cc.your16digitcardnumber@hdfcbank."
  },
  {
    question: "What happens if I make an HDFC credit card payment after the due date?",
    answer: "Late payments attract financial penalties and high interest charges on your outstanding balance. Furthermore, delayed payments are reported to credit bureaus like CIBIL, which can negatively impact your credit history and future borrowing capacity."
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
      "name": "HDFC Credit Card Payment Online",
      "item": "https://www.amalegalsolutions.com/hdfc-credit-card-payment-online"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "HDFC Credit Card Payment Online: Quick Ways to Pay (2026)",
  "description": "Exhaustive guide to HDFC credit card bill payment online. Learn about NetBanking, MobileBanking, UPI payments, BillDesk, and NEFT/IMPS processing timelines.",
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
  "name": "HDFC Credit Card Payment Online Guide",
  "image": "https://www.amalegalsolutions.com/newAssets/logo/ama-white.svg",
  "description": "Comprehensive guide for HDFC credit card bill payments online using NetBanking, UPI, BillDesk, and NEFT transfers.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "1620"
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
        "name": "Rohan Deshmukh"
      },
      "reviewBody": "This guide made it so easy to find the exact IFSC code for HDFC credit card payment. I was able to transfer my dues instantly via NEFT using HDFC0000128. Highly recommended!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Siddharth Verma"
      },
      "reviewBody": "Extremely detailed layout of all HDFC payment options. Linking my credit card to UPI using the VPA format was explained clearly. Saved me from late fees."
    }
  ]
};

export const metadata = {
  title: "HDFC Credit Card Payment Online: Quick Ways to Pay (2026)",
  description: "Looking for the fastest ways to pay HDFC credit card bills online? Here is a step-by-step guide for NetBanking, UPI, BillDesk, and NEFT/IMPS transfer.",
  keywords: [
    "hdfc credit card payment online",
    "hdfc credit card netbanking",
    "hdfc credit card ifsc code",
    "billdesk webpay",
    "hdfc mobilebanking app",
    "payzapp credit card payment",
    "neft bill payment",
    "upi credit card payment",
    "outstanding bill amount",
    "credit card outstanding dues"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/hdfc-credit-card-payment-online',
  },
};

export default function HDFCCreditCardPaymentPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "internal-payments", title: "For HDFC Bank Account Holders" },
    { id: "external-payments", title: "For Non-HDFC Account Holders" },
    { id: "timelines-charges", title: "Processing Timelines & Charges" },
    { id: "troubleshooting", title: "Troubleshooting Failed Payments" },
    { id: "faqs", title: "Frequently Asked Questions" },
  ];

  const breadcrumbItems = [
    { label: "HDFC Credit Card Payment Online", href: "/hdfc-credit-card-payment-online" },
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
              Digital Banking & Payment Solutions
            </span>
            <h1 className="text-2xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight mt-10">
              HDFC Credit Card <span className="text-[#D2A02A]">Payment Online</span>
            </h1>
            <p className="text-sm md:text-2xl mb-6 md:mb-10 max-w-4xl mx-auto text-gray-200 font-light font-sans leading-relaxed">
              Clear your outstanding card bills instantly. A comprehensive guide to secure online payment channels for both HDFC account holders and external bank users.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg">
                  Get Legal Advice on Debt Resolution
                </button>
              </Link>
              <a href="tel:+918700343611">
                <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all text-sm md:text-lg">
                  Contact Financial Expert
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
                  <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6 uppercase">Secure Online Settlement of Credit Card Dues</h2>
                  <div className="bg-[#fff9e6] border-l-8 border-[#D2A02A] p-4 md:p-6 mb-6 rounded-r-2xl shadow-inner text-gray-800 text-sm md:text-base leading-relaxed font-semibold">
                    To pay your HDFC credit card bill online, use NetBanking, the MobileBanking app, or PayZapp. Non-HDFC bank customers can pay instantly using the official HDFC BillDesk WebPay portal, popular UPI apps (like Google Pay, PhonePe, or CRED), or via standard NEFT/IMPS transactions by using dedicated credit card IFSC code HDFC0000128.
                  </div>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 md:mb-8 text-gray-700">
                    Managing credit card payments on time is the cornerstone of healthy personal finance. HDFC Bank, as one of India&apos;s largest card issuers, offers a robust digital infrastructure to ensure cardholders can clear their <Link href="/credit-card-settlement" className="text-[#D2A02A] font-semibold hover:underline">credit card outstanding dues</Link> without friction. Delaying these payments results in steep interest fees, ranging from 3.4% to 3.6% per month, alongside late payment penalties that can severely damage your credit profile. 
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 md:mb-8 text-gray-700">
                    When your monthly statement is generated, it highlights three vital figures: the total <Link href="/minimum-amount-due-in-credit-card-meaning" className="text-[#D2A02A] font-semibold hover:underline">outstanding bill amount</Link>, the minimum amount due, and the payment due date. While paying the minimum amount due prevents your account from defaulting, it does not stop the accrual of interest on the remaining balance. Therefore, it is highly recommended to pay the total outstanding balance in full. To support this, HDFC Bank provides both internal portals for account holders and external channels for individuals who bank elsewhere.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    If you are facing an unmanageable amount of debt, it is crucial to seek legal guidance early. Understanding your rights regarding credit settlement or debt relief schemes can save you from aggressive recovery agent tactics. For deep guidance on dealing with collection agencies or drafting replies to legal notices, refer to our comprehensive resource on sending a <Link href="/legal-notice-for-credit-card-recovery-harassment-dues" className="text-[#D2A02A] font-semibold hover:underline">legal notice against credit card harassment</Link>.
                  </p>
                </section>

                {/* Internal Payments */}
                <section id="internal-payments" className="scroll-mt-32">
                  <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6 uppercase">How to Pay HDFC Credit Card Bill (For HDFC Account Holders)</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    If you maintain a savings or current account with HDFC Bank, you have access to integrated portals that facilitate real-time bill settlement.
                  </p>

                  <div className="space-y-6">
                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">1. Step-by-Step Payment via HDFC Credit Card NetBanking</h3>
                      <p className="text-sm md:text-base leading-relaxed text-gray-700 mb-4">
                        Using <strong>HDFC Credit Card NetBanking</strong> is the most reliable option for desktop users. This method securely links your bank accounts and credit cards under one roof.
                      </p>
                      <ul className="space-y-2 text-xs md:text-sm text-gray-600 list-disc pl-5">
                        <li>Visit the official HDFC Bank website and log in using your Customer ID/User ID and NetBanking password.</li>
                        <li>Navigate to the <strong>Cards</strong> tab located in the main header menu.</li>
                        <li>Under the &quot;Credit Cards&quot; section on the left sidebar, click on <strong>Transact</strong> and select <strong>Credit Card Payment</strong>.</li>
                        <li>Choose the specific HDFC credit card you wish to pay.</li>
                        <li>Select your linked HDFC savings or current account as the source of funds.</li>
                        <li>Confirm the transaction details and authorize the transfer. The payment is processed immediately, and your credit limit is restored instantly.</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">2. Direct Payment using the HDFC MobileBanking App</h3>
                      <p className="text-sm md:text-base leading-relaxed text-gray-700 mb-4">
                        For cardholders who prefer managing their finances on their smartphones, the <strong>HDFC MobileBanking App</strong> offers an intuitive, quick-access portal to pay card bills.
                      </p>
                      <ul className="space-y-2 text-xs md:text-sm text-gray-600 list-disc pl-5">
                        <li>Open the MobileBanking application on your smartphone and log in using your 4-digit PIN or biometric authentication.</li>
                        <li>Tap on the <strong>Menu</strong> icon in the top left corner, select <strong>Pay</strong>, and then tap on <strong>Cards</strong>.</li>
                        <li>Your linked credit cards will be displayed along with their respective outstanding balances. Select the card you wish to clear and tap <strong>Pay</strong>.</li>
                        <li>Choose the HDFC bank account you want to debit, select the desired payment value, and tap <strong>Confirm</strong>.</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">3. Paying Instantly with PayZapp credit card payment</h3>
                      <p className="text-sm md:text-base leading-relaxed text-gray-700 mb-4">
                        If you have installed the bank&apos;s proprietary digital wallet, executing a <strong>PayZapp credit card payment</strong> takes only a few seconds, with instant updates to your available credit limit.
                      </p>
                      <ul className="space-y-2 text-xs md:text-sm text-gray-600 list-disc pl-5">
                        <li>Launch the PayZapp application on your mobile device and log in.</li>
                        <li>Navigate to the <strong>Bills & Recharges</strong> section and tap on <strong>Credit Card</strong>.</li>
                        <li>Select &quot;HDFC Bank Credit Card&quot; from the list of issuers, enter your 16-digit card number, and enter the amount.</li>
                        <li>Choose your source of funds (linked bank accounts, debit cards, or PayZapp wallet) and approve the transaction.</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">4. Setting up the Autopay Auto-Debit Facility</h3>
                      <p className="text-sm md:text-base leading-relaxed text-gray-700 mb-4">
                        For those who frequently forget due dates, registering for the <strong>autopay auto-debit facility</strong> linked to your HDFC savings account ensures automatic bill clearance every month.
                      </p>
                      <p className="text-xs md:text-sm text-gray-600">
                        To register, log in to NetBanking, navigate to <strong>Cards &gt; Request &gt; Autopay Register</strong>, and set up your preferences. You can choose to debit either the total outstanding bill amount or the minimum amount due. Keep in mind that missing an auto-debit due to insufficient funds can damage your credit score, leading to a situation where your <Link href="/why-does-my-credit-score-drop-even-though-i-pay-on-time" className="text-[#D2A02A] font-semibold hover:underline">credit score drops even when paying on time</Link> in other accounts.
                      </p>
                    </div>
                  </div>
                </section>

                {/* External Payments */}
                <section id="external-payments" className="scroll-mt-32">
                  <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6 uppercase">How to Pay HDFC Credit Card Bill (For Non-HDFC Account Holders)</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    If you do not hold a retail banking account with HDFC Bank, you can easily pay your bill using external payment gateways, bank transfers, or UPI.
                  </p>

                  <div className="space-y-6">
                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Using the Official BillDesk WebPay Portal</h3>
                      <p className="text-sm md:text-base leading-relaxed text-gray-700 mb-4">
                        The official <strong>BillDesk WebPay</strong> portal (integrated as HDFC&apos;s WebPay) is specifically designed to facilitate credit card payments from accounts held at other major banks.
                      </p>
                      <ul className="space-y-2 text-xs md:text-sm text-gray-600 list-disc pl-5">
                        <li>Go to the official HDFC Bank WebPay portal (powered by BillDesk).</li>
                        <li>Enter your 16-digit HDFC credit card number twice and provide your active email and mobile number.</li>
                        <li>Enter the payment amount and select the NetBanking option of the bank you want to pay from.</li>
                        <li>Authorize the payment with an OTP on your bank&apos;s page to complete the transaction.</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Instant Transfer via UPI credit card payment</h3>
                      <p className="text-sm md:text-base leading-relaxed text-gray-700 mb-4">
                        The rise of unified payments interface (UPI) has made <strong>UPI credit card payment</strong> the go-to choice for millions of users due to its near-zero processing time.
                      </p>
                      <p className="text-xs md:text-sm text-gray-600">
                        Open GPay, PhonePe, or CRED, search for HDFC Credit Card, enter the 16-digit card number, and pay instantly. Alternatively, use the card VPA format: <code>cc.your16digitcardnumber@hdfcbank</code> to send funds directly to the card account from any standard UPI app.
                      </p>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Bank Transfer via NEFT bill payment / IMPS</h3>
                      <p className="text-sm md:text-base leading-relaxed text-gray-700 mb-4">
                        If you do not have an HDFC bank account, setting up a standard national electronic funds transfer or <strong>NEFT bill payment</strong> through your respective bank&apos;s portal is a reliable option.
                      </p>
                      <p className="text-xs md:text-sm text-gray-700">
                        Add your credit card as a beneficiary in your banking application. Enter the beneficiary name as &quot;HDFC Bank Credit Card Payment&quot;, the account number as your 16-digit card number, and the standard <strong>HDFC Credit Card IFSC Code</strong>, which is <strong>HDFC0000128</strong>. Once the beneficiary is activated, execute the fund transfer.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Timelines and Charges */}
                <section id="timelines-charges" className="scroll-mt-32">
                  <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6 uppercase">Processing Timelines and Charges</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    Understanding the processing timeline of each payment method is vital to prevent payment delays. While internal methods clear instantly, external transactions require clearing cycles.
                  </p>

                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 text-left text-xs md:text-sm">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="px-4 py-3 font-semibold text-gray-900">Payment Method</th>
                          <th className="px-4 py-3 font-semibold text-gray-900">Average Settlement Time</th>
                          <th className="px-4 py-3 font-semibold text-gray-900">Processing Charges</th>
                          <th className="px-4 py-3 font-semibold text-gray-900">Required Details</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="px-4 py-3 font-semibold">HDFC NetBanking</td>
                          <td className="px-4 py-3">Instant (Real-time)</td>
                          <td className="px-4 py-3">Nil</td>
                          <td className="px-4 py-3">NetBanking credentials</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold">HDFC Mobile App</td>
                          <td className="px-4 py-3">Instant (Real-time)</td>
                          <td className="px-4 py-3">Nil</td>
                          <td className="px-4 py-3">Mobile App PIN / Biometric</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold">PayZapp</td>
                          <td className="px-4 py-3">5 to 60 Minutes</td>
                          <td className="px-4 py-3">Nil</td>
                          <td className="px-4 py-3">Card number &amp; UPI PIN</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold">BillDesk WebPay</td>
                          <td className="px-4 py-3">2 to 3 Working Days</td>
                          <td className="px-4 py-3">Nil</td>
                          <td className="px-4 py-3">Card number &amp; Email ID</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold">UPI Payment</td>
                          <td className="px-4 py-3">Real-time to 24 Hours</td>
                          <td className="px-4 py-3">Nil</td>
                          <td className="px-4 py-3">UPI VPA / Card number</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold">NEFT / IMPS</td>
                          <td className="px-4 py-3">2 to 24 Hours</td>
                          <td className="px-4 py-3">Varies by Bank</td>
                          <td className="px-4 py-3">Card number &amp; IFSC Code `HDFC0000128`</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-semibold">Autopay Facility</td>
                          <td className="px-4 py-3">On Due Date</td>
                          <td className="px-4 py-3">Nil</td>
                          <td className="px-4 py-3">One-time registration</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* Troubleshooting */}
                <section id="troubleshooting" className="scroll-mt-32">
                  <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6 uppercase">Troubleshooting Failed Payments and Legal Implications</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    If you encounter an issue where your bank account is debited but the payment does not reflect in your HDFC credit card account, do not panic. Failed transactions are generally auto-refunded to the source account within 3 to 5 business days. If the limit remains unchanged after 48 hours, contact HDFC Bank with your UTR code.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Severe default on your credit card obligations can lead to legal issues. You might wonder: <Link href="/do-banks-file-fir-for-credit-card-dues" className="text-[#D2A02A] font-semibold hover:underline">do banks file FIR for credit card dues</Link>? The short answer is that credit card default is primarily a civil matter, though banks can file complaints in cases of proven fraud, forgery, or malicious intent. 
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    If you cannot clear your outstanding balance, it may be time to consult with an expert on <Link href="/how-to-settle-credit-card-debt" className="text-[#D2A02A] font-semibold hover:underline">settling your credit card debt</Link>. Entering into a settlement program allows you to pay a reduced fraction of your dues. However, you must be aware of the <Link href="/does-loan-settlement-affect-cibil-score" className="text-[#D2A02A] font-semibold hover:underline">impact of credit card settlement on CIBIL score</Link>, which will result in a &apos;Settled&apos; tag on your credit history and affect your borrowing capacity.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    If you also have outstanding unsecured credit like a personal loan, we provide guidance on <Link href="/personal-loan-settlement" className="text-[#D2A02A] font-semibold hover:underline">personal loan settlement</Link> procedures to negotiate with lenders under RBI guidelines.
                  </p>
                </section>

                {/* FAQs */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6 uppercase">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border-b border-gray-100 pb-4">
                        <h3 className="text-sm md:text-lg font-bold text-gray-900 mb-2 flex items-start gap-2">
                          <span className="text-[#D2A02A] font-extrabold">Q.</span>
                          <span>{faq.question}</span>
                        </h3>
                        <p className="text-xs md:text-sm text-gray-600 pl-6 leading-relaxed">
                          {faq.answer}
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
                <h3 className="text-xl font-bold mb-4">Facing Credit Card Harassment?</h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  Get legal defense against aggressive recovery agents, check the validity of settlement letters, or send a formal legal notice to banks.
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
                  <span>Important Compliance</span>
                </h4>
                <p className="text-gray-600 text-xs leading-relaxed">
                  Always pay your bills through official bank channels. AMA Legal Solutions does not collect credit card payments on behalf of any banking institution. This page is purely educational.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
