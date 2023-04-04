
//* Dark Mode start

const ball = document.querySelector(".dark-mode");
const items = document.querySelectorAll(
  ".navbar,.sidebar,.toggle-ball,.dark-mode,.section,.student-panel,footer"
);

ball.addEventListener("click", function () {
  items.forEach((item) => item.classList.toggle("dark-mode-active"));
  if (ball.classList.contains("dark-mode-active")) {
    document.cookie = "dark-mode=on; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
  } else {
    document.cookie = "dark-mode=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
  }
  console.log("click");
});

// Check if the cookie exists and set the dark mode accordingly
const darkModeCookie = document.cookie.split(";").find((c) => c.trim().startsWith("dark-mode="));
if (darkModeCookie && darkModeCookie.split("=")[1] === "on") {
  ball.classList.add("dark-mode-active");
  items.forEach((item) => item.classList.add("dark-mode-active"));
}


//* Dark Mode end