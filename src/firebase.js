// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { getFirestore } from "firebase/firestore";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDLiX8bViXwQtuYc_z67F_B7Hdja_UfDGU",
  authDomain: "myzone-2dc9f.firebaseapp.com",
  projectId: "myzone-2dc9f",
  storageBucket: "myzone-2dc9f.appspot.com",
  messagingSenderId: "132770077312",
  appId: "1:132770077312:web:62e8af99b047d7ae2f2465",
  measurementId: "${config.measurementId}",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
export { db, auth };
