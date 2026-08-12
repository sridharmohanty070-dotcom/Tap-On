
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-app.js";
  import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-firestore.js";
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

const notesContainer =
    document.getElementById("notesContainer");


// Get notes from Firebase
async function loadNotes() {

    try {

        const result =
            await getDocs(collection(db, "notes"));


        result.forEach((doc) => {

            const note = doc.data();

            notesContainer.innerHTML += `

                <div class="note">

                    <h3>${note.title}</h3>

                    <p>${note.description}</p>

                    <a href="${note.link}" target="_blank">
                        Open Notes
                    </a>

                </div>

            `;

        });

    } catch (error) {

        console.log(error);

    }

}


// Run function
loadNotes();



//search bar

const search = document.getElementById("search");

search.addEventListener("input", function () {

    const text = search.value.toLowerCase();

    const allNotes = document.querySelectorAll(".note");

    allNotes.forEach(function (note) {

        const title = note
            .querySelector("h3")
            .innerText
            .toLowerCase();

        if (title.includes(text)) {
            note.style.display = "block";
        } else {
            note.style.display = "none";
        }

    });

});