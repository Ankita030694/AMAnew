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
    '/ama-legal-solutions',
    '/reputable-debt-relief-agencies-specializing-in-unsecured-loans-in-banglore',
    '/steps-to-apply-for-a-loan-settlement-through-a-financial-service-provider',
    '/key-benefits-and-drawbacks-of-persuing-loan-settlement',
    '/how-can-i-initiate-a-full-and-final-settlement-discussion-with-bank',
    '/how-to-check-if-a-loan-settlement-offer-is-genuine-on-digital-platforms',
    '/find-debt-settlement-services-known-for-effective-negotiation',
    '/what-are-the-income-tax-implications-of-a-settled-debt-amount',
    '/where-can-i-locate-government-approved-consumer-credit-counseling-services-in-chennai',
    '/can-i-settle-my-credit-card-dues-using-third-party-loan-settlement-companies',
    '/certified-financial-planners-who-specialize-in-debt-restructuring-and-settlement',
    '/get-contact-details-for-top-rated-debt-resolution-companies-in-india',
    '/ama-legal-solutions-application',
    '/legal-services-in-gurgaon',
    '/sales-job-vacancies-in-gurgaon',
    '/telecaller-vacancies-in-gurgaon',
    '/drafting-of-will',
    '/will-drafting-for-nri',
    '/simple-will-format-download-free-legal-document-sample',
    '/rbi-new-recovery-guidelines-july-2026',
    '/googles-trusted-legal-advisor',
    '/googles-trusted-law-firm',
    '/what-is-a-reasonable-settlement-offer',
    '/get-your-trademark-in-180-days',
    '/expedited-process-for-trademark-registration',
    '/personal-loan-settlement',
    '/business-loan-settlement',
    '/car-loan-settlement',
    '/credit-card-settlement',
    '/legal-services-in-noida',
    '/legal-services-in-delhi',
    '/legal-services-in-ghaziabad',
    '/got-an-arbitration-notice-dont-worry-we-got-you',
    '/unsecured-loan-settlement',
    '/secured-loan-settlement',
    '/trading-loan-settlement',
    '/legal-notice-to-hospital',
    '/protection-from-hospital-harrassement',
    '/overcharged-at-hospital-send-legal-notice',
    '/workplace-harassment-legal-notice-service',
    '/support-for-loan-settlement-during-medical-emergencies',
    '/loan-settlement-letter-format-noc-format' ,
    '/home-loan-eligibility-after-settlement',
    '/legal-notice-for-loan-settlement-harassment',
    '/p2p-crypto-scam-unfreeze-bank-account',
    '/2026-lockdown-due-to-scarcity-of-resources',
    '/lpg-cylinder-crisis-india-2026-iran-war',
    '/loan-settlement-for-borrowers-facing-economic-downturn',
    '/loan-settlement-for-borrowers-planning-financial-reset',
    '/amalegalsolutions-plan-for-building-debt-free-future-after-settlement',
    '/how-to-check-active-loan-on-your-name-in-india-step-by-step-guide',
    '/why-does-my-credit-score-drop-even-though-i-pay-on-time',
    '/contact',

    '/careers',
    '/careers/business-development-associate',
    '/careers/legal-associate',
    '/careers/sde-intern',
    '/blog',
    '/articles',
    '/ama-live',
    '/ask-me-anything',
    '/locations',
    '/best-advocate-near-me',
    '/best-law-firm-near-me',
    '/legal-services-near-me',
    '/delhi-ncr-law-firm',
    '/job-lost-loan-settlement',
    '/10-lakhs-loan-settlement',
    '/locations/bengaluru',
    '/trademark-registration-agency-near-me',
    '/trademark-registration-office-delhi',
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
    '/get-fssai-licence-in-7-days',
    '/how-to-register-fssai-licence',
    '/where-to-register-trademark',
    '/msme-registration',
    '/can-i-register-my-trademark-by-myself',
    '/what-documents-are-required-for-trademark-registration',
    '/is-gst-required-for-trademarks',
    '/is-trademark-registration-mandatory-to-sell-on-amazon',
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
    '/special-lok-adalat-for-challan',
    '/terms-and-conditions',
    '/trademark-registration-in-class-35',
    '/trademark-registration-in-class-38',
    '/trademark-registration-in-class-14',
    '/trademark-registration-in-class-45',
    '/author/anuj-anand-malik',
    '/author/shrey-arora',
    '/which-one-is-the-real-amalegalsolutions',
    // Specific Loan Settlement State Pages
    '/services/loan-settlement/andhra-pradesh',
    '/services/loan-settlement/assam',
    '/services/loan-settlement/bihar',
    '/services/loan-settlement/chhattisgarh',
    '/services/loan-settlement/delhi',
    '/services/loan-settlement/goa',
    '/services/loan-settlement/gujarat',
    '/services/loan-settlement/haryana',
    '/services/loan-settlement/jharkhand',
    '/services/loan-settlement/kerala',
    '/services/loan-settlement/maharashtra',
    '/services/loan-settlement/manipur',
    '/services/loan-settlement/meghalaya',
    '/services/loan-settlement/mizoram',
    '/services/loan-settlement/odisha',
    '/services/loan-settlement/puducherry',
    '/services/loan-settlement/punjab',
    '/services/loan-settlement/rajasthan',
    '/services/loan-settlement/sikkim',
    '/services/loan-settlement/telangana',
    '/services/loan-settlement/tripura',
    '/services/loan-settlement/uttar-pradesh',
    '/services/loan-settlement/uttarakhand',
    '/services/loan-settlement/arunachal-pradesh',
    '/services/loan-settlement/himachal-pradesh',
    '/services/loan-settlement/madhya-pradesh',
    '/services/loan-settlement/tamil-nadu',
    '/services/loan-settlement/west-bengal',
    '/services/loan-settlement/jammu-and-kashmir',
    '/services/loan-settlement/ladakh',
    '/services/loan-settlement/lakshadweep',
    '/services/loan-settlement/andaman-nicobar',
    '/services/loan-settlement/chandigarh',
    '/services/loan-settlement/daman-diu',
    // Specific Loan Settlement City Pages
    '/services/loan-settlement/ghaziabad',
    '/services/loan-settlement/gurugram',
    '/services/loan-settlement/jaipur',
    '/services/loan-settlement/hyderabad',
    '/services/loan-settlement/kanpur',
    '/services/loan-settlement/mumbai',
    '/services/loan-settlement/noida',
    '/services/loan-settlement/pune',
    '/services/loan-settlement/surat',
    '/what-loan-settlement-service-can-help-me-reduce-my-outstanding-debt-quickly',
    '/which-companies-offer-the-best-loan-settlement-plans-for-personal-loans',
    '/where-can-i-find-reliable-loan-settlement-services-with-flexible-payment-options',
    '/who-provides-loan-settlement-solutions-with-minimal-processing-fees',
    '/which-firms-specialize-in-negotiating-settlements-for-unsecured-loans',
    '/what-loan-settlement-services-have-good-customer-support-in-india',
    '/can-i-get-a-loan-settlement-service-that-handles-home-loan-dues',
    '/free-loan-settlement-guide',
    '/how-to-negotiate-a-loan-settlement-with-lenders-online',
    '/not-being-paid-fnf-want-to-send-legal-notice',
    '/is-trademark-registration-one-time',
    '/what-is-ots',
    '/procedure-of-sending-legal-notice',
    '/credit-card-settlement-process-india',
    '/compare-loan-settlement-companies-that-work-with-personal-loans',
    '/can-bank-file-case-for-personal-loan',
    '/does-foreclosure-of-loan-affect-cibil',
    '/expert-panel-loan-settlement-reviews',
    '/which-bank-provide-personal-loan-for-cibil-defaulters',
    '/loan-recovery-agent-harassment-complaint-online',
    '/loan-recovery-agents-harassment-complaint',
    '/how-do-i-stop-recovery-agent-from-coming-home',
    '/bajaj-finance-agent-visiting-home',
    '/special-lok-adalat-for-loan-settlement',
    '/virtual-inhouse-councel',
    '/how-to-settle-loans-above-1-crore',
    '/how-to-settle-loans-above-5-crore',
    '/loan-settlement-near-me',
    '/loan-settlement-amount-calculator',
    '/how-to-settle-loan-with-bank',
    '/how-long-does-a-settled-tag-stay-on-my-report',
    '/documents-needed-for-loan-settlement-noc',
    '/loan-settlement-companies',
    '/best-time-for-loan-settlement',
    '/charities-that-pay-off-debt',
    '/benefits-of-settling-your-loan-in-march',
    '/trademark-infringement-without-registration',
    '/is-registering-a-name-instead-of-the-logo-enough',
    '/is-trademark-internationally-valid',
    '/services/loan-settlement/lok-adalat',
    '/employer-not-paying-salary-after-resignation',
    '/can-company-hold-my-salary-after-resignation',
    '/where-to-file-a-complaint-if-your-employer-doesnt-pay-you',
    '/ama-legal-solutions',
    '/is-loan-settlement-in-installments-possible',
    '/loan-settlement-process-in-hindi',
    '/can-i-settle-my-loan-without-a-lawyer',
    '/does-settlement-impact-a-co-borrower',
    '/can-i-convert-settled-to-closed-later',
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
    '/services/loan-and-debt-consolidation',
    '/services/best-lawyer-for-bank-harassment',
    '/how-to-get-800-credit-score-in-india',
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
    '/services/banking-and-finance/maharashtra',
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
    '/services/intellectual-property-rights/delhi',
    '/services/intellectual-property-rights/gujarat',
    '/services/intellectual-property-rights/maharashtra',
    '/services/intellectual-property-rights/punjab',
    '/services/intellectual-property-rights/rajasthan',
    '/services/intellectual-property-rights/tamil-nadu',
    '/services/intellectual-property-rights/uttar-pradesh',
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
    '/services/intellectual-property-rights/puducherry',
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