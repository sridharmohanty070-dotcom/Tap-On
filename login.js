// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-app.js";
  import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-auth.js";
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


  const loginForm = document.getElementById("login-form");

  loginForm.addEventListener("submit", async(e) =>{
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
        );
        console.log("Logged in user:",userCredential.user);
        alert("Login successfully!");

        window.location.href = "index.html";
    }
    catch {
        console.log(error);
        alert(error.message);
    }

  });


const forgotPassword =
    document.getElementById("forgot-password");


forgotPassword.addEventListener("click", async (event) => {

    event.preventDefault();

    const email = document.getElementById("email").value;

    if (email === "") {
        alert("Please enter your email first.");
        return;
    }

    try {

        await sendPasswordResetEmail(auth, email);

        alert("Password reset email sent!");

    } catch (error) {

        console.log(error);

        alert(error.message);
    }

});