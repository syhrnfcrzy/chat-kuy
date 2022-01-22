import firebase from "firebase/app";
import "firebase/auth"

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyBjDdtCZlMEE3MSFfhDVs1YiI9L2IV03n8",
  authDomain: "ayochat-a8a08.firebaseapp.com",
  projectId: "ayochat-a8a08",
  storageBucket: "ayochat-a8a08.appspot.com",
  messagingSenderId: "868817020373",
  appId: "1:868817020373:web:4713cc94cd5d38b42bc95c"
}).auth();