(function () {
  setTimeout(function () {
    const menuToggle = document.getElementById("burger-menu-toggle");
    const menuOverlay = document.getElementById("burger-menu-overlay");
    const menuClose = document.getElementById("burger-menu-close");
    const navLinks = document.querySelectorAll(".nav-link");

    if (!menuToggle || !menuOverlay) {
      return;
    }

    menuToggle.addEventListener("click", function (e) {
      e.preventDefault();
      // TODO: removed for debugging
      // menuOverlay.classList.add("active");
    });

    function closeMenu() {
      menuOverlay.classList.remove("active");
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
