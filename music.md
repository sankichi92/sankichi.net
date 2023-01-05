# My Playlists

- [2022 Recap](https://music.youtube.com/playlist?list=LRYRx6-z5i4BMocY1WNHE3kV-N83PUPV6HLrN&feature=share)
- [2021 Recap](https://music.youtube.com/playlist?list=LRYRFr7DjYB05gI0LpMs3rZMCXo6YE1nRPEVA&feature=share)

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
