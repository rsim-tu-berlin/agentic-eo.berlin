---
layout: page
title: Hackathon
---

<h2 class="section-heading">{{ page.title }}</h2>

<p class="lead">
  <strong>Build-once, run-anywhere: an EO MCP tool hackathon for the open Earth-agent ecosystem</strong>
</p>

<p>
  <strong>22 October 2026</strong> — a one-day sprint (~7 hours, starting at 9:00) following the
  main workshop programme.
</p>

<h3 class="section-heading mt-5">Scope</h3>

<p>
  <strong>From EO services to tools and use cases</strong>: a one-day hackathon on agentic Earth
  Observation for scientists, AI practitioners, and software engineers. The day centres on
  <a href="https://eve.philab.esa.int/" target="_blank" rel="noopener">EVE's official tool registry</a>,
  an ESA Φ-lab-backed public, community-driven registry of standardised, traceable MCP servers and
  tools. Participants wrap EO services as agent-callable tools, compose them into agentic workflows,
  iterate until the use case runs end-to-end, and share what they build with the community through
  the registry.
</p>

<h3 class="section-heading mt-5">Objectives</h3>

<p>The day aims to:</p>

<ul>
  <li>Show how EVE's official MCP tool registry supports discovery, contribution, and reuse of tools.</li>
  <li>Let teams go from EO service to MCP tool to completed use case in one day.</li>
  <li>Practise building, testing, and iterating MCP servers (schemas, errors, composition) against live queries.</li>
  <li>Publish a pull request to EVE's official MCP tool registry that can pass the automated checks.</li>
  <li>Showcase what you built.</li>
</ul>

<h3 class="section-heading mt-5">Participants</h3>

<p>The hackathon primarily targets different backgrounds:</p>

<ul>
  <li>Earth Observation scientists and analysts who want an agent to run a concrete use case.</li>
  <li>AI engineers and developers.</li>
  <li>PhD students, post-docs, and early-career researchers in EO or applied AI.</li>
</ul>

<p>
  Join on your own or in a <strong>team of 1–4</strong>. Come with your team or find one during the
  day: pick a use case together and plan what you aim to build during the sprint. Mixed backgrounds
  are welcome and encouraged.
</p>

<h4 class="mt-4">Prerequisites</h4>

<ul>
  <li>Good programming skills in Python.</li>
  <li>Knowledge of EO or related domains.</li>
  <li>Basic knowledge of LLMs and agents.</li>
</ul>

<h3 class="section-heading mt-5">Scientific and technical focus</h3>

<p>
  The hackathon is use-case driven and open across Earth Observation. Agriculture, climate,
  disasters, forests, marine, urban, and other EO domains are all in scope. We encourage teams to
  work on different topics and bring use cases that match their backgrounds.
</p>

<p>Participants will have access to:</p>

<ul>
  <li>A starter MCP server template.</li>
  <li>The agent runtime (model, memory, prompting, orchestration, auth, frontend).</li>
  <li>A sandboxed environment to run experiments and tests.</li>
  <li>An existing registry of tools.</li>
</ul>

<h3 class="section-heading mt-5">Results</h3>

<p>By the end of the day, you will know how to:</p>

<ul>
  <li>Wrap an EO service as an MCP server with agent-callable tools.</li>
  <li>Refine schemas, errors, composition, and provenance until an agentic workflow completes your use case.</li>
  <li>Contribute through EVE's official tool registry: publish your tool in the open-source registry, where others in the community can discover and reuse it.</li>
  <li>Demo the use case.</li>
</ul>

<h3 class="section-heading mt-5">How it works</h3>

<p>
  The day is organised in three steps: <strong>Connect</strong> → <strong>Compose</strong> →
  <strong>Solve</strong>. As a team (or on your own), pick an EO use case from the examples below,
  or bring one from your own work, and work through it as far as the day allows. The four examples
  below use the same thread at each step: they start as a single tool call and grow into a real EO
  deliverable.
</p>

<h4 class="mt-4">Step 1: Connect</h4>

<p>Give the agent a first callable interface to one EO service. Success is a clean tool the agent can use on a real query.</p>

<ul>
  <li><strong>A.</strong> What is the latest cloud-free Sentinel-2 scene over the Nile Delta?</li>
  <li><strong>B.</strong> What was the average temperature in Madrid last week (ERA5)?</li>
  <li><strong>C.</strong> Fetch the latest Copernicus Emergency Management Service flood map for this activation.</li>
  <li><strong>D.</strong> Which cloud-free Sentinel-2 scenes cover Mai-Ndombe province, DRC, in 2018 and in 2026?</li>
</ul>

<h4 class="mt-4">Step 2: Compose</h4>

<p>The same use case now needs more than one capability. Wrap or extend what is missing, reuse what is already in the registry, then test and iterate until the workflow runs end-to-end.</p>

<ul>
  <li><strong>A.</strong> How did water and vegetation in the Nile Delta change between that latest cloud-free scene and a comparable scene from one year earlier?</li>
  <li><strong>B.</strong> How did last week's Madrid temperature compare with the same week over the last ten years, and with precipitation in the same window?</li>
  <li><strong>C.</strong> Given that CEMS flood map, what flooded area do Sentinel-1 (and, if cloud-free, Sentinel-2) show for the same dates, and which admin units are most affected?</li>
  <li><strong>D.</strong> Using those scenes, estimate forest regrowth 2018 vs 2026 and hectares by district, with a confidence threshold you can change.</li>
</ul>

<h4 class="mt-4">Step 3: Solve</h4>

<p>Turn that same thread into an operational deliverable: a map, a table, a short narrative, and provenance. Identify remaining gaps, build the missing server(s), run the agent, inspect traces, fix schemas, errors, and processing, and repeat.</p>

<ul>
  <li><strong>A.</strong> Nile Delta briefing: before/after map, km² of water and vegetation change by governorate, short narrative citing scene IDs and methods, full tool-call trace.</li>
  <li><strong>B.</strong> Madrid climate note: anomaly map, table vs the 10-year climatology, short narrative with ERA5/CDS versions, provenance that an analyst can reuse.</li>
  <li><strong>C.</strong> Rapid flood note: pixel map, hectares per district, comparison with the CEMS product, sources and trace ready to hand on.</li>
  <li><strong>D.</strong> Forest-regrowth briefing for Mai-Ndombe: before/after mosaics, hectares by district with a confidence estimate, short narrative citing data and model versions, full audit trail (and a report if you get that far).</li>
</ul>

<h4 class="mt-4">Optional: Agent-to-Agent (A2A)</h4>

<p>
  Once your workflow runs end to end, you can go one step further and expose that capability as an
  A2A agent, callable by other agents in a multi-agent setup.
</p>

<h3 class="section-heading mt-5">Example use cases</h3>

<p>Pick one of these starting points, or bring a use case from your own work.</p>

<h4 class="mt-4">Forest regrowth</h4>

<p>
  Before/after Sentinel-2 mosaics for a province (e.g. Mai-Ndombe, DRC, 2018 vs 2026); hectares
  regrown by district with a confidence estimate; short narrative and audit trail.
</p>

<p>
  Candidate services:
  <a href="https://dataspace.copernicus.eu/" target="_blank" rel="noopener">Copernicus Data Space</a>
  (STAC),
  <a href="https://openeo.org/" target="_blank" rel="noopener">openEO</a>.
</p>

<h4 class="mt-4">72-hour flood forecast</h4>

<p>
  For a named basin: combine recent EO, rainfall forecast, terrain, rivers, and land cover; return
  inundation extent, water depth, timing of the peak, and a reusable geospatial product.
</p>

<p>
  Candidate services:
  <a href="https://cds.climate.copernicus.eu/" target="_blank" rel="noopener">Copernicus CDS</a>
  (ERA5, <a href="https://www.globalfloods.eu/" target="_blank" rel="noopener">GloFAS</a>),
  <a href="https://dataspace.copernicus.eu/" target="_blank" rel="noopener">Copernicus Data Space</a>,
  <a href="https://esa-worldcover.org/en" target="_blank" rel="noopener">ESA WorldCover</a>,
  <a href="https://land.copernicus.eu/" target="_blank" rel="noopener">Copernicus Land Monitoring</a>.
</p>

<h4 class="mt-4">Cocoa supply-chain risk</h4>

<p>
  From farm polygons: forest loss and deforestation risk, proximity to protected areas, drought
  exposure, and a supplier-level environmental note with provenance.
</p>

<p>
  Candidate services:
  <a href="https://www.globalforestwatch.org/" target="_blank" rel="noopener">Global Forest Watch</a>
  (API),
  <a href="https://www.protectedplanet.net/" target="_blank" rel="noopener">Protected Planet</a>
  (API),
  <a href="https://cds.climate.copernicus.eu/" target="_blank" rel="noopener">Copernicus CDS</a>
  (ERA5).
</p>

<h3 class="section-heading mt-5">Schedule</h3>

<div class="table-responsive">
  <table class="table table-striped align-middle">
    <thead>
      <tr>
        <th scope="col">Time</th>
        <th scope="col">Phase</th>
        <th scope="col">Content</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row" class="fw-normal text-nowrap">09:00–09:45</th>
        <td>Kickoff &amp; primer</td>
        <td>Intro to the environment, the challenge, and the technologies; tour of EVE's official tool registry; starter template; conformance check</td>
      </tr>
      <tr>
        <th scope="row" class="fw-normal text-nowrap">09:45–10:15</th>
        <td>Team formation &amp; scoping</td>
        <td>Teams of 1–4 form, decide a use case</td>
      </tr>
      <tr>
        <th scope="row" class="fw-normal text-nowrap">10:15–14:15</th>
        <td>Build sprint</td>
        <td>Build MCP servers, test with the agent, iterate; mentors circulate</td>
      </tr>
      <tr>
        <th scope="row" class="fw-normal text-nowrap">14:15–14:45</th>
        <td>Submission</td>
        <td>Teams deliver their submission</td>
      </tr>
      <tr>
        <th scope="row" class="fw-normal text-nowrap">14:45–15:45</th>
        <td>Demos &amp; cross-platform showcase</td>
        <td>Live demos of the workflow each team built</td>
      </tr>
    </tbody>
  </table>
</div>

<p class="d-print-none">
  See also the <a href="/programme/schedule/">workshop schedule</a> for 19–21 October.
</p>

<h3 class="section-heading mt-5">Location</h3>

<p>
  Remote Sensing Image Analysis Group, BIFOLD, Franklinstr. 28/29, 6th floor, 10587 Berlin, Germany.
</p>

<h3 class="section-heading mt-5">Awards</h3>

<p>
  To encourage innovation and reward outstanding contributions, a total prize pool of
  <strong>€1,000</strong> will be awarded to the top three teams based on the quality, merit,
  originality, technical execution, and potential impact of their solution.
</p>

<p>The prizes are:</p>

<ul>
  <li>🥇 1st Place: €500</li>
  <li>🥈 2nd Place: €300</li>
  <li>🥉 3rd Place: €200</li>
</ul>

<p>
  Submissions will be evaluated by a jury composed of representatives from ESA Φ-lab, TU
  Berlin/BIFOLD and invited experts.
</p>

<p>
  The awards are sponsored and distributed by the
  <a href="https://challenges.philab.esa.int/" target="_blank" rel="noopener">ESA Φ-lab Challenges Programme</a>.
  Every participating team must designate a team leader who acts as the main point of contact. All
  prize money and reimbursements will be transferred to the point of contact of the respective
  team. The point of contact and the teams are responsible for the fair and equal distribution of
  the prize money between all team members.
</p>

<h3 class="section-heading mt-5">Organizers</h3>

<p>
  This event is organized by <a href="https://picampus-school.com" target="_blank" rel="noopener">Pi School</a>
  and <a href="https://bifold.eu/" target="_blank" rel="noopener">BIFOLD</a>, in collaboration with
  <a href="https://philab.esa.int/" target="_blank" rel="noopener">ESA Φ-lab</a>, as part of the
  <a href="https://eve.philab.esa.int/" target="_blank" rel="noopener">EVE</a> project.
</p>

<h3 class="section-heading mt-5">How to apply</h3>

<p>
  Places are limited. Submit your application using the registration form on the event page linked
  below. After applications close, a selection will be carried out to build a balanced cohort for
  the day.
</p>

<p><strong>Timeline:</strong></p>

<ul>
  <li>Registration deadline: <strong>30 September 2026</strong></li>
  <li>Acceptance notice: <strong>2 October 2026</strong></li>
  <li>Confirm your participation by: <strong>6 October 2026</strong></li>
</ul>

<p>
  If you are applying with a team, make sure that every teammate submits their own application.
</p>

<h4 class="mt-4">Selection criteria</h4>

<p>
  Organizers will review applications and choose participants to build a balanced cohort for the
  day. Selection is not only about individual merit: we also aim for variety across the room so
  teams can learn from each other. We will take into account:
</p>

<ul>
  <li><strong>EO domain breadth</strong>: interest or experience across different areas of Earth Observation (for example agriculture, climate, disasters, forests, marine, or urban), so the hackathon is not dominated by a single topic.</li>
  <li><strong>Mixed backgrounds</strong>: a blend of EO scientists and analysts with AI engineers and software developers.</li>
  <li><strong>Career stage</strong>: a mix of early-career researchers (PhD students, post-docs) and more experienced professionals.</li>
  <li><strong>Fit with the day</strong>: motivation to work on a concrete use case, contribute a tool to the open registry, and collaborate in teams of 1–4.</li>
</ul>

<div class="text-center my-4">
  <a href="https://luma.com/95742gpd" target="_blank" rel="noopener" class="btn btn-lg px-5 py-3 fw-bold text-white shadow registration-cta" style="background-color: var(--color-primary);">
    Apply Now
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right-circle-fill ms-2" viewBox="0 0 16 16"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/></svg>
  </a>
</div>

<h3 class="section-heading mt-5">The EVE project</h3>

<p>
  This hackathon is organized within the EVE initiative.
  <a href="https://eve.philab.esa.int/about" target="_blank" rel="noopener">Earth Virtual Expert (EVE)</a>
  is a Φ-lab initiative advancing foundation models for Earth Observation and Earth Science. EVE is
  a domain-specialized large language model system built on an open-source foundation and
  fine-tuned on curated EO and Earth Science corpora. It integrates retrieval-augmented generation
  (RAG), structured citations, and hallucination-aware evaluation to provide grounded, traceable
  answers across heterogeneous knowledge sources. Deployed as a web platform and API, EVE enables
  natural-language interaction with scientific literature, institutional content, and technical
  documentation for reliable Earth Intelligence applications.
</p>

<h4 class="mt-4">Team and initiative</h4>

<p>The project is developed by Pi School, with support from Imperative Space, under ESA Φ-lab funding.</p>

<ul>
  <li><a href="https://philab.esa.int/" target="_blank" rel="noopener">ESA Φ-lab</a>: accelerates the future of Earth Observation through disruptive innovation, to enhance the competitiveness of industry and science in ESA Member States.</li>
  <li><a href="https://picampus-school.com" target="_blank" rel="noopener">Pi School</a>: lead development and research. Applied AI research lab in Rome; EVE is its ESA-funded Earth Observation project.</li>
  <li><a href="https://imperative.space/" target="_blank" rel="noopener">Imperative Space</a>: communications, education, and platform support across the space sector.</li>
</ul>

<h4 class="mt-4">Partners</h4>

<ul>
  <li><a href="https://mistral.ai/" target="_blank" rel="noopener">Mistral AI</a>: open foundation models. EVE-Instruct is fine-tuned from Mistral Small.</li>
  <li><a href="https://www.wiley.com/" target="_blank" rel="noopener">Wiley</a>: scientific publishing partner for grounded, citation-aware Earth Science content.</li>
</ul>
