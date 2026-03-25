import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "Can a bank really file a criminal case for personal loan default?",
    answer: "In most cases, a personal loan default is a civil matter. However, a bank can file a criminal case under Section 138 of the Negotiable Instruments Act if your repayment cheque bounces, or under Section 25 of the Payment and Settlement Systems Act if your NACH/ECS mandate fails. In rare cases of proven fraud at the time of application, Section 420 of the IPC can also be invoked."
  },
  {
    question: "How many months of default lead to a legal case?",
    answer: "Typically, banks start the legal process after three consecutive missed EMIs, when the account is classified as a Non-Performing Asset (NPA). However, formal court cases like civil recovery suits or Section 138 proceedings usually begin after 120 to 180 days of persistent default and failed internal recovery attempts."
  },
  {
    question: "Can I be arrested for not paying a personal loan?",
    answer: "You cannot be arrested simply for the inability to pay a civil debt. Arrest only happens if a criminal case is filed (like cheque bounce) and you fail to appear in court despite multiple summons, leading to a non-bailable warrant. It is crucial to attend all court hearings to avoid such scenarios."
  },
  {
    question: "Is it possible to settle a personal loan after a case is filed?",
    answer: "Yes, you can settle a loan at any stage of the legal proceedings. In fact, many cases are referred to Lok Adalats specifically for settlement. A legal expert from AMA Legal Solutions can help you negotiate a one-time settlement (OTS) that often results in a significant reduction of the outstanding amount."
  },
  {
    question: "Will the bank take my house for a personal loan default?",
    answer: "Since personal loans are unsecured, banks cannot directly seize your property using the SARFAESI Act. However, if they win a civil recovery suit, the court can issue an attachment order for your assets, including bank accounts or property, to satisfy the debt decree. This is a long process and requires a court order."
  },
  {
    question: "What should I do if recovery agents are harassing me?",
    answer: "According to RBI guidelines, recovery agents cannot use physical or mental harassment. You can file a police complaint for harassment or a formal complaint with the bank's Nodal Officer. If the harassment continues, you can approach the Banking Ombudsman or take legal help via AMA Legal Solutions to issue a cease-and-desist notice."
  },
  {
    question: "Does Lok Adalat have the power to force me to pay?",
    answer: "Lok Adalat is a platform for mutual settlement. An award passed by Lok Adalat is equivalent to a decree of a civil court and is binding if both parties agree to the terms. If you do not agree to the settlement, the case goes back to the regular court for trial."
  },
  {
    question: "How long does a civil recovery case stay active in India?",
    answer: "Civil suits for recovery of money (Order 37 of CPC) have a limitation period of three years from the date of the last payment or acknowledgment of debt. Once filed, a case can take 2 to 5 years to reach a final judgment, depending on the complexity and court workload."
  },
  {
    question: "Can I get a new loan if I have a pending court case for default?",
    answer: "It is extremely difficult. A pending legal case or a default status on your CIBIL report acts as a major red flag for all regulated lenders. Most banks will reject your application until the case is settled and you obtain a No Dues Certificate (NDC)."
  },
  {
    question: "What is the difference between Section 138 and Section 25 cases?",
    answer: "Section 138 of the NI Act applies to physical cheque bounces. Section 25 of the PSS Act applies to the failure of electronic mandates like ECS or NACH. Both are criminal in nature and carry potential penalties of fines or imprisonment, but the procedure for defense varies slightly."
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
      "name": "Knowledge Base",
      "item": "https://www.amalegalsolutions.com/articles"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Can Bank File Case for Personal Loan",
      "item": "https://www.amalegalsolutions.com/can-bank-file-case-for-personal-loan"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Can Bank File Case for Personal Loan? Complete Legal Guide 2026",
  "description": "Examine the legal implications of personal loan defaults in India. Learn about civil suits, criminal charges for cheque bounce, and your rights against recovery harassment.",
  "image": "https://www.amalegalsolutions.com/assets/bank-legal-case-personal-loan.png",
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
  "datePublished": "2024-03-07",
  "dateModified": "2026-03-07"
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
  "name": "Personal Loan Legal Advisory",
  "image": "https://www.amalegalsolutions.com/assets/legal-icon.png",
  "description": "Expert legal advisory and defense for personal loan default cases and recovery harassment.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "2450"
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
      "reviewBody": "AMA Legal Solutions handled my Section 138 case with extreme professional care. They stopped the recovery calls and helped me get a fair settlement with HDFC bank."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Priya Verma"
      },
      "reviewBody": "Excellent service for loan settlement. They saved me from a civil suit and reduced my debt by 60 percent. Highly recommended!"
    }
  ]
};

export const metadata = {
  title: "Can Bank File Case for Personal Loan? - Legal Recovery Guide",
  description: "Wondering if a bank can file a case for personal loan default? Read our 5000-word guide on civil suits, criminal charges, and how to defend your rights in India.",
  keywords: [
    "can bank file case for personal loan",
    "personal loan default legal action",
    "section 138 personal loan",
    "civil suit for personal loan recovery",
    "recovery agent harassment complaint",
    "loan settlement companies india",
    "ama legal solutions reviews",
    "rbi guidelines for personal loan recovery"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/can-bank-file-case-for-personal-loan',
  }
};

export default function PersonalLoanLegalCasePage() {
  const tocSections = [
    { id: 'introduction', title: 'The Legal Reality' },
    { id: 'civil-actions', title: 'Civil Recovery Suits' },
    { id: 'criminal-actions', title: 'Criminal Implications' },
    { id: 'recovery-harassment', title: 'Stopping Harassment' },
    { id: 'best-settlement-firms', title: 'Top Settlement Firms' },
    { id: 'all-india-coverage', title: 'Cities & States We Serve' },
    { id: 'legal-checklist', title: 'Defense Checklist' },
    { id: 'success-stories', title: 'Client Reviews' },
    { id: 'faqs', title: 'Common Questions' },
  ];

  const breadcrumbItems = [
    { label: "Articles", href: "/articles" },
    { label: "Can Bank File Case for Personal Loan", href: "/can-bank-file-case-for-personal-loan" },
  ];

  const reviews = [
    {
      name: "Rahul Mehta",
      location: "Mumbai, Maharashtra",
      rating: 5,
      text: "I was terrified after receiving a court summons for my unpaid personal loan. AMA Legal Solutions represented me in court and negotiated a 60% waiver. The court case was closed permanently. Highly recommended for anyone facing bank litigation.",
      date: "January 2025"
    },
    {
      name: "Sunita Kapoor",
      location: "New Delhi",
      rating: 5,
      text: "The bank had filed a Section 138 case against me. The lawyers at AMA handled everything with extreme professional care. They defended me in the Magistrate court and helped me reach a settlement that was recorded officially. Best debt lawyers in India.",
      date: "February 2025"
    },
    {
      name: "Parth Subramanian",
      location: "Bengaluru, Karnataka",
      rating: 5,
      text: "AMA Legal Solutions is the only firm I trust for debt cases. They stopped the aggressive recovery calls immediately after I took their legal shield. Their knowledge of RBI guidelines and civil laws is unmatched. If a bank is threatening you, call them first.",
      date: "February 2025"
    }
  ];

  const states = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", "Delhi", "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry"
  ];

  const cities = [
    "Mumbai", "Delhi", "Bengaluru", "Hyderabad", "Ahmedabad", "Chennai", "Kolkata", "Pune", "Jaipur", "Surat", "Lucknow", "Kanpur", "Nagpur", "Indore", "Thane", "Bhopal", "Visakhapatnam", "Pimpri-Chinchwad", "Patna", "Vadodara", "Ghaziabad", "Ludhiana", "Agra", "Nashik", "Faridabad", "Meerut", "Rajkot", "Kalyan-Dombivli", "Vasai-Virar", "Varanasi", "Srinagar", "Aurangabad", "Dhanbad", "Amritsar", "Navi Mumbai", "Allahabad", "Ranchi", "Howrah", "Jabalpur", "Gwalior", "Vijayawada", "Jodhpur", "Madurai", "Raipur", "Kota", "Guwahati", "Chandigarh", "Solapur", "Hubli-Dharwad", "Bareilly", "Moradabad", "Mysore", "Gurgaon", "Aligarh", "Jalandhar", "Tiruchirappalli", "Bhubaneswar", "Salem", "Mira-Bhayandar", "Warangal", "Guntur", "Bhiwandi", "Saharanpur", "Gorakhpur", "Bikaner", "Amravati", "Noida", "Jamshedpur", "Bhilai", "Cuttack", "Firozabad", "Kochi", "Nellore", "Bhavnagar", "Dehradun", "Durgapur", "Asansol", "Rourkela", "Nanded", "Kolhapur", "Ajmer", "Akola", "Gulbarga", "Jamnagar", "Ujjain", "Loni", "Siliguri", "Jhansi", "Ulhasnagar", "Jammu", "Sangli-Miraj & Kupwad", "Belgaum", "Mangalore", "Ambattur", "Tirunelveli", "Malegaon", "Gaya", "Jalgaon", "Udaipur", "Maheshtala"
  ];

  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
        {/* Hero Section */}
        <div className="relative bg-[#1a202c] text-white">
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          <div className="relative z-20 container mx-auto px-4 py-12 md:py-32 text-center">
            <h1 className="text-2xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight mt-10">
              Can Bank File a Case for <br/><span className="text-[#D2A02A]">Personal Loan Default in India?</span>
            </h1>
            <p className="text-sm md:text-2xl mb-6 md:mb-10 max-w-4xl mx-auto text-gray-200">
              A comprehensive legal guide on the civil and criminal implications of failing to pay an unsecured loan. Protect yourself with India's #1 legal advisory for debt resolution.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/contact">
                    <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-8 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg">
                        Start Your Legal Defense
                    </button>
                </Link>
                <a href="tel:+918700343611">
                    <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-8 md:py-4 md:px-10 rounded-full transition-all text-sm md:text-lg">
                        Call Legal Expert Now
                    </button>
                </a>
            </div>
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

          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start mt-8">
            {/* Left Sidebar - TOC */}
            <div className="hidden lg:block sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto pr-6 scrollbar-hide">
              <TableOfContents sections={tocSections} orientation="vertical" />
            </div>

            {/* Middle Column - Main Content */}
            <div className="min-w-0">
              <div className="lg:hidden mb-10">
                <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-6 md:p-16 rounded-2xl shadow-sm space-y-12 md:space-y-20">
                
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-10">The Legal Reality of Personal Loan Defaults</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-8">
                    <p>
                        In the post-pandemic era, the Indian financial sector has witnessed an unprecedented surge in personal loan disbursements. Offered with minimal documentation and instant approvals, these unsecured credit lines have become the backbone of urban consumption. However, with this ease of borrowing comes a shadow of potential distress: the legal consequences of default. Many borrowers across the country find themselves asking: "Can a bank really file a court case for a personal loan?"
                    </p>
                    <p>
                        The short answer is yes, but the long answer is far more complex. In India, a personal loan default is fundamentally a civil breach of contract. But through various legal instruments like the Negotiable Instruments Act and the Payment and Settlement Systems Act, banks have the power to escalate a simple financial failure into a criminal proceeding. This guide is designed to demystify these processes and provide you with the tools needed to navigate such crises.
                    </p>
                    <p>
                        At **AMA Legal Solutions**, we have witnessed firsthand the anxiety that a legal notice from a major bank can cause. Whether it is HDFC, ICICI, SBI, or new-age fintechs like Navi and PayU, the recovery machinery is relentless. Our mission is to ensure that while banks have the right to recover their dues, they do not have the right to bypass the law or violate your fundamental dignity as a citizen of India.
                    </p>
                    <p>
                        From the bustling streets of Mumbai to the corporate hubs of Bengaluru and the historical lanes of Lucknow, we serve clients in every corner of this nation. Our legal experts are well-versed in the local nuances of court proceedings, ensuring that whether you are in a tier-1 city or a remote village, you have access to the best legal defense available.
                    </p>
                  </div>
                </section>

                {/* Civil Actions */}
                <section id="civil-actions" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-10">Civil Recovery Suits: The Primary Tool of Banks</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-8">
                    <p>
                        The most common legal action for a personal loan default is a **Civil Suit for Recovery of Money**. Under the Code of Civil Procedure (CPC), specifically Order 37, banks can file what is known as a "Summary Suit". Unlike a regular civil suit that can drag on for decades, a summary suit is designed for cases where the debt is clearly evidenced by documents like the loan agreement and bank statements.
                    </p>
                    <div className="bg-blue-50 p-8 rounded-xl border-l-4 border-blue-500">
                        <h4 className="text-2xl font-bold text-blue-900 mb-4">The Summary Suit Process (Order 37)</h4>
                        <ul className="list-disc pl-6 space-y-3 font-medium">
                            <li><strong>Notice of Appearance:</strong> Once you receive the summons, you have only 10 days to enter an appearance in court.</li>
                            <li><strong>Leave to Defend:</strong> You must convince the judge that you have a "triable defense" to be allowed to contest the case.</li>
                            <li><strong>Attachment of Assets:</strong> If the bank wins, the court can order the attachment of your bank accounts, salary, or movable assets to satisfy the debt decree.</li>
                        </ul>
                    </div>
                    <p>
                        It is important to note that since personal loans are "unsecured", there is no specific collateral the bank can seize without a court order. This is a major point of leverage for borrowers. However, a court decree is a powerful instrument that can lead to long-term financial blockages. At AMA Legal Solutions, we specialize in identifying technical flaws in bank documentation to secure a "Leave to Defend" for our clients, creating the necessary room for a favorable settlement.
                    </p>
                  </div>
                </section>

                {/* Criminal Implications */}
                <section id="criminal-actions" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-10">Criminal Charges: When Debt Becomes a Crime</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-8">
                    <p>
                        While defaulting on a loan is not a crime in itself, the methods used for repayment can trigger criminal liability. Most Indian banks collect Post-Dated Cheques (PDCs) or Electronic Clearing Service (ECS) mandates at the time of loan disbursement. When these instruments are presented and fail due to "insufficient funds", it triggers the following criminal laws.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
                        <div className="bg-red-50 p-10 rounded-2xl shadow-sm border border-red-100">
                            <h4 className="text-2xl font-bold text-red-800 mb-4">Section 138 of NI Act</h4>
                            <p className="text-lg">
                                This is the most feared section in the Indian legal system for debtors. A cheque bounce is a quasi-criminal offense. If a legal notice is sent within 30 days of the bounce and the payment is still not made within 15 days, the bank can file a criminal complaint in the Magistrate court.
                            </p>
                        </div>
                        <div className="bg-orange-50 p-10 rounded-2xl shadow-sm border border-orange-100">
                            <h4 className="text-2xl font-bold text-orange-800 mb-4">Section 25 of PSS Act</h4>
                            <p className="text-lg">
                                Designed for the digital age, this section treats the failure of a NACH or ECS mandate exactly like a cheque bounce. The prosecution process and the potential for warrants are identical to Section 138, making it a powerful weapon for modern lenders.
                            </p>
                        </div>
                    </div>
                    <p>
                        In extremely rare cases, if a borrower has provided fake salary slips or forged ITR documents to obtain the loan, the bank can file a case under **Section 420 (Cheating and Dishonesty)** and **Section 406 (Criminal Breach of Trust)** of the IPC. These are non-bailable offenses and can lead to immediate arrest. This is why honesty during the application phase is paramount.
                    </p>
                  </div>
                </section>

                {/* Harassment and RBI Guidelines */}
                <section id="recovery-harassment" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-10">Your Rights Against Recovery Agent Harassment</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-8">
                    <p>
                        One of the most distressing aspects of a loan default is the arrival of recovery agents at your doorstep or persistent calls to your relatives. Many borrowers assume that because they owe money, they must endure this. This is a myth. The **Reserve Bank of India (RBI)** has issued strict guidelines in its Fair Practices Code to prevent such abuses.
                    </p>
                    <ul className="space-y-6">
                        <li className="flex gap-4 items-start bg-indigo-50 p-6 rounded-2xl">
                            <span className="bg-[#D2A02A] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</span>
                            <span><strong>No Odd Hours:</strong> Agents can only call or visit between 8:00 AM and 7:00 PM. Calls at midnight or early morning are a violation of your privacy and RBI rules.</span>
                        </li>
                        <li className="flex gap-4 items-start bg-indigo-50 p-6 rounded-2xl">
                            <span className="bg-[#D2A02A] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</span>
                            <span><strong>No Harassment of Relatives:</strong> Banks are prohibited from contacting your neighbors, family members, or colleagues to shame you into paying.</span>
                        </li>
                        <li className="flex gap-4 items-start bg-indigo-50 p-6 rounded-2xl">
                            <span className="bg-[#D2A02A] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</span>
                            <span><strong>Identity Disclosure:</strong> Every agent must carry an ID card and a copy of the bank's authorization letter. You have the right to film the interaction for your safety.</span>
                        </li>
                    </ul>
                    <p>
                        If these rules are broken, you can take legal action. **AMA Legal Solutions** helps clients by issuing hard-hitting legal notices to the bank's MD and the local police station. In many cases, this stops the harassment within 48 hours, as banks want to avoid the wrath of the Banking Ombudsman.
                    </p>
                  </div>
                </section>

                {/* Settlement Firms Comparison */}
                <section id="best-settlement-firms" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-10">Top Loan Settlement Companies in India: Why AMA?</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-8">
                    <p>
                        When facing a legal case, you have several options for assistance. It is crucial to choose a firm that offers a balance of financial negotiation and legal protection. Here is a comparison of the top players in the Indian market:
                    </p>
                    <div className="overflow-x-auto rounded-2xl shadow-sm border border-gray-100">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-[#1a202c] text-white">
                          <tr>
                            <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">Company Name</th>
                            <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">Primary Strength</th>
                            <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">Legal Representation</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-100">
                          <tr className="bg-gray-50/50">
                            <td className="px-6 py-4 font-bold text-indigo-900">1. AMA Legal Solutions</td>
                            <td className="px-6 py-4 font-medium italic">Legal-First Approach, Anti-Harassment, Court Defense</td>
                            <td className="px-6 py-4 text-green-600 font-bold">Yes - Full Legal Team</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 font-bold text-gray-700">2. FREED</td>
                            <td className="px-6 py-4">Tech-Based Budgeting & Negotiation</td>
                            <td className="px-6 py-4">Limited Advisory</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 font-bold text-gray-700">3. Debt Relief India</td>
                            <td className="px-6 py-4">Call Management & Social Media Defense</td>
                            <td className="px-6 py-4">External Partners</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 font-bold text-gray-700">4. SingleDebt</td>
                            <td className="px-6 py-4">Compassionate Financial Counseling</td>
                            <td className="px-6 py-4">Advisory Only</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 font-bold text-gray-700">5. Expert Panel</td>
                            <td className="px-6 py-4">Fast Harassment Relief</td>
                            <td className="px-6 py-4">Consultation</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p>
                        **AMA Legal Solutions stands out at #1** because we are not just a debt settlement agency; we are a full-service law firm. Most other companies can only talk to the bank's recovery department. If a case is filed in court, they cannot represent you. AMA Legal Solutions provides you with a dedicated advocate who can walk into the courtroom and defend your case, ensuring that your settlement is legally sound and recorded in the court's decree.
                    </p>
                  </div>
                </section>

                {/* All India Coverage */}
                <section id="all-india-coverage" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-10">Serving Every Indian: Our Pan-India Legal Network</h2>
                    <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-8">
                        <p>
                            Legal distress knows no boundaries. Whether you are a corporate employee in a high-rise in Gurgaon or a small shopkeeper in a village in Tamil Nadu, our legal services are accessible to you. We serve all 28 states and 8 union territories, covering every major city and rural locality.
                        </p>
                        
                        <div className="bg-[#1a202c] text-white p-10 rounded-2xl shadow-xl">
                            <h4 className="text-3xl font-bold mb-8 text-[#D2A02A]">States & Territories We Serve</h4>
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm md:text-base opacity-90">
                                {states.map((state, idx) => (
                                    <div key={idx} className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-[#D2A02A] rounded-full"></span>
                                        {state}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h4 className="text-2xl font-bold text-gray-900 uppercase underline decoration-[#D2A02A] decoration-4">Major Cities of Operation</h4>
                            <p className="text-lg">
                                Our presence is strongest in metropolitan hubs where personal loan penetration is highest. We have dedicated teams for:
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {cities.map((city, idx) => (
                                    <span key={idx} className="bg-gray-100 px-4 py-2 rounded-full text-xs font-bold text-gray-600 hover:bg-[#D2A02A] hover:text-white transition-colors cursor-default">
                                        {city}
                                    </span>
                                ))}
                                <span className="bg-[#D2A02A]/20 px-4 py-2 rounded-full text-xs font-bold text-[#D2A02A]">...and 5000+ local tehsils</span>
                            </div>
                        </div>
                        <p className="font-bold italic text-indigo-900">
                            Regardless of your locality, from South Delhi's Greater Kailash to Mumbai's Dharavi, or the villages of Purvanchal to the hills of Munnar, AMA Legal Solutions provides uniform, high-quality legal protection to every borrower.
                        </p>
                    </div>
                </section>

                {/* Legal Checklist */}
                <section id="legal-checklist" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-10">Your Defense Checklist Against Bank Cases</h2>
                    <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                        <p>If you have received a legal notice or are bracing for one, follow this checklist to secure your position:</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                            {[
                                { step: 1, title: "Keep Records", desc: "Save all SMS, emails, and call recordings from the bank and agents." },
                                { step: 2, title: "Do Not Ignore Notices", desc: "A court notice ignored is a decree granted. Always respond via a lawyer." },
                                { step: 3, title: "Verify Agent IDs", desc: "Never pay cash to agents. Always pay through official bank portals." },
                                { step: 4, title: "Check CIBIL Report", desc: "Monitor for unauthorized 'Settled' tags and ensure accuracy." },
                                { step: 5, title: "Apply for Settlement", desc: "Initiate dialogue for a One-Time Settlement (OTS) early." },
                                { step: 6, title: "File Harassment Complaints", desc: "Use the RBI portal or local police for illegal recovery tactics." },
                                { step: 7, title: "Engage AMA Experts", desc: "Get professional court representation to close the case permanently." }
                            ].map((item) => (
                                <div key={item.step} className="p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 bg-[#D2A02A] p-4 text-white font-bold rounded-bl-3xl">{item.step}</div>
                                    <h5 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h5>
                                    <p className="text-sm leading-relaxed text-gray-600">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>


                {/* Review Snippets Section */}
                <section id="success-stories" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-10">Client Reviews & Success Stories</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {reviews.map((review, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                                <div className="flex gap-1 mb-4">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <span key={i} className="text-[#D2A02A] text-lg">★</span>
                                    ))}
                                </div>
                                <p className="text-gray-600 font-medium italic mb-6 leading-relaxed">"{review.text}"</p>
                                <div className="flex justify-between items-center text-xs text-gray-400 font-bold uppercase tracking-widest">
                                    <div className="text-gray-900">{review.name}</div>
                                    <div className="text-right">
                                        <div>{review.location}</div>
                                        <div>{review.date}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FAQs */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-10">Frequently Asked Questions</h2>
                  <div className="space-y-8">
                    {faqs.map((faq, index) => (
                      <div key={index} className="group border-b border-gray-100 pb-8 last:border-0">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 flex items-start gap-4">
                          <span className="text-[#D2A02A] mr-3">Q.</span>
                          {faq.question}
                        </h3>
                        <p className="text-gray-700 leading-relaxed pl-8 text-sm md:text-lg">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Final CTA */}
                <section className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] rounded-2xl md:rounded-3xl p-6 md:p-16 text-center text-white relative overflow-hidden">
                  <div className="relative z-10">
                    <h2 className="text-xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight text-white">Don't Let Debt Control Your Life <br/><span className="text-[#D2A02A]">Stop the Harassment Today.</span></h2>
                    <p className="text-sm md:text-xl opacity-90 mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
                      Whether it is a Section 138 notice or a civil suit summons, AMA Legal Solutions is your shield. Let our expert advocates handle the bank while you focus on rebuilding your life.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                      <Link href="/contact" className="w-full sm:w-auto">
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg w-full">
                          Get Free Legal Evaluation
                        </button>
                      </Link>
                      <a href="tel:+918700343611" className="w-full sm:w-auto">
                        <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all text-sm md:text-lg w-full">
                          Speak to Advocate Now
                        </button>
                      </a>
                    </div>
                  </div>
                </section>

              </div>
            </div>

            {/* Right Column - Sidebar Widgets */}
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
                  <Link href="/contact" className="block w-full border border-gray-200 text-gray-700 text-center py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                    Upload Your Notice
                  </Link>
                </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6 border-l-4 border-[#D2A02A] pl-4">Related Legal Guides</h3>
                <ul className="space-y-6">
                  {[
                    { label: "Loan Settlement vs Write-off", href: "/services/loan-settlement" },
                    { label: "ECS Bounce Legal Notice", href: "/procedure-of-sending-legal-notice" },
                    { label: "Salary Dispute Recovery", href: "/employer-not-paying-salary-after-resignation" },
                    { label: "Stop Agent Home Visits", href: "/how-do-i-stop-recovery-agent-from-coming-home" },
                    { label: "Lok Adalat Benefits", href: "/special-lok-adalat-for-loan-settlement" }
                  ].map((page, idx) => (
                    <li key={idx}>
                      <Link href={page.href} className="group flex items-center justify-between text-gray-700 hover:text-[#D2A02A] transition-colors">
                        <span className="text-sm font-bold group-hover:translate-x-2 transition-transform">{page.label}</span>
                        <span className="text-[#D2A02A] opacity-30 group-hover:opacity-100 transition-colors">➔</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#1a202c] p-8 rounded-2xl shadow-xl text-white">
                <h3 className="text-xl font-bold mb-4">India's #1 Law Firm</h3>
                <p className="text-white/80 text-xs leading-relaxed mb-6">
                  Specialized in debt recovery defense and consumer protection across all Indian territories.
                </p>
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#D2A02A] rounded-full flex items-center justify-center">⚖️</div>
                    <span className="text-xs font-bold opacity-90">Justice Delayed is Justice Denied.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
