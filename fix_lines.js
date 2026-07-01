const fs = require('fs');
const filePath = 'src/app/10-practical-steps-for-debt-solution/page.tsx';
const content = fs.readFileSync(filePath, 'utf-8');
const fixedContent = content.split('\n').map(line => {
  return line.replace(/^[0-9]+:\s?/, '');
}).join('\n');
fs.writeFileSync(filePath, fixedContent, 'utf-8');
console.log('Fixed line numbers in file.');
