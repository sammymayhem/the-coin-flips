const loginHandler = () => {
  document.location.replace("/login");
};

const signupHandler = () => {
  document.location.replace("/signup");
};

document
  .querySelector("#nav-login-btn")
  .addEventListener("click", loginHandler);
document
  .querySelector("#nav-signup-btn")
  .addEventListener("click", signupHandler);
