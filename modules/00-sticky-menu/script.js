// Initialize burger menu immediately (DOM is already loaded when this script runs)
(function () {
  console.log("Initializing burger menu...");

  // Add a small delay to ensure DOM elements are available
  setTimeout(function () {
    const menuToggle = document.getElementById("burger-menu-toggle");
    const menuOverlay = document.getElementById("burger-menu-overlay");
    const menuClose = document.getElementById("burger-menu-close");
    const navLinks = document.querySelectorAll(".nav-link");

    console.log("Menu elements:", { menuToggle, menuOverlay, menuClose });

    if (!menuToggle || !menuOverlay) {
      console.error("Burger menu elements not found!");
      return;
    }

    console.log("Burger menu initialized successfully!");

    // Open menu
    menuToggle.addEventListener("click", function (e) {
      console.log("Burger menu clicked!");
      e.preventDefault();
      menuOverlay.classList.add("active");
      document.body.style.overflow = "hidden";
      console.log(
        "Menu should be visible now, classes:",
        menuOverlay.classList
      );
    });

    // Close menu
    function closeMenu() {
      console.log("Closing menu");
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
  }, 100); // Small delay to ensure DOM elements are rendered
})();
