// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiNxfj22OE0uAkQhxSRAMEHr6S8ARev-A",
  authDomain: "smart-deals-98ef0.firebaseapp.com",
  projectId: "smart-deals-98ef0",
  storageBucket: "smart-deals-98ef0.firebasestorage.app",
  messagingSenderId: "582507038949",
  appId: "1:582507038949:web:c85fbb8117101e1c1dac0c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);