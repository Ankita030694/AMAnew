// lib/firebase.js
import { initializeApp } from "firebase/app";
import { initializeFirestore, collection, addDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

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
const app = initializeApp(firebaseConfig);

// Initialize services with error handling
let db, auth, storage;

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
  storage = null; // Set to null if storage initialization fails
}

// Dynamically load Firebase Analytics on the client side
let analytics = null;
if (typeof window !== "undefined") {
  import("firebase/analytics")
    .then(({ getAnalytics }) => {
      analytics = getAnalytics(app);
    })
    .catch((error) => console.error("Error initializing analytics:", error));
}

// Helper function to check if storage is available
export const isStorageAvailable = () => storage !== null;

export { app, analytics, db, auth, storage, collection, addDoc };
