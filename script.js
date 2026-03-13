// Dark mode toggle
const toggle = document.getElementById("theme-toggle");

toggle.addEventListener("click", () => {
  const html = document.documentElement;

  if (html.dataset.theme === "dark") {
    html.dataset.theme = "light";
    toggle.textContent = "🌚";
  } else {
    html.dataset.theme = "dark";
    toggle.textContent = "🌞";
  }
});
