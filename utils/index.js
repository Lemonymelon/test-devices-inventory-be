exports.formatTypesData = typesData => {
  return typesData.map(({ name }) => ({ type_name: name }));
};

exports.formatBrandsData = brandsData => {
  return brandsData.map(({ name }) => ({ brand_name: name }));
};

exports.formatOSData = OSData => {
  return OSData.map(({ name, family, build }) => ({
    operating_system_name: name,
    operating_system_producer: family,
    operating_system_build: build
  }));
};

exports.formatDeptsData = deptsData => {
  return deptsData.map(({ name }) => ({ department_name: name }));
};

exports.formatEmployeesData = employeesData => {
  return employeesData.map(({ forename, surname, department }) => ({
    employee_forename: forename,
    employee_surname: surname,
    employee_department: department
  }));
};

exports.formatDevicesData = devicesData => {
  return devicesData.map(
    ({ deviceType, brand, OS, inStock, employee, ETR }) => ({
      device_type: deviceType,
      device_brand: brand,
      device_operating_system: OS,
      device_in_stock: inStock,
      device_employee: employee,
      device_estimated_time_of_return: ETR
    })
  );
};
