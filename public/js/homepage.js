const loginHandler = () => {
  document.location.replace("/login");
};

const signupHandler = () => {
  document.location.replace("/signup");
};

const chartsHandler = () => {
  console.log("Need to implement Charts Handlebar");
};

const newsHandler = () => {
  console.log("Need to implement News Handlebar");
};

document
  .querySelector("#nav-login-btn")
  .addEventListener("click", loginHandler);
document
  .querySelector("#nav-signup-btn")
  .addEventListener("click", signupHandler);
document
  .querySelector("#nav-charts-btn")
  .addEventListener("click", chartsHandler);
document.querySelector("#nav-news-btn").addEventListener("click", newsHandler);
