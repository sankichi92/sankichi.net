# My Sci-Fi Bookshelf
{%- assign books_by_year = site.data.sci-fi-bookshelf | group_by_exp: "book", "book.date | date: '%Y'" -%}
{%- for year in books_by_year %}
## {{ year.name }}
{%- for book in year.items %}
- [{{ book.author }}『{{ book.title }}』](https://www.amazon.co.jp/dp/{{ book.asin }})
{%- endfor %}
{%- endfor %}

---

[Back](/)
