// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbSHd-1rjaLPK-dkaDHkm2TcvIdWbsq2o",
  authDomain: "flower-style.firebaseapp.com",
  projectId: "flower-style",
  storageBucket: "flower-style.appspot.com",
  messagingSenderId: "809492019067",
  appId: "1:809492019067:web:db142b10d2cc86415bafde",
  measurementId: "G-61JY4430P8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);