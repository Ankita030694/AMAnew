// lib/firebase.ts
import { initializeApp, FirebaseApp } from "firebase/app";
import { initializeFirestore, collection, addDoc, Firestore } from "firebase/firestore";
import { getAuth, Auth } from "firebase/auth";
import { getStorage, FirebaseStorage } from "firebase/storage";
import { Analytics } from "firebase/analytics";

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY || "AIzaSyCn8LHNtSycWOnhxlYn51Gblwt_fqF6yE8",
  authDomain: process.env.FIREBASE_AUTH_DOMAIN || "amalegalsolutionss.firebaseapp.com",
  projectId: process.env.FIREBASE_PROJECT_ID || "amalegalsolutionss",
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET || "amalegalsolutionss.firebasestorage.app",
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID || "235592681981",
  appId: process.env.FIREBASE_APP_ID || "1:235592681981:web:91bb26b058753a175d7194",
  measurementId: process.env.FIREBASE_MEASUREMENT_ID || "G-3087BV48LQ",
};

// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig);

// Initialize services with error handling
let db: Firestore;
let auth: Auth;
let storage: FirebaseStorage | null;

try {
  db = initializeFirestore(app, {
    experimentalForceLongPolling: true,
  });
  auth = getAuth(app);
  storage = getStorage(app);
} catch (error) {
  console.error("Error initializing Firebase services:", error);
  // Fallback - still export db and auth even if storage fails
  db = initializeFirestore(app, {
    experimentalForceLongPolling: true,
  });
  auth = getAuth(app);
  storage = null;
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

export { app, analytics, db, auth, storage, collection, addDoc }; 