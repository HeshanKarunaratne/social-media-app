import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCnQvlqyCf-DkwExJUTEZIVHxIE5NAzsMg",
    authDomain: "socail-media-app-eff2c.firebaseapp.com",
    projectId: "socail-media-app-eff2c",
    storageBucket: "socail-media-app-eff2c.appspot.com",
    messagingSenderId: "487389966165",
    appId: "1:487389966165:web:9b000bdb51b46e721e49dc"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);