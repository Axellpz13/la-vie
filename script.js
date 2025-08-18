document.addEventListener("DOMContentLoaded", () => {
  // On observe les paragraphes de chaque section
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible"); // effet quand on quitte
      }
    });
  }, { threshold: 0.5 }); // 0.5 = déclenche quand 50% du texte est visible

  // Sélectionne tous les paragraphes dans les sections
  document.querySelectorAll("section p").forEach(p => observer.observe(p));
});