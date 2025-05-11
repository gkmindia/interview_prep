// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB1bIXfzbCNiag_b7_bQ41VlVxtU3VAA98",
  authDomain: "interviewprep-55d18.firebaseapp.com",
  projectId: "interviewprep-55d18",
  storageBucket: "interviewprep-55d18.firebasestorage.app",
  messagingSenderId: "606581380166",
  appId: "1:606581380166:web:ed29d4ae7b9520eb98e647",
  measurementId: "G-ZDQQRPWZV2"
};

// Initialize Firebase
const app = !getApps.length ?  initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app)
export const db = getFirestore(app)