// Home Page JavaScript
(function () {
  "use strict";

  // Initialize page when DOM is ready
  document.addEventListener("DOMContentLoaded", function () {
    initHomePage();
  });

  function initHomePage() {
    console.log("Home page initialized");

    // Add any page-specific functionality here
    initSmoothScrolling();
    initPageTransitions();
  }

  function initSmoothScrolling() {
    // Smooth scrolling for anchor links
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href").substring(1);
        const target = document.getElementById(targetId);

        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    });
  }

  function initPageTransitions() {
    // Add loading animation class
    document.body.classList.add("page-loaded");

    // Add entrance animations to sections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    // Observe all sections for animation
    const sections = document.querySelectorAll('[class^="mdl-"]');
    sections.forEach((section) => {
      observer.observe(section);
    });
  }
})();
