// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDeO1Uh-V4AdvqEuqLwDu8aQqoK0oc5kI",
  authDomain: "a-5fe53.firebaseapp.com",
  projectId: "a-5fe53",
  storageBucket: "a-5fe53.appspot.com",
  messagingSenderId: "909691029400",
  appId: "1:909691029400:web:9a64347bdc9ca8231acded",
  measurementId: "G-YHB9DY9MZ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
