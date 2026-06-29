const fs = require('fs');

const fileContent = fs.readFileSync('src/app/what-to-do-after-receiving-arbitration-notice-from-bank/page.tsx', 'utf-8');
const scriptRegex = /<script\s+type="application\/ld\+json"\s+dangerouslySetInnerHTML=\{\{\s*__html:\s*JSON\.stringify\(([\s\S]*?)\)\s*\}\}\s*\/>/g;

let match;
let count = 0;
while ((match = scriptRegex.exec(fileContent)) !== null) {
    try {
        // Evaluate the javascript object
        const schemaString = match[1];
        const schema = eval(`(${schemaString})`);
        if (schema && typeof schema === 'object') {
            console.log(`Schema ${count + 1} is valid:`, schema['@type']);
        } else {
            console.error(`Schema ${count + 1} is not a valid object`);
        }
    } catch (e) {
        console.error(`Schema ${count + 1} is invalid. Error:`, e.message);
    }
    count++;
}
if (count === 0) {
    console.log("No schemas found.");
}
