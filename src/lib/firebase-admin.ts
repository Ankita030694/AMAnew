import * as admin from 'firebase-admin';
import { getApps } from 'firebase-admin/app';

const firebaseAdminConfig = {
  projectId: process.env.FIREBASE_ADMIN_PROJECT_ID,
  clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
  privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY?.replace(/\\n/g, '\n'),
};

function initializeAdmin() {
  if (getApps().length === 0) {
    if (firebaseAdminConfig.privateKey && firebaseAdminConfig.clientEmail) {
      return admin.initializeApp({
        credential: admin.credential.cert({
          projectId: firebaseAdminConfig.projectId,
          clientEmail: firebaseAdminConfig.clientEmail,
          privateKey: firebaseAdminConfig.privateKey,
        }),
      });
    } else {
      // Fallback for environments with Application Default Credentials
      return admin.initializeApp({
        projectId: firebaseAdminConfig.projectId,
      });
    }
  }
  return admin.app();
}

const adminApp = initializeAdmin();
const adminDb = admin.firestore(adminApp);
const adminAuth = admin.auth(adminApp);
const adminStorage = admin.storage(adminApp);

export { adminDb, adminAuth, adminStorage, adminApp };
