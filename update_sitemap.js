const fs = require('fs');
const path = require('path');
const sitemapPath = path.join(__dirname, 'public', 'sitemap.xml');
let sitemap = fs.readFileSync(sitemapPath, 'utf8');

const newEntry = `
  <url>
    <loc>https://www.amalegalsolutions.com/what-to-do-after-receiving-arbitration-notice-from-bank</loc>
    <lastmod>2026-06-29</lastmod>
    <priority>0.8</priority>
  </url>
</urlset>`;

sitemap = sitemap.replace('</urlset>', newEntry);
fs.writeFileSync(sitemapPath, sitemap);

const srcSitemapPath = path.join(__dirname, 'src', 'app', 'sitemap.xml');
if (fs.existsSync(srcSitemapPath)) {
  let srcSitemap = fs.readFileSync(srcSitemapPath, 'utf8');
  srcSitemap = srcSitemap.replace('</urlset>', newEntry);
  fs.writeFileSync(srcSitemapPath, srcSitemap);
}
console.log('Sitemaps updated.');
