
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyB1mJ3VOvOhIOdo_K_g0YL7wR0LrBtU8N8",
  authDomain: "dimple-firebase-b07ed.firebaseapp.com",
  projectId: "dimple-firebase-b07ed",
  storageBucket: "dimple-firebase-b07ed.appspot.com",
  messagingSenderId: "577520028030",
  appId: "1:577520028030:web:454868bd17837298044b2f"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;