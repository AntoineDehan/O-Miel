const toggle = document.getElementById("burger-toggle");
const closeBtn = document.getElementById("burger-close");
const links = document.getElementById("nav-anchors");

toggle.addEventListener("click", () => {
  links.classList.toggle("active");
});

closeBtn.addEventListener("click", () => {
  links.classList.toggle("active");
});
