import firebase from "firebase";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAmjZiHeBvxQdkNzARSo6YjfamEIlOJdJ8",
    authDomain: "canul-rivera.firebaseapp.com",
    databaseURL: "https://canul-rivera.firebaseio.com",
    projectId: "canul-rivera",
    storageBucket: "canul-rivera.appspot.com",
    messagingSenderId: "257669039172",
    appId: "1:257669039172:web:a3c61c826e429250b0a811"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
    firebase,
    db
};