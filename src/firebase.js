
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBQ2i5IPyfwcJVCqebjhhBv1F7UVhe2mnk",
    authDomain: "image-share-ea21c.firebaseapp.com",
    databaseURL: "https://image-share-ea21c-default-rtdb.firebaseio.com",
    projectId: "image-share-ea21c",
    storageBucket: "image-share-ea21c.appspot.com",
    messagingSenderId: "953601279994",
    appId: "1:953601279994:web:addeb546295da6bab48643",
    measurementId: "G-XJ4QHFWCTN"
  };

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };