import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAq_Re-8Sf4F78OXjRpZCD1p8rKgp3Ba_o",
    authDomain: "faceboot-rambo.firebaseapp.com",
    projectId: "faceboot-rambo",
    storageBucket: "faceboot-rambo.appspot.com",
    messagingSenderId: "690451890354",
    appId: "1:690451890354:web:d614cce77a5171cd14c9ab",
    measurementId: "G-713763KBFN"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;