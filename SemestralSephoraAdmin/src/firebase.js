// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9RueaUQjjPyGNpHHDIXiMinEcXPVcEA0",
  authDomain: "semestralsephora.firebaseapp.com",
  projectId: "semestralsephora",
  storageBucket: "semestralsephora.appspot.com",
  messagingSenderId: "579798289364",
  appId: "1:579798289364:web:07507d7da3e45ac1692441",
  measurementId: "G-B3BXCHF3T6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
