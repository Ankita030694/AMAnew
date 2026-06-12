const fs = require('fs');
const path = require('path');

const baseDir = '/Users/amalegalsolutions/Desktop/AMAWORK/AMA/ama/src/app';
const folders = [
  'arbitration-for-rbl-bank',
  'arbitration-for-bajaj-bank',
  'arbitration-for-icici-bank',
  'arbitration-for-kotak-mahindra-bank',
  'arbitration-for-idfc-bank',
  'arbitration-for-hdfc-bank',
  'arbitration-for-axis-bank',
  'arbitration-for-yes-bank',
  'arbitration-for-sbi-bank'
];

console.log('Comparing pages for similarity...\n');

// Read files
const contents = {};
folders.forEach(f => {
  const filePath = path.join(baseDir, f, 'page.tsx');
  if (fs.existsSync(filePath)) {
    contents[f] = fs.readFileSync(filePath, 'utf8');
  } else {
    console.log(`Warning: File not found: ${filePath}`);
  }
});

const activeFolders = Object.keys(contents);

// Compare function: Jaccard similarity of words
function getWords(text) {
  // Strip code syntax like imports, consts, markup tags etc. to analyze main text
  // Let's strip standard code keywords, tags, curly braces
  const clean = text
    .replace(/<\/?[a-zA-Z]+[^>]*>/g, ' ') // remove HTML tags
    .replace(/\{[^}]*\}/g, ' ') // remove curly brace blocks
    .replace(/import\s+.*?\s+from\s+['"].*?['"];?/g, ' ') // remove imports
    .replace(/const\s+.*?\s*=\s*\[[\s\S]*?\];/g, ' ') // remove schemas/arrays if needed, but let's keep them if they are part of content
    .toLowerCase();
  
  return clean.match(/[a-z0-9]+/gi) || [];
}

const wordLists = {};
activeFolders.forEach(f => {
  wordLists[f] = getWords(contents[f]);
});

console.log('Word counts (approximate clean text):');
activeFolders.forEach(f => {
  console.log(`- ${f}: ${wordLists[f].length} words`);
});
console.log('\n--- Cross Similarity Matrix (Jaccard Similarity %) ---');

// Print table header
console.log(''.padEnd(40) + activeFolders.map(f => f.replace('arbitration-for-', '').substring(0, 8).padEnd(10)).join(' '));

activeFolders.forEach(f1 => {
  const row = [f1.replace('arbitration-for-', '').substring(0, 15).padEnd(40)];
  const set1 = new Set(wordLists[f1]);
  
  activeFolders.forEach(f2 => {
    const set2 = new Set(wordLists[f2]);
    const intersection = new Set([...set1].filter(x => set2.has(x)));
    const union = new Set([...set1, ...set2]);
    const similarity = (intersection.size / union.size) * 100;
    row.push(similarity.toFixed(1) + '%');
  });
  console.log(row.map((val, idx) => idx === 0 ? val : val.padStart(10)).join(' '));
});

// Detailed line-by-line structural check
console.log('\nChecking line-by-line structure similarity between RBL and Bajaj...');
const rblLines = contents['arbitration-for-rbl-bank'].split('\n').map(l => l.trim()).filter(l => l.length > 5);
const bajajLines = contents['arbitration-for-bajaj-bank'].split('\n').map(l => l.trim()).filter(l => l.length > 5);

let matchedLines = 0;
rblLines.forEach(l => {
  // Check if this line exists in Bajaj with bank/entity name replaced
  // Standardize by replacing company/bank names
  const std = l
    .replace(/rbl/gi, 'PLACEHOLDER')
    .replace(/bajaj/gi, 'PLACEHOLDER')
    .replace(/icici/gi, 'PLACEHOLDER')
    .replace(/kotak/gi, 'PLACEHOLDER')
    .replace(/idfc/gi, 'PLACEHOLDER')
    .replace(/hdfc/gi, 'PLACEHOLDER')
    .replace(/axis/gi, 'PLACEHOLDER')
    .replace(/yes/gi, 'PLACEHOLDER')
    .replace(/sbi/gi, 'PLACEHOLDER');
    
  const found = bajajLines.some(bl => {
    const stdBl = bl
      .replace(/rbl/gi, 'PLACEHOLDER')
      .replace(/bajaj/gi, 'PLACEHOLDER')
      .replace(/icici/gi, 'PLACEHOLDER')
      .replace(/kotak/gi, 'PLACEHOLDER')
      .replace(/idfc/gi, 'PLACEHOLDER')
      .replace(/hdfc/gi, 'PLACEHOLDER')
      .replace(/axis/gi, 'PLACEHOLDER')
      .replace(/yes/gi, 'PLACEHOLDER')
      .replace(/sbi/gi, 'PLACEHOLDER');
    return std === stdBl;
  });
  
  if (found) matchedLines++;
});

const percentLineMatch = (matchedLines / rblLines.length) * 100;
console.log(`Line Match (after bank name normalization): ${percentLineMatch.toFixed(1)}% (${matchedLines}/${rblLines.length} lines match exactly)`);
