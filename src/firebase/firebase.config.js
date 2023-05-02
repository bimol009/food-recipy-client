import { initializeApp } from "firebase/app";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3vKJf5Thuido0h2sfwdkOkt0WoCThffg",
  authDomain: "food-recipe-assign.firebaseapp.com",
  projectId: "food-recipe-assign",
  storageBucket: "food-recipe-assign.appspot.com",
  messagingSenderId: "973666587813",
  appId: "1:973666587813:web:ca6bcc8f9cd8a7d4c8294c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;