// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage} from "firebase/storage";
import {getFirestore } from "firebase/firestore";




const firebaseConfig = {
  apiKey: "AIzaSyCxAxmMzYcBLLXipBpEbPv_Mz-awNFar9I",
  authDomain: "chitchat-8688b.firebaseapp.com",
  projectId: "chitchat-8688b",
  storageBucket: "chitchat-8688b.appspot.com",
  messagingSenderId: "18850333661",
  appId: "1:18850333661:web:bb06fa7584fa092826ac34"
};



// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();