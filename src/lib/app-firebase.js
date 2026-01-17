// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyBSeECr8rLsXuiWXDujOLRDU8c3FiLF8fM",

  authDomain: "amalegal-app.firebaseapp.com",

  projectId: "amalegal-app",

  storageBucket: "amalegal-app.firebasestorage.app",

  messagingSenderId: "7012510059",

  appId: "1:7012510059:web:e2b76b8d0c2dcd62c5442e",

  measurementId: "G-24KPP0MLEN"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
import { getFirestore } from "firebase/firestore";
const db = getFirestore(app);

export { app, analytics, db };