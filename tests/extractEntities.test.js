import {describe, it, expect, beforeAll, afterAll} from "vitest";
import {extractEntities} from "../src/extractEntities";

describe("extractEntities", () => {
  it("should extract entities correctly from a simple term", async () => {
    const result = await extractEntities("McDonald's");
    expect(result).toContainEqual(
      expect.objectContaining({
        brand: {id: 4, name: "McDonald's"},
      }),
    );
  });

  it("should handle multiple words in the search term", async () => {
    const result = await extractEntities("McDonald's in London");
    expect(result).toContainEqual(
      expect.objectContaining({
        brand: {id: 4, name: "McDonald's"},
        city: {id: 1, name: "London"},
      }),
    );
  });

  it("should handle three or more objects in the search term", async () => {
    const result = await extractEntities("vegan sushi in London");
    expect(result).toContainEqual(
      expect.objectContaining({
        city: {id: 1, name: "London"},
        brand: {id: 15, name: "Sushimania"},
        dishType: {id: 72, name: "Sushi"},
        diet: {id: 1, name: "Vegan"},
      }),
    );
  });
});
