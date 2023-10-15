import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDeclhd1lAl0GkCMpXUm_yk3drxjG4-gss",
  authDomain: "full-stack-todo-react.firebaseapp.com",
  projectId: "full-stack-todo-react",
  storageBucket: "full-stack-todo-react.appspot.com",
  messagingSenderId: "664840178055",
  appId: "1:664840178055:web:aa27670c7346bba50f6b22",
  measurementId: "G-2KNCYM90VS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { app, auth };
console.log(auth, app);
