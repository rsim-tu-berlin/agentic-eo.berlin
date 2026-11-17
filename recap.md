---
layout: page
title: Workshop Recap
description: "Photos and video from the Agentic AI for Earth Observation Workshop, 19–21 October 2026 in Berlin."
---

{% assign recap = site.data.recap %}

<h2 class="section-heading">{{ page.title }}</h2>

<p class="text-justify">
  Thank you to everyone who joined us in Berlin! The first Agentic AI for Earth Observation Workshop, co-hosted by BIFOLD and ESA Φ-lab from 19 to 21 October 2026, brought together more than 500 participants from academia, industry and government at the Langenbeck-Virchow-Haus to discuss how autonomous AI agents can change the way we acquire, process and act on satellite and geospatial data.
  Read the key takeaways in the <a href="{{ recap.source_url }}" target="_blank" rel="noopener">BIFOLD news article</a>.
</p>

<h3 class="section-heading mt-5">Video</h3>
<div class="row">
  <div class="col-lg-10 col-xl-8">
    {% include recap-video.html %}
  </div>
</div>

<h3 class="section-heading mt-5 mb-1">Photo Gallery</h3>
<p class="text-body-secondary small">Photos: &copy; {{ recap.default_credit }}. Click a photo to enlarge.</p>

{% for section in recap.sections %}
<h4 class="recap-section-title mt-4 mb-3">{{ section.title }}</h4>
<div class="row g-2 g-md-3 recap-grid">
  {% for photo in section.photos %}
  {% assign credit = photo.credit | default: recap.default_credit %}
  <div class="col-6 col-md-4 col-lg-3">
    <a
      class="recap-thumb"
      href="{{ '/assets/images/recap/full/' | append: photo.file | relative_url }}"
      data-lightbox-item
      data-alt="{{ photo.alt | escape }}"
      data-credit="&copy; {{ credit | escape }}"
    >
      <img
        src="{{ '/assets/images/recap/thumb/' | append: photo.file | relative_url }}"
        alt="{{ photo.alt | escape }}"
        loading="lazy"
        decoding="async"
        width="640" height="427"
      >
    </a>
  </div>
  {% endfor %}
</div>
{% endfor %}

{% include photo-lightbox.html %}
