const {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLID
} = require("graphql");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { APP_SECRET } = require("../app_secret_config.js");
const connection = require("../db/connection");
const {
  DeviceTypeType,
  DepartmentType,
  DeviceType,
  OperatingSystemType,
  EmployeeType,
  BrandType
} = require("./types");

const addDeviceType = {
  type: DeviceTypeType,
  args: {
    type_name: { type: GraphQLString }
  },
  resolve(_, args) {
    const newDeviceType = {
      type_name: args.type_name
    };
    return connection
      .insert(newDeviceType)
      .into("device_types")
      .returning("*")
      .then(([result]) => result);
  }
};

module.exports = {
  addDeviceType
};
