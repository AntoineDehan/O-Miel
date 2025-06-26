const toggle = document.getElementById("burger-toggle");
const closeBtn = document.querySelectorAll(".close-btn");
const links = document.getElementById("nav-anchors");

toggle.addEventListener("click", () => {
  links.classList.toggle("active");
});

closeBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    links.classList.toggle("active");
  });
});

// On observe si nous regardons les fleches et textes
const productObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const wrapper = entry.target;

        wrapper.querySelector(".arrow-top-right")?.classList.add("animate");
        wrapper.querySelector(".arrow-top-left")?.classList.add("animate");
        wrapper.querySelector(".arrow-bottom-left")?.classList.add("animate");

        wrapper.querySelector(".text-top-right")?.classList.add("animate");
        wrapper.querySelector(".text-top-left")?.classList.add("animate");
        wrapper.querySelector(".text-bottom-left")?.classList.add("animate");

        productObserver.unobserve(wrapper);
      }
    });
  },
  { threshold: 0.4 }
);

const productWrapper = document.querySelector(".product__wrapper");
if (productWrapper) {
  productObserver.observe(productWrapper);
}

// On observe si on nous regardons les answers
const faqObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const card = entry.target;
        const answer = card.querySelector(".answer");
        answer?.classList.add("animate");
        faqObserver.unobserve(card);
      }
    });
  },
  { threshold: 0.6 }
);

document.querySelectorAll(".faq__card").forEach((card) => {
  faqObserver.observe(card);
});
