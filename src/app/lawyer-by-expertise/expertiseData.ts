import fs from 'fs';
import path from 'path';

export const slugify = (text: string) => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
};

// Module-level cache to avoid re-parsing 3.7MB JSON on every request
let expertiseMapCache: Map<string, string> | null = null;
let expertiseArrayCache: string[] | null = null;

export function getExpertiseData() {
  if (expertiseMapCache && expertiseArrayCache) {
    return { map: expertiseMapCache, array: expertiseArrayCache };
  }

  try {
    const dataPath = path.join(process.cwd(), "src/app/lawyer-by-expertise/expertiseData.json");
    const rawData = fs.readFileSync(dataPath, "utf-8");
    const expertiseData: string[] = JSON.parse(rawData);

    const map = new Map<string, string>();
    expertiseData.forEach(item => {
      map.set(slugify(item), item);
    });

    expertiseMapCache = map;
    expertiseArrayCache = expertiseData;

    return { map, array: expertiseData };
  } catch (error) {
    console.error("Error loading expertise data:", error);
    return { map: new Map<string, string>(), array: [] };
  }
}

export function getMatchedExpertise(slug: string) {
  const { map } = getExpertiseData();
  return map.get(slug);
}
