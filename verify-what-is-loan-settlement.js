const fs = require('fs');
const path = require('path');

const targetPath = 'src/app/what-is-loan-settlement/page.tsx';
const footerPath = 'src/newcomp/Footer.tsx';
const sitemapPath = 'src/app/sitemap.xml/route.ts';

async function verify() {
    console.log("Starting verification for /what-is-loan-settlement...");

    if (!fs.existsSync(targetPath)) {
        console.error(`❌ File not found: ${targetPath}`);
        return;
    }

    const content = fs.readFileSync(targetPath, 'utf8');

    // 1. Word count (approximate, focusing on visible text)
    const mainContentMatch = content.match(/return \([\s\S]*?\);/);
    const mainContent = mainContentMatch ? mainContentMatch[0] : content;
    const textContent = mainContent.replace(/<[^>]*>/g, ' ');
    const words = textContent.split(/\s+/).filter(w => w.length > 0).length;
    if (words >= 3000) {
        console.log(`✅ Word count: ${words} words`);
    } else {
        console.error(`❌ Word count: ${words} words (Required: 3000+)`);
    }

    // 2. SEO keywords
    const keywords = ["loan settlement app", "what is loan settlement"];
    keywords.forEach(kw => {
        if (content.toLowerCase().includes(kw.toLowerCase())) {
            console.log(`✅ Found keyword: "${kw}"`);
        } else {
            console.error(`❌ Keyword missing: "${kw}"`);
        }
    });

    // 3. Rich results schema
    const schemas = ["Article", "FAQPage", "Review", "BreadcrumbList"];
    schemas.forEach(schema => {
        if (content.includes(`"@type": "${schema}"`)) {
            console.log(`✅ Schema found: ${schema}`);
        } else {
            console.error(`❌ Schema missing: ${schema}`);
        }
    });

    // 4. FAQ count
    const faqCount = (content.match(/question:/g) || []).length;
    if (faqCount >= 10) {
        console.log(`✅ FAQ count: ${faqCount}`);
    } else {
        console.error(`❌ FAQ count: ${faqCount} (Required: 10+)`);
    }

    // 5. Review snippet count
    const reviewMatch = content.match(/"review":\s*\[([\s\S]*?)\]/);
    let reviewCount = 0;
    if (reviewMatch) {
        reviewCount = (reviewMatch[1].match(/@type": "Review"/g) || []).length;
    }
    if (reviewCount >= 5) {
        console.log(`✅ Review count: ${reviewCount}`);
    } else {
        console.error(`❌ Review count: ${reviewCount} (Required: 5+)`);
    }

    // 6. No em dashes
    if (content.includes('—')) {
        console.error(`❌ Em dashes found!`);
    } else {
        console.log(`✅ No em dashes found.`);
    }

    // 7. Sitemap entry
    if (fs.existsSync(sitemapPath)) {
        const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
        if (sitemapContent.includes('what-is-loan-settlement')) {
            console.log(`✅ Sitemap entry found.`);
        } else {
            console.error(`❌ Sitemap entry missing.`);
        }
    }

    // 8. Footer link
    if (fs.existsSync(footerPath)) {
        const footerContent = fs.readFileSync(footerPath, 'utf8');
        if (footerContent.includes('what-is-loan-settlement')) {
            console.log(`✅ Footer link found.`);
        } else {
            console.error(`❌ Footer link missing.`);
        }
    }

    console.log("Verification complete.");
}

verify();
