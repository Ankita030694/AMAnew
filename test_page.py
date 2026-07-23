import re

with open('src/app/steps-to-apply-for-debt-resolution-schemes-online/page.tsx', 'r') as f:
    content = f.read()

# Word count check
text = re.sub(r'<[^>]+>', ' ', content)
text = re.sub(r'\{[^\}]+\}', ' ', text)
words = text.split()
print(f"Word count approx: {len(words)}")

# Check H1 length
h1_match = re.search(r'<h1[^>]*>(.*?)</h1>', content, re.DOTALL)
if h1_match:
    h1_text = h1_match.group(1).strip()
    h1_text = re.sub(r'<[^>]+>', '', h1_text)
    print(f"H1 length: {len(h1_text)}")
else:
    print("H1 not found")

# Meta title and description length
title_match = re.search(r'title:\s*["\'](.*?)["\']', content)
if title_match:
    print(f"Title length: {len(title_match.group(1))}")
desc_match = re.search(r'description:\s*["\'](.*?)["\']', content)
if desc_match:
    print(f"Description length: {len(desc_match.group(1))}")

# Check Alt Texts
alts = re.findall(r'alt=["\'](.*?)["\']', content)
for alt in alts:
    if len(alt) > 125:
        print(f"WARNING: Alt text too long ({len(alt)}): {alt}")
    else:
        print(f"Alt text OK ({len(alt)}): {alt}")

# Check internal links
if '/affordable-debt-resolution-company-india' in content: print("Internal link 1 OK")
if '/what-is-loan-settlement' in content: print("Internal link 2 OK")
if '/loan-settlement-companies' in content: print("Internal link 3 OK")

# Author image check
if '/anujbhiya.png' in content: print("Author image /anujbhiya.png found")

# Em dash check
if '—' in content or '--' in content: print("Em dash or -- found!")
else: print("No em dashes found")
