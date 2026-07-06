const fs = require('fs');
const path = require('path');
const date = new Date().toISOString().split('T')[0];

const sitemaps = [
  path.join(__dirname, 'public', 'sitemap.xml'),
  path.join(__dirname, 'sitemap_full.xml')
];

const newEntry = `  <url>
    <loc>https://www.amalegalsolutions.com/protection-from-loan-recovery-harassment</loc>
    <lastmod>${date}</lastmod>
    <priority>0.8</priority>
  </url>
</urlset>`;

sitemaps.forEach(sitemapPath => {
  if (fs.existsSync(sitemapPath)) {
    let sitemap = fs.readFileSync(sitemapPath, 'utf8');
    if (!sitemap.includes('https://www.amalegalsolutions.com/protection-from-loan-recovery-harassment')) {
      sitemap = sitemap.replace('</urlset>', newEntry);
      fs.writeFileSync(sitemapPath, sitemap);
      console.log(\`Updated \${sitemapPath}\`);
    } else {
      console.log(\`Entry already exists in \${sitemapPath}\`);
    }
  }
});
