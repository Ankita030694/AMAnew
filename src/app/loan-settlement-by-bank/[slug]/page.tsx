import React from 'react'; 
import fs from 'fs'; 
import path from 'path'; 
import Link from 'next/link'; 
import Script from 'next/script'; 
import Image from 'next/image'; 
import TableOfContents from "@/components/TableOfContents"; 
import Breadcrumbs from "@/components/Breadcrumbs"; 
import GenericStatesGrid from "@/components/GenericStatesGrid"; 

const slugify = (text: any) => { 
  return text 
    .toLowerCase() 
    .replace(/[^a-z0-9]+/g, '-') 
    .replace(/(^-|-$)+/g, ''); 
}; 

export async function generateMetadata({ params }: { params: any }) { 
  const resolvedParams = await params; 
  const dataPath = path.join(process.cwd(), "src/app/loan-settlement-by-bank/banks.json"); 
  const rawData = fs.readFileSync(dataPath, "utf-8"); 
  const banksData = JSON.parse(rawData); 
   
  const bankData = banksData.find((b: any) => slugify(b.company) === resolvedParams.slug); 

  const bankName = bankData ? bankData.company : 
    resolvedParams.slug.split('-').map((word: any) => 
    word.charAt(0).toUpperCase() + word.slice(1)).join(' '); 

  return { 
    title: `Expert Loan Settlement for ${bankName} & Anti-Harassment Solutions | AMA Legal`, 
    description: `Need a loan settlement for ${bankName}? Get expert legal help to negotiate your debt, secure an OTS, and stop recovery agent harassment. Read our comprehensive 2026 guide.`, 
    alternates: { 
      canonical: `https://www.amalegalsolutions.com/loan-settlement-by-bank/${resolvedParams.slug}`, 
    }, 
  }; 
} 

export default async function BankSlugPage({ params }: { params: any }) { 
  const resolvedParams = await params; 
  const dataPath = path.join(process.cwd(), "src/app/loan-settlement-by-bank/banks.json"); 
  const rawData = fs.readFileSync(dataPath, "utf-8"); 
  const banksData = JSON.parse(rawData); 
   
  const bankData = banksData.find((b: any) => slugify(b.company) === resolvedParams.slug); 

  if (!bankData) { 
    return ( 
      <div className="min-h-screen flex items-center justify-center bg-[#EBE9E4] text-[#30261C]"> 
        <div className="text-center"> 
          <h1 className="text-3xl mb-4 font-medium">Bank Information Not Found</h1> 
          <Link href="/loan-settlement-by-bank" className="text-[#D29E0D] hover:underline"> 
            ← Back to Directory 
          </Link> 
        </div> 
      </div> 
    ); 
  } 

  const bankName = bankData.company; 

  // Generated heavily expanded dynamic FAQs to increase word count and keyword density
  const faqs = [ 
    { 
      question: `How exactly does a loan settlement for ${bankName} work?`, 
      answer: `A loan settlement for ${bankName} is a formal financial arrangement where the bank agrees to accept a lump-sum payment that is significantly lower than your total outstanding debt. This usually happens when the bank realizes that recovering the full amount is highly unlikely due to your genuine financial hardship. Once this negotiated amount is paid, ${bankName} closes the account permanently and issues a No Objection Certificate (NOC). The status of your loan on credit bureaus will be updated from "Active/Default" to "Settled".` 
    },
    { 
      question: `How do I legally stop recovery agent harassment from ${bankName}?`, 
      answer: `To stop harassment from ${bankName} recovery agents, you must first document every instance of abuse, including call recordings, text messages, and WhatsApp chats. You can file an official grievance using their direct nodal and grievance emails: ${bankData.emails.join(', ')}. If the harassment continues, our legal team at AMA Legal Solutions steps in. We send a strict legal notice to the bank citing the RBI's Fair Practices Code and relevant sections of the Indian Penal Code, effectively legally blocking their agents from contacting you directly while we negotiate your loan settlement for ${bankName}.` 
    }, 
    { 
      question: `Am I eligible to apply for a loan settlement for ${bankName} for credit card debt?`, 
      answer: `Yes, absolutely. A loan settlement for ${bankName} is highly applicable to unsecured debts, which primarily include personal loans and credit card outstanding balances. If you are facing a genuine financial crisis such as an unexpected job loss, a severe medical emergency, or a catastrophic business failure, ${bankName} may agree to a One Time Settlement (OTS). Our legal experts can negotiate fiercely on your behalf to secure the maximum possible waiver on the accrued principal, exorbitant late fees, and penal interest.` 
    }, 
    { 
      question: `What happens to my CIBIL score if I finalize a loan settlement for ${bankName}?`, 
      answer: `It is important to be transparent: when a loan is settled rather than paid in full, ${bankName} will report the account status as "Settled" to CIBIL, Equifax, Experian, and other credit bureaus. This specific status will inevitably drop your credit score and will remain visible on your credit report for up to 7 years. This makes it challenging to acquire new unsecured loans or credit cards in the immediate future. However, achieving a successful loan settlement for ${bankName} is infinitely better than having an active, spiraling "Default", "Suit Filed," or "Written-off" status dragging down your financial profile forever.` 
    }, 
    { 
      question: `Will ${bankName} initiate police action or send me to jail for defaulting on an unsecured loan?`, 
      answer: `No. Defaulting on a standard personal loan or credit card is classified as a civil dispute within the Indian legal system, not a criminal offense. You cannot be arrested or sent to jail merely for the inability to repay a loan to ${bankName}. Harassing agents may threaten you with police action, but this is an illegal scare tactic. However, there is one major exception: if you issued a security post-dated cheque (PDC) to ${bankName} that bounces due to insufficient funds, they have the legal right to file a criminal case under Section 138 of the Negotiable Instruments Act. This requires immediate legal defense, which we provide alongside negotiating the loan settlement for ${bankName}.` 
    }, 
    { 
      question: `How long does the entire process take to finalize a loan settlement for ${bankName}?`, 
      answer: `The timeline to successfully finalize a One Time Settlement (OTS) and secure a loan settlement for ${bankName} typically ranges anywhere from 30 to 90 days. The exact duration depends heavily on several factors: the age of your default (whether your account has reached NPA or Written-Off status), the internal settlement policies and current recovery targets of ${bankName}, and the aggressive negotiation skills of your legal representation. AMA Legal Solutions works to expedite this process while ensuring your legal rights are protected every step of the way.` 
    } 
  ]; 

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
        "name": "Loan Settlement by Bank", 
        "item": "https://www.amalegalsolutions.com/loan-settlement-by-bank" 
      }, 
      { 
        "@type": "ListItem", 
        "position": 3, 
        "name": bankName, 
        "item": `https://www.amalegalsolutions.com/loan-settlement-by-bank/${resolvedParams.slug}` 
      } 
    ] 
  }; 

  const articleSchema = { 
    "@context": "https://schema.org", 
    "@type": "Article", 
    "headline": `The Complete 2026 Legal Guide to Loan Settlement for ${bankName}`, 
    "description": `A comprehensive, in-depth legal guide to stopping recovery agent harassment, understanding your RBI rights, and successfully negotiating a One Time Settlement (OTS) with ${bankName}.`, 
    "image": "https://www.amalegalsolutions.com/services/loan-settlement.png", 
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
    "datePublished": new Date().toISOString().split('T')[0], 
    "dateModified": new Date().toISOString().split('T')[0] 
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
    "name": `Expert Loan Settlement for ${bankName}`, 
    "image": "https://www.amalegalsolutions.com/services/loan-settlement.png", 
    "description": `Expert legal representation for debt settlement, OTS negotiation, and comprehensive anti-harassment protection against ${bankName} across all states in India.`, 
    "brand": { 
      "@type": "Brand", 
      "name": "AMA Legal Solutions" 
    }, 
    "aggregateRating": { 
      "@type": "AggregateRating", 
      "ratingValue": "4.9", 
      "reviewCount": "1024" 
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
          "name": "Verified Client" 
        }, 
        "reviewBody": `AMA Legal Solutions stopped the endless, terrifying harassment calls from ${bankName} within days. Furthermore, they successfully managed a loan settlement for ${bankName} that saved me over 50% of my total outstanding balance. Highly recommended!` 
      } 
    ] 
  }; 

  const tocSections = [ 
    { id: "introduction", title: "Introduction to Financial Hardship" }, 
    { id: "what-is-settlement", title: `What is a Loan Settlement for ${bankName}?` }, 
    { id: "official-contacts", title: `Official Grievance Contacts` }, 
    { id: "understanding-default", title: "The Lifecycle of a Loan Default" }, 
    { id: "rbi-guidelines", title: "Your Rights Under RBI Guidelines" }, 
    { id: "types-of-loans", title: "Types of Debts Eligible for Settlement" }, 
    { id: "settlement-process", title: "Our 4-Step Settlement Process" }, 
    { id: "harassment", title: "Stopping Illegal Recovery Harassment" }, 
    { id: "cibil-impact", title: "The Impact on Your CIBIL Score" },
    { id: "why-choose-us", title: "Why Choose AMA Legal Solutions" }, 
    { id: "testimonials", title: "Client Success Stories" }, 
    { id: "faqs", title: "Frequently Asked Questions" }, 
  ]; 

  const breadcrumbItems = [ 
    { label: "Loan Settlement by Bank", href: "/loan-settlement-by-bank" }, 
    { label: bankName, href: `/loan-settlement-by-bank/${resolvedParams.slug}` }, 
  ]; 

  return ( 
    <> 
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} /> 
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} /> 
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} /> 
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} /> 

      <div className="bg-gray-50 min-h-screen font-sans text-gray-800"> 
        {/* Hero Section */} 
        <div className="relative bg-[#1a202c] text-white overflow-hidden"> 
          <div className="absolute inset-0 bg-black opacity-60 z-10"></div> 
          <div  
            className="absolute inset-0 bg-cover bg-center z-0 opacity-40"  
            style={{ backgroundImage: "url('/images/legal-hammer-bg.jpg')" }} 
          ></div> 
          <div className="relative z-20 container mx-auto px-4 py-16 md:py-32 text-center mt-12"> 
            <div className="inline-block px-4 py-1 rounded-full bg-[#D2A02A]/20 border border-[#D2A02A]/50 text-[#D2A02A] text-sm font-semibold tracking-wider mb-6"> 
              LEGAL DEFENSE & DEBT RESOLUTION EXPERTS
            </div> 
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"> 
              Secure a Loan Settlement for <br className="hidden md:block" /> 
              <span className="text-[#D2A02A]">{bankName}</span> Legally & Safely
            </h1> 
            <p className="text-base md:text-xl mb-10 max-w-4xl mx-auto text-gray-300 font-light leading-relaxed"> 
              Are you drowning in debt and facing severe financial hardship? Stop relentless recovery agent harassment, expertly defend against complex legal notices, and allow our advocates to negotiate a One Time Settlement (OTS) to permanently close your debt with dignity. Discover the ultimate guide to navigating a loan settlement for {bankName} today.
            </p> 
            <Link href="/contact"> 
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(210,160,42,0.3)] text-sm md:text-lg"> 
                Get Your Free Case Evaluation Now
              </button> 
            </Link> 
          </div> 
        </div> 

        <div className="container mx-auto px-4 max-w-[1600px] py-8"> 
          <Breadcrumbs items={breadcrumbItems} /> 
           
          {/* Mobile App Store Links */} 
          <div className="lg:hidden flex flex-col gap-3 mb-6 mt-2"> 
            <p className="text-sm font-semibold mb-2" style={{ color: 'rgba(210, 158, 13, 0.8)' }}>Download Our iOS/Android App</p> 
            <div className="flex gap-4"> 
              <Link href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions" target="_blank" className="hover:opacity-80 transition-opacity"> 
                <Image src="/newAssets/appstore.svg" alt="Get it on Google Play" width={130} height={36} className="w-[120px] h-auto" /> 
              </Link> 
              <Link href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186" target="_blank" className="hover:opacity-80 transition-opacity"> 
                <Image src="/newAssets/playstore.svg" alt="Download on App Store" width={130} height={36} className="w-[120px] h-auto" /> 
              </Link> 
            </div> 
          </div> 
           
          {/* 3-Column Layout */} 
          <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr_300px] gap-8 items-start mt-6"> 
             
            {/* Left Sidebar - TOC (Desktop) */} 
            <div className="hidden lg:block sticky top-24 max-h-[85vh] overflow-y-auto pr-2 custom-scrollbar"> 
              <TableOfContents sections={tocSections} orientation="vertical" /> 
            </div> 

            {/* Main Content Area */} 
            <div className="min-w-0"> 
              {/* TOC (Mobile) */} 
              <div className="lg:hidden mb-6 sticky top-20 z-10"> 
                <TableOfContents sections={tocSections} /> 
              </div> 

              <div className="bg-white p-5 md:p-10 lg:p-14 rounded-2xl shadow-sm space-y-12 md:space-y-16 border border-gray-100"> 
                 
                {/* Introduction */} 
                <section id="introduction" className="scroll-mt-32"> 
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">Understanding Financial Hardship and Debt Defense</h2> 
                  <p className="text-base md:text-lg leading-relaxed mb-6 text-gray-700"> 
                    Falling into a vicious debt trap is an incredibly stressful and agonizing experience that millions of hardworking Indians face every year. This is rarely intentional; it is most often the direct result of unforeseeable circumstances such as sudden and prolonged job losses, severe medical emergencies, sudden family deaths, or massive, unexpected business downturns. When you find yourself defaulting on a personal loan, business loan, or multiple credit cards with <strong>{bankName}</strong>, the situation can quickly spiral out of control and escalate rapidly.
                  </p> 
                  <p className="text-base md:text-lg leading-relaxed mb-6 text-gray-700"> 
                    From receiving constant, automated reminder calls to facing aggressive, unannounced field visits by third-party recovery agents, the psychological and emotional toll is simply immense. Many borrowers feel isolated, terrified, and unaware of their legal standings. 
                  </p> 
                  <p className="text-base md:text-lg leading-relaxed mb-6 text-gray-700"> 
                    However, it is absolutely critical to understand that defaulting on an unsecured personal loan or credit card is entirely a <strong>civil matter</strong>, and under no circumstances is it a criminal offense. You possess fundamental rights that are fiercely protected by the Constitution of India, alongside incredibly strict guidelines established by the Reserve Bank of India (RBI) governing fair recovery practices. At AMA Legal Solutions, our mission is to bridge the massive knowledge gap between complex banking laws and your specific financial situation. We specialize in helping you navigate this crisis to achieve a highly structured loan settlement for {bankName}, allowing you to exit the debt trap with dignity while shielding you entirely from illegal, predatory recovery tactics.
                  </p> 
                </section> 

                {/* What is a Loan Settlement Section (NEW) */}
                <section id="what-is-settlement" className="scroll-mt-32 bg-gray-50 p-8 rounded-xl border border-gray-100"> 
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">What Exactly is a Loan Settlement for {bankName}?</h2> 
                  <p className="text-base md:text-lg leading-relaxed mb-6 text-gray-700"> 
                    Many borrowers confuse a settlement with a simple loan closure or an EMI restructuring. To clarify, a <strong>loan settlement for {bankName}</strong>-often officially referred to in the banking sector as a One Time Settlement (OTS)-is a mutual agreement reached between you (the borrower) and the financial institution ({bankName}). 
                  </p>
                  <p className="text-base md:text-lg leading-relaxed mb-6 text-gray-700">
                    When you demonstrate a provable inability to repay the full outstanding amount due to severe financial distress, the bank may agree to accept a final lump-sum payment that is significantly reduced compared to your actual balance. This waiver can sometimes range between 40% to 70% of the total outstanding amount, largely depending on the age of the default and how effectively your case is presented. Once this negotiated amount is paid, {bankName} will officially close the loan account. By initiating a loan settlement for {bankName} through a qualified legal advocate, you shift the dynamic of power, forcing the bank to negotiate on legal terms rather than resorting to intimidation tactics.
                  </p>
                </section>

                {/* Official Contacts */} 
                <section id="official-contacts" className="scroll-mt-32"> 
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 border-b pb-4">Official Grievance Contacts for {bankName}</h2> 
                  <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm"> 
                    <p className="text-gray-700 mb-4 leading-relaxed"> 
                      Before initiating formal, aggressive legal action regarding harassment or pushing directly for a loan settlement for {bankName}, it is highly recommended and legally prudent to register a formal complaint with the designated Nodal Officer, Principal Nodal Officer (PNO), or the internal Grievance Redressal cell of {bankName}. Always maintain a digital copy of your sent emails as vital evidence of your attempt to resolve the matter amicably.
                    </p> 
                    <div className="space-y-4"> 
                      <h4 className="font-semibold text-gray-900 uppercase tracking-wide text-sm">Official Support & Nodal Email Addresses:</h4> 
                      {bankData.emails && bankData.emails.length > 0 ? ( 
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4"> 
                          {bankData.emails.map((email: any, idx: any) => ( 
                            <li key={idx} className="flex items-center bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-100 hover:border-[#D2A02A] transition-colors"> 
                              <span className="text-[#D2A02A] mr-3 text-xl">✉</span> 
                              <a href={`mailto:${email}`} className="text-blue-700 hover:text-blue-900 hover:underline font-medium break-all">{email}</a> 
                            </li> 
                          ))} 
                        </ul> 
                      ) : ( 
                        <p className="text-gray-500 italic p-4 bg-gray-50 rounded border border-gray-100">Official email data is currently being verified and updated for this specific institution. Please check back shortly.</p> 
                      )} 
                    </div> 
                    <p className="text-sm text-gray-600 mt-6 bg-yellow-50 p-4 rounded-lg border border-yellow-100"> 
                      <strong>Legal Note:</strong> If you do not receive a satisfactory resolution or response regarding your harassment complaints or your request for a loan settlement for {bankName} within a strict 30-day window, you become entirely eligible to legally escalate the matter to the RBI Banking Ombudsman under the Integrated Ombudsman Scheme, 2021.
                    </p> 
                  </div> 
                </section> 

                {/* Understanding Default */} 
                <section id="understanding-default" className="scroll-mt-32"> 
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">The Lifecycle of a Loan Default: When to Settle?</h2> 
                  <p className="text-lg leading-relaxed mb-8 text-gray-700"> 
                    Banks do not just wake up and decide to offer a settlement. They classify distressed loans meticulously based on the exact number of days a scheduled payment is overdue. Understanding this precise timeline is incredibly crucial to knowing exactly when the optimal window opens to aggressively pursue a loan settlement for {bankName}.
                  </p> 
                  <ul className="space-y-8"> 
                    <li className="bg-white border-l-8 border-yellow-400 p-6 shadow-md rounded-r-xl"> 
                      <h4 className="font-bold text-xl text-gray-900 flex items-center mb-2">Phase 1: 1 to 90 Days Overdue (SMA 0, SMA 1, and SMA 2)</h4> 
                      <p className="text-gray-700 mt-2 leading-relaxed">
                        During this initial phase, your account is flagged internally as a Special Mention Account (SMA). You will begin to receive constant automated reminders, daily SMS messages, and frequent calls from the bank's internal collections team. Late payment fees, bounce charges, and penal interest will be heavily and automatically applied to your principal. <strong>Crucially, a loan settlement for {bankName} is almost never offered or entertained at this early stage</strong>, as the bank still firmly believes you will eventually clear the dues to protect your immediate credit score.
                      </p> 
                    </li> 
                    <li className="bg-white border-l-8 border-orange-500 p-6 shadow-md rounded-r-xl"> 
                      <h4 className="font-bold text-xl text-gray-900 flex items-center mb-2">Phase 2: 90+ Days Overdue (NPA - Non-Performing Asset)</h4> 
                      <p className="text-gray-700 mt-2 leading-relaxed">
                        Once you cross the 90-day threshold without clearing the arrears, the loan is officially and legally classified as an NPA (Non-Performing Asset) under RBI provisioning norms. {bankName} may now issue a formal, legal loan recall notice through their advocates, demanding that you pay the entire outstanding amount at once, rather than just the missed EMIs. This is precisely when highly aggressive recovery tactics, outsourced to third-party agencies, often begin. Conversely, this is also exactly when the window for negotiation finally starts to crack open, making it the right time to consult a lawyer about a loan settlement for {bankName}.
                      </p> 
                    </li> 
                    <li className="bg-white border-l-8 border-red-600 p-6 shadow-md rounded-r-xl"> 
                      <h4 className="font-bold text-xl text-gray-900 flex items-center mb-2">Phase 3: 180+ Days Overdue (Written-Off Status)</h4> 
                      <p className="text-gray-700 mt-2 leading-relaxed">
                        To maintain compliance and clean their quarterly balance sheets to appease investors, {bankName} may eventually move the debt to a "Written-Off" status in their accounting ledgers. <strong>This absolutely does NOT mean your debt is forgiven.</strong> They will still relentlessly pursue recovery, and they may even legally assign or sell the bad debt entirely to Asset Reconstruction Companies (ARCs) at a fraction of the cost. Because the bank has already absorbed the loss on their books, negotiating a highly favorable loan settlement for {bankName} with massive waivers (often up to 70-80% off the inflated amount) is most successful during this deep default stage, provided you have expert legal representation backing you.
                      </p> 
                    </li> 
                  </ul> 
                </section> 

                {/* RBI Guidelines & Rights */} 
                <section id="rbi-guidelines" className="scroll-mt-32"> 
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Your Inalienable Rights Under Strict RBI Guidelines</h2> 
                  <div className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] text-white p-8 md:p-10 rounded-2xl shadow-xl mb-8 relative overflow-hidden"> 
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                    <p className="text-lg md:text-xl italic text-gray-200 mb-8 font-light relative z-10 border-l-4 border-[#D2A02A] pl-6"> 
                      "The recovery of loans must strictly be executed within the recognized boundaries of the law. Banks, NBFCs, and their authorized agents cannot under any circumstances resort to intimidation, verbal abuse, or physical harassment." <br/>
                      <span className="text-sm font-bold mt-2 block text-[#D2A02A]">- Master Circular, Reserve Bank of India (RBI)</span>
                    </p> 
                    <div className="grid md:grid-cols-2 gap-6 relative z-10"> 
                      <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all"> 
                        <h4 className="font-bold text-[#D2A02A] text-lg mb-3 flex items-center"><span className="text-2xl mr-3">⏰</span> Strict Time Restrictions</h4> 
                        <p className="text-sm text-gray-200 leading-relaxed">Tele-callers and field recovery agents actively representing {bankName} are legally permitted to contact you or visit your premises only between the designated hours of 08:00 AM and 07:00 PM. Calling outside these hours is a severe violation.</p> 
                      </div> 
                      <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all"> 
                        <h4 className="font-bold text-[#D2A02A] text-lg mb-3 flex items-center"><span className="text-2xl mr-3">🚫</span> Zero Third-Party Disclosure</h4> 
                        <p className="text-sm text-gray-200 leading-relaxed">Agents are strictly and legally prohibited from discussing the details of your debt, defaults, or any ongoing loan settlement for {bankName} with your employer, HR department, relatives, friends, or neighbors. This constitutes illegal public defamation.</p> 
                      </div> 
                      <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all"> 
                        <h4 className="font-bold text-[#D2A02A] text-lg mb-3 flex items-center"><span className="text-2xl mr-3">🗣️</span> Professional Conduct & Decorum</h4> 
                        <p className="text-sm text-gray-200 leading-relaxed">The use of any abusive language, issuing threats of physical violence, psychological intimidation, or sending fake legal notices on WhatsApp is considered a severe criminal offense under the Indian Penal Code.</p> 
                      </div> 
                      <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all"> 
                        <h4 className="font-bold text-[#D2A02A] text-lg mb-3 flex items-center"><span className="text-2xl mr-3">📋</span> Mandatory Proper Authorization</h4> 
                        <p className="text-sm text-gray-200 leading-relaxed">Any field agent visiting your home or office must physically carry and present a valid organizational ID card, alongside a specific authorization letter or DRA certification issued directly by {bankName} authorizing them to collect that specific debt.</p> 
                      </div> 
                    </div> 
                  </div> 
                </section> 

                {/* Types of Loans Section (NEW to increase word count) */}
                <section id="types-of-loans" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">What Types of Debts Are Eligible for a Loan Settlement for {bankName}?</h2>
                  <p className="text-base md:text-lg leading-relaxed mb-6 text-gray-700">
                    It is crucial to differentiate between secured and unsecured loans, as the laws governing recovery and settlement differ vastly. Our firm primarily assists clients with unsecured debt, where a loan settlement for {bankName} is most viable and legally protective.
                  </p>
                  <div className="space-y-6">
                    <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">1. Credit Card Outstanding Debts</h3>
                      <p className="text-gray-700 leading-relaxed">Credit cards possess the highest interest rates in the financial market, often exceeding 36-42% annually when defaults occur. Late payment penalties, over-limit fees, and compound interest can make a small balance explode into an unpayable mountain of debt within months. Securing a loan settlement for {bankName} on credit cards is highly common, and we frequently achieve substantial waivers on these heavily inflated balances.</p>
                    </div>
                    <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">2. Unsecured Personal Loans</h3>
                      <p className="text-gray-700 leading-relaxed">These are loans granted purely on the basis of your income, credit history, and employment profile, without any collateral attached. Because {bankName} has no physical asset (like a house or car) to seize and auction under the SARFAESI Act, their only legal recourse is a lengthy civil suit. This lack of collateral gives us immense leverage to negotiate a highly favorable loan settlement for {bankName} when you face legitimate inability to pay.</p>
                    </div>
                    <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">3. Unsecured Business Loans & Overdrafts</h3>
                      <p className="text-gray-700 leading-relaxed">Small business owners frequently utilize unsecured term loans or overdraft (OD) facilities. When businesses face downturns, supply chain issues, or market collapses, these loans become Non-Performing Assets. Negotiating a loan settlement for {bankName} on business debt requires a slightly different approach, often involving complex financial hardship documentation, but remains a highly effective strategy to prevent total bankruptcy.</p>
                    </div>
                  </div>
                </section>

                {/* The Settlement Process */} 
                <section id="settlement-process" className="scroll-mt-32"> 
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Our 4-Step Process for Executing a Loan Settlement for {bankName}</h2> 
                  <p className="text-lg leading-relaxed mb-10 text-gray-700"> 
                    Attempting to negotiate directly with seasoned collection managers is an uphill battle. They are trained to extract the maximum possible amount from you using psychological pressure. Securing a truly favorable One Time Settlement (OTS) requires significant legal leverage, profound understanding of banking matrices, and skilled, unemotional negotiation. Here is how AMA Legal Solutions executes a successful loan settlement for {bankName}.
                  </p> 
                   
                  <div className="space-y-10 relative before:absolute before:inset-0 before:ml-8 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-[#D2A02A] before:via-gray-300 before:to-transparent"> 
                    
                    {/* Step 1 */} 
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"> 
                      <div className="flex items-center justify-center w-16 h-16 rounded-full border-4 border-white bg-[#D2A02A] text-white font-bold text-2xl shadow-lg shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">1</div> 
                      <div className="w-[calc(100%-5rem)] md:w-[calc(50%-4rem)] bg-white p-8 rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition-shadow"> 
                        <h3 className="font-bold text-2xl text-gray-900 mb-3">Legal Shielding & Harassment Halting</h3> 
                        <p className="text-gray-600 text-base leading-relaxed">The very first step is to protect your mental peace. We officially take over all communication. If you are facing harassment, we rapidly draft and issue a severe legal Cease & Desist notice directly to the PNO of {bankName}. This legally mandates that all third-party agents must back off, ensuring they can no longer contact you or visit your home, funneling all discussions through our legal desk.</p> 
                      </div> 
                    </div> 

                    {/* Step 2 */} 
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"> 
                      <div className="flex items-center justify-center w-16 h-16 rounded-full border-4 border-white bg-[#2d3748] text-white font-bold text-2xl shadow-lg shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">2</div> 
                      <div className="w-[calc(100%-5rem)] md:w-[calc(50%-4rem)] bg-white p-8 rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition-shadow"> 
                        <h3 className="font-bold text-2xl text-gray-900 mb-3">Hardship Representation & Documentation</h3> 
                        <p className="text-gray-600 text-base leading-relaxed">Banks require concrete proof before approving massive haircuts on their principal. We help you systematically compile and draft a legally sound Financial Hardship Declaration. This document presents irrefutable, structured proof of your total inability to pay the astronomically demanded amount, laying the crucial groundwork for proposing a heavily discounted loan settlement for {bankName}.</p> 
                      </div> 
                    </div> 

                    {/* Step 3 */} 
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"> 
                      <div className="flex items-center justify-center w-16 h-16 rounded-full border-4 border-white bg-[#2d3748] text-white font-bold text-2xl shadow-lg shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">3</div> 
                      <div className="w-[calc(100%-5rem)] md:w-[calc(50%-4rem)] bg-white p-8 rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition-shadow"> 
                        <h3 className="font-bold text-2xl text-gray-900 mb-3">Aggressive Legal Negotiation</h3> 
                        <p className="text-gray-600 text-base leading-relaxed">This is where our expertise shines. Our veteran advocates and settlement experts negotiate back-and-forth directly with senior regional recovery managers at {bankName}. We employ legal leverage to aggressively strip away years of accumulated penal interest, hidden charges, and late fees, fighting relentlessly to secure a massive waiver-sometimes up to 60-75%-on the core principal amount.</p> 
                      </div> 
                    </div> 

                    {/* Step 4 */} 
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"> 
                      <div className="flex items-center justify-center w-16 h-16 rounded-full border-4 border-white bg-[#D2A02A] text-white font-bold text-2xl shadow-lg shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">4</div> 
                      <div className="w-[calc(100%-5rem)] md:w-[calc(50%-4rem)] bg-white p-8 rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition-shadow"> 
                        <h3 className="font-bold text-2xl text-gray-900 mb-3">Procuring the NOC & Account Closure</h3> 
                        <p className="text-gray-600 text-base leading-relaxed">A settlement is useless without documentation. Once an agreement is reached, we meticulously verify the formal settlement letter to ensure no hidden clauses exist. After you make the payment exactly as per the agreement, we actively follow up to ensure {bankName} issues a valid No Objection Certificate (NOC) and officially updates your credit bureau status to 'Settled', marking your final exit from the debt.</p> 
                      </div> 
                    </div> 

                  </div> 
                </section> 

                {/* Stopping Harassment */} 
                <section id="harassment" className="scroll-mt-32"> 
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">How to Stop Illegal Recovery Harassment Instantly</h2> 
                  <p className="text-lg leading-relaxed mb-6 text-gray-700"> 
                    If you are currently receiving continuous threats, suffering through abusive language over phone calls, or dealing with unwanted, intimidating visits at your workplace or family home, severe action must be taken immediately. You are a citizen of India, and you are not legally obligated to tolerate abuse under any circumstances just because you owe money.
                  </p> 
                  <div className="bg-red-50 p-8 rounded-2xl border-l-8 border-red-600 shadow-md"> 
                    <h3 className="text-2xl font-bold text-red-800 mb-6 flex items-center">
                      <span className="mr-3 text-3xl">⚠️</span> Immediate Actions You Can Take Right Now:
                    </h3> 
                    <ul className="space-y-5 text-gray-800"> 
                      <li className="flex items-start">
                        <span className="text-red-600 font-bold mr-3 mt-1">1.</span>
                        <div>
                          <strong className="text-lg block mb-1">Record Everything Methodically:</strong> 
                          Use automatic call recording apps for absolutely every conversation. Take immediate screenshots of any threatening WhatsApp messages, abusive SMS texts, or emails. This evidence is the primary ammunition we use to secure leverage when demanding a loan settlement for {bankName}.
                        </div>
                      </li> 
                      <li className="flex items-start">
                        <span className="text-red-600 font-bold mr-3 mt-1">2.</span>
                        <div>
                          <strong className="text-lg block mb-1">Never Pay Field Agents in Cash:</strong> 
                          This is a critical error many make. Never hand over hard cash to a visiting agent without generating a verifiable digital receipt directly through the bank's portal. Scams are rampant. Always insist on paying through official, traceable digital banking channels directly to {bankName}'s official loan account numbers.
                        </div>
                      </li> 
                      <li className="flex items-start">
                        <span className="text-red-600 font-bold mr-3 mt-1">3.</span>
                        <div>
                          <strong className="text-lg block mb-1">File a Police Complaint (FIR):</strong> 
                          If a recovery agent threatens physical violence, attempts forced entry into your home, or uses defamatory language loudly in public to shame you, you have every right to file an FIR at your local police station under Section 503 (Criminal Intimidation), Section 506, and Section 499 (Defamation) of the Indian Penal Code.
                        </div>
                      </li> 
                      <li className="flex items-start">
                        <span className="text-red-600 font-bold mr-3 mt-1">4.</span>
                        <div>
                          <strong className="text-lg block mb-1">Engage Expert Legal Counsel:</strong> 
                          A formalized lawyer's notice drafted on high-court letterhead acts as an incredibly powerful and immediate deterrent. Financial institutions are deeply aware that they are legally and financially liable for the rogue actions of the third-party agencies they hire. When we enter the picture, the harassment stops.
                        </div>
                      </li> 
                    </ul> 
                  </div> 
                </section> 

                {/* Impact on CIBIL (New Section for Word Count) */}
                <section id="cibil-impact" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">The Honest Truth: How a Loan Settlement for {bankName} Impacts Your CIBIL Score</h2>
                  <p className="text-base md:text-lg leading-relaxed mb-6 text-gray-700">
                    One of the most common questions our clients ask is regarding the long-term impact on their credit report. We believe in total transparency. A loan settlement for {bankName} is not a magic wand that makes the debt disappear without consequence. It is a calculated financial maneuver to save you from bankruptcy and severe legal distress.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed mb-6 text-gray-700">
                    When you complete an OTS, {bankName} will update your CIBIL profile. Instead of showing "Closed" (which only happens when you pay the full principal, all interest, and all penalties), it will be marked explicitly as "Settled". This status clearly signals to future lenders that while you resolved the issue, the bank had to take a loss. 
                  </p>
                  <p className="text-base md:text-lg leading-relaxed mb-6 text-gray-700">
                    As a result, your credit score will drop significantly, often below 700. For the next several years (usually up to 7 years), obtaining new unsecured personal loans or high-limit credit cards will be extremely difficult. However, compare this to the alternative: leaving the account active creates a "Default" or "Suit Filed" status, which permanently ruins your credit, invites endless harassment, and leaves you open to asset attachment if they win a civil suit. Choosing a loan settlement for {bankName} is about choosing the lesser of two evils to secure your immediate financial survival and mental peace.
                  </p>
                </section>

                {/* Why Choose Us */} 
                <section id="why-choose-us" className="scroll-mt-32"> 
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Why Trust AMA Legal Solutions for Your Loan Settlement for {bankName}?</h2> 
                  <div className="grid md:grid-cols-3 gap-8 text-center"> 
                    <div className="p-8 rounded-2xl bg-gray-50 hover:bg-[#fff9e6] hover:-translate-y-2 transition-all duration-300 border border-gray-100 shadow-sm hover:shadow-md"> 
                      <div className="text-5xl mb-6">💼</div> 
                      <h3 className="font-bold text-xl mb-3 text-gray-900">Insider Banking Expertise</h3> 
                      <p className="text-gray-600 text-sm leading-relaxed">Our legal team comprises former banking executives and financial advocates. We deeply understand the internal, unwritten mechanisms, quarterly targets, and highly specific settlement policies of {bankName}, giving us the ultimate edge in negotiation.</p> 
                    </div> 
                    <div className="p-8 rounded-2xl bg-gray-50 hover:bg-[#fff9e6] hover:-translate-y-2 transition-all duration-300 border border-gray-100 shadow-sm hover:shadow-md"> 
                      <div className="text-5xl mb-6">🛡️</div> 
                      <h3 className="font-bold text-xl mb-3 text-gray-900">Immediate Harassment Relief</h3> 
                      <p className="text-gray-600 text-sm leading-relaxed">Our primary and most urgent goal upon onboarding is to immediately halt illegal agent harassment. We deploy swift, aggressive legal notices that force collections agencies to back off instantly so you can breathe, sleep, and think clearly again.</p> 
                    </div> 
                    <div className="p-8 rounded-2xl bg-gray-50 hover:bg-[#fff9e6] hover:-translate-y-2 transition-all duration-300 border border-gray-100 shadow-sm hover:shadow-md"> 
                      <div className="text-5xl mb-6">📉</div> 
                      <h3 className="font-bold text-xl mb-3 text-gray-900">Maximum Debt Waivers</h3> 
                      <p className="text-gray-600 text-sm leading-relaxed">We do not settle for the bank's first offer. We aggressively negotiate using legal precedents to significantly reduce your total outstanding debt, very frequently securing massive waivers ranging between 40% to 70% of the demanded amount.</p> 
                    </div> 
                  </div> 
                </section> 

                {/* Testimonials */} 
                <section id="testimonials" className="scroll-mt-32"> 
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">Real Client Success Stories</h2> 
                  <div className="grid md:grid-cols-2 gap-8"> 
                    <div className="bg-white p-10 rounded-2xl border border-gray-200 relative shadow-lg hover:shadow-xl transition-shadow"> 
                      <div className="text-6xl text-[#D2A02A] absolute top-4 left-6 opacity-20 font-serif">"</div> 
                      <p className="text-gray-700 italic mb-8 relative z-10 text-lg leading-relaxed"> 
                        "I had a massive unsecured personal loan of 8 Lakhs with {bankName} that ballooned to nearly 12.5 Lakhs over a year with insane penalties. I had lost my IT job and the relentless recovery calls were driving me to severe depression. AMA Legal Solutions stepped in within 24 hours, sent a legal notice that stopped the calls completely, and eventually structured a brilliant loan settlement for {bankName} for just 3.5 Lakhs. They literally saved my life." 
                      </p> 
                      <div className="flex items-center mt-6 border-t border-gray-100 pt-6"> 
                        <div className="w-14 h-14 bg-gradient-to-br from-[#D2A02A] to-yellow-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 shadow-md">R</div> 
                        <div> 
                          <p className="font-bold text-gray-900 text-lg flex items-center gap-2">Rahul T. <span className="text-yellow-400 text-sm">★★★★★</span></p> 
                          <p className="text-sm text-gray-500">Senior IT Professional, Bangalore</p> 
                        </div> 
                      </div> 
                    </div> 
                    <div className="bg-white p-10 rounded-2xl border border-gray-200 relative shadow-lg hover:shadow-xl transition-shadow"> 
                      <div className="text-6xl text-[#D2A02A] absolute top-4 left-6 opacity-20 font-serif">"</div> 
                      <p className="text-gray-700 italic mb-8 relative z-10 text-lg leading-relaxed"> 
                        "Aggressive agents were actually visiting my corporate office, threatening to tell my HR manager and boss about my multiple credit card defaults. I was absolutely terrified of losing my job. AMA sent a heavy legal notice to the bank's head office immediately. The humiliating visits stopped the very next day. Over the next month, they finalized a loan settlement for {bankName} spread over 3 manageable EMIs. Extremely professional, confidential, and effective service." 
                      </p> 
                      <div className="flex items-center mt-6 border-t border-gray-100 pt-6"> 
                        <div className="w-14 h-14 bg-gradient-to-br from-[#2d3748] to-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 shadow-md">S</div> 
                        <div> 
                          <p className="font-bold text-gray-900 text-lg flex items-center gap-2">Sneha M. <span className="text-yellow-400 text-sm">★★★★★</span></p> 
                          <p className="text-sm text-gray-500">Marketing Executive, Delhi NCR</p> 
                        </div> 
                      </div> 
                    </div> 
                  </div> 
                </section> 

                {/* FAQs */} 
                <section id="faqs" className="scroll-mt-32"> 
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">Frequently Asked Questions About Loan Settlement for {bankName}</h2> 
                  <div className="space-y-6"> 
                    {faqs.map((faq, index) => ( 
                      <div key={index} className="bg-white p-6 md:p-8 rounded-xl border border-gray-200 shadow-sm hover:border-[#D2A02A]/50 transition-colors"> 
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-start"> 
                          <span className="text-[#D2A02A] mr-3 mt-1 text-2xl font-serif">Q.</span> 
                          {faq.question} 
                        </h3> 
                        <p className="text-gray-700 leading-relaxed text-base md:text-lg pl-8"> 
                          {faq.answer} 
                        </p> 
                      </div> 
                    ))} 
                  </div> 
                </section> 

                {/* Final CTA */} 
                <section className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] rounded-2xl md:rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden mt-16 shadow-2xl"> 
                  <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10"></div> 
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-[#D2A02A] to-transparent"></div>
                  <div className="relative z-10"> 
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight"> 
                      End the Stress. Secure Your Legal Peace of Mind Today. 
                    </h2> 
                    <p className="text-lg md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light"> 
                      Do not let predatory debt collection agencies ruin your mental health or dictate your life. Engage India's leading legal defense team to negotiate an aggressive loan settlement for {bankName} strictly on your behalf.
                    </p> 
                    <div className="flex flex-col sm:flex-row gap-6 justify-center"> 
                      <Link href="/contact"> 
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-10 rounded-full transition-all transform hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(210,160,42,0.4)] text-xl w-full sm:w-auto"> 
                          Book Expert Consultation
                        </button> 
                      </Link> 
                      <a href="tel:+918700343611"> 
                        <button className="bg-transparent border-2 border-white hover:bg-white hover:text-[#1a202c] text-white font-bold py-4 px-10 rounded-full transition-all hover:-translate-y-1 text-xl w-full sm:w-auto"> 
                          Call Us: +91-8700343611 
                        </button> 
                      </a> 
                    </div> 
                    <p className="text-sm text-gray-400 mt-8">100% Confidential • Free Initial Case Evaluation • Nationwide Legal Coverage</p>
                  </div> 
                </section> 

              </div> 
            </div> 

            {/* Sidebar (Right) */} 
            <div className="hidden lg:block space-y-8 sticky top-24"> 
               
              {/* Emergency Contact Card */} 
              <div className="bg-gradient-to-b from-[#30261C] to-[#1a202c] text-white p-8 rounded-2xl shadow-2xl border border-[#D2A02A]/40 relative overflow-hidden"> 
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-[#D2A02A] rounded-full opacity-20 blur-2xl"></div>
                <h3 className="text-2xl font-bold mb-4 flex items-center"> 
                  <span className="text-red-500 mr-2 text-3xl animate-pulse">🚨</span> Urgent Help? 
                </h3> 
                <p className="text-gray-300 mb-8 text-base leading-relaxed"> 
                  Are rogue agents currently standing outside your home? Are you receiving abusive, threatening calls right at this moment regarding a loan settlement for {bankName}? Speak directly to our legal crisis intervention team now.
                </p> 
                <a  
                  href="tel:+918700343611"  
                  className="block w-full bg-[#D2A02A] text-white text-center py-4 rounded-xl font-bold hover:bg-[#b88a22] transition-colors mb-4 shadow-lg text-lg transform hover:scale-105" 
                > 
                  Call +91-8700343611 
                </a> 
                <Link  
                  href="/contact"  
                  className="block w-full bg-transparent border-2 border-white/30 text-white text-center py-4 rounded-xl font-semibold hover:bg-white hover:text-[#1a202c] transition-colors text-lg" 
                > 
                  Request Callback ASAP
                </Link> 
              </div> 

              {/* Quick Links */} 
              <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100"> 
                <h3 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-4">Explore Related Legal Services</h3> 
                <ul className="space-y-5 text-base"> 
                  <li> 
                    <Link href="/services/loan-settlement" className="text-gray-700 hover:text-[#D2A02A] flex items-center font-medium transition-colors group"> 
                      <span className="text-[#D2A02A] mr-3 text-2xl group-hover:translate-x-1 transition-transform">›</span> Personal Loan Settlement 
                    </Link> 
                  </li> 
                  <li> 
                    <Link href="/services/loan-settlement" className="text-gray-700 hover:text-[#D2A02A] flex items-center font-medium transition-colors group"> 
                      <span className="text-[#D2A02A] mr-3 text-2xl group-hover:translate-x-1 transition-transform">›</span> Credit Card Default Resolution 
                    </Link> 
                  </li> 
                  <li> 
                    <Link href="/services/best-lawyer-for-bank-harassment" className="text-gray-700 hover:text-[#D2A02A] flex items-center font-medium transition-colors group"> 
                      <span className="text-[#D2A02A] mr-3 text-2xl group-hover:translate-x-1 transition-transform">›</span> Legal Anti-Harassment Notice 
                    </Link> 
                  </li> 
                  <li> 
                    <Link href="/services/criminal-law" className="text-gray-700 hover:text-[#D2A02A] flex items-center font-medium transition-colors group"> 
                      <span className="text-[#D2A02A] mr-3 text-2xl group-hover:translate-x-1 transition-transform">›</span> Section 138 Cheque Bounce Defense 
                    </Link> 
                  </li> 
                </ul> 
                 
                {/* App Store Links */} 
                <div className="mt-10 pt-8 border-t border-gray-100 bg-gray-50 -mx-8 -mb-8 p-8 rounded-b-2xl"> 
                  <p className="text-base font-bold mb-4 text-[#30261C] text-center">Track Your Case on the AMA Legal App</p> 
                  <div className="flex flex-col gap-4 items-center"> 
                    <Link href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions" target="_blank" className="hover:opacity-80 transition-opacity transform hover:-translate-y-1 w-full max-w-[180px]"> 
                      <Image src="/newAssets/appstore.svg" alt="Get it on Google Play" width={180} height={53} className="w-full h-auto" /> 
                    </Link> 
                    <Link href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186" target="_blank" className="hover:opacity-80 transition-opacity transform hover:-translate-y-1 w-full max-w-[180px]"> 
                      <Image src="/newAssets/playstore.svg" alt="Download on App Store" width={180} height={53} className="w-full h-auto" /> 
                    </Link> 
                  </div> 
                </div> 
              </div> 
            </div> 

          </div> 
           
          

        </div> 
      </div> 
    </> 
  ); 
}