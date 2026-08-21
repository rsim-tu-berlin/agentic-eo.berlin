---
layout: page
title: Schedule
---

<div class="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-3">
  <h2 class="section-heading mb-0">{{ page.title }}</h2>
</div>

<p class="d-print-none">
  The final programme will be announced on 15 September 2026. Please use the filters below to
  focus on a single day or room.
</p>

<div class="schedule-print-header d-none">
  <h1>{{ site.title }}</h1>
  <p>{{ site.description }}</p>
</div>

{% include schedule-filters.html %}

<p class="schedule-empty text-body-secondary d-none" data-schedule-empty>
  No sessions match the current filters.
</p>

{% include schedule-grid.html %}
{% include schedule-list.html %}
