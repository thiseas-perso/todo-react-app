// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "@firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7rvLK71FxL2J3qsmARHeYh4Cm2iSFZOs",
  authDomain: "todo-react-app-31e73.firebaseapp.com",
  databaseURL: "https://todo-react-app-31e73-default-rtdb.firebaseio.com",
  projectId: "todo-react-app-31e73",
  storageBucket: "todo-react-app-31e73.appspot.com",
  messagingSenderId: "211167593227",
  appId: "1:211167593227:web:70d39e61ef26172ab3180e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
