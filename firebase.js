// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6_wcZvtqfkuYWdRn8FKC-zSsVTHC-H9s",
  authDomain: "dev-jenmar.firebaseapp.com",
  projectId: "dev-jenmar",
  storageBucket: "dev-jenmar.appspot.com",
  messagingSenderId: "360057648308",
  appId: "1:360057648308:web:b8e52bf73a9d646b20d3e1",
  measurementId: "G-29T44D8D36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);