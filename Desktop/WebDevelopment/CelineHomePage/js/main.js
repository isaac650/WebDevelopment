const THEME_KEY = "celine-theme";

function getStoredTheme() {
  return localStorage.getItem(THEME_KEY) || "light";
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem(THEME_KEY, theme);
  const label = document.querySelector(".toggle-label");
  if (label) {
    label.textContent = theme === "dark" ? "Light" : "Dark";
  }
}

function initTheme() {
  const stored = getStoredTheme();
  applyTheme(stored);

  const toggle = document.querySelector(".theme-toggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme");
      applyTheme(current === "dark" ? "light" : "dark");
    });
  }
}

function initActiveNav() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentPage || (currentPage === "" && href === "index.html")) {
      link.classList.add("active");
    }
  });
}

function initTypingHero() {
  const el = document.querySelector(".hero-typing");
  if (!el) return;

  const words = ["Computer Scientist", "Developer", "Problem Solver", "Student"];
  let wordIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function type() {
    const word = words[wordIndex];
    if (deleting) {
      el.textContent = word.slice(0, charIndex--);
    } else {
      el.textContent = word.slice(0, charIndex++);
    }

    if (!deleting && charIndex > word.length) {
      deleting = true;
      setTimeout(type, 1400);
      return;
    }

    if (deleting && charIndex < 0) {
      deleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(type, 300);
      return;
    }

    setTimeout(type, deleting ? 60 : 100);
  }

  type();
}

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initActiveNav();
  initTypingHero();
});

export { applyTheme, initTheme };
