import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDvvsHL0t1YBMNYQAJaizmO_DjQ2dwb_To",
  authDomain: "linkedin-clone-cc795.firebaseapp.com",
  projectId: "linkedin-clone-cc795",
  storageBucket: "linkedin-clone-cc795.appspot.com",
  messagingSenderId: "69878398891",
  appId: "1:69878398891:web:d9e1279cb8e67e88351cee",
};

const firebaeApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const auth = firebase.auth();

export { db, auth };
