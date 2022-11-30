// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyBTW03uN3bciZfaDlPSpV7Iap6EnhwnZiM",
authDomain: "taller-react-web-1.firebaseapp.com",
projectId: "taller-react-web-1",
storageBucket: "taller-react-web-1.appspot.com",
messagingSenderId: "484849188564",
appId: "1:484849188564:web:dadf6e9b8a8b7fddae0541"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db= getFirestore(app)
export {db}