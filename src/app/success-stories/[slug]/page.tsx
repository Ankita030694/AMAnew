import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import { successStories } from "@/data/success-stories";
import { Metadata } from "next";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import Image from "next/image";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const story = successStories.find((s) => s.slug === resolvedParams.slug);

  if (!story) {
    return {
      title: "Story Not Found",
    };
  }

  return {
    title: story.seo.title,
    description: story.seo.description,
    keywords: story.seo.keywords,
  };
}

export default async function SuccessStoryPage({ params }: Props) {
  const resolvedParams = await params;
  const story = successStories.find((s) => s.slug === resolvedParams.slug);

  if (!story) {
    return notFound();
  }

  // Generate TOC sections from story content
  const tocSections = story.storyContent.map(section => ({
    id: section.id,
    title: section.heading
  }));
  
  // Add fixed sections to TOC
  tocSections.push({ id: "reviews", title: "Client Reviews" });
  tocSections.push({ id: "more-stories", title: "More Success Stories" });

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Success Stories", href: "/success-stories" },
    { label: story.name, href: `/success-stories/${story.slug}` },
  ];

  // Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": `https://www.amalegalsolutions.com${item.href}`
    }))
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": story.seo.title,
    "description": story.seo.description,
    "image": "https://www.amalegalsolutions.com/ama-legal-solutions-logo.png", // Fallback or specific image
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
  };

  return (
    <div className="bg-[#EAE6DB] min-h-screen font-[family-name:var(--font-polysans)] text-[#30261C]">
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

      {/* Hero Section */}
      <div className="relative bg-[#EAE6DB] text-[#30261C]">
          <div className="relative z-20 container mx-auto px-4 py-24 md:py-32 text-center">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-[#D2A02A]/10 border border-[#D2A02A]/20 backdrop-blur-sm">
                <span className="text-sm text-[#D2A02A] font-bold uppercase tracking-wider">
                    SUCCESS STORY: {story.location.toUpperCase()}
                </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight max-w-4xl mx-auto text-[#30261C]">
              {story.seo.title}
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-[#30261C]/80 italic">
              "{story.quote}"
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto bg-white/40 backdrop-blur-md rounded-2xl p-6 border border-white/50 shadow-sm">
                 <div>
                    <div className="text-xs uppercase text-[#30261C]/60 mb-1">Total Debt</div>
                    <div className="text-lg md:text-2xl font-bold text-[#30261C]">{story.totalDebt}</div>
                 </div>
                 <div>
                    <div className="text-xs uppercase text-[#30261C]/60 mb-1">Settled For</div>
                    <div className="text-lg md:text-2xl font-bold text-[#D2A02A]">{story.settledAmount}</div>
                 </div>
                 <div>
                    <div className="text-xs uppercase text-[#30261C]/60 mb-1">Savings</div>
                    <div className="text-lg md:text-2xl font-bold text-green-700">{story.savedAmount}</div>
                 </div>
                 <div>
                    <div className="text-xs uppercase text-[#30261C]/60 mb-1">Status</div>
                    <div className="text-lg md:text-2xl font-bold text-[#30261C]">Settled</div>
                 </div>
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
             <div className="lg:hidden mb-8">
               <TableOfContents sections={tocSections} />
             </div>

             <div className="bg-white p-6 md:p-12 rounded-2xl shadow-sm space-y-12">
                
                {/* Narrative Sections */}
                {story.storyContent.map((section, idx) => (
                    <section key={idx} id={section.id} className="scroll-mt-32">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">{section.heading}</h2>
                        {section.paragraphs.map((para, pIdx) => (
                            <p key={pIdx} className="text-lg leading-relaxed mb-6 text-gray-700">
                                {para}
                            </p>
                        ))}
                    </section>
                ))}

                {/* Reviews Section */}
                <section id="reviews" className="scroll-mt-32 border-t border-gray-100 pt-12">
                   <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">What Our Clients Say</h2>
                   <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 italic text-gray-600">
                          "I never thought I'd get out of that debt trap. AMA Legal Solutions didn't just settle my loan, they gave me my life back."
                          <div className="mt-4 font-bold text-gray-900 not-italic">- Client from Mumbai</div>
                      </div>
                       <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 italic text-gray-600">
                          "Professional, ethical, and effective. The harassment stopped on day one. Highly recommended."
                          <div className="mt-4 font-bold text-gray-900 not-italic">- Business Owner, Delhi</div>
                      </div>
                   </div>
                </section>

                {/* More Stories CTA */}
                <section id="more-stories" className="scroll-mt-32 border-t border-gray-100 pt-12">
                   <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Read More Success Stories</h2>
                   <p className="text-gray-700 mb-6">We have helped thousands of Indians become debt-free. See how we can help you.</p>
                   <Link href="/success-stories" className="inline-block text-[#D2A02A] font-bold hover:underline">
                      View All Success Stories →
                   </Link>
                </section>

                {/* Final CTA */}
                <section className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden mt-12">
                  <div className="relative z-10">
                    <h2 className="text-2xl md:text-4xl font-bold mb-4">In a Similar Situation?</h2>
                    <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                      Don't let debt destroy your peace of mind. Let our experts handle the banks while you focus on rebuilding your life.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link href="/contact">
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg w-full sm:w-auto">
                          Get Free Legal Advice
                        </button>
                      </Link>
                      <a href="tel:+918700343611">
                        <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-8 rounded-full transition-all w-full sm:w-auto">
                          Call: +91-8700343611
                        </button>
                      </a>
                    </div>
                  </div>
                </section>

             </div>
          </div>

          {/* Right Sidebar - Sticky */}
          <div className="hidden lg:block space-y-8 sticky top-24">
             {/* Contact Card */}
             <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Stop the Harassment</h3>
                <p className="text-gray-600 mb-6 text-sm">
                  Get immediate legal protection from recovery agents.
                </p>
                <a 
                  href="tel:+918700343611" 
                  className="block w-full bg-[#D2A02A] text-white text-center py-3 rounded-lg font-semibold hover:bg-[#b88a22] transition-colors mb-4"
                >
                  Call Now
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
                    <Link href="/services/loan-settlement" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                      <span className="mr-2">›</span> Loan Settlement Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/debt-consolidation" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                      <span className="mr-2">›</span> Debt Consolidation
                    </Link>
                  </li>
                </ul>
              </div>
          </div>

        </div>
      </div>
    </div>
  );
}
