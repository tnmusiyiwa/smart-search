const executeSqlFiles = require("./src/database/executeSqlFiles");

(async () => {
  const directoryPath = "./src/database/scripts";
  await executeSqlFiles(directoryPath);
})();
