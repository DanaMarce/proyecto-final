// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvh9eZGTj1G10pULqOW7vXyswM0d_Zo4w",
  authDomain: "proyecto-final-d607d.firebaseapp.com",
  projectId: "proyecto-final-d607d",
  storageBucket: "proyecto-final-d607d.appspot.com",
  messagingSenderId: "682652450172",
  appId: "1:682652450172:web:52eeb18fa43ba433be38f9",
  measurementId: "G-B9ZX0DT7MP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);