import { adminDb } from './src/lib/firebase-admin';

async function countBlogs() {
    try {
        const snapshot = await adminDb.collection('blogs').get();
        console.log(`Total blogs in database: ${snapshot.size}`);
        process.exit(0);
    } catch (error) {
        console.error("Error:", error);
        process.exit(1);
    }
}

countBlogs();
