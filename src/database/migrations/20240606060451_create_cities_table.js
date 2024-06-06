exports.up = function (knex) {
  return knex.schema
    .createTable("cities", function (table) {
      table.increments("id").primary();
      table.string("name").notNullable();
    })
    .then(function () {
      return knex.raw(
        "CREATE INDEX cities_name_trgm_idx ON cities USING gin (name gin_trgm_ops);",
      );
    });
};

exports.down = function (knex) {
  return knex.schema.dropTable("cities");
};
