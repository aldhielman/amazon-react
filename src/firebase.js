import * as firebase from "firebase/app";
import "firebase/auth";

firebase.initializeApp({
  apiKey: "AIzaSyCUEhge0gpMe2Sj8o7AiUaOM5UuXW1SURA",
  authDomain: "react-cccde.firebaseapp.com",
  databaseURL: "https://react-cccde.firebaseio.com",
  projectId: "react-cccde",
  storageBucket: "react-cccde.appspot.com",
  messagingSenderId: "696281214111",
  appId: "1:696281214111:web:2da0b6cb2bebc7e66fc6aa",
  measurementId: "G-LGMZY5P8DL",
});

const auth = firebase.auth();

export { auth };
