// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-app.js";
  import { getAuth, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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


  onAuthStateChanged(auth, (user) =>{

    if(user){
        console.log("User is logged in");
    }
    else {
        console.log("No user is logged in");
        window.location.href = "login.html";
    }
  });


  const logoutButton = document.getElementById("logout-btn");

  logoutButton.addEventListener("click", async(e) =>{

    try {
        await signOut(auth);

        alert("Logged out successfully!");

        window.location.href = "login.html";
    }
    catch (error){
        console.log(error);
        alert(error.message);
    }
  });








