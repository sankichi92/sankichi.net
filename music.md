# My Music Gears
{%- for equipment in site.data.music-gears %}
## {{ equipment.category }}
{%- for item in equipment.items %}
{%- if item.asin %}
- [{{ item.maker }} {{ item.name }}](https://www.amazon.co.jp/dp/{{ item.asin }})
{%- else %}
- {{ item.maker }} {{ item.name }}
{%- endif %}
{%- endfor %}
{%- endfor %}

---

[Back](/)
