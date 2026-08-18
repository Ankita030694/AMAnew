import { adminDb } from "../../../lib/firebase-admin";
import type { Metadata, ResolvingMetadata } from "next";
import ArticleDetail, { Article, FAQ, Review } from "./articledetail";
import Script from "next/script";
import { unstable_cache } from 'next/cache';
import Navbar from "@/newcomp/Navbar";

export const revalidate = 3600; // Cache the page at the Edge for 1 hour

export async function generateStaticParams() {
  return [];
}

// Enhanced cache with TTL (Time To Live)
const articleCache = new Map<string, { data: any; timestamp: number }>();
const faqCache = new Map<string, { data: any[]; timestamp: number }>();
const reviewCache = new Map<string, { data: any[]; timestamp: number }>();
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

// Helper function to check if cache entry is valid
const isCacheValid = (timestamp: number) => {
  return Date.now() - timestamp < CACHE_TTL;
};

// Optimized function to fetch article by slug with enhanced caching
const getArticleBySlug = unstable_cache(async (slug: string) => {
  // Check cache first with TTL validation
  const cached = articleCache.get(slug);
  if (cached && isCacheValid(cached.timestamp)) {
    return cached.data;
  }

  console.log(`[getArticleBySlug] Fetching article for slug: "${slug}"`);

  try {
    // Try exact match first
    let querySnapshot = await adminDb.collection("articles").where("slug", "==", slug).limit(1).get();

    // If not found, try decoded slug
    if (querySnapshot.empty) {
        const decodedSlug = decodeURIComponent(slug);
        if (decodedSlug !== slug) {
            console.log(`[getArticleBySlug] Retrying with decoded slug: "${decodedSlug}"`);
            querySnapshot = await adminDb.collection("articles").where("slug", "==", decodedSlug).limit(1).get();
        }
    }
    
    // If still not found, try trimming
    if (querySnapshot.empty) {
        const trimmedSlug = slug.trim();
        if (trimmedSlug !== slug) {
            console.log(`[getArticleBySlug] Retrying with trimmed slug: "${trimmedSlug}"`);
            querySnapshot = await adminDb.collection("articles").where("slug", "==", trimmedSlug).limit(1).get();
        }
    }

    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0];
      const data = { id: doc.id, ...doc.data() };
      
      console.log(`[getArticleBySlug] Found article: ${doc.id}`);

      // Cache the result with timestamp
      articleCache.set(slug, { data, timestamp: Date.now() });
      return data;
    }
    
    console.log(`[getArticleBySlug] No article found for slug: "${slug}"`);
    return null;
  } catch (error) {
    console.error("Error fetching article by slug:", error);
    return null;
  }
}, ['article-by-slug'], { 
  revalidate: 60,
  tags: ['articles']
});

// Function to fetch FAQs server-side with enhanced caching
const getArticleFAQs = unstable_cache(async (articleId: string) => {
  const cached = faqCache.get(articleId);
  if (cached && isCacheValid(cached.timestamp)) {
    return cached.data;
  }

  try {
    const faqsSnapshot = await adminDb.collection('articles').doc(articleId).collection('faqs').get();
    const faqs = faqsSnapshot.docs.map(doc => ({
      id: doc.id,
      question: doc.data().question || '',
      answer: doc.data().answer || ''
    }));
    
    faqCache.set(articleId, { data: faqs, timestamp: Date.now() });
    return faqs;
  } catch (error) {
    console.error("Error fetching FAQs:", error);
    return [];
  }
}, ['article-faqs'], {
  revalidate: 300,
  tags: ['faqs']
});

// Function to fetch Reviews server-side
const getArticleReviews = unstable_cache(async (articleId: string) => {
  const cached = reviewCache.get(articleId);
  if (cached && isCacheValid(cached.timestamp)) {
    return cached.data;
  }

  try {
    const reviewsSnapshot = await adminDb.collection('articles').doc(articleId).collection('reviews').get();
    const reviews = reviewsSnapshot.docs.map(doc => ({
      id: doc.id,
      name: doc.data().name || '',
      rating: doc.data().rating || 5,
      review: doc.data().review || ''
    }));
    
    reviewCache.set(articleId, { data: reviews, timestamp: Date.now() });
    return reviews;
  } catch (error) {
    console.error("Error fetching Reviews:", error);
    return [];
  }
}, ['article-reviews'], {
  revalidate: 300,
  tags: ['reviews']
});

// Function to fetch Related Articles
const getRelatedArticles = async (excludeId: string) => {
  try {
    const querySnapshot = await adminDb.collection('articles')
      .orderBy('date', 'desc')
      .limit(6)
      .get();
    
    const allArticles = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as unknown as Article[];
    
    // Filter out current article and take top 3
    return allArticles.filter(article => article.id !== excludeId).slice(0, 3);
  } catch (error) {
    console.error("Error fetching related articles:", error);
    return [];
  }
};

// Dynamic metadata generation
export async function generateMetadata(
  props: { params: Promise<{ slug: string }> },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await props.params;

  let title = "Article | AMA Legal Solutions";
  let description = "Read our latest insights and articles at AMA Legal Solutions";
  let image = "";
  let author = "AMA Legal Solutions";

  const baseUrl = "https://www.amalegalsolutions.com";

  try {
    const articleData = await getArticleBySlug(slug);
    
    if (articleData) {
      title = articleData.metaTitle || articleData.title || title;
      description = articleData.metaDescription || description;
      image = articleData.image || "";
      author = articleData.author || author;
    }
  } catch (error) {
    console.error("Error fetching article metadata:", error);
  }

  const articleUrl = `${baseUrl}/articles/${slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: articleUrl,
    },
    openGraph: {
      title,
      description,
      url: articleUrl,
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

// Updated Page component
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  let articleData = null;
  let faqs: FAQ[] = [];
  let reviews: Review[] = [];
  let relatedArticles: Article[] = [];
  
  let combinedSchema = null;

  try {
    articleData = await getArticleBySlug(slug);
    if (articleData) {
      // Fetch related data in parallel
      const [fetchedFaqs, fetchedReviews, fetchedRelated] = await Promise.all([
        getArticleFAQs(articleData.id),
        getArticleReviews(articleData.id),
        getRelatedArticles(articleData.id)
      ]);

      faqs = fetchedFaqs;
      reviews = fetchedReviews;
      relatedArticles = fetchedRelated;

      // Generate Combined Schema
      combinedSchema = generateCombinedSchema(articleData, faqs, reviews);
    }
  } catch (error) {
    console.error("Error fetching article data:", error);
  }

  if (!articleData) {
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
      {/* JSON-LD Structured Data Schemas for Google Rich Results Test & Search Engines */}
      {combinedSchema && (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema.articleSchema) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema.organizationSchema) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema.breadcrumbSchema) }}
          />
          {combinedSchema.faqSchema && (
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema.faqSchema) }}
            />
          )}
          {combinedSchema.reviewSchema && (
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema.reviewSchema) }}
            />
          )}
        </>
      )}

      {/* SSR-rendered crawlable content - guaranteed in server HTML */}
      <article className="sr-only" aria-hidden="true">
        <h1>{articleData.title}</h1>
        {articleData.date && <time dateTime={articleData.date}>{articleData.date}</time>}
        {articleData.author && <span>{articleData.author}</span>}
        {articleData.subtitle && <p>{articleData.subtitle}</p>}
        <p>{(articleData.description || '').replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim().split(/\s+/).slice(0, 150).join(' ')}...</p>
      </article>
      
      <ArticleDetail 
        article={articleData as Article} 
        faqs={faqs} 
        reviews={reviews} 
        relatedArticles={relatedArticles}
      />
    </div>
  );
}

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
    if (/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/.test(trimmed)) {
      if (trimmed.endsWith('Z') || /[+-]\d{2}:\d{2}$/.test(trimmed)) {
        return trimmed;
      }
      return `${trimmed}+05:30`;
    }
    if (/^\d{4}-\d{2}-\d{2}$/.test(trimmed)) {
      return `${trimmed}T10:00:00+05:30`;
    }
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

function generateCombinedSchema(articleData: any, faqs: any[], reviews: any[]) {
  const baseUrl = "https://www.amalegalsolutions.com";
  const articleUrl = `${baseUrl}/articles/${articleData.slug}`;
  const isoPublishedDate = formatIsoDateTime(articleData.date, articleData.created);
  const isoModifiedDate = formatIsoDateTime(articleData.date, articleData.created);
  const imageUrl = formatAbsoluteUrl(articleData.image || articleData.infographic);
  const cleanDescription = (articleData.metaDescription || articleData.subtitle || articleData.description?.replace(/<[^>]*>/g, ''))?.trim().substring(0, 200) || `${articleData.title} - Legal guide and insights from AMA Legal Solutions.`;

  // 1. Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": articleData.title,
    "description": cleanDescription,
    "image": [imageUrl],
    "datePublished": isoPublishedDate,
    "dateModified": isoModifiedDate,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": articleUrl
    },
    "author": getAuthorSchema(articleData.author),
    "publisher": {
      "@type": "Organization",
      "name": "AMA Legal Solutions",
      "url": baseUrl,
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/ama-legal-solutions-logo.png`
      }
    },
    "keywords": articleData.metaTitle || articleData.title,
    "articleSection": "Legal Articles",
    "inLanguage": "en-IN"
  };

  // 2. Organization Schema
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

  // 3. Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${articleUrl}#breadcrumb`,
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
        "name": "Articles",
        "item": `${baseUrl}/articles`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": articleData.title,
        "item": articleUrl
      }
    ]
  };

  // 4. FAQ Schema (if present)
  let faqSchema = null;
  if (faqs && faqs.length > 0) {
    faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${articleUrl}#faq`,
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

  // 5. Review Schema (if reviews exist)
  let reviewSchema = null;
  if (reviews && reviews.length > 0) {
    const firstReview = reviews[0];
    reviewSchema = {
      "@context": "https://schema.org",
      "@type": "Review",
      "@id": `${articleUrl}#review`,
      "itemReviewed": {
        "@type": "LegalService",
        "name": "AMA Legal Solutions",
        "image": `${baseUrl}/ama-legal-solutions-logo.png`,
        "url": baseUrl,
        "telephone": "+918700343611",
        "priceRange": "₹₹",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "2493AP, Block G, Sushant Lok 2, Sector 57",
          "addressLocality": "Gurugram",
          "addressRegion": "Haryana",
          "postalCode": "122001",
          "addressCountry": "IN"
        }
      },
      "author": {
        "@type": "Person",
        "name": firstReview.name || "Verified Client"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": String(firstReview.rating || 5),
        "bestRating": "5",
        "worstRating": "1"
      },
      "reviewBody": firstReview.review || "AMA Legal Solutions provided expert legal advice and handled our case with great professionalism."
    };
  }

  return {
    articleSchema,
    organizationSchema,
    breadcrumbSchema,
    faqSchema,
    reviewSchema
  };
}

