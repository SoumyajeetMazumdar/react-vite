import { initializeApp } from "firebase/app";

// need to import this for database access
import { collection, getFireStore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFfHoAJ1FqYSa-njTOJq7U7ccqNmhaOtY",
  authDomain: "react-notes-vite.firebaseapp.com",
  projectId: "react-notes-vite",
  storageBucket: "react-notes-vite.appspot.com",
  messagingSenderId: "682516206116",
  appId: "1:682516206116:web:58bd6a413cacac3b54feb1",
};

// Initialize Firebase
// connect to database
// get the particular varible from the database
const app = initializeApp(firebaseConfig);
const db = getFireStore(app);

const notesCollection = collection(db, "notes");
