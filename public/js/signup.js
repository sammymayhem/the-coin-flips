const homeHandler = () => {
  document.location.replace("/");
};

// Validate user input and send login request
const signupHandler = async (event) => {
  event.preventDefault();
  try {
    const username = document.querySelector("#username").value.trim();
    const password = document.querySelector("#password").value.trim();
    const confirmPassword = document
      .querySelector("#confirm-password")
      .value.trim();

    if (!username || !password) {
      alert("You must provide a username and password.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords to not match.");
      return;
    }

    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    });

    if (!response.ok) {
      alert("Failed to sign up.");
      return;
    }

    // go to home page
    window.location.replace("/");
  } catch (error) {
    console.log(error);
  }
};

const loginHandler = () => {
  document.location.replace("/login");
};

document.querySelector("#home-btn").addEventListener("click", homeHandler);

document.querySelector("#signup-btn").addEventListener("submit", signupHandler);

document.querySelector("#login-btn").addEventListener("click", loginHandler);
