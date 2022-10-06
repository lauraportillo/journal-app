// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCLg6_ykNJ1nOGOdDDRjqvj7kMnxL0_lGU",
    authDomain: "react-cursos-7ce89.firebaseapp.com",
    projectId: "react-cursos-7ce89",
    storageBucket: "react-cursos-7ce89.appspot.com",
    messagingSenderId: "1095490473968",
    appId: "1:1095490473968:web:32ff4511a5ac15b3f09735"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
