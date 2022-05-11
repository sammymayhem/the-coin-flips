const homeHandler = () => {
  document.location.replace("/");
};

// Validate user input and send login request
const loginHandler = async (event) => {
  event.preventDefault();
  try {
    const username = document.querySelector("#username").value.trim();
    const password = document.querySelector("#password").value.trim();

    if (!username || !password) {
      alert("You must provide a username and password.");
      return;
    }

    const response = await fetch("/api/users/login", {
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

const signupHandler = () => {
  document.location.replace("/signup");
};

document.querySelector("#home-btn").addEventListener("click", homeHandler);

document.querySelector("#login-btn").addEventListener("submit", loginHandler);

document.querySelector("#signup-btn").addEventListener("click", signupHandler);
