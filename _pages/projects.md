---
layout: page
title: projects
permalink: /projects/
description: A growing collection of projects.
nav: false
nav_order: 3
display_categories: [work, fun]
horizontal: false
---

<div class="text-center" style="padding: 3rem 1rem;">
  <h2>🚧 Under Construction 🚧</h2>
  <p style="font-size: 1.1em; color: #666;">
    This page is currently being updated. Check back soon!
  </p>
  <p>
    In the meantime, feel free to explore my <a href="/publications/" style="color:#1976D2;">publications</a> or <a href="/cv/" style="color:#1976D2;">CV</a>.
  </p>
</div>

<!--
Original projects content (commented out):

<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}
{% else %}
{% assign sorted_projects = site.projects | sort: "importance" %}
{% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
-->
