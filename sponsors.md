---
layout: page
title: Sponsors
---

<p class="lead mb-5">
  We are grateful to our sponsors for making Agentic EO Berlin possible.
</p>
{% assign tiers = "platinum,gold,silver" | split: "," %}
{% for tier in tiers %}
  {% assign tier_sponsors = site.data.sponsors | where: "tier", tier %}
  {% if tier_sponsors.size > 0 %}
<h2 class="section-heading text-capitalize mt-4">{{ tier }} Sponsors</h2>
<div class="row g-4 align-items-center justify-content-center mb-5">
  {% for sponsor in tier_sponsors %}
<div class="col-6 col-md-4 col-lg-3 text-center">
  <a href="{{ sponsor.url }}" target="_blank" rel="noopener noreferrer">
    <img
      src="{{ sponsor.logo }}"
      alt="{{ sponsor.name }}"
      class="img-fluid sponsor-logo"
    >
  </a>
  <p class="mt-2 small fw-semibold">{{ sponsor.name }}</p>
</div>
  {% endfor %}
</div>
  {% endif %}
{% endfor %}
