const fs = require('fs');

const sitemapPath = 'public/sitemap.xml';
let content = fs.readFileSync(sitemapPath, 'utf8');

const newEntry = `  <url>
    <loc>https://www.amalegalsolutions.com/default-loan-settlement-in-india</loc>
    <lastmod>2026-06-26</lastmod>
    <priority>0.8</priority>
  </url>
`;

if (!content.includes('default-loan-settlement-in-india')) {
  content = content.replace('</urlset>', newEntry + '</urlset>');
  fs.writeFileSync(sitemapPath, content);
  console.log('Sitemap updated.');
} else {
  console.log('Already in sitemap.');
}
