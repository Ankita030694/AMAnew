#!/bin/bash
for file in $(git ls-tree -rt HEAD src/app/services | awk '$2=="tree" {print $4}' | grep -E '/[A-Z]'); do
  dirname=$(basename "$file")
  lower_dirname=$(echo "$dirname" | tr '[:upper:]' '[:lower:]')
  parent_dir=$(dirname "$file")
  
  if [ "$dirname" != "$lower_dirname" ]; then
    echo "Running git mv $file ${file}-tmp"
    git mv "$file" "${file}-tmp"
    echo "Running git mv ${file}-tmp $parent_dir/$lower_dirname"
    git mv "${file}-tmp" "$parent_dir/$lower_dirname"
  fi
done
