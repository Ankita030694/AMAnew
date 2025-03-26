// src/app/sitemap.xml/route.ts
// import { MetadataRoute } from 'next'
import { db } from '@/lib/firebase'
import { collection, getDocs } from 'firebase/firestore'

export async function GET(): Promise<Response> {
  const blogs = await fetchAllBlogs()
  const articles = await fetchAllArticles()
  
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://amalegalsolutions.com'
  
  // Build static routes
  const staticRoutes = [
    '',
    '/about',
    '/contact',
    '/blog',
    '/articles',
    '/amalive',
    '/locations/bengaluru',
    '/locations/chennai',
    '/locations/jaipur',
    '/locations/kolkata', 
    '/locations/mumbai',
    '/locations/newdelhi',
    '/services',
    '/services/arbitration',
    '/services/banking',
    '/services/civil',
    '/services/corporate',
    '/services/criminal',
    '/services/cyber',
    '/services/drafting',
    '/services/entertainment',
    '/services/ipr',
    '/services/litigation',
    '/services/loansettlement',
    '/services/realestate',
    '/ourhistory',
    '/present',
    '/ourvision',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.8
  }))
  
  // Build dynamic blog routes
  const blogRoutes = blogs.map(blog => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    lastModified: new Date(blog.created || Date.now()).toISOString(),
    changeFrequency: 'monthly',
    priority: 0.7
  }))
  
  // Build dynamic article routes
  const articleRoutes = articles.map(article => ({
    url: `${baseUrl}/articles/${article.slug}`,
    lastModified: new Date(article.created || Date.now()).toISOString(),
    changeFrequency: 'monthly',
    priority: 0.7
  }))
  
  // Combine all routes
  const allRoutes = [...staticRoutes, ...blogRoutes, ...articleRoutes]
  
  // Generate XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allRoutes.map(route => `
    <url>
      <loc>${route.url}</loc>
      <lastmod>${route.lastModified}</lastmod>
      <changefreq>${route.changeFrequency}</changefreq>
      <priority>${route.priority}</priority>
    </url>
  `).join('')}
</urlset>`
  
  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600'
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
        created: data.created || Date.now()
      }
    })
  } catch (error) {
    console.error('Error fetching articles:', error)
    return []
  }
}

// Utility function to convert title to slug (same as used in your app)
function convertToSlug(title: string) {
  const truncatedTitle = title.slice(0, 30);
  return truncatedTitle
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}