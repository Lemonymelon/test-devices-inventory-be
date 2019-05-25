const {
  GraphQLObjectType,
} = require('graphql');
const { /* deconstructedMutationFields */ } = require('./mutationFields');

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
/* deconstructedMutationFields */
  },
});

module.exports = Mutation;

