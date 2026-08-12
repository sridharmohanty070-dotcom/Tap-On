document.getElementById("signupForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const user = {
    // regd: document.getElementById("register").value,
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value
  };

  const response = await fetch("http://localhost:5500/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  });

  const result = await response.json();
  alert(result.message);
});