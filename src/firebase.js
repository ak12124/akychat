import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyCrHadc7LPLCBwxGTBB2evRYGIuExCI9AY",
    authDomain: "akychat-4654d.firebaseapp.com",
    projectId: "akychat-4654d",
    storageBucket: "akychat-4654d.appspot.com",
    messagingSenderId: "171108138392",
    appId: "1:171108138392:web:38d3f7aaa7018d7bde3fed",
  })
  .auth();
