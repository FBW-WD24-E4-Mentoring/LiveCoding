// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  /* apiKey: import.meta.env.VITE_API_KEY, */
  apiKey:"AIzaSyCtLKObK-gG2sKnWnQJhOntByg6hdM2as4",
  authDomain: "fir-authentication-react-32fee.firebaseapp.com",
  projectId: "fir-authentication-react-32fee",
  storageBucket: "fir-authentication-react-32fee.firebasestorage.app",
  messagingSenderId: "918865269005",
  appId: "1:918865269005:web:e7b5d0b37025c914e86044"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;