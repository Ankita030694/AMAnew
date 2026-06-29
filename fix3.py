import os
import re

dir_path = "src/app/credit-card-settlement/[slug]"

for filename in os.listdir(dir_path):
    if not filename.endswith(".tsx") or "Template" not in filename:
        continue
    
    filepath = os.path.join(dir_path, filename)
    with open(filepath, "r", encoding="utf-8") as f:
        text = f.read()

    # Step 1: Fix JSON schema strings containing ${bankName}
    # We only match within double quotes, excluding newlines and HTML tags to prevent cross-tag matching
    def replace_schema_quotes(match):
        return "`" + match.group(1).replace("{bankName}", "${bankName}") + "`"

    text = re.sub(r'"([^"\n<>]*?\$\{bankName\}[^"\n<>]*?)"', replace_schema_quotes, text)

    # Step 2: Replace remaining ${bankName} with {bankName} (for JSX text interpolation)
    text = text.replace("${bankName}", "{bankName}")

    # Step 3: Restore ${bankName} inside backticks
    def replace_in_backticks(match):
        return match.group(0).replace("{bankName}", "${bankName}")

    text = re.sub(r'`[^`]*`', replace_in_backticks, text)

    with open(filepath, "w", encoding="utf-8") as f:
        f.write(text)

print("Fixed JSX interpolations perfectly.")
