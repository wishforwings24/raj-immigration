import "./style.css";

// Mobile Menu Toggle
const mobileBtn = document.querySelector(".mobile-menu-btn");
const mobileMenu = document.querySelector(".mobile-menu-overlay");
const mobileLinks = document.querySelectorAll(".mobile-nav  a");

// Toggle menu function
const toggleMenu = () => {
  const isOpen = mobileMenu.classList.contains("active");

  if (isOpen) {
    mobileMenu.classList.remove("active");
    document.body.style.overflow = ""; // Restore scrolling
    mobileBtn.setAttribute("aria-expanded", "false");
  } else {
    mobileMenu.classList.add("active");
    document.body.style.overflow = "hidden"; // Lock scrolling
    mobileBtn.setAttribute("aria-expanded", "true");
  }
};

mobileBtn.addEventListener("click", toggleMenu);

// Close menu when a link is clicked
mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    document.body.style.overflow = "";
  });
});

// Scroll Reveal Animation
const revealElements = document.querySelectorAll(
  ".section, .hero, .features-grid, .cta-content"
);

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        // Optional: Stop observing once revealed
        // observer.unobserve(entry.target);
      }
    });
  },
  {
    root: null,
    threshold: 0.1, // Trigger when 10% visible
    rootMargin: "0px",
  }
);

// Add 'reveal' class to sections initially
revealElements.forEach((el) => {
  el.classList.add("reveal");
  revealObserver.observe(el);
});

// Console signature
console.log(
  "%c Designed for Raj Immigration ",
  "background: #002147; color: #D4AF37; padding: 4px; border-radius: 4px;"
);
