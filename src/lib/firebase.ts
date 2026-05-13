// lib/firebase.ts
import { initializeApp, getApps, getApp, FirebaseApp } from "firebase/app";
import { initializeFirestore, Firestore } from "firebase/firestore";
import { getAuth, Auth } from "firebase/auth";
import { getStorage, FirebaseStorage } from "firebase/storage";
import { Analytics } from "firebase/analytics";

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyCn8LHNtSycWOnhxlYn51Gblwt_fqF6yE8",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "amalegalsolutionss.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "amalegalsolutionss",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "amalegalsolutionss.firebasestorage.app",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "235592681981",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:235592681981:web:91bb26b058753a175d7194",
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || "G-3087BV48LQ",
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