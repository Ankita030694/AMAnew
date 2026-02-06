// src/app/sitemap.xml/route.ts
// import { MetadataRoute } from 'next'
import { db } from '@/lib/firebase'
import { collection, getDocs } from 'firebase/firestore'
import { successStories } from '@/data/success-stories'

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
    '/ask-me-anything',
    '/locations',
    '/best-advocate-near-me',
    '/best-law-firm-near-me',
    '/legal-services-near-me',
    '/delhi-ncr-law-firm',
    '/job-lost-loan-settlement',
    '/locations/bengaluru',
    '/trademark-registration-agency-near-me',
    '/trademark-opposition-procedure',
    '/locations/chennai',
    '/locations/jaipur',
    '/locations/kolkata',
    '/locations/mumbai',
    '/locations/newdelhi',
    '/locations/telangana',
    '/locations/uttar-pradesh',
    '/locations/uttarakhand',
    '/locations/haryana',
    "/locations/punjab",
    "/locations/rajasthan",
    "/locations/chandigarh",
    "/locations/tamil-nadu",
    "/locations/kerala",
    "/locations/mizoram",
    "/services",
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
    '/services/trademark-registration',
    '/services/how-to-register-trademark-with-ipindia',
    '/services/expert-vakil-search-for-trademark-registration',
    '/services/quick-company-registration-and-trademark',
    '/services/comprehensive-guide-trademark-registration-india',
    '/services/trademark-search',
    '/services/trademark-status',
    '/steps-to-trademark-registration',
    '/trademark-registration-fees',
    '/how-much-time-it-takes-to-get-your-trademark-registered',
    '/where-to-register-trademark',
    '/msme-registration',
    '/can-i-register-my-trademark-by-myself',
    '/what-documents-are-required-for-trademark-registration',
    '/is-gst-required-for-trademarks',
    '/which-is-better-tm-or-r',
    '/trademark-objection-reply-procedure',
    '/can-i-sell-my-products-without-trademark',
    '/how-can-i-get-trademark-certificate',
    '/validity-of-trademark-registration',
    '/send-legal-notice',
    '/send-legal-notice-haryana',
    '/send-legal-notice-in-delhi',
    '/send-legal-notice-in-gurugram',
    '/send-legal-notice-in-noida',
    '/send-legal-notice-in-punjab',
    '/send-legal-notice-in-uttar-pradesh',
    '/how-can-i-send-legal-notice',
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
    '/services/loan-settlement/jammu-and-kashmir',
    '/services/loan-settlement/ladakh',
    '/services/loan-settlement/lakshadweep',
    // Specific Loan Settlement City Pages
    '/services/loan-settlement/Ghaziabad',
    '/services/loan-settlement/Gurugram',
    '/services/loan-settlement/Jaipur',
    '/services/loan-settlement/Hyderabad',
    '/services/loan-settlement/Kanpur',
    '/services/loan-settlement/Mumbai',
    '/services/loan-settlement/Noida',
    '/services/loan-settlement/pune',
    '/services/loan-settlement/Surat',
    '/services/loan-settlement/what-is-loan-settlement',
    '/how-to-negotiate-a-loan-settlement-with-lenders-online',
    '/services/loan-settlement/lok-adalat',
    // Bank Specific Pages
    '/services/loan-settlement/sbi-bank',
    '/services/loan-settlement/hdfc-bank',
    '/services/loan-settlement/idfc-bank',
    '/services/loan-settlement/icici-bank',
    '/services/loan-settlement/kotak-mahindra',
    '/services/loan-settlement/cred',
    '/top-loan-settlement-services-with-good-customer-reviews',
    '/services/loan-settlement/fibe',
    '/best-apps-for-managing-loan-settlement-offers-in-India',
    '/services/loan-settlement/hsbc',
    '/services/loan-settlement/navi',
    '/services/loan-settlement/paytm',
    '/services/loan-settlement/pnb-bank',
    '/services/loan-settlement/rbl-bank',
    '/services/loan-settlement/yes-bank',
    '/services/loan-settlement/bajaj-finserv',
    '/services/loan-settlement/bank-of-baroda',
    '/services/loan-settlement/hero-fincorp',
    '/services/loan-settlement/aditya-birla',
    '/services/loan-settlement/poonawalla-fincorp',
    '/services/loan-settlement/tata-capital',
    '/services/loan-settlement/federal-bank',
    '/services/loan-settlement/payu-finance',
    '/services/loan-settlement/krazybee',
    '/services/loan-settlement/au-small-finance',
    '/services/loan-settlement/northern-arc',
    '/services/loan-settlement/dmi-finance',
    '/services/loan-settlement/piramal-finance',
    '/services/loan-settlement/dbs-bank',
    '/services/loan-settlement/south-indian-bank',
    '/services/loan-settlement/si-creva',
    '/services/loan-settlement/stashfin',
    '/services/loan-settlement/l-and-t-finance',
    '/services/loan-settlement/american-express',
    '/services/loan-settlement/standard-chartered',
    '/services/loan-settlement/true-credits',
    '/services/loan-settlement/moneyview',
    '/services/loan-settlement/vivriti-capital',
    '/services/loan-settlement/axis-bank',
    '/services/loan-settlement/kisetsu-saison-finance',
    '/services/loan-settlement/indusind-bank',
    '/services/loan-settlement/smfg-india-credit',
    '/services/debt-consolidation',
    // Specific Banking and Finance State Pages
    '/services/banking-and-finance/andhra-pradesh',
    '/services/banking-and-finance/arunachal-pradesh',
    '/services/banking-and-finance/assam',
    '/services/banking-and-finance/bihar',
    '/services/banking-and-finance/chandigarh',
    '/services/banking-and-finance/chhattisgarh',
    '/services/banking-and-finance/delhi',
    '/services/banking-and-finance/goa',
    '/services/banking-and-finance/gujarat',
    '/services/banking-and-finance/haryana',
    '/services/banking-and-finance/himachal-pradesh',
    '/services/banking-and-finance/jammu-and-kashmir',
    '/services/banking-and-finance/jharkhand',
    '/services/banking-and-finance/karnataka',
    '/services/banking-and-finance/kerala',
    '/services/banking-and-finance/ladakh',
    '/services/banking-and-finance/madhya-pradesh',
    '/services/banking-and-finance/Maharashtra',
    '/services/banking-and-finance/manipur',
    '/services/banking-and-finance/meghalaya',
    '/services/banking-and-finance/mizoram',
    '/services/banking-and-finance/nagaland',
    '/services/banking-and-finance/odisha',
    '/services/banking-and-finance/puducherry',
    '/services/banking-and-finance/punjab',
    '/services/banking-and-finance/rajasthan',
    '/services/banking-and-finance/sikkim',
    '/services/banking-and-finance/tamil-nadu',
    '/services/banking-and-finance/telangana',
    '/services/banking-and-finance/tripura',
    '/services/banking-and-finance/uttar-pradesh',
    '/services/banking-and-finance/uttarakhand',
    '/services/banking-and-finance/west-bengal',
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
    '/services/intellectual-property-rights/west-bengal',
    // Specific Litigation State Pages - Covered by generator
    // Removed redundant static entries
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

  // Build dynamic success story routes
  const successStoryRoutes = successStories.map(story => ({
    url: `${baseUrl}/success-stories/${story.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: 0.8
  }))

  // Combine all routes
  const allRoutes = [...staticRoutes, ...serviceSlugRoutes, ...blogRoutes, ...articleRoutes, ...successStoryRoutes]

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
    // 'banking-and-finance', // Removed as it now has specific pages
    'civil',
    'corporate',
    'criminal-law',
    'cyber',
    'drafting',
    'entertainment',
    // 'intellectual-property-rights', // Has specific state pages
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
        priority: 0.8
      })
    }
  }

  return serviceSlugRoutes
}