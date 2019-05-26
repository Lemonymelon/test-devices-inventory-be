const ENV = process.env.NODE_ENV || "development";
const {
  devices,
  deviceTypes,
  operatingSystems,
  departments,
  employees,
  brands
} = require("../data/test");

const {
  formatTypesData,
  formatBrandsData,
  formatDeptsData,
  formatDevicesData,
  formatEmployeesData,
  formatOSData
} = require("../../utils");

const formattedDeviceTypes = formatTypesData(deviceTypes);
const formattedBrands = formatBrandsData(brands);
const formattedOperatingSystems = formatOSData(operatingSystems);
const formattedDepartments = formatDeptsData(departments);
const formattedEmployees = formatEmployeesData(employees);
const formattedDevices = formatDevicesData(devices);

exports.seed = function(knex, Promise) {
  return knex("device_types")
    .insert(formattedDeviceTypes)
    .returning("*")
    .then(types => {
      return knex("brands")
        .insert(formattedBrands)
        .returning("*");
    })
    .then(brandRows => {
      return knex("operating_systems")
        .insert(formattedOperatingSystems)
        .returning("*");
    })
    .then(OSrows => {
      return knex("departments")
        .insert(formattedDepartments)
        .returning("*");
    })
    .then(() =>
      knex("employees")
        .insert(formattedEmployees)
        .returning("*")
    )
    .then(() =>
      knex("devices")
        .insert(formattedDevices)
        .returning("*")
    );
};
