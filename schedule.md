---
layout: page
title: Schedule
---

{% for day in site.data.schedule %}
<h2 class="section-heading mt-4">{{ day.day }}</h2>

<div class="table-responsive mt-3 mb-5">
  <table class="table schedule-table align-middle">
    <thead>
      <tr>
        <th style="width: 100px;">Time</th>
        <th>Session</th>
        <th style="width: 220px;">Speaker</th>
      </tr>
    </thead>
    <tbody>
      {% for session in day.sessions %}
      <tr>
        <td class="fw-semibold">{{ session.time }}</td>
        <td>
          {{ session.title }}
          {% if session.type == "keynote" %}
            <span class="badge bg-primary ms-2">Keynote</span>
          {% elsif session.type == "workshop" %}
            <span class="badge bg-success ms-2">Workshop</span>
          {% elsif session.type == "panel" %}
            <span class="badge bg-info text-dark ms-2">Panel</span>
          {% elsif session.type == "break" %}
            <span class="badge bg-secondary ms-2">Break</span>
          {% endif %}
        </td>
        <td class="text-body-secondary">{{ session.speaker }}</td>
      </tr>
      {% endfor %}
    </tbody>
  </table>
</div>
{% endfor %}
