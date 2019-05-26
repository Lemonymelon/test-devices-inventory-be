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
    .then(() => knex("brands").insert(formattedBrands))
    .then(() => knex("operating_systems").insert(formattedOperatingSystems))
    .then(() => knex("departments").insert(formattedDepartments))
    .then(() => knex("employees").insert(formattedEmployees))
    .then(() => knex("devices").insert(formattedDevices));
};
