function normalizeSearchTerm(searchTerm) {
  const commonPrepositions = [
    "in",
    "at",
    "on",
    "of",
    "to",
    "by",
    "for",
    "with",
    "from",
  ];
  const searchWords = searchTerm
    .toLowerCase()
    .replace(/[^\w\s]/g, "") // Remove punctuation
    .trim()
    .split(" ")
    .filter((word) => !commonPrepositions.includes(word));

  return searchWords.join(" ");
}

module.exports = normalizeSearchTerm;
