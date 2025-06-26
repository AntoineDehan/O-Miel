const toggle = document.getElementById("burger-toggle");
const closeBtn = document.querySelectorAll("#burger-close");
const links = document.getElementById("nav-anchors");

toggle.addEventListener("click", () => {
  links.classList.toggle("active");
});

closeBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    links.classList.toggle("active");
  });
});
