import { db } from '@/lib/firebase'
import { collection, getDocs } from 'firebase/firestore'

interface ImageItem {
  url: string;
  caption: string;
  title: string;
  pageUrl?: string;
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
  
  // Build static images
  const staticImages: ImageItem[] = [
    {
      url: `${baseUrl}/future.png`,
      caption: 'AMA Legal Solutions Logo',
      title: 'AMA Legal Solutions'
    },
    {
      url: `${baseUrl}/bannerbg.png`,
      caption: 'AMA Legal Solutions Background',
      title: 'AMA Legal Solutions'
    }
  ]
  
  // Build blog images
  const blogImages: ImageItem[] = blogs
    .filter(blog => blog.image)
    .map(blog => ({
      url: blog.image,
      caption: blog.title,
      title: blog.title,
      pageUrl: `${baseUrl}/blog/${blog.slug}`
    }))
  
  // Build article images
  const articleImages: ImageItem[] = articles
    .filter(article => article.image)
    .map(article => ({
      url: article.image,
      caption: article.title,
      title: article.title,
      pageUrl: `${baseUrl}/articles/${article.slug}`
    }))
  
  // Combine all images
  const allImages = [...staticImages, ...blogImages, ...articleImages]
  
  // Generate XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${allImages.map(image => `
    <url>
      <loc>${escapeXml(image.pageUrl || baseUrl)}</loc>
      <image:image>
        <image:loc>${escapeXml(image.url)}</image:loc>
        <image:caption>${escapeXml(image.caption)}</image:caption>
        <image:title>${escapeXml(image.title)}</image:title>
      </image:image>
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