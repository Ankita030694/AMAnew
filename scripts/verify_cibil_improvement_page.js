const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/app/how-to-improve-cibil-score-after-loan-settlement/page.tsx');
const footerPath = path.join(__dirname, '../src/newcomp/Footer.tsx');
const sitemapPath = path.join(__dirname, '../sitemap_full.xml');

async function verify() {
  console.log('--- Verifying Page: /how-to-improve-cibil-score-after-loan-settlement ---');

  if (!fs.existsSync(filePath)) {
    console.error('❌ Page file not found!');
    return;
  }

  const content = fs.readFileSync(filePath, 'utf8');

  // 1. Word Count (Approximate by splitting spaces)
  const wordCount = content.split(/\s+/).length;
  console.log(`Word Count: ${wordCount}`);
  if (wordCount < 3000) {
    console.warn('⚠️ Word count is less than 3000 words.');
  } else {
    console.log('✅ Word count is 3000+ words.');
  }

  // 2. Schema Detection
  const schemas = ['breadcrumbSchema', 'articleSchema', 'faqSchema', 'reviewSchema'];
  schemas.forEach(schema => {
    if (content.includes(schema)) {
      console.log(`✅ Schema detected: ${schema}`);
    } else {
      console.error(`❌ Schema missing: ${schema}`);
    }
  });

  // 3. FAQ Count
  const faqMatch = content.match(/question:/g);
  const faqCount = faqMatch ? faqMatch.length : 0;
  console.log(`FAQ Count: ${faqCount}`);
  if (faqCount < 10) {
    console.error('❌ FAQ count is less than 10.');
  } else {
    console.log('✅ FAQ count is 10+.');
  }

  // 4. Review Count
  const reviewMatch = content.match(/reviewRating/g);
  const reviewCount = reviewMatch ? reviewMatch.length : 0;
  console.log(`Review Count: ${reviewCount}`);
  if (reviewCount < 5) {
    console.error('❌ Review count is less than 5.');
  } else {
    console.log('✅ Review count is 5+.');
  }

  // 5. No Em Dashes (—)
  if (content.includes('—')) {
    console.error('❌ Em dashes found in the content.');
  } else {
    console.log('✅ No em dashes found.');
  }

  // 6. Footer Link
  if (fs.existsSync(footerPath)) {
    const footerContent = fs.readFileSync(footerPath, 'utf8');
    if (footerContent.includes('/how-to-improve-cibil-score-after-loan-settlement')) {
      console.log('✅ Link found in footer.');
    } else {
      console.error('❌ Link missing in footer.');
    }
  }

  // 7. Sitemap Check
  if (fs.existsSync(sitemapPath)) {
    const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
    if (sitemapContent.includes('/how-to-improve-cibil-score-after-loan-settlement')) {
      console.log('✅ Page found in sitemap.');
    } else {
      console.error('❌ Page missing in sitemap.');
    }
  }

  console.log('--- Verification Complete ---');
}

verify();
