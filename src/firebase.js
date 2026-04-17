// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDr18KNbW_JI16mkDaFVOHH1AGPiifFWQg",
  authDomain: "reacthospital-ac608.firebaseapp.com",
  projectId: "reacthospital-ac608",
  storageBucket: "reacthospital-ac608.firebasestorage.app",
  messagingSenderId: "177993976687",
  appId: "1:177993976687:web:b5991475fe6e9f81b7769a",
  measurementId: "G-JDLF269F57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);