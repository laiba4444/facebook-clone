import "firebase/auth";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'; 
import'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCzaYG7ziKbron5tZkLfJGJfCzD64W9BTU",
    authDomain: "fb-clone-d257c.firebaseapp.com",
    projectId: "fb-clone-d257c",
    storageBucket: "fb-clone-d257c.appspot.com",
    messagingSenderId: "738272234438",
    appId: "1:738272234438:web:eb3f83a9728917947d80c7",
    measurementId: "G-5TWP4PR732",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth , provider};
export default db;