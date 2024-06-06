exports.up = function (knex) {
  return knex.schema
    .createTable("diets", function (table) {
      table.increments("id").primary();
      table.string("name").notNullable();
    })
    .then(function () {
      return knex.raw(
        "CREATE INDEX diets_name_trgm_idx ON diets USING gin (name gin_trgm_ops);",
      );
    });
};

exports.down = function (knex) {
  return knex.schema.dropTable("diets");
};
