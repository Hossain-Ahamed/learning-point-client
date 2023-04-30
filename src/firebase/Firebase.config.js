// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANmSVRjhfv6JC36r7DDcguXgHjEsWc74w",
  authDomain: "authentication-project001.firebaseapp.com",
  projectId: "authentication-project001",
  storageBucket: "authentication-project001.appspot.com",
  messagingSenderId: "447305529768",
  appId: "1:447305529768:web:3e34dee4c422f8a247859d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;