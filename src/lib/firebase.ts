// lib/firebase.ts
import { initializeApp, getApps, getApp, FirebaseApp } from "firebase/app";
import { initializeFirestore, Firestore } from "firebase/firestore";
import { getAuth, Auth } from "firebase/auth";
import { getStorage, FirebaseStorage } from "firebase/storage";
import { Analytics } from "firebase/analytics";

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.WEBSITE_FIREBASE_API_KEY,
  authDomain: process.env.WEBSITE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.WEBSITE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.WEBSITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.WEBSITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.WEBSITE_FIREBASE_APP_ID,
  measurementId: process.env.WEBSITE_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app: FirebaseApp = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

// Initialize Firestore with long polling to avoid gRPC issues in some environments (like SSR/Next.js)
const db: Firestore = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});

const auth: Auth = getAuth(app);

// Storage can sometimes fail to initialize in certain environments, so we handle it gracefully
let storage: FirebaseStorage | null = null;
try {
  storage = getStorage(app);
} catch (error) {
  console.error("Error initializing Firebase Storage:", error);
}

// Dynamically load Firebase Analytics on the client side
let analytics: Analytics | null = null;
if (typeof window !== "undefined") {
  import("firebase/analytics")
    .then(({ getAnalytics }) => {
      analytics = getAnalytics(app);
    })
    .catch((error) => console.error("Error initializing analytics:", error));
}

// Helper function to check if storage is available
export const isStorageAvailable = (): boolean => storage !== null;

export { app, analytics, db, auth, storage }; 