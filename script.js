const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  },
  { threshold: 0.2 },
);

document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

function closeMenu() {
  menuToggle.classList.remove("open");
  navLinks.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}

// Toggle menu on hamburger click
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.classList.toggle("open", isOpen);
  menuToggle.setAttribute("aria-expanded", isOpen);
});

// Close menu when a link is clicked
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (!e.target.closest(".navbar")) closeMenu();
});

// Reset menu when resizing to desktop
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) closeMenu();
});
