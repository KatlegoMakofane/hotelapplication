// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDU2C8hf3HDt9V8CGTsAKj3XbYbWFS5e30",
  authDomain: "hotel-app-bebe3.firebaseapp.com",
  databaseURL: "https://hotel-app-bebe3-default-rtdb.firebaseio.com",
  projectId: "hotel-app-bebe3",
  storageBucket: "hotel-app-bebe3.appspot.com",
  messagingSenderId: "272898450214",
  appId: "1:272898450214:web:6485231598705ce4e217e7",
  measurementId: "G-DEBZC303V1"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth();
