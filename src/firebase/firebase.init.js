

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGwUn2LhCTjvLSxUAHPMso0eIO7Iwbe9Q",
  authDomain: "college-admission-50857.firebaseapp.com",
  projectId: "college-admission-50857",
  storageBucket: "college-admission-50857.firebasestorage.app",
  messagingSenderId: "776030432564",
  appId: "1:776030432564:web:8e81eeb84925e2a3ce8961"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)