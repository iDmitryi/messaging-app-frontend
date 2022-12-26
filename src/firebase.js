import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

// project-482074204834

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNKQ9drvKmJDkyiKCODqirVVZ4Pl_ZW2o",
  authDomain: "dating-app-mern-88ba1.firebaseapp.com",
  projectId: "dating-app-mern-88ba1",
  storageBucket: "dating-app-mern-88ba1.appspot.com",
  messagingSenderId: "482074204834",
  appId: "1:482074204834:web:ba5108fb945a39037f55fb",
  measurementId: "G-3SCQM948Y5",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(firebaseApp);

const provider = new GoogleAuthProvider();

export { auth, provider };
export default db;
