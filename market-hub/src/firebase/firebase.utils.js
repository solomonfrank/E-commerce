import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDCr0YEqn4WV20dbsm42oh67qmNeW8dpgA",
    authDomain: "market-hub-92b2e.firebaseapp.com",
    databaseURL: "https://market-hub-92b2e.firebaseio.com",
    projectId: "market-hub-92b2e",
    storageBucket: "market-hub-92b2e.appspot.com",
    messagingSenderId: "830110253989",
    appId: "1:830110253989:web:4d586a75c566a5bd961e4c",
    measurementId: "G-W2C6R2K09T"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
export const auth = firebase.auth();
const firestore = firebase.firestore();

// provider
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInwithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

