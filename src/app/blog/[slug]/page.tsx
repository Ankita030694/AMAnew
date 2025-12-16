import { collection, getDocs, query, where, limit, orderBy } from "firebase/firestore";
import { db } from "../../../lib/firebase";
import type { Metadata, ResolvingMetadata } from "next";
import ArticleDetail, { Blog, FAQ, Review } from "./blogdetail";
import Script from "next/script";
import { unstable_cache } from 'next/cache';
import PerformanceMonitor from '../../../components/PerformanceMonitor';

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

  try {
    const blogsCollection = collection(db, "blogs");
    const q = query(blogsCollection, where("slug", "==", slug), limit(1));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0];
      const data = { id: doc.id, ...doc.data() };
      
      // Cache the result with timestamp
      blogCache.set(slug, { data, timestamp: Date.now() });
      return data;
    }
    
    return null;
  } catch (error) {
    console.error("Error fetching blog by slug:", error);
    return null;
  }
}, ['blog-by-slug'], { 
  revalidate: 300, // 5 minutes
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

  const baseUrl = "https://amalegalsolutions.com";

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
  
  let faqSchema = null;
  let articleSchema = null;
  let reviewSchema = null;
  let breadcrumbSchema = null;

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

      // Generate Schemas
      faqSchema = generateFAQSchema(faqs, blogData);
      articleSchema = generateArticleSchema(blogData, faqs, reviews);
      reviewSchema = generateReviewSchema(reviews, blogData);
      breadcrumbSchema = generateBreadcrumbSchema(blogData);
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
    <>
      <PerformanceMonitor />
      {/* Schemas */}
      {faqSchema && (
        <Script
          id="blog-faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      {articleSchema && (
        <Script
          id="blog-article-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      )}
      {reviewSchema && (
        <Script
          id="blog-review-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
        />
      )}
      {breadcrumbSchema && (
        <Script
          id="blog-breadcrumb-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      )}
      
      <ArticleDetail 
        blog={blogData as Blog} 
        faqs={faqs} 
        reviews={reviews} 
        relatedBlogs={relatedBlogs}
      />
    </>
  );
}

// Schema Generators

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
        "text": faq.answer.replace(/<[^>]*>/g, '')
      }
    }))
  };
}

function generateArticleSchema(blogData: any, faqs: any[], reviews: any[]) {
  const isOrganizationAuthor = !blogData.author || blogData.author === "AMA Legal Solutions";
  
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
      "@type": isOrganizationAuthor ? "Organization" : "Person",
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

  if (blogData.image) {
    baseSchema.image = {
      "@type": "ImageObject",
      "url": blogData.image,
      "caption": blogData.title
    };
  }

  return baseSchema;
}

function generateReviewSchema(reviews: any[], blogData: any) {
  if (reviews.length === 0) return null;

  const totalRating = reviews.reduce((acc: number, review: any) => acc + review.rating, 0);
  const avgRating = (totalRating / reviews.length).toFixed(1);

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": blogData.title,
    "image": blogData.image || "https://amalegalsolutions.com/logo.png",
    "description": blogData.metaDescription || blogData.subtitle,
    "provider": {
      "@type": "Organization",
      "name": "AMA Legal Solutions"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": avgRating,
      "reviewCount": reviews.length
    },
    "review": reviews.map(review => ({
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating.toString()
      },
      "author": {
        "@type": "Person",
        "name": review.name
      },
      "reviewBody": review.review
    }))
  };
}

function generateBreadcrumbSchema(blogData: any) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://amalegalsolutions.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://amalegalsolutions.com/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": blogData.title,
        "item": `https://amalegalsolutions.com/blog/${blogData.slug}`
      }
    ]
  };
}
