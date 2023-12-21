//Text design
var typed = new Typed(".text", {
  strings: ["Full Stack Developer", "Frontend Developer", "Backend Developer"],
  typeSpeed: 50,
  backSpeed: 50,
  backDelay: 1000,
  loop: true
});

// scroll to top functionality
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});