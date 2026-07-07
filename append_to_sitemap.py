import re
from datetime import datetime

sitemap_path = "/Users/amalegalsolutions/Desktop/AMAWORK/AMA/ama/public/sitemap.xml"

with open(sitemap_path, "r", encoding="utf-8") as f:
    content = f.read()

new_entry = f"""  <url>
    <loc>https://www.amalegalsolutions.com/payment-of-settlement-act</loc>
    <lastmod>{datetime.today().strftime('%Y-%m-%d')}</lastmod>
    <priority>0.8</priority>
  </url>
"""

if "<loc>https://www.amalegalsolutions.com/payment-of-settlement-act</loc>" not in content:
    content = content.replace("</urlset>", new_entry + "</urlset>")
    with open(sitemap_path, "w", encoding="utf-8") as f:
        f.write(content)
    print("Sitemap updated.")
else:
    print("Already in sitemap.")
