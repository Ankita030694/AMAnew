const fs = require('fs');
const content = fs.readFileSync('/Users/amalegalsolutions/Desktop/AMAWORK/AMA/ama/src/app/what-are-the-best-loan-settlement-services-near-me/page.tsx', 'utf8');

// Strip out JSX tags and just get the text
const text = content.replace(/<[^>]*>/g, ' ').replace(/\{[\s\S]*?\}/g, ' ');
const words = text.split(/\s+/).filter(w => w.length > 0);

console.log('Word count (approx):', words.length);

const emDashes = (content.match(/—/g) || []).length;
console.log('Em dashes found:', emDashes);
