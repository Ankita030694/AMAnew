import re

files_to_update = [
    "/Users/amalegalsolutions/Desktop/AMAWORK/AMA/ama/public/sitemap.xml",
    "/Users/amalegalsolutions/Desktop/AMAWORK/AMA/ama/src/app/sitemap.xml"
]

entry = """
    <url>
      <loc>https://www.amalegalsolutions.com/loan-settlement-request-letter</loc>
      <lastmod>2026-06-30T12:00:00.000Z</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>
"""

for filepath in files_to_update:
    try:
        with open(filepath, "r") as f:
            content = f.read()
        
        if "loan-settlement-request-letter" not in content:
            content = content.replace("</urlset>", f"{entry}</urlset>")
            with open(filepath, "w") as f:
                f.write(content)
            print(f"Updated {filepath}")
        else:
            print(f"Already in {filepath}")
    except FileNotFoundError:
        print(f"File not found: {filepath}")

