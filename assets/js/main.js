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
      link.addEventListener("click", function () {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) {
          bsCollapse.hide();
        }
      });
    });
  }
});
