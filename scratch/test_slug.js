const getSlug = (text) => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
};

console.log(getSlug("Debt Recovery Tribunal (DRT) Lawyer"));
console.log(getSlug("Appeal Against DRT Order"));
