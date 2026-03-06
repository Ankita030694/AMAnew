import { collection, getDocs, query, where, limit, orderBy } from "firebase/firestore";
import { db } from "../../../lib/firebase";
import type { Metadata, ResolvingMetadata } from "next";
import ArticleDetail, { Blog, FAQ, Review } from "./blogdetail";
import Script from "next/script";
import { unstable_cache } from 'next/cache';
import PerformanceMonitor from '../../../components/PerformanceMonitor';
import Navbar from "@/newcomp/Navbar";

// Enhanced cache with TTL (Time To Live)
const blogCache = new Map<string, { data: any; timestamp: number }>();
const faqCache = new Map<string, { data: any[]; timestamp: number }>();
const reviewCache = new Map<string, { data: any[]; timestamp: number }>();
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

// Helper function to check if cache entry is valid
const isCacheValid = (timestamp: number) => {
  return Date.now() - timestamp < CACHE_TTL;
};

// Optimized function to fetch blog by slug with enhanced caching
const getBlogBySlug = unstable_cache(async (slug: string) => {
  // Check cache first with TTL validation
  const cached = blogCache.get(slug);
  if (cached && isCacheValid(cached.timestamp)) {
    return cached.data;
  }

  console.log(`[getBlogBySlug] Fetching blog for slug: "${slug}"`);

  try {
    const blogsCollection = collection(db, "blogs");
    
    // Try exact match first
    let q = query(blogsCollection, where("slug", "==", slug), limit(1));
    let querySnapshot = await getDocs(q);

    // If not found, try decoded slug
    if (querySnapshot.empty) {
        const decodedSlug = decodeURIComponent(slug);
        if (decodedSlug !== slug) {
            console.log(`[getBlogBySlug] Retrying with decoded slug: "${decodedSlug}"`);
            q = query(blogsCollection, where("slug", "==", decodedSlug), limit(1));
            querySnapshot = await getDocs(q);
        }
    }
    
    // If still not found, try trimming
    if (querySnapshot.empty) {
        const trimmedSlug = slug.trim();
        if (trimmedSlug !== slug) {
            console.log(`[getBlogBySlug] Retrying with trimmed slug: "${trimmedSlug}"`);
            q = query(blogsCollection, where("slug", "==", trimmedSlug), limit(1));
            querySnapshot = await getDocs(q);
        }
    }

    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0];
      const data = { id: doc.id, ...doc.data() };
      
      console.log(`[getBlogBySlug] Found blog: ${doc.id}`);

      // Cache the result with timestamp
      blogCache.set(slug, { data, timestamp: Date.now() });
      return data;
    }
    
    console.log(`[getBlogBySlug] No blog found for slug: "${slug}"`);
    return null;
  } catch (error) {
    console.error("Error fetching blog by slug:", error);
    return null;
  }
}, ['blog-by-slug'], { 
  revalidate: 60, // Reduced revalidation time for debugging
  tags: ['blogs']
});

// Function to fetch FAQs server-side with enhanced caching
const getBlogFAQs = unstable_cache(async (blogId: string) => {
  const cached = faqCache.get(blogId);
  if (cached && isCacheValid(cached.timestamp)) {
    return cached.data;
  }

  try {
    const faqsSnapshot = await getDocs(collection(db, 'blogs', blogId, 'faqs'));
    const faqs = faqsSnapshot.docs.map(doc => ({
      id: doc.id,
      question: doc.data().question || '',
      answer: doc.data().answer || ''
    }));
    
    faqCache.set(blogId, { data: faqs, timestamp: Date.now() });
    return faqs;
  } catch (error) {
    console.error("Error fetching FAQs:", error);
    return [];
  }
}, ['blog-faqs'], {
  revalidate: 300,
  tags: ['faqs']
});

// Function to fetch Reviews server-side
const getBlogReviews = unstable_cache(async (blogId: string) => {
  const cached = reviewCache.get(blogId);
  if (cached && isCacheValid(cached.timestamp)) {
    return cached.data;
  }

  try {
    const reviewsSnapshot = await getDocs(collection(db, 'blogs', blogId, 'reviews'));
    const reviews = reviewsSnapshot.docs.map(doc => ({
      id: doc.id,
      name: doc.data().name || '',
      rating: doc.data().rating || 5,
      review: doc.data().review || ''
    }));
    
    reviewCache.set(blogId, { data: reviews, timestamp: Date.now() });
    return reviews;
  } catch (error) {
    console.error("Error fetching Reviews:", error);
    return [];
  }
}, ['blog-reviews'], {
  revalidate: 300,
  tags: ['reviews']
});

// Function to fetch Related Blogs
const getRelatedBlogs = async (excludeId: string) => {
  try {
    const blogsCollection = collection(db, 'blogs');
    const q = query(
      blogsCollection, 
      orderBy('created', 'desc'), 
      limit(6) // Fetch a few more to filter
    );
    const querySnapshot = await getDocs(q);
    
    const allBlogs = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Blog[];
    
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

  let title = "Blog Post | AMA Legal Solutions";
  let description = "Read our latest insights and articles at AMA Legal Solutions";
  let image = "";
  let author = "AMA Legal Solutions";

  const baseUrl = "https://www.amalegalsolutions.com";

  try {
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
  
  let combinedSchema = null;

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

      // Generate Combined Schema
      combinedSchema = generateCombinedSchema(blogData, faqs, reviews);
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
      {/* Combined Schema */}
      {combinedSchema && (
        <Script
          id="blog-combined-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }}
        />
      )}

      
      <ArticleDetail 
        blog={blogData as Blog} 
        faqs={faqs} 
        reviews={reviews} 
        relatedBlogs={relatedBlogs}
      />
    </div>
  );
}

function generateCombinedSchema(blogData: any, faqs: any[], reviews: any[]) {
  const baseUrl = "https://www.amalegalsolutions.com";
  const blogUrl = `${baseUrl}/blog/${blogData.slug}`;
  const isOrganizationAuthor = !blogData.author || blogData.author === "AMA Legal Solutions";

  const graph = [];

  // 1. Article Schema
  const articleSchema: any = {
    "@type": "BlogPosting",
    "@id": `${blogUrl}#article`,
    "isPartOf": { "@id": blogUrl },
    "author": {
      "@type": isOrganizationAuthor ? "Organization" : "Person",
      "name": blogData.author || "AMA Legal Solutions",
      "url": blogData.author === "Anuj Anand Malik" ? `${baseUrl}/author/anuj-anand-malik` : 
            blogData.author === "Shrey Arora" ? `${baseUrl}/author/shrey-arora` : 
            `${baseUrl}/about`
    },
    "headline": blogData.title,
    "datePublished": blogData.date,
    "dateModified": blogData.date,
    "mainEntityOfPage": { "@id": blogUrl },
    "publisher": { "@id": `${baseUrl}/#organization` },
    "image": blogData.image ? {
      "@type": "ImageObject",
      "url": blogData.image,
      "caption": blogData.title
    } : undefined,
    "keywords": blogData.metaTitle || blogData.title,
    "articleSection": "Legal Advice",
    "inLanguage": "en-IN",
    "description": blogData.metaDescription || blogData.subtitle || blogData.description?.replace(/<[^>]*>/g, '').substring(0, 160) || ''
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
  });

  // 4. FAQ Schema (if present)
  if (faqs.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${blogUrl}#faq`,
      "name": `${blogData.title} - Frequently Asked Questions`,
      "description": `Frequently asked questions about ${blogData.title}`,
      "url": blogUrl,
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

