---
layout: page
title: Schedule
---

<h2 class="section-heading">{{ page.title }}</h2>

<p>
  The schedule of the workshop is to be defined.
</p>

<p>
  The workshop will include:
  <ul>
      <li>Plenary sessions with expert keynote speakers from diverse domains—both within and beyond EO</li>
      <li>Round tables and open discussions</li>
      <li>Poster sessions to foster interactions and strengthen the growing EO–Agentic AI community. These sessions will provide a platform for participants, especially early‑career researchers, to present their work, network, and exchange ideas in an informal and collaborative environment.</li>
      <li>Hands-on sessions dedicated to Agentic AI for EO: Practical training opportunities enabling participants to experiment with planning agents, LLM-based orchestrators, EO-aware multi-agent frameworks, geospatial reasoning tools, and prototype implementations of agentic workflows.</li>
      <li>Demonstration sessions for organisations to showcase their latest agentic AI innovations: Open to agencies, industry, research organisations, and startups, these demos will allow entities to present their most recent prototypes, tools, and operational systems in a dynamic and interactive format.</li>
  </ul>
</p>



{% for day in site.data.schedule %}
<!-- <h2 class="section-heading mt-4">{{ day.day }}</h2>

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
</div> -->
{% endfor %}
