const {
  GraphQLObjectType,
} = require('graphql');
const {
  /* deconstructedQueryFields */
} = require('./queryFields');

const query = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
/* queryFields */
  },
});

module.exports = query;

