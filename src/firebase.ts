// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDQ57RBHXkbMezUaa_ocu9jpeAzYmT6r7w",
    authDomain: "reminder-app-v1.firebaseapp.com",
    projectId: "reminder-app-v1",
    storageBucket: "reminder-app-v1.firebasestorage.app",
    messagingSenderId: "502411682123",
    appId: "1:502411682123:web:1b8807e99eae17527208ce",
    measurementId: "G-Y6D3ZFEWDE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };