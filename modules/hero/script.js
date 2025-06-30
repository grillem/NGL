// Hero Module JavaScript
(function () {
  "use strict";

  // Initialize hero module when DOM is ready
  document.addEventListener("DOMContentLoaded", function () {
    initHero();
  });

  function initHero() {
    const heroSection = document.querySelector(".mdl-hero");
    if (!heroSection) return;

    // Add entrance animation
    setTimeout(() => {
      heroSection.classList.add("animated");
    }, 100);

    // Smooth scroll for hero buttons
    const heroButtons = heroSection.querySelectorAll(".hero-btn");
    heroButtons.forEach((btn) => {
      btn.addEventListener("click", handleButtonClick);
    });

    // Add parallax effect on scroll (optional)
    if (window.innerWidth > 768) {
      window.addEventListener("scroll", handleScroll);
    }
  }

  function handleButtonClick(e) {
    const href = e.target.getAttribute("href");

    // If it's an anchor link, smooth scroll
    if (href && href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }

    // Add click animation
    e.target.style.transform = "scale(0.95)";
    setTimeout(() => {
      e.target.style.transform = "";
    }, 150);
  }

  function handleScroll() {
    const heroSection = document.querySelector(".mdl-hero");
    if (!heroSection) return;

    const scrolled = window.pageYOffset;
    const heroImage = heroSection.querySelector(".hero-image");

    if (heroImage && scrolled < window.innerHeight) {
      heroImage.style.transform = `translateY(${scrolled * 0.1}px)`;
    }
  }
})();
