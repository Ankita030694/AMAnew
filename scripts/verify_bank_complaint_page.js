
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/app/bank-complaint-in-rbi/page.tsx');

function checkPage() {
    if (!fs.existsSync(filePath)) {
        console.error('❌ File not found at:', filePath);
        process.exit(1);
    }

    const content = fs.readFileSync(filePath, 'utf8');
    let errors = [];

    // 1. Word Count (Approximate by splitting whitespace)
    // Strip HTML/JSX tags for a better count
    const textContent = content.replace(/<[^>]*>?/gm, ' ');
    const wordCount = textContent.split(/\s+/).filter(word => word.length > 0).length;
    if (wordCount < 3000) {
        errors.push(`❌ Word count is too low: ${wordCount} (Required: 3000)`);
    } else {
        console.log(`✅ Word count: ${wordCount}`);
    }

    // 2. Schema Detection
    if (!content.includes('breadcrumbSchema')) errors.push('❌ Breadcrumb Schema missing');
    if (!content.includes('articleSchema')) errors.push('❌ Article Schema missing');
    if (!content.includes('faqSchema')) errors.push('❌ FAQ Schema missing');
    if (!content.includes('reviewSchema')) errors.push('❌ Review Schema missing');

    // 3. FAQ Count
    const faqMatches = content.match(/question:/g) || [];
    if (faqMatches.length < 10) {
        errors.push(`❌ FAQ count too low: ${faqMatches.length} (Required: 10)`);
    } else {
        console.log(`✅ FAQ count: ${faqMatches.length}`);
    }

    // 4. Review Snippet Count
    // Looking for @type: "Review"
    const reviewMatches = content.match(/"@type":\s*"Review"/g) || [];
    if (reviewMatches.length < 5) {
        errors.push(`❌ Review count too low: ${reviewMatches.length} (Required: 5)`);
    } else {
        console.log(`✅ Review count: ${reviewMatches.length}`);
    }

    // 5. Em Dashes
    if (content.includes('—') || content.includes('--')) {
        errors.push('❌ Em dashes (— or --) found in content');
    } else {
        console.log('✅ No em dashes found');
    }

    // 6. Target Keyword
    const keyword = "bank complaint in rbi";
    if (!content.toLowerCase().includes(keyword.toLowerCase())) {
        errors.push(`❌ Target keyword "${keyword}" not found`);
    } else {
        console.log(`✅ Target keyword "${keyword}" found`);
    }

    // 7. Human tone (Manual check usually, but we can look for "robotic" filler if we wanted, let's skip)

    if (errors.length > 0) {
        console.log('\n--- DISCREPANCIES FOUND ---');
        errors.forEach(err => console.log(err));
        process.exit(1);
    } else {
        console.log('\n✨ ALL CHECKS PASSED!');
    }
}

checkPage();
