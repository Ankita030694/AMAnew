import glob
import re
import os

files = glob.glob("src/app/credit-card-settlement/[slug]/*.tsx")

for filepath in files:
    with open(filepath, "r", encoding="utf-8") as f:
        text = f.read()

    # Step 1: Replace all ${bankName} with {bankName} everywhere
    text = text.replace("${bankName}", "{bankName}")

    # Step 2: Restore backticks. Whenever there's {bankName} inside backticks, make it ${bankName} again.
    # We find all backtick pairs and apply a replace within them.
    def replace_in_backticks(match):
        return match.group(0).replace("{bankName}", "${bankName}")

    # The regex `[^`]*` matches backticks and everything inside them.
    text = re.sub(r'`[^`]*`', replace_in_backticks, text)

    # Step 3: Fix double quotes used in JSON schemas.
    # The JSON schema is usually wrapped in `<Script ... dangerouslySetInnerHTML={{ __html: JSON.stringify(...) }} />`
    # Wait, the python script that generated the templates injected string literals for `reviewBody` etc.
    # Example: "I was drowning in {bankName} credit card debt" -> `I was drowning in ${bankName} credit card debt`
    # Let's find any double quoted string containing {bankName} and turn it into backticks + ${bankName}
    def replace_in_quotes(match):
        content = match.group(1)
        # return backtick string with ${bankName}
        content = content.replace("{bankName}", "${bankName}")
        return "`" + content + "`"

    text = re.sub(r'"([^"]*?\{bankName\}[^"]*?)"', replace_in_quotes, text)

    with open(filepath, "w", encoding="utf-8") as f:
        f.write(text)

    print("Fixed", filepath)
