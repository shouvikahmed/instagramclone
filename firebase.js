// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoEjrraqf0Ghk5S4YXryO-OyWCccZM9YM",
  authDomain: "insta-cl-b8875.firebaseapp.com",
  projectId: "insta-cl-b8875",
  storageBucket: "insta-cl-b8875.appspot.com",
  messagingSenderId: "1032831639022",
  appId: "1:1032831639022:web:f7be08cc4afad51564c2ff",
  
  measurementId: "G-N0JQ2RYSPD"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig): getApp();
const db= getFirestore();
const storage = getStorage();

const analytics = getAnalytics(app);

export {app, db, storage};