import re

with open('/Users/amalegalsolutions/Desktop/AMAWORK/AMA/ama/src/app/best-criminal-lawyers-in-delhi/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Remove one more short paragraph from 'initiate-defense'
content = re.sub(
    r'<p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">\s*Simultaneously, begin compiling a factual narrative of events from your perspective[^<]+</p>',
    '',
    content
)

with open('/Users/amalegalsolutions/Desktop/AMAWORK/AMA/ama/src/app/best-criminal-lawyers-in-delhi/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

