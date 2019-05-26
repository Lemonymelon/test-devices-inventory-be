const ENV = process.env.NODE_ENV || "development";
const {
  devices,
  deviceTypes,
  operatingSystems,
  departments,
  employees,
  brands
} = require("../data/test");

exports.seed = function(knex, Promise) {
  return knex("device_types")
    .insert(deviceTypes)
    .then(() => knex("brands").insert(brands))
    .then(() => knex("operating_systems").insert(operatingSystems));
    .then(() => knex("departments").insert(departments));
    .then(() => knex("employees").insert(employees));
    .then(() => knex("devices").insert(devices));
};
