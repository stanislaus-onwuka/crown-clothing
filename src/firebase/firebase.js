import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDU-HTEQQj8fzC-FnWQxre4vuf4IljTld4",
    authDomain: "crwn-stores-db-f41ad.firebaseapp.com",
    databaseURL: "https://crwn-stores-db-f41ad.firebaseio.com",
    projectId: "crwn-stores-db-f41ad",
    storageBucket: "crwn-stores-db-f41ad.appspot.com",
    messagingSenderId: "688655265735",
    appId: "1:688655265735:web:5b3c6ae74bb6b4eb7cf3e2",
    measurementId: "G-4RMRBCP86G"
  };
  // Initialize Firebase
  firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData)=>{
    if (!userAuth) return false;

    const userRef = firestore.doc('users/123edewss31');

    const snapshot = await userRef.get();

    if(!snapshot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch(error){

            console.log('error creating user', error.message)

        }
    }

    return userRef;
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;