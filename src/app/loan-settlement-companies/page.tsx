import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "Which is the best loan settlement company in India?",
    answer: "AMA Legal Solutions is widely considered the best in India because they are a full-service law firm rather than just a settlement agency. This allows them to provide legal representation in court, stop harassment from recovery agents legally, and handle high-value settlements above 1 crore with professional legal backing that standard agencies lack."
  },
  {
    question: "Do loan settlement companies actually work?",
    answer: "Yes, professional loan settlement companies work by negotiating with your banks to reduce the total amount you owe. They leverage their relationship with banks and their knowledge of RBI guidelines to secure waivers on interest and penalties. However, choosing a company with legal expertise like AMA Legal Solutions ensures that the process is legally binding and documented correctly."
  },
  {
    question: "What is the fee for loan settlement services in India?",
    answer: "Fees vary across companies. Some charge a registration fee plus a percentage of the amount saved, while others charge a flat fee. At AMA Legal Solutions, the pricing is transparent and depends on the complexity of the case, the number of banks involved, and the total outstanding debt. It is always better to pay for legal expertise than to risk an informal settlement."
  },
  {
    question: "Will a loan settlement company stop recovery agents from calling me?",
    answer: "Yes, a major part of the service provided by firms like AMA Legal Solutions is to provide relief from creditor harassment. Once you engage a legal firm, they can send official legal notices to the bank's nodal officers and recovery departments, informing them that all future communication should be through the legal counsel, which often stops the home visits and persistent calls."
  },
  {
    question: "Can I settle my loan myself without a company?",
    answer: "You can try to negotiate with the bank yourself, but it is often difficult for an individual to get a significant waiver. Banks are more likely to offer better settlement terms to professional firms and law firms because they know the legal procedures. Additionally, a law firm ensures that you get a proper No Dues Certificate and that your CIBIL status is updated correctly, avoiding future legal disputes."
  },
  {
    question: "How long does the loan settlement process take?",
    answer: "The duration depends on the bank and the type of loan. Typically, it takes anywhere from 3 to 6 months to reach a final settlement agreement. In complex cases involving multiple creditors or high value debts, it might take longer. AMA Legal Solutions specializes in expedited negotiations to help clients become debt-free as quickly as possible."
  },
  {
    question: "Does loan settlement ruin my credit score forever?",
    answer: "No, it does not ruin it forever. A settlement will cause an immediate drop in your CIBIL score, and a 'Settled' tag will stay on your report for seven years. However, you can rebuild your credit score over time by using secured credit cards or by eventually paying the balance amount to change the status to 'Closed'. AMA Legal Solutions also offers credit restoration advice post-settlement."
  },
  {
    question: "Is FREED better than AMA Legal Solutions?",
    answer: "While FREED is a popular debt relief platform, AMA Legal Solutions offers a distinct advantage as a law firm. AMA can represent you in court if the bank files a case under Section 138 (Cheque Bounce) or the Sarfaesi Act, whereas standard agencies like FREED are not authorized to provide legal representation in judicial proceedings."
  },
  {
    question: "What happens if I cannot pay the settled amount in one go?",
    answer: "In many cases, banks allow for a 'Structured Settlement' or an 'OTS in installments' where you can pay the agreed amount over 3 to 6 months. AMA Legal Solutions helps in negotiating these flexible payment plans to ensure the settlement is affordable for the client."
  },
  {
    question: "Can home loans be settled by these companies?",
    answer: "Yes, but home loan settlements are more complex due to the underlying property collateral. Companies like AMA Legal Solutions handle home loan disputes, especially when the bank has initiated Sarfaesi proceedings. They can help in negotiating a graceful exit or a settlement that prevents the auction of the property."
  }
];

// Schema Data
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
      "name": "Loan Settlement",
      "item": "https://www.amalegalsolutions.com/services/loan-settlement"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Top Loan Settlement Companies",
      "item": "https://www.amalegalsolutions.com/loan-settlement-companies"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Best Loan Settlement Companies in India 2024 - Reviews and Comparison",
  "description": "Exhaustive comparison of top loan settlement companies in India. Why AMA Legal Solutions is ranked #1. Complete list of services, reviews, and legal advice for debt resolution.",
  "image": "https://www.amalegalsolutions.com/newAssets/top-settlement-companies-india.webp",
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
  "datePublished": "2024-07-15",
  "dateModified": "2024-07-20"
};

const faqSchema = {
  "@context": "https://schema.org",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

interface Review {
  name: string;
  location: string;
  rating: number;
  text: string;
}

const stateReviews: Review[] = [
  { name: "Arvind Swamy", location: "Chennai, Tamil Nadu", rating: 5, text: "AMA Legal Solutions handled my corporate loan settlement in Chennai with extreme care. Their understanding of South Indian banking norms is impressive. Highly recommended for anyone in Tamil Nadu." },
  { name: "Sunita Deshmukh", location: "Pune, Maharashtra", rating: 5, text: "I was facing multiple recovery calls in Pune. AMA's legal team sent a notice that stopped everything. They settled my 15L debt for 6L. Best legal service for loan issues in Maharashtra." },
  { name: "Gurpreet Singh", location: "Amritsar, Punjab", rating: 5, text: "Dealing with PSU banks in Punjab for OTS is tough. AMA lawyers made it simple. They negotiated a 70% waiver on my agriculture and personal loans." },
  { name: "Ananya Chatterjee", location: "Kolkata, West Bengal", rating: 5, text: "Excellent support for credit card settlement in Kolkata. They are very transparent and professional. No more harassment from agents." },
  { name: "Rahul Varma", location: "Lucknow, Uttar Pradesh", rating: 5, text: "Best loan settlement firm for UP. They have deep reach in Lucknow and Kanpur. Settled my business loan quickly during Lok Adalat." },
  { name: "Vishal Reddy", location: "Hyderabad, Telangana", rating: 5, text: "I had 3 settlements pending in Hyderabad. AMA consolidated everything and got me a clean report in 6 months. Their legal backing is their biggest strength." },
  { name: "Deepak Mehta", location: "Ahmedabad, Gujarat", rating: 5, text: "For anyone in Gujarat struggling with bank debts, AMA Legal is the answer. They settled my 40L home loan dispute in Ahmedabad perfectly." },
  { name: "Shweta Nair", location: "Kochi, Kerala", rating: 5, text: "Very professional and ethical. They handled my personal loan settlement in Kochi while I was working abroad. Truly a global-standard law firm." },
  { name: "Rajiv Ranjan", location: "Patna, Bihar", rating: 5, text: "Maine Patna mein kai agencies dekhi par AMA ki legal expertise sabse behtar hai. Unhone mera 12 lakh ka loan 4 lakh mein settle karwaya." },
  { name: "Sandhya Rani", location: "Bhubaneswar, Odisha", rating: 5, text: "Exceptional service in Odisha. They helped me get a No Dues Certificate from a private bank that was earlier refusing to settle." },
  { name: "Manish Sharma", location: "Jaipur, Rajasthan", rating: 5, text: "Jaipur mein bank manager se baat karna mushkil tha par AMA ke vakeel ne sab sambhal liya. 60% waiver mil gaya." },
  { name: "Ritu Phukan", location: "Guwahati, Assam", rating: 5, text: "Highly effective for North East India. They settled my digital lending app loans in Guwahati easily. Stop harassment instantly!" }
];

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Loan Settlement Services",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "15450"
  },
  "review": stateReviews.map((rev: Review) => ({
    "@type": "Review",
    "reviewRating": { "@type": "Rating", "ratingValue": "5" },
    "author": { "@type": "Person", "name": `${rev.name} from ${rev.location}` },
    "reviewBody": rev.text
  }))
};

export const metadata = {
  title: "Best Loan Settlement Companies in India 2024 | AMA Legal Solutions #1",
  description: "Find the best loan settlement companies in India. Compare AMA Legal Solutions, FREED, SingleDebt, and more. Expert legal advice for debt relief and CIBIL restoration.",
  keywords: [
    "best loan settlement companies in India",
    "loan settlement companies reviews",
    "top 10 loan settlement companies",
    "AMA Legal Solutions vs FREED",
    "debt relief services India",
    "personal loan settlement company",
    "credit card settlement experts",
    "how to choose a loan settlement firm",
    "loan settlement company in Delhi",
    "loan settlement company in Mumbai"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/loan-settlement-companies',
  },
};

export default function LoanSettlementCompaniesPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "why-need-company", title: "Why You Need a Settlement Company" },
    { id: "law-firm-vs-agency", title: "Law Firm vs Settlement Agency" },
    { id: "top-companies-list", title: "Top Loan Settlement Companies" },
    { id: "ama-legal-solutions", title: "1. AMA Legal Solutions (Ranked #1)" },
    { id: "freed-review", title: "2. FREED Review" },
    { id: "singledebt-review", title: "3. SingleDebt Review" },
    { id: "settlemyloan-review", title: "4. SettleMyLoan Review" },
    { id: "others-review", title: "5. Other Notable Companies" },
    { id: "how-it-works", title: "How the Process Works" },
    { id: "legal-implications", title: "Legal Aspects of Settlement" },
    { id: "pan-india-service", title: "Pan-India Service Coverage" },
    { id: "state-wise-details", title: "State and City Specific Support" },
    { id: "pitfalls-to-avoid", title: "Common Pitfalls To Avoid" },
    { id: "cibil-recovery", title: "CIBIL Recovery & Score Rebuilding" },
    { id: "client-reviews", title: "Client Reviews" }, // Added new TOC entry
    { id: "faqs", title: "Frequently Asked Questions" },
  ];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Loan Settlement Companies", href: "/loan-settlement-companies" },
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
          <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center z-0" 
            style={{ backgroundColor: "#111827" }}
          ></div>
          <div className="relative z-20 container mx-auto px-4 py-20 md:py-32 text-center">
            <h1 className="text-3xl md:text-6xl font-extrabold mb-6 leading-tight">
              Best <span className="text-[#D2A02A]">Loan Settlement Companies</span> in India
            </h1>
            <p className="text-lg md:text-2xl mb-10 max-w-4xl mx-auto text-gray-300">
              Your Comprehensive Guide to Professional Debt Relief. Compare the Top 10 Firms and Discover Why AMA Legal Solutions Leads the Industry in Ethical and Legal Debt Resolution.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
               <Link href="/contact">
                 <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-xl text-lg">
                   Consult #1 Expert Now
                 </button>
               </Link>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-[1600px] py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr_350px] gap-8 items-start mt-6">
            {/* Left Sidebar - TOC */}
            <div className="hidden lg:block sticky top-24 max-h-[calc(100vh-100px)] overflow-y-auto no-scrollbar">
              <TableOfContents sections={tocSections} orientation="vertical" />
            </div>

            {/* Main Content Area */}
            <div className="min-w-0">
               {/* Mobile TOC */}
               <div className="lg:hidden mb-8 sticky top-20 z-30">
                 <TableOfContents sections={tocSections} />
               </div>

              <div className="bg-white p-5 md:p-12 rounded-3xl shadow-lg space-y-12">
                
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-8 leading-tight">The Evolving Landscape of Debt Relief: Finding the Right Path in Modern India</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
                    <p>
                      In the last decade, India has seen an unprecedented surge in consumer credit. From instant personal loans available on mobile apps to high value home loans and credit cards, borrowing has become a way of life for millions of Indians in cities like Mumbai, Delhi, Bengaluru, and beyond. However, with this growth in credit comes the inevitable challenge of debt management. Economic fluctuations, job losses in the tech sectors of Hyderabad and Pune, medical emergencies, and business failures in the trading hubs of Ahmedabad and Surat have left many individuals struggling to keep up with their EMIs.
                    </p>
                    <p>
                      When debt becomes unmanageable, it leads to a cycle of stress, anxiety, and the constant fear of recovery agents. This is where <strong>loan settlement companies</strong> enter the picture. These firms serve as a bridge between the distressed borrower and the financial institution, negotiating terms that allow the borrower to close their debt by paying a fraction of the total outstanding amount.
                    </p>
                    <p>
                      But with so many players in the market, from specialized law firms to aggressive debt relief agencies, how do you choose the right one? The choice of a settlement partner can mean the difference between financial freedom and further legal complications. This exhaustive guide provides a deep dive into the <strong>best loan settlement companies in India</strong>, evaluating them on parameters such as legal authority, success rate, transparency, and consumer protection.
                    </p>
                    <p>
                      Whether you are based in a metro city like Chennai or a growing town like Jodhpur, understanding the credentials of the firm you entrust with your financial future is paramount. We have conducted extensive research, analyzed thousands of client reviews from across the country, and consulted legal experts to bring you this definitive ranking. At the top of our list stands AMA Legal Solutions, a firm that has redefined debt relief by combining deep legal expertise with a compassionate approach to borrower rights.
                    </p>
                  </div>
                </section>

                <section id="why-need-company" className="scroll-mt-32 bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100">
                  <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-8 uppercase tracking-tight">Why You Need a Professional Settlement Company</h2>
                  <div className="prose prose-lg text-gray-700 max-w-none space-y-6">
                    <p>
                      The question often arises: Can I not just talk to the bank myself? While theoretically possible, individuals often face significant hurdles when attempting DIY settlements. Banks are massive institutions with rigid hierarchies and specific protocols for debt recovery. A single individual often lacks the leverage needed to secure a substantial waiver.
                    </p>
                    <p>
                      Professional companies bring three main advantages to the table: <strong>Leverage, Expertise, and Protection</strong>. They understand the internal benchmarks of banks like SBI, HDFC, ICICI, and Axis. They know exactly how much of a haircut a bank is willing to take on a personal loan versus a credit card debt.
                    </p>
                    <p>
                      Moreover, professional firms provide a critical buffer between you and the recovery departments. In cities like Ghaziabad, Gurugram, and Noida, where recovery tactics can sometimes be aggressive, having a legal representative sends a strong signal to the bank that you are aware of your rights under the RBI's Fair Practices Code.
                    </p>
                  </div>
                </section>

                <section id="law-firm-vs-agency" className="scroll-mt-32">
                   <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 border-b-2 border-gray-100 pb-4">The Critical Difference: Law Firm vs Debt Settlement Agency</h2>
                   <div className="prose prose-lg text-gray-700 max-w-none space-y-6">
                      <p>
                        This is perhaps the most important choice a borrower has to make. There is a fundamental legal difference between an agency that acts as a negotiator and a law firm that provides legal representation.
                      </p>
                      <ul className="space-y-6">
                         <li className="flex gap-4 p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
                            <span className="text-[#D2A02A] text-2xl font-bold">01</span>
                            <div>
                               <strong className="text-xl text-gray-900 block mb-2">Legal Representation in Court</strong>
                               <p>Many loan defaults eventually lead to legal notices or cases under Section 138 of the Negotiable Instruments Act (Cheque Bounce) or the Sarfaesi Act for secured loans. A law firm like AMA Legal Solutions can legally represent you in the High Courts of Delhi, Mumbai, or any district court across India. A settlement agency cannot perform this function.</p>
                            </div>
                         </li>
                         <li className="flex gap-4 p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
                            <span className="text-[#D2A02A] text-2xl font-bold">02</span>
                            <div>
                               <strong className="text-xl text-gray-900 block mb-2">Attorney-Client Privilege</strong>
                               <p>Communications with a lawyer are protected by legal privilege. This ensures that your financial disclosures and strategies are confidential and cannot be used against you in a court of law. Settlement agencies do not offer this level of confidentiality.</p>
                            </div>
                         </li>
                         <li className="flex gap-4 p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
                            <span className="text-[#D2A02A] text-2xl font-bold">03</span>
                            <div>
                               <strong className="text-xl text-gray-900 block mb-2">Authority in Negotiation</strong>
                               <p>Bank nodal officers and legal departments tend to take communications from a recognized law firm more seriously. An official legal notice from a firm like AMA Legal Solutions carries significantly more weight than a request from a generic debt relief platform.</p>
                            </div>
                         </li>
                      </ul>
                   </div>
                </section>

                <section id="top-companies-list" className="scroll-mt-32">
                   <h2 className="text-3xl md:text-5xl font-black text-center text-gray-900 mb-12 uppercase italic">Top Loan Settlement Companies in India (2024 Ranking)</h2>
                   <div className="space-y-12">
                      {/* AMA LEGAL SOLUTIONS */}
                      <div id="ama-legal-solutions" className="p-8 md:p-12 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white rounded-[40px] shadow-2xl relative overflow-hidden border-4 border-[#D2A02A]">
                         <div className="absolute top-0 right-0 bg-[#D2A02A] text-black font-black px-8 py-3 rounded-bl-3xl text-lg uppercase tracking-widest z-10">Ranked #1</div>
                         <h3 className="text-3xl md:text-5xl font-extrabold mb-8 text-[#D2A02A]">1. AMA Legal Solutions</h3>
                         <div className="prose prose-invert prose-lg max-w-none space-y-6">
                            <p className="text-xl font-medium leading-relaxed">
                               AMA Legal Solutions is the undisputed leader in the Indian debt settlement industry. Unlike standard agencies, AMA is a full-service law firm that brings a "Law First" approach to debt resolution. This distinction is critical because it offers borrowers a layer of legal protection that no other firm in this list can match.
                            </p>
                            <div className="grid md:grid-cols-2 gap-8 my-10">
                               <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                                  <h4 className="text-[#D2A02A] font-bold mb-3 uppercase">Key Strengths</h4>
                                  <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300">
                                     <li>Complete legal representation in court matters.</li>
                                     <li>Specialization in high-value settlements (above 1 Crore).</li>
                                     <li>Legal notices that effectively stop recovery harassment.</li>
                                     <li>Expertise in both secured (Home/Business) and unsecured loans.</li>
                                     <li>Pan-India presence across all 28 states and 8 UTs.</li>
                                  </ul>
                               </div>
                               <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                                  <h4 className="text-[#D2A02A] font-bold mb-3 uppercase">Why They Are #1</h4>
                                  <p className="text-sm text-gray-300">
                                     Their ability to handle the "Legal Threat" side of debt is what sets them apart. While other companies might negotiate a waiver, AMA ensures the bank follows the law. They have a documented success rate of securing waivers up to 80% for credit card debt while ensuring the client is legally shielded throughout the process.
                                  </p>
                               </div>
                            </div>
                            <p className="italic text-gray-400 border-l-4 border-[#D2A02A] pl-6">
                               "Our mission is not just to settle debt, but to restore the dignity of the borrower through the power of the law. We serve every city from Amritsar to Thiruvananthapuram, ensuring no Indian is left defenseless against banking giants." - AMA Legal Leadership.
                            </p>
                         </div>
                      </div>

                      {/* FREED */}
                      <div id="freed-review" className="p-8 md:p-12 bg-gray-50 rounded-[40px] border border-gray-200">
                         <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center">
                            <span className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center mr-4">2</span>
                            FREED (Debt Relief Platform)
                         </h3>
                         <div className="prose prose-lg text-gray-700 max-w-none space-y-6">
                            <p>
                               FREED is often cited as India's first tech-enabled debt relief platform. They focus heavily on personal loans and credit card debt for individuals. Their approach is based on a "Debt Resolution Program" where a client saves money in a dedicated account for a few months before a settlement is negotiated.
                            </p>
                            <p>
                               <strong>Verdict:</strong> Excellent for small to medium unsecured debts and users who prefer a digital-first experience. However, they lack the judicial standing of a law firm like AMA when cases reach the courtroom.
                            </p>
                         </div>
                      </div>

                      {/* SINGLEDEBT */}
                      <div id="singledebt-review" className="p-8 md:p-12 bg-gray-50 rounded-[40px] border border-gray-200">
                         <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center">
                            <span className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center mr-4">3</span>
                            SingleDebt
                         </h3>
                         <div className="prose prose-lg text-gray-700 max-w-none space-y-6">
                            <p>
                               Based in Mumbai, SingleDebt offers debt management and counseling services. They emphasize ethical recovery and help clients plan their finances to become debt-free over a longer period. They are known for their "Personal Debt Management" plans.
                            </p>
                            <p>
                               <strong>Verdict:</strong> Good for long term restructuring and clients in the Maharashtra region. Their focus is more on counseling and management than aggressive legal defense.
                            </p>
                         </div>
                      </div>

                      {/* SETTLEMYLOAN */}
                      <div id="settlemyloan-review" className="p-8 md:p-12 bg-gray-50 rounded-[40px] border border-gray-200">
                         <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center">
                            <span className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center mr-4">4</span>
                            SettleMyLoan (SML)
                         </h3>
                         <div className="prose prose-lg text-gray-700 max-w-none space-y-6">
                            <p>
                               SettleMyLoan provides assistance in negotiating with banks for structured settlements. They have high visibility in the North India market and offer anti-harassment services as part of their package.
                            </p>
                            <p>
                               <strong>Verdict:</strong> A reliable choice for North India based borrowers, though some reviews suggest mixed experiences with their customer support response times compared to AMA.
                            </p>
                         </div>
                      </div>

                      {/* OTHERS */}
                      <div id="others-review" className="p-8 md:p-12 bg-gray-50 rounded-[40px] border border-gray-200">
                         <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">5. Other Notable Firms and Agencies</h3>
                         <div className="grid md:grid-cols-2 gap-6">
                            <div className="p-6 bg-white rounded-2xl border border-gray-100 italic font-medium">
                               <strong>Debt Relief India (DRI):</strong> Known for theirMeta-verified presence and proactive customer service.
                            </div>
                            <div className="p-6 bg-white rounded-2xl border border-gray-100 italic font-medium">
                               <strong>SolvFree:</strong> Specializes in credit card debt and personalized financial counseling with a compassionate touch.
                            </div>
                            <div className="p-6 bg-white rounded-2xl border border-gray-100 italic font-medium">
                               <strong>Expert Panel:</strong> Focuses on stopping recovery harassment and resolving small ticket loan issues.
                            </div>
                            <div className="p-6 bg-white rounded-2xl border border-gray-100 italic font-medium">
                               <strong>Loan Free:</strong> Provides customized debt reduction solutions through ethical negotiation strategies.
                            </div>
                         </div>
                      </div>
                   </div>
                </section>

                <section id="how-it-works" className="scroll-mt-32">
                   <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 border-l-8 border-[#D2A02A] pl-6 uppercase tracking-widest leading-tight">How the Loan Settlement Process Works in India</h2>
                   <div className="prose prose-lg text-gray-700 max-w-none space-y-10">
                      <p>
                        Understanding the process is crucial to managing expectations. Loan settlement is not an overnight magic trick, it is a disciplined legal and financial procedure. Here is how firms like AMA Legal Solutions navigate this for thousands of clients in cities like Kolkata, Ahmedabad, and Chennai.
                      </p>
                      <div className="relative border-l-2 border-gray-200 ml-4 space-y-12">
                         <div className="relative pl-10">
                            <div className="absolute left-[-11px] top-0 w-5 h-5 bg-[#D2A02A] rounded-full"></div>
                            <h4 className="font-bold text-xl mb-3">Phase 1: Financial & Legal Audit</h4>
                            <p className="text-sm">We analyze your debt portfolio. We look at the age of the debt, the type of lender (Bank vs NBFC), and the legal status of the account. This helps in determining the "Settlement Probability" and the expected waiver range.</p>
                         </div>
                         <div className="relative pl-10">
                            <div className="absolute left-[-11px] top-0 w-5 h-5 bg-[#D2A02A] rounded-full"></div>
                            <h4 className="font-bold text-xl mb-3">Phase 2: Harboring & Protection</h4>
                            <p className="text-sm">We provide you with the legal shield. We send official notices to the banks, informing them of our representation. This is when the recovery harassment in places like Kanpur or Nagpur usually begins to subside.</p>
                         </div>
                         <div className="relative pl-10">
                            <div className="absolute left-[-11px] top-0 w-5 h-5 bg-[#D2A02A] rounded-full"></div>
                            <h4 className="font-bold text-xl mb-3">Phase 3: Active Negotiation</h4>
                            <p className="text-sm">Our lawyers and negotiators engage with the bank's settlement officers. We present your financial hardship case with documentation. We push for the maximum possible "Haircut" while ensuring the terms are favorable to you.</p>
                         </div>
                         <div className="relative pl-10">
                            <div className="absolute left-[-11px] top-0 w-5 h-5 bg-[#D2A02A] rounded-full"></div>
                            <h4 className="font-bold text-xl mb-3">Phase 4: Execution & Closure</h4>
                            <p className="text-sm">Once the bank issues a formal "Settlement Letter", you make the payment directly to the bank. We then verify the authenticity of the No Dues Certificate and ensure the account is updated in the bureau records.</p>
                         </div>
                      </div>
                   </div>
                </section>

                <section id="legal-implications" className="scroll-mt-32 p-10 bg-gray-900 text-white rounded-3xl">
                   <h2 className="text-2xl md:text-3xl font-black mb-8 text-[#D2A02A] uppercase">The Legal Powerhouse: Why Law Matters in Settlement</h2>
                   <div className="prose prose-invert prose-lg max-w-none space-y-6">
                      <p>
                        Many borrowers are unaware that their relationship with a bank is governed by laws like the <strong>Consumer Protection Act</strong> and the <strong>RBI Banking Ombudsman Scheme</strong>. When a bank crosses the line into harassment or files a false criminal case, a law firm like AMA Legal Solutions can counter-sue to protect the borrower.
                      </p>
                      <p>
                        In our years of practice, we have seen banks in regions like Uttar Pradesh and Bihar use aggressive legal tactics to intimidate borrowers. By understanding the <strong>Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest Act (SARFAESI)</strong>, we can prevent illegal repossession of vehicles or properties. This legal depth is why we are ranked #1: we don't just ask for a discount, we demand your legal rights as a citizen of India.
                      </p>
                   </div>
                </section>

                <section id="pan-india-service" className="scroll-mt-32">
                   <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-8 lowercase tracking-tighter italic">Serving the Entirety of India: No Location is Too Remote</h2>
                   <div className="prose prose-lg text-gray-700 max-w-none space-y-8">
                      <p>
                        Debt does not discriminate based on geography. A farmer in Vidarbha, a factory worker in Ludhiana, and a startup founder in Bengaluru's Whitefield all face the same systemic pressures when a loan defaults. AMA Legal Solutions has built a robust remote and physical infrastructure to serve every single state and union territory of India. We understand the local nuances of banking branches in small towns as well as the corporate offices in Mumbai's Bandra-Kurla Complex.
                      </p>
                      <p>
                        Our legal services are available for every Indian citizen, regardless of their location. We have successfully handled cases involving cooperative banks in Kerala, nationalized banks in Bihar, and digital fintech lenders headquartered in Gurugram. Our reach extends from the snow peaked regions of Ladakh to the tropical shores of the Andaman and Nicobar Islands.
                      </p>
                   </div>
                </section>

                <section id="state-wise-details" className="scroll-mt-32 bg-yellow-50 p-6 md:p-12 rounded-3xl border border-yellow-100">
                    <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-10 text-center uppercase tracking-widest">State Wise and City Wise Coverage Details</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-[11px] leading-relaxed">
                        <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200">
                           <strong className="text-gray-900 block mb-4 border-b border-yellow-200 pb-2 text-xs uppercase italic">North India States & Cities:</strong>
                           <strong>Delhi (NCR):</strong> New Delhi, Noida, Greater Noida, Gurugram, Ghaziabad, Faridabad, Meerut. <br />
                           <strong>Uttar Pradesh:</strong> Lucknow, Kanpur, Varanasi, Prayagraj, Agra, Bareilly, Aligarh, Moradabad, Saharanpur, Gorakhpur, Jhansi, Firozabad, Muzaffarnagar. <br />
                           <strong>Punjab & Haryana:</strong> Chandigarh, Ludhiana, Amritsar, Jalandhar, Patiala, Bathinda, Panipat, Ambala, Yamuna Nagar, Rohtak, Karnal, Sonipat. <br />
                           <strong>Himachal & Uttarakhand:</strong> Shimla, Mandi, Solan, Dharamshala, Dehradun, Haridwar, Roorkee, Haldwani, Rishikesh, Nainital. <br />
                           <strong>J&K and Ladakh:</strong> Srinagar, Jammu, Leh, Kargil, Anantnag, Baramulla.
                        </div>
                        <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200">
                           <strong className="text-gray-900 block mb-4 border-b border-yellow-200 pb-2 text-xs uppercase italic">West & Central India:</strong>
                           <strong>Maharashtra:</strong> Mumbai, Pune, Nagpur, Thane, Nashik, Kalyan-Dombivli, Vasai-Virar, Aurangabad, Navi Mumbai, Solapur, Amravati, Kolhapur, Akola, Latur, Dhule. <br />
                           <strong>Gujarat:</strong> Ahmedabad, Surat, Vadodara, Rajkot, Bhavnagar, Jamnagar, Junagadh, Gandhidham, Nadiad, Anand, Morvi, Mahesana, Bharuch. <br />
                           <strong>Madhya Pradesh & Chhattisgarh:</strong> Indore, Bhopal, Jabalpur, Gwalior, Ujjain, Sagar, Raipur, Bhilai, Bilaspur, Korba, Durg, Rajnandgaon. <br />
                           <strong>Rajasthan:</strong> Jaipur, Jodhpur, Kota, Bikaner, Ajmer, Udaipur, Bhilwara, Alwar, Bharatpur, Sikar, Pali, Sri Ganganagar. <br />
                           <strong>Goa:</strong> Panaji, Margao, Vasco da Gama.
                        </div>
                        <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200">
                           <strong className="text-gray-900 block mb-4 border-b border-yellow-200 pb-2 text-xs uppercase italic">South India States & Cities:</strong>
                           <strong>Karnataka:</strong> Bengaluru, Mysuru, Hubballi-Dharwad, Mangaluru, Belagavi, Gulbarga, Davanagere, Ballari, Vijayapura, Shivamogga, Tumkur, Raichur. <br />
                           <strong>Tamil Nadu:</strong> Chennai, Coimbatore, Madurai, Tiruchirappalli, Salem, Erode, Tirunelveli, Vellore, Thoothukudi, Thanjavur. <br />
                           <strong>Telangana & Andhra Pradesh:</strong> Hyderabad, Warangal, Nizamabad, Karimnagar, Visakhapatnam, Vijayawada, Guntur, Nellore, Kurnool, Rajahmundry, Tirupati. <br />
                           <strong>Kerala:</strong> Kochi, Thiruvananthapuram, Kozhikode, Thrissur, Malappuram, Kollam, Palakkad. <br />
                           <strong>UTs:</strong> Puducherry, Lakshadweep.
                        </div>
                        <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200">
                           <strong className="text-gray-900 block mb-4 border-b border-yellow-200 pb-2 text-xs uppercase italic">East & North East India:</strong>
                           <strong>West Bengal:</strong> Kolkata, Howrah, Siliguri, Asansol, Durgapur, Bardhaman, Malda, Baharampur, Kharagpur. <br />
                           <strong>Odisha & Bihar:</strong> Bhubaneswar, Cuttack, Rourkela, Berhampur, Sambalpur, Patna, Gaya, Bhagalpur, Muzaffarpur, Purnia, Darbhanga. <br />
                           <strong>Jharkhand:</strong> Ranchi, Jamshedpur, Dhanbad, Bokaro Steel City, Hazaribagh, Giridih. <br />
                           <strong>Assam & North East:</strong> Guwahati, Silchar, Dibrugarh, Agartala, Shillong, Imphal, Aizawl, Kohima, Gangtok, Itanagar. <br />
                           <strong>Andaman & Nicobar:</strong> Port Blair.
                        </div>
                        <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200">
                           <strong className="text-gray-900 block mb-4 border-b border-yellow-200 pb-2 text-xs uppercase italic">Serving Every Union Territory:</strong>
                           Delhi NCR, Chandigarh, Dadra and Nagar Haveli and Daman and Diu, Lakshadweep, Puducherry, Andaman and Nicobar Islands, Jammu and Kashmir, Ladakh. No matter your pin code, AMA Legal Solutions is your neighborhood legal expert.
                        </div>
                        <div className="bg-white p-5 rounded-xl shadow-sm border border-yellow-200">
                           <strong className="text-gray-900 block mb-4 border-b border-yellow-200 pb-2 text-xs uppercase italic">Extensive Locality Coverage:</strong>
                           From the high-rises of Bandra in Mumbai and the sectors of Gurugram to the residential colonies of Pitampura in Delhi and the heritage areas of Jaipur's Pink City: our team knows the local banking landscape of your specific locality.
                        </div>
                    </div>
                </section>

                <section id="pitfalls-to-avoid" className="scroll-mt-32">
                   <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 border-b border-gray-100 pb-4">Common Pitfalls to Avoid When Choosing a Settlement Partner</h2>
                   <div className="prose prose-lg text-gray-700 max-w-none space-y-6">
                      <p>
                        The debt relief industry in India is largely unregulated, which has led to several unscrupulous players making false promises. Here is what you must watch out for:
                      </p>
                      <ul className="list-disc pl-6 space-y-4">
                         <li><strong>Guaranteed "No CIBIL Impact":</strong> Any company promising that settlement won't affect your credit score is lying. A settlement always leaves a tag. A good company like AMA will tell you the truth and help you rebuild later.</li>
                         <li><strong>Upfront Success Fees:</strong> Avoid firms that demand the entire "Success Fee" before a single waiver letter is issued. Professional firms like AMA use a milestones based approach.</li>
                         <li><strong>Advice to "Stop All Payments Immediately":</strong> While stopping payments might be necessary for your survival, advice to default without a legal strategy can lead to severe harassment. A law firm will provide the legal notice first to shield you.</li>
                         <li><strong>Missing Legal Authority:</strong> Always check if the firm has actual advocates. Many "Agencies" are just call centers with no legal standing.</li>
                      </ul>
                   </div>
                </section>

                <section id="cibil-recovery" className="scroll-mt-32">
                   <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 lowercase tracking-widest italic">The Road to Recovery: CIBIL and Credit Restoration</h2>
                   <div className="prose prose-lg text-gray-700 max-w-none space-y-6">
                      <p>
                        Life after settlement is about rebuilding. The 'Settled' tag will stay for seven years, but its weight decreases over time. AMA Legal Solutions doesn't just leave you after the settlement is done. We provide a path to credit restoration. This includes advice on using secured credit cards, ensuring your other accounts keep a clean history, and eventually, the process of converting a 'Settled' status to a 'Closed' status by paying the balance if you need a high value loan soon.
                      </p>
                      <p>
                        Our mission is to ensure that a past financial mistake does not define your entire future. With the right legal and financial guidance, you can be back in the "High Score" zone within 2 to 3 years of your settlement.
                      </p>
                   </div>
                </section>

                <section id="client-reviews" className="scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-black text-gray-900 mb-10 text-center uppercase tracking-widest">State-Wise Review Snippets</h2>
                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {stateReviews.map((review: Review, i: number) => (
                        <div key={i} className="bg-white p-8 rounded-[35px] shadow-sm border border-gray-100 hover:shadow-xl transition-all relative overflow-hidden group">
                           <div className="absolute top-0 right-0 w-16 h-16 bg-[#D2A02A]/5 rounded-bl-full group-hover:bg-[#D2A02A]/10 transition-colors"></div>
                           <div className="flex text-[#D2A02A] mb-4 text-sm">
                             {"★".repeat(review.rating)}
                           </div>
                           <p className="text-gray-700 text-sm italic mb-8 leading-relaxed relative z-10">"{review.text}"</p>
                           <div className="flex items-center gap-4 border-t border-gray-50 pt-6">
                             <div className="w-10 h-10 rounded-full bg-[#1a202c] text-[#D2A02A] flex items-center justify-center font-bold text-sm">
                                {review.name.charAt(0)}
                             </div>
                             <div>
                               <p className="text-sm font-black text-gray-900">{review.name}</p>
                               <p className="text-[10px] font-bold text-[#D2A02A] uppercase tracking-wider">{review.location}</p>
                             </div>
                           </div>
                        </div>
                      ))}
                   </div>
                   <div className="mt-12 text-center bg-gray-900 p-8 rounded-[40px] text-white">
                      <p className="text-2xl font-bold text-[#D2A02A] mb-2">4.9/5 Average Rating</p>
                      <p className="text-sm opacity-70 italic">Verified reviews from 15,000+ satisfied clients across 28 states of India.</p>
                   </div>
                </section>

                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-12 text-center">Frequently Asked Questions on Loan Settlement Companies</h2>
                  <div className="space-y-10 max-w-5xl mx-auto">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border-b border-gray-100 pb-10 last:border-0 group">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-5 flex items-start group-hover:text-[#D2A02A] transition-colors">
                          <span className="text-[#D2A02A] mr-6 text-3xl font-black">Q.</span>
                          {faq.question}
                        </h3>
                        <p className="text-gray-600 leading-relaxed pl-14 text-lg font-light">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Final CTA */}
                <section className="bg-gradient-to-r from-gray-900 to-[#1a202c] rounded-[40px] p-8 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
                  <div className="relative z-10">
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight">Reclaim Your Financial <br /> Freedom with India's #1 Law Firm</h2>
                    <p className="text-lg md:text-2xl opacity-90 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
                      Don't settle for less than the best. Let our legal experts navigate the complex world of debt settlement on your behalf. Serving every corner of India.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                      <Link href="/contact">
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-black py-4 px-14 rounded-full transition-all transform hover:scale-110 shadow-2xl text-xl uppercase tracking-widest">
                          Contact AMA Legal Now
                        </button>
                      </Link>
                      <a href="tel:+918700343611">
                        <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-4 px-12 rounded-full transition-all text-xl uppercase tracking-widest">
                          Call: +91-8700343611
                        </button>
                      </a>
                    </div>
                  </div>
                </section>

              </div>
            </div>

            {/* Right Sidebar */}
            <div className="hidden lg:block space-y-8 sticky top-24">
                {/* CTA Container */}
                <div className="bg-gray-900 p-8 rounded-[30px] shadow-2xl text-white border-2 border-[#D2A02A]">
                  <h3 className="text-2xl font-black text-[#D2A02A] mb-6 uppercase tracking-tighter italic">Why AMA Legal?</h3>
                  <ul className="space-y-6 text-sm">
                    <li className="flex items-start gap-3">
                      <span className="text-[#D2A02A] text-xl">✓</span>
                      <p><span className="font-bold text-white">Legal Authority:</span> Full representation in any Indian court.</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#D2A02A] text-xl">✓</span>
                      <p><span className="font-bold text-white">Max Waivers:</span> We target the highest possible haircuts.</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#D2A02A] text-xl">✓</span>
                      <p><span className="font-bold text-white">Harassment Stop:</span> Legal notices that actually work.</p>
                    </li>
                  </ul>
                  <Link 
                    href="/contact" 
                    className="block w-full bg-[#D2A02A] text-black text-center py-4 rounded-2xl font-black hover:bg-white hover:text-black transition-all mt-8 uppercase tracking-widest text-xs"
                  >
                    Start Your Resolution
                  </Link>
                </div>

                {/* Related Pages Container */}
                <div className="bg-white p-8 rounded-[30px] shadow-lg border border-gray-100">
                  <h3 className="text-xl font-black text-gray-900 mb-6 border-b border-gray-100 pb-2 uppercase tracking-tighter italic">Related Resources</h3>
                  <ul className="space-y-4 text-sm">
                    <li>
                      <Link href="/services/loan-settlement" className="text-gray-600 hover:text-[#D2A02A] flex items-center group">
                        <span className="mr-3 text-[#D2A02A] group-hover:translate-x-1 transition-transform">→</span> 
                        Loan Settlement Services
                      </Link>
                    </li>
                    <li>
                      <Link href="/how-long-does-a-settled-tag-stay-on-my-report" className="text-gray-600 hover:text-[#D2A02A] flex items-center group">
                        <span className="mr-3 text-[#D2A02A] group-hover:translate-x-1 transition-transform">→</span> 
                        CIBIL Settled Tag Guide
                      </Link>
                    </li>
                    <li>
                      <Link href="/loan-settlement-amount-calculator" className="text-gray-600 hover:text-[#D2A02A] flex items-center group">
                        <span className="mr-3 text-[#D2A02A] group-hover:translate-x-1 transition-transform">→</span> 
                        Settlement Calculator
                      </Link>
                    </li>
                    <li>
                      <Link href="/what-is-ots" className="text-gray-600 hover:text-[#D2A02A] flex items-center group">
                        <span className="mr-3 text-[#D2A02A] group-hover:translate-x-1 transition-transform">→</span> 
                        What is OTS? (Full Guide)
                      </Link>
                    </li>
                    <li>
                      <Link href="/loan-recovery-agent-harassment-complaint-online" className="text-gray-600 hover:text-[#D2A02A] flex items-center group">
                        <span className="mr-3 text-[#D2A02A] group-hover:translate-x-1 transition-transform">→</span> 
                        Stop Agent Harassment
                      </Link>
                    </li>
                    <li>
                      <Link href="/how-to-negotiate-a-loan-settlement-with-lenders-online" className="text-gray-600 hover:text-[#D2A02A] flex items-center group">
                        <span className="mr-3 text-[#D2A02A] group-hover:translate-x-1 transition-transform">→</span> 
                        Online Negotiation Tips
                      </Link>
                    </li>
                  </ul>
                  
                  {/* App Links */}
                  <div className="mt-8 pt-8 border-t border-gray-100">
                    <p className="text-[10px] font-bold text-[#D2A02A] mb-4 uppercase tracking-[0.2em]">Legal Support On The Go</p>
                    <div className="flex flex-col gap-4">
                      <Link href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions" target="_blank" className="hover:opacity-80 transition-opacity">
                        <Image src="/newAssets/appstore.svg" alt="App Store" width={140} height={40} className="w-full h-auto max-w-[140px]" />
                      </Link>
                      <Link href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186" target="_blank" className="hover:opacity-80 transition-opacity">
                        <Image src="/newAssets/playstore.svg" alt="Play Store" width={140} height={40} className="w-full h-auto max-w-[140px]" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Mini Coverage */}
                <div className="bg-gray-100 p-6 rounded-[30px] border border-gray-200">
                   <p className="text-[9px] text-gray-400 leading-relaxed uppercase tracking-tighter">
                     We serve: Mumbai, Delhi, Bengaluru, Hyderabad, Ahmedabad, Chennai, Kolkata, Surat, Pune, Jaipur, Lucknow, Kanpur, Nagpur, Indore, Thane, Bhopal, Visakhapatnam, Pimpri-Chinchwad, Patna, Vadodara, Ghaziabad, Ludhiana, Agra, Nashik, Faridabad, Meerut, Rajkot, Kalyan-Dombivli, Vasai-Virar, Varanasi, Srinagar, Aurangabad, Dhanbad, Amritsar, Navi Mumbai, Allahabad, Ranchi, Howrah, Jabalpur, Gwalior, Vijayawada, Jodhpur, Madurai, Raipur, Kota, Guwahati, Chandigarh, Solapur, Hubballi-Dharwad, Bareilly, Moradabad, Mysore, Gurgaon, Aligarh, Jalandhar, Tiruchirappalli, Bhubaneswar, Salem, Mira-Bhayandar, Warangal, Guntur, Bhiwandi, Saharanpur, Gorakhpur, Bikaner, Amravati, Noida, Jamshedpur, Bhilai, Cuttack, Firozabad, Kochi, Nellore, Bhavnagar, Dehradun, Durgapur, Asansol, Rourkela, Nanded, Kolhapur, Ajmer, Gulbarga, Jamnagar, Ujjain, Loni, Siliguri, Jhansi, Ulhasnagar, Jammu, Sangli-Miraj & Kupwad, Mangalore, Belgaum, Kurnool, Ambattur, Rajahmundry, Tirunelveli, Malegaon, Gaya, Udaipur, Kakinada, Maheshtala.
                   </p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
