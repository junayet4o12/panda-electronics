// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5-OyGXWadmNQssEh5Ij4XEWxdA8GSKJ8",
  authDomain: "news-guru-8c3d3.firebaseapp.com",
  projectId: "news-guru-8c3d3",
  storageBucket: "news-guru-8c3d3.appspot.com",
  messagingSenderId: "1027932652850",
  appId: "1:1027932652850:web:33ec9eefa3b3e71122032b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;