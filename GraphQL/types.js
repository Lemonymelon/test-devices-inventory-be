const {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLID,
} = require('graphql');


const thingType = new GraphQLObjectType({
  name: 'Beer',
  fields: () => ({
    thing_id: { type: GraphQLID },
    thing_name: { type: GraphQLString },
    related_thing_id: { type: GraphQLID },
    related_thing_name: { type: GraphQLString },
    other_related_thing_id: { type: GraphQLID },
    other_related_thing_name: { type: GraphQLString },
});

module.exports = {
  /* types */
};
