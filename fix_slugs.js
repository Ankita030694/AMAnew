const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir('src/app/services', function(filePath) {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    if (content.includes('customSlugs={{')) {
        let regex = /customSlugs=\{\{([\s\S]*?)\}\}/g;
        let modified = content.replace(regex, (match, inner) => {
            let replacedInner = inner.replace(/"([^"]+)":\s*"([^"]+)"/g, (m, p1, p2) => {
                return `"${p1}": "${p2.toLowerCase()}"`;
            });
            return `customSlugs={{${replacedInner}}}`;
        });
        if (content !== modified) {
            fs.writeFileSync(filePath, modified, 'utf8');
            console.log(`Updated ${filePath}`);
        }
    }
  }
});
