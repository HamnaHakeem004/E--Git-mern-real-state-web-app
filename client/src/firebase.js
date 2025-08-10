// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-real-state-b8ad6.firebaseapp.com",
  projectId: "mern-real-state-b8ad6",
  storageBucket: "mern-real-state-b8ad6.firebasestorage.app",
  messagingSenderId: "352602508660",
  appId: "1:352602508660:web:1d8656ccc055a4e4873021"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);