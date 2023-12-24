// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyB6DyPLhnyUTCW42WGI63mwH6h0Er1ayt8",

  authDomain: "task-management-c0bb5.firebaseapp.com",

  projectId: "task-management-c0bb5",

  storageBucket: "task-management-c0bb5.appspot.com",

  messagingSenderId: "91695363435",

  appId: "1:91695363435:web:d5e297af94c50d9a9dc82e"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

