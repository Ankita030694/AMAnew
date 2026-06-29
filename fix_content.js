const fs = require('fs');
const path = require('path');
const targetFile = path.join(__dirname, 'src', 'app', '(pages)', 'received-arbitration-notice-from-bank', 'page.tsx');

let content = fs.readFileSync(targetFile, 'utf8');

const boilerplate = " When you are facing intense financial pressure, it is incredibly easy to feel overwhelmed. The banking sector operates with massive resources, utilizing dedicated legal teams to enforce their claims. Borrowers often feel isolated, assuming they have no leverage against a massive financial institution. However, the law provides numerous protections, provided you act swiftly and decisively within the stipulated time frames. The legal framework surrounding debt recovery is complex, designed to balance the rights of the lender to recover their funds with the rights of the borrower against unfair practices. Understanding this balance is the first step toward reclaiming your financial independence. You must approach the situation methodically, utilizing every available legal tool to ensure your voice is heard and your rights are protected. Ignorance of the law is not a valid defense in arbitration proceedings. The arbitrator will proceed based on the evidence presented, and if you fail to present your side, the outcome is almost guaranteed to favor the bank. This emphasizes the critical need for proactive engagement and professional legal representation to navigate the intricate procedural requirements and substantive legal arguments necessary for a successful defense. Furthermore, the psychological toll of prolonged legal disputes can be immense. The uncertainty, the continuous correspondence, and the looming threat of asset attachment create a highly stressful environment. By taking immediate action and partnering with experienced legal professionals, you not only protect your financial assets but also safeguard your mental well-being, allowing you to focus on rebuilding your financial future.";

// Remove the boilerplate everywhere
let newContent = content.split(boilerplate).join('');

// Re-inject the boilerplate just once at the beginning of the first paragraph, if needed, or just let it be gone.
// Let's actually keep the first sentence of it in a few places to not break flow, or just remove it completely.
// Wait, the boilerplate was literally appended to the end of every paragraph.

fs.writeFileSync(targetFile, newContent);
console.log('Repetitive boilerplate removed.');
