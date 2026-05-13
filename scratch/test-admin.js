const admin = require('firebase-admin');

try {
  admin.initializeApp({
    projectId: 'amalegal-app'
  });
  console.log('Admin initialized successfully');
  const db = admin.firestore();
  db.collection('articles').limit(1).get()
    .then(snapshot => {
      console.log('Fetch successful, count:', snapshot.size);
      process.exit(0);
    })
    .catch(err => {
      console.error('Fetch failed:', err.message);
      process.exit(1);
    });
} catch (err) {
  console.error('Initialization failed:', err.message);
  process.exit(1);
}
