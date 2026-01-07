
const fs = require('fs');
const path = require('path');

const sitemapPath = path.join(__dirname, 'sitemap_full.xml');
const indexedPath = path.join(__dirname, 'indexed_urls.txt');

try {
    const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
    const indexedContent = fs.readFileSync(indexedPath, 'utf8');

    // 1. Extract Sitemap URLs
    const sitemapUrls = [];
    const locRegex = /<loc>(.*?)<\/loc>/g;
    let match;
    while ((match = locRegex.exec(sitemapContent)) !== null) {
        sitemapUrls.push(match[1]);
    }

    console.log(`Total URLs in sitemap: ${sitemapUrls.length}`);

    // 2. Process Indexed URLs
    const indexedLines = indexedContent.split('\n')
        .map(l => l.trim())
        .filter(l => l.length > 0 && l.startsWith('http')); // Only keep lines starting with http
    const matchedSitemapIndices = new Set();

    indexedLines.forEach(line => {
        let cleanLine = line.toLowerCase();
        
        // Normalize protocol and www for comparison
        // We will compare based on the path mainly, but full URL is safer if normalized
        // Let's normalize everything to https://www.amalegalsolutions.com
        
        // Remove existing protocol/www to get raw path/domain
        let temp = cleanLine.replace(/^https?:\/\//, '').replace(/^www\./, '');
        // Rebuild standard
        let normalizedIndexed = 'https://www.amalegalsolutions.com/' + temp.replace(/^amalegalsolutions\.com\//, '');
        
        // Handle truncation
        const isTruncated = cleanLine.endsWith('...');
        if (isTruncated) {
             // Remove ... and the last incomplete segment if likely partial?
             // Actually, usually "..." just appends to the string. 
             // e.g. "https://www.amalegalsolutions.com/services/bank-of..."
             // cleanSearch would be "https://www.amalegalsolutions.com/services/bank-of"
             let searchPrefix = normalizedIndexed.slice(0, -3); // remove last 3 dots
             
             // Find all sitemap URLs that start with this
             sitemapUrls.forEach((url, index) => {
                 if (url.toLowerCase().startsWith(searchPrefix)) {
                     matchedSitemapIndices.add(index);
                 }
             });
        } else {
            // Exact match
            sitemapUrls.forEach((url, index) => {
                // Normalize sitemap url for comparison
                let sitemapNorm = url.toLowerCase();
                 // Some sitemap urls might be http or non-www? (Code says https://www...)
                 // But let's be safe.
                if (sitemapNorm === normalizedIndexed || 
                    sitemapNorm.replace(/\/$/, '') === normalizedIndexed.replace(/\/$/, '')) { // Handle trailing slash diffs
                    matchedSitemapIndices.add(index);
                }
            });
        }
    });

    console.log(`Total Indexed URLs matched in Sitemap: ${matchedSitemapIndices.size}`);

    // 3. Identify Missing
    const missingUrls = sitemapUrls.filter((_, index) => !matchedSitemapIndices.has(index));

    console.log(`Total Missing URLs: ${missingUrls.length}`);
    console.log('\n--- Missing URLs ---\n');
    console.log(missingUrls.join('\n'));

} catch (err) {
    console.error('Error:', err);
}
