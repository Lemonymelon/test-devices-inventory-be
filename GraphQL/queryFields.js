const {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLID,
  GraphQLBoolean
} = require('graphql');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { APP_SECRET } = require('../app_secret_config.js');
const {
  /* deconstructedTypes */
} = require('./types');
const connection = require('../db/connection');


const queryField = {
  type: new GraphQLList(queryFieldType),
  args: { brewery_id: { type: GraphQLID } },
  resolve(_, args) {
    const { field_id } = args
    return connection
      .select('*')
      .from('field')
      .where(builder => {
        if (field_id) {
          return builder.where({ field_id })
        }
      }) 
.catch((err) => { throw new Error('could not find type'); });
  },
  },
};


   


module.exports = {
  queries
};

