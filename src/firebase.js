import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAW58UFMfzEnTCprcKI9AE4O1J5aWd4u0s",
  authDomain: "linkedin-clone-b72be.firebaseapp.com",
  projectId: "linkedin-clone-b72be",
  storageBucket: "linkedin-clone-b72be.appspot.com",
  messagingSenderId: "969599173815",
  appId: "1:969599173815:web:a0bb16cdc97415ca50f932"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp); 
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { auth, provider, storage };
export default db;
