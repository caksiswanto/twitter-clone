// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
   authDomain: 'twitter-nextjs-1a18d.firebaseapp.com',
   projectId: 'twitter-nextjs-1a18d',
   storageBucket: 'twitter-nextjs-1a18d.appspot.com',
   messagingSenderId: '49207351478',
   appId: '1:49207351478:web:f1bb6ccb7655edc3ce2e17',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
