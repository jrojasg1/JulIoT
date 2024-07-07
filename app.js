import { initializeApp } from './node_modules/firebase/app';
import { getDatabase, ref, onValue } from "./node_modules/firebase/database";

// TODO: Replace with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
};

const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const db = getDatabase(app);

const starCountRef = ref(db, 'posts/' + postId + '/humedad');
onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();
  console.log(data)
  updateStarCount(postElement, data);
});