// Dark mode toggle
const toggle = document.getElementById("theme-toggle");

toggle.addEventListener("click", () => {
  const html = document.documentElement;

  if (html.dataset.theme === "dark") {
    html.dataset.theme = "light";
    toggle.textContent = "🌙";
  } else {
    html.dataset.theme = "dark";
    toggle.textContent = "☀️";
  }
});

// Hamburger menu toggle
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  mobileMenu.classList.toggle("open");
});

function closeMobile() {
  hamburger.classList.remove("open");
  mobileMenu.classList.remove("open");
}
