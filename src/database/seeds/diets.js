const dietsSeedData = require("./data/dietsSeedData");

exports.seed = function (knex) {
  return knex("diets")
    .del()
    .then(function () {
      return knex("diets").insert(dietsSeedData);
    });
};
