// Inisialisasi Feather Icons
feather.replace();

document.addEventListener("DOMContentLoaded", () => {
  // Efek scroll reveal untuk setiap section
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll(".reveal").forEach((section) => {
    observer.observe(section);
  });
});
