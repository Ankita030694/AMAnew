const fs = require('fs');
const content = fs.readFileSync('src/app/default-loan-settlement-in-india/page.tsx', 'utf8');

// Strip out HTML tags, script content, etc.
const textOnly = content
  .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
  .replace(/<[^>]+>/g, " ")
  .replace(/\s+/g, " ")
  .trim();

const words = textOnly.split(" ").filter(w => w.length > 0);
console.log("Approximate word count: " + words.length);
