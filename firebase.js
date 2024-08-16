// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCm9eeZNPhpVJ_4x3Ne_WbNTdIpE4XgDHw",
  authDomain: "inventory-management-7b048.firebaseapp.com",
  projectId: "inventory-management-7b048",
  storageBucket: "inventory-management-7b048.appspot.com",
  messagingSenderId: "633996197625",
  appId: "1:633996197625:web:24be7ce3f5a32f8e646c28",
  measurementId: "G-3XLTW6ZM4C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)

export{firestore}