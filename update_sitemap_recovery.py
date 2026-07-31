import os
from datetime import datetime

date_str = datetime.now().strftime("%Y-%m-%dT12:00:00+05:30")

url_slug = "how-to-stop-bank-recovery-agents-harassment-legally-in-india"
full_url = f"https://www.amalegalsolutions.com/{url_slug}"

sitemap_chunk = f"""  <url>
    <loc>{full_url}</loc>
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

append_if_exists("actual_pages.txt", url_slug)
append_if_exists("sitemap_entries.txt", url_slug)
append_if_exists("sitemap_list.txt", url_slug)
# Already appended to sitemap_pages.txt in a previous step, but doing it safely anyway.
# Let's not append twice if not needed, but it's okay for now.
