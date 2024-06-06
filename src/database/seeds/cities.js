const citiesSeedData = require("./data/citiesSeedData");

exports.seed = function (knex) {
  return knex("cities")
    .del()
    .then(function () {
      return knex("cities").insert(citiesSeedData);
    });
};
