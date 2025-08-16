import { collection, getDocs, query, where, limit } from "firebase/firestore";
import { db } from "../../../lib/firebase";
import type { Metadata, ResolvingMetadata } from "next";
import ArticleDetail from "./blogdetail";
import Script from "next/script";

// Cache for blog data to avoid repeated Firebase queries
const blogCache = new Map<string, any>();
const faqCache = new Map<string, any[]>();

// Optimized function to fetch blog by slug
async function getBlogBySlug(slug: string) {
  // Check cache first
  if (blogCache.has(slug)) {
    return blogCache.get(slug);
  }

  try {
    // Use where clause to query only the specific blog
    const blogsCollection = collection(db, "blogs");
    const q = query(blogsCollection, where("slug", "==", slug), limit(1));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0];
      const data = { id: doc.id, ...doc.data() };
      
      // Cache the result
      blogCache.set(slug, data);
      return data;
    }
    
    return null;
  } catch (error) {
    console.error("Error fetching blog by slug:", error);
    return null;
  }
}

// Dynamic metadata generation - optimized with proper querying
export async function generateMetadata(
  props: { params: Promise<{ slug: string }> },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await props.params;

  // Default metadata in case we can't find the blog
  let title = "Blog Post | AMA Legal Solutions";
  let description = "Read our latest insights and articles at AMA Legal Solutions";
  let image = "";
  let author = "AMA Legal Solutions";

  // Base URL for canonical link
  const baseUrl = "https://amalegalsolutions.com";

  try {
    // Use optimized function to fetch blog data
    const blogData = await getBlogBySlug(slug);
    
    if (blogData) {
      title = blogData.metaTitle || blogData.title || title;
      description = blogData.metaDescription || description;
      image = blogData.image || "";
      author = blogData.author || author;
    }
  } catch (error) {
    console.error("Error fetching article metadata:", error);
  }

  const blogUrl = `${baseUrl}/blog/${slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: blogUrl,
    },
    openGraph: {
      title,
      description,
      url: blogUrl,
      siteName: "AMA Legal Solutions",
      type: "article",
      images: image ? [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        }
      ] : [],
      authors: [author],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: image ? [image] : [],
      creator: "@amalegalsolutions",
    },
  };
}

// Updated Page component - optimized
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  // Get the blog data and FAQs server-side
  let pageTitle = "Latest Insights from AMA Legal Solutions";
  let blogData = null;
  let faqs: any[] = [];
  let faqSchema = null;
  let articleSchema = null;

  try {
    blogData = await getBlogBySlug(slug);
    if (blogData) {
      pageTitle = blogData.title || pageTitle;
      faqs = await getBlogFAQs(blogData.id) || [];
      faqSchema = generateFAQSchema(faqs, blogData);
      articleSchema = generateArticleSchema(blogData, faqs);
    }
  } catch (error) {
    console.error("Error fetching blog data:", error);
  }

  return (
    <>
      {/* Server-side rendered FAQ Schema */}
      {faqSchema && (
        <Script
          id="blog-faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema)
          }}
          strategy="beforeInteractive"
        />
      )}
      
      {/* Server-side rendered Article Schema */}
      {articleSchema && (
        <Script
          id="blog-article-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(articleSchema)
          }}
          strategy="beforeInteractive"
        />
      )}
      
      <header>
        <h1 className="sr-only">AMA Legal Insights</h1>
        <ArticleDetail slug={slug} />
        {/* Styled Disclaimer Section */}
        <div className="my-12 px-6 py-8 bg-gray-50 rounded-xl border border-gray-200 shadow-sm text-center">
          <h3 className="text-[#5A4C33] text-xl font-medium mb-4 text-center">
            Disclaimer
          </h3>
          <div className="text-gray-700 text-sm leading-relaxed space-y-4">
            <p>
              The information provided on this website www.amalegalsolutions.com
              is for general informational purposes only and should not be
              considered legal, financial, or professional advice. While we
              strive to ensure that the content is accurate and up to date, we
              do not guarantee the completeness, reliability, or accuracy of any
              information.
            </p>
            <p>
              Any reliance you place on the information provided is strictly at
              your own risk. AMA Legal Solutions, its founders, employees, or
              affiliates shall be held liable for any losses, damages, or legal
              consequences arising from the use of this website or any linked
              resources.
            </p>
            <p>
              The content on this website does not establish a client-attorney
              relationship. If you require legal or financial assistance, we
              strongly recommend consulting with a qualified professional. Any
              discussions, consultations, or assessments provided through this
              website or related services are for preliminary guidance only.
            </p>
            <p>
              Our services are subject to applicable laws and regulations, and
              results may vary depending on individual circumstances. We do not
              guarantee specific outcomes for loan settlements, debt
              negotiations, or legal proceedings.
            </p>
            <p>
              Additionally, this website may contain links to third-party
              websites for additional information or reference. We do not
              endorse or assume responsibility for the content, privacy
              policies, or practices of these external websites.
            </p>
            <p className="font-medium">
              By using this website, you acknowledge and agree to this
              disclaimer. If you do not agree with any part of this notice,
              please refrain from using our services. For legal assistance or
              inquiries, please contact us at{" "}
              <a
                href="mailto:notify@amalegalsolutions.com"
                className="text-[#D2A02A] hover:underline"
              >
                notify@amalegalsolutions.com
              </a>
            </p>
          </div>
        </div>
      </header>
    </>
  );
}

// Function to fetch FAQs server-side
async function getBlogFAQs(blogId: string) {
  // Check cache first
  if (faqCache.has(blogId)) {
    return faqCache.get(blogId);
  }

  try {
    const faqsSnapshot = await getDocs(collection(db, 'blogs', blogId, 'faqs'));
    const faqs = faqsSnapshot.docs.map(doc => ({
      id: doc.id,
      question: doc.data().question || '',
      answer: doc.data().answer || ''
    }));
    
    // Cache the result
    faqCache.set(blogId, faqs);
    return faqs;
  } catch (error) {
    console.error("Error fetching FAQs:", error);
    return [];
  }
}

// Function to generate FAQ schema
function generateFAQSchema(faqs: any[], blogData: any) {
  if (faqs.length === 0) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "name": `${blogData.title} - Frequently Asked Questions`,
    "description": `Frequently asked questions about ${blogData.title}`,
    "url": `https://amalegalsolutions.com/blog/${blogData.slug}`,
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer.replace(/<[^>]*>/g, '') // Strip HTML tags
      }
    }))
  };
}

// Function to generate article schema
function generateArticleSchema(blogData: any, faqs: any[]) {
  const baseSchema: any = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": blogData.title,
    "name": blogData.title,
    "description": blogData.metaDescription || blogData.subtitle || blogData.description?.replace(/<[^>]*>/g, '').substring(0, 160) || '',
    "url": `https://amalegalsolutions.com/blog/${blogData.slug}`,
    "datePublished": blogData.date,
    "dateModified": blogData.date,
    "author": {
      "@type": "Person",
      "name": blogData.author || "AMA Legal Solutions",
      "url": blogData.author === "Anuj Anand Malik" ? "https://amalegalsolutions.com/author/anuj-anand-malik" : 
            blogData.author === "Shrey Arora" ? "https://amalegalsolutions.com/author/shrey-arora" : 
            "https://amalegalsolutions.com/about"
    },
    "publisher": {
      "@type": "Organization",
      "name": "AMA Legal Solutions",
      "url": "https://amalegalsolutions.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://amalegalsolutions.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://amalegalsolutions.com/blog/${blogData.slug}`
    },
    "keywords": blogData.metaTitle || blogData.title,
    "articleSection": "Legal Advice",
    "inLanguage": "en-IN"
  };

  // Add image if available
  if (blogData.image) {
    baseSchema.image = {
      "@type": "ImageObject",
      "url": blogData.image,
      "caption": blogData.title
    };
  }

  // Note: FAQ schema is handled separately, not embedded in article
  return baseSchema;
}
