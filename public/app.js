const navSlide = () => {
  const burger = document.querySelector(".burger");
  const navLinks = document.querySelector(".nav-links");

  burger.addEventListener("click", () => {
    navLinks.classList.toggle("navlinks-active");
    burger.classList.toggle("toggle");
  });
};

const themeSlide = () => {
  const themeBtn = document.querySelector(".themeBtn");
  const themefy = document.querySelector(".themefy");
  const lightBtn = document.querySelector(".light-item");
  const darkBtn = document.querySelector(".dark-item");

  themefy.addEventListener("click", () => {
    themeBtn.classList.toggle("has-dropdown");
  });
  lightBtn.onclick = () => {
    themeBtn.classList.toggle("has-dropdown");
  };
  darkBtn.onclick = () => {
    themeBtn.classList.toggle("has-dropdown");
  };
};

const changeTheme = () => {
  const lightButton = document.getElementById("light");
  const darkButton = document.getElementById("dark");

  const body = document.body;

  // const theme = localStorage.getItem("theme");

  // if (theme) {
  //   body.classList.add(theme);
  // }

  darkButton.onclick = () => {
    body.classList.replace("light", "dark");
  };
  lightButton.onclick = () => {
    body.classList.replace("dark", "light");
  };
};

// Telephone Booth
function app() {
  navSlide();
  themeSlide();
  changeTheme();
}
app();
