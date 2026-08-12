import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } 
from "https://www.gstatic.com/firebasejs/12.11.0/firebase-auth.js";

// Same config as signup
const firebaseConfig = {
    apiKey: "AIzaSyBleUR_S6pGI6iuYnKjsMpGogBCdjQAKK0",
    authDomain: "notes-share-6cc17.firebaseapp.com",
    projectId: "notes-share-6cc17",
    storageBucket: "notes-share-6cc17.firebasestorage.app",
    messagingSenderId: "891671444971",
    appId: "1:891671444971:web:dbb601e7b8a69de03eedae",
    measurementId: "G-4JZ71X3S8D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Login function
function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
        alert("Login Successful ✅");
        window.location.href = "index.html"; // redirect
    })
        
    .catch((error) => {
      alert(error.message);
    });
}

// Make function global
window.login = login;