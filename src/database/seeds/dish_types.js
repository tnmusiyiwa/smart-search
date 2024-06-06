const dishTypesSeedData = require("./data/dishTypesSeedData");

exports.seed = function (knex) {
  return knex("dish_types")
    .del()
    .then(function () {
      return knex("dish_types").insert(dishTypesSeedData);
    });
};
