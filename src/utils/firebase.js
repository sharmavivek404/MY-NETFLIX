// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBb6QlUxlbNRRL28e79NnZntHGH6nA8jhU",
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