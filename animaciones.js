// animaciones.js
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("bounce-in");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.3
  });

  sections.forEach(section => {
    section.classList.add("invisible");
    observer.observe(section);
  });
});
