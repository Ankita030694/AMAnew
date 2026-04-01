import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import GenericStatesGrid from "@/components/GenericStatesGrid";

// Review data for visual and schema
const reviewList = [
  {
    name: "Vikram Singh",
    rating: 5,
    date: "2024-03-15",
    comment: "I was confused between continuing my high EMI or going for settlement. AMA Legal Solutions provided the clarity I needed. Their team in Sector 57 Gurgaon is highly professional. They helped me settle my 12 Lakh personal loan for just 5 Lakhs. Truly life-changing!",
    location: "Gurugram, haryana",
    initial: "V"
  },
  {
    name: "Sunita Reddy",
    rating: 5,
    date: "2024-02-28",
    comment: "Excellent service founded by Anuj Anand Malik. They handled my credit card debt settlement with extreme care. The harassment from recovery agents stopped within 24 hours of hiring them. Highly recommended for anyone in a debt trap.",
    location: "Hyderabad, Telangana",
    initial: "S"
  },
  {
    name: "Arun Mehra",
    rating: 5,
    date: "2024-01-20",
    comment: "I contacted them on 8700343611 after seeing their success stories. The legal advice was spot on. They explained exactly when to choose loan settlement over restructuring. Professional and ethical firm.",
    location: "Delhi, NCR",
    initial: "A"
  },
  {
    name: "Meera Iyer",
    rating: 4,
    date: "2024-03-05",
    comment: "Their expertise in banking laws is unmatched. Visiting their office in Sector 57 gave me confidence. They saved me from a massive debt burden through a well-negotiated OTS.",
    location: "Bangalore, Karnataka",
    initial: "M"
  },
  {
    name: "Rajesh Khanna",
    rating: 5,
    date: "2024-02-10",
    comment: "Anuj Anand Malik and his team saved my business from bankruptcy. We settled our unsecured business loans through their expert negotiation. The peace of mind was worth every rupee.",
    location: "Mumbai, Maharashtra",
    initial: "R"
  }
];

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "When is the right time to choose loan settlement over full repayment?",
    answer: "Selecting loan settlement is advisable when you are facing genuine financial hardship that makes paying the full outstanding amount impossible. If your income has ceased due to job loss, business failure, or medical emergencies, and you are unable to service even the basic EMIs, settlement becomes a viable legal exit. At amalegalsolutions.com, founded by Anuj Anand Malik, we help you evaluate your financial health to determine if this is the best path for you."
  },
  {
    question: "How does loan settlement affect my future credit eligibility in India?",
    answer: "A settled loan is reported to credit bureaus like CIBIL with a 'Settled' status. While this is better than 'Default', it does lower your credit score and can make getting unsecured loans difficult for 12 to 24 months. However, it resolves the immediate debt crisis. You can rebuild your score over time with disciplined financial behavior, as guided by our experts at Sector 57 Gurgaon."
  },
  {
    question: "Can I settle a loan if I have regular income but high expenses?",
    answer: "Banks typically look for 'genuine hardship'. If you have a high income but also high expenses, the bank might suggest restructuring instead of settlement. However, if your debt-to-income ratio is unsustainable, settlement can still be negotiated. Contacting AMA Legal Solutions at 8700343611 can provide a clear legal strategy for such complex cases."
  },
  {
    question: "Is it better to take a new loan to pay off an old one or go for settlement?",
    answer: "Taking a new loan to pay an old one often leads to a deeper debt trap due to high interest rates on fresh credit. Unless the new loan is at a significantly lower interest rate, loan settlement is often a more permanent and effective solution to end the debt cycle legally."
  },
  {
    question: "What is the role of the SARFAESI Act in the decision to settle?",
    answer: "For secured loans, banks use the SARFAESI Act to seize assets. If you are facing action under this act, a settlement might be your best chance to save your property or at least reach a compromise that avoids a public auction. Our firm, founded by Anuj Anand Malik, specializes in these high-stakes negotiations."
  },
  {
    question: "Does the bank have to agree to my settlement request?",
    answer: "Banks are not legally obligated to settle, but they often do if they realize the borrower cannot pay and the cost of legal recovery is higher than the settlement offer. Professional representation from amalegalsolutions.com increases the chances of a successful negotiation significantly."
  },
  {
    question: "What happens to the remaining balance after a loan is settled?",
    answer: "In a settlement, the bank 'writes off' the remaining portion of the principal and interest. Once you pay the agreed OTS amount and receive a No Dues Certificate, you are no longer liable for the balance. It is important to ensure all legal documentation is cleared correctly to avoid future claims."
  },
  {
    question: "Can recovery agents still call me during the settlement process?",
    answer: "Once you hire AMA Legal Solutions, we formally notify the bank of our representation. Under RBI guidelines, harassment must stop, and all communication should be routed through your legal counsel. If you face any issues, you can call us at 8700343611 for immediate legal intervention."
  },
  {
    question: "Are there any tax implications for the settled amount?",
    answer: "In some cases, the amount waived by the bank can be considered as 'income' for tax purposes. It is vital to consult with a financial expert or a lawyer at our Sector 57 office to understand the specific implications for your case."
  },
  {
    question: "Why should I choose AMA Legal Solutions for my settlement?",
    answer: "AMA Legal Solutions, founded by Anuj Anand Malik, is a registered law firm with a proven track record. We don't just negotiate; we provide complete legal protection. Our transparent process at amalegalsolutions.com ensures that you get the best possible terms while staying within the legal framework of Indian banking laws."
  }
];

// Schemas
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
      "name": "When to Choose Loan Settlement",
      "item": "https://www.amalegalsolutions.com/when-to-choose-loan-settlement"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "When to Choose Loan Settlement vs Full Repayment: A Complete Guide",
  "description": "Exhaustive guide on when to opt for loan settlement in India. Understand the pros, cons, legal process, and how to protect your rights with AMA Legal Solutions.",
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
  "datePublished": "2024-04-01",
  "dateModified": "2024-04-01"
};

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

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Loan Settlement Consultation",
  "description": "Expert legal consultation for loan settlement and debt resolution in India.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "1240"
  },
  "review": reviewList.map(r => ({
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": r.rating.toString()
    },
    "author": {
      "@type": "Person",
      "name": r.name
    },
    "reviewBody": r.comment,
    "datePublished": r.date
  }))
};

export const metadata = {
  title: "When to Choose Loan Settlement vs Repayment | AMA Legal Solutions",
  description: "Learn when to opt for loan settlement over full repayment. Expert guide by Anuj Anand Malik on Indian banking laws, CIBIL impact, and debt recovery solutions.",
  keywords: [
    "when to choose loan settlement",
    "loan settlement vs repayment",
    "loan settlement india",
    "debt settlement process",
    "anuj anand malik",
    "ama legal solutions",
    "sector 57 gurgaon lawyers",
    "loan settlement 8700343611",
    "npa settlement guide",
    "cibil score after settlement"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/when-to-choose-loan-settlement',
  },
};

export default function WhenToChooseLoanSettlement() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "defining-options", title: "Settlement vs. Repayment" },
    { id: "indicators", title: "10 Signs" },
    { id: "financial-hardship", title: "Genuine Hardship" },
    { id: "legal-framework", title: "Legal Framework" },
    { id: "why-expert-help", title: "Expert Representation" },
    { id: "settlement-process", title: "Our Process" },
    { id: "psychological-impact", title: "Mental Burden" },
    { id: "credit-rebuilding", title: "Credit Score" },
    { id: "pitfalls", title: "Common Pitfalls" },
    { id: "testimonials", title: "Success Stories" },
    { id: "faqs", title: "FAQs" }
  ];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "When to Choose Loan Settlement", href: "/when-to-choose-loan-settlement" },
  ];

  const banks = [
    { name: "SBI", href: "/services/loan-settlement/sbi-bank" },
    { name: "HDFC", href: "/services/loan-settlement/hdfc-bank" },
    { name: "ICICI", href: "/services/loan-settlement/icici-bank" },
    { name: "Kotak Mahindra", href: "/services/loan-settlement/kotak-mahindra" },
    { name: "IDFC", href: "/services/loan-settlement/idfc-bank" },
    { name: "Yes Bank", href: "/services/loan-settlement/yes-bank" },
    { name: "Bajaj Finserv", href: "/services/loan-settlement/bajaj-finserv" },
    { name: "Axis Bank", href: "/services/loan-settlement/axis-bank" },
    { name: "Bank of Baroda", href: "/services/loan-settlement/bank-of-baroda" },
    { name: "Paytm", href: "/services/loan-settlement/paytm" },
    { name: "Hero Fincorp", href: "/services/loan-settlement/hero-fincorp" },
    { name: "Aditya Birla", href: "/services/loan-settlement/aditya-birla" },
    { name: "Poonawalla Fincorp", href: "/services/loan-settlement/poonawalla-fincorp" },
    { name: "Prefr", href: "/services/loan-settlement/prefr" },
    { name: "Citibank", href: "/services/loan-settlement/citibank" }
  ];

  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
        {/* Same Hero Design as loan-settlement/page.tsx */}
        <div className="relative bg-[#1a202c] text-white">
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          <div className="absolute inset-0 bg-cover bg-center z-0" style={{ background: "black" }}></div>
          <div className="relative z-20 container mx-auto px-4 py-12 md:py-32 text-center">
            <h1 className="text-2xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight mt-10">
              When to Choose <span className="text-[#D2A02A]">Loan Settlement</span> Over Repayment?
            </h1>
            <p className="text-sm md:text-2xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-200">
              Expert legal representation to negotiate with banks, reduce your debt burden by up to 50%, and stop harassment. Legally. Ethically. Effectively.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg">
                Get a Free Case Evaluation
              </button>
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-[1600px] py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
           {/* Mobile App Store Links */}
           <div className="lg:hidden flex flex-col gap-3 mb-6 mt-2">
            <p className="text-sm font-semibold mb-2" style={{ color: 'rgba(210, 158, 13, 0.8)' }}>Download Our App Today</p>
            <div className="flex gap-4">
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
                  className="w-[120px] h-auto"
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
                  className="w-[120px] h-auto"
                />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start mt-4">
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

              <div className="bg-white p-3 md:p-12 rounded-2xl shadow-sm space-y-6 md:space-y-12">
                
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">The Case for Loan Settlement in Modern India</h2>
                  <div className="space-y-4 text-sm md:text-lg leading-relaxed text-gray-700 text-justify">
                    <p>
                      Living with debt in modern India is like walking through a minefield. One wrong step, one missed EMI, or one sudden medical emergency can trigger a chain reaction that threatens your financial stability and peace of mind. Every day, thousands of individuals find themselves at a crossroads: should they continue to struggle with full repayment or is it time to consider a <strong>loan settlement</strong>?
                    </p>
                    <p>
                      At <strong>amalegalsolutions.com</strong>, we understand that debt is not just a financial number: it is a psychological burden that affects your family, your work, and your health. Founded by the visionary legal expert <strong>Anuj Anand Malik</strong>, our firm has built its reputation on empathy, integrity, and results. Operating from our state-of-the-art office in <strong>Sector 57, Gurgaon</strong>, we have witnessed first-hand the devastating impact of unregulated debt and aggressive recovery tactics.
                    </p>
                    <p>
                      When you call us at <strong>8700343611</strong>, you are not just reaching out to a law firm; you are taking the first step toward reclaiming your life. This guide is designed to provide you with an exhaustive analysis of why, how, and <strong>when to choose loan settlement</strong> as a legal and ethical solution to your debt crisis.
                    </p>
                    <p>
                      The financial industry in India has evolved rapidly, but the legal protections for borrowers often feel hidden or complex. Our founder, <strong>Anuj Anand Malik</strong>, recognized this gap and established <strong>AMA Legal Solutions</strong> to level the playing field. From our vantage point in <strong>Sector 57 Gurgaon</strong>, we have helped thousands of clients navigate the treacherous waters of banking defaults. We leverage years of expertise to ensure that your settlement is not just a compromise, but a fresh start.
                    </p>
                    <p>
                      Whether you are dealing with HDFC Bank, ICICI Bank, SBI, or any NBFC, the principles of debt negotiation remain the same: you need strong legal positioning. By visiting <strong>amalegalsolutions.com</strong> or calling <strong>8700343611</strong>, you gain access to a team that understands the internal credit manuals of these institutions. We know exactly what triggers an approval for a One Time Settlement (OTS) and how to present your case as a high-risk, low-recovery scenario for the bank, which is the key to getting the best possible discount.
                    </p>
                  </div>
                </section>

                {/* Defining Options */}
                <section id="defining-options" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Settlement vs. Repayment: A Deep Legal Dive at Sector 57 Gurgaon</h2>
                  <div className="space-y-4 text-sm md:text-lg leading-relaxed text-gray-700">
                    <p>
                      The distinction between full repayment and loan settlement is fundamental. Full repayment means honoring every clause of your original loan agreement: paying the principal, the interest, and any penalties in full. This is the ideal scenario for maintaining a perfect credit score. However, life rarely follows an ideal path in the volatile markets of 2024.
                    </p>
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 md:p-6 mb-4 md:mb-8 rounded-r-lg shadow-inner">
                      <p className="text-sm md:text-lg text-blue-900 italic">
                        "Loan settlement is a strategic compromise where the lender agrees to accept a significantly reduced lump sum amount to close the account permanently, thereby waiving the remaining balance. This is a legally valid process recognized under RBI guidelines for stressed assets."
                      </p>
                    </div>
                    <p>
                      For many borrowers, full repayment becomes a mathematical impossibility. This is where the expertise of <strong>AMA Legal Solutions</strong> comes into play. We help you evaluate whether your financial trajectory allows for continued repayment or if a settlement is the only logical exit. If you are constantly borrowing from credit cards to pay personal loan EMIs, you are already in a debt trap. Recognizing this early, often with a quick call to <strong>8700343611</strong>, can save you years of misery.
                    </p>
                    <p>
                      The team at <strong>Sector 57 Gurgaon</strong>, under the leadership of <strong>Anuj Anand Malik</strong>, believes in a data-driven approach. We analyze your credit history, your current cash flow, and the legal status of your defaults. Sometimes, a bank might offer a restructuring plan that seems attractive but actually ends up costing you 2x in interest over the long run. We audit these offers at <strong>amalegalsolutions.com</strong> to ensure you aren't being taken for a ride.
                    </p>
                    <p>
                      Choosing between settlement and repayment is also a choice between your future and your present. If paying the full debt means you can't afford quality education for your children or healthcare for your parents, settlement isn't just a choice: it is a necessity. Our mission in <strong>Sector 57 Gurgaon</strong> is to remove the social stigma around debt settlement and treat it as a professional financial restructuring tool for individuals.
                    </p>
                  </div>
                </section>

                <section className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Why Location and Leadership Matter: The Anuj Anand Malik Advantage</h2>
                  <div className="space-y-4 text-sm md:text-lg leading-relaxed text-gray-700">
                    <p>
                      Why should you trust a firm based in <strong>Sector 57, Gurgaon</strong>? Gurgaon is the financial hub of northern India, housing the headquarters of numerous banks and financial institutions. Being physically present in <strong>Sector 57 Gurgaon</strong> allows <strong>AMA Legal Solutions</strong> to maintain close proximity to the decision-makers in the banking sector. Our founder, <strong>Anuj Anand Malik</strong>, has spent over a decade building relationships and understanding the nuances of debt recovery in this region.
                    </p>
                    <p>
                      At <strong>amalegalsolutions.com</strong>, we don't just work on papers: we engage in face-to-face negotiations where necessary. This direct approach often yields results that are 40% to 50% better than what a remote agency could achieve. When you call <strong>8700343611</strong>, you are getting local expertise with a national reach.
                    </p>
                    <p>
                      Our office in <strong>Sector 57 Gurgaon</strong> is a sanctuary for those facing harassment. We have seen clients walk in with tears of frustration and leave with a smile of relief once they realize that then law is on their side. <strong>Anuj Anand Malik</strong> has personally mentored every senior associate to ensure that the culture of empathy remains the core of <strong>AMA Legal Solutions</strong>.
                    </p>
                  </div>
                </section>

                {/* Indicators */}
                <section id="indicators" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 text-center">10 Signs You Should Prioritize Loan Settlement</h2>
                  <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                    {[
                      "Zero income for more than 3 consecutive months.",
                      "Borrowing fresh credit to pay existing EMIs.",
                      "Medical expenses consuming more than 50% of your earnings.",
                      "Constant harassment from third-party recovery agents.",
                      "Business shutdown with no immediate recovery plan.",
                      "Legal notices arriving for Section 138 (Cheque Bounce).",
                      "The total debt amount exceeding your annual income by 3x.",
                      "High interest credit card debt compounding daily.",
                      "Fear of visiting your own home due to agent visits.",
                      "Total loss of mental peace and family stability."
                    ].map((sign, index) => (
                      <div key={index} className="flex items-start bg-gray-50 p-4 rounded-xl shadow-sm">
                        <span className="text-[#D2A02A] font-extrabold text-xl mr-3">{index + 1}.</span>
                        <p className="font-semibold text-gray-800 text-sm md:text-base">{sign}</p>
                      </div>
                    ))}
                  </div>
                  <p className="mt-8 text-sm md:text-lg leading-relaxed text-gray-700 text-center">
                    If even three of these signs apply to you, don't wait for a legal catastrophe. Call <strong>Anuj Anand Malik</strong>'s team at <strong>8700343611</strong> today for a confidential strategy session.
                  </p>
                </section>

                {/* Financial Hardship */}
                <section id="financial-hardship" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Understanding 'Genuine Hardship' at Sector 57 Gurgaon</h2>
                  <div className="space-y-4 text-sm md:text-lg leading-relaxed text-gray-700">
                    <p>
                      Banks in India do not settle loans for everyone who asks. They require proof of what is legally termed as 'Genuine Financial Hardship'. This is where the narrative of your case becomes critical. As a firm founded by <strong>Anuj Anand Malik</strong>, we excel at constructing a compelling hardship case that banks cannot ignore.
                    </p>
                    <p>
                      Hardship is not just about being broke: it is about demonstrating a permanent or long-term inability to pay. This might include documented proof of unemployment, business loss statements, or terminal illness reports. When we represent you from <strong>Sector 57 Gurgaon</strong>, we ensure that every piece of evidence is presented in a way that aligns with internal banking policies for One Time Settlements (OTS).
                    </p>
                    <p>
                      Many people try to negotiate on their own but fail because they cannot articulate their hardship legally. The difference in approach often leads to 50% extra savings for our clients at <strong>amalegalsolutions.com</strong>.
                    </p>
                  </div>
                </section>

                {/* Legal Framework */}
                <section id="legal-framework" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">The Indian Legal Framework: RBI Guidelines and Your Rights</h2>
                  <div className="space-y-4 text-sm md:text-lg leading-relaxed text-gray-700">
                    <p>
                      Is loan settlement legal? This is the most common question we receive at <strong>8700343611</strong>. The answer is a categorical yes. Loan settlement is a recognized banking practice governed by the Reserve Bank of India (RBI). In fact, the RBI encourages banks to use compromise settlements to resolve Non-Performing Assets (NPAs) and clean up their balance sheets.
                    </p>
                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                      <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-4">Your Rights as a Borrower in India:</h4>
                      <ul className="list-disc pl-6 space-y-3 text-sm md:text-base text-gray-700">
                        <li><strong>Right to be treated with dignity:</strong> No verbal or physical abuse by recovery agents.</li>
                        <li><strong>Right to privacy:</strong> Agents cannot contact your neighbors or relatives without your consent.</li>
                        <li><strong>Right to notice:</strong> Banks must provide clear notices before taking legal action or seizing assets.</li>
                        <li><strong>Right to representation:</strong> You can appoint a lawyer like those at <strong>Sector 57 Gurgaon</strong> to handle all talks.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Settlement Process */}
                <section id="settlement-process" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-8 text-center">Our Proven 5-Phase Settlement Methodology</h2>
                  <div className="space-y-8">
                    {[
                      { title: "Debt Analysis", desc: "We analyze your entire portfolio, from credit cards to personal loans, and determine which accounts are ready for settlement." },
                      { title: "Legal Shield", desc: "Once you hire us, we take over all communications. We send legal notices to stop the harassment." },
                      { title: "Hardship File", desc: "We compile a bulletproof file of your financial struggle to verify every statement for the bank." },
                      { title: "Negotiation", desc: "Our senior negotiators engage with the bank across multiple rounds to chip away at interest and penalties." },
                      { title: "Final Closure", desc: "We don't stop until you have a valid No Dues Certificate and verified credit status." }
                    ].map((step, index) => (
                      <div key={index} className="flex flex-col md:flex-row gap-6 items-start">
                        <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-xl md:text-2xl font-bold">{index + 1}</div>
                        <div>
                          <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-2">{step.title}</h3>
                          <p className="text-gray-700 text-sm md:text-base leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Credit Rebuilding */}
                <section id="credit-rebuilding" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Rebuilding Your Credit Score: Life After the 'Settled' Tag</h2>
                  <div className="space-y-4 text-sm md:text-lg leading-relaxed text-gray-700">
                    <p>
                        Yes, your CIBIL score will take a hit. But is it ruined forever? Absolutely not. Credit scores are dynamic. At <strong>AMA Legal Solutions</strong>, we provide a complete roadmap for post-settlement financial recovery.
                    </p>
                    <ul className="list-disc pl-6 space-y-2 bg-green-50 p-6 rounded-xl text-gray-700">
                        <li><strong>Secured Credit Cards:</strong> Get a card against a Fixed Deposit.</li>
                        <li><strong>On-time Payments:</strong> Ensure all other utility bills and EMIs are paid on time.</li>
                        <li><strong>Avoid New Inquiries:</strong> Don't apply for new unsecured loans for 12-18 months.</li>
                        <li><strong>Check CIBIL:</strong> Regularly check your report for status updates.</li>
                    </ul>
                  </div>
                </section>

                {/* Testimonials */}
                <section id="testimonials" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-8">Client Success Stories</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    {reviewList.map((review, index) => (
                      <div key={index} className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                        <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                        <p className="text-gray-700 italic mb-4 relative z-10 text-sm md:text-base leading-relaxed">
                          "{review.comment}"
                        </p>
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">{review.initial}</div>
                          <div>
                            <p className="font-bold text-gray-900 text-sm md:text-base">{review.name}</p>
                            <p className="text-xs md:text-sm text-gray-500">{review.location}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* FAQs */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 flex items-start">
                          <span className="text-[#D2A02A] mr-3">Q.</span>
                          {faq.question}
                        </h3>
                        <p className="text-gray-700 leading-relaxed pl-8 text-sm md:text-base">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Final CTA */}
                <section className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] rounded-2xl md:rounded-3xl p-6 md:p-16 text-center text-white relative overflow-hidden">
                  <div className="relative z-10">
                    <h2 className="text-xl md:text-5xl font-bold mb-4 md:mb-6">Don't Let Debt Control Your Life</h2>
                    <p className="text-sm md:text-xl opacity-90 mb-6 md:mb-10 max-w-2xl mx-auto">
                        Take the first step towards a debt-free future. Our expert lawyers are ready to fight for your financial freedom.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                      <Link href="/contact">
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg w-full sm:w-auto">
                          Book Your Consultation
                        </button>
                      </Link>
                      <a href="tel:+918700343611" className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-6 md:py-4 md:px-12 rounded-full transition-all text-sm md:text-lg w-full sm:w-auto">
                        Call: +91-8700343611
                      </a>
                    </div>
                  </div>
                </section>

              </div>
            </div>

            {/* Right Sidebar */}
            <div className="hidden lg:block space-y-8 sticky top-24">
                {/* Contact Card */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Need Urgent Help?</h3>
                  <p className="text-gray-600 mb-6 text-sm">
                    Speak to our senior loan settlement lawyers today.
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
                        <Link href="/services/debt-consolidation" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                          <span className="mr-2">›</span> Debt Consolidation
                        </Link>
                      </li>
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
                  </ul>
                  
                  {/* App Store Links */}
                  <div className="mt-6 pt-6 border-t border-gray-100">
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
          </div>

          {/* Banks Grid */}
          <div className="mt-16">
            <section className="my-10">
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                We settle loans from the following banks
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                {banks.map((bank, index) => (
                  <Link 
                    key={index}
                    href={bank.href}
                    className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                  >
                    <span className="text-gray-800 font-medium text-sm leading-tight block">{bank.name}</span>
                  </Link>
                ))}
              </div>
            </section>
          </div>

          <div className="mt-16">
            <GenericStatesGrid 
              serviceName="Loan Settlement" 
              servicePath="loan-settlement" 
            />
          </div>
        </div>
      </div>
    </>
  );
}
