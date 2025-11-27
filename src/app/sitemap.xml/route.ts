// src/app/sitemap.xml/route.ts
// import { MetadataRoute } from 'next'
import { db } from '@/lib/firebase'
import { collection, getDocs } from 'firebase/firestore'

export async function GET(): Promise<Response> {
  const blogs = await fetchAllBlogs()
  const articles = await fetchAllArticles()

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.amalegalsolutions.com'

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
    '/services/banking-and-finance',
    '/services/civil',
    '/services/corporate',
    '/services/criminal-law',
    '/services/cyber',
    '/services/drafting',
    '/services/entertainment',
    '/services/intellectual-property-rights',
    '/services/litigation',
    '/services/loan-settlement',
    '/services/real-estate',
    '/ourhistory',
    '/present',
    '/ourvision',
    '/privacy-policy',
    '/terms-and-conditions',
    '/author/anuj-anand-malik',
    '/author/shrey-arora',
    // Specific Loan Settlement State Pages
    '/services/loan-settlement/AndhraPradesh',
    '/services/loan-settlement/Assam',
    '/services/loan-settlement/Bihar',
    '/services/loan-settlement/Chhattisgarh',
    '/services/loan-settlement/Delhi',
    '/services/loan-settlement/Goa',
    '/services/loan-settlement/Gujarat',
    '/services/loan-settlement/Haryana',
    '/services/loan-settlement/Jharkhand',
    '/services/loan-settlement/Kerala',
    '/services/loan-settlement/Maharashtra',
    '/services/loan-settlement/Manipur',
    '/services/loan-settlement/Meghalaya',
    '/services/loan-settlement/Mizoram',
    '/services/loan-settlement/Odisha',
    '/services/loan-settlement/Puducherry',
    '/services/loan-settlement/Punjab',
    '/services/loan-settlement/Rajasthan',
    '/services/loan-settlement/Sikkim',
    '/services/loan-settlement/Telangana',
    '/services/loan-settlement/Tripura',
    '/services/loan-settlement/UttarPradesh',
    '/services/loan-settlement/Uttrakhand',
    '/services/loan-settlement/arunachal-pradesh',
    '/services/loan-settlement/himachal-pradesh',
    '/services/loan-settlement/madhya-pradesh',
    '/services/loan-settlement/tamil-nadu',
    '/services/loan-settlement/west-bengal',
    '/services/loan-settlement/SBI',
    '/services/loan-settlement/HDFC',
    '/services/loan-settlement/IDFC',
    'services/loan-settlement/ICICI',
    'services/loan-settlement/kotak-mahindra',
    // Specific IPR State Pages
    '/services/intellectual-property-rights/Delhi',
    '/services/intellectual-property-rights/Gujarat',
    '/services/intellectual-property-rights/Maharashtra',
    '/services/intellectual-property-rights/Punjab',
    '/services/intellectual-property-rights/Rajasthan',
    '/services/intellectual-property-rights/TamilNadu',
    '/services/intellectual-property-rights/UttarPradesh',
    '/services/intellectual-property-rights/andhra-pradesh',
    '/services/intellectual-property-rights/arunachal-pradesh',
    '/services/intellectual-property-rights/assam',
    '/services/intellectual-property-rights/bihar',
    '/services/intellectual-property-rights/chandigarh',
    '/services/intellectual-property-rights/chhattisgarh',
    '/services/intellectual-property-rights/jammu-and-kashmir',
    '/services/intellectual-property-rights/jharkhand',
    '/services/intellectual-property-rights/kerala',
    '/services/intellectual-property-rights/madhya-pradesh',
    '/services/intellectual-property-rights/manipur',
    '/services/intellectual-property-rights/mizoram',
    '/services/intellectual-property-rights/odisha',
    '/services/intellectual-property-rights/pudducherry',
    '/services/intellectual-property-rights/telangana',
    '/services/intellectual-property-rights/tripura',
    '/services/intellectual-property-rights/uttarakhand',
    '/services/intellectual-property-rights/west-bengal'
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.8
  }))

  // Build service slug routes
  const serviceSlugRoutes = generateServiceSlugRoutes(baseUrl)

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
  const allRoutes = [...staticRoutes, ...serviceSlugRoutes, ...blogRoutes, ...articleRoutes]

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

// Generate service slug routes for all states and union territories
function generateServiceSlugRoutes(baseUrl: string) {
  const services = [
    'arbitration',
    'banking-and-finance',
    'civil',
    'corporate',
    'criminal-law',
    'cyber',
    'drafting',
    'entertainment',
    'intellectual-property-rights',
    'litigation',
    // 'loan-settlement', // Removed as it now has specific pages
    'real-estate'
  ]

  const states = [
    'andhra-pradesh',
    'arunachal-pradesh',
    'assam',
    'bihar',
    'chhattisgarh',
    'goa',
    'gujarat',
    'haryana',
    'himachal-pradesh',
    'jharkhand',
    'karnataka',
    'kerala',
    'madhya-pradesh',
    'maharashtra',
    'manipur',
    'meghalaya',
    'mizoram',
    'nagaland',
    'odisha',
    'punjab',
    'rajasthan',
    'sikkim',
    'tamil-nadu',
    'telangana',
    'tripura',
    'uttar-pradesh',
    'uttarakhand',
    'west-bengal'
  ]

  const unionTerritories = [
    'andaman-and-nicobar',
    'chandigarh',
    'daman-and-diu',
    'delhi',
    'jammu-and-kashmir',
    'ladakh',
    'lakshadweep',
    'puducherry'
  ]

  const allSlugs = [...states, ...unionTerritories]

  const serviceSlugRoutes = []

  for (const service of services) {
    for (const slug of allSlugs) {
      serviceSlugRoutes.push({
        url: `${baseUrl}/services/${service}/${slug}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'monthly',
        priority: 0.6
      })
    }
  }

  return serviceSlugRoutes
}