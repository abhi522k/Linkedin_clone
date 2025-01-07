// Import required Firebase modules
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsk8VHr5XIcwC0jG_4hd8vcvYiWzsl_kI",
  authDomain: "linkedin-clone-69385.firebaseapp.com",
  projectId: "linkedin-clone-69385",
  storageBucket: "linkedin-clone-69385.firebasestorage.app",
  messagingSenderId: "765725560331",
  appId: "1:765725560331:web:a52ff2be52cc7a0c1a410e",
  measurementId: "G-H3DVVDTPVL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
