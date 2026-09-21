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
  initScheduleDetails();
  initPrintDisclosures();
  initPosterSearch();
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

    // Room columns change width here, so tiles that fit before may clip now.
    document.dispatchEvent(new CustomEvent("schedule:filtered"));
  }

  // Only the filter chips; chips without data-filter are plain links out.
  controls.querySelectorAll(".schedule-chip[data-filter]").forEach(function (chip) {
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

// Session pop-ups for the desktop timetable. Tile height is dictated by the
// session duration, so a 15-minute slot cannot show much text and anything an
// event carries in `details:` has nowhere to go at all. Every tile that either
// clips its text or has details becomes a popover trigger showing the lot.
function initScheduleDetails() {
  const grid = document.querySelector("[data-schedule-grid]");
  if (!grid || typeof bootstrap === "undefined") {
    return;
  }

  const tiles = Array.prototype.slice.call(grid.querySelectorAll(".tt-event"));

  function roomLabel(tile) {
    if (tile.dataset.room === "plenary") {
      return "All rooms";
    }
    const timetable = tile.closest(".timetable");
    if (!timetable) {
      return "";
    }
    let label = "";
    timetable.querySelectorAll(".tt-head[data-room]").forEach(function (head) {
      if (head.dataset.room !== tile.dataset.room) {
        return;
      }
      const name = head.querySelector(".tt-head__name");
      label = name ? name.textContent.trim() : "";
    });
    return label;
  }

  function buildContent(tile) {
    const body = document.createElement("div");

    const time = tile.querySelector(".tt-event__time");
    const meta = [time ? time.textContent.trim() : "", roomLabel(tile)].filter(
      function (part) {
        return part !== "";
      }
    );
    if (meta.length > 0) {
      const metaLine = document.createElement("p");
      metaLine.className = "schedule-popover__meta";
      metaLine.textContent = meta.join(" · ");
      body.append(metaLine);
    }

    const speaker = tile.querySelector(".tt-event__speaker");
    if (speaker) {
      const speakerLine = document.createElement("p");
      speakerLine.className = "schedule-popover__speaker";
      // Copy the nodes, not the text, so line breaks in `speaker:` survive.
      Array.prototype.slice
        .call(speaker.cloneNode(true).childNodes)
        .forEach(function (node) {
          speakerLine.append(node);
        });
      body.append(speakerLine);
    }

    const details = tile.querySelector("[data-event-details]");
    if (details) {
      const detailsBlock = document.createElement("div");
      detailsBlock.className = "schedule-popover__details";
      // Markdown from _data/schedule.yml, rendered by Jekyll at build time; no
      // visitor input reaches it, and Bootstrap sanitises it again on show.
      detailsBlock.innerHTML = details.innerHTML;
      body.append(detailsBlock);
    }

    return body;
  }

  function createPopover(tile) {
    const title = tile.querySelector(".tt-event__title");
    return new bootstrap.Popover(tile, {
      container: "body",
      customClass: "schedule-popover",
      placement: "auto",
      html: true,
      title: title ? title.textContent.trim() : "",
      content: function () {
        return buildContent(tile);
      },
      trigger: "hover focus",
    });
  }

  // Re-run whenever the tiles are re-laid out: filtering collapses room
  // columns and resizing changes how many lines fit.
  function sync() {
    tiles.forEach(function (tile) {
      // Not rendered right now (small screen, or filtered out): measuring
      // would report every tile as fitting, so leave the state alone — but
      // close a pop-up the tile may have had open when it disappeared.
      if (tile.offsetParent === null) {
        const hidden = bootstrap.Popover.getInstance(tile);
        if (hidden) {
          hidden.hide();
        }
        return;
      }

      const truncated = tile.scrollHeight - tile.clientHeight > 1;
      const hasMore = truncated || tile.querySelector("[data-event-details]") !== null;
      tile.classList.toggle("tt-event--truncated", truncated);
      tile.classList.toggle("tt-event--has-more", hasMore);

      const popover = bootstrap.Popover.getInstance(tile);
      if (hasMore && !popover) {
        tile.setAttribute("tabindex", "0");
        createPopover(tile);
      } else if (!hasMore && popover) {
        popover.dispose();
        tile.removeAttribute("tabindex");
      }
    });
  }

  document.addEventListener("schedule:filtered", sync);

  let resizeTimer = null;
  window.addEventListener("resize", function () {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(sync, 150);
  });

  document.addEventListener("keydown", function (event) {
    if (event.key !== "Escape") {
      return;
    }
    tiles.forEach(function (tile) {
      const popover = bootstrap.Popover.getInstance(tile);
      if (popover) {
        popover.hide();
      }
    });
  });

  sync();

  // Line breaks shift once the web font swaps in, which changes what clips.
  if (document.fonts) {
    document.fonts.ready.then(sync);
  }
}

// Collapsed poster lists in the mobile agenda: a closed <details> prints as a
// single summary line, which would drop 40-odd posters from the PDF export.
function initPrintDisclosures() {
  const disclosures = document.querySelectorAll("details[data-print-open]");
  if (disclosures.length === 0) {
    return;
  }

  function setOpen(open) {
    disclosures.forEach(function (disclosure) {
      // Remember the reader's own choice so restoring doesn't collapse a
      // section they had deliberately expanded.
      if (open) {
        disclosure.dataset.wasOpen = disclosure.open ? "1" : "0";
        disclosure.open = true;
      } else if (disclosure.dataset.wasOpen === "0") {
        disclosure.open = false;
      }
    });
  }

  window.addEventListener("beforeprint", function () {
    setOpen(true);
  });
  window.addEventListener("afterprint", function () {
    setOpen(false);
  });
}

// Free-text filter on /programme/posters/. Each card carries a pre-lowercased
// `data-search` string built by Jekyll, so matching never touches the DOM text
// or interprets the query as anything but a literal substring.
function initPosterSearch() {
  const toolbar = document.querySelector("[data-poster-toolbar]");
  if (!toolbar) {
    return;
  }

  const input = toolbar.querySelector("[data-poster-search]");
  const counter = toolbar.querySelector("[data-poster-count]");
  const empty = document.querySelector("[data-poster-empty]");
  const sections = Array.prototype.slice.call(
    document.querySelectorAll("[data-poster-session]")
  );
  const cards = Array.prototype.slice.call(
    document.querySelectorAll("[data-poster]")
  );

  function apply() {
    const query = input.value.trim().toLowerCase();
    let visible = 0;

    cards.forEach(function (card) {
      const match = query === "" || card.dataset.search.indexOf(query) !== -1;
      card.classList.toggle("d-none", !match);
      if (match) {
        visible += 1;
      }
    });

    // Hide a session heading once none of its posters survive the filter.
    sections.forEach(function (section) {
      const shown = section.querySelector("[data-poster]:not(.d-none)");
      section.classList.toggle("d-none", shown === null);
    });

    if (empty) {
      empty.classList.toggle("d-none", visible > 0);
    }
    counter.textContent =
      query === ""
        ? ""
        : visible + (visible === 1 ? " poster matches" : " posters match");
  }

  input.addEventListener("input", apply);
  input.addEventListener("search", apply);
  apply();
}
