 
// import { initializeApp } from "firebase/app";
 

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyD0bXl7IpR_wlS-0NsRhOvYop0gh40_WgI",
    authDomain: "reels-f975d.firebaseapp.com",
    projectId: "reels-f975d",
    storageBucket: "reels-f975d.appspot.com",
    messagingSenderId: "898219777999",
    appId: "1:898219777999:web:c733ddaa96637839b0bcba"
};

// Initialize Firebase 
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
const firestore = firebase.firestore();
export const database = {
users:firestore.collection('users'),
getTimeStamp:firebase.firestore.FieldValue.getTimeStamp
}
export const storage = firebase.storage();