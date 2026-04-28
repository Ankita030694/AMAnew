const fs = require('fs');
const path = require('path');

const filePath = '/Users/amalegalsolutions/Desktop/AMAWORK/AMA/ama/src/app/notice-for-recovery-of-unpaid-salary/page.tsx';
const content = fs.readFileSync(filePath, 'utf8');

// Simple word count (approximated for JSX content)
const words = content.split(/\s+/).length;
console.log(`Word Count (approx): ${words}`);

// Check for em dashes
const emDashRegex = /—/g;
const emDashMatches = content.match(emDashRegex);
if (emDashMatches) {
    console.log(`Found ${emDashMatches.length} em dashes!`);
} else {
    console.log('No em dashes found.');
}
