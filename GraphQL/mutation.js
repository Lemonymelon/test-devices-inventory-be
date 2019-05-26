const { GraphQLObjectType } = require("graphql");
const { addDeviceType } = require("./mutationFields");

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addDeviceType
  }
});

module.exports = Mutation;
