const { GraphQLObjectType } = require("graphql");
const {
  addDeviceType,
  addBrand,
  addOperatingSystem,
  addDepartment,
  addEmployee,
  addDevice
} = require("./mutationFields");

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addDeviceType,
    addBrand,
    addOperatingSystem,
    addDepartment,
    addEmployee,
    addDevice
  }
});

module.exports = Mutation;
