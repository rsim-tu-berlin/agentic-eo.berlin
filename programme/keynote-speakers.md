---
layout: page
title: Keynote Speakers
---

<div class="row g-4">
  {% for speaker in site.data.speakers %}
  <div class="col-md-6 col-lg-4">
    <div class="card speaker-card h-100 shadow-sm">
      <img
        src="{{ speaker.image }}"
        class="card-img-top"
        alt="{{ speaker.name }}"
      >
      <div class="card-body">
        <h5 class="card-title fw-bold">{{ speaker.name }}</h5>
        <p class="text-body-secondary mb-2">{{ speaker.role }}, {{ speaker.affiliation }}</p>
        <p class="card-text">{{ speaker.bio }}</p>
      </div>
    </div>
  </div>
  {% endfor %}
</div>
