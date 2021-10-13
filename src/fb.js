import * as firebase from "firebase";
import "firebase/database";

let config = {
  apiKey: "AIzaSyA12_eYrEp6rtTjNCLU5qKJV8AaVms4wAE",
  authDomain: "bezkoder-firebase-1928c.firebaseapp.com",
  databaseURL: "https://bezkoder-firebase-1928c-default-rtdb.firebaseio.com",
  projectId: "bezkoder-firebase-1928c",
  storageBucket: "bezkoder-firebase-1928c.appspot.com",
  messagingSenderId: "327639260451",
  appId: "1:327639260451:web:8235e595b6e947a3a90096"
};

firebase.initializeApp(config);

export default firebase.database();