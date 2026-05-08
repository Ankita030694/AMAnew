const fs = require('fs');
const path = require('path');

const filePath = '/Users/apple/Desktop/ama/ama/AMAnew/src/app/does-foreclosure-of-loan-affect-cibil/page.tsx';
const footerPath = '/Users/apple/Desktop/ama/ama/AMAnew/src/newcomp/Footer.tsx';
const sitemapPath = '/Users/apple/Desktop/ama/ama/AMAnew/src/app/sitemap.xml/route.ts';

function checkPage() {
    console.log('Checking page at:', filePath);
    if (!fs.existsSync(filePath)) {
        console.error('❌ Page file does not exist');
        return;
    }

    const content = fs.readFileSync(filePath, 'utf8');
    
    // 1. Word count check
    const words = content.split(/\s+/).filter(w => w.length > 0).length;
    console.log(`Word count: ${words}`);
    if (words < 3000) {
        console.error('❌ Word count is less than 3000');
    } else {
        console.log('✅ Word count is 3000+');
    }

    // 2. No em dashes check
    if (content.includes('—')) {
        console.error('❌ Content contains em dashes (—)');
    } else {
        console.log('✅ No em dashes found');
    }

    // 3. Schema detection
    const schemas = [
        { name: 'Article', pattern: /"@type":\s*"Article"/ },
        { name: 'FAQ', pattern: /"@type":\s*"FAQPage"/ },
        { name: 'Review', pattern: /"@type":\s*"Review"/ },
        { name: 'Breadcrumb', pattern: /"@type":\s*"BreadcrumbList"/ }
    ];

    schemas.forEach(schema => {
        if (schema.pattern.test(content)) {
            console.log(`✅ ${schema.name} schema found`);
        } else {
            console.error(`❌ ${schema.name} schema missing`);
        }
    });

    // 4. FAQ count check
    const faqMatches = content.match(/question:\s*"/g);
    const faqCount = faqMatches ? faqMatches.length : 0;
    console.log(`FAQ count: ${faqCount}`);
    if (faqCount < 10) {
        console.error('❌ FAQ count is less than 10');
    } else {
        console.log('✅ FAQ count is 10+');
    }

    // 5. Review count check
    // In the Product schema, there is a reviews array
    const reviewMatches = content.match(/"@type":\s*"Review"/g);
    const reviewCount = reviewMatches ? reviewMatches.length : 0;
    console.log(`Review count: ${reviewCount}`);
    if (reviewCount < 5) {
        console.error('❌ Review count is less than 5');
    } else {
        console.log('✅ Review count is 5+');
    }
}

function checkFooter() {
    console.log('Checking Footer at:', footerPath);
    if (!fs.existsSync(footerPath)) {
        console.error('❌ Footer file does not exist');
        return;
    }
    const content = fs.readFileSync(footerPath, 'utf8');
    if (content.includes('/does-foreclosure-of-loan-affect-cibil')) {
        console.log('✅ Footer contains the link');
    } else {
        console.error('❌ Footer link missing');
    }
}

function checkSitemap() {
    console.log('Checking Sitemap at:', sitemapPath);
    if (!fs.existsSync(sitemapPath)) {
        console.error('❌ Sitemap file does not exist');
        return;
    }
    const content = fs.readFileSync(sitemapPath, 'utf8');
    if (content.includes('/does-foreclosure-of-loan-affect-cibil')) {
        console.log('✅ Sitemap contains the link');
    } else {
        console.error('❌ Sitemap link missing');
    }
}

console.log('--- START VERIFICATION ---');
checkPage();
checkFooter();
checkSitemap();
console.log('--- END VERIFICATION ---');
