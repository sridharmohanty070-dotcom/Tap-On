
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-app.js";
  import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-firestore.js";
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
  const db = getFirestore(app);


  const form = document.getElementById("noteForm");


// Add note
form.addEventListener("submit", async (e) => {

  e.preventDefault();

  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const link = document.getElementById("link").value;

  try {

    await addDoc(collection(db, "notes"), {
      title: title,
      description: description,
      link: link
    });

    alert("Note added successfully!");

    form.reset();

  } catch (error) {

    console.log(error);

    alert("Error adding note");

  }

});