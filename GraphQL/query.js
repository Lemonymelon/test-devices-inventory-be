const { GraphQLObjectType } = require("graphql");
const {
  deviceType,
  employee,
  department,
  device,
  operatingSystem,
  brand
} = require("./queryFields");

const query = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    deviceType,
    employee,
    department,
    device,
    operatingSystem,
    brand
  }
});

module.exports = query;
