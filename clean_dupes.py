import re
with open('src/app/help-in-loan-settlement-legal-firm/page.tsx', 'r') as f:
    lines = f.readlines()

new_lines = []
for i, line in enumerate(lines):
    if i > 0 and line.strip() == lines[i-1].strip() and "<p " in line:
        continue
    new_lines.append(line)

with open('src/app/help-in-loan-settlement-legal-firm/page.tsx', 'w') as f:
    f.writelines(new_lines)
print(f"Reduced from {len(lines)} to {len(new_lines)} lines.")
