import { collection, getDocs, query, where, limit, orderBy } from "firebase/firestore";
import { db } from "../../../lib/firebase";
import type { Metadata, ResolvingMetadata } from "next";
import ArticleDetail, { Article, FAQ, Review } from "./articledetail";
import Script from "next/script";
import { unstable_cache } from 'next/cache';
import Navbar from "@/newcomp/Navbar";

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
    const articlesCollection = collection(db, "articles");
    
    // Try exact match first
    let q = query(articlesCollection, where("slug", "==", slug), limit(1));
    let querySnapshot = await getDocs(q);

    // If not found, try decoded slug
    if (querySnapshot.empty) {
        const decodedSlug = decodeURIComponent(slug);
        if (decodedSlug !== slug) {
            console.log(`[getArticleBySlug] Retrying with decoded slug: "${decodedSlug}"`);
            q = query(articlesCollection, where("slug", "==", decodedSlug), limit(1));
            querySnapshot = await getDocs(q);
        }
    }
    
    // If still not found, try trimming
    if (querySnapshot.empty) {
        const trimmedSlug = slug.trim();
        if (trimmedSlug !== slug) {
            console.log(`[getArticleBySlug] Retrying with trimmed slug: "${trimmedSlug}"`);
            q = query(articlesCollection, where("slug", "==", trimmedSlug), limit(1));
            querySnapshot = await getDocs(q);
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
    const faqsSnapshot = await getDocs(collection(db, 'articles', articleId, 'faqs'));
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
    const reviewsSnapshot = await getDocs(collection(db, 'articles', articleId, 'reviews'));
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
    const articlesCollection = collection(db, 'articles');
    const q = query(
      articlesCollection, 
      orderBy('date', 'desc'), // Assuming 'date' is used for ordering, or use 'created'
      limit(6) 
    );
    const querySnapshot = await getDocs(q);
    
    const allArticles = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Article[];
    
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
      {/* Combined Schema */}
      {combinedSchema && (
        <Script
          id="article-combined-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }}
        />
      )}

      {/* SSR-rendered crawlable content — guaranteed in server HTML */}
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

function generateCombinedSchema(articleData: any, faqs: any[], reviews: any[]) {
  const baseUrl = "https://www.amalegalsolutions.com";
  const articleUrl = `${baseUrl}/articles/${articleData.slug}`;
  const isOrganizationAuthor = !articleData.author || articleData.author === "AMA Legal Solutions";

  const graph = [];

  // 1. Article Schema
  const articleSchema: any = {
    "@type": "Article",
    "@id": `${articleUrl}#article`,
    "isPartOf": { "@id": articleUrl },
    "author": {
      "@type": isOrganizationAuthor ? "Organization" : "Person",
      "name": articleData.author || "AMA Legal Solutions",
      "url": articleData.author === "Anuj Anand Malik" ? `${baseUrl}/author/anuj-anand-malik` : 
            articleData.author === "Shrey Arora" ? `${baseUrl}/author/shrey-arora` : 
            `${baseUrl}/about`
    },
    "headline": articleData.title,
    "datePublished": articleData.date,
    "dateModified": articleData.date,
    "mainEntityOfPage": { "@id": articleUrl },
    "publisher": { "@id": `${baseUrl}/#organization` },
    "image": articleData.image ? {
      "@type": "ImageObject",
      "url": articleData.image,
      "caption": articleData.title
    } : undefined,
    "keywords": articleData.metaTitle || articleData.title,
    "articleSection": "Legal Articles",
    "inLanguage": "en-IN",
    "description": articleData.metaDescription || articleData.subtitle || articleData.description?.replace(/<[^>]*>/g, '').substring(0, 160) || ''
  };

  graph.push(articleSchema);

  // 2. Organization / LegalService Schema with AggregateRating
  const organizationSchema: any = {
    "@type": "LegalService",
    "@id": `${baseUrl}/#organization`,
    "name": "AMA Legal Solutions",
    "url": baseUrl,
    "logo": {
      "@type": "ImageObject",
      "url": `${baseUrl}/ama-legal-solutions-logo.png`
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2493AP, Block G, Sushant Lok 2,Sector 57",
      "addressLocality": "Gurugram",
      "addressRegion": "Haryana",
      "postalCode": "122001",
      "addressCountry": "IN"
    },
    "telephone": "+918700343611",
    "priceRange": "$$"
  };

  // Add AggregateRating if reviews exist
  if (reviews && reviews.length > 0) {
    const totalRating = reviews.reduce((sum, review) => sum + (Number(review.rating) || 0), 0);
    const avgRating = (totalRating / reviews.length).toFixed(1);

    organizationSchema.aggregateRating = {
      "@type": "AggregateRating",
      "ratingValue": avgRating,
      "reviewCount": reviews.length.toString(),
      "bestRating": "5",
      "worstRating": "1"
    };

    organizationSchema.review = reviews.map(review => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.name || "Anonymous"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": (Number(review.rating) || 5).toString(),
        "bestRating": "5",
        "worstRating": "1"
      },
      "reviewBody": review.review || ""
    }));
  }

  graph.push(organizationSchema);

  // 3. Breadcrumb Schema
  graph.push({
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
  });

  // 4. FAQ Schema (if present)
  if (faqs.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${articleUrl}#faq`,
      "name": `${articleData.title} - Frequently Asked Questions`,
      "description": `Frequently asked questions about ${articleData.title}`,
      "url": articleUrl,
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer.replace(/<[^>]*>/g, '')
        }
      }))
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph
  };
}
