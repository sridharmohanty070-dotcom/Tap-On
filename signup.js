
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-auth.js";
  import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-firestore.js";
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
  const db = getFirestore(app);


  const signupForm = document.querySelector(".signup-form");

  signupForm.addEventListener("submit", async(e) =>{

    e.preventDefault();

    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const confirmPassword = document.querySelector("#confirm-password").value;

    if (password !== confirmPassword) {
        alert("Password do not match!");
        return;
    }

    try {
        const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );

            const user = userCredential.user;

            await addDoc(collection(db, "Users"),{

                name: name,
                email: email,
                uid: user.uid

            });

        

        alert("Account created successfully");
        window.location.href = "login.html";

    }
    catch (error){
        console.log(error);
        alert(error.message);

    }


  });
