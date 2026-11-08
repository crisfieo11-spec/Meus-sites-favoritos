// Recurso novo: animação de entrada das seções com IntersectionObserver.
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    elements.forEach((element) => observer.observe(element));
  } else {
    elements.forEach((element) => element.classList.add("visible"));
  }

  document.getElementById("ano").textContent = new Date().getFullYear();

  // Fecha o menu mobile depois que um link é selecionado.
  document.querySelectorAll("#linksMenu .nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      const menu = document.getElementById("linksMenu");
      if (menu.classList.contains("show")) {
        bootstrap.Collapse.getOrCreateInstance(menu).hide();
      }
    });
  });
});