const fs = require('fs');
const path = require('path');

const targetPage = path.join(__dirname, '../src/app/bank-loan-settlement-rules/page.tsx');

function verifyPage() {
    if (!fs.existsSync(targetPage)) {
        console.error('❌ Page file does not exist:', targetPage);
        return;
    }

    const content = fs.readFileSync(targetPage, 'utf-8');
    let errors = [];

    // 1. Check word count (approximate by counting words in strings)
    const wordCount = content.split(/\s+/).length;
    if (wordCount < 3000) {
        errors.push(`❌ Word count is too low: ${wordCount} words (minimum 3000 required)`);
    } else {
        console.log(`✅ Word count: ${wordCount}`);
    }

    // 2. Check for em dashes
    if (content.includes('—')) {
        errors.push('❌ Found em dashes (—) which are prohibited.');
    } else {
        console.log('✅ No em dashes found.');
    }

    // 3. Check for schemas
    const schemas = [
        'articleSchema',
        'faqSchema',
        'reviewSchema',
        'breadcrumbSchema'
    ];
    schemas.forEach(schema => {
        if (!content.includes(schema)) {
            errors.push(`❌ Missing schema: ${schema}`);
        } else {
            console.log(`✅ Found schema: ${schema}`);
        }
    });

    // 4. Check FAQ count
    const faqMatch = content.match(/question:/g);
    const faqCount = faqMatch ? faqMatch.length : 0;
    if (faqCount < 10) {
        errors.push(`❌ Too few FAQs: ${faqCount} (minimum 10 required)`);
    } else {
        console.log(`✅ FAQ count: ${faqCount}`);
    }

    // 5. Check Review count
    // Looking for review objects in reviewSchema or similar
    const reviewMatch = content.match(/@type": "Review"/g);
    const reviewCount = reviewMatch ? reviewMatch.length : 0;
    if (reviewCount < 5) {
        errors.push(`❌ Too few reviews: ${reviewCount} (minimum 5 required)`);
    } else {
        console.log(`✅ Review count: ${reviewCount}`);
    }

    // 6. Check for human-sounding content (AI check is subjective, but we can check for common AI phrases or just rely on our generation)
    // For now, just a placeholder for "quality check"
    console.log('ℹ️ Quality check: Manual review recommended for "human-sounding" requirement.');

    if (errors.length > 0) {
        console.log('\n--- DISCREPANCIES FOUND ---');
        errors.forEach(err => console.log(err));
    } else {
        console.log('\n✨ ALL CHECKS PASSED! ✨');
    }
}

verifyPage();
