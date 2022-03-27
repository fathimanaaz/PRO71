import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyCBBMKZqlgp1al8VBqZoeqLiyoQZ9JtmWI",
    authDomain: "e-ride-2a477.firebaseapp.com",
    projectId: "e-ride-2a477",
    storageBucket: "e-ride-2a477.appspot.com",
    messagingSenderId: "755604766956",
    appId: "1:755604766956:web:02243135b78510f4c0a5c9"
  };
  
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
