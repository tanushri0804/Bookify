import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDN6coVSJ4BoI-xeM3RaylR3c7sBfR6m9M",
    authDomain: "bookify-2d867.firebaseapp.com",
    databaseURL: "https://bookify-2d867-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "bookify-2d867",
    storageBucket: "bookify-2d867.firebasestorage.app",
    messagingSenderId: "559951052984",
    appId: "1:559951052984:web:2cc136baed5348ec30744d",
    measurementId: "G-VL3GREYQXE"
  };

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export const db = getDatabase(app);