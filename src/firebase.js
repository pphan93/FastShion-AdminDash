// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcZF0CADgGaR1L6DdUdYGpghLAK0-eSx0",
  authDomain: "fastshion-781be.firebaseapp.com",
  projectId: "fastshion-781be",
  storageBucket: "fastshion-781be.appspot.com",
  messagingSenderId: "706987166226",
  appId: "1:706987166226:web:2edb5fe2648329219626cb",
  measurementId: "G-3XVPYTR5EP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;
