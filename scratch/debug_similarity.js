const fs = require('fs');
const path = require('path');

const baseDir = '/Users/amalegalsolutions/Desktop/AMAWORK/AMA/ama/src/app';
const f1 = 'arbitration-for-bajaj-bank';
const f2 = 'arbitration-for-icici-bank';

const c1 = fs.readFileSync(path.join(baseDir, f1, 'page.tsx'), 'utf8');
const c2 = fs.readFileSync(path.join(baseDir, f2, 'page.tsx'), 'utf8');

function getWords(text) {
  const clean = text
    .replace(/<\/?[a-zA-Z]+[^>]*>/g, ' ')
    .replace(/\{[^}]*\}/g, ' ')
    .replace(/import\s+.*?\s+from\s+['"].*?['"];?/g, ' ')
    .toLowerCase();
  
  return clean.match(/[a-z0-9]+/gi) || [];
}

const w1 = getWords(c1);
const w2 = getWords(c2);

const set1 = new Set(w1);
const set2 = new Set(w2);

const intersection = [...set1].filter(x => set2.has(x));
console.log(`Words in RBL: ${set1.size}`);
console.log(`Words in Bajaj: ${set2.size}`);
console.log(`Shared words count: ${intersection.length}`);
console.log(`Jaccard similarity: ${(intersection.length / new Set([...set1, ...set2]).size * 100).toFixed(2)}%`);
console.log('Top 100 Shared words:', intersection.sort().slice(0, 100));
