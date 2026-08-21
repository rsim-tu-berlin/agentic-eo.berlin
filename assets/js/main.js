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

  // "Download PDF" for the schedule: open the browser print dialog, which
  // lets the user save the page as a PDF. Uses a dedicated print stylesheet
  // (see @media print in style.css) so the export reflects the active filters.
  document.querySelectorAll("[data-print-schedule]").forEach(function (button) {
    button.addEventListener("click", function () {
      window.print();
    });
  });

  initScheduleFilters();
});

// Schedule day/room filtering. Drives both the desktop timetable grid and the
// mobile/print agenda list from a single state, using only data-* attributes
// rendered by Jekyll (no user input reaches any sensitive API).
function initScheduleFilters() {
  const controls = document.querySelector("[data-schedule-controls]");
  if (!controls) {
    return;
  }

  const grid = document.querySelector("[data-schedule-grid]");
  const list = document.querySelector("[data-schedule-list]");
  const emptyMessage = document.querySelector("[data-schedule-empty]");

  // Room ids come straight from the rendered room chips.
  const roomIds = Array.prototype.slice
    .call(controls.querySelectorAll('[data-filter="room"]'))
    .map(function (chip) {
      return chip.dataset.value;
    })
    .filter(function (value) {
      return value !== "all";
    });

  const state = { day: "all", room: "all" };

  function matchesRoom(itemRoom) {
    return (
      state.room === "all" ||
      itemRoom === state.room ||
      itemRoom === "plenary"
    );
  }

  function matchesDay(itemDay) {
    return state.day === "all" || itemDay === state.day;
  }

  function applyFilters() {
    let visibleCount = 0;

    // ----- Agenda list (canonical for the empty-state count) -----
    if (list) {
      list.querySelectorAll(".schedule-list__day").forEach(function (dayGroup) {
        const dayId = dayGroup.dataset.day;
        const dayVisible = matchesDay(dayId);
        let dayHasVisible = false;

        dayGroup
          .querySelectorAll(".schedule-list__item")
          .forEach(function (item) {
            const show =
              dayVisible && matchesRoom(item.dataset.room);
            item.classList.toggle("d-none", !show);
            if (show) {
              dayHasVisible = true;
              visibleCount += 1;
            }
          });

        dayGroup.classList.toggle("d-none", !dayVisible || !dayHasVisible);
      });
    }

    // ----- Desktop timetable grid -----
    if (grid) {
      grid.querySelectorAll(".timetable-wrap").forEach(function (wrap) {
        const dayId = wrap.dataset.day;
        const dayVisible = matchesDay(dayId);
        wrap.classList.toggle("d-none", !dayVisible);

        const timetable = wrap.querySelector(".timetable");
        if (!timetable) {
          return;
        }

        // Collapse non-selected room columns via per-room CSS variables and
        // hide their header + event cells. Plenary cells always stay visible.
        roomIds.forEach(function (roomId) {
          const roomVisible = state.room === "all" || roomId === state.room;
          timetable.style.setProperty(
            "--rw-" + roomId,
            roomVisible ? "1fr" : "0"
          );
        });

        timetable
          .querySelectorAll(".tt-head[data-room], .tt-event[data-room]")
          .forEach(function (cell) {
            const cellRoom = cell.dataset.room;
            const show = cellRoom === "plenary" || matchesRoom(cellRoom);
            cell.classList.toggle("d-none", !show);
          });
      });
    }

    if (emptyMessage) {
      emptyMessage.classList.toggle("d-none", visibleCount !== 0);
    }
  }

  controls.querySelectorAll(".schedule-chip").forEach(function (chip) {
    chip.addEventListener("click", function () {
      const group = chip.dataset.filter;
      const value = chip.dataset.value;

      controls
        .querySelectorAll('[data-filter="' + group + '"]')
        .forEach(function (sibling) {
          sibling.classList.toggle("is-active", sibling === chip);
        });

      state[group] = value;
      applyFilters();
    });
  });

  applyFilters();
}
