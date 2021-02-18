import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyCt50k__Ew6-W24wjqqrPfy7WUEe2TstC0",
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
  });
} else {
  firebase.app(); // if already initialized, use that one
}
export const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export const auth = firebase.auth();
export const firestore = firebase.firestore();
