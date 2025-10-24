// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANyUFEMuRkoainMJMAqgC1M1AxiWhAFUY",
  authDomain: "v2-blog-fb149.firebaseapp.com",
  databaseURL: "https://v2-blog-fb149-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "v2-blog-fb149",
  storageBucket: "v2-blog-fb149.firebasestorage.app",
  messagingSenderId: "275721229787",
  appId: "1:275721229787:web:b85e7e8235b59cbcc783fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};