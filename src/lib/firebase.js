"use client"
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBKBi-L0u48ZGX7oh1FzUfFqYa8UHJTo7c",
  authDomain: "lekhan-new.firebaseapp.com",
  projectId: "lekhan-new",
  storageBucket: "lekhan-new.firebasestorage.app",
  messagingSenderId: "500993298331",
  appId: "1:500993298331:web:bf632bad9e51b49e441b3e",
  measurementId: "G-E54B48RV78"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app); // Firestore for database
export const auth = getAuth(app);    // Authentication
export const storage = getStorage(app); // Storage for videos

