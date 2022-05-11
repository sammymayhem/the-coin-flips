const homeHandler = () => {
  location.replace("/");
};

// Validate user input and send login request
const signupHandler = async (event) => {
  event.preventDefault();
  try {
    const first_name = document.querySelector("#first-name").value.trim();
    const last_name = document.querySelector("#last-name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const password = document.querySelector("#password").value.trim();

    // const confirmPassword = document
    //   .querySelector("#confirm-password")
    //   .value.trim();

    if (!email || !password) {
      alert("You must provide a username and password.");
      return;
    }

    // if (password !== confirmPassword) {
    //   alert("Passwords to not match.");
    //   return;
    // }

    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ first_name, last_name, email, password }),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    });

    if (!response.ok) {
      alert("Failed to sign up.");
      return;
    }

    // go to home page
    location.replace("/");
  } catch (error) {
    console.log(error);
  }
};

// const loginHandler = () => {
//   document.location.replace("/login");
// };

document.querySelector("#home-btn").addEventListener("click", homeHandler);

document.querySelector("#signup-btn").addEventListener("click", signupHandler);

//document.querySelector("#login-btn").addEventListener("click", loginHandler);
