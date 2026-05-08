const fs = require('fs');
const path = require('path');

const PAGE_PATH = path.join(__dirname, '../src/app/hdfc-debt-consolidation-loan/page.tsx');
const FOOTER_PATH = path.join(__dirname, '../src/newcomp/Footer.tsx');
const SITEMAP_PATH = path.join(__dirname, '../src/app/sitemap.xml/route.ts');

async function verify() {
    console.log('--- Verification Started ---');
    let errors = [];

    // 1. Check Page Existence
    if (!fs.existsSync(PAGE_PATH)) {
        errors.push('Page file does not exist: ' + PAGE_PATH);
    } else {
        const content = fs.readFileSync(PAGE_PATH, 'utf8');

        // 2. Word Count (Approximate)
        const textOnly = content.replace(/<[^>]*>?/gm, ' ');
        const wordCount = textOnly.split(/\s+/).length;
        console.log(`Word count: ~${wordCount}`);
        if (wordCount < 3000) {
            errors.push(`Word count is too low: ${wordCount} (Target: 3000+)`);
        }

        // 3. Schema Checks
        if (!content.includes('breadcrumb-schema') || !content.includes('BreadcrumbList')) errors.push('Breadcrumb schema missing');
        if (!content.includes('article-schema') || !content.includes('Article')) errors.push('Article schema missing');
        if (!content.includes('faq-schema') || !content.includes('FAQPage')) errors.push('FAQ schema missing');
        if (!content.includes('review-schema') || !content.includes('AggregateRating')) errors.push('Review schema missing');

        // 4. FAQ Count
        const faqMatches = content.match(/question:/g) || [];
        console.log(`FAQs found: ${faqMatches.length}`);
        if (faqMatches.length < 10) {
            errors.push(`Not enough FAQs: ${faqMatches.length} (Target: 10+)`);
        }

        // 5. Review Count
        // Count global occurrences of "@type": "Review"
        const reviewItemsCount = (content.match(/"@type":\s*"Review"/g) || []).length;
        
        console.log(`Reviews found in file: ${reviewItemsCount}`);
        if (reviewItemsCount < 5) {
             errors.push(`Not enough review snippets found: ${reviewItemsCount} (Target: 5+)`);
        }

        // 6. No Em Dashes
        if (content.includes('—')) {
             // Find where the em dash is
            const index = content.indexOf('—');
            const snippet = content.substring(index - 20, index + 20);
            errors.push(`Content contains em dashes (—) near: "...${snippet}..."`);
        }
    }

    // 7. Footer Check
    if (fs.existsSync(FOOTER_PATH)) {
        const footerContent = fs.readFileSync(FOOTER_PATH, 'utf8');
        if (!footerContent.includes('/hdfc-debt-consolidation-loan')) {
            errors.push('Page not linked in Footer');
        }
    } else {
        errors.push('Footer file not found');
    }

    // 8. Sitemap Check
    if (fs.existsSync(SITEMAP_PATH)) {
        const sitemapContent = fs.readFileSync(SITEMAP_PATH, 'utf8');
        if (!sitemapContent.includes('/hdfc-debt-consolidation-loan')) {
            errors.push('Page not found in sitemap route');
        }
    } else {
        errors.push('Sitemap route file not found');
    }

    if (errors.length > 0) {
        console.log('❌ Verification Failed:');
        errors.forEach(err => console.log(' - ' + err));
    } else {
        console.log('✅ All checks passed!');
    }
}

verify();
