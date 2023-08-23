// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQuLL-eJL8Dd5NOh0t_lbei2HMjFb4j8o",
  authDomain: "instagram-d4ff3.firebaseapp.com",
  projectId: "instagram-d4ff3",
  storageBucket: "instagram-d4ff3.appspot.com",
  messagingSenderId: "815378804875",
  appId: "1:815378804875:web:ff3ab251614bfe7d16248e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

const auth = getAuth();

export { auth };

export default db;
