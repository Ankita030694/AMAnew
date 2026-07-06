import os
from datetime import datetime

date_str = datetime.now().strftime("%Y-%m-%dT12:00:00+05:30")
slug = "understanding-the-impact-of-high-credit-card-interest-rates-what-you-need-to-know"

sitemap_chunk = f"""  <url>
    <loc>https://www.amalegalsolutions.com/{slug}</loc>
    <lastmod>{date_str}</lastmod>
    <priority>0.8</priority>
  </url>
</urlset>"""

for file_name in ["public/sitemap.xml", "sitemap_full.xml"]:
    if os.path.exists(file_name):
        with open(file_name, "r") as f:
            content = f.read()
        
        content = content.replace("</urlset>", sitemap_chunk)
        
        with open(file_name, "w") as f:
            f.write(content)

def append_if_exists(file_name, line):
    if os.path.exists(file_name):
        with open(file_name, "a") as f:
            f.write(line + "\n")

append_if_exists("actual_pages.txt", slug)
append_if_exists("sitemap_entries.txt", slug)
append_if_exists("sitemap_list.txt", slug)
append_if_exists("sitemap_pages.txt", f"/{slug}")
