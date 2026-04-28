const fs = require('fs');
const path = require('path');

const filePath = '/Users/amalegalsolutions/Desktop/AMAWORK/AMA/ama/src/app/notice-for-for-dishonoured-cheque/page.tsx';
const content = fs.readFileSync(filePath, 'utf8');

// Count words in the prose sections (approximate)
// We look at text within <p> tags or just the whole file and subtract code
const wordCount = content.split(/\s+/).length;

console.log('Total Word Count (including code):', wordCount);

// More accurate word count for the actual text content
const textOnly = content.replace(/<[^>]*>/g, ' ').replace(/\{[^}]*\}/g, ' ');
const actualWordCount = textOnly.split(/\s+/).filter(w => w.length > 0).length;

console.log('Estimated Content Word Count:', actualWordCount);

// Check for em dashes
const emDashes = content.match(/\u2014/g);
if (emDashes) {
    console.log('Found em dashes:', emDashes.length);
} else {
    console.log('No em dashes found.');
}

// Check for double for in title/url/keywords
const doubleFor = content.match(/for for/g);
console.log('Occurrences of "for for":', doubleFor ? doubleFor.length : 0);
