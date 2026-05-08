const fs = require('fs');
const path = require('path');

const pagePath = path.join(__dirname, 'src/app/loan-moratorium-meaning/page.tsx');
const footerPath = path.join(__dirname, 'src/newcomp/Footer.tsx');
const sitemapPath = path.join(__dirname, 'src/app/sitemap.xml/route.ts');

function checkPage() {
    console.log('Checking page existence...');
    if (!fs.existsSync(pagePath)) {
        console.error('❌ Page not found at ' + pagePath);
        return false;
    }
    console.log('✅ Page exists.');

    const content = fs.readFileSync(pagePath, 'utf8');

    // Word count check (rough estimation by splitting spaces)
    const bodyContentMatch = content.match(/<section[^>]*>([\s\S]*?)<\/section>/g);
    let totalWords = 0;
    if (bodyContentMatch) {
        bodyContentMatch.forEach(section => {
            const text = section.replace(/<[^>]*>/g, ' ');
            totalWords += text.trim().split(/\s+/).length;
        });
    }
    console.log(`Word count check: ~${totalWords} words.`);
    if (totalWords < 3000) {
        console.error('❌ Word count is less than 3000.');
    } else {
        console.log('✅ Word count is 3000+.');
    }

    // FAQ check
    const faqMatch = content.match(/const faqs = \[([\s\S]*?)\];/);
    if (faqMatch) {
        const faqs = eval('[' + faqMatch[1] + ']');
        console.log(`FAQ count: ${faqs.length}`);
        if (faqs.length < 10) {
            console.error('❌ Less than 10 FAQs found.');
        } else {
            console.log('✅ 10+ FAQs found.');
        }
    } else {
        console.error('❌ FAQ array not found.');
    }

    // Review check
    const reviewMatch = content.match(/const reviewSchema = \{([\s\S]*?)\};/);
    if (reviewMatch) {
        const reviewsCount = (content.match(/@type": "Review"/g) || []).length;
        console.log(`Review count: ${reviewsCount}`);
        if (reviewsCount < 5) {
            console.error('❌ Less than 5 reviews found.');
        } else {
            console.log('✅ 5+ reviews found.');
        }
    } else {
        console.error('❌ Review schema not found.');
    }

    // Schema checks
    const schemas = ['Article', 'FAQPage', 'Product', 'BreadcrumbList'];
    schemas.forEach(schema => {
        if (content.includes(`"@type": "${schema}"`)) {
            console.log(`✅ Schema found: ${schema}`);
        } else {
            console.error(`❌ Schema missing: ${schema}`);
        }
    });

    // Em dash check
    if (content.includes('—')) {
        console.error('❌ Page contains em dashes (—).');
    } else {
        console.log('✅ No em dashes found.');
    }

    // Crawler friendliness (Semantic HTML)
    const semanticElements = ['<h1', '<h2', '<h3', '<section', '<p', '<table'];
    semanticElements.forEach(el => {
        if (content.includes(el)) {
            console.log(`✅ Semantic element found: ${el}`);
        } else {
            console.warn(`⚠️ Semantic element might be missing: ${el}`);
        }
    });

    return true;
}

function checkFooter() {
    console.log('Checking Footer integration...');
    if (!fs.existsSync(footerPath)) {
        console.error('❌ Footer not found.');
        return;
    }
    const footerContent = fs.readFileSync(footerPath, 'utf8');
    if (footerContent.includes('/loan-moratorium-meaning')) {
        console.log('✅ Footer link found.');
    } else {
        console.error('❌ Footer link missing.');
    }
}

function checkSitemap() {
    console.log('Checking Sitemap integration...');
    if (!fs.existsSync(sitemapPath)) {
        console.error('❌ Sitemap not found.');
        return;
    }
    const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
    if (sitemapContent.includes('loan-moratorium-meaning')) {
        console.log('✅ Sitemap entry found.');
    } else {
        console.error('❌ Sitemap entry missing.');
    }
}

console.log('--- Verification Started ---');
checkPage();
checkFooter();
checkSitemap();
console.log('--- Verification Finished ---');
