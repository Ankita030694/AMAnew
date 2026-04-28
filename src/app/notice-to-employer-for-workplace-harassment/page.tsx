import React from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";
import { FaPhone, FaWhatsapp, FaShieldAlt, FaGavel, FaCheckCircle, FaExclamationTriangle, FaUserSecret, FaLock, FaUserShield, FaBalanceScale, FaEyeSlash, FaUserTie } from "react-icons/fa";

export const metadata = {
  title: "Notice to Employer for Workplace Harassment: Legal Guide & Rights",
  description:
    "Facing harassment at work? Learn how to issue a legal notice to your employer under the POSH Act and IPC. Protect your rights and stop workplace abuse today.",
  keywords: "workplace harassment legal notice india, POSH Act complaint employer, sexual harassment at workplace legal action, notice to employer for hostile work environment, victim rights POSH India",
};

const sections = [
  { id: "introduction", title: "Introduction" },
  { id: "understanding-harassment", title: "Defining Workplace Harassment" },
  { id: "posh-act-framework", title: "The POSH Act 2013" },
  { id: "employer-duties", title: "Legal Duties of the Employer" },
  { id: "notice-importance", title: "Why a Legal Notice is Vital" },
  { id: "drafting-notice", title: "Drafting the Notice" },
  { id: "ipc-sections", title: "IPC & Criminal Protections" },
  { id: "hostile-environment", title: "Hostile Work Environment" },
  { id: "retaliation", title: "Protection Against Retaliation" },
  { id: "internal-committee", title: "The IC Investigation Process" },
  { id: "external-remedies", title: "External Legal Remedies" },
  { id: "mental-health", title: "Mental Health Support" },
  { id: "ama-helps", title: "How AMA Supports Victims" },
  { id: "success-stories", title: "Real Case Victories" },
  { id: "faqs", title: "Frequently Asked Questions" },
];

const relatedPages = [
  { title: "Notice to Employer for Unpaid Salary", href: "/notice-to-employer-for-non-payment-of-salary-or-benefits" },
  { title: "Wrongful Termination Legal Guide", href: "/notice-to-employer-for-wrongful-termination" },
  { title: "Breach of Employment Contract", href: "/notice-to-employee-for-breach-of-employment-contract" },
  { title: "Misconduct Legal Notice", href: "/notice-to-employee-for-misconduct" },
  { title: "Recovery of Company Assets", href: "/notice-for-recovery-of-company-assets-from-employee" },
];

export default function WorkplaceHarassmentGuide() {
  const breadcrumbItems = [
    { label: "Employment Law", href: "/services/employment-law" },
    { label: "Workplace Harassment Notice", href: "/notice-to-employer-for-workplace-harassment" },
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Legal Notice to Employer for Workplace Harassment: A Comprehensive Guide",
    "description": "In-depth legal guide on handling workplace harassment in India, understanding the POSH Act, and issuing a formal notice to employers.",
    "author": { "@type": "Organization", "name": "AMA Legal Solutions" },
    "publisher": {
      "@type": "Organization",
      "name": "AMA Legal Solutions",
      "logo": { "@type": "ImageObject", "url": "https://www.amalegalsolutions.com/ama-legal-solutions-logo.png" }
    },
    "datePublished": "2026-04-28",
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.amalegalsolutions.com/notice-to-employer-for-workplace-harassment" }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the POSH Act?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The POSH Act, 2013, is the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act. It mandates that every employer with more than 10 employees must have an Internal Committee (IC) to handle harassment complaints."
        }
      },
      {
        "@type": "Question",
        "name": "Can I sue for a hostile work environment?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. If the workplace culture is pervasive with harassment, bullying, or discrimination that interferes with your work, it constitutes a hostile work environment, allowing for legal action against the employer."
        }
      },
      {
        "@type": "Question",
        "name": "Is verbal abuse considered harassment?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, verbal abuse, including slurs, shouting, and derogatory remarks, can be classified as workplace harassment or bullying, especially if it is repetitive and creates a distressing environment."
        }
      },
      {
        "@type": "Question",
        "name": "What if my employer ignores my complaint?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If the employer fails to act or lacks a functional Internal Committee, you can file a complaint with the Local Committee (LC) at the district level or proceed with a legal notice and criminal/civil litigation."
        }
      },
      {
        "@type": "Question",
        "name": "Can I be fired for reporting harassment?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Retaliation is strictly prohibited under the POSH Act and general labor laws. If you are terminated for filing a complaint, it qualifies as wrongful termination, and you can seek reinstatement and damages."
        }
      },
      {
        "@type": "Question",
        "name": "How long do I have to file a POSH complaint?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Usually, a complaint must be filed within three months of the incident. However, the Internal Committee can extend this period if they are satisfied with the reasons for the delay."
        }
      },
      {
        "@type": "Question",
        "name": "Is it necessary to send a legal notice first?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "While not always mandatory before an IC complaint, a legal notice from an advocate often compels the employer to take the matter seriously and can be used as evidence of your attempt to resolve the issue."
        }
      },
      {
        "@type": "Question",
        "name": "Can men file harassment complaints?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The POSH Act specifically protects women. However, men can seek redressal for harassment or bullying through the company's internal HR policies and general laws like the IPC or civil suits for defamation and mental agony."
        }
      },
      {
        "@type": "Question",
        "name": "What evidence do I need?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Keep records of emails, messages, witness statements, call logs, and any documentation of the harassment. Journaling the dates and details of incidents is also very helpful."
        }
      },
      {
        "@type": "Question",
        "name": "What compensation can I get?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Courts and the IC can award compensation for mental trauma, loss of career opportunities, medical expenses, and the financial status of the harasser."
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.amalegalsolutions.com/" },
      { "@type": "ListItem", "position": 2, "name": "Employment Law", "item": "https://www.amalegalsolutions.com/services/employment-law" },
      { "@type": "ListItem", "position": 3, "name": "Workplace Harassment Notice", "item": "https://www.amalegalsolutions.com/notice-to-employer-for-workplace-harassment" }
    ]
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Employment Dispute Legal Service",
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "2150" }
  };

  return (
    <div className="min-h-screen bg-[#FDFCF9] text-[#30261C]">
      {/* JSON-LD Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      {/* Hero Section */}
      <section className="relative py-24 px-6 md:px-12 lg:px-24 overflow-hidden bg-[#EBE9E4]">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(#30261C 1px, transparent 1px)", backgroundSize: "20px 20px" }}
        ></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-normal tracking-tight mb-6 mt-12 text-[#30261C]" style={{ fontFamily: "var(--font-polysans)" }}>
              Is Your Workplace <span className="text-[#D29E0D]">Hostile & Toxic</span>?
            </h1>
            <p className="text-lg md:text-xl text-[#30261C]/70 max-w-4xl mx-auto font-light leading-relaxed mb-10">
              Workplace harassment is not just unprofessional; it is illegal. Whether it is sexual harassment, bullying, or a toxic environment, you have the right to a safe workplace. Learn how to issue a formal legal notice and hold your employer accountable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-[#D29E0D] hover:bg-[#b88a22] text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
                  <FaShieldAlt /> Protect Your Career
                </button>
              </Link>
              <a href="tel:+918700343611">
                <button className="bg-white border-2 border-[#D29E0D] text-[#D29E0D] hover:bg-[#D29E0D] hover:text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-md flex items-center justify-center gap-2">
                  <FaPhone /> Legal Help
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-6 mt-8">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      {/* Main Layout */}
      <div className="max-w-[1600px] mx-auto px-6 pb-24 flex flex-col lg:flex-row gap-8">
        
        {/* Left Column - TOC */}
        <aside className="lg:w-[20%] hidden lg:block">
          <div className="sticky top-32">
            <h4 className="text-xl font-bold mb-6 text-[#30261C] border-b pb-2">Guide Contents</h4>
            <TableOfContents sections={sections} orientation="vertical" />
          </div>
        </aside>

        {/* Middle Column - Content */}
        <main className="lg:w-[55%]">
          <article className="prose prose-lg max-w-none text-[#30261C]/90 leading-relaxed">
            
            <section id="introduction" className="mb-16">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">Introduction: The Silence Ends Now</h2>
              <p>
                The modern workplace is supposed to be a sanctuary of productivity, professional growth, and mutual respect. However, for a significant portion of the workforce in India, the reality is starkly different. Workplace harassment is a pervasive shadow that hangs over many offices, factories, and digital workspaces. It is an issue that transcends industries, from the high rises of IT hubs to the traditional corridors of manufacturing units.
              </p>
              <p>
                Harassment at work is often misunderstood as a "minor personality conflict" or "heavy workload stress." This misconception is dangerous. Harassment is a systematic violation of an individual's dignity, safety, and professional standing. It manifests in various forms, including sexual harassment, psychological bullying, verbal abuse, and the creation of a hostile environment designed to push an employee out.
              </p>
              <p>
                In India, the legal landscape regarding workplace harassment underwent a revolutionary change with the enactment of the POSH Act in 2013. Yet, many employees remain unaware of the full extent of their rights or the power of a formal legal notice. A notice to an employer for workplace harassment is not just a letter; it is a declaration of your intent to reclaim your workspace and your peace of mind.
              </p>
              <p>
                At AMA Legal Solutions, we have represented countless victims who felt trapped in toxic environments. We have seen how the simple act of taking a legal stand can transform a situation of powerlessness into one of accountability. This guide is designed to be your comprehensive resource for understanding your rights, the duties of your employer, and the strategic steps required to stop harassment in its tracks.
              </p>
            </section>

            <section id="understanding-harassment" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">Defining Workplace Harassment</h2>
              <p>
                To fight harassment effectively, you must first be able to identify it clearly. Legal definitions are often broad to encompass the many subtle ways abuse occurs. In the Indian context, workplace harassment can be categorized into several distinct but often overlapping types.
              </p>
              <div className="bg-red-50 p-8 rounded-2xl border-l-8 border-red-500 mb-8">
                <h4 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-2">
                  <FaExclamationTriangle /> Common Forms of Workplace Abuse:
                </h4>
                <ul className="space-y-4 text-red-900">
                  <li className="flex items-start gap-2">
                    <span className="font-bold">•</span>
                    <span><strong>Sexual Harassment:</strong> Unwelcome physical contact, requests for sexual favors, sexually colored remarks, or showing pornography.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">•</span>
                    <span><strong>Verbal Abuse:</strong> Constant shouting, use of slurs, derogatory comments about one's character, or public humiliation.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">•</span>
                    <span><strong>Psychological Bullying:</strong> Deliberately excluding an employee from meetings, setting impossible deadlines, or undermining their work consistently.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">•</span>
                    <span><strong>Discriminatory Harassment:</strong> Harassment based on gender, religion, caste, disability, or age.</span>
                  </li>
                </ul>
              </div>
              <p>
                It is important to understand that harassment does not always involve a physical act. A "hostile work environment" can be created through digital means, such as inappropriate messages on WhatsApp, derogatory emails, or exclusion from professional communication channels. If the behavior is repetitive and creates an intimidating or offensive environment, it is harassment.
              </p>
            </section>

            <section id="posh-act-framework" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">The POSH Act 2013: Your Primary Shield</h2>
              <p>
                The Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013, commonly known as the POSH Act, is the cornerstone of victim protection in India. This act was born out of the historic Vishaka Guidelines issued by the Supreme Court. It mandates that every organization with ten or more employees must establish an Internal Committee (IC) to address complaints of sexual harassment.
              </p>
              <h3 className="text-2xl font-semibold mb-4 text-[#D29E0D]">Key Features of the POSH Act:</h3>
              <ul className="list-disc ml-6 space-y-4 mb-6">
                <li><strong>Broad Definition of "Workplace":</strong> It includes not just the physical office but also any place visited by the employee during the course of employment, including transportation provided by the employer.</li>
                <li><strong>Quid Pro Quo:</strong> It prohibits "this for that" harassment, where a supervisor demands sexual favors in exchange for promotions or job security.</li>
                <li><strong>Conciliation Option:</strong> Before an inquiry, the IC can, at the request of the woman, take steps to settle the matter through conciliation, provided no monetary settlement is involved.</li>
                <li><strong>Confidentiality:</strong> The identity of the victim and the details of the investigation are strictly confidential. Violating this can lead to penalties for the IC members or the employer.</li>
              </ul>
              <p>
                One of the most powerful aspects of the POSH Act is that it places the burden of compliance squarely on the employer. If an organization fails to constitute an IC or fails to act on a complaint, they can be fined up to fifty thousand rupees, and repeat offenders can have their business licenses canceled.
              </p>
            </section>

            <section id="employer-duties" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">Legal Duties of the Employer</h2>
              <p>
                An employer's responsibility is not limited to just paying salaries. Under Indian law, an employer has a "duty of care" to provide a safe and healthy working environment. This duty is both statutory (under the POSH Act and various state Shops and Establishments Acts) and a part of the common law contract of employment.
              </p>
              <div className="bg-[#30261C] text-white p-8 rounded-2xl mb-8">
                <h4 className="text-xl font-bold text-[#D29E0D] mb-6 flex items-center gap-2">
                  <FaShieldAlt /> Mandatory Employer Obligations:
                </h4>
                <ul className="space-y-6">
                  <li>
                    <h5 className="font-bold text-[#D29E0D]">Constitutional Responsibility</h5>
                    <p className="text-sm">Providing a safe workplace is a fundamental right under Article 21 (Right to Life and Dignity) and Article 19 (Right to practice any profession).</p>
                  </li>
                  <li>
                    <h5 className="font-bold text-[#D29E0D]">Creation of Anti-Harassment Policies</h5>
                    <p className="text-sm">Employers must display the penal consequences of sexual harassments and the order constituting the Internal Committee at conspicuous places.</p>
                  </li>
                  <li>
                    <h5 className="font-bold text-[#D29E0D]">Awareness & Training</h5>
                    <p className="text-sm">Regular workshops and awareness programs must be conducted for employees to sensitize them about harassment laws.</p>
                  </li>
                  <li>
                    <h5 className="font-bold text-[#D29E0D]">Safe Environment for Victims</h5>
                    <p className="text-sm">Employers must provide assistance to the woman if she chooses to file a complaint in relation to an offence under the Indian Penal Code.</p>
                  </li>
                </ul>
              </div>
              <p>
                If an employer is aware of harassment and chooses to look the other way, they are legally complicit. This concept of "vicarious liability" means that the employer can be held responsible for the actions of their employees if they failed to take reasonable steps to prevent the harassment.
              </p>
            </section>

            <section id="notice-importance" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">Why a Legal Notice is Vital</h2>
              <p>
                In many cases of harassment, victims try to resolve the matter internally through HR or informal chats with managers. Often, these attempts are ignored, downplayed, or used against the victim. This is where a formal legal notice becomes an essential tool.
              </p>
              <p>
                A legal notice serves several critical functions. First, it officially puts the employer "on notice." It creates a legal record that the employer was informed of the harassment and failed to act. Second, it demonstrates seriousness. A letter on a law firm's letterhead often cuts through the corporate bureaucracy and lands directly on the desk of the legal department or the CEO.
              </p>
              <p>
                Furthermore, a legal notice sets a timeline. It gives the employer a specific number of days (usually 7 to 15) to resolve the issue or face further litigation. This prevents the "eternal internal investigation" that many companies use to exhaust the victim into resigning.
              </p>
            </section>

            <section id="drafting-notice" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">Drafting the Notice: Precision is Key</h2>
              <p>
                A notice for workplace harassment must be drafted with extreme care. It should not be an emotional outburst but a cold, factual recitation of events, coupled with the relevant legal provisions that have been violated.
              </p>
              <h3 className="text-2xl font-semibold mb-4 text-[#D29E0D]">Essential Components of the Notice:</h3>
              <p>
                The notice should begin with a clear subject line indicating that it is a "Legal Notice for Workplace Harassment and Violation of the POSH Act." It must detail the incidents of harassment with specific dates, times, and the names of the individuals involved.
              </p>
              <p>
                It is crucial to mention any previous attempts you made to report the matter and how the management responded (or failed to respond). The notice must then cite the specific sections of the POSH Act and the Indian Penal Code that are applicable. Finally, it must state the "demand"—whether it is a fair investigation, the suspension of the harasser, compensation for mental agony, or a safe environment for your return.
              </p>
            </section>

            <section id="ipc-sections" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">The Legal Arsenal: IPC & Criminal Protections</h2>
              <p>
                While the POSH Act is a civil remedy, workplace harassment often involves criminal acts. In such cases, the Indian Penal Code (IPC) provides the mechanism to send a harasser to jail.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 flex gap-4">
                  <FaGavel className="text-[#D29E0D] text-2xl flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-2">Section 354A IPC</h4>
                    <p className="text-sm text-gray-600">Sexual harassment by a man against a woman. Punishable with rigorous imprisonment for up to three years.</p>
                  </div>
                </div>
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 flex gap-4">
                  <FaEyeSlash className="text-[#D29E0D] text-2xl flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-2">Section 354C IPC</h4>
                    <p className="text-sm text-gray-600">Voyeurism. Capturing or publishing images of a woman in a private act without her consent.</p>
                  </div>
                </div>
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 flex gap-4">
                  <FaBalanceScale className="text-[#D29E0D] text-2xl flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-2">Section 509 IPC</h4>
                    <p className="text-sm text-gray-600">Word, gesture, or act intended to insult the modesty of a woman. Punishable with up to three years in jail.</p>
                  </div>
                </div>
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 flex gap-4">
                  <FaLock className="text-[#D29E0D] text-2xl flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-2">Section 506 IPC</h4>
                    <p className="text-sm text-gray-600">Criminal intimidation. Threatening to harm the victim or their reputation.</p>
                  </div>
                </div>
              </div>
              <p>
                When a victim sends a legal notice mentioning these sections, it signals to the employer that the matter is no longer just an "HR issue" but a potential police case. This often results in a much faster and more transparent internal investigation.
              </p>
            </section>

            <section id="hostile-environment" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">Hostile Work Environment: Beyond Physical Acts</h2>
              <p>
                Many victims feel they don't have a case because "he never touched me" or "he never said anything sexual." However, the concept of a "hostile work environment" is a well-recognized legal doctrine. If the workplace is filled with pervasive bullying, constant belittlement, or discriminatory practices that make it impossible for a reasonable person to work, it is a violation of the employment contract.
              </p>
              <p>
                An employer has a contractual obligation to provide a workspace where you can perform your duties without fear of psychological harm. If they fail to provide this, it is a breach of the "implied term of mutual trust and confidence." This allows an employee to resign and claim "constructive dismissal," where the law treats the resignation as a termination because the employer made the conditions unbearable.
              </p>
            </section>

            <section id="retaliation" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">Protection Against Retaliation</h2>
              <p>
                The greatest fear victims have is: "What if I report it and they fire me?" The law anticipates this fear and provides strong protections. The POSH Act specifically prohibits any form of victimization or retaliation against an employee who has filed a complaint or acted as a witness.
              </p>
              <p>
                If an employee is fired, demoted, or transferred immediately after filing a complaint, the law often shifts the burden of proof to the employer to show that the action was taken for reasons completely unrelated to the complaint. At AMA Legal Solutions, we specialize in identifying these patterns of retaliation and filing for immediate relief in labor courts or through high court writ petitions.
              </p>
            </section>

            <section id="internal-committee" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">The IC Investigation Process: What to Expect</h2>
              <p>
                The Internal Committee (IC) is a quasi-judicial body. This means its proceedings are like a mini-court case. The investigation must follow the "principles of natural justice." This includes giving both sides a fair chance to be heard and basing the decision on evidence rather than bias.
              </p>
              <p>
                The IC has ninety days to complete its inquiry. They have the power of a civil court to summon witnesses and demand documents. Once the inquiry is complete, they must submit a report to the employer within ten days. If the allegations are proven, the IC can recommend termination of the harasser, a formal apology, or even monetary compensation to be deducted from the harasser's salary.
              </p>
            </section>

            <section id="external-remedies" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">External Legal Remedies</h2>
              <p>
                If the internal process is biased or the employer is a small business without an IC, there are external paths. You can file a complaint with the Local Committee (LC) set up by the government in every district. You can also file a writ petition in the High Court for the violation of fundamental rights or a civil suit for damages for mental agony and defamation.
              </p>
              <p>
                For criminal acts, you can file a First Information Report (FIR) at the local police station. If the police refuse to register the FIR, you can file a criminal complaint directly before a Magistrate. The law is vast, and there is always a path forward for those willing to stand up for themselves.
              </p>
            </section>

            <section id="mental-health" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">Managing the Mental Health Toll</h2>
              <p>
                We cannot ignore the emotional impact of harassment. It often leads to anxiety, depression, and post-traumatic stress. It is vital to seek professional counseling alongside legal help.
              </p>
              <p>
                Remember that the harasser's goal is to make you feel isolated and weak. By involving legal experts, you are not just fighting a legal battle; you are taking back your mental autonomy. You are telling the harasser that their power over you is an illusion and that you are protected by the full force of the law.
              </p>
            </section>

            <section id="ama-helps" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">How AMA Legal Solutions Supports Victims</h2>
              <p>
                At AMA Legal Solutions, we provide more than just legal advice; we provide a fortress for our clients. We understand the sensitivity and the stakes involved in workplace harassment cases.
              </p>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 my-8">
                <h4 className="font-bold text-[#30261C] mb-4 flex items-center gap-2">
                  <FaShieldAlt className="text-[#D29E0D]" /> Our Victim Support Services:
                </h4>
                <ul className="space-y-4 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-[#D29E0D] mt-1" />
                    <span><strong>Confidential Drafting:</strong> We draft powerful legal notices that ensure your privacy while maximizing impact.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-[#D29E0D] mt-1" />
                    <span><strong>IC Representation:</strong> While lawyers are often restricted from IC hearings, we provide behind-the-scenes strategy and drafting for your submissions.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-[#D29E0D] mt-1" />
                    <span><strong>Criminal & Civil Litigation:</strong> We represent you in courts for FIR registration, defamation suits, and compensation claims.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-[#D29E0D] mt-1" />
                    <span><strong>Negotiated Resignation:</strong> If you wish to leave, we negotiate high-value exit packages including severance and neutral references.</span>
                  </li>
                </ul>
              </div>
            </section>

            <section id="success-stories" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-10">Real Case Victories: Hope for the Harassed</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="flex text-[#D29E0D] mb-4 text-xl">★★★★★</div>
                  <p className="text-sm italic text-gray-600 mb-6">
                    "My manager was making inappropriate remarks for months. HR did nothing. AMA sent a legal notice, and suddenly an IC was formed. The manager was terminated, and I received a written apology and a promotion. They are true professionals."
                  </p>
                  <p className="font-bold text-sm">Anjali S., Bangalore</p>
                </div>
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="flex text-[#D29E0D] mb-4 text-xl">★★★★★</div>
                  <p className="text-sm italic text-gray-600 mb-6">
                    "I was being bullied by my entire team after I reported a breach of ethics. AMA helped me file for constructive dismissal. The settlement I got allowed me to take a career break and find a much better job. They saved my sanity."
                  </p>
                  <p className="font-bold text-sm">Priya V., Gurgaon</p>
                </div>
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="flex text-[#D29E0D] mb-4 text-xl">★★★★★</div>
                  <p className="text-sm italic text-gray-600 mb-6">
                    "They threatened to fire me if I spoke up. AMA sent a notice highlighting the anti-retaliation laws. Not only did they stop the threats, but they also ensured my record was kept clean. I am forever grateful."
                  </p>
                  <p className="font-bold text-sm">Meera K., Hyderabad</p>
                </div>
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="flex text-[#D29E0D] mb-4 text-xl">★★★★★</div>
                  <p className="text-sm italic text-gray-600 mb-6">
                    "AMA Legal Solutions stood by me when everyone else at work looked away. They handled the legal complexity while I focused on my health. We won the case, and I feel like I've regained my dignity."
                  </p>
                  <p className="font-bold text-sm">Sangeeta D., Pune</p>
                </div>
              </div>
            </section>

            <section id="faqs" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-10">Frequently Asked Questions</h2>
              <div className="space-y-8">
                <div>
                  <h4 className="font-bold text-xl mb-2">Can I be anonymous while reporting?</h4>
                  <p>No, the POSH Act requires the complainant to sign the complaint. However, the IC is legally bound to maintain strict confidentiality of your identity throughout and after the investigation.</p>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">What if there is no physical evidence?</h4>
                  <p>Harassment often happens behind closed doors. The IC is trained to weigh circumstantial evidence, witness testimonies, and the consistency of your statement. Your testimony is a powerful piece of evidence.</p>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Is the employer liable for a client's harassment?</h4>
                  <p>Yes. If you are harassed by a client or any third party at the workplace or during work hours, it is the employer's duty to provide support and take up the matter through their IC or the police.</p>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Can I file a case after I have resigned?</h4>
                  <p>Yes, provided it is within the statutory time limit (usually three months). Resignation does not waive your right to seek justice for harassment suffered during employment.</p>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">What happens if the complaint is found to be false?</h4>
                  <p>If the IC concludes that the complaint was malicious or based on forged documents, they can recommend disciplinary action against the complainant. However, an inability to prove a complaint is not the same as a "false complaint."</p>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Can I skip the IC and go to the police?</h4>
                  <p>Yes. You have the right to parallel proceedings. You can file a POSH complaint and a police FIR simultaneously. One is for internal redressal, the other is for criminal punishment.</p>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">How do I prove a 'Hostile Work Environment'?</h4>
                  <p>Collect evidence of repetitive bullying, exclusion, or verbal abuse. Performance reviews that were suddenly downgraded after you reported an issue are also strong evidence of a hostile shift.</p>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">What is the Local Committee (LC)?</h4>
                  <p>The LC is a government body at the district level that handles complaints from organizations with fewer than ten employees or complaints against the employer themselves.</p>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Can a lawyer represent me in IC hearings?</h4>
                  <p>The POSH Rules generally state that parties are not allowed to bring in legal practitioners. However, you can consult a lawyer to draft your statements, prepare for cross-examination, and review the IC's final report.</p>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Is mental agony compensation common?</h4>
                  <p>Yes, courts are increasingly awarding damages for mental agony and professional loss in harassment cases. The IC also considers these factors while recommending monetary compensation.</p>
                </div>
              </div>
            </section>

            <div className="mt-16 p-10 bg-[#D29E0D]/10 rounded-3xl border-2 border-dashed border-[#D29E0D] text-center">
              <h3 className="text-2xl font-bold mb-4">Break the Silence. Claim Your Rights.</h3>
              <p className="text-lg mb-8 max-w-2xl mx-auto">
                No job is worth your dignity or your safety. Our specialized employment lawyers are ready to provide the legal shield you need to stop harassment and win.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <button className="bg-[#D29E0D] text-white px-8 py-4 rounded-full font-bold hover:bg-[#b88a22] transition-all shadow-lg">
                    Get Free Legal Consultation
                  </button>
                </Link>
                <a href="https://wa.me/918700343611" target="_blank" className="flex items-center gap-2">
                  <button className="bg-[#25D366] text-white px-8 py-4 rounded-full font-bold hover:bg-[#128C7E] transition-all shadow-lg flex items-center gap-2">
                    <FaWhatsapp size={20} /> WhatsApp Us
                  </button>
                </a>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-[#30261C] mb-6 mt-12">The Global Standard: A World Without Harassment</h2>
            <p>
              The fight against workplace harassment is not just an Indian phenomenon; it is a global imperative. The International Labour Organization (ILO) adopted Convention No. 190, which is the first international treaty to recognize the right of everyone to a world of work free from violence and harassment. This global movement is pushing companies to adopt "zero-tolerance" policies that go beyond just legal compliance.
            </p>
            <p>
              In the modern global economy, a company's reputation for its "internal culture" is as important as its balance sheet. Top talent avoids toxic organizations. By standing up against harassment, you are not just helping yourself; you are pushing the entire corporate sector towards a more ethical and productive future.
            </p>
            <p>
              True professional excellence cannot exist in an environment of fear. Organizations that foster respect and safety see higher innovation, lower turnover, and a more dedicated workforce. When you challenge harassment, you are actually advocating for a better, more efficient business model that values human capital as its greatest asset.
            </p>

            <h2 className="text-3xl font-bold text-[#30261C] mb-6 mt-12">The Power of Documentation: Your Digital Paper Trail</h2>
            <p>
              In the age of digital communication, harassers often leave a trail without realizing it. Every "unprofessional" message on Slack, every late-night "personal" WhatsApp, and every "passive-aggressive" email is a piece of evidence. The key to winning a harassment case is meticulous documentation.
            </p>
            <p>
              We recommend maintaining a private log (outside of company servers) of every incident. Attach screenshots, download relevant emails, and save meeting invites. This "digital paper trail" is what transforms a "he-said, she-said" situation into a factual investigation where the evidence is undeniable. At AMA Legal Solutions, we help our clients organize this data to build an airtight legal case.
            </p>

            <h2 className="text-3xl font-bold text-[#30261C] mb-6 mt-12">Conclusion: Your Journey to Justice Starts Today</h2>
            <p>
              Workplace harassment can feel like an insurmountable wall, but the law is the hammer that can break it down. Remember that you are protected by the Constitution of India, the POSH Act, and the criminal laws of the land. You have more power than you think.
            </p>
            <p>
              Do not suffer in silence. The first step—issuing a legal notice—is often the hardest, but it is the one that sets you on the path to justice. By taking action, you are sending a clear message: your dignity is not for sale, and your safety is non-negotiable.
            </p>
            <p>
              At AMA Legal Solutions, we are honored to stand with victims and help them navigate these complex legal waters. Let us handle the legal burden so you can focus on healing and moving forward in your career. Your workplace should be a place of pride, not pain. Take that step today, and let us help you build a safer tomorrow.
            </p>

          </article>
        </main>

        {/* Right Column */}
        <aside className="lg:w-[25%]">
          <div className="sticky top-32 space-y-8">
            <div className="bg-[#30261C] text-[#EBE9E4] p-8 rounded-2xl shadow-xl">
              <h4 className="text-xl font-bold mb-4 text-[#D29E0D]" style={{ fontFamily: "var(--font-polysans)" }}>End Harassment Now</h4>
              <p className="text-sm opacity-80 mb-6">
                Our specialized lawyers provide confidential legal shields to stop workplace abuse and protect your career.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-[#D29E0D] p-2 rounded-full text-white"><FaCheckCircle size={12}/></div>
                  <span className="text-xs">Confidential Legal Notices</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-[#D29E0D] p-2 rounded-full text-white"><FaCheckCircle size={12}/></div>
                  <span className="text-xs">POSH Act Compliance Experts</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-[#D29E0D] p-2 rounded-full text-white"><FaCheckCircle size={12}/></div>
                  <span className="text-xs">Retaliation Protection Support</span>
                </div>
              </div>
              <Link href="/contact">
                <button className="w-full bg-[#D29E0D] hover:bg-[#b88a22] text-white font-bold py-3 px-4 rounded-xl mt-8 transition-all">
                  Talk to a Lawyer
                </button>
              </Link>
            </div>

            <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm">
              <h4 className="text-xl font-bold mb-6 text-[#30261C]" style={{ fontFamily: "var(--font-polysans)" }}>Employment Resources</h4>
              <div className="space-y-4">
                {relatedPages.map((page, index) => (
                  <Link key={index} href={page.href} className="block group">
                    <p className="text-sm text-gray-600 group-hover:text-[#D29E0D] transition-colors mb-1">{page.title}</p>
                    <div className="h-0.5 w-full bg-gray-50 group-hover:bg-[#D29E0D]/20 transition-all"></div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="p-6 border border-[#D29E0D]/20 rounded-2xl bg-[#D29E0D]/5 text-center">
              <p className="text-xs text-gray-500 mb-2 uppercase tracking-widest font-bold">Confidential Helpline</p>
              <a href="tel:+918700343611" className="text-xl font-bold text-[#30261C] hover:text-[#D29E0D] transition-colors">
                +91 8700343611
              </a>
              <p className="text-[10px] text-gray-400 mt-2 italic">100% Safe & Private</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
