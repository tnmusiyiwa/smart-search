const db = require("./database/db");
const combineEntities = require("./combineEntities");
const normalizeSearchTerm = require("./normalizeSearchTerm");

async function extractEntities(searchTerm) {
  const normalizedSearchTerm = normalizeSearchTerm(searchTerm);
  const searchWords = normalizedSearchTerm.split(" ");
  const query = `
  SELECT * 
  FROM (
    SELECT *, 'city' as type FROM cities WHERE normalize_name(name) ILIKE ANY(ARRAY[${searchWords
      .map((w) => `'%${w}%'`)
      .join(",")}])
    UNION ALL
    SELECT *, 'brand' as type FROM brands WHERE normalize_name(name) ILIKE ANY(ARRAY[${searchWords
      .map((w) => `'%${w}%'`)
      .join(",")}])
    UNION ALL
    SELECT *, 'dishType' as type FROM dish_types WHERE normalize_name(name) ILIKE ANY(ARRAY[${searchWords
      .map((w) => `'%${w}%'`)
      .join(",")}])
    UNION ALL
    SELECT *, 'diet' as type FROM diets WHERE normalize_name(name) ILIKE ANY(ARRAY[${searchWords
      .map((w) => `'%${w}%'`)
      .join(",")}])
  ) AS entities
`;

  const results = await db.raw(query);

  const hitsByType = groupHitsByType(results.rows);
  return combineEntities(hitsByType);
}

function groupHitsByType(hits) {
  const grouped = {};
  for (const hit of hits) {
    const type = hit.type;
    if (!grouped[type]) {
      grouped[type] = [];
    }

    delete hit.type;

    grouped[type].push(hit);
  }
  return grouped;
}

module.exports = {extractEntities};
