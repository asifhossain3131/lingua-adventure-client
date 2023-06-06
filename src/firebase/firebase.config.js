// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEk6FSYnyqqAgnHVtWrfPiDec3xKDHKD8",
  authDomain: "assignment-490a9.firebaseapp.com",
  projectId: "assignment-490a9",
  storageBucket: "assignment-490a9.appspot.com",
  messagingSenderId: "294393426463",
  appId: "1:294393426463:web:9e02758e851c3ce24bdb2a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app