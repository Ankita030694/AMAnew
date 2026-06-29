import os
import re

# Get all directories in ama/src/app
app_dir = 'ama/src/app'
recent_pages = []
for name in os.listdir(app_dir):
    path = os.path.join(app_dir, name)
    if os.path.isdir(path):
        # check modification time within last 3 days
        if os.path.getmtime(path) > os.path.getmtime(app_dir) - (3 * 24 * 3600):
            recent_pages.append('/' + name)

# Additional known recent pages
recent_pages = set(recent_pages)
# Filter out known non-pages
for x in ['/api', '/fonts', '/components', '/directory', '/sitemap.xml']:
    if x in recent_pages:
        recent_pages.remove(x)

print(f"Found {len(recent_pages)} recent pages.")

footer_path = 'ama/src/newcomp/Footer.tsx'
with open(footer_path, 'r', encoding='utf-8') as f:
    footer_content = f.read()

# We will look for { name: '...', href: '...' } in footer_content
# and if href is in recent_pages, we extract it.
extracted_links = []

def repl(match):
    full_str = match.group(0)
    href = match.group(2)
    if href in recent_pages:
        extracted_links.append(full_str)
        # return empty to remove it. Actually we should remove the trailing comma as well, but it might be messy.
        return "REMOVE_ME"
    return full_str

# Match: { name: "...", href: "..." }
pattern = re.compile(r'\{\s*name:\s*[\'"]([^\'"]+)[\'"]\s*,\s*href:\s*[\'"]([^\'"]+)[\'"]\s*\}')
footer_content = pattern.sub(repl, footer_content)

# Clean up REMOVE_ME
footer_lines = footer_content.split('\n')
new_footer_lines = []
for i, line in enumerate(footer_lines):
    if "REMOVE_ME" in line:
        continue
    new_footer_lines.append(line)

# Handle trailing commas before closing bracket if needed (this is a bit hacky, but valid JS allows trailing commas in arrays, but let's see)
new_footer_content = '\n'.join(new_footer_lines)
# Also replace ",\n      ]" with "\n      ]"
new_footer_content = re.sub(r',\s*\]', '\n      ]', new_footer_content)

with open(footer_path, 'w', encoding='utf-8') as f:
    f.write(new_footer_content)

print(f"Removed {len(extracted_links)} links from Footer.")

directory_path = 'ama/src/app/directory/page.tsx'
with open(directory_path, 'r', encoding='utf-8') as f:
    directory_content = f.read()

# Make sure all extracted links are at the top of directoryLinks = [
dir_pattern = re.compile(r'(const directoryLinks = \[\n)')
match = dir_pattern.search(directory_content)

if match:
    # First, let's remove any existing copies of these links from directory/page.tsx so we don't have duplicates
    def clean_dir(m):
        full_str = m.group(0)
        href = m.group(2)
        if href in recent_pages:
            return "REMOVE_ME"
        return full_str

    directory_content = pattern.sub(clean_dir, directory_content)
    
    dir_lines = directory_content.split('\n')
    new_dir_lines = []
    for line in dir_lines:
        if "REMOVE_ME" in line:
            continue
        new_dir_lines.append(line)
    directory_content = '\n'.join(new_dir_lines)

    # Now add them all at the top
    links_to_insert = ",\n  ".join(extracted_links) + ",\n"
    directory_content = dir_pattern.sub(r'\1  ' + links_to_insert, directory_content)

    with open(directory_path, 'w', encoding='utf-8') as f:
        f.write(directory_content)
    print("Added links to top of directory/page.tsx")
else:
    print("Could not find directoryLinks array in directory/page.tsx")

