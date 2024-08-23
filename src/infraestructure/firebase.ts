import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc, addDoc, getDocs } from "firebase/firestore"; 

const firebaseConfig = {
    apiKey: "AIzaSyCr5PLi-dUdnZWKl6ILwWHFPsQzJEBIun4",
    authDomain: "cv-angello.firebaseapp.com",
    projectId: "cv-angello",
    storageBucket: "cv-angello.appspot.com",
    messagingSenderId: "244403857618",
    appId: "1:244403857618:web:721a9f7118a67c6ed2e50b",
    measurementId: "G-WX7TZTVBQ3"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

console.log("Firebase configurado");

export { db, doc, getDoc, setDoc, addDoc, getDocs };