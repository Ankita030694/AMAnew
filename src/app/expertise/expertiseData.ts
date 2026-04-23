import fs from 'fs';
import path from 'path';

export const slugify = (text: string) => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
};

type ExpertiseCategory = {
  category: string;
  items: string[];
};

let expertiseCache: { 
  grouped: ExpertiseCategory[]; 
  slugMap: Map<string, { item: string, category: string }> 
} | null = null;

export function getExpertiseData() {
  if (expertiseCache) return expertiseCache;

  try {
    const dataPath = path.join(process.cwd(), "src/app/expertise/expertiseData.json");
    const rawData = fs.readFileSync(dataPath, "utf-8");
    const groupedData: ExpertiseCategory[] = JSON.parse(rawData);

    const slugMap = new Map<string, { item: string, category: string }>();
    groupedData.forEach(group => {
      group.items.forEach(item => {
        slugMap.set(slugify(item), { item, category: group.category });
      });
    });

    expertiseCache = { grouped: groupedData, slugMap };
    return expertiseCache;
  } catch (error) {
    console.error("Error loading expertise data:", error);
    return { grouped: [], slugMap: new Map() };
  }
}

export function getMatchedExpertise(slug: string) {
  const { slugMap } = getExpertiseData();
  return slugMap.get(slug);
}
