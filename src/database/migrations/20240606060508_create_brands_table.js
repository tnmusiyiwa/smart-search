exports.up = function (knex) {
  return knex.schema
    .createTable("brands", function (table) {
      table.increments("id").primary();
      table.string("name").notNullable();
    })
    .then(function () {
      return knex.raw(
        "CREATE INDEX brands_name_trgm_idx ON brands USING gin (name gin_trgm_ops);",
      );
    });
};

exports.down = function (knex) {
  return knex.schema.dropTable("brands");
};
