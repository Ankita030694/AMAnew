import re

with open('/Users/amalegalsolutions/Desktop/AMAWORK/AMA/ama/src/app/best-criminal-lawyers-in-delhi/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Remove third paragraph of 'initiate-defense'
content = re.sub(
    r'<p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">\s*Next, meticulously compile all documentation related to the matter[^<]+</p>',
    '',
    content
)

# Remove third paragraph of 'red-flags-consultations' 
content = re.sub(
    r'<p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">\s*Additionally, evaluate their communication responsiveness[^<]+</p>',
    '',
    content
)

with open('/Users/amalegalsolutions/Desktop/AMAWORK/AMA/ama/src/app/best-criminal-lawyers-in-delhi/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Trimmed more paragraphs.")
