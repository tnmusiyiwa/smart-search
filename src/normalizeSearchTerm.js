function normalizeSearchTerm(searchTerm) {
  const excludeWords = [
    "in",
    "at",
    "on",
    "of",
    "to",
    "by",
    "for",
    "with",
    "from", // Prepositions
    "and",
    "or",
    "but",
    "nor",
    "so",
    "yet", // Conjunctions
  ];
  const searchWords = searchTerm
    .toLowerCase()
    .replace(/[^\w\s]/g, "") // Remove punctuation
    .trim()
    .split(" ")
    .filter((word) => !excludeWords.includes(word));

  return searchWords.join(" ");
}

module.exports = normalizeSearchTerm;
