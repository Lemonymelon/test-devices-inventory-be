const { GraphQLObjectType } = require("graphql");
const {
  addDeviceType,
  addBrand,
  addOperatingSystem,
  addDepartment,
  addEmployee,
  addDevice,
  updateDeviceEmployee,
  updateDeviceInStock
} = require("./mutationFields");

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addDeviceType,
    addBrand,
    addOperatingSystem,
    addDepartment,
    addEmployee,
    addDevice,
    updateDeviceEmployee,
    updateDeviceInStock
  }
});

module.exports = Mutation;
