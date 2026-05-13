document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  const currentPath = window.location.pathname.replace(/\/$/, "") || "/";

  navLinks.forEach(function (link) {
    const linkPath = link.getAttribute("href").replace(/\/$/, "") || "/";
    if (currentPath === linkPath) {
      link.classList.add("active", "fw-semibold");
    } else {
      link.classList.remove("active", "fw-semibold");
    }
  });

  const navbarCollapse = document.getElementById("mainNav");
  if (navbarCollapse) {
    navLinks.forEach(function (link) {
      if (link.classList.contains("dropdown-toggle")) {
        return;
      }
      link.addEventListener("click", function () {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) {
          bsCollapse.hide();
        }
      });
    });

    navbarCollapse.querySelectorAll(".dropdown-item").forEach(function (item) {
      item.addEventListener("click", function () {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) {
          bsCollapse.hide();
        }
      });
    });

    const dropdowns = navbarCollapse.querySelectorAll(".nav-item.dropdown");
    dropdowns.forEach(function (dropdown) {
      dropdown.addEventListener("mouseenter", function () {
        if (window.innerWidth < 992) {
          return;
        }
        dropdowns.forEach(function (other) {
          if (other === dropdown) {
            return;
          }
          const toggle = other.querySelector(".dropdown-toggle");
          if (!toggle) {
            return;
          }
          const instance = bootstrap.Dropdown.getInstance(toggle);
          if (instance) {
            instance.hide();
          }
        });
      });
    });
  }
});
