import { db } from '@/lib/firebase'
import { collection, getDocs } from 'firebase/firestore'

interface ImageItem {
  url: string;
  caption: string;
  title: string;
  pageUrl?: string;
  license?: string;
  geoLocation?: string;
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
      pageUrl: baseUrl,
      license: 'https://www.amalegalsolutions.com/terms'
    },
    {
      url: `${baseUrl}/bannerbg.png`,
      caption: 'AMA Legal Solutions - Professional Legal Services in India',
      title: 'AMA Legal Solutions Background - Legal Excellence',
      pageUrl: baseUrl,
      license: 'https://www.amalegalsolutions.com/terms'
    }
  ]
  
  // Build blog images with enhanced metadata
  const blogImages: ImageItem[] = blogs
    .filter(blog => blog.image)
    .map(blog => ({
      url: blog.image,
      caption: `${blog.title} - AMA Legal Solutions Blog | Legal Insights India`,
      title: `${blog.title} | AMA Legal Solutions`,
      pageUrl: `${baseUrl}/blog/${blog.slug}`,
      license: 'https://www.amalegalsolutions.com/terms'
    }))
  
  // Build article images with enhanced metadata
  const articleImages: ImageItem[] = articles
    .filter(article => article.image)
    .map(article => ({
      url: article.image,
      caption: `${article.title} - AMA Legal Solutions Article | Legal Expertise India`,
      title: `${article.title} | AMA Legal Solutions`,
      pageUrl: `${baseUrl}/articles/${article.slug}`,
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
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
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
      'Cache-Control': 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400'
    }
  })
}

// Helper functions to fetch data
async function fetchAllBlogs() {
  try {
    const querySnapshot = await getDocs(collection(db, 'blogs'))
    return querySnapshot.docs.map(doc => {
      const data = doc.data()
      return {
        slug: data.slug,
        title: data.title,
        image: data.image,
        created: data.created || Date.now()
      }
    })
  } catch (error) {
    console.error('Error fetching blogs:', error)
    return []
  }
}

async function fetchAllArticles() {
  try {
    const querySnapshot = await getDocs(collection(db, 'articles'))
    return querySnapshot.docs.map(doc => {
      const data = doc.data()
      return {
        slug: data.slug,
        title: data.title,
        image: data.image,
        created: data.created || Date.now()
      }
    })
  } catch (error) {
    console.error('Error fetching articles:', error)
    return []
  }
} 