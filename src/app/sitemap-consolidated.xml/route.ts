import consolidationRedirects from '@/data/consolidationRedirects.json'

// Temporary sitemap of URLs consolidated via 301 on 2026-11-04. Listing the old URLs makes
// Google recrawl them sooner, see the redirect and move their signals to the destination.
// Remove this route (and its GSC submission) about 30 days after the consolidation.
const CONSOLIDATED_ON = '2026-11-04'

export async function GET(): Promise<Response> {
  const baseUrl = 'https://www.amalegalsolutions.com'

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${consolidationRedirects
  .map(r => `  <url>
    <loc>${baseUrl}${r.source.replace(/&/g, '&amp;')}</loc>
    <lastmod>${CONSOLIDATED_ON}</lastmod>
  </url>`)
  .join('\n')}
</urlset>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=0, s-maxage=3600',
    },
  })
}
