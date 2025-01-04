import { FirebaseApp, initializeApp, FirebaseOptions } from "firebase/app";
import { Auth, getAuth, GoogleAuthProvider } from "firebase/auth";
import { Firestore, getFirestore } from "firebase/firestore";

const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyBXLm2GMs_2cdciWwLvTpztfWor-UAz8Eg",
  authDomain: "todo-list-2fd64.firebaseapp.com",
  projectId: "todo-list-2fd64",
  storageBucket: "todo-list-2fd64.appspot.com",
  messagingSenderId: "399478243824",
  appId: "1:399478243824:web:cfc0474b33df8fa7e3dd35",
  measurementId: "G-4DXXF68E5E",
};

export const app: FirebaseApp = initializeApp(firebaseConfig);
export const auth: Auth = getAuth(app);
export const googleProvider: GoogleAuthProvider = new GoogleAuthProvider();
export const db: Firestore = getFirestore(app);
