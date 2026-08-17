import { adminDb } from "../../../lib/firebase-admin";
import type { Metadata, ResolvingMetadata } from "next";
import ArticleDetail, { Blog, FAQ, Review } from "./blogdetail";
import PerformanceMonitor from '../../../components/PerformanceMonitor';
import Navbar from "@/newcomp/Navbar";
export const revalidate = 3600; // Cache the page at the Edge for 1 hour

export async function generateStaticParams() {
  // On-demand static generation. Returns empty array so it builds when first visited.
  return [];
}

// Optimized function to fetch blog by slug
const getBlogBySlug = async (slug: string) => {
  console.log(`[getBlogBySlug] Fetching blog for slug: "${slug}"`);

  try {
    // Try exact match first
    let querySnapshot = await adminDb.collection("blogs").where("slug", "==", slug).limit(1).get();

    // If not found, try decoded slug
    if (querySnapshot.empty) {
        const decodedSlug = decodeURIComponent(slug);
        if (decodedSlug !== slug) {
            console.log(`[getBlogBySlug] Retrying with decoded slug: "${decodedSlug}"`);
            querySnapshot = await adminDb.collection("blogs").where("slug", "==", decodedSlug).limit(1).get();
        }
    }
    
    // If still not found, try trimming
    if (querySnapshot.empty) {
        const trimmedSlug = slug.trim();
        if (trimmedSlug !== slug) {
            console.log(`[getBlogBySlug] Retrying with trimmed slug: "${trimmedSlug}"`);
            querySnapshot = await adminDb.collection("blogs").where("slug", "==", trimmedSlug).limit(1).get();
        }
    }

    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0];
      const data = { id: doc.id, ...doc.data() } as unknown as Blog;
      
      console.log(`[getBlogBySlug] Found blog: ${doc.id}`);

      return data;
    }
    
    console.log(`[getBlogBySlug] No blog found for slug: "${slug}"`);
    return null;
  } catch (error) {
    console.error("Error fetching blog by slug:", error);
    return null;
  }
};

// Function to fetch FAQs server-side
const getBlogFAQs = async (blogId: string) => {
  try {
    const faqsSnapshot = await adminDb.collection('blogs').doc(blogId).collection('faqs').get();
    const faqs = faqsSnapshot.docs.map(doc => ({
      id: doc.id,
      question: doc.data().question || '',
      answer: doc.data().answer || ''
    }));
    
    return faqs;
  } catch (error) {
    console.error("Error fetching FAQs:", error);
    return [];
  }
};

// Function to fetch Reviews server-side
const getBlogReviews = async (blogId: string) => {
  try {
    const reviewsSnapshot = await adminDb.collection('blogs').doc(blogId).collection('reviews').get();
    const reviews = reviewsSnapshot.docs.map(doc => ({
      id: doc.id,
      name: doc.data().name || '',
      rating: doc.data().rating || 5,
      review: doc.data().review || ''
    }));
    
    return reviews;
  } catch (error) {
    console.error("Error fetching Reviews:", error);
    return [];
  }
};

// Function to fetch Related Blogs
const getRelatedBlogs = async (excludeId: string) => {
  try {
    const querySnapshot = await adminDb.collection('blogs')
      .orderBy('created', 'desc')
      .limit(6)
      .get();
    
    const allBlogs = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as unknown as Blog[];
    
    // Filter out current blog and take top 3
    return allBlogs.filter(blog => blog.id !== excludeId).slice(0, 3);
  } catch (error) {
    console.error("Error fetching related blogs:", error);
    return [];
  }
};

// Dynamic metadata generation
export async function generateMetadata(
  props: { params: Promise<{ slug: string }> },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await props.params;

  const baseUrl = "https://www.amalegalsolutions.com";
  let title = "Blog Post | AMA Legal Solutions";
  let description = "Read our latest insights and articles at AMA Legal Solutions";
  let image = `${baseUrl}/ama-legal-solutions-logo.png`;
  let author = "AMA Legal Solutions";

  try {
    const blogData = await getBlogBySlug(slug);
    
    if (blogData) {
      title = blogData.metaTitle || blogData.title || title;
      description = blogData.metaDescription || description;
      image = formatAbsoluteUrl(blogData.image || blogData.infographic);
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
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        }
      ],
      authors: [author],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@amalegalsolutions",
    },
  };
}

// Updated Page component
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  let blogData = null;
  let faqs: FAQ[] = [];
  let reviews: Review[] = [];
  let relatedBlogs: Blog[] = [];
  
  let schemas = null;

  try {
    blogData = await getBlogBySlug(slug);
    if (blogData) {
      // Fetch related data in parallel
      const [fetchedFaqs, fetchedReviews, fetchedRelated] = await Promise.all([
        getBlogFAQs(blogData.id),
        getBlogReviews(blogData.id),
        getRelatedBlogs(blogData.id)
      ]);

      faqs = fetchedFaqs;
      reviews = fetchedReviews;
      relatedBlogs = fetchedRelated;

      // Generate structured data schemas
      schemas = generateSchemas(blogData, faqs, reviews);
    }
  } catch (error) {
    console.error("Error fetching blog data:", error);
  }

  if (!blogData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Article Not Found</h1>
          <p className="text-gray-600 mt-2">The article you are looking for does not exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div style={{ fontFamily: "var(--font-polysans)" }}>
      <Navbar />
      <PerformanceMonitor />
      
      {/* JSON-LD Structured Data Schemas for Google Rich Results Test & Search Engines */}
      {schemas && (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.articleSchema) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.organizationSchema) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.breadcrumbSchema) }}
          />
          {schemas.faqSchema && (
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faqSchema) }}
            />
          )}
        </>
      )}

      {/* SSR-rendered crawlable content - guaranteed in server HTML */}
      <article className="sr-only" aria-hidden="true">
        <h1>{blogData.title}</h1>
        {blogData.date && <time dateTime={blogData.date}>{blogData.date}</time>}
        {blogData.author && <span>{blogData.author}</span>}
        {blogData.subtitle && <p>{blogData.subtitle}</p>}
        <p>{(blogData.description || '').replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim().split(/\s+/).slice(0, 150).join(' ')}...</p>
      </article>

      <ArticleDetail 
        blog={blogData as Blog} 
        faqs={faqs} 
        reviews={reviews} 
        relatedBlogs={relatedBlogs}
      />
    </div>
  );
}

// Helpers for structured data formatting
function formatToISTIsoString(date: Date): string {
  const istOffsetMs = 5.5 * 60 * 60 * 1000;
  const istDate = new Date(date.getTime() + istOffsetMs);
  
  const year = istDate.getUTCFullYear();
  const month = String(istDate.getUTCMonth() + 1).padStart(2, '0');
  const day = String(istDate.getUTCDate()).padStart(2, '0');
  const hours = String(istDate.getUTCHours()).padStart(2, '0');
  const minutes = String(istDate.getUTCMinutes()).padStart(2, '0');
  const seconds = String(istDate.getUTCSeconds()).padStart(2, '0');

  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}+05:30`;
}

function formatIsoDateTime(dateStr?: string, created?: number): string {
  if (dateStr && typeof dateStr === 'string') {
    const trimmed = dateStr.trim();
    // If already full ISO with timezone (e.g., 2026-08-17T10:00:00+05:30 or 2026-08-17T10:00:00Z)
    if (/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/.test(trimmed)) {
      if (trimmed.endsWith('Z') || /[+-]\d{2}:\d{2}$/.test(trimmed)) {
        return trimmed;
      }
      return `${trimmed}+05:30`;
    }
    // If format is YYYY-MM-DD
    if (/^\d{4}-\d{2}-\d{2}$/.test(trimmed)) {
      return `${trimmed}T10:00:00+05:30`;
    }
    // Try parsing string with new Date
    const parsed = new Date(trimmed);
    if (!isNaN(parsed.getTime())) {
      return formatToISTIsoString(parsed);
    }
  }

  if (created && typeof created === 'number') {
    const ms = created < 10000000000 ? created * 1000 : created;
    const parsed = new Date(ms);
    if (!isNaN(parsed.getTime())) {
      return formatToISTIsoString(parsed);
    }
  }

  return formatToISTIsoString(new Date());
}

function formatAbsoluteUrl(url?: string, defaultUrl: string = "https://www.amalegalsolutions.com/ama-legal-solutions-logo.png"): string {
  if (!url || typeof url !== 'string' || !url.trim()) {
    return defaultUrl;
  }
  const cleanUrl = url.trim();
  if (cleanUrl.startsWith('http://') || cleanUrl.startsWith('https://')) {
    return cleanUrl;
  }
  if (cleanUrl.startsWith('/')) {
    return `https://www.amalegalsolutions.com${cleanUrl}`;
  }
  return `https://www.amalegalsolutions.com/${cleanUrl}`;
}

function getAuthorSchema(authorName?: string) {
  const baseUrl = "https://www.amalegalsolutions.com";
  const name = authorName?.trim() || "AMA Legal Solutions";

  if (name === "Anuj Anand Malik") {
    return {
      "@type": "Person",
      "name": "Anuj Anand Malik",
      "jobTitle": "Founder & Senior Advocate",
      "url": `${baseUrl}/author/anuj-anand-malik`,
      "image": `${baseUrl}/anujbhiya.png`,
      "sameAs": "https://www.linkedin.com/in/iamanujmalik/",
      "worksFor": {
        "@type": "Organization",
        "name": "AMA Legal Solutions",
        "url": baseUrl
      }
    };
  }

  if (name === "Shrey Arora") {
    return {
      "@type": "Person",
      "name": "Shrey Arora",
      "jobTitle": "Legal Associate",
      "url": `${baseUrl}/author/shrey-arora`,
      "image": `${baseUrl}/shreychad.svg`,
      "sameAs": "https://www.linkedin.com/in/shrey-arora-b0487b67/",
      "worksFor": {
        "@type": "Organization",
        "name": "AMA Legal Solutions",
        "url": baseUrl
      }
    };
  }

  return {
    "@type": "Organization",
    "name": name,
    "url": baseUrl,
    "logo": {
      "@type": "ImageObject",
      "url": `${baseUrl}/ama-legal-solutions-logo.png`
    }
  };
}

function generateSchemas(blogData: any, faqs: any[], reviews: any[]) {
  const baseUrl = "https://www.amalegalsolutions.com";
  const blogUrl = `${baseUrl}/blog/${blogData.slug}`;
  const isoPublishedDate = formatIsoDateTime(blogData.date, blogData.created);
  const isoModifiedDate = formatIsoDateTime(blogData.date, blogData.created);
  const imageUrl = formatAbsoluteUrl(blogData.image || blogData.infographic);
  const cleanDescription = (blogData.metaDescription || blogData.subtitle || blogData.description?.replace(/<[^>]*>/g, ''))?.trim().substring(0, 200) || `${blogData.title} - Legal guide and insights from AMA Legal Solutions.`;

  // 1. Article Schema (compliant with Google Rich Results Test)
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": blogData.title,
    "description": cleanDescription,
    "image": [imageUrl],
    "datePublished": isoPublishedDate,
    "dateModified": isoModifiedDate,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": blogUrl
    },
    "author": getAuthorSchema(blogData.author),
    "publisher": {
      "@type": "Organization",
      "name": "AMA Legal Solutions",
      "url": baseUrl,
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/ama-legal-solutions-logo.png`
      }
    },
    "keywords": blogData.metaTitle || blogData.title,
    "articleSection": "Legal Advice",
    "inLanguage": "en-IN"
  };

  // 2. Organization Schema (Google Organization Rich Results compliance)
  const organizationSchema: any = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${baseUrl}/#organization`,
    "name": "AMA Legal Solutions",
    "url": baseUrl,
    "logo": {
      "@type": "ImageObject",
      "url": `${baseUrl}/ama-legal-solutions-logo.png`
    },
    "image": `${baseUrl}/ama-legal-solutions-logo.png`,
    "description": "Leading legal firm in India specializing in loan settlement, banking disputes, debt relief, arbitration, and comprehensive legal consultation.",
    "telephone": "+918700343611",
    "email": "contact@amalegalsolutions.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2493AP, Block G, Sushant Lok 2, Sector 57",
      "addressLocality": "Gurugram",
      "addressRegion": "Haryana",
      "postalCode": "122001",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+918700343611",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi"]
    },
    "sameAs": [
      "https://www.facebook.com/amalegalsolutions/",
      "https://www.youtube.com/@amalegalsolution",
      "https://www.instagram.com/amalegalsolutions/",
      "https://www.linkedin.com/company/ama-legal-solutions/",
      "https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions",
      "https://apps.apple.com/in/app/ama-legal-solutions/id6755156186"
    ]
  };

  // 3. BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${blogUrl}#breadcrumb`,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": `${baseUrl}/blog`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": blogData.title,
        "item": blogUrl
      }
    ]
  };

  // 4. FAQ Schema (if FAQs exist)
  let faqSchema = null;
  if (faqs && faqs.length > 0) {
    faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${blogUrl}#faq`,
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer.replace(/<[^>]*>/g, '').trim()
        }
      }))
    };
  }

  return {
    articleSchema,
    organizationSchema,
    breadcrumbSchema,
    faqSchema
  };
}


