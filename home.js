// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-app.js";
  import { getFirestore, collection, getDocs, query, where } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
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
  const db = getFirestore(app);



const myProfile = document.getElementById("my-profile"); 
const login = document.getElementById("login");
onAuthStateChanged(auth, async (user) => {

    if (!user) {
        window.location.href = "login.html";
        return;
    }

    login.style.display = "none";

    const q = query(
        collection(db, "Users"),
        where("uid", "==", user.uid)
    );

    const result = await getDocs(q);

    if (!result.empty) {

        const userDoc = result.docs[0];
        const userData = userDoc.data();
      
        myProfile.textContent = userData.name;
    }

}); 