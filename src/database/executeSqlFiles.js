const fs = require("fs/promises");
const path = require("path");
const db = require("./db");

async function executeSqlFiles(directoryPath) {
  try {
    const files = await fs.readdir(directoryPath);
    const sqlFiles = files.filter((file) => path.extname(file) === ".sql");

    for (const sqlFile of sqlFiles) {
      const filePath = path.join(directoryPath, sqlFile);
      const sql = await fs.readFile(filePath, "utf8");

      console.log(`Executing SQL file: ${sqlFile}`);
      await db.raw(sql);
      console.log(`Finished executing: ${sqlFile}`);
    }
  } catch (error) {
    console.error("Error executing SQL files:", error);
    throw error;
  } finally {
    db.destroy();
  }
}

module.exports = executeSqlFiles;
