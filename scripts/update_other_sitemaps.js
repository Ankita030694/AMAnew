const fs = require('fs');

const fileList = [
  'sitemap_entries.txt',
  'sitemap_pages.txt',
  'sitemap_list.txt',
  'sitemap_full.xml'
];

const newUrl = 'https://www.amalegalsolutions.com/default-loan-settlement-in-india';

fileList.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    if (!content.includes(newUrl)) {
      if (file.endsWith('.xml')) {
        const newEntry = `  <url>
    <loc>${newUrl}</loc>
    <lastmod>2026-06-26</lastmod>
    <priority>0.8</priority>
  </url>
`;
        content = content.replace('</urlset>', newEntry + '</urlset>');
      } else {
        content += `\n${newUrl}`;
      }
      fs.writeFileSync(file, content);
      console.log(`Updated ${file}`);
    }
  }
});
