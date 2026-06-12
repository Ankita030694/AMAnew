const fs = require('fs');
const path = require('path');

const filePath = '/Users/amalegalsolutions/Desktop/AMAWORK/AMA/ama/src/app/arbitration-for-yes-bank/page.tsx';
const content = fs.readFileSync(filePath, 'utf8');

function getWords(text) {
  const clean = text
    .replace(/<\/?[a-zA-Z]+[^>]*>/g, ' ')
    .replace(/\{[^}]*\}/g, ' ')
    .replace(/import\s+.*?\s+from\s+['"].*?['"];?/g, ' ')
    .toLowerCase();
  
  return clean.match(/[a-z0-9]+/gi) || [];
}

const words = getWords(content);
const set = new Set(words);
console.log('Unique words size:', set.size);
console.log('Words list (sorted):');
console.log(Array.from(set).sort().join(', '));
