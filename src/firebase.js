// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCp_G-F_RuAZfNNT0LiWPa6P20Tt2UGVaU",
  authDomain: "giminiclone.firebaseapp.com",
  projectId: "giminiclone",
  storageBucket: "giminiclone.appspot.com",
  messagingSenderId: "914756610718",
  appId: "1:914756610718:web:4c2e36029f6ce836c6e98f",
  measurementId: "G-DLC6QLXQKG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
