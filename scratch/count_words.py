import re

with open('src/app/cheque-bounce-notice/page.tsx', 'r') as f:
    content = f.read()

# Extract content between <article> and </article>
match = re.search(r'<article.*>(.*)</article>', content, re.DOTALL)
if match:
    text = match.group(1)
    # Remove HTML tags
    text = re.sub(r'<[^>]+>', ' ', text)
    # Remove curly brace expressions (e.g. {id: "introduction"})
    text = re.sub(r'\{[^}]+\}', ' ', text)
    # Count words
    words = text.split()
    print(f"Word count: {len(words)}")
    # Check for em dashes
    em_dashes = text.count('—')
    print(f"Em dashes: {em_dashes}")
else:
    print("Article tag not found")
