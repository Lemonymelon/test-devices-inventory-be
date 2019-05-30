const {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLID,
  GraphQLBoolean
} = require("graphql");

const DeviceTypeType = new GraphQLObjectType({
  name: "Type",
  fields: () => ({
    type_id: { type: GraphQLID },
    type_name: { type: GraphQLString },
    type_image_url: { type: GraphQLString }
  })
});

const BrandType = new GraphQLObjectType({
  name: "Brand",
  fields: () => ({
    brand_id: { type: GraphQLID },
    brand_name: { type: GraphQLString }
  })
});

const OperatingSystemType = new GraphQLObjectType({
  name: "Operating_System",
  fields: () => ({
    operating_system_id: { type: GraphQLID },
    operating_system_name: { type: GraphQLString },
    operating_system_producer: { type: GraphQLString },
    operating_system_build: { type: GraphQLString }
  })
});

const DepartmentType = new GraphQLObjectType({
  name: "Department",
  fields: () => ({
    department_id: { type: GraphQLID },
    department_name: { type: GraphQLString }
  })
});

const EmployeeType = new GraphQLObjectType({
  name: "employees",
  fields: () => ({
    employee_id: { type: GraphQLID },
    employee_forename: { type: GraphQLString },
    employee_surname: { type: GraphQLString },
    employee_department: { type: DepartmentType }
  })
});

const DeviceType = new GraphQLObjectType({
  name: "Device",
  fields: () => ({
    device_id: { type: GraphQLID },
    device_brand: { type: BrandType },
    device_operating_system: { type: OperatingSystemType },
    device_type: { type: DeviceTypeType },
    device_employee: { type: EmployeeType },
    device_in_stock: { type: GraphQLBoolean },
    device_estimated_time_of_return: { type: GraphQLString }
  })
});

module.exports = {
  DeviceTypeType,
  BrandType,
  OperatingSystemType,
  EmployeeType,
  DepartmentType,
  DeviceType
};
