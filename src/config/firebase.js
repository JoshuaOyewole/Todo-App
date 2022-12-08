// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPqX7ZlFUfpGP4VikI5zJrWN7wGCkukAA",
  authDomain: "todoapp-assessment.firebaseapp.com",
  projectId: "todoapp-assessment",
  storageBucket: "todoapp-assessment.appspot.com",
  messagingSenderId: "1060916988696",
  appId: "1:1060916988696:web:aa3db8cbd33616b82aac6d",
  measurementId: "G-L8P6BYHHNM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);