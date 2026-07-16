import fs from 'fs';
import path from 'path';

const pagePath = path.join(__dirname, '../src/app/who-is-considered-as-willfull-defaulter/page.tsx');
const pageContent = fs.readFileSync(pagePath, 'utf8');

console.log("=== Tester 1: Em Dash Integrity ===");
const emDashMatch = pageContent.match(/—|--/);
if (emDashMatch) {
  console.log("❌ FAILED: Em dash or double hyphen found!");
} else {
  console.log("✅ PASSED: No em dashes or double hyphens found.");
}

console.log("\n=== Tester 2: HTML Output and Semantic Integrity ===");
if (pageContent.includes('<main') && pageContent.includes('<article') && pageContent.includes('<section')) {
  console.log("✅ PASSED: Semantic HTML tags <main>, <article>, and <section> are used.");
} else {
  console.log("❌ FAILED: Missing semantic HTML tags.");
}

console.log("\n=== Tester 4: Section Formatting ===");
if (pageContent.includes('Red Flags') || pageContent.includes('Comparison') || pageContent.includes('Eligibility')) {
  console.log("✅ PASSED: Required section formats (Red Flags/Comparison/Eligibility) found.");
} else {
  console.log("❌ FAILED: Required section formats missing.");
}

console.log("\n=== Tester 5 & 6: Footer and Header Link ===");
const directoryPath = path.join(__dirname, '../src/app/directory/page.tsx');
const directoryContent = fs.readFileSync(directoryPath, 'utf8');
if (directoryContent.includes('/who-is-considered-as-willfull-defaulter')) {
  console.log("✅ PASSED: Page is linked in directoryLinks.");
} else {
  console.log("❌ FAILED: Page missing from directoryLinks.");
}

const footerPath = path.join(__dirname, '../src/newcomp/Footer.tsx');
const footerContent = fs.readFileSync(footerPath, 'utf8');
if (footerContent.includes('/who-is-considered-as-willfull-defaulter')) {
  console.log("✅ PASSED: Page is linked in footer.");
} else {
  console.log("❌ FAILED: Page missing from footer.");
}

console.log("\n=== Tester 7: Meta Information Check ===");
if (pageContent.includes('export const metadata') && pageContent.includes('title:') && pageContent.includes('description:')) {
  console.log("✅ PASSED: Metadata exported.");
} else {
  console.log("❌ FAILED: Missing metadata.");
}

console.log("\n=== Tester 8: Missing File Check ===");
if (pageContent.includes('/anujbhiya.png')) {
  console.log("✅ PASSED: Author image referenced correctly.");
} else {
  console.log("❌ FAILED: Author image reference missing.");
}

console.log("\n=== Tester 9: Schema Check ===");
if (pageContent.includes('application/ld+json') && pageContent.includes('FAQPage') && pageContent.includes('Article') && pageContent.includes('BreadcrumbList')) {
  console.log("✅ PASSED: All required schemas found.");
} else {
  console.log("❌ FAILED: Schemas missing.");
}
