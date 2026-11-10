// Import the functions you need from the SDKs you need
import { initializeApp,getApps,getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth"



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlvs_VnHxDL5zPv3ICydbZXjdGP2MkOi8",
  authDomain: "taskforge-cffb0.firebaseapp.com",
  projectId: "taskforge-cffb0",
  storageBucket: "taskforge-cffb0.firebasestorage.app",
  messagingSenderId: "248630747978",
  appId: "1:248630747978:web:4ec5544349c2a42e8857b3",
  measurementId: "G-YTFJ4EPVGX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// INITIALIZE AUTH AND GOOGLEPROVIDER
const Auth = getAuth(app);
const GoogleProvider = new GoogleAuthProvider();

export {Auth, GoogleProvider}