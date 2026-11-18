const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".skill-card, .project-card, .experience-card, .about-content").forEach((el) => {
  el.classList.add("reveal");
  observer.observe(el);
});
