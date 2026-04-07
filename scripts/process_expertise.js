const fs = require('fs');

const rawText = fs.readFileSync('./raw_expertise.txt', 'utf-8');
const lines = rawText.split('\n');

const expertiseSet = new Set();
const prefix = "Best Advocate | Best Lawyers for ";

for (let line of lines) {
  let cleaned = line.trim();
  if (!cleaned) continue;
  
  if (cleaned.startsWith(prefix)) {
    cleaned = cleaned.slice(prefix.length).trim();
  }
  
  // Capitalize first letter for consistency
  if (cleaned.length > 0) {
    cleaned = cleaned.charAt(0).toUpperCase() + cleaned.slice(1);
  }

  expertiseSet.add(cleaned);
}

const expertiseArray = Array.from(expertiseSet).sort();
console.log(`Found ${expertiseArray.length} unique expertise areas after prefix stripping.`);

fs.writeFileSync('./src/app/lawyer-by-expertise/expertiseData.json', JSON.stringify(expertiseArray, null, 2));

console.log('Saved clean data to src/app/lawyer-by-expertise/expertiseData.json');
