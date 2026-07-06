import os
import re

def count_words(text):
    # Very rough word count
    words = re.findall(r'\b\w+\b', text)
    return len(words)

file_path = "/Users/amalegalsolutions/Desktop/AMAWORK/AMA/ama/src/app/understanding-the-impact-of-high-credit-card-interest-rates-what-you-need-to-know/page.tsx"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Extract just the text content roughly for counting
text_content = re.sub(r'<[^>]+>', ' ', content)
text_content = re.sub(r'\{[^}]+\}', ' ', text_content)
print(f"Rough word count: {count_words(text_content)}")
