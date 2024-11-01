// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5NiYHI_2xPQvaOna_mwqCfmdDXFKOBhU",
  authDomain: "watinterview-34f9c.firebaseapp.com",
  projectId: "watinterview-34f9c",
  storageBucket: "watinterview-34f9c.firebasestorage.app",
  messagingSenderId: "255575163715",
  appId: "1:255575163715:web:17b0fdc071b6e1baf2e5f6",
  measurementId: "G-YNX8QW25DH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
