---
layout: page
title: Posters
---

{% comment %}
  The full poster list, built from the `items:` of every `type: poster` event in
  _data/schedule.yml. The timetable and the mobile agenda only show a count and
  a link to the per-session anchors below, so this page is the single place a
  poster's title, presenters and board number are written.
{% endcomment %}

{% assign poster_sessions = site.data.schedule.events | where: "type", "poster" %}
{% assign total = 0 %}
{% for session in poster_sessions %}{% assign total = total | plus: session.items.size %}{% endfor %}

<h2 class="section-heading">{{ page.title }}</h2>

<p>
  {{ total }} posters are on display across {{ poster_sessions.size }} sessions at
  {{ site.venue_name }}. Presenters stand by their boards for the whole session.
</p>

<div class="poster-toolbar d-print-none" data-poster-toolbar>
  <label class="visually-hidden" for="poster-search">Search posters</label>
  <input type="search" class="form-control" id="poster-search" data-poster-search
         placeholder="Search by title, presenter or institution" autocomplete="off">
  <p class="poster-toolbar__count text-body-secondary mb-0" data-poster-count aria-live="polite"></p>
</div>

<p class="poster-empty text-body-secondary d-none" data-poster-empty>
  No posters match your search.
</p>

{% for session in poster_sessions %}
{% assign day = site.data.schedule.days | where: "id", session.day | first %}
{% assign room = site.data.schedule.rooms | where: "id", session.room | first %}

<section class="poster-session" id="{{ session.slug }}" data-poster-session>
  <h3 class="section-heading mt-5">{{ session.title }}</h3>
  <p class="poster-session__meta">
    {{ day.label }} · {{ day.date }} · {{ session.start }}–{{ session.end }} ·
    {{ room.name }}{% if room.floor %} ({{ room.floor }}){% endif %} ·
    {{ session.items.size }} posters
  </p>
  {% if session.summary and session.summary != "" %}
  <div class="poster-session__summary">{{ session.summary | markdownify }}</div>
  {% endif %}

  {% include schedule-contributions.html items=session.items searchable=true %}
</section>
{% endfor %}

<p class="mt-5 d-print-none">
  <a href="/programme/schedule/">Back to the full schedule</a>
</p>
