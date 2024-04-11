import { initializeApp } from "firebase/app";

// Optionally import the services that you want to use
import { getAuth } from "firebase/auth";
// import {...} from "firebase/database";
import { getFirestore } from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC78eiCe1wePO1LiEIrKxi0Z3eTdJYyMeg",
  authDomain: "simplon-learn.firebaseapp.com",
  databaseURL:
    "https://simplon-learn-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "simplon-learn",
  storageBucket: "simplon-learn.appspot.com",
  messagingSenderId: "127050873964",
  appId: "1:127050873964:web:6063ba52d1b6bbee50ec49",
};

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
