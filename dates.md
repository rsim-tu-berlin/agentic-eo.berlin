---
layout: page
title: Dates
hero_image: /assets/images/backgrounds/Agentic_AI_EO_header_2560x160.png
---

<h2 class="section-heading">{{ page.title }}</h2>

<p>
  Below are the key milestones for the workshop — from the submission window to
  the event itself in Berlin.
</p>

{%- comment -%}
  Milestones are flagged "past" at site-build time by comparing site.time to the
  start of the day AFTER each milestone (so a milestone is only greyed once the
  whole day has elapsed). Update these cutoffs together with the visible dates.
{%- endcomment -%}
{%- assign now = site.time | date: "%s" | plus: 0 -%}
{%- assign cutoff_submission   = "2026-07-02T00:00:00Z" | date: "%s" | plus: 0 -%}
{%- assign cutoff_notification = "2026-08-01T00:00:00Z" | date: "%s" | plus: 0 -%}
{%- assign cutoff_registration = "2026-08-02T00:00:00Z" | date: "%s" | plus: 0 -%}
{%- assign cutoff_programme    = "2026-09-16T00:00:00Z" | date: "%s" | plus: 0 -%}
{%- assign cutoff_workshop     = "2026-10-22T00:00:00Z" | date: "%s" | plus: 0 -%}

<div class="row">
  <div class="col-lg-9 col-xl-8">
    <ol class="dates-timeline">
      <li class="dates-timeline__item{% if now >= cutoff_submission %} dates-timeline__item--past{% endif %}">
        <span class="dates-timeline__marker" aria-hidden="true"></span>
        <span class="dates-timeline__date">
          1 July 2026 11:59 PM (CEST) {% if now >= cutoff_submission %}<span class="visually-hidden"> (passed)</span>{% endif %}
        </span>
        <p class="dates-timeline__title mb-0">
          Submission deadline — abstracts, demos, and hands-on proposals
        </p>
      </li>
      <li class="dates-timeline__item{% if now >= cutoff_notification %} dates-timeline__item--past{% endif %}">
        <span class="dates-timeline__marker" aria-hidden="true"></span>
        <span class="dates-timeline__date">
          31 July 2026{% if now >= cutoff_notification %}<span class="visually-hidden"> (passed)</span>{% endif %}
        </span>
        <p class="dates-timeline__title mb-0">
          Notification of acceptance
        </p>
      </li>
      <li class="dates-timeline__item{% if now >= cutoff_programme %} dates-timeline__item--past{% endif %}">
        <span class="dates-timeline__marker" aria-hidden="true"></span>
        <span class="dates-timeline__date">
          15 September 2026{% if now >= cutoff_programme %}<span class="visually-hidden"> (passed)</span>{% endif %}
        </span>
        <p class="dates-timeline__title mb-0">
          Release of the final programme
        </p>
      </li>
      <li class="dates-timeline__item dates-timeline__item--highlight{% if now >= cutoff_workshop %} dates-timeline__item--past{% endif %}">
        <span class="dates-timeline__marker" aria-hidden="true"></span>
        <span class="dates-timeline__date">
          19–21 October 2026{% if now >= cutoff_workshop %}<span class="visually-hidden"> (passed)</span>{% endif %}
        </span>
        <p class="dates-timeline__title mb-0">
          Workshop in Berlin
        </p>
      </li>
    </ol>
  </div>
</div>
