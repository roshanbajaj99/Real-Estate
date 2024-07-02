// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-app-ab2d4.firebaseapp.com",
  projectId: "blog-app-ab2d4",
  storageBucket: "blog-app-ab2d4.appspot.com",
  messagingSenderId: "473845338758",
  appId: "1:473845338758:web:6fd59ea40f9f7d1c38b707",
  measurementId: "G-PRR0RYD6ZN"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);