exports.up = function (knex) {
  return knex.schema
    .createTable("dish_types", function (table) {
      table.increments("id").primary();
      table.string("name").notNullable();
    })
    .then(function () {
      return knex.raw(
        "CREATE INDEX dish_types_name_trgm_idx ON dish_types USING gin (name gin_trgm_ops);",
      );
    });
};

exports.down = function (knex) {
  return knex.schema.dropTable("dish_types");
};
