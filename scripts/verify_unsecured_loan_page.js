const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/app/unsecured-personal-loan-definition/page.tsx');
const footerPath = path.join(__dirname, '../src/newcomp/Footer.tsx');
const sitemapPath = path.join(__dirname, '../src/app/sitemap.xml/route.ts');

async function verify() {
  console.log('--- Verifying Unsecured Personal Loan Definition Page ---');

  if (!fs.existsSync(filePath)) {
    console.error('❌ Page file does not exist:', filePath);
    return;
  }

  const content = fs.readFileSync(filePath, 'utf8');

  // 1. Word Count (at least 3000 words)
  const words = content.split(/\s+/).filter(w => w.length > 0).length;
  if (words < 3000) {
    console.warn(`⚠️ Word count is ${words}, which is less than 3000.`);
  } else {
    console.log(`✅ Word count: ${words}`);
  }

  // 2. Schema check (Article, FAQ, Review, Breadcrumbs)
  const schemas = ['Article', 'FAQPage', 'Product', 'BreadcrumbList'];
  schemas.forEach(schema => {
    if (content.includes(`"@type": "${schema}"`)) {
      console.log(`✅ Schema detected: ${schema}`);
    } else {
      console.error(`❌ Schema missing: ${schema}`);
    }
  });

  // 3. FAQ count (at least 10)
  const faqMatches = content.match(/question:/g) || [];
  if (faqMatches.length < 10) {
    console.error(`❌ FAQ count is ${faqMatches.length}, need at least 10.`);
  } else {
    console.log(`✅ FAQ count: ${faqMatches.length}`);
  }

  // 4. Review count (at least 5)
  // Check for review snippets in reviewSchema or UI
  const reviewMatches = (content.match(/@type": "Review"/g) || []).length;
  if (reviewMatches < 5) {
    console.error(`❌ Review count is ${reviewMatches}, need at least 5.`);
  } else {
    console.log(`✅ Review count: ${reviewMatches}`);
  }

  // 5. No em dashes
  if (content.includes('—')) {
    console.error('❌ Page contains em dashes (—).');
  } else {
    console.log('✅ No em dashes found.');
  }

  // 6. Footer link check
  if (fs.existsSync(footerPath)) {
    const footerContent = fs.readFileSync(footerPath, 'utf8');
    if (footerContent.includes('/unsecured-personal-loan-definition')) {
      console.log('✅ Page linked in footer.');
    } else {
      console.error('❌ Page not linked in footer.');
    }
  }

  // 7. Sitemap check
  if (fs.existsSync(sitemapPath)) {
    const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
    if (sitemapContent.includes('unsecured-personal-loan-definition')) {
      console.log('✅ Page added to sitemap.');
    } else {
      console.error('❌ Page missing from sitemap.');
    }
  }

  console.log('--- Verification Complete ---');
}

verify();
