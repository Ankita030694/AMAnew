import glob
import re

files = glob.glob("src/app/credit-card-settlement/\[slug\]/*.tsx")
for filepath in files:
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    # Fix double-quoted strings containing ${bankName} -> convert to backticks
    # E.g. "I was drowning in ${bankName}..." -> `I was drowning in ${bankName}...`
    content = re.sub(r'"([^"]*?\$\{bankName\}[^"]*?)"', r'`\1`', content)
    
    # Fix JSX interpolations: ${bankName} outside of any quotes or backticks should be {bankName}
    # To do this, we can just replace all ${bankName} with {bankName} globally, 
    # then change `{bankName}` back to `${bankName}` inside backticks.
    
    content = content.replace("${bankName}", "{bankName}")
    
    # Now restore ${bankName} inside backticks.
    # A simple regex to find all backtick strings and replace {bankName} with ${bankName} inside them
    def restore_backticks(match):
        return match.group(0).replace("{bankName}", "${bankName}")
    
    content = re.sub(r'`[^`]*`', restore_backticks, content)

    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)
