// lib/firebase.ts
import { initializeApp, FirebaseApp } from "firebase/app";
import { getFirestore, collection, addDoc, Firestore } from "firebase/firestore";
import { getAuth, Auth } from "firebase/auth";
import { getStorage, FirebaseStorage } from "firebase/storage";
import { Analytics } from "firebase/analytics";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCn8LHNtSycWOnhxlYn51Gblwt_fqF6yE8",
  authDomain: "amalegalsolutionss.firebaseapp.com",
  projectId: "amalegalsolutionss",
  storageBucket: "amalegalsolutionss.firebasestorage.app",
  messagingSenderId: "235592681981",
  appId: "1:235592681981:web:91bb26b058753a175d7194",
  measurementId: "G-3087BV48LQ",
};

// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig);

// Initialize services with error handling
let db: Firestore;
let auth: Auth;
let storage: FirebaseStorage;

try {
  db = getFirestore(app);
  auth = getAuth(app);
  storage = getStorage(app);
} catch (error) {
  console.error("Error initializing Firebase services:", error);
  // Fallback - still export db and auth even if storage fails
  db = getFirestore(app);
  auth = getAuth(app);
  // Re-throw the error for storage since it's critical
  throw new Error(`Failed to initialize Firebase Storage: ${error}`);
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