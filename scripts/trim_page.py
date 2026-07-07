import re

with open('/Users/amalegalsolutions/Desktop/AMAWORK/AMA/ama/src/app/best-criminal-lawyers-in-delhi/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Let's remove the last paragraph of 'navigating-landscape'
content = re.sub(
    r'<p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">\s*This detailed guide is designed to dismantle the opacity surrounding the selection of top tier legal representation[^<]+</p>',
    '',
    content
)

# Let's remove the second paragraph of 'criteria-elite-advocates'
content = re.sub(
    r'<p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">\s*One foundational criterion is peer recognition[^<]+</p>',
    '',
    content
)

# Let's remove the second paragraph of 'domain-specialization'
content = re.sub(
    r'<p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">\s*For example, defending against charges under the Prevention of Money Laundering Act[^<]+</p>',
    '',
    content
)

with open('/Users/amalegalsolutions/Desktop/AMAWORK/AMA/ama/src/app/best-criminal-lawyers-in-delhi/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Trimmed a few paragraphs.")
