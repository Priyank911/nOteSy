import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCOicqSTldf6fvsSt5dgZY1a7IvL6QCTnM",
    authDomain: "note-share-4eca1.firebaseapp.com",
    projectId: "note-share-4eca1",
    storageBucket: "note-share-4eca1.appspot.com",
    messagingSenderId: "134401400698",
    appId: "1:134401400698:web:0810c10ebe42ab849ac0c3"
};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
