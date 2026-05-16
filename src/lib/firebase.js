// lib/firebase.js
import { initializeApp } from "firebase/app";
import { initializeFirestore, collection, addDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

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
