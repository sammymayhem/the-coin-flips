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

const homeHandler = () => {
  location.replace("/");
};

document.querySelector("#home-btn").addEventListener("click", homeHandler);

document
  .querySelector("#nav-logout-btn")
  .addEventListener("click", logoutHandler);

document.querySelector("#nav-home-btn").addEventListener("click", homeHandler);
