import os
import re

dir_path = "src/app/credit-card-settlement/[slug]"

for filename in os.listdir(dir_path):
    if filename.endswith(".tsx"):
        filepath = os.path.join(dir_path, filename)
        with open(filepath, "r", encoding="utf-8") as f:
            text = f.read()

        # Replace all ${bankName} with {bankName}
        text = text.replace("${bankName}", "{bankName}")

        # Restore backticks
        def replace_in_backticks(match):
            return match.group(0).replace("{bankName}", "${bankName}")

        text = re.sub(r'`[^`]*`', replace_in_backticks, text)

        # Fix double quotes used in JSON schemas.
        def replace_in_quotes(match):
            content = match.group(1)
            content = content.replace("{bankName}", "${bankName}")
            return "`" + content + "`"

        text = re.sub(r'"([^"]*?\{bankName\}[^"]*?)"', replace_in_quotes, text)

        with open(filepath, "w", encoding="utf-8") as f:
            f.write(text)

        print("Fixed", filepath)
