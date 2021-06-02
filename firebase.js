import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAyiQmJ-0fFHKM24aV-IjjyH6I86HrMoUo",
  authDomain: "amazaconclone.firebaseapp.com",
  projectId: "amazaconclone",
  storageBucket: "amazaconclone.appspot.com",
  messagingSenderId: "39627588040",
  appId: "1:39627588040:web:9d4b1a52507be8bcdc00fd",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
export default db;
