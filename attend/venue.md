---
layout: page
title: Venue
---

<h2 class="section-heading">{{ page.title }}</h2>

<div class="row g-5">
  <div class="col-lg-6">
    <p>  
      The event takes place at the <strong>Langenbeck-Virchow-Haus</strong>, located
      in the heart of the city with excellent public transport connections.
    </p>
    <ul class="list-unstyled mt-4">
      <li class="mb-3">
        <img src="/assets/images/logos/LVH_Logo_Horizontal_RGB_Bronzeum.svg" alt="Langenbeck-Virchow-Haus" class="img-fluid mb-3" style="width: 300px; height: auto;"><br>
        <strong>Address:</strong><br>
        {{ site.venue_name }}<br>
        {{ site.venue_address }}
      </li>
      <li class="mb-3">
        <strong>Public Transport:</strong><br>
        U-Bahn: Alexanderplatz (U2, U5, U8)<br>
        S-Bahn: Alexanderplatz (S5, S7, S75)
      </li>
      <li>
        <strong>From Airports:</strong><br>
        BER Airport → Berlin Hbf via FEX (30 min), then S-Bahn to Alexanderplatz (5 min)
      </li>
    </ul>
  </div>
  <div class="col-lg-6">
    <div class="ratio ratio-4x3 bg-light border rounded d-flex align-items-center justify-content-center">
      <div class="text-center text-body-secondary p-4">
        <iframe width="550" height="400" src="https://www.openstreetmap.org/export/embed.html?bbox=13.376908600330355%2C52.52480878138444%2C13.382165729999542%2C52.52683719103691&amp;layer=mapnik&amp;marker=52.5258229979198%2C13.379537165164948" style="border: 1px solid black"></iframe><br/><small><a href="https://www.openstreetmap.org/?mlat=52.525823&amp;mlon=13.379537#map=19/52.525823/13.379537">View Larger Map</a></small>
      </div>
    </div>
  </div>
</div>

<h3 class="section-heading mt-5 mb-3">Impressions</h3>

<div class="row g-4">
  {% for image in site.data.venue_images %}
  <div class="col-md-6 col-lg-4">
    <figure class="figure w-100 m-0">
      <img
        src="{{ image.src }}"
        class="figure-img img-fluid rounded shadow-sm w-100"
        alt="{{ image.name }}"
        loading="lazy">
      <figcaption class="figure-caption d-flex justify-content-between align-items-baseline gap-2">
        <strong>{{ image.name }}</strong>
        <span class="text-body-secondary">&copy; {{ image.copyright }}</span>
      </figcaption>
    </figure>
  </div>
  {% endfor %}
</div>
