import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyASAEXXuW0PUWq_50lzWgRBSxetlt1pDd4",
    authDomain: "crwn-stores-db.firebaseapp.com",
    databaseURL: "https://crwn-stores-db.firebaseio.com",
    projectId: "crwn-stores-db",
    storageBucket: "crwn-stores-db.appspot.com",
    messagingSenderId: "1095949651565",
    appId: "1:1095949651565:web:8610321d2f759231d77964",
    measurementId: "G-1E6F1BPBJZ"
}

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({'prompt': 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);