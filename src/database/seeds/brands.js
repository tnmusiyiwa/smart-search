const brandsSeedData = require("./data/brandsSeedData");

exports.seed = function (knex) {
  return knex("brands")
    .del()
    .then(function () {
      return knex("brands").insert(brandsSeedData);
    });
};
