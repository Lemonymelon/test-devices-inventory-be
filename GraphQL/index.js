const {
  GraphQLSchema,
} = require('graphql');

const mutation = require('./mutation');

const query = require('./query');

const schema = new GraphQLSchema({
  query,
  mutation,
});

module.exports = schema;

