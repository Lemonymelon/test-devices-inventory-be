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
const {
  DeviceTypeType,
  DepartmentType,
  DeviceType,
  OperatingSystemType,
  EmployeeType,
  BrandType
} = require("./types");
const connection = require("../db/connection");
const { checkArgumentDataType } = require("../errors");

const deviceType = {
  type: new GraphQLList(DeviceTypeType),
  args: { type_id: { type: GraphQLID } },
  resolve(_, args) {
    const { type_id } = args;
    return connection
      .select("*")
      .from("device_types")
      .where(builder => {
        if (type_id) {
          return builder.where({ type_id });
        }
      })
      .catch(err => {
        if (type_id) checkArgumentDataType(type_id, "integer");
        throw new Error("could not find type");
      });
  }
};

const brand = {
  type: new GraphQLList(BrandType),
  args: { brand_id: { type: GraphQLID } },
  resolve(_, args) {
    const { brand_id } = args;
    return connection
      .select("*")
      .from("brands")
      .where(builder => {
        if (brand_id) {
          return builder.where({ brand_id });
        }
      })
      .catch(err => {
        if (brand_id) checkArgumentDataType(brand_id, "integer");

        throw new Error("could not find brand");
      });
  }
};

const operatingSystem = {
  type: new GraphQLList(OperatingSystemType),
  args: { operating_system_id: { type: GraphQLID } },
  resolve(_, args) {
    const { operating_system_id } = args;
    return connection
      .select("*")
      .from("operating_systems")
      .where(builder => {
        if (operating_system_id) {
          return builder.where({ operating_system_id });
        }
      })
      .catch(err => {
        if (operating_system_id)
          checkArgumentDataType(operating_system_id, "integer");
        throw new Error("could not find OS");
      });
  }
};

const department = {
  type: new GraphQLList(DepartmentType),
  args: { department_id: { type: GraphQLID } },
  resolve(_, args) {
    const { department_id } = args;
    return connection
      .select("*")
      .from("departments")
      .where(builder => {
        if (department_id) {
          return builder.where({ department_id });
        }
      })
      .catch(err => {
        if (department_id) checkArgumentDataType(department_id, "integer");
        throw new Error("could not find department");
      });
  }
};

const employee = {
  type: new GraphQLList(EmployeeType),
  args: { employee_id: { type: GraphQLID } },
  resolve(_, args) {
    const { employee_id } = args;
    return connection
      .select("*")
      .from("employees")
      .innerJoin(
        "departments",
        "employees.employee_department",
        "departments.department_id"
      )
      .where(builder => {
        if (employee_id) {
          return builder.where({ employee_id });
        }
      })
      .catch(err => {
        throw new Error("could not find employee");
      });
  }
};

const device = {
  type: new GraphQLList(DeviceType),
  args: { device_id: { type: GraphQLID } },
  resolve(_, args) {
    const { device_id } = args;
    return connection
      .select("*")
      .from("devices")
      .innerJoin("brands", "devices.device_brand", "=", "brands.brand_id")
      .innerJoin(
        "device_types",
        "devices.device_type",
        "=",
        "device_types.type_id"
      )
      .innerJoin(
        "operating_systems",
        "devices.device_operating_system",
        "=",
        "operating_systems.operating_system_id"
      )
      .leftJoin(
        "employees",
        "devices.device_employee",
        "=",
        "employees.employee_id"
      )
      .where(builder => {
        if (device_id) return builder.where({ device_id });
      })
      .catch(err => {
        console.log(err);
        throw new Error("could not find device");
      });

    return connection
      .select("*")
      .from("devices")
      .catch(err => {
        console.log(err);
        throw new Error("could not find device");
      });
  }
};

module.exports = {
  deviceType,
  device,
  employee,
  operatingSystem,
  brand,
  department
};
