---
layout: page
title: Accommodation / Hotels
---

<h2 class="section-heading">{{ page.title }}</h2>

<p>
  Please find below all the information regarding hotels located near the venue.
</p>

<div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4 mt-2">
  {% for hotel in site.data.accommodation_hotels %}
  <div class="col">
    <div class="card h-100 shadow-sm hotel-card">
      <div class="card-body d-flex flex-column">
        <h5 class="card-title fw-bold mb-1" style="color: var(--color-primary);">{{ hotel.name }}</h5>
        <span class="badge mb-3" style="background-color: var(--color-primary-light); color: #fff; align-self: flex-start;">{{ hotel.star_category }}</span>
        <ul class="list-unstyled small text-muted flex-grow-1 mb-3">
          <li class="mb-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-geo-alt-fill me-1" viewBox="0 0 16 16"><path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/></svg>
            {{ hotel.address }}
          </li>
          <li class="mb-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-walking" viewBox="0 0 16 16"><path d="M9.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M6.44 3.752A.75.75 0 0 1 7 3.5h1.445c.742 0 1.32.643 1.243 1.38l-.43 4.083a1.8 1.8 0 0 1-.088.395l-.318.906.213.242a.8.8 0 0 1 .114.175l2 4.25a.75.75 0 1 1-1.357.638l-1.956-4.154-1.68-1.921A.75.75 0 0 1 6 8.96l.138-2.613-.435.489-.464 2.786a.75.75 0 1 1-1.48-.246l.5-3a.75.75 0 0 1 .18-.375l2-2.25Z"/><path d="M6.25 11.745v-1.418l1.204 1.375.261.524a.8.8 0 0 1-.12.231l-2.5 3.25a.75.75 0 1 1-1.19-.914zm4.22-4.215-.494-.494.205-1.843.006-.067 1.124 1.124h1.44a.75.75 0 0 1 0 1.5H11a.75.75 0 0 1-.531-.22Z"/></svg>
            {{ hotel.distance_to_conference_venue }}
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-tag-fill me-1" viewBox="0 0 16 16"><path d="M2 1a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 6.586 1H2zm4 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/></svg>
            {{ hotel.room_price }}
          </li>
        </ul>
        <div class="d-flex gap-2 mt-auto">
          <a href="{{ hotel.website }}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline-primary flex-fill">Website</a>
          <!-- <a href="{{ hotel.reservation }}" target="_blank" rel="noopener noreferrer" class="btn btn-sm flex-fill text-white" style="background-color: var(--color-primary);">Book</a> -->
        </div>
      </div>
    </div>
  </div>
  {% endfor %}
</div>
