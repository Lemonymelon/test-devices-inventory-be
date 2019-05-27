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

const addBrand = {
  type: BrandType,
  args: {
    brand_name: { type: GraphQLString }
  },
  resolve(_, args) {
    const newBrand = {
      brand_name: args.brand_name
    };
    return connection
      .insert(newBrand)
      .into("brands")
      .returning("*")
      .then(([result]) => result);
  }
};

const addOperatingSystem = {
  type: OperatingSystemType,
  args: {
    operating_system_name: { type: GraphQLString },
    operating_system_producer: { type: GraphQLString },
    operating_system_build: { type: GraphQLString }
  },
  resolve(_, args) {
    const {
      operating_system_build,
      operating_system_name,
      operating_system_producer
    } = args;
    const newOperatingSystem = {
      operating_system_name,
      operating_system_build,
      operating_system_producer
    };
    return connection
      .insert(newOperatingSystem)
      .into("operating_systems")
      .returning("*")
      .then(([result]) => result);
  }
};

const addDepartment = {
  type: DepartmentType,
  args: {
    department_name: { type: GraphQLString }
  },
  resolve(_, args) {
    const newDepartment = {
      department_name: args.department_name
    };
    return connection
      .insert(newDepartment)
      .into("departments")
      .returning("*")
      .then(([result]) => result);
  }
};

const addEmployee = {
  type: EmployeeType,
  args: {
    employee_forename: { type: GraphQLString },
    employee_surname: { type: GraphQLString },
    employee_department: { type: GraphQLInt }
  },
  resolve(_, args) {
    const { employee_department, employee_forename, employee_surname } = args;
    const newEmployee = {
      employee_department,
      employee_forename,
      employee_surname
    };
    return connection
      .insert(newEmployee)
      .into("employees")
      .returning("*")
      .then(([result]) => result);
  }
};

const addDevice = {
  type: DeviceType,
  args: {
    device_type: { type: GraphQLInt },
    device_brand: { type: GraphQLInt },
    device_operating_system: { type: GraphQLInt }
  },
  resolve(_, args) {
    const { device_type, device_brand, device_operating_system } = args;
    const newEmployee = {
      device_type,
      device_brand,
      device_operating_system,
      device_in_stock: true
    };
    return connection
      .insert(newEmployee)
      .into("devices")
      .returning("*")
      .then(([result]) => result);
  }
};

const updateDeviceEmployee = {
  type: DeviceType,
  args: {
    device_id: { type: GraphQLInt },
    employee_id: { type: GraphQLInt }
  },
  resolve(_, args) {
    const { device_id, employee_id } = args;
    const updatedDevice = {
      device_employee: employee_id
    };
    return connection("devices")
      .where({ device_id })
      .update(updatedDevice)
      .returning("*")
      .then(([result]) => result);
  }
};

const updateDeviceInStock = {
  type: DeviceType,
  args: {
    device_id: { type: GraphQLInt },
    device_in_stock: { type: GraphQLBoolean }
  },
  resolve(_, args) {
    const { device_id, device_in_stock } = args;
    const updatedDevice = {
      device_in_stock
    };
    return connection("devices")
      .where({ device_id })
      .update(updatedDevice)
      .returning("*")
      .then(([result]) => result);
  }
};

module.exports = {
  addDeviceType,
  addBrand,
  addOperatingSystem,
  addDepartment,
  addEmployee,
  addDevice,
  updateDeviceEmployee,
  updateDeviceInStock
};
