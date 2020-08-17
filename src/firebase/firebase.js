import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBKvU6loPHrNpyfYL3uUpju1UCXA7zGx-w",
    authDomain: "crwn-stores-db-746a3.firebaseapp.com",
    databaseURL: "https://crwn-stores-db-746a3.firebaseio.com",
    projectId: "crwn-stores-db-746a3",
    storageBucket: "crwn-stores-db-746a3.appspot.com",
    messagingSenderId: "425901812500",
    appId: "1:425901812500:web:36d0eff06fc38195493001",
    measurementId: "G-E5GKHL3Z6N"
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