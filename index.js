const readline = require("readline/promises");
const {extractEntities} = require("./src/extractEntities");
const searchTerm = "McDonald's in London";
const db = require("./src/database/db");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function main() {
  try {
    const searchTerm = await rl.question("Enter your search term: ");
    const result = await extractEntities(searchTerm);
    console.log(result);
  } catch (error) {
    console.error("Error:", error);
    process.exit(1);
  } finally {
    rl.close();
    db.destroy();
    process.exit(0);
  }
}

main();
