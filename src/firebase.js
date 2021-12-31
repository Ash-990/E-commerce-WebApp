import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBrLTYv2XPeBJwz_Trb4ufo5y7F8xdXKqo",
    authDomain: "app-76b89.firebaseapp.com",
    projectId: "app-76b89",
    storageBucket: "app-76b89.appspot.com",
    messagingSenderId: "207158784032",
    appId: "1:207158784032:web:bc4be7dad645e2c1ed4c45"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};