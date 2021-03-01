import { firebase } from "@firebase/app";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCTD1GlBIumXbvC87S1ZvwkWegJbMXo_j8",
  authDomain: "amelen-dev.firebaseapp.com",
  databaseURL: "https://amelen-dev.firebaseio.com",
  projectId: "amelen-dev",
  storageBucket: "amelen-dev.appspot.com",
  messagingSenderId: "317342014387"
};

firebase.initializeApp(config);

export default firebase;