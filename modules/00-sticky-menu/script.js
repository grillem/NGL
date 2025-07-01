// Initialize sticky menu and burger menu functionality
(function () {
  setTimeout(function () {
    const stickyMenu = document.querySelector(".mdl-sticky-menu");
    const menuToggle = document.getElementById("burger-menu-toggle");
    const menuOverlay = document.getElementById("burger-menu-overlay");
    const menuClose = document.getElementById("burger-menu-close");
    const navLinks = document.querySelectorAll(".nav-link");

    if (!menuToggle || !menuOverlay || !stickyMenu) {
      return;
    }

    // Scroll detection for sticky menu visibility
    let lastScrollY = window.scrollY;
    let ticking = false;

    function updateStickyMenu() {
      const currentScrollY = window.scrollY;
      const heroHeight = Math.max(window.innerHeight, 975); // Match hero min-height

      // Show menu when scrolled past hero section and scrolling down
      if (currentScrollY > heroHeight && currentScrollY > lastScrollY) {
        stickyMenu.classList.add("visible");
      }
      // Hide menu when scrolling up or at top
      else if (currentScrollY < lastScrollY || currentScrollY <= heroHeight) {
        stickyMenu.classList.remove("visible");
      }

      lastScrollY = currentScrollY;
      ticking = false;
    }

    function requestTick() {
      if (!ticking) {
        requestAnimationFrame(updateStickyMenu);
        ticking = true;
      }
    }

    window.addEventListener("scroll", requestTick);

    // Burger menu functionality
    // Open menu
    menuToggle.addEventListener("click", function (e) {
      e.preventDefault();
      menuOverlay.classList.add("active");
      document.body.style.overflow = "hidden";
    });

    // Close menu
    function closeMenu() {
      menuOverlay.classList.remove("active");
      document.body.style.overflow = "";
    }

    if (menuClose) {
      menuClose.addEventListener("click", closeMenu);
    }

    // Close menu when clicking on navigation links
    navLinks.forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    // Close menu when clicking outside
    menuOverlay.addEventListener("click", function (e) {
      if (e.target === menuOverlay) {
        closeMenu();
      }
    });

    // Close menu with escape key
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && menuOverlay.classList.contains("active")) {
        closeMenu();
      }
    });
  }, 100);
})();
