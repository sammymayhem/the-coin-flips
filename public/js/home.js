const homeHandler = () => {
  location.replace("/");
};

const predictHandler = () => {
  location.replace("/predictions");
};

const loginHandler = () => {
  location.replace("/login");
};

const signupHandler = () => {
  location.replace("/signup");
};

const logoutHandler = async () => {
  try {
    const response = await fetch("/api/users/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    });

    if (!response.ok) {
      alert("Failed to log out.");
      return;
    }
    location.replace("/");
  } catch (error) {
    console.log(error);
  }
};

const attachHandlers = (isLoggedIn) => {
  document.querySelector("#home-btn").addEventListener("click", homeHandler);

  if (isLoggedIn) {
    document
      .querySelector("#nav-logout-btn")
      .addEventListener("click", logoutHandler);
    document
      .querySelector("#nav-predict-btn")
      .addEventListener("click", predictHandler);
  } else {
    document
      .querySelector("#nav-login-btn")
      .addEventListener("click", loginHandler);
    document
      .querySelector("#nav-signup-btn")
      .addEventListener("click", signupHandler);
  }
};

const checkSession = async () => {
  try {
    const result = await fetch("/api/users/login", {
      method: "GET",
    });
    const isLoggedIn = await result.json();
    attachHandlers(isLoggedIn);
  } catch (err) {
    console.log(err);
  }
};

checkSession();
