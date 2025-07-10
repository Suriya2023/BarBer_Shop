// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyABE2csgXRzlkNWVOpa35_ftKr5EYz_hss",
    authDomain: "bbshop-bfc30.firebaseapp.com",
    projectId: "bbshop-bfc30",                 // ✅ This must match Firebase console
    storageBucket: "bbshop-bfc30.appspot.com", // ✅ NOT .firebasestorage.app ❌
    messagingSenderId: "926190778508",
    appId: "1:926190778508:web:970cd69f01143eb8b123a9"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); // Firestore instance export
