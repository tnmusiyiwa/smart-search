import {describe, it, expect, beforeAll, afterAll} from "vitest";
import {extractEntities} from "../src/extractEntities";
import db from "../src/database/db";

// Seed the database before running tests
/*beforeAll(async () => {
  await db.migrate.latest();
  await db.seed.run();
});

// Clean up after tests
afterAll(async () => {
  await db.destroy();
});
*/

describe("extractEntities", () => {
  it("should extract entities correctly from a simple term", async () => {
    const result = await extractEntities("McDonald's in London");
    expect(result).toContainEqual(
      expect.objectContaining({
        brand: {id: 1, name: "McDonald's"},
        city: {name: "London"},
      }),
    );
  });

  it("should handle typos in the search term", async () => {
    const result = await extractEntities("McDOnalds in Londn");
    expect(result).toContainEqual(
      expect.objectContaining({
        brand: {name: "McDonald's"},
        city: {name: "London"},
      }),
    );
  });

  it("should return multiple combinations when applicable", async () => {
    const result = await extractEntities("McDonald's and Subway in New York");
    expect(result).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          brand: {name: "McDonald's"},
          city: {name: "New York"},
        }),
        expect.objectContaining({
          brand: {name: "Subway"},
          city: {name: "New York"},
        }),
      ]),
    );
  });

  it("should return an empty array for no matches", async () => {
    const result = await extractEntities("NonexistentBrand in Nowhere");
    expect(result).toEqual([]);
  });

  it("should handle multiple cities and brands in the search term", async () => {
    const result = await extractEntities("Starbucks in London and New York");
    expect(result).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          brand: {name: "Starbucks"},
          city: {name: "London"},
        }),
        expect.objectContaining({
          brand: {name: "Starbucks"},
          city: {name: "New York"},
        }),
      ]),
    );
  });
});
