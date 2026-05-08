import os
import re

def check_page_requirements(file_path):
    if not os.path.exists(file_path):
        print(f"Error: File {file_path} not found.")
        return

    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    results = []
    
    # 1. Word Count (approximate)
    # We strip HTML-like tags and script tags for a better count
    text_content = re.sub(r'<[^>]+>', ' ', content)
    text_content = re.sub(r'\{[^\}]+\}', ' ', text_content)
    # Count words including Hindi characters
    words = text_content.split()
    word_count = len(words)
    results.append(f"Word Count: {word_count} (Requirement: 3000+)")

    # 2. Schema Detection
    schemas = ['Article', 'FAQPage', 'Review', 'BreadcrumbList']
    for schema in schemas:
        found = schema in content
        results.append(f"Schema {schema}: {'Found' if found else 'NOT FOUND'}")

    # 3. FAQ Count
    # Assuming FAQs are in an array or mapped
    faq_matches = re.findall(r'question:\s*"', content)
    results.append(f"FAQ Count: {len(faq_matches)} (Requirement: 10+)")

    # 4. Review Count
    review_matches = re.findall(r'"@type": "Review"', content)
    results.append(f"Review Count: {len(review_matches)} (Requirement: 5+)")

    # 5. Em Dash Check
    em_dashes = content.count('—') or content.count('\u2014')
    results.append(f"Em Dashes: {em_dashes} (Requirement: 0)")

    # 6. Hindi Content Check (Basic)
    hindi_chars = re.findall(r'[\u0900-\u097F]', content)
    results.append(f"Hindi Characters: {len(hindi_chars)} (Requirement: Significant presence)")

    print("\n--- Verification Report ---")
    for res in results:
        print(res)
    print("---------------------------\n")

if __name__ == "__main__":
    target_file = "/Users/apple/Desktop/ama/ama/AMAnew/src/app/loan-settlement-application-in-hindi/page.tsx"
    check_page_requirements(target_file)
