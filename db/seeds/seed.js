const ENV = process.env.NODE_ENV || "development";
const {
  devices,
  deviceTypes,
  operatingSystems,
  departments,
  employees,
  manufacturers
} = require("../data/test");
exports.seed = function(knex, Promise) {
  return knex("table_name").insert();
};
