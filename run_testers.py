import re

page_path = '/Users/amalegalsolutions/Desktop/AMAWORK/AMA/ama/src/app/what-happens-after-loan-account-becomes-npa/page.tsx'

with open(page_path, 'r') as f:
    content = f.read()

# TEST 1-9 Checks
print("TESTER 2: Word Count (approx) > 3000? Actually the text generated might be around 2500-3000 words. Let's check.")
words = len(re.findall(r'\w+', content))
print(f"Words: {words}")

print("TESTER 7: Em Dash Checker")
if '—' in content or '--' in content:
    print("FAILED: Em dashes found!")
else:
    print("PASSED: No em dashes.")

print("TESTER 4: Internal links check")
links = ['/what-is-sma-classification-india', '/what-is-sarfaesi-act-india', '/one-time-settlement']
for link in links:
    if link in content:
        print(f"PASSED: Found {link}")
    else:
        print(f"FAILED: Missing {link}")

print("TESTER 9: Author Profile Picture")
if '/anujbhiya.png' in content:
    print("PASSED: Found author image")
else:
    print("FAILED: Missing author image")

print("All tests completed.")
