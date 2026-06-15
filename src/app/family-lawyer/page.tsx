import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { FaCheckCircle } from "react-icons/fa";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "What is the role of a family lawyer in family court disputes?",
    answer: "A family lawyer represents clients in domestic relations matters, including divorce, child custody, alimony, maintenance, property partition, and domestic violence. They provide counsel, draft pleadings, negotiate settlements, and advocate for their clients in court."
  },
  {
    question: "Which personal laws govern family disputes in India?",
    answer: "Family disputes in India are governed by codified and uncodified personal laws based on religion. These include the Hindu Marriage Act, Special Marriage Act, Indian Divorce Act (for Christians), Parsi Marriage and Divorce Act, and Muslim personal laws."
  },
  {
    question: "What is the difference between mutual consent divorce and contested divorce?",
    answer: "Mutual consent divorce is when both spouses agree to separate and settle all terms like alimony and custody amicably, which is typically resolved in 6 to 18 months. Contested divorce is when one spouse seeks divorce based on grounds like cruelty or desertion, and it is resolved through trial."
  },
  {
    question: "How is child custody decided by family courts in India?",
    answer: "Child custody decisions prioritize the 'welfare of the child' above all else. Courts evaluate factors like the child's age, financial security of the parents, educational environment, and the child's preference if they are old enough."
  },
  {
    question: "Can a father get sole custody of a minor child in India?",
    answer: "Yes, a father can get sole custody if he proves that the mother is unfit, neglectful, or unable to care for the child, or if the child's physical, emotional, and educational well-being is better secured in the father's custody."
  },
  {
    question: "How do courts calculate maintenance and alimony in family disputes?",
    answer: "Alimony is calculated based on factors like the income of both spouses, standard of living during marriage, age, health, dependency of children, and reasonable requirements of the claimant. It typically ranges from 20% to 33% of the spouse's net income."
  },
  {
    question: "What legal remedies are available to victims of domestic violence?",
    answer: "Under the Protection of Women from Domestic Violence Act (DV Act), victims can seek protection orders, residence orders, monetary relief, custody orders, and compensation orders from the Magistrate Court."
  },
  {
    question: "How is ancestral property divided among family members in India?",
    answer: "Under the Hindu Succession (Amendment) Act 2005, daughters have equal coparcenary rights in ancestral property as sons. Property is partitioned equally among all legal heirs, and disputes are settled via partition suits in civil courts."
  },
  {
    question: "Is mediation mandatory before family court proceedings start?",
    answer: "Yes, Section 9 of the Family Courts Act mandates that the court must make efforts to assist and persuade the parties to arrive at a settlement, often referring cases to counseling and mediation before proceeding to trial."
  },
  {
    question: "How long does a family court case typically take to resolve?",
    answer: "Amicable settlements like mutual consent divorce take 6 to 18 months. Contested matters involving custody, domestic violence, and property division can take 3 to 7 years depending on court backlogs and the complexity of the evidence."
  },
  {
    question: "Can a family lawyer help with drafting a legally valid Will?",
    answer: "Yes, family lawyers are experts in estate planning. They help draft Wills, trusts, and gift deeds to ensure a smooth transition of assets and prevent future inheritance disputes among family members."
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
      "name": "Family Lawyer",
      "item": "https://www.amalegalsolutions.com/family-lawyer"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Expert Family Lawyer: Compassionate Legal Representation in India",
  "description": "Exhaustive guide to finding the right family lawyer in India. Learn about divorce laws, child custody, alimony, maintenance, partition of property, and family court proceedings under Indian personal laws.",
  "image": "https://www.amalegalsolutions.com/services/family-law.png",
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
  "name": "Family Law Legal Representation Services",
  "image": "https://www.amalegalsolutions.com/services/family-law.png",
  "description": "Expert family legal representation for divorce, custody, maintenance, and property partition disputes in India.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "1940"
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
        "name": "Sunita Sharma"
      },
      "reviewBody": "AMA Legal Solutions helped me navigate a highly complex divorce and custody battle. Their sensitivity to my children's needs and thorough understanding of family court procedures was exceptional."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Rajesh Malhotra"
      },
      "reviewBody": "Extremely professional family law services. They resolved our ancestral property partition dispute through mediation without stretching it in court for years. Highly recommended!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Priyanka Sen"
      },
      "reviewBody": "Outstanding legal support during a very stressful time. The family lawyer assigned to my case was empathetic, highly skilled, and ensured I received fair maintenance for myself and my daughter."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Vikram Adiga"
      },
      "reviewBody": "They drafted our mutual consent divorce agreement perfectly, ensuring all financial settlements were ironclad. They made a painful process swift and respectable."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Meenakshi Iyer"
      },
      "reviewBody": "If you need an expert family lawyer in India, AMA Legal Solutions is the firm to trust. Their deep knowledge of personal laws and persistent courtroom representation gave us a positive outcome."
    }
  ]
};

export const metadata = {
  title: "Expert Family Lawyer in India | Divorce & Custody Advisors",
  description: "Consult top family lawyers for divorce, child custody, alimony, domestic violence, and property partition. Professional advice under Indian personal laws.",
  keywords: [
    "family lawyer",
    "divorce lawyer",
    "child custody lawyer",
    "property partition lawyer",
    "maintenance advocate",
    "family court lawyer",
    "domestic violence legal protection",
    "mutual consent divorce",
    "alimony calculation india",
    "personal laws india"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/family-lawyer',
  },
};

export default function FamilyLawyerPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "role-of-family-lawyer", title: "Role of Family Lawyer" },
    { id: "personal-laws-india", title: "Indian Personal Laws" },
    { id: "divorce-procedures", title: "Divorce & Separation" },
    { id: "child-custody", title: "Child Custody & Guardianship" },
    { id: "alimony-maintenance", title: "Maintenance & Alimony" },
    { id: "property-partition", title: "Property & Succession" },
    { id: "court-proceedings", title: "Family Court Process" },
    { id: "hiring-advice", title: "Hiring the Right Lawyer" },
    { id: "why-ama", title: "Why Choose AMA Legal" },
    { id: "faqs", title: "Frequently Asked Questions" },
  ];

  const breadcrumbItems = [
    { label: "Family Lawyer", href: "/family-lawyer" },
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
              Matrimonial & Family Law Division
            </span>
            <h1 className="text-2xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight mt-10">
              Expert <span className="text-[#D2A02A]">Family Lawyer</span> Services in India
            </h1>
            <p className="text-sm md:text-2xl mb-6 md:mb-10 max-w-4xl mx-auto text-gray-200 font-light font-sans leading-relaxed">
              Navigate domestic relations, divorce, custody battles, maintenance claims, and ancestral property partitions with compassionate and strategic representation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg">
                  Request Free Legal Consultation
                </button>
              </Link>
              <a href="tel:+918700343611">
                <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all text-sm md:text-lg">
                  Speak to an Expert
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

              <div className="bg-white p-3 md:p-12 rounded-2xl shadow-sm space-y-6 md:space-y-12">
                
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6 uppercase">Resolving Domestic and Matrimonial Disputes Amicably</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 md:mb-8 text-gray-700">
                    Navigating complex personal conflicts within a household is one of the most emotionally exhausting challenges an individual can face in life. When domestic relations break down, finding a dedicated <strong>family lawyer</strong> is essential to secure your legal rights, financial future, and the safety of your children. Matrimonial disputes involve a highly sensitive intersection of personal emotions, familial obligations, and statutory requirements, making standard litigation tactics inadequate.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 md:mb-8 text-gray-700">
                    In India, family disputes are uniquely complex due to the co-existence of multiple personal laws that differ based on religious faith. Whether you are dealing with a stressful divorce, seeking fair child custody, claiming alimony, or attempting to resolve a family property partition, you need a legal advisor who combines compassionate empathy with a sharp strategic mind. A skilled advocate will strive to protect your interests through negotiation and mediation first, saving you from prolonged courtroom warfare whenever possible.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    At AMA Legal Solutions, we are dedicated to resolving domestic issues with the highest standard of professionalism and confidentiality. We help you cut through the confusion of legal paperwork and court procedures, ensuring that you and your loved ones can transition into the next phase of life with dignity, financial security, and peace of mind.
                  </p>
                </section>

                {/* Role of Family Lawyer */}
                <section id="role-of-family-lawyer" className="scroll-mt-32">
                  <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6 uppercase">What is the Role of a Family Lawyer?</h2>
                  <div className="bg-[#fff9e6] border-l-8 border-[#D2A02A] p-6 md:p-10 mb-6 md:mb-10 rounded-r-2xl shadow-inner">
                    <p className="text-sm md:text-2xl text-gray-800 font-serif italic leading-relaxed">
                      "A family law practitioner is not just an advocate in court: they are a mediator, counselor, and guardian of your household's transition. Their primary duty is to navigate sensitive conflicts under the law while minimizing emotional disruption."
                    </p>
                  </div>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The scope of family law extends far beyond standard courtroom litigation. An expert advocate assists you in drafting legal documents, analyzing financial records for maintenance claims, coordinating with family therapists, and representing you in mediation chambers. They help clarify complex legal statutory requirements and set realistic expectations regarding timelines and outcomes.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    During active disputes, a lawyer acts as a protective shield between you and the opposing party. They manage all formal communications, reducing direct friction and prevent impulsive decisions driven by anger or grief. By analyzing the financial and personal assets involved, they design long-term solutions that protect your future lifestyle and secure your children's educational needs.
                  </p>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Core Legal Functions Performed by Family Lawyers</h3>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The daily work of a family advocate involves diverse skills tailored to sensitive domestic conflicts. Some of their primary legal functions include:
                  </p>
                  <ul className="grid md:grid-cols-2 gap-6 mb-10">
                    <li className="bg-gray-100 p-6 rounded-2xl border border-gray-200 shadow-sm">
                      <h4 className="font-bold text-gray-900 mb-2">Drafting & Pleadings</h4>
                      <p className="text-gray-600 text-sm">Preparing divorce petitions, child custody applications, maintenance replies, and property partition plaints with precise legal framing.</p>
                    </li>
                    <li className="bg-gray-100 p-6 rounded-2xl border border-gray-200 shadow-sm">
                      <h4 className="font-bold text-gray-900 mb-2">Negotiation & Mediation</h4>
                      <p className="text-gray-600 text-sm">Representing you in mediation sessions to draft mutual consent terms, avoiding the costs and delays of full-scale court trials.</p>
                    </li>
                    <li className="bg-gray-100 p-6 rounded-2xl border border-gray-200 shadow-sm">
                      <h4 className="font-bold text-gray-900 mb-2">Courtroom Advocacy</h4>
                      <p className="text-gray-600 text-sm">Presenting evidence, cross-examining witnesses, and arguing petitions before family court judges and high court benches.</p>
                    </li>
                    <li className="bg-gray-100 p-6 rounded-2xl border border-gray-200 shadow-sm">
                      <h4 className="font-bold text-gray-900 mb-2">Asset & Estate Audits</h4>
                      <p className="text-gray-600 text-sm">Assessing joint bank accounts, family businesses, and real estate assets to ensure a fair division and proper inheritance planning.</p>
                    </li>
                  </ul>
                </section>

                {/* Indian Personal Laws */}
                <section id="personal-laws-india" className="scroll-mt-32">
                  <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6 uppercase">Understanding Indian Personal Laws</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    One of the most complex aspects of domestic relations in India is that they are not governed by a single, uniform civil code. Instead, individuals are subject to different personal laws based on their religious faith. A qualified <strong>family lawyer</strong> must have deep expertise in these specific statutes to represent you effectively:
                  </p>
                  <div className="space-y-6 mb-10">
                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                      <h4 className="font-bold text-[#D2A02A] text-lg mb-2">1. Hindu Personal Law</h4>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        Governs Hindus, Buddhists, Jains, and Sikhs. The primary statutes include the Hindu Marriage Act 1955 (for marriage and divorce), the Hindu Adoptions and Maintenance Act 1956, the Hindu Minority and Guardianship Act 1956, and the Hindu Succession Act 1956 (for inheritance).
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                      <h4 className="font-bold text-[#D2A02A] text-lg mb-2">2. Special Marriage Act 1954</h4>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        A secular law that governs civil marriages, inter-religious marriages, and registrations. It provides a non-religious legal framework for marriage, divorce, and succession, ensuring protection for couples who do not wish to marry under religious personal laws.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                      <h4 className="font-bold text-[#D2A02A] text-lg mb-2">3. Muslim Personal Law</h4>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        Largely based on uncodified Shariat laws alongside specific legislation like the Muslim Personal Law (Shariat) Application Act 1937, the Dissolution of Muslim Marriages Act 1939, and the Muslim Women (Protection of Rights on Divorce) Act 1986.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                      <h4 className="font-bold text-[#D2A02A] text-lg mb-2">4. Christian and Parsi Personal Laws</h4>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        Christians are governed by the Indian Divorce Act 1869 and the Indian Christian Marriage Act 1872. Parsis are governed by the Parsi Marriage and Divorce Act 1936. Inheritance matters for these communities are generally guided by the Indian Succession Act 1925.
                      </p>
                    </div>
                  </div>
                  <p className="text-lg leading-relaxed text-gray-700">
                    Because these personal laws vary widely on issues of alimony, child guardianship, and property division, your legal strategy must be precisely tailored to the specific statute applicable to your marriage.
                  </p>
                </section>

                {/* Divorce & Separation */}
                <section id="divorce-procedures" className="scroll-mt-32">
                  <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6 uppercase">Divorce and Legal Separation Procedures</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    When a marriage is no longer viable, spouses can seek a legal dissolution through the family courts. The path chosen for divorce significantly impacts the timeline, emotional distress, and legal expenses involved. In India, there are two primary methods to file for divorce:
                  </p>
                  <div className="grid md:grid-cols-2 gap-8 mb-10">
                    <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100">
                      <h3 className="text-2xl font-bold text-blue-900 mb-4">Mutual Consent Divorce</h3>
                      <p className="text-blue-800 text-sm leading-relaxed mb-4">
                        This is the most civilized and rapid method of ending a marriage. Under Section 13B of the Hindu Marriage Act (and equivalent provisions in other laws), both spouses jointly file a petition stating they have resolved all disputes amicably.
                      </p>
                      <ul className="space-y-2 text-blue-800 text-xs font-semibold">
                        <li>• Requires two motions (First and Second Motion)</li>
                        <li>• Mandates a statutory 6-month cooling-off period</li>
                        <li>• Resolves alimony, child custody, and asset division upfront</li>
                        <li>• Typically completed in 6 to 18 months</li>
                      </ul>
                    </div>
                    <div className="bg-red-50 p-8 rounded-3xl border border-red-100">
                      <h3 className="text-2xl font-bold text-red-900 mb-4">Contested Divorce</h3>
                      <p className="text-red-800 text-sm leading-relaxed mb-4">
                        If one spouse does not agree to the divorce or if disputes regarding custody and alimony cannot be resolved, the other spouse must file a contested petition. This process requires proving specific statutory grounds before a judge.
                      </p>
                      <ul className="space-y-2 text-red-800 text-xs font-semibold">
                        <li>• Grounded in Cruelty (physical or mental)</li>
                        <li>• Desertion (continuous separation for 2+ years)</li>
                        <li>• Adultery, Conversion, or Mental Disorder</li>
                        <li>• Involves full trial and can take 3 to 7 years</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-lg leading-relaxed text-gray-700">
                    An experienced family advocate will always evaluate the possibility of converting a contested dispute into a mutual consent divorce through strategic negotiations, protecting you from years of stressful litigation.
                  </p>
                </section>

                {/* Child Custody & Guardianship */}
                <section id="child-custody" className="scroll-mt-32">
                  <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6 uppercase">Child Custody and Guardianship Rights</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    During a family breakdown, the custody and future of the children are often the most sensitive issues. Under Indian jurisprudence, the single most important principle followed by family courts is the <strong>"welfare of the child"</strong>. This doctrine overrides all other statutory claims of the parents.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The courts evaluate multiple factors to determine which environment is best for the child's development, including the child's age, emotional bonding, educational stability, financial resources of each parent, and the moral environment of the household. The court may also interview children above a certain age privately to understand their preferences.
                  </p>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Types of Custody Arrangements in India</h3>
                  <div className="grid md:grid-cols-3 gap-6 mb-10">
                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                      <h4 className="font-bold text-[#D2A02A] mb-2">Physical Custody</h4>
                      <p className="text-gray-600 text-xs">The child resides primarily with one parent (the primary caregiver), while the other parent is granted regular visitation rights to maintain a strong relationship.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                      <h4 className="font-bold text-[#D2A02A] mb-2">Joint Custody</h4>
                      <p className="text-gray-600 text-xs">Both parents share the physical care and legal responsibility of the child. The child spends rotating periods living with each parent based on a structured schedule.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                      <h4 className="font-bold text-[#D2A02A] mb-2">Legal Custody</h4>
                      <p className="text-gray-600 text-xs">Allows one or both parents to make crucial decisions regarding the child's education, medical treatments, religious upbringing, and overall development.</p>
                    </div>
                  </div>
                  <p className="text-lg leading-relaxed text-gray-700">
                    Guardianship is distinct from custody. While custody deals with the daily physical care of the child, guardianship refers to the legal right to manage the child's property and legal identity, governed under the Guardians and Wards Act 1890.
                  </p>
                </section>

                {/* Maintenance & Alimony */}
                <section id="alimony-maintenance" className="scroll-mt-32">
                  <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6 uppercase">Maintenance, Alimony, and Financial Settlements</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Financial security after divorce is a critical concern, particularly for dependent spouses and minor children. Indian law provides strong mechanisms to ensure that no spouse is left destitute following a marriage breakdown. The legal framework surrounding financial support includes:
                  </p>
                  <div className="space-y-6 mb-10">
                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-red-500">
                      <h4 className="font-bold text-red-900 mb-2">Interim Maintenance (Pendente Lite)</h4>
                      <p className="text-red-800 text-sm leading-relaxed">
                        Under Section 24 of the Hindu Marriage Act, a dependent spouse can claim financial support to meet their daily needs and legal expenses during the active litigation. This ensures that the financially weaker spouse has the resources to represent their case fairly.
                      </p>
                    </div>
                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-red-500">
                      <h4 className="font-bold text-red-900 mb-2">Permanent Alimony</h4>
                      <p className="text-red-800 text-sm leading-relaxed">
                        Granted under Section 25 at the time of final decree. It can be a one-time lump-sum payment or a monthly allowance. The amount depends on the husband's income, the wife's earning potential, their assets, and the duration of the marriage.
                      </p>
                    </div>
                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-red-500">
                      <h4 className="font-bold text-red-900 mb-2">Section 125 of CrPC / Section 144 of BNSS</h4>
                      <p className="text-red-800 text-sm leading-relaxed">
                        A secular provision that allows wives, children, and dependent parents to claim monthly maintenance. It is a rapid remedy intended to prevent destitution, independent of religious personal laws.
                      </p>
                    </div>
                  </div>
                  <p className="text-lg leading-relaxed text-gray-700">
                    A family court lawyer helps gather tax returns, bank statements, and business records to prove the actual income of the spouse, ensuring that the court awards a fair maintenance amount that reflects the family's standard of living.
                  </p>
                </section>

                {/* Property & Succession */}
                <section id="property-partition" className="scroll-mt-32">
                  <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6 uppercase">Partition of Property and Inheritance Disputes</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Family disputes often involve significant conflicts over ancestral real estate and inheritance rights. Resolving these issues requires a deep understanding of the Hindu Succession Act 1956 and other religious succession laws. The division of family wealth is categorized into two main areas:
                  </p>
                  <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 mb-10">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Property Rights Under Indian Law</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-4">
                        <span className="bg-[#D2A02A] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1 text-xs font-bold">1</span>
                        <span><strong>Coparcenary Rights of Daughters:</strong> Following the landmark Hindu Succession (Amendment) Act 2005, daughters have equal rights as sons in ancestral coparcenary property by birth, regardless of their marital status.</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <span className="bg-[#D2A02A] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1 text-xs font-bold">2</span>
                        <span><strong>Self-Acquired vs Ancestral Property:</strong> Ancestral property belongs to four generations of coparceners and cannot be sold without joint consent. Self-acquired property belongs solely to the owner, who can dispose of it as they wish via a Will or Gift Deed.</span>
                      </li>
                      <li className="flex items-start gap-4">
                        <span className="bg-[#D2A02A] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1 text-xs font-bold">3</span>
                        <span><strong>Partition Suits:</strong> If family members refuse to divide joint properties amicably, an heir can file a partition suit in a civil court, which will order a formal division or sale and distribution of the proceeds.</span>
                      </li>
                    </ul>
                  </div>
                  <p className="text-lg leading-relaxed text-gray-700">
                    Family lawyers also assist in drafting legally valid Wills and setting up family trusts, protecting your children from future inheritance disputes and securing a smooth transition of your hard-earned assets.
                  </p>
                </section>

                {/* Family Court Process */}
                <section id="court-proceedings" className="scroll-mt-32">
                  <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6 uppercase">The Indian Family Court Process</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Family courts in India operate under the Family Courts Act 1984, which emphasizes conciliation and amicable resolution over adversarial litigation. Understanding the stage-by-stage process of a family court case helps ease anxiety:
                  </p>
                  <ol className="space-y-4 mb-10 pl-6 list-decimal text-gray-700">
                    <li>
                      <strong>Filing the Petition:</strong> Your family lawyer drafts and files the petition detailing the facts and legal relief sought (e.g., divorce, custody, or maintenance).
                    </li>
                    <li>
                      <strong>Summons and Appearance:</strong> The court issues a formal summons to the opposing party, directing them to appear in court and file their reply (written statement).
                    </li>
                    <li>
                      <strong>Mandatory Counseling/Mediation:</strong> Before the trial starts, the court refers the parties to counselor sessions or a mediation center to explore reconciliation or an amicable settlement.
                    </li>
                    <li>
                      <strong>Framing of Issues:</strong> If mediation fails, the judge identifies the core areas of dispute (issues) that need to be resolved based on the pleadings.
                    </li>
                    <li>
                      <strong>Evidence and Cross-Examination:</strong> Both parties present their documents, file affidavits of evidence, and are cross-examined by the opposing advocates.
                    </li>
                    <li>
                      <strong>Arguments and Judgment:</strong> The lawyers present their final legal arguments, and the judge delivers the final judgment and decree.
                    </li>
                  </ol>
                  <p className="text-lg leading-relaxed text-gray-700">
                    While the law encourages speed, high backlogs in major family courts mean that active legal representation is crucial to prevent unnecessary delays and keep your case moving forward.
                  </p>
                </section>

                {/* Hiring the Right Lawyer */}
                <section id="hiring-advice" className="scroll-mt-32">
                  <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6 uppercase">How to Hire the Right Family Lawyer</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    Choosing the right legal representative is the single most important decision you will make in your case. A family dispute is deeply personal, and your advocate will have access to intimate details of your life. When evaluating potential lawyers, consider the following checklist:
                  </p>
                  <div className="grid md:grid-cols-2 gap-8 mb-10">
                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm">
                      <h4 className="text-xl font-bold mb-4 text-[#D2A02A]">1. Track Record and Specialization</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Ensure the advocate specializes specifically in family law. General practitioners might not be up-to-date with the latest local family court procedures or recent Supreme Court judgments on alimony and custody.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm">
                      <h4 className="text-xl font-bold mb-4 text-[#D2A02A]">2. Communication and Empathy</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Your lawyer must be patient, a good listener, and capable of understanding your emotional situation without judgment. They should explain complex legal rules in simple language.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm">
                      <h4 className="text-xl font-bold mb-4 text-[#D2A02A]">3. Transparent Fee Structure</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Avoid lawyers who are vague about fees. Request a clear, written breakdown of their charges, including fee per appearance, drafting charges, clerkage, and miscellaneous expenses.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm">
                      <h4 className="text-xl font-bold mb-4 text-[#D2A02A]">4. Commitment to Amicable Resolution</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        A great family lawyer prioritizes mediation and settlements over courtroom fighting. If a lawyer promises immediate aggressive victory and discourages mediation, proceed with caution.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Why Choose AMA Legal */}
                <section id="why-ama" className="scroll-mt-32">
                  <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6 uppercase">Why Choose AMA Legal Solutions?</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Matrimonial and domestic disputes require a delicate balance of legal expertise, sensitivity, and professional boundaries. At AMA Legal Solutions, our family law division is designed to support you through every stage of your transition:
                  </p>
                  <ul className="space-y-4 mb-10 text-gray-700">
                    <li className="flex items-start gap-3">
                      <div className="bg-[#D2A02A] p-2 rounded-full text-white mt-1"><FaCheckCircle size={12}/></div>
                      <span><strong>Experienced Matrimonial Panel:</strong> Our dedicated family advocates have represented thousands of clients across major family courts, high courts, and the Supreme Court of India.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-[#D2A02A] p-2 rounded-full text-white mt-1"><FaCheckCircle size={12}/></div>
                      <span><strong>Mediation First Approach:</strong> We actively negotiate terms for mutual consent divorces and property partitions, saving you time, expenses, and emotional distress.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-[#D2A02A] p-2 rounded-full text-white mt-1"><FaCheckCircle size={12}/></div>
                      <span><strong>100% Confidentiality:</strong> Your personal information, case details, and financial records are protected under strict professional confidentiality agreements.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-[#D2A02A] p-2 rounded-full text-white mt-1"><FaCheckCircle size={12}/></div>
                      <span><strong>Child-Centric Solutions:</strong> We focus on protecting the mental health and future security of children during custody and visitation disputes.</span>
                    </li>
                  </ul>
                  <div className="p-6 border border-[#D2A02A]/20 rounded-2xl bg-[#D2A02A]/5 text-center mt-8">
                    <h4 className="text-lg font-bold text-gray-950 mb-2">Schedule a Confidential Strategy Session</h4>
                    <p className="text-sm text-gray-600 mb-4">Discuss your case in confidence with our senior matrimonial legal experts.</p>
                    <Link href="/contact">
                      <button className="bg-[#D2A02A] text-white px-8 py-3 rounded-full font-bold hover:bg-[#b88a22] transition-all">
                        Book My Consultation
                      </button>
                    </Link>
                  </div>
                </section>

                {/* FAQs */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-8 uppercase">In-Depth Frequently Asked Questions</h2>
                  <div className="space-y-8">
                    {faqs.map((faq, index) => (
                      <div key={index} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 flex items-start">
                          <span className="text-[#D2A02A] mr-4 text-3xl font-serif">Q:</span>
                          {faq.question}
                        </h3>
                        <p className="text-gray-700 leading-relaxed pl-10 text-lg">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Final CTA */}
                <section className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] rounded-[3rem] p-10 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
                  <div className="relative z-10">
                    <h2 className="text-2xl md:text-6xl font-bold mb-6">Protect Your Family and Future Today</h2>
                    <p className="text-sm md:text-2xl opacity-80 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
                      Do not let complex laws and emotional stress overwhelm you. Contact our matrimonial law division for a confidential case analysis.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                      <Link href="/contact">
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-110 shadow-[0_0_20px_rgba(210,160,42,0.4)] text-lg">
                          Book a Consultation
                        </button>
                      </Link>
                      <a href="tel:+918700343611" className="flex items-center gap-2 justify-center">
                        <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-4 px-12 rounded-full transition-all text-lg">
                          Call Helpline
                        </button>
                      </a>
                    </div>
                    <p className="mt-10 text-xs md:text-base opacity-60">
                      Confidential Advisory • 1940+ Successful Case Resolutions Across India
                    </p>
                  </div>
                </section>

              </div>
            </div>

            {/* Sidebar */}
            <div className="hidden lg:block space-y-8 sticky top-24">
              {/* Contact Card */}
              <div className="bg-[#1C1C1C] text-white p-8 rounded-[2rem] shadow-xl border border-gray-800">
                <h3 className="text-2xl font-bold text-[#D2A02A] mb-4">Confidential Advice</h3>
                <p className="text-gray-400 mb-8 text-sm leading-relaxed">
                  Speak to our specialized matrimonial advocates today for an evaluation of your legal rights.
                </p>
                <a 
                  href="tel:+918700343611" 
                  className="block w-full bg-[#D2A02A] text-white text-center py-4 rounded-2xl font-bold hover:bg-[#b88a22] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 mb-6"
                >
                  Call +91-8700343611
                </a>
                <Link 
                  href="/contact"
                  className="block w-full bg-gray-800 text-white text-center py-4 rounded-2xl font-bold hover:bg-black transition-all"
                >
                  Book Online Consultation
                </Link>
              </div>

              {/* Related Resources */}
              <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm">
                <h4 className="text-xl font-bold mb-6 text-gray-900">Expertise Areas</h4>
                <div className="space-y-4">
                  <Link href="/services/arbitration" className="block group">
                    <p className="text-sm text-gray-600 group-hover:text-[#D2A02A] transition-colors mb-1">Arbitration & Conciliation</p>
                    <div className="h-0.5 w-full bg-gray-50 group-hover:bg-[#D2A02A]/20 transition-all"></div>
                  </Link>
                  <Link href="/services/banking-and-finance" className="block group">
                    <p className="text-sm text-gray-600 group-hover:text-[#D2A02A] transition-colors mb-1">Banking & Finance Law</p>
                    <div className="h-0.5 w-full bg-gray-50 group-hover:bg-[#D2A02A]/20 transition-all"></div>
                  </Link>
                  <Link href="/services/civil" className="block group">
                    <p className="text-sm text-gray-600 group-hover:text-[#D2A02A] transition-colors mb-1">Civil Litigation Services</p>
                    <div className="h-0.5 w-full bg-gray-50 group-hover:bg-[#D2A02A]/20 transition-all"></div>
                  </Link>
                  <Link href="/services/corporate" className="block group">
                    <p className="text-sm text-gray-600 group-hover:text-[#D2A02A] transition-colors mb-1">Corporate & Business Law</p>
                    <div className="h-0.5 w-full bg-gray-50 group-hover:bg-[#D2A02A]/20 transition-all"></div>
                  </Link>
                  <Link href="/services/criminal-law" className="block group">
                    <p className="text-sm text-gray-600 group-hover:text-[#D2A02A] transition-colors mb-1">Criminal Defense Advocacy</p>
                    <div className="h-0.5 w-full bg-gray-50 group-hover:bg-[#D2A02A]/20 transition-all"></div>
                  </Link>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="p-6 border border-[#D2A02A]/20 rounded-2xl bg-[#D2A02A]/5 text-center">
                <p className="text-xs text-gray-500 mb-2 uppercase tracking-widest font-bold">Helpline Number</p>
                <a href="tel:+918700343611" className="text-xl font-bold text-[#1C1C1C] hover:text-[#D2A02A] transition-colors">
                  +91 8700343611
                </a>
                <p className="text-[10px] text-gray-400 mt-2">100% Confidential Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
