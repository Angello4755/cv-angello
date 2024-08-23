import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc, addDoc, getDocs } from "firebase/firestore"; 

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "cv-angello",
    storageBucket: "cv-angello.appspot.com",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

console.log("Firebase configurado");

export { db, doc, getDoc, setDoc, addDoc, getDocs };