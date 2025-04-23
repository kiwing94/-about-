// Import Firebase App and required services
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Your Firebase web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB3Q_tZ2NuGee0gUgvm_RgK51FsfNgH_34",  // Replace with your Firebase config values
    authDomain: "hikari-flux.web.app",
    projectId: "hikari-flux",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "hikari-flux"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // If already initialized, use that one
}

// Firebase services export
export default firebase;
