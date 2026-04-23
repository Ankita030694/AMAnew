const fs = require('fs');
const path = require('path');

const filePath = '/Users/amalegalsolutions/Desktop/AMAWORK/AMA/ama/src/app/can-debt-settlement-be-removed-from-credit-report/page.tsx';
const content = fs.readFileSync(filePath, 'utf8');

// Simple word count
const words = content.split(/\s+/).length;
console.log(`Word count: ${words}`);

// Check for em dashes
const emDashes = (content.match(/—/g) || []).length;
console.log(`Em dashes found: ${emDashes}`);

if (words < 3000) {
    console.log("Warning: Word count is less than 3000.");
} else {
    console.log("Word count is sufficient.");
}

if (emDashes > 0) {
    console.log("Warning: Em dashes found.");
} else {
    console.log("No em dashes found.");
}
