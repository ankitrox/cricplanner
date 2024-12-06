import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCTkispO9iewuxjoHElgapuyvI9xn_4V4A",
    authDomain: "cricadda-87eca.firebaseapp.com",
    projectId: "cricadda-87eca",
    storageBucket: "cricadda-87eca.firebasestorage.app",
    messagingSenderId: "1082826898786",
    appId: "1:1082826898786:web:c1270cff671c26363dc03b",
    measurementId: "G-FCTGBGD9N4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
