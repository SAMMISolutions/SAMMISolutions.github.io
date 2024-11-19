---
layout: ext
title: Newest Extensions
permalink: /extensions
css: extensions.css
---

{% assign extensions = site.extensions | sort: 'date' | reverse %}
<div class="row row-cols-2">
{% for post in extensions %}
{% assign posturl = "extensions/" | append: post.category | append: "/" | append: post.slug | relative_url %}
{% if post.external == true %}
{% assign posturl = post.permalink | relative_url %}
{% endif %}
{% assign srcempty = false %}
{% if post.icon_local %}
{% assign src = "assets/images/extensions/" | append: post.icon_local | relative_url %}
{% elsif post.icon_ex and post.icon_ex != '' %}
{% assign src = post.icon_ex %}
{% else %}
{% assign src = "assets/images/extensions/empty.png" | relative_url %}
{% assign srcempty = true %}
{% endif %}
{% if post.hidden != true %}
    <div class="col extension-col mb-2">
        <div class="row mb-1">
          <div class="extension">
            <a href="{{ posturl }}" >
            <div class="card shadow-sm"> 
              <div class="face front"> 
                <div class="inner ratio" style="--bs-aspect-ratio: 79.3%;">   
                  {% if srcempty == true %}<div><span class="h5">{{ post.title }}</span></div>{% endif %}
                  <img src="{{ src }}">
                </div>
              </div> 
              <div class="face back"> 
                <div class="inner text-center"> 
                  <p>{{ post.desc }}</p>
                </div>
              </div>
            </div>
           </a> 
          </div>
        </div>
        <div class="row footer ">
       <a href="{{ posturl }}" >{{ post.title }}</a>
        </div>
    </div>
{% endif %}
{% endfor %}
</div>