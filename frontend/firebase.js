// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "food-delivery-fdb44.firebaseapp.com",
  projectId: "food-delivery-fdb44",
  storageBucket: "food-delivery-fdb44.firebasestorage.app",
  messagingSenderId: "603614680802",
  appId: "1:603614680802:web:4a033092658a3aba3a30bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app);

export {app,auth};