import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const APP_DIR = path.resolve(__dirname, '../src/app');
const SRC_DIR = path.resolve(__dirname, '../src');
const PUBLIC_DIR = path.resolve(__dirname, '../public');

function getValidRoutes(dir, baseRoute = '') {
    if (!fs.existsSync(dir)) return [];
    let routes = [];
    const files = fs.readdirSync(dir);

    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            routes = routes.concat(getValidRoutes(fullPath, `${baseRoute}/${file}`));
        } else if (file === 'page.tsx' || file === 'route.ts') {
            routes.push(baseRoute === '' ? '/' : baseRoute);
        }
    }
    return routes;
}

function isRouteValid(href, validRoutes) {
    // Ignore external/protocol-relative links
    if (href.startsWith('//') || href.startsWith('http')) return true;
    
    // Ignore dynamic template strings like /path/${var}
    if (href.includes('${')) return true;

    // Remove query params and hashes
    const cleanHref = href.split('?')[0].split('#')[0].replace(/\/$/, '') || '/';

    for (const route of validRoutes) {
        // Exact match
        if (route === cleanHref) return true;

        // Handle dynamic routes like [slug]
        const routeRegex = route
            .replace(/\[\.\.\.[^\]]+\]/g, '.*') 
            .replace(/\[[^\]]+\]/g, '[^/]+')    
            .replace(/\//g, '\\/');
        
        const regex = new RegExp(`^${routeRegex}$`);
        if (regex.test(cleanHref)) return true;
    }

    return false;
}

function findLinksInFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const links = [];
    
    // Match href="/..." or href='/...' or href={`/...`}
    const regex = /href=(?:["'](\/[^"']*)["']|{[`'](\/[^`']*)[`']})/g;
    let match;
    while ((match = regex.exec(content)) !== null) {
        links.push(match[1] || match[2]);
    }

    // Match hardcoded strings in relatedPages arrays or similar structures
    const jsonRegex = /["']href["']\s*:\s*["'](\/[^"']*)["']/g;
    while ((match = jsonRegex.exec(content)) !== null) {
        links.push(match[1]);
    }

    return links;
}

function scanFiles(dir, callback) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            if (file !== 'node_modules' && file !== '.next') {
                scanFiles(fullPath, callback);
            }
        } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
            callback(fullPath);
        }
    }
}

console.log('Building route map...');
const validRoutes = getValidRoutes(APP_DIR);
console.log(`Found ${validRoutes.length} valid routes.`);

const brokenLinks = [];

console.log('Scanning files for links...');
scanFiles(SRC_DIR, (filePath) => {
    const links = findLinksInFile(filePath);
    for (const link of links) {
        if (!isRouteValid(link, validRoutes)) {
            // Check for public assets
            const publicPath = path.join(PUBLIC_DIR, link.startsWith('/') ? link.slice(1) : link);
            if (fs.existsSync(publicPath)) continue;

            brokenLinks.push({ file: path.relative(SRC_DIR, filePath), link });
        }
    }
});

if (brokenLinks.length > 0) {
    console.log('\nFound Broken Links:');
    const uniqueBroken = Array.from(new Set(brokenLinks.map(b => JSON.stringify(b)))).map(s => JSON.parse(s));
    uniqueBroken.sort((a, b) => a.file.localeCompare(b.file));
    uniqueBroken.forEach(b => {
        console.log(`- ${b.link} (in ${b.file})`);
    });
} else {
    console.log('\nNo broken internal links found!');
}
