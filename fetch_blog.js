const admin = require('firebase-admin');
const fs = require('fs');

const envContent = fs.readFileSync('/Users/amalegalsolutions/Desktop/AMAWORK/AMA/ama/.env', 'utf-8');
const env = {};
envContent.split('\n').forEach(line => {
    const match = line.match(/^([^=]+)=(.*)$/);
    if (match) {
        env[match[1]] = match[2];
    }
});

const firebaseAdminConfig = {
  projectId: env['FIREBASE_ADMIN_PROJECT_ID'],
  clientEmail: env['FIREBASE_ADMIN_CLIENT_EMAIL'],
  privateKey: env['FIREBASE_ADMIN_PRIVATE_KEY']?.replace(/\\n/g, '\n').replace(/"/g, ''),
};

if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(firebaseAdminConfig)
    });
}

const db = admin.firestore();

async function fetchBlog() {
    try {
        const querySnapshot = await db.collection("blogs").where("slug", "==", "sbi-credit-card-settlement-process").limit(1).get();
        if (querySnapshot.empty) {
            console.log("No blog found for sbi-credit-card-settlement-process");
        } else {
            const doc = querySnapshot.docs[0];
            const data = doc.data();
            fs.writeFileSync('/Users/amalegalsolutions/.gemini/antigravity/brain/18af195e-68c7-4f71-9ad0-4c51cfe20f6e/scratch/sbi_blog.json', JSON.stringify(data, null, 2));
            console.log("Blog written to sbi_blog.json. Title:", data.title);
            
            // Fetch faqs
            const faqsSnapshot = await doc.ref.collection("faqs").get();
            const faqs = faqsSnapshot.docs.map(f => f.data());
            fs.writeFileSync('/Users/amalegalsolutions/.gemini/antigravity/brain/18af195e-68c7-4f71-9ad0-4c51cfe20f6e/scratch/sbi_faqs.json', JSON.stringify(faqs, null, 2));
            console.log("Fetched", faqs.length, "faqs");
        }
    } catch (e) {
        console.error(e);
    }
}
fetchBlog();
