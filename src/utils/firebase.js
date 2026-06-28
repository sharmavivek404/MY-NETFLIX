// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "my-netflix-8998a.firebaseapp.com",
  projectId: "my-netflix-8998a",
  storageBucket: "my-netflix-8998a.firebasestorage.app",
  messagingSenderId: "835875958570",
  appId: "1:835875958570:web:e032074ec71e84d02af853",
  measurementId: "G-QRT8GQ79E5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();