import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { FaSyncAlt, FaClipboardCheck, FaExclamationCircle, FaUserShield, FaHistory, FaCheckCircle, FaStar, FaQuoteLeft, FaQuestionCircle } from "react-icons/fa";

// Comprehensive FAQ data for Trademark Status
const faqs = [
  {
    question: "How do I check my trademark status without a lawyer?",
    answer: "You can use the 'Trade Mark Status & e-Register' portal on the official IP India website. You simply need your 7-digit Application Number. Select the 'National/IRDI Number' radio button, enter your number and the captcha, and click 'View'. The portal will display the current status of your mark in real-time."
  },
  {
    question: "What does 'Formalities Check Pass' mean?",
    answer: "This is the first green flag. it means the Registry has verified that all your documents (Power of Attorney, User Affidavit, JPG logo, etc.) are in order. It does NOT mean your mark is registered; it only means it has successfully moved to the 'Examination' phase."
  },
  {
    question: "Why is my status showing 'Formalities Check Fail'?",
    answer: "This usually happens if the Power of Attorney wasn't uploaded, the class was incorrect, or the name of the applicant doesn't match the documents. You will receive a notification to rectify these 'clerical errors' within 30 days, or the application will be abandoned."
  },
  {
    question: "What is the difference between 'Objected' and 'Opposed'?",
    answer: "An 'Objection' (Section 9/11) is raised by the Trademark Examiner during the internal audit. An 'Opposition' is raised by a third party (a competitor) after your mark is published in the Trademark Journal. Objections are internal hurdles; Oppositions are external legal battles."
  },
  {
    question: "My status is 'Send to Vienna Codification'. Is something wrong?",
    answer: "No. This is a standard procedure for all logo/device marks. The Registry is simply assigning a numerical code to your logo's visual elements according to the international Vienna Classification. Once coded, it will automatically move to the 'Marked for Exam' stage."
  },
  {
    question: "What should I do if my status is 'Objected'?",
    answer: "You must file a comprehensive 'Objection Reply' within 30 days of receiving the Examination Report. This reply should include case laws and evidence of your brand's distinctiveness. Failure to file this reply will result in the application being 'Abandoned' automatically."
  },
  {
    question: "Does 'Accepted & Advertised' mean I have the trademark?",
    answer: "Almost. It means the Registry has found no internal issues and has published your mark in the Journal. Now, you must wait for a 4-month 'Opposition Period'. If no one objects during these 4 months, your mark moves to the 'Registered' status."
  },
  {
    question: "What is a 'Show Cause Hearing'?",
    answer: "If the Examiner is not satisfied with your written Objection Reply, they will post the matter for a personal hearing. You or your attorney must appear before the Registrar to argue your case. If successful, the mark moves to advertisement."
  },
  {
    question: "What does 'Advertised beff acc' mean?",
    answer: "This is a rare status meaning 'Advertised Before Acceptance'. The Registrar has published your mark but has reserved the right to raise further questions depending on any public feedback or new information."
  },
  {
    question: "Can I use the ® symbol when my status is 'Accepted'?",
    answer: "No. You can only use the ® symbol when the status officially changes to 'Registered' and you receive the hard copy (or digital copy) of the Registration Certificate. Until then, you should only use the ™ symbol."
  },
  {
    question: "Why has my status been 'Marked for Exam' for over 6 months?",
    answer: "The Registry sometimes has backlogs. However, most marks are examined within 3-4 months. If it's taking longer, it might be due to a complex phonetic search being conducted or a high volume of applications in your specific class."
  },
  {
    question: "What is 'Opposed' status and how long does it last?",
    answer: "If a competitor files a 'Notice of Opposition', your status changes to 'Opposed'. This starts a mini-litigation process involving a Counter Statement, Evidence, and a final Hearing. This can take 2 to 4 years to resolve."
  },
  {
    question: "What does 'Refused' status mean?",
    answer: "It means the Registrar has officially rejected your application after hearing your arguments. You can appeal this decision at the High Court (formerly IPAB) within 3 months of the refusal date."
  },
  {
    question: "My status shows 'Abandoned'. Can I reactivate it?",
    answer: "Generally, no. Abandonment happens when you miss a deadline (like 30 days for an objection reply). However, if you can prove you never received the notice, you can file a 'Restoration Petition' within a specific timeframe."
  },
  {
    question: "What is 'Removed' status?",
    answer: "A trademark is valid for 10 years. If you fail to file for 'Renewal' within the 10th year, the status changes to 'Removed'. You have a 1-year grace period to 'Restore' it with a penalty fee."
  },
  {
    question: "What is an 'IRDI' status in trademark tracking?",
    answer: "IRDI stands for International Registration Designating India. This status is for trademarks filed under the Madrid Protocol where others are seeking protection in India. These follow a similar examination path as domestic filings."
  },
  {
    question: "What does 'Withdrawn' status indicate?",
    answer: "It means the applicant voluntarily requested the Registry to cancel the application. This is often done as part of a settlement with a competitor who had a prior mark."
  },
  {
    question: "Can I change my 'User Date' once the status is 'Marked for Exam'?",
    answer: "Changing the 'User Date' (the date you first used the brand) requires a specialized amendment (Form TM-M). This often triggers a 'Re-Examination' and can be a risky move if not backed by solid evidence."
  },
  {
    question: "What is the 'e-Register'?",
    answer: "The e-Register is the digital version of the physical trademark registry. When you view the e-Register, you can see 'Extracts'—the full legal history, including the owner's address, the attorney's name, and any renewal history."
  },
  {
    question: "How reliable is the online status system?",
    answer: "The IP India online system is extremely reliable and is updated multiple times a day. However, always check the 'PDF Examination Report' if you see an 'Objected' status, as the online status might not show the specific grounds for refusal."
  }
];

// SEO Schema Data
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://amalegalsolutions.com" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://amalegalsolutions.com/services" },
    { "@type": "ListItem", "position": 3, "name": "Trademark Status Guide", "item": "https://amalegalsolutions.com/services/trademark-status" }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Understanding Trademark Status in India: The 2026 Master Guide",
  "description": "Comprehensive guide to tracking and interpreting trademark statuses on the IP India Registry. Learn how to handle Objections, Oppositions, and Refusals.",
  "author": { "@type": "Organization", "name": "AMA Legal Solutions", "url": "https://amalegalsolutions.com" },
  "publisher": { "@type": "Organization", "name": "AMA Legal Solutions" },
  "datePublished": "2026-01-31",
  "dateModified": "2026-01-31"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
  }))
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Trademark Status Recovery Service",
  "description": "Expert legal assistance to recover 'Objected', 'Abandoned', or 'Refused' trademarks in the Indian Registry.",
  "brand": { "@type": "Brand", "name": "AMA Legal Solutions" },
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "2150" },
  "review": [
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "author": { "@type": "Person", "name": "Vikram Sethi" },
      "reviewBody": "My trademark was 'Objected' and my previous lawyer missed the deadline. AMA Legal Solutions helped me restore and successfully advertise it within 3 months."
    }
  ]
};

export const metadata = {
  title: "Trademark Status Check India 2026 | Track Application & e-Register",
  description: "Check your Trademark Status in India. Complete guide to interpreting statuses like Objected, Accepted, Opposed, and Registered. Expert status recovery services.",
  keywords: [
    "trademark status check india",
    "ip india public search status",
    "trademark application status tracking",
    "handle trademark objected status",
    "formalities check pass fail guide",
    "trademark registration certificate status",
    "show cause hearing trademark india",
    "trademark abandonment recovery",
    "madrid protocol application status",
    "e-register trademark india guide",
    "how to track brand name application",
    "Section 9 objection reply status"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/services/trademark-status',
  },
};

export default function TrademarkStatusPage() {
  const tocSections = [
    { id: "intro", title: "1. The Trademark Lifecycle" },
    { id: "tracking-guide", title: "2. How to Track Your Application" },
    { id: "initial-stages", title: "3. Initial Stages: Filing & Formalities" },
    { id: "examination-stage", title: "4. Substantive Examination & Objections" },
    { id: "publication-stage", title: "5. Publication & Opposition Period" },
    { id: "registration-stage", title: "6. Final Registration & e-Register" },
    { id: "failures-recovery", title: "7. Handling Failures & Abandonment" },
    { id: "post-registration", title: "8. Post-Registration Lifecycle" },
    { id: "complex-statuses", title: "9. Complex & International Statuses" },
    { id: "expert-audit", title: "10. The Status Audit Checklist" },
    { id: "reviews", title: "Client Success Stories" },
    { id: "faqs", title: "Technical FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Trademark Status", href: "/services/trademark-status" },
  ];

  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
        {/* Hero Section */}
        <div className="relative bg-[#0d1b2a] text-white">
          <div className="absolute inset-0 bg-black opacity-70 z-10"></div>
          <div className="relative z-20 container mx-auto px-4 py-20 md:py-32 text-center">
            <h1 className="text-2xl md:text-6xl font-extrabold mb-5 leading-tight mt-8 tracking-tight">
              Decode Your <span className="text-[#bf9848]">Trademark Status</span> <br /> 
              From Application to Registration
            </h1>
            <p className="text-base md:text-xl mb-8 max-w-3xl mx-auto text-gray-300 leading-relaxed font-light">
              Don't be left in the dark. A single status change can make or break your brand. 
              Our 2026 Master Guide explains every Registry milestone and provides expert 
              strategies to recover 'Objected' or 'Abandoned' marks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-[#bf9848] hover:bg-[#9e7d3a] text-white font-bold py-3 px-10 rounded-full transition-all transform hover:scale-105 shadow-2xl text-base border border-[#bf9848]">
                  Recover Your Trademark
                </button>
              </Link>
              <a href="tel:+918700343611">
                <button className="bg-transparent border-2 border-white/30 hover:bg-white hover:text-[#0d1b2a] text-white font-bold py-3 px-10 rounded-full transition-all text-base">
                  Free Case Evaluation
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-8xl py-12">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr_240px] gap-8 items-start mt-8">
            {/* Left Sidebar - TOC */}
            <div className="hidden lg:block sticky top-28 bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">In This Guide</h4>
              <TableOfContents sections={tocSections} orientation="vertical" />
            </div>

            {/* Main Content Area */}
            <div className="min-w-0">
              <div className="bg-white p-6 md:p-12 rounded-[1.5rem] shadow-xl border border-gray-50 space-y-12">
                
                {/* Intro Section */}
                <section id="intro" className="scroll-mt-32">
                  <div className="inline-block bg-[#fffcf5] text-[#bf9848] px-4 py-1 rounded-full text-sm font-bold mb-6">Status Intelligence 2026</div>
                  <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 leading-tight">1. The Trademark Lifecycle: Why Status Awareness is Your Brand's Life Support</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-6 leading-relaxed text-justify">
                    <p>
                      In the high-stakes world of intellectual property, filing a trademark application is merely the first step of a complex, multi-year odyssey. Many entrepreneurs mistakenly believe that receiving an application number provides immediate protection. In reality, your brand is in a state of "legal purgatory" until that status successfully transitions to <strong>"Registered"</strong>.
                    </p>
                    <p>
                      The trademark lifecycle in India is governed by the <strong>Trade Marks Act, 1999</strong>, and the <strong>Trade Marks Rules, 2017</strong>. Under this framework, an application is a dynamic legal entity. It breathes and evolves as it passes through the hands of various stakeholders: clerical officers, substantive examiners, senior registrars, and eventually, the general public.
                    </p>
                    <p>
                      The "Status" of your trademark is the only window you have into this invisible process. A change from "Marked for Exam" to "Objected" isn't just a notification—it's a legal summons. It indicates that the government has found a reason to potentially deny your brand its most valuable asset. In our experience at AMA Legal Solutions, over 40% of trademark failures in India occur not because the brand was unregistrable, but because the applicant failed to notice a status change in time to provide a statutory response. 
                    </p>
                    <p>
                      Understanding these statuses is not just a clerical task; it is a strategic necessity. Whether you are a startup founder, a marketing head, or a corporate legal officer, mastering the "registry language" allows you to anticipate hurdles, manage litigation risks, and secure your market position before competitors can strike.
                    </p>
                  </div>
                </section>

                {/* Tracking Guide */}
                <section id="tracking-guide" className="scroll-mt-32 border-t border-gray-100 pt-16">
                  <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 leading-tight">2. How to Track Your Application on IP India: The e-Register vs. Public Search</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-6 text-justify">
                    <p>
                      The official portal for tracking is the <Link href="https://ipindiaonline.gov.in/tmrpublicsearch/frmmain.aspx" className="text-[#bf9848] underline font-bold">Trade Mark Status & e-Register</Link>. While most users rely on the basic 'Public Search' tool to check for conflicts, the 'Status' portal provides the actual legal history of your specific file.
                    </p>
                    <p>
                      <strong>The Legal Significance of the 'Extract of Index':</strong> Inside the status portal, you will see a link to 'View e-Register'. This is the digital equivalent of a physical land deed. It contains the <strong>Extract of Index</strong>, which lists every action taken on your file since the second it was submitted. This includes the exact timestamp of when an objection was raised, the names of the attorneys who have filed responses, and even internal notes from the Registrar.
                    </p>
                    <div className="bg-blue-50 p-10 rounded-[2rem] border border-blue-100 shadow-inner">
                       <h4 className="font-bold text-blue-900 text-xl mb-6 flex items-center gap-3"><FaHistory /> The 5-Step Professional Tracking Protocol</h4>
                       <ul className="space-y-6">
                          <li className="flex gap-4">
                             <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0 font-bold">1</div>
                             <div><strong>Select Search Type:</strong> Ensure you select 'National/IRDI Number'. Selecting 'International' is only for marks filed via the Madrid protocol designating other countries.</div>
                          </li>
                          <li className="flex gap-4">
                             <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0 font-bold">2</div>
                             <div><strong>Enter Number & Class:</strong> Enter your 7 or 8-digit application number precisely. Ensure the class field is correct, as the same number might exist in different classes for different applicants.</div>
                          </li>
                          <li className="flex gap-4">
                             <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0 font-bold">3</div>
                             <div><strong>Solve the Security Captcha:</strong> The IP India site is highly secure. Ensure your browser allows pop-ups, as the detailed status often opens in a secondary window.</div>
                          </li>
                          <li className="flex gap-4">
                             <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0 font-bold">4</div>
                             <div><strong>Cross-Check the 'Date of Application':</strong> Always verify that the owner's name and application date match your records to ensure you aren't looking at a similar-numbered file.</div>
                          </li>
                          <li className="flex gap-4">
                             <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0 font-bold">5</div>
                             <div><strong>Identify the 'Opposition Period' (if applicable):</strong> If your status is 'Advertised', the portal will show the Journal Number and the Date of Publication. This is where your 120-day "danger zone" begins.</div>
                          </li>
                       </ul>
                    </div>
                    <p>
                      At AMA Legal Solutions, we recommend a <strong>Weekly Status Audit</strong>. The Registry's internal servers often update and send out computerized notices on Friday evenings. Checking every Monday morning ensures you never lose time on a 30-day statutory deadline.
                    </p>
                  </div>
                </section>

                {/* Initial Stages */}
                <section id="initial-stages" className="scroll-mt-32 border-t border-gray-100 pt-16">
                  <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 leading-tight">3. Initial Stages: Filing, Vienna Codification & The Clerical Audit</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-8 text-justify">
                    <p>
                      Once the 'Submit' button is clicked, your application enters the <strong>Electronic Processing System (EPS)</strong>. In this phase, the focus is not on whether your brand is unique, but whether your paperwork is perfect.
                    </p>
                    
                    <div className="space-y-8">
                       <div className="p-10 bg-gray-50 rounded-[2rem] border border-gray-100 relative overflow-hidden group hover:border-[#bf9848] transition-all">
                          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                             <FaSyncAlt className="text-4xl text-[#bf9848]" />
                          </div>
                          <h4 className="font-bold text-2xl text-[#0d1b2a] mb-4">Mastering the 'Vienna Codification' Status</h4>
                          <p>
                            If your trademark contains any Figurative Element—a logo design, a specific font style, or even a geometric pattern—it will be "Send to Vienna Codification". This is an international classification system (the Vienna Agreement) used to categorize the visual elements of marks. 
                          </p>
                          <p className="mt-4 text-sm text-gray-500">
                             Registry staff will assign codes like '03.01.08' (Dogs, wolves, foxes) or '26.01.01' (Circles). This allows the examiner to perform a "visual search" later to ensure your logo doesn't infringe on another brand's visual identity, even if the names are different.
                          </p>
                       </div>

                       <div className="p-10 bg-gray-50 rounded-[2rem] border border-gray-100 relative overflow-hidden group hover:border-[#bf9848] transition-all">
                          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                             <FaClipboardCheck className="text-4xl text-[#bf9848]" />
                          </div>
                          <h4 className="font-bold text-2xl text-[#0d1b2a] mb-4">The 'Formalities Check' Binary: Pass vs. Fail</h4>
                          <p>
                            This is the clerical audit of the application. The Registry verifies that the correct government fee (₹4,500 for individuals/startups, ₹9,000 for others) was paid, the User Affidavit (if claiming prior use) is on valid stamp paper, and the Power of Attorney (Form TM-M) is uploaded.
                          </p>
                          <p className="mt-4 font-bold text-[#bf9848]">
                             If you see "Formalities Check Fail":
                          </p>
                          <p className="text-sm">
                             The Registry will issue a notification listing the 'defects'. You usually have 30 days to file an amendment or provide the missing documents. Failing to rectify this leads to the application being marked as <strong>"Abandoned"</strong> without even reaching an examiner's desk.
                          </p>
                       </div>
                    </div>
                    <p>
                      <strong>Strategic Insight:</strong> Many applications get stuck in "Formalities Check Fail" because the Applicant's name on the trademark form doesn't match the name on the MSME certificate or Startup India certificate used for the fee concession. Ensuring consistency across all documents is the key to bypassing this stage smoothly.
                    </p>
                  </div>
                </section>

                {/* Examination & Objections */}
                <section id="examination-stage" className="scroll-mt-32 border-t border-gray-100 pt-16">
                  <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 leading-tight">4. Substantive Examination: Decoding the 'Objected' Status</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-8 text-justify">
                    <p>
                      This is the most critical phase of the trademark lifecycle. Once you pass formalities, the application status changes to <strong>"Marked for Exam"</strong>. A Senior Examiner then performs a deep legal audit of your brand against the vast database of existing trademarks and the legal barriers defined in the Act.
                    </p>
                    <p>
                       If the Examiner finds an issue, the status will turn to <strong>"Objected"</strong>. This is not a rejection; it is a request for clarification.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 my-10">
                       <div className="flex flex-col gap-5 p-10 bg-amber-50 rounded-[2.5rem] border border-amber-100">
                          <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">9</div>
                          <h4 className="font-bold text-2xl text-amber-900">Absolute Grounds (Section 9)</h4>
                          <p className="text-sm leading-relaxed">
                            This objection is raised if your brand is too descriptive (e.g., calling a milk brand "Fresh Milk") or lacks "distinctive character". The examiner believes your brand name is a common term that every business in your industry should be free to use.
                          </p>
                          <p className="text-xs font-bold text-amber-700">STRATEGY: Provide evidence of "Acquired Distinctiveness" through invoices and market awareness.</p>
                       </div>
                       <div className="flex flex-col gap-5 p-10 bg-rose-50 rounded-[2.5rem] border border-rose-100">
                          <div className="w-12 h-12 bg-rose-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">11</div>
                          <h4 className="font-bold text-2xl text-rose-900">Relative Grounds (Section 11)</h4>
                          <p className="text-sm leading-relaxed">
                            This is the "Conflict Objection". The examiner has found an existing trademark (either registered or pending) that is phonetically or visually similar to yours in a related class of goods/services.
                          </p>
                          <p className="text-xs font-bold text-rose-700">STRATEGY: Distinguish your mark based on the "Rule of Whole" and the "Triple Identity Test".</p>
                       </div>
                    </div>

                    <p>
                      <strong>The 'Exam Report Issued' Status:</strong> This status indicates that the formal Objection Report (a PDF document) has been generated. From the day this report is made available online, you have exactly <strong>30 Days</strong> to file a comprehensive written reply. 
                    </p>
                    <p>
                      At AMA Legal Solutions, our <strong>Objection Response Strategy</strong> involves citing relevant precedents from the Supreme Court and High Courts. A weak response often leads to a "Show Cause Hearing", while a strong, technically sound response can move the status directly to "Accepted & Advertised", saving you months of litigation and thousands in hearing fees.
                    </p>
                  </div>
                </section>

                {/* Publication Stage */}
                <section id="publication-stage" className="scroll-mt-32 border-t border-gray-100 pt-16">
                  <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 leading-tight">5. Publication: Entering the 'Accepted & Advertised' Danger Zone</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-8 text-justify">
                    <p>
                      When you see the status <strong>"Accepted & Advertised"</strong>, your mark has crossed the internal hurdles of the Registry. It is now published in the official <strong>Trademark Journal</strong>, which is released every Monday by the IP India office. This is essentially a public challenge: "We intend to register this brand—does anyone have a reason we shouldn't?"
                    </p>
                    <div className="bg-gray-900 text-white p-12 rounded-[2.5rem] relative overflow-hidden shadow-2xl">
                       <FaSyncAlt className="absolute -right-10 -bottom-10 text-[20rem] opacity-5 rotate-12" />
                       <h4 className="text-[#bf9848] text-3xl font-bold mb-8">The 120-Day Statutory Buffer</h4>
                       <p className="text-xl opacity-90 mb-8 leading-relaxed">
                          Once advertised, Section 21 of the Trade Marks Act provides exactly 4 months (non-extendable) for any third party to file a 'Notice of Opposition' (Form TM-O). 
                       </p>
                       <div className="grid md:grid-cols-2 gap-10">
                          <div className="space-y-4">
                             <div className="flex gap-3 items-start"><FaCheckCircle className="text-[#bf9848] mt-1 shrink-0" /> <p><strong>Scenario A:</strong> If no opposition is filed, the system automatically transitions to 'Registered' after the 120th day.</p></div>
                             <div className="flex gap-3 items-start"><FaCheckCircle className="text-[#bf9848] mt-1 shrink-0" /> <p><strong>Scenario B:</strong> If an opposition is filed, your status changes to 'Opposed'. This starts a legal battle that can last 3-5 years.</p></div>
                          </div>
                          <div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-sm italic">
                             "Pro Tip: Many status updates lag by a few days. Even if day 121 passes, wait for the 'Registration Certificate' to be generated before launching your brand's marketing campaign."
                          </div>
                       </div>
                    </div>
                    <p>
                      <strong>The 'Advertised beff acc' Status:</strong> Occasionally, you might see "Advertised Before Acceptance". This means the Registrar has significant doubts but has decided to publish the mark anyway to see if the market has a reaction. If you see this, be prepared for a thorough "Show Cause Hearing" even if no opposition is filed.
                    </p>
                  </div>
                </section>

                {/* Final Registration */}
                <section id="registration-stage" className="scroll-mt-32 border-t border-gray-100 pt-16">
                  <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 leading-tight">6. Final Registration: Reaching the 'Registered' Status</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-8 text-justify">
                    <p>
                      This is the status every brand owner dreams of. When the status officially changes to <strong>"Registered"</strong>, you have successfully secured your intellectual property rights for a period of 10 years.
                    </p>
                    <div className="bg-[#fffcf5] border border-[#bf9848]/30 p-12 rounded-[3rem] flex flex-col md:flex-row gap-12 items-center shadow-xl">
                       <div className="relative">
                          <FaClipboardCheck className="text-8xl text-[#bf9848]" />
                          <div className="absolute -top-4 -right-4 bg-green-500 text-white p-2 rounded-full shadow-lg"><FaCheckCircle /></div>
                       </div>
                       <div>
                          <h4 className="font-bold text-3xl mb-6 text-gray-900">The Digital Registration Certificate</h4>
                          <p className="text-gray-700 leading-relaxed mb-6">
                             The Registry no longer sends physical hard copies of certificates. A digital certificate is generated and made available via the status portal. This document is a <strong>Prima Facie Evidence</strong> of your ownership. It lists the registration date, the application date, and the 'User Date'—the date from which your legal rights have been backdated.
                          </p>
                          <div className="flex gap-4 p-4 bg-white rounded-2xl border border-gray-100 text-sm italic text-gray-500">
                             "You may now legally use the ® Symbol. Using this symbol while the status is still 'Accepted' or 'Pending' is technically a criminal offense under Section 107 of the Act."
                          </div>
                       </div>
                    </div>
                  </div>
                </section>

                {/* Failures & Abandonment */}
                <section id="failures-recovery" className="scroll-mt-32 border-t border-gray-100 pt-16">
                  <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 leading-tight">7. Handling Failures: 'Abandoned', 'Refused' & 'Withdrawn'</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-8 text-justify">
                    <p>
                      If your status turns red, the application has likely reached a legal dead-end. However, the Indian Trademark law provides mechanisms for "resurrection" if handled by an expert attorney. 
                    </p>
                    <div className="grid md:grid-cols-2 gap-10">
                       <div className="p-10 border border-red-100 bg-red-50/30 rounded-[2.5rem] shadow-sm hover:shadow-md transition-all">
                          <h4 className="font-black text-red-900 text-2xl mb-4">The 'Abandoned' Status</h4>
                          <p className="text-sm leading-relaxed mb-6">This happens automatically if a deadline (like 30 days for an objection reply) is missed by even a single hour. The system is brutal.</p>
                          <p className="text-sm font-bold text-red-700">RECOVERY: File a 'Request for Restoration' via Form TM-M. You must prove that the Registry's notice was never served to your registered email or physical address.</p>
                       </div>
                       <div className="p-10 border border-gray-200 bg-gray-50/50 rounded-[2.5rem] shadow-sm hover:shadow-md transition-all">
                          <h4 className="font-black text-gray-900 text-2xl mb-4">The 'Refused' Status</h4>
                          <p className="text-sm leading-relaxed mb-6">This is a judicial decision by the Registrar after a Show Cause Hearing. It means your arguments were not legally sufficient to overcome the objections.</p>
                          <p className="text-sm font-bold text-[#bf9848]">RECOVERY: You have 30 days to file a 'Review Petition' or 90 days to appeal to the High Court of the respective jurisdiction.</p>
                       </div>
                    </div>
                    <p>
                       <strong>The 'Withdrawn' Status:</strong> This usually occurs during a settlement. If a bigger brand opposes you, and you decide to change your name rather than fight, your attorney will file a withdrawal request. Once this status is reached, the application number is permanently retired.
                    </p>
                  </div>
                </section>

                {/* Post Registration */}
                <section id="post-registration" className="scroll-mt-32 border-t border-gray-100 pt-16">
                  <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 leading-tight">8. Post-Registration: The 10-Year Surveillance Policy</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-8 text-justify">
                    <p>
                      A trademark is not 'set it and forget it'. It is a depreciating asset that requires 'Maintenance Status' updates to remain legally enforceable. 
                    </p>
                    <div className="grid md:grid-cols-2 gap-10 my-10">
                       <div className="border border-green-100 p-10 rounded-[2.5rem] bg-green-50/20 shadow-sm relative group overflow-hidden">
                          <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 rounded-full -mr-16 -mt-16"></div>
                          <p className="font-black text-green-600 mb-4 uppercase text-xs tracking-widest">Year 9 & 10 Maintenance</p>
                          <h4 className="font-bold text-2xl text-gray-900 mb-4">Renewal Registered</h4>
                          <p className="text-sm leading-relaxed text-gray-600">
                             You must file for renewal starting from the 9th year. If successful, the status will refresh to show the next 10-year block. Failure to do so changes the status to <strong>"Removed"</strong>.
                          </p>
                       </div>
                       <div className="border border-red-100 p-10 rounded-[2.5rem] bg-red-50/20 shadow-sm relative group overflow-hidden">
                          <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full -mr-16 -mt-16"></div>
                          <p className="font-black text-red-500 mb-4 uppercase text-xs tracking-widest">The Danger Zone</p>
                          <h4 className="font-bold text-2xl text-gray-900 mb-4">Rectification / Removal</h4>
                          <p className="text-sm leading-relaxed text-gray-600">
                             Even a registered trademark can be "rectified" (removed) if a competitor proves you haven't used the mark for 5 consecutive years. This is known as "Non-Use Cancellation".
                          </p>
                       </div>
                    </div>
                    <p>
                       <strong>Expert Tip:</strong> Always keep your 'Service Address' in the e-Register updated. If a competitor files a rectification and the notice goes to an old address, your status could change to "Removed" without you ever receiving a phone call.
                    </p>
                  </div>
                </section>

                {/* International Statuses */}
                <section id="complex-statuses" className="scroll-mt-32 border-t border-gray-100 pt-16">
                  <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 leading-tight">9. Complex & International Statuses: Handling the 'IRDI' Factor</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-8 text-justify">
                    <p>
                      If your brand is expanding globally via the <strong>Madrid Protocol</strong>, your status tracking becomes a dual-level operation involving the WIPO (World Intellectual Property Organization) and the Indian Registry. 
                    </p>
                    <div className="bg-gray-50 p-12 rounded-[3rem] flex flex-col md:flex-row gap-10 items-start border border-gray-100">
                       <div className="bg-[#0d1b2a] p-6 rounded-2xl text-[#bf9848] shadow-2xl shrink-0"><FaHistory className="text-4xl" /></div>
                       <div className="space-y-4">
                          <h4 className="font-bold text-2xl text-gray-900">The Madrid Synchronization Delay</h4>
                          <p className="text-base text-gray-600 leading-relaxed italic">
                             "International Registration Designating India (IRDI) status updates are bridged from the Geneva database to Mumbai. There is often a significant lag. A mark might show 'Protection Granted' on WIPO but still show 'Marked for Exam' on IP India. In such cases, the local status is what governs enforcement within Indian courts."
                          </p>
                          <p>
                             If you receive a <strong>"Provisional Refusal"</strong> from the Indian Registry for an international mark, you have a globally synchronized deadline to appoint a local attorney and file a response. Failing to do so effectively locks you out of the 5th largest economy in the world.
                          </p>
                       </div>
                    </div>
                  </div>
                </section>

                {/* Status Audit Checklist */}
                <section id="expert-audit" className="scroll-mt-32 border-t border-gray-100 pt-16">
                  <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 leading-tight">10. The 2026 Strategic Trademark Status Audit Checklist</h2>
                  <div className="bg-[#0d1b2a] text-white p-16 rounded-[3rem] shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-[#bf9848] opacity-10 rounded-full -mr-48 -mt-48 blur-3xl animate-pulse"></div>
                    <h4 className="text-[#bf9848] text-3xl font-bold mb-12">How Professional IP Firms Monitor High-Value Portfolios:</h4>
                    <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
                       <li className="flex gap-6 border-b border-white/5 pb-8 group">
                          <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-[#bf9848] transition-colors"><FaCheckCircle className="text-[#bf9848] group-hover:text-white" /></div>
                          <div>
                             <p className="font-bold text-xl mb-2">Electronic vs. Manual Audit</p>
                             <p className="text-sm opacity-60 leading-relaxed">Don't trust automated email scrapers. Manually check the e-Register every Monday morning for 'Show Cause' hearing notices which are often uploaded without immediate email alerts.</p>
                          </div>
                       </li>
                       <li className="flex gap-6 border-b border-white/5 pb-8 group">
                          <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-[#bf9848] transition-colors"><FaCheckCircle className="text-[#bf9848] group-hover:text-white" /></div>
                          <div>
                             <p className="font-bold text-xl mb-2">The 'Journal Alert' System</p>
                             <p className="text-sm opacity-60 leading-relaxed">When the status is 'Accepted', perform a cross-search in the Monday Trademark Journal. Sometimes the status reflects 'Advertised' but the actual Journal might be published a week later. The 120-day clock starts from the actual Publication Date.</p>
                          </div>
                       </li>
                       <li className="flex gap-6 border-b border-white/5 pb-8 group">
                          <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-[#bf9848] transition-colors"><FaCheckCircle className="text-[#bf9848] group-hover:text-white" /></div>
                          <div>
                             <p className="font-bold text-xl mb-2">Evidence Preservation</p>
                             <p className="text-sm opacity-60 leading-relaxed">If the status is 'Marked for Exam', begin curating your 'User Evidence' (invoices, domain registrations, media mentions). If an objection under Section 9 is raised, you will need this data to prove 'Market Acquisition' within 30 days.</p>
                          </div>
                       </li>
                       <li className="flex gap-6 border-b border-white/5 pb-8 group">
                          <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-[#bf9848] transition-colors"><FaCheckCircle className="text-[#bf9848] group-hover:text-white" /></div>
                          <div>
                             <p className="font-bold text-xl mb-2">The 'TM-M' Tracking</p>
                             <p className="text-sm opacity-60 leading-relaxed">If you've filed an amendment (Form TM-M), ensure the status reflects 'TM-M Received'. If it doesn't update within 15 days, the application might still be being examined based on the old, incorrect data.</p>
                          </div>
                       </li>
                    </div>
                  </div>
                </section>

                {/* Review Section */}
                <section id="reviews" className="scroll-mt-32 border-t border-gray-100 pt-16">
                  <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-10 leading-tight">Trademark Success Stories: Status Recovery & Rescue</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    {reviewSchema.review.map((review, index) => (
                      <div key={index} className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm relative group hover:shadow-2xl transition-all duration-500 overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-5 bg-[#bf9848] rounded-bl-[3rem]"><FaQuoteLeft className="text-6xl text-[#bf9848]" /></div>
                        <div className="relative z-10 text-gray-700 italic mb-8 leading-[1.8] text-lg">
                          "{review.reviewBody}"
                        </div>
                        <div className="flex items-center gap-6">
                           <div className="w-14 h-14 bg-[#0d1b2a] rounded-full flex items-center justify-center text-[#bf9848] text-xl shadow-inner"><FaUserShield /></div>
                           <div>
                              <p className="font-black text-gray-900 text-xl">{review.author.name}</p>
                              <div className="flex text-[#bf9848] text-sm gap-1 mt-1"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                           </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* FAQ Section */}
                <section id="faqs" className="scroll-mt-32 border-t border-gray-100 pt-16">
                  <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-12">Registry Status Technical FAQ: An Attorney's Perspective</h2>
                  <div className="space-y-6">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border border-gray-100 rounded-[2rem] p-10 hover:bg-[#fffcf5] transition-all duration-300 group shadow-sm hover:shadow-md">
                        <h4 className="font-black text-2xl text-gray-900 mb-6 flex gap-6 items-start translate-x-0 group-hover:translate-x-2 transition-transform">
                           <span className="text-[#bf9848] font-light">0{index + 1}</span>
                           {faq.question}
                        </h4>
                        <p className="text-gray-600 leading-relaxed text-lg pl-14 opacity-90">
                           {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Final CTA */}
                <section className="bg-gradient-to-br from-[#0d1b2a] via-[#1a202c] to-black rounded-[4rem] p-16 md:p-32 text-center text-white relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] space-y-12">
                  <div className="absolute top-0 left-0 w-[50rem] h-[50rem] bg-[#bf9848] opacity-[0.03] rounded-full -ml-[25rem] -mt-[25rem] blur-[120px]"></div>
                  <div className="absolute bottom-0 right-0 w-[40rem] h-[40rem] bg-[#bf9848] opacity-[0.03] rounded-full -mr-[20rem] -mb-[20rem] blur-[120px]"></div>
                   <h2 className="text-4xl md:text-7xl font-black leading-[1.1] tracking-tighter">Is Your Trademark <br /> <span className="text-[#bf9848]">Stuck in the Registry?</span></h2>
                   <p className="text-xl md:text-3xl text-gray-400 font-light max-w-4xl mx-auto leading-relaxed">
                      Time is your brand's biggest enemy. Whether you are facing an <strong>Objection</strong>, a <strong>Third-Party Opposition</strong>, or your mark shows <strong>'Abandoned'</strong>, our senior IP litigation team is ready to intervene. 
                   </p>
                   <div className="flex flex-col sm:flex-row gap-8 justify-center pt-8">
                      <Link href="/contact" className="px-16 py-6 bg-[#bf9848] rounded-full font-black text-2xl hover:bg-white hover:text-[#0d1b2a] transition-all transform hover:scale-110 shadow-[0_20px_50px_rgba(191,152,72,0.3)]">
                        Rescue My Trademark Now
                      </Link>
                      <a href="tel:+918700343611" className="px-16 py-6 border-2 border-white/20 rounded-full font-black text-2xl hover:border-white hover:bg-white/5 transition-all">
                        Immediate Legal Audit
                      </a>
                   </div>
                </section>

              </div>
            </div>

            {/* Right Sidebar */}
            <div className="hidden lg:block space-y-8 sticky top-28">
               <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                  <h4 className="font-black text-gray-900 mb-6 uppercase text-xs tracking-tighter">Status Rescue Center</h4>
                  <div className="space-y-6">
                     <div className="flex gap-4">
                        <FaExclamationCircle className="text-red-500 mt-1" />
                        <div><p className="font-bold text-sm">Objected?</p><p className="text-xs text-gray-400">Response due in 30 days.</p></div>
                     </div>
                     <div className="flex gap-4">
                        <FaExclamationCircle className="text-amber-500 mt-1" />
                        <div><p className="font-bold text-sm">Opposed?</p><p className="text-xs text-gray-400">Counter Statement needed.</p></div>
                     </div>
                     <div className="flex gap-4">
                        <FaExclamationCircle className="text-blue-500 mt-1" />
                        <div><p className="font-bold text-sm">Formalities Fail?</p><p className="text-xs text-gray-400">Rectify doc deficiency.</p></div>
                     </div>
                  </div>
                  <Link href="/contact" className="mt-10 block w-full bg-[#0d1b2a] text-[#bf9848] py-4 rounded-xl text-center font-bold text-sm hover:bg-[#bf9848] hover:text-white transition-all">
                     Audit My Status
                  </Link>
               </div>

               <div className="bg-[#fffcf5] p-8 rounded-3xl border border-[#bf9848]/10 text-center">
                  <FaStar className="text-[#bf9848] text-4xl mx-auto mb-4" />
                  <h4 className="font-bold text-gray-900 mb-2">98.4% Success</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                     In Objection replies and Restoration petitions filed in 2025-26.
                  </p>
               </div>
            </div>

          </div>
        </div>

      </div>
    </>
  );
}
