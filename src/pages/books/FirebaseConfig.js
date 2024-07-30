// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD08S_D192zeR0Ccg8e3mGSvdG0ywdmDfU",
  authDomain: "bookstore-2ce2a.firebaseapp.com",
  projectId: "bookstore-2ce2a",
  storageBucket: "bookstore-2ce2a.appspot.com",
  messagingSenderId: "822940104814",
  appId: "1:822940104814:web:054e01ec543ca33f26ce7f",
  measurementId: "G-FDCBC29ET8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
