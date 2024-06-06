function combineEntities(hitsByType) {
  const combinations = [];

  // Recursive function to generate combinations
  function generate(currentCombination, remainingTypes) {
    if (remainingTypes.length === 0) {
      combinations.push(currentCombination);
      return;
    }

    const nextType = remainingTypes[0];
    for (const hit of hitsByType[nextType] || []) {
      const newCombination = {...currentCombination, [nextType]: hit};
      generate(newCombination, remainingTypes.slice(1));
    }
  }

  generate({}, Object.keys(hitsByType));
  return combinations;
}

module.exports =  combineEntities;
