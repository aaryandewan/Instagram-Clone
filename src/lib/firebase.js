import firebase from "firebase/app";
import "firebase/firestore"; // Required for side-effects

// import { seedDatabase } from "../seed.js";

const firebaseConfig = {
  apiKey: "AIzaSyCGnmwKskDEvZUT2RUr-OtnDKOQvF5h_sg",
  authDomain: "instagram-clone-a134f.firebaseapp.com",
  projectId: "instagram-clone-a134f",
  storageBucket: "instagram-clone-a134f.appspot.com",
  messagingSenderId: "946312372593",
  appId: "1:946312372593:web:a5b9b61c054eb58c5bd6d0",
};

const Firebase = firebase.initializeApp(firebaseConfig);
console.log(firebase);
const { fieldValue } = Firebase.firestore;

//seed file
export { firebase, fieldValue };
