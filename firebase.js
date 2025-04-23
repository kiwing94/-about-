// firebase.js (efter npm-installation)
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC-TIy3u7uDZ2upqLOG2b769hQ--RpfaNw",
  authDomain: "webpage-79bbc.firebaseapp.com",
  projectId: "webpage-79bbc",
  storageBucket: "webpage-79bbc.appspot.com",
  messagingSenderId: "967668932710",
  appId: "1:967668932710:web:e5731b76a5a9ec9f214da7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
