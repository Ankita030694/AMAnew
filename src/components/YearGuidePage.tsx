import type { ReactNode } from "react";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

const baseUrl = "https://www.amalegalsolutions.com";

interface Faq {
  question: string;
  answer: string;
}

interface YearGuidePageProps {
  path: string;
  breadcrumbLabel: string;
  headline: string;
  description: string;
  h1Lead: string;
  h1Accent: string;
  intro: string;
  sections: { id: string; title: string }[];
  faqs: Faq[];
  relatedLinks: { href: string; label: string }[];
  sources?: { href: string; label: string }[];
  children: ReactNode;
}

export const guideLinkClass = "text-[#b88a22] font-semibold underline";

export function yearGuideMetadata(path: string, title: string, description: string) {
  return {
    title,
    description,
    alternates: { canonical: `${baseUrl}${path}` },
    openGraph: {
      title,
      description,
      url: `${baseUrl}${path}`,
      type: "article",
      images: [{ url: "/services/3.png", width: 1200, height: 630, alt: title }],
    },
  };
}

export default function YearGuidePage({
  path,
  breadcrumbLabel,
  headline,
  description,
  h1Lead,
  h1Accent,
  intro,
  sections,
  faqs,
  relatedLinks,
  sources,
  children,
}: YearGuidePageProps) {
  const pageUrl = `${baseUrl}${path}`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": baseUrl },
      { "@type": "ListItem", "position": 2, "name": "Loan Settlement", "item": `${baseUrl}/services/loan-settlement` },
      { "@type": "ListItem", "position": 3, "name": breadcrumbLabel, "item": pageUrl },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": headline,
    "description": description,
    "image": `${baseUrl}/services/3.png`,
    "datePublished": "2026-11-10",
    "dateModified": "2026-11-10",
    "author": { "@type": "Organization", "name": "AMA Legal Solutions", "url": baseUrl },
    "publisher": {
      "@type": "Organization",
      "name": "AMA Legal Solutions",
      "logo": { "@type": "ImageObject", "url": `${baseUrl}/ama-legal-solutions-logo.png` },
    },
    "mainEntityOfPage": pageUrl,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer },
    })),
  };

  const tocSections = [...sections, { id: "faqs", title: "FAQs" }];
  const breadcrumbItems = [
    { label: "Loan Settlement", href: "/services/loan-settlement" },
    { label: breadcrumbLabel, href: path },
  ];

  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
        <div className="bg-black text-white">
          <div className="container mx-auto px-4 py-20 md:py-28 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight mt-10">
              {h1Lead} <span className="text-[#D2A02A]">{h1Accent}</span>
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-200">{intro}</p>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-7xl py-8">
          <Breadcrumbs items={breadcrumbItems} />

          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-3/4 min-w-0">
              <TableOfContents sections={tocSections} />

              <div className="bg-white p-6 md:p-12 rounded-2xl shadow-sm mt-8 space-y-12">
                {children}

                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently asked questions</h2>
                  <div className="space-y-4">
                    {faqs.map((faq) => (
                      <details key={faq.question} className="bg-gray-50 rounded-xl border border-gray-200 p-5">
                        <summary className="font-semibold text-gray-900 cursor-pointer">{faq.question}</summary>
                        <p className="text-gray-700 leading-relaxed mt-3">{faq.answer}</p>
                      </details>
                    ))}
                  </div>
                  {sources && (
                    <div className="mt-8">
                      <h3 className="text-lg font-bold text-gray-900 mb-3">Sources</h3>
                      <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        {sources.map((source) => (
                          <li key={source.href}>
                            <a href={source.href} target="_blank" rel="noopener noreferrer" className={guideLinkClass}>{source.label}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <p className="text-sm text-gray-500 mt-6">
                    This page is general information, not legal advice on your specific case. Last updated 10 November 2026.
                  </p>
                </section>
              </div>
            </div>

            <div className="lg:w-1/4">
              <div className="sticky top-24 space-y-8">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Planning to settle?</h3>
                  <p className="text-gray-600 mb-6 text-sm">Speak to our team about your lender and account.</p>
                  <a href="tel:+918700343611" className="block w-full bg-[#D2A02A] text-white text-center py-3 rounded-lg font-semibold hover:bg-[#b88a22] transition-colors mb-4">
                    Call +91-8700343611
                  </a>
                  <Link href="/contact" className="block w-full border border-[#D2A02A] text-[#b88a22] text-center py-3 rounded-lg font-semibold hover:bg-[#D2A02A] hover:text-white transition-colors">
                    Request Callback
                  </Link>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Related guides</h3>
                  <ul className="space-y-3 text-sm">
                    {relatedLinks.map((link) => (
                      <li key={link.href}>
                        <Link href={link.href} className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                          <span className="mr-2">›</span> {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
