const {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLID,
} = require('graphql');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { APP_SECRET } = require('../app_secret_config.js');
const connection = require('../db/connection');
const {
  /* deconstructedTypes */
} = require('./types');

const /* addMutationField */ = {
  type: mutationField,
  args: {
    user_id: { type: GraphQLID },
    *_id: { type: GraphQLID },
    score: { type: GraphQLInt },
  },
  resolve(_, args) {
    const /* newMutationField */ = {
      user_id: args.user_id,
      style_id: args.style_id,
      score: args.score,
    };
    return connection
      .insert(/* newMutationField */)
      .into('/* table */')
      .returning('*')
      .then(([result]) => result);
  },
};

};

module.exports = { /* mutations */ };
