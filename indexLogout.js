// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-app.js";
  import { getAuth, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAS9eI2QxfmZSsSJTA-TVliUxzEfZAgKi0",
    authDomain: "catch-up-8c869.firebaseapp.com",
    projectId: "catch-up-8c869",
    storageBucket: "catch-up-8c869.firebasestorage.app",
    messagingSenderId: "356768614723",
    appId: "1:356768614723:web:1f59c32ff53b774c8e07f6",
    measurementId: "G-JLG92RYG3E"
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








