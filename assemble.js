const fs = require('fs');
const path = require('path');

const pageDir = path.join(__dirname, 'src', 'app', 'legal-help-for-credit-card-recovery-harassment-in-india');
if (!fs.existsSync(pageDir)) {
  fs.mkdirSync(pageDir, { recursive: true });
}

const part1 = require('./part1.js');
const part2a = require('./part2a.js');
const part2b = require('./part2b.js');
const part2c = require('./part2c.js');
const part2d = require('./part2d.js');

const pageContent = part1 + part2a + part2b + part2c + part2d;

fs.writeFileSync(path.join(pageDir, 'page.tsx'), pageContent, 'utf8');
console.log("Page assembled successfully!");
