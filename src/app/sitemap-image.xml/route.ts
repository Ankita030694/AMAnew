import { adminDb } from '@/lib/firebase-admin'
import { noindexBlogSlugs } from '@/data/noindexBlogSlugs'

export const revalidate = 300; // Firestore-backed: served from cache, refreshed at most every 5 minutes

const STATIC_IMAGE_LASTMOD = '2026-11-17';
const DEFAULT_IMAGE_LASTMOD = '2026-11-14';

interface ImageItem {
  url: string;
  caption: string;
  title: string;
  lastModified: string;
  pageUrl?: string;
  license?: string;
  geoLocation?: string;
}

function toSafeIsoString(value: any, fallback: string = DEFAULT_IMAGE_LASTMOD): string {
  try {
    if (!value) return fallback;
    if (typeof value === 'number') {
      const d = new Date(value);
      if (!isNaN(d.getTime())) return d.toISOString();
    }
    if (typeof value?.toMillis === 'function') {
      const d = new Date(value.toMillis());
      if (!isNaN(d.getTime())) return d.toISOString();
    }
    if (typeof value === 'string') {
      const d = new Date(value);
      if (!isNaN(d.getTime())) return d.toISOString();
    }
  } catch {
    // Fallback to deterministic timestamp
  }
  return fallback;
}

// Helper function to escape XML special characters
function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export async function GET(): Promise<Response> {
  const blogs = await fetchAllBlogs()
  const articles = await fetchAllArticles()
  
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.amalegalsolutions.com'
  
  // Build static images with better metadata
  const staticImages: ImageItem[] = [
    {
      url: `${baseUrl}/future.png`,
      caption: 'AMA Legal Solutions - Top Law Firm in India | Legal Services',
      title: 'AMA Legal Solutions Logo - Premier Legal Services Provider',
      lastModified: STATIC_IMAGE_LASTMOD,
      pageUrl: baseUrl,
      license: 'https://www.amalegalsolutions.com/terms'
    },
    {
      url: `${baseUrl}/bannerbg.png`,
      caption: 'AMA Legal Solutions - Professional Legal Services in India',
      title: 'AMA Legal Solutions Background - Legal Excellence',
      lastModified: STATIC_IMAGE_LASTMOD,
      pageUrl: baseUrl,
      license: 'https://www.amalegalsolutions.com/terms'
    }
  ]
  
  // Build blog images (hero + infographic) with enhanced metadata
  const blogImages: ImageItem[] = []
  for (const blog of blogs) {
    if (noindexBlogSlugs.has(blog.slug)) continue
    const lastModified = toSafeIsoString(blog.lastModifiedSource, DEFAULT_IMAGE_LASTMOD)
    if (blog.image) {
      blogImages.push({
        url: blog.image,
        caption: `${blog.title} - AMA Legal Solutions Blog | Legal Insights India`,
        title: `${blog.title} | AMA Legal Solutions`,
        lastModified,
        pageUrl: `${baseUrl}/blog/${encodeURIComponent(blog.slug)}`,
        license: 'https://www.amalegalsolutions.com/terms'
      })
    }
    if (blog.infographic) {
      blogImages.push({
        url: blog.infographic,
        caption: `${blog.title} - Legal Process Flowchart Infographic | AMA Legal Solutions`,
        title: `${blog.title} - Infographic | AMA Legal Solutions`,
        lastModified,
        pageUrl: `${baseUrl}/blog/${encodeURIComponent(blog.slug)}`,
        license: 'https://www.amalegalsolutions.com/terms'
      })
    }
  }
  
  // Build article images with enhanced metadata
  const articleImages: ImageItem[] = articles
    .filter(article => article.image)
    .map(article => ({
      url: article.image,
      caption: `${article.title} - AMA Legal Solutions Article | Legal Expertise India`,
      title: `${article.title} | AMA Legal Solutions`,
      lastModified: toSafeIsoString(article.lastModifiedSource, DEFAULT_IMAGE_LASTMOD),
      pageUrl: `${baseUrl}/articles/${encodeURIComponent(article.slug)}`,
      license: 'https://www.amalegalsolutions.com/terms'
    }))
  
  // Combine all images
  const allImages = [...staticImages, ...blogImages, ...articleImages]
  
  // Generate enhanced XML with better structure
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${allImages.map(image => `
    <url>
      <loc>${escapeXml(image.pageUrl || baseUrl)}</loc>
      <lastmod>${image.lastModified}</lastmod>
      <image:image>
        <image:loc>${escapeXml(image.url)}</image:loc>
        <image:caption>${escapeXml(image.caption)}</image:caption>
        <image:title>${escapeXml(image.title)}</image:title>
        ${image.license ? `<image:license>${escapeXml(image.license)}</image:license>` : ''}
        <image:geo_location>India</image:geo_location>
      </image:image>
    </url>
  `).join('')}
</urlset>`
  
  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=0, s-maxage=60, stale-while-revalidate=300'
    }
  })
}

// Helper functions to fetch data via Firebase Admin SDK
async function fetchAllBlogs() {
  try {
    const querySnapshot = await adminDb.collection('blogs').select('slug', 'title', 'image', 'infographic', 'created', 'updatedAt', 'date').get()
    return querySnapshot.docs
      .map(doc => {
        const data = doc.data()
        return {
          slug: typeof data.slug === 'string' ? data.slug.trim() : '',
          title: data.title || 'AMA Legal Solutions Blog',
          image: data.image || '',
          infographic: data.infographic || '',
          lastModifiedSource: data.updatedAt || data.created || data.date || null
        }
      })
      .filter(blog => blog.slug.length > 0)
  } catch (error) {
    console.error('Error fetching blogs:', error)
    // Throw rather than return nothing: a failed refresh then keeps serving the last good cached page.
    throw error
  }
}

async function fetchAllArticles() {
  try {
    const querySnapshot = await adminDb.collection('articles').select('slug', 'title', 'image', 'created', 'updatedAt', 'date').get()
    return querySnapshot.docs
      .map(doc => {
        const data = doc.data()
        return {
          slug: typeof data.slug === 'string' ? data.slug.trim() : '',
          title: data.title || 'AMA Legal Solutions Article',
          image: data.image || '',
          lastModifiedSource: data.updatedAt || data.created || data.date || null
        }
      })
      .filter(article => article.slug.length > 0)
  } catch (error) {
    console.error('Error fetching articles:', error)
    throw error
  }
} 